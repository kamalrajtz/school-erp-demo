export const CATEGORY_OPTIONS = [
    'Audit Operations',
    'Policy Update',
    'Audit Team Notice',
    'Compliance Alert',
    'General Announcement',
]

export const VISIBLE_TO_OPTIONS = [
    'All Audit Team',
    'HR Audit Team',
    'Process Audit Team',
    'Quality Audit Team',
    'HR Manager',
    'HR Executive',
    'Process Audit Manager',
    'Process Audit Executive',
    'Quality Audit Principal',
]

export const MOCK_ANNOUNCEMENTS = [
    {
        id: 'JDAUD001',
        title: 'Q2 Audit Schedule — All Teams',
        attachmentName: 'Q2-Audit-Schedule-2026.pdf',
        category: 'Audit Operations',
        message: 'HR, Process, and Quality audit teams must confirm field visit dates and submit resource plans by 18 June.',
        sentBy: 'Joint Director — Audit',
        announcementDate: '10-06-2026',
        visibleTo: 'All Audit Team',
    },
    {
        id: 'JDAUD002',
        title: 'Updated Finding Escalation Protocol',
        attachmentName: 'Finding-Escalation-Protocol-2026.pdf',
        category: 'Policy Update',
        message: 'Critical findings must be escalated within 24 hours: Audit Executive → Audit Manager → Joint Director Audit.',
        sentBy: 'Joint Director — Audit',
        announcementDate: '08-06-2026',
        visibleTo: 'All Audit Team',
    },
    {
        id: 'JDAUD003',
        title: 'HR Audit — Documentation Standards',
        attachmentName: 'HR-Audit-Documentation-Checklist.pdf',
        category: 'Compliance Alert',
        message: 'HR Manager and HR Executive to use the attached checklist for all employee file sampling this quarter.',
        sentBy: 'Joint Director — Audit',
        announcementDate: '06-06-2026',
        visibleTo: 'HR Audit Team',
    },
    {
        id: 'JDAUD004',
        title: 'Process Audit — Transport Scope Change',
        attachmentName: 'Transport-Audit-Scope-Update.pdf',
        category: 'Audit Team Notice',
        message: 'Process Audit Manager: expanded scope includes fleet maintenance logs and driver safety training records.',
        sentBy: 'Joint Director — Audit',
        announcementDate: '04-06-2026',
        visibleTo: 'Process Audit Team',
    },
]

export const getAnnouncementById = (id) =>
    MOCK_ANNOUNCEMENTS.find((item) => item.id === id) ?? null
