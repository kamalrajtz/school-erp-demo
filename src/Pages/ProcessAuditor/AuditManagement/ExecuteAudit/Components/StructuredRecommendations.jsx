import React from 'react'
import { FileText, Lock } from 'lucide-react'

const inputClass =
    'text-sm text-[#1E1E1E] border border-[#E0E0E0] rounded-lg px-3 py-3 w-full min-h-[80px] resize-y focus:border-[#515DEF] outline-none transition-colors'

const StructuredRecommendations = ({ recommendations, generalRemarks, onChange, onRemarksChange }) => {
    const fields = [
        { key: 'immediateAction', label: 'Immediate Action', placeholder: 'Actions required immediately to address critical findings...' },
        { key: 'preventiveAction', label: 'Preventive Action', placeholder: 'Steps to prevent recurrence of identified issues...' },
        { key: 'followUpRequired', label: 'Follow-up Required', placeholder: 'Follow-up audits, reviews, or checkpoints needed...' },
        { key: 'finalRecommendation', label: 'Final Recommendation', placeholder: 'Overall recommendation and conclusion for this audit...' },
    ]

    return (
        <div className='bg-white rounded-2xl shadow-md p-5 space-y-5'>
            <div>
                <h3 className='text-lg font-semibold text-black'>Audit Report</h3>
                <p className='text-sm text-[#667085] mt-1'>Structured recommendations as per standard audit reporting format.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {fields.map(({ key, label, placeholder }) => (
                    <div key={key} className='flex flex-col gap-y-2'>
                        <label className='text-sm font-semibold text-[#1E1E1E]'>{label}</label>
                        <textarea
                            value={recommendations[key] ?? ''}
                            onChange={(e) => onChange(key, e.target.value)}
                            placeholder={placeholder}
                            className={inputClass}
                        />
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-y-2 pt-2 border-t border-[#EDEEF5]'>
                <label className='text-sm font-semibold text-[#1E1E1E]'>General Remarks</label>
                <textarea
                    value={generalRemarks}
                    onChange={(e) => onRemarksChange(e.target.value)}
                    placeholder='Any additional remarks for this audit...'
                    className={inputClass}
                />
            </div>
        </div>
    )
}

export const TemplateBadge = ({ templateName, version }) => (
    <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#515DEF]/10 border border-[#515DEF]/20'>
        <FileText size={14} className='text-[#515DEF]' />
        <span className='text-xs font-medium text-[#515DEF]'>
            Generated from Template · {templateName} · v{version}
        </span>
        <span className='inline-flex items-center gap-1 text-[10px] text-[#667085] bg-white px-2 py-0.5 rounded-full'>
            <Lock size={10} />
            Read Only Structure
        </span>
    </div>
)

export default StructuredRecommendations
