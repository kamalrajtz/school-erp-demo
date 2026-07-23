export const MOCK_ANNOUNCEMENTS = [
    {
        id: 'SSB001',
        title: 'Low Stock Alert — A4 Paper',
        attachmentName: 'Low-Stock-A4-Paper.pdf',
        category: 'Stock Alert',
        message: 'A4 Paper Ream stock has dropped below reorder level. Departments are requested to limit usage until restock arrives on Monday.',
        sentBy: 'Stationery Store Manager',
        announcementDate: '08-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'SSB002',
        title: 'New Issue & Return Procedure',
        attachmentName: 'Issue-Return-Procedure.pdf',
        category: 'General Announcement',
        message: 'All stationery requests must be submitted through the Issue & Returns module. Walk-in requests without approval will not be processed.',
        sentBy: 'Stationery Store Manager',
        announcementDate: '01-06-2026',
        visibleTo: 'All Staff',
    },
    {
        id: 'SSB003',
        title: 'Quarterly Inventory Audit',
        attachmentName: 'Inventory-Audit-Schedule.pdf',
        category: 'Inventory Notice',
        message: 'A full stationery inventory audit will be conducted on 15-06-2026. Store will remain closed for external issue from 9 AM to 12 PM.',
        sentBy: 'Stationery Store Manager',
        announcementDate: '05-06-2026',
        visibleTo: 'All Staff',
    },
]

export const getAnnouncementById = (id) =>
    MOCK_ANNOUNCEMENTS.find((item) => item.id === id) ?? null
