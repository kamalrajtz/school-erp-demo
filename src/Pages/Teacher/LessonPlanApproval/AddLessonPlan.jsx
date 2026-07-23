import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import { Calendar, Plus, Upload, X } from 'lucide-react'
import {
    addLessonPlans,
    CLASS_OPTIONS,
    formatPlanDate,
    SECTION_OPTIONS,
    SUBJECT_OPTIONS,
    TEACHER_NAME,
    TEACHER_ROLE,
} from '../../../Common/LessonPlanApproval/lessonPlanApprovalData'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full bg-white'

const dateInputClass =
    'w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-2.5 pr-10 focus:outline-none bg-white'

let topicRowCounter = 0
const createTopicRow = () => ({
    id: `topic-${++topicRowCounter}`,
    description: '',
    fromDate: null,
    toDate: null,
})

const AddLessonPlan = () => {
    const navigate = useNavigate()
    const [subject, setSubject] = useState('')
    const [className, setClassName] = useState('')
    const [section, setSection] = useState('')
    const [attachmentName, setAttachmentName] = useState('')
    const [topicRows, setTopicRows] = useState([createTopicRow()])
    const [queuedPlans, setQueuedPlans] = useState([])

    const handleAttachmentChange = (event) => {
        const file = event.target.files?.[0]
        setAttachmentName(file?.name ?? '')
    }

    const updateTopicRow = (rowId, key, value) => {
        setTopicRows((current) =>
            current.map((row) => (row.id === rowId ? { ...row, [key]: value } : row)),
        )
    }

    const addTopicRow = () => {
        setTopicRows((current) => [...current, createTopicRow()])
    }

    const removeTopicRow = (rowId) => {
        setTopicRows((current) => {
            if (current.length === 1) {
                return [createTopicRow()]
            }
            return current.filter((row) => row.id !== rowId)
        })
    }

    const isSharedFormValid = () => subject && className && section

    const getValidTopicRows = (rows) =>
        rows.filter((row) => row.description.trim() && row.fromDate && row.toDate)

    const buildPayloadsFromRows = (rows) =>
        getValidTopicRows(rows).map((row) => ({
            subject,
            className,
            section,
            description: row.description.trim(),
            fromDate: formatPlanDate(row.fromDate),
            toDate: formatPlanDate(row.toDate),
            attachment: attachmentName,
            submitterName: TEACHER_NAME,
            submitterRole: TEACHER_ROLE,
        }))

    const handleAddMore = () => {
        if (!isSharedFormValid()) return

        const payloads = buildPayloadsFromRows(topicRows)
        if (!payloads.length) return

        setQueuedPlans((current) => [...current, ...payloads])
        setTopicRows([createTopicRow()])
    }

    const removeQueuedPlan = (index) => {
        setQueuedPlans((current) => current.filter((_, itemIndex) => itemIndex !== index))
    }

    const handleSubmit = () => {
        const pendingPayloads = buildPayloadsFromRows(topicRows)
        const allPayloads = [...queuedPlans, ...pendingPayloads]

        if (!allPayloads.length) return

        addLessonPlans(allPayloads)
        navigate('/teacher/lesson-plan-approval')
    }

    const queuedCount = queuedPlans.length
    const validCurrentRows = getValidTopicRows(topicRows).length

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Submit Lesson Plan</h2>
                <p className='text-sm text-[#667085] mt-1'>
                    Add one or more lesson plans with date ranges, queue them with Add More, then submit all together for approval.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-8 mt-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='subject' className='text-base font-medium text-[#1E1E1E]'>Subject:</label>
                        <select id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass}>
                            <option value=''>Select Subject</option>
                            {SUBJECT_OPTIONS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='class' className='text-base font-medium text-[#1E1E1E]'>Class:</label>
                        <select id='class' value={className} onChange={(e) => setClassName(e.target.value)} className={inputClass}>
                            <option value=''>Select Class</option>
                            {CLASS_OPTIONS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='section' className='text-base font-medium text-[#1E1E1E]'>Section:</label>
                        <select id='section' value={section} onChange={(e) => setSection(e.target.value)} className={inputClass}>
                            <option value=''>Select Section</option>
                            {SECTION_OPTIONS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='teacher-name' className='text-base font-medium text-[#1E1E1E]'>Teacher&apos;s Name:</label>
                        <input
                            id='teacher-name'
                            type='text'
                            value={TEACHER_NAME}
                            readOnly
                            className={`${inputClass} bg-[#F9FAFB] text-[#667085] cursor-not-allowed`}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2 lg:col-span-2'>
                        <label htmlFor='attachment' className='text-base font-medium text-[#1E1E1E]'>Attachment:</label>
                        <label
                            htmlFor='attachment'
                            className='flex items-center gap-2 text-sm text-[#515DEF] border border-dashed border-[#515DEF] rounded-md px-3 py-3 cursor-pointer hover:bg-[#515DEF08] transition-colors'
                        >
                            <Upload size={18} />
                            {attachmentName || 'Choose file to upload'}
                        </label>
                        <input id='attachment' type='file' className='hidden' onChange={handleAttachmentChange} />
                    </div>
                </div>

                <div className='mt-8 border border-[#E4E7EC] rounded-xl p-4'>
                    <div className='flex justify-between items-center gap-4 mb-4'>
                        <div>
                            <h3 className='text-base font-semibold text-[#1E1E1E]'>Lesson Plan Details</h3>
                            <p className='text-sm text-[#667085] mt-1'>Add each lesson plan with a description and date range.</p>
                        </div>
                        <button
                            type='button'
                            onClick={addTopicRow}
                            className='text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-3 py-2 hover:bg-[#515DEF08] transition-colors cursor-pointer flex items-center gap-x-2 whitespace-nowrap'
                        >
                            <Plus size={16} />
                            Add topic
                        </button>
                    </div>

                    <div className='space-y-3'>
                        {topicRows.map((row) => (
                            <div key={row.id} className='grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 items-end'>
                                <div className='flex flex-col gap-y-2'>
                                    <label className='text-sm font-medium text-[#667085]'>Description</label>
                                    <input
                                        type='text'
                                        value={row.description}
                                        onChange={(e) => updateTopicRow(row.id, 'description', e.target.value)}
                                        placeholder='e.g. Algebraic expressions'
                                        className={inputClass}
                                    />
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <label className='text-sm font-medium text-[#667085]'>From Date</label>
                                    <div className='relative'>
                                        <DatePicker
                                            selected={row.fromDate}
                                            onChange={(date) => updateTopicRow(row.id, 'fromDate', date)}
                                            isClearable
                                            showMonthYearDropdown
                                            scrollableMonthYearDropdown
                                            placeholderText='dd-mm-yyyy'
                                            className={dateInputClass}
                                        />
                                        <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <label className='text-sm font-medium text-[#667085]'>To Date</label>
                                    <div className='relative'>
                                        <DatePicker
                                            selected={row.toDate}
                                            onChange={(date) => updateTopicRow(row.id, 'toDate', date)}
                                            isClearable
                                            showMonthYearDropdown
                                            scrollableMonthYearDropdown
                                            minDate={row.fromDate ?? undefined}
                                            placeholderText='dd-mm-yyyy'
                                            className={dateInputClass}
                                        />
                                        <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                                    </div>
                                </div>
                                <button
                                    type='button'
                                    onClick={() => removeTopicRow(row.id)}
                                    className='size-10 flex items-center justify-center rounded-md border border-[#D9D9D9] text-[#667085] hover:text-red-500 hover:border-red-300 transition-colors cursor-pointer lg:mb-0 mb-1'
                                    aria-label='Remove lesson plan row'
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-end mt-4'>
                        <button
                            type='button'
                            onClick={handleAddMore}
                            disabled={!isSharedFormValid() || !validCurrentRows}
                            className='bg-white text-[#515DEF] text-sm px-6 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            Add More
                        </button>
                    </div>
                </div>
            </div>

            {queuedCount > 0 && (
                <div className='bg-white rounded-2xl shadow-md p-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-lg font-semibold text-black'>Queued Lesson Plans</h3>
                        <span className='text-sm font-medium text-[#515DEF]'>{queuedCount} queued</span>
                    </div>
                    <div className='space-y-3'>
                        {queuedPlans.map((plan, index) => (
                            <div
                                key={`${plan.description}-${plan.fromDate}-${plan.toDate}-${index}`}
                                className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#E4E7EC] rounded-lg px-4 py-3'
                            >
                                <div>
                                    <p className='text-sm font-medium text-[#1E1E1E]'>{plan.description}</p>
                                    <p className='text-xs text-[#667085] mt-1'>
                                        {plan.subject} · {plan.className} · Section {plan.section} · {plan.fromDate} to {plan.toDate}
                                    </p>
                                </div>
                                <button
                                    type='button'
                                    onClick={() => removeQueuedPlan(index)}
                                    className='text-sm text-red-500 hover:text-red-600 cursor-pointer self-start sm:self-center'
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className='flex sm:justify-end justify-center gap-x-4'>
                <button
                    type='button'
                    onClick={() => navigate('/teacher/lesson-plan-approval')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    onClick={handleSubmit}
                    disabled={queuedCount === 0 && validCurrentRows === 0}
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    Submit for Approval
                </button>
            </div>
        </section>
    )
}

export default AddLessonPlan
