import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Star } from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'
import {
    MOCK_RATINGS,
    RATING_FIELDS_BY_TYPE,
    getEmployeeTypeLabel,
    getRatingValue,
} from './starRatingsData'

const MAX_STARS = 5

const StarRatingDisplay = ({ rating, size = 20 }) => {
    const clampedRating = Math.min(Math.max(rating, 0), MAX_STARS)

    return (
        <div className='flex items-center gap-1'>
            {Array.from({ length: MAX_STARS }, (_, index) => {
                const isFilled = index < clampedRating
                return (
                    <Star
                        key={index}
                        size={size}
                        className={
                            isFilled
                                ? 'fill-[#FFC107] text-[#FFC107]'
                                : 'fill-none text-[#D9D9D9]'
                        }
                    />
                )
            })}
            <span className='text-sm text-[#667085] ml-1'>
                ({clampedRating}/{MAX_STARS})
            </span>
        </div>
    )
}

const Section = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h2 className='text-xl font-semibold text-black mb-6'>{title}</h2>
        {children}
    </div>
)

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E] whitespace-pre-wrap wrap-break-word'>{value}</span>
    </div>
)

const RatingRow = ({ label, rating }) => (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-[#f2f4f7] last:border-b-0'>
        <span className='text-sm font-medium text-[#808080]'>{label}</span>
        <StarRatingDisplay rating={rating} />
    </div>
)

const ViewRatings = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const rating = MOCK_RATINGS.find((item) => item.ratingId === id) ?? MOCK_RATINGS[0]
    const ratingFields = RATING_FIELDS_BY_TYPE[rating.employeeType]

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/principal/star-ratings-list')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <img
                        src={mo_user}
                        alt=''
                        className='w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100'
                    />
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>{rating.employeeName}</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            <span className='font-medium text-[#1E1E1E]'>{getEmployeeTypeLabel(rating.employeeType)}</span>
                            {' · '}
                            <span className='text-[#808080]'>{rating.employeeId}</span>
                        </p>
                    </div>
                </div>
            </div>

            <Section title='Rating information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Rating ID' value={rating.ratingId} />
                    <Field label='Month' value={rating.month} />
                    <Field label='Employee type' value={getEmployeeTypeLabel(rating.employeeType)} />
                    <Field label='Employee name' value={rating.employeeName} />
                    <Field label='Employee ID' value={rating.employeeId} />
                    <Field label='Department' value={rating.department} />
                    <div className='lg:col-span-3'>
                        <Field label='Description' value={rating.description} />
                    </div>
                </div>
            </Section>

            <Section title='Star ratings'>
                <div className='max-w-xl'>
                    {ratingFields.map((field) => (
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

export default ViewRatings
