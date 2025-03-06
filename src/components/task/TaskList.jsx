import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ onTaskSelect }) {
  // ✅ Fix: Access the correct task array from Redux store
  const tasks = useSelector((state) => state.tasks.tasks);  
  const filter = useSelector((state) => state.ui.filter);
  const view = useSelector((state) => state.ui.view);

  // ✅ Ensure tasks is always an array
  const validTasks = Array.isArray(tasks) ? tasks : [];

  const filteredTasks = validTasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "today") {
      if (!task.dueDate) return false;
      const today = new Date().toDateString();
      return new Date(task.dueDate).toDateString() === today;
    }
    if (filter === "important") return task.important === true;
    if (filter === "planned") return task.planned === true;
    if (filter === "assigned") return task.assignedTo === "me";
    return true;
  });

  if (filteredTasks.length === 0) {
    return <p className="p-4 text-gray-500">No tasks available. Add one!</p>;
  }

  return view === "grid" ? (
    <div className="grid grid-cols-2 gap-4 p-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onClick={() => onTaskSelect(task)} />
      ))}
    </div>
  ) : (
    <div className="p-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onClick={() => onTaskSelect(task)} />
      ))}
    </div>
  );
}

export default TaskList;
