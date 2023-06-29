import React, { useContext } from "react";
import { TextField } from "@mui/material";
import useForm from "../Hooks/useForm";
import { DispatchContext } from "../context/TodoContext";

function IsEditing({ todos, id, toggleForm }) {
  const [value, handleChange] = useForm(todos);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        toggleForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default IsEditing;
