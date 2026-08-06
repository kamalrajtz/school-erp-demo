import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, ChevronLeft, ChevronRight, Download, EllipsisIcon } from 'lucide-react'
import Dropdown from '../../../Common/CommonComponents/Dropdown'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import {
    getAllLeaveRequests,
    getPendingLeaveApprovalCount,
    LEAVE_STATUSES,
    statusBadgeColor,
} from '../../../Common/GateKeeperLeaveRequest/gateKeeperLeaveRequestData'

const ReceivedLeaveRequests = () => {
    const location = useLocation()
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [exportModal, setExportModal] = useState(false)
    const [requests, setRequests] = useState([])
    const [statusFilter, setStatusFilter] = useState('')

    useEffect(() => {
        setRequests(getAllLeaveRequests())
    }, [location.key])

    const pendingCount = useMemo(() => getPendingLeaveApprovalCount(), [requests])

    const filteredRequests = useMemo(() => {
        if (!statusFilter) return requests
        return requests.filter((request) => request.status === statusFilter)
    }, [requests, statusFilter])

    return (
        <section className='space-y-6'>
            <div>
                <h1 className='text-2xl font-semibold text-black'>Received Leave Requests</h1>
                <p className='text-sm text-[#667085] mt-1'>
                    Review and approve leave requests submitted by gatekeepers.
                </p>
            </div>

            {pendingCount > 0 ? (
                <button
                    type='button'
                    onClick={() => setStatusFilter(statusFilter === 'Pending' ? '' : 'Pending')}
                    className={`text-left w-full sm:w-auto rounded-xl border px-4 py-3 transition-all cursor-pointer ${
                        statusFilter === 'Pending'
                            ? 'border-[#515DEF] bg-[#515DEF08] ring-2 ring-[#515DEF]'
                            : 'border-[#E4E7EC] hover:border-[#515DEF] bg-white'
                    }`}
                >
                    <p className='text-sm font-medium text-[#808080]'>Pending approvals</p>
                    <p className='text-2xl font-bold text-[#0C1E5B] mt-1'>{pendingCount}</p>
                </button>
            ) : null}

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex justify-between md:items-center sm:items-stretch md:flex-row sm:flex-col flex-col gap-y-4'>
                    <button type='button' className='bg-[#515DEF] text-white uppercase text-sm px-6 py-2 border border-[#515DEF] rounded-lg hover:opacity-90 transition-all duration-200 cursor-pointer'>Clear Filters</button>
                    <select className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full md:max-w-xs sm:max-w-full'>
                        <option value=''>From Beginning</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='search' className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' id='search' placeholder='Leave ID, gatekeeper name...' className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='status' className='text-base font-medium text-[#808080]'>Status</label>
                        <select id='status' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            {LEAVE_STATUSES.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>From</label>
                        <div className='relative w-full'>
                            <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} isClearable showMonthYearDropdown scrollableMonthYearDropdown className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>To</label>
                        <div className='relative'>
                            <DatePicker selected={toDate} onChange={(date) => setToDate(date)} isClearable showMonthYearDropdown scrollableMonthYearDropdown className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Received Leave Requests</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'>
                        <Download size={16} />
                        Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr className='rounded-lg'>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Leave Request ID</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Employee ID</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Gate Keeper Name</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Leave Type</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>From Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>To Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Total Days</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Reason</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Request Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Status</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.length === 0 ? (
                                <tr>
                                    <td colSpan={11} className='px-2 py-8 text-center text-[#667085]'>
                                        No received leave requests from gatekeepers.
                                    </td>
                                </tr>
                            ) : (
                                filteredRequests.map((request) => (
                                    <tr key={request.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7] rounded-lg'>
                                        <td className='px-2 py-4 rounded-s-lg'>{request.leaveRequestId}</td>
                                        <td className='px-2 py-4'>{request.employeeId}</td>
                                        <td className='px-2 py-4'>{request.gateKeeperName}</td>
                                        <td className='px-2 py-4'>{request.leaveType}</td>
                                        <td className='px-2 py-4'>{request.fromDate}</td>
                                        <td className='px-2 py-4'>{request.toDate}</td>
                                        <td className='px-2 py-4'>{request.totalDays}</td>
                                        <td className='px-2 py-4 max-w-[180px] truncate' title={request.reason}>{request.reason}</td>
                                        <td className='px-2 py-4'>{request.appliedDate}</td>
                                        <td className='px-2 py-4'>
                                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${statusBadgeColor[request.status]}`}>
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className='px-2 py-4 text-center rounded-e-lg'>
                                            <Dropdown buttonContent={<EllipsisIcon size={16} className='text-black' />}>
                                                <NavLink to={`/gatekeeper-manager/leave-request/received/view/${request.id}`} className='block w-full text-left p-2 hover:bg-[#515DEF] hover:text-white rounded cursor-pointer'>Review</NavLink>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to {filteredRequests.length} of {filteredRequests.length} entries</p>
                <div className='flex justify-center gap-x-2 flex-wrap'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer'><ChevronLeft size={16} /></button>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#515DEF] text-white border border-[#515DEF] rounded-full cursor-pointer'>1</button>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer'><ChevronRight size={16} /></button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default ReceivedLeaveRequests
