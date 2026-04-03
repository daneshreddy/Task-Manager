import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard({ user, setUser }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          width: "400px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h2>Welcome {user}</h2>

        <button onClick={logout} style={{ marginBottom: "20px" }}>
          Logout
        </button>

        <h3>Add Task</h3>

        <TaskForm input={input} setInput={setInput} addTask={addTask} />

        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default Dashboard;