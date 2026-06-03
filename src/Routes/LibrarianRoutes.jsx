import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import BookList from '../Pages/Librarian/BookManagement/BookList/BookList'
import AddBooks from '../Pages/Librarian/BookManagement/BookList/AddBooks'
import IssuedBooks from '../Pages/Librarian/IssuedBooks/IssuedBooks'
import AddIssueBook from '../Pages/Librarian/IssuedBooks/AddIssueBook'
import MembersList from '../Pages/Librarian/Members/MembersList'
import ReminderList from '../Pages/Librarian/Notification/ReminderList'

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

            <Route path="*" element={<div>Librarian Dashboard</div>} />
        </ReactRoutes>
    )
}

export default LibrarianRoutes
