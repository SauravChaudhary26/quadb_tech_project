// src/components/Task/TaskItem.jsx
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/TaskSlice";
import WeatherWidget from "../weather/WeatherWidget";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <p className="font-medium">{task.text}</p>
        <small className="text-gray-500">Priority: {task.priority}</small>
        {task.isOutdoor && (
          <div className="mt-1">
            {/* Passing the task location to the WeatherWidget */}
            <WeatherWidget location={task.location} />
          </div>
        )}
      </div>
      <button
        onClick={() => dispatch(removeTask(task.id))}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
