import React, { useEffect, useState } from 'react'
import { IndianRupee, Save, X } from 'lucide-react'
import {
    COLLECT_FEE_HEADS,
    COLLECT_FEE_MODES,
    COLLECT_FEE_PAID_STATUSES,
    DEFAULT_COLLECT_FEE_FORM,
} from '../feesManagementData'

const inputClass =
    'text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 w-full focus:outline-none focus:border-[#515DEF]'

const selectClass =
    'text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 w-full bg-white focus:outline-none focus:border-[#515DEF]'

const CollectFeeModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState(DEFAULT_COLLECT_FEE_FORM)

    useEffect(() => {
        if (isOpen) {
            setForm({ ...DEFAULT_COLLECT_FEE_FORM })
        }
    }, [isOpen])

    const updateField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/40' onClick={onClose} aria-hidden='true' />

            <div className='relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl'>
                <div className='flex items-center justify-between px-6 py-4 border-b border-[#F2F4F7]'>
                    <h2 className='text-lg font-semibold text-[#1E1E1E]'>Collect Fee</h2>
                    <button
                        type='button'
                        onClick={onClose}
                        className='text-[#667085] hover:text-[#FF5722] transition-colors cursor-pointer'
                        aria-label='Close modal'
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className='px-6 py-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='collect-fee-name' className='text-sm font-medium text-[#808080]'>Name</label>
                            <input
                                id='collect-fee-name'
                                type='text'
                                value={form.name}
                                onChange={(event) => updateField('name', event.target.value)}
                                placeholder='Student name'
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='collect-fee-email' className='text-sm font-medium text-[#808080]'>Email</label>
                            <input
                                id='collect-fee-email'
                                type='email'
                                value={form.email}
                                onChange={(event) => updateField('email', event.target.value)}
                                placeholder='student@email.com'
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='collect-fee-roll' className='text-sm font-medium text-[#808080]'>Roll Number</label>
                            <input
                                id='collect-fee-roll'
                                type='text'
                                value={form.rollNumber}
                                onChange={(event) => updateField('rollNumber', event.target.value)}
                                placeholder='e.g. 10-A-042'
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='collect-fee-fees' className='text-sm font-medium text-[#808080]'>Fees</label>
                            <select
                                id='collect-fee-fees'
                                value={form.fees}
                                onChange={(event) => updateField('fees', event.target.value)}
                                className={selectClass}
                            >
                                <option value=''>Select fee head</option>
                                {COLLECT_FEE_HEADS.map((fee) => (
                                    <option key={fee} value={fee}>{fee}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='collect-fee-amount' className='text-sm font-medium text-[#808080]'>Amount</label>
                            <div className='relative'>
                                <IndianRupee size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-[#808080]' />
                                <input
                                    id='collect-fee-amount'
                                    type='text'
                                    inputMode='decimal'
                                    value={form.amount}
                                    onChange={(event) => updateField('amount', event.target.value.replace(/[^\d.]/g, ''))}
                                    placeholder='0.00'
                                    className={`${inputClass} pl-9`}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='collect-fee-mode' className='text-sm font-medium text-[#808080]'>Mode of Payment</label>
                            <select
                                id='collect-fee-mode'
                                value={form.modeOfPayment}
                                onChange={(event) => updateField('modeOfPayment', event.target.value)}
                                className={selectClass}
                            >
                                <option value=''>Select payment mode</option>
                                {COLLECT_FEE_MODES.map((mode) => (
                                    <option key={mode} value={mode}>{mode}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col gap-y-2 sm:col-span-2'>
                            <label htmlFor='collect-fee-status' className='text-sm font-medium text-[#808080]'>Paid Status</label>
                            <select
                                id='collect-fee-status'
                                value={form.paidStatus}
                                onChange={(event) => updateField('paidStatus', event.target.value)}
                                className={selectClass}
                            >
                                {COLLECT_FEE_PAID_STATUSES.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-6 py-4 border-t border-[#F2F4F7] bg-[#FAFAFA]'>
                    <button
                        type='button'
                        onClick={onClose}
                        className='sm:min-w-[120px] text-sm font-medium text-[#667085] border border-[#D9D9D9] bg-white px-5 py-2.5 rounded-md hover:bg-[#F9F9F9] transition-colors cursor-pointer'
                    >
                        Cancel
                    </button>
                    <button
                        type='button'
                        onClick={onClose}
                        className='inline-flex items-center justify-center gap-2 sm:min-w-[160px] bg-[#515DEF] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition-all cursor-pointer'
                    >
                        Collect Fee
                        <Save size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CollectFeeModal
