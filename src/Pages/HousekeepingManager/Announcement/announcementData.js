export const MOCK_ANNOUNCEMENTS = [
    {
        id: 'HKB001',
        title: 'Deep Cleaning Schedule — Exam Week',
        attachmentName: 'Exam-Week-Cleaning-Schedule.pdf',
        category: 'Schedule Notice',
        message: 'All classroom blocks will undergo deep cleaning after 4 PM during exam week. Staff assigned to Blocks A–D must report 30 minutes before shift start.',
        sentBy: 'Housekeeping Manager',
        announcementDate: '10-06-2026',
        visibleTo: 'Housekeeping Staff',
    },
    {
        id: 'HKB002',
        title: 'Updated Restroom Disinfectant Protocol',
        attachmentName: 'Restroom-Disinfectant-Protocol.pdf',
        category: 'Safety & Hygiene',
        message: 'All restroom cleaning must include disinfectant spray on door handles, taps, and flush buttons. New checklist attached — mandatory from Monday.',
        sentBy: 'Housekeeping Manager',
        announcementDate: '08-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'HKB003',
        title: 'Staff Shift Change — Effective 16 June',
        attachmentName: 'June-Shift-Roster.pdf',
        category: 'General Announcement',
        message: 'Morning shift start time moves to 6:30 AM from 16 June. Evening shift ends at 7:00 PM. Updated roster is attached.',
        sentBy: 'Housekeeping Manager',
        announcementDate: '05-06-2026',
        visibleTo: 'Housekeeping Staff',
    },
    {
        id: 'HKB004',
        title: 'Playground Cleanup — Sports Day Prep',
        attachmentName: 'Sports-Day-Cleanup-Plan.pdf',
        category: 'Event Notice',
        message: 'Extra litter pickup and seating area cleaning required on 14 June for Sports Day. Additional staff will be assigned to the playground zone.',
        sentBy: 'Housekeeping Manager',
        announcementDate: '03-06-2026',
        visibleTo: 'All Staff',
    },
]

export const getAnnouncementById = (id) =>
    MOCK_ANNOUNCEMENTS.find((item) => item.id === id) ?? null
