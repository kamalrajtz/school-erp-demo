const STORAGE_KEY = 'schoolerp-gatekeeper-manager-leave-requests'

export const LEAVE_TYPES = [
    'Sick Leave',
    'Casual Leave',
    'Emergency Leave',
    'Personal Leave',
    'Medical Leave',
]

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const HIGHER_HIERARCHY = 'Director'

export const DEFAULT_MANAGER = {
    employeeId: 'GKM-1001',
    name: 'Rajesh Kumar',
}

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

const formatDate = (value) => {
    const date = value instanceof Date ? value : new Date(value)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}

const SEED_REQUESTS = [
    {
        id: 'GKM-LR-001',
        leaveRequestId: 'GKM-LR-001',
        leaveType: 'Casual Leave',
        fromDate: '30-07-2026',
        toDate: '31-07-2026',
        totalDays: 2,
        appliedDate: '25-07-2026',
        reason: 'Regional security coordination meeting out of station.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Pending',
    },
    {
        id: 'GKM-LR-002',
        leaveRequestId: 'GKM-LR-002',
        leaveType: 'Medical Leave',
        fromDate: '05-07-2026',
        toDate: '06-07-2026',
        totalDays: 2,
        appliedDate: '03-07-2026',
        reason: 'Doctor advised rest following minor surgery.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Approved',
    },
]

const loadRequests = () => {
    try {
        const stored = sessionStorage.getItem(STORAGE_KEY)
        if (stored) {
            return JSON.parse(stored)
        }
    } catch {
        // ignore parse errors
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_REQUESTS))
    return [...SEED_REQUESTS]
}

const saveRequests = (requests) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
}

export const getMyLeaveRequests = () => loadRequests()

export const getMyLeaveRequestById = (id) =>
    loadRequests().find((request) => request.id === id) ?? null

const generateLeaveRequestId = (requests) => {
    const nextNumber = requests.length + 1
    return `GKM-LR-${String(nextNumber).padStart(3, '0')}`
}

export const createMyLeaveRequest = ({
    leaveType,
    fromDate,
    toDate,
    totalDays,
    reason,
}) => {
    const requests = loadRequests()
    const leaveRequestId = generateLeaveRequestId(requests)
    const newRequest = {
        id: leaveRequestId,
        leaveRequestId,
        leaveType,
        fromDate: formatDate(fromDate),
        toDate: formatDate(toDate),
        totalDays,
        appliedDate: formatDate(new Date()),
        reason,
        requestedTo: HIGHER_HIERARCHY,
        status: 'Pending',
    }
    requests.unshift(newRequest)
    saveRequests(requests)
    return newRequest
}
