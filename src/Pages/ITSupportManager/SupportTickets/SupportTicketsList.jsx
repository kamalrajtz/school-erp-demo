import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, ChevronLeft, ChevronRight, Download, EllipsisIcon } from 'lucide-react'
import Dropdown from '../../../Common/CommonComponents/Dropdown'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import {
    SUPPORT_TICKETS,
    ISSUE_TYPES,
    priorityBadgeColor,
    statusBadgeColor,
} from './supportTicketsData'

const SupportTicketsList = () => {
    const [fromDate, setFromDate] = useState(new Date())
    const [exportModal, setExportModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex justify-between md:items-center sm:items-stretch md:flex-row sm:flex-col flex-col gap-y-4'>
                    <button className='bg-[#515DEF] text-white uppercase text-sm px-6 py-2 border border-[#515DEF] rounded-lg hover:opacity-90 transition-all duration-200 cursor-pointer'>Clear Filters</button>
                    <select className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full md:max-w-xs'>
                        <option value="">From Beginning</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type="text" placeholder="Ticket ID, requester..." className='text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Issue Type</label>
                        <select className='text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value="">All</option>
                            {ISSUE_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Status</label>
                        <select className='text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value="">All</option>
                            <option value="open">Open</option>
                            <option value="in-progress">In Progress</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>From</label>
                        <div className='relative w-full'>
                            <DatePicker selected={fromDate} onChange={setFromDate} isClearable showMonthYearDropdown scrollableMonthYearDropdown className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Support Tickets</h2>
                    <button onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center gap-x-2'>
                        <Download size={16} />
                        Export
                    </button>
                </div>
                <div className='flex gap-x-2 items-center my-2'>
                    <select className='px-2 py-1.5 bg-white text-[#515DEF] border border-[#515DEF] rounded-md'>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                    <span className='text-sm font-normal text-[#515DEF]'>Entries Per Page</span>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg">
                            <tr>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg">Ticket ID</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Requester Name</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Department</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Issue Type</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Priority</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Assigned To</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Status</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Created Date</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SUPPORT_TICKETS.map((ticket) => (
                                <tr key={ticket.ticketId} className="border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]">
                                    <td className="px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg">{ticket.ticketId}</td>
                                    <td className="px-2 py-4">{ticket.requesterName}</td>
                                    <td className="px-2 py-4">{ticket.department}</td>
                                    <td className="px-2 py-4">{ticket.issueType}</td>
                                    <td className="px-2 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${priorityBadgeColor[ticket.priority]}`}>
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className="px-2 py-4">{ticket.assignedTo}</td>
                                    <td className="px-2 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${statusBadgeColor[ticket.status]}`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap">{ticket.createdDate}</td>
                                    <td className="px-2 py-4 text-center rounded-e-lg">
                                        <Dropdown buttonContent={<EllipsisIcon size={16} className='text-black' />}>
                                            <NavLink to={`/it-support-manager/support-tickets/view-ticket/${ticket.ticketId}`} className="w-full text-left p-2 hover:bg-[#515DEF] hover:text-white rounded cursor-pointer block">View</NavLink>
                                            <NavLink to={`/it-support-manager/support-tickets/view-ticket/${ticket.ticketId}`} className="w-full text-left p-2 hover:bg-[#515DEF] hover:text-white rounded cursor-pointer block">Update</NavLink>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to {SUPPORT_TICKETS.length} of {SUPPORT_TICKETS.length} entries</p>
                <div className="flex justify-center gap-x-2">
                    <button className="size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer"><ChevronLeft size={16} /></button>
                    <button className="size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] border border-[#E2E8F0] rounded-full cursor-pointer">1</button>
                    <button className="size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer"><ChevronRight size={16} /></button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default SupportTicketsList
