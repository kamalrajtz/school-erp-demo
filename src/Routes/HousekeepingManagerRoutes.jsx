import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/HousekeepingManager/Dashboard/Dashboard'
import { TaskManagementRoutes } from '../Common/TaskManagement/TaskManagementRoutes'
import Inventory from '../Pages/HousekeepingManager/Inventory/Inventory'
import AddInventory from '../Pages/HousekeepingManager/Inventory/AddInventory'
import ViewInventoryItem from '../Pages/HousekeepingManager/Inventory/ViewInventoryItem'
import RequestsApprovalsList from '../Pages/HousekeepingManager/RequestsApprovals/RequestsApprovalsList'
import AddRequest from '../Pages/HousekeepingManager/RequestsApprovals/AddRequest'
import ViewRequest from '../Pages/HousekeepingManager/RequestsApprovals/ViewRequest'
import Reports from '../Pages/HousekeepingManager/Reports/Reports'
import AnnouncementList from '../Pages/HousekeepingManager/Announcement/AnnouncementList'
import ViewAnnouncement from '../Pages/HousekeepingManager/Announcement/ViewAnnouncement'

const HousekeepingManagerRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/housekeeping-manager/dashboard" element={<Dashboard />} />
            {TaskManagementRoutes({ basePath: '/housekeeping-manager' })}
            <Route path="/housekeeping-manager/inventory" element={<Inventory />} />
            <Route path="/housekeeping-manager/inventory/add-item" element={<AddInventory />} />
            <Route path="/housekeeping-manager/inventory/view-item/:id" element={<ViewInventoryItem />} />
            <Route path="/housekeeping-manager/requests-approvals" element={<RequestsApprovalsList />} />
            <Route path="/housekeeping-manager/requests-approvals/add-request" element={<AddRequest />} />
            <Route path="/housekeeping-manager/requests-approvals/view-request/:id" element={<ViewRequest />} />
            <Route path="/housekeeping-manager/reports" element={<Reports />} />
            <Route path="/housekeeping-manager/broadcast" element={<AnnouncementList />} />
            <Route path="/housekeeping-manager/broadcast/view-broadcast/:id" element={<ViewAnnouncement />} />
            <Route path="*" element={<Navigate to="/housekeeping-manager/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default HousekeepingManagerRoutes
