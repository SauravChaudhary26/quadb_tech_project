// Layout.jsx
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./utils/NotFound";

const Layout = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  // If not on login/register and no user, redirect to login.
  if (!user && !hideLayout) {
    return <Navigate to="/login" />;
  }

  // For login and register, do not render Navbar or Sidebar.
  if (hideLayout) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // For all other routes, render the inverse L shaped layout.
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
