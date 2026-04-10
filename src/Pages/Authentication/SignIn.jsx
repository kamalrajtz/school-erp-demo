import React, { useState } from 'react'
import signin_img from "../../assets/images/signin-img.png"
import logo from "../../assets/images/demo-logo2.svg"
import { Eye, EyeOff } from "lucide-react";
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/admin/front-office/admission-list");
    };

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
                        <div>
                            <h1 className='text-4xl font-semibold text-[#313131] md:text-left text-center'>Login</h1>
                            <p className='text-base font-medium text-[#313131]/70 mt-4 md:text-left text-center'>Login to access your Admin account</p>
                        </div>
                        <div className="relative">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-md border-2 border-[#6C7BFF] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-base text-[#1C1B1F] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left px-2 peer-focus:rounded-md peer-focus:px-4 peer-focus:bg-[#B4C4FF]/30 peer-focus:backdrop-blur-sm peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto inset-s-1">Email</label>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="floating_password"
                                placeholder=" "
                                className="block px-2.5 pb-2.5 pt-4 pr-10 w-full text-sm text-heading bg-transparent rounded-md border-2 border-[#6C7BFF] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            />
                            <label
                                htmlFor="floating_password"
                                className="absolute text-base text-[#1C1B1F] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left px-2 peer-focus:px-4 peer-focus:rounded-md peer-focus:bg-[#B4C4FF]/30 peer-focus:backdrop-blur-sm peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto inset-s-1"
                            >
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>
                        <div className='flex justify-between items-center gap-y-2'>
                            <div className="checkbox-wrapper-46">
                                <input className="inp-cbx" id="cbx-46" type="checkbox" />
                                <label className="cbx" htmlFor="cbx-46"><span>
                                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span><span className='text-base font-medium text-[#313131]'>Remember me</span>
                                </label>
                            </div>
                            <NavLink to="/forgot-password" className='text-base font-medium text-[#FF8682] hover:text-red-500 transition-all duration-200 cursor-pointer'>Forgot password?</NavLink>
                        </div>
                        <button
                            type="button"
                            onClick={handleSignIn}
                            className='bg-[#515DEF] text-white text-base font-medium text-center px-12 py-3 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer w-full'
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center p-6'>
                    <img src={signin_img} className='w-full max-w-md' alt='signin_img' />
                </div>
            </div>

        </div>
    )
}

export default SignIn
