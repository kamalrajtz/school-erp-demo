import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import AdmissionEnquiry from '../Pages/FrontOffice/AdmissionEnquiry/AdmissionEnquiry'
import AddAdmissionEnquiry from '../Pages/FrontOffice/AdmissionEnquiry/AddAdmissionEnquiry'
import EnquiryList from '../Pages/FrontOffice/CommonEnquiry/EnquiryList'
import AddEnquiry from '../Pages/FrontOffice/CommonEnquiry/AddEnquiry'
import StudentsList from '../Pages/FrontOffice/StudentManagement/StudentsList'
import TeachersList from '../Pages/FrontOffice/TeacherManagement/TeachersList'
import ViewStudent from '../Pages/FrontOffice/StudentManagement/ViewStudent'
import ViewTeacher from '../Pages/FrontOffice/TeacherManagement/ViewTeacher'
import GatePassList from '../Pages/FrontOffice/GatePass/GatePassList'
import AddGatePass from '../Pages/FrontOffice/GatePass/AddGatePass'

const FrontOfficeRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/front-office/dashboard" element={<div>Front Office Dashboard</div>} />
            <Route path="/front-office/admission-enquiry" element={<AdmissionEnquiry />} />
            <Route path="/front-office/add-admission-enquiry" element={<AddAdmissionEnquiry />} />
            <Route path="/front-office/enquiry-list" element={<EnquiryList />} />
            <Route path="/front-office/add-enquiry" element={<AddEnquiry />} />
            <Route path="/front-office/student-management" element={<StudentsList />} />
            <Route path="/front-office/teacher-management" element={<TeachersList />} />
            <Route path="/front-office/view-student" element={<ViewStudent />} />
            <Route path="/front-office/view-teacher" element={<ViewTeacher />} />
            <Route path="/front-office/gate-pass-list" element={<GatePassList />} />
            <Route path="/front-office/add-gate-pass" element={<AddGatePass />} />
            <Route path="*" element={<div>Front Office Home</div>} />
        </ReactRoutes>
    )
}

export default FrontOfficeRoutes
