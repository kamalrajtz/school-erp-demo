import React, { useState } from 'react'
import { Download } from 'lucide-react'
import {
    FINANCIAL_STATEMENT_TYPES,
    INCOME_EXPENDITURE,
} from '../accountingData'
import { Panel, tdClass, thClass } from './AccountingShared'

const FinancialStatementsTab = () => {
    const [statementType, setStatementType] = useState(FINANCIAL_STATEMENT_TYPES[0])

    return (
        <div className='space-y-6'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                <div>
                    <h3 className='text-base font-semibold text-[#1E1E1E]'>Financial statements</h3>
                    <p className='text-sm text-[#667085] mt-1'>
                        Income & Expenditure, Balance Sheet, and Receipts & Payments
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3'>
                    <select
                        value={statementType}
                        onChange={(event) => setStatementType(event.target.value)}
                        className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[180px]'
                    >
                        {FINANCIAL_STATEMENT_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <button
                        type='button'
                        className='inline-flex items-center gap-2 text-sm font-medium text-[#515DEF] border border-[#515DEF] px-4 py-2 rounded-md hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                    >
                        <Download size={16} />
                        Export PDF
                    </button>
                </div>
            </div>

            <Panel title={`${statementType} Statement — FY 2025–26 (till date)`}>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Particulars</th>
                                <th className={`${thClass} rounded-e-lg w-40`}>Amount (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {INCOME_EXPENDITURE.map((row) => (
                                <tr
                                    key={row.label}
                                    className={`border-b border-[#f2f4f7] ${
                                        row.total ? 'bg-[#EDEEF5] font-semibold text-[#1E1E1E]' : ''
                                    }`}
                                >
                                    <td className={`${tdClass} rounded-s-lg ${row.indent ? 'pl-8' : ''} ${row.bold ? 'font-semibold text-[#1E1E1E]' : ''}`}>
                                        {row.label}
                                    </td>
                                    <td className={`${tdClass} rounded-e-lg ${row.surplus ? 'text-[#4CAF50] font-semibold' : ''}`}>
                                        {row.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>
        </div>
    )
}

export default FinancialStatementsTab
