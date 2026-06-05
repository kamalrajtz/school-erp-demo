import { Navigate, useLocation } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import AdminLayout from "./Layout/AdminLayout";
import LibrarianLayout from "./Layout/LibrarianLayout";
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

  if (
    pathname.startsWith("/librarian") ||
    pathname.startsWith("/front-office") ||
    pathname.startsWith("/student")
  ) {
    return <Navigate to={ROLE_HOME_PATHS[ROLES.ADMIN]} replace />;
  }

  return <AdminLayout />;
}

export default App
