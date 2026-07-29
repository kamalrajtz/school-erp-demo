import { ROLES } from '../../context/AuthContext'
import { DEMO_USER_ID_BY_ROLE, getRoleLabel, getUsersByRole } from './taskManagementConfig'

const STORAGE_KEY = 'school-erp-task-management'

const formatDate = (date) => {
    const d = date instanceof Date ? date : new Date(date)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}-${month}-${year}`
}

const buildTask = ({
    id,
    title,
    description,
    assigneeRole,
    assigneeUserIds,
    assignedByRole,
    assignedBy,
    priority,
    assignedDate,
    dueDate,
    status,
}) => {
    const users = getUsersByRole(assigneeRole)
    const allSelected =
        users.length > 0 && users.every((user) => assigneeUserIds.includes(user.id))
    const assigneeNames = allSelected
        ? ['All']
        : users.filter((user) => assigneeUserIds.includes(user.id)).map((user) => user.name)

    return {
        id,
        taskId: id,
        title,
        description,
        assigneeRole,
        assigneeUserIds,
        assigneeNames,
        assignedByRole,
        assignedBy,
        priority,
        assignedDate,
        dueDate,
        status,
    }
}

const DEFAULT_TASKS = [
    buildTask({
        id: 'ADM-TASK-001',
        title: 'Prepare Term 2 Fee Report',
        description: 'Compile and submit the Term 2 fee collection summary for all departments.',
        assigneeRole: ROLES.ACCOUNT_HEAD,
        assigneeUserIds: ['AH-001'],
        assignedByRole: ROLES.ADMIN,
        assignedBy: 'Admin',
        priority: 'High',
        assignedDate: '10-03-2026',
        dueDate: '18-03-2026',
        status: 'In Progress',
    }),
    buildTask({
        id: 'ADM-TASK-002',
        title: 'Review Academic Compliance',
        description: 'Review quarterly academic compliance checklist and sign off.',
        assigneeRole: ROLES.DIRECTOR,
        assigneeUserIds: ['DIR-001'],
        assignedByRole: ROLES.ADMIN,
        assignedBy: 'Admin',
        priority: 'High',
        assignedDate: '08-03-2026',
        dueDate: '15-03-2026',
        status: 'Pending',
    }),
    buildTask({
        id: 'ADM-TASK-003',
        title: 'Audit Operations Review',
        description: 'Joint Director (Audit) to complete operations audit summary.',
        assigneeRole: ROLES.JOINT_DIRECTOR_AUDIT,
        assigneeUserIds: ['JDA-001'],
        assignedByRole: ROLES.ADMIN,
        assignedBy: 'Admin',
        priority: 'Medium',
        assignedDate: '05-03-2026',
        dueDate: '20-03-2026',
        status: 'Pending',
    }),
    buildTask({
        id: 'DIR-TASK-001',
        title: 'Coordinate Board Exam Logistics',
        description: 'Principal to coordinate exam hall setup and invigilation roster.',
        assigneeRole: ROLES.PRINCIPAL,
        assigneeUserIds: ['PRIN-001'],
        assignedByRole: ROLES.DIRECTOR,
        assignedBy: 'Director of Academics',
        priority: 'High',
        assignedDate: '09-03-2026',
        dueDate: '19-03-2026',
        status: 'In Progress',
    }),
    buildTask({
        id: 'DIR-TASK-002',
        title: 'Front Office Admission Drive',
        description: 'PRM team to prepare admission enquiry follow-up report.',
        assigneeRole: ROLES.PRM,
        assigneeUserIds: ['FO-001', 'FO-002'],
        assignedByRole: ROLES.DIRECTOR,
        assignedBy: 'Director of Academics',
        priority: 'Medium',
        assignedDate: '11-03-2026',
        dueDate: '22-03-2026',
        status: 'Pending',
    }),
    buildTask({
        id: 'PRIN-TASK-001',
        title: 'Lesson Plan Review – Term 2',
        description: 'Coordinators to review and submit lesson plan compliance report.',
        assigneeRole: ROLES.COORDINATOR,
        assigneeUserIds: ['CRD-001', 'CRD-002'],
        assignedByRole: ROLES.PRINCIPAL,
        assignedBy: 'Dr. Meera Nair',
        priority: 'High',
        assignedDate: '12-03-2026',
        dueDate: '25-03-2026',
        status: 'Pending',
    }),
    buildTask({
        id: 'PRIN-TASK-002',
        title: 'Library Inventory Audit',
        description: 'Conduct a full inventory audit of library assets and submit discrepancy report.',
        assigneeRole: ROLES.LIBRARIAN,
        assigneeUserIds: ['LIB-001'],
        assignedByRole: ROLES.PRINCIPAL,
        assignedBy: 'Dr. Meera Nair',
        priority: 'Medium',
        assignedDate: '05-03-2026',
        dueDate: '20-03-2026',
        status: 'In Progress',
    }),
    buildTask({
        id: 'PRM-TASK-001',
        title: 'Gate Duty Roster Update',
        description: 'Gate Keeper Manager to update weekly duty roster.',
        assigneeRole: ROLES.GATEKEEPER_MANAGER,
        assigneeUserIds: ['GKM-001'],
        assignedByRole: ROLES.PRM,
        assignedBy: 'Ravi Kumar',
        priority: 'Medium',
        assignedDate: '14-03-2026',
        dueDate: '17-03-2026',
        status: 'Pending',
    }),
    buildTask({
        id: 'CRD-TASK-001',
        title: 'Submit Unit Test Marks',
        description: 'Teachers to upload unit test marks for Class 10 sections.',
        assigneeRole: ROLES.TEACHER,
        assigneeUserIds: ['TCH-001'],
        assignedByRole: ROLES.COORDINATOR,
        assignedBy: 'Priya Nair',
        priority: 'High',
        assignedDate: '13-03-2026',
        dueDate: '21-03-2026',
        status: 'Pending',
    }),
    buildTask({
        id: 'GKM-TASK-001',
        title: 'Morning Gate Checklist',
        description: 'Complete morning gate security checklist before 8:00 AM.',
        assigneeRole: ROLES.GATEKEEPER,
        assigneeUserIds: ['GK-001'],
        assignedByRole: ROLES.GATEKEEPER_MANAGER,
        assignedBy: 'Vignesh S.',
        priority: 'High',
        assignedDate: '15-03-2026',
        dueDate: '16-03-2026',
        status: 'Pending',
    }),
]

const readTasks = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
            const parsed = JSON.parse(raw)
            if (Array.isArray(parsed) && parsed.length) return parsed
        }
    } catch {
        // ignore invalid storage
    }
    return DEFAULT_TASKS
}

const writeTasks = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export const getAllTasks = () => readTasks()

export const getTasksAssignedByRole = (assignerRole) =>
    readTasks().filter((task) => task.assignedByRole === assignerRole)

export const isTaskAssignedToUser = (task, roleKey, userId) => {
    if (task.assigneeRole !== roleKey) return false
    if (!userId) return true
    return task.assigneeUserIds?.includes(userId)
}

export const getMyTasks = (roleKey, userId) =>
    readTasks().filter((task) => isTaskAssignedToUser(task, roleKey, userId))

export const getTaskById = (taskId) => readTasks().find((task) => task.id === taskId)

export const addTask = (payload) => {
    const tasks = readTasks()
    const prefix = payload.assignedByRole?.slice(0, 3).toUpperCase() ?? 'TSK'
    const nextNum = tasks.length + 1
    const id = `${prefix}-TASK-${String(nextNum).padStart(3, '0')}`

    const users = getUsersByRole(payload.assigneeRole)
    const allSelected =
        users.length > 0 && users.every((user) => payload.assigneeUserIds.includes(user.id))
    const assigneeNames = allSelected
        ? ['All']
        : users.filter((user) => payload.assigneeUserIds.includes(user.id)).map((user) => user.name)

    const task = {
        id,
        taskId: id,
        title: payload.title,
        description: payload.description,
        assigneeRole: payload.assigneeRole,
        assigneeUserIds: payload.assigneeUserIds,
        assigneeNames,
        assignedByRole: payload.assignedByRole,
        assignedBy: payload.assignedBy,
        priority: payload.priority,
        assignedDate: payload.assignedDate ? formatDate(payload.assignedDate) : formatDate(new Date()),
        dueDate: payload.dueDate ? formatDate(payload.dueDate) : formatDate(new Date()),
        status: payload.status ?? 'Pending',
    }

    tasks.unshift(task)
    writeTasks(tasks)
    return task
}

export const updateTaskStatus = (taskId, status) => {
    const tasks = readTasks()
    const index = tasks.findIndex((task) => task.id === taskId)
    if (index === -1) return null
    tasks[index] = { ...tasks[index], status }
    writeTasks(tasks)
    return tasks[index]
}

export const deleteTask = (taskId) => {
    const tasks = readTasks().filter((task) => task.id !== taskId)
    writeTasks(tasks)
}

export const getDemoUserId = (roleKey) => DEMO_USER_ID_BY_ROLE[roleKey] ?? null

export const getAssignedByLabel = (roleKey) => getRoleLabel(roleKey)
