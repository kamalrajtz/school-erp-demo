import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import pdf_icon from '../../../assets/images/pdf-icon.png'
import { getAnnouncementById } from './announcementData'

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
    const { id } = useParams()
    const navigate = useNavigate()
    const announcement = getAnnouncementById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/joint-director-audit/broadcast')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
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
                        <h1 className='text-2xl font-semibold text-black'>{announcement.title}</h1>
                        <p className='text-sm text-[#667085] mt-2'>
                            <span className='font-medium text-[#1E1E1E]'>Announcement ID: {announcement.id}</span>
                            {' · '}
                            <span>{announcement.category}</span>
                        </p>
                    </div>

                    <Section title='Announcement Details'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Announcement ID' value={announcement.id} />
                            <Field label='Announcement Title' value={announcement.title} />
                            <Field label='Announcement Category' value={announcement.category} />
                            <Field label='Sent By' value={announcement.sentBy} />
                            <Field label='Announcement Date' value={announcement.announcementDate} />
                            <Field label='Visible To' value={announcement.visibleTo} />
                            <div className='lg:col-span-3'>
                                <Field label='Announcement Message' value={announcement.message} />
                            </div>
                            <div className='lg:col-span-3'>
                                <div className='flex flex-col gap-y-1'>
                                    <span className='text-base font-medium text-[#808080]'>Attachment</span>
                                    <span className='flex items-center gap-x-2 text-sm text-[#1E1E1E]'>
                                        <img src={pdf_icon} alt='pdf-icon' className='w-6 h-6' />
                                        {announcement.attachmentName}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Section>
                </>
            )}
        </section>
    )
}

export default ViewAnnouncement
