# Sidebar Links Reference

Documentation for `sidebarLinks.js` — the central configuration for navigation menus across all School ERP role portals.

**Source file:** `src/Common/CommonSidebar/Components/sidebarLinks.js`  
**Consumed by:** `src/Common/CommonSidebar/CommonSidebar.jsx`

---

## Overview

`sidebarLinks.js` defines one exported array per user role (23 roles). Each array is a list of sidebar menu items used by the shared `CommonSidebar` component. Routes are **not** defined here; this file only maps labels, icons, and URL paths for navigation.

Icons come from [Lucide React](https://lucide.dev/).

---

## Link Item Schema

### Top-level item

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `number` | Yes | Unique within the role array. Used for expand/collapse state. |
| `title` | `string` | Yes | Display label in the sidebar. |
| `to` | `string` | Yes | React Router path. Use `"#0"` for parent items that only expand submenus. |
| `icon` | Lucide component | Yes | Icon shown next to the title. |
| `subLinks` | `SubLink[]` | No | Child menu items. When present, the parent acts as a dropdown. |

### Sub-link item

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Submenu label. |
| `to` | `string` | Yes | Route path (must be a real route). |
| `icon` | Lucide component | Yes | Submenu icon. |

Sub-links do not have `id` fields; only top-level items do.

### Example

```js
{
    id: 3,
    title: "Attendance",
    to: "#0",
    icon: CalendarCheck,
    subLinks: [
        { icon: GraduationCap, title: "Students", to: "/admin/attendance/students-list" },
        { icon: Briefcase, title: "Employees", to: "/admin/attendance/employees-list" },
    ],
},
```

---

## How the Sidebar Picks a Menu

`CommonSidebar.jsx` selects the link array from the **current URL prefix**, not from auth role directly:

| URL prefix | Export used |
|------------|-------------|
| `/parent` | `parentSidebarLinks` |
| `/student` | `studentSidebarLinks` |
| `/teacher` | `teacherSidebarLinks` |
| `/librarian` | `librarianSidebarLinks` |
| `/canteen-manager` | `canteenManagerSidebarLinks` |
| `/it-support-manager` | `itSupportManagerSidebarLinks` |
| `/stationery-store-manager` | `stationeryStoreManagerSidebarLinks` |
| `/housekeeping-manager` | `housekeepingManagerSidebarLinks` |
| `/transport-manager` | `transportManagerSidebarLinks` |
| `/process-auditor` | `processAuditorSidebarLinks` |
| `/quality-auditor` | `qualityAuditorSidebarLinks` |
| `/hr` | `hrSidebarLinks` |
| `/account-head` | `accountHeadSidebarLinks` |
| `/driver` | `driverSidebarLinks` |
| `/joint-director-audit` | `jointDirectorAuditSidebarLinks` |
| `/joint-director-assistant` | `jointDirectorAssistantSidebarLinks` |
| `/joint-director` | `jointDirectorSidebarLinks` |
| `/gatekeeper-manager` | `gateKeeperManagerSidebarLinks` |
| `/gate-keeper` | `gateKeeperSidebarLinks` |
| `/director` | `directorSidebarLinks` |
| `/principal` | `principalSidebarLinks` |
| `/front-office` | `prmSidebarLinks` |
| *(default)* | `adminSidebarLinks` |

**Note:** More specific prefixes (e.g. `/joint-director-audit`) must be checked before broader ones (`/joint-director`).

`roleBasedSidebarLinks` maps auth role names to arrays but is **not** used by `CommonSidebar` today — routing is path-based.

---

## Role Registry

| Export | Auth key (`roleBasedSidebarLinks`) | Route prefix |
|--------|-----------------------------------|--------------|
| `adminSidebarLinks` | `Administrator` | `/admin` |
| `studentSidebarLinks` | `Student` | `/student` |
| `parentSidebarLinks` | `Parent` | `/parent` |
| `teacherSidebarLinks` | `Teacher` | `/teacher` |
| `librarianSidebarLinks` | `Librarian` | `/librarian` |
| `prmSidebarLinks` | `PRM` | `/front-office` |
| `gateKeeperSidebarLinks` | `GateKeeper` | `/gate-keeper` |
| `gateKeeperManagerSidebarLinks` | `GateKeeperManager` | `/gatekeeper-manager` |
| `canteenManagerSidebarLinks` | `CanteenManager` | `/canteen-manager` |
| `itSupportManagerSidebarLinks` | `ITSupportManager` | `/it-support-manager` |
| `stationeryStoreManagerSidebarLinks` | `StationeryStoreManager` | `/stationery-store-manager` |
| `housekeepingManagerSidebarLinks` | `HousekeepingManager` | `/housekeeping-manager` |
| `transportManagerSidebarLinks` | `TransportManager` | `/transport-manager` |
| `jointDirectorSidebarLinks` | `JointDirector` | `/joint-director` |
| `jointDirectorAssistantSidebarLinks` | `JointDirectorAssistant` | `/joint-director-assistant` |
| `jointDirectorAuditSidebarLinks` | `JointDirectorAudit` | `/joint-director-audit` |
| `processAuditorSidebarLinks` | `ProcessAuditor` | `/process-auditor` |
| `qualityAuditorSidebarLinks` | `QualityAuditor` | `/quality-auditor` |
| `hrSidebarLinks` | `HR` | `/hr` |
| `accountHeadSidebarLinks` | `AccountHead` | `/account-head` |
| `driverSidebarLinks` | `Driver` | `/driver` |
| `directorSidebarLinks` | `Director` | `/director` |
| `principalSidebarLinks` | `Principal` | `/principal` |

---

## Menu Trees by Role

### Administrator (`adminSidebarLinks`)

| Menu | Route | Submenus |
|------|-------|----------|
| Admissions | `/admin/front-office/admission-list` | — |
| Attendance | `#0` | Students → `/admin/attendance/students-list`, Employees → `/admin/attendance/employees-list` |
| Class Details | `/admin/class/class-details` | — |
| User Database | `#0` | Student Database, Employee Database |
| Activities | `#0` | Cultural, Sports, Competitions |
| Documents | `#0` | Student Documents |
| Notifications | `/admin/notifications` | — |
| Calendar | `/admin/academic-calendar` | — |
| Communication | `/admin/communication/inbox` | — |
| Announcement | `/admin/announcement` | — |
| Task Management | `#0` | Assign Tasks, Assigned Tasks |
| Leave Request | `#0` | My Leave Requests, Received Leave Requests |
| Escalation Management | `/admin/escalation-management` | — |

*Dashboard is commented out.*

---

### Student (`studentSidebarLinks`)

| Menu | Route | Submenus |
|------|-------|----------|
| Class | `#0` | Online Class, Extended Class, Timetable, Attendance List |
| Student Evaluation | `#0` | Exam Result, Exam Schedule |
| Student Deliverables | `#0` | Home Fun, Study Materials, Sample Questions |
| Star Ratings | `/student/star-ratings/view-ratings` | — |
| Library | `#0` | Borrowed Books |
| Transport | `#0` | Bus Route, Track Bus |
| Hostel Details | `/student/hostel/hostel-details` | — |
| Payment Details | `#0` | Fees Payment, Hostel Payment, Transport Payment |
| Notification | `/student/notifications` | — |
| Calendar | `/student/academic-calendar` | — |
| Communication | `/student/communication/inbox` | — |
| Escalation Management | `/student/escalation-management` | — |

---

### Parent (`parentSidebarLinks`)

| Menu | Route | Submenus |
|------|-------|----------|
| Dashboard | `/parent/dashboard` | — |
| Class | `#0` | Online Class, Extended Class, Timetable, Attendance List |
| Student Evaluation | `#0` | Exam Result, Exam Schedule |
| Student Deliverables | `#0` | Home Fun, Study Materials, Sample Questions |
| Library | `#0` | Borrowed Books |
| Transport | `#0` | Track Bus only |
| Hostel Details | `/parent/hostel/hostel-details` | — |
| Fees Payment | `#0` | Academic Payment, Hostel Payment, Transport Payment |
| Notification | `/parent/notifications` | — |
| Calendar | `/parent/academic-calendar` | — |
| Communication | `/parent/communication/inbox` | — |
| Escalation Management | `/parent/escalation-management` | — |

Parent mirrors Student portal paths under `/parent/*` (child context).

---

### Front Office / PRM (`prmSidebarLinks`)

| Menu | Route | Submenus |
|------|-------|----------|
| Admission Enquiry | `/front-office/admission-enquiry` | — |
| Admission List | `/front-office/admission-list` | — |
| User Database | `#0` | Student Database, Teacher Database |
| Student Transfer | `/front-office/student-transfer` | — |
| Student Re-Enrollment | `/front-office/student-re-enrollment` | — |
| Gate Pass | `#0` | Student, Material, Goods Received |
| Calendar | `/front-office/academic-calendar` | — |
| Leave Request | `#0` | My / Received Leave Requests |
| Notification | `/front-office/notifications` | — |
| Communication | `/front-office/communication/inbox` | — |
| Escalation Management | `/front-office/escalation-management` | — |

---

### Librarian (`librarianSidebarLinks`)

| Menu | Route |
|------|-------|
| Book Management → Book List | `/librarian/book-management/book-list` |
| Issued Books | `/librarian/issued-books/issued-book-list` |
| Members | `/librarian/members/member-list` |
| Notification | `/librarian/notifications` |
| Academic Calendar | `/librarian/academic-calendar` |
| Communication | `/librarian/communication/inbox` |
| Escalation Management | `/librarian/escalation-management` |

---

### Gate Keeper (`gateKeeperSidebarLinks`)

| Menu | Route |
|------|-------|
| Hostel Gate Pass | `/gate-keeper/hostel-gate-pass` |
| My Duty | `/gate-keeper/my-duty` |
| Incidents | `/gate-keeper/incidents` |
| Gate Pass | `/gate-keeper/gate-pass-list` |
| Announcement | `/gate-keeper/broadcast-list` |
| Academic Calendar | `/gate-keeper/academic-calendar` |
| Notification | `/gate-keeper/notifications` |
| Communication | `/gate-keeper/communication/inbox` |
| Escalation Management | `/gate-keeper/escalation-management` |

---

### Gate Keeper Manager (`gateKeeperManagerSidebarLinks`)

| Menu | Route |
|------|-------|
| Assign Duty List | `/gatekeeper-manager/assign-duty-list` |
| Leave Approval List | `/gatekeeper-manager/leave-approval-list` |
| Incidents Management List | `/gatekeeper-manager/incidents-list` |
| Gatekeeper Announcement | `/gatekeeper-manager/gatekeeper-broadcast-list` |
| Academic Calendar | `/gatekeeper-manager/academic-calendar` |
| Notification | `/gatekeeper-manager/notifications` |
| Communication | `/gatekeeper-manager/communication/inbox` |
| Escalation Management | `/gatekeeper-manager/escalation-management` |

---

### Canteen Manager (`canteenManagerSidebarLinks`)

Dashboard, Menu Management, Inventory Management, Orders, Requests & Approvals, Reports, Announcement — all under `/canteen-manager/*`.

---

### IT Support Manager (`itSupportManagerSidebarLinks`)

Dashboard, Asset Management, Support Tickets, Requests & Approvals, Reports, Announcement — under `/it-support-manager/*`.

---

### Stationery Store Manager (`stationeryStoreManagerSidebarLinks`)

Dashboard, Inventory, Issue & Returns, Requests & Approvals, Reports, Announcement — under `/stationery-store-manager/*`.

---

### Housekeeping Manager (`housekeepingManagerSidebarLinks`)

Dashboard, Task Management, Inventory, Requests & Approvals, Reports, Announcement — under `/housekeeping-manager/*`.

---

### Teacher (`teacherSidebarLinks`)

| Menu | Submenus |
|------|----------|
| Dashboard | `/teacher/dashboard` |
| Attendance | My Attendance, Class Attendance |
| Class | Class Timetable, Extended Class, Online Class |
| Leave Request | My / Received Leave Requests |
| Lesson Plan | Lesson Plan Approval, My Lesson Plan |
| Unit Test | `/teacher/unit-tests` |
| Student Evaluation | Mark Entry |
| Student Deliverables | Home Fun, Study Materials, Sample Questions |
| User Database | Students List, Parents List |
| Library | Books Borrowed |
| Notifications | `/teacher/notifications` |
| Announcement | `/teacher/announcement` |
| Calendar | `/teacher/academic-calendar` |
| Communication | `/teacher/communication/inbox` |
| Escalation Management | `/teacher/escalation-management` |

---

### Transport Manager (`transportManagerSidebarLinks`)

Dashboard, Driver Management, Vehicle Management, Route Management, Route Data, Student Transport, Assign Duty, Vehicle Maintenance, Request & Approvals, Transport Expenses, Leave Request.

---

### Joint Director (`jointDirectorSidebarLinks`)

Dashboard, Task Management, Employee Management (7 roles), Request Approvals, Escalations, Meetings & Calendar, Assets & Inventory Overview, Announcement.

---

### Joint Director Assistant (`jointDirectorAssistantSidebarLinks`)

Same structure as Joint Director except Employee Management excludes JD Assistant entry.

---

### Joint Director Audit (`jointDirectorAuditSidebarLinks`)

Dashboard, Audit Configuration (9 sub-items), Audit Planning, Audit Assignment (4 sub-items), Audit Monitoring, Findings & Compliance, Reports & Analytics, Task Management, Employee Management (6 audit roles), Request Approvals, Escalations, Meetings & Calendar, Announcement.

---

### Process Auditor (`processAuditorSidebarLinks`)

Dashboard, Audit Management (4), Observations (2), Corrective Actions (3), Reports (5), Communication.

---

### Quality Auditor (`qualityAuditorSidebarLinks`)

Same structure as Process Auditor under `/quality-auditor/*`.

---

### HR (`hrSidebarLinks`)

Dashboard, Employee Management (Employees, Documents), Recruitment (Job Openings, Candidates, Interviews), Onboarding, Attendance, Leave Management, Training, Performance, Reports.

---

### Account Head (`accountHeadSidebarLinks`)

Dashboard, Fees Management, Transport Finance, Wallet Management, Accounting (9 ledgers/books), Approvals, Reports & Analytics, Settings.

---

### Driver (`driverSidebarLinks`)

| Menu | Submenus |
|------|----------|
| Vehicle Management | Vehicle Details, Vehicle Documents, Vehicle Health Status |
| Attendance Management | Student Attendance, Attendance History |

*Dashboard, My Duty, My Route, Fuel/Maintenance/Leave requests are commented out.*

---

### Director (`directorSidebarLinks`)

| Menu | Submenus |
|------|----------|
| Task Management | `/director/task-management` |
| Star Ratings | Star of the Month, Star of the Year |
| Timetable Approvals | Exam Timetable, Class Timetable |
| Student Allocation | `/director/student-allocation` |
| User Database | Student Database, Employee Database |
| Activities | Cultural, Sports, Competitions |
| Lesson Plan Approval | `/director/lesson-plan-approval` |
| Home Fun | Student Home Fun, Teacher Home Fun |
| Request Approvals | `/director/request-approvals` |
| Announcement | `/director/broadcast` |
| Calendar | `/director/academic-calendar` |
| Notification | `/director/notifications` |
| Communication | `/director/communication/inbox` |
| Leave Request | My / Received Leave Requests |
| Escalation Management | `/director/escalation-management` |

---

### Principal (`principalSidebarLinks`)

| Menu | Submenus |
|------|----------|
| Task Management | `/principal/task-management` |
| Star Ratings | Star of the Month, Star of the Year |
| Examination Timetable | `/principal/examination-timetable` |
| Class Timetable | `/principal/class-timetable` |
| User Database | Student Database, Employee Database |
| Home Fun | Student Home Fun, Teacher Home Fun |
| Calendar | `/principal/academic-calendar` |
| Academic | Teacher Allocation |
| Notification | `/principal/notifications` |
| Communication | `/principal/communication/inbox` |
| Escalation Management | `/principal/escalation-management` |

---

## Conventions & Behavior

### Dropdown parents (`to: "#0"`)

Items with `subLinks` use `to: "#0"` so the parent does not navigate. Clicking toggles the submenu. In collapsed sidebar mode, submenus appear as flyouts.

### Active route highlighting

`CommonSidebar` auto-expands a parent when any `subLink.to` matches the current path (exact or prefix match).

### Duplicate `id` values

Some arrays reuse numeric `id` values (e.g. Teacher has two items with `id: 14`, Principal has duplicate `id: 11`). This works for expand state but can cause confusion when editing — prefer unique ids within each array.

### Commented items

Several roles have commented-out Dashboard or feature links (Admin, Director, Principal, Driver, etc.). These are preserved in source but not rendered.

### Title naming patterns

| Pattern | Roles |
|---------|-------|
| `Notification` (singular) | Student, Parent, PRM, Librarian, Gate roles, Director, Principal |
| `Notifications` (plural) | Admin, Teacher |
| `Calendar` | Admin, Student, Parent, PRM, Teacher, Director, Principal |
| `Academic Calendar` | Librarian, Gate Keeper roles |

Align with `TitleMappings.jsx` when renaming menu labels.

---

## Adding or Changing a Link

1. **Add the route** in the role’s `*Routes.jsx` file (if new page).
2. **Add sidebar entry** in the correct `*SidebarLinks` array in `sidebarLinks.js`.
3. **Add title mapping** in `src/Common/CommonHeader/Components/TitleMappings.jsx` for the page header.
4. **Use the correct route prefix** matching how `CommonSidebar` resolves menus.
5. For dropdown menus, set parent `to: "#0"` and list real paths only on `subLinks`.

---

## Related Files

| File | Purpose |
|------|---------|
| `CommonSidebar.jsx` | Renders sidebar; resolves link array from URL |
| `TitleMappings.jsx` | Page header titles per route |
| `src/Routes/*Routes.jsx` | Route definitions per role |
| `src/Layout/*Layout.jsx` | Layout wrappers that include `CommonSidebar` |

---

*Generated from analysis of `sidebarLinks.js`. Update this document when adding roles or restructuring menus.*
