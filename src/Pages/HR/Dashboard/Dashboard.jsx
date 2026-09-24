import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactECharts from 'echarts-for-react'
import { Briefcase, CalendarOff, ClipboardList, GraduationCap, Star, UserCheck, UserPlus, Users, Wallet } from 'lucide-react'
import { getAdvances, getCandidates, getDisciplinary, getEmployees, getExits, getJobs, getLeaveBundle, getOnboarding, getPerformance, getTraining, completionOf } from '../domain/hrStore'
import { useHrTick } from '../components/HrUi'

const Panel = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4 h-full'>
        <h3 className='text-lg font-semibold text-black mb-4'>{title}</h3>
        {children}
    </div>
)

const Dashboard = () => {
    const tick = useHrTick()
    const navigate = useNavigate()
    const data = useMemo(() => {
        const employees = getEmployees()
        const jobs = getJobs().filter((item) => item.status === 'Open')
        const candidates = getCandidates().filter((item) => ['Interview', 'Screening'].includes(item.status))
        const onboarding = getOnboarding().filter((item) => item.overallStatus !== 'Completed')
        const training = getTraining().filter((item) => item.startDate.includes('09-2026') || item.status === 'Scheduled')
        const reviews = getPerformance().filter((item) => item.status === 'Pending')
        const advances = getAdvances().filter((item) => !['APPROVED', 'REJECTED', 'CLOSED'].includes(item.status))
        const disciplinary = getDisciplinary().filter((item) => item.status !== 'APPROVED')
        const exiting = getExits().filter((item) => item.status !== 'Completed' && item.status !== 'Cancelled')
        const departments = [...new Set(employees.map((item) => item.department))].map((department) => ({ department, count: employees.filter((item) => item.department === department).length }))
        const funnel = ['Applied', 'Screening', 'Interview', 'Selected'].map((status) => ({ status, count: getCandidates().filter((item) => item.status === status || (status === 'Applied' && item.status === 'Applied')).length }))
        const ratings = ['Above Average', 'Average', 'Below Average'].map((rating) => ({ rating, count: getPerformance().filter((item) => item.rating === rating).length }))
        return {
            cards: [
                { label: 'Total Employees', value: employees.length, to: '/hr/employee-management/employees' },
                { label: 'Active Employees', value: employees.filter((item) => item.status === 'Active').length, to: '/hr/employee-management/employees' },
                { label: 'New Joiners', value: employees.filter((item) => item.joiningDate.endsWith('2026') && ['06', '08', '09'].some((month) => item.joiningDate.includes(`-${month}-`))).length, to: '/hr/onboarding-checklist' },
                { label: 'Employees on Leave', value: employees.filter((item) => item.status === 'On Leave').length + getLeaveBundle().requests.filter((item) => item.status === 'Approved').length, to: '/hr/leave-management' },
                { label: 'Open Positions', value: jobs.length, to: '/hr/recruitment/job-openings' },
                { label: 'Candidates in Interview', value: candidates.length, to: '/hr/recruitment/interviews' },
                { label: 'Pending Onboarding', value: onboarding.length, to: '/hr/onboarding-checklist' },
                { label: 'Training This Month', value: training.length, to: '/hr/training' },
                { label: 'Pending Performance Reviews', value: reviews.length, to: '/hr/performance' },
                { label: 'Salary Advance Requests', value: advances.length, to: '/hr/payroll/salary-advance' },
                { label: 'Pending Disciplinary Actions', value: disciplinary.length, to: '/hr/disciplinary' },
                { label: 'Employees Exiting', value: exiting.length, to: '/hr/exit' },
            ],
            departments,
            funnel,
            ratings,
            completion: Math.round(getTraining().reduce((sum, item) => sum + (item.status === 'Completed' ? 1 : 0), 0) / Math.max(getTraining().length, 1) * 100),
            onboardingRate: Math.round(getOnboarding().reduce((sum, item) => sum + completionOf(item), 0) / Math.max(getOnboarding().length, 1)),
        }
    }, [tick])

    const icons = { 'Total Employees': Users, 'Active Employees': UserCheck, 'New Joiners': UserPlus, 'Employees on Leave': CalendarOff, 'Open Positions': Briefcase, 'Candidates in Interview': ClipboardList, 'Pending Onboarding': ClipboardList, 'Training This Month': GraduationCap, 'Pending Performance Reviews': Star, 'Salary Advance Requests': Wallet, 'Pending Disciplinary Actions': ClipboardList, 'Employees Exiting': UserPlus }
    const bar = (labels, values) => ({
        tooltip: { trigger: 'axis' },
        grid: { left: 40, right: 16, top: 16, bottom: 48 },
        xAxis: { type: 'category', data: labels, axisLabel: { color: '#667085', fontSize: 10, rotate: 20 } },
        yAxis: { type: 'value', axisLabel: { color: '#667085' } },
        series: [{ type: 'bar', data: values, itemStyle: { color: '#515DEF', borderRadius: [4, 4, 0, 0] } }],
    })

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold'>HR Dashboard</h2>
                <p className='text-sm text-[#667085]'>Counts come from the HR records stored in this browser.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                {data.cards.map((card) => {
                    const Icon = icons[card.label] || Users
                    return (
                        <button key={card.label} type='button' onClick={() => navigate(card.to)} className='bg-white rounded-2xl shadow-md p-4 text-left cursor-pointer hover:ring-1 hover:ring-[#515DEF]'>
                            <div className='flex justify-between'><div><p className='text-xs text-[#808080]'>{card.label}</p><p className='text-xl font-semibold mt-1'>{card.value}</p></div><Icon size={18} className='text-[#515DEF]' /></div>
                        </button>
                    )
                })}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Panel title='Department-wise Employee Count'><ReactECharts option={bar(data.departments.map((item) => item.department), data.departments.map((item) => item.count))} style={{ height: 300 }} /></Panel>
                <Panel title='Recruitment Funnel'><ReactECharts option={bar(data.funnel.map((item) => item.status), data.funnel.map((item) => item.count))} style={{ height: 300 }} /></Panel>
                <Panel title='Performance Distribution'><ReactECharts option={bar(data.ratings.map((item) => item.rating), data.ratings.map((item) => item.count))} style={{ height: 280 }} /></Panel>
                <Panel title='Training Completion'><p className='text-3xl font-semibold text-[#515DEF]'>{data.completion}%</p><p className='text-sm text-[#667085] mt-2'>Onboarding average completion {data.onboardingRate}%.</p></Panel>
            </div>
        </section>
    )
}

export default Dashboard
