const STORAGE_PREFIX = 'escalation-management-'

export const ESCALATION_STATUSES = ['Open', 'In Review', 'Resolved', 'Closed']

export const RECEIVED_RESOLUTION_STATUSES = ['Open', 'In Review', 'Resolved']

export const RESOLUTION_SLA_HOURS = 24

export const statusBadgeColor = {
    Open: 'bg-[#FF980033] text-[#FF9800]',
    'In Review': 'bg-[#2196F333] text-[#2196F3]',
    Resolved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Closed: 'bg-[#66708533] text-[#667085]',
}

export const priorityBadgeColor = {
    High: 'bg-[#FF000033] text-[#FF0000]',
    Medium: 'bg-[#FF980033] text-[#FF9800]',
    Low: 'bg-[#4CAF5033] text-[#4CAF50]',
}

export const isReceivedEscalation = (escalation, roleKey) =>
    escalation?.escalatedToRoleKey === roleKey

export const parseEscalationDate = (dateStr) => {
    if (!dateStr) return new Date()
    const parts = dateStr.split('-').map(Number)
    if (parts.length === 3) {
        const [day, month, year] = parts
        return new Date(year, month - 1, day, 0, 0, 0, 0)
    }
    const parsed = new Date(dateStr)
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

export const getEscalationStartTime = (escalation) =>
    escalation.escalatedAt ? new Date(escalation.escalatedAt) : parseEscalationDate(escalation.escalationDate)

export const getResolveByDate = (escalation) =>
    new Date(getEscalationStartTime(escalation).getTime() + RESOLUTION_SLA_HOURS * 60 * 60 * 1000)

export const formatDateTime = (date) => {
    const value = date instanceof Date ? date : new Date(date)
    return value
        .toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .replace(',', '')
}

export const isResolutionOverdue = (escalation) => {
    if (['Resolved', 'Closed'].includes(escalation.status)) return false
    return getResolveByDate(escalation).getTime() < Date.now()
}

const DEFAULT_ESCALATIONS = [
    {
        id: 'ESC-2026-001',
        escalatedBy: 'Ravi Kumar',
        escalatedByRole: 'Gate Keeper',
        escalatedByRoleKey: 'gateKeeper',
        escalatedTo: 'Gate Keeper Manager',
        escalatedToRoleKey: 'gateKeeperManager',
        description: 'Unauthorized vehicle entry attempt at main gate during evening shift.',
        escalationDate: '08-03-2026',
        escalatedDepartment: 'Security',
        status: 'Open',
        escalatedAt: '2026-03-08T09:30:00.000Z',
        fullDescription: 'Security guard reported repeated unauthorized entry attempts. Requires manager review and updated visitor protocol.',
        remarks: 'Incident logged in gate register.',
    },
    {
        id: 'ESC-2026-002',
        escalatedBy: 'Meena Das',
        escalatedByRole: 'Gate Keeper Manager',
        escalatedByRoleKey: 'gateKeeperManager',
        escalatedTo: 'PRM (Front Office)',
        escalatedToRoleKey: 'prm',
        description: 'Parent dispute at gate regarding early student pickup without authorization.',
        escalationDate: '09-03-2026',
        escalatedDepartment: 'Front Office',
        status: 'In Review',
        escalatedAt: '2026-03-09T11:15:00.000Z',
        fullDescription: 'Forwarded from gate team after failed resolution. Parent insists on immediate pickup without ID verification.',
        remarks: 'Gate Keeper escalation ESC-2026-001 related follow-up.',
    },
    {
        id: 'ESC-2026-003',
        escalatedBy: 'Front Office Desk',
        escalatedByRole: 'PRM (Front Office)',
        escalatedByRoleKey: 'prm',
        escalatedTo: 'Principal',
        escalatedToRoleKey: 'principal',
        description: 'Bulk admission enquiry backlog affecting response SLA.',
        escalationDate: '10-03-2026',
        escalatedDepartment: 'Administration',
        status: 'Open',
        escalatedAt: '2026-03-10T08:00:00.000Z',
        fullDescription: 'Admission enquiry volume exceeded front office capacity. Requires principal approval for temporary staff support.',
        remarks: '45 pending enquiries as of 10-03-2026.',
    },
    {
        id: 'ESC-2026-004',
        escalatedBy: 'Arjun Patel',
        escalatedByRole: 'Student',
        escalatedByRoleKey: 'student',
        escalatedTo: 'Teacher',
        escalatedToRoleKey: 'teacher',
        description: 'Unable to access uploaded assignment materials for Mathematics.',
        escalationDate: '11-03-2026',
        escalatedDepartment: 'Mathematics',
        status: 'Open',
        escalatedAt: '2026-03-11T14:20:00.000Z',
        fullDescription: 'Class 10-A student reports LMS link broken for quadratic equations worksheet.',
        remarks: 'Roll No: STU-2024-1042',
    },
    {
        id: 'ESC-2026-005',
        escalatedBy: 'Anita Verma',
        escalatedByRole: 'Teacher',
        escalatedByRoleKey: 'teacher',
        escalatedTo: 'Co-ordinator',
        escalatedToRoleKey: 'coordinator',
        description: 'Shortage of mathematics reference books for Class 10 board batch.',
        escalationDate: '09-03-2026',
        escalatedDepartment: 'Mathematics',
        status: 'Open',
        escalatedAt: '2026-03-09T10:45:00.000Z',
        fullDescription: 'Current stock covers only 60% of enrolled students. Requesting coordinator to escalate for procurement.',
        remarks: 'Student escalation forwarded after verification.',
    },
    {
        id: 'ESC-2026-006',
        escalatedBy: 'Sandy Selva',
        escalatedByRole: 'Co-ordinator',
        escalatedByRoleKey: 'coordinator',
        escalatedTo: 'Principal',
        escalatedToRoleKey: 'principal',
        description: 'Repeated student discipline issues in Class 9-A science lab sessions.',
        escalationDate: '08-03-2026',
        escalatedDepartment: 'Science',
        status: 'Open',
        escalatedAt: '2026-03-08T07:30:00.000Z',
        fullDescription: 'Multiple instances of lab equipment misuse. Parent meetings attempted at department level without resolution.',
        remarks: 'Forwarded from teacher Anita Verma on 07-03-2026.',
    },
    {
        id: 'ESC-2026-007',
        escalatedBy: 'Lakshmi Iyer',
        escalatedByRole: 'Librarian',
        escalatedByRoleKey: 'librarian',
        escalatedTo: 'Principal',
        escalatedToRoleKey: 'principal',
        description: 'Library AC failure affecting reading room during exam week.',
        escalationDate: '12-03-2026',
        escalatedDepartment: 'Library',
        status: 'In Review',
        escalatedAt: '2026-03-12T06:00:00.000Z',
        fullDescription: 'AC units non-functional since 10-03-2026. Students unable to use silent study area.',
        remarks: 'Maintenance ticket #LIB-4421 raised.',
    },
    {
        id: 'ESC-2026-008',
        escalatedBy: 'Dr. James Wilson',
        escalatedByRole: 'Principal',
        escalatedByRoleKey: 'principal',
        escalatedTo: 'Director of Academics',
        escalatedToRoleKey: 'director',
        description: 'Board exam seating plan conflict across two senior batches.',
        escalationDate: '13-03-2026',
        escalatedDepartment: 'Administration',
        status: 'Open',
        escalatedAt: '2026-03-13T09:00:00.000Z',
        fullDescription: 'Exam hall allocation overlap for Class 10 and Class 12 mock tests on 18-03-2026.',
        remarks: 'Requires academic calendar adjustment.',
    },
    {
        id: 'ESC-2026-009',
        escalatedBy: 'Director of Academics',
        escalatedByRole: 'Director of Academics',
        escalatedByRoleKey: 'director',
        escalatedTo: 'Admin',
        escalatedToRoleKey: 'admin',
        description: 'Policy approval needed for revised internal assessment weightage.',
        escalationDate: '14-03-2026',
        escalatedDepartment: 'Administration',
        status: 'Open',
        escalatedAt: '2026-03-14T11:30:00.000Z',
        fullDescription: 'Academic council approved revised weightage. Admin sign-off required before publishing to departments.',
        remarks: 'Effective from Term 2.',
    },
    {
        id: 'ESC-2026-010',
        escalatedBy: 'Admin',
        escalatedByRole: 'Admin',
        escalatedByRoleKey: 'admin',
        escalatedTo: 'Super Admin',
        escalatedToRoleKey: 'superAdmin',
        description: 'Infrastructure budget approval pending for auditorium renovation.',
        escalationDate: '15-03-2026',
        escalatedAt: '2026-03-15T10:00:00.000Z',
        status: 'Open',
        fullDescription: 'Auditorium renovation quote exceeds delegated admin approval limit. Super Admin sign-off required before vendor engagement.',
        remarks: 'Forwarded after finance review on 14-03-2026.',
    },
]

const storageKey = (roleKey) => `${STORAGE_PREFIX}${roleKey}`

export const getEscalations = (roleKey) => {
    try {
        const stored = localStorage.getItem(storageKey(roleKey))
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    return DEFAULT_ESCALATIONS.filter(
        (item) => item.escalatedByRoleKey === roleKey || item.escalatedToRoleKey === roleKey,
    )
}

export const saveEscalations = (roleKey, records) => {
    localStorage.setItem(storageKey(roleKey), JSON.stringify(records))
}

export const getEscalationById = (roleKey, id) =>
    getEscalations(roleKey).find((item) => item.id === id) ?? null

export const updateEscalation = (roleKey, id, updates) => {
    const list = getEscalations(roleKey)
    let updatedRecord = null
    const nextList = list.map((item) => {
        if (item.id !== id) return item
        updatedRecord = { ...item, ...updates }
        return updatedRecord
    })
    saveEscalations(roleKey, nextList)
    return updatedRecord
}

export const generateEscalationId = (roleKey) => {
    const list = getEscalations(roleKey)
    const max = list.reduce((acc, item) => {
        const num = Number(item.id.split('-').pop())
        return Number.isFinite(num) ? Math.max(acc, num) : acc
    }, 0)
    return `ESC-2026-${String(max + 1).padStart(3, '0')}`
}

export const emptyEscalationForm = () => ({
    escalationDate: '',
    description: '',
    fullDescription: '',
    remarks: '',
})

export const createEscalation = (roleKey, form, roleConfig) => {
    const escalationDate = form.escalationDate
        || new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
    const escalatedAt = new Date().toISOString()

    const record = {
        id: generateEscalationId(roleKey),
        escalatedBy: roleConfig.roleLabel,
        escalatedByRole: roleConfig.roleLabel,
        escalatedByRoleKey: roleKey,
        escalatedTo: roleConfig.escalatesTo,
        escalatedToRoleKey: roleConfig.escalatesToRoleKey,
        description: form.description,
        escalationDate,
        escalatedAt,
        status: 'Open',
        fullDescription: form.fullDescription || form.description,
        remarks: form.remarks || '',
    }

    const existing = getEscalations(roleKey)
    saveEscalations(roleKey, [record, ...existing])
    return record
}
