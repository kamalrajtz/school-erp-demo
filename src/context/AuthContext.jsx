import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

export const ROLES = {
    ADMIN: 'admin',
    STUDENT: 'student',
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
    JOINT_DIRECTOR: 'jointdirector',
    JOINT_DIRECTOR_ASSISTANT: 'jointdirectorassistant',
    JOINT_DIRECTOR_AUDIT: 'jointdirectoraudit',
    PROCESS_AUDITOR: 'processauditor',
    QUALITY_AUDITOR: 'qualityauditor',
}

export const FAKE_CREDENTIALS = {
    [ROLES.ADMIN]: { email: 'admin@school.com' },
    [ROLES.STUDENT]: { email: 'student@school.com' },
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
    [ROLES.JOINT_DIRECTOR]: { email: 'jointdirector@school.com' },
    [ROLES.JOINT_DIRECTOR_ASSISTANT]: { email: 'jointdirectorassistant@school.com' },
    [ROLES.JOINT_DIRECTOR_AUDIT]: { email: 'jointdirectoraudit@school.com' },
    [ROLES.PROCESS_AUDITOR]: { email: 'processauditor@school.com' },
    [ROLES.QUALITY_AUDITOR]: { email: 'qualityauditor@school.com' },
}

export const ROLE_HOME_PATHS = {
    [ROLES.ADMIN]: '/admin/front-office/admission-list',
    [ROLES.STUDENT]: '/student/class/online-class',
    [ROLES.LIBRARIAN]: '/librarian/book-management/book-list',
    [ROLES.PRM]: '/front-office/admission-enquiry',
    [ROLES.GATEKEEPER]: '/gate-keeper/dashboard',
    [ROLES.GATEKEEPER_MANAGER]: '/gatekeeper-manager/assign-duty-list',
    [ROLES.DIRECTOR]: '/director/broadcast',
    [ROLES.PRINCIPAL]: '/principal/documents',
    [ROLES.CANTEEN_MANAGER]: '/canteen-manager/dashboard',
    [ROLES.IT_SUPPORT_MANAGER]: '/it-support-manager/dashboard',
    [ROLES.STATIONERY_STORE_MANAGER]: '/stationery-store-manager/dashboard',
    [ROLES.HOUSEKEEPING_MANAGER]: '/housekeeping-manager/dashboard',
    [ROLES.TRANSPORT_MANAGER]: '/transport-manager/dashboard',
    [ROLES.TEACHER]: '/teacher/dashboard',
    [ROLES.JOINT_DIRECTOR]: '/joint-director/dashboard',
    [ROLES.JOINT_DIRECTOR_ASSISTANT]: '/joint-director-assistant/dashboard',
    [ROLES.JOINT_DIRECTOR_AUDIT]: '/joint-director-audit/dashboard',
    [ROLES.PROCESS_AUDITOR]: '/process-auditor/dashboard',
    [ROLES.QUALITY_AUDITOR]: '/quality-auditor/dashboard',
}

const STORAGE_KEY = 'schoolerp_auth'

const readStoredAuth = () => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY)
        if (!raw) return { isAuthenticated: false, role: null }
        const parsed = JSON.parse(raw)
        if (parsed?.isAuthenticated && parsed?.role) {
            return { isAuthenticated: true, role: parsed.role }
        }
    } catch {
        // ignore invalid storage
    }
    return { isAuthenticated: false, role: null }
}

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const stored = readStoredAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(stored.isAuthenticated)
    const [role, setRole] = useState(stored.role)
    const [pendingRole, setPendingRole] = useState(null)

    const persistAuth = useCallback((nextRole) => {
        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ isAuthenticated: true, role: nextRole })
        )
    }, [])

    const login = useCallback((email, otp, expectedRole) => {
        const creds = FAKE_CREDENTIALS[expectedRole]
        if (!creds) {
            return { success: false, message: 'Please select a profile first.' }
        }

        const normalizedEmail = email.trim().toLowerCase()
        if (normalizedEmail !== creds.email) {
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

        setIsAuthenticated(true)
        setRole(expectedRole)
        setPendingRole(null)
        persistAuth(expectedRole)
        return { success: true }
    }, [persistAuth])

    const logout = useCallback(() => {
        sessionStorage.removeItem(STORAGE_KEY)
        setIsAuthenticated(false)
        setRole(null)
        setPendingRole(null)
    }, [])

    const value = useMemo(
        () => ({
            isAuthenticated,
            role,
            pendingRole,
            setPendingRole,
            login,
            logout,
        }),
        [isAuthenticated, role, pendingRole, login, logout]
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
