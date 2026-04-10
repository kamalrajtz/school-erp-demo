import React from 'react'
import logo from "../../assets/images/demo-logo2.svg"
import select_profile_img from "../../assets/images/select-profile-img.png"
import { NavLink } from 'react-router-dom';
import admin_profile from "../../assets/images/admin-icon.png"
import student_profile from "../../assets/images/student-icon.png"
import teacher_profile from "../../assets/images/teacher-icon.png"
import van_driver_profile from "../../assets/images/van-driver-icon.png"
import librarian_profile from "../../assets/images/librarian-icon.png"


const SelectProfile = () => {
    return (
        <div className="relative w-full h-screen bg-[#f5f7ff] overflow-hidden font-poppins">

            <div className="absolute -bottom-32 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -left-28 opacity-70"></div>

            <div className="absolute -top-28 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -right-28 opacity-70"></div>

            <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-2">
                <div className='flex justify-center items-center md:p-6 p-2 relative'>
                    <div className='absolute md:top-4 md:left-4 top-4 left-0 w-full flex justify-center md:block md:px-0 lg:px-0 xl:px-10'>
                        <img src={logo} alt="logo" className='w-52' />
                    </div>
                    <div className='w-full max-w-lg flex flex-col gap-y-8 mt-20 sm:mt-0'>
                        <div>
                            <h1 className='text-4xl font-semibold text-[#313131] md:text-left text-center'>Profile</h1>
                            <p className='text-base font-medium text-[#313131]/70 mt-4 md:text-left text-center'>Select your correct profile</p>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
                            <NavLink to="/signin" className="flex flex-col gap-y-2 items-center">
                                <img src={admin_profile} className='h-24 w-24' alt="admin_profile" />
                                <p className='text-base font-medium text-black text-center'>Admin</p>
                            </NavLink>
                            <NavLink to="/signin" className="flex flex-col gap-y-2 items-center">
                                <img src={student_profile} className='h-24 w-24' alt="student_profile" />
                                <p className='text-base font-medium text-black text-center'>Student</p>
                            </NavLink>
                            <NavLink to="/signin" className="flex flex-col gap-y-2 items-center">
                                <img src={teacher_profile} className='h-24 w-24' alt="teacher_profile" />
                                <p className='text-base font-medium text-black text-center'>Teacher</p>
                            </NavLink>
                            <NavLink to="/signin" className="flex flex-col gap-y-2 items-center">
                                <img src={van_driver_profile} className='h-24 w-24' alt="van_driver_profile" />
                                <p className='text-base font-medium text-black text-center'>Teacher</p>
                            </NavLink>
                            <NavLink to="/signin" className="flex flex-col gap-y-2 items-center">
                                <img src={librarian_profile} className='h-24 w-24' alt="librarian_profile" />
                                <p className='text-base font-medium text-black text-center'>Teacher</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center p-6'>
                    <img src={select_profile_img} className='w-full max-w-md' alt='select_profile_img' />
                </div>
            </div>

        </div>
    )
}

export default SelectProfile