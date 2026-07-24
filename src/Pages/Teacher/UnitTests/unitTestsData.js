import { CLASSES, SECTIONS, SUBJECTS } from '../AssignedClass/assignedClassData'

const STORAGE_KEY = 'teacher-unit-tests'

export const ROUTE_BASE = '/teacher/unit-tests'

const DEFAULT_UNIT_TESTS = [
    {
        id: 'UT-1001',
        entryId: 'UT-1001',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        title: 'Real Numbers — Unit Test I',
        description: 'Unit test covering Euclid\'s division lemma, irrational numbers, and number system fundamentals.',
        testDate: '2026-04-15',
        totalMarks: '25',
        duration: '45',
        fileName: 'Real_Numbers_Unit_Test_I.pdf',
        fileType: 'pdf',
    },
    {
        id: 'UT-1002',
        entryId: 'UT-1002',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        title: 'Polynomials — Unit Test',
        description: 'Assessment on zeroes of polynomials, factorisation, and division algorithm.',
        testDate: '2026-05-02',
        totalMarks: '30',
        duration: '60',
        fileName: 'Polynomials_Unit_Test.pdf',
        fileType: 'pdf',
    },
    {
        id: 'UT-1003',
        entryId: 'UT-1003',
        subject: 'Mathematics',
        className: '9',
        section: 'B',
        title: 'Number Systems — Unit Test',
        description: 'Short answer and objective questions on rational and irrational numbers.',
        testDate: '2026-04-22',
        totalMarks: '20',
        duration: '40',
        fileName: 'Number_Systems_Unit_Test.pdf',
        fileType: 'pdf',
    },
]

export const getUnitTests = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return DEFAULT_UNIT_TESTS
}

export const saveUnitTests = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getUnitTestById = (id) =>
    getUnitTests().find((item) => item.id === id) ?? null

export const generateEntryId = () => {
    const list = getUnitTests()
    const max = list.reduce((acc, item) => {
        const num = Number(item.entryId.split('-').pop())
        return Number.isFinite(num) ? Math.max(acc, num) : acc
    }, 1000)
    return `UT-${max + 1}`
}

export const addUnitTest = (values) => {
    const entryId = generateEntryId()
    const record = {
        id: entryId,
        entryId,
        subject: values.subject,
        className: values.className,
        section: values.section,
        title: values.title,
        description: values.description,
        testDate: values.testDate,
        totalMarks: values.totalMarks,
        duration: values.duration,
        fileName: values.fileName || '—',
        fileType: values.fileType || 'pdf',
    }
    saveUnitTests([record, ...getUnitTests()])
    return record
}

export const filterUnitTests = (items, filters) =>
    items.filter((item) => {
        const search = filters.search.trim().toLowerCase()
        const matchesSearch =
            !search ||
            item.entryId.toLowerCase().includes(search) ||
            item.title.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search) ||
            item.fileName.toLowerCase().includes(search)

        const matchesSubject = !filters.subject || item.subject === filters.subject
        const matchesClass = !filters.className || item.className === filters.className
        const matchesSection = !filters.section || item.section === filters.section

        return matchesSearch && matchesSubject && matchesClass && matchesSection
    })

export const formatTestDate = (value) => {
    if (!value) return '—'
    const date = new Date(`${value}T00:00:00`)
    if (Number.isNaN(date.getTime())) return value
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}

export { CLASSES, SECTIONS, SUBJECTS }
