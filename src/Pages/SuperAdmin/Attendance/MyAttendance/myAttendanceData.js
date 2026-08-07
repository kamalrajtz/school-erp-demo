export const ATTENDANCE_STATUSES = ['Present', 'Absent', 'Half Day', 'Late', 'On Leave']

export const statusBadgeColor = {
    Present: 'bg-[#4CAF5033] text-[#4CAF50]',
    Absent: 'bg-[#FF000033] text-[#FF0000]',
    'Half Day': 'bg-[#FF980033] text-[#FF9800]',
    Late: 'bg-[#FF980033] text-[#FF9800]',
    'On Leave': 'bg-[#2196F333] text-[#2196F3]',
}

export const SUPER_ADMIN_PROFILE = {
    employeeId: 'SA-1001',
    name: 'Super Admin',
}

export const MY_ATTENDANCE_LIST = [
    {
        id: 'SA-ATT-001',
        employeeId: 'SA-1001',
        name: 'Super Admin',
        inTime: '08:30 AM',
        outTime: '06:00 PM',
        attendanceStatus: 'Present',
        date: '24-07-2026',
    },
    {
        id: 'SA-ATT-002',
        employeeId: 'SA-1001',
        name: 'Super Admin',
        inTime: '08:45 AM',
        outTime: '05:45 PM',
        attendanceStatus: 'Present',
        date: '23-07-2026',
    },
    {
        id: 'SA-ATT-003',
        employeeId: 'SA-1001',
        name: 'Super Admin',
        inTime: '09:05 AM',
        outTime: '05:30 PM',
        attendanceStatus: 'Late',
        date: '22-07-2026',
    },
    {
        id: 'SA-ATT-004',
        employeeId: 'SA-1001',
        name: 'Super Admin',
        inTime: '—',
        outTime: '—',
        attendanceStatus: 'On Leave',
        date: '21-07-2026',
    },
    {
        id: 'SA-ATT-005',
        employeeId: 'SA-1001',
        name: 'Super Admin',
        inTime: '08:35 AM',
        outTime: '01:00 PM',
        attendanceStatus: 'Half Day',
        date: '20-07-2026',
    },
    {
        id: 'SA-ATT-006',
        employeeId: 'SA-1001',
        name: 'Super Admin',
        inTime: '08:28 AM',
        outTime: '05:55 PM',
        attendanceStatus: 'Present',
        date: '19-07-2026',
    },
]
