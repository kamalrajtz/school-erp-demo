import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Plus, ShieldCheck, Trash2, UserPlus } from 'lucide-react'
import { toast } from 'react-toastify'
import {
    CREATABLE_ROLE_LABELS,
    getAllCreatedUsers,
    getCreatedUsersByRole,
    updateUserStatus,
    deleteCreatedUser,
} from '../../../Common/RBAC/createdUsersData'
import {
    addAssignment,
    addSubject,
    getAssignments,
    getClasses,
    getSections,
    getSubjects,
    removeAssignment,
    removeSubject,
} from '../../../Common/RBAC/academicsCatalogData'

const ROUTE_BASE = '/admin/rbac/user-creation'
const inputClass = 'text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-3 py-2.5 w-full focus:outline-none focus:border-[#515DEF]'

const statusBadgeColor = {
    Active: 'bg-[#4CAF5033] text-[#4CAF50]',
    Inactive: 'bg-[#66708533] text-[#667085]',
}

const UserCreationPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tab = searchParams.get('tab') === 'structure' ? 'structure' : 'users'
    const [users, setUsers] = useState(() => getAllCreatedUsers())
    const [classes, setClasses] = useState(() => getClasses())
    const [sections, setSections] = useState(() => getSections())
    const [subjects, setSubjects] = useState(() => getSubjects())
    const [assignments, setAssignments] = useState(() => getAssignments())

    const [subjectInput, setSubjectInput] = useState('')
    const [assignmentForm, setAssignmentForm] = useState({
        teacherEmail: '',
        className: '',
        section: '',
        subject: '',
        classTeacher: 'No',
    })

    const teachers = useMemo(() => getCreatedUsersByRole('teacher').filter((u) => u.status === 'Active'), [users])

    useEffect(() => {
        if (tab === 'structure') {
            setClasses(getClasses())
            setSections(getSections())
            setSubjects(getSubjects())
            setAssignments(getAssignments())
        }
    }, [tab])

    const setTab = (next) => {
        setSearchParams(next === 'structure' ? { tab: 'structure' } : {})
    }

    const refreshUsers = () => setUsers(getAllCreatedUsers())
    const refreshCatalog = () => {
        setClasses(getClasses())
        setSections(getSections())
        setSubjects(getSubjects())
        setAssignments(getAssignments())
    }

    const handleToggleStatus = (user) => {
        const next = user.status === 'Active' ? 'Inactive' : 'Active'
        updateUserStatus(user.id, next)
        refreshUsers()
        toast.success(`User marked as ${next}.`)
    }

    const handleDeleteUser = (user) => {
        deleteCreatedUser(user.id)
        refreshUsers()
        toast.success('User removed.')
    }

    const handleAddSubject = () => {
        const result = addSubject(subjectInput)
        if (!result.success) {
            toast.error(result.message)
            return
        }
        setSubjectInput('')
        refreshCatalog()
        toast.success('Subject added.')
    }

    const handleAddAssignment = () => {
        const teacher = teachers.find((item) => item.email === assignmentForm.teacherEmail)
        const result = addAssignment({
            ...assignmentForm,
            teacherName: teacher?.name || '',
        })
        if (!result.success) {
            toast.error(result.message)
            return
        }
        setAssignmentForm({
            teacherEmail: '',
            className: '',
            section: '',
            subject: '',
            classTeacher: 'No',
        })
        refreshCatalog()
        toast.success('Class assignment created.')
    }

    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex items-start gap-3'>
                    <div className='p-2.5 rounded-xl bg-[#515DEF]/10 text-[#515DEF]'>
                        <UserPlus size={22} />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-black'>User Creation</h1>
                        <p className='text-sm text-[#667085] mt-1'>
                            Create Teachers, Students, PRM, and Coordinators. Manage subjects and teacher assignments here; create classes and sections under Class Details.
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 mt-4'>
                    <button
                        type='button'
                        onClick={() => setTab('users')}
                        className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                            tab === 'users' ? 'bg-[#515DEF] text-white' : 'bg-[#F2F4F7] text-[#667085]'
                        }`}
                    >
                        Users
                    </button>
                    <button
                        type='button'
                        onClick={() => setTab('structure')}
                        className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                            tab === 'structure' ? 'bg-[#515DEF] text-white' : 'bg-[#F2F4F7] text-[#667085]'
                        }`}
                    >
                        Academic Structure
                    </button>
                </div>
            </div>

            {tab === 'users' ? (
                <div className='bg-white rounded-2xl shadow-md p-4'>
                    <div className='flex justify-between items-center gap-3 mb-4 flex-wrap'>
                        <h2 className='text-lg font-semibold text-black'>Created Users</h2>
                        <NavLink
                            to={`${ROUTE_BASE}/add`}
                            className='inline-flex items-center gap-2 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90'
                        >
                            <Plus size={16} />
                            Create User
                        </NavLink>
                    </div>

                    {users.length === 0 ? (
                        <div className='py-12 text-center'>
                            <p className='text-[#0C1E5B] font-semibold'>No users created yet</p>
                            <p className='text-sm text-[#667085] mt-2'>Start by creating a Teacher and Students for the Mark Entry demo.</p>
                        </div>
                    ) : (
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left'>
                                <thead className='text-xs bg-[#EDEEF5]'>
                                    <tr>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>ID</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Name</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Email</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Role</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Class</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Status</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} className='border-b border-[#f2f4f7]'>
                                            <td className='px-3 py-3'>{user.id}</td>
                                            <td className='px-3 py-3 font-medium text-[#1E1E1E]'>{user.name}</td>
                                            <td className='px-3 py-3'>{user.email}</td>
                                            <td className='px-3 py-3'>{CREATABLE_ROLE_LABELS[user.role] || user.role}</td>
                                            <td className='px-3 py-3'>
                                                {user.className && user.section ? `${user.className}-${user.section}` : '—'}
                                            </td>
                                            <td className='px-3 py-3'>
                                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${statusBadgeColor[user.status]}`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className='px-3 py-3'>
                                                <div className='flex items-center gap-2'>
                                                    <button
                                                        type='button'
                                                        onClick={() => handleToggleStatus(user)}
                                                        className='text-xs text-[#515DEF] hover:underline cursor-pointer'
                                                    >
                                                        {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                                                    </button>
                                                    <button
                                                        type='button'
                                                        onClick={() => handleDeleteUser(user)}
                                                        className='text-[#F44336] cursor-pointer'
                                                        aria-label='Delete user'
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            ) : (
                <div className='space-y-6'>
                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <h3 className='font-semibold text-black'>Classes & Sections</h3>
                        <p className='text-sm text-[#667085] mt-1'>
                            Create and manage classes and sections from Class Details. Current catalog:
                            {' '}
                            <span className='text-[#1E1E1E] font-medium'>
                                {classes.length} class{classes.length === 1 ? '' : 'es'}
                            </span>
                            {', '}
                            <span className='text-[#1E1E1E] font-medium'>
                                {sections.length} section{sections.length === 1 ? '' : 's'}
                            </span>
                            .
                        </p>
                        <NavLink
                            to='/admin/class/class-details'
                            className='inline-flex items-center gap-2 mt-4 bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md hover:opacity-90'
                        >
                            Open Class Details
                        </NavLink>
                        {(classes.length > 0 || sections.length > 0) && (
                            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#667085]'>
                                <div className='rounded-md border border-[#EDEEF5] p-3'>
                                    <p className='font-medium text-[#1E1E1E] mb-2'>Classes</p>
                                    {classes.length === 0 ? 'None yet.' : classes.map((item) => `Class ${item}`).join(', ')}
                                </div>
                                <div className='rounded-md border border-[#EDEEF5] p-3'>
                                    <p className='font-medium text-[#1E1E1E] mb-2'>Sections</p>
                                    {sections.length === 0 ? 'None yet.' : sections.join(', ')}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <h3 className='font-semibold text-black mb-3'>Subjects</h3>
                        <div className='flex gap-2 mb-3 max-w-xl'>
                            <input className={inputClass} value={subjectInput} onChange={(e) => setSubjectInput(e.target.value)} placeholder='e.g. Mathematics' />
                            <button type='button' onClick={handleAddSubject} className='bg-[#515DEF] text-white px-3 rounded-md text-sm cursor-pointer'>Add</button>
                        </div>
                        <ul className='space-y-2 text-sm text-[#667085]'>
                            {subjects.length === 0 && <li>No subjects yet.</li>}
                            {subjects.map((item) => (
                                <li key={item} className='flex justify-between items-center border border-[#EDEEF5] rounded-md px-3 py-2 max-w-xl'>
                                    <span>{item}</span>
                                    <button type='button' onClick={() => { removeSubject(item); refreshCatalog(); toast.success('Subject removed.') }} className='text-[#F44336] cursor-pointer'><Trash2 size={14} /></button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex items-center gap-2 mb-4'>
                            <ShieldCheck size={18} className='text-[#515DEF]' />
                            <h3 className='font-semibold text-black'>Teacher Class Assignments</h3>
                        </div>
                        {(classes.length === 0 || sections.length === 0) && (
                            <p className='text-sm text-[#E65100] mb-4'>
                                Add classes and sections under Class Details before assigning teachers.
                            </p>
                        )}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-4'>
                            <select
                                className={inputClass}
                                value={assignmentForm.teacherEmail}
                                onChange={(e) => setAssignmentForm((prev) => ({ ...prev, teacherEmail: e.target.value }))}
                            >
                                <option value=''>Select teacher</option>
                                {teachers.map((teacher) => (
                                    <option key={teacher.id} value={teacher.email}>{teacher.name} ({teacher.email})</option>
                                ))}
                            </select>
                            <select
                                className={inputClass}
                                value={assignmentForm.className}
                                onChange={(e) => setAssignmentForm((prev) => ({ ...prev, className: e.target.value }))}
                            >
                                <option value=''>Class</option>
                                {classes.map((item) => <option key={item} value={item}>{item}</option>)}
                            </select>
                            <select
                                className={inputClass}
                                value={assignmentForm.section}
                                onChange={(e) => setAssignmentForm((prev) => ({ ...prev, section: e.target.value }))}
                            >
                                <option value=''>Section</option>
                                {sections.map((item) => <option key={item} value={item}>{item}</option>)}
                            </select>
                            <select
                                className={inputClass}
                                value={assignmentForm.subject}
                                onChange={(e) => setAssignmentForm((prev) => ({ ...prev, subject: e.target.value }))}
                            >
                                <option value=''>Subject</option>
                                {subjects.map((item) => <option key={item} value={item}>{item}</option>)}
                            </select>
                            <select
                                className={inputClass}
                                value={assignmentForm.classTeacher}
                                onChange={(e) => setAssignmentForm((prev) => ({ ...prev, classTeacher: e.target.value }))}
                            >
                                <option value='No'>Class Teacher: No</option>
                                <option value='Yes'>Class Teacher: Yes</option>
                            </select>
                        </div>
                        <button type='button' onClick={handleAddAssignment} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md cursor-pointer'>
                            Assign Class
                        </button>

                        <div className='relative overflow-x-auto mt-6'>
                            <table className='w-full text-sm text-left'>
                                <thead className='text-xs bg-[#EDEEF5]'>
                                    <tr>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Teacher</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Class</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Section</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Subject</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Class Teacher</th>
                                        <th className='px-3 py-3 text-[#0C1E5B] font-medium uppercase'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignments.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className='px-3 py-8 text-center text-[#667085]'>No assignments yet.</td>
                                        </tr>
                                    ) : assignments.map((item) => (
                                        <tr key={item.id} className='border-b border-[#f2f4f7]'>
                                            <td className='px-3 py-3'>{item.teacherName || item.teacherEmail}</td>
                                            <td className='px-3 py-3'>{item.className}</td>
                                            <td className='px-3 py-3'>{item.section}</td>
                                            <td className='px-3 py-3'>{item.subject}</td>
                                            <td className='px-3 py-3'>{item.classTeacher}</td>
                                            <td className='px-3 py-3'>
                                                <button
                                                    type='button'
                                                    onClick={() => { removeAssignment(item.id); refreshCatalog(); toast.success('Assignment removed.') }}
                                                    className='text-[#F44336] cursor-pointer'
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default UserCreationPage
