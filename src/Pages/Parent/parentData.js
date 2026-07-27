export const PARENT_ACCOUNTS = [
    {
        id: 'PAR-001',
        email: 'parent@school.com',
        name: 'Raj Kumar',
        phone: '+91 98765 11111',
    },
    {
        id: 'PAR-002',
        email: 'parent-single@school.com',
        name: 'Meera Sharma',
        phone: '+91 98765 22222',
    },
]

export const getParentByEmail = (email) =>
    PARENT_ACCOUNTS.find((parent) => parent.email === email.toLowerCase()) ?? null

export const getParentById = (parentId) =>
    PARENT_ACCOUNTS.find((parent) => parent.id === parentId) ?? null
