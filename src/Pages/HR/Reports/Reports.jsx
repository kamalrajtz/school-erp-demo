import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, Download } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import {
    REPORT_TYPES,
    EMPLOYEE_REPORT,
    RECRUITMENT_REPORT,
    LEAVE_REPORT,
    ATTENDANCE_REPORT,
    TRAINING_REPORT,
    PERFORMANCE_REPORT,
} from './reportsData'

const thClass = 'px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'
const tdClass = 'px-2 py-4 text-[#667085]'

const ReportTableSection = ({ title, children, onExport }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
            <h2 className='text-xl font-medium text-black'>{title}</h2>
            {onExport && (
                <button
                    type='button'
                    onClick={onExport}
                    className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                >
                    <Download size={16} />
                    Export
                </button>
            )}
        </div>
        <div className='relative overflow-x-auto'>{children}</div>
    </div>
)

const Reports = () => {
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [exportModal, setExportModal] = useState(false)
    const [activeReport, setActiveReport] = useState('All')

    const show = (type) => activeReport === 'All' || activeReport === type

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h3 className='text-base font-semibold text-[#1E1E1E] mb-4'>Report Types</h3>
                <div className='flex flex-wrap gap-2'>
                    <button
                        type='button'
                        onClick={() => setActiveReport('All')}
                        className={`text-sm px-4 py-2 rounded-md border transition-all cursor-pointer ${activeReport === 'All' ? 'bg-[#515DEF] text-white border-[#515DEF]' : 'bg-white text-[#515DEF] border-[#515DEF] hover:bg-[#515DEF] hover:text-white'}`}
                    >
                        All Reports
                    </button>
                    {REPORT_TYPES.map((type) => (
                        <button
                            key={type}
                            type='button'
                            onClick={() => setActiveReport(type)}
                            className={`text-sm px-4 py-2 rounded-md border transition-all cursor-pointer ${activeReport === type ? 'bg-[#515DEF] text-white border-[#515DEF]' : 'bg-white text-[#515DEF] border-[#515DEF] hover:bg-[#515DEF] hover:text-white'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex justify-between md:items-center sm:items-stretch md:flex-row sm:flex-col flex-col gap-y-4'>
                    <button type='button' className='bg-[#515DEF] text-white uppercase text-sm px-6 py-2 border border-[#515DEF] rounded-lg hover:opacity-90 transition-all duration-200 cursor-pointer'>Clear Filters</button>
                    <select className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full md:max-w-xs'>
                        <option value=''>From Beginning</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-6 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>From</label>
                        <div className='relative w-full'>
                            <DatePicker selected={fromDate} onChange={setFromDate} isClearable showMonthYearDropdown scrollableMonthYearDropdown className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>To</label>
                        <div className='relative'>
                            <DatePicker selected={toDate} onChange={setToDate} isClearable showMonthYearDropdown scrollableMonthYearDropdown className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                </div>
            </div>

            {show('Employee Report') && (
                <ReportTableSection title='Employee Report' onExport={() => setExportModal(true)}>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Employee ID</th>
                                <th className={thClass}>Name</th>
                                <th className={thClass}>Department</th>
                                <th className={thClass}>Designation</th>
                                <th className={thClass}>Status</th>
                                <th className={`${thClass} rounded-e-lg`}>Joining Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {EMPLOYEE_REPORT.map((row) => (
                                <tr key={row.employeeId} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.employeeId}</td>
                                    <td className={tdClass}>{row.name}</td>
                                    <td className={tdClass}>{row.department}</td>
                                    <td className={tdClass}>{row.designation}</td>
                                    <td className={tdClass}>{row.status}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.joiningDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ReportTableSection>
            )}

            {show('Recruitment Report') && (
                <ReportTableSection title='Recruitment Report' onExport={() => setExportModal(true)}>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Job Title</th>
                                <th className={thClass}>Department</th>
                                <th className={thClass}>Positions</th>
                                <th className={thClass}>Status</th>
                                <th className={thClass}>Candidates</th>
                                <th className={`${thClass} rounded-e-lg`}>Hired</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RECRUITMENT_REPORT.map((row) => (
                                <tr key={row.jobTitle} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg max-w-[220px] truncate`} title={row.jobTitle}>{row.jobTitle}</td>
                                    <td className={tdClass}>{row.department}</td>
                                    <td className={tdClass}>{row.positions}</td>
                                    <td className={tdClass}>{row.status}</td>
                                    <td className={tdClass}>{row.candidates}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.hired}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ReportTableSection>
            )}

            {show('Leave Report') && (
                <ReportTableSection title='Leave Report' onExport={() => setExportModal(true)}>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Employee</th>
                                <th className={thClass}>Leave Type</th>
                                <th className={thClass}>From Date</th>
                                <th className={thClass}>To Date</th>
                                <th className={thClass}>Days</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {LEAVE_REPORT.map((row) => (
                                <tr key={`${row.employee}-${row.fromDate}`} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.employee}</td>
                                    <td className={tdClass}>{row.leaveType}</td>
                                    <td className={tdClass}>{row.fromDate}</td>
                                    <td className={tdClass}>{row.toDate}</td>
                                    <td className={tdClass}>{row.days}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ReportTableSection>
            )}

            {show('Attendance Report') && (
                <ReportTableSection title='Attendance Report' onExport={() => setExportModal(true)}>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Employee</th>
                                <th className={thClass}>Month</th>
                                <th className={thClass}>Present</th>
                                <th className={thClass}>Absent</th>
                                <th className={thClass}>Late</th>
                                <th className={thClass}>On Leave</th>
                                <th className={`${thClass} rounded-e-lg`}>Attendance Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ATTENDANCE_REPORT.map((row) => (
                                <tr key={`${row.employee}-${row.month}`} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.employee}</td>
                                    <td className={tdClass}>{row.month}</td>
                                    <td className={tdClass}>{row.present}</td>
                                    <td className={tdClass}>{row.absent}</td>
                                    <td className={tdClass}>{row.late}</td>
                                    <td className={tdClass}>{row.onLeave}</td>
                                    <td className={`${tdClass} rounded-e-lg font-medium text-[#515DEF]`}>{row.attendanceRate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ReportTableSection>
            )}

            {show('Training Report') && (
                <ReportTableSection title='Training Report' onExport={() => setExportModal(true)}>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Training Name</th>
                                <th className={thClass}>Department</th>
                                <th className={thClass}>Date</th>
                                <th className={thClass}>Attendance</th>
                                <th className={`${thClass} rounded-e-lg`}>Avg Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TRAINING_REPORT.map((row) => (
                                <tr key={row.trainingName} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg max-w-[220px] truncate`} title={row.trainingName}>{row.trainingName}</td>
                                    <td className={tdClass}>{row.department}</td>
                                    <td className={tdClass}>{row.date}</td>
                                    <td className={tdClass}>{row.attendance}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.avgFeedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ReportTableSection>
            )}

            {show('Performance Report') && (
                <ReportTableSection title='Performance Report' onExport={() => setExportModal(true)}>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Employee</th>
                                <th className={thClass}>Review Period</th>
                                <th className={thClass}>Reviewer</th>
                                <th className={thClass}>Rating</th>
                                <th className={`${thClass} rounded-e-lg`}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PERFORMANCE_REPORT.map((row) => (
                                <tr key={`${row.employee}-${row.reviewPeriod}`} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E] rounded-s-lg`}>{row.employee}</td>
                                    <td className={tdClass}>{row.reviewPeriod}</td>
                                    <td className={tdClass}>{row.reviewer}</td>
                                    <td className={tdClass}>{row.rating} / 5</td>
                                    <td className={`${tdClass} rounded-e-lg`}>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ReportTableSection>
            )}

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Reports
