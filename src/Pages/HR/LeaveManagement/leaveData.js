export const LEAVE_TYPES = ['Casual Leave', 'Sick Leave', 'Earned Leave', 'Maternity Leave', 'Compensatory Off', 'Unpaid Leave']

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const leaveStatusBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF572233] text-[#FF5722]',
}

export const LEAVE_REQUESTS = [
    {
        id: 'LV-2026-018',
        employee: 'Anita Desai',
        employeeId: 'EMP-2026-003',
        leaveType: 'Casual Leave',
        fromDate: '04-07-2026',
        toDate: '05-07-2026',
        reason: 'Family function — outstation travel',
        status: 'Approved',
        approvedBy: 'Dr. Meera Kapoor (Principal)',
    },
    {
        id: 'LV-2026-017',
        employee: 'Priya Sharma',
        employeeId: 'EMP-2026-001',
        leaveType: 'Sick Leave',
        fromDate: '10-07-2026',
        toDate: '11-07-2026',
        reason: 'Medical consultation and recovery',
        status: 'Pending',
        approvedBy: '—',
    },
    {
        id: 'LV-2026-016',
        employee: 'Arjun Nair',
        employeeId: 'EMP-2026-006',
        leaveType: 'Earned Leave',
        fromDate: '15-07-2026',
        toDate: '19-07-2026',
        reason: 'Annual vacation',
        status: 'Pending',
        approvedBy: '—',
    },
    {
        id: 'LV-2026-015',
        employee: 'Vikram Singh',
        employeeId: 'EMP-2026-004',
        leaveType: 'Compensatory Off',
        fromDate: '28-06-2026',
        toDate: '28-06-2026',
        reason: 'Worked on Sunday — sports day transport duty',
        status: 'Approved',
        approvedBy: 'Rajesh Verma (Admin Head)',
    },
    {
        id: 'LV-2026-014',
        employee: 'Sneha Patel',
        employeeId: 'EMP-2026-005',
        leaveType: 'Sick Leave',
        fromDate: '20-06-2026',
        toDate: '21-06-2026',
        reason: 'Fever — doctor advised rest',
        status: 'Approved',
        approvedBy: 'Anita Desai (HR Executive)',
    },
    {
        id: 'LV-2026-013',
        employee: 'Rahul Mehta',
        employeeId: 'EMP-2026-002',
        leaveType: 'Unpaid Leave',
        fromDate: '01-07-2026',
        toDate: '02-07-2026',
        reason: 'Personal emergency — leave balance exhausted',
        status: 'Rejected',
        approvedBy: 'Anita Desai (HR Executive)',
    },
]
