import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdmissionInfo from './Components/AdmissionInfo'
import StudentInfo from './Components/StudentInfo'
import TransportInfo from './Components/TransportInfo'
import ParentsInfo from './Components/ParentsInfo'
import FeesTimeLine from './Components/FeesTimeLine'
import {
    getAdmissionListPath,
    mapEnquiryToAdmissionPrefill,
} from '../AdmissionEnquiry/admissionEnquiryData'

const AddAdmission = () => {
    const navigate = useNavigate()
    const { pathname, state: locationState } = useLocation()
    const listPath = getAdmissionListPath(pathname)

    const prefill = useMemo(
        () => (locationState?.enquiry ? mapEnquiryToAdmissionPrefill(locationState.enquiry) : null),
        [locationState],
    )

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Admission Information</h2>
                <AdmissionInfo prefill={prefill} />
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-6'>
                <h2 className='text-xl font-semibold text-black'>Student Information</h2>
                <StudentInfo prefill={prefill} />
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-6'>
                <h2 className='text-xl font-semibold text-black'>Transport Information</h2>
                <TransportInfo />
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-6'>
                <h2 className='text-xl font-semibold text-black'>Parents Information</h2>
                <ParentsInfo />
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 mt-6'>
                <h2 className='text-xl font-semibold text-black'>Fees Timeline</h2>
                <FeesTimeLine />
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    onClick={() => navigate(listPath)}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    onClick={() => navigate(listPath)}
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Save Changes
                </button>
            </div>
        </section>
    )
}

export default AddAdmission
