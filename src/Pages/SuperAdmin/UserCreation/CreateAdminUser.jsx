import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, ShieldCheck } from 'lucide-react'
import AdminPermissionsPanel from './Components/AdminPermissionsPanel'
import {
    ADMIN_ROLE_LABEL,
    ADMIN_USER_STATUSES,
    buildDefaultPermissions,
    createAdminUser,
    DEFAULT_ADMIN_FORM,
    ROUTE_BASE,
} from './adminUsersData'

const inputClass = 'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 w-full focus:outline-none focus:border-[#515DEF]'

const CreateAdminUser = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState(DEFAULT_ADMIN_FORM)
    const [error, setError] = useState('')

    const updateField = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const togglePermission = (key) => {
        setForm((prev) => ({
            ...prev,
            permissions: {
                ...prev.permissions,
                [key]: !prev.permissions[key],
            },
        }))
    }

    const toggleAllPermissions = (enabled) => {
        setForm((prev) => ({
            ...prev,
            permissions: buildDefaultPermissions(enabled),
        }))
    }

    const handleSubmit = () => {
        if (!form.name.trim() || !form.email.trim() || !form.username.trim() || !form.password.trim()) {
            setError('Name, email, username, and password are required.')
            return
        }

        const result = createAdminUser(form)
        if (!result.success) {
            setError(result.message)
            return
        }

        navigate(`${ROUTE_BASE}/view/${result.user.id}`)
    }

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
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>Create Administrator User</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            Only Administrator role accounts can be created from Super Admin. Assign module permissions below.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-lg font-semibold text-black mb-6'>Account Information</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='name' className='text-base font-medium text-[#1E1E1E]'>Full Name</label>
                        <input
                            id='name'
                            type='text'
                            value={form.name}
                            onChange={(event) => updateField('name', event.target.value)}
                            className={inputClass}
                            placeholder='Enter full name'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='email' className='text-base font-medium text-[#1E1E1E]'>Email</label>
                        <input
                            id='email'
                            type='email'
                            value={form.email}
                            onChange={(event) => updateField('email', event.target.value)}
                            className={inputClass}
                            placeholder='admin.user@school.com'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='mobile' className='text-base font-medium text-[#1E1E1E]'>Mobile Number</label>
                        <input
                            id='mobile'
                            type='text'
                            value={form.mobileNumber}
                            onChange={(event) => updateField('mobileNumber', event.target.value)}
                            className={inputClass}
                            placeholder='9876543210'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='employee-id' className='text-base font-medium text-[#1E1E1E]'>Employee ID</label>
                        <input
                            id='employee-id'
                            type='text'
                            value={form.employeeId}
                            onChange={(event) => updateField('employeeId', event.target.value)}
                            className={inputClass}
                            placeholder='Auto-generated if empty'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='department' className='text-base font-medium text-[#1E1E1E]'>Department</label>
                        <input
                            id='department'
                            type='text'
                            value={form.department}
                            onChange={(event) => updateField('department', event.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='role' className='text-base font-medium text-[#1E1E1E]'>Role</label>
                        <input
                            id='role'
                            type='text'
                            value={ADMIN_ROLE_LABEL}
                            readOnly
                            className={`${inputClass} bg-[#FAFBFF] text-[#515DEF] font-semibold cursor-not-allowed`}
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='username' className='text-base font-medium text-[#1E1E1E]'>Username</label>
                        <input
                            id='username'
                            type='text'
                            value={form.username}
                            onChange={(event) => updateField('username', event.target.value)}
                            className={inputClass}
                            placeholder='Login username'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='password' className='text-base font-medium text-[#1E1E1E]'>Password</label>
                        <input
                            id='password'
                            type='password'
                            value={form.password}
                            onChange={(event) => updateField('password', event.target.value)}
                            className={inputClass}
                            placeholder='Demo password'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor='status' className='text-base font-medium text-[#1E1E1E]'>Status</label>
                        <select
                            id='status'
                            value={form.status}
                            onChange={(event) => updateField('status', event.target.value)}
                            className={inputClass}
                        >
                            {ADMIN_USER_STATUSES.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <AdminPermissionsPanel
                    permissions={form.permissions}
                    onToggle={togglePermission}
                    onToggleAll={toggleAllPermissions}
                />
            </div>

            {error && (
                <div className='rounded-xl border border-[#FF572233] bg-[#FF57220D] px-4 py-3 text-sm text-[#FF5722]'>
                    {error}
                </div>
            )}

            <div className='flex sm:justify-end justify-center gap-x-4'>
                <button
                    type='button'
                    onClick={() => navigate(ROUTE_BASE)}
                    className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white transition-all duration-200 cursor-pointer md:w-auto w-full'
                >
                    Discard
                </button>
                <button
                    type='button'
                    onClick={handleSubmit}
                    className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full inline-flex items-center justify-center gap-2'
                >
                    <Save size={16} />
                    Create Admin User
                </button>
            </div>
        </section>
    )
}

export default CreateAdminUser
