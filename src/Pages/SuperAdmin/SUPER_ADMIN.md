# Super Admin — Module Documentation

> **Role:** `SuperAdmin` (`ROLES.SUPER_ADMIN` → `'superadmin'`)  
> **Base URL:** `/super-admin`  
> **Layout:** `SuperAdminLayout` → `CommonSidebar` + `CommonHeader` + `CommonBreadcrumb` + `SuperAdminRoutes`  
> **Login:** `superadmin@school.com` + any 6-digit OTP  
> **Last reviewed:** August 2026

---

## 1. What Is This Module?

The **Super Admin** portal is the system governance and final-approval layer of the school ERP. It sits above Admin and provides oversight across attendance, user directories, gate passes, tasks, leave approvals, announcements, communication, calendar, notifications, and escalations.

| Domain | What it covers |
|--------|----------------|
| **Dashboard** | Lightweight governance KPIs, approval queue, module health |
| **Attendance** | Own attendance + school-wide student/employee attendance |
| **User Database** | Read-only student & employee directories |
| **Gate Pass** | Unified Student / Hostel / Material gate-pass register (view-only) |
| **Star Ratings** | View Star of the Month / Year for Students and Teachers |
| **Task Management** | Assign tasks to Admin, Directors, and Finance |
| **Leave Request** | Approve/reject Admin leave requests |
| **Announcement** | Governance / system-wide announcements |
| **Communication** | Role-scoped inbox and chat |
| **Calendar** | Academic calendar (display-only) |
| **Notifications** | Staff notification feed |
| **Escalation** | Final escalation sink from Admin (resolve; cannot escalate further) |

This is currently a **frontend demo** — pages use mock data from local `*Data.js` files or shared Common modules (no live API). Some filters are UI-only. Leave approve/reject and escalation resolve persist via `sessionStorage`.

---

## 2. Sidebar Navigation

All visible sidebar links are defined in `src/Common/CommonSidebar/Components/sidebarLinks.js` under `superAdminSidebarLinks`.

| # | Sidebar Label | Route | Icon |
|---|---------------|-------|------|
| 1 | Dashboard | `/super-admin/dashboard` | LayoutDashboard |
| 2 | Attendance *(submenu)* | `#0` (parent) | CalendarCheck |
| 2a | → My Attendance | `/super-admin/attendance/my-attendance` | UserRound |
| 2b | → Students List | `/super-admin/attendance/students/list` | GraduationCap |
| 2c | → Employee Attendance | `/super-admin/attendance/employees` | Briefcase |
| 3 | User Database *(submenu)* | `#0` (parent) | UserRound |
| 3a | → Students List | `/super-admin/user-database/students` | GraduationCap |
| 3b | → Employee List | `/super-admin/user-database/employees` | UserRoundCog |
| 4 | Gate Pass | `/super-admin/gate-pass` | DoorOpen |
| 5 | Star Ratings *(submenu)* | `#0` (parent) | Star |
| 5a | → Star of the Month | `/super-admin/star-ratings/star-of-month` | Star |
| 5b | → Star of the Year | `/super-admin/star-ratings/star-of-year` | Trophy |
| 6 | Task Management | `/super-admin/task-management/assign-tasks` | ClipboardList |
| 7 | Leave Request | `/super-admin/leave-request/received` | FileX |
| 8 | Announcement | `/super-admin/announcement` | Rss |
| 9 | Communication | `/super-admin/communication/inbox` | MessageCircle |
| 10 | Calendar | `/super-admin/academic-calendar` | CalendarDays |
| 11 | Notifications | `/super-admin/notifications` | BellDot |
| 12 | Escalation Management | `/super-admin/escalation-management` | ShieldAlert |

---

## 3. Full Route Map

Defined in `src/Routes/SuperAdminRoutes.jsx`. Task routes come from `TaskManagementRoutes({ basePath: '/super-admin' })`. Header titles are in `src/Common/CommonHeader/Components/TitleMappings.jsx`.

| Route | Page Component | Header Title | In Sidebar? |
|-------|----------------|--------------|-------------|
| `/super-admin/dashboard` | `Dashboard` | Super Admin Dashboard | ✅ |
| `/super-admin/attendance` | Redirect → my-attendance | — | — |
| `/super-admin/attendance/my-attendance` | `MyAttendance` | My Attendance | ✅ |
| `/super-admin/attendance/students/list` | `StudentsAttendanceList` | Students Attendance List | ✅ |
| `/super-admin/attendance/employees` | `EmployeesAttendanceList` | Employee Attendance | ✅ |
| `/super-admin/user-database` | Redirect → students | — | — |
| `/super-admin/user-database/students` | `StudentsList` | Students List | ✅ |
| `/super-admin/user-database/students/view/:id` | `ViewStudent` | View Student Details | ❌ |
| `/super-admin/user-database/employees` | `EmployeesList` | Employee List | ✅ |
| `/super-admin/user-database/employees/view/:id` | `ViewEmployee` | View Employee Details | ❌ |
| `/super-admin/gate-pass` | `GatePassList` | Gate Pass List | ✅ |
| `/super-admin/gate-pass/view/:id` | `ViewGatePass` | View Gate Pass | ❌ |
| `/super-admin/star-ratings` | Redirect → star-of-month | — | — |
| `/super-admin/star-ratings/star-of-month` | `StarRatings` (view=`som`) | Star of the Month | ✅ |
| `/super-admin/star-ratings/star-of-year` | `StarRatings` (view=`soy`) | Star of the Year | ✅ |
| `/super-admin/task-management` | Redirect → assign-tasks | — | — |
| `/super-admin/task-management/assign-tasks` | `AssignTasksPage` (Common) | Assign Tasks List | ✅ |
| `/super-admin/task-management/assign-tasks/add` | `AddAssignTaskPage` | Assign Task | ❌ |
| `/super-admin/task-management/my-tasks` | `MyTasksPage` | *(title gap)* | ❌ |
| `/super-admin/leave-request/received` | `ReceivedLeaveRequests` | Received Leave Requests | ✅ |
| `/super-admin/leave-request/received/view/:id` | `ViewReceivedLeaveRequest` | *(title gap)* | ❌ |
| `/super-admin/announcement` | `AnnouncementList` | Announcement List | ✅ |
| `/super-admin/announcement/add` | `AddAnnouncement` | Add Announcement | ❌ |
| `/super-admin/announcement/view/:id` | `ViewAnnouncement` | *(title gap)* | ❌ |
| `/super-admin/communication` | Redirect → inbox | — | — |
| `/super-admin/communication/inbox` | `Inbox` | Communication Inbox | ✅ |
| `/super-admin/communication/inbox/:conversationId` | `Inbox` | — | ❌ |
| `/super-admin/communication/direct-messages` (+ `/:id`) | Legacy redirect → inbox | — | ❌ |
| `/super-admin/academic-calendar` | `AcademicCalendar` | Calendar | ✅ |
| `/super-admin/notifications` | `Notifications` | Notifications | ✅ |
| `/super-admin/escalation-management` | `EscalationList` | Escalation List | ✅ |
| `/super-admin/escalation-management/add-escalation` | `AddEscalation` | Add Escalation | ❌ (Add hidden for SA) |
| `/super-admin/escalation-management/view/:id` | `ViewEscalation` | *(title gap)* | ❌ |
| `*` (fallback) | Redirect → dashboard | — | — |

---

## 4. Page-by-Page Breakdown

### 4.1 Dashboard
**Path:** `Dashboard/Dashboard.jsx` · **Data:** inline constants (no data file)

**Purpose:** System-wide governance overview above Admin.

**What's on the page:**
- Intro card (title + description)
- **4 KPI cards:** Active Modules, Portal Roles, Pending Approvals, System Policies
- **Recent Approval Queue** — sample items (e.g. TC Request, Class Fee Update, Employee Record Edit)
- **Module Health** — Academics / Operations / Finance → Operational

**Concept:** Lightweight command center; placeholder UI, not yet wired to other modules.

---

### 4.2 Attendance — My Attendance
**Path:** `Attendance/MyAttendance/` · **Data:** `myAttendanceData.js`

**Purpose:** Super Admin’s own attendance log.

**What's on the page:**
- Filters: Search, Status, From/To dates, “From Beginning” select, Clear Filters
- Export modal, table + pagination UI
- **Columns:** Employee ID, Name, Date, In Time, Out Time, Attendance Status

**Statuses:** Present, Absent, Half Day, Late, On Leave  
**Demo profile:** `SA-1001` / Super Admin

**Note:** Filters/search are UI-only (do not filter the list).

---

### 4.3 Attendance — Students List
**Path:** `Attendance/Students/StudentsList.jsx`  
**Data:** `Pages/Admin/Attendance/Students/studentAttendanceData.js`  
**Shared UI:** `Attendance/Components/AttendanceOverviewSection.jsx`

**Purpose:** School-wide student attendance with analytics.

**What's on the page:**
- Overview KPIs: Total / Present / Absent / Attendance Rate
- Charts: Present vs Absent pie, class-wise bar, weekly trend
- Filters: Search, Class (6th–12th), Section (A–D), Date
- Table: Admission No, Student Name, Class, Section, On Time, Out Time, Status
- Export modal, pagination

**Working filter:** search / class / section (`filterStudentAttendance`). Date filter is unused.

---

### 4.4 Attendance — Employees
**Path:** `Attendance/Employees/EmployeesList.jsx`  
**Data:** Admin `employeeAttendanceData.js`  
**Shared UI:** `AttendanceOverviewSection` (group by role)

**Purpose:** School-wide employee attendance with analytics.

**What's on the page:**
- Same overview pattern as students
- Filters: Search, Role, Date, Status
- Table: Employee ID, Name, Role, Punch In, Out, Status

**Roles:** Teacher, Librarian, Accountant, Front Office, Driver, Admin Staff, Security  
**Working filter:** `filterEmployeeAttendance`

---

### 4.5 User Database — Students
**Path:** `UserManagement/StudentDatabase/`  
**Data:** `studentDatabaseData.js` (re-exports Admin student database)

**Purpose:** Read-only student directory for Super Admin.

| Screen | File | What it does |
|--------|------|--------------|
| List | `StudentsList.jsx` | Searchable directory → View only |
| View | `ViewStudent.jsx` | Full student profile |

**List columns:** Profile, Admission Number, Name, Gender, Email, Mobile, DOB, Country, State, City  

**View sections:** Admission details, Student information, Address, Contact, Transport, Parent/guardian  

**Note:** No Add/Edit/Delete. Search/status/date filters are mostly decorative.

---

### 4.6 User Database — Employees
**Path:** `UserManagement/EmployeeDatabase/`  
**Data:** `employeeDatabaseData.js` (re-exports via Admin → Principal data)

**Purpose:** Cross-department employee directory (read-only).

| Screen | File | What it does |
|--------|------|--------------|
| List | `EmployeesList.jsx` | Search + Department filter → View only |
| View | `ViewEmployee.jsx` | Full employee profile |

**Departments:** Teacher, Coordinator, Front Office, Librarian, Gate Keeper Manager, Gate Keeper, Principal, HR, Driver, Admin Staff  

**View sections:** Personal, Professional, Employment, Account, Documents  

**Working filter:** Search + Department. From/To dates are UI-only.

---

### 4.7 Gate Pass
**Path:** `GatePass/` · **Data:** `gatePassData.js` (+ Front Office hostel/material stores)

**Purpose:** Unified read-only view of all gate-pass types.

| Screen | File | What it does |
|--------|------|--------------|
| List | `GatePassList.jsx` | Aggregated register with filters/export |
| View | `ViewGatePass.jsx` | Branching detail by pass type |

**Pass categories:** Student | Hostel | Material  

**Statuses:** Approved, Pending, Rejected, Partially Approved, Checked Out, Returned, Cancelled  

**List columns:** Pass Type, Pass ID, Name, Class/Detail, Date, Status, Created By, View  

**View:** Student / Hostel / Material branches (material uses Front Office `ApprovalSection` read-only).

---

### 4.8 Star Ratings
**Path:** `StarRatings/` · **Data:** reuses Common student ratings + Principal teacher ratings  

**Purpose:** Governance oversight of Star of the Month and Star of the Year for both Students and Teachers (view-only).

| Screen | Route | What it does |
|--------|-------|--------------|
| Star of the Month | `/star-ratings/star-of-month` | Highlight + monthly ratings table |
| Star of the Year | `/star-ratings/star-of-year` | Highlight + annual consolidated table |

**Category tabs:** Students | Teachers  

**What's on the page:**
- Category toggle (Students / Teachers)
- Filters: Search, Class & Section (students) or Employee Type (teachers), Month or Academic Year
- Highlight card for current Star of the Month / Year
- Ratings table with 1–3 star display
- Export modal (UI only)

**Data sources:**
- Students → `Common/StudentStarRatings/studentStarRatingsData.js`
- Teachers → `Pages/Principal/StarRatings/starRatingsData.js`

**Concept:** Super Admin reviews recognition outcomes without creating or editing ratings (those stay with Teacher/Coordinator/Principal).

---

### 4.9 Task Management
**Paths:** Common `TaskManagement` via `TaskManagementRoutes`  
**Config:** `src/Common/TaskManagement/taskManagementConfig.js`

**Purpose:** Assign and track tasks down the hierarchy.

| Screen | Route suffix | What it does |
|--------|--------------|--------------|
| Assign Tasks | `/assign-tasks` | List with filters, export, Add Task |
| Add Assign Task | `/assign-tasks/add` | Create task for assignable roles |
| My Tasks | `/my-tasks` | Routed but not in sidebar |

**Assignable roles:** Admin, Director, Joint Director, Joint Director (Audit), Account Head  
**Statuses:** Pending, In Progress, Completed  
**Priorities:** High, Medium, Low  
**Demo user:** `SA-001`

---

### 4.10 Leave Request — Received
**Path:** `LeaveRequest/`  
**Data:** `Common/AdminLeaveRequest/adminLeaveRequestData.js` (`sessionStorage` key `schoolerp-admin-leave-requests`)

**Purpose:** Final approval of Admin leave requests (`requestedTo: 'Super Admin'`).

| Screen | File | What it does |
|--------|------|--------------|
| List | `ReceivedLeaveRequests.jsx` | Incoming Admin leave queue |
| View | `ViewReceivedLeaveRequest.jsx` | Detail + Approve/Reject |

**Leave types:** Sick, Casual, Emergency, Personal, Medical  
**Statuses:** Pending, Approved, Rejected  

**List columns:** Leave Request ID, Requested By, Role, Leave Type, From/To, Total Days, Applied Date, Status  

**Interactive:** When Pending → Remarks + Approve/Reject via `updateAdminLeaveRequestStatus` (persists to sessionStorage).

---

### 4.11 Announcement
**Path:** `Announcement/` · **Data:** `announcementData.js`

**Purpose:** Governance / system announcements from Super Admin.

| Screen | File | What it does |
|--------|------|--------------|
| List | `AnnouncementList.jsx` | All announcements + View / Edit / Delete |
| Add | `AddAnnouncement.jsx` | Compose announcement with attachment |
| View | `ViewAnnouncement.jsx` | Read announcement detail |

**Categories:** System Notice, Policy Update, Governance, Emergency, General Announcement  
**Visible to:** All Staff, Admin Team, Department Heads, Directors, All Portals  

**List columns:** ID, Title, Attachment, Category, Message, Sent By, Date  

**Note:** Save/Edit/Delete do not persist real changes (demo UI / request modals).

---

### 4.12 Communication
**Path:** `Communication/Inbox.jsx` → `<CommunicationPage roleKey='superAdmin' />`

**Purpose:** Role-scoped inbox and chat.

**Config:** `communicationRoleConfig.superAdmin` — routeBase `/super-admin/communication`, user `EMP-SA-001` / Super Admin / Governance  

**What's on the page:** Inbox panel, chat panel, New Message modal, search/filter, session-persisted conversations. Legacy direct-message URLs redirect to inbox.

---

### 4.13 Academic Calendar
**Path:** `AcademicCalendar/AcademicCalendar.jsx` → `<AcademicCalendarPage roleKey='superAdmin' />`

**Purpose:** Display-only school academic calendar.

**What's on the page:** Month grid, type filters, selected-day details, upcoming list, prev/next/today  

**Event types:** holiday, exam, event  

---

### 4.14 Notifications
**Path:** `Notifications/Notifications.jsx` → shared `NotificationsListView` + `STAFF_NOTIFICATIONS`

**Purpose:** Staff notification feed.

**Types:** General, Exam, Event, Holiday, Announcement, Payment  

---

### 4.15 Escalation Management
**Path:** thin wrappers → Common Escalation pages with `roleKey='superAdmin'`

**Purpose:** Final escalation level — receives from Admin; cannot escalate further.

| Screen | File | What it does |
|--------|------|--------------|
| List | `EscalationList.jsx` | Escalation register |
| Add | `AddEscalation.jsx` | Route exists; **Add button hidden** (`canAdd` false) |
| View | `ViewEscalation.jsx` | Resolve received escalations |

**Hierarchy:** Final level — `escalatesTo: null`  
**Statuses:** Open, In Review, Resolved, Closed  
**Priorities:** High, Medium, Low  

**Interactive:** Resolution status updates persist via sessionStorage (`escalation-management-` prefix). Includes 24h SLA / overdue indicator on view.

---

## 5. Folder Structure

```
src/Pages/SuperAdmin/
├── SUPER_ADMIN.md                      ← this file
├── AcademicCalendar/
│   └── AcademicCalendar.jsx            # thin wrapper → Common
├── Announcement/
│   ├── AnnouncementList.jsx
│   ├── AddAnnouncement.jsx
│   ├── ViewAnnouncement.jsx
│   └── announcementData.js
├── Attendance/
│   ├── Components/
│   │   └── AttendanceOverviewSection.jsx
│   ├── Employees/
│   │   └── EmployeesList.jsx
│   ├── MyAttendance/
│   │   ├── MyAttendance.jsx
│   │   └── myAttendanceData.js
│   └── Students/
│       └── StudentsList.jsx
├── Communication/
│   └── Inbox.jsx                       # thin wrapper → Common
├── Dashboard/
│   └── Dashboard.jsx
├── EscalationManagement/
│   ├── EscalationList.jsx              # thin wrapper → Common
│   ├── AddEscalation.jsx
│   └── ViewEscalation.jsx
├── GatePass/
│   ├── GatePassList.jsx
│   ├── ViewGatePass.jsx
│   └── gatePassData.js
├── StarRatings/
│   ├── StarRatings.jsx
│   └── starRatingsData.js
├── LeaveRequest/
│   ├── ReceivedLeaveRequests.jsx
│   └── ViewReceivedLeaveRequest.jsx
├── Notifications/
│   └── Notifications.jsx               # thin wrapper → Common
└── UserManagement/
    ├── EmployeeDatabase/
    │   ├── EmployeesList.jsx
    │   ├── ViewEmployee.jsx
    │   └── employeeDatabaseData.js
    └── StudentDatabase/
        ├── StudentsList.jsx
        ├── ViewStudent.jsx
        └── studentDatabaseData.js
```

**Supporting files outside this folder:**

| File | Role |
|------|------|
| `src/Routes/SuperAdminRoutes.jsx` | Route definitions |
| `src/Layout/SuperAdminLayout.jsx` | Shell layout (sidebar + header + routes) |
| `src/Common/CommonSidebar/Components/sidebarLinks.js` | `superAdminSidebarLinks` |
| `src/Common/CommonHeader/Components/TitleMappings.jsx` | Page header titles |
| `src/Common/TaskManagement/*` | Shared task module + routes |
| `src/Common/Communication/*` | Shared inbox |
| `src/Common/AcademicCalendar/*` | Shared calendar |
| `src/Common/AdminLeaveRequest/adminLeaveRequestData.js` | Admin→SA leave data |
| `src/Common/EscalationManagement/*` | Shared escalation UI |
| `src/Common/Notifications/*` | Shared notifications list |
| `src/context/AuthContext.jsx` | Role `superadmin`, home `/super-admin/dashboard` |
| `src/App.jsx` | Role routing to `SuperAdminLayout` |

---

## 6. Shared Common Usage

| Feature | Uses Common? | How |
|---------|--------------|-----|
| Communication | ✅ | `CommunicationPage` with `roleKey='superAdmin'` |
| Academic Calendar | ✅ | `AcademicCalendarPage` with `roleKey='superAdmin'` |
| Escalation | ✅ | List / Add / View with Super Admin config |
| Task Management | ✅ | `TaskManagementRoutes` + config |
| Leave (Admin → SA) | ✅ (data) | `adminLeaveRequestData` |
| Notifications | ✅ | `NotificationsListView` + staff data |
| Export / Dropdown / Edit-Delete modals | ✅ | `CommonComponents` |
| Gate Pass Material approvals | Front Office | `ApprovalSection` (read-only) |
| Star Ratings (students) | Common StudentStarRatings | data + star display |
| Star Ratings (teachers) | Principal StarRatings | mock SOM/SOY data |
| Student / Employee DB data | Admin / Principal | re-export |
| Student / Employee attendance data | Admin | direct import |
| Attendance charts | Local | `AttendanceOverviewSection` |
| Dashboard / Announcement | Local SuperAdmin only | — |

---

## 7. Key Business Concepts

### Governance hierarchy

```
Admin Leave Request  →  Super Admin Approve / Reject
Admin Escalation     →  Super Admin Resolve (final — cannot escalate further)
Super Admin Tasks    →  Admin | Director | Joint Director | JD Audit | Account Head
```

### Escalation flow
```
Lower roles → … → Admin → Super Admin (final sink)
```

### Leave approval flow
```
Admin submits leave (requestedTo: Super Admin) → Received queue → Approve / Reject + remarks
```

### User Database vs Attendance
- **User Database** = directory / profiles (read-only)
- **Attendance** = daily presence tracking (own + school-wide lists with charts)

---

## 8. Implementation Status

| Area | Status |
|------|--------|
| Dashboard | ⚠️ Placeholder mock KPIs/lists |
| My Attendance | ✅ Mock list; filters not wired |
| Students / Employees Attendance | ✅ Mock + working search/class/role filters; charts |
| User Database | ✅ Read-only; reuses Admin/Principal data |
| Gate Pass | ✅ Aggregated mock; view-only |
| Star Ratings | ✅ View-only SOM/SOY for Students + Teachers |
| Task Management | ✅ Shared Common module, assign hierarchy wired |
| Leave Received | ✅ Interactive approve/reject via sessionStorage |
| Announcement | ✅ Mock list; Save/Edit/Delete do not persist |
| Communication | ✅ Shared Common with role storage |
| Calendar | ✅ Display-only shared calendar |
| Notifications | ✅ Shared staff mock list |
| Escalation | ✅ Receive + resolve interactive; Add UI hidden |
| Export (PDF/Excel) | ⚠️ Modal UI only — no file generation |
| API / backend | ❌ Not started |
| TitleMappings | ⚠️ Several detail routes missing SA titles |

**Legend:** ✅ Built · ⚠️ Partial · ❌ Not started

---

## 9. Quick Reference — Demo IDs & Credentials

| Item | Value |
|------|-------|
| Login email | `superadmin@school.com` |
| OTP | Any 6-digit code |
| Attendance employee ID | `SA-1001` |
| Task user ID | `SA-001` |
| Communication user ID | `EMP-SA-001` |
| Announcement IDs | `SA-AN-001` … |
| Sample leave IDs | `ADM-LR-001` (Pending), `002` (Approved), `003` (Rejected) |
| Sample escalation | `ESC-2026-010` (Admin → Super Admin) |

---

## 10. Quick Reference — Sidebar vs Routes

```
SIDEBAR                              ROUTES (extra / detail)
─────────────                        ──────────────────────
Dashboard                        →   Dashboard
Attendance ▸ My / Students / Emp →   (+ redirects)
User Database ▸ Students / Emp   →   + view/:id
Gate Pass                        →   + view/:id
Star Ratings ▸ SOM / SOY         →   Students | Teachers tabs
Task Management                  →   + assign-tasks/add, my-tasks
Leave Request                    →   + received/view/:id
Announcement                     →   + add, view/:id
Communication                    →   + inbox/:conversationId
Calendar                         →   Calendar
Notifications                    →   Notifications
Escalation Management            →   + add (hidden), view/:id
```

---

*Generated from codebase analysis of `src/Pages/SuperAdmin/`.*
