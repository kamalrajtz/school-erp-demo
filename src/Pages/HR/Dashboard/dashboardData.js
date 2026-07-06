export const KPI_CARDS = [
    { label: 'Total Employees', value: '248', sub: 'All departments' },
    { label: 'Active Employees', value: '231', sub: 'Currently employed' },
    { label: 'New Joiners', value: '12', sub: 'This month' },
    { label: 'Pending Onboarding', value: '7', sub: 'Awaiting completion' },
    { label: 'Open Vacancies', value: '9', sub: 'Active job postings' },
    { label: 'Employees on Leave', value: '18', sub: 'Today' },
    { label: 'Upcoming Trainings', value: '5', sub: 'Next 30 days' },
    { label: 'Pending Performance Reviews', value: '14', sub: 'Due this quarter' },
]

export const DEPARTMENT_EMPLOYEES = [
    { department: 'Academic', count: 86 },
    { department: 'Administration', count: 42 },
    { department: 'Finance', count: 18 },
    { department: 'HR', count: 12 },
    { department: 'IT Support', count: 15 },
    { department: 'Transport', count: 24 },
    { department: 'Housekeeping', count: 28 },
    { department: 'Canteen', count: 23 },
]

export const RECRUITMENT_STATUS = [
    { status: 'Open', count: 9 },
    { status: 'Screening', count: 14 },
    { status: 'Interview', count: 8 },
    { status: 'Offer Sent', count: 5 },
    { status: 'Hired', count: 6 },
    { status: 'On Hold', count: 3 },
]

export const MONTHLY_JOINING_TREND = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    joinings: [6, 8, 5, 10, 7, 12],
}

export const LEAVE_DISTRIBUTION = [
    { type: 'Casual Leave', count: 42 },
    { type: 'Sick Leave', count: 28 },
    { type: 'Earned Leave', count: 35 },
    { type: 'Maternity / Paternity', count: 6 },
    { type: 'Unpaid Leave', count: 9 },
]

export const CHART_COLORS = {
    primary: '#515DEF',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#FF5722',
    info: '#2196F3',
    purple: '#9C27B0',
    teal: '#009688',
}

export const PIE_COLORS = [
    CHART_COLORS.primary,
    CHART_COLORS.success,
    CHART_COLORS.warning,
    CHART_COLORS.info,
    CHART_COLORS.purple,
    CHART_COLORS.teal,
]
