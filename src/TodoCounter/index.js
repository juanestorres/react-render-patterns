import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'
// Styles option 1
/* const styles = {
    color: 'red',
} */

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">You have completed {completedTodos} out of {totalTodos} TODOs</h2>
    );
};

export {TodoCounter};