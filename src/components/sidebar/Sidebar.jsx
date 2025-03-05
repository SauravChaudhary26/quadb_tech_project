import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const theme = useSelector((state) => state.theme.theme); // Get theme from Redux

  return (
    <aside
      className={`h-screen p-4 transition-all ${
        isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
      } ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {isSidebarOpen && (
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-full w-20 h-20"
            />
            <p className="mt-2 font-semibold">Hey, ABCD</p>
          </div>

          {/* Sidebar Menu */}
          <ul className="space-y-2">
            <li className={`p-2 rounded ${theme === "dark" ? "bg-green-700 text-white" : "bg-green-200 text-black"}`}>
              📌 All Tasks
            </li>
            <li>📅 Today</li>
            <li>⭐ Important</li>
            <li>📆 Planned</li>
            <li>📑 Assigned to Me</li>
            <li className="mt-4">➕ Add list</li>
          </ul>

          {/* Task Stats */}
          <div
            className={`mt-6 p-4 rounded shadow ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <p className="text-sm">Today Tasks</p>
            <p className="text-xl font-bold">11</p>
            <div className={`w-full h-24 rounded mt-2 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}></div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
