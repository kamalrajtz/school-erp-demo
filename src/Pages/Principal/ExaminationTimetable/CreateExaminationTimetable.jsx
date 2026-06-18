import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'lucide-react'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const CreateExaminationTimetable = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Create Examination Timetable</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='exam-id' className='text-base font-medium text-[#1E1E1E]'>
                            Exam ID:
                        </label>
                        <input
                            type='text'
                            id='exam-id'
                            placeholder='EXM001'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='exam-name' className='text-base font-medium text-[#1E1E1E]'>
                            Exam Name:
                        </label>
                        <input
                            type='text'
                            id='exam-name'
                            placeholder='Mid Term Examination'
                            className={inputClass}
                        />
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
                        <label htmlFor='teacher-name' className='text-base font-medium text-[#1E1E1E]'>
                            Teacher Name:
                        </label>
                        <select id='teacher-name' className={inputClass}>
                            <option value=''>Select teacher</option>
                            <option value='ravi'>Mr. Ravi</option>
                            <option value='anita'>Ms. Anitha</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='status' className='text-base font-medium text-[#1E1E1E]'>
                            Status:
                        </label>
                        <select id='status' className={inputClass}>
                            <option value=''>Select status</option>
                            <option value='draft'>Draft</option>
                            <option value='published'>Published</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='start-date' className='text-base font-medium text-[#1E1E1E]'>
                            Start Date:
                        </label>
                        <div className='relative w-full'>
                            <DatePicker
                                id='start-date'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                dateFormat='dd/MM/yyyy'
                                className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none'
                            />
                            <Calendar
                                size={16}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='end-date' className='text-base font-medium text-[#1E1E1E]'>
                            End Date:
                        </label>
                        <div className='relative w-full'>
                            <DatePicker
                                id='end-date'
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                dateFormat='dd/MM/yyyy'
                                className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 pr-10 focus:outline-none'
                            />
                            <Calendar
                                size={16}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label htmlFor='description' className='text-base font-medium text-[#1E1E1E]'>
                            Description:
                        </label>
                        <input
                            type='text'
                            id='description'
                            placeholder='Examination timetable notes or instructions'
                            className={inputClass}
                        />
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    onClick={() => navigate('/principal/examination-timetable')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Save Timetable
                </button>
            </div>
        </section>
    )
}

export default CreateExaminationTimetable
