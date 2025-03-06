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

  const handleToggleImportant = () => {
    if (task?.id) {
      dispatch(updateTask({ id: task.id, changes: { important: !task.important } }));
    }
  };

  const handleToggleComplete = () => {
    if (task?.id) {
      dispatch(updateTask({ id: task.id, changes: { completed: !task.completed } }));
    }
  };

  const handleDelete = () => {
    if (task?.id) {
      dispatch(removeTask(task.id));
      onClose();
    }
  };

  const handleAddStep = () => {
    const step = prompt("Enter a new step:");
    if (step && task?.id) {
      const newSteps = task.steps ? [...task.steps, step] : [step];
      dispatch(updateTask({ id: task.id, changes: { steps: newSteps } }));
    }
  };

  const handleDueDateSave = () => {
    if (task?.id) {
      dispatch(updateTask({ id: task.id, changes: { dueDate } }));
      setEditingDueDate(false);
    }
  };

  const handleReminderSave = () => {
    if (task?.id) {
      dispatch(updateTask({ id: task.id, changes: { reminder } }));
      setEditingReminder(false);
    }
  };

  const handleNotesSave = () => {
    if (task?.id) {
      dispatch(updateTask({ id: task.id, changes: { notes } }));
      setEditingNotes(false);
    }
  };

  return (
    <div
      className={`w-full max-w-md h-full border-l border-green-500 rounded-r-lg shadow-xl overflow-auto transition-all duration-300 fixed top-0 right-0 z-50 ${
        isLight ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-green-500 flex items-center justify-between">
          <h2 className="text-lg font-semibold truncate">{task?.text || "Task Details"}</h2>
          {task?.important ? (
            <FaStar
              className={`cursor-pointer transition-colors ${
                isLight ? "text-yellow-500 hover:text-yellow-600" : "text-yellow-400 hover:text-yellow-500"
              }`}
              onClick={handleToggleImportant}
            />
          ) : (
            <FaRegStar
              className={`cursor-pointer transition-colors ${
                isLight ? "text-gray-500 hover:text-yellow-500" : "text-gray-300 hover:text-yellow-400"
              }`}
              onClick={handleToggleImportant}
            />
          )}
        </div>

        {/* Body */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {/* Add Step */}
          <button
            className="flex items-center gap-2 border-b border-green-500 pb-3 w-full text-left transition-colors rounded hover:bg-green-100 dark:hover:bg-green-900 p-2"
            onClick={handleAddStep}
          >
            <FaPlus className={`${isLight ? "text-green-600" : "text-green-400"}`} />
            <span>Add Step</span>
          </button>

          {/* Set Reminder */}
          <div className="flex flex-col border-b border-green-500 pb-3">
            <button
              className="flex items-center gap-2 w-full text-left transition-colors rounded hover:bg-green-100 dark:hover:bg-green-900 p-2"
              onClick={() => setEditingReminder(true)}
            >
              <FaBell className={`${isLight ? "text-green-600" : "text-green-400"}`} />
              <span>Set Reminder</span>
            </button>
            {editingReminder && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="time"
                  value={reminder}
                  onChange={(e) => setReminder(e.target.value)}
                  className="p-2 rounded border border-gray-300 focus:outline-none w-full"
                />
                <button onClick={handleReminderSave} className="text-sm text-green-500">
                  Save
                </button>
              </div>
            )}
          </div>

          {/* Add Due Date */}
          <div className="flex flex-col border-b border-green-500 pb-3">
            <button
              className="flex items-center gap-2 w-full text-left transition-colors rounded hover:bg-green-100 dark:hover:bg-green-900 p-2"
              onClick={() => setEditingDueDate(true)}
            >
              <FaCalendarAlt className={`${isLight ? "text-green-600" : "text-green-400"}`} />
              <span>Add Due Date</span>
            </button>
            {editingDueDate && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 rounded border border-gray-300 focus:outline-none w-full"
                />
                <button onClick={handleDueDateSave} className="text-sm text-green-500">
                  Save
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="flex flex-col border-b border-green-500 pb-3">
            <button
              className="flex items-center gap-2 w-full text-left transition-colors rounded hover:bg-green-100 dark:hover:bg-green-900 p-2"
              onClick={() => setEditingNotes(true)}
            >
              <span className={`${isLight ? "text-gray-500" : "text-gray-300"}`}>Add Notes</span>
            </button>
            {editingNotes && (
              <div className="mt-2">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="p-2 rounded border border-gray-300 focus:outline-none w-full"
                  rows="3"
                ></textarea>
                <button onClick={handleNotesSave} className="mt-1 text-sm text-green-500">
                  Save
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-green-500 p-4 flex items-center justify-between">
          <FaTimes className="cursor-pointer text-red-500 hover:text-red-700" onClick={onClose} />
          <button
            onClick={handleToggleComplete}
            className="px-3 py-1 text-sm rounded bg-green-500 hover:bg-green-600 text-white transition"
          >
            {task?.completed ? "Undo" : "Complete"}
          </button>
          <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsSidebar;
