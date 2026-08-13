import React from 'react'
import { UsersRound } from 'lucide-react'
import { getAllRolesForManagement } from '../../../Common/RBAC/rolePermissionsData'

const RolesPage = () => {
    const roles = getAllRolesForManagement()

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex items-start gap-3'>
                    <div className='p-2.5 rounded-xl bg-[#515DEF]/10 text-[#515DEF]'>
                        <UsersRound size={22} />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-black'>Roles</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            System roles available in the ERP demo. Permission counts reflect the RBAC Permissions screen.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead className='text-xs bg-[#EDEEF5]'>
                            <tr>
                                <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Role ID</th>
                                <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Label</th>
                                <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Home Path</th>
                                <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((role) => (
                                <tr key={role.id} className='border-b border-[#f2f4f7]'>
                                    <td className='px-3 py-3 font-medium text-[#1E1E1E]'>{role.id}</td>
                                    <td className='px-3 py-3'>{role.label}</td>
                                    <td className='px-3 py-3 text-[#667085]'>{role.pathPrefix}</td>
                                    <td className='px-3 py-3'>
                                        {role.permissionCount} / {role.totalModules}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default RolesPage
