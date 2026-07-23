import React from 'react'
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'
import BookList from '../Pages/Librarian/BookManagement/BookList/BookList'
import AddBooks from '../Pages/Librarian/BookManagement/BookList/AddBooks'
import IssuedBooks from '../Pages/Librarian/IssuedBooks/IssuedBooks'
import AddIssueBook from '../Pages/Librarian/IssuedBooks/AddIssueBook'
import MembersList from '../Pages/Librarian/Members/MembersList'
import ReminderList from '../Pages/Librarian/Notification/ReminderList'
import EscalationList from '../Pages/Librarian/EscalationManagement/EscalationList'
import AddEscalation from '../Pages/Librarian/EscalationManagement/AddEscalation'
import ViewEscalation from '../Pages/Librarian/EscalationManagement/ViewEscalation'
import CommunicationInbox from '../Pages/Librarian/Communication/Inbox'
import CommunicationDirectMessages from '../Pages/Librarian/Communication/DirectMessages'
import AcademicCalendar from '../Pages/Librarian/AcademicCalendar/AcademicCalendar'

const LibrarianRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/librarian/dashboard" element={<div>Librarian Dashboard</div>} />

            {/* Book Management */}
            <Route path="/librarian/book-management/book-list" element={<BookList />} />
            <Route path="/librarian/book-management/add-book" element={<AddBooks />} />

            {/* Issued Books */}
            <Route path="/librarian/issued-books/issued-book-list" element={<IssuedBooks />} />
            <Route path="/librarian/issued-books/add-issued-book" element={<AddIssueBook />} />

            {/* Members */}
            <Route path="/librarian/members/member-list" element={<MembersList />} />

            {/* Notification */}
            <Route path="/librarian/notification/reminder-list" element={<ReminderList />} />

            {/* Academic Calendar */}
            <Route path="/librarian/academic-calendar" element={<AcademicCalendar />} />

            {/* Communication */}
            <Route path="/librarian/communication" element={<Navigate to="/librarian/communication/inbox" replace />} />
            <Route path="/librarian/communication/inbox" element={<CommunicationInbox />} />
            <Route path="/librarian/communication/direct-messages" element={<CommunicationDirectMessages />} />
            <Route path="/librarian/communication/direct-messages/:conversationId" element={<CommunicationDirectMessages />} />

            {/* Escalation Management */}
            <Route path="/librarian/escalation-management" element={<EscalationList />} />
            <Route path="/librarian/escalation-management/add-escalation" element={<AddEscalation />} />
            <Route path="/librarian/escalation-management/view/:id" element={<ViewEscalation />} />

            <Route path="*" element={<div>Librarian Dashboard</div>} />
        </ReactRoutes>
    )
}

export default LibrarianRoutes
