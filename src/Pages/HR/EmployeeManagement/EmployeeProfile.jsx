import React, { useState } from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, User, Briefcase, FileText, CalendarCheck, CalendarOff, GraduationCap, Star } from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'
import {
    getEmployeeById,
    EMPLOYEES,
    PROFILE_TABS,
    employeeStatusBadgeColor,
    attendanceStatusBadgeColor,
    leaveStatusBadgeColor,
    documentStatusBadgeColor,
} from './employeeData'

const TAB_ICONS = {
    personal: User,
    employment: Briefcase,
    documents: FileText,
    attendance: CalendarCheck,
    leave: CalendarOff,
    training: GraduationCap,
    performance: Star,
}

const InfoCard = ({ label, value }) => (
    <div className='rounded-xl border border-[#E8ECF4] bg-[#FAFBFD] px-4 py-3.5'>
        <span className='text-xs font-medium uppercase tracking-wide text-[#808080]'>{label}</span>
        <p className='text-sm font-medium text-[#1E1E1E] mt-1 wrap-break-word'>{value || '—'}</p>
    </div>
)

const thClass = 'px-2 py-3 text-[#0C1E5B] font-medium uppercase text-xs'
const tdClass = 'px-2 py-3 text-[#667085] text-sm'

const EmployeeProfile = () => {
    const { id } = useParams()
    const employeeId = id ?? EMPLOYEES[0]?.id
    const employee = getEmployeeById(employeeId)
    const [activeTab, setActiveTab] = useState('personal')

    if (!employee) {
        return <Navigate to='/hr/employee-management/employees' replace />
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <InfoCard label='First Name' value={employee.personal.firstName} />
                        <InfoCard label='Last Name' value={employee.personal.lastName} />
                        <InfoCard label='Gender' value={employee.personal.gender} />
                        <InfoCard label='Date of Birth' value={employee.personal.dateOfBirth} />
                        <InfoCard label='Blood Group' value={employee.personal.bloodGroup} />
                        <InfoCard label='Email' value={employee.personal.email} />
                        <InfoCard label='Mobile' value={employee.personal.mobile} />
                        <InfoCard label='Address' value={employee.personal.address} />
                        <InfoCard label='Emergency Contact' value={employee.personal.emergencyContact} />
                    </div>
                )
            case 'employment':
                return (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {Object.entries(employee.employment).map(([key, value]) => (
                            <InfoCard
                                key={key}
                                label={key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                                value={value}
                            />
                        ))}
                    </div>
                )
            case 'documents':
                return (
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Document ID</th>
                                <th className={thClass}>Type</th>
                                <th className={thClass}>Uploaded Date</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.documents.map((doc) => (
                                <tr key={doc.id} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{doc.id}</td>
                                    <td className={tdClass}>{doc.type}</td>
                                    <td className={tdClass}>{doc.uploadedDate}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${documentStatusBadgeColor[doc.status]}`}>
                                            {doc.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            case 'attendance':
                return (
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Date</th>
                                <th className={thClass}>Check In</th>
                                <th className={thClass}>Check Out</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.attendance.map((row) => (
                                <tr key={row.date} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.date}</td>
                                    <td className={tdClass}>{row.checkIn}</td>
                                    <td className={tdClass}>{row.checkOut}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${attendanceStatusBadgeColor[row.status]}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            case 'leave':
                return employee.leaveHistory.length > 0 ? (
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Leave Type</th>
                                <th className={thClass}>From</th>
                                <th className={thClass}>To</th>
                                <th className={thClass}>Days</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.leaveHistory.map((row) => (
                                <tr key={`${row.type}-${row.from}`} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.type}</td>
                                    <td className={tdClass}>{row.from}</td>
                                    <td className={tdClass}>{row.to}</td>
                                    <td className={tdClass}>{row.days}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${leaveStatusBadgeColor[row.status]}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='text-sm text-[#667085]'>No leave history recorded.</p>
                )
            case 'training':
                return employee.training.length > 0 ? (
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Training Title</th>
                                <th className={thClass}>Date</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.training.map((row) => (
                                <tr key={row.title} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.title}</td>
                                    <td className={tdClass}>{row.date}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='text-sm text-[#667085]'>No training records yet.</p>
                )
            case 'performance':
                return employee.performance.length > 0 ? (
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Period</th>
                                <th className={thClass}>Rating</th>
                                <th className={thClass}>Reviewer</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.performance.map((row) => (
                                <tr key={row.period} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.period}</td>
                                    <td className={tdClass}>{row.rating}</td>
                                    <td className={tdClass}>{row.reviewer}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='text-sm text-[#667085]'>No performance reviews yet.</p>
                )
            default:
                return null
        }
    }

    return (
        <section className='space-y-6'>
            <NavLink
                to='/hr/employee-management/employees'
                className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors'
            >
                <ArrowLeft size={18} />
                Back to Employees
            </NavLink>

            <div className='relative overflow-hidden rounded-2xl shadow-md bg-linear-to-br from-[#515DEF] via-[#6366F1] to-[#7C3AED] p-6 sm:p-8'>
                <div className='relative flex flex-col sm:flex-row sm:items-center gap-6'>
                    <img src={mo_user} alt='' className='w-24 h-24 rounded-2xl object-cover ring-4 ring-white/30 shadow-lg shrink-0' />
                    <div className='flex-1 min-w-0'>
                        <p className='text-white/70 text-sm font-medium uppercase tracking-wider'>Employee Profile</p>
                        <h1 className='text-2xl sm:text-3xl font-bold text-white mt-1'>{employee.name}</h1>
                        <p className='text-white/80 text-sm mt-2'>
                            {employee.id} · {employee.department} · {employee.designation}
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${employeeStatusBadgeColor[employee.status]} bg-white/90`}>
                                {employee.status}
                            </span>
                            <span className='px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white'>
                                Joined {employee.joiningDate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex gap-4 overflow-x-auto no-scrollbar border-b border-[#EDEEF5] pb-1'>
                    {PROFILE_TABS.map((tab) => {
                        const Icon = TAB_ICONS[tab.id] ?? User
                        return (
                            <button
                                key={tab.id}
                                type='button'
                                onClick={() => setActiveTab(tab.id)}
                                className={`whitespace-nowrap px-2 pb-3 text-sm font-medium cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                                    activeTab === tab.id
                                        ? 'text-[#515DEF] border-b-2 border-[#515DEF] font-semibold'
                                        : 'text-[#808080]'
                                }`}
                            >
                                <Icon size={16} />
                                {tab.label}
                            </button>
                        )
                    })}
                </div>
                <div className='mt-6'>{renderTabContent()}</div>
            </div>
        </section>
    )
}

export default EmployeeProfile
