export const CATEGORY_OPTIONS = [
    'System Notice',
    'Policy Update',
    'Governance',
    'Emergency',
    'General Announcement',
]

export const VISIBLE_TO_OPTIONS = [
    'All Staff',
    'Admin Team',
    'Department Heads',
    'Directors',
    'All Portals',
]

export const ANNOUNCEMENTS = [
    {
        id: 'SA-AN-001',
        title: 'Annual Governance Review Schedule',
        attachmentName: 'Governance-Review-2026.pdf',
        category: 'Governance',
        message: 'All module heads must submit compliance reports before the governance review on 30 April.',
        sentBy: 'Super Admin',
        announcementDate: '14-03-2026',
        visibleTo: 'Department Heads',
    },
    {
        id: 'SA-AN-002',
        title: 'System Maintenance Window',
        attachmentName: 'Maintenance-Notice-March.pdf',
        category: 'System Notice',
        message: 'ERP portal maintenance scheduled for 22 March, 11 PM – 2 AM. Plan offline workflows accordingly.',
        sentBy: 'Super Admin',
        announcementDate: '12-03-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'SA-AN-003',
        title: 'Updated Approval Hierarchy Policy',
        attachmentName: 'Approval-Hierarchy-2026.pdf',
        category: 'Policy Update',
        message: 'Revised escalation and leave approval hierarchy effective from 1 April 2026.',
        sentBy: 'Super Admin',
        announcementDate: '08-03-2026',
        visibleTo: 'Admin Team',
    },
]

export const getAnnouncementById = (id) =>
    ANNOUNCEMENTS.find((item) => item.id === id) ?? null
