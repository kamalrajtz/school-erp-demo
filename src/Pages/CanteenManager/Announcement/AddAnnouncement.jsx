import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnnouncementInfo from './Components/AnnouncementInfo'
import AnnouncementModal from './Components/AnnouncementModal'

const AddAnnouncement = () => {
    const navigate = useNavigate()
    const [announcementModal, setAnnouncementModal] = useState(false)

    return (
        <section>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h2 className='text-xl font-semibold text-black'>Add Announcement</h2>
                <AnnouncementInfo />
            </div>

            <div className='flex sm:justify-end justify-center gap-x-4 mt-6'>
                <button type='button' onClick={() => navigate('/canteen-manager/broadcast')} className='bg-white text-[#515DEF] text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:bg-[#515DEF] hover:text-white hover:border-[#515DEF] transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Discard Changes
                </button>
                <button type='button' onClick={() => setAnnouncementModal(true)} className='bg-[#515DEF] text-white text-sm text-center px-12 py-2 rounded-md border border-[#515DEF] hover:opacity-90 transition-all duration-200 cursor-pointer md:w-auto w-full'>
                    Save Changes
                </button>
            </div>

            <AnnouncementModal announcementModal={announcementModal} setAnnouncementModal={setAnnouncementModal} />
        </section>
    )
}

export default AddAnnouncement
