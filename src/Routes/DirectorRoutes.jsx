import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Director/Dashboard/Dashboard'
import AnnouncementList from '../Pages/Director/Announcement/AnnouncementList'
import AddAnnouncement from '../Pages/Director/Announcement/AddAnnouncement'
import ViewAnnouncement from '../Pages/Director/Announcement/ViewAnnouncement'
import StarRatings from '../Pages/Director/StarRatings/StarRatings'
import TaskManagement from '../Pages/Director/TaskManagement/TaskManagement'
import AddTask from '../Pages/Director/TaskManagement/AddTask'
import AddRatings from '../Pages/Director/StarRatings/AddRatings'
import ExamApprovals from '../Pages/Director/ExamApprovals/ExamApprovals'
import StudentDatabaseList from '../Pages/Director/UserManagement/StudentDatabase/StudentsList'
import ViewStudentDatabase from '../Pages/Director/UserManagement/StudentDatabase/ViewStudent'
import EmployeeDatabaseList from '../Pages/Director/UserManagement/EmployeeDatabase/EmployeesList'
import ViewEmployeeDatabase from '../Pages/Director/UserManagement/EmployeeDatabase/ViewEmployee'
import StudentLMS from '../Pages/Director/LMS/StudentLMS'
import TeacherLMS from '../Pages/Director/LMS/TeacherLMS'
import ViewStudentLMS from '../Pages/Director/LMS/ViewStudentLMS'
import ViewTeacherLMS from '../Pages/Director/LMS/ViewTeacherLMS'
import RequestApprovals from '../Pages/Director/Request-Approvals/RequestApprovals'
import ViewRequestApproval from '../Pages/Director/Request-Approvals/ViewRequestApproval'
import ClassTimetableApprovals from '../Pages/Director/ClassTimetable/ClassTimetableApprovals'
import EscalationList from '../Pages/Director/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/Director/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/Director/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/Director/Communication/Inbox'
import CommunicationDirectMessages from '../Pages/Director/Communication/DirectMessages'
import AcademicCalendar from '../Pages/Director/AcademicCalendar/AcademicCalendar'
import CulturalList from '../Pages/Director/Activities/Cultural/CulturalList'
import AddCultural from '../Pages/Director/Activities/Cultural/AddCultural'
import SportsList from '../Pages/Director/Activities/Sports/SportsList'
import AddSports from '../Pages/Director/Activities/Sports/AddSports'
import Competitions from '../Pages/Director/Activities/Competitions/Competitions'
import AddCompetition from '../Pages/Director/Activities/Competitions/AddCompetition'
import MyLeaveRequests from '../Pages/Director/LeaveRequest/MyLeaveRequests'
import AddLeaveRequest from '../Pages/Director/LeaveRequest/AddLeaveRequest'
import ViewMyLeaveRequest from '../Pages/Director/LeaveRequest/ViewMyLeaveRequest'
import ReceivedLeaveRequests from '../Pages/Director/LeaveRequest/ReceivedLeaveRequests'
import ViewReceivedLeaveRequest from '../Pages/Director/LeaveRequest/ViewReceivedLeaveRequest'
import LessonPlanApproval from '../Pages/Director/LessonPlanApproval/LessonPlanApproval'
import StudentAllocationList from '../Pages/Director/StudentAllocation/StudentAllocationList'
import AllocateStudent from '../Pages/Director/StudentAllocation/AllocateStudent'

const DirectorRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/director/dashboard" element={<Dashboard />} />
            <Route path="/director/broadcast" element={<AnnouncementList />} />
            <Route path="/director/broadcast/add-broadcast" element={<AddAnnouncement />} />
            <Route path="/director/broadcast/view-broadcast/:id" element={<ViewAnnouncement />} />
            <Route path="/director/task-management" element={<TaskManagement />} />
            <Route path="/director/task-management/add-task" element={<AddTask />} />
            <Route path="/director/star-ratings/star-of-month" element={<StarRatings view="som" />} />
            <Route path="/director/star-ratings/star-of-year" element={<StarRatings view="soy" />} />
            <Route path="/director/star-ratings/add-ratings" element={<AddRatings />} />
            <Route path="/director/star-ratings-list" element={<Navigate to="/director/star-ratings/star-of-month" replace />} />
            <Route path="/director/examination-approvals" element={<ExamApprovals />} />
            <Route path="/director/class-timetable-approvals" element={<ClassTimetableApprovals />} />
            <Route path="/director/user-management/student-database" element={<StudentDatabaseList />} />
            <Route path="/director/user-management/student-database/view/:id" element={<ViewStudentDatabase />} />
            <Route path="/director/user-management/employee-database" element={<EmployeeDatabaseList />} />
            <Route path="/director/user-management/employee-database/view/:id" element={<ViewEmployeeDatabase />} />
            <Route path="/director/student-transfer" element={<Navigate to='/front-office/student-transfer' replace />} />
            <Route path="/director/student-transfer/add" element={<Navigate to='/front-office/student-transfer/add' replace />} />
            <Route path="/director/activities/cultural-list" element={<CulturalList />} />
            <Route path="/director/activities/add-cultural" element={<AddCultural />} />
            <Route path="/director/activities/sports-list" element={<SportsList />} />
            <Route path="/director/activities/add-sports" element={<AddSports />} />
            <Route path="/director/activities/competitions-list" element={<Competitions />} />
            <Route path="/director/activities/add-competition" element={<AddCompetition />} />
            <Route path="/director/lms/student-lms" element={<StudentLMS />} />
            <Route path="/director/lms/view-student-lms" element={<ViewStudentLMS />} />
            <Route path="/director/lms/teacher-lms" element={<TeacherLMS />} />
            <Route path="/director/lms/view-teacher-lms" element={<ViewTeacherLMS />} />
            <Route path="/director/request-approvals" element={<RequestApprovals />} />
            <Route path="/director/request-approvals/view-request" element={<ViewRequestApproval />} />
            <Route path="/director/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/director/communication" element={<Navigate to="/director/communication/inbox" replace />} />
            <Route path="/director/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/director/communication/direct-messages" element={<CommunicationDirectMessages />} />
            <Route path="/director/communication/direct-messages/:conversationId" element={<CommunicationDirectMessages />} />
            <Route path="/director/escalation-management" element={<EscalationList />} />
            <Route path="/director/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/director/escalation-management/view/:id" element={<ViewEscalation />} />
            <Route path="/director/leave-request/my-requests" element={<MyLeaveRequests />} />
            <Route path="/director/leave-request/my-requests/add" element={<AddLeaveRequest />} />
            <Route path="/director/leave-request/my-requests/view/:id" element={<ViewMyLeaveRequest />} />
            <Route path="/director/leave-request/received" element={<ReceivedLeaveRequests />} />
            <Route path="/director/leave-request/received/view/:id" element={<ViewReceivedLeaveRequest />} />
            <Route path="/director/lesson-plan-approval" element={<LessonPlanApproval />} />
            <Route path="/director/student-allocation" element={<StudentAllocationList />} />
            <Route path="/director/student-allocation/allocate/:id" element={<AllocateStudent />} />
            <Route path="*" element={<Navigate to="/director/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default DirectorRoutes
