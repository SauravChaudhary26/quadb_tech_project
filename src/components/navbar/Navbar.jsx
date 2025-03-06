import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setView } from "../../redux/uiSlice";
import { toggleTheme } from "../../redux/ThemeSlice";
import { setSearchQuery, clearSearchQuery } from "../../redux/searchSlice";
import { FaBars, FaSearch, FaTh, FaList, FaMoon, FaSun, FaTimes, FaEllipsisV } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const view = useSelector((state) => state.ui.view);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCloseSearch = () => {
    setIsSearching(false);
    setQuery("");
    dispatch(clearSearchQuery());
  };

  return (
    <nav
      className={`p-4 flex items-center justify-between shadow transition-colors cursor-pointer ${
        theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"
      }`}
    >
      {/* Left Side - Sidebar Toggle & Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-inherit text-xl cursor-pointer"
        >
          <FaBars className="text-inherit text-[25px]" />
        </button>
        <img src={logo} alt="Logo" className="h-9 w-auto cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center flex-grow justify-center">
        <FaSearch
          onClick={() => setIsSearching(true)}
          className="cursor-pointer text-lg"
        />
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search tasks..."
          className={`transition-all duration-300 pl-2 pr-8 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2 ${
            isSearching ? "w-40 opacity-100" : "w-0 opacity-0"
          }`}
        />
        {isSearching && (
          <button
            onClick={handleCloseSearch}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            <FaTimes className="text-lg" />
          </button>
        )}
      </div>

      {/* Right Side - Hidden on small screens, inside dropdown */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Grid View Toggle */}
        <button
          onClick={() => dispatch(setView("grid"))}
          className={`p-1 rounded cursor-pointer ${
            view === "grid" ? "bg-green-500 text-white" : "text-inherit"
          }`}
        >
          <FaTh className="text-lg" />
        </button>
        {/* List View Toggle */}
        <button
          onClick={() => dispatch(setView("list"))}
          className={`p-1 rounded cursor-pointer ${
            view === "list" ? "bg-green-500 text-white" : "text-inherit"
          }`}
        >
          <FaList className="text-lg" />
        </button>
        {/* Theme Toggle */}
        <button onClick={() => dispatch(toggleTheme())} className="cursor-pointer">
          {theme === "light" ? (
            <FaMoon className="text-gray-900 text-lg" />
          ) : (
            <FaSun className="text-yellow-400 text-lg" />
          )}
        </button>
      </div>

      {/* Three-dot menu (for small screens) */}
      <div className="md:hidden relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
          <FaEllipsisV />
        </button>

        {isMenuOpen && (
          <div
            className={`absolute right-0 mt-2 w-36 border rounded shadow-md p-2 transition-all ${
              theme === "light" ? "bg-white text-gray-900 border-gray-300" : "bg-gray-800 text-white border-gray-700"
            }`}
          >
            <button
              onClick={() => {
                dispatch(setView("grid"));
                setIsMenuOpen(false);
              }}
              className={`flex items-center space-x-2 w-full px-3 py-2 rounded ${
                theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
              }`}
            >
              <FaTh />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => {
                dispatch(setView("list"));
                setIsMenuOpen(false);
              }}
              className={`flex items-center space-x-2 w-full px-3 py-2 rounded ${
                theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
              }`}
            >
              <FaList />
              <span>List View</span>
            </button>
            <button
              onClick={() => {
                dispatch(toggleTheme());
                setIsMenuOpen(false);
              }}
              className={`flex items-center space-x-2 w-full px-3 py-2 rounded ${
                theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
              }`}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
