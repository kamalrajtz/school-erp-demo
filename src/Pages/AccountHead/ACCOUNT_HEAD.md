# Account Head — Finance Module Documentation

> **Role:** `AccountHead` (Finance Manager)  
> **Base URL:** `/account-head`  
> **Layout:** `AccountHeadLayout` → `CommonSidebar` + `CommonHeader` + `AccountHeadRoutes`  
> **Login:** `accounthead@school.com`  
> **Last reviewed:** July 2026

---

## 1. What Is This Module?

The **Account Head** portal is the central finance operations layer of the school ERP. It gives the Finance Manager end-to-end control over:

| Domain | What it covers |
|--------|----------------|
| **Fees** | Fee structure setup, collection, concessions, defaulters, receipts |
| **Transport** | Fleet costs, maintenance, compliance, fuel claims, driver salaries |
| **Wallets** | Student/staff digital wallets — recharge, spend tracking, payment methods |
| **Collections** | School-wide money in/out, cash flow, transaction timeline |
| **Accounting** | General ledger, chart of accounts, journal vouchers, bank reconciliation, financial statements |
| **Approvals** | Claims and expense approval workflow with configurable rules |
| **Reports** | Income/expenditure analytics, trends, financial overview |
| **Settings** | Institution config, payment modes, late fees, tax, integrations |

This is currently a **frontend demo** — all pages use mock data from local `*Data.js` files (no live API integration yet). One exception: **Wallet offline recharge** updates local state in `WalletManagement.jsx` when a recharge is submitted via email lookup.

---

## 2. Sidebar Navigation

All visible sidebar links are defined in `src/Common/CommonSidebar/Components/sidebarLinks.js` under `accountHeadSidebarLinks`.

| # | Sidebar Label | Route | Icon |
|---|---------------|-------|------|
| 1 | Dashboard | `/account-head/dashboard` | LayoutDashboard |
| 2 | Fees Management | `/account-head/fees-management` | BadgeDollarSign |
| 3 | Transport Finance | `/account-head/transport-finance` | Bus |
| 4 | Wallet Management | `/account-head/wallet-management` | Wallet |
| 5 | Approvals | `/account-head/approvals` | ClipboardCheck |
| 6 | Reports & Analytics | `/account-head/reports-analytics` | BarChart3 |
| 7 | Settings | `/account-head/settings` | Settings |

> **Note:** Two additional pages are **routed but not in the sidebar** (see §3): **Collections** and **Accounting**. They are fully built and accessible via direct URL.

---

## 3. Full Route Map

Defined in `src/Routes/AccountHeadRoutes.jsx`. Header titles are in `src/Common/CommonHeader/Components/TitleMappings.jsx`.

| Route | Page Component | Header Title | In Sidebar? |
|-------|----------------|--------------|-------------|
| `/account-head/dashboard` | `Dashboard` | Finance Dashboard | ✅ |
| `/account-head/fees-management` | `FeesManagement` | Fees Management | ✅ |
| `/account-head/transport-finance` | `TransportFinance` | Transport Finance | ✅ |
| `/account-head/collections` | `Collections` | Collections | ❌ |
| `/account-head/wallet-management` | `WalletManagement` | Wallet Management | ✅ |
| `/account-head/accounting` | `Accounting` | Accounting | ❌ |
| `/account-head/approvals` | `Approvals` | Approvals | ✅ |
| `/account-head/reports-analytics` | `ReportsAnalytics` | Reports & Analytics | ✅ |
| `/account-head/settings` | `Settings` | Settings | ✅ |
| `*` (fallback) | Redirect → dashboard | — | — |

---

## 4. Page-by-Page Breakdown

### 4.1 Dashboard
**Path:** `Dashboard/Dashboard.jsx` · **Data:** `dashboardData.js`

**Purpose:** Real-time finance command center — collections, expenses, approvals, and pending fees at a glance.

**What's on the page:**
- **Time filters:** Today / Week / Month / Year + custom date picker + refresh + export (PDF/Excel)
- **5 KPI cards:** Today's Collection, Today's Expenses, Pending Requests, Refund Requests, Pending Fees — each with sparklines or status badges
- **Collection Split** (ECharts donut): Online Transfer vs Offline Cash with amounts
- **Income vs Expense** (ECharts bar chart): Daily / Weekly / Monthly toggle
- **Approval Status** (ECharts donut): Approved / Pending / Rejected with success rate
- **Recent Collections table:** Receipt No, Student, Category, Amount, Status, Payment Mode, Collected By, Date
- **Recent Expenses table:** Expense ID, Vendor/Dept, Category, Amount, Status, Payment Mode, Approved By, Date

**Concept:** Single-pane-of-glass for daily finance health — inflow vs outflow, approval pipeline, and actionable recent activity.

---

### 4.2 Fees Management
**Path:** `FeesManagement/FeesManagement.jsx` · **Data:** `feesManagementData.js`

**Purpose:** Full fee lifecycle — define structures, collect payments, manage concessions, chase defaulters, and handle receipts.

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Fee Structure | Inline `FeeStructureTab` | Excel import zone, quick stats (grades configured, categories, terms, annual billing, setup progress), configured fee structures table (grade, term, tuition/exam/lab/activity fees, total, status), filters by academic year/term/grade |
| Fee Collection | `FeeCollectionTab` | Summary cards (billed, collected, outstanding, collected today), payment method donut chart, collection-by-class bar chart, fee transactions register with status filters |
| Concessions & Waivers | `ConcessionsWaiversTab` | Summary (total concessions, scholarships, sibling discounts, special waivers), monthly trend chart, concession distribution pie, concessions register with type/status filters, detail offcanvas |
| Defaulters | `DefaultersTab` | Summary (total defaulters, overdue amount, recovery rate, contacted today), overdue aging chart, outstanding-by-grade chart, recovery trend, defaulters register with severity/class filters |
| Receipt Management | `ReceiptManagementTab` | Summary (receipts generated, reprints, voided, pending), generation trend chart, payment mode breakdown, receipts register + activity log |

**Header actions (context-sensitive):**
- Fee Structure → Upload Excel, Configure Fee Structure, Define Fee Structure
- Fee Collection → Export Report, Send Reminder, Collect Fee
- Concessions → Export, Import Applications, Add Concession
- Defaulters → Export, Bulk Reminder
- Receipts → Bulk Print, Export Register, Generate Receipt

**Modals:**
- `DefineFeeStructureModal` — create fee structure per grade/term
- `ConfigureFeeStructureModal` — set grades, terms, fee categories
- `CollectFeeModal` — record a fee payment
- `ConcessionDetailsOffcanvas` — view concession application details

**Concept:** Fee operations from setup → billing → collection → exceptions (concessions) → recovery (defaulters) → audit trail (receipts).

---

### 4.3 Transport Finance
**Path:** `TransportFinance/TransportFinance.jsx` · **Data:** `transportFinanceData.js`

**Purpose:** Financial management of the school transport fleet — vehicles, maintenance, compliance, fuel claims, and staff salaries.

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Fleet & Service | `FleetServiceTab` | Fleet summary (total vehicles, active, under service, service due), vehicle register (reg no, type, route, driver, service dates, odometer, status), search/filter, Add Vehicle |
| Maintenance & Damage | `MaintenanceDamageTab` | Maintenance summary, damage log register, service cost tracking, Log Damage action |
| Compliance | `ComplianceTab` | Document expiry tracking (insurance, fitness, permit, pollution), compliance status per vehicle |
| Fuel & Expense Claims | `FuelExpenseClaimsTab` | Fuel claim register, claim amounts, approval status, driver-wise breakdown |
| Staff Salaries | `StaffSalariesTab` | Driver/conductor salary register, disbursement status, route-wise allocation |

**Modals:**
- `AddVehicleModal` — register a new bus/van
- `LogDamageModal` — log vehicle damage and repair cost

**Concept:** Transport as a cost center — fleet uptime, compliance risk, operational spend (fuel/service), and payroll tied to routes.

---

### 4.4 Wallet Management
**Path:** `WalletManagement/WalletManagement.jsx` · **Data:** `walletManagementData.js`

**Purpose:** Platform-wide digital wallet system for students, staff, and parents — used for canteen, stationery, events, etc.

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Wallet Overview | `WalletOverviewTab` | Summary (total held, active wallets, recharges today, spent today), balance-by-role breakdown, spend categories |
| User Wallets | `UserWalletsTab` | Per-user wallet list (name, email, role, wallet ID, balance, last recharge, status), role filter |
| Recharge Records | `RechargeRecordsTab` | Recharge transaction log (user, mode, amount, date/time, status) |
| Spending History | `SpendingHistoryTab` | Spend log by category (canteen, stationery, events, other) |
| Recharge Options | `RechargeOptionsTab` | Configured recharge methods (UPI, card, offline), gateway link, Add Method |

**Interactive behavior:**
- **Offline recharge** (`RechargeWalletModal`): Look up wallet by email → add amount → updates `userWallets` balance and appends to `rechargeRecords` in component state

**Modals:**
- `RechargeWalletModal` — offline wallet top-up by email
- `AddRechargeMethodModal` — add a new recharge payment method

**Concept:** Closed-loop campus payments — parents/staff preload wallets; school tracks float, recharge velocity, and spend patterns.

---

### 4.5 Approvals
**Path:** `Approvals/Approvals.jsx` · **Data:** `approvalsData.js`

**Purpose:** Central approval queue for claims and expenses raised across departments (transport fuel, waivers, repairs, procurement, facilities).

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Pending | `PendingTab` | Summary (pending count, >48hr backlog, approved/rejected this month), searchable pending requests table, Review modal with claim detail + Approve/Reject actions |
| Approved | `ApprovedTab` | Approved summary (count, avg approval time, disbursed vs awaiting payout), approved requests register |
| Rejected | `RejectedTab` | Rejected summary, rejected requests register with rejection reasons |
| Approval Rules | `ApprovalRulesTab` | Configurable rules (amount thresholds, department routing, auto-approve limits) |

**Department filter:** All Departments / Transport / Academics / Admin / Facilities

**Modals:**
- `ReviewRequestModal` (in `PendingTab`) — full claim detail with document reference

**Concept:** Finance gatekeeping — every non-routine spend or waiver flows through a traceable approve/reject pipeline with SLA visibility.

---

### 4.6 Reports & Analytics
**Path:** `ReportsAnalytics/ReportsAnalytics.jsx` · **Data:** `reportsAnalyticsData.js`

**Purpose:** Consolidated financial reporting across all modules — income, expenditure, surplus, and trends.

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Financial Overview | `FinancialOverviewTab` | YTD income/expenditure/net surplus KPIs, fee collection efficiency, income vs expenditure trend chart, income mix donut |
| Income Reports | `IncomeReportsTab` | Report tiles (fee collection, defaulter gap, transport income, donations), income breakdown table with vs-last-term trends |
| Expenditure Reports | `ExpenditureReportsTab` | Report tiles (payroll, transport, maintenance, vendor ledger), expenditure breakdown table |
| Trends & Patterns | `TrendsPatternsTab` | 3-month avg surplus, peak spend/collection months, expense volatility, year-on-year comparison bars |

**Period filter:** This Term / This Year / Custom Range

**Concept:** Management reporting — where money comes from, where it goes, and whether the school is running a surplus.

---

### 4.7 Settings
**Path:** `Settings/Settings.jsx` · **Data:** `settingsData.js`

**Purpose:** Finance module configuration — institution details, payment modes, late fees, tax, and (built but not yet wired) roles, notifications, integrations.

**Tabs (wired in UI):**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| General | `GeneralTab` | Institution name, GSTIN, academic year, financial year start, currency, number/date format, term structure, books-closure toggles |
| Payment Configuration | `PaymentConfigurationTab` | Accepted payment modes (UPI, card, net banking, cash, cheque), late fee rules, GST/TDS settings |

**Tabs (built, not yet in `SETTINGS_TABS`):**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Roles & Permissions | `RolesPermissionsTab` | Finance module access matrix by role (Finance Manager, Principal, Transport Manager, Cashier, Auditor) |
| Notifications | `NotificationsTab` | Finance manager alerts + parent/student communication toggles |
| Integrations | `IntegrationsTab` | Connected services (SBI, Razorpay, WhatsApp, SMTP, biometric, GST API) with status badges |

**Concept:** Foundational config that drives how fees are billed, payments accepted, books closed, and who can do what.

---

### 4.8 Collections *(routed, not in sidebar)*
**Path:** `Collections/Collections.jsx` · **Data:** `collectionsData.js`

**Purpose:** School-wide cash position — all money in and out across fee, transport, canteen, donations, salaries, and operations.

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| Overview | `OverviewTab` | Inflow/outflow/net/closing balance KPIs, money-in sources breakdown, money-out breakdown, inflow vs outflow trend chart |
| Money In — Sources | `MoneyInTab` | Collections summary, income register (source, reference, mode, amount, status) |
| Money Out — Expenses | `MoneyOutTab` | Expense summary, expense register (category, paid-to, mode, amount, status) |
| Transaction Timeline | `TransactionTimelineTab` | Chronological feed of all in/out transactions |
| Cash Flow Trends | `CashFlowTrendsTab` | Monthly surplus/deficit, rolling averages, forecast-style summary |

**Period filter:** This Month / This Term / This Year

**Concept:** Treasury view — net cash position and where liquidity is moving, separate from module-specific views (fees, transport, etc.).

---

### 4.9 Accounting *(routed, not in sidebar)*
**Path:** `Accounting/Accounting.jsx` · **Data:** `accountingData.js`

**Purpose:** Double-entry bookkeeping — ledger, chart of accounts, vouchers, bank reconciliation, and financial statements.

**Tabs:**

| Tab | Component | What's on the page |
|-----|-----------|-------------------|
| General Ledger | `GeneralLedgerTab` | Ledger summary (debits, credits, open entries, last closed period), ledger entries table (account, voucher, debit/credit, narration, status) |
| Chart of Accounts | `ChartOfAccountsTab` | Hierarchical COA (Assets, Liabilities, Income, Expenses) with balances, Add Account |
| Journal Vouchers | `JournalVouchersTab` | Voucher register (draft/posted), New Voucher |
| Bank Reconciliation | `BankReconciliationTab` | Bank statement vs books comparison, unmatched entries |
| Financial Statements | `FinancialStatementsTab` | Trial balance, P&L, balance sheet summaries |

**Modals:**
- `AddAccountModal` — add a new ledger account
- `NewVoucherModal` — create a journal voucher

**Concept:** Formal accounting layer beneath operational finance — every fee receipt, salary payment, and transport expense posts to the books.

---

## 5. Folder Structure

```
src/Pages/AccountHead/
├── ACCOUNT_HEAD.md                 ← this file
├── Dashboard/
│   ├── Dashboard.jsx
│   └── dashboardData.js
├── FeesManagement/
│   ├── FeesManagement.jsx
│   ├── feesManagementData.js
│   └── Components/
│       ├── FeeCollectionTab.jsx
│       ├── ConcessionsWaiversTab.jsx
│       ├── DefaultersTab.jsx
│       ├── ReceiptManagementTab.jsx
│       ├── DefineFeeStructureModal.jsx
│       ├── ConfigureFeeStructureModal.jsx
│       ├── CollectFeeModal.jsx
│       └── ConcessionDetailsOffcanvas.jsx
├── TransportFinance/
│   ├── TransportFinance.jsx
│   ├── transportFinanceData.js
│   └── Components/
│       ├── FleetServiceTab.jsx
│       ├── MaintenanceDamageTab.jsx
│       ├── ComplianceTab.jsx
│       ├── FuelExpenseClaimsTab.jsx
│       ├── StaffSalariesTab.jsx
│       ├── AddVehicleModal.jsx
│       ├── LogDamageModal.jsx
│       └── TransportShared.jsx
├── WalletManagement/
│   ├── WalletManagement.jsx
│   ├── walletManagementData.js
│   └── Components/
│       ├── WalletOverviewTab.jsx
│       ├── UserWalletsTab.jsx
│       ├── RechargeRecordsTab.jsx
│       ├── SpendingHistoryTab.jsx
│       ├── RechargeOptionsTab.jsx
│       ├── RechargeWalletModal.jsx
│       └── WalletShared.jsx
├── Approvals/
│   ├── Approvals.jsx
│   ├── approvalsData.js
│   └── Components/
│       ├── PendingTab.jsx
│       ├── ApprovedTab.jsx
│       ├── RejectedTab.jsx
│       ├── ApprovalRulesTab.jsx
│       └── ApprovalsShared.jsx
├── ReportsAnalytics/
│   ├── ReportsAnalytics.jsx
│   ├── reportsAnalyticsData.js
│   └── Components/
│       ├── FinancialOverviewTab.jsx
│       ├── IncomeReportsTab.jsx
│       ├── ExpenditureReportsTab.jsx
│       ├── TrendsPatternsTab.jsx
│       └── ReportsShared.jsx
├── Collections/
│   ├── Collections.jsx
│   ├── collectionsData.js
│   └── Components/
│       ├── OverviewTab.jsx
│       ├── MoneyInTab.jsx
│       ├── MoneyOutTab.jsx
│       ├── TransactionTimelineTab.jsx
│       ├── CashFlowTrendsTab.jsx
│       └── CollectionsShared.jsx
├── Accounting/
│   ├── Accounting.jsx
│   ├── accountingData.js
│   └── Components/
│       ├── GeneralLedgerTab.jsx
│       ├── ChartOfAccountsTab.jsx
│       ├── JournalVouchersTab.jsx
│       ├── BankReconciliationTab.jsx
│       ├── FinancialStatementsTab.jsx
│       └── AccountingShared.jsx
└── Settings/
    ├── Settings.jsx
    ├── settingsData.js
    └── Components/
        ├── GeneralTab.jsx
        ├── PaymentConfigurationTab.jsx
        ├── RolesPermissionsTab.jsx      ← built, not wired
        ├── NotificationsTab.jsx         ← built, not wired
        ├── IntegrationsTab.jsx          ← built, not wired
        └── SettingsShared.jsx
```

**Supporting files outside this folder:**

| File | Role |
|------|------|
| `src/Routes/AccountHeadRoutes.jsx` | Route definitions |
| `src/Layout/AccountHeadLayout.jsx` | Shell layout (sidebar + header + routes) |
| `src/Common/CommonSidebar/Components/sidebarLinks.js` | `accountHeadSidebarLinks` |
| `src/Common/CommonHeader/Components/TitleMappings.jsx` | Page header titles |
| `src/context/AuthContext.jsx` | Role `accounthead`, home path `/account-head/dashboard` |

---

## 6. Shared UI Patterns

Across all pages, the module follows consistent patterns:

| Pattern | Usage |
|---------|-------|
| **Tab navigation** | Horizontal scrollable tabs with active underline (`#515DEF`) |
| **Summary cards** | 4 KPI cards per tab — label, value, sub-text, icon tone |
| **Data tables** | `bg-[#EDEEF5]` headers, status badges, pagination, search/filter |
| **ECharts charts** | Donut (split/mix), bar (trends), line (recovery/trends) via `echarts-for-react` |
| **Export** | `ExportModal` from `Common/CommonComponents/ExportModal` |
| **Modals** | Fixed overlay, rounded-2xl white panel, close on backdrop click |
| **Mock data** | Each module has a `*Data.js` file exporting constants, arrays, badge color maps |
| **Academic year / period filters** | Dropdown in page header for time-scoped views |

---

## 7. Key Business Concepts

### Fee lifecycle
```
Define Structure → Bill Students → Collect Payment → Issue Receipt
                        ↓                    ↓
              Concession/Waiver         Defaulter Recovery
```

### Approval workflow
```
Department raises claim → Pending queue → Finance Manager reviews → Approved / Rejected → Disbursement
                                              ↓
                                    Approval Rules (thresholds, routing)
```

### Wallet economy
```
Parent/Staff recharges wallet → Balance held by school (float) → Spent at canteen/store/events → Tracked in spending history
```

### Accounting double-entry
```
Operational event (fee, salary, repair) → Journal Voucher → General Ledger (debit + credit) → Financial Statements
```

### Collections vs module views
- **Fees Management** = student fee operations
- **Collections** = all school money in/out (fees + transport + canteen + donations + salaries + ops)
- **Accounting** = formal books (ledger, COA, reconciliation)
- **Reports & Analytics** = aggregated insights across all of the above

---

## 8. Implementation Status

| Area | Status |
|------|--------|
| Dashboard | ✅ Complete (mock data) |
| Fees Management — all 5 tabs | ✅ Complete |
| Transport Finance — all 5 tabs | ✅ Complete |
| Wallet Management — all 5 tabs | ✅ Complete (+ offline recharge state update) |
| Approvals — all 4 tabs | ✅ Complete |
| Reports & Analytics — all 4 tabs | ✅ Complete |
| Settings — General + Payment Config | ✅ Wired in UI |
| Settings — Roles, Notifications, Integrations | ⚠️ Built but not in `SETTINGS_TABS` |
| Collections — all 5 tabs | ✅ Complete, ❌ not in sidebar |
| Accounting — all 5 tabs | ✅ Complete, ❌ not in sidebar |
| API / backend integration | ❌ Not started |
| Export (PDF/Excel) | ⚠️ Modal UI only — no file generation |

---

## 9. Quick Reference — Sidebar vs Routes

```
SIDEBAR (7)                    ROUTES (9)
─────────────                  ──────────────
Dashboard                  →   Dashboard
Fees Management            →   Fees Management
Transport Finance          →   Transport Finance
Wallet Management          →   Wallet Management
Approvals                  →   Approvals
Reports & Analytics        →   Reports & Analytics
Settings                   →   Settings
                               Collections        ← route only
                               Accounting         ← route only
```

To add Collections and Accounting to the sidebar, extend `accountHeadSidebarLinks` in `sidebarLinks.js` with entries for `/account-head/collections` and `/account-head/accounting`.

To wire the remaining Settings tabs, add `roles-permissions`, `notifications`, and `integrations` to `SETTINGS_TABS` in `settingsData.js` and render them in `Settings.jsx`.
