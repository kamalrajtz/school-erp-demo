export const CATEGORY_OPTIONS = [
    'Office Operations',
    'Meeting Coordination',
    'Request Follow-up',
    'General Announcement',
    'Emergency',
]

export const VISIBLE_TO_OPTIONS = [
    'Joint Director Office',
    'Department Managers',
    'JD Operations Team',
    'All Staff',
]

export const MOCK_BROADCASTS = [
    {
        id: 'JDAB001',
        title: 'Weekly JD Office Schedule — June',
        attachmentName: 'JD-Office-Schedule-June.pdf',
        category: 'Office Operations',
        message: 'Updated weekly schedule for Joint Director office meetings, document reviews, and department walkthroughs.',
        sentBy: 'Joint Director Assistant',
        broadcastDate: '10-06-2026',
        visibleTo: 'Joint Director Office',
    },
    {
        id: 'JDAB002',
        title: 'Pending Request Reminder — Department Managers',
        attachmentName: 'Pending-Requests-Reminder.pdf',
        category: 'Request Follow-up',
        message: 'Reminder to all department managers to submit pending approval requests by 18 June.',
        sentBy: 'Joint Director Assistant',
        broadcastDate: '08-06-2026',
        visibleTo: 'Department Managers',
    },
    {
        id: 'JDAB003',
        title: 'Meeting Minutes — Department Heads Sync',
        attachmentName: 'Dept-Heads-Meeting-Minutes.pdf',
        category: 'Meeting Coordination',
        message: 'Circulated minutes and action items from the latest department heads sync meeting.',
        sentBy: 'Joint Director Assistant',
        broadcastDate: '06-06-2026',
        visibleTo: 'JD Operations Team',
    },
    {
        id: 'JDAB004',
        title: 'Urgent: Escalation Response Protocol',
        attachmentName: 'Escalation-Response-Protocol.pdf',
        category: 'Emergency',
        message: 'Updated escalation response steps for the JD office during exam week.',
        sentBy: 'Joint Director Assistant',
        broadcastDate: '04-06-2026',
        visibleTo: 'All Staff',
    },
]

export const getBroadcastById = (id) =>
    MOCK_BROADCASTS.find((item) => item.id === id) ?? null
