import React, { useState } from 'react'
import { Download } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import {
    PERFORMANCE_REVIEWS,
    REVIEW_PERIODS,
    performanceRatingBadgeColor,
} from './performanceData'

const Performance = () => {
    const [exportModal, setExportModal] = useState(false)
    const [expandedId, setExpandedId] = useState(null)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <p className='text-sm text-[#667085] mb-4'>
                    Employee performance reviews with ratings, goals, and development plans.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' placeholder='Employee name, reviewer...' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Review Period</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            {REVIEW_PERIODS.map((period) => (
                                <option key={period} value={period}>{period}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Performance Reviews</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-x-2 cursor-pointer'>
                        <Download size={16} /> Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Review Period</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Employee</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Reviewer</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Rating</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Comments</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Goals</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Development Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PERFORMANCE_REVIEWS.map((review) => (
                                <React.Fragment key={review.id}>
                                    <tr
                                        onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                                        className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7] cursor-pointer'
                                    >
                                        <td className='px-2 py-4 whitespace-nowrap rounded-s-lg'>{review.reviewPeriod}</td>
                                        <td className='px-2 py-4'>
                                            <div className='font-medium text-[#1E1E1E]'>{review.employee}</div>
                                            <div className='text-xs font-normal'>{review.employeeId}</div>
                                        </td>
                                        <td className='px-2 py-4 max-w-[160px] truncate' title={review.reviewer}>{review.reviewer}</td>
                                        <td className='px-2 py-4'>
                                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${performanceRatingBadgeColor(review.rating)}`}>
                                                {review.rating} / 5
                                            </span>
                                        </td>
                                        <td className='px-2 py-4 max-w-[200px] truncate' title={review.comments}>{review.comments}</td>
                                        <td className='px-2 py-4 max-w-[200px] truncate' title={review.goals}>{review.goals}</td>
                                        <td className='px-2 py-4 max-w-[200px] truncate rounded-e-lg' title={review.developmentPlan}>{review.developmentPlan}</td>
                                    </tr>
                                    {expandedId === review.id && (
                                        <tr className='bg-[#515DEF]/5 border-b border-[#f2f4f7]'>
                                            <td colSpan={7} className='px-4 py-4 text-sm text-[#667085]'>
                                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                                    <div>
                                                        <p className='text-xs font-semibold text-[#0C1E5B] uppercase mb-1'>Comments</p>
                                                        <p>{review.comments}</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-xs font-semibold text-[#0C1E5B] uppercase mb-1'>Goals</p>
                                                        <p>{review.goals}</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-xs font-semibold text-[#0C1E5B] uppercase mb-1'>Development Plan</p>
                                                        <p>{review.developmentPlan}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to {PERFORMANCE_REVIEWS.length} of {PERFORMANCE_REVIEWS.length} entries</p>
                <div className='flex gap-x-2'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] rounded-full cursor-pointer'>1</button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Performance
