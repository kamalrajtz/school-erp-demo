import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Principal/Dashboard/Dashboard'
import StarRatings from '../Pages/Principal/StarRatings/StarRatings'
import TaskManagement from '../Pages/Principal/TaskManagement/TaskManagement'
import AddTask from '../Pages/Principal/TaskManagement/AddTask'
import AddRatings from '../Pages/Principal/StarRatings/AddRatings'
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
import AddEscalation from '../Pages/Principal/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/Principal/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/Principal/Communication/Inbox'
import RedirectLegacyDirectMessages from '../Common/Communication/RedirectLegacyDirectMessages'
import AcademicCalendar from '../Pages/Principal/AcademicCalendar/AcademicCalendar'
import TeacherAllocationList from '../Pages/Principal/TeacherAllocation/TeacherAllocationList'
import AllocateTeacher from '../Pages/Principal/TeacherAllocation/AllocateTeacher'
import ViewTeacherAllocation from '../Pages/Principal/TeacherAllocation/ViewTeacherAllocation'
import EditTeacherAllocation from '../Pages/Principal/TeacherAllocation/EditTeacherAllocation'

const PrincipalRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/principal/dashboard" element={<Dashboard />} />
            <Route path="/principal/task-management" element={<TaskManagement />} />
            <Route path="/principal/task-management/add-task" element={<AddTask />} />
            <Route path="/principal/star-ratings/star-of-month" element={<StarRatings view="som" />} />
            <Route path="/principal/star-ratings/star-of-year" element={<StarRatings view="soy" />} />
            <Route path="/principal/star-ratings/add-ratings" element={<AddRatings />} />
            <Route path="/principal/star-ratings-list" element={<Navigate to="/principal/star-ratings/star-of-month" replace />} />
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
            <Route path="/principal/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/principal/academic/teacher-allocation" element={<TeacherAllocationList />} />
            <Route path="/principal/academic/teacher-allocation/allocate/:employeeId" element={<AllocateTeacher />} />
            <Route path="/principal/academic/teacher-allocation/view/:employeeId" element={<ViewTeacherAllocation />} />
            <Route path="/principal/academic/teacher-allocation/edit/:employeeId" element={<EditTeacherAllocation />} />
            <Route path="/principal/communication" element={<Navigate to="/principal/communication/inbox" replace />} />
            <Route path="/principal/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/principal/communication/inbox/:conversationId" element={<CommunicationInbox />} />
            <Route path="/principal/communication/direct-messages" element={<RedirectLegacyDirectMessages inboxBase="/principal/communication/inbox" />} />
            <Route path="/principal/communication/direct-messages/:conversationId" element={<RedirectLegacyDirectMessages inboxBase="/principal/communication/inbox" />} />
            <Route path="/principal/escalation-management" element={<EscalationList />} />
            <Route path="/principal/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/principal/escalation-management/view/:id" element={<ViewEscalation />} />
            <Route path="*" element={<Navigate to="/principal/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default PrincipalRoutes
