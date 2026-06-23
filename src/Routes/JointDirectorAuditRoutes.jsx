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
            <Route path="*" element={<Navigate to="/joint-director-audit/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default JointDirectorAuditRoutes
