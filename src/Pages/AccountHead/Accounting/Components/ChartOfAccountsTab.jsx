import React from 'react'
import { Check, Plus, X } from 'lucide-react'
import { CHART_OF_ACCOUNTS } from '../accountingData'
import { AccountTree, Panel } from './AccountingShared'

export const AddAccountModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/40' onClick={onClose} aria-hidden='true' />

            <div className='relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl'>
                <div className='flex items-center justify-between px-6 py-4 border-b border-[#F2F4F7]'>
                    <h2 className='text-lg font-semibold text-[#1E1E1E]'>Add Account</h2>
                    <button type='button' onClick={onClose} className='text-[#667085] hover:text-[#FF5722] transition-colors cursor-pointer' aria-label='Close modal'>
                        <X size={20} />
                    </button>
                </div>

                <div className='px-6 py-5 space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>Account Code</label>
                            <input type='text' placeholder='e.g. 5130' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>Account Name</label>
                            <input type='text' placeholder='e.g. Office Supplies' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm font-medium text-[#808080]'>Account Type</label>
                            <select className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]'>
                                <option>Asset</option>
                                <option>Liability</option>
                                <option>Income</option>
                                <option>Expense</option>
                                <option>Equity</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-sm font-medium text-[#808080]'>Parent Account</label>
                        <select className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#515DEF]'>
                            <option>None (Top-level)</option>
                            <option>5100 · Operational Expense</option>
                            <option>1000 · Current Assets</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-end gap-3 px-6 py-4 border-t border-[#F2F4F7]'>
                    <button type='button' onClick={onClose} className='text-sm font-medium text-[#515DEF] border border-[#515DEF] px-4 py-2 rounded-md hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                        Cancel
                    </button>
                    <button type='button' className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'>
                        <Check size={16} />
                        Save Account
                    </button>
                </div>
            </div>
        </div>
    )
}

const ChartOfAccountsTab = ({ onAddAccount }) => (
    <div className='space-y-6'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
            <div>
                <h3 className='text-base font-semibold text-[#1E1E1E]'>Chart of accounts</h3>
                <p className='text-sm text-[#667085] mt-1'>Account heads used across all financial modules</p>
            </div>
            <button
                type='button'
                onClick={onAddAccount}
                className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'
            >
                <Plus size={16} />
                Add Account
            </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {Object.values(CHART_OF_ACCOUNTS).map((section) => (
                <Panel key={section.title} title={section.title}>
                    <AccountTree rows={section.rows} />
                </Panel>
            ))}
        </div>
    </div>
)

export default ChartOfAccountsTab
