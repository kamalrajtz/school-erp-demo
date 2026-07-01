import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, ChevronLeft, ChevronRight, Download, EllipsisIcon } from 'lucide-react'
import Dropdown from '../../../Common/CommonComponents/Dropdown'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import { getNotifications, NOTIFICATION_TYPES, typeBadgeColor } from './notificationsData'

const Notifications = () => {
    const location = useLocation()
    const [records, setRecords] = useState(() => getNotifications())
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [exportModal, setExportModal] = useState(false)
    const [viewRecord, setViewRecord] = useState(null)

    useEffect(() => {
        setRecords(getNotifications())
    }, [location.pathname])

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex justify-between md:items-center sm:items-stretch md:flex-row sm:flex-col flex-col gap-y-4'>
                    <button type='button' className='bg-[#515DEF] text-white uppercase text-sm px-6 py-1.5 border border-[#515DEF] rounded-lg hover:opacity-90 transition-all duration-200 cursor-pointer'>
                        Clear Filters
                    </button>
                    <select className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full md:max-w-xs sm:max-w-full'>
                        <option value=''>From Beginning</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='search' className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' id='search' placeholder='Title, message, posted by...' className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='type-filter' className='text-base font-medium text-[#808080]'>Notification Type</label>
                        <select id='type-filter' className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            {NOTIFICATION_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
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
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
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
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Notifications List</h2>
                    <button
                        type='button'
                        onClick={() => setExportModal(true)}
                        className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                    >
                        <Download size={16} />
                        Export
                    </button>
                </div>
                <div className='flex gap-x-2 items-center my-2'>
                    <select className='px-2 py-1.5 bg-white text-[#515DEF] border border-[#515DEF] rounded-md'>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                    </select>
                    <span className='text-sm font-normal text-[#515DEF]'>Entries Per Page</span>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr className='rounded-lg'>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Notification ID</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Type</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Title</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Message</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Related Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Notification Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Posted By</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record) => (
                                <tr key={record.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7] rounded-lg'>
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg'>{record.notificationId}</td>
                                    <td className='px-2 py-4'>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${typeBadgeColor[record.type]}`}>
                                            {record.type}
                                        </span>
                                    </td>
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E]'>{record.title}</td>
                                    <td className='px-2 py-4 max-w-[220px] truncate' title={record.message}>{record.message}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{record.relatedDate}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{record.notificationDate}</td>
                                    <td className='px-2 py-4'>{record.postedBy}</td>
                                    <td className='px-2 py-4 text-center rounded-e-lg'>
                                        <Dropdown buttonContent={<EllipsisIcon size={16} className='text-black' />}>
                                            <button
                                                type='button'
                                                onClick={() => setViewRecord(record)}
                                                className='w-full text-left p-2 hover:bg-[#515DEF] hover:text-white rounded cursor-pointer'
                                            >
                                                View
                                            </button>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>
                    Showing 1 to {records.length} of {records.length} entries
                </p>
                <div className='flex justify-center gap-x-2 flex-wrap'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer'>
                        <ChevronLeft size={16} />
                    </button>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#515DEF] text-white border border-[#515DEF] rounded-full cursor-pointer'>
                        1
                    </button>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer'>
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {viewRecord && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
                    <div className='bg-white rounded-2xl shadow-xl w-full max-w-lg p-6'>
                        <div className='flex items-start justify-between gap-3 mb-4'>
                            <div>
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${typeBadgeColor[viewRecord.type]}`}>
                                    {viewRecord.type}
                                </span>
                                <h3 className='text-xl font-semibold text-black mt-2'>{viewRecord.title}</h3>
                                <p className='text-sm text-[#667085] mt-1'>{viewRecord.notificationId}</p>
                            </div>
                            <button
                                type='button'
                                onClick={() => setViewRecord(null)}
                                className='text-[#667085] hover:text-black text-xl leading-none cursor-pointer'
                                aria-label='Close'
                            >
                                ×
                            </button>
                        </div>
                        <div className='space-y-4 text-sm'>
                            <div>
                                <span className='font-medium text-[#808080]'>Message</span>
                                <p className='text-[#1E1E1E] mt-1'>{viewRecord.message}</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <span className='font-medium text-[#808080]'>Related Date</span>
                                    <p className='text-[#1E1E1E] mt-1'>{viewRecord.relatedDate}</p>
                                </div>
                                <div>
                                    <span className='font-medium text-[#808080]'>Notification Date</span>
                                    <p className='text-[#1E1E1E] mt-1'>{viewRecord.notificationDate}</p>
                                </div>
                            </div>
                            <div>
                                <span className='font-medium text-[#808080]'>Posted By</span>
                                <p className='text-[#1E1E1E] mt-1'>{viewRecord.postedBy}</p>
                            </div>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <button
                                type='button'
                                onClick={() => setViewRecord(null)}
                                className='bg-[#515DEF] text-white text-sm px-6 py-2 rounded-md hover:opacity-90 transition-opacity cursor-pointer'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Notifications
