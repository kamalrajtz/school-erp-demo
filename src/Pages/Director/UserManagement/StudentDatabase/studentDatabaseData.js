export const STUDENTS_LIST = [
    {
        id: 'STU-001',
        admissionNumber: 'ADM-NO1845',
        name: 'Sandy Selva',
        gender: 'Male',
        email: 'san@gmail.com',
        mobileNumber: '9944076993',
        dateOfBirth: '20-12-1996',
        country: 'India',
        state: 'TamilNadu',
        city: 'Pudukkottai',
    },
    {
        id: 'STU-002',
        admissionNumber: 'ADM-NO1846',
        name: 'John Milton',
        gender: 'Male',
        email: 'John@gmail.com',
        mobileNumber: '9944076994',
        dateOfBirth: '09-07-2007',
        country: 'India',
        state: 'TamilNadu',
        city: 'Madurai',
    },
]

export const getStudentById = (id) => {
    const listItem = STUDENTS_LIST.find((item) => item.id === id)
    if (!listItem) return null

    return {
        ...listItem,
        profileImage: null,
        firstName: listItem.name.split(' ')[0],
        middleName: '',
        lastName: listItem.name.split(' ').slice(1).join(' ') || '—',
        admissionDate: '2024-06-15',
        class: 'Class 10',
        classSection: 'Section A',
        registrationFees: '₹5,000',
        batchYear: '2024',
        batchEndYear: '2025',
        feesTimeline: 'Quarterly',
        status: 'Active',
        studentId: listItem.id,
        religion: 'Hindu',
        caste: 'General',
        bloodGroup: 'B+',
        height: '165 cm',
        weight: '52 kg',
        medicalHistory: 'No known allergies.',
        previousSchool: 'Delhi Public School, Sector 12',
        address: {
            address: '42, Green Park Extension, Near Metro Station',
            country: listItem.country,
            state: listItem.state,
            city: listItem.city,
            zipCode: '110016',
        },
        contact: {
            mobileNumber: listItem.mobileNumber,
            alternativeNumber: '+91 98765 43211',
            email: listItem.email,
        },
        transport: {
            routeList: 'Route 7 – South Delhi',
            busStop: 'Green Park Metro Gate 2',
        },
        parent: {
            fatherName: 'Rajesh Sharma',
            motherName: 'Priya Sharma',
            fatherOccupation: 'Software Engineer',
            motherOccupation: 'Teacher',
            fatherYearlyIncome: '₹12,00,000',
            motherYearlyIncome: '₹6,00,000',
            siblings: '1 (Younger sister)',
            address: {
                address: '42, Green Park Extension, Near Metro Station',
                country: listItem.country,
                state: listItem.state,
                city: listItem.city,
                zipCode: '110016',
            },
            contact: {
                mobileNumber: '+91 98123 45678',
                alternativeNumber: '+91 98123 45679',
                email: 'rajesh.sharma@example.com',
            },
        },
    }
}
