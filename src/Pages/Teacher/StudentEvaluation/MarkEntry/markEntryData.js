import { CLASSES, SECTIONS, SUBJECTS } from '../../AssignedClass/assignedClassData'
import { STUDENTS_LIST } from '../../StudentsList/studentsListData'

export { CLASSES, SECTIONS, SUBJECTS }

export const ACADEMIC_YEARS = ['2026 - 2027', '2025 - 2026']
export const TERMS = ['Term 1', 'Term 2', 'Term 3']

export const EXAM_OPTIONS = [
    { name: 'Mid Term', maxMarks: 100 },
    { name: 'Unit Test', maxMarks: 50 },
    { name: 'Annual Examination', maxMarks: 100 },
    { name: 'Pre-Board Examination', maxMarks: 100 },
]

export const STATUS_FILTERS = ['All', 'Pending', 'Entered', 'Absent']

export const PASS_MARK_PERCENT = 33

const STORAGE_KEY = 'teacher-mark-entry-sessions'

const EXTRA_NAMES = [
    'Abhinav Kumar', 'Rahul S', 'Priya M', 'Ananya Iyer', 'Vikram Singh',
    'Meera Joshi', 'Aditya Patel', 'Kavya Nambiar', 'Rohan Das', 'Isha Gupta',
    'Nikhil Rao', 'Sana Khan', 'Dev Malhotra', 'Lakshmi Pillai', 'Arun Thomas',
    'Fatima Ali', 'Gaurav Mehta', 'Hema Krishnan', 'Imran Sheikh', 'Jyoti Desai',
    'Kiran Babu', 'Leela Nair', 'Manoj Reddy', 'Neha Chopra', 'Omar Hussain',
    'Pooja Sinha', 'Qadir Ahmed', 'Riya Kapoor', 'Sanjay Varma', 'Tara Menon',
]

export const formatClassLabel = (className) => `Grade ${className}`

export const getGradeFromPercentage = (percentage) => {
    if (percentage >= 90) return 'A+'
    if (percentage >= 80) return 'A'
    if (percentage >= 70) return 'B+'
    if (percentage >= 60) return 'B'
    if (percentage >= 50) return 'C'
    if (percentage >= PASS_MARK_PERCENT) return 'D'
    return 'F'
}

export const computeMarkEntry = ({ obtainedMarks, maxMarks, absent }) => {
    if (absent) {
        return { grade: '—', percentage: null, displayPercent: '—', result: 'Absent' }
    }

    if (obtainedMarks === null || obtainedMarks === '' || Number.isNaN(Number(obtainedMarks))) {
        return { grade: '—', percentage: null, displayPercent: '—', result: '—' }
    }

    const obtained = Number(obtainedMarks)
    const percentage = (obtained / maxMarks) * 100
    const grade = getGradeFromPercentage(percentage)
    const result = percentage >= PASS_MARK_PERCENT ? 'Pass' : 'Fail'

    return {
        grade,
        percentage,
        displayPercent: `${Math.round(percentage)}%`,
        result,
    }
}

export const buildContextKey = (context) =>
    [
        context.academicYear,
        context.term,
        context.exam,
        context.className,
        context.section,
        context.subject,
    ].join('|')

export const getExamMaxMarks = (examName) =>
    EXAM_OPTIONS.find((item) => item.name === examName)?.maxMarks ?? 100

export const getStudentsForMarkEntry = (className, section) => {
    const existing = STUDENTS_LIST.filter(
        (student) => student.className === className && student.section === section,
    )

    const targetCount = className === '10' && section === 'A' ? 35 : Math.max(existing.length, 12)
    const students = [...existing]

    let index = 0
    while (students.length < targetCount && index < EXTRA_NAMES.length) {
        const roll = String(students.length + 1).padStart(2, '0')
        const name = EXTRA_NAMES[index]
        if (!students.some((student) => student.name === name)) {
            students.push({
                id: `STU-GEN-${className}-${section}-${roll}`,
                rollNumber: roll,
                name,
                admissionNumber: `ADM-${className}${section}-${roll}`,
                className,
                section,
                classSection: `${className}-${section}`,
            })
        }
        index += 1
    }

    return students.sort((a, b) => {
        const rollA = parseInt(String(a.rollNumber).replace(/\D/g, ''), 10) || 0
        const rollB = parseInt(String(b.rollNumber).replace(/\D/g, ''), 10) || 0
        return rollA - rollB
    })
}

const defaultEntry = () => ({
    obtainedMarks: null,
    absent: false,
    remarks: '',
})

export const createEmptyEntries = (students) => {
    const entries = {}
    students.forEach((student) => {
        entries[student.id] = defaultEntry()
    })
    return entries
}

const readSessions = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return {}
}

const writeSessions = (sessions) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions))
}

export const loadMarkEntrySession = (context) => {
    const contextKey = buildContextKey(context)
    const sessions = readSessions()
    const existing = sessions[contextKey]

    if (existing) {
        return { ...existing, contextKey }
    }

    const students = getStudentsForMarkEntry(context.className, context.section)
    return {
        contextKey,
        ...context,
        maxMarks: context.maxMarks ?? getExamMaxMarks(context.exam),
        status: 'draft',
        entries: createEmptyEntries(students),
        students,
    }
}

export const saveMarkEntrySession = (session) => {
    const sessions = readSessions()
    sessions[session.contextKey] = {
        ...session,
        updatedAt: new Date().toISOString(),
    }
    writeSessions(sessions)
    return session
}

export const submitMarkEntrySession = (session) => {
    const submitted = {
        ...session,
        status: 'submitted',
        submittedAt: new Date().toISOString(),
    }
    saveMarkEntrySession(submitted)
    return submitted
}

export const getEntryWithComputed = (entry, maxMarks) => {
    const computed = computeMarkEntry({
        obtainedMarks: entry.obtainedMarks,
        maxMarks,
        absent: entry.absent,
    })
    return { ...entry, ...computed }
}

export const isEntryComplete = (entry) =>
    entry.absent || (entry.obtainedMarks !== null && entry.obtainedMarks !== '' && !Number.isNaN(Number(entry.obtainedMarks)))

export const getMarkEntryStats = (students, entries, maxMarks) => {
    let marksEntered = 0
    let pending = 0
    let absent = 0
    const obtainedValues = []

    students.forEach((student) => {
        const entry = entries[student.id] ?? defaultEntry()
        if (entry.absent) {
            absent += 1
            marksEntered += 1
            return
        }
        if (isEntryComplete(entry)) {
            marksEntered += 1
            obtainedValues.push(Number(entry.obtainedMarks))
            return
        }
        pending += 1
    })

    const averageMark = obtainedValues.length
        ? (obtainedValues.reduce((sum, value) => sum + value, 0) / obtainedValues.length).toFixed(1)
        : '—'
    const highestMark = obtainedValues.length ? Math.max(...obtainedValues) : '—'
    const lowestMark = obtainedValues.length ? Math.min(...obtainedValues) : '—'

    return {
        totalStudents: students.length,
        marksEntered,
        pending,
        absent,
        averageMark,
        highestMark,
        lowestMark,
    }
}

export const filterStudentsForTable = (students, entries, { search, statusFilter }) => {
    const query = search.trim().toLowerCase()

    return students.filter((student) => {
        const entry = entries[student.id] ?? defaultEntry()

        if (query) {
            const haystack = `${student.name} ${student.rollNumber} ${student.admissionNumber}`.toLowerCase()
            if (!haystack.includes(query)) return false
        }

        if (statusFilter === 'Pending') return !isEntryComplete(entry)
        if (statusFilter === 'Entered') return isEntryComplete(entry) && !entry.absent
        if (statusFilter === 'Absent') return entry.absent

        return true
    })
}

export const resultBadgeColor = {
    Pass: 'bg-[#4CAF5033] text-[#4CAF50]',
    Fail: 'bg-[#FF000033] text-[#FF0000]',
    Absent: 'bg-[#FF980033] text-[#FF9800]',
    '—': 'bg-[#66708533] text-[#667085]',
}
