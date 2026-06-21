import React from 'react'
import { Headset, Monitor, Ticket, ClipboardCheck, AlertTriangle } from 'lucide-react'

const SUMMARY_CARDS = [
    { label: 'Open Tickets', value: '24', sub: '6 high priority', icon: Ticket, color: 'bg-[#515DEF]/10 text-[#515DEF]' },
    { label: 'Assets Tracked', value: '412', sub: '38 added this month', icon: Monitor, color: 'bg-[#4CAF50]/10 text-[#4CAF50]' },
    { label: 'Pending Requests', value: '7', sub: 'Awaiting approval', icon: ClipboardCheck, color: 'bg-[#FF9800]/10 text-[#FF9800]' },
    { label: 'Critical Alerts', value: '3', sub: 'Requires attention', icon: AlertTriangle, color: 'bg-[#FF0000]/10 text-[#FF0000]' },
]

const RECENT_TICKETS = [
    { id: 'TKT-1042', subject: 'Projector not working — Room 204', requester: 'Priya Nair', priority: 'High', status: 'Open' },
    { id: 'TKT-1041', subject: 'Wi-Fi connectivity issue — Admin Block', requester: 'John Milton', priority: 'Medium', status: 'In Progress' },
    { id: 'TKT-1040', subject: 'New laptop setup for staff', requester: 'Anita Verma', priority: 'Low', status: 'Resolved' },
]

const priorityBadgeColor = {
    High: 'bg-[#FF572233] text-[#FF5722]',
    Medium: 'bg-[#FF980033] text-[#FF9800]',
    Low: 'bg-[#2196F333] text-[#2196F3]',
}

const statusBadgeColor = {
    Open: 'bg-[#FF980033] text-[#FF9800]',
    'In Progress': 'bg-[#2196F333] text-[#2196F3]',
    Resolved: 'bg-[#4CAF5033] text-[#4CAF50]',
}

const Dashboard = () => {
    return (
        <section className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-md p-4'>
                <div className='flex items-center gap-3'>
                    <div className='p-2.5 rounded-xl bg-[#515DEF]/10 text-[#515DEF]'>
                        <Headset size={22} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-black'>IT Support Team Manager Dashboard</h2>
                        <p className='text-sm text-[#667085] mt-0.5'>Overview of assets, support tickets, and pending approvals.</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                {SUMMARY_CARDS.map((card) => (
                    <div key={card.label} className='bg-white rounded-2xl shadow-md p-4'>
                        <div className='flex items-start justify-between gap-3'>
                            <div>
                                <p className='text-sm text-[#808080]'>{card.label}</p>
                                <p className='text-2xl font-semibold text-[#1E1E1E] mt-1'>{card.value}</p>
                                <p className='text-xs text-[#667085] mt-1'>{card.sub}</p>
                            </div>
                            <div className={`p-3 rounded-xl ${card.color}`}>
                                <card.icon size={22} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='bg-white rounded-2xl shadow-md p-4'>
                <h3 className='text-lg font-semibold text-black mb-4'>Recent Support Tickets</h3>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs bg-[#EDEEF5] whitespace-nowrap rounded-lg">
                            <tr>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-s-lg">Ticket ID</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Subject</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Requester</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase">Priority</th>
                                <th className="px-2 py-3.5 text-[#0C1E5B] font-medium uppercase rounded-e-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RECENT_TICKETS.map((ticket) => (
                                <tr key={ticket.id} className="border-b text-[#667085] border-[#f2f4f7] hover:bg-[#f2f4f7]">
                                    <td className="px-2 py-4 font-medium text-[#1E1E1E] rounded-s-lg">{ticket.id}</td>
                                    <td className="px-2 py-4 max-w-[220px] truncate" title={ticket.subject}>{ticket.subject}</td>
                                    <td className="px-2 py-4">{ticket.requester}</td>
                                    <td className="px-2 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${priorityBadgeColor[ticket.priority]}`}>
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className="px-2 py-4 rounded-e-lg">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${statusBadgeColor[ticket.status]}`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
