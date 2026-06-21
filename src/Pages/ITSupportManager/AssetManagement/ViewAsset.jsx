import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getAssetById, statusBadgeColor } from './assetData'

const Section = ({ title, children }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h2 className='text-xl font-semibold text-black mb-6'>{title}</h2>
        {children}
    </div>
)

const Field = ({ label, value }) => (
    <div className='flex flex-col gap-y-1'>
        <span className='text-base font-medium text-[#808080]'>{label}</span>
        <span className='text-sm text-[#1E1E1E] whitespace-pre-wrap wrap-break-word'>{value}</span>
    </div>
)

const ViewAsset = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const asset = getAssetById(id)

    return (
        <section className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
                <button type='button' onClick={() => navigate('/it-support-manager/asset-management')} className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'>
                    <ArrowLeft size={18} />
                    Back to list
                </button>
            </div>

            {!asset ? (
                <div className='bg-white rounded-2xl shadow-md p-8 text-center text-[#667085]'>
                    Asset not found or could not be loaded.
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                            <div>
                                <h1 className='text-2xl font-semibold text-black'>{asset.assetName}</h1>
                                <p className='text-sm text-[#667085] mt-1'>{asset.assetId} · {asset.category}</p>
                            </div>
                            <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap w-fit ${statusBadgeColor[asset.status]}`}>
                                {asset.status}
                            </span>
                        </div>
                    </div>

                    <Section title='Asset Information'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Asset ID' value={asset.assetId} />
                            <Field label='Asset Name' value={asset.assetName} />
                            <Field label='Category' value={asset.category} />
                            <Field label='Brand' value={asset.brand} />
                            <Field label='Model' value={asset.model} />
                            <Field label='Serial Number' value={asset.serialNumber} />
                            <Field label='Asset Tag Number' value={asset.assetTagNumber} />
                        </div>
                    </Section>

                    <Section title='Purchase Details'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Vendor Name' value={asset.vendorName} />
                            <Field label='Purchase Date' value={asset.purchaseDate} />
                            <Field label='Purchase Cost' value={asset.purchaseCost} />
                            <Field label='Invoice Number' value={asset.invoiceNumber} />
                        </div>
                    </Section>

                    <Section title='Warranty'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <Field label='Warranty Start Date' value={asset.warrantyStartDate} />
                            <Field label='Warranty End Date' value={asset.warrantyEndDate} />
                        </div>
                    </Section>
                </>
            )}
        </section>
    )
}

export default ViewAsset
