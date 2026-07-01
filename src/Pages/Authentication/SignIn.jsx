import React, { useEffect, useState } from 'react'
import signin_img from "../../assets/images/signin-img.png"
import logo from "../../assets/images/demo-logo2.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import { ROLE_HOME_PATHS, ROLES, useAuth } from '../../context/AuthContext'

const ROLE_LABELS = {
    [ROLES.ADMIN]: 'Admin',
    [ROLES.STUDENT]: 'Student',
    [ROLES.LIBRARIAN]: 'Librarian',
    [ROLES.PRM]: 'PRM',
    [ROLES.GATEKEEPER]: 'Gate Keeper',
    [ROLES.GATEKEEPER_MANAGER]: 'Gate Keeper Manager',
    [ROLES.DIRECTOR]: 'Director',
    [ROLES.PRINCIPAL]: 'Principal',
    [ROLES.CANTEEN_MANAGER]: 'Canteen Manager',
    [ROLES.IT_SUPPORT_MANAGER]: 'IT Support Team Manager',
    [ROLES.STATIONERY_STORE_MANAGER]: 'Stationery Store Manager',
    [ROLES.HOUSEKEEPING_MANAGER]: 'Housekeeping Manager',
    [ROLES.TRANSPORT_MANAGER]: 'Transport Manager',
    [ROLES.TEACHER]: 'Teacher',
    [ROLES.JOINT_DIRECTOR]: 'Joint Director',
    [ROLES.JOINT_DIRECTOR_ASSISTANT]: 'Joint Director Assistant',
    [ROLES.JOINT_DIRECTOR_AUDIT]: 'Joint Director - Audit',
}

const SignIn = () => {
    const navigate = useNavigate()
    const { pendingRole, login } = useAuth()

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (!pendingRole) {
            navigate('/select-profile', { replace: true })
        }
    }, [pendingRole, navigate])

    if (!pendingRole) {
        return null
    }

    const roleLabel = ROLE_LABELS[pendingRole] ?? 'User'

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        const result = login(email, otp, pendingRole)
        if (!result.success) {
            setError(result.message)
            return
        }

        navigate(ROLE_HOME_PATHS[pendingRole] ?? '/dashboard', { replace: true })
    }

    return (
        <div className="relative w-full h-screen bg-[#f5f7ff] overflow-hidden font-poppins">

            <div className="absolute -bottom-32 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -left-28 opacity-70"></div>

            <div className="absolute -top-28 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -right-28 opacity-70"></div>

            <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-2">
                <div className='flex justify-center items-center md:p-6 p-2 relative'>
                    <div className='absolute md:top-4 md:left-4 top-4 left-0 w-full flex justify-center md:block md:px-0 lg:px-0 xl:px-10'>
                        <img src={logo} alt="logo" className='w-52' />
                    </div>
                    <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col gap-y-8'>
                        <div>
                            <h1 className='text-4xl font-semibold text-[#313131] md:text-left text-center'>Login</h1>
                            <p className='text-base font-medium text-[#313131]/70 mt-4 md:text-left text-center'>
                                Login to access your {roleLabel} account
                            </p>
                        </div>

                        {error && (
                            <p className='text-sm text-red-500 text-center md:text-left'>{error}</p>
                        )}

                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="signin-email" className='text-base font-medium text-[#1E1E1E]'>
                                Email
                            </label>
                            <input
                                type="email"
                                id="signin-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                placeholder="Enter your email"
                                className="block w-full text-sm text-[#1E1E1E] bg-transparent rounded-md border-2 border-[#6C7BFF] px-3 py-3 focus:outline-none focus:border-[#515DEF]"
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="signin-otp" className='text-base font-medium text-[#1E1E1E]'>
                                OTP
                            </label>
                            <input
                                type="text"
                                id="signin-otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                placeholder="Enter 6-digit OTP"
                                maxLength={6}
                                className="block w-full text-sm text-[#1E1E1E] bg-transparent rounded-md border-2 border-[#6C7BFF] px-3 py-3 tracking-widest focus:outline-none focus:border-[#515DEF]"
                                required
                            />
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
                            <button
                                type="button"
                                className='text-base font-medium text-[#FF8682] hover:text-red-500 transition-all duration-200 cursor-pointer'
                            >
                                Resend OTP
                            </button>
                        </div>
                        <button
                            type="submit"
                            className='bg-[#515DEF] text-white text-base font-medium text-center px-12 py-3 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer w-full'
                        >
                            Login
                        </button>
                        <NavLink
                            to="/select-profile"
                            className='text-center text-sm font-medium text-[#515DEF] hover:underline'
                        >
                            Change profile
                        </NavLink>
                    </form>
                </div>
                <div className='hidden md:flex justify-center items-center p-6'>
                    <img src={signin_img} className='w-full max-w-md' alt='signin_img' />
                </div>
            </div>

        </div>
    )
}

export default SignIn
