// src/components/Task/Sidebar.jsx
import { useSelector } from "react-redux";
import {
  FaRegCalendar,
  FaStar,
  FaCalendarCheck,
  FaUser,
  FaTasks,
} from "react-icons/fa";
import profile from "../../assets/profile1.jpg";
import Stats from "../Stats";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const theme = useSelector((state) => state.theme.theme);
  const isLight = theme === "light";

  // When open, apply right border and rounded right corners.
  // Height is set to 90vh for a slightly smaller appearance.
  const containerClass = `transition-all h-[90vh] ${
    isSidebarOpen
      ? "w-64 p-4 border-r border-green-500 rounded-r-lg"
      : "w-0 overflow-hidden"
  } ${isLight ? "bg-white text-black" : "bg-black text-white"}`;

  // Accent colors for task item background and icons
  const taskItemClass = isLight ? "bg-[#9CD9B8]" : "bg-green-700";
  const iconClass = isLight ? "text-[#9CD9B8]" : "text-green-700";
  const listItemBase =
    "flex items-center space-x-2 cursor-pointer font-bold text-base py-1 px-2 transition-transform hover:scale-105";

  return (
    <aside className={containerClass}>
      {isSidebarOpen && (
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 cursor-pointer">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full w-20 h-20 object-cover"
            />
            <p className="mt-2 text-lg font-semibold">Hey, ABCD</p>
          </div>

          {/* Task Categories */}
          <nav className="flex-1">
            <ul className="space-y-2 text-sm">
              <li
                className={`flex items-center space-x-2 cursor-pointer font-bold text-base ${taskItemClass} p-2 rounded transition-transform hover:scale-105`}
              >
                <FaTasks className="text-white" />
                <span>All Tasks</span>
              </li>
              <li className={listItemBase}>
                <FaRegCalendar className={iconClass} />
                <span>Today</span>
              </li>
              <li className={listItemBase}>
                <FaStar className={iconClass} />
                <span>Important</span>
              </li>
              <li className={listItemBase}>
                <FaCalendarCheck className={iconClass} />
                <span>Planned</span>
              </li>
              <li className={listItemBase}>
                <FaUser className={iconClass} />
                <span>Assigned to Me</span>
              </li>
            </ul>
          </nav>

          {/* Add List Button */}
          <div className="mt-1 flex justify-center">
            <button
              className={`inline-flex items-center justify-center space-x-2 ${
                isLight
                  ? "bg-white border border-green-500 text-black"
                  : "bg-black border border-green-500 text-white"
              } font-semibold text-base px-4 py-2 rounded shadow cursor-pointer transition-transform hover:scale-105`}
            >
              <span className="text-4xl leading-none">+</span>
              <span className="leading-none">Add list</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-4">
            <div
              className={`p-3 rounded shadow text-center ${
                isLight ? "bg-white" : "bg-black"
              }`}
            >
              <Stats />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
