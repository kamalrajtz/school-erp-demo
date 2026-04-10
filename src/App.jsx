import { useLocation } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import AdminLayout from "./Layout/AdminLayout";
import './App.css'

const App = () => {

  const location = useLocation();

  const pathname = location.pathname;

  const authTitleMapping = {
    "/": "SelectProfile",
    "/signin": "SignIn",
    "/signup": "SignUp",
    "/select-profile": "SelectProfile",
  };

  const isAuthRoute = authTitleMapping[pathname];

  return (
    <>
      {isAuthRoute ? (
        <AuthLayout />
      ) : (
        <AdminLayout />
      )}
    </>
  )
}

export default App
