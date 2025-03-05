import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/UiSlice";
import { toggleTheme } from "../../redux/ThemeSlice";
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from "react-icons/fa";
import logo from "../../../public/Images/logo.png"; // ✅ Updated import path

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
      {/* Left Side - Sidebar Toggle & Logo */}
      <div className="flex items-center space-x-4">
        <button onClick={() => dispatch(toggleSidebar())} className="text-gray-700 dark:text-white text-xl">
          <FaBars />
        </button>
        <img src={logo} alt="Logo" className="h-8 w-auto" /> {/* ✅ Added Logo */}
      </div>

      {/* Right Side - Search, Grid, Theme Toggle */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 dark:text-white text-lg" />
        <FaTh className="text-gray-600 dark:text-white text-lg" />
        <button onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? (
            <FaMoon className="text-gray-600 text-lg" />
          ) : (
            <FaSun className="text-yellow-400 text-lg" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
