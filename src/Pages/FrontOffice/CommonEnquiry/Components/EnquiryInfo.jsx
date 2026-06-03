import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'lucide-react'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const EnquiryInfo = () => {
    const [scheduledDate, setScheduledDate] = useState(new Date())

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:mt-8 mt-2'>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-name" className='text-base font-medium text-[#1E1E1E]'>Name:</label>
                <input type="text" id="enquiry-name" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-mobile" className='text-base font-medium text-[#1E1E1E]'>Mobile Number:</label>
                <input type="tel" id="enquiry-mobile" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-mode" className='text-base font-medium text-[#1E1E1E]'>Mode of Meeting:</label>
                <select id="enquiry-mode" className={inputClass}>
                    <option value="">Select mode of meeting</option>
                    <option value="in-person">In Person</option>
                    <option value="phone">Phone Call</option>
                    <option value="video">Video Call</option>
                    <option value="online">Online</option>
                </select>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-reason" className='text-base font-medium text-[#1E1E1E]'>Reason:</label>
                <input type="text" id="enquiry-reason" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-scheduled-date" className='text-base font-medium text-[#1E1E1E]'>Scheduled Date:</label>
                <div className='relative'>
                    <DatePicker
                        id="enquiry-scheduled-date"
                        selected={scheduledDate}
                        onChange={(date) => setScheduledDate(date)}
                        dateFormat="dd/MM/yyyy"
                        isClearable
                        className="w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none"
                    />
                    <Calendar
                        size={16}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-meeting-link" className='text-base font-medium text-[#1E1E1E]'>Meeting Link:</label>
                <input type="url" id="enquiry-meeting-link" placeholder="https://" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-address" className='text-base font-medium text-[#1E1E1E]'>Address:</label>
                <input type="text" id="enquiry-address" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-state" className='text-base font-medium text-[#1E1E1E]'>State:</label>
                <input type="text" id="enquiry-state" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-city" className='text-base font-medium text-[#1E1E1E]'>City:</label>
                <input type="text" id="enquiry-city" className={inputClass} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="enquiry-pincode" className='text-base font-medium text-[#1E1E1E]'>Pincode:</label>
                <input type="text" id="enquiry-pincode" className={inputClass} />
            </div>
        </div>
    )
}

export default EnquiryInfo
