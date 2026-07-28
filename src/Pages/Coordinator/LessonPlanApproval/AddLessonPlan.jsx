import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import { Calendar, Upload } from 'lucide-react'
import {
    ACADEMIC_YEAR_OPTIONS,
    MONTH_OPTIONS,
    addLessonPlans,
    CLASS_OPTIONS,
    formatPlanDate,
    parsePlanDateString,
    SECTION_OPTIONS,
    SUBJECT_OPTIONS,
    TEACHER_NAME,
    TEACHER_ROLE,
} from '../../../Common/LessonPlanApproval/lessonPlanApprovalData'
import QueuedPlansPanel from '../../../Common/LessonPlanApproval/Components/QueuedPlansPanel'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full bg-white'

const dateInputClass =
    'w-full text-sm text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-2.5 pr-10 focus:outline-none bg-white'

const createPlanRow = () => ({
    title: '',
    description: '',
    fromDate: null,
    toDate: null,
})

const AddLessonPlan = () => {
    const navigate = useNavigate()
    const [subject, setSubject] = useState('')
    const [className, setClassName] = useState('')
    const [section, setSection] = useState('')
    const [academicYear, setAcademicYear] = useState('')
    const [month, setMonth] = useState('')
    const [attachmentName, setAttachmentName] = useState('')
    const [planRow, setPlanRow] = useState(createPlanRow)
    const [queuedPlans, setQueuedPlans] = useState([])

    const handleAttachmentChange = (event) => {
        const file = event.target.files?.[0]
        setAttachmentName(file?.name ?? '')
    }

    const updatePlanRow = (key, value) => {
        setPlanRow((current) => ({ ...current, [key]: value }))
    }

    const isSharedFormValid = () => subject && className && section && academicYear && month

    const isPlanRowValid = (row) =>
        row.title.trim() && row.description.trim() && row.fromDate && row.toDate

    const buildPayloadFromRow = (row) => ({
        subject,
        className,
        section,
        academicYear,
        month,
        title: row.title.trim(),
        description: row.description.trim(),
        fromDate: formatPlanDate(row.fromDate),
        toDate: formatPlanDate(row.toDate),
        attachment: attachmentName,
        submitterName: TEACHER_NAME,
        submitterRole: TEACHER_ROLE,
    })

    const handleAddMore = () => {
        if (!isSharedFormValid() || !isPlanRowValid(planRow)) return

        setQueuedPlans((current) => [...current, buildPayloadFromRow(planRow)])
        setPlanRow(createPlanRow())
    }

    const removeQueuedPlan = (index) => {
        setQueuedPlans((current) => current.filter((_, itemIndex) => itemIndex !== index))
    }

    const editQueuedPlan = (index) => {
        const plan = queuedPlans[index]
        setPlanRow({
            title: plan.title,
            description: plan.description,
            fromDate: parsePlanDateString(plan.fromDate),
            toDate: parsePlanDateString(plan.toDate),
        })
        removeQueuedPlan(index)
    }

    const handleSubmit = () => {
        const allPayloads = [...queuedPlans]
        if (isPlanRowValid(planRow)) {
            allPayloads.push(buildPayloadFromRow(planRow))
        }

        if (!allPayloads.length) return

        addLessonPlans(allPayloads)
        navigate('/coordinator/lesson-plan-approval')
    }

    const queuedCount = queuedPlans.length
    const currentRowValid = isPlanRowValid(planRow)
    const plansToSubmit = queuedCount + (currentRowValid ? 1 : 0)
    const submitLabel =
        plansToSubmit === 0
            ? 'Submit for Approval'
            : plansToSubmit === 1
              ? 'Submit 1 plan for approval'
              : `Submit ${plansToSubmit} plans for approval`

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Submit Lesson Plan</h2>
                <p className='text-sm text-[#667085] mt-1'>
                    Add lesson plan details, queue them with Add More, then submit all together for approval.
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

                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='academic-year' className='text-base font-medium text-[#1E1E1E]'>Academic Year:</label>
                        <select
                            id='academic-year'
                            value={academicYear}
                            onChange={(e) => setAcademicYear(e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select Academic Year</option>
                            {ACADEMIC_YEAR_OPTIONS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='month' className='text-base font-medium text-[#1E1E1E]'>Month:</label>
                        <select
                            id='month'
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className={inputClass}
                        >
                            <option value=''>Select Month</option>
                            {MONTH_OPTIONS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
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

                <QueuedPlansPanel
                    queuedPlans={queuedPlans}
                    onEdit={editQueuedPlan}
                    onRemove={removeQueuedPlan}
                />

                <div className='mt-8 border border-[#E4E7EC] rounded-xl p-4'>
                    <div className='mb-4'>
                        <h3 className='text-base font-semibold text-[#1E1E1E]'>Lesson Plan Details</h3>
                        <p className='text-sm text-[#667085] mt-1'>Enter title, description, and date range for this lesson plan.</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <div className='flex flex-col gap-y-2 lg:col-span-2'>
                            <label className='text-sm font-medium text-[#667085]'>Title</label>
                            <input
                                type='text'
                                value={planRow.title}
                                onChange={(e) => updatePlanRow('title', e.target.value)}
                                placeholder='e.g. Algebraic expressions'
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2 lg:col-span-2'>
                            <label className='text-sm font-medium text-[#667085]'>Description</label>
                            <input
                                type='text'
                                value={planRow.description}
                                onChange={(e) => updatePlanRow('description', e.target.value)}
                                placeholder='Lesson plan description'
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#667085]'>From Date</label>
                            <div className='relative'>
                                <DatePicker
                                    selected={planRow.fromDate}
                                    onChange={(date) => updatePlanRow('fromDate', date)}
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
                                    selected={planRow.toDate}
                                    onChange={(date) => updatePlanRow('toDate', date)}
                                    isClearable
                                    showMonthYearDropdown
                                    scrollableMonthYearDropdown
                                    minDate={planRow.fromDate ?? undefined}
                                    placeholderText='dd-mm-yyyy'
                                    className={dateInputClass}
                                />
                                <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end mt-4'>
                        <button
                            type='button'
                            onClick={handleAddMore}
                            disabled={!isSharedFormValid() || !currentRowValid}
                            className='bg-white text-[#515DEF] text-sm px-6 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            Add More
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4'>
                <button
                    type='button'
                    onClick={() => navigate('/coordinator/lesson-plan-approval')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    onClick={handleSubmit}
                    disabled={plansToSubmit === 0}
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {submitLabel}
                </button>
            </div>
        </section>
    )
}

export default AddLessonPlan
