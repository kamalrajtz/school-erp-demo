import React, { useMemo, useState } from 'react'
import StarRatingInput from './StarRatingInput'
import {
    RATING_FIELDS,
    STUDENTS_LIST,
    CLASSES,
    SECTIONS,
    computeOverallPoints,
} from '../starRatingsData'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'

const selectClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full bg-white'

const StarRatingForm = ({ onSubmit }) => {
    const [rollNumber, setRollNumber] = useState('')
    const [className, setClassName] = useState('')
    const [section, setSection] = useState('')
    const [studentName, setStudentName] = useState('')
    const [studentId, setStudentId] = useState('')
    const [description, setDescription] = useState('')
    const [ratings, setRatings] = useState({})

    const overallPoints = useMemo(() => computeOverallPoints(ratings), [ratings])

    const handleRollNumberChange = (value) => {
        setRollNumber(value)
        const student = STUDENTS_LIST.find((item) => item.rollNumber === value)
        if (student) {
            setStudentName(student.name)
            setClassName(student.className)
            setSection(student.section)
            setStudentId(student.id)
        } else {
            setStudentName('')
            setClassName('')
            setSection('')
            setStudentId('')
        }
    }

    const handleRatingChange = (key, value) => {
        setRatings((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const missingRating = RATING_FIELDS.some((field) => !ratings[field.key])
        if (missingRating) return

        onSubmit({
            rollNumber,
            studentName,
            studentId,
            className,
            section,
            attendanceRating: ratings.attendance ?? 0,
            academicRating: ratings.academic ?? 0,
            activityRating: ratings.activity ?? 0,
            disciplineRating: ratings.discipline ?? 0,
            description,
        })
    }

    return (
        <form id='star-rating-form' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-8 mt-2'>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='roll-number' className='text-base font-medium text-[#1E1E1E]'>Roll Number:</label>
                    <select
                        id='roll-number'
                        required
                        value={rollNumber}
                        onChange={(e) => handleRollNumberChange(e.target.value)}
                        className={selectClass}
                    >
                        <option value=''>--Select--</option>
                        {STUDENTS_LIST.map((student) => (
                            <option key={student.id} value={student.rollNumber}>{student.rollNumber}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='student-name' className='text-base font-medium text-[#1E1E1E]'>Student Name:</label>
                    <input type='text' id='student-name' value={studentName} readOnly placeholder='Auto-filled from roll number' className={inputClass} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='class-name' className='text-base font-medium text-[#1E1E1E]'>Class:</label>
                    <select
                        id='class-name'
                        required
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        className={selectClass}
                    >
                        <option value=''>--Select--</option>
                        {CLASSES.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='section' className='text-base font-medium text-[#1E1E1E]'>Section:</label>
                    <select
                        id='section'
                        required
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        className={selectClass}
                    >
                        <option value=''>--Select--</option>
                        {SECTIONS.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                {RATING_FIELDS.map((field) => (
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
                    <label htmlFor='overall-rating' className='text-base font-medium text-[#1E1E1E]'>Overall Rating:</label>
                    <input
                        type='text'
                        id='overall-rating'
                        value={overallPoints > 0 ? `${overallPoints} Points` : ''}
                        readOnly
                        placeholder='Calculated from star ratings'
                        className={inputClass}
                    />
                </div>
                <div className='flex flex-col gap-y-2 lg:col-span-2'>
                    <label htmlFor='description' className='text-base font-medium text-[#1E1E1E]'>Description:</label>
                    <textarea
                        id='description'
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Brief remarks about the student performance this month'
                        rows={3}
                        className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full min-h-[80px] resize-y'
                    />
                </div>
            </div>
        </form>
    )
}

export default StarRatingForm
