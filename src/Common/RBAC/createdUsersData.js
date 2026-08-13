import noProfile from '../../assets/images/no-profile.png'
import { updateAssignmentStudentCounts } from './academicsCatalogData'

const ROLES = {
    TEACHER: 'teacher',
    STUDENT: 'student',
    PRM: 'prm',
    COORDINATOR: 'coordinator',
}

const STORAGE_KEY = 'schoolerp-created-users'
const ACTIVE_USER_KEY = 'schoolerp_active_created_user'

export const CREATABLE_ROLES = [
    ROLES.TEACHER,
    ROLES.STUDENT,
    ROLES.PRM,
    ROLES.COORDINATOR,
]

export const CREATABLE_ROLE_LABELS = {
    [ROLES.TEACHER]: 'Teacher',
    [ROLES.STUDENT]: 'Student',
    [ROLES.PRM]: 'PRM',
    [ROLES.COORDINATOR]: 'Coordinator',
}

export const USER_STATUSES = ['Active', 'Inactive']

export const DEFAULT_USER_FORM = {
    name: '',
    email: '',
    role: ROLES.TEACHER,
    status: 'Active',
    className: '',
    section: '',
    rollNumber: '',
    admissionNumber: '',
    gender: 'Male',
    mobileNumber: '',
}

const loadUsers = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            const parsed = JSON.parse(stored)
            return Array.isArray(parsed) ? parsed : []
        }
    } catch {
        /* ignore */
    }
    return []
}

const saveUsers = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

const rolePrefix = (role) => {
    switch (role) {
        case ROLES.TEACHER:
            return 'TEA'
        case ROLES.STUDENT:
            return 'STU'
        case ROLES.PRM:
            return 'PRM'
        case ROLES.COORDINATOR:
            return 'CRD'
        default:
            return 'USR'
    }
}

export const generateUserId = (role) => {
    const prefix = rolePrefix(role)
    const records = loadUsers().filter((user) => user.role === role)
    const max = records.reduce((acc, user) => {
        const numeric = Number(String(user.id).replace(/\D/g, ''))
        return Number.isNaN(numeric) ? acc : Math.max(acc, numeric)
    }, 0)
    return `${prefix}-${String(max + 1).padStart(4, '0')}`
}

export const getAllCreatedUsers = () => loadUsers()

export const getCreatedUsersByRole = (role) =>
    loadUsers().filter((user) => user.role === role)

export const getCreatedUserById = (id) =>
    loadUsers().find((user) => user.id === id) ?? null

export const getCreatedUserByEmail = (email) => {
    const normalized = email.trim().toLowerCase()
    return loadUsers().find((user) => user.email.toLowerCase() === normalized) ?? null
}

export const findActiveCreatedUserByEmail = (email, role) => {
    const user = getCreatedUserByEmail(email)
    if (!user || user.status !== 'Active') return null
    if (role && user.role !== role) return null
    return user
}

export const getStudentsList = () =>
    loadUsers()
        .filter((user) => user.role === ROLES.STUDENT && user.status === 'Active')
        .map((user) => ({
            id: user.id,
            profile: noProfile,
            admissionNumber: user.admissionNumber || user.id,
            rollNumber: user.rollNumber || '',
            name: user.name,
            gender: user.gender || 'Male',
            email: user.email,
            mobileNumber: user.mobileNumber || '',
            dateOfBirth: user.dateOfBirth || '',
            country: user.country || 'India',
            state: user.state || '',
            city: user.city || '',
            className: user.className || '',
            section: user.section || '',
            classSection: user.className && user.section
                ? `${user.className}-${user.section}`
                : '',
        }))

export const getStudentCountForClassSection = (className, section) =>
    getStudentsList().filter(
        (student) => student.className === className && student.section === section,
    ).length

export const createUser = (payload) => {
    const records = loadUsers()
    const email = payload.email.trim().toLowerCase()
    const name = payload.name.trim()
    const role = payload.role

    if (!name || !email) {
        return { success: false, message: 'Name and email are required.' }
    }

    if (!CREATABLE_ROLES.includes(role)) {
        return { success: false, message: 'Selected role cannot be created here.' }
    }

    if (records.some((user) => user.email.toLowerCase() === email)) {
        return { success: false, message: 'A user with this email already exists.' }
    }

    if (role === ROLES.STUDENT && (!payload.className || !payload.section)) {
        return { success: false, message: 'Class and section are required for students.' }
    }

    const id = generateUserId(role)
    const user = {
        id,
        name,
        email,
        role,
        roleLabel: CREATABLE_ROLE_LABELS[role],
        status: payload.status === 'Inactive' ? 'Inactive' : 'Active',
        className: payload.className || '',
        section: payload.section || '',
        rollNumber: payload.rollNumber?.trim() || (role === ROLES.STUDENT
            ? `${payload.className}-${payload.section}-${String(getStudentCountForClassSection(payload.className, payload.section) + 1).padStart(2, '0')}`
            : ''),
        admissionNumber: payload.admissionNumber?.trim() || id,
        gender: payload.gender || 'Male',
        mobileNumber: payload.mobileNumber?.trim() || '',
        createdAt: new Date().toISOString(),
    }

    saveUsers([...records, user])
    updateAssignmentStudentCounts(getStudentCountForClassSection)

    return { success: true, user }
}

export const updateUserStatus = (id, status) => {
    const records = loadUsers()
    const index = records.findIndex((user) => user.id === id)
    if (index < 0) return { success: false, message: 'User not found.' }

    records[index] = { ...records[index], status }
    saveUsers(records)
    updateAssignmentStudentCounts(getStudentCountForClassSection)
    return { success: true, user: records[index] }
}

export const deleteCreatedUser = (id) => {
    const records = loadUsers().filter((user) => user.id !== id)
    saveUsers(records)
    updateAssignmentStudentCounts(getStudentCountForClassSection)
    return { success: true }
}

export const setActiveCreatedUserSession = (user) => {
    sessionStorage.setItem(
        ACTIVE_USER_KEY,
        JSON.stringify({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }),
    )
}

export const clearActiveCreatedUserSession = () => {
    sessionStorage.removeItem(ACTIVE_USER_KEY)
}

export const getActiveCreatedUserSession = () => {
    try {
        const raw = sessionStorage.getItem(ACTIVE_USER_KEY)
        if (!raw) return null
        return JSON.parse(raw)
    } catch {
        return null
    }
}
