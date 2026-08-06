import {
    ANNOUNCEMENTS as STAFF_ANNOUNCEMENTS,
    CATEGORY_OPTIONS,
} from '../../Teacher/Announcement/announcementData'

export { CATEGORY_OPTIONS }

const LIBRARIAN_ANNOUNCEMENTS = [
    {
        id: 'ADM-AN-007',
        title: 'Library Inventory Audit — April 2026',
        attachmentName: 'Library-Audit-April-2026.pdf',
        category: 'Administrative Notice',
        message: 'Annual library inventory audit scheduled for the first week of April. Prepare stock registers and overdue book reports.',
        sentBy: 'Principal',
        announcementDate: '16-03-2026',
        visibleTo: 'Librarians',
    },
    {
        id: 'ADM-AN-008',
        title: 'New Digital Library Access Guidelines',
        attachmentName: 'Digital-Library-Guidelines.pdf',
        category: 'Staff Notice',
        message: 'Updated procedures for issuing digital library credentials to students and staff members.',
        sentBy: 'Admin',
        announcementDate: '08-03-2026',
        visibleTo: 'Librarians',
    },
]

export const ANNOUNCEMENTS = [
    ...STAFF_ANNOUNCEMENTS.filter(
        (item) => item.visibleTo === 'All Staff' || item.visibleTo === 'Librarians',
    ),
    ...LIBRARIAN_ANNOUNCEMENTS,
]

export const getAnnouncementById = (id) =>
    ANNOUNCEMENTS.find((item) => item.id === id) ?? null
