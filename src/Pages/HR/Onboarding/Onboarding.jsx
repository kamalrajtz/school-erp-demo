import React, { useState } from 'react'
import { Download } from 'lucide-react'
import ExportModal from '../../../Common/CommonComponents/ExportModal'
import { ONBOARDING_RECORDS, onboardingStatusBadgeColor } from './onboardingData'

const Onboarding = () => {
    const [exportModal, setExportModal] = useState(false)
    const [selectedId, setSelectedId] = useState(ONBOARDING_RECORDS[0]?.id)
    const selected = ONBOARDING_RECORDS.find((record) => record.id === selectedId) ?? ONBOARDING_RECORDS[0]

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <p className='text-sm text-[#667085] mb-4'>
                    Track onboarding checklist progress for new joiners from offer to probation.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Search</label>
                        <input type='text' placeholder='Employee name, ID...' className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Overall Status</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                            <option value=''>All</option>
                            <option value='Pending'>Pending</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Completed'>Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex justify-between items-center sm:flex-row flex-col gap-y-2 mb-4'>
                    <h2 className='text-xl font-medium text-black'>Onboarding Records</h2>
                    <button type='button' onClick={() => setExportModal(true)} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-x-2 cursor-pointer'>
                        <Download size={16} /> Export
                    </button>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Onboarding ID</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Employee Name</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Department</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Joining Date</th>
                                <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Overall Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ONBOARDING_RECORDS.map((record) => (
                                <tr
                                    key={record.id}
                                    onClick={() => setSelectedId(record.id)}
                                    className={`border-b text-[#667085] border-[#f2f4f7] cursor-pointer transition-colors ${
                                        selectedId === record.id ? 'bg-[#515DEF]/5' : 'hover:bg-[#f2f4f7]'
                                    }`}
                                >
                                    <td className='px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg'>{record.id}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{record.employeeName}</td>
                                    <td className='px-2 py-4'>{record.department}</td>
                                    <td className='px-2 py-4 whitespace-nowrap'>{record.joiningDate}</td>
                                    <td className='px-2 py-4 rounded-e-lg'>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${onboardingStatusBadgeColor[record.overallStatus]}`}>
                                            {record.overallStatus}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selected && (
                <div className='bg-white rounded-2xl shadow-md p-4'>
                    <div className='flex flex-wrap items-center justify-between gap-3 mb-4'>
                        <div>
                            <h3 className='text-lg font-semibold text-black'>Onboarding Checklist</h3>
                            <p className='text-sm text-[#667085] mt-1'>
                                {selected.employeeName} · {selected.department} · Joining {selected.joiningDate}
                            </p>
                        </div>
                        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${onboardingStatusBadgeColor[selected.overallStatus]}`}>
                            {selected.overallStatus}
                        </span>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-left'>
                            <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                                <tr>
                                    <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>Checklist Item</th>
                                    <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selected.checklist.map((item) => (
                                    <tr key={item.item} className='border-b text-[#667085] border-[#f2f4f7]'>
                                        <td className='px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg'>{item.item}</td>
                                        <td className='px-2 py-4 rounded-e-lg'>
                                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${onboardingStatusBadgeColor[item.status]}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </section>
    )
}

export default Onboarding
