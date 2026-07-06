import React, { useState } from 'react'
import { Download } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import {
    JOB_OPENINGS,
    DEPARTMENTS,
    JOB_STATUSES,
    jobStatusBadgeColor,
} from './recruitmentData'

const JobOpenings = () => {
    const [exportModal, setExportModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <p className='text-sm text-[#667085] mb-4'>Manage open positions and hiring requirements.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' placeholder='Job title, ID...' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Department</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            {DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Status</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            {JOB_STATUSES.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Job Openings List</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-x-2 cursor-pointer'>
                        <Download size={16} /> Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Job Title</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Department</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>No. of Positions</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Status</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Closing Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {JOB_OPENINGS.map((job) => (
                                <tr key={job.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg max-w-[220px] truncate' title={job.jobTitle}>{job.jobTitle}</td>
                                    <td className='px-2 py-4'>{job.department}</td>
                                    <td className='px-2 py-4 text-center'>{job.positions}</td>
                                    <td className='px-2 py-4'>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${jobStatusBadgeColor[job.status]}`}>{job.status}</span>
                                    </td>
                                    <td className='px-2 py-4 whitespace-nowrap rounded-e-lg'>{job.closingDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to {JOB_OPENINGS.length} of {JOB_OPENINGS.length} entries</p>
                <div className='flex gap-x-2'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] rounded-full cursor-pointer'>1</button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default JobOpenings
