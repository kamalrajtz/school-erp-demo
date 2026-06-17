import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/GateKeeperManager/Dashboard/Dashboard'
import AssignDutyList from '../Pages/GateKeeperManager/AssignDuty/AssignDutyList'
import AssignDuty from '../Pages/GateKeeperManager/AssignDuty/AssignDuty'
import LeaveApprovalList from '../Pages/GateKeeperManager/LeaveApproval/LeaveApprovalList'
import IncidentsList from '../Pages/GateKeeperManager/IncidentManagement/IncidentsList'
import GatekeeperBroadcastList from '../Pages/GateKeeperManager/GatekeeperBroadcast/GatekeeperBroadcastList'
import AddGatekeeperBroadcast from '../Pages/GateKeeperManager/GatekeeperBroadcast/AddGatekeeperBroadcast'

const GateKeeperManagerRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/gatekeeper-manager/dashboard" element={<Dashboard />} />
            <Route path="/gatekeeper-manager/assign-duty-list" element={<AssignDutyList />} />
            <Route path="/gatekeeper-manager/assign-duty" element={<AssignDuty />} />
            <Route path="/gatekeeper-manager/leave-approval-list" element={<LeaveApprovalList />} />
            <Route path="/gatekeeper-manager/incidents-list" element={<IncidentsList />} />
            <Route path="/gatekeeper-manager/gatekeeper-broadcast-list" element={<GatekeeperBroadcastList />} />
            <Route path="/gatekeeper-manager/add-gatekeeper-broadcast" element={<AddGatekeeperBroadcast />} />
            <Route path="*" element={<Navigate to="/gatekeeper-manager/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default GateKeeperManagerRoutes
