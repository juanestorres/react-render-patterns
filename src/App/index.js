import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [items, setItems] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        //throw new Error('Failed to connect to API.');
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItems(parsedItem);
        setLoading(false);
      }
      catch (error) {
        setError(error);
      }
    }, 250);
  });

  const saveItem = (newItems) => {
    try {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      setItems(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return {
    items,
    saveItem,
    loading,
    error
  };

}

function App() {
  //Execute code before rendering components
  const { items: todos,
    saveItem: saveTodos,
    loading,
    error } = useLocalStorage('TODOS_V1', []);


  const [searchValue, setSearchValue] = React.useState('');

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

  return (
    <AppUI
      error={error}
      loading={loading}
      total={totalTodos}
      completed={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosFiltered={todosFiltered}
      onComplete={toggleCompleteTodo}
      onDelete={deleteTodo}
    />
  );
}

export default App;
