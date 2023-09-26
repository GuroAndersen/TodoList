import "./App.css";
import Todolist from "./Todolist";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="list-container">
        <div className="list-header">
          <h1>ToDo List</h1>
        </div>
        <div className="list-content">
          <Todolist />
        </div>
      </div>
    </div>
  );
}

export default App;
