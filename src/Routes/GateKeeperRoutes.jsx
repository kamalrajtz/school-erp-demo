import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Gatekeeper/Dashboard/Dashboard'
import HosteGatePass from '../Pages/Gatekeeper/HosteGatePass/HosteGatePass'
import MyDuty from '../Pages/Gatekeeper/MyDuty/MyDuty'
import Incidents from '../Pages/Gatekeeper/Incidents/Incidents'
import AddIncidents from '../Pages/Gatekeeper/Incidents/AddIncidents'
import GatePassList from '../Pages/Gatekeeper/GatePass/GatePassList'
import AddGatePass from '../Pages/Gatekeeper/GatePass/AddGatePass'

const GateKeeperRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/gate-keeper/dashboard" element={<Dashboard />} />
            <Route path="/gate-keeper/hostel-gate-pass" element={<HosteGatePass />} />
            <Route path="/gate-keeper/my-duty" element={<MyDuty />} />
            <Route path="/gate-keeper/incidents" element={<Incidents />} />
            <Route path="/gate-keeper/add-incident" element={<AddIncidents />} />
            <Route path="/gate-keeper/gate-pass-list" element={<GatePassList />} />
            <Route path="/gate-keeper/add-gate-pass" element={<AddGatePass />} />
            <Route path="*" element={<Navigate to="/gate-keeper/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default GateKeeperRoutes
