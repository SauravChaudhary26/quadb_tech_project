// src/components/Task/TaskList.jsx
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ onTaskSelect }) {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.ui.filter);
  const view = useSelector((state) => state.ui.view);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "today") {
      // Check if the task has a dueDate and it matches today's date
      if (!task.dueDate) return false;
      const today = new Date().toDateString();
      return new Date(task.dueDate).toDateString() === today;
    }
    if (filter === "important") {
      return task.important === true;
    }
    if (filter === "planned") {
      return task.planned === true;
    }
    if (filter === "assigned") {
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
          <TaskItem key={task.id} task={task} onClick={() => onTaskSelect(task)} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="p-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onClick={() => onTaskSelect(task)} />
        ))}
      </div>
    );
  }
}

export default TaskList;
