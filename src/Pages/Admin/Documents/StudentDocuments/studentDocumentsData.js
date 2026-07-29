const STORAGE_KEY = 'schoolErpAdminStudentDocuments'

export const STUDENT_DOCUMENT_TYPES = [
    { id: 'doc-aadhaar', label: 'Aadhaar' },
    { id: 'doc-birth', label: 'Birth Certificate' },
    { id: 'doc-tc', label: 'TC' },
    { id: 'doc-marksheet', label: 'Marksheet' },
]

export const CLASS_OPTIONS = ['Class-12', '8-A', '9-B', '10-A']
export const DOCUMENT_STATUS_OPTIONS = ['Approved', 'Pending']
export const RECORD_STATUS_OPTIONS = ['In Progress', 'Completed']

export const documentStatusColor = {
    Approved: 'text-[#008000]',
    Pending: 'text-[#FF9800]',
}

export const recordStatusBadgeColor = {
    'In Progress': 'bg-[#FF000033] text-[#FF0000]',
    Completed: 'bg-[#4CAF5033] text-[#4CAF50]',
}

const seedRecords = [
    {
        id: 'SDOC-001',
        admissionNumber: 'ADM-NO1845',
        studentName: 'Sandy Selva',
        className: 'Class-12',
        submittedDate: '02-07-2025',
        status: 'In Progress',
        documents: {
            'doc-aadhaar': { fileName: 'aadhaar_sandy.pdf', status: 'Approved' },
            'doc-birth': { fileName: 'birth_sandy.pdf', status: 'Approved' },
            'doc-tc': { fileName: '', status: 'Pending' },
            'doc-marksheet': { fileName: '', status: 'Pending' },
        },
    },
    {
        id: 'SDOC-002',
        admissionNumber: 'ADM-NO1846',
        studentName: 'Priya Kumar',
        className: 'Class-12',
        submittedDate: '02-07-2025',
        status: 'Completed',
        documents: {
            'doc-aadhaar': { fileName: 'aadhaar_priya.pdf', status: 'Approved' },
            'doc-birth': { fileName: 'birth_priya.pdf', status: 'Approved' },
            'doc-tc': { fileName: 'tc_priya.pdf', status: 'Approved' },
            'doc-marksheet': { fileName: 'marksheet_priya.pdf', status: 'Approved' },
        },
    },
]

const readJson = (key, fallback) => {
    try {
        const raw = localStorage.getItem(key)
        if (!raw) return fallback
        return JSON.parse(raw)
    } catch {
        return fallback
    }
}

const writeJson = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getStudentDocumentRecords = () => readJson(STORAGE_KEY, seedRecords)

export const saveStudentDocumentRecords = (records) => {
    writeJson(STORAGE_KEY, records)
}

export const getStudentDocumentRecordById = (id) =>
    getStudentDocumentRecords().find((record) => record.id === id)

export const formatPlanDate = (date) => {
    if (!date) return ''
    const d = date instanceof Date ? date : new Date(date)
    if (Number.isNaN(d.getTime())) return ''
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}-${month}-${year}`
}

export const parsePlanDateString = (value) => {
    if (!value) return null
    const parts = value.split('-').map(Number)
    if (parts.length !== 3) return null
    const [day, month, year] = parts
    if (!day || !month || !year) return null
    return new Date(year, month - 1, day)
}

const buildDocumentsFromSlots = (documentSlots) => {
    const documents = {}
    documentSlots.forEach((slot) => {
        documents[slot.typeId] = {
            fileName: slot.fileName || '',
            status: slot.status || 'Pending',
        }
    })
    return documents
}

export const addStudentDocumentRecord = (payload) => {
    const records = getStudentDocumentRecords()
    const record = {
        id: `SDOC-${String(records.length + 1).padStart(3, '0')}`,
        admissionNumber: payload.admissionNumber.trim(),
        studentName: payload.studentName.trim(),
        className: payload.className,
        submittedDate: payload.submittedDate,
        status: payload.status,
        documents: buildDocumentsFromSlots(payload.documentSlots),
    }
    records.unshift(record)
    saveStudentDocumentRecords(records)
    return record
}

export const updateStudentDocumentRecord = (id, payload) => {
    const records = getStudentDocumentRecords()
    const index = records.findIndex((record) => record.id === id)
    if (index === -1) return null

    records[index] = {
        ...records[index],
        admissionNumber: payload.admissionNumber.trim(),
        studentName: payload.studentName.trim(),
        className: payload.className,
        submittedDate: payload.submittedDate,
        status: payload.status,
        documents: buildDocumentsFromSlots(payload.documentSlots),
    }

    saveStudentDocumentRecords(records)
    return records[index]
}

export const getDocumentCellValue = (record, typeId) => {
    const doc = record.documents?.[typeId]
    if (!doc?.fileName) {
        return { display: '—', status: doc?.status || 'Pending', hasFile: false }
    }
    return { display: doc.status, status: doc.status, hasFile: true, fileName: doc.fileName }
}

export const recordToDocumentSlots = (record) =>
    STUDENT_DOCUMENT_TYPES.map((type) => ({
        typeId: type.id,
        label: type.label,
        fileName: record.documents?.[type.id]?.fileName || '',
        status: record.documents?.[type.id]?.status || 'Pending',
    }))
