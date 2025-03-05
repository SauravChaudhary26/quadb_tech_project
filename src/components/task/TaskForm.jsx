// src/components/Task/TaskForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/TaskSlice";

function TaskForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [isOutdoor, setIsOutdoor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text,
      priority,
      isOutdoor,
      // For demo, we use a fixed location if outdoor.
      location: isOutdoor ? "New York" : "",
    };
    dispatch(addTask(newTask));
    setText("");
    setPriority("Low");
    setIsOutdoor(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 border rounded">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded"
      />
      <div className="flex items-center gap-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={isOutdoor}
            onChange={(e) => setIsOutdoor(e.target.checked)}
          />
          Outdoor
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
