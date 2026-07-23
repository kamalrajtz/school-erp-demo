import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Eye } from 'lucide-react'
import pdf_icon from '../../../../assets/images/pdf-icon.png'
import SubmissionStudentsModal from './Components/SubmissionStudentsModal'
import {
    getHomeFunItemById,
    getHomeFunSubmissionRecord,
    getRecordAssessmentType,
    statusBadgeColor,
    typeBadgeColor,
} from './homeFunData'

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
            {value || '—'}
        </span>
    </div>
)

const SubmissionStatButton = ({ label, count, colorClass, statusType, record, onView }) => {
    const canView = count > 0

    return (
        <div className='flex flex-col gap-y-2 p-4 rounded-xl border border-[#EEF0F6] bg-[#FAFBFD]'>
            <span className='text-sm font-medium text-[#808080]'>{label}</span>
            <div className='flex items-center justify-between gap-3'>
                <span className={`text-2xl font-semibold ${colorClass}`}>{count}</span>
                <button
                    type='button'
                    title={canView ? 'View students' : 'No students to show'}
                    disabled={!canView}
                    onClick={() => canView && onView(record, statusType)}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 shrink-0 ${
                        canView
                            ? 'border-[#515DEF33] bg-[#515DEF0D] text-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] cursor-pointer'
                            : 'border-[#E2E8F0] bg-white text-[#C4C4C4] cursor-not-allowed'
                    }`}
                >
                    <Eye size={16} />
                    View
                </button>
            </div>
        </div>
    )
}

const ViewHomeFun = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [studentsModal, setStudentsModal] = useState(null)

    const record = getHomeFunItemById(id)
    const submissionRecord = record ? getHomeFunSubmissionRecord(record) : null
    const assessmentType = record ? getRecordAssessmentType(record) : ''
    const isHomework = assessmentType === 'Homework'

    const openStudentsModal = (item, statusType) => {
        setStudentsModal({ record: item, statusType })
    }

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/teacher/student-deliverables/home-fun')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            {!record || !submissionRecord ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Record not found or could not be loaded.
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex flex-wrap items-center gap-3'>
                            <h1 className='text-2xl font-semibold text-black'>{record.assignmentId}</h1>
                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${typeBadgeColor[assessmentType] ?? 'bg-[#EDEEF5] text-[#667085]'}`}>
                                {assessmentType}
                            </span>
                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${statusBadgeColor[record.status]}`}>
                                {record.status}
                            </span>
                        </div>
                        <p className='text-sm text-[#667085] mt-2'>
                            <span className='font-medium text-[#1E1E1E]'>{record.assignmentTitle}</span>
                            {' · '}
                            <span>{record.subject}</span>
                            {' · '}
                            <span>Class {record.className}-{record.section}</span>
                        </p>
                    </div>

                    <Section title={isHomework ? 'Homework Information' : 'Assignment Information'}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Assessment Type' value={assessmentType} />
                            <Field label='Class' value={record.className} />
                            <Field label='Section' value={record.section} />
                            <Field label='Subject' value={record.subject} />
                            <Field
                                label={isHomework ? 'Homework Title' : 'Assignment Title'}
                                value={record.assignmentTitle}
                            />
                            <Field
                                label={isHomework ? 'Homework Description' : 'Assignment Description'}
                                value={record.assignmentDescription}
                            />
                            {!isHomework && <Field label='Total Marks' value={record.totalMarks} />}
                            <Field label='Assigned Date' value={record.assignedDate} />
                            <Field label='Due Date' value={record.dueDate} />
                            <div className='flex flex-col gap-y-1'>
                                <span className='text-base font-medium text-[#808080]'>Upload Document</span>
                                {record.attachment && record.attachment !== '—' ? (
                                    <span className='flex items-center gap-x-2'>
                                        <img src={pdf_icon} alt='attachment' className='w-6 h-6' />
                                        <span className='text-sm text-[#515DEF]'>{record.attachment}</span>
                                    </span>
                                ) : (
                                    <span className='text-sm text-[#1E1E1E]'>—</span>
                                )}
                            </div>
                        </div>
                    </Section>

                    <Section title='Student Submissions'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <div className='flex flex-col gap-y-2 p-4 rounded-xl border border-[#EEF0F6] bg-[#FAFBFD]'>
                                <span className='text-sm font-medium text-[#808080]'>Total Students</span>
                                <span className='text-2xl font-semibold text-[#1E1E1E]'>{submissionRecord.totalStudents}</span>
                            </div>
                            <SubmissionStatButton
                                label='Submitted Students'
                                count={submissionRecord.submittedStudents}
                                colorClass='text-[#4CAF50]'
                                statusType='submitted'
                                record={submissionRecord}
                                onView={openStudentsModal}
                            />
                            <SubmissionStatButton
                                label='Pending Students'
                                count={submissionRecord.pendingStudents}
                                colorClass={submissionRecord.pendingStudents > 0 ? 'text-[#FF9800]' : 'text-[#667085]'}
                                statusType='pending'
                                record={submissionRecord}
                                onView={openStudentsModal}
                            />
                            <SubmissionStatButton
                                label='Late Submissions'
                                count={submissionRecord.lateSubmissions}
                                colorClass={submissionRecord.lateSubmissions > 0 ? 'text-[#F44336]' : 'text-[#667085]'}
                                statusType='late'
                                record={submissionRecord}
                                onView={openStudentsModal}
                            />
                        </div>
                    </Section>
                </>
            )}

            <SubmissionStudentsModal modalState={studentsModal} onClose={() => setStudentsModal(null)} />
        </section>
    )
}

export default ViewHomeFun
