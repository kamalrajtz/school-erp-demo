/** Per-student summary snippets shown when a parent switches children. */
export const STUDENT_RESULT_SUMMARY = {
    'STU-PAR-001': {
        examAppeared: 4,
        averagePercent: 84,
        highestMark: '92/100',
        highestSubject: 'Mathematics',
        overallGrade: 'A',
        encouragementName: 'Abhinav',
    },
    'STU-PAR-002': {
        examAppeared: 3,
        averagePercent: 76,
        highestMark: '88/100',
        highestSubject: 'English',
        overallGrade: 'B+',
        encouragementName: 'Aarav',
    },
    'STU-PAR-003': {
        examAppeared: 2,
        averagePercent: 91,
        highestMark: '95/100',
        highestSubject: 'Mathematics',
        overallGrade: 'A+',
        encouragementName: 'Ananya',
    },
    'STU-2024-1042': {
        examAppeared: 4,
        averagePercent: 84,
        highestMark: '92/100',
        highestSubject: 'Mathematics',
        overallGrade: 'A',
        encouragementName: 'Arjun',
    },
}

export const getStudentResultSummary = (studentId) =>
    STUDENT_RESULT_SUMMARY[studentId] ?? STUDENT_RESULT_SUMMARY['STU-2024-1042']
