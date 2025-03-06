import React from "react";
import WeatherWidget from "../Weather/WeatherWidget";

function TaskItem({ task, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-2 border-b cursor-pointer transition-colors
        ${task.completed ? "bg-gray-200 line-through text-gray-500" : "hover:bg-gray-100 dark:hover:bg-gray-800"}
      `}
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
    </div>
  );
}

export default TaskItem;
