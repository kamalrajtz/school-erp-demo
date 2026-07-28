# Lesson Plan Structure

Documentation for the Lesson Plan module in the School ERP demo — data model, grouped list presentation, role access, routes, and end-to-end workflow.

**Shared data:** `src/Common/LessonPlanApproval/lessonPlanApprovalData.js`  
**Persistence:** Browser `localStorage` (demo only)

---

## 1. Overview

The Lesson Plan module lets teachers and coordinators **submit** lesson plans for academic approval. The **Director** reviews pending submissions and **approves or rejects** them. After approval, submitters track execution on **My Lesson Plan** and can **Mark as Done** when teaching is complete.

| Role | Access |
|------|--------|
| **Teacher** | Submit plans, view grouped submissions, manage approved plans |
| **Coordinator** | Same list/detail flow as Teacher (coordinator routes; add form remains coordinator-local) |
| **Director** | Grouped approval dashboard — review groups, approve / reject individual plans |
| **Principal** | Not implemented |

### Grouped list presentation

Main list screens **do not show every Lesson Plan as a separate row**. Plans are grouped by:

```text
Teacher + Subject
```

Each group is one compact list item. Opening a group shows **all individual Lesson Plans** inside it with their existing actions intact.

```text
Before (flat list)                    After (grouped list)
──────────────────                    ────────────────────
Teacher A | Math | Plan 1             Teacher A | Mathematics | 4 Lesson Plans | View →
Teacher A | Math | Plan 2             Teacher B | Science     | 2 Lesson Plans | Review →
Teacher A | Math | Plan 3
Teacher A | Math | Plan 4
```

**Important:** Grouping is a **UI/list optimization only**. Records in `localStorage` are never merged. Each Lesson Plan remains an independent record with its own `id`, status, and actions.

```text
Teacher: John
Subject: Mathematics
        │
        ├── LP-001  (individual record)
        ├── LP-002  (individual record)
        └── LP-003  (individual record)
```

### High-level flow

```text
Teacher / Coordinator                    Director
─────────────────────                    ────────
Grouped submission list        ───────►   Grouped approval list
  └─ View group → individual plans         └─ Review group → Approve / Reject each plan
Add Lesson Plan (create — unchanged)
Grouped My Lesson Plan
  └─ Open group → Mark as Done per plan
```

---

## 2. Folder Structure

```text
src/
├── Common/LessonPlanApproval/
│   ├── lessonPlanApprovalData.js           # Data model, CRUD, filters, grouping helpers
│   ├── LESSON_PLAN_STRUCTURE.md            # This document
│   └── Components/
│       ├── LessonPlanGroupedTable.jsx      # Shared grouped main-list table
│       ├── LessonPlanGroupDetail.jsx       # Shared group drill-down (all variants)
│       └── MarkAsDoneConfirmModal.jsx      # Shared confirmation modal
│
├── Pages/Teacher/LessonPlanApproval/
│   ├── AddLessonPlan.jsx                   # Create / queue / submit form
│   ├── SubmitLessonPlan.jsx                # Grouped submission list
│   ├── MyLessonPlan.jsx                    # Grouped approved list
│   └── Components/
│       └── MarkAsDoneConfirmModal.jsx      # Legacy copy (group detail uses Common version)
│
├── Pages/Coordinator/LessonPlanApproval/
│   └── AddLessonPlan.jsx                   # Create form (coordinator routes only)
│   # List pages: Coordinator routes reuse Teacher SubmitLessonPlan + MyLessonPlan
│
├── Pages/Director/LessonPlanApproval/
│   └── LessonPlanApproval.jsx              # Grouped approval dashboard
│
└── Routes/
    ├── TeacherRoutes.jsx
    ├── CoordinatorRoutes.jsx
    └── DirectorRoutes.jsx
```

**Shared UI dependencies:** `ExportModal`, `Dropdown` (Director group detail), `react-datepicker`.

**Dropdown source data:** `src/Pages/Teacher/AssignedClass/assignedClassData.js` — `CLASSES`, `SECTIONS`, `SUBJECTS`.

---

## 3. Sidebar Navigation

### Teacher & Coordinator

Parent menu: **Lesson Plan** (`NotebookPen` icon)

| Sub-link | Route |
|----------|-------|
| Lesson Plan Approval | `/teacher/lesson-plan-approval` or `/coordinator/lesson-plan-approval` |
| My Lesson Plan | `/teacher/lesson-plan/my-lesson-plan` or `/coordinator/lesson-plan/my-lesson-plan` |

> **Note:** The sub-link label “Lesson Plan Approval” on Teacher/Coordinator routes to the **grouped submission list**, not the Director approval screen.

### Director

| Menu | Route |
|------|-------|
| Lesson Plan Approval | `/director/lesson-plan-approval` |

---

## 4. Routes

### Teacher

| Path | Component | Purpose |
|------|-----------|---------|
| `/teacher/lesson-plan-approval` | `SubmitLessonPlan` | Grouped submissions for current teacher |
| `/teacher/lesson-plan-approval/add` | `AddLessonPlan` | Create and submit new plan(s) — **unchanged** |
| `/teacher/lesson-plan-approval/group/:teacherName/:subject` | `LessonPlanGroupDetail` | All plans in one Teacher + Subject group |
| `/teacher/lesson-plan/my-lesson-plan` | `MyLessonPlan` | Grouped approved plans |
| `/teacher/lesson-plan/my-lesson-plan/group/:teacherName/:subject` | `LessonPlanGroupDetail` | Mark as Done per plan in group |

### Coordinator

| Path | Component |
|------|-----------|
| `/coordinator/lesson-plan-approval` | `SubmitLessonPlan` (from Teacher folder) |
| `/coordinator/lesson-plan-approval/add` | `AddLessonPlan` (Coordinator folder) |
| `/coordinator/lesson-plan-approval/group/:teacherName/:subject` | `LessonPlanGroupDetail` |
| `/coordinator/lesson-plan/my-lesson-plan` | `MyLessonPlan` (from Teacher folder) |
| `/coordinator/lesson-plan/my-lesson-plan/group/:teacherName/:subject` | `LessonPlanGroupDetail` |

URL params `teacherName` and `subject` are `encodeURIComponent` values (e.g. `Mr.%20Anil%20Kumar`, `Mathematics`).

### Director

| Path | Component |
|------|-----------|
| `/director/lesson-plan-approval` | `LessonPlanApproval` |
| `/director/lesson-plan-approval/group/:teacherName/:subject` | `LessonPlanGroupDetail` |

---

## 5. Data Model

### Storage

| Key | Type | Description |
|-----|------|-------------|
| `school-erp-lesson-plan-approvals` | `LessonPlan[]` | All lesson plan records (shared across roles) |

If the key is missing or invalid JSON, **10 seed records** (`LP-001`–`LP-010`) are loaded from `DEFAULT_LESSON_PLANS`. Seed data includes multiple Mathematics plans for `Mr. Anil Kumar` to demonstrate grouping.

### Record Schema

Each Lesson Plan is stored as an **independent record**. Grouping never modifies this structure.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Auto | Format `LP-NNN` (zero-padded, auto-incremented) |
| `subject` | `string` | Yes | From `SUBJECT_OPTIONS` |
| `submitterName` | `string` | Yes | Display name of submitter (group key part 1) |
| `submitterRole` | `string` | Yes | `'Teacher'` or `'Co-ordinator'` |
| `className` | `string` | Yes | e.g. `'Grade 9'` |
| `section` | `string` | Yes | e.g. `'A'`, `'B'` |
| `title` | `string` | Yes | Plan title (per row on create form) |
| `academicYear` | `string` | Yes | e.g. `'2025-2026'` |
| `month` | `string` | Yes | Full month name |
| `description` | `string` | Yes | Lesson plan description |
| `fromDate` | `string` | Yes | `dd-mm-yyyy` |
| `toDate` | `string` | Yes | `dd-mm-yyyy` |
| `submittedAt` | `string` | Auto | `dd-mm-yyyy hh:mm AM/PM` |
| `approvalStatus` | enum | Auto | `Pending` \| `Approved` \| `Rejected` |
| `trackStatus` | enum | Auto | `On Track` \| `Behind Schedule` \| `Completed` |
| `markAsDone` | `boolean` | Auto | Teacher completion flag |
| `attachment` | `string` | No | Filename only (no file upload storage) |

### Group key (presentation layer)

Groups are derived at read time — not stored separately.

```text
groupKey = submitterName + "::" + subject
```

Example: `Mr. Anil Kumar::Mathematics`

### Status Enums

**Approval status** (`APPROVAL_STATUSES`)

| Value | Badge color | Meaning |
|-------|-------------|---------|
| `Pending` | Orange `#FF9800` | Awaiting Director review |
| `Approved` | Green `#4CAF50` | Accepted by Director |
| `Rejected` | Red `#FF0000` | Declined by Director |

**Track status** (`TRACK_STATUSES`)

| Value | Used for |
|-------|----------|
| `On Track` | Default on new submission; Director summary |
| `Behind Schedule` | Director summary / filters |
| `Completed` | Set on approval or Mark as Done |

**Submitter role** (`SUBMITTER_ROLES`): `Teacher`, `Co-ordinator`

### Business Rules

1. **New submission** → `approvalStatus: 'Pending'`, `trackStatus: 'On Track'`, `markAsDone: false`
2. **Director approves** → `approvalStatus: 'Approved'`, `trackStatus: 'Completed'`
3. **Director rejects** → `approvalStatus: 'Rejected'` (track status unchanged)
4. **Mark as Done** → `markAsDone: true`, `trackStatus: 'Completed'`
5. **Batch submit** — multiple plan rows in one submission share the same `submittedAt` timestamp
6. **Grouping** — computed from filtered plans; does not alter stored records

### Data API — CRUD & filters

| Function | Purpose |
|----------|---------|
| `getLessonPlans()` | Read all plans |
| `saveLessonPlans(plans)` | Write to localStorage |
| `addLessonPlan(payload)` | Insert single plan |
| `addLessonPlans(payloads)` | Batch insert |
| `updateLessonPlanStatus(id, status)` | Approve or reject one plan |
| `getLessonPlansBySubmitter(name)` | Filter by submitter name |
| `getApprovedLessonPlansBySubmitter(name)` | Approved plans for submitter |
| `markLessonPlanAsDone(id)` | Mark one plan complete |
| `getSummaryCounts(plans)` | Director dashboard KPIs (individual plan counts) |
| `filterLessonPlans(plans, filters)` | Client-side list filtering |
| `getActiveFilterLabels(filters)` | Export modal filter summary |
| `formatSubmittedAt()` | Current timestamp for new submissions |
| `formatPlanDate(value)` | DatePicker → `dd-mm-yyyy` |

### Data API — Grouping helpers

| Function | Purpose |
|----------|---------|
| `buildLessonPlanGroupKey(submitterName, subject)` | Returns `submitterName::subject` |
| `buildLessonPlanGroupHref(routePrefix, submitterName, subject, variant)` | Builds group detail URL (`submissions` or `mark-as-done`) |
| `groupLessonPlansByTeacherSubject(plans)` | Returns grouped array with `planCount`, summaries |
| `getGroupApprovalStatusSummary(plans)` | e.g. `"3 Pending, 1 Approved"` + `dominantStatus` |
| `getGroupMarkAsDoneSummary(plans)` | e.g. `"2 Done, 3 Pending"` or `"All Done"` |
| `getLessonPlansForGroup(submitterName, subject, sourcePlans)` | Filter plans belonging to one group |

**Group object shape** (returned by `groupLessonPlansByTeacherSubject`):

| Field | Description |
|-------|-------------|
| `key` | `submitterName::subject` |
| `submitterName` | Teacher / coordinator name |
| `submitterRole` | From first plan in group |
| `subject` | Subject name |
| `plans` | Array of individual `LessonPlan` records |
| `planCount` | Number of plans in group |
| `approvalSummary` | Pending / Approved / Rejected counts + label |
| `markAsDoneSummary` | Done / pending counts + label |
| `latestSubmittedAt` | Most recent `submittedAt` in group |

Filters apply to **individual plans first**; grouping runs on the filtered result set.

---

## 6. Form Structure (Add Lesson Plan)

The create form is **unchanged**. It has shared header fields and repeatable plan rows.

### Shared fields (required)

| Field | Control |
|-------|---------|
| Subject | Dropdown |
| Class | Dropdown |
| Section | Dropdown |
| Academic Year | Dropdown |
| Month | Dropdown |
| Teacher's Name | Read-only (`TEACHER_NAME`) |
| Attachment | File input (stores filename only) |

### Per-plan row (required)

| Field | Control |
|-------|---------|
| Title | Text input |
| Description | Textarea |
| From Date | DatePicker |
| To Date | DatePicker |

### Queue workflow

```text
Fill shared fields + first plan row
        │
        ├── [Add More] ──► Row added to queue; form resets plan row fields
        │
        └── [Submit for Approval] ──► Queued rows + current valid row → localStorage
                                        Navigate back to grouped submission list
```

Multiple plans submitted together for the same Subject appear as **one group** on the list (same `submitterName` + `subject`).

---

## 7. Page Structure by Role

### SubmitLessonPlan — grouped main list (Teacher / Coordinator)

**Purpose:** Compact view of all submissions by the logged-in teacher.

**Grouped table columns** (`LessonPlanGroupedTable`)

| Column | Content |
|--------|---------|
| S.No | Index |
| Subject | Group subject (Teacher column hidden — always current user) |
| Lesson Plans | Count badge |
| Status Summary | e.g. `3 Pending, 1 Approved` |
| Action | **View →** opens group detail |

**Filters:** Search, subject, class, section, approval status, submitted date range  
**Actions:** Add Lesson Plan, Export (exports individual plan count)

**Footer:** `Showing X groups (Y lesson plans)`

### LessonPlanGroupDetail — submissions variant

**Route:** `…/lesson-plan-approval/group/:teacherName/:subject`

**Header:** Teacher name · Subject · plan count

**Per-plan cards:**

| Element | Content |
|---------|---------|
| Title | `title` or fallback `Lesson Plan N` |
| Dates | From → To |
| Status | Approval badge |
| View | Expand/collapse full details (class, section, academic year, month, attachment, description) |

No approve/reject on this variant — read-only review for submitter.

### LessonPlanApproval — grouped main list (Director)

**Purpose:** Compact approval queue across all submitters.

**Summary cards** (individual plan counts — unchanged)

| Card | Count source |
|------|--------------|
| Pending approvals | `approvalStatus === 'Pending'` |
| On track | `trackStatus === 'On Track'` |
| Behind schedule | `trackStatus === 'Behind Schedule'` |
| Completed | `trackStatus === 'Completed'` |

**Grouped table columns**

| Column | Content |
|--------|---------|
| S.No | Index |
| Teacher | Name + role |
| Subject | Group subject |
| Lesson Plans | Count badge |
| Status Summary | Approval breakdown |
| Action | **Review →** opens group detail |

**Extra filters:** Track status, submitter role (applied before grouping)

### LessonPlanGroupDetail — Director approval variant

**Route:** `/director/lesson-plan-approval/group/:teacherName/:subject`

Same card layout as submissions variant, plus:

| Action | When |
|--------|------|
| **Approve** | `approvalStatus === 'Pending'` |
| **Reject** | `approvalStatus === 'Pending'` |

Actions apply to **one plan at a time** via `updateLessonPlanStatus(id, status)`. Track status badge shown on Director view.

### MyLessonPlan — grouped main list (Teacher / Coordinator)

**Purpose:** Compact view of **approved** plans only.

**Grouped table columns**

| Column | Content |
|--------|---------|
| Subject | Group subject |
| Lesson Plans | Count badge |
| Status Summary | Mark-as-done progress e.g. `2 Done, 3 Pending` |
| Action | **Open →** opens group detail |

### LessonPlanGroupDetail — Mark as Done variant

**Route:** `…/lesson-plan/my-lesson-plan/group/:teacherName/:subject`

Per-plan cards include:

| Action | Behavior |
|--------|----------|
| Mark as Done checkbox | Opens `MarkAsDoneConfirmModal` → `markLessonPlanAsDone(id)` |
| Done state | Checkbox disabled after `markAsDone === true` |

---

## 8. Lifecycle Workflow

Core business flow is **unchanged**. Grouping affects list navigation only.

```text
┌─────────────────────────────────────────────────────────────────┐
│  CREATE (Teacher / Coordinator) — unchanged                     │
│  AddLessonPlan → individual records → Pending + On Track        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  GROUPED SUBMISSION LIST                                        │
│  Teacher + Subject → one row → View → individual plans          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  REVIEW (Director) — unchanged per plan                         │
│  Grouped list → Review → Approve / Reject each plan             │
│    • Approve  → Approved + Completed                            │
│    • Reject   → Rejected                                        │
└────────────────────────────┬────────────────────────────────────┘
                             │ (if Approved)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  EXECUTE (Teacher / Coordinator) — unchanged per plan           │
│  Grouped My Lesson Plan → Open → Mark as Done per plan          │
└─────────────────────────────────────────────────────────────────┘
```

### Navigation diagram

```text
                     LESSON PLAN LIST (grouped)
                              │
                              ▼
                   GROUP BY TEACHER + SUBJECT
                              │
                              ▼
              ┌───────────────────────────────┐
              │ John | Mathematics | 5 plans    │
              │                        View → │
              └───────────────┬───────────────┘
                              │
                              ▼
                    OPEN GROUP DETAIL
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
         Lesson Plan 1   Lesson Plan 2   Lesson Plan 3
              │               │               │
              ▼               ▼               ▼
      View / Approve    View / Approve   Mark as Done
       (role-based)     (role-based)     (role-based)
```

---

## 9. Title Mappings

| Route pattern | Header title |
|---------------|--------------|
| `/teacher/lesson-plan-approval` | Lesson Plan Approval |
| `/teacher/lesson-plan-approval/add` | Add Lesson Plan |
| `/teacher/lesson-plan-approval/group/:teacherName/:subject` | Lesson Plan Group |
| `/teacher/lesson-plan/my-lesson-plan` | My Lesson Plan |
| `/teacher/lesson-plan/my-lesson-plan/group/:teacherName/:subject` | My Lesson Plan Group |
| `/coordinator/lesson-plan-approval` | Lesson Plan Approval |
| `/coordinator/lesson-plan-approval/add` | Add Lesson Plan |
| `/coordinator/lesson-plan-approval/group/:teacherName/:subject` | Lesson Plan Group |
| `/coordinator/lesson-plan/my-lesson-plan` | My Lesson Plan |
| `/coordinator/lesson-plan/my-lesson-plan/group/:teacherName/:subject` | My Lesson Plan Group |
| `/director/lesson-plan-approval` | Lesson Plan Approval |
| `/director/lesson-plan-approval/group/:teacherName/:subject` | Lesson Plan Review |

Group routes use **dynamic title matchers** in `TitleMappings.jsx` (exact path match does not apply when URL contains encoded params).

---

## 10. Implementation Notes

| Topic | Detail |
|-------|--------|
| **Grouping scope** | Presentation only — records in `localStorage` are never merged |
| **Filter → group order** | Filters run on individual plans; groups built from filtered set |
| **Auth integration** | Submitter identity is hardcoded (`TEACHER_NAME`); not tied to logged-in user |
| **Coordinator role label** | Coordinator `AddLessonPlan` still sets `submitterRole: 'Teacher'` |
| **Coordinator list pages** | Routes import Teacher `SubmitLessonPlan` / `MyLessonPlan`; route prefix detected from pathname |
| **Director approver label** | Approver is **Director** — not “Higher Authority” |
| **Attachments** | File picker stores filename string only — no blob upload |
| **Track status visibility** | Shown on Director group detail; not on grouped main lists |
| **Pagination** | UI present but non-functional (always page 1) |
| **Export** | Still reports individual plan counts |
| **Principal** | No lesson plan routes, pages, or sidebar entries |
| **Stale localStorage** | Clear `school-erp-lesson-plan-approvals` to reload seed data with grouping demo records (LP-008–LP-010) |

---

## 11. Quick Reference Paths

| Resource | Path |
|----------|------|
| Shared data + grouping | `src/Common/LessonPlanApproval/lessonPlanApprovalData.js` |
| Grouped table | `src/Common/LessonPlanApproval/Components/LessonPlanGroupedTable.jsx` |
| Group detail (all variants) | `src/Common/LessonPlanApproval/Components/LessonPlanGroupDetail.jsx` |
| Mark as Done modal | `src/Common/LessonPlanApproval/Components/MarkAsDoneConfirmModal.jsx` |
| Teacher list pages | `src/Pages/Teacher/LessonPlanApproval/SubmitLessonPlan.jsx`, `MyLessonPlan.jsx` |
| Teacher add form | `src/Pages/Teacher/LessonPlanApproval/AddLessonPlan.jsx` |
| Coordinator add form | `src/Pages/Coordinator/LessonPlanApproval/AddLessonPlan.jsx` |
| Director grouped list | `src/Pages/Director/LessonPlanApproval/LessonPlanApproval.jsx` |
| Sidebar config | `src/Common/CommonSidebar/Components/sidebarLinks.js` |
| Title mappings | `src/Common/CommonHeader/Components/TitleMappings.jsx` |
