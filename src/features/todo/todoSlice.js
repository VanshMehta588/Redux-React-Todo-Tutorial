import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : { todos: [{ id: 1, text: "Hello World" }] };
};

const saveToLocalStorage = (state) => {
    localStorage.setItem("todos", JSON.stringify(state));
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: loadFromLocalStorage(),
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(newTodo);
            saveToLocalStorage(state);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveToLocalStorage(state); 
        },

        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
                saveToLocalStorage(state); 
            }
        },
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
