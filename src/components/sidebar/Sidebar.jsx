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

  return (
    <aside
      className={`transition-all h-screen ${
        isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
      } bg-white  text-black dark:bg-black dark:text-white p-6`}
    >
      {/* Render content only if open */}
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
              <li className="flex items-center space-x-2 font-medium bg-[#9CD9B8] dark:bg-green-700 p-2 rounded">
                <FaTasks className="text-white" />
                <span>All Tasks</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaRegCalendar className="text-[#9CD9B8] dark:text-green-700" />
                <span>Today</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaStar className="text-[#9CD9B8] dark:text-green-700" />
                <span>Important</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaCalendarCheck className="text-[#9CD9B8] dark:text-green-700" />
                <span>Planned</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer">
                <FaUser className="text-[#9CD9B8] dark:text-green-700" />
                <span>Assigned to Me</span>
              </li>
            </ul>

            {/* Add List */}
            <button className="mt-6 inline-flex items-center space-x-2 text-black dark:text-white">
              <span className="text-xl">➕</span>
              <span className="font-semibold">Add list</span>
            </button>
          </nav>

          {/* Task Stats Card */}
          <div className="mt-6 p-4 bg-white dark:bg-black rounded shadow text-center">
            <p className="text-sm text-gray-500 dark:text-gray-300">Today Tasks</p>
            <p className="text-2xl font-bold text-black dark:text-white">11</p>

            {/* Pie Chart Placeholder */}
            <div className="mt-4 relative flex flex-col items-center">
              {/* Outer ring */}
              <div className="w-24 h-24 rounded-full border-8 border-[#9CD9B8] dark:border-green-700 border-t-transparent" />
              <div className="mt-3 text-sm flex space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="inline-block w-3 h-3 bg-[#9CD9B8] dark:bg-green-700 rounded-full" />
                  <span>Pending</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="inline-block w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full" />
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
