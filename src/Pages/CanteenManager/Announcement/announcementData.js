export const CATEGORY_OPTIONS = [
    { value: 'general-notice', label: 'General Notice' },
    { value: 'menu-update', label: 'Menu Update' },
    { value: 'service-alert', label: 'Service Alert' },
    { value: 'event-announcement', label: 'Event Announcement' },
    { value: 'emergency-notice', label: 'Emergency Notice' },
]

export const AUDIENCE_OPTIONS = [
    { value: 'all', label: 'All Users' },
    { value: 'students', label: 'Students' },
    { value: 'staff', label: 'Staff' },
    { value: 'parents', label: 'Parents' },
    { value: 'specific-class', label: 'Specific Class' },
    { value: 'specific-department', label: 'Specific Department' },
]

export const PRIORITY_OPTIONS = ['Low', 'Medium', 'High', 'Urgent']

export const DELIVERY_CHANNELS = [
    'In-App Notification',
    'Dashboard Notice Board',
    'Email',
    'SMS (if integrated)',
    'Mobile App Push Notification',
]

export const GRADE_OPTIONS = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
]

export const SECTION_OPTIONS = ['A', 'B', 'C', 'D']

export const DEPARTMENT_OPTIONS = [
    'Mathematics',
    'Science',
    'English',
    'Administration',
    'Sports',
    'Library',
]

export const AUTO_FILLED = {
    sentBy: 'Canteen Manager',
}

export const priorityBadgeColor = {
    Low: 'bg-[#2196F333] text-[#2196F3]',
    Medium: 'bg-[#FF980033] text-[#FF9800]',
    High: 'bg-[#FF572233] text-[#FF5722]',
    Urgent: 'bg-[#FF000033] text-[#FF0000]',
}

export const statusBadgeColor = {
    Draft: 'bg-[#9E9E9E33] text-[#616161]',
    Scheduled: 'bg-[#2196F333] text-[#2196F3]',
    Published: 'bg-[#4CAF5033] text-[#4CAF50]',
    Expired: 'bg-[#FF000033] text-[#FF0000]',
}

export const ANNOUNCEMENTS = [
    {
        announcementId: 'BC-2026-014',
        title: 'New Healthy Meal Combo Available',
        audience: 'Students',
        category: 'Menu Update',
        priority: 'Medium',
        sentBy: 'Canteen Manager',
        publishDate: '10-06-2026 · 08:00 AM',
        expiryDate: '20-06-2026 · 11:59 PM',
        status: 'Published',
        message: 'We are excited to announce a new healthy meal combo — Veg Biryani with fresh fruit juice at a special price of ₹85. Available from Monday to Friday during lunch hours.',
        audienceDetail: null,
        deliveryChannels: ['In-App Notification', 'Dashboard Notice Board', 'Mobile App Push Notification'],
        scheduleType: 'Publish Immediately',
        attachments: [{ name: 'combo-menu.pdf', type: 'PDF' }],
    },
    {
        announcementId: 'BC-2026-013',
        title: 'Canteen Closed for Maintenance',
        audience: 'All',
        category: 'Alert',
        priority: 'High',
        sentBy: 'Canteen Manager',
        publishDate: '12-06-2026 · 06:00 AM',
        expiryDate: '12-06-2026 · 06:00 PM',
        status: 'Scheduled',
        message: 'The school canteen will remain closed on 12 June 2026 for kitchen equipment maintenance. Please plan accordingly.',
        audienceDetail: null,
        deliveryChannels: ['In-App Notification', 'Email', 'SMS (if integrated)'],
        scheduleType: 'Schedule Later',
        attachments: [],
    },
    {
        announcementId: 'BC-2026-012',
        title: 'Annual Food Festival — Volunteer Sign-up',
        audience: 'Staff',
        category: 'Event',
        priority: 'Low',
        sentBy: 'Canteen Manager',
        publishDate: '05-06-2026 · 10:30 AM',
        expiryDate: '—',
        status: 'Published',
        message: 'Staff members interested in volunteering for the Annual Food Festival on 25 June may register with the canteen office by 15 June.',
        audienceDetail: 'Staff — All Departments',
        deliveryChannels: ['Dashboard Notice Board', 'Email'],
        scheduleType: 'Publish Immediately',
        attachments: [{ name: 'festival-flyer.png', type: 'Image' }],
    },
    {
        announcementId: 'BC-2026-011',
        title: 'Grade 10-A — Special Lunch Menu',
        audience: 'Students',
        category: 'Menu Update',
        priority: 'Medium',
        sentBy: 'Canteen Manager',
        publishDate: '08-06-2026 · 07:45 AM',
        expiryDate: '09-06-2026 · 02:00 PM',
        status: 'Expired',
        message: 'Grade 10-A students: tomorrow\'s lunch will feature a special exam-season menu with extra protein options.',
        audienceDetail: 'Grade 10-A',
        deliveryChannels: ['In-App Notification', 'Mobile App Push Notification'],
        scheduleType: 'Publish Immediately',
        attachments: [],
    },
    {
        announcementId: 'BC-2026-010',
        title: 'Wallet Top-up Reminder for Parents',
        audience: 'Parents',
        category: 'General',
        priority: 'Low',
        sentBy: 'Canteen Manager',
        publishDate: '—',
        expiryDate: '30-06-2026 · 11:59 PM',
        status: 'Draft',
        message: 'Dear parents, please ensure your child\'s canteen wallet has sufficient balance for the new month. Minimum recommended balance is ₹500.',
        audienceDetail: null,
        deliveryChannels: ['Email', 'In-App Notification'],
        scheduleType: 'Schedule Later',
        attachments: [{ name: 'wallet-guide.pdf', type: 'PDF' }],
    },
]

export const getAnnouncementById = (id) =>
    ANNOUNCEMENTS.find((entry) => entry.announcementId === id)
