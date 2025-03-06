// src/components/navbar/Navbar.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setView } from "../../redux/UiSlice";
import { toggleTheme } from "../../redux/ThemeSlice";
import { setSearchQuery, clearSearchQuery } from "../../redux/searchSlice";
import { FaBars, FaSearch, FaTh, FaList, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const view = useSelector((state) => state.ui.view);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

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

      {/* Right Side - Search, View Toggle, Theme Toggle */}
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <FaSearch
            onClick={() => setIsSearching(true)}
            className="cursor-pointer text-lg "
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
    </nav>
  );
};

export default Navbar;
