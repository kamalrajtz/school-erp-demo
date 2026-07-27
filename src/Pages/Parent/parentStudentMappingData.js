import { STUDENTS_LIST } from '../Teacher/StudentsList/studentsListData'
import { PARENT_CHILD_PROFILES } from './parentStudentProfiles'

/** Maps each parent account to allowed student IDs. */
export const PARENT_STUDENT_MAPPINGS = [
    {
        parentId: 'PAR-001',
        studentIds: ['STU-PAR-001', 'STU-PAR-002', 'STU-PAR-003'],
    },
    {
        parentId: 'PAR-002',
        studentIds: ['STU-2024-1042'],
    },
]

export const getMappedStudentIds = (parentId) => {
    const mapping = PARENT_STUDENT_MAPPINGS.find((item) => item.parentId === parentId)
    return mapping?.studentIds ?? []
}

export const isStudentMappedToParent = (parentId, studentId) =>
    getMappedStudentIds(parentId).includes(studentId)

export const getStudentProfileById = (studentId) => {
    if (PARENT_CHILD_PROFILES[studentId]) {
        return PARENT_CHILD_PROFILES[studentId]
    }

    const fromTeacherList = STUDENTS_LIST.find((student) => student.id === studentId)
    if (!fromTeacherList) return null

    return {
        id: fromTeacherList.id,
        name: fromTeacherList.name,
        className: fromTeacherList.className,
        section: fromTeacherList.section,
        classSection: fromTeacherList.classSection,
        rollNumber: fromTeacherList.rollNumber,
        admissionNumber: fromTeacherList.admissionNumber,
    }
}

export const getMappedStudentsForParent = (parentId) =>
    getMappedStudentIds(parentId)
        .map((studentId) => getStudentProfileById(studentId))
        .filter(Boolean)
