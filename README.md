# School ERP Frontend — Project Structure & Wiring

Frontend demo for a multi-role School ERP SPA (`schoolerp-front`).  
Most features use local mock data (`*Data.js`); there is no live backend API client in this repo.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | React 19 |
| Bundler | Vite 8 + React Compiler (Babel) |
| Routing | `react-router-dom` 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Icons | `lucide-react` |
| Charts / maps | `echarts`, `react-leaflet` / `leaflet` |
| Dates | `date-fns`, `react-datepicker` |
| QR | `html5-qrcode` |
| Deploy | Vercel SPA rewrite (`vercel.json`) |

**Scripts:** `npm run dev` · `npm run build` · `npm run lint` · `npm run preview`

---

## High-level architecture

```
index.html
    └── src/main.jsx
            ├── BrowserRouter
            └── AuthProvider (sessionStorage)
                    └── App.jsx  ← role + path gate
                            ├── AuthLayout          (/select-profile, /signin, /signup)
                            └── <Role>Layout        (sidebar + header + breadcrumb)
                                    └── <Role>Routes  (page components under Pages/)
```

**Core idea:** one authenticated role → one URL prefix → one layout → one route tree → matching sidebar + page titles.

---

## Repository layout

```
school-erp-demo/
├── index.html
├── package.json
├── vite.config.js          # React + Tailwind + React Compiler
├── vercel.json             # SPA fallback rewrite
├── eslint.config.js
├── README.md
├── CODEX_PROJECT_MEMORY.md # AI handoff notes
└── src/
    ├── main.jsx            # App bootstrap
    ├── App.jsx             # Auth + role layout switchboard
    ├── App.css
    ├── index.css           # Tailwind + font theme tokens
    ├── assets/images/      # Logos, profile icons, static media
    ├── context/            # Global React context
    ├── Layout/             # Per-role shell (chrome)
    ├── Routes/             # Per-role <Routes> trees
    ├── Pages/              # Feature screens by role/domain
    └── Common/             # Shared UI, nav config, cross-role features
```

---

## Bootstrap & wiring

### 1. Entry — `src/main.jsx`

```jsx
createRoot(...).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
```

### 2. Auth — `src/context/AuthContext.jsx`

| Export | Purpose |
|--------|---------|
| `ROLES` | String role IDs (`superadmin`, `admin`, `teacher`, …) |
| `FAKE_CREDENTIALS` | Demo emails per role |
| `ROLE_HOME_PATHS` | Default landing URL after login |
| `login` / `logout` | Fake OTP login (6-digit OTP required; email must match role) |
| `useAuth()` | `{ isAuthenticated, role, pendingRole, setPendingRole, login, logout }` |

- Session key: `sessionStorage` → `schoolerp_auth`
- Admin users created in Super Admin can also sign in (via `adminUsersData`)
- Legacy `vandriver` role is normalized to `driver`

### 3. App gate — `src/App.jsx`

Order of decisions:

1. **Auth routes** (`/select-profile`, `/signin`, `/signup`) → `AuthLayout` (or redirect home if already logged in)
2. **Not authenticated** → `/select-profile`
3. **Legacy redirects** (e.g. `/van-driver` → `/driver`)
4. **By role** → require matching path prefix; otherwise redirect to `ROLE_HOME_PATHS[role]`
5. Render the matching `*Layout`

| Role | Path prefix | Layout |
|------|-------------|--------|
| Super Admin | `/super-admin` | `SuperAdminLayout` |
| Admin | `/admin` | `AdminLayout` |
| Student | `/student` | `StudentLayout` |
| Parent | `/parent` | `ParentLayout` |
| Librarian | `/librarian` | `LibrarianLayout` |
| PRM (Front Office) | `/front-office` | `PRMLayout` |
| Gate Keeper | `/gate-keeper` | `GateKeeperLayout` |
| Gate Keeper Manager | `/gatekeeper-manager` | `GateKeeperManagerLayout` |
| Director | `/director` | `DirectorLayout` |
| Principal | `/principal` | `PrincipalLayout` |
| Teacher | `/teacher` | `TeacherLayout` |
| Coordinator | `/coordinator` | `CoordinatorLayout` |
| Canteen Manager | `/canteen-manager` | `CanteenManagerLayout` |
| IT Support Manager | `/it-support-manager` | `ITSupportManagerLayout` |
| Stationery Store Manager | `/stationery-store-manager` | `StationeryStoreManagerLayout` |
| Housekeeping Manager | `/housekeeping-manager` | `HousekeepingManagerLayout` |
| Transport Manager | `/transport-manager` | `TransportManagerLayout` |
| Driver | `/driver` | `DriverLayout` |
| Joint Director | `/joint-director` | `JointDirectorLayout` |
| Joint Director Assistant | `/joint-director-assistant` | `JointDirectorAssistantLayout` |
| Joint Director Audit | `/joint-director-audit` | `JointDirectorAuditLayout` |
| Process Auditor | `/process-auditor` | `ProcessAuditorLayout` |
| Quality Auditor | `/quality-auditor` | `QualityAuditorLayout` |
| HR | `/hr` | `HRLayout` |
| Account Head | `/account-head` | `AccountHeadLayout` |

Joint Director checks exclude `/joint-director-assistant` and `/joint-director-audit` so those roles keep their own shells.

---

## Login flow

```
/select-profile  →  setPendingRole(role)  →  /signin
                         ↓
              AuthContext.login(email, otp, pendingRole)
                         ↓
              sessionStorage + Navigate to ROLE_HOME_PATHS[role]
```

Supporting files:

- `src/Pages/Authentication/SelectProfile.jsx` — profile picker UI
- `src/Pages/Authentication/SignIn.jsx` / `SignUp.jsx`
- `src/Pages/Authentication/profileOptions.js` — labels + images per role
- `src/Pages/Authentication/roleModuleConfig.js` — groups roles into Academics / Operations / Audit / Finance modules on the select screen
- `src/Layout/AuthLayout.jsx` — maps pathname → SignIn / SignUp / SelectProfile

---

## Layout pattern (every role)

Typical shell (`AdminLayout`, `TeacherLayout`, etc.):

```
┌─────────────────────────────────────────────┐
│ CommonSidebar (path → nav links)            │
│ CommonHeader  (path → page title)           │
│ ┌─────────────────────────────────────────┐ │
│ │ CommonBreadcrumb                        │ │
│ │ <Role>Routes  → page components         │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

- Sidebar collapse: local layout state; auto-hides below `lg` (1024px)
- Mobile: backdrop overlay closes the sidebar

### Student & Parent extras

| Context | Used by | Purpose |
|---------|---------|---------|
| `ActiveStudentContext` | Student + Parent layouts | Active student profile + `routePrefix` / `portalMode` |
| `ParentChildContext` | Parent layout | Child selection; persists active child in `sessionStorage` |

Parent must pick a child (`/parent/select-child`) before the main portal chrome loads. Parent then reuses student-style portal routes under `/parent/...`.

---

## Routes

Each file under `src/Routes/` declares `<Routes>` / `<Route>` for that role’s pages.

Example: `AdminLayout` → `AdminRoutes.jsx` → pages under `src/Pages/Admin/...`

Shared feature route helpers (injected into multiple role trees), e.g.:

- `src/Common/TaskManagement/TaskManagementRoutes.jsx` — `basePath`-prefixed task routes
- Similar reuse for Communication, Activities, Escalation, Lesson Plan, etc. via Common components

---

## Navigation, titles, breadcrumbs (must stay in sync)

When adding a screen, wire **all four**:

| Piece | File | Role |
|-------|------|------|
| Route | `src/Routes/<Role>Routes.jsx` | URL → component |
| Sidebar | `src/Common/CommonSidebar/Components/sidebarLinks.js` | Nav item / sublink |
| Page title | `src/Common/CommonHeader/Components/TitleMappings.jsx` | Header `h1` via `getPageTitle(pathname)` |
| Breadcrumb | `src/Common/CommonBreadcrumb/breadcrumbMappings` (used by `CommonBreadcrumb`) | Trail under header |

### How sidebar picks links

`CommonSidebar` selects the link array from the **current pathname prefix** (not from auth role directly). Admin uses `getFilteredAdminSidebarLinks()` so Super-Admin–created admins can have filtered menus.

Exports include: `superAdminSidebarLinks`, `adminSidebarLinks`, `teacherSidebarLinks`, … and a `roleBasedSidebarLinks` lookup map.  
More detail: `src/Common/CommonSidebar/Components/sidebarlinks.md`.

---

## Pages by role

Pages live under `src/Pages/<RoleOrDomain>/...`. Typical feature folders:

| Area | Roles / folders | Example modules |
|------|-----------------|-----------------|
| Governance | SuperAdmin, Director, Principal | Approvals, User Creation, Star Ratings, Task Management |
| Administration | Admin | Front Office lists, Class, Subjects, Library, Transport, Expenses, Documents |
| Front office ops | FrontOffice (PRM) | Admission Enquiry, Gate Pass, TC Request, Student Transfer |
| Academics | Teacher, Coordinator | Assigned Class, Lesson Plans, Mark Entry, Unit Tests, Deliverables |
| Student / Parent | Student, Parent | Class, Results, Library, Payments, Transport, TC |
| Operations | Canteen, IT, Stationery, Housekeeping, Transport, Driver | Inventory, Tickets, Vehicles, Duties |
| Audit | JointDirectorAudit, ProcessAuditor, QualityAuditor | Audit config/execution, Observations, RCA, Findings |
| People / money | HR, AccountHead | Recruitment, Leave, Fees, Wallets, Accounting |
| Access control | Gatekeeper, GateKeeperManager | Duty, Gate Pass, Incidents |
| Leadership ops | JointDirector, JointDirectorAssistant | Employees, Assets, Meetings, Escalations |

Mock data convention: colocated `*Data.js` / `*Config.js` next to feature pages.

---

## Shared `src/Common` modules

Reusable cross-role building blocks:

| Module | What it provides |
|--------|------------------|
| `CommonSidebar` / `CommonHeader` / `CommonBreadcrumb` | App chrome |
| `CommonComponents` / `CommonIcons` | Shared UI primitives |
| `TaskManagement` | Assign / my tasks pages + route helper |
| `Communication` | Inbox helpers, legacy DM redirects |
| `EscalationManagement` | Shared escalation list/pages |
| `LessonPlanApproval` | Shared lesson-plan approval UI |
| `MarkEntryApproval` | Shared mark-entry approval |
| `MeetingsCalendar` | Calendar / time grid |
| `AcademicCalendar` | Shared calendar views |
| `Activities` | Activity list/add forms |
| `StudentAllocation` | Allocation detail flows |
| `StudentStarRatings` | Ratings UI |
| `Notifications` | Shared notification list/filter |
| `EmployeeManagement` | Shared employee views |
| `AdminLeaveRequest` / `GateKeeperLeaveRequest` / `TcRequest` | Role-bridged leave / TC pieces |

Role-specific pages often **compose** these Common components rather than duplicating full screens.

---

## Context summary

| File | Scope |
|------|--------|
| `context/AuthContext.jsx` | App-wide auth (wrapped in `main.jsx`) |
| `context/ActiveStudentContext.jsx` | Student portal identity (Student/Parent layouts) |
| `context/ParentChildContext.jsx` | Parent ↔ child mapping & persistence |

---

## Data & state model (demo)

- **No axios/fetch API layer** for core ERP flows — UI reads/writes mock modules and local React state.
- Some features persist demo records in `localStorage` / `sessionStorage` with feature-specific keys.
- File uploads are generally UI-only (metadata in state), not uploaded to a server.
- Charts/maps/QR run entirely in the browser against mock or local inputs.

---

## Styling

- Global: `src/index.css` — `@import "tailwindcss"` and `@theme` fonts (`Inter`, `Poppins`)
- App extras: `src/App.css`
- Layouts use utility classes heavily (`bg-[#f9f9f9]`, fixed sidebar widths `90px` / `280px`, etc.)

---

## Adding a new page (checklist)

1. Create the page under `src/Pages/<Role>/...`
2. Register a `<Route>` in `src/Routes/<Role>Routes.jsx`
3. Add a sidebar entry in the correct `*SidebarLinks` array in `sidebarLinks.js`
4. Add a title in `TitleMappings.jsx` (`singleTitleMapping` or `dynamicTitleMatchers`)
5. Add breadcrumb mapping if the trail should show under the header
6. Confirm `App.jsx` already maps the role → layout and path prefix (only needed for **new roles**)

---

## Adding a new role (checklist)

1. Add constant to `ROLES`, credentials, and `ROLE_HOME_PATHS` in `AuthContext.jsx`
2. Add profile metadata in `profileOptions.js` (+ module group in `roleModuleConfig.js` if needed)
3. Create `src/Layout/<Role>Layout.jsx` and `src/Routes/<Role>Routes.jsx`
4. Add role branch in `App.jsx`
5. Export `*SidebarLinks` and wire prefix selection in `CommonSidebar.jsx`
6. Add title/breadcrumb mappings for new paths
7. Create `src/Pages/<Role>/...` feature folders

---

## Related docs

- `README.md` — Vite/React template notes
- `CODEX_PROJECT_MEMORY.md` — longer AI/context handoff
- `src/Common/CommonSidebar/Components/sidebarlinks.md` — sidebar config reference

---

*Generated from the repository structure. Update this file when roles, prefixes, or the layout/routing pattern change.*
