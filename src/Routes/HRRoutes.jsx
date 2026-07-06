import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/HR/Dashboard/Dashboard'
import EmployeesList from '../Pages/HR/EmployeeManagement/EmployeesList'
import EmployeeProfile from '../Pages/HR/EmployeeManagement/EmployeeProfile'
import EmployeeDocuments from '../Pages/HR/EmployeeManagement/EmployeeDocuments'
import JobOpenings from '../Pages/HR/Recruitment/JobOpenings'
import Candidates from '../Pages/HR/Recruitment/Candidates'
import Interviews from '../Pages/HR/Recruitment/Interviews'
import Onboarding from '../Pages/HR/Onboarding/Onboarding'
import Attendance from '../Pages/HR/Attendance/Attendance'
import LeaveManagement from '../Pages/HR/LeaveManagement/LeaveManagement'
import Training from '../Pages/HR/Training/Training'
import Performance from '../Pages/HR/Performance/Performance'
import Reports from '../Pages/HR/Reports/Reports'
import { EMPLOYEES } from '../Pages/HR/EmployeeManagement/employeeData'

const defaultEmployeeId = EMPLOYEES[0]?.id ?? 'EMP-2026-001'

const HRRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/hr/dashboard" element={<Dashboard />} />

            <Route path="/hr/employee-management/employees" element={<EmployeesList />} />
            <Route path="/hr/employee-management/employee-profile/:id" element={<EmployeeProfile />} />
            <Route path="/hr/employee-management/employee-profile" element={<Navigate to={`/hr/employee-management/employee-profile/${defaultEmployeeId}`} replace />} />
            <Route path="/hr/employee-management/documents" element={<EmployeeDocuments />} />
            <Route path="/hr/employee-management" element={<Navigate to="/hr/employee-management/employees" replace />} />

            <Route path="/hr/recruitment/job-openings" element={<JobOpenings />} />
            <Route path="/hr/recruitment/candidates" element={<Candidates />} />
            <Route path="/hr/recruitment/interviews" element={<Interviews />} />
            <Route path="/hr/recruitment" element={<Navigate to="/hr/recruitment/job-openings" replace />} />

            <Route path="/hr/onboarding" element={<Onboarding />} />
            <Route path="/hr/attendance" element={<Attendance />} />
            <Route path="/hr/leave-management" element={<LeaveManagement />} />
            <Route path="/hr/training" element={<Training />} />
            <Route path="/hr/performance" element={<Performance />} />
            <Route path="/hr/reports" element={<Reports />} />

            <Route path="*" element={<Navigate to="/hr/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default HRRoutes
