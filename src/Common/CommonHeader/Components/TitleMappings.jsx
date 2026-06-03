export const singleTitleMapping = {
    "/dashboard": "Dashboard",
    "/admin/dashboard": "Dashboard",

    // Front Office
    "/front-office/dashboard": "Front Office Dashboard",
    "/front-office/admission-enquiry": "Admission Enquiry",
    "/front-office/add-admission-enquiry": "Add Admission Enquiry",
    "/admin/front-office/admission-list": "Admission List",
    "/admin/front-office/add-admission": "Add Admission",
    "/admin/front-office/teachers-list": "Teachers List",
    "/admin/front-office/add-teacher": "Add Teacher",
    "/admin/front-office/librarian-list": "Librarian List",
    "/admin/front-office/add-librarian": "Add Librarian",
    "/admin/front-office/van-driver-list": "Van Driver List",
    "/admin/front-office/add-van-driver": "Add Van Driver",


    // Attendance
    "/admin/attendance/students-list": "Students Attendance List",
    "/admin/attendance/employees-list": "Employees Attendance List",
    "/admin/attendance/leave-request-list": "Leave Request List",
    "/admin/attendance/leave-request": "Edit Leave Request",


    // Class
    "/admin/class/class-details": "Class Details List",
    "/admin/class/add-class-details": "Add Class Details",
    "/admin/class/online-class": "Online Class List",
    "/admin/class/add-online-class": "Add Online Class",
    "/admin/class/extra-class": "Extra Class List",
    "/admin/class/add-extra-class": "Add Extra Class",
    "/admin/class/timetable-list": "Time Table List",
    "/admin/class/add-timetable": "Add Time Table",
    "/admin/class/subjects": "Subjects List",
    "/admin/class/add-subjects": "Add New Subject",


    // Library Details (Admin)
    "/admin/library-details/book-list": "Book List",
    "/admin/library-details/add-book": "Add Book",
    "/admin/library-details/issued-book": "Issued Book List",
    "/admin/library-details/add-issued-book": "Add Issued Book",


    // Student Details
    "/admin/student/student-details": "Student Details List",
    "/admin/student/class-fee-details": "Class Fee Details List",
    "/admin/student/add-class-fee-details": "Add Class Fee Details",
    "/admin/student/parent-details": "Parent Details List",
    "/admin/student/student-transfer": "Student Transfer List",
    "/admin/student/add-student-transfer": "Add Student Transfer",
    "/admin/student/leave-request": "Student Leave Request List",
    "/admin/student/add-leave-request": "Add Student Leave Request",

    // Activities
    "/admin/activities/cultural-list": "Cultural List",
    "/admin/activities/add-cultural": "Add Cultural Information",
    "/admin/activities/sports-list": "Sports List",
    "/admin/activities/add-sports": "Add Sports Information",
    "/admin/activities/competitions-list": "Competitions List",
    "/admin/activities/add-competition": "Add Competition Information",

    // Documents
    "/admin/documents/student-documents": "Student Documents List",
    "/admin/documents/add-student-documents": "Add Student Documents",

    // Transport
    "/admin/transport/vehicle-details": "Vehicle Details List",
    "/admin/transport/add-vehicle-details": "Add Vehicle Details",
    "/admin/transport/route-details": "Route Details List",
    "/admin/transport/add-route-details": "Add Route Details",
    "/admin/transport/route-data-list": "Route Data List",
    "/admin/transport/assigned-route-list": "Assigned Route List",
    "/admin/transport/assign-route": "Assign Route",

    // Exam Details
    "/admin/exam-details/exam-details-list": "Exam Details List",
    "/admin/exam-details/add-exam-details": "Add Exam Details",

    // Expenses
    "/admin/expenses/salaries-list": "Salaries Expenses List",
    "/admin/expenses/add-salaries-exp": "Add Salaries Expenses",
    "/admin/expenses/hostel-list": "Hostel Expenses List",
    "/admin/expenses/add-hostel-exp": "Add Hostel Expenses",
    "/admin/expenses/transport-list": "Transport Expenses List",
    "/admin/expenses/add-transport-exp": "Add Transport Expenses",
    "/admin/expenses/library-list": "Library Expenses List",
    "/admin/expenses/add-library-exp": "Add Library Expenses",
    "/admin/expenses/others-list": "Others Expenses List",
    "/admin/expenses/add-others-exp": "Add Others Expenses",

    // Notification
    "/admin/notification/exam-list": "Exam List",
    "/admin/notification/event-list": "Event List",
    "/admin/notification/holiday-list": "Holiday List",
    "/admin/notification/add-holiday": "Add Holiday",

    // ── Librarian Role ────────────────────────────────────────────────────────
    "/librarian/dashboard": "Dashboard",

    // Book Management
    "/librarian/book-management/book-list": "Book List",
    "/librarian/book-management/add-book": "Add Book",

    // Issued Books
    "/librarian/issued-books/issued-book-list": "Issued Book List",
    "/librarian/issued-books/add-issued-book": "Add Issued Book",

    // Members
    "/librarian/members/member-list": "Members List",

    // Notification
    "/librarian/notification/reminder-list": "Reminder List",

    // Common Enquiry
    "/front-office/enquiry-list": "Enquiry List",
    "/front-office/add-enquiry": "Add Enquiry",
}

/** Paths with params never equal `location.pathname`; match with prefixes / patterns here */
const dynamicTitleMatchers = [
    { test: (p) => /^\/admin\/front-office\/view-teacher\/[^/]+$/.test(p), title: 'Teacher Details' },
    { test: (p) => /^\/admin\/front-office\/view-librarian\/[^/]+$/.test(p), title: 'Librarian Details' },
    { test: (p) => /^\/admin\/front-office\/view-van-driver\/[^/]+$/.test(p), title: 'Van Driver Details' },
    { test: (p) => /^\/admin\/front-office\/view-admission\/[^/]+$/.test(p), title: 'Admission Details' },
    { test: (p) => /^\/admin\/front-office\/view-admission-enquiry\/[^/]+$/.test(p), title: 'Admission Enquiry Details' },
    { test: (p) => /^\/admin\/student\/view-student-details\/[^/]+$/.test(p), title: 'View Student Details' },
    { test: (p) => /^\/admin\/class\/view-online-class\/[^/]+$/.test(p), title: 'Online Class Details' },
    { test: (p) => /^\/admin\/class\/view-extra-class\/[^/]+$/.test(p), title: 'Extra Class Details' },
    { test: (p) => /^\/admin\/class\/view-timetable\/[^/]+$/.test(p), title: 'Time Table Details' },
    { test: (p) => /^\/admin\/class\/view-subject\/[^/]+$/.test(p), title: 'Subject Details' },
    { test: (p) => /^\/admin\/activities\/view-cultural\/[^/]+$/.test(p), title: 'Cultural Activity Details' },
    { test: (p) => /^\/admin\/activities\/view-sports\/[^/]+$/.test(p), title: 'Sports Activity Details' },
    { test: (p) => /^\/admin\/activities\/view-competition\/[^/]+$/.test(p), title: 'Competition Activity Details' },
    { test: (p) => /^\/admin\/documents\/view-student-documents\/[^/]+$/.test(p), title: 'Student Document Details' },
]

export function getPageTitle(pathname) {
    const exact = singleTitleMapping[pathname]
    if (exact != null) return exact
    const hit = dynamicTitleMatchers.find((m) => m.test(pathname))
    return hit?.title
}
