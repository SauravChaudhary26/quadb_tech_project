// src/components/Task/TaskDetailsSidebar.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../redux/TaskSlice";
import {
  FaTimes,
  FaTrash,
  FaStar,
  FaPlus,
  FaBell,
  FaCalendarAlt,
  FaSyncAlt,
} from "react-icons/fa";

function TaskDetailsSidebar({ onClose, task }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isLight = theme === "light";

  const handleDelete = () => {
    if (task && task.id) {
      dispatch(removeTask(task.id));
      onClose();
    }
  };

  return (
    <div
      className={`w-full h-full border-l border-green-500 rounded-r-lg shadow-xl overflow-auto z-50 transition-all duration-300 ${
        isLight ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-green-500 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{task?.text || "Task Details"}</h2>
          <FaStar
            className={`cursor-pointer transition-colors ${
              isLight ? "text-gray-500 hover:text-yellow-500" : "text-gray-300 hover:text-yellow-400"
            }`}
          />
        </div>

        {/* Body */}
        <div className="flex-1 p-4 space-y-4">
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <FaPlus className={`${isLight ? "text-green-600" : "text-green-400"}`} />
            <span>Add Step</span>
          </div>
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <FaBell className={`${isLight ? "text-green-600" : "text-green-400"}`} />
            <span>Set Reminder</span>
          </div>
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <FaCalendarAlt className={`${isLight ? "text-green-600" : "text-green-400"}`} />
            <span>Add Due Date</span>
          </div>
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <FaSyncAlt className={`${isLight ? "text-green-600" : "text-green-400"}`} />
            <span>Repeat</span>
          </div>
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <span className={`${isLight ? "text-gray-500" : "text-gray-300"}`}>Add Notes</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-green-500 p-4 flex items-center justify-between">
          <FaTimes
            className={`cursor-pointer transition-colors ${
              isLight ? "text-gray-600 hover:text-red-500" : "text-gray-300 hover:text-red-500"
            }`}
            onClick={onClose}
          />
          <span className={`${isLight ? "text-sm text-gray-500" : "text-sm text-gray-400"}`}>
            Created Today
          </span>
          <FaTrash
            className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsSidebar;
