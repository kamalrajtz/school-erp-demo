import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ChevronRight, Download, Eye, Plus } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import ClassTimeTableModal from './Components/ClassTimeTableModal'

const ClassTimetableList = () => {
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [exportModal, setExportModal] = useState(false)
    const [timeTableModal, setTimeTableModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
                        <label htmlFor='class-filter' className='text-base font-medium text-[#808080]'>
                            Class
                        </label>
                        <select
                            id='class-filter'
                            className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'
                        >
                            <option value=''>All</option>
                            <option value='9'>Grade 9</option>
                            <option value='10'>Grade 10</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='section-filter' className='text-base font-medium text-[#808080]'>
                            Section
                        </label>
                        <select
                            id='section-filter'
                            className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'
                        >
                            <option value=''>All</option>
                            <option value='a'>A</option>
                            <option value='b'>B</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Class Timetable List</h2>
                    <div className='flex gap-x-2'>
                        <NavLink
                            to='/principal/create-class-timetable'
                            className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                        >
                            <Plus size={16} />
                            Create Timetable
                        </NavLink>
                        <button
                            type='button'
                            onClick={() => setExportModal(true)}
                            className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                        >
                            <Download size={16} />
                            Export
                        </button>
                    </div>
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
                                <td className='px-2 py-4'>15-05-2025</td>
                                <td className='px-2 py-4'>
                                    <span className='text-sm font-medium text-[#FF0000] border border-[#FF000033] rounded-md px-2 py-1'>
                                        Pending
                                    </span>
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
                            <tr className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                <td className='px-2 py-4 rounded-s-lg'>CTT002</td>
                                <td className='px-2 py-4'>Grade 10 - B</td>
                                <td className='px-2 py-4'>2025-2026</td>
                                <td className='px-2 py-4'>01-06-2025</td>
                                <td className='px-2 py-4'>31-03-2026</td>
                                <td className='px-2 py-4'>20-05-2025</td>
                                <td className='px-2 py-4'>
                                    <span className='text-sm font-medium text-[#4CAF50] border border-[#4CAF5033] rounded-md px-2 py-1'>
                                        Approved
                                    </span>
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
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to 2 of 2 entries</p>
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

export default ClassTimetableList
