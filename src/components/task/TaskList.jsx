import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ onTaskSelect }) {
  const tasks = useSelector((state) => state.tasks);

  if (tasks.length === 0) {
    return <p className="p-4 text-gray-500">No tasks available. Add one!</p>;
  }

  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onClick={() => onTaskSelect(task)} />
      ))}
    </div>
  );
}

export default TaskList;
