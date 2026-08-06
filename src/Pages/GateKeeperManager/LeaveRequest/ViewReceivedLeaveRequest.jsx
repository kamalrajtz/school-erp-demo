import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import {
    getLeaveRequestById,
    statusBadgeColor,
    updateLeaveRequestStatus,
} from '../../../Common/GateKeeperLeaveRequest/gateKeeperLeaveRequestData'

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

const ViewReceivedLeaveRequest = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [request, setRequest] = useState(() => getLeaveRequestById(id))
    const [managerRemarks, setManagerRemarks] = useState(request?.managerRemarks ?? '')

    const handleApprove = () => {
        const updated = updateLeaveRequestStatus(id, 'Approved', managerRemarks)
        if (updated) setRequest(updated)
    }

    const handleReject = () => {
        const updated = updateLeaveRequestStatus(id, 'Rejected', managerRemarks)
        if (updated) setRequest(updated)
    }

    return (
        <section className='space-y-6'>
            <button type='button' onClick={() => navigate('/gatekeeper-manager/leave-request/received')} className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                <ArrowLeft size={18} />
                Back to list
            </button>

            {!request ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>Leave request not found.</div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex flex-wrap items-center gap-3'>
                            <h1 className='text-2xl font-semibold text-black'>{request.leaveRequestId}</h1>
                            <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${statusBadgeColor[request.status]}`}>{request.status}</span>
                        </div>
                        <p className='text-sm text-[#667085] mt-2'>
                            {request.gateKeeperName} · {request.employeeId} · Gate Keeper
                        </p>
                    </div>

                    <Section title='Leave Request Information'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Leave Request ID' value={request.leaveRequestId} />
                            <Field label='Employee ID' value={request.employeeId} />
                            <Field label='Gate Keeper Name' value={request.gateKeeperName} />
                            <Field label='Leave Type' value={request.leaveType} />
                            <Field label='From Date' value={request.fromDate} />
                            <Field label='To Date' value={request.toDate} />
                            <Field label='Total Days' value={String(request.totalDays)} />
                            <Field label='Request Date' value={request.appliedDate} />
                            <div className='lg:col-span-3'><Field label='Reason' value={request.reason} /></div>
                        </div>
                    </Section>

                    {request.status === 'Pending' ? (
                        <Section title='Manager Decision'>
                            <div className='space-y-4'>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor='manager-remarks' className='text-base font-medium text-[#808080]'>Manager Remarks</label>
                                    <textarea
                                        id='manager-remarks'
                                        rows={3}
                                        value={managerRemarks}
                                        onChange={(e) => setManagerRemarks(e.target.value)}
                                        placeholder='Approval or rejection remarks'
                                        className='text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'
                                    />
                                </div>
                                <div className='flex sm:justify-end justify-center gap-x-4'>
                                    <button type='button' onClick={handleReject} className='bg-white text-[#FF0000] text-sm px-8 py-2 rounded-md border border-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-200 cursor-pointer md:w-auto w-full'>
                                        Reject
                                    </button>
                                    <button type='button' onClick={handleApprove} className='bg-[#4CAF50] text-white text-sm px-8 py-2 rounded-md border border-[#4CAF50] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </Section>
                    ) : null}

                    {request.managerRemarks ? (
                        <Section title='Manager Remarks'>
                            <Field label='Remarks' value={request.managerRemarks} />
                        </Section>
                    ) : null}
                </>
            )}
        </section>
    )
}

export default ViewReceivedLeaveRequest
