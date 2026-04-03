function TaskItem({ task, index, toggleComplete, deleteTask }) {
  return (
    <li
      style={{
        background: "#f9f9f9",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <span
        onClick={() => toggleComplete(index)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TaskItem;