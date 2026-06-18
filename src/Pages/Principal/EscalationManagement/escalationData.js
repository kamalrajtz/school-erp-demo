export const ESCALATIONS = [
    {
        id: 'ESC-2026-001',
        escalatedBy: 'Sandy Selva',
        escalatedByRole: 'Co-ordinator',
        escalatedById: 'COO-1001',
        description: 'Repeated student discipline issues in Class 9-A science lab sessions.',
        escalationDate: '08-03-2026',
        escalatedDepartment: 'Science',
        sourceType: 'coordinator',
        status: 'Open',
        priority: 'High',
        fullDescription:
            'Multiple instances of lab equipment misuse and disruptive behaviour during Class 9-A practical sessions over the past two weeks. Parent meetings were attempted at class level but issues persist. Requesting Principal intervention and formal disciplinary committee review.',
        remarks: 'Three written warnings already issued at department level.',
    },
    {
        id: 'ESC-2026-002',
        escalatedBy: 'John Milton',
        escalatedByRole: 'Co-ordinator',
        escalatedById: 'COO-1002',
        description: 'Teacher reported shortage of mathematics reference books for Class 10.',
        escalationDate: '09-03-2026',
        escalatedDepartment: 'Mathematics',
        sourceType: 'teacher-forwarded',
        forwardedFromTeacher: 'Anita Verma',
        forwardedFromTeacherId: 'TEA-1001',
        teacherOriginalDate: '07-03-2026',
        teacherDescription:
            'Class 10 students lack updated NCERT exemplar copies for board exam preparation. Current stock covers only 60% of enrolled students.',
        status: 'Open',
        priority: 'Medium',
        fullDescription:
            'Forwarded from Anita Verma (Mathematics Teacher). Insufficient reference material for Class 10 board preparation. Coordinator verified inventory and confirms procurement is required before April unit tests.',
        remarks: 'Teacher escalation received on 07-03-2026; coordinator reviewed and forwarded on 09-03-2026.',
    },
    {
        id: 'ESC-2026-003',
        escalatedBy: 'Sandy Selva',
        escalatedByRole: 'Co-ordinator',
        escalatedById: 'COO-1001',
        description: 'Inter-school sports event venue booking conflict for annual meet.',
        escalationDate: '10-03-2026',
        escalatedDepartment: 'Sports',
        sourceType: 'coordinator',
        status: 'In Review',
        priority: 'High',
        fullDescription:
            'The booked district stadium is double-booked on 15-03-2026. Alternate venues are either unavailable or exceed the allocated sports budget. Requires Principal approval for revised venue or date change affecting 120 participating students.',
        remarks: 'Sports day banners and transport already scheduled.',
    },
    {
        id: 'ESC-2026-004',
        escalatedBy: 'Priya Nair',
        escalatedByRole: 'Co-ordinator',
        escalatedById: 'COO-1003',
        description: 'English department teacher absence affecting board exam revision classes.',
        escalationDate: '11-03-2026',
        escalatedDepartment: 'English',
        sourceType: 'teacher-forwarded',
        forwardedFromTeacher: 'Sarah Thomas',
        forwardedFromTeacherId: 'TEA-1004',
        teacherOriginalDate: '10-03-2026',
        teacherDescription:
            'Substitute teacher unavailable for Class 12 English revision for 4 consecutive days. Students falling behind on literature portion.',
        status: 'Open',
        priority: 'High',
        fullDescription:
            'Forwarded from Sarah Thomas (English Teacher). Unplanned leave and no suitable substitute for Class 12 board revision batches. Coordinator requests temporary faculty arrangement or schedule adjustment approved by Principal.',
        remarks: 'Board exams begin in 18 days.',
    },
    {
        id: 'ESC-2026-005',
        escalatedBy: 'John Milton',
        escalatedByRole: 'Co-ordinator',
        escalatedById: 'COO-1002',
        description: 'Classroom AC unit failure in Block B — affecting afternoon sessions.',
        escalationDate: '12-03-2026',
        escalatedDepartment: 'Infrastructure',
        sourceType: 'teacher-forwarded',
        forwardedFromTeacher: 'Rajesh Kumar',
        forwardedFromTeacherId: 'TEA-1003',
        teacherOriginalDate: '11-03-2026',
        teacherDescription:
            'AC units in rooms B-204 and B-205 non-functional since 10-03-2026. Afternoon classes disrupted due to heat.',
        status: 'Resolved',
        priority: 'Medium',
        fullDescription:
            'Forwarded from Rajesh Kumar (IT & Infrastructure liaison teacher). Maintenance team quoted 5-day repair window. Coordinator escalated for expedited vendor approval.',
        remarks: 'Maintenance work order raised — resolved on 12-03-2026.',
    },
    {
        id: 'ESC-2026-006',
        escalatedBy: 'Priya Nair',
        escalatedByRole: 'Co-ordinator',
        escalatedById: 'COO-1003',
        description: 'Parent complaint regarding unfair grading in Class 11 internal assessment.',
        escalationDate: '06-03-2026',
        escalatedDepartment: 'English',
        sourceType: 'coordinator',
        status: 'Closed',
        priority: 'Low',
        fullDescription:
            'Parent submitted formal complaint alleging inconsistent marking in Class 11 English internal test. Coordinator conducted preliminary review and recommends Principal-led re-evaluation panel.',
        remarks: 'Re-evaluation completed; parent notified on 09-03-2026.',
    },
]

export const statusBadgeColor = {
    Open: 'bg-[#FF980033] text-[#FF9800]',
    'In Review': 'bg-[#2196F333] text-[#2196F3]',
    Resolved: 'bg-[#4CAF5033] text-[#4CAF50]',
    Closed: 'bg-[#66708533] text-[#667085]',
}

export const priorityBadgeColor = {
    High: 'bg-[#FF000033] text-[#FF0000]',
    Medium: 'bg-[#FF980033] text-[#FF9800]',
    Low: 'bg-[#4CAF5033] text-[#4CAF50]',
}

export const sourceTypeLabel = {
    coordinator: 'Direct from Co-ordinator',
    'teacher-forwarded': 'Forwarded from Teacher via Co-ordinator',
}
