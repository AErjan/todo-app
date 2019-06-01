const appReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'FETCH_SUCCES': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload,
      };
    }
    case 'FETCH_FAIL': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }
    case 'CHANGE_COMPLETED': {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    }
    case 'EDIT_TODO': {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
        ),
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
