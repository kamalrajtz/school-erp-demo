import React, { useMemo, useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { toast } from 'react-toastify'
import { ROLES } from '../../../context/AuthContext'
import {
    ROLE_LABELS,
    ROLE_PERMISSION_MODULES,
    buildDefaultRolePermissions,
    getPermissionsForRole,
    setPermissionsForRole,
} from '../../../Common/RBAC/rolePermissionsData'

const selectableModules = ROLE_PERMISSION_MODULES.filter((module) => !module.alwaysOn)

const PermissionsPage = () => {
    const roleOptions = useMemo(
        () => Object.values(ROLES).map((role) => ({
            id: role,
            label: ROLE_LABELS[role] || role,
        })),
        [],
    )
    const [selectedRole, setSelectedRole] = useState(ROLES.TEACHER)
    const [permissions, setPermissions] = useState(() => getPermissionsForRole(ROLES.TEACHER))

    const selectedCount = selectableModules.filter((module) => permissions[module.key]).length
    const allSelected = selectedCount === selectableModules.length

    const handleRoleChange = (role) => {
        setSelectedRole(role)
        setPermissions(getPermissionsForRole(role))
    }

    const togglePermission = (key) => {
        setPermissions((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const toggleAll = (enabled) => {
        setPermissions(buildDefaultRolePermissions(enabled))
    }

    const handleSave = () => {
        setPermissionsForRole(selectedRole, permissions)
        toast.success('Permissions saved.')
    }

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex items-start gap-3'>
                    <div className='p-2.5 rounded-xl bg-[#515DEF]/10 text-[#515DEF]'>
                        <ShieldCheck size={22} />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-black'>Permissions</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            Assign module-level access for each role. Dashboard access remains always available.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4 space-y-6'>
                <div className='flex flex-col gap-y-2 max-w-md'>
                    <label htmlFor='role' className='text-base font-medium text-[#1E1E1E]'>Role</label>
                    <select
                        id='role'
                        value={selectedRole}
                        onChange={(e) => handleRoleChange(e.target.value)}
                        className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-3 w-full focus:outline-none focus:border-[#515DEF]'
                    >
                        {roleOptions.map((role) => (
                            <option key={role.id} value={role.id}>{role.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <div className='flex flex-wrap items-center justify-between gap-3 mb-3'>
                        <label className='text-sm font-medium text-[#808080]'>Module Permissions</label>
                        <button
                            type='button'
                            onClick={() => toggleAll(!allSelected)}
                            className='text-xs font-semibold text-[#515DEF] hover:underline cursor-pointer'
                        >
                            {allSelected ? 'Clear All' : 'Select All'}
                        </button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 rounded-xl border border-[#EDEEF5] p-3 bg-[#FAFAFA]'>
                        {ROLE_PERMISSION_MODULES.filter((module) => module.alwaysOn).map((module) => (
                            <label
                                key={module.key}
                                className='flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-[#515DEF1A] text-[#515DEF] border border-[#515DEF33] cursor-default'
                            >
                                <input type='checkbox' checked disabled className='accent-[#515DEF]' />
                                {module.label}
                            </label>
                        ))}
                        {selectableModules.map((module) => (
                            <label
                                key={module.key}
                                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm cursor-pointer transition-colors ${
                                    permissions[module.key]
                                        ? 'bg-[#515DEF1A] text-[#515DEF] border border-[#515DEF33]'
                                        : 'bg-white text-[#667085] border border-[#EDEEF5]'
                                }`}
                            >
                                <input
                                    type='checkbox'
                                    checked={Boolean(permissions[module.key])}
                                    onChange={() => togglePermission(module.key)}
                                    className='accent-[#515DEF]'
                                />
                                {module.label}
                            </label>
                        ))}
                    </div>
                    <p className='text-xs text-[#667085] mt-2'>
                        {selectedCount} of {selectableModules.length} modules selected for {ROLE_LABELS[selectedRole] || selectedRole}.
                    </p>
                </div>

                <button
                    type='button'
                    onClick={handleSave}
                    className='bg-[#515DEF] text-white text-sm px-6 py-2.5 rounded-md hover:opacity-90 cursor-pointer'
                >
                    Save Permissions
                </button>
            </div>
        </section>
    )
}

export default PermissionsPage
