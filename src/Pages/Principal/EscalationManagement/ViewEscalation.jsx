import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import {
    ESCALATIONS,
    statusBadgeColor,
    priorityBadgeColor,
    sourceTypeLabel,
} from './escalationData'

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

const ViewEscalation = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const escalation = ESCALATIONS.find((item) => item.id === id) ?? ESCALATIONS[0]

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/principal/escalation-management')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>{escalation.id}</h1>
                        <p className='text-sm text-[#667085] mt-1'>{sourceTypeLabel[escalation.sourceType]}</p>
                    </div>
                    <div className='flex flex-wrap gap-2 self-start'>
                        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${statusBadgeColor[escalation.status]}`}>
                            {escalation.status}
                        </span>
                        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap ${priorityBadgeColor[escalation.priority]}`}>
                            {escalation.priority} Priority
                        </span>
                    </div>
                </div>
            </div>

            <Section title='Escalation information'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Field label='Escalation ID' value={escalation.id} />
                    <Field label='Escalation date' value={escalation.escalationDate} />
                    <Field label='Escalated department' value={escalation.escalatedDepartment} />
                    <Field label='Escalated by' value={escalation.escalatedBy} />
                    <Field label='Role' value={escalation.escalatedByRole} />
                    <Field label='Employee ID' value={escalation.escalatedById} />
                    <Field label='Source' value={sourceTypeLabel[escalation.sourceType]} />
                    <div className='lg:col-span-3'>
                        <Field label='Description' value={escalation.description} />
                    </div>
                    <div className='lg:col-span-3'>
                        <Field label='Full details' value={escalation.fullDescription} />
                    </div>
                    <div className='lg:col-span-3'>
                        <Field label='Remarks' value={escalation.remarks} />
                    </div>
                </div>
            </Section>

            {escalation.sourceType === 'teacher-forwarded' && (
                <Section title='Original teacher escalation'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <Field label='Teacher name' value={escalation.forwardedFromTeacher} />
                        <Field label='Teacher ID' value={escalation.forwardedFromTeacherId} />
                        <Field label='Teacher escalation date' value={escalation.teacherOriginalDate} />
                        <div className='lg:col-span-3'>
                            <Field label='Teacher description' value={escalation.teacherDescription} />
                        </div>
                    </div>
                </Section>
            )}
        </section>
    )
}

export default ViewEscalation
