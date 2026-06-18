import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Principal/Dashboard/Dashboard'
import Documents from '../Pages/Principal/Documents/Documents'
import StarRatings from '../Pages/Principal/StarRatings/StarRatings'
import TaskManagement from '../Pages/Principal/TaskManagement/TaskManagement'
import AddDocuments from '../Pages/Principal/Documents/AddDocuments'
import AddTask from '../Pages/Principal/TaskManagement/AddTask'
import AddRatings from '../Pages/Principal/StarRatings/AddRatings'
import ViewRatings from '../Pages/Principal/StarRatings/ViewRatings'
import ExaminationTimetableList from '../Pages/Principal/ExaminationTimetable/ExaminationTimetableList'
import CreateExaminationTimetable from '../Pages/Principal/ExaminationTimetable/CreateExaminationTimetable'
import ClassTimetableList from '../Pages/Principal/ClassTimetable/ClassTimetableList'
import CreateClassTimetable from '../Pages/Principal/ClassTimetable/CreateClassTimetable'
import StudentsList from '../Pages/Principal/Students/StudentsList'
import ViewStudent from '../Pages/Principal/Students/ViewStudent'
import TeachersList from '../Pages/Principal/EmployeesManagement/Teachers/TeachersList'
import ViewTeacher from '../Pages/Principal/EmployeesManagement/Teachers/ViewTeacher'
import CoordinatorsList from '../Pages/Principal/EmployeesManagement/Coordinators/CoordinatorsList'
import ViewCoordinator from '../Pages/Principal/EmployeesManagement/Coordinators/ViewCoordinator'
import FrontOfficeList from '../Pages/Principal/EmployeesManagement/FrontOffice/FrontOfficeList'
import ViewFrontOffice from '../Pages/Principal/EmployeesManagement/FrontOffice/ViewFrontOffice'
import LibrariansList from '../Pages/Principal/EmployeesManagement/Librarians/LibrariansList'
import ViewLibrarian from '../Pages/Principal/EmployeesManagement/Librarians/ViewLibrarian'
import GateKeeperManagerList from '../Pages/Principal/EmployeesManagement/GateKeeperManager/GateKeeperManagerList'
import ViewGateKeeperManager from '../Pages/Principal/EmployeesManagement/GateKeeperManager/ViewGateKeeperManager'
import GateKeepersList from '../Pages/Principal/EmployeesManagement/GateKeepers/GateKeepersList'
import ViewGateKeeper from '../Pages/Principal/EmployeesManagement/GateKeepers/ViewGateKeeper'
import StudentLMS from '../Pages/Principal/LMS/StudentLMS'
import TeacherLMS from '../Pages/Principal/LMS/TeacherLMS'
import ViewStudentLMS from '../Pages/Principal/LMS/ViewStudentLMS'
import ViewTeacherLMS from '../Pages/Principal/LMS/ViewTeacherLMS'
import EscalationList from '../Pages/Principal/EscalationManagement/EscalationList'
import ViewEscalation from '../Pages/Principal/EscalationManagement/ViewEscalation'

const PrincipalRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/principal/dashboard" element={<Dashboard />} />
            <Route path="/principal/documents" element={<Documents />} />
            <Route path="/principal/documents/add-documents" element={<AddDocuments />} />
            <Route path="/principal/task-management" element={<TaskManagement />} />
            <Route path="/principal/task-management/add-task" element={<AddTask />} />
            <Route path="/principal/star-ratings-list" element={<StarRatings />} />
            <Route path="/principal/star-ratings/add-ratings" element={<AddRatings />} />
            <Route path="/principal/star-ratings/view-ratings/:id" element={<ViewRatings />} />
            <Route path="/principal/examination-timetable" element={<ExaminationTimetableList />} />
            <Route path="/principal/create-examination-timetable" element={<CreateExaminationTimetable />} />
            <Route path="/principal/class-timetable" element={<ClassTimetableList />} />
            <Route path="/principal/create-class-timetable" element={<CreateClassTimetable />} />
            <Route path="/principal/students/student-details-list" element={<StudentsList />} />
            <Route path="/principal/students/view-student" element={<ViewStudent />} />
            <Route path="/principal/employees-management/teachers" element={<TeachersList />} />
            <Route path="/principal/employees-management/view-teacher" element={<ViewTeacher />} />
            <Route path="/principal/employees-management/coordinators" element={<CoordinatorsList />} />
            <Route path="/principal/employees-management/view-coordinator" element={<ViewCoordinator />} />
            <Route path="/principal/employees-management/front-office" element={<FrontOfficeList />} />
            <Route path="/principal/employees-management/view-front-office" element={<ViewFrontOffice />} />
            <Route path="/principal/employees-management/librarians" element={<LibrariansList />} />
            <Route path="/principal/employees-management/view-librarian" element={<ViewLibrarian />} />
            <Route path="/principal/employees-management/gatekeeper-manager" element={<GateKeeperManagerList />} />
            <Route path="/principal/employees-management/view-gatekeeper-manager" element={<ViewGateKeeperManager />} />
            <Route path="/principal/employees-management/gatekeepers" element={<GateKeepersList />} />
            <Route path="/principal/employees-management/view-gatekeeper" element={<ViewGateKeeper />} />
            <Route path="/principal/lms/student-lms" element={<StudentLMS />} />
            <Route path="/principal/lms/view-student-lms" element={<ViewStudentLMS />} />
            <Route path="/principal/lms/teacher-lms" element={<TeacherLMS />} />
            <Route path="/principal/lms/view-teacher-lms" element={<ViewTeacherLMS />} />
            <Route path="/principal/escalation-management" element={<EscalationList />} />
            <Route path="/principal/escalation-management/view-escalation/:id" element={<ViewEscalation />} />
            <Route path="*" element={<Navigate to="/principal/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default PrincipalRoutes
