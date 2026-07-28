import { CLASSES, SECTIONS } from '../../AssignedClass/assignedClassData'
import { STUDENTS_LIST } from '../../StudentsList/studentsListData'

const student = (id, extra = {}) => {
    const s = STUDENTS_LIST.find((item) => item.id === id)
    if (!s) return null
    return {
        id: s.id,
        name: s.name,
        rollNumber: s.rollNumber,
        admissionNumber: s.admissionNumber,
        profile: s.profile,
        email: s.email,
        ...extra,
    }
}

const buildSubmissionFile = (studentName, assignmentTitle) => {
    const firstName = studentName.split(' ')[0].toLowerCase()
    const slug = assignmentTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 36)
    return `${firstName}-${slug}.pdf`
}

const submittedStudent = (assignmentTitle, id, { submittedAt, isLate = false, note } = {}) => {
    const entry = student(id, { submittedAt, isLate })
    if (!entry) return null
    return {
        ...entry,
        submission: {
            fileName: buildSubmissionFile(entry.name, assignmentTitle),
            fileSize: `${720 + (entry.rollNumber?.length ?? 0) * 48} KB`,
            additionalNote: note ?? 'Submitted as per the assignment guidelines.',
        },
    }
}

export const SUBMISSION_STATUS_CONFIG = {
    submitted: {
        title: 'Submitted Students',
        accent: '#4CAF50',
        badgeClass: 'bg-[#4CAF5033] text-[#4CAF50]',
        emptyText: 'No students have submitted this assignment yet.',
    },
    pending: {
        title: 'Pending Students',
        accent: '#FF9800',
        badgeClass: 'bg-[#FF980033] text-[#FF9800]',
        emptyText: 'All students have submitted this assignment.',
    },
    late: {
        title: 'Late Submissions',
        accent: '#F44336',
        badgeClass: 'bg-[#F4433633] text-[#F44336]',
        emptyText: 'No late submissions for this assignment.',
    },
}

export const SUBMISSIONS_LIST = [
    {
        id: 'SUB-1001',
        assignmentId: 'ASM-1001',
        assignmentTitle: 'Quadratic Equations Worksheet',
        className: '10',
        section: 'A',
        classSection: '10-A',
        totalStudents: 6,
        submittedStudents: 5,
        pendingStudents: 1,
        lateSubmissions: 1,
        studentDetails: {
            submitted: [
                submittedStudent('Quadratic Equations Worksheet', 'STU-2024-1042', { submittedAt: '08 Jun 2026, 6:45 PM', isLate: true, note: 'Completed all worksheet questions. Apologies for the late upload.' }),
                submittedStudent('Quadratic Equations Worksheet', 'STU-2024-1087', { submittedAt: '07 Jun 2026, 4:20 PM', isLate: false }),
                submittedStudent('Quadratic Equations Worksheet', 'STU-2024-1156', { submittedAt: '07 Jun 2026, 3:15 PM', isLate: false }),
                submittedStudent('Quadratic Equations Worksheet', 'STU-2024-1203', { submittedAt: '07 Jun 2026, 5:00 PM', isLate: false }),
                submittedStudent('Quadratic Equations Worksheet', 'STU-2024-1318', { submittedAt: '06 Jun 2026, 2:30 PM', isLate: false }),
            ].filter(Boolean),
            pending: [student('STU-2024-1425')].filter(Boolean),
            late: [
                submittedStudent('Quadratic Equations Worksheet', 'STU-2024-1042', { submittedAt: '08 Jun 2026, 6:45 PM', isLate: true, note: 'Completed all worksheet questions. Apologies for the late upload.' }),
            ].filter(Boolean),
        },
    },
    {
        id: 'SUB-1002',
        assignmentId: 'ASM-1002',
        assignmentTitle: 'Light Reflection & Refraction Notes',
        className: '10',
        section: 'A',
        classSection: '10-A',
        totalStudents: 6,
        submittedStudents: 6,
        pendingStudents: 0,
        lateSubmissions: 0,
        studentDetails: {
            submitted: [
                submittedStudent('Light Reflection & Refraction Notes', 'STU-2024-1042', { submittedAt: '05 Jun 2026, 11:00 AM', isLate: false }),
                submittedStudent('Light Reflection & Refraction Notes', 'STU-2024-1087', { submittedAt: '05 Jun 2026, 10:30 AM', isLate: false }),
                submittedStudent('Light Reflection & Refraction Notes', 'STU-2024-1156', { submittedAt: '05 Jun 2026, 9:45 AM', isLate: false }),
                submittedStudent('Light Reflection & Refraction Notes', 'STU-2024-1203', { submittedAt: '05 Jun 2026, 12:15 PM', isLate: false }),
                submittedStudent('Light Reflection & Refraction Notes', 'STU-2024-1318', { submittedAt: '05 Jun 2026, 1:00 PM', isLate: false }),
                submittedStudent('Light Reflection & Refraction Notes', 'STU-2024-1425', { submittedAt: '05 Jun 2026, 11:45 AM', isLate: false }),
            ].filter(Boolean),
            pending: [],
            late: [],
        },
    },
    {
        id: 'SUB-1003',
        assignmentId: 'ASM-1003',
        assignmentTitle: 'English Essay — Climate Change',
        className: '10',
        section: 'A',
        classSection: '10-A',
        totalStudents: 6,
        submittedStudents: 3,
        pendingStudents: 3,
        lateSubmissions: 2,
        studentDetails: {
            submitted: [
                submittedStudent('English Essay — Climate Change', 'STU-2024-1042', { submittedAt: '09 Jun 2026, 8:10 PM', isLate: true, note: 'Essay includes introduction, causes, and conclusion as discussed in class.' }),
                submittedStudent('English Essay — Climate Change', 'STU-2024-1087', { submittedAt: '09 Jun 2026, 7:55 PM', isLate: true }),
                submittedStudent('English Essay — Climate Change', 'STU-2024-1156', { submittedAt: '06 Jun 2026, 4:00 PM', isLate: false }),
            ].filter(Boolean),
            pending: [
                student('STU-2024-1203'),
                student('STU-2024-1318'),
                student('STU-2024-1425'),
            ].filter(Boolean),
            late: [
                submittedStudent('English Essay — Climate Change', 'STU-2024-1042', { submittedAt: '09 Jun 2026, 8:10 PM', isLate: true, note: 'Essay includes introduction, causes, and conclusion as discussed in class.' }),
                submittedStudent('English Essay — Climate Change', 'STU-2024-1087', { submittedAt: '09 Jun 2026, 7:55 PM', isLate: true }),
            ].filter(Boolean),
        },
    },
    {
        id: 'SUB-1004',
        assignmentId: 'ASM-1004',
        assignmentTitle: 'Periodic Table Chart Activity',
        className: '10',
        section: 'A',
        classSection: '10-A',
        totalStudents: 6,
        submittedStudents: 4,
        pendingStudents: 2,
        lateSubmissions: 1,
        studentDetails: {
            submitted: [
                submittedStudent('Periodic Table Chart Activity', 'STU-2024-1087', { submittedAt: '04 Jun 2026, 3:30 PM', isLate: false }),
                submittedStudent('Periodic Table Chart Activity', 'STU-2024-1156', { submittedAt: '04 Jun 2026, 2:00 PM', isLate: false }),
                submittedStudent('Periodic Table Chart Activity', 'STU-2024-1203', { submittedAt: '05 Jun 2026, 9:20 PM', isLate: true }),
                submittedStudent('Periodic Table Chart Activity', 'STU-2024-1318', { submittedAt: '04 Jun 2026, 4:45 PM', isLate: false }),
            ].filter(Boolean),
            pending: [student('STU-2024-1042'), student('STU-2024-1425')].filter(Boolean),
            late: [
                submittedStudent('Periodic Table Chart Activity', 'STU-2024-1203', { submittedAt: '05 Jun 2026, 9:20 PM', isLate: true }),
            ].filter(Boolean),
        },
    },
    {
        id: 'SUB-1005',
        assignmentId: 'ASM-1005',
        assignmentTitle: 'French Revolution Timeline',
        className: '10',
        section: 'A',
        classSection: '10-A',
        totalStudents: 6,
        submittedStudents: 6,
        pendingStudents: 0,
        lateSubmissions: 0,
        studentDetails: {
            submitted: [
                submittedStudent('French Revolution Timeline', 'STU-2024-1042', { submittedAt: '03 Jun 2026, 10:00 AM', isLate: false }),
                submittedStudent('French Revolution Timeline', 'STU-2024-1087', { submittedAt: '03 Jun 2026, 10:15 AM', isLate: false }),
                submittedStudent('French Revolution Timeline', 'STU-2024-1156', { submittedAt: '03 Jun 2026, 11:30 AM', isLate: false }),
                submittedStudent('French Revolution Timeline', 'STU-2024-1203', { submittedAt: '03 Jun 2026, 9:50 AM', isLate: false }),
                submittedStudent('French Revolution Timeline', 'STU-2024-1318', { submittedAt: '03 Jun 2026, 12:00 PM', isLate: false }),
                submittedStudent('French Revolution Timeline', 'STU-2024-1425', { submittedAt: '03 Jun 2026, 10:40 AM', isLate: false }),
            ].filter(Boolean),
            pending: [],
            late: [],
        },
    },
    {
        id: 'SUB-1006',
        assignmentId: 'ASM-1006',
        assignmentTitle: 'Computer Science — Flowchart Practice',
        className: '10',
        section: 'A',
        classSection: '10-A',
        totalStudents: 6,
        submittedStudents: 2,
        pendingStudents: 4,
        lateSubmissions: 0,
        studentDetails: {
            submitted: [
                submittedStudent('Computer Science — Flowchart Practice', 'STU-2024-1042', { submittedAt: '10 Jun 2026, 1:15 PM', isLate: false }),
                submittedStudent('Computer Science — Flowchart Practice', 'STU-2024-1087', { submittedAt: '10 Jun 2026, 2:00 PM', isLate: false }),
            ].filter(Boolean),
            pending: [
                student('STU-2024-1156'),
                student('STU-2024-1203'),
                student('STU-2024-1318'),
                student('STU-2024-1425'),
            ].filter(Boolean),
            late: [],
        },
    },
]

export { CLASSES, SECTIONS }
