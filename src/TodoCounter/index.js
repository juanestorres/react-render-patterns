import React from "react";
import './TodoCounter.css'
// Styles option 1
/* const styles = {
    color: 'red',
} */

function TodoCounter({totalTodos,completedTodos, loading}){
    return(
        <h2 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>You have completed {completedTodos} out of {totalTodos} TODOs</h2>
    );
};

export {TodoCounter};