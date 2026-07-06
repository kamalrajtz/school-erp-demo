import React, { useState } from 'react'
import { Download } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import { TRAINING_SESSIONS, DEPARTMENTS } from './trainingData'

const Training = () => {
    const [exportModal, setExportModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <p className='text-sm text-[#667085] mb-4'>
                    Schedule and track staff training sessions, attendance, and feedback.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' placeholder='Training name, trainer...' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
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
                        <label className='text-base font-medium text-[#808080]'>Date</label>
                        <input type='date' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-8'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Training Sessions</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-x-2 cursor-pointer'>
                        <Download size={16} /> Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Training Name</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Department</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Trainer</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Attendance</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TRAINING_SESSIONS.map((session) => (
                                <tr key={session.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg max-w-[220px] truncate' title={session.trainingName}>{session.trainingName}</td>
                                    <td className='px-2 py-4'>{session.department}</td>
                                    <td className='px-2 py-4 max-w-[180px] truncate' title={session.trainer}>{session.trainer}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{session.date}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{session.attendance}</td>
                                    <td className='px-2 py-4 rounded-e-lg max-w-[200px] truncate' title={session.feedback}>{session.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to {TRAINING_SESSIONS.length} of {TRAINING_SESSIONS.length} entries</p>
                <div className='flex gap-x-2'>
                    <button type='button' className='size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] rounded-full cursor-pointer'>1</button>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Training
