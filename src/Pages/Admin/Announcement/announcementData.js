export const CATEGORY_OPTIONS = [
    'Administrative Notice',
    'Staff Notice',
    'Examination',
    'General Announcement',
    'Emergency',
]

export const VISIBLE_TO_OPTIONS = [
    'All Staff',
    'Teachers',
    'Students',
    'Parents',
    'Department Heads',
]

export const ANNOUNCEMENTS = [
    {
        id: 'ADM-AN-001',
        title: 'Term 2 Administrative Guidelines',
        attachmentName: 'Term-2-Admin-Guidelines.pdf',
        category: 'Administrative Notice',
        message: 'Updated administrative guidelines for Term 2 operations including fee collection and leave protocols.',
        sentBy: 'Admin',
        announcementDate: '12-03-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'ADM-AN-002',
        title: 'Campus Maintenance Schedule',
        attachmentName: 'Maintenance-Schedule-March.pdf',
        category: 'General Announcement',
        message: 'Scheduled maintenance for Block A and Block B during the weekend of 22–23 March.',
        sentBy: 'Admin',
        announcementDate: '10-03-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'ADM-AN-003',
        title: 'Emergency Contact Protocol',
        attachmentName: 'Emergency-Protocol-2026.pdf',
        category: 'Emergency',
        message: 'Revised emergency contact and evacuation protocol for all departments.',
        sentBy: 'Admin',
        announcementDate: '08-03-2026',
        visibleTo: 'Department Heads',
    },
]

export const getAnnouncementById = (id) =>
    ANNOUNCEMENTS.find((item) => item.id === id) ?? null
