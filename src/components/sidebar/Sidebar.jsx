import { useSelector } from "react-redux";
import {
  FaRegCalendar,
  FaStar,
  FaCalendarCheck,
  FaUser,
  FaTasks,
} from "react-icons/fa";
import profile from "../../assets/profile1.jpg";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const theme = useSelector((state) => state.theme.theme);
  const isLight = theme === "light";

  // Container: white background in light mode, black in dark mode, with a green border
  const containerClass = `transition-all ${
    isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
  } p-4 border border-green-500 ${
    isLight ? "bg-white text-black" : "bg-black text-white"
  }`;

  // Accent colors for task item background and icons
  const taskItemClass = isLight ? "bg-[#9CD9B8]" : "bg-green-700";
  const iconClass = isLight ? "text-[#9CD9B8]" : "text-green-700";

  return (
    <aside className={containerClass}>
      {isSidebarOpen && (
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4">
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
                className={`flex items-center space-x-2 font-bold text-base ${taskItemClass} p-2 rounded`}
              >
                <FaTasks className="text-white" />
                <span>All Tasks</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer font-bold text-base py-1 px-2">
                <FaRegCalendar className={iconClass} />
                <span>Today</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer font-bold text-base py-1 px-2">
                <FaStar className={iconClass} />
                <span>Important</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer font-bold text-base py-1 px-2">
                <FaCalendarCheck className={iconClass} />
                <span>Planned</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer font-bold text-base py-1 px-2">
                <FaUser className={iconClass} />
                <span>Assigned to Me</span>
              </li>
            </ul>
          </nav>

          {/* Add List Button */}
          <div className="mt-1 flex justify-center">
            <button
              className={`inline-flex items-center justify-center space-x-2 ${
                isLight ? "bg-white text-black" : "bg-black text-white"
              } font-semibold text-base px-4 py-2 rounded shadow`}
            >
              <span className="text-4xl leading-none">+</span>
              <span className="leading-none">Add list</span>
            </button>
          </div>

          {/* Pie Chart Section */}
          <div className="mt-4">
            <div
              className={`p-3 rounded shadow text-center ${
                isLight ? "bg-white" : "bg-gray-800"
              }`}
            >
              <p className="text-sm text-gray-500">Today Tasks</p>
              <p
                className={`text-xl font-bold ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                11
              </p>
              {/* Pie Chart Placeholder */}
              <div className="mt-3 flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-full border-6 border-t-transparent ${
                    isLight ? "border-[#9CD9B8]" : "border-green-700"
                  }`}
                />
                <div className="mt-2 text-sm flex space-x-3">
                  <div className="flex items-center space-x-1">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        isLight ? "bg-[#9CD9B8]" : "bg-green-700"
                      }`}
                    />
                    <span>Pending</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span>Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </aside>
  );
};

export default Sidebar;
