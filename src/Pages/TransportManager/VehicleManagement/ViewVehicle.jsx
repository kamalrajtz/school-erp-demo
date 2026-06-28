import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getVehicleById } from './vehicleManagementData'

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

const ViewVehicle = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const vehicle = getVehicleById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button
                    type='button'
                    onClick={() => navigate('/transport-manager/vehicle-management')}
                    className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
                >
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            {!vehicle ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Vehicle not found or could not be loaded.
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <h1 className='text-2xl font-semibold text-black'>{vehicle.vehicleNumber}</h1>
                        <p className='text-sm text-[#667085] mt-2'>
                            <span className='font-medium text-[#1E1E1E]'>
                                Vehicle ID: {vehicle.id}
                            </span>
                            {' · '}
                            <span>{vehicle.vehicleType}</span>
                        </p>
                    </div>

                    <Section title='Vehicle Details Information'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Vehicle Number' value={vehicle.vehicleNumber} />
                            <Field label='Vehicle Type' value={vehicle.vehicleType} />
                            <Field label='Capacity' value={vehicle.capacity} />
                            <Field label='Driver Name' value={vehicle.driverName} />
                            <Field label='Driver Contact' value={vehicle.driverContact} />
                            <Field label='Insurance Expiry Date' value={vehicle.insuranceExpiryDate} />
                            <Field label='Last Service Date' value={vehicle.lastServiceDate} />
                            <Field label='Next Service Date' value={vehicle.nextServiceDate} />
                        </div>
                    </Section>
                </>
            )}
        </section>
    )
}

export default ViewVehicle
