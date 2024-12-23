import React, { useState, useEffect } from "react";
import Header from "./component/Header.jsx";
import Tabs from "./component/Tab.jsx";
import TodoForm from "./component/Todoform.jsx";
import TodoList from "./component/Todolist.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, active: true };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAllCompletedTasks = () => {
    setTasks(tasks.filter((task) => task.active));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return task.active;
    if (activeTab === "Completed") return !task.active;
    return false;
  });

  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {(activeTab === "All" || activeTab === "Active") && (
        <TodoForm addTask={addTask} />
      )}
      <TodoList
        tasks={filteredTasks}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
        activeTab={activeTab}
        deleteAllCompletedTasks={deleteAllCompletedTasks}
      />
    </div>
  );
};

export default App;
