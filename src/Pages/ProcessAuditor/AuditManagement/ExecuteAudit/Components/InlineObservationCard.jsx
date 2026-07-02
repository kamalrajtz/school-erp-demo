import React from 'react'
import { AlertTriangle, Save } from 'lucide-react'
import EvidenceUploader from './EvidenceUploader'
import { OBSERVATION_PRIORITIES, ASSIGN_TO_OPTIONS } from '../executeAuditData'

const inputClass =
    'text-sm text-[#1E1E1E] border border-[#E0E0E0] rounded-lg px-3 py-2 w-full focus:border-[#515DEF] outline-none'

const InlineObservationCard = ({ parameter, observation, onChange, onSave }) => {
    const update = (field, value) => onChange({ ...observation, [field]: value })

    return (
        <div className='mt-3 rounded-xl border border-[#FF000033] bg-gradient-to-r from-[#FF000008] to-[#FF980008] p-4 animate-in fade-in duration-300'>
            <div className='flex items-center gap-2 mb-3'>
                <AlertTriangle size={16} className='text-[#FF0000]' />
                <span className='text-sm font-semibold text-[#FF0000]'>Observation Required</span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3'>
                <div>
                    <label className='text-xs font-medium text-[#808080] mb-1 block'>Priority</label>
                    <select value={observation.priority} onChange={(e) => update('priority', e.target.value)} className={inputClass}>
                        {OBSERVATION_PRIORITIES.map((p) => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='text-xs font-medium text-[#808080] mb-1 block'>Assign To</label>
                    <select value={observation.assignTo} onChange={(e) => update('assignTo', e.target.value)} className={inputClass}>
                        <option value=''>Select assignee</option>
                        {ASSIGN_TO_OPTIONS.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='text-xs font-medium text-[#808080] mb-1 block'>Due Date</label>
                    <input type='date' value={observation.dueDate} onChange={(e) => update('dueDate', e.target.value)} className={inputClass} />
                </div>
            </div>

            <div className='mb-3'>
                <label className='text-xs font-medium text-[#808080] mb-1 block'>Description</label>
                <textarea
                    value={observation.description}
                    onChange={(e) => update('description', e.target.value)}
                    placeholder={`Describe the non-compliance for "${parameter.label}"...`}
                    className={`${inputClass} min-h-[72px] resize-y`}
                />
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                <div>
                    <label className='text-xs font-medium text-[#808080] mb-1 block'>Evidence</label>
                    <EvidenceUploader
                        evidence={observation.evidence}
                        onChange={(next) => update('evidence', next)}
                    />
                </div>
                <button
                    type='button'
                    onClick={onSave}
                    className='inline-flex items-center justify-center gap-2 bg-[#515DEF] text-white text-sm px-5 py-2 rounded-lg hover:opacity-90 cursor-pointer shrink-0'
                >
                    <Save size={16} />
                    Save Observation
                </button>
            </div>
        </div>
    )
}

export default InlineObservationCard
