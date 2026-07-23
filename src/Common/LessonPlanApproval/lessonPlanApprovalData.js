import { CLASSES, SECTIONS, SUBJECTS } from '../../Pages/Teacher/AssignedClass/assignedClassData'

const STORAGE_KEY = 'school-erp-lesson-plan-approvals'

export const TEACHER_NAME = 'Mr. Anil Kumar'
export const TEACHER_ROLE = 'Teacher'

export const SUBJECT_OPTIONS = SUBJECTS
export const CLASS_OPTIONS = CLASSES.map((item) => `Grade ${item}`)
export const SECTION_OPTIONS = SECTIONS

export const APPROVAL_STATUSES = ['Pending', 'Approved', 'Rejected']
export const TRACK_STATUSES = ['On Track', 'Behind Schedule', 'Completed']
export const SUBMITTER_ROLES = ['Teacher', 'Co-ordinator']

export const approvalStatusColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

const DEFAULT_LESSON_PLANS = [
    {
        id: 'LP-001',
        subject: 'Mathematics',
        submitterName: 'Priya Sharma',
        submitterRole: 'Teacher',
        className: 'Grade 9',
        section: 'A',
        description: 'Quadratic equations introduction with worked examples and practice worksheet.',
        fromDate: '10-03-2026',
        toDate: '14-03-2026',
        submittedAt: '18-03-2026 10:30 AM',
        approvalStatus: 'Pending',
        trackStatus: 'On Track',
        attachment: 'quadratic-equations-plan.pdf',
    },
    {
        id: 'LP-002',
        subject: 'English',
        submitterName: 'Sandy Selva',
        submitterRole: 'Co-ordinator',
        className: 'Grade 10',
        section: 'B',
        description: 'Poetry analysis unit covering metaphors and thematic interpretation.',
        fromDate: '12-03-2026',
        toDate: '18-03-2026',
        submittedAt: '17-03-2026 03:15 PM',
        approvalStatus: 'Pending',
        trackStatus: 'Behind Schedule',
        attachment: 'poetry-unit-plan.docx',
    },
    {
        id: 'LP-003',
        subject: 'Science',
        submitterName: 'Arjun Menon',
        submitterRole: 'Teacher',
        className: 'Grade 8',
        section: 'A',
        description: 'Photosynthesis lab session with observation sheet and group activity.',
        fromDate: '08-03-2026',
        toDate: '12-03-2026',
        submittedAt: '16-03-2026 11:00 AM',
        approvalStatus: 'Approved',
        trackStatus: 'Completed',
        attachment: 'photosynthesis-lab.pdf',
    },
    {
        id: 'LP-004',
        subject: 'Social Studies',
        submitterName: 'Meera Iyer',
        submitterRole: 'Co-ordinator',
        className: 'Grade 11',
        section: 'C',
        description: 'Indian independence movement timeline and source-based discussion.',
        fromDate: '11-03-2026',
        toDate: '20-03-2026',
        submittedAt: '15-03-2026 09:45 AM',
        approvalStatus: 'Pending',
        trackStatus: 'On Track',
        attachment: 'independence-movement.pptx',
    },
    {
        id: 'LP-005',
        subject: 'Computer Science',
        submitterName: TEACHER_NAME,
        submitterRole: TEACHER_ROLE,
        className: 'Grade 12',
        section: 'A',
        description: 'Python functions and recursion with coding exercises.',
        fromDate: '05-03-2026',
        toDate: '10-03-2026',
        submittedAt: '14-03-2026 02:20 PM',
        approvalStatus: 'Rejected',
        trackStatus: 'Behind Schedule',
        attachment: 'python-functions.pdf',
    },
]

export const getLessonPlans = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return [...DEFAULT_LESSON_PLANS]
}

export const saveLessonPlans = (plans) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plans))
}

export const formatSubmittedAt = () => {
    const now = new Date()
    const date = now.toLocaleDateString('en-GB').replace(/\//g, '-')
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
    return `${date} ${time}`
}

export const formatPlanDate = (value) => {
    if (!value) return ''
    const date = value instanceof Date ? value : new Date(value)
    if (Number.isNaN(date.getTime())) return ''
    return date.toLocaleDateString('en-GB').replace(/\//g, '-')
}

const buildLessonPlanRecord = (plans, payload, submittedAt) => {
    const nextNumber = plans.reduce((max, item) => {
        const match = item.id.match(/^LP-(\d+)$/)
        return match ? Math.max(max, Number(match[1])) : max
    }, 0) + 1

    return {
        id: `LP-${String(nextNumber).padStart(3, '0')}`,
        subject: payload.subject,
        submitterName: payload.submitterName,
        submitterRole: payload.submitterRole,
        className: payload.className,
        section: payload.section,
        description: payload.description.trim(),
        fromDate: payload.fromDate,
        toDate: payload.toDate,
        submittedAt,
        approvalStatus: 'Pending',
        trackStatus: 'On Track',
        attachment: payload.attachment || 'lesson-plan.pdf',
    }
}

export const addLessonPlan = (payload) => {
    const plans = getLessonPlans()
    const submittedAt = formatSubmittedAt()
    const record = buildLessonPlanRecord(plans, payload, submittedAt)
    const updated = [record, ...plans]
    saveLessonPlans(updated)
    return record
}

export const addLessonPlans = (payloads) => {
    if (!payloads.length) return []

    const plans = getLessonPlans()
    const submittedAt = formatSubmittedAt()
    const records = []
    let workingPlans = [...plans]

    payloads.forEach((payload) => {
        const record = buildLessonPlanRecord(workingPlans, payload, submittedAt)
        records.push(record)
        workingPlans = [record, ...workingPlans]
    })

    saveLessonPlans(workingPlans)
    return records
}

export const updateLessonPlanStatus = (id, approvalStatus) => {
    const plans = getLessonPlans()
    const updated = plans.map((item) => {
        if (item.id !== id) return item
        if (approvalStatus === 'Approved') {
            return { ...item, approvalStatus, trackStatus: 'Completed' }
        }
        return { ...item, approvalStatus }
    })
    saveLessonPlans(updated)
    return updated
}

export const getSummaryCounts = (plans) => ({
    pendingApprovals: plans.filter((item) => item.approvalStatus === 'Pending').length,
    onTrack: plans.filter((item) => item.trackStatus === 'On Track').length,
    behindSchedule: plans.filter((item) => item.trackStatus === 'Behind Schedule').length,
    completed: plans.filter((item) => item.trackStatus === 'Completed').length,
})

export const getLessonPlansBySubmitter = (submitterName) =>
    getLessonPlans().filter((item) => item.submitterName === submitterName)

export const emptyLessonPlanFilters = {
    search: '',
    subject: '',
    className: '',
    section: '',
    approvalStatus: '',
    trackStatus: '',
    submitterRole: '',
    fromDate: null,
    toDate: null,
}

const parseSubmittedAt = (value) => {
    if (!value) return null
    const [datePart] = value.split(' ')
    const [day, month, year] = datePart.split('-').map(Number)
    if (!day || !month || !year) return null
    return new Date(year, month - 1, day)
}

export const filterLessonPlans = (plans, filters) => {
    const search = filters.search.trim().toLowerCase()
    const fromDate = filters.fromDate
    const toDate = filters.toDate

    return plans.filter((record) => {
        if (filters.subject && record.subject !== filters.subject) return false
        if (filters.className && record.className !== filters.className) return false
        if (filters.section && record.section !== filters.section) return false
        if (filters.approvalStatus && record.approvalStatus !== filters.approvalStatus) return false
        if (filters.trackStatus && record.trackStatus !== filters.trackStatus) return false
        if (filters.submitterRole && record.submitterRole !== filters.submitterRole) return false

        if (search) {
            const haystack = `${record.id} ${record.subject} ${record.submitterName} ${record.description} ${record.className} ${record.section} ${record.fromDate ?? ''} ${record.toDate ?? ''}`.toLowerCase()
            if (!haystack.includes(search)) return false
        }

        const submitted = parseSubmittedAt(record.submittedAt)
        if (fromDate && submitted) {
            const start = new Date(fromDate)
            start.setHours(0, 0, 0, 0)
            if (submitted < start) return false
        }
        if (toDate && submitted) {
            const end = new Date(toDate)
            end.setHours(23, 59, 59, 999)
            if (submitted > end) return false
        }

        return true
    })
}

export const getActiveFilterLabels = (filters) => {
    const labels = []
    if (filters.subject) labels.push(`Subject: ${filters.subject}`)
    if (filters.className) labels.push(`Class: ${filters.className}`)
    if (filters.section) labels.push(`Section: ${filters.section}`)
    if (filters.approvalStatus) labels.push(`Status: ${filters.approvalStatus}`)
    if (filters.trackStatus) labels.push(`Track: ${filters.trackStatus}`)
    if (filters.submitterRole) labels.push(`Role: ${filters.submitterRole}`)
    if (filters.search.trim()) labels.push(`Search: ${filters.search.trim()}`)
    if (filters.fromDate || filters.toDate) labels.push('Date range applied')
    return labels
}
