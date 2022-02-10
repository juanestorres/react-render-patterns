import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton/index.';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import MyLoader from "../MyLoader";
import { TodoHeader } from "../TodoHeader";
import { useTodos } from './useTodos';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];


function App() {

  //React hook for using context
  const {
    error,
    loading,
    todosFiltered,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {error && <p>An error ocurred... Reload the page.</p>}
        {!error && loading &&
          <div style={{
            width: '100%',
            height: '100%', display: 'flex', justifyItems: 'center'
          }}>
            <MyLoader />
          </div>}
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
        <Modal
          addTodo={addTodo}
          setOpenModal={setOpenModal}>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  );
}

export default App;
