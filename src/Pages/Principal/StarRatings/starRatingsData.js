export const EMPLOYEE_TYPE_OPTIONS = [
    { value: 'teacher', label: 'Teacher' },
    { value: 'coordinator', label: 'Co-ordinator' },
]

export const RATING_FIELDS_BY_TYPE = {
    teacher: [
        { key: 'attendance', label: 'Attendance Rating' },
        { key: 'teaching', label: 'Teaching Rating' },
        { key: 'task', label: 'Task Completion Rating' },
        { key: 'discipline', label: 'Discipline Rating' },
    ],
    coordinator: [
        { key: 'attendance', label: 'Attendance Rating' },
        { key: 'coordination', label: 'Coordination Rating' },
        { key: 'task', label: 'Task Completion Rating' },
        { key: 'leadership', label: 'Leadership Rating' },
    ],
}

export const MOCK_RATINGS = [
    {
        ratingId: 'TR001',
        month: 'May 2026',
        employeeType: 'teacher',
        employeeName: 'Mr. Ravi Kumar',
        employeeId: 'TEA-1001',
        department: 'Mathematics',
        ratings: { attendance: 4, teaching: 5, task: 3, discipline: 4 },
        overallPoints: 190,
        description: 'Excellent teacher with outstanding classroom performance.',
    },
    {
        ratingId: 'TR002',
        month: 'May 2026',
        employeeType: 'teacher',
        employeeName: 'Ms. Anitha Verma',
        employeeId: 'TEA-1002',
        department: 'English',
        ratings: { attendance: 5, teaching: 4, task: 4, discipline: 5 },
        overallPoints: 195,
        description: 'Consistent punctuality and strong student engagement.',
    },
    {
        ratingId: 'CR001',
        month: 'May 2026',
        employeeType: 'coordinator',
        employeeName: 'Sandy Selva',
        employeeId: 'COO-1001',
        department: 'Science',
        ratings: { attendance: 4, coordination: 5, task: 4, leadership: 4 },
        overallPoints: 185,
        description: 'Proactive in department coordination and exam scheduling.',
    },
    {
        ratingId: 'CR002',
        month: 'May 2026',
        employeeType: 'coordinator',
        employeeName: 'John Milton',
        employeeId: 'COO-1002',
        department: 'Mathematics',
        ratings: { attendance: 5, coordination: 4, task: 5, leadership: 3 },
        overallPoints: 180,
        description: 'Strong task follow-up; leadership workshops recommended.',
    },
]

export const getEmployeeTypeLabel = (type) =>
    EMPLOYEE_TYPE_OPTIONS.find((opt) => opt.value === type)?.label ?? type

export const getRatingValue = (entry, fieldKey) => entry.ratings[fieldKey] ?? 0

export const computeOverallPoints = (ratings) =>
    Object.values(ratings).reduce((sum, val) => sum + (val || 0), 0) * 10
