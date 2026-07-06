import React, { useState } from 'react'
import { Download } from 'lucide-react'
import pdf_icon from '../../../assets/images/pdf-icon.png'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import { CANDIDATES, candidateInterviewStatusBadgeColor } from './recruitmentData'

const Candidates = () => {
    const [exportModal, setExportModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <p className='text-sm text-[#667085] mb-4'>Track applicants through the recruitment pipeline.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' placeholder='Name, email, position...' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Interview Status</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            <option value='Applied'>Applied</option>
                            <option value='Screening'>Screening</option>
                            <option value='Interview'>Interview</option>
                            <option value='Selected'>Selected</option>
                            <option value='Rejected'>Rejected</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Candidates List</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-x-2 cursor-pointer'>
                        <Download size={16} /> Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Candidate Name</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Email</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Mobile</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Position Applied</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Resume</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Interview Status</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CANDIDATES.map((candidate) => (
                                <tr key={candidate.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg whitespace-nowrap'>{candidate.name}</td>
                                    <td className='px-2 py-4'>{candidate.email}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{candidate.mobile}</td>
                                    <td className='px-2 py-4 max-w-[180px] truncate' title={candidate.positionApplied}>{candidate.positionApplied}</td>
                                    <td className='px-2 py-4'>
                                        <span className='inline-flex items-center gap-1.5 text-[#515DEF]'>
                                            <img src={pdf_icon} alt='' className='w-4 h-4' />
                                            {candidate.resume}
                                        </span>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${candidateInterviewStatusBadgeColor[candidate.interviewStatus]}`}>
                                            {candidate.interviewStatus}
                                        </span>
                                    </td>
                                    <td className='px-2 py-4 max-w-[200px] truncate rounded-e-lg' title={candidate.remarks}>{candidate.remarks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to {CANDIDATES.length} of {CANDIDATES.length} entries</p>
                <div className='flex gap-x-2'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] rounded-full cursor-pointer'>1</button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Candidates
