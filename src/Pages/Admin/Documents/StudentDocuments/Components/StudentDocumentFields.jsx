import React from 'react'
import DocumentFileUpload from '../../EmployeeDocuments/Components/DocumentFileUpload'
import { DOCUMENT_STATUS_OPTIONS } from '../studentDocumentsData'

const StudentDocumentFields = ({ slots, onChange }) => {
    const updateSlot = (typeId, patch) => {
        onChange(slots.map((slot) => (slot.typeId === typeId ? { ...slot, ...patch } : slot)))
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-2'>
            {slots.map((slot) => (
                <div key={slot.typeId} className='flex flex-col gap-y-2'>
                    <label className='text-base font-medium text-[#1E1E1E]'>{slot.label}</label>
                    <select
                        value={slot.status}
                        onChange={(e) => updateSlot(slot.typeId, { status: e.target.value })}
                        className='text-sm font-normal text-[#1E1E1E] border border-[#D9D9D9] rounded-md px-2 py-2 w-full mb-1'
                    >
                        {DOCUMENT_STATUS_OPTIONS.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                    <DocumentFileUpload
                        fileName={slot.fileName}
                        onChange={(fileName) => updateSlot(slot.typeId, { fileName })}
                    />
                </div>
            ))}
        </div>
    )
}

export default StudentDocumentFields
