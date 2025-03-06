import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/TaskSlice";

function TaskForm() {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
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
      location: isOutdoor ? "New York" : "",
    };
    dispatch(addTask(newTask));
    setText("");
    setPriority("Low");
    setIsOutdoor(false);
    setIsExpanded(false); // Collapse after submit
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 p-4 border border-green-500 rounded-lg shadow-md transition-all duration-300 ${
        isExpanded ? "h-auto" : "h-12"
      }`}
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={handleFocus}
        className="p-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 w-full"
      />
      {isExpanded && (
        <>
          <div className="flex items-center gap-4">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="p-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isOutdoor}
                onChange={(e) => setIsOutdoor(e.target.checked)}
                className="cursor-pointer"
              />
              Outdoor
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg cursor-pointer transition-colors w-24"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg cursor-pointer transition-colors w-24"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default TaskForm;
