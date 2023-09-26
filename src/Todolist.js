import React, { useState } from "react";
import "./Todolist.css";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";

function Todolist() {
  const [checked, setChecked] = React.useState(false);

  // Keep track of the todo items that are present
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  // Function for adding new todo items
  const addToDo = () => {
    setToDos([...toDos, newToDo]);
    setNewToDo("");
  };

  // Function for removing todo items
  const removeToDo = (index) => {
    setToDos(toDos.filter((_, i) => i !== index));
  };

  // Function for removing ALL todo items
  const removeAllToDo = (index) => {
    setToDos([]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div className="list-items">
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </div>

      <button onClick={addToDo}>Add</button>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index} className="todo-item">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox style={{ color: "black" }} />}
                label={toDo}
              />
              <button onClick={() => removeToDo(index)}>Remove</button>
            </FormGroup>
          </li>
        ))}
      </ul>
      <button onClick={removeAllToDo}>Remove All</button>
    </div>
  );
}

export default Todolist;
