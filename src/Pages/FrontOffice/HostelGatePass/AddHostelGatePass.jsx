import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'lucide-react'
import {
    HOSTEL_OPTIONS,
    LEAVE_TYPES,
    addHostelGatePass,
    formatGatePassDate,
} from './hostelGatePassData'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full bg-white'

const AddHostelGatePass = () => {
    const navigate = useNavigate()
    const [outDate, setOutDate] = useState(new Date())
    const [returnDate, setReturnDate] = useState(new Date())
    const [formData, setFormData] = useState({
        studentId: '',
        studentName: '',
        classSection: '',
        gender: '',
        mobileNumber: '',
        city: '',
        hostel: '',
        leaveType: '',
        reason: '',
        outTime: '',
        returnTime: '',
    })

    const updateField = (key, value) => {
        setFormData((current) => ({ ...current, [key]: value }))
    }

    const handleSave = () => {
        addHostelGatePass({
            ...formData,
            outDate: formatGatePassDate(outDate),
            returnDate: formatGatePassDate(returnDate),
        })
        navigate('/front-office/hostel-gate-pass-list')
    }

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Hostel Gate Pass Information</h2>
                <p className='text-sm text-[#667085] mt-1'>
                    Create a hostel gate pass for boarding students leaving the campus.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='studentId' className='text-base font-medium text-[#1E1E1E]'>Student ID:</label>
                        <input
                            type='text'
                            id='studentId'
                            value={formData.studentId}
                            onChange={(e) => updateField('studentId', e.target.value)}
                            placeholder='STU-2024-1042'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='studentName' className='text-base font-medium text-[#1E1E1E]'>Student Name:</label>
                        <select
                            id='studentName'
                            value={formData.studentName}
                            onChange={(e) => updateField('studentName', e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select student</option>
                            <option value='Arjun Sharma'>Arjun Sharma</option>
                            <option value='John Milton'>John Milton</option>
                            <option value='Priya Nair'>Priya Nair</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='classSection' className='text-base font-medium text-[#1E1E1E]'>Class & Section:</label>
                        <select
                            id='classSection'
                            value={formData.classSection}
                            onChange={(e) => updateField('classSection', e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select class & section</option>
                            <option value='10 A'>10 A</option>
                            <option value='12 B'>12 B</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='gender' className='text-base font-medium text-[#1E1E1E]'>Gender:</label>
                        <select
                            id='gender'
                            value={formData.gender}
                            onChange={(e) => updateField('gender', e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='mobileNumber' className='text-base font-medium text-[#1E1E1E]'>Mobile Number:</label>
                        <input
                            type='tel'
                            id='mobileNumber'
                            value={formData.mobileNumber}
                            onChange={(e) => updateField('mobileNumber', e.target.value)}
                            placeholder='9944076993'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='city' className='text-base font-medium text-[#1E1E1E]'>City:</label>
                        <input
                            type='text'
                            id='city'
                            value={formData.city}
                            onChange={(e) => updateField('city', e.target.value)}
                            placeholder='Kochi'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='hostel' className='text-base font-medium text-[#1E1E1E]'>Hostel:</label>
                        <select
                            id='hostel'
                            value={formData.hostel}
                            onChange={(e) => updateField('hostel', e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select hostel</option>
                            {HOSTEL_OPTIONS.map((hostel) => (
                                <option key={hostel} value={hostel}>{hostel}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='leaveType' className='text-base font-medium text-[#1E1E1E]'>Leave Type:</label>
                        <select
                            id='leaveType'
                            value={formData.leaveType}
                            onChange={(e) => updateField('leaveType', e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select leave type</option>
                            {LEAVE_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-3'>
                        <label htmlFor='reason' className='text-base font-medium text-[#1E1E1E]'>Reason:</label>
                        <textarea
                            id='reason'
                            value={formData.reason}
                            onChange={(e) => updateField('reason', e.target.value)}
                            placeholder='Reason for hostel gate pass'
                            className={inputClass}
                            rows={2}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='outDate' className='text-base font-medium text-[#1E1E1E]'>Out Date:</label>
                        <div className='relative w-full'>
                            <DatePicker
                                id='outDate'
                                selected={outDate}
                                onChange={(date) => setOutDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 pr-10 focus:outline-none'
                            />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='outTime' className='text-base font-medium text-[#1E1E1E]'>Out Time:</label>
                        <input
                            type='text'
                            id='outTime'
                            value={formData.outTime}
                            onChange={(e) => updateField('outTime', e.target.value)}
                            placeholder='09:00 AM'
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='returnDate' className='text-base font-medium text-[#1E1E1E]'>Return Date:</label>
                        <div className='relative w-full'>
                            <DatePicker
                                id='returnDate'
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                                isClearable
                                showMonthYearDropdown
                                scrollableMonthYearDropdown
                                className='w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 pr-10 focus:outline-none'
                            />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='returnTime' className='text-base font-medium text-[#1E1E1E]'>Return Time:</label>
                        <input
                            type='text'
                            id='returnTime'
                            value={formData.returnTime}
                            onChange={(e) => updateField('returnTime', e.target.value)}
                            placeholder='06:00 PM'
                            className={inputClass}
                        />
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    onClick={() => navigate('/front-office/hostel-gate-pass-list')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    onClick={handleSave}
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Save Changes
                </button>
            </div>
        </section>
    )
}

export default AddHostelGatePass
