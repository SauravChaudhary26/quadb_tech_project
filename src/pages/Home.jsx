// src/pages/Home.jsx
import { useSelector } from "react-redux";
import { useState } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import TaskDetailsSidebar from "../components/task/TaskDetailsSidebar";

function Home() {
  const theme = useSelector((state) => state.theme.theme);
  const bgClass = theme === "light" ? "bg-white text-gray-900" : "bg-black text-white";
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };

  return (
    <div className={`${bgClass} h-full p-4`}>
      <div className="flex h-full gap-4">
        <div className={`${selectedTask ? "w-2/3" : "w-full"} flex flex-col gap-4`}>
          <TaskForm />
          <TaskList onTaskSelect={handleTaskSelect} />
        </div>
        {selectedTask && (
          <div className="w-1/3">
            <TaskDetailsSidebar onClose={handleCloseDetails} task={selectedTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
