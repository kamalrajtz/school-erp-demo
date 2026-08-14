import { NavLink, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import {
    getActivityById,
    getPersonInCharge,
    mdApprovalBadgeColor,
} from './activitiesData'
import { getActivityConfig, getActivityRoutes } from './activityConfigs'
import { getClassDisplayLabel } from '../RBAC/academicsCatalogData'

const DetailRow = ({ label, value }) => (
    <div className='flex flex-col gap-1 sm:flex-row sm:gap-4 py-3 border-b border-[#F2F4F7] last:border-b-0'>
        <span className='text-sm font-medium text-[#667085] sm:w-40 shrink-0'>{label}</span>
        <span className='text-sm text-[#1E1E1E]'>{value || '—'}</span>
    </div>
)

export default function ViewActivityPage({ roleKey, activityType }) {
    const { id } = useParams()
    const config = getActivityConfig(activityType)
    const routes = getActivityRoutes(activityType, roleKey)
    const activity = getActivityById(id)
    const approvalStatusHeader = roleKey === 'admin' ? 'Super Admin Approval Status' : 'MD Approval Status'

    if (!activity || activity.type !== activityType) {
        return (
            <section className='bg-white rounded-2xl shadow-md p-6'>
                <p className='text-[#667085]'>Activity not found.</p>
                <NavLink to={routes.list} className='inline-block mt-4 text-sm text-[#515DEF] hover:underline'>
                    Back to list
                </NavLink>
            </section>
        )
    }

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <NavLink
                    to={routes.list}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] hover:underline mb-4'
                >
                    <ArrowLeft size={16} />
                    Back to {config.listTitle}
                </NavLink>
                <h1 className='text-xl font-semibold text-black'>{activity.eventName}</h1>
                <p className='text-sm text-[#667085] mt-1'>{config.formTitle}</p>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <DetailRow label='Event Name' value={activity.eventName} />
                <DetailRow label='Event Type' value={activity.eventType} />
                <DetailRow label='Class' value={getClassDisplayLabel(activity.className)} />
                <DetailRow label='Event Date' value={activity.eventDate} />
                <DetailRow label='Start Time' value={activity.startTime} />
                <DetailRow label='End Time' value={activity.endTime} />
                <DetailRow label='Venue' value={activity.venue} />
                <DetailRow label={config.personLabel} value={getPersonInCharge(activity, config.personField)} />
                <DetailRow label='Description' value={activity.description} />
                <DetailRow label='Submitted By' value={activity.submittedBy} />
                <DetailRow label='Submitted Date' value={activity.submittedDate} />
                <div className='flex flex-col gap-1 sm:flex-row sm:gap-4 py-3'>
                    <span className='text-sm font-medium text-[#667085] sm:w-40 shrink-0'>{approvalStatusHeader}</span>
                    <span className={`inline-flex w-fit px-2 py-1 rounded-lg text-xs font-semibold ${mdApprovalBadgeColor[activity.mdApprovalStatus]}`}>
                        {activity.mdApprovalStatus}
                    </span>
                </div>
            </div>
        </section>
    )
}
