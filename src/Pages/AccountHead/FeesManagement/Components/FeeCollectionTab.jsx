import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import {
    AlertCircle,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Download,
    FileText,
    Filter,
    MoreVertical,
    TrendingUp,
    Wallet,
} from 'lucide-react'
import ExportModal from '../../../../Common/CommonComponents/ExportModal'
import {
    COLLECTION_BY_CLASS,
    FEE_COLLECTION_STATUSES,
    FEE_COLLECTION_SUMMARY,
    FEE_TRANSACTIONS,
    PAYMENT_METHODS,
    feeCollectionStatusBadgeColor,
} from '../feesManagementData'

const thClass = 'px-2 py-3.5 text-[#0C1E5B] font-medium uppercase'
const tdClass = 'px-2 py-4 text-[#667085]'

const ICON_TONES = {
    info: 'bg-[#515DEF1A] text-[#515DEF]',
    success: 'bg-[#4CAF501A] text-[#4CAF50]',
    danger: 'bg-[#FF57221A] text-[#FF5722]',
}

const SUMMARY_ICONS = {
    'Total Billed (Current Term)': FileText,
    'Amount Collected': Wallet,
    'Outstanding Dues': AlertCircle,
    'Collected Today': Calendar,
}

const Panel = ({ title, action, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4 h-full'>
        <div className='flex justify-between items-center mb-4'>
            <h3 className='text-base font-semibold text-[#1E1E1E]'>{title}</h3>
            {action}
        </div>
        {children}
    </div>
)

const FeeCollectionTab = ({ exportModal, setExportModal }) => {
    const paymentMethodOption = useMemo(() => ({
        tooltip: { trigger: 'item', formatter: '{b}: {d}%' },
        series: [{
            type: 'pie',
            radius: ['58%', '78%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: true,
            label: { show: false },
            labelLine: { show: false },
            data: PAYMENT_METHODS.map((method) => ({
                value: method.percent,
                name: method.name,
                itemStyle: { color: method.color },
            })),
        }],
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'middle',
            style: {
                text: '12\nMETHODS',
                textAlign: 'center',
                fill: '#1E1E1E',
                fontSize: 13,
                fontWeight: 700,
                lineHeight: 18,
                fontFamily: 'Inter',
            },
        }],
    }), [])

    return (
        <div className='space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                {FEE_COLLECTION_SUMMARY.map((card) => {
                    const Icon = SUMMARY_ICONS[card.label] ?? FileText
                    return (
                        <div key={card.label} className='bg-white rounded-2xl shadow-md p-4'>
                            <div className='flex items-start justify-between gap-2 mb-3'>
                                <div className={`p-2 rounded-xl ${ICON_TONES[card.iconTone]}`}>
                                    <Icon size={18} />
                                </div>
                                {card.trend && (
                                    <span className='inline-flex items-center gap-1 text-xs font-semibold text-[#4CAF50] bg-[#4CAF501A] px-2 py-0.5 rounded-full'>
                                        <TrendingUp size={12} />
                                        {card.trend}
                                    </span>
                                )}
                                {card.badge && (
                                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                        card.badgeTone === 'danger'
                                            ? 'bg-[#FF57221A] text-[#FF5722]'
                                            : card.progress
                                                ? 'bg-[#4CAF501A] text-[#4CAF50]'
                                                : 'bg-[#515DEF1A] text-[#515DEF]'
                                    }`}>
                                        {card.badge}
                                    </span>
                                )}
                            </div>
                            <p className='text-xs text-[#808080]'>{card.label}</p>
                            <p className='text-xl font-semibold text-[#1E1E1E] mt-1'>{card.value}</p>
                            {card.sub && (
                                <p className={`text-xs mt-1 flex items-center gap-1 ${
                                    card.subTone === 'danger'
                                        ? 'text-[#FF5722] font-medium'
                                        : card.subTone === 'info'
                                            ? 'text-[#515DEF]'
                                            : 'text-[#667085]'
                                }`}>
                                    {card.subTone === 'danger' && <span className='size-1.5 rounded-full bg-[#FF5722]' />}
                                    {card.sub}
                                </p>
                            )}
                            {card.progress != null && (
                                <div className='h-1.5 rounded-full bg-[#EDEEF5] overflow-hidden mt-3'>
                                    <div
                                        className='h-full rounded-full bg-[#4CAF50]'
                                        style={{ width: `${card.progress}%` }}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Panel
                    title='Collection by Class'
                    action={(
                        <button type='button' className='text-sm font-medium text-[#515DEF] hover:opacity-80 cursor-pointer'>
                            View All
                        </button>
                    )}
                >
                    <div className='space-y-4'>
                        {COLLECTION_BY_CLASS.map((item) => (
                            <div key={item.grade}>
                                <div className='flex items-center justify-between text-sm mb-1.5'>
                                    <span className='text-[#667085]'>{item.grade}</span>
                                    <span className={`font-semibold ${item.percent >= 70 ? 'text-[#4CAF50]' : 'text-[#FF5722]'}`}>
                                        {item.percent}%
                                    </span>
                                </div>
                                <div className='h-2 rounded-full bg-[#EDEEF5] overflow-hidden'>
                                    <div
                                        className={`h-full rounded-full ${item.percent >= 70 ? 'bg-[#4CAF50]' : 'bg-[#FF5722]'}`}
                                        style={{ width: `${item.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Panel>

                <Panel title='Payment Method Analytics'>
                    <div className='flex items-center gap-4'>
                        <div className='flex-1 min-w-0'>
                            <ReactECharts option={paymentMethodOption} style={{ height: 220 }} opts={{ renderer: 'svg' }} />
                        </div>
                        <div className='space-y-3 shrink-0 pr-2'>
                            {PAYMENT_METHODS.map((method) => (
                                <div key={method.name} className='flex items-center gap-2 text-sm'>
                                    <span className='size-2.5 rounded-full shrink-0' style={{ backgroundColor: method.color }} />
                                    <span className='text-[#667085]'>{method.name}</span>
                                    <span className='font-semibold text-[#1E1E1E]'>{method.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Panel>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4'>
                    <h3 className='text-base font-semibold text-[#1E1E1E]'>Recent Fee Transactions</h3>
                    <div className='flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3'>
                        <div className='relative min-w-[150px]'>
                            <Filter size={14} className='absolute left-3 top-1/2 -translate-y-1/2 text-[#808080]' />
                            <select className='w-full text-sm border border-[#D9D9D9] rounded-md pl-9 pr-3 py-2 appearance-none'>
                                {FEE_COLLECTION_STATUSES.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            type='button'
                            className='inline-flex items-center justify-center gap-2 text-sm border border-[#D9D9D9] rounded-md px-3 py-2 text-[#667085] hover:border-[#515DEF] hover:text-[#515DEF] transition-colors cursor-pointer'
                        >
                            <Calendar size={14} />
                            Date Range
                        </button>
                        <button
                            type='button'
                            onClick={() => setExportModal(true)}
                            className='inline-flex items-center justify-center gap-2 text-sm border border-[#D9D9D9] rounded-md px-3 py-2 text-[#667085] hover:border-[#515DEF] hover:text-[#515DEF] transition-colors cursor-pointer'
                        >
                            <Download size={14} />
                            Export
                        </button>
                        <button
                            type='button'
                            className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition-all cursor-pointer'
                        >
                            Bulk Actions
                        </button>
                    </div>
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg'>
                            <tr>
                                <th className={`${thClass} rounded-s-lg`}>Student</th>
                                <th className={thClass}>Class</th>
                                <th className={thClass}>Fee Heads</th>
                                <th className={thClass}>Paid</th>
                                <th className={thClass}>Balance</th>
                                <th className={thClass}>Mode</th>
                                <th className={thClass}>Status</th>
                                <th className={`${thClass} rounded-e-lg`}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {FEE_TRANSACTIONS.map((row) => (
                                <tr key={row.id} className='border-b border-[#f2f4f7] hover:bg-[#f2f4f7]'>
                                    <td className={`${tdClass} rounded-s-lg`}>
                                        <div className='flex items-center gap-3'>
                                            <div className={`size-9 rounded-full ${row.avatarColor} text-white text-xs font-semibold flex items-center justify-center shrink-0`}>
                                                {row.initials}
                                            </div>
                                            <span className='font-medium text-[#1E1E1E] whitespace-nowrap'>{row.student}</span>
                                        </div>
                                    </td>
                                    <td className={tdClass}>{row.className}</td>
                                    <td className={tdClass}>
                                        <div className='flex flex-wrap gap-1'>
                                            {row.feeHeads.map((head) => (
                                                <span key={head} className='text-xs px-2 py-0.5 rounded bg-[#EDEEF5] text-[#667085]'>
                                                    {head}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className={`${tdClass} font-medium text-[#1E1E1E]`}>{row.paid}</td>
                                    <td className={`${tdClass} font-semibold ${row.balanceHighlight ? 'text-[#FF5722]' : 'text-[#667085]'}`}>
                                        {row.balance}
                                    </td>
                                    <td className={tdClass}>{row.mode}</td>
                                    <td className={tdClass}>
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${feeCollectionStatusBadgeColor[row.status]}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className={`${tdClass} rounded-e-lg`}>
                                        <button type='button' className='p-1 rounded hover:bg-[#EDEEF5] cursor-pointer' aria-label='Row actions'>
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-2'>
                    <p className='text-sm text-[#667085]'>Showing 3 of 1240 students</p>
                    <div className='flex items-center gap-2'>
                        <button type='button' className='size-8 flex items-center justify-center rounded-md border border-[#E2E8F0] text-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                            <ChevronLeft size={16} />
                        </button>
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                type='button'
                                className={`size-8 flex items-center justify-center rounded-md text-sm font-medium cursor-pointer transition-colors ${
                                    page === 1
                                        ? 'bg-[#515DEF] text-white'
                                        : 'border border-[#E2E8F0] text-[#515DEF] hover:bg-[#515DEF] hover:text-white'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button type='button' className='size-8 flex items-center justify-center rounded-md border border-[#E2E8F0] text-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <ExportModal exportModal={exportModal} setExportModal={setExportModal} />
        </div>
    )
}

export default FeeCollectionTab
