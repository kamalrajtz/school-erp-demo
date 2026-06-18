import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ChevronRight, Download, Eye } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import ClassTimeTableModal from './Components/ClassTimeTableModal'

const ClassTimetableApprovals = () => {
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [exportModal, setExportModal] = useState(false)
    const [timeTableModal, setTimeTableModal] = useState(false)
    const [approvalStatus, setApprovalStatus] = useState('Pending')

    const approvalStatusColor = {
        Approved: 'text-[#4CAF50] border-[#4CAF5033]',
        Pending: 'text-[#FF0000] border-[#FF000033]',
        Rejected: 'text-[#980E0F] border-[#980E0F33]',
    }

    const approvalStatusOptions = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Approved', label: 'Approved' },
        { value: 'Rejected', label: 'Rejected' },
    ]

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='search' className='text-base font-medium text-[#808080]'>
                            Search
                        </label>
                        <input
                            type='text'
                            id='search'
                            className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='status' className='text-base font-medium text-[#808080]'>
                            Approval Status
                        </label>
                        <select
                            id='status'
                            className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'
                        >
                            <option value=''>All</option>
                            <option value='pending'>Pending</option>
                            <option value='approved'>Approved</option>
                            <option value='rejected'>Rejected</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>From</label>
                        <div className='relative w-full'>
                            <DatePicker
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none'
                            />
                            <Calendar
                                size={16}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>To</label>
                        <div className='relative'>
                            <DatePicker
                                selected={toDate}
                                onChange={(date) => setToDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none'
                            />
                            <Calendar
                                size={16}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Class Timetable Approvals</h2>
                    <button
                        type='button'
                        onClick={() => setExportModal(true)}
                        className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                    >
                        <Download size={16} />
                        Export
                    </button>
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>
                                    Timetable ID
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Class & Section
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Academic Year
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Effective From
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Effective To
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Submitted By
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Submitted Date
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>
                                    Approval Status
                                </th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>
                                    View Timetable
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                <td className='px-2 py-4 rounded-s-lg'>CTT001</td>
                                <td className='px-2 py-4'>Grade 9 - A</td>
                                <td className='px-2 py-4'>2025-2026</td>
                                <td className='px-2 py-4'>01-06-2025</td>
                                <td className='px-2 py-4'>31-03-2026</td>
                                <td className='px-2 py-4'>Principal</td>
                                <td className='px-2 py-4'>15-05-2025</td>
                                <td className='px-2 py-4'>
                                    <select
                                        value={approvalStatus}
                                        onChange={(e) => setApprovalStatus(e.target.value)}
                                        className={`text-sm font-medium border rounded-md px-2 py-1 w-full ${approvalStatusColor[approvalStatus]}`}
                                    >
                                        {approvalStatusOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className='px-2 py-4 rounded-e-lg'>
                                    <button
                                        type='button'
                                        onClick={() => setTimeTableModal(true)}
                                        className='bg-[#515DEF] text-white text-sm px-2 py-1.5 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                                    >
                                        <Eye size={16} />
                                        View Timetable
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to 1 of 1 entries</p>
                <div className='flex justify-center gap-x-2'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] rounded-full cursor-pointer'>
                        1
                    </button>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] rounded-full cursor-pointer'>
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
            <ClassTimeTableModal
                open={timeTableModal}
                onClose={() => setTimeTableModal(false)}
                title='Grade 9 - A Timetable'
            />
        </section>
    )
}

export default ClassTimetableApprovals
