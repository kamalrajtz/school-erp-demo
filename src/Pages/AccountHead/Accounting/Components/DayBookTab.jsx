import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import {
    DAY_BOOK_DEPARTMENTS,
    DAY_BOOK_PAYMENT_METHODS,
    DAY_BOOK_TRANSACTION_TYPES,
    dayBookStatusBadgeColor,
    dayBookTransactionTypeBadgeColor,
    formatRupeeAmount,
    parseRupeeAmount,
} from '../accountingData'
import { SummaryCards, TableCard, TablePagination, tdClass, thClass } from './AccountingShared'

const DayBookTab = ({ entries, summary }) => {
    const [dateFilter, setDateFilter] = useState('')
    const [paymentMethod, setPaymentMethod] = useState(DAY_BOOK_PAYMENT_METHODS[0])
    const [transactionType, setTransactionType] = useState(DAY_BOOK_TRANSACTION_TYPES[0])
    const [department, setDepartment] = useState(DAY_BOOK_DEPARTMENTS[0])
    const [voucherSearch, setVoucherSearch] = useState('')

    const filteredEntries = useMemo(() => {
        return entries.filter((row) => {
            if (paymentMethod !== 'All Methods' && row.paymentMethod !== paymentMethod) return false
            if (transactionType !== 'All Types' && row.transactionType !== transactionType) return false
            if (department !== 'All Departments' && row.department !== department) return false
            if (voucherSearch && !row.voucherNo.toLowerCase().includes(voucherSearch.toLowerCase())) return false
            if (dateFilter) {
                const rowDate = new Date(row.date).toISOString().slice(0, 10)
                if (rowDate !== dateFilter) return false
            }
            return true
        })
    }, [entries, dateFilter, paymentMethod, transactionType, department, voucherSearch])

    return (
        <div className='space-y-6' id='day-book-print-area'>
            <SummaryCards cards={summary} />

            <TableCard
                title='Day book register'
                filters={(
                    <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3'>
                        <input
                            type='date'
                            value={dateFilter}
                            onChange={(event) => setDateFilter(event.target.value)}
                            className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[140px]'
                        />
                        <select
                            value={paymentMethod}
                            onChange={(event) => setPaymentMethod(event.target.value)}
                            className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[140px]'
                        >
                            {DAY_BOOK_PAYMENT_METHODS.map((method) => (
                                <option key={method} value={method}>{method}</option>
                            ))}
                        </select>
                        <select
                            value={transactionType}
                            onChange={(event) => setTransactionType(event.target.value)}
                            className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[130px]'
                        >
                            {DAY_BOOK_TRANSACTION_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <select
                            value={department}
                            onChange={(event) => setDepartment(event.target.value)}
                            className='text-sm border border-[#D9D9D9] rounded-md px-3 py-2 min-w-[150px]'
                        >
                            {DAY_BOOK_DEPARTMENTS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        <div className='relative min-w-[160px]'>
                            <Search size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-[#808080]' />
                            <input
                                type='text'
                                value={voucherSearch}
                                onChange={(event) => setVoucherSearch(event.target.value)}
                                placeholder='Voucher number...'
                                className='w-full text-sm border border-[#D9D9D9] rounded-md pl-9 pr-3 py-2'
                            />
                        </div>
                    </div>
                )}
                footer={(
                    <TablePagination
                        summary={`${filteredEntries.length} offline entries${
                            filteredEntries.length !== entries.length ? ` (of ${entries.length} total)` : ''
                        }`}
                    />
                )}
            >
                <table className='w-full text-sm text-left mt-4 min-w-[1100px]'>
                    <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                        <tr>
                            <th className={`${thClass} rounded-s-lg`}>Date</th>
                            <th className={thClass}>Voucher No.</th>
                            <th className={thClass}>Transaction Type</th>
                            <th className={thClass}>Ledger Head</th>
                            <th className={thClass}>Description</th>
                            <th className={thClass}>Payment Method</th>
                            <th className={thClass}>Debit</th>
                            <th className={thClass}>Credit</th>
                            <th className={thClass}>Balance</th>
                            <th className={thClass}>Entered By</th>
                            <th className={`${thClass} rounded-e-lg`}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEntries.length === 0 ? (
                            <tr>
                                <td colSpan={11} className='px-2 py-8 text-center text-[#667085]'>
                                    No offline entries match the selected filters.
                                </td>
                            </tr>
                        ) : (
                            filteredEntries.map((row) => (
                                <tr key={row.id} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} rounded-s-lg whitespace-nowrap`}>{row.date}</td>
                                    <td className={`${tdClass} font-mono text-xs text-[#515DEF]`}>{row.voucherNo}</td>
                                    <td className={tdClass}>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${dayBookTransactionTypeBadgeColor[row.transactionType]}`}>
                                            {row.transactionType}
                                        </span>
                                    </td>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E]`}>{row.ledgerHead}</td>
                                    <td className={tdClass}>{row.description}</td>
                                    <td className={tdClass}>{row.paymentMethod}</td>
                                    <td className={`${tdClass} text-[#4CAF50] font-medium`}>{row.debit}</td>
                                    <td className={`${tdClass} text-[#FF5722] font-medium`}>{row.credit}</td>
                                    <td className={`${tdClass} font-semibold`}>{row.balance}</td>
                                    <td className={tdClass}>{row.enteredBy}</td>
                                    <td className={`${tdClass} rounded-e-lg`}>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${dayBookStatusBadgeColor[row.status]}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </TableCard>
        </div>
    )
}

export const buildDayBookSummary = (entries, openingBalance) => {
    const cashCollection = entries.reduce((total, row) => {
        if (row.transactionType === 'Income') {
            return total + parseRupeeAmount(row.debit)
        }
        return total
    }, 0)

    const cashExpenses = entries.reduce((total, row) => {
        if (row.transactionType === 'Expense') {
            return total + parseRupeeAmount(row.credit)
        }
        return total
    }, 0)

    const netChange = cashCollection - cashExpenses
    const closingBalance = openingBalance + netChange

    return [
        {
            label: "Today's Cash Collection",
            value: formatRupeeAmount(cashCollection),
            sub: `${entries.filter((row) => row.transactionType === 'Income').length} offline receipts`,
            subTone: 'success',
            iconTone: 'success',
        },
        {
            label: "Today's Cash Expenses",
            value: formatRupeeAmount(cashExpenses),
            sub: `${entries.filter((row) => row.transactionType === 'Expense').length} payouts`,
            subTone: 'danger',
            iconTone: 'danger',
        },
        {
            label: 'Total Offline Transactions',
            value: String(entries.length),
            sub: 'manual entries today',
            iconTone: 'info',
        },
        {
            label: 'Opening & Closing Cash Balance',
            value: formatRupeeAmount(closingBalance),
            sub: `opening ${formatRupeeAmount(openingBalance)} → closing ${formatRupeeAmount(closingBalance)}`,
            iconTone: 'info',
        },
    ]
}

export const appendDayBookEntry = (entries, openingBalance, entry) => {
    const lastBalance = entries.length > 0
        ? parseRupeeAmount(entries[0].balance)
        : openingBalance

    const amount = parseRupeeAmount(entry.debit !== '—' ? entry.debit : entry.credit)
    const nextBalance = entry.transactionType === 'Income'
        ? lastBalance + amount
        : lastBalance - amount

    const newEntry = {
        ...entry,
        id: `DB-${Date.now()}`,
        balance: formatRupeeAmount(nextBalance),
    }

    return [newEntry, ...entries]
}

export default DayBookTab
