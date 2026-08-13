import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
    clearActiveAdminSession,
    findActiveAdminByEmail,
    getAdminUserByEmail,
    setActiveAdminSession,
} from '../Pages/SuperAdmin/UserCreation/adminUsersData'
import {
    clearActiveCreatedUserSession,
    findActiveCreatedUserByEmail,
    getCreatedUserByEmail,
    setActiveCreatedUserSession,
} from '../Common/RBAC/createdUsersData'

export const ROLES = {
    SUPER_ADMIN: 'superadmin',
    ADMIN: 'admin',
    STUDENT: 'student',
    PARENT: 'parent',
    LIBRARIAN: 'librarian',
    PRM: 'prm',
    GATEKEEPER: 'gatekeeper',
    GATEKEEPER_MANAGER: 'gatekeepermanager',
    DIRECTOR: 'director',
    PRINCIPAL: 'principal',
    CANTEEN_MANAGER: 'canteenmanager',
    IT_SUPPORT_MANAGER: 'itsupportmanager',
    STATIONERY_STORE_MANAGER: 'stationerystoremanager',
    HOUSEKEEPING_MANAGER: 'housekeepingmanager',
    TRANSPORT_MANAGER: 'transportmanager',
    TEACHER: 'teacher',
    COORDINATOR: 'coordinator',
    JOINT_DIRECTOR: 'jointdirector',
    JOINT_DIRECTOR_ASSISTANT: 'jointdirectorassistant',
    JOINT_DIRECTOR_AUDIT: 'jointdirectoraudit',
    PROCESS_AUDITOR: 'processauditor',
    QUALITY_AUDITOR: 'qualityauditor',
    HR: 'hr',
    ACCOUNT_HEAD: 'accounthead',
    DRIVER: 'driver',
}

export const FAKE_CREDENTIALS = {
    [ROLES.SUPER_ADMIN]: { email: 'superadmin@school.com' },
    [ROLES.ADMIN]: { email: 'admin@school.com' },
    [ROLES.STUDENT]: { email: 'student@school.com' },
    [ROLES.PARENT]: { email: 'parent@school.com' },
    [ROLES.LIBRARIAN]: { email: 'librarian@school.com' },
    [ROLES.PRM]: { email: 'prm@school.com' },
    [ROLES.GATEKEEPER]: { email: 'gatekeeper@school.com' },
    [ROLES.GATEKEEPER_MANAGER]: { email: 'gatekeepermanager@school.com' },
    [ROLES.DIRECTOR]: { email: 'director@school.com' },
    [ROLES.PRINCIPAL]: { email: 'principal@school.com' },
    [ROLES.CANTEEN_MANAGER]: { email: 'canteenmanager@school.com' },
    [ROLES.IT_SUPPORT_MANAGER]: { email: 'itsupportmanager@school.com' },
    [ROLES.STATIONERY_STORE_MANAGER]: { email: 'stationerystoremanager@school.com' },
    [ROLES.HOUSEKEEPING_MANAGER]: { email: 'housekeepingmanager@school.com' },
    [ROLES.TRANSPORT_MANAGER]: { email: 'transportmanager@school.com' },
    [ROLES.TEACHER]: { email: 'teacher@school.com' },
    [ROLES.COORDINATOR]: { email: 'coordinator@school.com' },
    [ROLES.JOINT_DIRECTOR]: { email: 'jointdirector@school.com' },
    [ROLES.JOINT_DIRECTOR_ASSISTANT]: { email: 'jointdirectorassistant@school.com' },
    [ROLES.JOINT_DIRECTOR_AUDIT]: { email: 'jointdirectoraudit@school.com' },
    [ROLES.PROCESS_AUDITOR]: { email: 'processauditor@school.com' },
    [ROLES.QUALITY_AUDITOR]: { email: 'qualityauditor@school.com' },
    [ROLES.HR]: { email: 'hr@school.com' },
    [ROLES.ACCOUNT_HEAD]: { email: 'accounthead@school.com' },
    [ROLES.DRIVER]: { email: 'driver@school.com' },
}

export const ROLE_HOME_PATHS = {
    [ROLES.SUPER_ADMIN]: '/super-admin/dashboard',
    [ROLES.ADMIN]: '/admin/front-office/admission-list',
    [ROLES.STUDENT]: '/student/class/online-class',
    [ROLES.PARENT]: '/parent/select-child',
    [ROLES.LIBRARIAN]: '/librarian/book-management/book-list',
    [ROLES.PRM]: '/front-office/admission-enquiry',
    [ROLES.GATEKEEPER]: '/gate-keeper/dashboard',
    [ROLES.GATEKEEPER_MANAGER]: '/gatekeeper-manager/assign-duty-list',
    [ROLES.DIRECTOR]: '/director/broadcast',
    [ROLES.PRINCIPAL]: '/principal/task-management',
    [ROLES.CANTEEN_MANAGER]: '/canteen-manager/dashboard',
    [ROLES.IT_SUPPORT_MANAGER]: '/it-support-manager/dashboard',
    [ROLES.STATIONERY_STORE_MANAGER]: '/stationery-store-manager/dashboard',
    [ROLES.HOUSEKEEPING_MANAGER]: '/housekeeping-manager/dashboard',
    [ROLES.TRANSPORT_MANAGER]: '/transport-manager/dashboard',
    [ROLES.TEACHER]: '/teacher/dashboard',
    [ROLES.COORDINATOR]: '/coordinator/dashboard',
    [ROLES.JOINT_DIRECTOR]: '/joint-director/dashboard',
    [ROLES.JOINT_DIRECTOR_ASSISTANT]: '/joint-director-assistant/dashboard',
    [ROLES.JOINT_DIRECTOR_AUDIT]: '/joint-director-audit/dashboard',
    [ROLES.PROCESS_AUDITOR]: '/process-auditor/dashboard',
    [ROLES.QUALITY_AUDITOR]: '/quality-auditor/dashboard',
    [ROLES.HR]: '/hr/dashboard',
    [ROLES.ACCOUNT_HEAD]: '/account-head/dashboard',
    [ROLES.DRIVER]: '/driver/vehicle-management/vehicle-details',
}

const STORAGE_KEY = 'schoolerp_auth'

const CREATABLE_LOGIN_ROLES = new Set([
    ROLES.TEACHER,
    ROLES.STUDENT,
    ROLES.PRM,
    ROLES.COORDINATOR,
])

const readStoredAuth = () => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY)
        if (!raw) return { isAuthenticated: false, role: null, email: null, name: null }
        const parsed = JSON.parse(raw)
        if (parsed?.isAuthenticated && parsed?.role) {
            const role = parsed.role === 'vandriver' ? ROLES.DRIVER : parsed.role
            return {
                isAuthenticated: true,
                role,
                email: parsed.email || null,
                name: parsed.name || null,
            }
        }
    } catch {
        // ignore invalid storage
    }
    return { isAuthenticated: false, role: null, email: null, name: null }
}

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const stored = readStoredAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(stored.isAuthenticated)
    const [role, setRole] = useState(stored.role)
    const [email, setEmail] = useState(stored.email)
    const [name, setName] = useState(stored.name)
    const [pendingRole, setPendingRole] = useState(null)

    useEffect(() => {
        if (stored.isAuthenticated && stored.email && CREATABLE_LOGIN_ROLES.has(stored.role)) {
            const existing = getCreatedUserByEmail(stored.email)
            if (existing && existing.status === 'Active') {
                setActiveCreatedUserSession(existing)
            }
        }
    }, [])

    const persistAuth = useCallback((nextRole, nextEmail = null, nextName = null) => {
        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                isAuthenticated: true,
                role: nextRole,
                email: nextEmail,
                name: nextName,
            })
        )
    }, [])

    const login = useCallback((emailInput, otp, expectedRole) => {
        const creds = FAKE_CREDENTIALS[expectedRole]
        if (!creds) {
            return { success: false, message: 'Please select a profile first.' }
        }

        const normalizedEmail = emailInput.trim().toLowerCase()
        const createdAdmin = expectedRole === ROLES.ADMIN ? findActiveAdminByEmail(normalizedEmail) : null
        const createdUser = CREATABLE_LOGIN_ROLES.has(expectedRole)
            ? findActiveCreatedUserByEmail(normalizedEmail, expectedRole)
            : null

        if (expectedRole === ROLES.ADMIN) {
            const defaultEmail = creds.email.toLowerCase()
            if (normalizedEmail !== defaultEmail && !createdAdmin) {
                return {
                    success: false,
                    message: 'Use a registered administrator email for this profile.',
                }
            }
        } else if (CREATABLE_LOGIN_ROLES.has(expectedRole)) {
            const defaultEmail = creds.email.toLowerCase()
            if (normalizedEmail !== defaultEmail && !createdUser) {
                return {
                    success: false,
                    message: `Use ${creds.email} or a user created by Admin for this profile.`,
                }
            }
        } else if (normalizedEmail !== creds.email) {
            return {
                success: false,
                message: `Use ${creds.email} for this profile.`,
            }
        }

        const normalizedOtp = otp.trim()
        if (!normalizedOtp) {
            return { success: false, message: 'OTP is required.' }
        }

        if (normalizedOtp.length !== 6) {
            return { success: false, message: 'Enter a valid 6-digit OTP.' }
        }

        const sessionName = createdUser?.name
            || createdAdmin?.name
            || null

        setIsAuthenticated(true)
        setRole(expectedRole)
        setEmail(normalizedEmail)
        setName(sessionName)
        setPendingRole(null)
        persistAuth(expectedRole, normalizedEmail, sessionName)

        clearActiveCreatedUserSession()

        if (expectedRole === ROLES.ADMIN) {
            const createdAdminUser = getAdminUserByEmail(normalizedEmail)
            if (createdAdminUser && !createdAdminUser.isSystem) {
                setActiveAdminSession(createdAdminUser)
            } else {
                clearActiveAdminSession()
            }
        } else {
            clearActiveAdminSession()
            if (createdUser) {
                setActiveCreatedUserSession(createdUser)
            }
        }

        return { success: true }
    }, [persistAuth])

    const logout = useCallback(() => {
        sessionStorage.removeItem(STORAGE_KEY)
        clearActiveAdminSession()
        clearActiveCreatedUserSession()
        setIsAuthenticated(false)
        setRole(null)
        setEmail(null)
        setName(null)
        setPendingRole(null)
    }, [])

    const value = useMemo(
        () => ({
            isAuthenticated,
            role,
            email,
            name,
            pendingRole,
            setPendingRole,
            login,
            logout,
        }),
        [isAuthenticated, role, email, name, pendingRole, login, logout]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}
