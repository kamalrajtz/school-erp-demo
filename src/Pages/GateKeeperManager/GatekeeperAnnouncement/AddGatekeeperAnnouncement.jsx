import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'lucide-react'
import ProofUpload from './Components/ProofUpload'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const AddGatekeeperAnnouncement = () => {

    const [scheduledDate, setScheduledDate] = useState(new Date())

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Add Gatekeeper Announcement Information</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="announcement-id" className='text-base font-medium text-[#1E1E1E]'>Announcement ID:</label>
                        <input type="text" id="announcement-id" placeholder="GKB001" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="announcement-title" className='text-base font-medium text-[#1E1E1E]'>Announcement Title:</label>
                        <input type="text" id="announcement-title" placeholder="Main Gate Closure Notice" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="announcement-category" className='text-base font-medium text-[#1E1E1E]'>Announcement Category:</label>
                        <select id="announcement-category" className={inputClass}>
                            <option value="">Select category</option>
                            <option value="security-alert">Security Alert</option>
                            <option value="visitor-notice">Visitor Notice</option>
                            <option value="general-announcement">General Announcement</option>
                            <option value="emergency">Emergency</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label htmlFor="announcement-message" className='text-base font-medium text-[#1E1E1E]'>Announcement Message:</label>
                        <input type="text" id="announcement-message" placeholder="Main gate will be closed from 2 PM to 4 PM for maintenance." className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="sent-by" className='text-base font-medium text-[#1E1E1E]'>Sent By:</label>
                        <input type="text" id="sent-by" placeholder="Gatekeeper Manager" className={inputClass} />
                    </div>
                    <div className='col-span-3 flex gap-2'>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="announcement-date" className='text-base font-medium text-[#1E1E1E]'>Announcement Date:</label>
                            <div className='relative'>
                                <DatePicker
                                    id="announcement-date"
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
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="visible-to" className='text-base font-medium text-[#1E1E1E]'>Visible To:</label>
                            <select id="visible-to" className={inputClass}>
                                <option value="">Select Visible To</option>
                                <option value="all-staff">All Staff</option>
                                <option value="admin">Admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="parent">Parent</option>
                                <option value="gatekeeper">Gatekeeper</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-span-3 flex flex-col gap-y-2'>
                        <label htmlFor="announcement-attachment" className='text-base font-medium text-[#1E1E1E]'>Upload Attachment:</label>
                        <ProofUpload />
                    </div>
                </div>

            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Discard Changes
                </button>
                <button className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Save Changes
                </button>
            </div>
        </section>
    )
}

export default AddGatekeeperAnnouncement