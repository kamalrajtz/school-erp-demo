import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/JointDirector/Dashboard/Dashboard'
import Documents from '../Pages/JointDirector/Documents/Documents'
import StarRatings from '../Pages/JointDirector/StarRatings/StarRatings'
import TaskManagement from '../Pages/JointDirector/TaskManagement/TaskManagement'
import AddDocuments from '../Pages/JointDirector/Documents/AddDocuments'
import AddTask from '../Pages/JointDirector/TaskManagement/AddTask'
import AddRatings from '../Pages/JointDirector/StarRatings/AddRatings'
import ExamApprovals from '../Pages/JointDirector/ExamApprovals/ExamApprovals'
import StudentsList from '../Pages/JointDirector/Students/StudentsList'
import ViewStudent from '../Pages/JointDirector/Students/ViewStudent'
import TeachersList from '../Pages/JointDirector/TeacherManagement/TeachersList'
import ViewTeacher from '../Pages/JointDirector/TeacherManagement/ViewTeacher'
import CoOrdinatorManagement from '../Pages/JointDirector/CoOrdinators/CoOrdinators'
import ViewCoOrdinators from '../Pages/JointDirector/CoOrdinators/ViewCoOrdinators'
import ViewPrincipal from '../Pages/JointDirector/Principal/ViewPrincipal'
import StudentLMS from '../Pages/JointDirector/LMS/StudentLMS'
import TeacherLMS from '../Pages/JointDirector/LMS/TeacherLMS'
import ViewStudentLMS from '../Pages/JointDirector/LMS/ViewStudentLMS'
import ViewTeacherLMS from '../Pages/JointDirector/LMS/ViewTeacherLMS'
import RequestApprovals from '../Pages/JointDirector/Request-Approvals/RequestApprovals'
import ViewRequestApproval from '../Pages/JointDirector/Request-Approvals/ViewRequestApproval'

const JointDirectorRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/joint-director/dashboard" element={<Dashboard />} />
            <Route path="/joint-director/documents" element={<Documents />} />
            <Route path="/joint-director/documents/add-documents" element={<AddDocuments />} />
            <Route path="/joint-director/task-management" element={<TaskManagement />} />
            <Route path="/joint-director/task-management/add-task" element={<AddTask />} />
            <Route path="/joint-director/star-ratings-list" element={<StarRatings />} />
            <Route path="/joint-director/star-ratings/add-ratings" element={<AddRatings />} />
            <Route path="/joint-director/examination-approvals" element={<ExamApprovals />} />
            <Route path="/joint-director/students/student-details-list" element={<StudentsList />} />
            <Route path="/joint-director/students/view-student" element={<ViewStudent />} />
            <Route path="/joint-director/teachers/teacher-details-list" element={<TeachersList />} />
            <Route path="/joint-director/teachers/view-teacher" element={<ViewTeacher />} />
            <Route path="/joint-director/co-ordinator-management" element={<CoOrdinatorManagement />} />
            <Route path="/joint-director/co-ordinators/view-co-ordinators" element={<ViewCoOrdinators />} />
            <Route path="/joint-director/principal/view-principal" element={<ViewPrincipal />} />
            <Route path="/joint-director/lms/student-lms" element={<StudentLMS />} />
            <Route path="/joint-director/lms/view-student-lms" element={<ViewStudentLMS />} />
            <Route path="/joint-director/lms/teacher-lms" element={<TeacherLMS />} />
            <Route path="/joint-director/lms/view-teacher-lms" element={<ViewTeacherLMS />} />
            <Route path="/joint-director/request-approvals" element={<RequestApprovals />} />
            <Route path="/joint-director/request-approvals/view-request" element={<ViewRequestApproval />} />
            <Route path="*" element={<Navigate to="/joint-director/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default JointDirectorRoutes
