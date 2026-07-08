export const APPROVAL_STATUSES = ['Pending', 'Approved', 'Rejected']

export const LEAVE_TYPES = ['Casual Leave', 'Sick Leave', 'Emergency Leave', 'Personal Leave', 'Medical Leave']

export const DEFAULT_DRIVER = {
    driverName: 'Suresh Kumar',
    driverId: 'DRV001',
}

export const LEAVE_REQUESTS = [
    {
        id: 'LR-001',
        leaveRequestId: 'LR001',
        driverName: 'Suresh Kumar',
        driverId: 'DRV001',
        leaveType: 'Casual Leave',
        fromDate: '15-08-2025',
        toDate: '16-08-2025',
        totalDays: 2,
        reason: 'Family Function',
        appliedDate: '10-08-2025',
        approvalStatus: 'Pending',
    },
    {
        id: 'LR-002',
        leaveRequestId: 'LR002',
        driverName: 'Suresh Kumar',
        driverId: 'DRV001',
        leaveType: 'Sick Leave',
        fromDate: '01-07-2025',
        toDate: '02-07-2025',
        totalDays: 2,
        reason: 'Fever and doctor-advised rest.',
        appliedDate: '28-06-2025',
        approvalStatus: 'Approved',
    },
    {
        id: 'LR-003',
        leaveRequestId: 'LR003',
        driverName: 'Suresh Kumar',
        driverId: 'DRV001',
        leaveType: 'Emergency Leave',
        fromDate: '20-06-2025',
        toDate: '22-06-2025',
        totalDays: 3,
        reason: 'Urgent travel to hometown due to family emergency.',
        appliedDate: '19-06-2025',
        approvalStatus: 'Rejected',
    },
]

export const getLeaveRequestById = (id) =>
    LEAVE_REQUESTS.find((record) => record.id === id)

export const approvalStatusBadgeColor = {
    Pending: 'bg-[#FF57221A] text-[#FF5722]',
    Approved: 'bg-[#4CAF501A] text-[#4CAF50]',
    Rejected: 'bg-[#6670851A] text-[#667085]',
}

const parseDate = (value) => {
    const [day, month, year] = value.split('-').map(Number)
    if (!day || !month || !year) return null
    return new Date(year, month - 1, day)
}

export const calculateTotalDays = (fromDate, toDate) => {
    if (!fromDate || !toDate) return 0
    const start = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate())
    const end = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate())
    if (end < start) return 0
    const diffMs = end.getTime() - start.getTime()
    return Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1
}

export const filterLeaveRequests = ({
    records,
    search = '',
    approvalStatus = '',
    fromDate = null,
    toDate = null,
}) => records.filter((record) => {
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || [
        record.leaveRequestId,
        record.driverName,
        record.driverId,
        record.leaveType,
        record.reason,
    ].some((field) => field.toLowerCase().includes(query))

    const matchesStatus = !approvalStatus || record.approvalStatus === approvalStatus

    const appliedDate = parseDate(record.appliedDate)
    const matchesFrom = !fromDate || (appliedDate && appliedDate >= fromDate)
    const matchesTo = !toDate || (appliedDate && appliedDate <= toDate)

    return matchesSearch && matchesStatus && matchesFrom && matchesTo
})
