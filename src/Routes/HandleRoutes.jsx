import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "../utils/constants";
import ProtectedRoutes from "./ProtectedRoute";

const MenuBar = lazy(() => import("../Pages/NavMenu/NavMenu"));
const LoginPage = lazy(() => import("../Pages/LoginPage/Login"));
const SampleDashboardPage = lazy(() => import("../Pages/Dashboard/Sample"));
const NotFound = lazy(() => import("../Pages/Error/NotFound"));
const Registration = lazy(() => import("../components/Registration"));
const Otp = lazy(() => import("../components/Otp"));
const Forgotpasswod = lazy(() => import("../components/Forgotpassword"));
const Managecourse = lazy(() => import("../components/Managecourse"));
const Chnagepassword = lazy(() => import("../components/Changepassword"));
const Testpdf = lazy(() => import("../components/Testing"));
const Fchangepassword = lazy(() => import("../components/Fchangepassword"));
const Fotp = lazy(() => import("../components/Fotp"));



const HandleRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<LoginPage />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/otp" element={<Otp />} />
    <Route path="/forgotpassword" element={<Forgotpasswod />} />
    <Route path="/fchangepassword" element={<Fchangepassword />} />
    <Route path="/fotp" element={<Fotp />} />
    <Route path="/*" element={<NotFound />} />
    {/* Private Routes */}
    <Route element={<ProtectedRoutes />}>
      <Route element={<MenuBar />}>
        <Route path={PATHS.dashboard} element={<SampleDashboardPage />} />
        <Route path={PATHS.Managecourse.root} element={<Managecourse />} />
        <Route path={PATHS.Changepassword.root} element={<Chnagepassword />} />
        <Route path={PATHS.Testing.root} element={<Testpdf />} />
      </Route>
    </Route>
  </Routes>
);

export default HandleRoutes;
