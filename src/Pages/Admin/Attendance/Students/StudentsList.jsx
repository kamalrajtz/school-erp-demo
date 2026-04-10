import React, { useState } from 'react'
import ClassWise from './Compnents/Tabs/ClassWise';
import DateWise from './Compnents/Tabs/DateWise';
import StudentWise from './Compnents/Tabs/StudentWise';
import SubjectWise from './Compnents/Tabs/SubjectWise';
import { ChevronLeft, ChevronRight } from 'lucide-react'


const StudentsList = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center gap-4'>
                <button className='bg-[#515DEF] text-white uppercase text-sm px-6 py-2 border border-[#515DEF] rounded-lg hover:opacity-90 w-full sm:w-fit md:w-fit transition-all duration-200 cursor-pointer'>Clear Filters</button>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="search" className='text-base font-medium text-[#808080]'>Search</label>
                    <input type="text" className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="search" className='text-base font-medium text-[#808080]'>Class</label>
                    <select name="" id="" className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                        <option value="">Select Class</option>
                    </select>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="search" className='text-base font-medium text-[#808080]'>Section</label>
                    <select name="" id="" className='text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full'>
                        <option value="">Select Section</option>
                    </select>
                </div>
            </div>


            <div className='bg-white rounded-2xl shadow-md p-4 mt-6'>
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                    {[
                        { id: 1, label: "Student Wise" },
                        { id: 2, label: "Class Wise" },
                        { id: 3, label: "Date Wise" },
                        { id: 4, label: "Subject Wise" },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap px-2 pb-2 text-sm md:text-lg font-medium cursor-pointer transition-all duration-200 ${activeTab === tab.id
                                ? "text-[#515DEF] border-b-2 border-[#515DEF] font-semibold"
                                : "text-[#808080]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <>
                    <div className='mt-6'>
                        {activeTab === 1 && <StudentWise />}
                        {activeTab === 2 && <ClassWise />}
                        {activeTab === 3 && <DateWise />}
                        {activeTab === 4 && <SubjectWise />}
                    </div>
                </>
            </div>

            {/* Pagination */}
            <div className='flex justify-between items-center px-4 mt-4'>
                <p className='text-sm font-medium text-[#515DEF]'>Showing 1 to 10 of 20 entries</p>

                <div className="flex justify-center gap-x-2 flex-wrap">
                    <button className="size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer">
                        <ChevronLeft size={16} />
                    </button>

                    <button className="size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] hover:bg-[#515DEF] hover:text-white border border-[#E2E8F0] rounded-full cursor-pointer">
                        1
                    </button>

                    <button className="size-8 flex justify-center items-center p-2 bg-[#EDEDF5] text-[#515DEF] hover:bg-[#515DEF] hover:text-white border border-[#E2E8F0] rounded-full cursor-pointer">
                        2
                    </button>

                    <button className="size-8 flex justify-center items-center p-2 bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white rounded-full cursor-pointer">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudentsList