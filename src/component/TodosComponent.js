import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import useToggle from "../Hooks/useToggle";
import IsEditing from "./IsEditing";
import { DispatchContext } from "../context/TodoContext";

const TodoListComponent = ({ todo }) => {
  const dispatch = useContext(DispatchContext);
  const [editTodo, isToggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {editTodo ? (
        <IsEditing
          key={todo.id}
          id={todo.id}
          todos={todo.task}
          toggleForm={isToggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={todo.completed}
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
          />
          <ListItemText
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => isToggle(todo.id)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TodoListComponent;
