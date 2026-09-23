import { useState } from 'react'
import { toast } from 'react-toastify'
import { ensureSeed, saveJson } from '../demoDomain/storage'
import { logActivity } from '../demoDomain/activityLog'

const KEY = 'schoolerp-audit-rework-v1'

export default function AuditReviewPanel({ recordId, kind }) {
    const [reason, setReason] = useState('')
    const [history, setHistory] = useState(() => ensureSeed(KEY, []).filter((item) => item.recordId === recordId && item.kind === kind))

    const decide = (decision) => {
        if (decision === 'DECLINE' && !reason.trim()) {
            toast.error('Decline reason is required.')
            return
        }
        const entry = {
            id: `${kind}-${recordId}-${Date.now()}`,
            recordId,
            kind,
            decision,
            status: decision === 'ACCEPT' ? 'ACCEPTED' : 'DECLINED',
            reworkRequired: decision === 'DECLINE',
            reason: reason.trim(),
            reviewedBy: 'Auditor',
            reviewedAt: new Date().toISOString(),
        }
        const all = ensureSeed(KEY, [])
        const next = [entry, ...all]
        saveJson(KEY, next)
        setHistory(next.filter((item) => item.recordId === recordId && item.kind === kind))
        logActivity({ action: decision === 'ACCEPT' ? 'APPROVE' : 'REJECT', module: kind, recordId, reason: entry.reason })
        toast.success(decision === 'ACCEPT' ? `${kind} accepted.` : `${kind} declined and returned for rework. Previous submission is kept.`)
    }

    return (
        <div className='bg-white rounded-2xl shadow-md p-4'>
            <h3 className='text-base font-semibold mb-2'>{kind} review</h3>
            <textarea value={reason} onChange={(event) => setReason(event.target.value)} rows={2} placeholder='Decline reason' className='w-full border border-[#D9D9D9] rounded-md px-2 py-2 text-sm' />
            <div className='flex gap-2 mt-3'>
                <button type='button' onClick={() => decide('ACCEPT')} className='bg-[#515DEF] text-white text-sm px-4 py-2 rounded-md cursor-pointer'>Accept</button>
                <button type='button' onClick={() => decide('DECLINE')} className='border border-[#FF5722] text-[#FF5722] text-sm px-4 py-2 rounded-md cursor-pointer'>Decline</button>
            </div>
            {history.length > 0 && (
                <ul className='mt-4 text-sm text-[#667085] space-y-1'>
                    {history.map((item) => (
                        <li key={item.id}>{item.status} by {item.reviewedBy} · {item.reason || 'No decline reason'}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
