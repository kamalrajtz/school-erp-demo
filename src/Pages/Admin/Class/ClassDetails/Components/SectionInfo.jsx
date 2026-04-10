import React from 'react'

const SectionInfo = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:mt-8 mt-2'>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-base font-medium text-[#1E1E1E]'>Section:</label>
                    <input type="text" className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-base font-medium text-[#1E1E1E]'>Section Capacity:</label>
                    <select name="" id="" className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                        <option value="">Select Class</option>
                    </select>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-base font-medium text-[#1E1E1E]'>Section:</label>
                    <input type="text" className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-base font-medium text-[#1E1E1E]'>Section Capacity:</label>
                    <select name="" id="" className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-3 w-full'>
                        <option value="">Select Class</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-end mt-6'>
                <button className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Add Information
                </button>
            </div>

        </>
    )
}

export default SectionInfo