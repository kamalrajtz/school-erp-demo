import React, { useState } from 'react'
import AdmissionEnquiryInfo from './Components/AdmissionEnquiryInfo'
import AdmissionModal from './Components/AdmissionModal'

const AddAdmissionEnquiry = () => {

    const [admissionModal, setAdmissionModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Admission Enquiry Information</h2>
                <AdmissionEnquiryInfo />
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Discard Changes
                </button>
                <button onClick={() => setAdmissionModal(true)} className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Save Changes
                </button>
            </div>

            <AdmissionModal admissionModal={admissionModal} setAdmissionModal={setAdmissionModal} />
        </section>
    )
}

export default AddAdmissionEnquiry