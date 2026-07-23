export const LEAVE_TYPES = ['Sick Leave', 'Casual Leave', 'Emergency Leave', 'Personal Leave', 'Medical Leave']

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const statusBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

export const calculateTotalDays = (fromDate, toDate) => {
    if (!fromDate || !toDate) return 0
    const start = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate())
    const end = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate())
    const diff = end.getTime() - start.getTime()
    if (diff < 0) return 0
    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
}

export const MY_LEAVE_REQUESTS = [
    {
        id: 'ADM-LR-001',
        leaveRequestId: 'ADM-LR-001',
        leaveType: 'Casual Leave',
        fromDate: '20-03-2026',
        toDate: '21-03-2026',
        totalDays: 2,
        appliedDate: '15-03-2026',
        reason: 'Personal family commitment requiring two days off campus.',
        requestedTo: 'Super Admin',
        status: 'Pending',
    },
    {
        id: 'ADM-LR-002',
        leaveRequestId: 'ADM-LR-002',
        leaveType: 'Medical Leave',
        fromDate: '05-02-2026',
        toDate: '07-02-2026',
        totalDays: 3,
        appliedDate: '03-02-2026',
        reason: 'Doctor-advised rest following minor surgery.',
        requestedTo: 'Super Admin',
        status: 'Approved',
    },
    {
        id: 'ADM-LR-003',
        leaveRequestId: 'ADM-LR-003',
        leaveType: 'Emergency Leave',
        fromDate: '28-01-2026',
        toDate: '28-01-2026',
        totalDays: 1,
        appliedDate: '28-01-2026',
        reason: 'Urgent travel due to family emergency.',
        requestedTo: 'Super Admin',
        status: 'Rejected',
    },
]

export const RECEIVED_LEAVE_REQUESTS = [
    {
        id: 'RCV-LR-001',
        leaveRequestId: 'TCH-LR-014',
        requestedBy: 'Priya Sharma',
        role: 'Teacher',
        department: 'Mathematics',
        leaveType: 'Sick Leave',
        fromDate: '18-03-2026',
        toDate: '19-03-2026',
        totalDays: 2,
        appliedDate: '16-03-2026',
        reason: 'High fever and medical certificate attached.',
        status: 'Pending',
    },
    {
        id: 'RCV-LR-002',
        leaveRequestId: 'FO-LR-007',
        requestedBy: 'Anita Desai',
        role: 'Front Office',
        department: 'Administration',
        leaveType: 'Casual Leave',
        fromDate: '22-03-2026',
        toDate: '22-03-2026',
        totalDays: 1,
        appliedDate: '14-03-2026',
        reason: 'Attending parent-teacher association meeting at child\'s school.',
        status: 'Pending',
    },
    {
        id: 'RCV-LR-003',
        leaveRequestId: 'LIB-LR-003',
        requestedBy: 'Meera Iyer',
        role: 'Librarian',
        department: 'Library',
        leaveType: 'Personal Leave',
        fromDate: '10-03-2026',
        toDate: '12-03-2026',
        totalDays: 3,
        appliedDate: '05-03-2026',
        reason: 'Out-of-town documentation work for property registration.',
        status: 'Approved',
    },
    {
        id: 'RCV-LR-004',
        leaveRequestId: 'GK-LR-002',
        requestedBy: 'Ravi Kumar',
        role: 'Gatekeeper',
        department: 'Security',
        leaveType: 'Emergency Leave',
        fromDate: '25-03-2026',
        toDate: '26-03-2026',
        totalDays: 2,
        appliedDate: '24-03-2026',
        reason: 'Family member hospitalised; requires immediate travel.',
        status: 'Pending',
    },
    {
        id: 'RCV-LR-005',
        leaveRequestId: 'TCH-LR-011',
        requestedBy: 'Arjun Menon',
        role: 'Teacher',
        department: 'Science',
        leaveType: 'Medical Leave',
        fromDate: '01-03-2026',
        toDate: '03-03-2026',
        totalDays: 3,
        appliedDate: '27-02-2026',
        reason: 'Post-operative recovery as per doctor\'s recommendation.',
        status: 'Rejected',
    },
]

export const getMyLeaveRequestById = (id) =>
    MY_LEAVE_REQUESTS.find((request) => request.id === id) ?? null

export const getReceivedLeaveRequestById = (id) =>
    RECEIVED_LEAVE_REQUESTS.find((request) => request.id === id) ?? null
