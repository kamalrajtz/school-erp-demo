import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getRouteById } from './routeManagementData'

const Section = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h2 className='text-xl font-semibold text-black mb-6'>{title}</h2>
        {children}
    </div>
)

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E] whitespace-pre-wrap wrap-break-word'>
            {value || '—'}
        </span>
    </div>
)

const ViewRoute = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const route = getRouteById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/transport-manager/route-management')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            {!route ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Route not found or could not be loaded.
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <h1 className='text-2xl font-semibold text-black'>{route.routeName}</h1>
                        <p className='text-sm text-[#667085] mt-2'>
                            <span className='font-medium text-[#1E1E1E]'>
                                Route ID: {route.id}
                            </span>
                            {' · '}
                            <span>{route.vehicleNumber}</span>
                        </p>
                    </div>

                    <Section title='Route Details Information'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Route Name' value={route.routeName} />
                            <Field label='Vehicle Number' value={route.vehicleNumber} />
                            <Field label='Select Driver' value={route.driverName} />
                            <Field label='Driver Contact' value={route.driverContact} />
                            <Field label='Vehicle ID' value={route.vehicleId} />
                            <Field label='Start Location' value={route.startLocation} />
                            <Field label='End Location' value={route.endLocation} />
                            <Field label='Pick Up Time' value={route.pickUpTime} />
                            <Field label='Drop Time' value={route.dropTime} />
                            <Field label='Yearly Fees' value={route.yearlyFees} />
                            <Field label='Half Yearly Fees' value={route.halfYearlyFees} />
                            <Field label='Quarterly Fees' value={route.quarterlyFees} />
                            <Field label='Monthly Fees' value={route.monthlyFees} />
                            <Field label='Support Staff' value={route.supportStaff} />
                            <Field label='Total Stops' value={route.totalStops} />
                            <Field label='Distance' value={route.distance} />
                            <Field label='Estimated Time' value={route.estimatedTime} />
                        </div>
                    </Section>

                    {route.stops.map((stop, index) => (
                        <Section key={`${route.id}-stop-${index}`} title={`Stop ${index + 1}`}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                                <Field label='Start Location' value={stop.startLocation} />
                                <Field label='End Location' value={stop.endLocation} />
                                <Field label='Pick Up Time' value={stop.pickUpTime} />
                                <Field label='Drop Time' value={stop.dropTime} />
                                <Field label='Yearly Fees' value={stop.yearlyFees} />
                                <Field label='Half Yearly Fees' value={stop.halfYearlyFees} />
                                <Field label='Quarterly Fees' value={stop.quarterlyFees} />
                                <Field label='Monthly Fees' value={stop.monthlyFees} />
                            </div>
                        </Section>
                    ))}
                </>
            )}
        </section>
    )
}

export default ViewRoute
