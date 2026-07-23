import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, Upload } from 'lucide-react'
import { CATEGORY_OPTIONS, VISIBLE_TO_OPTIONS } from './announcementData'

const inputClass = 'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const AddAnnouncement = () => {
    const navigate = useNavigate()
    const [announcementDate, setAnnouncementDate] = useState(new Date())

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Add Announcement Information</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='announcement-id' className='text-base font-medium text-[#1E1E1E]'>Announcement ID:</label>
                        <input type='text' id='announcement-id' className={inputClass} placeholder='Auto-generated or enter ID' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='announcement-title' className='text-base font-medium text-[#1E1E1E]'>Announcement Title:</label>
                        <input type='text' id='announcement-title' className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='announcement-category' className='text-base font-medium text-[#1E1E1E]'>Announcement Category:</label>
                        <select id='announcement-category' className={inputClass}>
                            <option value=''>Select Category</option>
                            {CATEGORY_OPTIONS.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label htmlFor='announcement-message' className='text-base font-medium text-[#1E1E1E]'>Announcement Message:</label>
                        <textarea id='announcement-message' rows={3} className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='sent-by' className='text-base font-medium text-[#1E1E1E]'>Sent By:</label>
                        <input type='text' id='sent-by' defaultValue='Admin' className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='announcement-date' className='text-base font-medium text-[#1E1E1E]'>Announcement Date:</label>
                        <div className='relative'>
                            <DatePicker id='announcement-date' selected={announcementDate} onChange={(date) => setAnnouncementDate(date)} dateFormat='dd/MM/yyyy' isClearable className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none' />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='visible-to' className='text-base font-medium text-[#1E1E1E]'>Visible To:</label>
                        <select id='visible-to' className={inputClass}>
                            <option value=''>Select Visible To</option>
                            {VISIBLE_TO_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div className='col-span-full flex flex-col gap-y-2'>
                        <label htmlFor='upload-attachment' className='text-base font-medium text-[#1E1E1E]'>Upload Attachment:</label>
                        <label htmlFor='upload-attachment' className='flex items-center justify-center gap-2 border border-dashed border-[#D9D9D9] rounded-md px-4 py-6 cursor-pointer hover:border-[#515DEF] transition-colors'>
                            <Upload size={20} className='text-[#808080]' />
                            <span className='text-sm text-[#808080]'>Choose file (PDF, DOC, images)</span>
                            <input type='file' id='upload-attachment' className='hidden' accept='.pdf,.doc,.docx,image/*' />
                        </label>
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button type='button' onClick={() => navigate('/admin/announcement')} className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-all duration-200 cursor-pointer md:w-auto w-full'>Discard Changes</button>
                <button type='button' onClick={() => navigate('/admin/announcement')} className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>Save Changes</button>
            </div>
        </section>
    )
}

export default AddAnnouncement
