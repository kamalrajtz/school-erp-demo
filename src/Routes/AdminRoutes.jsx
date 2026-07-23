import React from 'react'
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'
import AdmissionList from '../Pages/Admin/FrontOffice/AdminssionList/AdminssionList'
import AddAdmission from '../Pages/Admin/FrontOffice/AdminssionList/AddAdmission'
import TeachersList from '../Pages/Admin/FrontOffice/TeachersList/TeachersList'
import AddTeacher from '../Pages/Admin/FrontOffice/TeachersList/AddTeacher'
import LibrarianList from '../Pages/Admin/FrontOffice/LibrarianList/LibrarianList'
import AddLibrarian from '../Pages/Admin/FrontOffice/LibrarianList/AddLibrarian'
import DriverList from '../Pages/Admin/FrontOffice/DriverList/DriverList'
import AddDriverList from '../Pages/Admin/FrontOffice/DriverList/AddDriverList'
import StudentsList from '../Pages/Admin/Attendance/Students/StudentsList'
import EmployeesList from '../Pages/Admin/Attendance/Employees/EmployeesList'
import ClassDetails from '../Pages/Admin/Class/ClassDetails/ClassDetails'
import AddClassDetails from '../Pages/Admin/Class/ClassDetails/AddClassDetails'
import OnlineClass from '../Pages/Admin/Class/OnlineClass/OnlineClass'
import AddOnlineClass from '../Pages/Admin/Class/OnlineClass/AddOnlineClass'
import ExtendedClass from '../Pages/Admin/Class/ExtendedClass/ExtendedClass'
import AddExtendedClass from '../Pages/Admin/Class/ExtendedClass/AddExtendedClass'
import TimeTable from '../Pages/Admin/Class/Timetable/TimeTable'
import AddTimeTable from '../Pages/Admin/Class/Timetable/AddTimeTable'
import Subjects from '../Pages/Admin/Subjects/Subjects'
import AddSubjects from '../Pages/Admin/Subjects/AddSubjects'
import BookList from '../Pages/Admin/LibraryDetails/BookList/BookList'
import AddBooks from '../Pages/Admin/LibraryDetails/BookList/AddBooks'
import IssuedBooks from '../Pages/Admin/LibraryDetails/IssuedBooks/IssuedBooks'
import AddIssueBook from '../Pages/Admin/LibraryDetails/IssuedBooks/AddIssueBook'
import StudentDetails from '../Pages/Admin/Students/StudentDetails/StudentDetails'
import ClassFeeDetails from '../Pages/Admin/Students/ClassFeeDetails/ClassFeeDetails'
import AddClassFeeDetails from '../Pages/Admin/Students/ClassFeeDetails/AddClassFeeDetails'
import ParentDetails from '../Pages/Admin/Students/ParentDetails/ParentDetails'
import StudentDocuments from '../Pages/Admin/Documents/StudentDocuments/StudentDocuments'
import AddStudentDocuments from '../Pages/Admin/Documents/StudentDocuments/AddStudentDocuments'
import VehicleDetailsList from '../Pages/Admin/Transport/VehicleDetails/VehicleDetailsList'
import AddVehicleDetails from '../Pages/Admin/Transport/VehicleDetails/AddVehicleDetails'
import RouteDetailsList from '../Pages/Admin/Transport/RouteDetails/RouteDetailsList'
import AddRouteDetails from '../Pages/Admin/Transport/RouteDetails/AddRouteDetails'
import RouteDataList from '../Pages/Admin/Transport/RouteData/RouteDataList'
import AssignedRouteList from '../Pages/Admin/Transport/AssignedRouteList/AssignedRouteList'
import AssignRoute from '../Pages/Admin/Transport/AssignedRouteList/AssignRoute'
import ExamDetailsList from '../Pages/Admin/ExamDetails/ExamDetailsList'
import AddExamDetails from '../Pages/Admin/ExamDetails/AddExamDetails'
import SalariesList from '../Pages/Admin/Expenses/Salaries/SalariesList'
import AddSalariesList from '../Pages/Admin/Expenses/Salaries/AddSalariesList'
import HostelExpensesList from '../Pages/Admin/Expenses/Hostel/HostelExpensesList'
import AddHostelExpenses from '../Pages/Admin/Expenses/Hostel/AddHostelExpenses'
import TransportExpensesList from '../Pages/Admin/Expenses/Transport/TransportExpensesList'
import AddTransportExpenses from '../Pages/Admin/Expenses/Transport/AddTransportExpenses'
import LibraryExpensesList from '../Pages/Admin/Expenses/Library/LibraryExpensesList'
import AddLibraryExpenses from '../Pages/Admin/Expenses/Library/AddLibraryExpenses'
import OtherExpensesList from '../Pages/Admin/Expenses/Others/OtherExpensesList'
import AddOtherExpensesList from '../Pages/Admin/Expenses/Others/AddOtherExpensesList'
import Notifications from '../Pages/Admin/Notification/Notifications'
import AnnouncementList from '../Pages/Admin/Announcement/AnnouncementList'
import AddAnnouncement from '../Pages/Admin/Announcement/AddAnnouncement'
import ViewAnnouncement from '../Pages/Admin/Announcement/ViewAnnouncement'
import AssignTasks from '../Pages/Admin/TaskManagement/AssignTasks'
import AddAssignTask from '../Pages/Admin/TaskManagement/AddAssignTask'
import AssignedTasks from '../Pages/Admin/TaskManagement/AssignedTasks'
import MyLeaveRequests from '../Pages/Admin/LeaveRequest/MyLeaveRequests'
import AddLeaveRequest from '../Pages/Admin/LeaveRequest/AddLeaveRequest'
import ViewMyLeaveRequest from '../Pages/Admin/LeaveRequest/ViewMyLeaveRequest'
import ReceivedLeaveRequests from '../Pages/Admin/LeaveRequest/ReceivedLeaveRequests'
import ViewReceivedLeaveRequest from '../Pages/Admin/LeaveRequest/ViewReceivedLeaveRequest'
import EscalationList from '../Pages/Admin/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/Admin/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/Admin/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/Admin/Communication/Inbox'
import CommunicationDirectMessages from '../Pages/Admin/Communication/DirectMessages'
import AcademicCalendar from '../Pages/Admin/AcademicCalendar/AcademicCalendar'

// import Dashboard from '../Pages/Dashboard/Dashboard'

const AdminRoutes = () => {
    return (
        <ReactRoutes>

            <Route path="/dashboard" element={<div>Admin Dashboard</div>} />
            <Route path="*" element={<div>Admin Home</div>} />

            {/* Front Office */}

            <Route path="/admin/front-office/admission-list" element={<AdmissionList />} />
            <Route path="/admin/front-office/add-admission" element={<AddAdmission />} />
            <Route path="/admin/front-office/teachers-list" element={<TeachersList />} />
            <Route path="/admin/front-office/add-teacher" element={<AddTeacher />} />
            <Route path="/admin/front-office/librarian-list" element={<LibrarianList />} />
            <Route path="/admin/front-office/add-librarian" element={<AddLibrarian />} />
            <Route path="/admin/front-office/driver-list" element={<DriverList />} />
            <Route path="/admin/front-office/add-driver" element={<AddDriverList />} />

            {/* Attendance */}

            <Route path="/admin/attendance/students-list" element={<StudentsList />} />
            <Route path="/admin/attendance/employees-list" element={<EmployeesList />} />
            <Route path="/admin/attendance/leave-request-list" element={<Navigate to='/admin/leave-request/my-requests' replace />} />
            <Route path="/admin/attendance/leave-request" element={<Navigate to='/admin/leave-request/my-requests' replace />} />

            {/* Class */}

            <Route path="/admin/class/class-details" element={<ClassDetails />} />
            <Route path="/admin/class/add-class-details" element={<AddClassDetails />} />
            <Route path="/admin/class/online-class" element={<OnlineClass />} />
            <Route path="/admin/class/add-online-class" element={<AddOnlineClass />} />
            <Route path="/admin/class/extended-class" element={<ExtendedClass />} />
            <Route path="/admin/class/add-extended-class" element={<AddExtendedClass />} />
            <Route path="/admin/class/timetable-list" element={<TimeTable />} />
            <Route path="/admin/class/add-timetable" element={<AddTimeTable />} />
            <Route path="/admin/class/subjects" element={<Subjects />} />
            <Route path="/admin/class/add-subjects" element={<AddSubjects />} />

            {/* Library Details */}

            <Route path="/admin/library-details/book-list" element={<BookList />} />
            <Route path="/admin/library-details/add-book" element={<AddBooks />} />
            <Route path="/admin/library-details/issued-book" element={<IssuedBooks />} />
            <Route path="/admin/library-details/add-issued-book" element={<AddIssueBook />} />

            {/* Student */}

            <Route path="/admin/student/student-details" element={<StudentDetails />} />
            <Route path="/admin/student/class-fee-details" element={<ClassFeeDetails />} />
            <Route path="/admin/student/add-class-fee-details" element={<AddClassFeeDetails />} />
            <Route path="/admin/student/parent-details" element={<ParentDetails />} />
            <Route path="/admin/student/student-transfer" element={<Navigate to='/front-office/student-transfer' replace />} />
            <Route path="/admin/student/add-student-transfer" element={<Navigate to='/front-office/student-transfer/add' replace />} />
            {/* <Route path="/admin/student/leave-request" element={< />} /> */}

            {/* Activities (moved to Director) */}
            <Route path="/admin/activities/cultural-list" element={<Navigate to='/director/activities/cultural-list' replace />} />
            <Route path="/admin/activities/add-cultural" element={<Navigate to='/director/activities/add-cultural' replace />} />
            <Route path="/admin/activities/sports-list" element={<Navigate to='/director/activities/sports-list' replace />} />
            <Route path="/admin/activities/add-sports" element={<Navigate to='/director/activities/add-sports' replace />} />
            <Route path="/admin/activities/competitions-list" element={<Navigate to='/director/activities/competitions-list' replace />} />
            <Route path="/admin/activities/add-competition" element={<Navigate to='/director/activities/add-competition' replace />} />

            {/* Documents */}
            <Route path="/admin/documents/student-documents" element={<StudentDocuments />} />
            <Route path="/admin/documents/add-student-documents" element={<AddStudentDocuments />} />

            {/* Transport */}
            <Route path="/admin/transport/vehicle-details" element={<VehicleDetailsList />} />
            <Route path="/admin/transport/add-vehicle-details" element={<AddVehicleDetails />} />
            <Route path="/admin/transport/route-details" element={<RouteDetailsList />} />
            <Route path="/admin/transport/add-route-details" element={<AddRouteDetails />} />
            <Route path='/admin/transport/route-data-list' element={<RouteDataList />} />
            <Route path='/admin/transport/assigned-route-list' element={<AssignedRouteList />} />
            <Route path='/admin/transport/assign-route' element={<AssignRoute />} />

            {/* Exam Details */}
            <Route path='/admin/exam-details/exam-details-list' element={<ExamDetailsList />} />
            <Route path='/admin/exam-details/add-exam-details' element={<AddExamDetails />} />

            {/* Expenses */}
            <Route path='/admin/expenses/salaries-list' element={<SalariesList />} />
            <Route path='/admin/expenses/add-salaries-exp' element={<AddSalariesList />} />
            <Route path='/admin/expenses/hostel-list' element={<HostelExpensesList />} />
            <Route path='/admin/expenses/add-hostel-exp' element={<AddHostelExpenses />} />
            <Route path='/admin/expenses/transport-list' element={<TransportExpensesList />} />
            <Route path='/admin/expenses/add-transport-exp' element={<AddTransportExpenses />} />
            <Route path='/admin/expenses/library-list' element={<LibraryExpensesList />} />
            <Route path='/admin/expenses/add-library-exp' element={<AddLibraryExpenses />} />
            <Route path='/admin/expenses/others-list' element={<OtherExpensesList />} />
            <Route path='/admin/expenses/add-others-exp' element={<AddOtherExpensesList />} />

            {/* Notifications */}
            <Route path='/admin/notifications' element={<Notifications />} />
            <Route path='/admin/notification/exam-list' element={<Navigate to='/admin/notifications' replace />} />
            <Route path='/admin/notification/event-list' element={<Navigate to='/admin/notifications' replace />} />

            {/* Announcement */}
            <Route path='/admin/announcement' element={<AnnouncementList />} />
            <Route path='/admin/announcement/add' element={<AddAnnouncement />} />
            <Route path='/admin/announcement/view/:id' element={<ViewAnnouncement />} />

            {/* Task Management */}
            <Route path='/admin/task-management/assign-tasks' element={<AssignTasks />} />
            <Route path='/admin/task-management/assign-tasks/add' element={<AddAssignTask />} />
            <Route path='/admin/task-management/assigned-tasks' element={<AssignedTasks />} />

            {/* Leave Request */}
            <Route path='/admin/leave-request/my-requests' element={<MyLeaveRequests />} />
            <Route path='/admin/leave-request/my-requests/add' element={<AddLeaveRequest />} />
            <Route path='/admin/leave-request/my-requests/view/:id' element={<ViewMyLeaveRequest />} />
            <Route path='/admin/leave-request/received' element={<ReceivedLeaveRequests />} />
            <Route path='/admin/leave-request/received/view/:id' element={<ViewReceivedLeaveRequest />} />

            {/* Academic Calendar */}
            <Route path='/admin/academic-calendar' element={<AcademicCalendar />} />

            {/* Communication */}
            <Route path='/admin/communication' element={<Navigate to='/admin/communication/inbox' replace />} />
            <Route path='/admin/communication/inbox' element={<CommunicationInbox />} />
            <Route path='/admin/communication/direct-messages' element={<CommunicationDirectMessages />} />
            <Route path='/admin/communication/direct-messages/:conversationId' element={<CommunicationDirectMessages />} />

            {/* Escalation Management */}
            <Route path='/admin/escalation-management' element={<EscalationList />} />
            <Route path='/admin/escalation-management/add-escalation' element={<AddEscalation />} />
            <Route path='/admin/escalation-management/view/:id' element={<ViewEscalation />} />
        </ReactRoutes>
    )
}

export default AdminRoutes
