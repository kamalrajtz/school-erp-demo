# QMIS School ERP — Frontend Demo

Role-based School ERP SPA (`schoolerp-front`) for Queen Mira International School.

Most features use local mock data (`*Data.js`). There is **no live backend API** in this repo. Auth, permissions, and persistence are client-side only (`sessionStorage` / `localStorage`).

---

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |

Deployed as a static SPA on Vercel (`vercel.json` rewrites all paths to `/`).

---

## Demo login

1. Choose a profile on `/select-profile` (grouped as Super Admin, Admin, Academics, Operations, Audit, Finance).
2. Sign in on `/signin` with that role’s demo email.
3. Enter **any 6-digit OTP** (contents are not checked against a server).

Default emails follow `{role}@school.com`, for example `superadmin@school.com`, `admin@school.com`, `teacher@school.com`, `parent@school.com`. The full map is `FAKE_CREDENTIALS` in `src/context/AuthContext.jsx`.

Additional demo accounts can also sign in:

| Source | Who can log in |
|--------|----------------|
| Super Admin → User Creation | Created **Admin** users (Active) |
| Admin → RBAC → User Creation | Created Principal, PRM, Teacher, Coordinator, Librarian, Gate Keeper, Gate Keeper Manager |
| Admission enrollment | Created **Parent** accounts |

This is frontend demo auth, not production security.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | React 19 |
| Bundler | Vite 8 + React Compiler (Babel) |
| Routing | `react-router-dom` 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Icons | `lucide-react` |
| Charts / maps | `echarts` / `echarts-for-react`, `react-leaflet` / `leaflet` |
| Dates | `date-fns`, `react-datepicker` |
| Selects | `react-select` |
| Toasts | `react-toastify` |
| QR | `html5-qrcode` |
| Deploy | Vercel SPA rewrite (`vercel.json`) |
| License | Apache 2.0 |

JavaScript/JSX only (no TypeScript in app source).

---

## High-level architecture

```
index.html
    └── src/main.jsx
            ├── one-time demo wipes + leave-request migrations
            ├── BrowserRouter
            └── AuthProvider (sessionStorage)
                    ├── App.jsx          ← role + path gate
                    └── ToastContainer
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
├── LICENSE                 # Apache 2.0
├── README.md
├── CODEX_PROJECT_MEMORY.md # AI handoff notes
└── src/
    ├── main.jsx            # App bootstrap, demo wipes, toast host
    ├── App.jsx             # Auth + role layout switchboard
    ├── App.css
    ├── index.css           # Tailwind + font theme tokens
    ├── constants/          # ROLES, portal logo
    ├── assets/images/      # Logos, profile icons, static media
    ├── context/            # Auth, student, parent-child
    ├── Layout/             # Per-role shell (chrome)
    ├── Routes/             # Per-role <Routes> trees
    ├── Pages/              # Feature screens by role/domain
    └── Common/             # Shared UI, nav config, cross-role features
```

---

## Bootstrap & wiring

### 1. Entry — `src/main.jsx`

On load, before React mounts:

1. **One-time localStorage wipes** reset selected demo modules to a blank slate (flagged so they run once per browser).
2. **Leave-request migrations** move legacy/session records into the current localStorage shape.

Then:

```jsx
createRoot(...).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2500} newestOnTop closeOnClick />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
```

| Wipe | Flag key | Clears |
|------|----------|--------|
| Academics | `schoolerp-academics-wipe-v1` | Lesson plans, mark entry, deliverables, star ratings, transfers |
| Front office passes | `schoolerp-front-office-pass-wipe-v1` | Material / goods received pass records and counters |
| Activities | `schoolerp-activities-wipe-v1` | Activity demo records |
| Announcements | `schoolerp-announcements-wipe-v1` | Announcement demo records |
| Leave requests | `schoolerp-leave-requests-wipe-v1` | Leave-request demo records |
| Task management | `schoolerp-task-management-wipe-v1` | Task demo records |
| Escalations | `schoolerp-escalation-management-wipe-v2` | Escalation demo records |
| Documents | `schoolerp-documents-wipe-v1` | Admin student/employee document records and employee document types |

To re-run a wipe, remove that flag (and the related keys) from `localStorage`.

### 2. Auth — `src/context/AuthContext.jsx`

Role IDs live in `src/constants/roles.js` and are re-exported from AuthContext.

| Export | Purpose |
|--------|---------|
| `ROLES` | String role IDs (`superadmin`, `admin`, `teacher`, …) |
| `FAKE_CREDENTIALS` | Demo emails per role |
| `ROLE_HOME_PATHS` | Default landing URL after login |
| `login` / `logout` | Fake OTP login (6-digit OTP required; email must match role or a created account) |
| `useAuth()` | `{ isAuthenticated, role, email, name, pendingRole, setPendingRole, login, logout }` |

- Session key: `sessionStorage` → `schoolerp_auth` (role, email, name)
- Super Admin–created admins can sign in as Admin (`adminUsersData`)
- Admin-created staff can sign in for their assigned role (`createdUsersData`)
- Parents created during admission enrollment can sign in (`parentAccountsData`)
- Legacy `vandriver` role is normalized to `driver`

### 3. App gate — `src/App.jsx`

Order of decisions:

1. **Auth routes** (`/select-profile`, `/signin`, `/signup`) → `AuthLayout` (or redirect home if already logged in)
2. **Not authenticated** → `/select-profile`
3. **Legacy redirects** (`/van-driver` → `/driver`, plus old admin van-driver list/add/view URLs)
4. **By role** → require matching path prefix; otherwise redirect to `ROLE_HOME_PATHS[role]`
5. Render the matching `*Layout`

| Role | Path prefix | Layout | Home |
|------|-------------|--------|------|
| Super Admin | `/super-admin` | `SuperAdminLayout` | `/super-admin/dashboard` |
| Admin | `/admin` | `AdminLayout` | `/admin/front-office/admission-list` |
| Student | `/student` | `StudentLayout` | `/student/class/online-class` |
| Parent | `/parent` | `ParentLayout` | `/parent/select-child` |
| Librarian | `/librarian` | `LibrarianLayout` | `/librarian/book-management/book-list` |
| PRM (Front Office) | `/front-office` | `PRMLayout` | `/front-office/admission-enquiry` |
| Gate Keeper | `/gate-keeper` | `GateKeeperLayout` | `/gate-keeper/dashboard` |
| Gate Keeper Manager | `/gatekeeper-manager` | `GateKeeperManagerLayout` | `/gatekeeper-manager/assign-duty-list` |
| Director | `/director` | `DirectorLayout` | `/director/broadcast` |
| Principal | `/principal` | `PrincipalLayout` | `/principal/task-management` |
| Teacher | `/teacher` | `TeacherLayout` | `/teacher/dashboard` |
| Coordinator | `/coordinator` | `CoordinatorLayout` | `/coordinator/dashboard` |
| Canteen Manager | `/canteen-manager` | `CanteenManagerLayout` | `/canteen-manager/dashboard` |
| IT Support Manager | `/it-support-manager` | `ITSupportManagerLayout` | `/it-support-manager/dashboard` |
| Stationery Store Manager | `/stationery-store-manager` | `StationeryStoreManagerLayout` | `/stationery-store-manager/dashboard` |
| Housekeeping Manager | `/housekeeping-manager` | `HousekeepingManagerLayout` | `/housekeeping-manager/dashboard` |
| Transport Manager | `/transport-manager` | `TransportManagerLayout` | `/transport-manager/dashboard` |
| Driver | `/driver` | `DriverLayout` | `/driver/vehicle-management/vehicle-details` |
| Joint Director | `/joint-director` | `JointDirectorLayout` | `/joint-director/dashboard` |
| Joint Director Assistant | `/joint-director-assistant` | `JointDirectorAssistantLayout` | `/joint-director-assistant/dashboard` |
| Joint Director Audit | `/joint-director-audit` | `JointDirectorAuditLayout` | `/joint-director-audit/dashboard` |
| Process Auditor | `/process-auditor` | `ProcessAuditorLayout` | `/process-auditor/dashboard` |
| Quality Auditor | `/quality-auditor` | `QualityAuditorLayout` | `/quality-auditor/dashboard` |
| HR | `/hr` | `HRLayout` | `/hr/dashboard` |
| Account Head | `/account-head` | `AccountHeadLayout` | `/account-head/dashboard` |

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
- `src/Pages/Authentication/roleModuleConfig.js` — groups roles into Academics / Operations / Audit / Finance on the select screen
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
- Portal logos: `src/constants/portalLogo.js`

### Student & Parent extras

| Context | Used by | Purpose |
|---------|---------|---------|
| `ActiveStudentContext` | Student + Parent layouts | Active student profile + `routePrefix` / `portalMode` |
| `ParentChildContext` | Parent layout | Child selection; persists active child in `sessionStorage` |

Parent must pick a child (`/parent/select-child`) before the main portal chrome loads.

Student and Parent then share `src/Routes/StudentPortalRoutes.jsx`. Parent injects a different `routePrefix` (`/parent`), dashboard, and a few feature flags (for example star ratings are omitted). Deliverable screens reuse teacher components in student/parent view mode.

---

## Routes

Each file under `src/Routes/` declares `<Routes>` / `<Route>` for that role’s pages.

Example: `AdminLayout` → `AdminRoutes.jsx` → pages under `src/Pages/Admin/...`

PRM uses `FrontOfficeRoutes.jsx` (path prefix `/front-office`). Student uses `StudentRoutes.jsx`, which is a thin wrapper around `StudentPortalRoutes`.

Shared feature route helpers (injected into multiple role trees), for example:

- `src/Common/TaskManagement/TaskManagementRoutes.jsx` — `basePath`-prefixed task routes
- `src/Common/StudentStarRatings/StudentStarRatingsRoutes.jsx`
- Similar reuse for Communication, Activities, Escalation, Lesson Plan, Leave Request, Announcements, etc. via Common components

---

## Navigation, titles, breadcrumbs (must stay in sync)

When adding a screen, wire **all four**:

| Piece | File | Role |
|-------|------|------|
| Route | `src/Routes/<Role>Routes.jsx` | URL → component |
| Sidebar | `src/Common/CommonSidebar/Components/sidebarLinks.js` | Nav item / sublink |
| Page title | `src/Common/CommonHeader/Components/TitleMappings.jsx` | Header `h1` via `getPageTitle(pathname)` |
| Breadcrumb | `src/Common/CommonBreadcrumb/breadcrumbMappings.js` | Trail under header |

### How sidebar picks links

`CommonSidebar` selects the link array from the **current pathname prefix** (not from auth role directly). Admin uses `getFilteredAdminSidebarLinks()` so Super-Admin–created admins can have filtered menus.

Exports include: `superAdminSidebarLinks`, `adminSidebarLinks`, `teacherSidebarLinks`, … and a `roleBasedSidebarLinks` lookup map.

More detail: `src/Common/CommonSidebar/Components/sidebarlinks.md`.

---

## Pages by role

Pages live under `src/Pages/<RoleOrDomain>/...`. Typical feature folders:

| Area | Roles / folders | Example modules |
|------|-----------------|-----------------|
| Governance | SuperAdmin, Director, Principal | Approvals, User Creation, Star Ratings, Task Management, Audit/Finance overviews |
| Administration | Admin | Admissions, User Database, Class, Attendance, Activities, **Documents**, Leave, Communication, **RBAC** |
| Front office ops | FrontOffice (PRM) | Admission Enquiry, Gate Pass, TC Request, Student Transfer |
| Academics | Teacher, Coordinator | Assigned Class, Lesson Plans, Mark Entry, Unit Tests, Deliverables |
| Student / Parent | Student, Parent | Class, Results, Library, Payments, Transport, TC, Deliverables |
| Operations | Canteen, IT, Stationery, Housekeeping, Transport, Driver | Inventory, Tickets, Vehicles, Duties |
| Audit | JointDirectorAudit, ProcessAuditor, QualityAuditor | Audit config/execution, Observations, RCA, Findings |
| People / money | HR, AccountHead | Recruitment, Leave, Fees, Wallets, Accounting |
| Access control | Gatekeeper, GateKeeperManager | Duty, Gate Pass, Incidents |
| Leadership ops | JointDirector, JointDirectorAssistant | Employees, Assets, Meetings, Escalations |

Mock data convention: colocated `*Data.js` / `*Config.js` next to feature pages.

### Admin Documents

Student and employee document lists under `/admin/documents/...`. Records persist in `localStorage` (`schoolErpAdminStudentDocuments`, `schoolErpAdminEmployeeDocuments`, `schoolErpAdminEmployeeDocumentTypes`). The documents wipe clears those keys once so the demo starts empty.

### Admin RBAC

- **User Creation** — create staff for creatable roles; they can then sign in with that email + any 6-digit OTP
- **Roles** — module permission matrix stored in `localStorage` (`schoolerp-role-permissions`)

---

## Shared `src/Common` modules

Reusable cross-role building blocks:

| Module | What it provides |
|--------|------------------|
| `CommonSidebar` / `CommonHeader` / `CommonBreadcrumb` | App chrome |
| `CommonComponents` / `CommonIcons` | Shared UI primitives (export modal, request modals, selects) |
| `RBAC` | Created users, role permissions, user-creation form, academics catalog |
| `ParentAccounts` | Parent accounts created during admission; used at parent login |
| `UserDatabase` / `StudentDatabase` / `EmployeeDatabase` | Shared student/employee list and detail views |
| `TaskManagement` | Assign / my tasks pages + route helper |
| `LeaveRequest` | My / received leave lists and shared persistence |
| `Announcement` | Shared announcement list/add/view |
| `Activities` | Activity list/add forms |
| `Communication` | Inbox helpers, legacy DM redirects |
| `EscalationManagement` | Shared escalation list/pages |
| `LessonPlanApproval` | Shared lesson-plan approval UI |
| `MarkEntryApproval` | Shared mark-entry approval |
| `MeetingsCalendar` | Calendar / time grid |
| `AcademicCalendar` | Shared calendar views |
| `ClassTimetable` | Shared timetable grid |
| `StudentAllocation` | Allocation detail flows |
| `StudentStarRatings` | Ratings UI + route helper |
| `Notifications` | Shared notification list/filter |
| `EmployeeManagement` | Shared employee / driver views |
| `Documents` | One-time student/employee document wipe |
| `FrontOffice` | One-time gate-pass wipe |
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
- Toasts (`react-toastify`) are used for create/save confirmations in newer flows (RBAC, documents, and similar).

Do not invent REST endpoints. If a backend is added later, introduce a dedicated service layer and document real contracts separately.

---

## Styling

- Global: `src/index.css` — `@import "tailwindcss"` and `@theme` fonts (`Inter`, `Poppins`)
- App extras: `src/App.css`
- Layouts use utility classes heavily (`bg-[#f9f9f9]`, fixed sidebar widths `90px` / `280px`, primary `#515DEF`)

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

1. Add the constant to `ROLES` in `src/constants/roles.js`
2. Add credentials and `ROLE_HOME_PATHS` in `AuthContext.jsx`
3. Add profile metadata in `profileOptions.js` (+ module group in `roleModuleConfig.js` if needed)
4. Create `src/Layout/<Role>Layout.jsx` and `src/Routes/<Role>Routes.jsx`
5. Add role branch in `App.jsx` (watch prefix overlaps such as `/joint-director*`)
6. Export `*SidebarLinks` and wire prefix selection in `CommonSidebar.jsx`
7. Add title/breadcrumb mappings for new paths
8. Create `src/Pages/<Role>/...` feature folders
9. If Admin should be able to create this role, extend `CREATABLE_ROLE_OPTIONS` in `createdUsersData.js`

---

## Related docs

| File | Contents |
|------|----------|
| `CODEX_PROJECT_MEMORY.md` | Longer AI/context handoff (verify against current code; some sections may lag) |
| `src/Common/CommonSidebar/Components/sidebarlinks.md` | Sidebar config reference |
| `src/Pages/SuperAdmin/SUPER_ADMIN.md` | Super Admin module notes |
| `src/Pages/AccountHead/ACCOUNT_HEAD.md` | Finance module notes (partly stale vs current sidebar) |
| `src/Pages/JointDirectorAudit/JOINT_DIRECTOR_AUDIT.md` | Audit module notes (partly stale vs current routes) |
| `src/Common/LessonPlanApproval/LESSON_PLAN_STRUCTURE.md` | Lesson-plan UI structure |
| `Audit & Compliance Structure.md` / `Audit_Compliance_Module.md` | Audit design notes |
| `ERP_DEMO_PROJECT_STRUCTURE.md` | Older copy of this structure doc |

Prefer the live files (`App.jsx`, `AuthContext.jsx`, `src/Routes/*`, `sidebarLinks.js`, `TitleMappings.jsx`) over module markdown when they disagree.

---

*Update this file when roles, prefixes, bootstrap wipes, or the layout/routing pattern change.*
