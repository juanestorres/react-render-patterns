import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton/index.';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    //React hook for using context
    const {
        error,
        loading,
        todosFiltered,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>An error ocurred... Reload the page.</p>}
                {!error && loading && <p>Loading. Please wait...</p>}
                {(!loading && !todosFiltered.length) && <p>Create your first TODO!</p>}
                {todosFiltered.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal = {setOpenModal}
                openModal = {openModal}
            />
        </React.Fragment>
    );
}

export { AppUI }