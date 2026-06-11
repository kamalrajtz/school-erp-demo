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
            <Route path="*" element={<Navigate to="/joint-director/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default JointDirectorRoutes
