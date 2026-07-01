import { CLASSES, SECTIONS, SUBJECTS } from '../AssignedClass/assignedClassData'

const STORAGE_KEY = 'teacher-assignments'

export const ASSIGNMENT_STATUSES = ['Active', 'In-Process', 'Completed']

export const statusBadgeColor = {
    Active: 'bg-[#4CAF5033] text-[#4CAF50]',
    'In-Process': 'bg-[#2196F333] text-[#2196F3]',
    Completed: 'bg-[#515DEF33] text-[#515DEF]',
}

export const getAssignments = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return []
}

export const saveAssignments = (assignments) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments))
}

export const addAssignment = (assignment) => {
    const list = getAssignments()
    const nextId = list.length + 1
    const record = {
        id: `ASM-${1000 + nextId}`,
        assignmentId: `ASM-${1000 + nextId}`,
        status: 'Active',
        ...assignment,
    }
    const next = [...list, record]
    saveAssignments(next)
    return record
}

export const getAssignmentById = (id) =>
    getAssignments().find((item) => item.id === id) ?? null

export { CLASSES, SECTIONS, SUBJECTS }
