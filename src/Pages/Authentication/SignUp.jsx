import React from 'react'
import signin_img from "../../assets/images/signin-img.png"
import logo from "../../assets/images/demo-logo2.svg"
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="relative w-full h-screen bg-[#f5f7ff] overflow-hidden font-poppins">

            <div className="absolute -bottom-32 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -left-28 opacity-70"></div>

            <div className="absolute -top-28 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -right-28 opacity-70"></div>

            <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-2">
                <div className='flex justify-center items-center md:p-6 p-2 relative'>
                    <div className='absolute md:top-4 md:left-4 top-4 left-0 w-full flex justify-center md:block md:px-0 lg:px-0 xl:px-10'>
                        <img src={logo} alt="logo" className='w-52' />
                    </div>
                    <div className='w-full max-w-lg flex flex-col gap-y-8'>
                        {/* <div>
                            <h1 className='text-4xl font-semibold text-[#313131] md:text-left text-center'>Profile</h1>
                            <p className='text-base font-medium text-[#313131]/70 mt-4 md:text-left text-center'>Select your correct profile</p>
                        </div> */}

                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center p-6'>
                    <img src={signin_img} className='w-full max-w-md' alt='signin_img' />
                </div>
            </div>

        </div>
    )
}

export default SignUp