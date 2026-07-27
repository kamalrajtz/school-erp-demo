const STORAGE_KEY = 'school-erp-activities'

export const MD_APPROVAL_STATUS = {
    PENDING: 'Pending',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
}

export const mdApprovalBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

const DEFAULT_ACTIVITIES = [
    {
        id: 'ACT-CUL-001',
        type: 'cultural',
        eventName: 'Classical Dance',
        eventType: 'Annual Day',
        className: 'All Students',
        eventDate: '15-08-2025',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        venue: 'School Auditorium',
        coordinator: 'Ms. Priya',
        coach: '',
        description: 'Traditional dance performance by students',
        submittedBy: 'Director',
        mdApprovalStatus: MD_APPROVAL_STATUS.APPROVED,
        submittedDate: '01-08-2025',
    },
    {
        id: 'ACT-SPT-001',
        type: 'sports',
        eventName: 'Inter-House Football',
        eventType: 'Sports Day',
        className: 'Grade 8–12',
        eventDate: '20-08-2025',
        startTime: '08:00 AM',
        endTime: '12:00 PM',
        venue: 'School Ground',
        coordinator: '',
        coach: 'Mr. Daniel',
        description: 'Inter-house football tournament for senior students',
        submittedBy: 'Director',
        mdApprovalStatus: MD_APPROVAL_STATUS.APPROVED,
        submittedDate: '05-08-2025',
    },
    {
        id: 'ACT-CMP-001',
        type: 'competition',
        eventName: 'Science Quiz',
        eventType: 'Academic Competition',
        className: 'Grade 9 & 10',
        eventDate: '25-08-2025',
        startTime: '02:00 PM',
        endTime: '04:00 PM',
        venue: 'Science Block Hall',
        coordinator: 'Dr. Suresh',
        coach: '',
        description: 'Inter-class science quiz competition',
        submittedBy: 'Director',
        mdApprovalStatus: MD_APPROVAL_STATUS.APPROVED,
        submittedDate: '10-08-2025',
    },
]

export const getActivities = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return [...DEFAULT_ACTIVITIES]
}

export const saveActivities = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getActivitiesByType = (type) =>
    getActivities().filter((item) => item.type === type)

export const generateActivityId = (type) => {
    const prefix = type === 'cultural' ? 'ACT-CUL' : type === 'sports' ? 'ACT-SPT' : 'ACT-CMP'
    const list = getActivities().filter((item) => item.type === type)
    const max = list.reduce((acc, item) => {
        const num = Number(item.id.replace(`${prefix}-`, ''))
        return Number.isFinite(num) ? Math.max(acc, num) : acc
    }, 0)
    return `${prefix}-${String(max + 1).padStart(3, '0')}`
}

export const formatSubmittedDate = () =>
    new Date().toLocaleDateString('en-GB').replace(/\//g, '-')

export const formatEventDate = (date) => {
    if (!date) return ''
    if (typeof date === 'string') return date
    return date.toLocaleDateString('en-GB').replace(/\//g, '-')
}

export const formatTimeLabel = (timeValue) => {
    if (!timeValue) return ''
    const [hours, minutes] = timeValue.split(':')
    const hour = Number(hours)
    if (!Number.isFinite(hour)) return timeValue
    const suffix = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12
    return `${String(hour12).padStart(2, '0')}:${minutes} ${suffix}`
}

export const addActivity = (payload) => {
    const record = {
        id: payload.id || generateActivityId(payload.type),
        type: payload.type,
        eventName: payload.eventName,
        eventType: payload.eventType,
        className: payload.className,
        eventDate: payload.eventDate,
        startTime: payload.startTime,
        endTime: payload.endTime,
        venue: payload.venue,
        coordinator: payload.coordinator || '',
        coach: payload.coach || '',
        description: payload.description,
        submittedBy: payload.submittedBy,
        mdApprovalStatus: payload.mdApprovalStatus,
        submittedDate: payload.submittedDate || formatSubmittedDate(),
    }
    saveActivities([record, ...getActivities()])
    return record
}

export const updateActivityMdApproval = (id, status) => {
    const next = getActivities().map((item) =>
        item.id === id ? { ...item, mdApprovalStatus: status } : item,
    )
    saveActivities(next)
    return next.find((item) => item.id === id) ?? null
}

export const getPersonInCharge = (activity, personField) =>
    activity[personField] || activity.coordinator || activity.coach || '—'
