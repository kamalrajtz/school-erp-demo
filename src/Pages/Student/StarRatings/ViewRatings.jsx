import React from 'react'
import { Star } from 'lucide-react'
import mo_user from '../../../assets/images/no-profile.png'

const MAX_STARS = 5

const MOCK_STUDENT = {
    name: 'Rahul Kumar Sharma',
    class: 'Class 10',
    section: 'Section A',
    classTeacher: 'Mrs. Priya Nair',
    rollNumber: '24',
}

const MOCK_RATINGS = [
    {
        id: 1,
        teacherName: 'Mr. Ravi Kumar',
        subject: 'Mathematics',
        attendanceRating: 4,
        taskRating: 5,
        disciplineRating: 4,
        overallPoints: 190,
    },
    {
        id: 2,
        teacherName: 'Ms. Anitha Verma',
        subject: 'English',
        attendanceRating: 5,
        taskRating: 4,
        disciplineRating: 5,
        overallPoints: 195,
    },
    {
        id: 3,
        teacherName: 'Dr. Suresh Menon',
        subject: 'Science',
        attendanceRating: 3,
        taskRating: 4,
        disciplineRating: 3,
        overallPoints: 165,
    },
    {
        id: 4,
        teacherName: 'Mr. Karthik Raj',
        subject: 'Social Science',
        attendanceRating: 4,
        taskRating: 3,
        disciplineRating: 4,
        overallPoints: 175,
    },
]

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

const InfoField = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E]'>{value}</span>
    </div>
)

const RatingRow = ({ label, children }) => (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-[#f2f4f7] last:border-b-0'>
        <span className='text-sm font-medium text-[#808080]'>{label}</span>
        {children}
    </div>
)

const ViewRatings = () => {
    const student = MOCK_STUDENT

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black mb-6'>Student Information</h2>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-6'>
                    <img
                        src={mo_user}
                        alt=''
                        className='w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100'
                    />
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>{student.name}</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            Roll No: {student.rollNumber}
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <InfoField label='Student Name' value={student.name} />
                    <InfoField
                        label='Class & Section'
                        value={`${student.class} · ${student.section}`}
                    />
                    <InfoField label='Class Teacher' value={student.classTeacher} />
                    <InfoField label='Roll Number' value={student.rollNumber} />
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black mb-6'>Rating Details</h2>
                <p className='text-sm text-[#667085] mb-6'>
                    Ratings given by subject teachers for the current term.
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {MOCK_RATINGS.map((rating) => (
                        <div
                            key={rating.id}
                            className='border border-[#EDEEF5] rounded-xl p-4 hover:shadow-sm transition-shadow'
                        >
                            <div className='mb-4 pb-4 border-b border-[#EDEEF5]'>
                                <h3 className='text-lg font-semibold text-[#1E1E1E]'>
                                    {rating.teacherName}
                                </h3>
                                <p className='text-sm text-[#515DEF] font-medium mt-1'>
                                    {rating.subject}
                                </p>
                            </div>

                            <RatingRow label='Attendance Rating'>
                                <StarRatingDisplay rating={rating.attendanceRating} />
                            </RatingRow>
                            <RatingRow label='Task Rating'>
                                <StarRatingDisplay rating={rating.taskRating} />
                            </RatingRow>
                            <RatingRow label='Discipline Rating'>
                                <StarRatingDisplay rating={rating.disciplineRating} />
                            </RatingRow>
                            <RatingRow label='Overall Points'>
                                <span className='text-sm font-semibold text-[#0C1E5B]'>
                                    {rating.overallPoints} Points
                                </span>
                            </RatingRow>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ViewRatings
