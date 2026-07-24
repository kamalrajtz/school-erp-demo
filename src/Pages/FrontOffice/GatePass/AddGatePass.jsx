import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'lucide-react'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const AddGatePass = () => {
    const [gatePassDate, setGatePassDate] = useState(new Date())

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Student Gate Pass Information</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='studentId' className='text-base font-medium text-[#1E1E1E]'>
                            Student ID:
                        </label>
                        <input
                            type='text'
                            id='studentId'
                            placeholder='STD-NO1845'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='studentName' className='text-base font-medium text-[#1E1E1E]'>
                            Student Name:
                        </label>
                        <select id='studentName' className={inputClass}>
                            <option value=''>Select student</option>
                            <option value='sandy-selva'>Sandy Selva</option>
                            <option value='john-milton'>John Milton</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='classSection' className='text-base font-medium text-[#1E1E1E]'>
                            Class & Section:
                        </label>
                        <select id='classSection' className={inputClass}>
                            <option value=''>Select class & section</option>
                            <option value='10-a'>10 A</option>
                            <option value='12-b'>12 B</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='gender' className='text-base font-medium text-[#1E1E1E]'>
                            Gender:
                        </label>
                        <select id='gender' className={inputClass}>
                            <option value=''>Select gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='mobileNumber' className='text-base font-medium text-[#1E1E1E]'>
                            Mobile Number:
                        </label>
                        <input
                            type='tel'
                            id='mobileNumber'
                            placeholder='9944076993'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='city' className='text-base font-medium text-[#1E1E1E]'>
                            City:
                        </label>
                        <input
                            type='text'
                            id='city'
                            placeholder='Pudukkottai'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label htmlFor='reason' className='text-base font-medium text-[#1E1E1E]'>
                            Reason:
                        </label>
                        <textarea
                            type='text'
                            id='reason'
                            placeholder='Going to Hospital'
                            className={inputClass}
                            rows={1}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='gatePassDate' className='text-base font-medium text-[#1E1E1E]'>
                            Date:
                        </label>
                        <div className='relative w-full'>
                            <DatePicker
                                id='gatePassDate'
                                selected={gatePassDate}
                                onChange={(date) => setGatePassDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 pr-10 focus:outline-none'
                            />
                            <Calendar
                                size={16}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='outTime' className='text-base font-medium text-[#1E1E1E]'>
                            Out Time:
                        </label>
                        <input
                            type='text'
                            id='outTime'
                            placeholder='10:00 AM'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='status' className='text-base font-medium text-[#1E1E1E]'>
                            Status:
                        </label>
                        <select id='status' className={inputClass}>
                            <option value=''>Select status</option>
                            <option value='pending'>Pending</option>
                            <option value='approved'>Approved</option>
                            <option value='rejected'>Rejected</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Save Changes
                </button>
            </div>
        </section>
    )
}

export default AddGatePass
