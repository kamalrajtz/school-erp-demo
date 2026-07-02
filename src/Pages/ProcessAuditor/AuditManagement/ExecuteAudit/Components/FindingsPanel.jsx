import React from 'react'

const FindingsPanel = ({ findings }) => (
    <div className='bg-white rounded-2xl shadow-md p-4'>
        <h3 className='text-lg font-semibold text-black mb-4'>Findings Summary</h3>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3'>
            <div className='rounded-xl bg-[#515DEF]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>Total Findings</p>
                <p className='text-xl font-bold text-[#515DEF] mt-1'>{findings.totalFindings}</p>
            </div>
            <div className='rounded-xl bg-[#FF0000]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>Critical</p>
                <p className='text-xl font-bold text-[#FF0000] mt-1'>{findings.critical}</p>
            </div>
            <div className='rounded-xl bg-[#FF9800]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>High</p>
                <p className='text-xl font-bold text-[#FF9800] mt-1'>{findings.high}</p>
            </div>
            <div className='rounded-xl bg-[#FFC107]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>Medium</p>
                <p className='text-xl font-bold text-[#FFC107] mt-1'>{findings.medium}</p>
            </div>
            <div className='rounded-xl bg-[#2196F3]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>Low</p>
                <p className='text-xl font-bold text-[#2196F3] mt-1'>{findings.low}</p>
            </div>
            <div className='rounded-xl bg-[#667085]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>Observations Raised</p>
                <p className='text-xl font-bold text-[#667085] mt-1'>{findings.observationsRaised}</p>
            </div>
            <div className='rounded-xl bg-[#9C27B0]/10 p-3 text-center'>
                <p className='text-[10px] text-[#808080] uppercase'>Escalations</p>
                <p className='text-xl font-bold text-[#9C27B0] mt-1'>{findings.escalations}</p>
            </div>
        </div>
    </div>
)

export default FindingsPanel
