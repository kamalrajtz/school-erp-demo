import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import pdf_icon from '../../../assets/images/pdf-icon.png'
import { getBroadcastById, priorityBadgeColor, statusBadgeColor } from './broadcastData'

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

const ViewBroadcast = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const broadcast = getBroadcastById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button type='button' onClick={() => navigate('/canteen-manager/broadcast')} className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            {!broadcast ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Broadcast not found or could not be loaded.
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                            <div>
                                <h1 className='text-2xl font-semibold text-black'>{broadcast.title}</h1>
                                <p className='text-sm text-[#667085] mt-1'>
                                    {broadcast.broadcastId} · {broadcast.category}
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${priorityBadgeColor[broadcast.priority]}`}>{broadcast.priority}</span>
                                <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${statusBadgeColor[broadcast.status]}`}>{broadcast.status}</span>
                            </div>
                        </div>
                    </div>

                    <Section title='Basic Information'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Broadcast ID' value={broadcast.broadcastId} />
                            <Field label='Broadcast Title' value={broadcast.title} />
                            <Field label='Category' value={broadcast.category} />
                            <Field label='Sent By' value={broadcast.sentBy} />
                            <Field label='Publish Date' value={broadcast.publishDate} />
                            <Field label='Expiry Date' value={broadcast.expiryDate} />
                            <div className='lg:col-span-3'>
                                <Field label='Message' value={broadcast.message} />
                            </div>
                        </div>
                    </Section>

                    <Section title='Audience & Delivery'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Audience' value={broadcast.audience} />
                            {broadcast.audienceDetail && (
                                <Field label='Audience Detail' value={broadcast.audienceDetail} />
                            )}
                            <Field label='Schedule Type' value={broadcast.scheduleType} />
                            <div className='lg:col-span-3'>
                                <Field label='Delivery Channels' value={broadcast.deliveryChannels.join(', ')} />
                            </div>
                        </div>
                    </Section>

                    {broadcast.attachments.length > 0 && (
                        <Section title='Attachments'>
                            <div className='flex flex-col gap-y-3'>
                                {broadcast.attachments.map((file) => (
                                    <div key={file.name} className='flex items-center gap-x-2 text-sm text-[#1E1E1E]'>
                                        {file.type === 'PDF' || file.type === 'Document' ? (
                                            <img src={pdf_icon} alt='file-icon' className='w-6 h-6' />
                                        ) : (
                                            <span className='w-6 h-6 flex items-center justify-center bg-[#EDEEF5] rounded text-xs font-medium text-[#515DEF]'>IMG</span>
                                        )}
                                        <span>{file.name}</span>
                                        <span className='text-xs text-[#667085]'>({file.type})</span>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}
                </>
            )}
        </section>
    )
}

export default ViewBroadcast
