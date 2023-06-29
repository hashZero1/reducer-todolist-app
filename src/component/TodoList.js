import React, { useContext, memo } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import TodosComponent from "./TodosComponent";
import { TodoContext } from "../context/TodoContext";

function Todolist() {
  const todos = useContext(TodoContext);
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <TodosComponent todo={todo} />
            {i < todo.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default memo(Todolist);
