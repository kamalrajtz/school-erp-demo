const STORAGE_KEY = 'goods-received-pass-front-office'
const GR_COUNTER_KEY = 'goods-received-pass-gr-counter'

export const PAYMENT_TYPES = ['CASH', 'CREDIT']

export const SIGNATORY_ROLES = [
    { key: 'storeKeeper', label: 'Store Keeper', useRoleSelect: true },
    { key: 'checkedBy', label: 'Checked By', useRoleSelect: false },
    { key: 'authorizedSignatory', label: 'Authorised Signatory', useRoleSelect: true },
]

export const SIGNATORY_ROLE_PERSONS = [
    { role: 'Store Keeper', name: 'Selvam R.' },
    { role: 'Assistant Store Keeper', name: 'Kumar V.' },
    { role: 'Accounts Officer', name: 'Lakshmi Devi' },
    { role: 'Purchase Officer', name: 'Anand Kumar' },
    { role: 'Authorised Signatory', name: 'Admin Office' },
    { role: 'Principal', name: 'Dr. Priya Nair' },
    { role: 'Director', name: 'Dr. Meena Krishnan' },
]

export const getPersonNameByRole = (role) =>
    SIGNATORY_ROLE_PERSONS.find((item) => item.role === role)?.name ?? ''

export const STATUS_OPTIONS = ['Pending', 'Approved', 'Partially Approved']

export const statusBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    Approved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
    'Partially Approved': 'bg-[#2196F333] text-[#2196F3]',
}

export const createEmptyGoodsRow = () => ({
    id: `row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    description: '',
    quantity: 1,
    remarks: '',
    lpNo: '',
})

export const createDefaultSignatories = () =>
    SIGNATORY_ROLES.reduce((acc, role) => {
        acc[role.key] = role.useRoleSelect ? { role: '', name: '' } : { name: '' }
        return acc
    }, {})

const normalizeSignatoryEntry = (key, signatory = {}) => {
    const roleConfig = SIGNATORY_ROLES.find((role) => role.key === key)
    if (!roleConfig) return signatory

    if (roleConfig.useRoleSelect) {
        const role = signatory.role ?? ''
        return {
            role,
            name: signatory.name || getPersonNameByRole(role) || '',
        }
    }

    return { name: signatory.name ?? '' }
}

export const normalizeSignatories = (signatories = {}) =>
    SIGNATORY_ROLES.reduce((acc, { key }) => {
        acc[key] = normalizeSignatoryEntry(key, signatories[key])
        return acc
    }, {})

const DEFAULT_GOODS_RECEIVED_PASSES = [
    {
        id: 'grp-9075',
        grNo: '9075',
        paymentType: 'CREDIT',
        date: '29-06-2026',
        time: '11:00',
        timePeriod: 'AM',
        supplierName: 'Madurai Stationery Suppliers',
        billNo: 'BILL-2026-441',
        billDate: '28-06-2026',
        materials: [
            {
                id: 'row-1',
                description: 'A4 Paper Reams — 75 GSM',
                quantity: 20,
                remarks: 'Office stock replenishment',
                lpNo: 'LP-104',
            },
            {
                id: 'row-2',
                description: 'Ball Point Pens — Blue',
                quantity: 50,
                remarks: 'Staff room supply',
                lpNo: 'LP-105',
            },
        ],
        signatories: {
            storeKeeper: { role: 'Store Keeper', name: 'Selvam R.' },
            checkedBy: { name: 'Lakshmi Devi' },
            authorizedSignatory: { role: 'Authorised Signatory', name: 'Admin Office' },
        },
        status: 'Approved',
        createdBy: 'Front Office',
        createdAt: '29-06-2026 10:45 AM',
    },
    {
        id: 'grp-9074',
        grNo: '9074',
        paymentType: 'CASH',
        date: '27-06-2026',
        time: '03:30',
        timePeriod: 'PM',
        supplierName: 'City Hardware Mart',
        billNo: 'CHM-8891',
        billDate: '27-06-2026',
        materials: [
            {
                id: 'row-1',
                description: 'Electrical Bulbs — 9W LED',
                quantity: 30,
                remarks: 'Maintenance purchase',
                lpNo: 'LP-098',
            },
        ],
        signatories: {
            storeKeeper: { role: 'Store Keeper', name: 'Selvam R.' },
            checkedBy: { name: 'Anand Kumar' },
            authorizedSignatory: { role: '', name: '' },
        },
        status: 'Partially Approved',
        createdBy: 'Front Office',
        createdAt: '27-06-2026 03:00 PM',
    },
]

export const calculateTotalItems = (materials = []) =>
    materials.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)

export const deriveOverallStatus = (signatories = {}) => {
    const normalized = normalizeSignatories(signatories)
    const filledCount = SIGNATORY_ROLES.filter(({ key }) => normalized[key]?.name?.trim()).length
    if (filledCount === SIGNATORY_ROLES.length) return 'Approved'
    if (filledCount > 0) return 'Partially Approved'
    return 'Pending'
}

export const formatDisplayTime = (time, timePeriod) => {
    if (!time) return '—'
    return timePeriod ? `${time} ${timePeriod}` : time
}

export const generateGrNo = () => {
    const current = Number(localStorage.getItem(GR_COUNTER_KEY) || 9075)
    const next = current + 1
    localStorage.setItem(GR_COUNTER_KEY, String(next))
    return String(next)
}

const hydrateRecord = (record) => ({
    ...record,
    signatories: normalizeSignatories(record.signatories),
    totalItems: calculateTotalItems(record.materials),
    status: record.status ?? deriveOverallStatus(record.signatories),
})

export const getGoodsReceivedPasses = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
        return JSON.parse(stored).map(hydrateRecord)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_GOODS_RECEIVED_PASSES))
    localStorage.setItem(GR_COUNTER_KEY, '9075')
    return DEFAULT_GOODS_RECEIVED_PASSES.map(hydrateRecord)
}

export const saveGoodsReceivedPasses = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getGoodsReceivedPassById = (id) =>
    getGoodsReceivedPasses().find((record) => record.id === id) ?? null

export const addGoodsReceivedPass = (payload) => {
    const records = getGoodsReceivedPasses()
    const grNo = generateGrNo()
    const record = hydrateRecord({
        id: `grp-${grNo}`,
        grNo,
        ...payload,
        status: deriveOverallStatus(payload.signatories),
        createdAt: new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }).replace(',', ''),
    })
    saveGoodsReceivedPasses([record, ...records])
    return record
}

export const updateGoodsReceivedPass = (id, payload) => {
    const records = getGoodsReceivedPasses()
    const index = records.findIndex((record) => record.id === id)
    if (index === -1) return null
    const updated = hydrateRecord({
        ...records[index],
        ...payload,
        status: deriveOverallStatus(payload.signatories ?? records[index].signatories),
    })
    records[index] = updated
    saveGoodsReceivedPasses(records)
    return updated
}

export const deleteGoodsReceivedPass = (id) => {
    const records = getGoodsReceivedPasses().filter((record) => record.id !== id)
    saveGoodsReceivedPasses(records)
}

export const getNextGrPreview = () => {
    const current = Number(localStorage.getItem(GR_COUNTER_KEY) || 9075)
    return String(current + 1)
}
