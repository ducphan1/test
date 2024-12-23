import React from "react";
import "../style/Tab.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === "All" ? "active" : ""}
        onClick={() => setActiveTab("All")}
      >
        All
      </button>
      <button
        className={activeTab === "Active" ? "active" : ""}
        onClick={() => setActiveTab("Active")}
      >
        Active
      </button>
      <button
        className={activeTab === "Completed" ? "active" : ""}
        onClick={() => setActiveTab("Completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Tabs;
