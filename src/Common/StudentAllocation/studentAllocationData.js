const STORAGE_KEY = 'school-erp-student-allocation'
const LEGACY_STORAGE_KEY = 'director-student-allocation'

export const ALLOCATION_STATUSES = ['Pending Allocation', 'Pending Approval', 'Allocated', 'Rejected']
export const SECTION_OPTIONS = ['A', 'B', 'C']

export const TEACHER_NAME = 'Sandy Selva'
export const TEACHER_ROLE = 'Teacher'
export const COORDINATOR_NAME = 'Priya Nair'
export const COORDINATOR_ROLE = 'Coordinator'

export const allocationStatusColor = {
    'Pending Allocation': 'bg-[#FF980033] text-[#FF9800]',
    'Pending Approval': 'bg-[#515DEF33] text-[#515DEF]',
    Allocated: 'bg-[#4CAF5033] text-[#4CAF50]',
    Rejected: 'bg-[#FF000033] text-[#FF0000]',
}

const DEFAULT_STUDENT_ALLOCATIONS = [
    {
        id: 'ADM-001',
        studentName: 'Sandy Selva',
        rollNo: 'STU-1001',
        className: 'Class-10',
        classSection: '',
        admissionNumber: 'ADM-NO1845',
        gender: 'Male',
        mobileNumber: '9944076993',
        createdDate: '12 SEP 2025',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Trichy',
        allocationStatus: 'Pending Allocation',
        submittedBy: '',
        submittedByRole: '',
        submittedAt: '',
        admission: {
            admissionRollNumber: 'ADM-ROLL-1001',
            admissionDate: '10-09-2025',
            className: 'Class-10',
            classSection: '',
            registrationFees: '₹5,000',
            batchStartYear: '2025',
            batchEndYear: '2026',
        },
        student: {
            firstName: 'Sandy',
            middleName: '',
            lastName: 'Selva',
            gender: 'Male',
            religion: 'Hindu',
            caste: 'General',
            address: '12, Anna Salai, Trichy',
            dateOfBirth: '20-12-2008',
            country: 'India',
            state: 'Tamil Nadu',
            city: 'Trichy',
            zipCode: '620001',
            mobileNumber: '9944076993',
            alternativeMobileNumber: '9876543210',
            email: 'sandy.selva@email.com',
            previousSchool: 'St. Joseph Matric School',
            bloodGroup: 'B+',
            height: '162 cm',
            weight: '50 kg',
            medicalHistory: 'No known allergies.',
        },
        transport: {
            routeList: 'Route 3 – Trichy Central',
            busStop: 'Anna Salai Bus Stop',
        },
        parents: {
            fatherName: 'R. Selvam',
            motherName: 'L. Meena',
            fatherOccupation: 'Business',
            motherOccupation: 'Homemaker',
            fatherYearlyIncome: '₹8,00,000',
            motherYearlyIncome: '₹2,00,000',
            siblings: '1 (Younger brother)',
            address: '12, Anna Salai, Trichy',
            country: 'India',
            state: 'Tamil Nadu',
            city: 'Trichy',
            zipCode: '620001',
            mobileNumber: '9944076990',
            email: 'selvam.family@email.com',
        },
        feesTimeline: 'Quarterly Fees Group',
    },
    {
        id: 'ADM-002',
        studentName: 'Priya Sharma',
        rollNo: 'STU-1002',
        className: 'Class-9',
        classSection: '',
        admissionNumber: 'ADM-NO1846',
        gender: 'Female',
        mobileNumber: '9876543211',
        createdDate: '11 SEP 2025',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Madurai',
        allocationStatus: 'Pending Allocation',
        submittedBy: '',
        submittedByRole: '',
        submittedAt: '',
        admission: {
            admissionRollNumber: 'ADM-ROLL-1002',
            admissionDate: '09-09-2025',
            className: 'Class-9',
            classSection: '',
            registrationFees: '₹4,500',
            batchStartYear: '2025',
            batchEndYear: '2026',
        },
        student: {
            firstName: 'Priya',
            middleName: '',
            lastName: 'Sharma',
            gender: 'Female',
            religion: 'Hindu',
            caste: 'OBC',
            address: '45, KK Nagar, Madurai',
            dateOfBirth: '15-04-2009',
            country: 'India',
            state: 'Tamil Nadu',
            city: 'Madurai',
            zipCode: '625020',
            mobileNumber: '9876543211',
            alternativeMobileNumber: '9876543212',
            email: 'priya.sharma@email.com',
            previousSchool: 'DAV Public School',
            bloodGroup: 'O+',
            height: '158 cm',
            weight: '48 kg',
            medicalHistory: 'Mild asthma.',
        },
        transport: {
            routeList: 'Route 5 – Madurai North',
            busStop: 'KK Nagar Main Road',
        },
        parents: {
            fatherName: 'A. Sharma',
            motherName: 'S. Sharma',
            fatherOccupation: 'Engineer',
            motherOccupation: 'Teacher',
            fatherYearlyIncome: '₹10,00,000',
            motherYearlyIncome: '₹5,00,000',
            siblings: 'None',
            address: '45, KK Nagar, Madurai',
            country: 'India',
            state: 'Tamil Nadu',
            city: 'Madurai',
            zipCode: '625020',
            mobileNumber: '9876543210',
            email: 'sharma.family@email.com',
        },
        feesTimeline: 'Quarterly Fees Group',
    },
    {
        id: 'ADM-003',
        studentName: 'Arjun Menon',
        rollNo: 'STU-1003',
        className: 'Class-8',
        classSection: 'A',
        admissionNumber: 'ADM-NO1847',
        gender: 'Male',
        mobileNumber: '9123456789',
        createdDate: '08 SEP 2025',
        country: 'India',
        state: 'Kerala',
        city: 'Kochi',
        allocationStatus: 'Allocated',
        submittedBy: 'Priya Nair',
        submittedByRole: 'Coordinator',
        submittedAt: '08 SEP 2025',
        admission: {
            admissionRollNumber: 'ADM-ROLL-1003',
            admissionDate: '05-09-2025',
            className: 'Class-8',
            classSection: 'A',
            registrationFees: '₹4,000',
            batchStartYear: '2025',
            batchEndYear: '2026',
        },
        student: {
            firstName: 'Arjun',
            middleName: 'K.',
            lastName: 'Menon',
            gender: 'Male',
            religion: 'Hindu',
            caste: 'General',
            address: '78, Marine Drive, Kochi',
            dateOfBirth: '22-08-2010',
            country: 'India',
            state: 'Kerala',
            city: 'Kochi',
            zipCode: '682001',
            mobileNumber: '9123456789',
            alternativeMobileNumber: '9123456788',
            email: 'arjun.menon@email.com',
            previousSchool: 'Bhavan\'s Vidya Mandir',
            bloodGroup: 'A+',
            height: '155 cm',
            weight: '45 kg',
            medicalHistory: 'None',
        },
        transport: {
            routeList: 'Route 2 – Kochi West',
            busStop: 'Marine Drive Junction',
        },
        parents: {
            fatherName: 'K. Menon',
            motherName: 'L. Menon',
            fatherOccupation: 'Doctor',
            motherOccupation: 'Architect',
            fatherYearlyIncome: '₹18,00,000',
            motherYearlyIncome: '₹12,00,000',
            siblings: '1 (Elder sister)',
            address: '78, Marine Drive, Kochi',
            country: 'India',
            state: 'Kerala',
            city: 'Kochi',
            zipCode: '682001',
            mobileNumber: '9123456780',
            email: 'menon.family@email.com',
        },
        feesTimeline: 'Annual Fees Group',
    },
    {
        id: 'ADM-004',
        studentName: 'Kavya Reddy',
        rollNo: 'STU-1004',
        className: 'Class-10',
        classSection: 'B',
        admissionNumber: 'ADM-NO1848',
        gender: 'Female',
        mobileNumber: '9988776655',
        createdDate: '14 SEP 2025',
        country: 'India',
        state: 'Telangana',
        city: 'Hyderabad',
        allocationStatus: 'Pending Approval',
        submittedBy: TEACHER_NAME,
        submittedByRole: TEACHER_ROLE,
        submittedAt: '14 SEP 2025',
        admission: {
            admissionRollNumber: 'ADM-ROLL-1004',
            admissionDate: '13-09-2025',
            className: 'Class-10',
            classSection: 'B',
            registrationFees: '₹5,000',
            batchStartYear: '2025',
            batchEndYear: '2026',
        },
        student: {
            firstName: 'Kavya',
            middleName: '',
            lastName: 'Reddy',
            gender: 'Female',
            religion: 'Hindu',
            caste: 'General',
            address: '22, Banjara Hills, Hyderabad',
            dateOfBirth: '03-01-2009',
            country: 'India',
            state: 'Telangana',
            city: 'Hyderabad',
            zipCode: '500034',
            mobileNumber: '9988776655',
            alternativeMobileNumber: '9988776656',
            email: 'kavya.reddy@email.com',
            previousSchool: 'Delhi Public School',
            bloodGroup: 'AB+',
            height: '160 cm',
            weight: '49 kg',
            medicalHistory: 'None',
        },
        transport: {
            routeList: 'Route 7 – Hyderabad Central',
            busStop: 'Banjara Hills',
        },
        parents: {
            fatherName: 'V. Reddy',
            motherName: 'P. Reddy',
            fatherOccupation: 'IT Manager',
            motherOccupation: 'Consultant',
            fatherYearlyIncome: '₹15,00,000',
            motherYearlyIncome: '₹9,00,000',
            siblings: 'None',
            address: '22, Banjara Hills, Hyderabad',
            country: 'India',
            state: 'Telangana',
            city: 'Hyderabad',
            zipCode: '500034',
            mobileNumber: '9988776650',
            email: 'reddy.family@email.com',
        },
        feesTimeline: 'Quarterly Fees Group',
    },
]

const readJson = (key) => {
    try {
        const raw = localStorage.getItem(key)
        if (!raw) return null
        return JSON.parse(raw)
    } catch {
        return null
    }
}

export const getStudentAllocations = () => {
    const stored = readJson(STORAGE_KEY) ?? readJson(LEGACY_STORAGE_KEY)
    if (stored) return stored
    return [...DEFAULT_STUDENT_ALLOCATIONS]
}

export const saveStudentAllocations = (records) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export const getStudentAllocationById = (id) =>
    getStudentAllocations().find((item) => item.id === id) ?? null

export const submitStudentAllocation = (id, classSection, submitterName, submitterRole) => {
    const records = getStudentAllocations()
    const updated = records.map((item) => {
        if (item.id !== id) return item
        return {
            ...item,
            classSection,
            allocationStatus: 'Pending Approval',
            submittedBy: submitterName,
            submittedByRole: submitterRole,
            submittedAt: new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            }).toUpperCase(),
            admission: {
                ...item.admission,
                classSection,
            },
        }
    })
    saveStudentAllocations(updated)
    return updated
}

export const approveStudentAllocation = (id) => {
    const records = getStudentAllocations()
    const updated = records.map((item) => {
        if (item.id !== id) return item
        return {
            ...item,
            allocationStatus: 'Allocated',
            admission: {
                ...item.admission,
                classSection: item.classSection,
            },
        }
    })
    saveStudentAllocations(updated)
    return updated
}

export const rejectStudentAllocation = (id) => {
    const records = getStudentAllocations()
    const updated = records.map((item) => {
        if (item.id !== id) return item
        return {
            ...item,
            allocationStatus: 'Rejected',
        }
    })
    saveStudentAllocations(updated)
    return updated
}

export const deleteStudentAllocation = (id) => {
    const updated = getStudentAllocations().filter((item) => item.id !== id)
    saveStudentAllocations(updated)
    return updated
}

export const emptyAllocationFilters = {
    search: '',
    status: '',
    fromDate: null,
    toDate: null,
}

export const filterStudentAllocations = (records, filters) => {
    const search = filters.search.trim().toLowerCase()

    return records.filter((record) => {
        if (filters.status && record.allocationStatus !== filters.status) return false

        if (search) {
            const haystack = `${record.studentName} ${record.rollNo} ${record.admissionNumber} ${record.className} ${record.city} ${record.state} ${record.submittedBy}`.toLowerCase()
            if (!haystack.includes(search)) return false
        }

        return true
    })
}

export const getSubmitterIdentity = (routePrefix) => {
    if (routePrefix === '/coordinator') {
        return { name: COORDINATOR_NAME, role: COORDINATOR_ROLE }
    }
    return { name: TEACHER_NAME, role: TEACHER_ROLE }
}

export const getPendingApprovalCount = (records) =>
    records.filter((record) => record.allocationStatus === 'Pending Approval').length

export const DIRECTOR_APPROVAL_LIST_PATH = '/director/student-allocation-approval'

export const getStudentAllocationContext = (pathname) => {
    if (pathname.startsWith('/coordinator')) {
        return {
            routePrefix: '/coordinator',
            listPath: '/coordinator/student-allocation',
            isApprover: false,
        }
    }

    if (
        pathname.startsWith(DIRECTOR_APPROVAL_LIST_PATH) ||
        pathname.startsWith('/director/student-allocation')
    ) {
        return {
            routePrefix: '/director',
            listPath: DIRECTOR_APPROVAL_LIST_PATH,
            isApprover: true,
        }
    }

    return {
        routePrefix: '/teacher',
        listPath: '/teacher/student-allocation',
        isApprover: false,
    }
}
