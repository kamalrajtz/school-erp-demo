import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import AdmissionDetailsForm from './Components/AdmissionDetailsForm'
import {
    allocateStudentSection,
    getStudentAllocationById,
} from './studentAllocationData'

const AllocateStudent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const record = getStudentAllocationById(id)
    const [section, setSection] = useState(record?.classSection ?? '')

    if (!record) {
        return <Navigate to='/director/student-allocation' replace />
    }

    const handleAllocate = () => {
        if (!section) return
        allocateStudentSection(record.id, section)
        navigate('/director/student-allocation')
    }

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Allocate Student Section</h2>
                <p className='text-sm text-[#667085] mt-1'>
                    Review admission details for <span className='font-medium text-[#1E1E1E]'>{record.studentName}</span> and assign a section.
                </p>
                <div className='lg:mt-8 mt-4'>
                    <h3 className='text-lg font-semibold text-black mb-4'>Admission Information</h3>
                    <AdmissionDetailsForm
                        record={record}
                        section={section}
                        onSectionChange={setSection}
                        sectionEditable
                    />
                </div>
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    onClick={() => navigate('/director/student-allocation')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='button'
                    onClick={handleAllocate}
                    disabled={!section}
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    Allocate Section
                </button>
            </div>
        </section>
    )
}

export default AllocateStudent
