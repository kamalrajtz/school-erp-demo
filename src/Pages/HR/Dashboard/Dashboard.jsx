import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import {
    LayoutDashboard,
    Users,
    UserCheck,
    UserPlus,
    ClipboardList,
    Briefcase,
    CalendarOff,
    GraduationCap,
    Star,
} from 'lucide-react'
import {
    KPI_CARDS,
    DEPARTMENT_EMPLOYEES,
    RECRUITMENT_STATUS,
    MONTHLY_JOINING_TREND,
    LEAVE_DISTRIBUTION,
    CHART_COLORS,
    PIE_COLORS,
} from './dashboardData'

const KPI_ICONS = {
    'Total Employees': Users,
    'Active Employees': UserCheck,
    'New Joiners': UserPlus,
    'Pending Onboarding': ClipboardList,
    'Open Vacancies': Briefcase,
    'Employees on Leave': CalendarOff,
    'Upcoming Trainings': GraduationCap,
    'Pending Performance Reviews': Star,
}

const Panel = ({ title, children, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-md p-4 h-full ${className}`}>
        <h3 className='text-lg font-semibold text-black mb-4'>{title}</h3>
        {children}
    </div>
)

const Dashboard = () => {
    const departmentEmployeesOption = useMemo(() => ({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
        },
        grid: { left: 48, right: 24, top: 16, bottom: 48 },
        xAxis: {
            type: 'category',
            data: DEPARTMENT_EMPLOYEES.map((item) => item.department),
            axisLabel: { color: '#667085', fontSize: 10, rotate: 30 },
            axisLine: { lineStyle: { color: '#E0E0E0' } },
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#667085', fontSize: 11 },
            splitLine: { lineStyle: { color: '#F2F4F7' } },
        },
        series: [{
            type: 'bar',
            data: DEPARTMENT_EMPLOYEES.map((item) => item.count),
            barWidth: 32,
            itemStyle: {
                color: CHART_COLORS.primary,
                borderRadius: [4, 4, 0, 0],
            },
            label: {
                show: true,
                position: 'top',
                color: '#667085',
                fontSize: 11,
            },
        }],
    }), [])

    const recruitmentStatusOption = useMemo(() => ({
        tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
        legend: {
            orient: 'vertical',
            right: 0,
            top: 'center',
            textStyle: { color: '#667085', fontSize: 11 },
        },
        series: [{
            type: 'pie',
            radius: ['42%', '68%'],
            center: ['38%', '50%'],
            avoidLabelOverlap: true,
            itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
            label: { show: false },
            data: RECRUITMENT_STATUS.map((item, index) => ({
                name: item.status,
                value: item.count,
                itemStyle: { color: PIE_COLORS[index % PIE_COLORS.length] },
            })),
        }],
    }), [])

    const monthlyJoiningOption = useMemo(() => ({
        tooltip: { trigger: 'axis' },
        grid: { left: 48, right: 24, top: 24, bottom: 32 },
        xAxis: {
            type: 'category',
            data: MONTHLY_JOINING_TREND.labels,
            axisLine: { lineStyle: { color: '#E0E0E0' } },
            axisLabel: { color: '#667085', fontSize: 11 },
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#667085', fontSize: 11 },
            splitLine: { lineStyle: { color: '#F2F4F7' } },
        },
        series: [{
            name: 'New Joinings',
            type: 'line',
            smooth: true,
            data: MONTHLY_JOINING_TREND.joinings,
            areaStyle: { color: 'rgba(81, 93, 239, 0.12)' },
            lineStyle: { color: CHART_COLORS.primary, width: 2 },
            itemStyle: { color: CHART_COLORS.primary },
            symbol: 'circle',
            symbolSize: 6,
        }],
    }), [])

    const leaveDistributionOption = useMemo(() => ({
        tooltip: { trigger: 'item', formatter: '{b}: {c} employees ({d}%)' },
        legend: {
            bottom: 0,
            textStyle: { color: '#667085', fontSize: 11 },
        },
        series: [{
            type: 'pie',
            radius: '62%',
            center: ['50%', '44%'],
            itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
            label: {
                formatter: '{b}\n{d}%',
                color: '#667085',
                fontSize: 11,
            },
            data: LEAVE_DISTRIBUTION.map((item, index) => ({
                name: item.type,
                value: item.count,
                itemStyle: { color: PIE_COLORS[index % PIE_COLORS.length] },
            })),
        }],
    }), [])

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex items-center gap-3'>
                    <div className='p-2.5 rounded-xl bg-[#515DEF]/10 text-[#515DEF]'>
                        <LayoutDashboard size={22} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-black'>HR Dashboard</h2>
                        <p className='text-sm text-[#667085] mt-0.5'>
                            Workforce overview, recruitment pipeline, and leave activity at a glance.
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {KPI_CARDS.map((card) => {
                    const Icon = KPI_ICONS[card.label] ?? Users
                    return (
                        <div key={card.label} className='bg-white rounded-2xl shadow-md p-4'>
                            <div className='flex items-start justify-between gap-2'>
                                <div className='min-w-0'>
                                    <p className='text-xs text-[#808080]'>{card.label}</p>
                                    <p className='text-xl font-semibold text-[#1E1E1E] mt-1'>{card.value}</p>
                                    <p className='text-xs text-[#667085] mt-1'>{card.sub}</p>
                                </div>
                                <div className='p-2 rounded-xl bg-[#515DEF]/10 text-[#515DEF] shrink-0'>
                                    <Icon size={18} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Panel title='Department-wise Employees'>
                    <ReactECharts option={departmentEmployeesOption} style={{ height: 320 }} opts={{ renderer: 'svg' }} />
                </Panel>
                <Panel title='Recruitment Status'>
                    <ReactECharts option={recruitmentStatusOption} style={{ height: 320 }} opts={{ renderer: 'svg' }} />
                </Panel>
                <Panel title='Monthly Joining Trend'>
                    <ReactECharts option={monthlyJoiningOption} style={{ height: 320 }} opts={{ renderer: 'svg' }} />
                </Panel>
                <Panel title='Leave Distribution'>
                    <ReactECharts option={leaveDistributionOption} style={{ height: 320 }} opts={{ renderer: 'svg' }} />
                </Panel>
            </div>
        </section>
    )
}

export default Dashboard
