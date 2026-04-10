import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import AdminssionList from '../Pages/Admin/FrontOffice/AdminssionList/AdminssionList'
import AddAdmission from '../Pages/Admin/FrontOffice/AdminssionList/AddAdmission'
import AdmissionEnquiry from '../Pages/Admin/FrontOffice/AdmissionEnquiry/AdmissionEnquiry'
import AddAdmissionEnquiry from '../Pages/Admin/FrontOffice/AdmissionEnquiry/AddAdmissionEnquiry'
import TeachersList from '../Pages/Admin/FrontOffice/TeachersList/TeachersList'
import AddTeacher from '../Pages/Admin/FrontOffice/TeachersList/AddTeacher'
import LibrarianList from '../Pages/Admin/FrontOffice/LibrarianList/LibrarianList'
import AddLibrarian from '../Pages/Admin/FrontOffice/LibrarianList/AddLibrarian'
import VanDriverList from '../Pages/Admin/FrontOffice/VanDriverList/VanDriverList'
import AddVanDriverList from '../Pages/Admin/FrontOffice/VanDriverList/AddVanDriverList'
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
// import Dashboard from '../Pages/Dashboard/Dashboard'

const AdminRoutes = () => {
    return (
        <ReactRoutes>

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<div>Admin Home</div>} />

            {/* Front Office */}

            <Route path="/admin/front-office/admission-list" element={<AdminssionList />} />
            <Route path="/admin/front-office/add-admission" element={<AddAdmission />} />
            <Route path="/admin/front-office/admission-enquiry" element={<AdmissionEnquiry />} />
            <Route path="/admin/front-office/add-admission-enquiry" element={<AddAdmissionEnquiry />} />
            <Route path="/admin/front-office/teachers-list" element={<TeachersList />} />
            <Route path="/admin/front-office/add-teacher" element={<AddTeacher />} />
            <Route path="/admin/front-office/librarian-list" element={<LibrarianList />} />
            <Route path="/admin/front-office/add-librarian" element={<AddLibrarian />} />
            <Route path="/admin/front-office/van-driver-list" element={<VanDriverList />} />
            <Route path="/admin/front-office/add-van-driver" element={<AddVanDriverList />} />

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

        </ReactRoutes>
    )
}

export default AdminRoutes