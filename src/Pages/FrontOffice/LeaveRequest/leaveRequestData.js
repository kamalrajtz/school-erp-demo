export const LEAVE_TYPES = [
    'Sick Leave',
    'Casual Leave',
    'Emergency Leave',
    'Personal Leave',
    'Medical Leave',
]

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const HIGHER_HIERARCHY = 'Director'

export const RECEIVED_FROM_ROLE = 'Gate Keeper Manager'

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
        id: 'FO-LR-001',
        leaveRequestId: 'FO-LR-001',
        leaveType: 'Casual Leave',
        fromDate: '24-03-2026',
        toDate: '25-03-2026',
        totalDays: 2,
        appliedDate: '18-03-2026',
        reason: 'Personal appointment requiring leave from front office duties.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Pending',
    },
    {
        id: 'FO-LR-002',
        leaveRequestId: 'FO-LR-002',
        leaveType: 'Medical Leave',
        fromDate: '08-02-2026',
        toDate: '09-02-2026',
        totalDays: 2,
        appliedDate: '05-02-2026',
        reason: 'Doctor advised rest following flu symptoms.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Approved',
    },
    {
        id: 'FO-LR-003',
        leaveRequestId: 'FO-LR-003',
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
        id: 'RCV-GKM-101',
        leaveRequestId: 'GKM-LR-004',
        requestedBy: 'Ravi Shankar',
        role: RECEIVED_FROM_ROLE,
        leaveType: 'Casual Leave',
        fromDate: '26-03-2026',
        toDate: '27-03-2026',
        totalDays: 2,
        appliedDate: '19-03-2026',
        reason: 'Family function requiring short leave from gate management duties.',
        status: 'Pending',
    },
    {
        id: 'RCV-GKM-102',
        leaveRequestId: 'GKM-LR-003',
        requestedBy: 'Meena Lakshmi',
        role: RECEIVED_FROM_ROLE,
        leaveType: 'Sick Leave',
        fromDate: '18-03-2026',
        toDate: '19-03-2026',
        totalDays: 2,
        appliedDate: '16-03-2026',
        reason: 'High fever and medical certificate attached.',
        status: 'Pending',
    },
    {
        id: 'RCV-GKM-103',
        leaveRequestId: 'GKM-LR-002',
        requestedBy: 'Ravi Shankar',
        role: RECEIVED_FROM_ROLE,
        leaveType: 'Medical Leave',
        fromDate: '10-03-2026',
        toDate: '12-03-2026',
        totalDays: 3,
        appliedDate: '05-03-2026',
        reason: 'Doctor-advised rest following treatment.',
        status: 'Approved',
    },
    {
        id: 'RCV-GKM-104',
        leaveRequestId: 'GKM-LR-001',
        requestedBy: 'Meena Lakshmi',
        role: RECEIVED_FROM_ROLE,
        leaveType: 'Emergency Leave',
        fromDate: '01-03-2026',
        toDate: '01-03-2026',
        totalDays: 1,
        appliedDate: '27-02-2026',
        reason: 'Urgent travel to hometown due to family emergency.',
        status: 'Rejected',
    },
]

export const getMyLeaveRequestById = (id) =>
    MY_LEAVE_REQUESTS.find((request) => request.id === id) ?? null

export const getReceivedLeaveRequestById = (id) =>
    RECEIVED_LEAVE_REQUESTS.find((request) => request.id === id) ?? null
