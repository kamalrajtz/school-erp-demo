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
    MessageCircle,
    ClipboardPen,
    BookUser,
    DoorOpen,
    ShieldCheck,
    ShieldAlert,
    Star,
    UserRoundCog,
    Rss,
    UtensilsCrossed,
    Package,
    ShoppingCart,
    ClipboardCheck,
    BarChart3,
    Monitor,
    Ticket,
    Sparkles,
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
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/student/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Class",
        to: "#0",
        icon: School,
        subLinks: [
            { icon: MonitorPlay, title: "Online Class", to: "/student/class/online-class" },
            { icon: UserPlus, title: "Extra Class", to: "/student/class/extra-class" },
            { icon: CalendarDays, title: "Timetable", to: "/student/class/timetable-list" },
            { icon: UsersRound, title: "Attendance List", to: "/student/class/attendance-list" },
        ],
    },
    {
        id: 3,
        title: "Studies",
        to: "#0",
        icon: BookOpen,
        subLinks: [
            { icon: BookCopy, title: "Study Material List", to: "/student/studies/study-material-list" },
            { icon: ListChecks, title: "Sample Questions List", to: "/student/studies/sample-questions-list" },
        ],
    },
    {
        id: 4,
        title: "Student Evaluation",
        to: "#0",
        icon: Award,
        subLinks: [
            { icon: NotebookPen, title: "Exam Details", to: "/student/student-evaluation/exam-details" },
        ],
    },
    {
        id: 5,
        title: "Assessment List",
        to: "#0",
        icon: ClipboardList,
        subLinks: [
            { icon: ClipboardPen, title: "Assignment List", to: "/student/assessment/assignment-list" },
        ],
    },
    {
        id: 6,
        title: "Result Details",
        to: "/student/result-details",
        icon: BookUser,
    },
    {
        id: 7,
        title: "Activities",
        to: "#0",
        icon: Trophy,
        subLinks: [
            { icon: Palette, title: "Cultural", to: "/student/activities/cultural-list" },
            { icon: Dumbbell, title: "Sports", to: "/student/activities/sports-list" },
            { icon: Award, title: "Competitions", to: "/student/activities/competitions-list" },
        ],
    },
    {
        id: 8,
        title: "Star Ratings",
        to: "/student/star-ratings/view-ratings",
        icon: Star,
    },
    {
        id: 9,
        title: "Library",
        to: "#0",
        icon: Library,
        subLinks: [
            { icon: BookMarked, title: "Borrowed Books", to: "/student/library/borrowed-books-list" },
        ],
    },
    {
        id: 10,
        title: "Transport",
        to: "#0",
        icon: Van,
        subLinks: [
            { icon: Route, title: "Bus Route", to: "/student/transport/bus-route-details" },
            { icon: MapPin, title: "Track Bus", to: "/student/transport/track-bus" },
        ],
    },
    {
        id: 11,
        title: "Hostel Details",
        to: "/student/hostel/hostel-details",
        icon: Bed,
    },
    {
        id: 12,
        title: "Payment Details",
        to: "#0",
        icon: Wallet,
        subLinks: [
            { icon: BadgeDollarSign, title: "Fees Payment", to: "/student/payment/fees-payment" },
            { icon: Bed, title: "Hostel Payment", to: "/student/payment/hostel-payment" },
            { icon: Bus, title: "Transport Payment", to: "/student/payment/transport-payment" },
        ],
    },
    {
        id: 13,
        title: "Notification",
        to: "#0",
        icon: BellDot,
        subLinks: [
            { icon: NotebookPen, title: "Exams", to: "/student/notification/exam-notification" },
            { icon: PartyPopper, title: "Events", to: "/student/notification/event-notification" },
            { icon: CalendarOff, title: "Holidays", to: "/student/notification/holiday-notification" },
            { icon: BadgeDollarSign, title: "Payment Notification", to: "/student/notification/payment-notification" },
        ],
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
    {
        id: 4,
        title: "Student Management",
        to: "/front-office/student-management",
        icon: UserRound,
    },
    {
        id: 5,
        title: "Teacher Management",
        to: "/front-office/teacher-management",
        icon: UserRoundCog,
    },
    {
        id: 6,
        title: "Gate Pass",
        to: "/front-office/gate-pass-list",
        icon: ArrowRightLeft,
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

export const gateKeeperSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/gate-keeper/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Hostel Gate Pass",
        to: "/gate-keeper/hostel-gate-pass",
        icon: DoorOpen,
    },
    {
        id: 3,
        title: "My Duty",
        to: "/gate-keeper/my-duty",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Incidents",
        to: "/gate-keeper/incidents",
        icon: ShieldAlert,
    },
    {
        id: 5,
        title: "Gate Pass",
        to: "/gate-keeper/gate-pass-list",
        icon: ArrowRightLeft,
    },
    {
        id: 6,
        title: "Broadcast",
        to: "/gate-keeper/broadcast-list",
        icon: Rss,
    },
];

export const gateKeeperManagerSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/gatekeeper-manager/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Assign Duty List",
        to: "/gatekeeper-manager/assign-duty-list",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Leave Approval List",
        to: "/gatekeeper-manager/leave-approval-list",
        icon: CalendarCheck,
    },
    {
        id: 4,
        title: "Incidents Management List",
        to: "/gatekeeper-manager/incidents-list",
        icon: ShieldAlert,
    },
    {
        id: 5,
        title: "Gatekeeper Broadcast",
        to: "/gatekeeper-manager/gatekeeper-broadcast-list",
        icon: Rss,
    },
];

export const canteenManagerSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/canteen-manager/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Menu Management",
        to: "/canteen-manager/menu-management",
        icon: UtensilsCrossed,
    },
    {
        id: 3,
        title: "Inventory Management",
        to: "/canteen-manager/inventory",
        icon: Package,
    },
    {
        id: 4,
        title: "Orders",
        to: "/canteen-manager/orders",
        icon: ShoppingCart,
    },
    {
        id: 5,
        title: "Requests & Approvals",
        to: "/canteen-manager/requests-approvals",
        icon: ClipboardCheck,
    },
    {
        id: 6,
        title: "Reports",
        to: "/canteen-manager/reports",
        icon: BarChart3,
    },
    {
        id: 7,
        title: "Broadcast",
        to: "/canteen-manager/broadcast",
        icon: Rss,
    },
];

export const itSupportManagerSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/it-support-manager/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Asset Management",
        to: "/it-support-manager/asset-management",
        icon: Monitor,
    },
    {
        id: 3,
        title: "Support Tickets",
        to: "/it-support-manager/support-tickets",
        icon: Ticket,
    },
    {
        id: 4,
        title: "Requests & Approvals",
        to: "/it-support-manager/requests-approvals",
        icon: ClipboardCheck,
    },
    {
        id: 5,
        title: "Reports",
        to: "/it-support-manager/reports",
        icon: BarChart3,
    },
    {
        id: 6,
        title: "Broadcast",
        to: "/it-support-manager/broadcast",
        icon: Rss,
    },
];

export const stationeryStoreManagerSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/stationery-store-manager/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Inventory",
        to: "/stationery-store-manager/inventory",
        icon: Package,
    },
    {
        id: 3,
        title: "Issue & Returns",
        to: "/stationery-store-manager/issue-returns",
        icon: ArrowRightLeft,
    },
    {
        id: 4,
        title: "Requests & Approvals",
        to: "/stationery-store-manager/requests-approvals",
        icon: ClipboardCheck,
    },
    {
        id: 5,
        title: "Reports",
        to: "/stationery-store-manager/reports",
        icon: BarChart3,
    },
    {
        id: 6,
        title: "Broadcast",
        to: "/stationery-store-manager/broadcast",
        icon: Rss,
    },
];

export const housekeepingManagerSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/housekeeping-manager/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Task Management",
        to: "/housekeeping-manager/task-management",
        icon: ClipboardList,
    },
    {
        id: 3,
        title: "Inventory",
        to: "/housekeeping-manager/inventory",
        icon: Package,
    },
    {
        id: 4,
        title: "Requests & Approvals",
        to: "/housekeeping-manager/requests-approvals",
        icon: ClipboardCheck,
    },
    {
        id: 5,
        title: "Reports",
        to: "/housekeeping-manager/reports",
        icon: BarChart3,
    },
    {
        id: 6,
        title: "Broadcast",
        to: "/housekeeping-manager/broadcast",
        icon: Rss,
    },
];

export const jointDirectorSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/joint-director/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Task Management",
        to: "/joint-director/task-management",
        icon: ClipboardList,
    },
    {
        id: 3,
        title: "Employee Management",
        to: "#0",
        icon: UsersRound,
        subLinks: [
            { icon: UserRoundCog, title: "JD Assistant", to: "/joint-director/employee-management/jd-assistant" },
            { icon: UtensilsCrossed, title: "Canteen Manager", to: "/joint-director/employee-management/canteen-manager" },
            { icon: ShoppingCart, title: "Store Manager", to: "/joint-director/employee-management/store-manager" },
            { icon: Monitor, title: "IT Team Manager", to: "/joint-director/employee-management/it-team-manager" },
            { icon: Bus, title: "Transport Manager", to: "/joint-director/employee-management/transport-manager" },
            { icon: Sparkles, title: "House Keeping Manager", to: "/joint-director/employee-management/housekeeping-manager" },
            { icon: Car, title: "Drivers List", to: "/joint-director/employee-management/drivers" },
        ],
    },
    {
        id: 4,
        title: "Request Approvals",
        to: "/joint-director/request-approvals",
        icon: ClipboardCheck,
    },
    {
        id: 5,
        title: "Escalations",
        to: "/joint-director/escalations",
        icon: ShieldAlert,
    },
    {
        id: 6,
        title: "Meetings & Calendar",
        to: "/joint-director/meetings-calendar",
        icon: CalendarDays,
    },
    {
        id: 7,
        title: "Assets & Inventory Overview",
        to: "/joint-director/assets-inventory",
        icon: Package,
    },
    {
        id: 8,
        title: "Broadcast",
        to: "/joint-director/broadcast",
        icon: Rss,
    },
];

export const jointDirectorAssistantSidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        to: "/joint-director-assistant/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Task Management",
        to: "/joint-director-assistant/task-management",
        icon: ClipboardList,
    },
    {
        id: 3,
        title: "Employee Management",
        to: "#0",
        icon: UsersRound,
        subLinks: [
            { icon: UtensilsCrossed, title: "Canteen Manager", to: "/joint-director-assistant/employee-management/canteen-manager" },
            { icon: ShoppingCart, title: "Store Manager", to: "/joint-director-assistant/employee-management/store-manager" },
            { icon: Monitor, title: "IT Team Manager", to: "/joint-director-assistant/employee-management/it-team-manager" },
            { icon: Bus, title: "Transport Manager", to: "/joint-director-assistant/employee-management/transport-manager" },
            { icon: Sparkles, title: "House Keeping Manager", to: "/joint-director-assistant/employee-management/housekeeping-manager" },
            { icon: Car, title: "Drivers List", to: "/joint-director-assistant/employee-management/drivers" },
        ],
    },
    {
        id: 4,
        title: "Request Approvals",
        to: "/joint-director-assistant/request-approvals",
        icon: ClipboardCheck,
    },
    {
        id: 5,
        title: "Escalations",
        to: "/joint-director-assistant/escalations",
        icon: ShieldAlert,
    },
    {
        id: 6,
        title: "Meetings & Calendar",
        to: "/joint-director-assistant/meetings-calendar",
        icon: CalendarDays,
    },
    {
        id: 7,
        title: "Assets & Inventory Overview",
        to: "/joint-director-assistant/assets-inventory",
        icon: Package,
    },
    {
        id: 8,
        title: "Broadcast",
        to: "/joint-director-assistant/broadcast",
        icon: Rss,
    },
];

export const directorSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/director/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 3,
        title: "Task Management",
        to: "/director/task-management",
        icon: ClipboardList,
    },
    {
        id: 4,
        title: "Star Ratings",
        to: "/director/star-ratings-list",
        icon: Star,
    },
    {
        id: 5,
        title: "Examination Approvals",
        to: "/director/examination-approvals",
        icon: CalendarCheck,
    },
    {
        id: 12,
        title: "Class Timetable Approvals",
        to: "/director/class-timetable-approvals",
        icon: CalendarDays,
    },
    {
        id: 6,
        title: "Student Management",
        to: "/director/students/student-details-list",
        icon: UserRound,
    },
    {
        id: 7,
        title: "Teacher Management",
        to: "/director/teachers/teacher-details-list",
        icon: UserRoundCog,
    },
    {
        id: 8,
        title: "Co-ordinator Management",
        to: "/director/co-ordinator-management",
        icon: UsersRound,
    },
    {
        id: 9,
        title: "Principal Management",
        to: "/director/principal/view-principal",
        icon: GraduationCap,
    },
    {
        id: 10,
        title: "LMS & E-Learning",
        to: "#0",
        icon: BookOpen,
        subLinks: [
            { icon: BookOpenCheck, title: "Student LMS", to: "/director/lms/student-lms" },
            { icon: BookOpenCheck, title: "Teacher LMS", to: "/director/lms/teacher-lms" },
        ],
    },
    {
        id: 11,
        title: "Request Approvals",
        to: "/director/request-approvals",
        icon: ClipboardList,
    },
    {
        id: 13,
        title: "Broadcast",
        to: "/director/broadcast",
        icon: Rss,
    },
];

export const principalSidebarLinks = [
    // {
    //     id: 1,
    //     title: "Dashboard",
    //     to: "/principal/dashboard",
    //     icon: LayoutDashboard,
    // },
    {
        id: 2,
        title: "Documents",
        to: "/principal/documents",
        icon: FolderOpen,
    },
    {
        id: 3,
        title: "Task Management",
        to: "/principal/task-management",
        icon: ClipboardList,
    },
    {
        id: 4,
        title: "Star Ratings",
        to: "/principal/star-ratings-list",
        icon: Star,
    },
    {
        id: 5,
        title: "Examination Timetable",
        to: "/principal/examination-timetable",
        icon: CalendarCheck,
    },
    {
        id: 11,
        title: "Class Timetable",
        to: "/principal/class-timetable",
        icon: CalendarDays,
    },
    {
        id: 6,
        title: "Student Management",
        to: "/principal/students/student-details-list",
        icon: UserRound,
    },
    {
        id: 7,
        title: "Employees Management",
        to: "#0",
        icon: UsersRound,
        subLinks: [
            { icon: UserRoundCog, title: "Teachers", to: "/principal/employees-management/teachers" },
            { icon: UsersRound, title: "Coordinators", to: "/principal/employees-management/coordinators" },
            { icon: Briefcase, title: "Front Office", to: "/principal/employees-management/front-office" },
            { icon: Library, title: "Librarians", to: "/principal/employees-management/librarians" },
            { icon: BrickWallShield, title: "Gate Keeper Manager", to: "/principal/employees-management/gatekeeper-manager" },
            { icon: BrickWallShield, title: "Gate Keepers", to: "/principal/employees-management/gatekeepers" },
        ],
    },
    {
        id: 9,
        title: "LMS & E-Learning",
        to: "#0",
        icon: BookOpen,
        subLinks: [
            { icon: BookOpenCheck, title: "Student LMS", to: "/principal/lms/student-lms" },
            { icon: BookOpenCheck, title: "Teacher LMS", to: "/principal/lms/teacher-lms" },
        ],
    },
    {
        id: 10,
        title: "Escalation Management",
        to: "/principal/escalation-management",
        icon: ShieldAlert,
    },
];

export const roleBasedSidebarLinks = {
    Administrator: adminSidebarLinks,
    Student: studentSidebarLinks,
    Librarian: librarianSidebarLinks,
    PRM: prmSidebarLinks,
    GateKeeper: gateKeeperSidebarLinks,
    GateKeeperManager: gateKeeperManagerSidebarLinks,
    CanteenManager: canteenManagerSidebarLinks,
    ITSupportManager: itSupportManagerSidebarLinks,
    StationeryStoreManager: stationeryStoreManagerSidebarLinks,
    JointDirector: jointDirectorSidebarLinks,
    JointDirectorAssistant: jointDirectorAssistantSidebarLinks,
    Director: directorSidebarLinks,
    Principal: principalSidebarLinks,
};
