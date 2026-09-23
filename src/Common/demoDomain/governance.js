import { ensureSeed, nextSerial, saveJson } from './storage'

export const CLOSURE_KEY = 'schoolerp-entry-closure-rules-v1'
export const REENTRY_KEY = 'schoolerp-reentry-requests-v1'
export const APPROVER_KEY = 'schoolerp-department-approvers-v1'

export const CLOSURE_SEED = [
    { id: 'CLS-0001', module: 'Mark Entry', entryType: 'CA / RCT', period: 'September 2026', closureDate: '2026-09-01', closureTime: '18:00', status: 'Closed' },
    { id: 'CLS-0002', module: 'Attendance', entryType: 'Class attendance', period: 'September 2026', closureDate: '2026-09-30', closureTime: '20:00', status: 'Open' },
]

export const APPROVER_SEED = [
    { department: 'IT Support', primaryApprover: 'Joint Director Operations', backup: 'Director' },
    { department: 'Housekeeping', primaryApprover: 'Joint Director Operations', backup: 'Director' },
    { department: 'Stores', primaryApprover: 'Joint Director Operations', backup: 'Finance Head' },
    { department: 'Transport', primaryApprover: 'Joint Director Operations', backup: 'Finance Head' },
    { department: 'Academics', primaryApprover: 'Principal', backup: 'Director' },
]

export function getClosureRules() {
    return ensureSeed(CLOSURE_KEY, CLOSURE_SEED)
}

export function getApprovers() {
    return ensureSeed(APPROVER_KEY, APPROVER_SEED)
}

export function getReentryRequests() {
    return ensureSeed(REENTRY_KEY, [])
}

export function isEntryClosed(moduleName) {
    const today = new Date().toISOString().slice(0, 10)
    return getClosureRules().some((rule) => rule.module === moduleName && rule.status === 'Closed' && rule.closureDate <= today)
}

export function hasUnlock(moduleName, actor) {
    return getReentryRequests().some((item) => item.module === moduleName && item.requestedBy === actor && item.status === 'Approved')
}

export function requestReentry({ module, record, reason, requestedBy }) {
    const items = getReentryRequests()
    const entry = {
        id: nextSerial('RE-2026-', items, 'id'),
        module,
        record,
        reason,
        requestedBy,
        requestedAt: new Date().toISOString(),
        approvedBy: '',
        approvedAt: '',
        status: 'Pending',
    }
    saveJson(REENTRY_KEY, [entry, ...items])
    return entry
}

export function decideReentry(id, approved, approver) {
    const next = getReentryRequests().map((item) => (
        item.id === id
            ? { ...item, status: approved ? 'Approved' : 'Rejected', approvedBy: approver, approvedAt: new Date().toISOString() }
            : item
    ))
    saveJson(REENTRY_KEY, next)
    return next
}
