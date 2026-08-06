import noProfile from '../../../assets/images/no-profile.png'

export const HOSTEL_OPTIONS = ['QMIS Hostel', 'Boys Hostel Block A', 'Girls Hostel Block B']
export const LEAVE_TYPES = ['Home Visit', 'Medical Leave', 'Emergency Leave', 'Personal Leave']
export const APPROVAL_STATUSES = ['Pending', 'Approved', 'Rejected']
export const FINAL_STATUSES = ['Pending', 'Checked Out', 'Returned', 'Cancelled']

export const approvalStatusColor = {
    Approved: 'text-[#4CAF50]',
    Pending: 'text-[#FF9800]',
    Rejected: 'text-[#FF0000]',
}

export const finalStatusBadgeColor = {
    Pending: 'bg-[#FF980033] text-[#FF9800]',
    'Checked Out': 'bg-[#2196F333] text-[#2196F3]',
    Returned: 'bg-[#4CAF5033] text-[#4CAF50]',
    Cancelled: 'bg-[#FF000033] text-[#FF0000]',
}

const STORAGE_KEY = 'hostel-gate-pass-front-office'
const COUNTER_KEY = 'hostel-gate-pass-hgp-counter'

const DEFAULT_RECORDS = [
    {
        id: 'HGP-001',
        gatePassId: 'HGP-001',
        profile: noProfile,
        studentId: 'STU-2024-1042',
        studentName: 'Arjun Sharma',
        classSection: '10 A',
        gender: 'Male',
        mobileNumber: '+91 98765 43210',
        city: 'Kochi',
        hostel: 'QMIS Hostel',
        leaveType: 'Home Visit',
        reason: 'Weekend home visit with parent consent.',
        outDate: '15-08-2025',
        outTime: '09:00 AM',
        returnDate: '16-08-2025',
        returnTime: '06:00 PM',
        parentApproval: 'Approved',
        wardenApproval: 'Approved',
        status: 'Returned',
    },
    {
        id: 'HGP-002',
        gatePassId: 'HGP-002',
        profile: noProfile,
        studentId: 'STD-NO1846',
        studentName: 'John Milton',
        classSection: '12 B',
        gender: 'Male',
        mobileNumber: '9944076993',
        city: 'Madurai',
        hostel: 'Boys Hostel Block A',
        leaveType: 'Medical Leave',
        reason: 'Doctor appointment at city hospital.',
        outDate: '20-05-2026',
        outTime: '10:00 AM',
        returnDate: '20-05-2026',
        returnTime: '04:00 PM',
        parentApproval: 'Approved',
        wardenApproval: 'Pending',
        status: 'Pending',
    },
]

const readRecords = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {
        /* ignore */
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_RECORDS))
    return DEFAULT_RECORDS
}

const writeRecords = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

const nextGatePassId = () => {
    const current = parseInt(localStorage.getItem(COUNTER_KEY) ?? '2', 10)
    const next = current + 1
    localStorage.setItem(COUNTER_KEY, String(next))
    return `HGP-${String(next).padStart(3, '0')}`
}

export const getHostelGatePasses = () => readRecords()

export const addHostelGatePass = (payload) => {
    const gatePassId = nextGatePassId()
    const record = {
        id: gatePassId,
        gatePassId,
        profile: noProfile,
        parentApproval: 'Pending',
        wardenApproval: 'Pending',
        status: 'Pending',
        ...payload,
    }
    writeRecords([record, ...readRecords()])
    return record
}

export const filterHostelGatePasses = (records, { search = '', status = '' } = {}) => {
    const query = search.trim().toLowerCase()

    return records.filter((record) => {
        if (status && record.status !== status) return false
        if (!query) return true

        const haystack = [
            record.gatePassId,
            record.studentId,
            record.studentName,
            record.classSection,
            record.hostel,
            record.leaveType,
            record.reason,
        ].join(' ').toLowerCase()

        return haystack.includes(query)
    })
}

export const formatGatePassDate = (date) => {
    if (!date) return ''
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}
