import React from 'react';
import TodoList from '../todo-list/todo-list';
import Users from '../users/users';

function App() {
  return (
    <div>
      <h1>Main page</h1>
      <Users />
      <TodoList />
    </div>
  );
}

export default App;
