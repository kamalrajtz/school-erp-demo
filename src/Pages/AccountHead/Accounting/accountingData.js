export const ACCOUNTING_TABS = [
    { id: 'general-ledger', label: 'General Ledger' },
    { id: 'chart-of-accounts', label: 'Chart of Accounts' },
    { id: 'journal-vouchers', label: 'Journal Vouchers' },
    { id: 'bank-reconciliation', label: 'Bank Reconciliation' },
    { id: 'financial-statements', label: 'Financial Statements' },
]

export const ACCOUNTING_YEARS = ['2025–26', '2024–25', '2023–24']

export const LEDGER_SUMMARY = [
    { label: 'Total Debits (YTD)', value: '₹2.86 Cr', sub: 'all accounts', iconTone: 'info' },
    { label: 'Total Credits (YTD)', value: '₹2.86 Cr', sub: 'books balanced', subTone: 'success', iconTone: 'success' },
    { label: 'Open Entries', value: '4', sub: 'unposted / draft', iconTone: 'warning' },
    { label: 'Last Closed Period', value: 'May 2026', sub: 'books locked', iconTone: 'info' },
]

export const LEDGER_ENTRIES = [
    {
        id: 'LE-001',
        date: '26 Jun',
        account: 'Bank — SBI Current A/c',
        voucherNo: 'JV-2026-0884',
        debit: '₹12,400',
        credit: '—',
        narration: 'Fee receipt — Arun Raj',
        status: 'Posted',
    },
    {
        id: 'LE-002',
        date: '26 Jun',
        account: 'Fee Income — Tuition',
        voucherNo: 'JV-2026-0884',
        debit: '—',
        credit: '₹12,400',
        narration: 'Fee receipt — Arun Raj',
        status: 'Posted',
    },
    {
        id: 'LE-003',
        date: '25 Jun',
        account: 'Salary Expense — Teaching',
        voucherNo: 'JV-2026-0881',
        debit: '₹14,80,000',
        credit: '—',
        narration: 'June salary disbursal',
        status: 'Posted',
    },
    {
        id: 'LE-004',
        date: '25 Jun',
        account: 'Bank — SBI Current A/c',
        voucherNo: 'JV-2026-0881',
        debit: '—',
        credit: '₹14,80,000',
        narration: 'June salary disbursal',
        status: 'Posted',
    },
    {
        id: 'LE-005',
        date: '24 Jun',
        account: 'Transport Expense — Fuel',
        voucherNo: 'JV-2026-0878',
        debit: '₹6,200',
        credit: '—',
        narration: 'Service payment — Sri Balaji Motors',
        status: 'Draft',
    },
]

export const CHART_OF_ACCOUNTS = {
    assets: {
        title: 'Assets',
        rows: [
            { label: '1000 · Current Assets', amount: '₹61.4L', head: true },
            { label: '1010 · Bank — SBI Current A/c', amount: '₹52.8L' },
            { label: '1020 · Cash in Hand', amount: '₹3.2L' },
            { label: '1030 · Wallet Float (User Wallets)', amount: '₹5.4L' },
            { label: '1100 · Receivables', amount: '₹9.5L', head: true },
            { label: '1110 · Student Fee Receivable', amount: '₹9.5L' },
        ],
    },
    liabilities: {
        title: 'Liabilities & Equity',
        rows: [
            { label: '2000 · Current Liabilities', amount: '₹6.8L', head: true },
            { label: '2010 · TDS Payable', amount: '₹1.4L' },
            { label: '2020 · Vendor Payables', amount: '₹4.2L' },
            { label: '2030 · Wallet Liability (User Balances)', amount: '₹1.2L' },
        ],
    },
    income: {
        title: 'Income',
        rows: [
            { label: '4000 · Fee Income', amount: '₹2.41 Cr', head: true },
            { label: '4010 · Tuition Fee', amount: '₹1.86 Cr' },
            { label: '4020 · Transport Fee', amount: '₹28.4L' },
            { label: '4030 · Other Income (Canteen, Donations)', amount: '₹26.6L' },
        ],
    },
    expenses: {
        title: 'Expenses',
        rows: [
            { label: '5000 · Salary Expense', amount: '₹1.92 Cr', head: true },
            { label: '5010 · Teaching Staff', amount: '₹1.68 Cr' },
            { label: '5020 · Non-Teaching / Transport Staff', amount: '₹24L' },
            { label: '5100 · Operational Expense', amount: '₹38.4L', head: true },
            { label: '5110 · Transport (Fuel, Service)', amount: '₹18.6L' },
            { label: '5120 · Utilities & Maintenance', amount: '₹19.8L' },
        ],
    },
}

export const JOURNAL_VOUCHERS = [
    {
        id: 'JV-2026-0884',
        type: 'Receipt',
        date: '26 Jun',
        narration: 'Fee receipt — Arun Raj',
        amount: '₹12,400',
        status: 'Posted',
    },
    {
        id: 'JV-2026-0881',
        type: 'Payment',
        date: '25 Jun',
        narration: 'June salary disbursal',
        amount: '₹14,80,000',
        status: 'Posted',
    },
    {
        id: 'JV-2026-0878',
        type: 'Journal',
        date: '24 Jun',
        narration: 'Transport service accrual',
        amount: '₹6,200',
        status: 'Draft',
    },
    {
        id: 'JV-2026-0875',
        type: 'Contra',
        date: '23 Jun',
        narration: 'Cash deposit to bank',
        amount: '₹1,20,000',
        status: 'Posted',
    },
]

export const RECONCILIATION_SUMMARY = [
    { label: 'Bank Balance (Statement)', value: '₹52.8L', sub: 'as per SBI statement', iconTone: 'info' },
    { label: 'Book Balance', value: '₹52.6L', sub: 'as per ledger', iconTone: 'info' },
    { label: 'Unreconciled Difference', value: '₹20,000', sub: '3 items pending', subTone: 'danger', iconTone: 'danger' },
    { label: 'Last Reconciled', value: '20 Jun', sub: 'by Finance Manager', iconTone: 'success' },
]

export const RECONCILIATION_ITEMS = [
    {
        id: 'BR-001',
        date: '26 Jun',
        description: 'NEFT — fee collections batch',
        bankAmount: '₹4,12,000',
        bookAmount: '₹4,12,000',
        status: 'Matched',
    },
    {
        id: 'BR-002',
        date: '25 Jun',
        description: 'Salary disbursal — June',
        bankAmount: '₹14,80,000',
        bookAmount: '₹14,80,000',
        status: 'Matched',
    },
    {
        id: 'BR-003',
        date: '23 Jun',
        description: 'Bank charges — quarterly',
        bankAmount: '₹450',
        bookAmount: '—',
        status: 'Unmatched',
    },
    {
        id: 'BR-004',
        date: '21 Jun',
        description: 'Interest credited',
        bankAmount: '₹1,250',
        bookAmount: '—',
        status: 'Unmatched',
    },
    {
        id: 'BR-005',
        date: '18 Jun',
        description: 'Cheque #004821 — Anand Auto Works',
        bankAmount: '—',
        bookAmount: '₹22,000',
        status: 'Pending Clearance',
    },
]

export const FINANCIAL_STATEMENT_TYPES = ['Income & Expenditure', 'Balance Sheet', 'Receipts & Payments']

export const INCOME_EXPENDITURE = [
    { label: 'Income', amount: '', bold: true },
    { label: 'Fee Income', amount: '2,41,00,000', indent: true },
    { label: 'Other Income', amount: '9,00,000', indent: true },
    { label: 'Total Income', amount: '2,50,00,000', total: true },
    { label: 'Expenditure', amount: '', bold: true },
    { label: 'Salary Expense', amount: '1,92,00,000', indent: true },
    { label: 'Operational Expense', amount: '38,40,000', indent: true },
    { label: 'Total Expenditure', amount: '2,30,40,000', total: true },
    { label: 'Net Surplus', amount: '19,60,000', total: true, surplus: true },
]

export const ledgerStatusBadgeColor = {
    Posted: 'bg-[#4CAF5033] text-[#4CAF50]',
    Draft: 'bg-[#FF980033] text-[#FF9800]',
}

export const voucherTypeBadgeColor = {
    Receipt: 'bg-[#515DEF33] text-[#515DEF]',
    Payment: 'bg-[#FF980033] text-[#FF9800]',
    Journal: 'bg-[#66708533] text-[#667085]',
    Contra: 'bg-[#66708533] text-[#667085]',
}

export const voucherStatusBadgeColor = {
    Posted: 'bg-[#4CAF5033] text-[#4CAF50]',
    Draft: 'bg-[#FF980033] text-[#FF9800]',
}

export const reconciliationStatusBadgeColor = {
    Matched: 'bg-[#4CAF5033] text-[#4CAF50]',
    Unmatched: 'bg-[#FF980033] text-[#FF9800]',
    'Pending Clearance': 'bg-[#FF572233] text-[#FF5722]',
}
