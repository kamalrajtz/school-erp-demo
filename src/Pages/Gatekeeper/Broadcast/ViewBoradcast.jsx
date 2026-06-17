import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import pdf_icon from '../../../assets/images/pdf-icon.png'
import { getBroadcastById } from './broadcastData'

const Section = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h2 className='text-xl font-semibold text-black mb-6'>{title}</h2>
        {children}
    </div>
)

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E] whitespace-pre-wrap wrap-break-word'>
            {value}
        </span>
    </div>
)

const ViewBoradcast = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const broadcast = getBroadcastById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/gate-keeper/broadcast-list')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
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
                        <h1 className='text-2xl font-semibold text-black'>{broadcast.title}</h1>
                        <p className='text-sm text-[#667085] mt-2'>
                            <span className='font-medium text-[#1E1E1E]'>
                                Broadcast ID: {broadcast.id}
                            </span>
                            {' · '}
                            <span>{broadcast.category}</span>
                        </p>
                    </div>

                    <Section title='Broadcast Details'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Broadcast ID' value={broadcast.id} />
                            <Field label='Broadcast Title' value={broadcast.title} />
                            <Field label='Broadcast Category' value={broadcast.category} />
                            <Field label='Sent By' value={broadcast.sentBy} />
                            <Field label='Broadcast Date' value={broadcast.broadcastDate} />
                            <Field label='Visible To' value={broadcast.visibleTo} />
                            <div className='lg:col-span-3'>
                                <Field label='Broadcast Message' value={broadcast.message} />
                            </div>
                            <div className='lg:col-span-3'>
                                <div className='flex flex-col gap-y-1'>
                                    <span className='text-base font-medium text-[#808080]'>
                                        Attachment
                                    </span>
                                    <span className='flex items-center gap-x-2 text-sm text-[#1E1E1E]'>
                                        <img
                                            src={pdf_icon}
                                            alt='pdf-icon'
                                            className='w-6 h-6'
                                        />
                                        {broadcast.attachmentName}
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

export default ViewBoradcast
