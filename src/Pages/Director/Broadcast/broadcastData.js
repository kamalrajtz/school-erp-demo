export const CATEGORY_OPTIONS = [
    'Academic Policy',
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

export const MOCK_BROADCASTS = [
    {
        id: 'DRB001',
        title: 'Annual Academic Calendar 2026–27',
        attachmentName: 'Academic-Calendar-2026-27.pdf',
        category: 'Academic Policy',
        message: 'The approved academic calendar for 2026–27 is now available. All departments must align schedules accordingly.',
        sentBy: 'Director',
        broadcastDate: '10-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'DRB002',
        title: 'Staff Meeting — End of Term Review',
        attachmentName: 'Staff-Meeting-Agenda-June.pdf',
        category: 'Staff Notice',
        message: 'Mandatory staff meeting on 20 June at 3:00 PM in the main auditorium for end-of-term review.',
        sentBy: 'Director',
        broadcastDate: '08-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'DRB003',
        title: 'Board Examination Guidelines',
        attachmentName: 'Board-Exam-Guidelines.pdf',
        category: 'Examination',
        message: 'Updated board examination conduct guidelines for invigilators and class coordinators.',
        sentBy: 'Director',
        broadcastDate: '05-06-2026',
        visibleTo: 'Teachers',
    },
    {
        id: 'DRB004',
        title: 'Sports Day Postponement Notice',
        attachmentName: 'Sports-Day-Update.pdf',
        category: 'General Announcement',
        message: 'Annual Sports Day postponed to 28 June due to forecasted heavy rainfall.',
        sentBy: 'Director',
        broadcastDate: '03-06-2026',
        visibleTo: 'Students',
    },
]

export const getBroadcastById = (id) =>
    MOCK_BROADCASTS.find((item) => item.id === id) ?? null
