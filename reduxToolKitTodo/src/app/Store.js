import { configureStore } from '@reduxjs/toolkit' ; 
import todoReducer from '../feature/todo/TodoSlice'

export const Store = configureStore({
    reducer: todoReducer
})