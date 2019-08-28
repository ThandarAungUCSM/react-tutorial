import React from 'react';

import TodoItem from "./components/TodoItem"
import todosData from './components/todosData'

function App() {
  const todoItems = todosData.map(item => <TodoItem item = {item} />)
  return (
    <div className="todo-list">
      { todoItems }
    </div>
  );
}

export default App;
