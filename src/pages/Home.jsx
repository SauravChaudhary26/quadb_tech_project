// Home.jsx
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import TaskStats from "../components/task/TaskStats";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex flex-col gap-4">
        <TaskForm />
        <TaskList />
        <TaskStats />
      </div>
    </div>
  );
}

export default Home;
