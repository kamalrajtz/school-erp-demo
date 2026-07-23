import React from 'react'
import { useNavigate } from 'react-router-dom'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const CreateClassTimetable = () => {
    const navigate = useNavigate()

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Create Class Timetable</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='timetable-id' className='text-base font-medium text-[#1E1E1E]'>
                            Timetable ID:
                        </label>
                        <input type='text' id='timetable-id' placeholder='CTT001' className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='class' className='text-base font-medium text-[#1E1E1E]'>
                            Class:
                        </label>
                        <select id='class' className={inputClass}>
                            <option value=''>Select class</option>
                            <option value='9'>Grade 9</option>
                            <option value='10'>Grade 10</option>
                            <option value='12'>Grade 12</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='section' className='text-base font-medium text-[#1E1E1E]'>
                            Section:
                        </label>
                        <select id='section' className={inputClass}>
                            <option value=''>Select section</option>
                            <option value='a'>A</option>
                            <option value='b'>B</option>
                            <option value='c'>C</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='academic-year' className='text-base font-medium text-[#1E1E1E]'>
                            Academic Year:
                        </label>
                        <input
                            type='text'
                            id='academic-year'
                            placeholder='2025-2026'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='term' className='text-base font-medium text-[#1E1E1E]'>
                            Term:
                        </label>
                        <select id='term' className={inputClass}>
                            <option value=''>Select term</option>
                            <option value='term-1'>Term 1</option>
                            <option value='term-2'>Term 2</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='period-number' className='text-base font-medium text-[#1E1E1E]'>
                            Period Number:
                        </label>
                        <input type='number' id='period-number' placeholder='1' className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='day' className='text-base font-medium text-[#1E1E1E]'>
                            Day:
                        </label>
                        <select id='day' className={inputClass}>
                            <option value=''>Select day</option>
                            <option value='monday'>Monday</option>
                            <option value='tuesday'>Tuesday</option>
                            <option value='wednesday'>Wednesday</option>
                            <option value='thursday'>Thursday</option>
                            <option value='friday'>Friday</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='subject' className='text-base font-medium text-[#1E1E1E]'>
                            Subject:
                        </label>
                        <select id='subject' className={inputClass}>
                            <option value=''>Select subject</option>
                            <option value='english'>English</option>
                            <option value='maths'>Mathematics</option>
                            <option value='science'>Science</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='teacher' className='text-base font-medium text-[#1E1E1E]'>
                            Teacher:
                        </label>
                        <select id='teacher' className={inputClass}>
                            <option value=''>Select teacher</option>
                            <option value='ravi'>Mr. Ravi</option>
                            <option value='anita'>Ms. Anitha</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='start-time' className='text-base font-medium text-[#1E1E1E]'>
                            Start Time:
                        </label>
                        <input type='time' id='start-time' className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='end-time' className='text-base font-medium text-[#1E1E1E]'>
                            End Time:
                        </label>
                        <input type='time' id='end-time' className={inputClass} />
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label htmlFor='notes' className='text-base font-medium text-[#1E1E1E]'>
                            Notes:
                        </label>
                        <input
                            type='text'
                            id='notes'
                            placeholder='Additional timetable instructions'
                            className={inputClass}
                        />
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    onClick={() => navigate('/principal/class-timetable')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Submit for Approval
                </button>
            </div>
        </section>
    )
}

export default CreateClassTimetable
