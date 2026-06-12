import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    ArrowLeft,
    GraduationCap,
    User,
    Briefcase,
    KeyRound,
    FileText,
    CalendarCheck,
} from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'

const MOCK_PRINCIPAL = {
    profileImage: null,
    principalId: 'PRN-1001',
    userId: 'USR-300001',
    firstName: 'Rajesh',
    middleName: 'M.',
    lastName: 'Kumar',
    gender: 'Male',
    dateOfBirth: '15-03-1975',
    bloodGroup: 'A+',
    height: '178 cm',
    weight: '78 kg',
    medicalHistory: 'Mild hypertension under medication.',
    address: {
        address: '45, Green Park Avenue, Sector 12',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Chennai',
        zipCode: '600028',
    },
    contact: {
        mobileNumber: '+91 98765 43210',
        alternativeNumber: '+91 91234 56789',
        email: 'rajesh.kumar@school.edu',
    },
    professionalInfo: {
        qualification: 'M.Ed., Ph.D. in Educational Administration',
        designation: 'Principal',
        schoolName: 'Queen Mira International School',
        yearsOfExperience: '22 Years',
        previousOrganization: 'Delhi Public School, Chennai',
        joiningDate: '2010-04-01',
    },
    employmentInfo: {
        employeeType: 'Full-time',
        salary: '₹1,25,000 / month',
        workShift: 'Morning (7:30 AM – 3:30 PM)',
        assignedCampus: 'Main Campus',
        managedStaff: 'Teachers, Co-ordinators, Admin Staff',
        reportingTo: 'Joint Director',
    },
    account: {
        username: 'rajesh.kumar',
        password: 'Principal@123',
    },
    documents: {
        idProof: 'Aadhaar Card',
        qualificationCertificate: 'M.Ed. & Ph.D. Certificates',
        experienceCertificate: 'Experience Letter – DPS Chennai',
    },
}

const ATTENDANCE_RECORDS = [
    { date: '02-06-2025', day: 'Monday', checkIn: '07:45 AM', checkOut: '03:35 PM', status: 'Present', remarks: 'On time' },
    { date: '03-06-2025', day: 'Tuesday', checkIn: '07:50 AM', checkOut: '03:30 PM', status: 'Present', remarks: 'Board meeting attended' },
    { date: '04-06-2025', day: 'Wednesday', checkIn: '—', checkOut: '—', status: 'Leave', remarks: 'Personal leave' },
    { date: '05-06-2025', day: 'Thursday', checkIn: '08:10 AM', checkOut: '03:40 PM', status: 'Present', remarks: 'Late by 10 minutes' },
    { date: '06-06-2025', day: 'Friday', checkIn: '07:40 AM', checkOut: '01:00 PM', status: 'Half Day', remarks: 'Official visit' },
    { date: '09-06-2025', day: 'Monday', checkIn: '07:42 AM', checkOut: '03:32 PM', status: 'Present', remarks: 'On time' },
    { date: '10-06-2025', day: 'Tuesday', checkIn: '—', checkOut: '—', status: 'Absent', remarks: 'Uninformed absence' },
]

const attendanceBadgeColor = {
    Present: 'bg-[#4CAF5033] text-[#4CAF50]',
    Absent: 'bg-[#FF000033] text-[#FF0000]',
    Leave: 'bg-[#FF980033] text-[#FF9800]',
    'Half Day': 'bg-[#2196F333] text-[#2196F3]',
}

const ModernSection = ({ title, icon: Icon, children }) => (
    <div className='bg-white rounded-2xl shadow-sm border border-[#EEF0F6] overflow-hidden'>
        <div className='flex items-center gap-3 px-6 py-4 border-b border-[#EEF0F6] bg-linear-to-r from-[#F8F9FF] to-white'>
            <div className='p-2.5 rounded-xl bg-[#515DEF]/10'>
                <Icon className='w-5 h-5 text-[#515DEF]' />
            </div>
            <h2 className='text-lg font-semibold text-[#0C1E5B]'>{title}</h2>
        </div>
        <div className='p-6'>{children}</div>
    </div>
)

const InfoCard = ({ label, value }) => (
    <div className='rounded-xl border border-[#E8ECF4] bg-[#FAFBFD] px-4 py-3.5 hover:border-[#515DEF]/25 transition-colors'>
        <span className='text-xs font-medium uppercase tracking-wide text-[#808080]'>{label}</span>
        <p className='text-sm font-medium text-[#1E1E1E] mt-1 whitespace-pre-wrap wrap-break-word'>{value}</p>
    </div>
)

const ViewPrincipal = () => {
    const navigate = useNavigate()
    const principal = MOCK_PRINCIPAL
    const addr = principal.address
    const contact = principal.contact
    const prof = principal.professionalInfo
    const emp = principal.employmentInfo
    const acct = principal.account
    const docs = principal.documents

    const displayName = [principal.firstName, principal.middleName, principal.lastName].join(' ')
    const presentDays = ATTENDANCE_RECORDS.filter((r) => r.status === 'Present').length
    const attendanceRate = Math.round((presentDays / ATTENDANCE_RECORDS.length) * 100)

    return (
        <section className='space-y-6'>
            {/* <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/joint-director/documents')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF]/30 bg-white rounded-xl px-4 py-2.5 hover:bg-[#515DEF] hover:text-white transition-all cursor-pointer shadow-sm'
                >
                    <ArrowLeft size={18} />
                    Back
                </button>
            </div> */}

            <div className='relative overflow-hidden rounded-2xl shadow-md bg-linear-to-br from-[#515DEF] via-[#6366F1] to-[#7C3AED] p-6 sm:p-8'>
                <div className='absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3' />
                <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4' />
                <div className='relative flex flex-col sm:flex-row sm:items-center gap-6'>
                    <div className='relative shrink-0'>
                        <img
                            src={principal.profileImage || mo_user}
                            alt=''
                            className='w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-white/30 shadow-lg'
                        />
                        <div className='absolute -bottom-2 -right-2 p-2 rounded-xl bg-white shadow-md'>
                            <GraduationCap className='w-5 h-5 text-[#515DEF]' />
                        </div>
                    </div>
                    <div className='flex-1 min-w-0'>
                        <p className='text-white/70 text-sm font-medium uppercase tracking-wider'>Principal Profile</p>
                        <h1 className='text-2xl sm:text-3xl font-bold text-white mt-1'>{displayName}</h1>
                        <p className='text-white/80 text-sm mt-2'>
                            Principal ID: <span className='font-semibold text-white'>{principal.principalId}</span>
                            {' · '}
                            User ID: {principal.userId}
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className='px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm'>
                                {prof.designation}
                            </span>
                            <span className='px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm'>
                                {prof.yearsOfExperience} Experience
                            </span>
                            <span className='px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm'>
                                {emp.assignedCampus}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <ModernSection title='Personal information' icon={User}>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <InfoCard label='First name' value={principal.firstName} />
                    <InfoCard label='Middle name' value={principal.middleName} />
                    <InfoCard label='Last name' value={principal.lastName} />
                    <InfoCard label='Gender' value={principal.gender} />
                    <InfoCard label='Date of birth' value={principal.dateOfBirth} />
                    <InfoCard label='Blood group' value={principal.bloodGroup} />
                    <InfoCard label='Height' value={principal.height} />
                    <InfoCard label='Weight' value={principal.weight} />
                    <InfoCard label='Medical history' value={principal.medicalHistory} />
                    <div className='sm:col-span-2 lg:col-span-3'>
                        <InfoCard label='Street / full address' value={addr.address} />
                    </div>
                    <InfoCard label='Country' value={addr.country} />
                    <InfoCard label='State' value={addr.state} />
                    <InfoCard label='City' value={addr.city} />
                    <InfoCard label='Zip code' value={addr.zipCode} />
                    <InfoCard label='Mobile number' value={contact.mobileNumber} />
                    <InfoCard label='Alternative number' value={contact.alternativeNumber} />
                    <InfoCard label='Email' value={contact.email} />
                </div>
            </ModernSection>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <ModernSection title='Professional information' icon={GraduationCap}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <InfoCard label='Qualification' value={prof.qualification} />
                        <InfoCard label='Designation' value={prof.designation} />
                        <InfoCard label='School name' value={prof.schoolName} />
                        <InfoCard label='Years of experience' value={prof.yearsOfExperience} />
                        <InfoCard label='Previous organization' value={prof.previousOrganization} />
                        <InfoCard label='Joining date' value={prof.joiningDate} />
                    </div>
                </ModernSection>

                <ModernSection title='Employment information' icon={Briefcase}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <InfoCard label='Employee type' value={emp.employeeType} />
                        <InfoCard label='Salary' value={emp.salary} />
                        <InfoCard label='Work shift' value={emp.workShift} />
                        <InfoCard label='Assigned campus' value={emp.assignedCampus} />
                        <InfoCard label='Managed staff' value={emp.managedStaff} />
                        <InfoCard label='Reporting to' value={emp.reportingTo} />
                    </div>
                </ModernSection>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <ModernSection title='Account' icon={KeyRound}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <InfoCard label='Username' value={acct.username} />
                        <InfoCard label='Password' value={acct.password} />
                    </div>
                </ModernSection>

                <ModernSection title='Documents' icon={FileText}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <InfoCard label='ID proof' value={docs.idProof} />
                        <InfoCard label='Qualification certificate' value={docs.qualificationCertificate} />
                        <InfoCard label='Experience certificate' value={docs.experienceCertificate} />
                    </div>
                </ModernSection>
            </div>

            <div className='bg-white rounded-2xl shadow-sm border border-[#EEF0F6] overflow-hidden'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 border-b border-[#EEF0F6] bg-linear-to-r from-[#F8F9FF] to-white'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2.5 rounded-xl bg-[#515DEF]/10'>
                            <CalendarCheck className='w-5 h-5 text-[#515DEF]' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold text-[#0C1E5B]'>Attendance Record</h2>
                            <p className='text-sm text-[#808080]'>Recent attendance history for this month</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className='rounded-xl border border-[#E8ECF4] bg-[#FAFBFD] px-4 py-2 text-center min-w-[100px]'>
                            <p className='text-xs text-[#808080] uppercase tracking-wide'>Present</p>
                            <p className='text-lg font-bold text-[#4CAF50]'>{presentDays}</p>
                        </div>
                        <div className='rounded-xl border border-[#E8ECF4] bg-[#FAFBFD] px-4 py-2 text-center min-w-[100px]'>
                            <p className='text-xs text-[#808080] uppercase tracking-wide'>Rate</p>
                            <p className='text-lg font-bold text-[#515DEF]'>{attendanceRate}%</p>
                        </div>
                        <div className='rounded-xl border border-[#E8ECF4] bg-[#FAFBFD] px-4 py-2 text-center min-w-[100px]'>
                            <p className='text-xs text-[#808080] uppercase tracking-wide'>Total Days</p>
                            <p className='text-lg font-bold text-[#0C1E5B]'>{ATTENDANCE_RECORDS.length}</p>
                        </div>
                    </div>
                </div>

                <div className='p-6'>
                    <div className='relative overflow-x-auto rounded-xl border border-[#EEF0F6]'>
                        <table className='w-full text-sm text-left rtl:text-right'>
                            <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap'>
                                <tr>
                                    <th className='px-4 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Date</th>
                                    <th className='px-4 py-3.5 text-[#0C1E5B] font-medium uppercase'>Day</th>
                                    <th className='px-4 py-3.5 text-[#0C1E5B] font-medium uppercase'>Check In</th>
                                    <th className='px-4 py-3.5 text-[#0C1E5B] font-medium uppercase'>Check Out</th>
                                    <th className='px-4 py-3.5 text-[#0C1E5B] font-medium uppercase'>Status</th>
                                    <th className='px-4 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ATTENDANCE_RECORDS.map((record) => (
                                    <tr
                                        key={record.date}
                                        className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#FAFBFD] transition-colors'
                                    >
                                        <td className='px-4 py-4 font-medium text-[#1E1E1E] rounded-s-lg'>{record.date}</td>
                                        <td className='px-4 py-4'>{record.day}</td>
                                        <td className='px-4 py-4'>{record.checkIn}</td>
                                        <td className='px-4 py-4'>{record.checkOut}</td>
                                        <td className='px-4 py-4'>
                                            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${attendanceBadgeColor[record.status]}`}>
                                                {record.status}
                                            </span>
                                        </td>
                                        <td className='px-4 py-4 rounded-e-lg'>{record.remarks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewPrincipal
