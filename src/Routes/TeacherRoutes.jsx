import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Teacher/Dashboard/Dashboard'
import Attendance from '../Pages/Teacher/Attendance/Attendance'
import AttendanceHistory from '../Pages/Teacher/AttendanceHistory/AttendanceHistory'
import AssignedClass from '../Pages/Teacher/AssignedClass/AssignedClass'
import ClassRoutine from '../Pages/Teacher/ClassRoutine/ClassRoutine'
import ExtraClass from '../Pages/Teacher/ExtraClass/ExtraClass'
import AddExtraClass from '../Pages/Teacher/ExtraClass/AddExtraClass'
import ViewExtraClass from '../Pages/Teacher/ExtraClass/ViewExtraClass'
import OnlineClass from '../Pages/Teacher/OnlineClass/OnlineClass'
import AddOnlineClass from '../Pages/Teacher/OnlineClass/AddOnlineClass'
import ViewOnlineClass from '../Pages/Teacher/OnlineClass/ViewOnlineClass'
import MyLeaveRequests from '../Pages/Teacher/LeaveRequest/MyLeaveRequests'
import AddLeaveRequest from '../Pages/Teacher/LeaveRequest/AddLeaveRequest'
import ViewMyLeaveRequest from '../Pages/Teacher/LeaveRequest/ViewMyLeaveRequest'
import ReceivedLeaveRequests from '../Pages/Teacher/LeaveRequest/ReceivedLeaveRequests'
import ViewReceivedLeaveRequest from '../Pages/Teacher/LeaveRequest/ViewReceivedLeaveRequest'
import Syllabus from '../Pages/Teacher/Syllabus/Syllabus'
import StudyMaterials from '../Pages/Teacher/StudyMaterials/StudyMaterials'
import AddStudyMaterial from '../Pages/Teacher/StudyMaterials/AddStudyMaterial'
import ViewStudyMaterial from '../Pages/Teacher/StudyMaterials/ViewStudyMaterial'
import ParentsList from '../Pages/Teacher/ParentsList/ParentsList'
import StudentsList from '../Pages/Teacher/StudentsList/StudentsList'
import ViewStudent from '../Pages/Teacher/StudentsList/ViewStudent'
import ViewStudentFullDetails from '../Pages/Teacher/StudentsList/ViewStudentFullDetails'
import BooksBorrowed from '../Pages/Teacher/BooksBorrowed/BooksBorrowed'
import CreateExamSchedule from '../Pages/Teacher/CreateExamSchedule/CreateExamSchedule'
import AddExamSchedule from '../Pages/Teacher/CreateExamSchedule/AddExamSchedule'
import ExamHallDuty from '../Pages/Teacher/ExamHallDuty/ExamHallDuty'
import StarRatings from '../Pages/Teacher/StudentEvaluation/StarRatings/StarRatings'
import AddStarRating from '../Pages/Teacher/StudentEvaluation/StarRatings/AddStarRating'
import ViewStarRating from '../Pages/Teacher/StudentEvaluation/StarRatings/ViewStarRating'
import StarOfMonth from '../Pages/Teacher/StudentEvaluation/StarOfMonth/StarOfMonth'
import QuestionBanks from '../Pages/Teacher/StudentEvaluation/QuestionBanks/QuestionBanks'
import AddQuestionBank from '../Pages/Teacher/StudentEvaluation/QuestionBanks/AddQuestionBank'
import ViewQuestionBank from '../Pages/Teacher/StudentEvaluation/QuestionBanks/ViewQuestionBank'
import StudentTransfer from '../Pages/Teacher/StudentEvaluation/StudentTransfer/StudentTransfer'
import ViewStudentTransfer from '../Pages/Teacher/StudentEvaluation/StudentTransfer/ViewStudentTransfer'
import EnterMarks from '../Pages/Teacher/MarksResults/EnterMarks/EnterMarks'
import AddEnterMarks from '../Pages/Teacher/MarksResults/EnterMarks/AddEnterMarks'
import ViewEnterMarks from '../Pages/Teacher/MarksResults/EnterMarks/ViewEnterMarks'
import ResultSummary from '../Pages/Teacher/MarksResults/ResultSummary/ResultSummary'
import CulturalList from '../Pages/Teacher/Activities/Cultural/CulturalList'
import AddCultural from '../Pages/Teacher/Activities/Cultural/AddCultural'
import SportsList from '../Pages/Teacher/Activities/Sports/SportsList'
import AddSports from '../Pages/Teacher/Activities/Sports/AddSports'
import Competitions from '../Pages/Teacher/Activities/Competitions/Competitions'
import AddCompetition from '../Pages/Teacher/Activities/Competitions/AddCompetition'
import Notifications from '../Pages/Teacher/Notifications/Notifications'
import HomeFun from '../Pages/Teacher/StudentDeliverables/HomeFun/HomeFun'
import AddHomeFun from '../Pages/Teacher/StudentDeliverables/HomeFun/AddHomeFun'
import ViewHomeFun from '../Pages/Teacher/StudentDeliverables/HomeFun/ViewHomeFun'
import StudentDeliverablesStudyMaterials from '../Pages/Teacher/StudentDeliverables/StudyMaterials/StudyMaterials'
import AddStudentDeliverablesStudyMaterial from '../Pages/Teacher/StudentDeliverables/StudyMaterials/AddStudyMaterial'
import ViewStudentDeliverablesStudyMaterial from '../Pages/Teacher/StudentDeliverables/StudyMaterials/ViewStudyMaterial'
import SampleQuestions from '../Pages/Teacher/StudentDeliverables/SampleQuestions'
import ExamMark from '../Pages/Teacher/StudentEvaluation/ExamMark/ExamMark'
import ExamSchedule from '../Pages/Teacher/StudentEvaluation/ExamSchedule/ExamSchedule'
import EscalationList from '../Pages/Teacher/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/Teacher/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/Teacher/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/Teacher/Communication/Inbox'
import CommunicationDirectMessages from '../Pages/Teacher/Communication/DirectMessages'
import AcademicCalendar from '../Pages/Teacher/AcademicCalendar/AcademicCalendar'
import SubmitLessonPlan from '../Pages/Teacher/LessonPlanApproval/SubmitLessonPlan'
import AddLessonPlan from '../Pages/Teacher/LessonPlanApproval/AddLessonPlan'
import AnnouncementList from '../Pages/Teacher/Announcement/AnnouncementList'
import ViewAnnouncement from '../Pages/Teacher/Announcement/ViewAnnouncement'

const Placeholder = () => null

const TeacherRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/teacher/dashboard" element={<Dashboard />} />
            <Route path="/teacher/attendance" element={<Attendance />} />
            <Route path="/teacher/attendance-history" element={<AttendanceHistory />} />
            <Route path="/teacher/class/assigned-class" element={<AssignedClass />} />
            <Route path="/teacher/class/class-routine" element={<ClassRoutine />} />
            <Route path="/teacher/class/extra-class" element={<ExtraClass />} />
            <Route path="/teacher/class/extra-class/add" element={<AddExtraClass />} />
            <Route path="/teacher/class/extra-class/view/:id" element={<ViewExtraClass />} />
            <Route path="/teacher/class/online-class" element={<OnlineClass />} />
            <Route path="/teacher/class/online-class/add" element={<AddOnlineClass />} />
            <Route path="/teacher/class/online-class/view/:id" element={<ViewOnlineClass />} />
            <Route path="/teacher/class/leave-request" element={<Navigate to="/teacher/leave-request/received" replace />} />
            <Route path="/teacher/leave-request/my-requests" element={<MyLeaveRequests />} />
            <Route path="/teacher/leave-request/my-requests/add" element={<AddLeaveRequest />} />
            <Route path="/teacher/leave-request/my-requests/view/:id" element={<ViewMyLeaveRequest />} />
            <Route path="/teacher/leave-request/received" element={<ReceivedLeaveRequests />} />
            <Route path="/teacher/leave-request/received/view/:id" element={<ViewReceivedLeaveRequest />} />
            <Route path="/teacher/academics/syllabus" element={<Syllabus />} />
            <Route path="/teacher/academics/study-materials" element={<StudyMaterials />} />
            <Route path="/teacher/academics/study-materials/add" element={<AddStudyMaterial />} />
            <Route path="/teacher/academics/study-materials/view/:id" element={<ViewStudyMaterial />} />
            <Route path="/teacher/student-deliverables/home-fun" element={<HomeFun />} />
            <Route path="/teacher/student-deliverables/home-fun/add" element={<AddHomeFun />} />
            <Route path="/teacher/student-deliverables/home-fun/view/:id" element={<ViewHomeFun />} />
            <Route path="/teacher/student-deliverables/study-materials" element={<StudentDeliverablesStudyMaterials />} />
            <Route path="/teacher/student-deliverables/study-materials/add" element={<AddStudentDeliverablesStudyMaterial />} />
            <Route path="/teacher/student-deliverables/study-materials/view/:id" element={<ViewStudentDeliverablesStudyMaterial />} />
            <Route path="/teacher/student-deliverables/sample-questions" element={<SampleQuestions />} />
            <Route path="/teacher/user-management/students-list" element={<StudentsList />} />
            <Route path="/teacher/user-management/students-list/view/:id" element={<ViewStudent />} />
            <Route path="/teacher/user-management/students-list/view/:id/full" element={<ViewStudentFullDetails />} />
            <Route path="/teacher/user-management/parents-list" element={<ParentsList />} />
            <Route path="/teacher/library/books-borrowed" element={<BooksBorrowed />} />
            <Route path="/teacher/examination/create-schedule" element={<CreateExamSchedule />} />
            <Route path="/teacher/examination/create-schedule/add" element={<AddExamSchedule />} />
            <Route path="/teacher/examination/exam-hall-duty" element={<ExamHallDuty />} />
            <Route path="/teacher/student-evaluation/exam-mark" element={<ExamMark />} />
            <Route path="/teacher/student-evaluation/exam-schedule" element={<ExamSchedule />} />
            <Route path="/teacher/student-evaluation/star-ratings" element={<StarRatings />} />
            <Route path="/teacher/student-evaluation/star-ratings/add" element={<AddStarRating />} />
            <Route path="/teacher/student-evaluation/star-ratings/view/:id" element={<ViewStarRating />} />
            <Route path="/teacher/student-evaluation/star-of-month" element={<StarOfMonth />} />
            <Route path="/teacher/student-evaluation/questions-banks" element={<QuestionBanks />} />
            <Route path="/teacher/student-evaluation/questions-banks/add" element={<AddQuestionBank />} />
            <Route path="/teacher/student-evaluation/questions-banks/view/:id" element={<ViewQuestionBank />} />
            <Route path="/teacher/student-evaluation/student-transfer" element={<StudentTransfer />} />
            <Route path="/teacher/student-evaluation/student-transfer/view/:id" element={<ViewStudentTransfer />} />
            <Route path="/teacher/marks-results/enter-marks" element={<EnterMarks />} />
            <Route path="/teacher/marks-results/enter-marks/add" element={<AddEnterMarks />} />
            <Route path="/teacher/marks-results/enter-marks/view/:id" element={<ViewEnterMarks />} />
            <Route path="/teacher/marks-results/result-summary" element={<ResultSummary />} />
            <Route path="/teacher/activities/cultural" element={<CulturalList />} />
            <Route path="/teacher/activities/cultural/add" element={<AddCultural />} />
            <Route path="/teacher/activities/sports" element={<SportsList />} />
            <Route path="/teacher/activities/sports/add" element={<AddSports />} />
            <Route path="/teacher/activities/competitions" element={<Competitions />} />
            <Route path="/teacher/activities/competitions/add" element={<AddCompetition />} />
            <Route path="/teacher/notifications" element={<Notifications />} />
            <Route path="/teacher/announcement" element={<AnnouncementList />} />
            <Route path="/teacher/announcement/view/:id" element={<ViewAnnouncement />} />
            <Route path="/teacher/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/teacher/lesson-plan-approval" element={<SubmitLessonPlan />} />
            <Route path="/teacher/lesson-plan-approval/add" element={<AddLessonPlan />} />
            <Route path="/teacher/communication" element={<Navigate to="/teacher/communication/inbox" replace />} />
            <Route path="/teacher/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/teacher/communication/direct-messages" element={<CommunicationDirectMessages />} />
            <Route path="/teacher/communication/direct-messages/:conversationId" element={<CommunicationDirectMessages />} />
            <Route path="/teacher/escalation-management" element={<EscalationList />} />
            <Route path="/teacher/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/teacher/escalation-management/view/:id" element={<ViewEscalation />} />
            <Route path="*" element={<Navigate to="/teacher/dashboard" replace />} />
        </ReactRoutes>
    )
}

export default TeacherRoutes
