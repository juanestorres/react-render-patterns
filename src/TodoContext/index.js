import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    //Execute code before rendering components
    const { items: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', []);


    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const toggleCompleteTodo = (text) => {
        const index = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodo = {text:text, completed:false};
        const newTodos = [...todos];
        newTodos.push(newTodo);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            todosFiltered,
            toggleCompleteTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}