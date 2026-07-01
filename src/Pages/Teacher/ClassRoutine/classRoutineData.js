export const DAILY_ROUTINE = [
    {
        id: 'DR-1',
        period: 1,
        subject: 'Mathematics',
        className: '10-A',
        startTime: '09:00 AM',
        endTime: '09:45 AM',
    },
    {
        id: 'DR-2',
        period: 2,
        subject: 'Mathematics',
        className: '10-B',
        startTime: '09:45 AM',
        endTime: '10:30 AM',
    },
    {
        id: 'DR-3',
        period: 3,
        subject: 'Mathematics',
        className: '9-A',
        startTime: '10:45 AM',
        endTime: '11:30 AM',
    },
    {
        id: 'DR-4',
        period: 4,
        subject: 'Mathematics',
        className: '10-A',
        startTime: '11:30 AM',
        endTime: '12:15 PM',
    },
    {
        id: 'DR-5',
        period: 5,
        subject: 'Mathematics',
        className: '11-A',
        startTime: '01:15 PM',
        endTime: '02:00 PM',
    },
]

export const WEEKLY_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const TIME_SLOTS = [
    { time: '09:00 AM -\n09:45 AM', label: '09:00 AM - 09:45 AM' },
    { time: '09:45 AM -\n10:30 AM', label: '09:45 AM - 10:30 AM' },
    { time: '10:45 AM -\n11:30 AM', label: '10:45 AM - 11:30 AM' },
    { time: '11:30 AM -\n12:15 PM', label: '11:30 AM - 12:15 PM' },
    { time: '01:15 PM -\n02:00 PM', label: '01:15 PM - 02:00 PM' },
]

export const WEEKLY_SCHEDULE = {
    '09:00 AM - 09:45 AM': {
        Monday: { subject: 'Mathematics', className: '10-A' },
        Tuesday: { subject: 'Mathematics', className: '10-B' },
        Wednesday: { subject: 'Mathematics', className: '9-A' },
        Thursday: { subject: 'Mathematics', className: '10-A' },
        Friday: { subject: 'Mathematics', className: '11-A' },
        Saturday: { subject: 'Mathematics', className: '10-B' },
    },
    '09:45 AM - 10:30 AM': {
        Monday: { subject: 'Mathematics', className: '10-B' },
        Tuesday: { subject: 'Mathematics', className: '9-A' },
        Wednesday: { subject: 'Mathematics', className: '10-A' },
        Thursday: { subject: 'Mathematics', className: '11-A' },
        Friday: { subject: 'Mathematics', className: '10-B' },
        Saturday: null,
    },
    '10:45 AM - 11:30 AM': {
        Monday: { subject: 'Mathematics', className: '9-A' },
        Tuesday: { subject: 'Mathematics', className: '10-A' },
        Wednesday: { subject: 'Mathematics', className: '10-B' },
        Thursday: { subject: 'Mathematics', className: '9-A' },
        Friday: { subject: 'Mathematics', className: '10-A' },
        Saturday: { subject: 'Mathematics', className: '9-A' },
    },
    '11:30 AM - 12:15 PM': {
        Monday: { subject: 'Mathematics', className: '11-A' },
        Tuesday: null,
        Wednesday: { subject: 'Mathematics', className: '11-A' },
        Thursday: { subject: 'Mathematics', className: '10-B' },
        Friday: { subject: 'Mathematics', className: '9-A' },
        Saturday: null,
    },
    '01:15 PM - 02:00 PM': {
        Monday: null,
        Tuesday: { subject: 'Mathematics', className: '11-A' },
        Wednesday: null,
        Thursday: { subject: 'Mathematics', className: '10-A' },
        Friday: null,
        Saturday: { subject: 'Mathematics', className: '10-A' },
    },
}

export const SUBJECT_COLORS = {
    Mathematics: 'bg-blue-50 text-blue-700 border border-blue-100',
    Physics: 'bg-purple-50 text-purple-700 border border-purple-100',
    English: 'bg-rose-50 text-rose-700 border border-rose-100',
}
