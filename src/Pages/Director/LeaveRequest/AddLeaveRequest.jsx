import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'lucide-react'
import { calculateTotalDays, HIGHER_HIERARCHY, LEAVE_TYPES } from './leaveRequestData'

const inputClass = 'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const AddLeaveRequest = () => {
    const navigate = useNavigate()
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [appliedDate, setAppliedDate] = useState(new Date())

    const totalDays = useMemo(() => calculateTotalDays(fromDate, toDate), [fromDate, toDate])

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Apply Leave Request</h2>
                <p className='text-sm text-[#667085] mt-2'>This request will be sent to {HIGHER_HIERARCHY} for approval.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Requested To:</label>
                        <input type='text' readOnly value={HIGHER_HIERARCHY} className={`${inputClass} bg-[#F9FAFB]`} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Leave Type:</label>
                        <select className={inputClass}>
                            <option value=''>Select Leave Type</option>
                            {LEAVE_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>From Date:</label>
                        <div className='relative'>
                            <DatePicker selected={fromDate} onChange={setFromDate} dateFormat='dd/MM/yyyy' isClearable className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>To Date:</label>
                        <div className='relative'>
                            <DatePicker selected={toDate} onChange={setToDate} dateFormat='dd/MM/yyyy' isClearable className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Total Days:</label>
                        <input type='text' readOnly value={totalDays || ''} placeholder='Auto-calculated' className={`${inputClass} bg-[#F9FAFB]`} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Applied Date:</label>
                        <div className='relative'>
                            <DatePicker selected={appliedDate} onChange={setAppliedDate} dateFormat='dd/MM/yyyy' isClearable className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Reason:</label>
                        <textarea rows={3} className={inputClass} placeholder='Describe the reason for leave...' />
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button type='button' onClick={() => navigate('/director/leave-request/my-requests')} className='bg-white text-[#515DEF] text-sm px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-all duration-200 cursor-pointer md:w-auto w-full'>Discard Changes</button>
                <button type='button' onClick={() => navigate('/director/leave-request/my-requests')} className='bg-[#515DEF] text-white text-sm px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>Submit Request</button>
            </div>
        </section>
    )
}

export default AddLeaveRequest
