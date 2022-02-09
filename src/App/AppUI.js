import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton/index.';

function AppUI(props) {
    return (
        <React.Fragment>
            <TodoCounter
                total={props.total}
                completed={props.completed}
            />
            <TodoSearch
                searchValue={props.searchValue}
                setSearchValue={props.setSearchValue} />
            <TodoList>
                {props.error && <p>An error ocurred... Reload the page.</p>}
                {!props.error && props.loading && <p>Loading. Please wait...</p>}
                {(!props.loading && !props.todosFiltered.length) && <p>Create your first TODO!</p>}
                {props.todosFiltered.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => props.onComplete(todo.text)}
                        onDelete={() => props.onDelete(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }