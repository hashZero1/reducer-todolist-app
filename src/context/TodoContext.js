import React, {createContext, useReducer} from "react";
import reducer from "../Hooks/useReducer";
import uuid from "react-uuid";

const defaultTodos = [
    {id: uuid(), task: "the quick brown fox jumo over the lazy dog", completed : true},
    {id: uuid(), task: "Release lady bugs into garden", completed : true}
];
export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider({children}){
    //import reducers data and intitial value in this case defaultTodos
    //which return state and a function called dispatch(it contains all the function that we created in reducers file)
    const [todos, dispatch] = useReducer(reducer, defaultTodos);
    return (
    //split into 2 context because of unnecessory re-renders of todos state
    
        <TodoContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    );
}