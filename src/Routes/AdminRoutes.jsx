import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
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
import LeaveRequest from '../Pages/Admin/Attendance/LeaveRequest/LeaveRequest'
import LeaveInfo from '../Pages/Admin/Attendance/LeaveRequest/LeaveInfo'
import ClassDetails from '../Pages/Admin/Class/ClassDetails/ClassDetails'
import AddClassDetails from '../Pages/Admin/Class/ClassDetails/AddClassDetails'
import OnlineClass from '../Pages/Admin/Class/OnlineClass/OnlineClass'
import AddOnlineClass from '../Pages/Admin/Class/OnlineClass/AddOnlineClass'
import ExtraClass from '../Pages/Admin/Class/ExtraClass/ExtraClass'
import AddExtraClass from '../Pages/Admin/Class/ExtraClass/AddExtraClass'
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
import StudentTransfer from '../Pages/Admin/Students/StudentTransfer/StudentTransfer'
import AddStudentTransfer from '../Pages/Admin/Students/StudentTransfer/AddStudentTransfer'
import CulturalList from '../Pages/Admin/Activities/Cultural/CulturalList'
import AddCultural from '../Pages/Admin/Activities/Cultural/AddCultural'
import SportsList from '../Pages/Admin/Activities/Sports/SportsList'
import AddSports from '../Pages/Admin/Activities/Sports/AddSports'
import Competitions from '../Pages/Admin/Activities/Competitions/Competitions'
import AddCompetition from '../Pages/Admin/Activities/Competitions/AddCompetition'
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
import ExamList from '../Pages/Admin/Notification/ExamList'
import EventList from '../Pages/Admin/Notification/EventList'

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
            <Route path="/admin/attendance/leave-request-list" element={<LeaveRequest />} />
            <Route path="/admin/attendance/leave-request" element={<LeaveInfo />} />

            {/* Class */}

            <Route path="/admin/class/class-details" element={<ClassDetails />} />
            <Route path="/admin/class/add-class-details" element={<AddClassDetails />} />
            <Route path="/admin/class/online-class" element={<OnlineClass />} />
            <Route path="/admin/class/add-online-class" element={<AddOnlineClass />} />
            <Route path="/admin/class/extra-class" element={<ExtraClass />} />
            <Route path="/admin/class/add-extra-class" element={<AddExtraClass />} />
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
            <Route path="/admin/student/student-transfer" element={<StudentTransfer />} />
            <Route path="/admin/student/add-student-transfer" element={<AddStudentTransfer />} />
            {/* <Route path="/admin/student/leave-request" element={< />} /> */}

            {/* Activities */}
            <Route path="/admin/activities/cultural-list" element={<CulturalList />} />
            <Route path="/admin/activities/add-cultural" element={<AddCultural />} />
            <Route path="/admin/activities/sports-list" element={<SportsList />} />
            <Route path="/admin/activities/add-sports" element={<AddSports />} />
            <Route path="/admin/activities/competitions-list" element={<Competitions />} />
            <Route path="/admin/activities/add-competition" element={<AddCompetition />} />

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

            {/* Notification */}
            <Route path='/admin/notification/exam-list' element={<ExamList />} />
            <Route path='/admin/notification/event-list' element={<EventList />} />
        </ReactRoutes>
    )
}

export default AdminRoutes
