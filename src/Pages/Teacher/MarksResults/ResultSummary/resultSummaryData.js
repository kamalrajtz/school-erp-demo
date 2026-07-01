import { CLASSES, SECTIONS, SUBJECTS } from '../../AssignedClass/assignedClassData'
import { EXAM_NAMES } from '../EnterMarks/enterMarksData'

const STORAGE_KEY = 'teacher-result-summary'

const formatPassPercentage = (passed, appeared) => {
    if (!appeared) return '0%'
    return `${((passed / appeared) * 100).toFixed(1)}%`
}

const buildSummary = ({
    id,
    examName,
    subject,
    className,
    section,
    totalStudents,
    appearedStudents,
    passedStudents,
    failedStudents,
    highestMark,
    lowestMark,
    averageMark,
}) => ({
    id,
    examName,
    subject,
    className,
    section,
    classSection: `${className} - ${section}`,
    totalStudents,
    appearedStudents,
    passedStudents,
    failedStudents,
    highestMark,
    lowestMark,
    averageMark,
    passPercentage: formatPassPercentage(passedStudents, appearedStudents),
})

const DEFAULT_RESULT_SUMMARIES = [
    buildSummary({
        id: 'RS-1001',
        examName: 'Mid Term Examination',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        totalStudents: 38,
        appearedStudents: 37,
        passedStudents: 34,
        failedStudents: 3,
        highestMark: 98,
        lowestMark: 32,
        averageMark: 74.5,
    }),
    buildSummary({
        id: 'RS-1002',
        examName: 'Mid Term Examination',
        subject: 'Physics',
        className: '10',
        section: 'A',
        totalStudents: 38,
        appearedStudents: 38,
        passedStudents: 35,
        failedStudents: 3,
        highestMark: 95,
        lowestMark: 28,
        averageMark: 71.2,
    }),
    buildSummary({
        id: 'RS-1003',
        examName: 'Unit Test — Term 1',
        subject: 'Chemistry',
        className: '10',
        section: 'A',
        totalStudents: 38,
        appearedStudents: 36,
        passedStudents: 33,
        failedStudents: 3,
        highestMark: 49,
        lowestMark: 18,
        averageMark: 38.6,
    }),
    buildSummary({
        id: 'RS-1004',
        examName: 'Annual Examination',
        subject: 'English',
        className: '10',
        section: 'A',
        totalStudents: 38,
        appearedStudents: 38,
        passedStudents: 37,
        failedStudents: 1,
        highestMark: 97,
        lowestMark: 41,
        averageMark: 78.9,
    }),
    buildSummary({
        id: 'RS-1005',
        examName: 'Practical Examination',
        subject: 'Computer Science',
        className: '10',
        section: 'A',
        totalStudents: 38,
        appearedStudents: 37,
        passedStudents: 36,
        failedStudents: 1,
        highestMark: 50,
        lowestMark: 22,
        averageMark: 42.3,
    }),
    buildSummary({
        id: 'RS-1006',
        examName: 'Pre-Board Examination',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        totalStudents: 38,
        appearedStudents: 38,
        passedStudents: 32,
        failedStudents: 6,
        highestMark: 99,
        lowestMark: 24,
        averageMark: 68.4,
    }),
    buildSummary({
        id: 'RS-1007',
        examName: 'Mid Term Examination',
        subject: 'Mathematics',
        className: '10',
        section: 'B',
        totalStudents: 36,
        appearedStudents: 35,
        passedStudents: 31,
        failedStudents: 4,
        highestMark: 92,
        lowestMark: 30,
        averageMark: 69.8,
    }),
    buildSummary({
        id: 'RS-1008',
        examName: 'Monthly Assessment',
        subject: 'English',
        className: '9',
        section: 'A',
        totalStudents: 42,
        appearedStudents: 41,
        passedStudents: 39,
        failedStudents: 2,
        highestMark: 48,
        lowestMark: 20,
        averageMark: 37.5,
    }),
]

export const saveResultSummaries = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getResultSummaries = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    saveResultSummaries(DEFAULT_RESULT_SUMMARIES)
    return DEFAULT_RESULT_SUMMARIES
}

export { CLASSES, SECTIONS, SUBJECTS, EXAM_NAMES }
