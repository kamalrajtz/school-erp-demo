export const MOCK_ANNOUNCEMENTS = [
    {
        id: 'GKB001',
        title: 'Main Gate Closure Notice',
        attachmentName: 'Main-Gate-Closure-Notice.pdf',
        category: 'Security Alert',
        message: 'Main gate will be closed from 2 PM to 4 PM for maintenance. Please use the side entrance during this period.',
        sentBy: 'Gatekeeper Manager',
        announcementDate: '10-08-2025',
        visibleTo: 'Gatekeeper',
    },
    {
        id: 'GKB002',
        title: 'Visitor Entry Protocol Update',
        attachmentName: 'Visitor-Entry-Protocol.pdf',
        category: 'Visitor Notice',
        message: 'All visitors must carry a valid ID and register at the front desk before entry.',
        sentBy: 'Gatekeeper Manager',
        announcementDate: '12-08-2025',
        visibleTo: 'All Staff',
    },
    {
        id: 'GKB003',
        title: 'Emergency Drill Announcement',
        attachmentName: 'Emergency-Drill-Schedule.pdf',
        category: 'Emergency',
        message: 'A fire safety drill will be conducted on Friday at 11:00 AM. All gatekeepers must be at assigned posts.',
        sentBy: 'Gatekeeper Manager',
        announcementDate: '15-08-2025',
        visibleTo: 'Gatekeeper',
    },
]

export const getAnnouncementById = (id) =>
    MOCK_ANNOUNCEMENTS.find((item) => item.id === id) ?? null
