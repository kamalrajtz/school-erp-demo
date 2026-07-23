export const CATEGORY_OPTIONS = [
    'Administrative Notice',
    'Staff Notice',
    'Examination',
    'General Announcement',
    'Emergency',
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
        id: 'ADM-AN-004',
        title: 'Board Exam Preparation Schedule',
        attachmentName: 'Board-Exam-Prep-Schedule.pdf',
        category: 'Examination',
        message: 'Revised board exam preparation timetable and extra class guidelines for Classes 10 and 12.',
        sentBy: 'Principal',
        announcementDate: '14-03-2026',
        visibleTo: 'Teachers',
    },
    {
        id: 'ADM-AN-005',
        title: 'Staff Meeting — March 2026',
        attachmentName: 'Staff-Meeting-Agenda-March.pdf',
        category: 'Staff Notice',
        message: 'Mandatory staff meeting on 18 March at 3:30 PM in the seminar hall. All teaching staff must attend.',
        sentBy: 'Principal',
        announcementDate: '11-03-2026',
        visibleTo: 'Teachers',
    },
    {
        id: 'ADM-AN-006',
        title: 'Lesson Plan Submission Deadline',
        attachmentName: 'Lesson-Plan-Guidelines.pdf',
        category: 'Staff Notice',
        message: 'Weekly lesson plans must be submitted by every Friday before 5:00 PM for principal approval.',
        sentBy: 'Admin',
        announcementDate: '09-03-2026',
        visibleTo: 'Teachers',
    },
]

export const getAnnouncementById = (id) =>
    ANNOUNCEMENTS.find((item) => item.id === id) ?? null
