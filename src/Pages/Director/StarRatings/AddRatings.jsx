import React, { useState } from 'react'
import StarRatingInput from './Components/StarRatingInput'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const AddRatings = () => {

    const [attendanceRating, setAttendanceRating] = useState(0)
    const [teachingRating, setTeachingRating] = useState(0)
    const [taskRating, setTaskRating] = useState(0)
    const [disciplineRating, setDisciplineRating] = useState(0)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Add Ratings Information</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-name" className='text-base font-medium text-[#1E1E1E]'>Rating ID:</label>
                        <input type="text" id="enquiry-name" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-mobile" className='text-base font-medium text-[#1E1E1E]'>Month:</label>
                        <input type="tel" id="enquiry-mobile" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-reason" className='text-base font-medium text-[#1E1E1E]'>Teacher Name:</label>
                        <input type="text" id="enquiry-reason" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-reason" className='text-base font-medium text-[#1E1E1E]'>Employee ID:</label>
                        <input type="text" id="enquiry-reason" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-reason" className='text-base font-medium text-[#1E1E1E]'>Department:</label>
                        <input type="text" id="enquiry-reason" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Attendance Rating:</label>
                        <div className='border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                            <StarRatingInput value={attendanceRating} onChange={setAttendanceRating} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Teaching Rating:</label>
                        <div className='border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                            <StarRatingInput value={teachingRating} onChange={setTeachingRating} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Task Completion Rating:</label>
                        <div className='border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                            <StarRatingInput value={taskRating} onChange={setTaskRating} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#1E1E1E]'>Discipline Rating:</label>
                        <div className='border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                            <StarRatingInput value={disciplineRating} onChange={setDisciplineRating} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-reason" className='text-base font-medium text-[#1E1E1E]'>Overall Rating:</label>
                        <input type="text" id="enquiry-reason" className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="enquiry-reason" className='text-base font-medium text-[#1E1E1E]'>Description:</label>
                        <input type="text" id="enquiry-reason" className={inputClass} />
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

export default AddRatings