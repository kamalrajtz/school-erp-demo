import React from 'react'

const EscalationForm = ({ form, onChange, roleConfig, readOnly = false }) => {
    const handleChange = (field) => (event) => {
        onChange?.({ ...form, [field]: event.target.value })
    }

    const inputClass =
        'text-sm font-normal text-[#808080] border border-[#D9D9D9] rounded-md px-2 py-2 w-full disabled:bg-[#f9fafb] disabled:cursor-not-allowed'
    const labelClass = 'text-base font-medium text-[#808080]'

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
            <div className='flex flex-col gap-y-2'>
                <label className={labelClass}>Escalated To</label>
                <input
                    type='text'
                    value={roleConfig?.escalatesTo ?? form.escalatedTo ?? '—'}
                    disabled
                    className={inputClass}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label className={labelClass}>Escalation Date</label>
                <input
                    type='date'
                    value={form.escalationDate}
                    onChange={handleChange('escalationDate')}
                    disabled={readOnly}
                    className={inputClass}
                />
            </div>
            <div className='flex flex-col gap-y-2 sm:col-span-2'>
                <label className={labelClass}>Description</label>
                <input
                    type='text'
                    value={form.description}
                    onChange={handleChange('description')}
                    disabled={readOnly}
                    placeholder='Brief summary of the escalation'
                    className={inputClass}
                />
            </div>
            <div className='flex flex-col gap-y-2 sm:col-span-2'>
                <label className={labelClass}>Full Details</label>
                <textarea
                    value={form.fullDescription}
                    onChange={handleChange('fullDescription')}
                    disabled={readOnly}
                    rows={4}
                    placeholder='Provide complete details of the issue'
                    className={inputClass}
                />
            </div>
            <div className='flex flex-col gap-y-2 sm:col-span-2'>
                <label className={labelClass}>Remarks</label>
                <textarea
                    value={form.remarks}
                    onChange={handleChange('remarks')}
                    disabled={readOnly}
                    rows={3}
                    placeholder='Optional remarks or reference notes'
                    className={inputClass}
                />
            </div>
        </div>
    )
}

export default EscalationForm
