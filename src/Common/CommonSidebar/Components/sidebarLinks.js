import {
    LayoutDashboard,
    BrickWallShield,
    Users,
    BookOpen,
    Car,
    FileText,
    CalendarDays,
    BookCopy,
    CalendarCheck,
    GraduationCap,
    Briefcase,
    FileX,
    School,
    ClipboardList,
    MonitorPlay,
    UserPlus,
    Library,
    BookOpenCheck,
    BookMarked,
    UserRound,
    UserRoundSearch,
    BadgeDollarSign,
    UsersRound,
    ArrowRightLeft,
    Trophy,
    Palette,
    Dumbbell,
    Award,
    FolderOpen,
    Van,
    Bus,
    MapPin,
    Route,
    ListChecks,
    NotebookPen,
    Wallet,
    Bed,
    BellDot,
    PartyPopper,
    CalendarOff,
    MessageCircle
} from "lucide-react";

export const adminSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Front Office",
        to: "#0",
        icon: BrickWallShield,
        subLinks: [
            // { icon: FileText, title: "Admission Enquiry", to: "/front-office/admission-enquiry" },
            { icon: FileText, title: "Admission List", to: "/admin/front-office/admission-list" },
            { icon: Users, title: "Teachers List", to: "/admin/front-office/teachers-list" },
            { icon: BookOpen, title: "Librarian List", to: "/admin/front-office/librarian-list" },
            { icon: Car, title: "Van Driver List", to: "/admin/front-office/van-driver-list" },
        ],
    },
    {
        id: 3,
        title: "Attendance",
        to: "#0",
        icon: CalendarCheck,
        subLinks: [
            { icon: GraduationCap, title: "Students", to: "/admin/attendance/students-list" },
            { icon: Briefcase, title: "Employees", to: "/admin/attendance/employees-list" },
            { icon: FileX, title: "Leave Request", to: "/admin/attendance/leave-request-list" },
        ],
    },
    {
        id: 4,
        title: "Class",
        to: "#0",
        icon: School,
        subLinks: [
            { icon: ClipboardList, title: "Class Details", to: "/admin/class/class-details" },
            { icon: MonitorPlay, title: "Online Class", to: "/admin/class/online-class" },
            { icon: UserPlus, title: "Extra Class", to: "/admin/class/extra-class" },
            { icon: CalendarDays, title: "Timetable", to: "/admin/class/timetable-list" },
            { icon: BookCopy, title: "Subjects", to: "/admin/class/subjects" },
        ],
    },
    {
        id: 5,
        title: "Student",
        to: "#0",
        icon: UserRound,
        subLinks: [
            { icon: UserRoundSearch, title: "Student Details", to: "/admin/student/student-details" },
            { icon: BadgeDollarSign, title: "Class Fee Details", to: "/admin/student/class-fee-details" },
            { icon: UsersRound, title: "Parent Details", to: "/admin/student/parent-details" },
            { icon: ArrowRightLeft, title: "Student Transfer", to: "/admin/student/student-transfer" },
        ],
    },
    {
        id: 6,
        title: "Activities",
        to: "#0",
        icon: Trophy,
        subLinks: [
            { icon: Palette, title: "Cultural", to: "/admin/activities/cultural-list" },
            { icon: Dumbbell, title: "Sports", to: "/admin/activities/sports-list" },
            { icon: Award, title: "Competitions", to: "/admin/activities/competitions-list" },
        ],
    },
    {
        id: 7,
        title: "Documents",
        to: "#0",
        icon: FolderOpen,
        subLinks: [{ icon: FileText, title: "Student Documents", to: "/admin/documents/student-documents" }],
    },
    {
        id: 8,
        title: "Transport",
        to: "#0",
        icon: Van,
        subLinks: [
            { icon: Bus, title: "Vehicle Details", to: "/admin/transport/vehicle-details" },
            { icon: MapPin, title: "Route Details", to: "/admin/transport/route-details" },
            // { icon: Route, title: "Route Data", to: "/admin/transport/route-data-list" },
            { icon: ListChecks, title: "Assigned Route List", to: "/admin/transport/assigned-route-list" },
        ],
    },
    {
        id: 9,
        title: "Exam Details",
        to: "/admin/exam-details/exam-details-list",
        icon: NotebookPen,
    },
    {
        id: 10,
        title: "Expenses",
        to: "#0",
        icon: Wallet,
        subLinks: [
            { icon: BadgeDollarSign, title: "Salaries", to: "/admin/expenses/salaries-list" },
            { icon: Bed, title: "Hostel", to: "/admin/expenses/hostel-list" },
            { icon: Bus, title: "Transport", to: "/admin/expenses/transport-list" },
            { icon: Library, title: "Library", to: "/admin/expenses/library-list" },
            { icon: FileText, title: "Others", to: "/admin/expenses/others-list" },
        ],
    },
    {
        id: 11,
        title: "Notification",
        to: "#0",
        icon: BellDot,
        subLinks: [
            { icon: NotebookPen, title: "Exams", to: "/admin/notification/exam-list" },
            { icon: PartyPopper, title: "Events", to: "/admin/notification/event-list" },
            // { icon: CalendarOff, title: "Holidays", to: "/admin/notification/holiday-list" },
        ],
    },
];

export const studentSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/student/dashboard",
        icon: LayoutDashboard,
    },
];

export const prmSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/front-office/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Front Office",
        to: "#0",
        icon: BrickWallShield,
        subLinks: [
            { icon: FileText, title: "Admission Enquiry", to: "/front-office/admission-enquiry" },
        ],
    },
    {
        id: 3,
        title: "Common Enquiry",
        to: "#0",
        icon: MessageCircle,
        subLinks: [
            { icon: FileText, title: "Enquiry List", to: "/front-office/enquiry-list" },
        ],
    },
];

export const librarianSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/librarian/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Book Management",
        to: "#0",
        icon: Library,
        subLinks: [
            { icon: BookOpenCheck, title: "Book List", to: "/librarian/book-management/book-list" }
        ],
    },
    {
        id: 3,
        title: "Issued Books",
        to: "/librarian/issued-books/issued-book-list",
        icon: BookMarked,
    },
    {
        id: 4,
        title: "Members",
        to: "/librarian/members/member-list",
        icon: UsersRound,
    },
    {
        id: 5,
        title: "Notification",
        to: "#0",
        icon: BellDot,
        subLinks: [
            { icon: BellDot, title: "Reminder", to: "/librarian/notification/reminder-list" }
        ],
    },
];

export const roleBasedSidebarLinks = {
    Administrator: adminSidebarLinks,
    Student: studentSidebarLinks,
    Librarian: librarianSidebarLinks,
    PRM: prmSidebarLinks,
};
