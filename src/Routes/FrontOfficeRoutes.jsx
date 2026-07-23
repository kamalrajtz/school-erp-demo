import React from 'react'
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'
import AdmissionEnquiry from '../Pages/FrontOffice/AdmissionEnquiry/AdmissionEnquiry'
import AddAdmissionEnquiry from '../Pages/FrontOffice/AdmissionEnquiry/AddAdmissionEnquiry'
import AdmissionList from '../Pages/FrontOffice/AdmissionList/AdmissionList'
import AddAdmission from '../Pages/FrontOffice/AdmissionList/AddAdmission'
import StudentsList from '../Pages/FrontOffice/StudentManagement/StudentsList'
import TeachersList from '../Pages/FrontOffice/TeacherManagement/TeachersList'
import ViewStudent from '../Pages/FrontOffice/StudentManagement/ViewStudent'
import ViewTeacher from '../Pages/FrontOffice/TeacherManagement/ViewTeacher'
import GatePassList from '../Pages/FrontOffice/GatePass/GatePassList'
import AddGatePass from '../Pages/FrontOffice/GatePass/AddGatePass'
import EscalationList from '../Pages/FrontOffice/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/FrontOffice/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/FrontOffice/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/FrontOffice/Communication/Inbox'
import CommunicationDirectMessages from '../Pages/FrontOffice/Communication/DirectMessages'
import AcademicCalendar from '../Pages/FrontOffice/AcademicCalendar/AcademicCalendar'
import StudentTransfer from '../Pages/FrontOffice/StudentTransfer/StudentTransfer'
import AddStudentTransfer from '../Pages/FrontOffice/StudentTransfer/AddStudentTransfer'

const FrontOfficeRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/front-office/dashboard" element={<div>Front Office Dashboard</div>} />
            <Route path="/front-office/admission-enquiry" element={<AdmissionEnquiry />} />
            <Route path="/front-office/add-admission-enquiry" element={<AddAdmissionEnquiry />} />
            <Route path="/front-office/admission-list" element={<AdmissionList />} />
            <Route path="/front-office/add-admission" element={<AddAdmission />} />
            <Route path="/front-office/student-management" element={<StudentsList />} />
            <Route path="/front-office/teacher-management" element={<TeachersList />} />
            <Route path="/front-office/view-student" element={<ViewStudent />} />
            <Route path="/front-office/view-teacher" element={<ViewTeacher />} />
            <Route path="/front-office/student-transfer" element={<StudentTransfer />} />
            <Route path="/front-office/student-transfer/add" element={<AddStudentTransfer />} />
            <Route path="/front-office/gate-pass-list" element={<GatePassList />} />
            <Route path="/front-office/add-gate-pass" element={<AddGatePass />} />
            <Route path="/front-office/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/front-office/communication" element={<Navigate to="/front-office/communication/inbox" replace />} />
            <Route path="/front-office/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/front-office/communication/direct-messages" element={<CommunicationDirectMessages />} />
            <Route path="/front-office/communication/direct-messages/:conversationId" element={<CommunicationDirectMessages />} />
            <Route path="/front-office/escalation-management" element={<EscalationList />} />
            <Route path="/front-office/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/front-office/escalation-management/view/:id" element={<ViewEscalation />} />
            <Route path="*" element={<div>Front Office Home</div>} />
        </ReactRoutes>
    )
}

export default FrontOfficeRoutes
