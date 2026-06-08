import React from 'react'
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'
import StudentDashboard from '../Pages/Student/Dashboard/StudentDashboard'
import OnlineClassDetails from '../Pages/Student/Class/OnlineClassDetails'
import ExtraClassDetails from '../Pages/Student/Class/ExtraClassDetails'
import TimeTableDetails from '../Pages/Student/Class/TimeTableDetails'
import AttendanceDetails from '../Pages/Student/Class/AttendanceDetails'
import AttendanceReport from '../Pages/Student/Class/AttendanceReport'
import StudyMaterialList from '../Pages/Student/Studies/StudyMaterialList'
import SampleQuestionsList from '../Pages/Student/Studies/SampleQuestionsList'
import ExamDetailsList from '../Pages/Student/StudentEvaluation/ExamDetailsList'
import AssignmentList from '../Pages/Student/AssessmentList/AssignmentList'
import ResultDetails from '../Pages/Student/Results/ResultDetails'
import CulturalList from '../Pages/Student/Activities/CulturalList'
import SportsList from '../Pages/Student/Activities/SportsList'
import CompetitionList from '../Pages/Student/Activities/CompetitionList'
import BorrowedBooksList from '../Pages/Student/Library/BorrowedBooksList'
import BusRouteDetails from '../Pages/Student/Transport/BusRouteDetails'
import TrackBus from '../Pages/Student/Transport/TrackBus'
import HostelDetails from '../Pages/Student/Hostel/HostelDetails'
import FeesPayemnt from '../Pages/Student/PaymentDetails/FeesPayemnt'
import HostelPayment from '../Pages/Student/PaymentDetails/HostelPayment'
import TransportPayment from '../Pages/Student/PaymentDetails/TransportPayment'
import ExamNotification from '../Pages/Student/Notifications/ExamNotification'
import EventNotification from '../Pages/Student/Notifications/EventNotification'
import HolidayNotification from '../Pages/Student/Notifications/HolidayNotification'
import PaymentNotification from '../Pages/Student/Notifications/PaymentNotification'

const StudentRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="*" element={<Navigate to="/student/dashboard" replace />} />

            {/* Class */}
            <Route path="/student/class/online-class" element={<OnlineClassDetails />} />
            <Route path="/student/class/extra-class" element={<ExtraClassDetails />} />
            <Route path="/student/class/timetable-list" element={<TimeTableDetails />} />
            <Route path="/student/class/attendance-list" element={<AttendanceDetails />} />
            <Route path="/student/class/attendance-report" element={<AttendanceReport />} />
            <Route path="/student/studies/study-material-list" element={<StudyMaterialList />} />
            <Route path="/student/studies/sample-questions-list" element={<SampleQuestionsList />} />
            <Route path="/student/student-evaluation/exam-details" element={<ExamDetailsList />} />
            <Route path="/student/assessment/assignment-list" element={<AssignmentList />} />
            <Route path="/student/result-details" element={<ResultDetails />} />
            <Route path="/student/activities/cultural-list" element={<CulturalList />} />
            <Route path="/student/activities/sports-list" element={<SportsList />} />
            <Route path="/student/activities/competitions-list" element={<CompetitionList />} />
            <Route path="/student/library/borrowed-books-list" element={<BorrowedBooksList />} />
            <Route path="/student/transport/bus-route-details" element={<BusRouteDetails />} />
            <Route path="/student/transport/track-bus" element={<TrackBus />} />
            <Route path="/student/hostel/hostel-details" element={<HostelDetails />} />
            <Route path="/student/payment/fees-payment" element={<FeesPayemnt />} />
            <Route path="/student/payment/hostel-payment" element={<HostelPayment />} />
            <Route path="/student/payment/transport-payment" element={<TransportPayment />} />

            {/* Notification */}
            <Route path="/student/notification/exam-notification" element={<ExamNotification />} />
            <Route path="/student/notification/event-notification" element={<EventNotification />} />
            <Route path="/student/notification/holiday-notification" element={<HolidayNotification />} />
            <Route path="/student/notification/payment-notification" element={<PaymentNotification />} />
        </ReactRoutes>
    )
}

export default StudentRoutes
