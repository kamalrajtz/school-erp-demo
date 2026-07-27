import React, { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, Download, Upload } from 'lucide-react'
import ExportModal from '../../../../Common/CommonComponents/ExportModal'
import IncompleteMarksModal from './Components/IncompleteMarksModal'
import SubmitMarksConfirmModal from './Components/SubmitMarksConfirmModal'
import {
    ACADEMIC_YEARS,
    CLASSES,
    EXAM_OPTIONS,
    SECTIONS,
    STATUS_FILTERS,
    SUBJECTS,
    TERMS,
    filterStudentsForTable,
    formatClassLabel,
    getEntryWithComputed,
    getExamMaxMarks,
    getMarkEntryStats,
    loadMarkEntrySession,
    resultBadgeColor,
    saveMarkEntrySession,
    submitMarkEntrySession,
} from './markEntryData'

const inputClass =
    'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-2.5 w-full bg-white'

const formatDate = (date) => {
    if (!date) return ''
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}

const parseDisplayDate = (value) => {
    if (!value) return new Date()
    const [day, month, year] = value.split('/').map(Number)
    if (!day || !month || !year) return new Date()
    return new Date(year, month - 1, day)
}

const MarkEntry = () => {
    const [academicYear, setAcademicYear] = useState(ACADEMIC_YEARS[0])
    const [term, setTerm] = useState(TERMS[0])
    const [exam, setExam] = useState(EXAM_OPTIONS[0].name)
    const [className, setClassName] = useState('10')
    const [section, setSection] = useState('A')
    const [subject, setSubject] = useState('Mathematics')
    const [examDate, setExamDate] = useState(parseDisplayDate('15/07/2026'))

    const [session, setSession] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [exportModal, setExportModal] = useState(false)
    const [incompleteModal, setIncompleteModal] = useState(false)
    const [submitModal, setSubmitModal] = useState(false)
    const [saveMessage, setSaveMessage] = useState('')
    const [submitMessage, setSubmitMessage] = useState('')

    const maxMarks = getExamMaxMarks(exam)

    const stats = useMemo(() => {
        if (!session) return null
        return getMarkEntryStats(session.students, session.entries, session.maxMarks)
    }, [session])

    const filteredStudents = useMemo(() => {
        if (!session) return []
        return filterStudentsForTable(session.students, session.entries, { search, statusFilter })
    }, [session, search, statusFilter])

    const handleExamChange = (value) => {
        setExam(value)
    }

    const handleLoadStudents = () => {
        const nextSession = loadMarkEntrySession({
            academicYear,
            term,
            exam,
            className,
            section,
            subject,
            examDate: formatDate(examDate),
            maxMarks: getExamMaxMarks(exam),
        })
        setSession(nextSession)
        setLoaded(true)
        setSearch('')
        setStatusFilter('All')
        setSaveMessage('')
        setSubmitMessage(nextSession.status === 'submitted' ? 'Marks have already been submitted for this examination.' : '')
    }

    const updateEntry = (studentId, patch) => {
        setSession((current) => {
            if (!current) return current
            const existing = current.entries[studentId] ?? { obtainedMarks: null, absent: false, remarks: '' }
            let nextEntry = { ...existing, ...patch }

            if (patch.absent) {
                nextEntry = { ...nextEntry, obtainedMarks: null }
            }

            if (patch.obtainedMarks !== undefined && patch.obtainedMarks !== null && patch.obtainedMarks !== '') {
                nextEntry = { ...nextEntry, absent: false }
            }

            return {
                ...current,
                entries: {
                    ...current.entries,
                    [studentId]: nextEntry,
                },
            }
        })
        setSaveMessage('')
        setSubmitMessage('')
    }

    const handleSaveDraft = () => {
        if (!session) return
        const saved = saveMarkEntrySession({ ...session, status: 'draft' })
        setSession(saved)
        setSaveMessage('Draft saved successfully. You can continue entering marks later.')
    }

    const handleSubmitClick = () => {
        if (!session || !stats) return
        if (stats.pending > 0) {
            setIncompleteModal(true)
            return
        }
        setSubmitModal(true)
    }

    const handleConfirmSubmit = () => {
        if (!session) return
        const submitted = submitMarkEntrySession(session)
        setSession(submitted)
        setSubmitModal(false)
        setSubmitMessage('Marks submitted successfully and sent for validation.')
        setSaveMessage('')
    }

    const isSubmitted = session?.status === 'submitted'

    return (
        <section className='space-y-6'>
            <div>
                <h1 className='text-2xl font-semibold text-black'>Mark Entry</h1>
                <p className='text-sm text-[#667085] mt-1'>Enter examination marks for students</p>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='academic-year' className='text-base font-medium text-[#808080]'>Academic Year</label>
                        <select id='academic-year' value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} className={inputClass}>
                            {ACADEMIC_YEARS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='term' className='text-base font-medium text-[#808080]'>Term</label>
                        <select id='term' value={term} onChange={(e) => setTerm(e.target.value)} className={inputClass}>
                            {TERMS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='exam' className='text-base font-medium text-[#808080]'>Exam</label>
                        <select id='exam' value={exam} onChange={(e) => handleExamChange(e.target.value)} className={inputClass}>
                            {EXAM_OPTIONS.map((item) => (
                                <option key={item.name} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='class' className='text-base font-medium text-[#808080]'>Class</label>
                        <select id='class' value={className} onChange={(e) => setClassName(e.target.value)} className={inputClass}>
                            {CLASSES.map((item) => (
                                <option key={item} value={item}>{formatClassLabel(item)}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='section' className='text-base font-medium text-[#808080]'>Section</label>
                        <select id='section' value={section} onChange={(e) => setSection(e.target.value)} className={inputClass}>
                            {SECTIONS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='subject' className='text-base font-medium text-[#808080]'>Subject</label>
                        <select id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass}>
                            {SUBJECTS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-base font-medium text-[#808080]'>Exam Date</label>
                        <div className='relative w-full'>
                            <DatePicker
                                selected={examDate}
                                onChange={(date) => setExamDate(date)}
                                dateFormat='dd/MM/yyyy'
                                className='w-full text-sm text-[#808080] border border-[#D9D9D9] rounded-md px-3 py-2.5 pr-10 focus:outline-none'
                            />
                            <Calendar size={16} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none' />
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <button
                            type='button'
                            onClick={handleLoadStudents}
                            className='w-full bg-[#515DEF] text-white text-sm px-6 py-2.5 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer'
                        >
                            Load Students
                        </button>
                    </div>
                </div>
            </div>

            {loaded && session && (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <h2 className='text-xl font-semibold text-black mb-4'>Exam Information</h2>
                        <div className='rounded-xl border border-[#EEF0F6] bg-[#FAFBFD] p-4'>
                            <h3 className='text-lg font-semibold text-[#0C1E5B]'>{exam} Examination</h3>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 mt-4 text-sm'>
                                <p><span className='text-[#808080]'>Academic Year :</span> <span className='text-[#1E1E1E]'>{academicYear}</span></p>
                                <p><span className='text-[#808080]'>Term :</span> <span className='text-[#1E1E1E]'>{term}</span></p>
                                <p><span className='text-[#808080]'>Class :</span> <span className='text-[#1E1E1E]'>{formatClassLabel(className)}</span></p>
                                <p><span className='text-[#808080]'>Section :</span> <span className='text-[#1E1E1E]'>{section}</span></p>
                                <p><span className='text-[#808080]'>Subject :</span> <span className='text-[#1E1E1E]'>{subject}</span></p>
                                <p><span className='text-[#808080]'>Maximum Marks :</span> <span className='text-[#1E1E1E]'>{session.maxMarks}</span></p>
                                <p><span className='text-[#808080]'>Exam Date :</span> <span className='text-[#1E1E1E]'>{formatDate(examDate)}</span></p>
                                <p>
                                    <span className='text-[#808080]'>Status :</span>{' '}
                                    <span className={`px-2 py-0.5 rounded-lg text-xs font-semibold ${isSubmitted ? 'bg-[#4CAF5033] text-[#4CAF50]' : 'bg-[#FF980033] text-[#FF9800]'}`}>
                                        {isSubmitted ? 'Submitted' : 'Draft'}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <h2 className='text-xl font-semibold text-black mb-4'>Mark Entry Summary</h2>
                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                            {[
                                { label: 'Total Students', value: stats.totalStudents },
                                { label: 'Marks Entered', value: stats.marksEntered },
                                { label: 'Pending', value: stats.pending },
                                { label: 'Absent', value: stats.absent },
                                { label: 'Average Mark', value: stats.averageMark },
                                { label: 'Highest Mark', value: stats.highestMark },
                            ].map((item) => (
                                <div key={item.label} className='rounded-xl border border-[#EEF0F6] bg-[#FAFBFD] p-4 text-center'>
                                    <span className='text-sm text-[#808080]'>{item.label}</span>
                                    <p className='text-2xl font-semibold text-[#0C1E5B] mt-2'>{item.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className='mt-4 rounded-xl border border-[#EEF0F6] bg-[#FAFBFD] p-4 inline-block min-w-[180px]'>
                            <span className='text-sm text-[#808080]'>Lowest Mark</span>
                            <p className='text-2xl font-semibold text-[#0C1E5B] mt-2'>{stats.lowestMark}</p>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-4'>
                            <div className='flex flex-col gap-y-2 flex-1 max-w-md'>
                                <label htmlFor='search-student' className='text-base font-medium text-[#808080]'>Search Student</label>
                                <input
                                    id='search-student'
                                    type='text'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Search by name, roll number, admission number...'
                                    className={inputClass}
                                />
                            </div>
                            <div className='flex flex-col gap-y-2 w-full lg:max-w-xs'>
                                <label htmlFor='status-filter' className='text-base font-medium text-[#808080]'>Status Filter</label>
                                <select id='status-filter' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={inputClass}>
                                    {STATUS_FILTERS.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left'>
                                <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                                    <tr>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg'>S.No.</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Roll No.</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Student Name</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Admission No.</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Maximum Marks</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Obtained Marks</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Absent</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Grade</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Percentage</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'>Result</th>
                                        <th className='px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg'>Teacher Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredStudents.length === 0 ? (
                                        <tr>
                                            <td colSpan={11} className='px-2 py-8 text-center text-[#667085]'>
                                                No students match the selected filters.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredStudents.map((student, index) => {
                                            const entry = getEntryWithComputed(
                                                session.entries[student.id] ?? { obtainedMarks: null, absent: false, remarks: '' },
                                                session.maxMarks,
                                            )
                                            const rollDisplay = String(student.rollNumber).replace(/^.*-(\d+)$/, '$1').slice(-2)
                                                || String(index + 1).padStart(2, '0')

                                            return (
                                                <tr key={student.id} className='border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                                    <td className='px-2 py-3 rounded-s-lg'>{index + 1}</td>
                                                    <td className='px-2 py-3'>{rollDisplay}</td>
                                                    <td className='px-2 py-3 font-medium text-[#1E1E1E]'>{student.name}</td>
                                                    <td className='px-2 py-3'>{student.admissionNumber}</td>
                                                    <td className='px-2 py-3'>{session.maxMarks}</td>
                                                    <td className='px-2 py-3'>
                                                        <input
                                                            type='number'
                                                            min='0'
                                                            max={session.maxMarks}
                                                            disabled={entry.absent || isSubmitted}
                                                            value={entry.absent ? '' : (entry.obtainedMarks ?? '')}
                                                            placeholder='--'
                                                            onChange={(e) => updateEntry(student.id, { obtainedMarks: e.target.value === '' ? null : e.target.value })}
                                                            className='w-20 text-sm border border-[#D9D9D9] rounded-md px-2 py-1.5 disabled:bg-[#F2F4F7] disabled:text-[#667085]'
                                                        />
                                                    </td>
                                                    <td className='px-2 py-3'>
                                                        <label className='inline-flex items-center gap-2 cursor-pointer'>
                                                            <input
                                                                type='checkbox'
                                                                checked={entry.absent}
                                                                disabled={isSubmitted}
                                                                onChange={(e) => updateEntry(student.id, { absent: e.target.checked })}
                                                                className='rounded border-[#D9D9D9] text-[#515DEF] focus:ring-[#515DEF]'
                                                            />
                                                            <span className='text-xs'>Absent</span>
                                                        </label>
                                                    </td>
                                                    <td className='px-2 py-3 font-medium text-[#1E1E1E]'>{entry.grade}</td>
                                                    <td className='px-2 py-3'>{entry.displayPercent}</td>
                                                    <td className='px-2 py-3'>
                                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${resultBadgeColor[entry.result] ?? resultBadgeColor['—']}`}>
                                                            {entry.result}
                                                        </span>
                                                    </td>
                                                    <td className='px-2 py-3 rounded-e-lg min-w-[180px]'>
                                                        <input
                                                            type='text'
                                                            value={entry.remarks ?? ''}
                                                            disabled={isSubmitted}
                                                            placeholder='Optional remark...'
                                                            onChange={(e) => updateEntry(student.id, { remarks: e.target.value })}
                                                            className='w-full text-sm border border-[#D9D9D9] rounded-md px-2 py-1.5 disabled:bg-[#F2F4F7]'
                                                        />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {(saveMessage || submitMessage) && (
                        <div className={`rounded-xl p-4 text-sm ${submitMessage ? 'bg-[#F1FCF2] border border-[#D1E7CC] text-[#0B6D2C]' : 'bg-[#515DEF0D] border border-[#515DEF33] text-[#515DEF]'}`}>
                            {submitMessage || saveMessage}
                        </div>
                    )}

                    <div className='bg-white rounded-2xl shadow-md p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4'>
                        <div className='flex flex-wrap gap-3'>
                            <button
                                type='button'
                                onClick={() => alert('Import marks from spreadsheet will be available in a future update.')}
                                className='bg-white text-[#515DEF] text-sm px-4 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF0D] transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                            >
                                <Upload size={16} />
                                Import Marks
                            </button>
                            <button
                                type='button'
                                onClick={() => setExportModal(true)}
                                className='bg-white text-[#515DEF] text-sm px-4 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF0D] transition-all duration-200 cursor-pointer flex items-center gap-x-2'
                            >
                                <Download size={16} />
                                Export
                            </button>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            <button
                                type='button'
                                onClick={handleSaveDraft}
                                disabled={isSubmitted}
                                className='bg-white text-[#515DEF] text-sm px-6 py-2.5 rounded-md border border-[#515DEF] hover:bg-[#515DEF0D] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                Save Draft
                            </button>
                            <button
                                type='button'
                                onClick={handleSubmitClick}
                                disabled={isSubmitted}
                                className='bg-[#515DEF] text-white text-sm px-6 py-2.5 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                Submit Marks
                            </button>
                        </div>
                    </div>
                </>
            )}

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
            <IncompleteMarksModal open={incompleteModal} onClose={() => setIncompleteModal(false)} stats={stats} />
            <SubmitMarksConfirmModal
                open={submitModal}
                onClose={() => setSubmitModal(false)}
                onConfirm={handleConfirmSubmit}
                stats={stats}
                examLabel={`${exam} — ${formatClassLabel(className)} Section ${section} — ${subject}`}
            />
        </section>
    )
}

export default MarkEntry
