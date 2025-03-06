// src/components/Task/TaskDetailsSidebar.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../../redux/TaskSlice";
import {
  FaTimes,
  FaTrash,
  FaStar,
  FaRegStar,
  FaPlus,
  FaBell,
  FaCalendarAlt,
  FaSyncAlt,
} from "react-icons/fa";

function TaskDetailsSidebar({ onClose, task }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isLight = theme === "light";

  // Local state for inline editing
  const [editingDueDate, setEditingDueDate] = useState(false);
  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [editingNotes, setEditingNotes] = useState(false);
  const [notes, setNotes] = useState(task?.notes || "");
  const [editingReminder, setEditingReminder] = useState(false);
  const [reminder, setReminder] = useState(task?.reminder || "");

  useEffect(() => {
    setDueDate(task?.dueDate || "");
    setNotes(task?.notes || "");
    setReminder(task?.reminder || "");
  }, [task]);

  // Toggle important flag
  const handleToggleImportant = () => {
    if (task && task.id) {
      dispatch(
        updateTask({
          id: task.id,
          changes: { important: !task.important },
        })
      );
    }
  };

  // Toggle completed flag
  const handleToggleComplete = () => {
    if (task && task.id) {
      dispatch(
        updateTask({
          id: task.id,
          changes: { completed: !task.completed },
        })
      );
    }
  };

  // Delete task and close sidebar
  const handleDelete = () => {
    if (task && task.id) {
      dispatch(removeTask(task.id));
      onClose();
    }
  };

  // Add Step using prompt
  const handleAddStep = () => {
    const step = prompt("Enter a new step:");
    if (step && task && task.id) {
      const newSteps = task.steps ? [...task.steps, step] : [step];
      dispatch(updateTask({ id: task.id, changes: { steps: newSteps } }));
    }
  };

  // Save Due Date update
  const handleDueDateSave = () => {
    if (task && task.id) {
      dispatch(updateTask({ id: task.id, changes: { dueDate } }));
      setEditingDueDate(false);
    }
  };

  // Save Reminder update
  const handleReminderSave = () => {
    if (task && task.id) {
      dispatch(updateTask({ id: task.id, changes: { reminder } }));
      setEditingReminder(false);
    }
  };

  // Save Notes update
  const handleNotesSave = () => {
    if (task && task.id) {
      dispatch(updateTask({ id: task.id, changes: { notes } }));
      setEditingNotes(false);
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
          <h2 className="text-lg font-semibold">
            {task?.text || "Task Details"}
          </h2>
          {task?.important ? (
            <FaStar
              className={`cursor-pointer transition-colors ${
                isLight
                  ? "text-yellow-500 hover:text-yellow-600"
                  : "text-yellow-400 hover:text-yellow-500"
              }`}
              onClick={handleToggleImportant}
            />
          ) : (
            <FaRegStar
              className={`cursor-pointer transition-colors ${
                isLight
                  ? "text-gray-500 hover:text-yellow-500"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
              onClick={handleToggleImportant}
            />
          )}
        </div>

        {/* Body */}
        <div className="flex-1 p-4 space-y-4">
          {/* Add Step */}
          <div
            className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100"
            onClick={handleAddStep}
          >
            <FaPlus
              className={`${isLight ? "text-green-600" : "text-green-400"}`}
            />
            <span>Add Step</span>
          </div>

          {/* Set Reminder */}
          <div className="flex flex-col border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <div
              className="flex items-center gap-2"
              onClick={() => setEditingReminder(true)}
            >
              <FaBell
                className={`${isLight ? "text-green-600" : "text-green-400"}`}
              />
              <span>Set Reminder</span>
            </div>
            {editingReminder && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="time"
                  value={reminder}
                  onChange={(e) => setReminder(e.target.value)}
                  className="p-1 rounded border border-gray-300 focus:outline-none"
                />
                <button
                  onClick={handleReminderSave}
                  className="text-sm text-green-500"
                >
                  Save
                </button>
              </div>
            )}
          </div>

          {/* Add Due Date */}
          <div className="flex flex-col border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <div
              className="flex items-center gap-2"
              onClick={() => setEditingDueDate(true)}
            >
              <FaCalendarAlt
                className={`${isLight ? "text-green-600" : "text-green-400"}`}
              />
              <span>Add Due Date</span>
            </div>
            {editingDueDate && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-1 rounded border border-gray-300 focus:outline-none"
                />
                <button
                  onClick={handleDueDateSave}
                  className="text-sm text-green-500"
                >
                  Save
                </button>
              </div>
            )}
          </div>

          {/* Repeat */}
          <div
            className="flex items-center gap-2 border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100"
            onClick={() => alert("Repeat functionality is not implemented yet.")}
          >
            <FaSyncAlt
              className={`${isLight ? "text-green-600" : "text-green-400"}`}
            />
            <span>Repeat</span>
          </div>

          {/* Add Notes */}
          <div className="flex flex-col border-b border-green-500 pb-3 cursor-pointer transition-colors rounded hover:bg-green-100">
            <div
              className="flex items-center gap-2"
              onClick={() => setEditingNotes(true)}
            >
              <span className={`${isLight ? "text-gray-500" : "text-gray-300"}`}>
                Add Notes
              </span>
            </div>
            {editingNotes && (
              <div className="mt-2">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="p-1 rounded border border-gray-300 focus:outline-none w-full"
                  rows="3"
                ></textarea>
                <button
                  onClick={handleNotesSave}
                  className="mt-1 text-sm text-green-500"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-green-500 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaTimes
              className={`cursor-pointer transition-colors ${
                isLight
                  ? "text-gray-600 hover:text-red-500"
                  : "text-gray-300 hover:text-red-500"
              }`}
              onClick={onClose}
            />
            <button
              onClick={handleToggleComplete}
              className="px-2 py-1 text-sm rounded bg-green-500 hover:bg-green-600 text-white transition-colors"
            >
              {task?.completed ? "Undo" : "Complete"}
            </button>
          </div>
          <span
            className={`${
              isLight ? "text-sm text-gray-500" : "text-sm text-gray-400"
            }`}
          >
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

// Add handleToggleComplete function above return:
const handleToggleComplete = () => {
  if (task && task.id) {
    dispatch(
      updateTask({
        id: task.id,
        changes: { completed: !task.completed },
      })
    );
  }
};

export default TaskDetailsSidebar;

