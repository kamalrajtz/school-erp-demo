export const CATEGORY_OPTIONS = [
    'Department Operations',
    'Policy Update',
    'Cross-Department Notice',
    'General Announcement',
    'Emergency',
]

export const VISIBLE_TO_OPTIONS = [
    'All Department Managers',
    'Canteen',
    'Stationery Store',
    'Housekeeping',
    'IT Support',
    'Transport',
    'Joint Director Office',
]

export const MOCK_BROADCASTS = [
    {
        id: 'JDB001',
        title: 'Cross-Department Inventory Audit — June',
        attachmentName: 'June-Inventory-Audit-Schedule.pdf',
        category: 'Department Operations',
        message: 'All department managers must complete inventory reconciliation by 20 June and submit reports to the Joint Director office.',
        sentBy: 'Joint Director',
        broadcastDate: '10-06-2026',
        visibleTo: 'All Department Managers',
    },
    {
        id: 'JDB002',
        title: 'Updated Request Approval Workflow',
        attachmentName: 'Approval-Workflow-2026.pdf',
        category: 'Policy Update',
        message: 'New approval workflow effective 15 June: Department Manager → Joint Director → JD Operations → Finance.',
        sentBy: 'Joint Director',
        broadcastDate: '08-06-2026',
        visibleTo: 'All Department Managers',
    },
    {
        id: 'JDB003',
        title: 'Exam Week Support Coordination',
        attachmentName: 'Exam-Week-Coordination-Plan.pdf',
        category: 'Cross-Department Notice',
        message: 'Canteen, housekeeping, and transport teams must follow the attached exam week support schedule.',
        sentBy: 'Joint Director',
        broadcastDate: '06-06-2026',
        visibleTo: 'Canteen',
    },
    {
        id: 'JDB004',
        title: 'Critical IT Maintenance Window',
        attachmentName: 'IT-Maintenance-Notice.pdf',
        category: 'Emergency',
        message: 'Network maintenance on 14 June from 8 PM to 11 PM. IT Support to coordinate with all departments in advance.',
        sentBy: 'Joint Director',
        broadcastDate: '04-06-2026',
        visibleTo: 'IT Support',
    },
]

export const getBroadcastById = (id) =>
    MOCK_BROADCASTS.find((item) => item.id === id) ?? null
