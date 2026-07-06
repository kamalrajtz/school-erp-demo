export const DEPARTMENTS = [
    'Academic',
    'Administration',
    'Finance',
    'HR',
    'IT Support',
    'Transport',
    'Housekeeping',
    'Canteen',
]

export const EMPLOYEE_STATUSES = ['Active', 'On Leave', 'Probation', 'Inactive']

export const employeeStatusBadgeColor = {
    Active: 'bg-[#4CAF5033] text-[#4CAF50]',
    'On Leave': 'bg-[#FF980033] text-[#FF9800]',
    Probation: 'bg-[#2196F333] text-[#2196F3]',
    Inactive: 'bg-[#66708533] text-[#667085]',
}

export const EMPLOYEES = [
    {
        id: 'EMP-2026-001',
        name: 'Priya Sharma',
        department: 'Academic',
        designation: 'Senior Teacher — Mathematics',
        status: 'Active',
        joiningDate: '12-08-2019',
    },
    {
        id: 'EMP-2026-002',
        name: 'Rahul Mehta',
        department: 'Finance',
        designation: 'Accounts Executive',
        status: 'Active',
        joiningDate: '05-03-2021',
    },
    {
        id: 'EMP-2026-003',
        name: 'Anita Desai',
        department: 'HR',
        designation: 'HR Executive',
        status: 'Active',
        joiningDate: '18-01-2022',
    },
    {
        id: 'EMP-2026-004',
        name: 'Vikram Singh',
        department: 'Transport',
        designation: 'Fleet Supervisor',
        status: 'On Leave',
        joiningDate: '22-11-2020',
    },
    {
        id: 'EMP-2026-005',
        name: 'Neha Gupta',
        department: 'IT Support',
        designation: 'IT Support Engineer',
        status: 'Probation',
        joiningDate: '02-06-2026',
    },
    {
        id: 'EMP-2026-006',
        name: 'Suresh Pillai',
        department: 'Housekeeping',
        designation: 'Housekeeping Supervisor',
        status: 'Active',
        joiningDate: '09-07-2018',
    },
]

const PROFILE_DETAILS = {
    'EMP-2026-001': {
        personal: {
            firstName: 'Priya',
            lastName: 'Sharma',
            gender: 'Female',
            dateOfBirth: '14-05-1988',
            bloodGroup: 'B+',
            email: 'priya.sharma@school.com',
            mobile: '+91 98765 43210',
            address: '42, Green Park, Delhi — 110016',
            emergencyContact: 'Rajesh Sharma (+91 98100 11223)',
        },
        employment: {
            employeeId: 'EMP-2026-001',
            department: 'Academic',
            designation: 'Senior Teacher — Mathematics',
            employmentType: 'Full Time',
            reportingManager: 'Dr. Meera Kapoor',
            joiningDate: '12-08-2019',
            campus: 'Main Campus',
            workLocation: 'Academic Block A',
            status: 'Active',
        },
        documents: [
            { id: 'DOC-001', type: 'Offer Letter', uploadedDate: '01-08-2019', status: 'Verified' },
            { id: 'DOC-002', type: 'Aadhaar Card', uploadedDate: '05-08-2019', status: 'Verified' },
            { id: 'DOC-003', type: 'Educational Certificates', uploadedDate: '06-08-2019', status: 'Verified' },
        ],
        attendance: [
            { date: '01-06-2026', checkIn: '08:25 AM', checkOut: '04:30 PM', status: 'Present' },
            { date: '02-06-2026', checkIn: '08:30 AM', checkOut: '04:35 PM', status: 'Present' },
            { date: '03-06-2026', checkIn: '—', checkOut: '—', status: 'Leave' },
            { date: '04-06-2026', checkIn: '08:28 AM', checkOut: '04:32 PM', status: 'Present' },
        ],
        leaveHistory: [
            { type: 'Casual Leave', from: '03-06-2026', to: '03-06-2026', days: 1, status: 'Approved' },
            { type: 'Earned Leave', from: '20-12-2025', to: '22-12-2025', days: 3, status: 'Approved' },
        ],
        training: [
            { title: 'Classroom Management Workshop', date: '15-03-2026', status: 'Completed' },
            { title: 'Digital Assessment Tools', date: '20-06-2026', status: 'Scheduled' },
        ],
        performance: [
            { period: '2025–26', rating: '4.2 / 5', reviewer: 'Dr. Meera Kapoor', status: 'Completed' },
            { period: '2024–25', rating: '4.0 / 5', reviewer: 'Dr. Meera Kapoor', status: 'Completed' },
        ],
    },
}

const defaultProfile = (employee) => ({
    personal: {
        firstName: employee.name.split(' ')[0],
        lastName: employee.name.split(' ').slice(1).join(' ') || '—',
        gender: '—',
        dateOfBirth: '—',
        bloodGroup: '—',
        email: `${employee.name.toLowerCase().replace(/\s+/g, '.')}@school.com`,
        mobile: '+91 90000 00000',
        address: '—',
        emergencyContact: '—',
    },
    employment: {
        employeeId: employee.id,
        department: employee.department,
        designation: employee.designation,
        employmentType: 'Full Time',
        reportingManager: '—',
        joiningDate: employee.joiningDate,
        campus: 'Main Campus',
        workLocation: '—',
        status: employee.status,
    },
    documents: [
        { id: 'DOC-101', type: 'Offer Letter', uploadedDate: employee.joiningDate, status: 'Verified' },
    ],
    attendance: [
        { date: '01-06-2026', checkIn: '08:30 AM', checkOut: '05:00 PM', status: 'Present' },
        { date: '02-06-2026', checkIn: '08:35 AM', checkOut: '05:05 PM', status: 'Present' },
    ],
    leaveHistory: [],
    training: [],
    performance: [],
})

export const getEmployeeById = (id) => {
    const employee = EMPLOYEES.find((item) => item.id === id)
    if (!employee) return null
    const details = PROFILE_DETAILS[id] ?? defaultProfile(employee)
    return { ...employee, ...details }
}

export const ALL_EMPLOYEE_DOCUMENTS = EMPLOYEES.flatMap((emp) => {
    const profile = getEmployeeById(emp.id)
    return profile.documents.map((doc) => ({
        ...doc,
        employeeId: emp.id,
        employeeName: emp.name,
    }))
})

export const attendanceStatusBadgeColor = {
    Present: 'bg-[#4CAF5033] text-[#4CAF50]',
    Leave: 'bg-[#FF980033] text-[#FF9800]',
    Absent: 'bg-[#FF000033] text-[#FF0000]',
}

export const leaveStatusBadgeColor = {
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

export const documentStatusBadgeColor = {
    Verified: 'bg-[#4CAF5033] text-[#4CAF50]',
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Expired: 'bg-[#FF000033] text-[#FF0000]',
}

export const PROFILE_TABS = [
    { id: 'personal', label: 'Personal Information' },
    { id: 'employment', label: 'Employment Details' },
    { id: 'documents', label: 'Documents' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'leave', label: 'Leave History' },
    { id: 'training', label: 'Training' },
    { id: 'performance', label: 'Performance' },
]
