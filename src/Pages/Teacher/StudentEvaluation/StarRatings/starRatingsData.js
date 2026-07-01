import { CLASSES, SECTIONS } from '../../AssignedClass/assignedClassData'
import { STUDENTS_LIST } from '../../StudentsList/studentsListData'

export const RATING_FIELDS = [
    { key: 'attendance', label: 'Attendance Rating' },
    { key: 'academic', label: 'Academic Rating' },
    { key: 'activity', label: 'Activity Rating' },
    { key: 'discipline', label: 'Discipline Rating' },
]

const STORAGE_KEY = 'teacher-star-ratings'

export const computeOverallPoints = (ratings) =>
    Object.values(ratings).reduce((sum, val) => sum + (val || 0), 0) * 10

export const getRatingValue = (entry, fieldKey) => entry.ratings?.[fieldKey] ?? 0

const formatMonthYear = (date = new Date()) =>
    date.toLocaleString('en-US', { month: 'long', year: 'numeric' })

const buildDefaultRating = ({
    ratingId,
    month,
    student,
    ratings,
    description,
}) => ({
    id: ratingId,
    ratingId,
    month,
    studentId: student.id,
    studentName: student.name,
    rollNumber: student.rollNumber,
    className: student.className,
    section: student.section,
    classSection: student.classSection,
    ratings,
    overallPoints: computeOverallPoints(ratings),
    description,
})

const DEFAULT_STAR_RATINGS = [
    buildDefaultRating({
        ratingId: 'STR-1001',
        month: 'May 2026',
        student: STUDENTS_LIST[0],
        ratings: { attendance: 5, academic: 4, activity: 4, discipline: 5 },
        description: 'Excellent attendance and strong academic performance this month.',
    }),
    buildDefaultRating({
        ratingId: 'STR-1002',
        month: 'May 2026',
        student: STUDENTS_LIST[1],
        ratings: { attendance: 4, academic: 5, activity: 5, discipline: 4 },
        description: 'Very active in class activities and consistent with assignments.',
    }),
    buildDefaultRating({
        ratingId: 'STR-1003',
        month: 'April 2026',
        student: STUDENTS_LIST[2],
        ratings: { attendance: 3, academic: 4, activity: 3, discipline: 4 },
        description: 'Good progress in academics; attendance can improve further.',
    }),
    buildDefaultRating({
        ratingId: 'STR-1004',
        month: 'April 2026',
        student: STUDENTS_LIST[3],
        ratings: { attendance: 5, academic: 4, activity: 4, discipline: 5 },
        description: 'Disciplined student with steady participation in school events.',
    }),
    buildDefaultRating({
        ratingId: 'STR-1005',
        month: 'March 2026',
        student: STUDENTS_LIST[4],
        ratings: { attendance: 4, academic: 3, activity: 4, discipline: 3 },
        description: 'Shows improvement in activities; focus needed on academic tasks.',
    }),
    buildDefaultRating({
        ratingId: 'STR-1006',
        month: 'March 2026',
        student: STUDENTS_LIST[5],
        ratings: { attendance: 5, academic: 5, activity: 5, discipline: 5 },
        description: 'Outstanding all-round performance across every rating category.',
    }),
]

export const saveStarRatings = (ratings) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings))
}

export const getStarRatings = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    saveStarRatings(DEFAULT_STAR_RATINGS)
    return DEFAULT_STAR_RATINGS
}

export const addStarRating = (payload) => {
    const list = getStarRatings()
    const maxId = list.reduce((max, item) => {
        const num = parseInt(String(item.ratingId).replace('STR-', ''), 10)
        return Number.isNaN(num) ? max : Math.max(max, num)
    }, 1000)
    const ratingId = `STR-${maxId + 1}`

    const ratings = {
        attendance: payload.attendanceRating,
        academic: payload.academicRating,
        activity: payload.activityRating,
        discipline: payload.disciplineRating,
    }

    const record = {
        id: ratingId,
        ratingId,
        month: payload.month || formatMonthYear(),
        studentId: payload.studentId,
        studentName: payload.studentName,
        rollNumber: payload.rollNumber,
        className: payload.className,
        section: payload.section,
        classSection: `${payload.className}-${payload.section}`,
        ratings,
        overallPoints: computeOverallPoints(ratings),
        description: payload.description,
    }

    const next = [...list, record]
    saveStarRatings(next)
    return record
}

export const getStarRatingById = (id) =>
    getStarRatings().find((item) => item.id === id || item.ratingId === id) ?? null

export const getStudentByRollNumber = (rollNumber) =>
    STUDENTS_LIST.find((student) => student.rollNumber === rollNumber) ?? null

export const getAvailableRatingMonths = () => {
    const months = [...new Set(getStarRatings().map((item) => item.month))]
    const parseMonth = (label) => {
        const date = new Date(`${label} 1`)
        return Number.isNaN(date.getTime()) ? 0 : date.getTime()
    }
    return months.sort((a, b) => parseMonth(b) - parseMonth(a))
}

export const getStarOfMonth = (month) => {
    const ratings = getStarRatings()
    const availableMonths = getAvailableRatingMonths()
    const targetMonth = month || availableMonths[0]

    if (!targetMonth) return null

    const monthRatings = ratings.filter((item) => item.month === targetMonth)
    if (!monthRatings.length) return null

    return monthRatings.reduce((best, current) => {
        if (current.overallPoints > best.overallPoints) return current
        if (current.overallPoints < best.overallPoints) return best

        const currentAvg =
            Object.values(current.ratings).reduce((sum, val) => sum + val, 0) /
            Object.values(current.ratings).length
        const bestAvg =
            Object.values(best.ratings).reduce((sum, val) => sum + val, 0) /
            Object.values(best.ratings).length

        return currentAvg > bestAvg ? current : best
    })
}

export { CLASSES, SECTIONS, STUDENTS_LIST }
