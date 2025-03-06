// src/components/Task/TaskItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/TaskSlice";
import WeatherWidget from "../Weather/WeatherWidget";

function TaskItem({ task, onClick }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent opening sidebar when deleting
    dispatch(removeTask(task.id));
  };

  return (
    <div
      className="flex items-center justify-between p-2 border-b cursor-pointer"
      onClick={onClick}
    >
      <div>
        <p className="font-medium">{task.text}</p>
        <small className="text-gray-500">Priority: {task.priority}</small>
        {task.isOutdoor && (
          <div className="mt-1">
            <WeatherWidget location={task.location} />
          </div>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
