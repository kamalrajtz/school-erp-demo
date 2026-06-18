import React, { useMemo, useState } from 'react'
import StarRatingInput from './Components/StarRatingInput'
import {
    EMPLOYEE_TYPE_OPTIONS,
    RATING_FIELDS_BY_TYPE,
    computeOverallPoints,
} from './starRatingsData'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const selectClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full bg-white'

const TEACHER_OPTIONS = [
    { id: 'TEA-1001', name: 'Mr. Ravi Kumar', department: 'Mathematics' },
    { id: 'TEA-1002', name: 'Ms. Anitha Verma', department: 'English' },
    { id: 'TEA-1003', name: 'Rajesh Kumar', department: 'Science' },
]

const COORDINATOR_OPTIONS = [
    { id: 'COO-1001', name: 'Sandy Selva', department: 'Science' },
    { id: 'COO-1002', name: 'John Milton', department: 'Mathematics' },
    { id: 'COO-1003', name: 'Priya Nair', department: 'English' },
]

const AddRatings = () => {
    const [employeeType, setEmployeeType] = useState('teacher')
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('')
    const [month, setMonth] = useState('')
    const [description, setDescription] = useState('')
    const [ratings, setRatings] = useState({})

    const employeeOptions = employeeType === 'teacher' ? TEACHER_OPTIONS : COORDINATOR_OPTIONS
    const ratingFields = RATING_FIELDS_BY_TYPE[employeeType]
    const selectedEmployee = employeeOptions.find((emp) => emp.id === selectedEmployeeId)

    const overallPoints = useMemo(
        () => computeOverallPoints(ratings),
        [ratings],
    )

    const handleEmployeeTypeChange = (type) => {
        setEmployeeType(type)
        setSelectedEmployeeId('')
        setRatings({})
    }

    const handleRatingChange = (key, value) => {
        setRatings((prev) => ({ ...prev, [key]: value }))
    }

    const nameLabel = employeeType === 'teacher' ? 'Teacher Name' : 'Co-ordinator Name'
    const idLabel = employeeType === 'teacher' ? 'Teacher ID' : 'Co-ordinator ID'

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Add Ratings Information</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="employee-type" className='text-base font-medium text-[#1E1E1E]'>Employee Type:</label>
                        <select
                            id="employee-type"
                            value={employeeType}
                            onChange={(e) => handleEmployeeTypeChange(e.target.value)}
                            className={selectClass}
                        >
                            {EMPLOYEE_TYPE_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="rating-id" className='text-base font-medium text-[#1E1E1E]'>Rating ID:</label>
                        <input type="text" id="rating-id" placeholder="Auto-generated" className={inputClass} readOnly />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="month" className='text-base font-medium text-[#1E1E1E]'>Month:</label>
                        <input
                            type="text"
                            id="month"
                            placeholder="e.g. May 2026"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="employee-select" className='text-base font-medium text-[#1E1E1E]'>{nameLabel}:</label>
                        <select
                            id="employee-select"
                            value={selectedEmployeeId}
                            onChange={(e) => setSelectedEmployeeId(e.target.value)}
                            className={selectClass}
                        >
                            <option value="">Select {employeeType === 'teacher' ? 'teacher' : 'co-ordinator'}</option>
                            {employeeOptions.map((emp) => (
                                <option key={emp.id} value={emp.id}>{emp.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="employee-id" className='text-base font-medium text-[#1E1E1E]'>{idLabel}:</label>
                        <input
                            type="text"
                            id="employee-id"
                            value={selectedEmployee?.id ?? ''}
                            readOnly
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="department" className='text-base font-medium text-[#1E1E1E]'>Department:</label>
                        <input
                            type="text"
                            id="department"
                            value={selectedEmployee?.department ?? ''}
                            readOnly
                            className={inputClass}
                        />
                    </div>

                    {ratingFields.map((field) => (
                        <div key={field.key} className='flex flex-col gap-y-2'>
                            <label className='text-base font-medium text-[#1E1E1E]'>{field.label}:</label>
                            <div className='border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                                <StarRatingInput
                                    value={ratings[field.key] ?? 0}
                                    onChange={(value) => handleRatingChange(field.key, value)}
                                />
                            </div>
                        </div>
                    ))}

                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="overall-rating" className='text-base font-medium text-[#1E1E1E]'>Overall Rating:</label>
                        <input
                            type="text"
                            id="overall-rating"
                            value={overallPoints > 0 ? `${overallPoints} Points` : ''}
                            readOnly
                            placeholder="Calculated from star ratings"
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-2'>
                        <label htmlFor="description" className='text-base font-medium text-[#1E1E1E]'>Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Brief remarks about performance this month"
                            className={inputClass}
                        />
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button type='button' className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Discard Changes
                </button>
                <button type='button' className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Save Changes
                </button>
            </div>
        </section>
    )
}

export default AddRatings
