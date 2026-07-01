import React from 'react'
import { useNavigate } from 'react-router-dom'
import AssignmentForm from './Components/AssignmentForm'
import { addAssignment } from './assignmentsData'

const AddAssignment = () => {
    const navigate = useNavigate()

    const handleSave = (values) => {
        addAssignment(values)
        navigate('/teacher/assessment-management/assignments')
    }

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Assignment Information</h2>
                <AssignmentForm onSubmit={handleSave} />
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button
                    type='button'
                    onClick={() => navigate('/teacher/assessment-management/assignments')}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard Changes
                </button>
                <button
                    type='submit'
                    form='assignment-form'
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Save Changes
                </button>
            </div>
        </section>
    )
}

export default AddAssignment
