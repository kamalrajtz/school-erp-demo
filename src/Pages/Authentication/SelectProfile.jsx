import React, { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import logo from '../../assets/images/demo-logo2.svg'
import select_profile_img from '../../assets/images/select-profile-img.png'
import { useNavigate } from 'react-router-dom'
import admin_profile from '../../assets/images/admin-icon.png'
import student_profile from '../../assets/images/student-icon.png'
import teacher_profile from '../../assets/images/teacher-icon.png'
import driver_profile from '../../assets/images/van-driver-icon.png'
import librarian_profile from '../../assets/images/librarian-icon.png'
import prm_profile from '../../assets/images/prm-icon.jpg'
import { ROLES, useAuth } from '../../context/AuthContext'

const ROLES_PER_PAGE = 9

const PROFILE_OPTIONS = [
    { role: ROLES.ADMIN, label: 'Admin', image: admin_profile, alt: 'admin_profile' },
    { role: ROLES.STUDENT, label: 'Student', image: student_profile, alt: 'student_profile' },
    { role: ROLES.TEACHER, label: 'Teacher', image: teacher_profile, alt: 'teacher_profile' },
    { role: ROLES.DRIVER, label: 'Driver', image: driver_profile, alt: 'driver_profile' },
    { role: ROLES.LIBRARIAN, label: 'Librarian', image: librarian_profile, alt: 'librarian_profile' },
    { role: ROLES.PRM, label: 'PRM', image: prm_profile, alt: 'prm_profile', imageClassName: 'rounded-full' },
    { role: ROLES.GATEKEEPER, label: 'Gate Keeper', image: driver_profile, alt: 'gatekeeper_profile' },
    {
        role: ROLES.GATEKEEPER_MANAGER,
        label: 'Gate Keeper Manager',
        image: driver_profile,
        alt: 'gatekeeper_manager_profile',
    },
    { role: ROLES.DIRECTOR, label: 'Director', image: admin_profile, alt: 'director_profile' },
    { role: ROLES.PRINCIPAL, label: 'Principal', image: admin_profile, alt: 'principal_profile' },
    { role: ROLES.CANTEEN_MANAGER, label: 'Canteen Manager', image: librarian_profile, alt: 'canteen_manager_profile' },
    { role: ROLES.IT_SUPPORT_MANAGER, label: 'IT Support Team Manager', image: admin_profile, alt: 'it_support_manager_profile' },
    { role: ROLES.STATIONERY_STORE_MANAGER, label: 'Stationery Store Manager', image: librarian_profile, alt: 'stationery_store_manager_profile' },
    { role: ROLES.HOUSEKEEPING_MANAGER, label: 'Housekeeping Manager', image: admin_profile, alt: 'housekeeping_manager_profile' },
    { role: ROLES.TRANSPORT_MANAGER, label: 'Transport Manager', image: driver_profile, alt: 'transport_manager_profile' },
    { role: ROLES.JOINT_DIRECTOR, label: 'Joint Director', image: admin_profile, alt: 'joint_director_profile' },
    { role: ROLES.JOINT_DIRECTOR_ASSISTANT, label: 'Joint Director Assistant', image: admin_profile, alt: 'joint_director_assistant_profile' },
    { role: ROLES.JOINT_DIRECTOR_AUDIT, label: 'Joint Director - Audit', image: admin_profile, alt: 'joint_director_audit_profile' },
    { role: ROLES.PROCESS_AUDITOR, label: 'Process Auditor', image: admin_profile, alt: 'process_auditor_profile' },
    { role: ROLES.QUALITY_AUDITOR, label: 'Quality Auditor', image: admin_profile, alt: 'quality_auditor_profile' },
    { role: ROLES.HR, label: 'HR', image: admin_profile, alt: 'hr_profile' },
    { role: ROLES.ACCOUNT_HEAD, label: 'Account Head', image: admin_profile, alt: 'account_head_profile' },
]

const SelectProfile = () => {
    const navigate = useNavigate()
    const { setPendingRole } = useAuth()
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(PROFILE_OPTIONS.length / ROLES_PER_PAGE)

    const visibleProfiles = useMemo(() => {
        const start = (currentPage - 1) * ROLES_PER_PAGE
        return PROFILE_OPTIONS.slice(start, start + ROLES_PER_PAGE)
    }, [currentPage])

    const handleSelect = (role) => {
        setPendingRole(role)
        navigate('/signin')
    }

    return (
        <div className='relative w-full min-h-screen bg-[#f5f7ff] overflow-hidden font-poppins'>
            <div className='absolute -bottom-32 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -left-28 opacity-70' />
            <div className='absolute -top-28 w-[600px] h-[600px] bg-[#B4C4FF] rounded-full blur-[120px] -right-28 opacity-70' />

            <div className='relative z-10 w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center items-center md:p-6 p-2 relative'>
                    <div className='absolute md:top-4 md:left-4 top-4 left-0 w-full flex justify-center md:block md:px-0 lg:px-0 xl:px-10'>
                        <img src={logo} alt='logo' className='w-52' />
                    </div>
                    <div className='w-full max-w-lg flex flex-col gap-y-8 mt-20 sm:mt-0 py-8'>
                        <div>
                            <h1 className='text-4xl font-semibold text-[#313131] md:text-left text-center'>
                                Profile
                            </h1>
                            <p className='text-base font-medium text-[#313131]/70 mt-4 md:text-left text-center'>
                                Select your correct profile
                            </p>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
                            {visibleProfiles.map((profile) => (
                                <button
                                    key={profile.label}
                                    type='button'
                                    disabled={profile.disabled}
                                    onClick={() => profile.role && handleSelect(profile.role)}
                                    className={`flex flex-col gap-y-2 items-center ${
                                        profile.disabled
                                            ? 'opacity-50 cursor-not-allowed'
                                            : 'cursor-pointer'
                                    }`}
                                >
                                    <img
                                        src={profile.image}
                                        className={`h-24 w-24 ${profile.imageClassName ?? ''}`}
                                        alt={profile.alt}
                                    />
                                    <p className='text-base font-medium text-black text-center'>
                                        {profile.label}
                                    </p>
                                </button>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className='flex justify-between items-center gap-4'>
                                <button
                                    type='button'
                                    onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                                    disabled={currentPage === 1}
                                    className='inline-flex items-center gap-2 text-sm font-medium text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#515DEF]'
                                >
                                    <ChevronLeft size={16} />
                                    Previous
                                </button>

                                <div className='flex items-center gap-2'>
                                    {Array.from({ length: totalPages }, (_, index) => {
                                        const page = index + 1
                                        const isActive = page === currentPage
                                        return (
                                            <button
                                                key={page}
                                                type='button'
                                                onClick={() => setCurrentPage(page)}
                                                className={`size-8 flex justify-center items-center text-sm font-medium rounded-full cursor-pointer transition-colors ${
                                                    isActive
                                                        ? 'bg-[#515DEF] text-white'
                                                        : 'bg-white text-[#515DEF] border border-[#E2E8F0] hover:bg-[#515DEF] hover:text-white'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    })}
                                </div>

                                <button
                                    type='button'
                                    onClick={() =>
                                        setCurrentPage((page) => Math.min(page + 1, totalPages))
                                    }
                                    disabled={currentPage === totalPages}
                                    className='inline-flex items-center gap-2 text-sm font-medium text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#515DEF]'
                                >
                                    Next
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        )}
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
