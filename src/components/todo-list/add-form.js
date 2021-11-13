import React from 'react'
import Text from "../ui/form/text"
import Button, { DangerButton } from "../ui/button"
import { $todo, addTodo, inputTodoName } from "../../models/todos"
import { useStore } from 'effector-react';

const AddForm = (props) => {
  const todo = useStore($todo);

  return (
    <div>
      <Text margin="0 0.5rem 0 0" value={todo} placeholder="add new todo" onChange={(e) => inputTodoName(e.target.value)}/>

      <Button primary textTransform="uppercase" marRight height="40px" text="add" onClick={() => addTodo(todo)} disabled={!todo}>
        Add
      </Button>

    </div>
  )
}

export default AddForm
