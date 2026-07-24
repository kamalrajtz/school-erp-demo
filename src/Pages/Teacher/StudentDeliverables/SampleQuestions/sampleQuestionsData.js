import { CLASSES, SECTIONS, SUBJECTS } from '../../AssignedClass/assignedClassData'

const STORAGE_KEY = 'teacher-student-deliverables-sample-questions'

export const ROUTE_BASE = '/teacher/student-deliverables/sample-questions'

const DEFAULT_SAMPLE_QUESTIONS = [
    {
        id: 'SQ-1001',
        entryId: 'SQ-1001',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        title: 'Real Numbers — Sample Questions',
        description: 'Practice questions on Euclid\'s division lemma and irrational numbers.',
        fileName: 'Real_Numbers_Sample_Questions.pdf',
        fileType: 'pdf',
    },
    {
        id: 'SQ-1002',
        entryId: 'SQ-1002',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        title: 'Polynomials — MCQ Set',
        description: 'Multiple choice questions covering zeroes and factorisation of polynomials.',
        fileName: 'Polynomials_MCQ_Set.pdf',
        fileType: 'pdf',
    },
    {
        id: 'SQ-1003',
        entryId: 'SQ-1003',
        subject: 'Mathematics',
        className: '10',
        section: 'B',
        title: 'Quadratic Equations — Worksheet',
        description: 'Short answer and long answer questions on quadratic formula applications.',
        fileName: 'Quadratic_Equations_Worksheet.pdf',
        fileType: 'pdf',
    },
    {
        id: 'SQ-1004',
        entryId: 'SQ-1004',
        subject: 'Mathematics',
        className: '9',
        section: 'A',
        title: 'Number Systems — Practice Paper',
        description: 'Sample paper for rational and irrational number concepts.',
        fileName: 'Number_Systems_Practice.pdf',
        fileType: 'pdf',
    },
]

export const getSampleQuestions = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return DEFAULT_SAMPLE_QUESTIONS
}

export const saveSampleQuestions = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getSampleQuestionById = (id) =>
    getSampleQuestions().find((item) => item.id === id) ?? null

export const generateEntryId = () => {
    const list = getSampleQuestions()
    const max = list.reduce((acc, item) => {
        const num = Number(item.entryId.split('-').pop())
        return Number.isFinite(num) ? Math.max(acc, num) : acc
    }, 1000)
    return `SQ-${max + 1}`
}

export const addSampleQuestion = (values) => {
    const entryId = generateEntryId()
    const record = {
        id: entryId,
        entryId,
        subject: values.subject,
        className: values.className,
        section: values.section,
        title: values.title,
        description: values.description,
        fileName: values.fileName || '—',
        fileType: values.fileType || 'pdf',
    }
    saveSampleQuestions([record, ...getSampleQuestions()])
    return record
}

export const filterSampleQuestions = (items, filters) =>
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

export { CLASSES, SECTIONS, SUBJECTS }
