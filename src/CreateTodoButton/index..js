import react from "react";
import './CreateTodoButton.css';

const createTodo = () => {
    return;
};

function CreateTodoButton(props){
    return(
        <button
        className="CreateTodoButton"
        onClick={createTodo}>+</button>
    );
}

export {CreateTodoButton};