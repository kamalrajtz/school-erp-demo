import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Gatekeeper/Dashboard/Dashboard'
import HosteGatePass from '../Pages/Gatekeeper/HosteGatePass/HosteGatePass'
import MyDuty from '../Pages/Gatekeeper/MyDuty/MyDuty'
import Incidents from '../Pages/Gatekeeper/Incidents/Incidents'
import AddIncidents from '../Pages/Gatekeeper/Incidents/AddIncidents'
import GatePassList from '../Pages/Gatekeeper/GatePass/GatePassList'
import AddGatePass from '../Pages/Gatekeeper/GatePass/AddGatePass'
import AnnouncementList from '../Pages/Gatekeeper/Announcement/AnnouncementList'
import ViewAnnouncement from '../Pages/Gatekeeper/Announcement/ViewAnnouncement'
import EscalationList from '../Pages/Gatekeeper/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/Gatekeeper/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/Gatekeeper/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/Gatekeeper/Communication/Inbox'
import CommunicationDirectMessages from '../Pages/Gatekeeper/Communication/DirectMessages'
import AcademicCalendar from '../Pages/Gatekeeper/AcademicCalendar/AcademicCalendar'

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
            <Route path="/gate-keeper/broadcast-list" element={<AnnouncementList />} />
            <Route path="/gate-keeper/view-broadcast/:id" element={<ViewAnnouncement />} />
            <Route path="/gate-keeper/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/gate-keeper/communication" element={<Navigate to="/gate-keeper/communication/inbox" replace />} />
            <Route path="/gate-keeper/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/gate-keeper/communication/direct-messages" element={<CommunicationDirectMessages />} />
            <Route path="/gate-keeper/communication/direct-messages/:conversationId" element={<CommunicationDirectMessages />} />
            <Route path="/gate-keeper/escalation-management" element={<EscalationList />} />
            <Route path="/gate-keeper/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/gate-keeper/escalation-management/view/:id" element={<ViewEscalation />} />
            <Route path="*" element={<Navigate to="/gate-keeper/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default GateKeeperRoutes
