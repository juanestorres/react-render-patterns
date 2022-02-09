import react from "react";
import './TodoCounter.css'
// Styles option 1
/* const styles = {
    color: 'red',
} */

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter">You have completed {completed} out of {total} TODOs</h2>
    );
};

export {TodoCounter};