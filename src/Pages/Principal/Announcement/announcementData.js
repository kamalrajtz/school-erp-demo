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
    'Coordinators',
]

export const ANNOUNCEMENTS = [
    {
        id: 'PRIN-AN-001',
        title: 'Term 2 Academic Calendar Update',
        attachmentName: 'Term-2-Academic-Calendar.pdf',
        category: 'General Announcement',
        message: 'Updated academic calendar for Term 2 including examination dates and holiday schedule.',
        sentBy: 'Dr. Meera Nair',
        announcementDate: '14-03-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'PRIN-AN-002',
        title: 'Staff Meeting – March 2026',
        attachmentName: 'Staff-Meeting-March-2026.pdf',
        category: 'Staff Notice',
        message: 'Mandatory staff meeting scheduled for 20 March 2026 at 3:00 PM in the main auditorium.',
        sentBy: 'Dr. Meera Nair',
        announcementDate: '12-03-2026',
        visibleTo: 'Teachers',
    },
    {
        id: 'PRIN-AN-003',
        title: 'Board Examination Guidelines',
        attachmentName: 'Board-Exam-Guidelines-2026.pdf',
        category: 'Examination',
        message: 'Guidelines for board examination invigilation, hall allocation, and result submission.',
        sentBy: 'Dr. Meera Nair',
        announcementDate: '10-03-2026',
        visibleTo: 'Coordinators',
    },
]

export const getAnnouncementById = (id) =>
    ANNOUNCEMENTS.find((item) => item.id === id) ?? null
