import { CLASSES, SECTIONS, SUBJECTS } from '../../AssignedClass/assignedClassData'

const STORAGE_KEY = 'teacher-student-deliverables-study-materials'

export const DEFAULT_ROUTE_BASE = '/teacher/student-deliverables/study-materials'
export const ACADEMICS_ROUTE_BASE = '/teacher/academics/study-materials'

const DEFAULT_STUDY_MATERIALS = [
    {
        id: 'SM-1001',
        materialId: 'SM-1001',
        title: 'Real Numbers — Chapter Notes',
        description: 'Comprehensive notes covering Euclid\'s division lemma, irrational numbers, and decimal expansions.',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        fileName: 'Real_Numbers_Notes.pdf',
        fileType: 'pdf',
    },
    {
        id: 'SM-1002',
        materialId: 'SM-1002',
        title: 'Polynomials — Worksheet & Solutions',
        description: 'Practice worksheet with step-by-step solutions for polynomial zeroes and factorisation.',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        fileName: 'Polynomials_Worksheet.pdf',
        fileType: 'pdf',
    },
    {
        id: 'SM-1003',
        materialId: 'SM-1003',
        title: 'Quadratic Equations — Video Lecture',
        description: 'Recorded lecture explaining factorisation method and quadratic formula with examples.',
        subject: 'Mathematics',
        className: '10',
        section: 'A',
        fileName: 'Quadratic_Equations_Lecture.mp4',
        fileType: 'mp4',
    },
    {
        id: 'SM-1004',
        materialId: 'SM-1004',
        title: 'Trigonometric Identities — Reference Sheet',
        description: 'Quick reference sheet for standard trigonometric identities and proofs.',
        subject: 'Mathematics',
        className: '10',
        section: 'B',
        fileName: 'Trig_Identities_Sheet.pdf',
        fileType: 'pdf',
    },
    {
        id: 'SM-1005',
        materialId: 'SM-1005',
        title: 'Number Systems — Presentation',
        description: 'Classroom presentation slides for rational and irrational numbers.',
        subject: 'Mathematics',
        className: '9',
        section: 'A',
        fileName: 'Number_Systems_Slides.pptx',
        fileType: 'ppt',
    },
    {
        id: 'SM-1006',
        materialId: 'SM-1006',
        title: 'Sets — Concept Map',
        description: 'Visual concept map summarising set operations and Venn diagram applications.',
        subject: 'Mathematics',
        className: '11',
        section: 'A',
        fileName: 'Sets_Concept_Map.pdf',
        fileType: 'pdf',
    },
]

export const getStudyMaterials = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return DEFAULT_STUDY_MATERIALS
}

export const saveStudyMaterials = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getStudyMaterialById = (id) =>
    getStudyMaterials().find((item) => item.id === id) ?? null

export const generateMaterialId = () => {
    const list = getStudyMaterials()
    const max = list.reduce((acc, item) => {
        const num = Number(item.materialId.split('-').pop())
        return Number.isFinite(num) ? Math.max(acc, num) : acc
    }, 1000)
    return `SM-${max + 1}`
}

export const addStudyMaterial = (values) => {
    const materialId = generateMaterialId()
    const record = {
        id: materialId,
        materialId,
        title: values.title,
        description: values.description,
        subject: values.subject,
        className: values.className,
        section: values.section,
        fileName: values.fileName || '—',
        fileType: values.fileType || 'pdf',
    }
    saveStudyMaterials([record, ...getStudyMaterials()])
    return record
}

export const filterStudyMaterials = (items, filters) =>
    items.filter((item) => {
        const search = filters.search.trim().toLowerCase()
        const matchesSearch =
            !search ||
            item.materialId.toLowerCase().includes(search) ||
            item.title.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search)

        const matchesSubject = !filters.subject || item.subject === filters.subject
        const matchesClass = !filters.className || item.className === filters.className
        const matchesSection = !filters.section || item.section === filters.section

        return matchesSearch && matchesSubject && matchesClass && matchesSection
    })

export { CLASSES, SECTIONS, SUBJECTS }
