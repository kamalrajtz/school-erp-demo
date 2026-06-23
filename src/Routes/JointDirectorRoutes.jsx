import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/JointDirector/Dashboard/Dashboard'
import TaskManagement from '../Pages/JointDirector/TaskManagement/TaskManagement'
import AddTask from '../Pages/JointDirector/TaskManagement/AddTask'
import ViewEmployeeProfile from '../Pages/JointDirector/EmployeeManagement/ViewEmployeeProfile'
import DriversList from '../Pages/JointDirector/EmployeeManagement/DriversList'
import ViewDriver from '../Pages/JointDirector/EmployeeManagement/ViewDriver'
import RequestApprovals from '../Pages/JointDirector/RequestApprovals/RequestApprovals'
import ViewRequestApproval from '../Pages/JointDirector/RequestApprovals/ViewRequestApproval'
import Escalations from '../Pages/JointDirector/Escalations/Escalations'
import ViewEscalation from '../Pages/JointDirector/Escalations/ViewEscalation'
import MeetingsCalendar from '../Pages/JointDirector/MeetingsCalendar/MeetingsCalendar'
import AssetsInventoryOverview from '../Pages/JointDirector/AssetsInventory/AssetsInventoryOverview'
import ViewAssetInventoryItem from '../Pages/JointDirector/AssetsInventory/ViewAssetInventoryItem'
import BroadcastList from '../Pages/JointDirector/Broadcast/BroadcastList'
import AddBroadcast from '../Pages/JointDirector/Broadcast/AddBroadcast'
import ViewBroadcast from '../Pages/JointDirector/Broadcast/ViewBroadcast'

const JointDirectorRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/joint-director/dashboard" element={<Dashboard />} />
            <Route path="/joint-director/task-management" element={<TaskManagement />} />
            <Route path="/joint-director/task-management/add-task" element={<AddTask />} />
            <Route path="/joint-director/employee-management/drivers" element={<DriversList />} />
            <Route path="/joint-director/employee-management/drivers/view/:id" element={<ViewDriver />} />
            <Route path="/joint-director/employee-management/:roleKey" element={<ViewEmployeeProfile />} />
            <Route path="/joint-director/employee-management" element={<Navigate to="/joint-director/employee-management/jd-assistant" replace />} />
            <Route path="/joint-director/request-approvals" element={<RequestApprovals />} />
            <Route path="/joint-director/request-approvals/view-request" element={<ViewRequestApproval />} />
            <Route path="/joint-director/escalations" element={<Escalations />} />
            <Route path="/joint-director/escalations/view-escalation/:id" element={<ViewEscalation />} />
            <Route path="/joint-director/meetings-calendar" element={<MeetingsCalendar />} />
            <Route path="/joint-director/assets-inventory" element={<AssetsInventoryOverview />} />
            <Route path="/joint-director/assets-inventory/view/:id" element={<ViewAssetInventoryItem />} />
            <Route path="/joint-director/broadcast" element={<BroadcastList />} />
            <Route path="/joint-director/broadcast/add-broadcast" element={<AddBroadcast />} />
            <Route path="/joint-director/broadcast/view-broadcast/:id" element={<ViewBroadcast />} />
            <Route path="*" element={<Navigate to="/joint-director/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default JointDirectorRoutes
