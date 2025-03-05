// src/components/Navbar.jsx
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/UiSlice";
import { FaBars, FaSearch, FaTh, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={() => dispatch(toggleSidebar())} className="text-gray-700 text-2xl mr-4">
          <FaBars />
        </button>
        <h1 className="text-green-700 font-bold text-xl">DoIt</h1>
      </div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 text-lg" />
        <FaTh className="text-gray-600 text-lg" />
        <FaMoon className="text-gray-600 text-lg" />
      </div>
    </nav>
  );
};

export default Navbar