import react from "react";
import './TodoList.css'

function TodoList(props) {
    return (
        <section className="TodoList-Container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.todosFiltered.length && !props.searchValue) && props.onEmptyTodos()}
            {(!props.loading && !props.todosFiltered.length && props.searchValue) && props.onEmptySearchResults()}
            {}
            {props.todosFiltered.map(props.render || props.children)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };