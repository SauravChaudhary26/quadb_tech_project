// src/components/Task/TaskDetailsSidebar.jsx
import React from "react";
import {
  FaTimes,
  FaTrash,
  FaStar,
  FaPlus,
  FaBell,
  FaCalendarAlt,
  FaSyncAlt,
} from "react-icons/fa";

function TaskDetailsSidebar({ isOpen, onClose, task }) {
  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full border-l border-green-500 shadow-xl
      transition-transform transform 
      ${isOpen ? "translate-x-0" : "translate-x-full"} 
      overflow-auto z-50 bg-white text-black dark:bg-gray-900 dark:text-white`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-green-500 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{task?.text || "Task Details"}</h2>
          <FaStar className="text-gray-500 dark:text-gray-300 cursor-pointer" />
        </div>

        {/* Body */}
        <div className="flex-1 p-4 space-y-4">
          {/* Add Step */}
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer">
            <FaPlus className="text-green-600 dark:text-green-400" />
            <span>Add Step</span>
          </div>
          {/* Set Reminder */}
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer">
            <FaBell className="text-green-600 dark:text-green-400" />
            <span>Set Reminder</span>
          </div>
          {/* Add Due Date */}
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer">
            <FaCalendarAlt className="text-green-600 dark:text-green-400" />
            <span>Add Due Date</span>
          </div>
          {/* Repeat */}
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer">
            <FaSyncAlt className="text-green-600 dark:text-green-400" />
            <span>Repeat</span>
          </div>
          {/* Add Notes */}
          <div className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer">
            <span className="text-gray-500 dark:text-gray-300">Add Notes</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-green-500 p-4 flex items-center justify-between">
          <FaTimes className="cursor-pointer text-gray-600 dark:text-gray-300" onClick={onClose} />
          <span className="text-sm text-gray-500 dark:text-gray-400">Created Today</span>
          <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsSidebar;
