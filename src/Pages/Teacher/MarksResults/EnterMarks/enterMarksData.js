import { CLASSES, SECTIONS, SUBJECTS } from '../../AssignedClass/assignedClassData'
import { STUDENTS_LIST } from '../../StudentsList/studentsListData'

export const EXAM_NAMES = [
    'Mid Term Examination',
    'Unit Test — Term 1',
    'Annual Examination',
    'Pre-Board Examination',
    'Monthly Assessment',
    'Practical Examination',
]

export const GRADES = ['A+', 'A', 'B+', 'B', 'C', 'D', 'F']

const STORAGE_KEY = 'teacher-enter-marks'

export const computeGrade = (obtained, total) => {
    const obtainedNum = Number(obtained)
    const totalNum = Number(total)
    if (!totalNum || totalNum <= 0 || Number.isNaN(obtainedNum)) return ''
    const pct = (obtainedNum / totalNum) * 100
    if (pct >= 90) return 'A+'
    if (pct >= 80) return 'A'
    if (pct >= 70) return 'B+'
    if (pct >= 60) return 'B'
    if (pct >= 50) return 'C'
    if (pct >= 40) return 'D'
    return 'F'
}

const buildEntry = ({
    entryId,
    student,
    subject,
    examName,
    totalMarks,
    obtainedMarks,
    grade,
    remarks,
}) => ({
    id: entryId,
    entryId,
    rollNumber: student.rollNumber,
    subject,
    className: student.className,
    section: student.section,
    classSection: `${student.className} - ${student.section}`,
    examName,
    studentName: student.name,
    studentId: student.id,
    admissionNumber: student.admissionNumber,
    totalMarks,
    obtainedMarks,
    grade,
    remarks,
})

const DEFAULT_MARKS_ENTRIES = [
    buildEntry({
        entryId: 'ME-1001',
        student: STUDENTS_LIST[0],
        subject: 'Mathematics',
        examName: 'Mid Term Examination',
        totalMarks: 100,
        obtainedMarks: 88,
        grade: 'A',
        remarks: 'Strong performance in algebra and geometry.',
    }),
    buildEntry({
        entryId: 'ME-1002',
        student: STUDENTS_LIST[1],
        subject: 'Physics',
        examName: 'Unit Test — Term 1',
        totalMarks: 50,
        obtainedMarks: 46,
        grade: 'A+',
        remarks: 'Excellent grasp of light and electricity units.',
    }),
    buildEntry({
        entryId: 'ME-1003',
        student: STUDENTS_LIST[2],
        subject: 'Chemistry',
        examName: 'Mid Term Examination',
        totalMarks: 100,
        obtainedMarks: 72,
        grade: 'B+',
        remarks: 'Needs improvement in organic chemistry section.',
    }),
    buildEntry({
        entryId: 'ME-1004',
        student: STUDENTS_LIST[3],
        subject: 'English',
        examName: 'Annual Examination',
        totalMarks: 100,
        obtainedMarks: 91,
        grade: 'A+',
        remarks: 'Outstanding essay and comprehension scores.',
    }),
    buildEntry({
        entryId: 'ME-1005',
        student: STUDENTS_LIST[4],
        subject: 'Computer Science',
        examName: 'Practical Examination',
        totalMarks: 50,
        obtainedMarks: 42,
        grade: 'A',
        remarks: 'Good programming and logic implementation.',
    }),
    buildEntry({
        entryId: 'ME-1006',
        student: STUDENTS_LIST[5],
        subject: 'Mathematics',
        examName: 'Pre-Board Examination',
        totalMarks: 100,
        obtainedMarks: 95,
        grade: 'A+',
        remarks: 'Consistent top performer in mathematics.',
    }),
]

export const saveMarksEntries = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getMarksEntries = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    saveMarksEntries(DEFAULT_MARKS_ENTRIES)
    return DEFAULT_MARKS_ENTRIES
}

export const getMarksEntryById = (id) =>
    getMarksEntries().find((item) => item.id === id || item.entryId === id) ?? null

export const addMarksEntry = (payload) => {
    const list = getMarksEntries()
    const nextId = `ME-${1000 + list.length + 1}`
    const student = STUDENTS_LIST.find((item) => item.rollNumber === payload.rollNumber)
    const entry = {
        id: nextId,
        entryId: nextId,
        rollNumber: payload.rollNumber,
        subject: payload.subject,
        className: payload.className,
        section: payload.section,
        classSection: `${payload.className} - ${payload.section}`,
        examName: payload.examName,
        studentName: payload.studentName,
        studentId: student?.id ?? '',
        admissionNumber: student?.admissionNumber ?? '',
        totalMarks: Number(payload.totalMarks),
        obtainedMarks: Number(payload.obtainedMarks),
        grade: payload.grade,
        remarks: payload.remarks,
    }
    const next = [entry, ...list]
    saveMarksEntries(next)
    return next
}

export { CLASSES, SECTIONS, SUBJECTS, STUDENTS_LIST }
