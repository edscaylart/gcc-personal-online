import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import { useAuth } from "../hooks/auth";
import LoginPage from "../pages/login_page";
import MainPage from "../pages/main";

const RoutesConfig = () => {
  const { signed } = useAuth();
  if (signed) return <UserRoute />;
  return <AuthRoute />;
};

const UserRoute = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    <Footer />
  </>
);
const AuthRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  </>
);

export default RoutesConfig;
