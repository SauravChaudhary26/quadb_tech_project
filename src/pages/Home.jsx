// src/pages/Home.jsx
import { useSelector } from "react-redux";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
 
function Home() {
  const theme = useSelector((state) => state.theme.theme);
  // Use dynamic classes for theming similar to Navbar/Sidebar
  const bgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900";

  return (
    <div className={`${bgClass} h-full p-4`}>
      <div className="flex flex-col gap-4 h-full">
        {/* TaskForm takes its natural height */}
        <div className="flex-shrink-0">
          <TaskForm />
        </div>
        {/* TaskList scrolls internally if content overflows */}
        <div className="flex-grow overflow-auto">
          <TaskList />
        </div>
        {/* TaskStats (if needed) can be placed here */}
      
      </div>
    </div>
  );
}

export default Home;
