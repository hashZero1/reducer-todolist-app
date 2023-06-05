import React, { useContext, memo } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import useToggle from "../Hooks/useToggle";
import IsEditing from "./IsEditing";
import { DispatchContext, TodoContext } from "../context/TodoContext";

function Todolist() {
  const dispatch = useContext(DispatchContext);
  const [editTodo, isToggle] = useToggle(false);
  const todos = useContext(TodoContext);
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
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
                    <IconButton aria-label="Edit" onClick={() => isToggle(i)}>
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </>
              )}
            </ListItem>
            {i < todo.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default memo(Todolist);
