import React from 'react'

const pillBase =
    'px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer'

const activePill = 'bg-[#515DEF] text-white border-[#515DEF] shadow-sm'
const inactivePill = 'bg-white text-[#667085] border-[#E0E0E0] hover:border-[#515DEF] hover:text-[#515DEF]'

export const RadioGroup = ({ options, value, onChange, name }) => (
    <div className='flex flex-wrap gap-2' role='radiogroup'>
        {options.map((option) => (
            <label key={option} className='inline-flex items-center gap-2 cursor-pointer group'>
                <input
                    type='radio'
                    name={name}
                    value={option}
                    checked={value === option}
                    onChange={() => onChange(option)}
                    className='size-4 accent-[#515DEF]'
                />
                <span className={`text-sm ${value === option ? 'text-[#515DEF] font-semibold' : 'text-[#667085] group-hover:text-[#1E1E1E]'}`}>
                    {option}
                </span>
            </label>
        ))}
    </div>
)

export const PillSelect = ({ options, value, onChange }) => (
    <div className='flex flex-wrap gap-2'>
        {options.map((option) => (
            <button
                key={option}
                type='button'
                onClick={() => onChange(option)}
                className={`${pillBase} ${value === option ? activePill : inactivePill}`}
            >
                {option}
            </button>
        ))}
    </div>
)

const inputClass =
    'text-sm text-[#1E1E1E] border border-[#E0E0E0] rounded-lg px-3 py-2 w-full focus:border-[#515DEF] focus:ring-1 focus:ring-[#515DEF]/20 outline-none transition-all'

const ResponseControl = ({ parameter, value, onChange }) => {
    const update = (response) => onChange({ ...value, response })

    switch (parameter.responseType) {
        case 'yes_no':
            return <RadioGroup name={`${parameter.id}-yn`} options={['Yes', 'No']} value={value.response} onChange={update} />
        case 'pass_fail':
            return <RadioGroup name={`${parameter.id}-pf`} options={['Pass', 'Fail']} value={value.response} onChange={update} />
        case 'scale':
            return <PillSelect options={['0', '0.5', '1']} value={value.response} onChange={update} />
        case 'dropdown':
            return <PillSelect options={parameter.dropdownOptions ?? []} value={value.response} onChange={update} />
        case 'checkbox':
            return (
                <label className='inline-flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border border-[#E0E0E0] hover:border-[#515DEF] transition-colors'>
                    <input
                        type='checkbox'
                        checked={value.response === true || value.response === 'true'}
                        onChange={(e) => update(e.target.checked)}
                        className='size-4 accent-[#515DEF]'
                    />
                    <span className='text-sm text-[#667085]'>Mark as verified</span>
                </label>
            )
        case 'number':
            return (
                <input
                    type='number'
                    value={value.response}
                    onChange={(e) => update(e.target.value)}
                    className={`${inputClass} max-w-[160px]`}
                    placeholder='Enter count'
                />
            )
        case 'text':
            return (
                <input
                    type='text'
                    value={value.response}
                    onChange={(e) => update(e.target.value)}
                    className={inputClass}
                    placeholder='Enter value'
                />
            )
        case 'textarea':
            return (
                <textarea
                    value={value.response}
                    onChange={(e) => update(e.target.value)}
                    className={`${inputClass} min-h-[72px] resize-y`}
                    placeholder='Enter details'
                />
            )
        case 'date':
            return <input type='date' value={value.response} onChange={(e) => update(e.target.value)} className={`${inputClass} max-w-[180px]`} />
        case 'time':
            return <input type='time' value={value.response} onChange={(e) => update(e.target.value)} className={`${inputClass} max-w-[140px]`} />
        case 'photo':
        case 'document':
            return (
                <span className='text-xs text-[#667085] italic'>
                    Use evidence icons below to attach {parameter.responseType === 'photo' ? 'photo' : 'document'}
                </span>
            )
        default:
            return null
    }
}

export default ResponseControl
