import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <>
      <h3>Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TaskList;