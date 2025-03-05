
// src/components/Navbar.jsx
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/UiSlice";
import { toggleTheme } from "../../redux/ThemeSlice";
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={() => dispatch(toggleSidebar())} className="text-gray-700 dark:text-white text-2xl mr-4">
          <FaBars />
        </button>
        <h1 className="text-green-700 dark:text-green-400 font-bold text-xl">DoIt</h1>
      </div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 dark:text-white text-lg" />
        <FaTh className="text-gray-600 dark:text-white text-lg" />
        <button onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <FaMoon className="text-gray-600 text-lg" /> : <FaSun className="text-yellow-400 text-lg" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;