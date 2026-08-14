import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { runAcademicsWipeIfNeeded } from './Common/RBAC/academicsWipe.js'
import { runFrontOfficePassWipeIfNeeded } from './Common/FrontOffice/frontOfficePassWipe.js'
import { runActivitiesWipeIfNeeded } from './Common/Activities/activitiesWipe.js'
import { runAnnouncementsWipeIfNeeded } from './Common/Announcement/announcementsWipe.js'
import { runLeaveRequestWipeIfNeeded } from './Common/LeaveRequest/leaveRequestWipe.js'
import {
    migrateLegacyLeaveRequestsIfNeeded,
    migrateSessionLeaveRequestsToLocalIfNeeded,
} from './Common/LeaveRequest/leaveRequestData.js'

runAcademicsWipeIfNeeded()
runFrontOfficePassWipeIfNeeded()
runActivitiesWipeIfNeeded()
runAnnouncementsWipeIfNeeded()
runLeaveRequestWipeIfNeeded()
migrateLegacyLeaveRequestsIfNeeded()
migrateSessionLeaveRequestsToLocalIfNeeded()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2500} newestOnTop closeOnClick />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
