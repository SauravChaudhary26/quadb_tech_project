
// src/components/Sidebar.jsx
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  return (
    <aside className={`bg-gray-100 h-screen p-4 transition-all ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"}`}>
      {isSidebarOpen && (
        <div>
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-full w-20 h-20"
            />
            <p className="mt-2 font-semibold">Hey, ABCD</p>
          </div>
          <ul className="space-y-2">
            <li className="bg-green-200 p-2 rounded">📌 All Tasks</li>
            <li>📅 Today</li>
            <li>⭐ Important</li>
            <li>📆 Planned</li>
            <li>📑 Assigned to Me</li>
            <li className="mt-4">➕ Add list</li>
          </ul>
          <div className="mt-6 p-4 bg-white rounded shadow">
            <p className="text-sm">Today Tasks</p>
            <p className="text-xl font-bold">11</p>
            <div className="w-full h-24 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;