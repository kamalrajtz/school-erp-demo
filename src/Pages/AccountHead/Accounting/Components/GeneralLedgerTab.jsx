import React from 'react'
import { Download } from 'lucide-react'
import {
    LEDGER_ENTRIES,
    LEDGER_SUMMARY,
    ledgerStatusBadgeColor,
} from '../accountingData'
import {
    SummaryCards,
    TableCard,
    TablePagination,
    tdClass,
    thClass,
} from './AccountingShared'

const GeneralLedgerTab = () => (
    <div className='space-y-6'>
        <SummaryCards cards={LEDGER_SUMMARY} />

        <TableCard
            title='General ledger entries'
            filters={(
                <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3'>
                    <select className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[150px]'>
                        <option>All Accounts</option>
                        <option>Fee Income</option>
                        <option>Salary Expense</option>
                        <option>Transport Expense</option>
                        <option>Bank — SBI Current A/c</option>
                    </select>
                    <input type='date' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[140px]' />
                    <button
                        type='button'
                        className='inline-flex items-center gap-2 text-sm font-medium text-[#515DEF] border border-[#515DEF] px-4 py-2 rounded-md hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                    >
                        <Download size={16} />
                        Export
                    </button>
                </div>
            )}
            footer={<TablePagination summary='3,842 ledger entries this year' />}
        >
            <table className='w-full text-sm text-left mt-4'>
                <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                    <tr>
                        <th className={`${thClass} rounded-s-lg`}>Date</th>
                        <th className={thClass}>Account</th>
                        <th className={thClass}>Voucher No.</th>
                        <th className={thClass}>Debit</th>
                        <th className={thClass}>Credit</th>
                        <th className={thClass}>Narration</th>
                        <th className={`${thClass} rounded-e-lg`}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {LEDGER_ENTRIES.map((row) => (
                        <tr key={row.id} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                            <td className={`${tdClass} rounded-s-lg`}>{row.date}</td>
                            <td className={`${tdClass} font-medium text-[#1E1E1E]`}>{row.account}</td>
                            <td className={`${tdClass} font-mono text-xs`}>{row.voucherNo}</td>
                            <td className={tdClass}>{row.debit}</td>
                            <td className={tdClass}>{row.credit}</td>
                            <td className={tdClass}>{row.narration}</td>
                            <td className={`${tdClass} rounded-e-lg`}>
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${ledgerStatusBadgeColor[row.status]}`}>
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

export default GeneralLedgerTab
