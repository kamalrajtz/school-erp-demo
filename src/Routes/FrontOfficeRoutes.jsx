import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import AdmissionEnquiry from '../Pages/FrontOffice/AdmissionEnquiry/AdmissionEnquiry'
import AddAdmissionEnquiry from '../Pages/FrontOffice/AdmissionEnquiry/AddAdmissionEnquiry'
import EnquiryList from '../Pages/FrontOffice/CommonEnquiry/EnquiryList'
import AddEnquiry from '../Pages/FrontOffice/CommonEnquiry/AddEnquiry'

const FrontOfficeRoutes = () => {
    return (
        <ReactRoutes>
            <Route path="/front-office/dashboard" element={<div>Front Office Dashboard</div>} />
            <Route path="/front-office/admission-enquiry" element={<AdmissionEnquiry />} />
            <Route path="/front-office/add-admission-enquiry" element={<AddAdmissionEnquiry />} />
            <Route path="/front-office/enquiry-list" element={<EnquiryList />} />
            <Route path="/front-office/add-enquiry" element={<AddEnquiry />} />
            <Route path="*" element={<div>Front Office Home</div>} />
        </ReactRoutes>
    )
}

export default FrontOfficeRoutes
