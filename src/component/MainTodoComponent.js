import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

function MainTodoComponent(){
      return(
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}elevation ={0}>
       <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
            <TodoForm />
            <TodoList />
        </Grid>
      </Grid>
    </Paper>
    )
}

export default MainTodoComponent;
