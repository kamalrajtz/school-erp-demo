import { CLASSES, SECTIONS } from '../AssignedClass/assignedClassData'

export const LEAVE_TYPES = [
    'Sick Leave',
    'Casual Leave',
    'Emergency Leave',
    'Family Function',
    'Medical Leave',
    'Personal Leave',
]

export const LEAVE_STATUSES = ['Pending', 'Approved', 'Rejected']

export const HIGHER_HIERARCHY = 'Principal'

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
        id: 'TCH-LR-001',
        leaveRequestId: 'TCH-LR-001',
        leaveType: 'Casual Leave',
        fromDate: '24-03-2026',
        toDate: '25-03-2026',
        totalDays: 2,
        appliedDate: '18-03-2026',
        reason: 'Personal work requiring a short leave from school duties.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Pending',
    },
    {
        id: 'TCH-LR-002',
        leaveRequestId: 'TCH-LR-002',
        leaveType: 'Medical Leave',
        fromDate: '08-02-2026',
        toDate: '10-02-2026',
        totalDays: 3,
        appliedDate: '05-02-2026',
        reason: 'Doctor advised rest following a minor surgery.',
        requestedTo: HIGHER_HIERARCHY,
        status: 'Approved',
    },
    {
        id: 'TCH-LR-003',
        leaveRequestId: 'TCH-LR-003',
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
        id: 'LR-2001',
        leaveRequestId: 'LR-2001',
        requestedBy: 'Arjun Sharma',
        role: 'Student',
        studentName: 'Arjun Sharma',
        admissionNumber: 'ADM-2024-1042',
        className: '10',
        section: 'A',
        classSection: '10-A',
        leaveType: 'Sick Leave',
        fromDate: '12-06-2026',
        toDate: '13-06-2026',
        totalDays: 2,
        appliedDate: '10-06-2026',
        reason: 'High fever and doctor advised rest for 2 days.',
        parentName: 'Rajesh Sharma',
        parentContact: '+91 98765 43210',
        status: 'Pending',
    },
    {
        id: 'LR-2002',
        leaveRequestId: 'LR-2002',
        requestedBy: 'Priya Nair',
        role: 'Student',
        studentName: 'Priya Nair',
        admissionNumber: 'ADM-2024-1087',
        className: '10',
        section: 'A',
        classSection: '10-A',
        leaveType: 'Family Function',
        fromDate: '15-06-2026',
        toDate: '15-06-2026',
        totalDays: 1,
        appliedDate: '12-06-2026',
        reason: 'Attending cousin\'s wedding ceremony out of town.',
        parentName: 'Lakshmi Nair',
        parentContact: '+91 98470 12345',
        status: 'Approved',
    },
    {
        id: 'LR-2003',
        leaveRequestId: 'LR-2003',
        requestedBy: 'Rahul Verma',
        role: 'Student',
        studentName: 'Rahul Verma',
        admissionNumber: 'ADM-2024-1156',
        className: '10',
        section: 'A',
        classSection: '10-A',
        leaveType: 'Emergency Leave',
        fromDate: '09-06-2026',
        toDate: '11-06-2026',
        totalDays: 3,
        appliedDate: '07-06-2026',
        reason: 'Urgent travel to hometown due to family emergency.',
        parentName: 'Anil Verma',
        parentContact: '+91 91234 56789',
        status: 'Pending',
    },
    {
        id: 'LR-2004',
        leaveRequestId: 'LR-2004',
        requestedBy: 'Sneha Reddy',
        role: 'Student',
        studentName: 'Sneha Reddy',
        admissionNumber: 'ADM-2024-1203',
        className: '10',
        section: 'A',
        classSection: '10-A',
        leaveType: 'Medical Leave',
        fromDate: '05-06-2026',
        toDate: '07-06-2026',
        totalDays: 3,
        appliedDate: '03-06-2026',
        reason: 'Dental surgery recovery; medical certificate submitted.',
        parentName: 'Venkatesh Reddy',
        parentContact: '+91 99887 65432',
        status: 'Approved',
    },
    {
        id: 'LR-2005',
        leaveRequestId: 'LR-2005',
        requestedBy: 'Karthik Menon',
        role: 'Student',
        studentName: 'Karthik Menon',
        admissionNumber: 'ADM-2024-1318',
        className: '10',
        section: 'A',
        classSection: '10-A',
        leaveType: 'Casual Leave',
        fromDate: '20-06-2026',
        toDate: '22-06-2026',
        totalDays: 3,
        appliedDate: '15-06-2026',
        reason: 'Family vacation planned in advance.',
        parentName: 'Suresh Menon',
        parentContact: '+91 97654 32109',
        status: 'Rejected',
    },
    {
        id: 'LR-2006',
        leaveRequestId: 'LR-2006',
        requestedBy: 'Divya Krishnan',
        role: 'Student',
        studentName: 'Divya Krishnan',
        admissionNumber: 'ADM-2024-1425',
        className: '10',
        section: 'A',
        classSection: '10-A',
        leaveType: 'Sick Leave',
        fromDate: '18-06-2026',
        toDate: '18-06-2026',
        totalDays: 1,
        appliedDate: '17-06-2026',
        reason: 'Stomach infection; unable to attend school.',
        parentName: 'Meera Krishnan',
        parentContact: '+91 96543 21098',
        status: 'Pending',
    },
]

export const getMyLeaveRequestById = (id) =>
    MY_LEAVE_REQUESTS.find((request) => request.id === id) ?? null

export const getReceivedLeaveRequestById = (id) =>
    RECEIVED_LEAVE_REQUESTS.find((request) => request.id === id) ?? null

export { CLASSES, SECTIONS }
