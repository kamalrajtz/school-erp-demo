import React, { useMemo, useState } from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'
import { PROFILE_TABS } from './employeeData'
import { formatInr } from '../domain/payrollCalculations'
import { salaryRows } from '../domain/hrStore'
import {
    getAdvances, getAttendance, getDisciplinary, getDocuments, getEmployee, getExits,
    getObservations, getOnboarding, getPerformance, getReferrals, getShadow, getTraining, completionOf,
} from '../domain/hrStore'
import { getLeaveBundle } from '../domain/hrStore'
import { Badge, td, th, useHrTick } from '../components/HrUi'

const Info = ({ label, value }) => (
    <div className='rounded-xl border border-[#E8ECF4] bg-[#FAFBFD] px-4 py-3'>
        <span className='text-xs uppercase text-[#808080]'>{label}</span>
        <p className='text-sm font-medium text-[#1E1E1E] mt-1'>{value || '—'}</p>
    </div>
)

const MiniTable = ({ headers, rows }) => (
    <div className='overflow-x-auto'>
        <table className='w-full text-left'>
            <thead className='bg-[#EDEEF5]'><tr>{headers.map((header) => <th key={header} className={th}>{header}</th>)}</tr></thead>
            <tbody>
                {rows.length === 0 && <tr><td className={td} colSpan={headers.length}>No records for this employee.</td></tr>}
                {rows.map((row) => <tr key={row.key} className='border-b border-[#f2f4f7]'>{row.cells.map((cell, index) => <td key={index} className={td}>{cell}</td>)}</tr>)}
            </tbody>
        </table>
    </div>
)

const EmployeeProfile = () => {
    const { id } = useParams()
    const tick = useHrTick()
    const employee = useMemo(() => getEmployee(id), [id, tick])
    const [tab, setTab] = useState('overview')
    if (!employee) return <Navigate to='/hr/employee-management/employees' replace />

    const documents = getDocuments().filter((item) => item.employeeId === employee.id)
    const attendance = getAttendance().filter((item) => item.employeeId === employee.id)
    const leaves = getLeaveBundle().requests.filter((item) => item.employeeId === employee.id)
    const training = getTraining().filter((item) => item.participantIds?.includes(employee.id))
    const performance = getPerformance().filter((item) => item.employeeId === employee.id)
    const payroll = salaryRows('June', 2026).find((item) => item.employeeId === employee.id)
    const advances = getAdvances().filter((item) => item.employeeId === employee.id)
    const referrals = getReferrals().filter((item) => item.referrerId === employee.id)
    const disciplinary = getDisciplinary().filter((item) => item.employeeId === employee.id)
    const onboarding = getOnboarding().filter((item) => item.employeeId === employee.id)
    const observations = getObservations().filter((item) => item.employeeId === employee.id)
    const shadow = getShadow().filter((item) => item.employeeId === employee.id || item.mentorId === employee.id)
    const exits = getExits().filter((item) => item.employeeId === employee.id)
    const visibleTabs = PROFILE_TABS.filter((item) => {
        if (item.id === 'onboarding') return onboarding.length > 0
        if (item.id === 'observation') return observations.length > 0
        if (item.id === 'shadow') return shadow.length > 0
        if (item.id === 'exit') return exits.length > 0
        if (item.id === 'disciplinary') return disciplinary.length > 0
        if (item.id === 'referral') return referrals.length > 0
        if (item.id === 'advance') return advances.length > 0
        return true
    })

    const activity = [
        { key: 'join', cells: ['Joined', employee.joiningDate, employee.designation] },
        ...documents.map((item) => ({ key: item.id, cells: ['Document Uploaded', item.uploadedDate, item.name] })),
        ...training.filter((item) => item.status === 'Completed').map((item) => ({ key: item.id, cells: ['Training Completed', item.endDate, item.title] })),
        ...leaves.filter((item) => item.status === 'Approved').map((item) => ({ key: item.id, cells: ['Leave Approved', item.fromDate, item.leaveType] })),
        ...performance.filter((item) => item.status === 'Completed').map((item) => ({ key: item.id, cells: ['Performance Reviewed', item.period, item.rating] })),
        ...advances.filter((item) => item.status === 'APPROVED').map((item) => ({ key: item.id, cells: ['Salary Advance Approved', item.requestedDate, item.id] })),
        ...disciplinary.map((item) => ({ key: item.id, cells: ['Disciplinary Notice', item.date, item.actionType] })),
        ...exits.map((item) => ({ key: item.id, cells: ['Exit Initiated', item.lastWorkingDate, item.exitType] })),
    ]

    const content = {
        overview: (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {[['Employee ID', employee.id], ['Department', employee.department], ['Designation', employee.designation], ['Reporting Manager', employee.reportingManager], ['Status', employee.status], ['Joining Date', employee.joiningDate], ['Experience', employee.experience], ['Current Salary', formatInr(employee.grossSalary)], ['Category', employee.category], ['Qualification', employee.qualification], ['Contact', employee.contact], ['Email', employee.email]].map(([label, value]) => <Info key={label} label={label} value={value} />)}
                <Info label='Leave Summary' value={`${leaves.filter((item) => item.status === 'Approved').reduce((sum, item) => sum + item.days, 0)} approved day(s)`} />
                <Info label='Training Summary' value={`${training.filter((item) => item.status === 'Completed').length} completed / ${training.length} assigned`} />
                <Info label='Performance Summary' value={performance[0] ? `${performance[0].rating} · ${performance[0].score}` : 'No review yet'} />
            </div>
        ),
        documents: <MiniTable headers={['Type', 'Name', 'File', 'Uploaded', 'Status']} rows={documents.map((item) => ({ key: item.id, cells: [item.type, item.name, item.fileName, item.uploadedDate, <Badge key='s' value={item.status} />] }))} />,
        attendance: <MiniTable headers={['Date', 'Punch In', 'Punch Out', 'Status', 'Source']} rows={attendance.map((item) => ({ key: item.id, cells: [item.date, item.punchIn || item.checkIn, item.punchOut || item.checkOut, <Badge key='s' value={item.status} />, item.source] }))} />,
        leave: <MiniTable headers={['Type', 'From', 'To', 'Days', 'Status']} rows={leaves.map((item) => ({ key: item.id, cells: [item.leaveType, item.fromDate, item.toDate, item.days, <Badge key='s' value={item.status} />] }))} />,
        training: <MiniTable headers={['Title', 'Date', 'Status']} rows={training.map((item) => ({ key: item.id, cells: [item.title, item.startDate, <Badge key='s' value={item.status} />] }))} />,
        performance: <MiniTable headers={['Period', 'Rating', 'BSC', 'Audit', 'Reviewer']} rows={performance.map((item) => ({ key: item.id, cells: [item.period, item.rating, item.bsc, item.audit, item.reviewer] }))} />,
        payroll: payroll ? <MiniTable headers={['Month', 'Gross', 'Basic', 'PF', 'ESI', 'Net']} rows={[{ key: 'pay', cells: ['June 2026', formatInr(payroll.grossSalary), formatInr(payroll.basicSalary), formatInr(payroll.pfEmployee), formatInr(payroll.esiEmployee), formatInr(payroll.netSalary)] }]} /> : <p className='text-sm text-[#667085]'>No June 2026 statement row.</p>,
        advance: <MiniTable headers={['Request', 'Amount', 'Outstanding', 'Status']} rows={advances.map((item) => ({ key: item.id, cells: [item.id, formatInr(item.amount), formatInr(item.outstanding), <Badge key='s' value={item.status} />] }))} />,
        referral: <MiniTable headers={['Referral', 'Position', 'Amount', 'Status']} rows={referrals.map((item) => ({ key: item.id, cells: [item.id, item.position, formatInr(item.amount), <Badge key='s' value={item.status} />] }))} />,
        disciplinary: <MiniTable headers={['Notice', 'Type', 'Date', 'Status']} rows={disciplinary.map((item) => ({ key: item.id, cells: [item.id, item.actionType, item.date, <Badge key='s' value={item.status} />] }))} />,
        onboarding: <MiniTable headers={['Record', 'Joining', 'Completion', 'Status']} rows={onboarding.map((item) => ({ key: item.id, cells: [item.id, item.joiningDate, `${completionOf(item)}%`, <Badge key='s' value={item.overallStatus} />] }))} />,
        observation: <MiniTable headers={['Record', 'Template', 'Date', 'Status']} rows={observations.map((item) => ({ key: item.id, cells: [item.id, item.template, item.reviewDate, <Badge key='s' value={item.status} />] }))} />,
        shadow: <MiniTable headers={['Record', 'Start', 'End', 'Status']} rows={shadow.map((item) => ({ key: item.id, cells: [item.id, item.startDate, item.endDate, <Badge key='s' value={item.status} />] }))} />,
        exit: <MiniTable headers={['Record', 'Last Working', 'Type', 'Status']} rows={exits.map((item) => ({ key: item.id, cells: [item.id, item.lastWorkingDate, item.exitType, <Badge key='s' value={item.status} />] }))} />,
        activity: <MiniTable headers={['Event', 'Date', 'Detail']} rows={activity} />,
    }

    return (
        <section className='space-y-6'>
            <NavLink to='/hr/employee-management/employees' className='inline-flex items-center gap-2 text-sm text-[#515DEF]'><ArrowLeft size={16} /> Employees</NavLink>
            <div className='bg-white rounded-2xl shadow-md p-4 flex gap-4 items-center'>
                <img src={mo_user} alt='' className='w-16 h-16 rounded-full object-cover' />
                <div>
                    <h2 className='text-xl font-semibold'>{employee.name}</h2>
                    <p className='text-sm text-[#667085]'>{employee.id} · {employee.designation} · {employee.department}</p>
                    <Badge value={employee.status} />
                </div>
            </div>
            <div className='flex gap-2 overflow-x-auto'>
                {visibleTabs.map((item) => (
                    <button key={item.id} type='button' onClick={() => setTab(item.id)} className={`text-sm px-3 py-2 rounded-md whitespace-nowrap cursor-pointer ${tab === item.id ? 'bg-[#515DEF] text-white' : 'bg-white text-[#515DEF] border border-[#515DEF]'}`}>{item.label}</button>
                ))}
            </div>
            <div className='bg-white rounded-2xl shadow-md p-4'>{content[tab]}</div>
        </section>
    )
}

export default EmployeeProfile
