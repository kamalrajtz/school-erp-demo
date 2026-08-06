const STORAGE_KEY = 'schoolerp-gatekeeper-leave-requests'

export const LEAVE_TYPES = [
    'Sick Leave',
    'Casual Leave',
    'Emergency Leave',
    'Personal Leave',
    'Medical Leave',
]

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const REQUESTED_TO = 'Gate Keeper Manager'

export const DEFAULT_GATEKEEPER = {
    employeeId: 'GK-1001',
    name: 'Suresh Menon',
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
        id: 'GK-LR-001',
        leaveRequestId: 'GK-LR-001',
        employeeId: 'GK-1001',
        gateKeeperName: 'Suresh Menon',
        leaveType: 'Casual Leave',
        fromDate: '28-07-2026',
        toDate: '29-07-2026',
        totalDays: 2,
        appliedDate: '24-07-2026',
        reason: 'Family function requiring short leave from main gate duty.',
        requestedTo: REQUESTED_TO,
        status: 'Pending',
        managerRemarks: '',
    },
    {
        id: 'GK-LR-002',
        leaveRequestId: 'GK-LR-002',
        employeeId: 'GK-1001',
        gateKeeperName: 'Suresh Menon',
        leaveType: 'Medical Leave',
        fromDate: '10-07-2026',
        toDate: '11-07-2026',
        totalDays: 2,
        appliedDate: '08-07-2026',
        reason: 'Doctor advised rest following viral fever.',
        requestedTo: REQUESTED_TO,
        status: 'Approved',
        managerRemarks: 'Approved. Alternate gatekeeper assigned for coverage.',
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

export const getAllLeaveRequests = () => loadRequests()

export const getLeaveRequestsByEmployeeId = (employeeId) =>
    loadRequests().filter((request) => request.employeeId === employeeId)

export const getLeaveRequestById = (id) =>
    loadRequests().find((request) => request.id === id) ?? null

export const getPendingLeaveApprovalCount = () =>
    loadRequests().filter((request) => request.status === 'Pending').length

const generateLeaveRequestId = (requests) => {
    const nextNumber = requests.length + 1
    return `GK-LR-${String(nextNumber).padStart(3, '0')}`
}

export const createLeaveRequest = ({
    employeeId = DEFAULT_GATEKEEPER.employeeId,
    gateKeeperName = DEFAULT_GATEKEEPER.name,
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
        employeeId,
        gateKeeperName,
        leaveType,
        fromDate: formatDate(fromDate),
        toDate: formatDate(toDate),
        totalDays,
        appliedDate: formatDate(new Date()),
        reason,
        requestedTo: REQUESTED_TO,
        status: 'Pending',
        managerRemarks: '',
    }
    requests.unshift(newRequest)
    saveRequests(requests)
    return newRequest
}

export const updateLeaveRequestStatus = (id, status, managerRemarks = '') => {
    const requests = loadRequests()
    const index = requests.findIndex((request) => request.id === id)
    if (index === -1) return null

    requests[index] = {
        ...requests[index],
        status,
        managerRemarks: managerRemarks || requests[index].managerRemarks,
    }
    saveRequests(requests)
    return requests[index]
}
