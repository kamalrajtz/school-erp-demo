import React, { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Star, Trophy } from 'lucide-react'
import noProfile from '../../../../assets/images/no-profile.png'
import StarRatingDisplay from '../StarRatings/Components/StarRatingDisplay'
import {
    getAvailableRatingMonths,
    getStarOfMonth,
    getRatingValue,
    RATING_FIELDS,
    STUDENTS_LIST,
} from '../StarRatings/starRatingsData'

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1 text-center sm:text-left'>
        <span className='text-sm font-medium text-[#808080]'>{label}</span>
        <span className='text-base font-semibold text-[#1E1E1E]'>{value}</span>
    </div>
)

const RatingCard = ({ label, rating }) => (
    <div className='rounded-xl border border-[#EEF0F6] bg-white p-4 text-center'>
        <p className='text-sm font-medium text-[#808080] mb-2'>{label}</p>
        <div className='flex justify-center'>
            <StarRatingDisplay rating={rating} size={18} showCount />
        </div>
    </div>
)

const StarOfMonth = () => {
    const months = useMemo(() => getAvailableRatingMonths(), [])
    const [selectedMonth, setSelectedMonth] = useState(months[0] ?? '')

    const starOfMonth = useMemo(
        () => getStarOfMonth(selectedMonth),
        [selectedMonth],
    )

    const student = STUDENTS_LIST.find((item) => item.id === starOfMonth?.studentId)

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                    <div>
                        <h2 className='text-xl font-semibold text-black'>Star Of Month</h2>
                        <p className='text-sm text-[#667085] mt-1'>
                            Highest rated student based on star ratings for the selected month.
                        </p>
                    </div>
                    <div className='flex flex-col gap-y-2 sm:min-w-[220px]'>
                        <label htmlFor='month-select' className='text-sm font-medium text-[#808080]'>Month</label>
                        <select
                            id='month-select'
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-2.5 w-full bg-white'
                        >
                            {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {!starOfMonth ? (
                <div className='bg-white rounded-2xl shadow-md p-12 text-center'>
                    <Trophy className='w-14 h-14 text-[#D9D9D9] mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-[#0C1E5B]'>No star rating found</h3>
                    <p className='text-sm text-[#667085] mt-2 max-w-md mx-auto'>
                        Add star ratings for students to display the Star Of Month winner.
                    </p>
                    <NavLink
                        to='/teacher/student-evaluation/star-ratings/add'
                        className='inline-flex mt-6 bg-[#515DEF] text-white text-sm px-6 py-2 rounded-md hover:opacity-90 transition-opacity'
                    >
                        Add Star Ratings
                    </NavLink>
                </div>
            ) : (
                <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
                    <div
                        className='px-6 py-8 flex flex-col items-center justify-center'
                        style={{ background: 'linear-gradient(135deg, #515DEF14 0%, #FFC10714 100%)' }}
                    >
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC10733] text-[#B8860B] text-sm font-semibold mb-4'>
                            <Trophy size={16} />
                            Star Of The Month — {starOfMonth.month}
                        </div>

                        <div className='relative inline-block mb-4'>
                            <img
                                src={student?.profile || noProfile}
                                alt={starOfMonth.studentName}
                                className='w-28 h-28 rounded-full object-cover ring-4 ring-[#FFC107] shadow-lg mx-auto'
                            />
                            <span className='absolute -bottom-1 -right-1 bg-[#515DEF] text-white rounded-full p-2 shadow-md'>
                                <Star size={18} className='fill-white' />
                            </span>
                        </div>

                        <h3 className='text-2xl md:text-3xl font-bold text-[#0C1E5B]'>{starOfMonth.studentName}</h3>
                        <p className='text-sm text-[#667085] mt-2'>
                            Roll No: {starOfMonth.rollNumber} · Class {starOfMonth.className} - Section {starOfMonth.section}
                        </p>

                        <div className='inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-xl bg-white border border-[#FFC10766] shadow-sm'>
                            <Star size={20} className='fill-[#FFC107] text-[#FFC107]' />
                            <span className='text-lg font-bold text-[#0C1E5B]'>{starOfMonth.overallPoints} Points</span>
                            <span className='text-sm text-[#808080]'>Overall Rating</span>
                        </div>
                    </div>

                    <div className='p-6 space-y-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <Field label='Rating ID' value={starOfMonth.ratingId} />
                            <Field label='Month' value={starOfMonth.month} />
                            <Field label='Roll Number' value={starOfMonth.rollNumber} />
                            <Field label='Class & Section' value={`${starOfMonth.className} - ${starOfMonth.section}`} />
                        </div>

                        <div>
                            <h4 className='text-base font-semibold text-[#0C1E5B] mb-4'>Rating Breakdown</h4>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                                {RATING_FIELDS.map((field) => (
                                    <RatingCard
                                        key={field.key}
                                        label={field.label}
                                        rating={getRatingValue(starOfMonth, field.key)}
                                    />
                                ))}
                            </div>
                        </div>

                        {starOfMonth.description && (
                            <div className='rounded-xl bg-[#FAFBFD] border border-[#EEF0F6] p-4'>
                                <p className='text-sm font-medium text-[#808080] mb-1'>Teacher Remarks</p>
                                <p className='text-sm text-[#1E1E1E] leading-relaxed'>{starOfMonth.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default StarOfMonth
