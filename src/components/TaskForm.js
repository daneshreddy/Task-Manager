function TaskForm({ input, setInput, addTask }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskForm;