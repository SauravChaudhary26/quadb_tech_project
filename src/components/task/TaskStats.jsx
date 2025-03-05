// src/components/Task/TaskStats.jsx
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function TaskStats() {
  const tasks = useSelector((state) => state.tasks);

  const priorities = { High: 0, Medium: 0, Low: 0 };
  tasks.forEach((task) => {
    priorities[task.priority] += 1;
  });

  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [priorities.High, priorities.Medium, priorities.Low],
        backgroundColor: ["#f87171", "#facc15", "#4ade80"],
      },
    ],
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">Task Stats</h3>
      <Pie data={data} />
    </div>
  );
}

export default TaskStats;
