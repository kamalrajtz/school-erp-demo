import { CLASSES, SECTIONS } from '../../AssignedClass/assignedClassData'
import { STUDENTS_LIST } from '../../StudentsList/studentsListData'

export const TRANSFER_STATUSES = ['Pending', 'Approved', 'Rejected']
export const TRANSFER_TYPES = ['Internal', 'External']

export const statusBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

const STORAGE_KEY = 'teacher-student-transfers'

const buildTransfer = ({
    transferRequestId,
    student,
    transferType,
    transferTo,
    requestDate,
    reason,
    status,
}) => ({
    id: transferRequestId,
    transferRequestId,
    admissionNumber: student.admissionNumber,
    studentName: student.name,
    studentId: student.id,
    className: student.className,
    section: student.section,
    classSection: student.classSection,
    transferType,
    transferTo,
    requestDate,
    reason,
    status,
})

const DEFAULT_STUDENT_TRANSFERS = [
    buildTransfer({
        transferRequestId: 'TRF-1001',
        student: STUDENTS_LIST[0],
        transferType: 'External',
        transferTo: 'Global Academy, Kochi',
        requestDate: '02-07-2025',
        reason: 'Parent job transfer to another city.',
        status: 'Pending',
    }),
    buildTransfer({
        transferRequestId: 'TRF-1002',
        student: STUDENTS_LIST[1],
        transferType: 'Internal',
        transferTo: 'Class 10 - Section B',
        requestDate: '05-07-2025',
        reason: 'Requested section change due to timetable conflict.',
        status: 'Approved',
    }),
    buildTransfer({
        transferRequestId: 'TRF-1003',
        student: STUDENTS_LIST[2],
        transferType: 'External',
        transferTo: 'Delhi Public School',
        requestDate: '08-07-2025',
        reason: 'Family relocation to Delhi.',
        status: 'Pending',
    }),
    buildTransfer({
        transferRequestId: 'TRF-1004',
        student: STUDENTS_LIST[3],
        transferType: 'Internal',
        transferTo: 'Class 11 - Section A',
        requestDate: '10-06-2025',
        reason: 'Promotion to higher class with section transfer.',
        status: 'Rejected',
    }),
    buildTransfer({
        transferRequestId: 'TRF-1005',
        student: STUDENTS_LIST[4],
        transferType: 'External',
        transferTo: 'St. Mary\'s International School',
        requestDate: '15-06-2025',
        reason: 'Admission confirmed at another institution.',
        status: 'Approved',
    }),
    buildTransfer({
        transferRequestId: 'TRF-1006',
        student: STUDENTS_LIST[5],
        transferType: 'Internal',
        transferTo: 'Class 10 - Section B',
        requestDate: '20-06-2025',
        reason: 'Peer group alignment request from parents.',
        status: 'Pending',
    }),
]

export const saveStudentTransfers = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getStudentTransfers = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    saveStudentTransfers(DEFAULT_STUDENT_TRANSFERS)
    return DEFAULT_STUDENT_TRANSFERS
}

export const getStudentTransferById = (id) =>
    getStudentTransfers().find((item) => item.id === id || item.transferRequestId === id) ?? null

export const updateTransferStatus = (id, status) => {
    const list = getStudentTransfers()
    const next = list.map((item) =>
        item.id === id || item.transferRequestId === id ? { ...item, status } : item,
    )
    saveStudentTransfers(next)
    return next
}

export { CLASSES, SECTIONS }
