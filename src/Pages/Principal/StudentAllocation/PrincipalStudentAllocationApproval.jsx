import React from 'react'
import StudentAllocationList from '../../../Common/StudentAllocation/StudentAllocationList'
import { PRINCIPAL_APPROVAL_LIST_PATH } from '../../../Common/StudentAllocation/studentAllocationData'

const PrincipalStudentAllocationApproval = () => (
    <StudentAllocationList
        mode='approver'
        listPath={PRINCIPAL_APPROVAL_LIST_PATH}
        defaultStatusFilter='Pending Approval'
    />
)

export default PrincipalStudentAllocationApproval
