import { Navigate, useLocation } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import AdminLayout from "./Layout/AdminLayout";
import LibrarianLayout from "./Layout/LibrarianLayout";
import GateKeeperLayout from "./Layout/GateKeeperLayout";
import GateKeeperManagerLayout from "./Layout/GateKeeperManagerLayout";
import DirectorLayout from "./Layout/DirectorLayout";
import PrincipalLayout from "./Layout/PrincipalLayout";
import CanteenManagerLayout from "./Layout/CanteenManagerLayout";
import ITSupportManagerLayout from "./Layout/ITSupportManagerLayout";
import StationeryStoreManagerLayout from "./Layout/StationeryStoreManagerLayout";
import HousekeepingManagerLayout from "./Layout/HousekeepingManagerLayout";
import TransportManagerLayout from "./Layout/TransportManagerLayout";
import TeacherLayout from "./Layout/TeacherLayout";
import JointDirectorLayout from "./Layout/JointDirectorLayout";
import JointDirectorAssistantLayout from "./Layout/JointDirectorAssistantLayout";
import JointDirectorAuditLayout from "./Layout/JointDirectorAuditLayout";
import ProcessAuditorLayout from "./Layout/ProcessAuditorLayout";
import QualityAuditorLayout from "./Layout/QualityAuditorLayout";
import HRLayout from "./Layout/HRLayout";
import PRMLayout from "./Layout/PRMLayout";
import StudentLayout from "./Layout/StudentLayout";
import { ROLE_HOME_PATHS, ROLES, useAuth } from "./context/AuthContext";
import './App.css'

const AUTH_ROUTES = ["/signin", "/signup", "/select-profile"];

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { isAuthenticated, role } = useAuth();

  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if (isAuthRoute) {
    if (isAuthenticated && role) {
      return <Navigate to={ROLE_HOME_PATHS[role] ?? "/dashboard"} replace />;
    }
    return <AuthLayout />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/select-profile" replace />;
  }

  if (role === ROLES.STUDENT) {
    if (!pathname.startsWith("/student")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.STUDENT]} replace />;
    }
    return <StudentLayout />;
  }

  if (role === ROLES.LIBRARIAN) {
    if (!pathname.startsWith("/librarian")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.LIBRARIAN]} replace />;
    }
    return <LibrarianLayout />;
  }

  if (role === ROLES.PRM) {
    if (!pathname.startsWith("/front-office")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.PRM]} replace />;
    }
    return <PRMLayout />;
  }

  if (role === ROLES.GATEKEEPER_MANAGER) {
    if (!pathname.startsWith("/gatekeeper-manager")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.GATEKEEPER_MANAGER]} replace />;
    }
    return <GateKeeperManagerLayout />;
  }

  if (role === ROLES.GATEKEEPER) {
    if (!pathname.startsWith("/gate-keeper")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.GATEKEEPER]} replace />;
    }
    return <GateKeeperLayout />;
  }

  if (role === ROLES.DIRECTOR) {
    if (!pathname.startsWith("/director")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.DIRECTOR]} replace />;
    }
    return <DirectorLayout />;
  }

  if (role === ROLES.PRINCIPAL) {
    if (!pathname.startsWith("/principal")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.PRINCIPAL]} replace />;
    }
    return <PrincipalLayout />;
  }

  if (role === ROLES.CANTEEN_MANAGER) {
    if (!pathname.startsWith("/canteen-manager")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.CANTEEN_MANAGER]} replace />;
    }
    return <CanteenManagerLayout />;
  }

  if (role === ROLES.IT_SUPPORT_MANAGER) {
    if (!pathname.startsWith("/it-support-manager")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.IT_SUPPORT_MANAGER]} replace />;
    }
    return <ITSupportManagerLayout />;
  }

  if (role === ROLES.STATIONERY_STORE_MANAGER) {
    if (!pathname.startsWith("/stationery-store-manager")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.STATIONERY_STORE_MANAGER]} replace />;
    }
    return <StationeryStoreManagerLayout />;
  }

  if (role === ROLES.HOUSEKEEPING_MANAGER) {
    if (!pathname.startsWith("/housekeeping-manager")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.HOUSEKEEPING_MANAGER]} replace />;
    }
    return <HousekeepingManagerLayout />;
  }

  if (role === ROLES.TRANSPORT_MANAGER) {
    if (!pathname.startsWith("/transport-manager")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.TRANSPORT_MANAGER]} replace />;
    }
    return <TransportManagerLayout />;
  }

  if (role === ROLES.TEACHER) {
    if (!pathname.startsWith("/teacher")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.TEACHER]} replace />;
    }
    return <TeacherLayout />;
  }

  if (role === ROLES.PROCESS_AUDITOR) {
    if (!pathname.startsWith("/process-auditor")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.PROCESS_AUDITOR]} replace />;
    }
    return <ProcessAuditorLayout />;
  }

  if (role === ROLES.QUALITY_AUDITOR) {
    if (!pathname.startsWith("/quality-auditor")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.QUALITY_AUDITOR]} replace />;
    }
    return <QualityAuditorLayout />;
  }

  if (role === ROLES.HR) {
    if (!pathname.startsWith("/hr")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.HR]} replace />;
    }
    return <HRLayout />;
  }

  if (role === ROLES.JOINT_DIRECTOR_AUDIT) {
    if (!pathname.startsWith("/joint-director-audit")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.JOINT_DIRECTOR_AUDIT]} replace />;
    }
    return <JointDirectorAuditLayout />;
  }

  if (role === ROLES.JOINT_DIRECTOR_ASSISTANT) {
    if (!pathname.startsWith("/joint-director-assistant")) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.JOINT_DIRECTOR_ASSISTANT]} replace />;
    }
    return <JointDirectorAssistantLayout />;
  }

  if (role === ROLES.JOINT_DIRECTOR) {
    if (
      !pathname.startsWith("/joint-director") ||
      pathname.startsWith("/joint-director-assistant") ||
      pathname.startsWith("/joint-director-audit")
    ) {
      return <Navigate to={ROLE_HOME_PATHS[ROLES.JOINT_DIRECTOR]} replace />;
    }
    return <JointDirectorLayout />;
  }

  if (
    pathname.startsWith("/librarian") ||
    pathname.startsWith("/front-office") ||
    pathname.startsWith("/student") ||
    pathname.startsWith("/teacher") ||
    pathname.startsWith("/gate-keeper") ||
    pathname.startsWith("/gatekeeper-manager") ||
    pathname.startsWith("/director") ||
    pathname.startsWith("/principal") ||
    pathname.startsWith("/canteen-manager") ||
    pathname.startsWith("/it-support-manager") ||
    pathname.startsWith("/stationery-store-manager") ||
    pathname.startsWith("/housekeeping-manager") ||
    pathname.startsWith("/transport-manager") ||
    pathname.startsWith("/process-auditor") ||
    pathname.startsWith("/quality-auditor") ||
    pathname.startsWith("/hr") ||
    pathname.startsWith("/joint-director-audit") ||
    pathname.startsWith("/joint-director-assistant") ||
    pathname.startsWith("/joint-director")
  ) {
    return <Navigate to={ROLE_HOME_PATHS[ROLES.ADMIN]} replace />;
  }

  return <AdminLayout />;
}

export default App
