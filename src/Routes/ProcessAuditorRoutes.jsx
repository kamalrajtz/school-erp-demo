import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/ProcessAuditor/Dashboard/Dashboard'
import MyAudits from '../Pages/ProcessAuditor/AuditManagement/MyAudits/MyAudits'
import ViewMyAudit from '../Pages/ProcessAuditor/AuditManagement/MyAudits/ViewMyAudit'
import AuditSchedule from '../Pages/ProcessAuditor/AuditManagement/AuditSchedule/AuditSchedule'
import ExecuteAudit from '../Pages/ProcessAuditor/AuditManagement/ExecuteAudit/ExecuteAudit'

const Placeholder = ({ title }) => (
    <div className='bg-white rounded-2xl shadow-md p-8 text-center'>
        <h2 className='text-xl font-semibold text-black'>{title}</h2>
        <p className='text-sm text-[#667085] mt-2'>This page will be implemented next.</p>
    </div>
)

const ProcessAuditorRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/process-auditor/dashboard" element={<Dashboard />} />

            <Route path="/process-auditor/audit-management/my-audits" element={<MyAudits />} />
            <Route path="/process-auditor/audit-management/my-audits/view/:id" element={<ViewMyAudit />} />
            <Route path="/process-auditor/audit-management/audit-schedule" element={<AuditSchedule />} />
            <Route path="/process-auditor/audit-management/execute-audit" element={<ExecuteAudit />} />
            <Route path="/process-auditor/audit-management/audit-history" element={<Placeholder title="Audit History" />} />

            <Route path="/process-auditor/observations/open" element={<Placeholder title="Open Observations" />} />
            <Route path="/process-auditor/observations/closed" element={<Placeholder title="Closed Observations" />} />

            <Route path="/process-auditor/corrective-actions/escalations" element={<Placeholder title="Escalations" />} />
            <Route path="/process-auditor/corrective-actions/root-cause-analysis" element={<Placeholder title="Root Cause Analysis" />} />
            <Route path="/process-auditor/corrective-actions/action-taken-reports" element={<Placeholder title="Action Taken Reports" />} />

            <Route path="/process-auditor/reports" element={<Placeholder title="Reports" />} />
            <Route path="/process-auditor/communication" element={<Placeholder title="Communication" />} />
            <Route path="/process-auditor/profile" element={<Placeholder title="Profile" />} />

            <Route path="*" element={<Navigate to="/process-auditor/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default ProcessAuditorRoutes
