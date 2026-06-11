import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'

const MOCK_TEACHER = {
    profileImage: null,
    staffId: 'STF-2024-0156',
    userId: 'USR-100156',
    firstName: 'Anita',
    middleName: 'R.',
    lastName: 'Verma',
    gender: 'Female',
    dateOfBirth: '1988-07-14',
    bloodGroup: 'O+',
    height: '162 cm',
    weight: '58 kg',
    medicalHistory: 'No chronic conditions reported.',
    address: {
        address: '18, Model Town, Block C',
        country: 'India',
        state: 'Haryana',
        city: 'Gurgaon',
        zipCode: '122002',
    },
    contact: {
        mobileNumber: '+91 91234 56789',
        alternativeNumber: '+91 91234 56780',
        email: 'anita.verma@example.com',
    },
    professionalInfo: {
        qualification: 'M.Sc. Mathematics, B.Ed.',
        subject: 'Mathematics',
        yearsOfExperience: '8 years',
        previousSchool: 'Ryan International School, Sector 40',
        joiningDate: '2019-04-01',
    },
    employmentInfo: {
        employeeType: 'Full-time',
        salary: '₹45,000 / month',
        workShift: 'Morning (8:00 AM – 2:00 PM)',
        assignedClass: 'Class 9, Class 10',
        assignedSubjects: 'Mathematics, Statistics',
    },
    account: {
        username: 'anita.verma',
        password: 'Teacher@123',
    },
    documents: {
        idProof: 'Aadhaar Card',
        qualificationCertificate: 'M.Sc. Mathematics Certificate',
        experienceCertificate: 'Experience Letter – Ryan International',
    },
}

const Section = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h2 className='text-xl font-semibold text-black mb-6'>{title}</h2>
        {children}
    </div>
)

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E] whitespace-pre-wrap wrap-break-word'>{value}</span>
    </div>
)

const ViewTeacher = () => {
    const navigate = useNavigate()
    const t = MOCK_TEACHER
    const addr = t.address
    const contact = t.contact
    const prof = t.professionalInfo
    const emp = t.employmentInfo
    const acct = t.account
    const docs = t.documents

    const displayName = [t.firstName, t.middleName, t.lastName].join(' ')

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/joint-director/teachers/teacher-details-list')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <img
                        src={t.profileImage || mo_user}
                        alt=''
                        className='w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100'
                    />
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>{displayName}</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            <span className='font-medium text-[#1E1E1E]'>
                                Staff ID: {t.staffId}
                            </span>
                            {' · '}
                            <span className='text-[#808080]'>User ID: {t.userId}</span>
                        </p>
                    </div>
                </div>
            </div>

            <Section title='Personal information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='First name' value={t.firstName} />
                    <Field label='Middle name' value={t.middleName} />
                    <Field label='Last name' value={t.lastName} />
                    <Field label='Gender' value={t.gender} />
                    <Field label='Date of birth' value={t.dateOfBirth} />
                    <Field label='Blood group' value={t.bloodGroup} />
                    <Field label='Height' value={t.height} />
                    <Field label='Weight' value={t.weight} />
                    <Field label='Medical history' value={t.medicalHistory} />
                    <div className='lg:col-span-3'>
                        <Field label='Street / full address' value={addr.address} />
                    </div>
                    <Field label='Country' value={addr.country} />
                    <Field label='State' value={addr.state} />
                    <Field label='City' value={addr.city} />
                    <Field label='Zip code' value={addr.zipCode} />
                    <Field label='Mobile number' value={contact.mobileNumber} />
                    <Field label='Alternative number' value={contact.alternativeNumber} />
                    <Field label='Email' value={contact.email} />
                </div>
            </Section>

            <Section title='Professional information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Qualification' value={prof.qualification} />
                    <Field label='Subject' value={prof.subject} />
                    <Field label='Years of experience' value={prof.yearsOfExperience} />
                    <Field label='Previous school' value={prof.previousSchool} />
                    <Field label='Joining date' value={prof.joiningDate} />
                </div>
            </Section>

            <Section title='Employment information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Employee type' value={emp.employeeType} />
                    <Field label='Salary' value={emp.salary} />
                    <Field label='Work shift' value={emp.workShift} />
                    <Field label='Assigned class' value={emp.assignedClass} />
                    <Field label='Assigned subjects' value={emp.assignedSubjects} />
                </div>
            </Section>

            <Section title='Account'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Username' value={acct.username} />
                    <Field label='Password' value={acct.password} />
                </div>
            </Section>

            <Section title='Documents'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='ID proof' value={docs.idProof} />
                    <Field label='Qualification certificate' value={docs.qualificationCertificate} />
                    <Field label='Experience certificate' value={docs.experienceCertificate} />
                </div>
            </Section>
        </section>
    )
}

export default ViewTeacher
