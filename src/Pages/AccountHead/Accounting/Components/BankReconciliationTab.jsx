import React from 'react'
import { Upload } from 'lucide-react'
import {
    RECONCILIATION_ITEMS,
    RECONCILIATION_SUMMARY,
    reconciliationStatusBadgeColor,
} from '../accountingData'
import {
    SummaryCards,
    TableCard,
    TablePagination,
    tdClass,
    thClass,
} from './AccountingShared'

const BankReconciliationTab = () => (
    <div className='space-y-6'>
        <SummaryCards cards={RECONCILIATION_SUMMARY} />

        <TableCard
            title='Reconciliation — SBI Current A/c'
            filters={(
                <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3'>
                    <input type='date' className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[140px]' />
                    <button
                        type='button'
                        className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'
                    >
                        <Upload size={16} />
                        Import Statement
                    </button>
                </div>
            )}
            footer={(
                <TablePagination
                    summary='3 items pending reconciliation'
                    action={(
                        <button
                            type='button'
                            className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'
                        >
                            Mark Reconciled
                        </button>
                    )}
                />
            )}
        >
            <table className='w-full text-sm text-left mt-4'>
                <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                    <tr>
                        <th className={`${thClass} rounded-s-lg`}>Date</th>
                        <th className={thClass}>Description</th>
                        <th className={thClass}>Bank Amount</th>
                        <th className={thClass}>Book Amount</th>
                        <th className={`${thClass} rounded-e-lg`}>Match Status</th>
                    </tr>
                </thead>
                <tbody>
                    {RECONCILIATION_ITEMS.map((row) => (
                        <tr key={row.id} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                            <td className={`${tdClass} rounded-s-lg`}>{row.date}</td>
                            <td className={`${tdClass} font-medium text-[#1E1E1E]`}>{row.description}</td>
                            <td className={tdClass}>{row.bankAmount}</td>
                            <td className={tdClass}>{row.bookAmount}</td>
                            <td className={`${tdClass} rounded-e-lg`}>
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${reconciliationStatusBadgeColor[row.status]}`}>
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

export default BankReconciliationTab
