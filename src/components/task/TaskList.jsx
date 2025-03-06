// src/components/Task/TaskList.jsx
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ onTaskSelect }) {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.ui.filter);
  const view = useSelector((state) => state.ui.view);

  // Filtering logic (adjust based on your task properties)
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "today") {
      // Assume task.createdAt is a Date string; filter tasks created today.
      const today = new Date().toDateString();
      return new Date(task.createdAt).toDateString() === today;
    }
    if (filter === "important") {
      // Assume tasks with high priority are important.
      return task.priority === "High";
    }
    if (filter === "planned") {
      // Assume tasks with a 'planned' property are planned.
      return task.planned === true;
    }
    if (filter === "assigned") {
      // Assume tasks with 'assignedTo' equal to "me" are assigned to the user.
      return task.assignedTo === "me";
    }
    return true;
  });

  if (filteredTasks.length === 0) {
    return <p className="p-4 text-gray-500">No tasks available. Add one!</p>;
  }

  if (view === "grid") {
    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onClick={() => onTaskSelect(task)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="p-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onClick={() => onTaskSelect(task)}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
