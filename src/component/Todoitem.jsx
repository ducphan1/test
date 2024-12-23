import React from "react";
import "../style/Todoitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ task, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="container">
      <div className="todo-item">
        <input
          type="checkbox"
          checked={!task.active}
          onChange={() => toggleTaskStatus(task.id)}
        />
        <span style={{ textDecoration: task.active ? "none" : "line-through" }}>
          {task.name}
        </span>
        {!task.active && (
          <button onClick={() => deleteTask(task.id)} className="delete-button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
