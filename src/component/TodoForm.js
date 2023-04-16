import React, {useContext} from 'react'
import {Paper,TextField} from '@mui/material/';
import useForm from '../Hooks/useForm'
import { DispatchContext } from '../context/TodoContext';

function Form() {
    const [value, defaultValue, reset] = useForm("");
    const dispatch = useContext(DispatchContext);
    return(
        <Paper style={{margin:'1rem 0', padding:'0 1rem'}}>
            <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({type:"ADD", task: value});
            reset();
            }}>
            <TextField fullWidth value={value} onChange={defaultValue} margin='normal' label='Add New Todo' variant='standard' />
        </form>
        </Paper>
    );
}

export default Form; 