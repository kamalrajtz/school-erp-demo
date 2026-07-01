import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import noProfile from '../../../../assets/images/no-profile.png'
import StarRatingDisplay from './Components/StarRatingDisplay'
import { getStarRatingById, RATING_FIELDS, getRatingValue, STUDENTS_LIST } from './starRatingsData'

const Section = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h2 className='text-xl font-semibold text-black mb-6'>{title}</h2>
        {children}
    </div>
)

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E] whitespace-pre-wrap wrap-break-word'>{value || '—'}</span>
    </div>
)

const RatingRow = ({ label, rating }) => (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-[#f2f4f7] last:border-b-0'>
        <span className='text-sm font-medium text-[#808080]'>{label}</span>
        <StarRatingDisplay rating={rating} size={20} showCount />
    </div>
)

const ViewStarRating = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const rating = getStarRatingById(id)
    const student = STUDENTS_LIST.find((item) => item.id === rating?.studentId)

    if (!rating) {
        return (
            <section className='space-y-6'>
                <button
                    type='button'
                    onClick={() => navigate('/teacher/student-evaluation/star-ratings')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Star rating record not found.
                </div>
            </section>
        )
    }

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/teacher/student-evaluation/star-ratings')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <img
                        src={student?.profile || noProfile}
                        alt=''
                        className='w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100'
                    />
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>{rating.studentName}</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            Roll No: {rating.rollNumber}
                            {' · '}
                            Class {rating.className} - Section {rating.section}
                        </p>
                    </div>
                </div>
            </div>

            <Section title='Star ratings information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Rating ID' value={rating.ratingId} />
                    <Field label='Month' value={rating.month} />
                    <Field label='Roll Number' value={rating.rollNumber} />
                    <Field label='Student Name' value={rating.studentName} />
                    <Field label='Class' value={rating.className} />
                    <Field label='Section' value={rating.section} />
                    <div className='lg:col-span-3'>
                        <Field label='Description' value={rating.description} />
                    </div>
                </div>
            </Section>

            <Section title='Rating details'>
                <div className='max-w-xl'>
                    {RATING_FIELDS.map((field) => (
                        <RatingRow
                            key={field.key}
                            label={field.label}
                            rating={getRatingValue(rating, field.key)}
                        />
                    ))}
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 mt-2 border-t border-[#EDEEF5]'>
                        <span className='text-base font-semibold text-[#1E1E1E]'>Overall Rating</span>
                        <span className='text-lg font-semibold text-[#0C1E5B]'>{rating.overallPoints} Points</span>
                    </div>
                </div>
            </Section>
        </section>
    )
}

export default ViewStarRating
