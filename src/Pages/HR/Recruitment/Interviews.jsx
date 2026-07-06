import React, { useState } from 'react'
import { Download } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import {
    INTERVIEWS,
    INTERVIEW_STATUSES,
    interviewStatusBadgeColor,
    recommendationBadgeColor,
} from './recruitmentData'

const Interviews = () => {
    const [exportModal, setExportModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <p className='text-sm text-[#667085] mb-4'>Schedule and record interview outcomes.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' placeholder='Candidate, panel...' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Status</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            {INTERVIEW_STATUSES.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Interviews List</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-x-2 cursor-pointer'>
                        <Download size={16} /> Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Interview Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Candidate</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Position</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Panel</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Status</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Feedback</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Recommendation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {INTERVIEWS.map((interview) => (
                                <tr key={interview.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className='px-2 py-4 whitespace-nowrap rounded-s-lg'>{interview.interviewDate}</td>
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E] whitespace-nowrap'>{interview.candidateName}</td>
                                    <td className='px-2 py-4 max-w-[160px] truncate' title={interview.position}>{interview.position}</td>
                                    <td className='px-2 py-4 max-w-[180px] truncate' title={interview.panel}>{interview.panel}</td>
                                    <td className='px-2 py-4'>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${interviewStatusBadgeColor[interview.status]}`}>
                                            {interview.status}
                                        </span>
                                    </td>
                                    <td className='px-2 py-4 max-w-[180px] truncate' title={interview.feedback}>{interview.feedback}</td>
                                    <td className='px-2 py-4 rounded-e-lg'>
                                        {interview.recommendation !== '—' ? (
                                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${recommendationBadgeColor[interview.recommendation]}`}>
                                                {interview.recommendation}
                                            </span>
                                        ) : (
                                            interview.recommendation
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Interviews
