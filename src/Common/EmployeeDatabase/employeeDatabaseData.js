import {
    buildUserDisplayName,
    CREATABLE_ROLE_LABELS,
    getAllCreatedUsers,
    getCreatedUserById,
} from '../RBAC/createdUsersData'
import { liveArray } from '../RBAC/liveArray'
import { ROLES } from '../../constants/roles'

export const DEPARTMENTS = [
    'Teacher',
    'Coordinator',
    'Front Office',
    'Librarian',
    'Gate Keeper Manager',
    'Gate Keeper',
    'Principal',
    'PRM',
    'HR',
    'Driver',
    'Admin Staff',
]

const displayValue = (value) => {
    const text = String(value ?? '').trim()
    return text || '—'
}

const ROLE_DEPARTMENT_MAP = {
    [ROLES.PRINCIPAL]: 'Principal',
    [ROLES.PRM]: 'PRM',
    [ROLES.TEACHER]: 'Teacher',
    [ROLES.COORDINATOR]: 'Coordinator',
    [ROLES.LIBRARIAN]: 'Librarian',
    [ROLES.GATEKEEPER_MANAGER]: 'Gate Keeper Manager',
    [ROLES.GATEKEEPER]: 'Gate Keeper',
}

const SEED_EMPLOYEES_LIST = [
    {
        id: 'EMP-1001',
        employeeId: 'TEA-1001',
        name: 'Sandy Selva',
        department: 'Teacher',
        role: 'Teacher',
        gender: 'Male',
        email: 'san@gmail.com',
        mobileNumber: '9944076993',
        dateOfBirth: '20-12-1996',
        qualification: 'B.SC, B.ED',
        experience: '8 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Pudukkottai',
        profileImage: null,
    },
    {
        id: 'EMP-1002',
        employeeId: 'TEA-1002',
        name: 'John Milton',
        department: 'Teacher',
        role: 'Teacher',
        gender: 'Male',
        email: 'John@gmail.com',
        mobileNumber: '9944076994',
        dateOfBirth: '09-07-2000',
        qualification: 'B.SC, B.ED',
        experience: '3.5 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Madurai',
        profileImage: null,
    },
    {
        id: 'EMP-1003',
        employeeId: 'CRD-1001',
        name: 'Priya Nair',
        department: 'Coordinator',
        role: 'Coordinator',
        gender: 'Female',
        email: 'priya.nair@school.edu',
        mobileNumber: '9876501234',
        dateOfBirth: '12-03-1988',
        qualification: 'M.Ed',
        experience: '10 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Chennai',
        profileImage: null,
    },
    {
        id: 'EMP-1004',
        employeeId: 'FO-1001',
        name: 'Anita Desai',
        department: 'Front Office',
        role: 'Front Office',
        gender: 'Female',
        email: 'anita.desai@school.edu',
        mobileNumber: '9123456780',
        dateOfBirth: '22-08-1990',
        qualification: 'B.Com',
        experience: '5 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Coimbatore',
        profileImage: null,
    },
    {
        id: 'EMP-1005',
        employeeId: 'LIB-1001',
        name: 'Ramesh Iyer',
        department: 'Librarian',
        role: 'Librarian',
        gender: 'Male',
        email: 'ramesh.iyer@school.edu',
        mobileNumber: '9988776655',
        dateOfBirth: '05-11-1985',
        qualification: 'M.Lib.Sc',
        experience: '12 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Trichy',
        profileImage: null,
    },
    {
        id: 'EMP-1006',
        employeeId: 'GKM-1001',
        name: 'Vikram Singh',
        department: 'Gate Keeper Manager',
        role: 'Gate Keeper Manager',
        gender: 'Male',
        email: 'vikram.singh@school.edu',
        mobileNumber: '9012345678',
        dateOfBirth: '18-01-1982',
        qualification: 'Diploma in Security',
        experience: '15 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Salem',
        profileImage: null,
    },
    {
        id: 'EMP-1007',
        employeeId: 'GK-1001',
        name: 'Kumaravel',
        department: 'Gate Keeper',
        role: 'Gate Keeper',
        gender: 'Male',
        email: 'kumaravel@school.edu',
        mobileNumber: '9098765432',
        dateOfBirth: '30-06-1992',
        qualification: 'Higher Secondary',
        experience: '6 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Erode',
        profileImage: null,
    },
    {
        id: 'EMP-1008',
        employeeId: 'PRN-1001',
        name: 'Dr. Meena Krishnan',
        department: 'Principal',
        role: 'Principal',
        gender: 'Female',
        email: 'meena.krishnan@school.edu',
        mobileNumber: '9876543210',
        dateOfBirth: '15-04-1978',
        qualification: 'M.Ed, Ph.D',
        experience: '18 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Chennai',
        profileImage: null,
    },
    {
        id: 'EMP-1009',
        employeeId: 'HR-1001',
        name: 'Deepa Menon',
        department: 'HR',
        role: 'HR Executive',
        gender: 'Female',
        email: 'deepa.menon@school.edu',
        mobileNumber: '9765432109',
        dateOfBirth: '08-09-1987',
        qualification: 'MBA (HR)',
        experience: '9 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Chennai',
        profileImage: null,
    },
    {
        id: 'EMP-1010',
        employeeId: 'DRV-1001',
        name: 'Selvam',
        department: 'Driver',
        role: 'Driver',
        gender: 'Male',
        email: 'selvam@school.edu',
        mobileNumber: '9654321098',
        dateOfBirth: '25-02-1980',
        qualification: 'Valid Heavy License',
        experience: '14 Years',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Madurai',
        profileImage: null,
    },
]

export const mapCreatedUserToEmployeeRow = (user) => {
    const department = ROLE_DEPARTMENT_MAP[user.role] || user.roleLabel || displayValue(user.role)
    const roleLabel = user.roleLabel || CREATABLE_ROLE_LABELS[user.role] || displayValue(user.role)

    return {
        id: user.id,
        employeeId: user.id,
        name: buildUserDisplayName(user),
        department,
        role: roleLabel,
        gender: displayValue(user.gender),
        email: user.email,
        mobileNumber: displayValue(user.mobileNumber),
        dateOfBirth: displayValue(user.dateOfBirth),
        qualification: displayValue(user.qualification),
        experience: displayValue(user.yearsOfExperience),
        country: displayValue(user.country),
        state: displayValue(user.state),
        city: displayValue(user.city),
        profileImage: user.profileImage || null,
        source: 'created-user',
    }
}

const formatJoiningDate = (isoDate) => {
    if (!isoDate) return '—'
    const value = new Date(isoDate)
    if (Number.isNaN(value.getTime())) return '—'
    return value.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}

const buildEmployeeDetailFromUser = (user, listItem) => ({
    ...listItem,
    profileImage: user.profileImage || null,
    userId: user.id,
    firstName: user.firstName || '',
    middleName: user.middleName || '',
    lastName: user.lastName || '',
    bloodGroup: displayValue(user.bloodGroup),
    height: displayValue(user.height),
    weight: displayValue(user.weight),
    medicalHistory: displayValue(user.medicalHistory),
    address: {
        address: displayValue(user.street),
        country: displayValue(user.country),
        state: displayValue(user.state),
        city: displayValue(user.city),
        zipCode: displayValue(user.pincode),
    },
    contact: {
        mobileNumber: displayValue(user.mobileNumber),
        alternativeNumber: displayValue(user.alternativeMobileNumber),
        email: user.email,
    },
    professionalInfo: {
        qualification: displayValue(user.qualification),
        subject: '—',
        yearsOfExperience: displayValue(user.yearsOfExperience),
        previousSchool: displayValue(user.previousSchool),
        joiningDate: displayValue(user.joiningDate) !== '—'
            ? user.joiningDate
            : formatJoiningDate(user.createdAt),
    },
    employmentInfo: {
        employeeType: user.status || 'Active',
        salary: '—',
        workShift: '—',
        assignedClass: '—',
        assignedSubjects: '—',
    },
    account: {
        username: displayValue(user.username || user.email.split('@')[0]),
        password: displayValue(user.password),
    },
    documents: {
        idProof: displayValue(user.idProofFile),
        qualificationCertificate: displayValue(user.qualificationCertificateFile),
        experienceCertificate: displayValue(user.experienceCertificateFile),
    },
})

const buildEmployeeDetailFromSeed = (listItem) => {
    const nameParts = listItem.name.replace(/^Dr\.\s*/, '').split(' ')

    return {
        ...listItem,
        profileImage: listItem.profileImage || null,
        userId: `USR-${listItem.employeeId.split('-')[1]}`,
        firstName: nameParts[0] || listItem.name,
        middleName: nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : '',
        lastName: nameParts.length > 1 ? nameParts[nameParts.length - 1] : '—',
        bloodGroup: 'O+',
        height: '162 cm',
        weight: '58 kg',
        medicalHistory: 'No chronic conditions reported.',
        address: {
            address: '18, Model Town, Block C',
            country: listItem.country,
            state: listItem.state,
            city: listItem.city,
            zipCode: '122002',
        },
        contact: {
            mobileNumber: listItem.mobileNumber,
            alternativeNumber: '+91 91234 56780',
            email: listItem.email,
        },
        professionalInfo: {
            qualification: listItem.qualification,
            subject: listItem.department === 'Teacher' ? 'Mathematics' : '—',
            yearsOfExperience: listItem.experience,
            previousSchool: 'Ryan International School, Sector 40',
            joiningDate: '2019-04-01',
        },
        employmentInfo: {
            employeeType: 'Full-time',
            salary: '₹45,000 / month',
            workShift: 'Morning (8:00 AM – 2:00 PM)',
            assignedClass: listItem.department === 'Teacher' ? 'Class 9, Class 10' : '—',
            assignedSubjects: listItem.department === 'Teacher' ? 'Mathematics, Statistics' : '—',
        },
        account: {
            username: listItem.email.split('@')[0],
            password: 'Employee@123',
        },
        documents: {
            idProof: 'Aadhaar Card',
            qualificationCertificate: `${listItem.qualification} Certificate`,
            experienceCertificate: 'Experience Letter',
        },
    }
}

export const getEmployeesList = () => {
    const createdEmployees = getAllCreatedUsers()
        .filter((user) => user.role !== ROLES.STUDENT)
        .map(mapCreatedUserToEmployeeRow)

    const createdIds = new Set(createdEmployees.map((item) => item.employeeId))
    const createdEmails = new Set(createdEmployees.map((item) => item.email.toLowerCase()))

    const seedEmployees = SEED_EMPLOYEES_LIST.filter(
        (item) =>
            !createdIds.has(item.employeeId)
            && !createdEmails.has(item.email.toLowerCase()),
    )

    return [...createdEmployees, ...seedEmployees]
}

export const EMPLOYEES_LIST = liveArray(getEmployeesList)

export const getEmployeeById = (id) => {
    const listItem = getEmployeesList().find((item) => item.id === id)
    if (!listItem) return null

    const createdUser = getCreatedUserById(id)
    if (createdUser && createdUser.role !== ROLES.STUDENT) {
        return buildEmployeeDetailFromUser(createdUser, listItem)
    }

    return buildEmployeeDetailFromSeed(listItem)
}
