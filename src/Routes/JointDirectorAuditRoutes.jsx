import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/JointDirectorAudit/Dashboard/Dashboard'
import AuditPlanningList from '../Pages/JointDirectorAudit/AuditPlanning/AuditPlanningList'
import AddAuditPlan from '../Pages/JointDirectorAudit/AuditPlanning/AddAuditPlan'
import ViewAuditPlan from '../Pages/JointDirectorAudit/AuditPlanning/ViewAuditPlan'
import EditAuditPlan from '../Pages/JointDirectorAudit/AuditPlanning/EditAuditPlan'
import AuditMonitoringList from '../Pages/JointDirectorAudit/AuditMonitoring/AuditMonitoringList'
import ViewAuditMonitoring from '../Pages/JointDirectorAudit/AuditMonitoring/ViewAuditMonitoring'
import FindingsComplianceList from '../Pages/JointDirectorAudit/FindingsCompliance/FindingsComplianceList'
import ViewFinding from '../Pages/JointDirectorAudit/FindingsCompliance/ViewFinding'
import ReportsAnalytics from '../Pages/JointDirectorAudit/ReportsAnalytics/ReportsAnalytics'
import TaskManagement from '../Pages/JointDirectorAudit/TaskManagement/TaskManagement'
import AddTask from '../Pages/JointDirectorAudit/TaskManagement/AddTask'
import ViewEmployeeProfile from '../Pages/JointDirectorAudit/EmployeeManagement/ViewEmployeeProfile'
import RequestApprovals from '../Pages/JointDirectorAudit/RequestApprovals/RequestApprovals'
import ViewRequestApproval from '../Pages/JointDirectorAudit/RequestApprovals/ViewRequestApproval'
import Escalations from '../Pages/JointDirectorAudit/Escalations/Escalations'
import ViewEscalation from '../Pages/JointDirectorAudit/Escalations/ViewEscalation'
import MeetingsCalendar from '../Pages/JointDirectorAudit/MeetingsCalendar/MeetingsCalendar'
import BroadcastList from '../Pages/JointDirectorAudit/Broadcast/BroadcastList'
import AddBroadcast from '../Pages/JointDirectorAudit/Broadcast/AddBroadcast'
import ViewBroadcast from '../Pages/JointDirectorAudit/Broadcast/ViewBroadcast'

const JointDirectorAuditRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/joint-director-audit/dashboard" element={<Dashboard />} />
            <Route path="/joint-director-audit/audit-planning" element={<AuditPlanningList />} />
            <Route path="/joint-director-audit/audit-planning/add-audit-plan" element={<AddAuditPlan />} />
            <Route path="/joint-director-audit/audit-planning/view/:id" element={<ViewAuditPlan />} />
            <Route path="/joint-director-audit/audit-planning/edit/:id" element={<EditAuditPlan />} />
            <Route path="/joint-director-audit/audit-monitoring" element={<AuditMonitoringList />} />
            <Route path="/joint-director-audit/audit-monitoring/view/:id" element={<ViewAuditMonitoring />} />
            <Route path="/joint-director-audit/findings-compliance" element={<FindingsComplianceList />} />
            <Route path="/joint-director-audit/findings-compliance/view/:id" element={<ViewFinding />} />
            <Route path="/joint-director-audit/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/joint-director-audit/task-management" element={<TaskManagement />} />
            <Route path="/joint-director-audit/task-management/add-task" element={<AddTask />} />
            <Route path="/joint-director-audit/employee-management/:roleKey" element={<ViewEmployeeProfile />} />
            <Route path="/joint-director-audit/employee-management" element={<Navigate to="/joint-director-audit/employee-management/hr-manager" replace />} />
            <Route path="/joint-director-audit/request-approvals" element={<RequestApprovals />} />
            <Route path="/joint-director-audit/request-approvals/view-request" element={<ViewRequestApproval />} />
            <Route path="/joint-director-audit/escalations" element={<Escalations />} />
            <Route path="/joint-director-audit/escalations/view-escalation/:id" element={<ViewEscalation />} />
            <Route path="/joint-director-audit/meetings-calendar" element={<MeetingsCalendar />} />
            <Route path="/joint-director-audit/broadcast" element={<BroadcastList />} />
            <Route path="/joint-director-audit/broadcast/add-broadcast" element={<AddBroadcast />} />
            <Route path="/joint-director-audit/broadcast/view-broadcast/:id" element={<ViewBroadcast />} />
            <Route path="*" element={<Navigate to="/joint-director-audit/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default JointDirectorAuditRoutes
