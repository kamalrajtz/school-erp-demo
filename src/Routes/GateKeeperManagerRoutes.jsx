import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/GateKeeperManager/Dashboard/Dashboard'
import AssignDutyList from '../Pages/GateKeeperManager/AssignDuty/AssignDutyList'
import AssignDuty from '../Pages/GateKeeperManager/AssignDuty/AssignDuty'
import LeaveApprovalList from '../Pages/GateKeeperManager/LeaveApproval/LeaveApprovalList'
import IncidentsList from '../Pages/GateKeeperManager/IncidentManagement/IncidentsList'
import GatekeeperAnnouncementList from '../Pages/GateKeeperManager/GatekeeperAnnouncement/GatekeeperAnnouncementList'
import AddGatekeeperAnnouncement from '../Pages/GateKeeperManager/GatekeeperAnnouncement/AddGatekeeperAnnouncement'
import EscalationList from '../Pages/GateKeeperManager/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/GateKeeperManager/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/GateKeeperManager/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/GateKeeperManager/Communication/Inbox'
import RedirectLegacyDirectMessages from '../Common/Communication/RedirectLegacyDirectMessages'
import AcademicCalendar from '../Pages/GateKeeperManager/AcademicCalendar/AcademicCalendar'

const GateKeeperManagerRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/gatekeeper-manager/dashboard" element={<Dashboard />} />
            <Route path="/gatekeeper-manager/assign-duty-list" element={<AssignDutyList />} />
            <Route path="/gatekeeper-manager/assign-duty" element={<AssignDuty />} />
            <Route path="/gatekeeper-manager/leave-approval-list" element={<LeaveApprovalList />} />
            <Route path="/gatekeeper-manager/incidents-list" element={<IncidentsList />} />
            <Route path="/gatekeeper-manager/gatekeeper-broadcast-list" element={<GatekeeperAnnouncementList />} />
            <Route path="/gatekeeper-manager/add-gatekeeper-broadcast" element={<AddGatekeeperAnnouncement />} />
            <Route path="/gatekeeper-manager/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/gatekeeper-manager/communication" element={<Navigate to="/gatekeeper-manager/communication/inbox" replace />} />
            <Route path="/gatekeeper-manager/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/gatekeeper-manager/communication/inbox/:conversationId" element={<CommunicationInbox />} />
            <Route path="/gatekeeper-manager/communication/direct-messages" element={<RedirectLegacyDirectMessages inboxBase="/gatekeeper-manager/communication/inbox" />} />
            <Route path="/gatekeeper-manager/communication/direct-messages/:conversationId" element={<RedirectLegacyDirectMessages inboxBase="/gatekeeper-manager/communication/inbox" />} />
            <Route path="/gatekeeper-manager/escalation-management" element={<EscalationList />} />
            <Route path="/gatekeeper-manager/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/gatekeeper-manager/escalation-management/view/:id" element={<ViewEscalation />} />
            <Route path="*" element={<Navigate to="/gatekeeper-manager/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default GateKeeperManagerRoutes
