import React, {useEffect} from 'react'
import { useGate, useStore } from "effector-react"
import {$todos, fetchTodosFX, Gate} from '../../models/todos';

const TodoList = (props) => {
  const todos = useStore($todos);

  // useEffect(() => {
  //   console.log('useEffect');
  //   fetchTodosFX();
  // }, []);
  // useGate(Gate);

  console.log(todos);

  return (
    <>
      {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </>
  )
}

export default TodoList
