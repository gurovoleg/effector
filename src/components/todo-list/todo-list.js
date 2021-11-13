import React from 'react'
import { useStore } from "effector-react"
import { $todos, setCompletedFX, deleteTodoFX } from '../../models/todos'
import styled from 'styled-components'
import { SuccessButton, DangerButton } from '../ui/button'
import AddForm from './add-form';

const FlexWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TodoItem = ({ data, className }) => {
  return (
    <div className={className} key={data.id}>
      <FlexWrapper>
        <div>{data.title}</div>
        <div>
          <SuccessButton size="0.7rem" marRight text="Complete" onClick={() => setCompletedFX(data)}>Complete</SuccessButton>
          <DangerButton size="0.7rem" text="Delete" onClick={() => deleteTodoFX(data.id)}>Delete</DangerButton>
        </div>
      </FlexWrapper>
    </div>
  )
}

const TodoItemStyled = styled(TodoItem)`
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`

const TodoList = (props) => {
  const todos = useStore($todos)

  return (
    <>
      <h3>Todo List</h3>

      <AddForm />

      <div>
        {todos.map(todo => <TodoItemStyled key={todo.id} data={todo} completed={todo.isCompleted}/>)}
      </div>
    </>
  )
}

export default TodoList
