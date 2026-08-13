import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, UserPlus } from 'lucide-react'
import { toast } from 'react-toastify'
import {
    CREATABLE_ROLE_LABELS,
    CREATABLE_ROLES,
    DEFAULT_USER_FORM,
    USER_STATUSES,
    createUser,
} from '../../../Common/RBAC/createdUsersData'
import { getClasses, getSections } from '../../../Common/RBAC/academicsCatalogData'
import { GENDERS } from '../../Teacher/StudentsList/studentsListData'

const ROUTE_BASE = '/admin/rbac/user-creation'
const inputClass = 'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 w-full focus:outline-none focus:border-[#515DEF]'

const CreateUserPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState(DEFAULT_USER_FORM)
    const [error, setError] = useState('')
    const classes = getClasses()
    const sections = getSections()

    const updateField = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = () => {
        setError('')
        const result = createUser(form)
        if (!result.success) {
            setError(result.message)
            return
        }

        toast.success('User created successfully.')
        navigate(ROUTE_BASE)
    }

    const isStudent = form.role === 'student'

    return (
        <section className='space-y-6'>
            <button
                type='button'
                onClick={() => navigate(ROUTE_BASE)}
                className='inline-flex items-center gap-2 text-sm text-[#515DEF] border border-[#515DEF] rounded-md px-4 py-2 hover:bg-[#515DEF] hover:text-white transition-colors cursor-pointer'
            >
                <ArrowLeft size={18} />
                Back to list
            </button>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 rounded-xl bg-[#515DEF]/10 text-[#515DEF]'>
                        <UserPlus size={20} />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>Create User</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            Set the login email yourself. OTP remains any 6-digit code at sign-in.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-lg font-semibold text-black mb-6'>Account Information</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='role' className='text-base font-medium text-[#1E1E1E]'>Role</label>
                        <select id='role' value={form.role} onChange={(e) => updateField('role', e.target.value)} className={inputClass}>
                            {CREATABLE_ROLES.map((role) => (
                                <option key={role} value={role}>{CREATABLE_ROLE_LABELS[role]}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='name' className='text-base font-medium text-[#1E1E1E]'>Full Name</label>
                        <input id='name' value={form.name} onChange={(e) => updateField('name', e.target.value)} className={inputClass} placeholder='Enter full name' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='email' className='text-base font-medium text-[#1E1E1E]'>Email / User ID</label>
                        <input id='email' type='email' value={form.email} onChange={(e) => updateField('email', e.target.value)} className={inputClass} placeholder='user@school.com' />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='status' className='text-base font-medium text-[#1E1E1E]'>Status</label>
                        <select id='status' value={form.status} onChange={(e) => updateField('status', e.target.value)} className={inputClass}>
                            {USER_STATUSES.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='mobile' className='text-base font-medium text-[#1E1E1E]'>Mobile</label>
                        <input id='mobile' value={form.mobileNumber} onChange={(e) => updateField('mobileNumber', e.target.value)} className={inputClass} placeholder='Optional' />
                    </div>

                    {isStudent && (
                        <>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor='className' className='text-base font-medium text-[#1E1E1E]'>Class</label>
                                <select id='className' value={form.className} onChange={(e) => updateField('className', e.target.value)} className={inputClass}>
                                    <option value=''>Select class</option>
                                    {classes.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor='section' className='text-base font-medium text-[#1E1E1E]'>Section</label>
                                <select id='section' value={form.section} onChange={(e) => updateField('section', e.target.value)} className={inputClass}>
                                    <option value=''>Select section</option>
                                    {sections.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor='gender' className='text-base font-medium text-[#1E1E1E]'>Gender</label>
                                <select id='gender' value={form.gender} onChange={(e) => updateField('gender', e.target.value)} className={inputClass}>
                                    {GENDERS.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor='roll' className='text-base font-medium text-[#1E1E1E]'>Roll Number</label>
                                <input id='roll' value={form.rollNumber} onChange={(e) => updateField('rollNumber', e.target.value)} className={inputClass} placeholder='Auto if blank' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor='admission' className='text-base font-medium text-[#1E1E1E]'>Admission Number</label>
                                <input id='admission' value={form.admissionNumber} onChange={(e) => updateField('admissionNumber', e.target.value)} className={inputClass} placeholder='Auto if blank' />
                            </div>
                        </>
                    )}
                </div>

                {error && <p className='text-sm text-[#F44336] mt-4'>{error}</p>}

                {(isStudent && (classes.length === 0 || sections.length === 0)) && (
                    <p className='text-sm text-[#E65100] mt-4'>
                        Create at least one class and section under Class Details before adding students.
                    </p>
                )}

                <div className='mt-6'>
                    <button
                        type='button'
                        onClick={handleSubmit}
                        className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-6 py-2.5 rounded-md hover:opacity-90 cursor-pointer'
                    >
                        <Save size={16} />
                        Create User
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CreateUserPage
