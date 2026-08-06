import { ANNOUNCEMENTS as ADMIN_ANNOUNCEMENTS } from '../../Admin/Announcement/announcementData'
import { ANNOUNCEMENTS as PRINCIPAL_ANNOUNCEMENTS } from '../../Principal/Announcement/announcementData'
import { MOCK_ANNOUNCEMENTS as DIRECTOR_ANNOUNCEMENTS } from '../../Director/Announcement/announcementData'

export const CATEGORY_OPTIONS = [
    'Administrative Notice',
    'Staff Notice',
    'Examination',
    'General Announcement',
    'Emergency',
    'Academic Policy',
]

const STUDENT_PORTAL_ANNOUNCEMENTS = [
    {
        id: 'STU-AN-001',
        title: 'Term 2 Examination Schedule',
        attachmentName: 'Term-2-Exam-Schedule.pdf',
        category: 'Examination',
        message: 'Term 2 examination timetable for Classes 6–12 is published. Students must carry their ID cards on all exam days.',
        sentBy: 'Principal',
        announcementDate: '15-03-2026',
        visibleTo: 'Students',
    },
    {
        id: 'STU-AN-002',
        title: 'Parent–Teacher Meeting — March 2026',
        attachmentName: 'PTM-March-2026.pdf',
        category: 'General Announcement',
        message: 'Parent–Teacher meeting scheduled for 22 March. Parents are requested to confirm attendance through the portal.',
        sentBy: 'Admin',
        announcementDate: '12-03-2026',
        visibleTo: 'Parents',
    },
    {
        id: 'STU-AN-003',
        title: 'Library Book Return Reminder',
        attachmentName: 'Library-Return-Reminder.pdf',
        category: 'Administrative Notice',
        message: 'All borrowed library books must be returned before the end of Term 2. Late returns may affect clearance for TC requests.',
        sentBy: 'Librarian',
        announcementDate: '10-03-2026',
        visibleTo: 'Students',
    },
]

const isVisibleToAudience = (visibleTo, audience) => {
    if (audience === 'parent') {
        return visibleTo === 'Parents' || visibleTo === 'Students'
    }
    return visibleTo === 'Students' || visibleTo === 'Parents'
}

const collectAnnouncements = (audience) => {
    const allSources = [
        ...ADMIN_ANNOUNCEMENTS,
        ...PRINCIPAL_ANNOUNCEMENTS,
        ...DIRECTOR_ANNOUNCEMENTS,
        ...STUDENT_PORTAL_ANNOUNCEMENTS,
    ]

    const filtered = allSources.filter((item) => isVisibleToAudience(item.visibleTo, audience))
    const uniqueMap = new Map()
    filtered.forEach((item) => uniqueMap.set(item.id, item))
    return Array.from(uniqueMap.values())
}

export const getAnnouncementsForPortal = (portalMode = 'student') => {
    const audience = portalMode === 'parent' ? 'parent' : 'student'
    return collectAnnouncements(audience)
}

export const getAnnouncementById = (id, portalMode = 'student') =>
    getAnnouncementsForPortal(portalMode).find((item) => item.id === id) ?? null
