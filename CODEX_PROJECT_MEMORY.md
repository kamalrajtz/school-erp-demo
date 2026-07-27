# CODEX Project Memory

Generated from the repository on 2026-07-27.

This file is a concise project/context handoff for another AI assistant. It summarizes confirmed repository facts and marks unknowns explicitly. It intentionally does not include secrets, mock passwords, tokens, or large source dumps.

## 1. Project Overview

- Project name: `schoolerp-front`
- Product name/purpose: frontend demo for a complete School ERP platform.
- Application type: role-based school administration SPA.
- Current status: frontend demo/prototype. Most features use local mock data from `*Data.js` files. There is no confirmed backend API integration in this repository.
- Main capability areas: admissions/front office, academics, student portal, teacher portal, library, transport, finance/account head, HR, canteen, stationery store, housekeeping, IT support, gatekeeping/security, director/principal governance, joint director operations, joint director audit, process audit, quality audit, communication, escalation, meetings/calendar, announcements.

## 2. Technology Stack

- Frontend framework: React 19 with Vite.
- Routing: `react-router-dom` 7.
- Styling: Tailwind CSS 4 utility classes, with app-level CSS in `src/App.css` and theme fonts in `src/index.css`.
- Charts/maps/date libraries: `echarts`, `echarts-for-react`, `leaflet`, `react-leaflet`, `react-datepicker`, `date-fns`.
- Icons: `lucide-react`, plus a small custom icon file in `src/Common/CommonIcons/CommonIcons.jsx`.
- QR support: `html5-qrcode`.
- Notifications package: `react-toastify` is installed, but live usage was not confirmed in the inspected files.
- Backend framework: Unknown / not present.
- Database: Unknown / not present.
- Authentication: local demo auth in `src/context/AuthContext.jsx`; see section 3.
- Hosting/deployment: Vercel SPA rewrite configured in `vercel.json`.
- Important commands: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.

## 3. Architecture

- Entry point: `src/main.jsx` renders `App` inside `BrowserRouter` and `AuthProvider`.
- Top-level routing: `src/App.jsx` decides which role layout to render based on authenticated role and current path prefix.
- Layout pattern: each role has a `src/Layout/*Layout.jsx` that wraps `CommonSidebar`, `CommonHeader`, and the matching route component from `src/Routes`.
- Route structure: each major role has its own route file under `src/Routes`, for example `TeacherRoutes.jsx`, `StudentRoutes.jsx`, `AccountHeadRoutes.jsx`, and `JointDirectorAuditRoutes.jsx`.
- Pages: role-specific screens live under `src/Pages/<RoleOrDomain>/...`.
- Shared UI/data modules: reusable features live under `src/Common`, especially `AcademicCalendar`, `Communication`, `EscalationManagement`, `LessonPlanApproval`, `MeetingsCalendar`, `CommonSidebar`, `CommonHeader`, and common modals/components.
- Authentication flow: user selects a profile on `/select-profile`, then signs in on `/signin`. The login checks the selected role against mock role credentials and only validates that the OTP is present and exactly 6 digits. Auth state persists in `sessionStorage` under `schoolerp_auth`.
- Role guarding: `App.jsx` redirects authenticated users away from auth routes, redirects unauthenticated users to `/select-profile`, and prevents a role from navigating outside its configured path prefix.
- State/data flow: mostly React local state plus local mock data. Some modules persist demo records to `localStorage` with feature-specific keys.
- Frontend/backend communication: no confirmed HTTP API client, `fetch`, or `axios` integration was found in the inspected app flow. "APIs" in data files are demo labels or external placeholder links, not active backend calls.
- File/storage handling: file uploads are generally UI-only or stored as file metadata in local state/localStorage. No real file storage service is confirmed.

## 4. Repository Structure

- `src/main.jsx`: React root, router, auth provider.
- `src/App.jsx`: central auth and role-layout routing gate.
- `src/context/AuthContext.jsx`: role constants, home paths, mock login, session storage.
- `src/Layout/`: role shell layouts.
- `src/Routes/`: per-role route definitions and redirects.
- `src/Pages/`: role/domain pages and local module data.
- `src/Common/`: shared sidebar/header/breadcrumbs, calendars, communication, escalation, modals, employee management, lesson-plan approval.
- `src/assets/images/`: logos and demo profile/media assets.
- `src/Pages/AccountHead/ACCOUNT_HEAD.md`: existing finance module documentation.
- `src/Pages/JointDirectorAudit/JOINT_DIRECTOR_AUDIT.md`: existing audit module documentation. Note: current code has newer audit configuration and assignment routes beyond parts of this doc.
- `package.json`: scripts and dependencies.
- `vercel.json`: rewrites all paths to `/` for SPA routing.
- `dist/` and `node_modules/`: generated/install artifacts, ignored by git.

## 5. Modules & Features

- Authentication: profile selection, login, logout, role home redirects. Demo-only, no real password or server auth.
- Admin: front-office admissions, teacher/librarian/driver registration, student/employee attendance, class setup, subjects, library, student documents, transport records, exam details, expenses, notifications, announcements, task management, leave requests, calendar, communication, escalations.
- Front Office / PRM: admission enquiry/list, student/teacher/parent database, student transfer, student re-enrollment, student/material/goods gate passes, leave requests, communication, escalations, academic calendar.
- Student: online/extended classes, timetable, attendance, exam result, exam schedule, student deliverables, star ratings, library borrowed books, transport, hostel, payments, notifications, academic calendar, communication, escalations.
- Teacher: dashboard, attendance, class routine, extended/online classes, leave requests, lesson plan approval and "My Lesson Plan", unit tests, mark entry, deliverables, students/parents, books borrowed, notifications, announcements, calendar, communication, escalations.
- Principal: tasks, star ratings, examination/class timetables, user management, LMS/home fun views, teacher allocation, calendar, communication, escalations.
- Director: announcements, tasks, star ratings, timetable approvals, student allocation, user management, activities, LMS/home fun oversight, request approvals, calendar, communication, escalations, leave requests, lesson plan approvals.
- Library/Librarian: book management, issued books, members, reminders, calendar, communication, escalations.
- Gate Keeper and Gate Keeper Manager: gate pass/security workflows, duties, incidents, announcements, leave approval, communication, escalations.
- Transport Manager: driver, vehicle, route, route tracking, student transport, duty assignment, vehicle maintenance, request approvals, expenses, leave requests.
- Driver: vehicle details/documents/health, my duty, route details/stops, student attendance/history, fuel, maintenance, leave requests. Sidebar currently exposes a smaller subset than routes.
- Canteen Manager: dashboard, menu, inventory, orders, requests/approvals, reports, announcements.
- Stationery Store Manager: dashboard, inventory, issue/returns, requests/approvals, reports, announcements.
- Housekeeping Manager: dashboard, task management, inventory, requests/approvals, reports, announcements.
- IT Support Manager: dashboard, asset management, support tickets, requests/approvals, reports, announcements.
- HR: dashboard, employees/documents, recruitment, onboarding, attendance, leave, training, performance, reports.
- Joint Director: operations oversight for JD assistant, canteen/store/IT/transport/housekeeping/driver profiles, tasks, requests, escalations, meetings, assets/inventory, announcements.
- Joint Director Assistant: similar operations workspace for tasks, employee profiles, drivers, requests, escalations, meetings, assets/inventory, announcements.
- Joint Director Audit: audit dashboard, audit configuration, audit assignment, planning, monitoring, findings/compliance, reports, tasks, audit-team employee profiles, request approvals, escalations, meetings, announcements.
- Process Auditor and Quality Auditor: audit management, schedules, execute audit, history, observations, corrective actions, reports, placeholder communication.
- Communication: shared inbox/direct-message UI for several academic/admin roles; persists conversations per role in localStorage.
- Escalation Management: shared escalations across several roles with hierarchy config and 24-hour resolution SLA.
- Academic Calendar and Meetings Calendar: shared calendar UIs with role-specific seed data.

## 6. Roles & Permissions

Confirmed app roles from `AuthContext.jsx`:

- `admin`, `student`, `librarian`, `prm`, `gatekeeper`, `gatekeepermanager`, `director`, `principal`, `canteenmanager`, `itsupportmanager`, `stationerystoremanager`, `housekeepingmanager`, `transportmanager`, `teacher`, `jointdirector`, `jointdirectorassistant`, `jointdirectoraudit`, `processauditor`, `qualityauditor`, `hr`, `accounthead`, `driver`.

Confirmed access model:

- Each role is routed to a matching layout and path prefix. This is a frontend demo guard, not server-side authorization.
- Role-specific sidebar arrays in `src/Common/CommonSidebar/Components/sidebarLinks.js` define what each role can navigate to.
- `roleBasedSidebarLinks` also maps display role labels to sidebar arrays.
- Edit/delete actions often open "send request to Super Admin for approval" confirmation modals rather than performing true destructive changes.
- Finance settings include a role permission matrix, but only General and Payment Configuration settings tabs are currently wired. The documented finance permissions are: Finance Manager has full CRUD; Principal can view/approve many finance areas; Transport Manager can view/raise claims in transport finance; Cashier can collect/view fees; External Auditor can view.

Known escalation hierarchy:

- Student -> Teacher
- Teacher -> Co-ordinator
- Gate Keeper -> Gate Keeper Manager
- Gate Keeper Manager -> PRM / Front Office
- PRM / Front Office -> Principal
- Librarian -> Principal
- Principal -> Director of Academics
- Director of Academics -> Admin
- Admin -> Super Admin
- Super Admin is final escalation level.

Audit hierarchy:

- Admin -> Joint Director Audit -> HR Audit, Process Audit, Quality Audit teams.
- Audit escalations can go from audit executive to audit manager to Joint Director Audit, then optionally to Admin.

Unknown:

- Server-side role permissions, if any.
- Real create/edit/delete/approve/reject authorization rules outside the demo UI.

## 7. Business Rules

- Auth requires profile selection before sign-in. Login validates role-specific mock email and a 6-digit OTP. OTP contents are not validated against a server.
- `vandriver` is migrated to `driver` when reading stored auth.
- Role home paths are centralized in `ROLE_HOME_PATHS`; preserve this when adding roles or changing home pages.
- Common status badge colors are repeated across modules: Pending/Approved/Rejected, Active/In-Process/Completed, Open/In Review/Resolved/Closed.
- Shared escalation statuses: Open, In Review, Resolved, Closed. Received escalations use Open, In Review, Resolved. Resolution SLA is 24 hours from `escalatedAt` or escalation date.
- Lesson plans use IDs like `LP-001`; new lesson plans are Pending and On Track. Approving a lesson plan sets track status to Completed. Marking a plan done also sets Completed. Data persists in `localStorage` under `school-erp-lesson-plan-approvals`.
- Teacher deliverables:
  - Home Fun covers Assignment and Homework; statuses are Active, In-Process, Completed.
  - Home Fun IDs are generated as `HF-1001`, etc.; storage key is `teacher-home-fun-deliverables`.
  - Study Material IDs are `SM-1001`, etc.; storage key is `teacher-student-deliverables-study-materials`.
  - Sample Question IDs are `SQ-1001`, etc.; storage key is `teacher-student-deliverables-sample-questions`.
  - Student views reuse teacher deliverable list/detail pages with `viewMode="student"` and student route bases.
- Student Home Fun submissions persist in `localStorage` under `student-home-fun-submissions`. Late status is computed by comparing submission time with the due date.
- Teacher Mark Entry:
  - Academic years include `2026 - 2027` and `2025 - 2026`; terms are Term 1, Term 2, Term 3.
  - Exam max marks: Mid Term 100, Unit Test 50, Annual Examination 100, Pre-Board Examination 100.
  - Pass mark is 33%.
  - Grades: A+ >=90, A >=80, B+ >=70, B >=60, C >=50, D >=33, F below 33.
  - Absent entries clear obtained marks and count as complete.
  - Submit is blocked if pending marks remain. Saved/submitted sessions persist under `teacher-mark-entry-sessions`.
- Student Exam Schedule: shows only approved exam schedules for current hard-coded student class 10, section A, using teacher exam schedule data.
- Material Gate Pass:
  - Approval roles are Store Keeper, Security, Taken By, Principal, Authorized Signatory.
  - Overall status is Approved only when all approval names are filled; Partially Approved when some are filled; Pending when none are filled.
  - MGP numbers increment from localStorage counter `material-gate-pass-mgp-counter`.
- Process Audit execution:
  - Checklist responses use Yes, No, Error.
  - Yes passes; No/Error fail and count as findings.
  - Observation numbers are generated as `OBS-<year>-<5 digits>` from localStorage counter.
  - Audit stages: Draft, Assigned, In Progress, Submitted, Under Review, Approved, Closed.
  - Timeline stages: Assigned, Started, Saved Draft, Submitted, Verified, Closed.
- Quality Audit execution:
  - Uses 1-5 star ratings. 5 Excellent, 4 Good, 3 Average, 2 Improvement Required, 1 Critical Observation.
  - Ratings 4-5 pass, 3 partial, 1-2 fail/non-compliant.
  - Legacy Yes/No/Error responses are migrated to ratings.
- Joint Director and Joint Director Audit request approvals use `BUDGET_THRESHOLD = 75000` for financial request thresholding.
- Account Head approval rules include: expense claims up to INR 10,000 handled by Finance Manager; INR 10,000-50,000 Finance Manager with escalation to Principal; above INR 50,000 Principal with Trust Board escalation; concessions/waivers by Principal; procurement above INR 25,000 is draft.
- Finance late fee settings in mock config: flat amount, INR 50/week, 3-day grace period, weekly reminders.
- Account Head books closure toggles indicate posted entries lock after period close and reopening requires Principal approval.
- Communication accepts image, PDF, Office docs, audio, and video attachment types, but actual storage/upload is demo/local.

## 8. API Reference

Confirmed live backend endpoints: none found.

Important internal route paths are frontend SPA routes, not APIs. Every route is declared under `src/Routes`. Examples:

- Auth: `/select-profile`, `/signin`, `/signup`.
- Admin base: `/admin/...`.
- Student base: `/student/...`.
- Teacher base: `/teacher/...`.
- Account Head base: `/account-head/...`.
- Joint Director Audit base: `/joint-director-audit/...`.
- Process Auditor base: `/process-auditor/...`.
- Quality Auditor base: `/quality-auditor/...`.

Do not invent REST endpoints. If backend integration is added later, create a dedicated service layer and document real request/response contracts here.

## 9. Database

- Database technology: Unknown / not present in this frontend repo.
- Persistent demo storage:
  - `sessionStorage`: `schoolerp_auth`.
  - `localStorage`: communication, escalations, lesson plans, deliverables, mark entry sessions, audit drafts/templates, material gate passes, and several process/quality audit records.
- Data model style: module-local arrays/objects in `*Data.js` files, often with helper functions like `getById`, `filter...`, `save...`, and ID generators.
- Constraints: only frontend/helper-level constraints are confirmed. There are no migrations, schemas, server models, or database foreign keys in this repo.

## 10. UI/UX Conventions

- Main shell: fixed blue sidebar (`#515DEF`) and fixed white header.
- Sidebar: role-aware links, submenus, collapsed desktop flyouts, hover tooltips, logo swap between full and mini.
- Header: page title from `TitleMappings.jsx`, notification dropdown, user dropdown/logout.
- Page surfaces: most screens use white rounded panels/cards with Tailwind utilities, shadow, and table sections.
- Tables: `bg-[#EDEEF5]` header rows, uppercase column labels, hover row background, horizontal overflow for responsiveness.
- Forms: label above input, grey border, rounded-md, responsive grid layouts.
- Actions: primary buttons are usually `#515DEF` with white text; secondary buttons are white with blue/grey border.
- Badges: status/severity badges are colored via module-local maps.
- Modals: fixed full-screen overlay, black translucent backdrop, white centered panel; close on backdrop or X.
- Export: shared `ExportModal` supports CSV, Excel, and PDF choices in UI only.
- Icons: lucide icons are used heavily in navigation and buttons.
- Responsive behavior: many layouts switch from grid/table controls to stacked controls on small screens; sidebar hides/collapses based on viewport.

## 11. Coding Conventions

- JavaScript/JSX only; no TypeScript in this repo.
- ESM imports/exports.
- Components use PascalCase filenames for pages/components and default exports.
- Data/config files use camelCase or descriptive names ending in `Data.js` or `Config.js`, exporting constants and helper functions.
- Styling is mostly inline Tailwind class strings.
- Route files import page components and return `<ReactRoutes>` with `<Route>` entries and `<Navigate>` redirects.
- Shared state is minimal: React `useState`, `useMemo`, `useEffect`, context for auth, localStorage/sessionStorage helpers for demo persistence.
- Forms generally use controlled component state, HTML `required`, and lightweight inline validation.
- Repeated list patterns include local `statusBadgeColor`, `priorityBadgeColor`, filters, `ExportModal`, and row action dropdowns.
- Avoid introducing a new global state manager or backend abstraction unless real API integration requires it.

## 12. Important Existing Decisions

- This repository is a frontend demo with mock data. Preserve the demo/local behavior unless explicitly asked to integrate a backend.
- Authentication and role gating are intentionally frontend-only. Do not treat them as secure production auth.
- `driver` replaces the older `van-driver`/`vandriver` naming. `App.jsx` includes redirects from old van-driver URLs.
- Student "Studies", "Assessment List", "Result Details", and "Activities" sidebar entries were recently replaced/reshaped into Student Evaluation and Student Deliverables.
- Student deliverables intentionally reuse teacher deliverable components with student route bases and student view mode.
- Teacher Mark Entry is a new route/sidebar item under Teacher -> Student Evaluation.
- Activities that used to be under Admin now redirect to Director routes.
- Account Head has `Collections` and `Accounting` routes; `Accounting` is in the sidebar as section routes, while older docs mention Collections/Accounting sidebar drift. Verify current sidebar before changing.
- Account Head Settings has additional built components for Roles & Permissions, Notifications, and Integrations, but only General and Payment Configuration are wired in `SETTINGS_TABS`.
- Process Auditor and Quality Auditor share similar audit execution/report patterns, but process audits use Yes/No/Error while quality audits use star ratings.
- Existing docs contain encoding artifacts. Prefer updating docs in clean ASCII/UTF-8 rather than copying corrupted punctuation.

## 13. Known Issues / Bugs

- No backend/API/database integration is present, despite many production-like workflows.
- Demo account/profile data includes mock password fields in several employee/profile data files and view screens. Do not copy those values into documentation or expose them in new outputs.
- Some existing `.md` files contain mojibake/encoding artifacts.
- `src/Pages/AccountHead/ACCOUNT_HEAD.md` is partly out of date versus current sidebar/routes: current `accountHeadSidebarLinks` includes Accounting sublinks and does not include Collections.
- `src/Pages/JointDirectorAudit/JOINT_DIRECTOR_AUDIT.md` omits or mismatches newer route/sidebar entries such as Audit Configuration, Audit Assignment, and `/broadcast` naming.
- Process Auditor and Quality Auditor `communication` routes render placeholders rather than the shared inbox.
- Several buttons are UI-only, for example Export, Import Marks, Approve/Reject in some demo pages, and request modals.
- Student Exam Schedule date filters are present but not applied in the inspected component.
- Student current identity is hard-coded in deliverables config (`CURRENT_STUDENT_ID` and name). Treat as demo data.
- User dropdown shows a hard-coded display name while email changes by role.
- Some route files define catch-all routes near the top; React Router v6+/7 ranking usually handles specificity, but keep an eye on route matching when changing Student routes.

## 14. Pending Work / TODO

High priority:

- Integrate real backend APIs and replace local mock persistence where production behavior is required.
- Define real server-side authentication, authorization, and permission checks.
- Remove or mask mock password fields from UI/data if the demo is shared externally.
- Align existing module docs with current routes/sidebar names.

Medium priority:

- Wire Account Head Settings tabs for Roles & Permissions, Notifications, and Integrations if desired.
- Make Export actions actually generate CSV/XLSX/PDF.
- Apply Student Exam Schedule date filters.
- Replace hard-coded current student values with auth/user context.
- Convert placeholder Process/Quality Auditor communication to shared communication UI.
- Add tests or at least smoke checks for route rendering and role redirects.

Low priority:

- Consolidate duplicated list/table/modal patterns into shared components where it reduces real maintenance.
- Normalize spelling/naming inconsistencies such as `AdminssionList`, `FeesPayemnt`, and legacy "Extra Class" vs "Extended Class" text.
- Audit Tailwind class consistency and reduce repeated color literals if a design token system is introduced.

## 15. Recent Changes

Recent uncommitted working-tree changes observed via `git diff --stat`:

- Student sidebar/title/routes were updated to remove older Studies, Assessment List, standalone Result Details, and Activities entries in favor of Student Evaluation and Student Deliverables.
- Student deliverables were added under `src/Pages/Student/StudentDeliverables/` with route constants and student submission persistence helpers.
- Student routes now reuse teacher Home Fun, Study Materials, and Sample Questions components with student route bases and student view mode.
- Student Exam Schedule page was added and filters approved schedules for class 10 section A.
- Teacher Mark Entry was added under `src/Pages/Teacher/StudentEvaluation/MarkEntry/` and wired into `TeacherRoutes.jsx`, sidebar links, and title mappings.
- Lesson plan and deliverable pages/data were modified to support newer academic/deliverable workflows.
- Student Star Ratings and Extra Class wording/UI received changes.
- `git status` showed these changes as uncommitted; treat them as current project context and do not revert them.

## 16. Previous Requirements / User Decisions

- The user wants useful long-term project knowledge preserved in a single concise Markdown file, not a source dump.
- The user explicitly requested that this task only create/update `CODEX_PROJECT_MEMORY.md` and not modify application source code.
- Preserve documented module knowledge from `ACCOUNT_HEAD.md` and `JOINT_DIRECTOR_AUDIT.md`, but verify it against actual code before relying on it.
- Future assistants should clearly distinguish confirmed/current, planned, deprecated, and unknown information.
- Do not fabricate APIs, database schemas, deployment steps, or permissions.
- Never include secrets, tokens, credentials, private keys, or copied mock password values in generated memory/docs.

## 17. Important Files

- `src/App.jsx`: central role gate and legacy redirects.
- `src/context/AuthContext.jsx`: role constants, mock credentials map, home paths, session auth.
- `src/main.jsx`: React app bootstrap.
- `src/Routes/*.jsx`: authoritative frontend route map.
- `src/Layout/*.jsx`: common role shell pattern.
- `src/Common/CommonSidebar/Components/sidebarLinks.js`: role navigation and current visible module list.
- `src/Common/CommonHeader/Components/TitleMappings.jsx`: page header title mapping and dynamic title matchers.
- `src/Common/CommonSidebar/CommonSidebar.jsx`: role-aware sidebar behavior.
- `src/Common/CommonHeader/CommonHeader.jsx`: common header title/dropdowns.
- `src/Common/Communication/communicationData.js` and `communicationRoleConfig.js`: local messaging model and role config.
- `src/Common/EscalationManagement/escalationData.js` and `escalationRoleConfig.js`: shared escalation model and hierarchy.
- `src/Common/LessonPlanApproval/lessonPlanApprovalData.js`: lesson-plan workflow and persistence rules.
- `src/Pages/Teacher/StudentDeliverables/*/*Data.js`: deliverables data/persistence shared by teacher and student views.
- `src/Pages/Student/StudentDeliverables/studentDeliverablesConfig.js`: student deliverable route bases and hard-coded current student.
- `src/Pages/Teacher/StudentEvaluation/MarkEntry/markEntryData.js`: mark-entry grading, pass/fail, persistence rules.
- `src/Pages/JointDirectorAudit/AuditConfiguration/*Data.js`: audit template/configuration mock data.
- `src/Pages/ProcessAuditor/AuditManagement/ExecuteAudit/executeAuditData.js`: process audit execution rules.
- `src/Pages/QualityAuditor/AuditManagement/ExecuteAudit/executeAuditData.js`: quality audit execution rules.
- `src/Pages/AccountHead/ACCOUNT_HEAD.md`: finance module knowledge, partially stale.
- `src/Pages/JointDirectorAudit/JOINT_DIRECTOR_AUDIT.md`: audit module knowledge, partially stale.
- `package.json`: scripts/dependencies.
- `vercel.json`: SPA deployment rewrite.

## 18. Development & Deployment

- Install: `npm install`.
- Run locally: `npm run dev`.
- Build: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint`.
- Environment variables: none confirmed. No `.env.example` was found.
- Deployment: Vercel-compatible static SPA deployment, with `vercel.json` rewriting all paths to `/`.
- Important deployment considerations:
  - Client-side routes need SPA fallback rewrite.
  - App currently depends on browser `localStorage` and `sessionStorage` for demo persistence.
  - No backend URL/config is currently documented.
  - Do not deploy with visible mock password fields if the demo is public.

## 19. AI Development Guidelines

- Read `src/App.jsx`, `src/context/AuthContext.jsx`, the relevant `src/Routes/*Routes.jsx`, `sidebarLinks.js`, and `TitleMappings.jsx` before adding or changing routes.
- When adding a role page, update route, sidebar, title mapping, and any dynamic title matcher together.
- Preserve the role-prefix guard model in `App.jsx`; do not add paths that bypass it accidentally.
- Respect the local demo data pattern. Add data helpers in the module's `*Data.js` file instead of scattering hard-coded arrays through page components.
- Do not replace React Router, Tailwind, lucide-react, ECharts, date-fns, or localStorage/sessionStorage patterns without a clear project-level reason.
- Do not invent backend endpoints. If implementing APIs, create a clear service layer and update this memory with real contracts.
- Treat uncommitted changes as user/project work. Do not revert them unless the user explicitly asks.
- Avoid copying or exposing mock password values from employee/profile data.
- Keep UI consistent: blue primary actions, white rounded panels, status badges, table filters, modals, responsive grids.
- Be careful with duplicated concepts across roles. For example, announcements, requests, escalations, and task management exist in many role folders with similar but not identical data.
- Before changing shared components, check all role consumers because `CommonSidebar`, `CommonHeader`, `Communication`, `EscalationManagement`, `AcademicCalendar`, and `LessonPlanApproval` are cross-cutting.
- For new workflows, decide whether data should be demo-local only or backend-ready. If demo-local, use explicit storage keys and helper functions.
- Keep documentation ASCII/UTF-8 clean; do not copy existing mojibake artifacts.

## 20. Context / Memory Summary

This is a large React/Vite frontend demo for a role-based School ERP. The most important architecture fact is that roles are selected and guarded entirely on the client through `AuthContext.jsx` and `App.jsx`, with one layout and one route file per role. Most data is mock data in local `*Data.js` files, with selected modules persisting to localStorage/sessionStorage. There is no confirmed backend, database, or real API layer.

Future work should preserve route/sidebar/title consistency, avoid exposing mock credentials/password values, and avoid inventing server behavior. Recent work is focused on student/teacher academic flows: student deliverables now reuse teacher deliverable pages in student mode, student exam schedule is available, and teacher mark entry is wired into navigation. Finance and audit modules have useful docs, but both need verification against the current code before being treated as fully current.
