import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ onTaskSelect }) {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.ui.filter);
  const view = useSelector((state) => state.ui.view);

  const validTasks = Array.isArray(tasks) ? tasks : [];

  const filteredTasks = validTasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "today") {
      if (!task.dueDate) return false;
      const today = new Date().toDateString();
      return new Date(task.dueDate).toDateString() === today;
    }
    if (filter === "important") return task.important === true;
    if (filter === "planned") return task.planned === true && !task.completed; // ✅ Show only incomplete tasks
    if (filter === "assigned") return task.assignedTo === "me";
    return true;
  });
  

  // ✅ Separate incomplete and completed tasks
  const incompleteTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  if (filteredTasks.length === 0) {
    return <p className="p-4 text-gray-500">No tasks available. Add one!</p>;
  }

  return (
    <div className={`p-4 ${view === "grid" ? "grid grid-cols-2 gap-4" : ""}`}>
      {/* Incomplete Tasks (Displayed first) */}
      {incompleteTasks.map((task) => (
        <TaskItem key={task.id} task={task} onClick={() => onTaskSelect(task)} />
      ))}

      {/* Completed Tasks (Displayed last, with gray background) */}
      {completedTasks.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <h3 className="text-sm text-gray-500 mb-2">Completed Tasks</h3>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onClick={() => onTaskSelect(task)}
              completed={true} // Pass prop to handle styling
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
