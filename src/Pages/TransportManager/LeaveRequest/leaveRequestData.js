import { DRIVERS, getDriverDisplayName } from '../DriverManagement/driverManagementData'

export const LEAVE_TYPES = ['Sick Leave', 'Casual Leave', 'Emergency Leave', 'Personal Leave', 'Medical Leave']

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const statusBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

export const LEAVE_REQUESTS = [
    {
        id: 'LR-1001',
        leaveRequestId: 'LR-1001',
        driverId: 'VAN-1001',
        driverName: getDriverDisplayName(DRIVERS[0]),
        leaveType: 'Sick Leave',
        fromDate: '12-06-2026',
        toDate: '13-06-2026',
        totalDays: 2,
        appliedDate: '10-06-2026',
        reason: 'Fever and doctor-advised rest for 2 days.',
        status: 'Pending',
    },
    {
        id: 'LR-1002',
        leaveRequestId: 'LR-1002',
        driverId: 'VAN-1002',
        driverName: getDriverDisplayName(DRIVERS[1]),
        leaveType: 'Casual Leave',
        fromDate: '15-06-2026',
        toDate: '15-06-2026',
        totalDays: 1,
        appliedDate: '08-06-2026',
        reason: 'Family function — daughter\'s school annual day.',
        status: 'Approved',
    },
    {
        id: 'LR-1003',
        leaveRequestId: 'LR-1003',
        driverId: 'VAN-1003',
        driverName: getDriverDisplayName(DRIVERS[2]),
        leaveType: 'Emergency Leave',
        fromDate: '09-06-2026',
        toDate: '11-06-2026',
        totalDays: 3,
        appliedDate: '09-06-2026',
        reason: 'Urgent travel to hometown due to family emergency.',
        status: 'Pending',
    },
    {
        id: 'LR-1004',
        leaveRequestId: 'LR-1004',
        driverId: 'VAN-1004',
        driverName: getDriverDisplayName(DRIVERS[3]),
        leaveType: 'Medical Leave',
        fromDate: '05-06-2026',
        toDate: '07-06-2026',
        totalDays: 3,
        appliedDate: '04-06-2026',
        reason: 'Post-surgery recovery; medical certificate submitted.',
        status: 'Approved',
    },
    {
        id: 'LR-1005',
        leaveRequestId: 'LR-1005',
        driverId: 'VAN-1001',
        driverName: getDriverDisplayName(DRIVERS[0]),
        leaveType: 'Personal Leave',
        fromDate: '20-06-2026',
        toDate: '22-06-2026',
        totalDays: 3,
        appliedDate: '06-06-2026',
        reason: 'Personal errands and property documentation work.',
        status: 'Rejected',
    },
]

export const getLeaveRequestById = (id) =>
    LEAVE_REQUESTS.find((request) => request.id === id) ?? null
