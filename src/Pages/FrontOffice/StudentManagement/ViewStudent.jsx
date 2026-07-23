import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'

const MOCK_STUDENT = {
    profileImage: null,
    admissionNumber: 'ADM-2024-0842',
    firstName: 'Rahul',
    middleName: 'Kumar',
    lastName: 'Sharma',
    admissionDate: '2024-06-15',
    class: 'Class 10',
    classSection: 'Section A',
    registrationFees: '₹5,000',
    batchYear: '2024',
    batchEndYear: '2025',
    feesTimeline: 'Quarterly',
    status: 'Active',
    studentId: 'STU-100842',
    gender: 'Male',
    religion: 'Hindu',
    caste: 'General',
    dateOfBirth: '2010-03-22',
    bloodGroup: 'B+',
    height: '165 cm',
    weight: '52 kg',
    medicalHistory: 'No known allergies. Mild asthma (controlled).',
    previousSchool: 'Delhi Public School, Sector 12',
    address: {
        address: '42, Green Park Extension, Near Metro Station',
        country: 'India',
        state: 'Delhi',
        city: 'New Delhi',
        zipCode: '110016',
    },
    contact: {
        mobileNumber: '+91 98765 43210',
        alternativeNumber: '+91 98765 43211',
        email: 'rahul.sharma@example.com',
    },
    transport: {
        routeList: 'Route 7 – South Delhi',
        busStop: 'Green Park Metro Gate 2',
    },
    parent: {
        fatherName: 'Rajesh Sharma',
        motherName: 'Priya Sharma',
        fatherOccupation: 'Software Engineer',
        motherOccupation: 'Teacher',
        fatherYearlyIncome: '₹12,00,000',
        motherYearlyIncome: '₹6,00,000',
        siblings: '1 (Younger sister)',
        address: {
            address: '42, Green Park Extension, Near Metro Station',
            country: 'India',
            state: 'Delhi',
            city: 'New Delhi',
            zipCode: '110016',
        },
        contact: {
            mobileNumber: '+91 98123 45678',
            alternativeNumber: '+91 98123 45679',
            email: 'rajesh.sharma@example.com',
        },
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

const ViewStudent = () => {
    const navigate = useNavigate()
    const a = MOCK_STUDENT
    const addr = a.address
    const contact = a.contact
    const transport = a.transport
    const parent = a.parent
    const parentAddr = parent.address
    const parentContact = parent.contact

    const displayName = [a.firstName, a.middleName, a.lastName].join(' ')

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/front-office/student-management')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <img
                        src={a.profileImage || mo_user}
                        alt=''
                        className='w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100'
                    />
                    <div className='flex-1'>
                        <h1 className='text-2xl font-semibold text-black'>{displayName}</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            <span className='font-medium text-[#1E1E1E]'>
                                Admission No: {a.admissionNumber}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <Section title='Admission details'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Admission date' value={a.admissionDate} />
                    <Field label='Class' value={a.class} />
                    <Field label='Class section' value={a.classSection} />
                    <Field label='Registration fees' value={a.registrationFees} />
                    <Field label='Batch year' value={a.batchYear} />
                    <Field label='Batch end year' value={a.batchEndYear} />
                    <Field label='Fees timeline' value={a.feesTimeline} />
                    <Field label='Status' value={a.status} />
                    <Field label='Student ID' value={a.studentId} />
                </div>
            </Section>

            <Section title='Student information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='First name' value={a.firstName} />
                    <Field label='Middle name' value={a.middleName} />
                    <Field label='Last name' value={a.lastName} />
                    <Field label='Gender' value={a.gender} />
                    <Field label='Religion' value={a.religion} />
                    <Field label='Caste' value={a.caste} />
                    <Field label='Date of birth' value={a.dateOfBirth} />
                    <Field label='Blood group' value={a.bloodGroup} />
                    <Field label='Height' value={a.height} />
                    <Field label='Weight' value={a.weight} />
                    <div className='lg:col-span-3'>
                        <Field label='Medical history' value={a.medicalHistory} />
                    </div>
                    <div className='lg:col-span-3'>
                        <Field label='Previous school' value={a.previousSchool} />
                    </div>
                </div>
            </Section>

            <Section title='Student address'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-3'>
                        <Field label='Street / full address' value={addr.address} />
                    </div>
                    <Field label='Country' value={addr.country} />
                    <Field label='State' value={addr.state} />
                    <Field label='City' value={addr.city} />
                    <Field label='Zip code' value={addr.zipCode} />
                </div>
            </Section>

            <Section title='Student contact'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Mobile number' value={contact.mobileNumber} />
                    <Field label='Alternative number' value={contact.alternativeNumber} />
                    <Field label='Email' value={contact.email} />
                </div>
            </Section>

            <Section title='Transport'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Route list' value={transport.routeList} />
                    <Field label='Bus stop' value={transport.busStop} />
                </div>
            </Section>

            <Section title='Parent / guardian'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Father name' value={parent.fatherName} />
                    <Field label='Mother name' value={parent.motherName} />
                    <Field label='Father occupation' value={parent.fatherOccupation} />
                    <Field label='Mother occupation' value={parent.motherOccupation} />
                    <Field label='Father yearly income' value={parent.fatherYearlyIncome} />
                    <Field label='Mother yearly income' value={parent.motherYearlyIncome} />
                    <Field label='Siblings' value={parent.siblings} />
                </div>
            </Section>

            <Section title='Parent address'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-3'>
                        <Field label='Street / full address' value={parentAddr.address} />
                    </div>
                    <Field label='Country' value={parentAddr.country} />
                    <Field label='State' value={parentAddr.state} />
                    <Field label='City' value={parentAddr.city} />
                    <Field label='Zip code' value={parentAddr.zipCode} />
                </div>
            </Section>

            <Section title='Parent contact'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Mobile number' value={parentContact.mobileNumber} />
                    <Field label='Alternative number' value={parentContact.alternativeNumber} />
                    <Field label='Email' value={parentContact.email} />
                </div>
            </Section>
        </section>
    )
}

export default ViewStudent
