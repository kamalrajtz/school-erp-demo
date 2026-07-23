import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import pdf_icon from '../../../assets/images/pdf-icon.png'
import { getAnnouncementById, priorityBadgeColor, statusBadgeColor } from './announcementData'

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

const ViewAnnouncement = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const announcement = getAnnouncementById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button type='button' onClick={() => navigate('/canteen-manager/broadcast')} className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            {!announcement ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Announcement not found or could not be loaded.
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                            <div>
                                <h1 className='text-2xl font-semibold text-black'>{announcement.title}</h1>
                                <p className='text-sm text-[#667085] mt-1'>
                                    {announcement.announcementId} · {announcement.category}
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${priorityBadgeColor[announcement.priority]}`}>{announcement.priority}</span>
                                <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${statusBadgeColor[announcement.status]}`}>{announcement.status}</span>
                            </div>
                        </div>
                    </div>

                    <Section title='Basic Information'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Announcement ID' value={announcement.announcementId} />
                            <Field label='Announcement Title' value={announcement.title} />
                            <Field label='Category' value={announcement.category} />
                            <Field label='Sent By' value={announcement.sentBy} />
                            <Field label='Publish Date' value={announcement.publishDate} />
                            <Field label='Expiry Date' value={announcement.expiryDate} />
                            <div className='lg:col-span-3'>
                                <Field label='Message' value={announcement.message} />
                            </div>
                        </div>
                    </Section>

                    <Section title='Audience & Delivery'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Audience' value={announcement.audience} />
                            {announcement.audienceDetail && (
                                <Field label='Audience Detail' value={announcement.audienceDetail} />
                            )}
                            <Field label='Schedule Type' value={announcement.scheduleType} />
                            <div className='lg:col-span-3'>
                                <Field label='Delivery Channels' value={announcement.deliveryChannels.join(', ')} />
                            </div>
                        </div>
                    </Section>

                    {announcement.attachments.length > 0 && (
                        <Section title='Attachments'>
                            <div className='flex flex-col gap-y-3'>
                                {announcement.attachments.map((file) => (
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

export default ViewAnnouncement
