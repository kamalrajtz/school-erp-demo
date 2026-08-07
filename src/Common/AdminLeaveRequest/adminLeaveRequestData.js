const STORAGE_KEY = 'schoolerp-admin-leave-requests'

export const LEAVE_TYPES = ['Sick Leave', 'Casual Leave', 'Emergency Leave', 'Personal Leave', 'Medical Leave']

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const REQUESTED_TO = 'Super Admin'

export const DEFAULT_ADMIN = {
    employeeId: 'ADM-001',
    name: 'System Admin',
    role: 'Admin',
    department: 'Administration',
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
        id: 'ADM-LR-001',
        leaveRequestId: 'ADM-LR-001',
        employeeId: 'ADM-001',
        requestedBy: 'System Admin',
        role: 'Admin',
        department: 'Administration',
        leaveType: 'Casual Leave',
        fromDate: '20-03-2026',
        toDate: '21-03-2026',
        totalDays: 2,
        appliedDate: '15-03-2026',
        reason: 'Personal family commitment requiring two days off campus.',
        requestedTo: REQUESTED_TO,
        status: 'Pending',
        superAdminRemarks: '',
    },
    {
        id: 'ADM-LR-002',
        leaveRequestId: 'ADM-LR-002',
        employeeId: 'ADM-001',
        requestedBy: 'System Admin',
        role: 'Admin',
        department: 'Administration',
        leaveType: 'Medical Leave',
        fromDate: '05-02-2026',
        toDate: '07-02-2026',
        totalDays: 3,
        appliedDate: '03-02-2026',
        reason: 'Doctor-advised rest following minor surgery.',
        requestedTo: REQUESTED_TO,
        status: 'Approved',
        superAdminRemarks: 'Approved. Deputy admin to cover operations.',
    },
    {
        id: 'ADM-LR-003',
        leaveRequestId: 'ADM-LR-003',
        employeeId: 'ADM-001',
        requestedBy: 'System Admin',
        role: 'Admin',
        department: 'Administration',
        leaveType: 'Emergency Leave',
        fromDate: '28-01-2026',
        toDate: '28-01-2026',
        totalDays: 1,
        appliedDate: '28-01-2026',
        reason: 'Urgent travel due to family emergency.',
        requestedTo: REQUESTED_TO,
        status: 'Rejected',
        superAdminRemarks: 'Critical audit week — request declined.',
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

export const getAllAdminLeaveRequests = () => loadRequests()

export const getAdminLeaveRequestById = (id) =>
    loadRequests().find((request) => request.id === id) ?? null

export const getPendingAdminLeaveApprovalCount = () =>
    loadRequests().filter((request) => request.status === 'Pending').length

const generateLeaveRequestId = (requests) => {
    const nextNumber = requests.length + 1
    return `ADM-LR-${String(nextNumber).padStart(3, '0')}`
}

export const createAdminLeaveRequest = ({
    employeeId = DEFAULT_ADMIN.employeeId,
    requestedBy = DEFAULT_ADMIN.name,
    role = DEFAULT_ADMIN.role,
    department = DEFAULT_ADMIN.department,
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
        requestedBy,
        role,
        department,
        leaveType,
        fromDate: formatDate(fromDate),
        toDate: formatDate(toDate),
        totalDays,
        appliedDate: formatDate(new Date()),
        reason,
        requestedTo: REQUESTED_TO,
        status: 'Pending',
        superAdminRemarks: '',
    }
    requests.unshift(newRequest)
    saveRequests(requests)
    return newRequest
}

export const updateAdminLeaveRequestStatus = (id, status, superAdminRemarks = '') => {
    const requests = loadRequests()
    const index = requests.findIndex((request) => request.id === id)
    if (index === -1) return null

    requests[index] = {
        ...requests[index],
        status,
        superAdminRemarks: superAdminRemarks || requests[index].superAdminRemarks,
    }
    saveRequests(requests)
    return requests[index]
}
