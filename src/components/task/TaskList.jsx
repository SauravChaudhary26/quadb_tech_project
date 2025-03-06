// src/components/Task/TaskList.jsx
import { useSelector } from "react-redux";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskDetailsSidebar from "./TaskDetailsSidebar";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  const [selectedTask, setSelectedTask] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (tasks.length === 0) {
    return <p className="p-4 text-gray-500">No tasks available. Add one!</p>;
  }

  return (
    <div className="p-4 relative">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onClick={() => handleTaskClick(task)}
        />
      ))}

      {/* Right-Side Details Panel */}
      <TaskDetailsSidebar
        isOpen={isOpen}
        onClose={handleClose}
        task={selectedTask}
      />
    </div>
  );
}

export default TaskList;
