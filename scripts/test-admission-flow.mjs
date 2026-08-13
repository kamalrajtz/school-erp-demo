/**
 * Front Office admission flow smoke test (data layer).
 * Run: npx vite-node scripts/test-admission-flow.mjs
 */
import {
    createAdmissionEnquiry,
    getAdmissionEnquiryById,
    mapEnquiryToAdmissionPrefill,
} from '../src/Pages/Admin/FrontOffice/AdmissionEnquiry/admissionEnquiryData.js'
import {
    buildInitialAdmissionForm,
    createAdmission,
    enrollAdmissionAsStudent,
    getAdmissionById,
} from '../src/Pages/Admin/FrontOffice/AdminssionList/admissionListData.js'
import { getStudentById } from '../src/Common/StudentDatabase/studentDatabaseData.js'

const storage = {}
globalThis.localStorage = {
    getItem: (key) => (key in storage ? storage[key] : null),
    setItem: (key, value) => {
        storage[key] = String(value)
    },
    removeItem: (key) => {
        delete storage[key]
    },
}

const SAMPLE_ENQUIRY = {
    name: 'Arjun Mehta',
    mobileNumber: '9876543210',
    email: 'arjun@example.com',
    gender: 'Male',
    address: '12 MG Road',
    description: 'Interested in Class X',
    note: 'Follow up next week',
    enquiryDate: new Date('2026-08-01'),
    nextFollowUpDate: new Date('2026-08-15'),
    assignedTo: 'Front Office',
    reference: 'Parent',
    source: 'Walk-in',
    className: 'X',
    numberOfChild: '1',
    city: 'Chennai',
    state: 'Tamil Nadu',
    profileImage: '',
    status: 'Active',
}

const SAMPLE_ADMISSION = {
    firstName: 'Arjun',
    middleName: 'Kumar',
    lastName: 'Mehta',
    mobileNumber: '9876543210',
    className: 'X',
    gender: 'Male',
    religion: 'Hindu',
    caste: 'General',
    address: '12 MG Road, T Nagar',
    dateOfBirth: new Date('2012-05-20'),
    country: 'India',
    state: 'Tamil Nadu',
    city: 'Chennai',
    zipCode: '600017',
    altMobileNumber: '9876543211',
    email: 'arjun@example.com',
    previousSchool: 'St Marys School',
    bloodGroup: 'B+',
    height: '150 cm',
    weight: '45 kg',
    medicalHistory: 'None',
    profileImage: '',
    admissionDate: new Date('2026-08-10'),
    registrationFees: '5000',
    batchStartYear: new Date('2026-01-01'),
    batchEndYear: new Date('2027-01-01'),
    modeOfTransport: 'School Bus',
    route: 'Route 1 - North Zone',
    busStop: 'Main Gate',
    fatherName: 'Raj Mehta',
    motherName: 'Priya Mehta',
    fatherOccupation: 'Engineer',
    motherOccupation: 'Doctor',
    fatherIncome: '1200000',
    motherIncome: '900000',
    siblings: '1 younger sister',
    parentAddress: '12 MG Road',
    parentCountry: 'India',
    parentState: 'Tamil Nadu',
    parentCity: 'Chennai',
    parentZipCode: '600017',
    parentMobileNumber: '9876500000',
    parentAltMobileNumber: '9876500001',
    parentEmail: 'raj@example.com',
    feesGroup: 'Annual Fees',
}

const ADMISSION_VIEW_FIELDS = [
    'admissionDate', 'className', 'registrationFees', 'batchStartYear', 'batchEndYear',
    'firstName', 'middleName', 'lastName', 'gender', 'religion', 'caste', 'address',
    'dateOfBirth', 'country', 'state', 'city', 'zipCode', 'mobileNumber', 'altMobileNumber',
    'email', 'previousSchool', 'bloodGroup', 'height', 'weight', 'medicalHistory',
    'modeOfTransport', 'route', 'busStop',
    'fatherName', 'motherName', 'fatherOccupation', 'motherOccupation', 'fatherIncome',
    'motherIncome', 'siblings', 'parentAddress', 'parentCountry', 'parentState',
    'parentCity', 'parentZipCode', 'parentMobileNumber', 'parentAltMobileNumber',
    'parentEmail', 'feesGroup',
]

const STUDENT_VIEW_CHECKS = [
    ['firstName', (s) => s.firstName],
    ['middleName', (s) => s.middleName],
    ['lastName', (s) => s.lastName],
    ['gender', (s) => s.gender],
    ['religion', (s) => s.religion],
    ['caste', (s) => s.caste],
    ['dateOfBirth', (s) => s.dateOfBirth],
    ['bloodGroup', (s) => s.bloodGroup],
    ['height', (s) => s.height],
    ['weight', (s) => s.weight],
    ['medicalHistory', (s) => s.medicalHistory],
    ['previousSchool', (s) => s.previousSchool],
    ['address', (s) => s.address.address],
    ['zipCode', (s) => s.address.zipCode],
    ['mobile', (s) => s.contact.mobileNumber],
    ['altMobile', (s) => s.contact.alternativeNumber],
    ['email', (s) => s.contact.email],
    ['route', (s) => s.transport.routeList],
    ['busStop', (s) => s.transport.busStop],
    ['modeOfTransport', (s) => s.transport.modeOfTransport],
    ['fatherName', (s) => s.parent.fatherName],
    ['motherName', (s) => s.parent.motherName],
    ['fatherOccupation', (s) => s.parent.fatherOccupation],
    ['motherOccupation', (s) => s.parent.motherOccupation],
    ['fatherIncome', (s) => s.parent.fatherYearlyIncome],
    ['motherIncome', (s) => s.parent.motherYearlyIncome],
    ['siblings', (s) => s.parent.siblings],
    ['parentAddress', (s) => s.parent.address?.address],
    ['parentEmail', (s) => s.parent.contact?.email],
]

const assert = (condition, message) => {
    if (!condition) throw new Error(message)
}

console.log('=== Front Office Admission Flow Test ===\n')

// Step 1: Create enquiry
const enquiryResult = createAdmissionEnquiry(SAMPLE_ENQUIRY)
assert(enquiryResult.success, `Enquiry create failed: ${enquiryResult.message}`)
const enquiry = enquiryResult.record
console.log(`✓ Enquiry created: ${enquiry.id}`)

// Step 2: Convert prefill
const prefill = mapEnquiryToAdmissionPrefill(enquiry)
assert(prefill.firstName === 'Arjun Mehta', 'Prefill firstName should map from enquiry name')
assert(prefill.mobileNumber === SAMPLE_ENQUIRY.mobileNumber, 'Prefill mobile mismatch')
assert(prefill.className === 'X', 'Prefill class mismatch')
console.log('✓ Convert to admission prefill OK')

const form = buildInitialAdmissionForm(prefill, enquiry.id)
assert(form.fromEnquiryId === enquiry.id, 'fromEnquiryId not set')
console.log('✓ Admission form initialized from enquiry')

// Step 3: Save admission with full data
const admissionPayload = { ...form, ...SAMPLE_ADMISSION, fromEnquiryId: enquiry.id }
const admissionResult = createAdmission(admissionPayload)
assert(admissionResult.success, `Admission create failed: ${admissionResult.message}`)
const admission = admissionResult.record
console.log(`✓ Admission saved: ${admission.id}`)

// Verify saved admission has all fields
const savedAdmission = getAdmissionById(admission.id)
const missingOnAdmission = ADMISSION_VIEW_FIELDS.filter((field) => {
    const value = savedAdmission[field]
    const expected = SAMPLE_ADMISSION[field] ?? admissionPayload[field]
    if (expected instanceof Date) {
        return !value
    }
    return String(value || '') !== String(expected || '')
})
if (missingOnAdmission.length) {
    console.warn('⚠ Fields not persisted on admission record:', missingOnAdmission.join(', '))
} else {
    console.log('✓ All admission form fields persisted in storage')
}

// Step 4: Enroll as student
const enrollResult = enrollAdmissionAsStudent(admission.id)
assert(enrollResult.success, `Enroll failed: ${enrollResult.message}`)
console.log(`✓ Enrolled as student: ${enrollResult.student.id}`)

// Step 5: Student view data
const studentView = getStudentById(enrollResult.student.id)
assert(studentView, 'Student view record missing')

const missingOnStudentView = STUDENT_VIEW_CHECKS.filter(([label, getter]) => {
    const value = getter(studentView)
    return !value || value === '—'
})
if (missingOnStudentView.length) {
    console.warn(
        '⚠ Student view missing/empty fields:',
        missingOnStudentView.map(([label]) => label).join(', '),
    )
} else {
    console.log('✓ Student view has all mapped fields')
}

console.log('\n=== Test complete ===')
if (missingOnAdmission.length || missingOnStudentView.length) {
    process.exitCode = 1
}
