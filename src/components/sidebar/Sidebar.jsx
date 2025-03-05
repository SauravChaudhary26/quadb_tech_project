import { useSelector } from "react-redux";
import {
  FaRegCalendar,
  FaStar,
  FaCalendarCheck,
  FaUser,
  FaTasks,
} from "react-icons/fa";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const theme = useSelector((state) => state.theme.theme);

  // Determine container classes based on theme
  const containerClass = `transition-all h-screen ${
    isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
  } p-6 ${
    theme === "light" ? "bg-white text-black" : "bg-black text-white"
  }`;

  // For task item accents and icons
  const taskItemClass = theme === "light" ? "bg-[#9CD9B8]" : "bg-green-700";
  const iconClass = theme === "light" ? "text-[#9CD9B8]" : "text-green-700";

  return (
    <aside className={containerClass}>
      {isSidebarOpen && (
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-full w-20 h-20 object-cover"
            />
            <p className="mt-2 text-lg font-semibold">Hey, ABCD</p>
          </div>

          {/* Task Categories */}
          <nav className="flex-1">
            <ul className="space-y-3 text-sm">
              <li
                className={`flex items-center space-x-2 font-medium ${taskItemClass} p-2 rounded`}
              >
                <FaTasks className="text-white" />
                <span>All Tasks</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaRegCalendar className={iconClass} />
                <span>Today</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaStar className={iconClass} />
                <span>Important</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaCalendarCheck className={iconClass} />
                <span>Planned</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaUser className={iconClass} />
                <span>Assigned to Me</span>
              </li>
            </ul>

            {/* Add List Button */}
            <button className="mt-6 inline-flex items-center space-x-2 text-black dark:text-white">
              <span className="text-xl">➕</span>
              <span className="font-semibold">Add list</span>
            </button>
          </nav>

          {/* Task Stats Card */}
          <div
            className={`mt-6 p-4 rounded shadow text-center ${
              theme === "light" ? "bg-white" : "bg-black"
            }`}
          >
            <p className="text-sm text-gray-500">
              Today Tasks
            </p>
            <p
              className={`text-2xl font-bold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              11
            </p>

            {/* Pie Chart Placeholder */}
            <div className="mt-4 relative flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full border-8 border-t-transparent ${
                  theme === "light" ? "border-[#9CD9B8]" : "border-green-700"
                }`}
              />
              <div className="mt-3 text-sm flex space-x-4">
                <div className="flex items-center space-x-1">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      theme === "light" ? "bg-[#9CD9B8]" : "bg-green-700"
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
      )}
    </aside>
  );
};

export default Sidebar;
