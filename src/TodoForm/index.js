import React from "react";
import './TodoForm.css'
function TodoForm({addTodo,setOpenModal}) {
    const [newTodoText, setNewTodoText] = React.useState('');

    const onTextAreaChange = (event) => {
        setNewTodoText(event.target.value);
    }
    const onCancel = (event) => {
        //TODO xd
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        //TODO xd
        event.preventDefault();
        addTodo(newTodoText);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea
                value={newTodoText}
                onChange={onTextAreaChange}
                placeholder="Write your TODO"></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button-add">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };