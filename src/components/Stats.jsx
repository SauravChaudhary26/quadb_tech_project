import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Stats() {
  // Get tasks from Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  // Ensure tasks is always an array
  const validTasks = Array.isArray(tasks) ? tasks : [];

  // Count tasks by completion status (fixed to use 'completed' instead of 'done')
  const pendingCount = validTasks.filter((task) => !task.completed).length;
  const doneCount = validTasks.filter((task) => task.completed).length;

  const data = {
    labels: ["Pending", "Done"],
    datasets: [
      {
        data: [pendingCount, doneCount],
        backgroundColor: ["#4ade80", "#16a34a"],
        borderColor: ["#4ade80", "#16a34a"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="p-2 h-full">
      <div className="text-lg font-semibold mb-2">Task Stats</div>
      <div className="flex">
        {/* Left Column: Pending and Done counts */}
        <div className="flex-1 text-sm">
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span>Pending</span>
              <span>{pendingCount}</span>
            </li>
            <li className="flex justify-between">
              <span>Done</span>
              <span>{doneCount}</span>
            </li>
          </ul>
        </div>
        {/* Right Column: Pie chart */}
        <div className="w-32 h-32">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
