import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Director/Dashboard/Dashboard'
import BroadcastList from '../Pages/Director/Broadcast/BroadcastList'
import AddBroadcast from '../Pages/Director/Broadcast/AddBroadcast'
import ViewBroadcast from '../Pages/Director/Broadcast/ViewBroadcast'
import StarRatings from '../Pages/Director/StarRatings/StarRatings'
import TaskManagement from '../Pages/Director/TaskManagement/TaskManagement'
import AddTask from '../Pages/Director/TaskManagement/AddTask'
import AddRatings from '../Pages/Director/StarRatings/AddRatings'
import ExamApprovals from '../Pages/Director/ExamApprovals/ExamApprovals'
import StudentsList from '../Pages/Director/Students/StudentsList'
import ViewStudent from '../Pages/Director/Students/ViewStudent'
import TeachersList from '../Pages/Director/TeacherManagement/TeachersList'
import ViewTeacher from '../Pages/Director/TeacherManagement/ViewTeacher'
import CoOrdinatorManagement from '../Pages/Director/CoOrdinators/CoOrdinators'
import ViewCoOrdinators from '../Pages/Director/CoOrdinators/ViewCoOrdinators'
import ViewPrincipal from '../Pages/Director/Principal/ViewPrincipal'
import StudentLMS from '../Pages/Director/LMS/StudentLMS'
import TeacherLMS from '../Pages/Director/LMS/TeacherLMS'
import ViewStudentLMS from '../Pages/Director/LMS/ViewStudentLMS'
import ViewTeacherLMS from '../Pages/Director/LMS/ViewTeacherLMS'
import RequestApprovals from '../Pages/Director/Request-Approvals/RequestApprovals'
import ViewRequestApproval from '../Pages/Director/Request-Approvals/ViewRequestApproval'
import ClassTimetableApprovals from '../Pages/Director/ClassTimetable/ClassTimetableApprovals'

const DirectorRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/director/dashboard" element={<Dashboard />} />
            <Route path="/director/broadcast" element={<BroadcastList />} />
            <Route path="/director/broadcast/add-broadcast" element={<AddBroadcast />} />
            <Route path="/director/broadcast/view-broadcast/:id" element={<ViewBroadcast />} />
            <Route path="/director/task-management" element={<TaskManagement />} />
            <Route path="/director/task-management/add-task" element={<AddTask />} />
            <Route path="/director/star-ratings-list" element={<StarRatings />} />
            <Route path="/director/star-ratings/add-ratings" element={<AddRatings />} />
            <Route path="/director/examination-approvals" element={<ExamApprovals />} />
            <Route path="/director/class-timetable-approvals" element={<ClassTimetableApprovals />} />
            <Route path="/director/students/student-details-list" element={<StudentsList />} />
            <Route path="/director/students/view-student" element={<ViewStudent />} />
            <Route path="/director/teachers/teacher-details-list" element={<TeachersList />} />
            <Route path="/director/teachers/view-teacher" element={<ViewTeacher />} />
            <Route path="/director/co-ordinator-management" element={<CoOrdinatorManagement />} />
            <Route path="/director/co-ordinators/view-co-ordinators" element={<ViewCoOrdinators />} />
            <Route path="/director/principal/view-principal" element={<ViewPrincipal />} />
            <Route path="/director/lms/student-lms" element={<StudentLMS />} />
            <Route path="/director/lms/view-student-lms" element={<ViewStudentLMS />} />
            <Route path="/director/lms/teacher-lms" element={<TeacherLMS />} />
            <Route path="/director/lms/view-teacher-lms" element={<ViewTeacherLMS />} />
            <Route path="/director/request-approvals" element={<RequestApprovals />} />
            <Route path="/director/request-approvals/view-request" element={<ViewRequestApproval />} />
            <Route path="*" element={<Navigate to="/director/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default DirectorRoutes
