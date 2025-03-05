import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/UiSlice";
import { toggleTheme } from "../../redux/ThemeSlice";
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/logo.png"; // ✅ Updated import path
 

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <nav
      className={`p-4 flex items-center justify-between shadow transition-colors ${
        theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"
      }`}
    >
      {/* Left Side - Sidebar Toggle & Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-inherit text-xl"
        >
        <FaBars className="text-inherit text-[25px] scale-100" />

        </button>
        <img src={logo} alt="Logo" className="h-9 w-auto" /> {/* ✅ Adjusted Size */}
      </div>

      {/* Right Side - Search, Grid, Theme Toggle */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-inherit text-lg" />
        <FaTh className="text-inherit text-lg" />
        <button onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? (
            <FaMoon className="text-gray-900 text-lg" />
          ) : (
            <FaSun className="text-yellow-400 text-lg" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
