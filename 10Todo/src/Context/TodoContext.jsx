import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg ",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete:()=>{},
    updateTodo: (id , todo)=>{},


})

export const Todoprovider = Todocontext.Provider

export const useTodo = ()=>{
    return useContext(Todocontext)
}

