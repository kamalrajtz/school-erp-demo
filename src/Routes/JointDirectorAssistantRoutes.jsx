import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/JointDirectorAssistant/Dashboard/Dashboard'
import TaskManagement from '../Pages/JointDirectorAssistant/TaskManagement/TaskManagement'
import AddTask from '../Pages/JointDirectorAssistant/TaskManagement/AddTask'
import ViewEmployeeProfile from '../Pages/JointDirectorAssistant/EmployeeManagement/ViewEmployeeProfile'
import DriversList from '../Pages/JointDirectorAssistant/EmployeeManagement/DriversList'
import ViewDriver from '../Pages/JointDirectorAssistant/EmployeeManagement/ViewDriver'
import RequestApprovals from '../Pages/JointDirectorAssistant/RequestApprovals/RequestApprovals'
import ViewRequestApproval from '../Pages/JointDirectorAssistant/RequestApprovals/ViewRequestApproval'
import Escalations from '../Pages/JointDirectorAssistant/Escalations/Escalations'
import ViewEscalation from '../Pages/JointDirectorAssistant/Escalations/ViewEscalation'
import MeetingsCalendar from '../Pages/JointDirectorAssistant/MeetingsCalendar/MeetingsCalendar'
import AssetsInventoryOverview from '../Pages/JointDirectorAssistant/AssetsInventory/AssetsInventoryOverview'
import ViewAssetInventoryItem from '../Pages/JointDirectorAssistant/AssetsInventory/ViewAssetInventoryItem'
import BroadcastList from '../Pages/JointDirectorAssistant/Broadcast/BroadcastList'
import AddBroadcast from '../Pages/JointDirectorAssistant/Broadcast/AddBroadcast'
import ViewBroadcast from '../Pages/JointDirectorAssistant/Broadcast/ViewBroadcast'

const JointDirectorAssistantRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/joint-director-assistant/dashboard" element={<Dashboard />} />
            <Route path="/joint-director-assistant/task-management" element={<TaskManagement />} />
            <Route path="/joint-director-assistant/task-management/add-task" element={<AddTask />} />
            <Route path="/joint-director-assistant/employee-management/drivers" element={<DriversList />} />
            <Route path="/joint-director-assistant/employee-management/drivers/view/:id" element={<ViewDriver />} />
            <Route path="/joint-director-assistant/employee-management/:roleKey" element={<ViewEmployeeProfile />} />
            <Route path="/joint-director-assistant/employee-management" element={<Navigate to="/joint-director-assistant/employee-management/canteen-manager" replace />} />
            <Route path="/joint-director-assistant/request-approvals" element={<RequestApprovals />} />
            <Route path="/joint-director-assistant/request-approvals/view-request" element={<ViewRequestApproval />} />
            <Route path="/joint-director-assistant/escalations" element={<Escalations />} />
            <Route path="/joint-director-assistant/escalations/view-escalation/:id" element={<ViewEscalation />} />
            <Route path="/joint-director-assistant/meetings-calendar" element={<MeetingsCalendar />} />
            <Route path="/joint-director-assistant/assets-inventory" element={<AssetsInventoryOverview />} />
            <Route path="/joint-director-assistant/assets-inventory/view/:id" element={<ViewAssetInventoryItem />} />
            <Route path="/joint-director-assistant/broadcast" element={<BroadcastList />} />
            <Route path="/joint-director-assistant/broadcast/add-broadcast" element={<AddBroadcast />} />
            <Route path="/joint-director-assistant/broadcast/view-broadcast/:id" element={<ViewBroadcast />} />
            <Route path="*" element={<Navigate to="/joint-director-assistant/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default JointDirectorAssistantRoutes
