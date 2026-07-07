import React from 'react'
import { Check, Plus, Search, X } from 'lucide-react'
import {
    JOURNAL_VOUCHERS,
    voucherStatusBadgeColor,
    voucherTypeBadgeColor,
} from '../accountingData'
import {
    TableCard,
    TablePagination,
    tdClass,
    thClass,
} from './AccountingShared'

export const NewVoucherModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/40' onClick={onClose} aria-hidden='true' />

            <div className='relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl'>
                <div className='flex items-center justify-between px-6 py-4 border-b border-[#F2F4F7]'>
                    <h2 className='text-lg font-semibold text-[#1E1E1E]'>New Journal Voucher</h2>
                    <button type='button' onClick={onClose} className='text-[#667085] hover:text-[#FF5722] transition-colors cursor-pointer' aria-label='Close modal'>
                        <X size={20} />
                    </button>
                </div>

                <div className='px-6 py-5 space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>Voucher Type</label>
                            <select className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]'>
                                <option>Journal</option>
                                <option>Receipt</option>
                                <option>Payment</option>
                                <option>Contra</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>Date</label>
                            <input type='date' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>Reference No.</label>
                            <input type='text' placeholder='optional' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-sm font-medium text-[#808080]'>Narration</label>
                        <textarea rows={2} placeholder='Describe the transaction...' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF] resize-none' />
                    </div>

                    <p className='text-xs font-semibold text-[#667085] uppercase tracking-wide'>Entries</p>
                    <div className='overflow-x-auto border border-[#F2F4F7] rounded-lg'>
                        <table className='w-full text-sm text-left'>
                            <thead className='text-xs bg-[#EDEEF5]'>
                                <tr>
                                    <th className={`${thClass} rounded-s-lg`}>Account</th>
                                    <th className={thClass}>Debit (₹)</th>
                                    <th className={`${thClass} rounded-e-lg`}>Credit (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2].map((line) => (
                                    <tr key={line} className='border-b border-[#f2f4f7]'>
                                        <td className={tdClass}>
                                            <select className='w-full text-sm border border-[#D9D9D9] rounded-md px-2 py-1.5'>
                                                <option>Select account...</option>
                                            </select>
                                        </td>
                                        <td className={tdClass}>
                                            <input type='number' placeholder='0' className='w-full text-sm border border-[#D9D9D9] rounded-md px-2 py-1.5' />
                                        </td>
                                        <td className={tdClass}>
                                            <input type='number' placeholder='0' className='w-full text-sm border border-[#D9D9D9] rounded-md px-2 py-1.5' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button type='button' className='text-sm font-medium text-[#515DEF] hover:underline cursor-pointer'>
                        + Add line
                    </button>
                </div>

                <div className='flex justify-end gap-3 px-6 py-4 border-t border-[#F2F4F7]'>
                    <button type='button' onClick={onClose} className='text-sm font-medium text-[#515DEF] border border-[#515DEF] px-4 py-2 rounded-md hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                        Save as Draft
                    </button>
                    <button type='button' className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'>
                        <Check size={16} />
                        Post Voucher
                    </button>
                </div>
            </div>
        </div>
    )
}

const JournalVouchersTab = ({ onNewVoucher }) => (
    <div className='space-y-6'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
            <div>
                <h3 className='text-base font-semibold text-[#1E1E1E]'>Journal vouchers</h3>
                <p className='text-sm text-[#667085] mt-1'>
                    Manual journal entries for adjustments, accruals & corrections
                </p>
            </div>
            <button
                type='button'
                onClick={onNewVoucher}
                className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'
            >
                <Plus size={16} />
                New Voucher
            </button>
        </div>

        <TableCard
            title='Voucher register'
            filters={(
                <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3'>
                    <div className='relative min-w-[160px]'>
                        <Search size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-[#808080]' />
                        <input type='text' placeholder='Search voucher no...' className='w-full text-sm border border-[#D9D9D9] rounded-md pl-9 pr-3 py-2' />
                    </div>
                    <select className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[120px]'>
                        <option>All Types</option>
                        <option>Journal</option>
                        <option>Receipt</option>
                        <option>Payment</option>
                        <option>Contra</option>
                    </select>
                    <select className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[120px]'>
                        <option>All Status</option>
                        <option>Posted</option>
                        <option>Draft</option>
                    </select>
                </div>
            )}
            footer={<TablePagination summary='884 vouchers this year' />}
        >
            <table className='w-full text-sm text-left mt-4'>
                <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                    <tr>
                        <th className={`${thClass} rounded-s-lg`}>Voucher No.</th>
                        <th className={thClass}>Type</th>
                        <th className={thClass}>Date</th>
                        <th className={thClass}>Narration</th>
                        <th className={thClass}>Amount</th>
                        <th className={`${thClass} rounded-e-lg`}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {JOURNAL_VOUCHERS.map((row) => (
                        <tr key={row.id} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                            <td className={`${tdClass} rounded-s-lg font-mono text-xs text-[#1E1E1E]`}>{row.id}</td>
                            <td className={tdClass}>
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${voucherTypeBadgeColor[row.type]}`}>
                                    {row.type}
                                </span>
                            </td>
                            <td className={tdClass}>{row.date}</td>
                            <td className={tdClass}>{row.narration}</td>
                            <td className={`${tdClass} font-semibold text-[#1E1E1E]`}>{row.amount}</td>
                            <td className={`${tdClass} rounded-e-lg`}>
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${voucherStatusBadgeColor[row.status]}`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableCard>
    </div>
)

export default JournalVouchersTab
