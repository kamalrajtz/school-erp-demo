import React, { useEffect, useMemo, useState } from 'react'
import { Calculator, X } from 'lucide-react'
import {
    ACADEMIC_YEARS,
    DEFAULT_FEE_FORM,
    MODAL_GRADES,
    MODAL_TERMS,
} from '../feesManagementData'

const parseAmount = (value) => {
    const parsed = Number(String(value).replace(/[^\d.]/g, ''))
    return Number.isFinite(parsed) ? parsed : 0
}

const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`

const CurrencyInput = ({ label, required = false, value, onChange }) => (
    <div className='flex flex-col gap-y-2'>
        <label className='text-sm font-medium text-[#808080]'>
            {label}
            {required && <span className='text-[#FF5722]'> *</span>}
        </label>
        <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#667085]'>₹</span>
            <input
                type='text'
                inputMode='numeric'
                value={value}
                onChange={(event) => onChange(event.target.value.replace(/[^\d]/g, ''))}
                className='w-full text-sm border border-[#D9D9D9] rounded-md pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#515DEF]'
            />
        </div>
    </div>
)

const DefineFeeStructureModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState(DEFAULT_FEE_FORM)

    useEffect(() => {
        if (isOpen) {
            setForm(DEFAULT_FEE_FORM)
        }
    }, [isOpen])

    const totalAmount = useMemo(
        () => parseAmount(form.tuitionFee)
            + parseAmount(form.examFee)
            + parseAmount(form.labFee)
            + parseAmount(form.activityFee)
            + parseAmount(form.miscellaneousFee),
        [form]
    )

    const updateField = (field) => (value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/40' onClick={onClose} aria-hidden='true' />

            <div className='relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl'>
                <div className='flex items-center justify-between px-6 py-4 border-b border-[#F2F4F7]'>
                    <h2 className='text-lg font-semibold text-[#1E1E1E]'>Define Fees Structure</h2>
                    <button
                        type='button'
                        onClick={onClose}
                        className='text-[#667085] hover:text-[#FF5722] transition-colors cursor-pointer'
                        aria-label='Close modal'
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className='px-6 py-5 space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>
                                Grade <span className='text-[#FF5722]'>*</span>
                            </label>
                            <select
                                value={form.grade}
                                onChange={(event) => updateField('grade')(event.target.value)}
                                className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]'
                            >
                                <option value=''>Select Grade</option>
                                {MODAL_GRADES.map((grade) => (
                                    <option key={grade} value={grade}>{grade}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>
                                Academic Year <span className='text-[#FF5722]'>*</span>
                            </label>
                            <select
                                value={form.academicYear}
                                onChange={(event) => updateField('academicYear')(event.target.value)}
                                className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]'
                            >
                                {ACADEMIC_YEARS.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>
                                Term <span className='text-[#FF5722]'>*</span>
                            </label>
                            <select
                                value={form.term}
                                onChange={(event) => updateField('term')(event.target.value)}
                                className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]'
                            >
                                <option value=''>Select Term</option>
                                {MODAL_TERMS.map((term) => (
                                    <option key={term} value={term}>{term}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-3 mb-4'>
                            <h3 className='text-sm font-semibold text-[#515DEF] whitespace-nowrap'>Fees Breakdown</h3>
                            <div className='h-px flex-1 bg-[#EDEEF5]' />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <CurrencyInput
                                label='Tuition Fee'
                                required
                                value={form.tuitionFee}
                                onChange={updateField('tuitionFee')}
                            />
                            <CurrencyInput
                                label='Exam Fee'
                                value={form.examFee}
                                onChange={updateField('examFee')}
                            />
                            <CurrencyInput
                                label='Lab Fee'
                                value={form.labFee}
                                onChange={updateField('labFee')}
                            />
                            <CurrencyInput
                                label='Activity Fee'
                                value={form.activityFee}
                                onChange={updateField('activityFee')}
                            />
                            <CurrencyInput
                                label='Miscellaneous Fee'
                                value={form.miscellaneousFee}
                                onChange={updateField('miscellaneousFee')}
                            />
                        </div>
                    </div>

                    <div className='flex items-center gap-4 rounded-xl border border-[#515DEF33] bg-[#515DEF0D] px-4 py-4'>
                        <div className='size-12 rounded-full bg-[#515DEF] text-white flex items-center justify-center shrink-0'>
                            <Calculator size={22} />
                        </div>
                        <div className='flex-1 min-w-0'>
                            <p className='text-xs font-semibold text-[#808080] uppercase tracking-wide'>Total Per Student</p>
                            <p className='text-xs text-[#667085] mt-0.5'>Inclusive of all standard components</p>
                        </div>
                        <p className='text-2xl font-bold text-[#515DEF] shrink-0'>{formatCurrency(totalAmount)}</p>
                    </div>
                </div>

                <div className='flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-6 py-4 border-t border-[#F2F4F7]'>
                    <button
                        type='button'
                        onClick={onClose}
                        className='sm:min-w-[120px] text-sm font-medium text-[#667085] border border-[#D9D9D9] px-5 py-2.5 rounded-md hover:bg-[#F9F9F9] transition-colors cursor-pointer'
                    >
                        Cancel
                    </button>
                    <button
                        type='button'
                        onClick={onClose}
                        className='sm:min-w-[160px] bg-[#515DEF] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition-all cursor-pointer'
                    >
                        Save Fee Structure
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DefineFeeStructureModal
