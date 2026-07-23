export const LEAVE_TYPES = ['Sick Leave', 'Casual Leave', 'Emergency Leave', 'Personal Leave', 'Medical Leave']

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const HIGHER_HIERARCHY = 'Admin'

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
        id: 'DIR-LR-001',
        leaveRequestId: 'DIR-LR-001',
        leaveType: 'Casual Leave',
        fromDate: '24-03-2026',
        toDate: '25-03-2026',
        totalDays: 2,
        appliedDate: '18-03-2026',
        reason: 'Board meeting preparation requires off-campus travel.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Pending',
    },
    {
        id: 'DIR-LR-002',
        leaveRequestId: 'DIR-LR-002',
        leaveType: 'Medical Leave',
        fromDate: '08-02-2026',
        toDate: '10-02-2026',
        totalDays: 3,
        appliedDate: '05-02-2026',
        reason: 'Scheduled medical procedure and recovery period.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Approved',
    },
    {
        id: 'DIR-LR-003',
        leaveRequestId: 'DIR-LR-003',
        leaveType: 'Emergency Leave',
        fromDate: '30-01-2026',
        toDate: '30-01-2026',
        totalDays: 1,
        appliedDate: '30-01-2026',
        reason: 'Urgent family matter requiring immediate attention.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Rejected',
    },
]

export const RECEIVED_LEAVE_REQUESTS = [
    {
        id: 'RCV-LR-101',
        leaveRequestId: 'PRN-LR-004',
        requestedBy: 'Dr. Meena Krishnan',
        role: 'Principal',
        leaveType: 'Casual Leave',
        fromDate: '26-03-2026',
        toDate: '27-03-2026',
        totalDays: 2,
        appliedDate: '19-03-2026',
        reason: 'Regional principals\' conference attendance.',
        status: 'Pending',
    },
    {
        id: 'RCV-LR-102',
        leaveRequestId: 'TCH-LR-018',
        requestedBy: 'Priya Sharma',
        role: 'Teacher',
        leaveType: 'Sick Leave',
        fromDate: '18-03-2026',
        toDate: '19-03-2026',
        totalDays: 2,
        appliedDate: '16-03-2026',
        reason: 'High fever and medical certificate attached.',
        status: 'Pending',
    },
    {
        id: 'RCV-LR-103',
        leaveRequestId: 'FO-LR-009',
        requestedBy: 'Anita Desai',
        role: 'Front Office',
        leaveType: 'Personal Leave',
        fromDate: '22-03-2026',
        toDate: '22-03-2026',
        totalDays: 1,
        appliedDate: '14-03-2026',
        reason: 'Personal documentation work at municipal office.',
        status: 'Approved',
    },
    {
        id: 'RCV-LR-104',
        leaveRequestId: 'LIB-LR-005',
        requestedBy: 'Meera Iyer',
        role: 'Librarian',
        leaveType: 'Medical Leave',
        fromDate: '10-03-2026',
        toDate: '12-03-2026',
        totalDays: 3,
        appliedDate: '05-03-2026',
        reason: 'Doctor-advised rest following treatment.',
        status: 'Approved',
    },
    {
        id: 'RCV-LR-105',
        leaveRequestId: 'TCH-LR-015',
        requestedBy: 'Arjun Menon',
        role: 'Teacher',
        leaveType: 'Emergency Leave',
        fromDate: '01-03-2026',
        toDate: '03-03-2026',
        totalDays: 3,
        appliedDate: '27-02-2026',
        reason: 'Family emergency requiring travel out of station.',
        status: 'Rejected',
    },
]

export const getMyLeaveRequestById = (id) =>
    MY_LEAVE_REQUESTS.find((request) => request.id === id) ?? null

export const getReceivedLeaveRequestById = (id) =>
    RECEIVED_LEAVE_REQUESTS.find((request) => request.id === id) ?? null
