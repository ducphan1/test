import React from "react";
import "../style/Todolist.css";
import TodoItem from "./Todoitem";

const TodoList = ({
  tasks,
  toggleTaskStatus,
  deleteTask,
  activeTab,
  deleteAllCompletedTasks,
}) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
      {activeTab === "Completed" && tasks.length > 0 && (
        <button onClick={deleteAllCompletedTasks} className="delete-all">
          Delete All
        </button>
      )}
    </div>
  );
};

export default TodoList;
