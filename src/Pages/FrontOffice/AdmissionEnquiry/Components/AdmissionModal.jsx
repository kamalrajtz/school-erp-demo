import React from 'react'
import { NavLink } from 'react-router-dom'
import { X, CircleAlert } from 'lucide-react'

const AdmissionModal = ({ admissionModal, setAdmissionModal }) => {
    return (
        <div>
            {/* Edit Request Modal */}
            {admissionModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setAdmissionModal(false)}
                    />

                    <div className="relative z-10 w-full max-w-lg rounded-xl bg-white shadow-lg p-5 py-4">
                        <div className='flex justify-end items-center'>
                            <button onClick={() => setAdmissionModal(false)} className='hover:text-red-500 cursor-pointer'>
                                <X />
                            </button>
                        </div>
                        <div className='pt-4 text-center'>

                            <div className='flex justify-center items-center mb-4'>
                                <CircleAlert size={70} strokeWidth={1.5} className='text-[#515DEF]' />
                            </div>
                            <h3 className='text-xl font-medium text-[#77767A]'>Proceed to Admission?</h3>
                            <p className='text-base text-[#77767A] font-medium mt-2'>This enquiry will be marked as Successful and redirected to the Admission Form.</p>

                            <div className='flex gap-x-4 mt-10'>
                                <button onClick={() => setAdmissionModal(false)} className='bg-white text-[#77767A] text-sm text-center px-4 py-2.5 rounded-md border border-[#77767A] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer w-full'>
                                    Cancel
                                </button>
                                <NavLink to="/admin/front-office/add-admission" className='bg-[#515DEF] text-white text-sm text-center px-4 py-2.5 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer w-full'>
                                    Continue
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AdmissionModal