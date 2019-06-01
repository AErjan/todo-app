import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Spinner from './Spinner';

import TodoContext from '../context/TodoContext';
import appReducer from '../reducer/appReducer';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    todos: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/todos/',
        );
        dispatch({ type: 'FETCH_SUCCES', payload: result.data });
      } catch {
        dispatch({ type: 'FETCH_FAIL' });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {state.isLoading ? (
        <Spinner />
      ) : state.isError ? (
        <h1 className="hasError">An error has occurred</h1>
      ) : (
        <TodoContext.Provider value={dispatch}>
          <Header />
          <AddTodo />
          <TodoList todos={state.todos} />
        </TodoContext.Provider>
      )}
    </div>
  );
};

export default App;
