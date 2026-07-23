export const MOCK_ANNOUNCEMENTS = [
    {
        id: 'ITB001',
        title: 'Scheduled Network Maintenance',
        attachmentName: 'Network-Maintenance-Schedule.pdf',
        category: 'System Maintenance',
        message: 'The school network will undergo maintenance on Saturday from 10 PM to 2 AM. Internet and Wi-Fi services may be unavailable during this window.',
        sentBy: 'IT Support Team Manager',
        announcementDate: '05-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'ITB002',
        title: 'Password Policy Update',
        attachmentName: 'Password-Policy-2026.pdf',
        category: 'IT Policy',
        message: 'All staff must update passwords every 90 days. Minimum 12 characters with uppercase, lowercase, numbers, and special characters required.',
        sentBy: 'IT Support Team Manager',
        announcementDate: '01-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'ITB003',
        title: 'Critical Security Patch — Windows Devices',
        attachmentName: 'Security-Patch-Notice.pdf',
        category: 'Security Update',
        message: 'A critical security patch must be applied to all Windows laptops and desktops by end of week. Contact IT Support if your device has not received the update.',
        sentBy: 'IT Support Team Manager',
        announcementDate: '08-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'ITB004',
        title: 'New Asset Tagging Procedure',
        attachmentName: 'Asset-Tagging-Guide.pdf',
        category: 'General Announcement',
        message: 'All new IT assets must be registered in the Asset Management system before deployment. Refer to the attached guide for the updated tagging procedure.',
        sentBy: 'IT Support Team Manager',
        announcementDate: '03-06-2026',
        visibleTo: 'IT Support Team',
    },
]

export const getAnnouncementById = (id) =>
    MOCK_ANNOUNCEMENTS.find((item) => item.id === id) ?? null
