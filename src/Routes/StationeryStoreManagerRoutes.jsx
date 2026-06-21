import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/StationeryStoreManager/Dashboard/Dashboard'
import Inventory from '../Pages/StationeryStoreManager/Inventory/Inventory'
import AddInventory from '../Pages/StationeryStoreManager/Inventory/AddInventory'
import ViewInventoryItem from '../Pages/StationeryStoreManager/Inventory/ViewInventoryItem'
import IssueReturnsList from '../Pages/StationeryStoreManager/IssueReturns/IssueReturnsList'
import AddIssueReturn from '../Pages/StationeryStoreManager/IssueReturns/AddIssueReturn'
import ViewIssueReturn from '../Pages/StationeryStoreManager/IssueReturns/ViewIssueReturn'
import RequestsApprovalsList from '../Pages/StationeryStoreManager/RequestsApprovals/RequestsApprovalsList'
import AddRequest from '../Pages/StationeryStoreManager/RequestsApprovals/AddRequest'
import ViewRequest from '../Pages/StationeryStoreManager/RequestsApprovals/ViewRequest'
import Reports from '../Pages/StationeryStoreManager/Reports/Reports'
import BroadcastList from '../Pages/StationeryStoreManager/Broadcast/BroadcastList'
import ViewBroadcast from '../Pages/StationeryStoreManager/Broadcast/ViewBroadcast'

const StationeryStoreManagerRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/stationery-store-manager/dashboard" element={<Dashboard />} />
            <Route path="/stationery-store-manager/inventory" element={<Inventory />} />
            <Route path="/stationery-store-manager/inventory/add-item" element={<AddInventory />} />
            <Route path="/stationery-store-manager/inventory/view-item/:id" element={<ViewInventoryItem />} />
            <Route path="/stationery-store-manager/issue-returns" element={<IssueReturnsList />} />
            <Route path="/stationery-store-manager/issue-returns/add" element={<AddIssueReturn />} />
            <Route path="/stationery-store-manager/issue-returns/view/:id" element={<ViewIssueReturn />} />
            <Route path="/stationery-store-manager/requests-approvals" element={<RequestsApprovalsList />} />
            <Route path="/stationery-store-manager/requests-approvals/add-request" element={<AddRequest />} />
            <Route path="/stationery-store-manager/requests-approvals/view-request/:id" element={<ViewRequest />} />
            <Route path="/stationery-store-manager/reports" element={<Reports />} />
            <Route path="/stationery-store-manager/broadcast" element={<BroadcastList />} />
            <Route path="/stationery-store-manager/broadcast/view-broadcast/:id" element={<ViewBroadcast />} />
            <Route path="*" element={<Navigate to="/stationery-store-manager/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default StationeryStoreManagerRoutes
