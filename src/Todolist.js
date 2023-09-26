import React, { useState } from "react";
import "./Todolist.css";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormGroup, FormControlLabel } from "@mui/material";

function Todolist() {
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
  const removeAllToDo = () => {
    setToDos([]);
  };

  // Function for adding things with enter button
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
  };

  return (
    <div>
      <div className="list-items">
        <TextField
          id="outlined-basic"
          label="Add todo item..."
          variant="outlined"
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          onClick={addToDo}
          variant="contained"
          style={{ color: "white" }}
          className="add-button"
        >
          +
        </Button>
      </div>

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

      <div className="bottom-button">
        <Button onClick={removeAllToDo} variant="contained">
          Remove All
        </Button>
      </div>
    </div>
  );
}

export default Todolist;
