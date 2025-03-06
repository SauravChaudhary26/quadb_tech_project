import { useSelector } from "react-redux";
import { useState } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import TaskDetailsSidebar from "../components/task/TaskDetailsSidebar";

function Home() {
  const theme = useSelector((state) => state.theme.theme);
  const bgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900";

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
        {/* Left Column: TaskForm and TaskList */}
        <div className={`${selectedTask ? "w-2/3" : "w-full"} flex flex-col gap-4`}>
          <div className="flex-shrink-0">
            <TaskForm />
          </div>
          <div className="flex-grow overflow-auto">
            <TaskList onTaskSelect={handleTaskSelect} />
          </div>
        </div>

        {/* Right Column: TaskDetailsSidebar (only when a task is selected) */}
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
