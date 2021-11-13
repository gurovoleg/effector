import React from 'react'
import {$users, UsersGate, changeUser, $currentUser, deleteUsersFX, fetchUsersFX, $newUserName, addUserFX, inputUserName } from '../../models/users/index';
import { useGate, useStore } from 'effector-react';
import TodoList from '../todo-list/todo-list';
import Button, {DangerButton} from '../ui/button'
import Text from '../ui/form/text';
import Select from '../ui/form/select';
import styled from "styled-components"

const onChangeHandler = inputUserName.prepend(value => {
  if (/^[a-zA-Z\s]+$/.test(value) || value === '') {
    return value;
  }
})

const Section = styled('div')`
  padding: 1rem;
`;

const Users = (props) => {
  const users = useStore($users);
  const user = useStore($currentUser);
  const newUserName = useStore($newUserName);
  const pendingUsers = useStore(fetchUsersFX.pending);
  const pendingUser = useStore(addUserFX.pending);
  const pending = pendingUsers || pendingUser;

  const options = users.map(user => ({ id: user.id, name: user.name }))
  useGate(UsersGate);

  return (
    <Section>
      <h3>{pending ? 'Loading...' : user.name}</h3>
      <Select margin="0 0.5rem 0 0"  options={options} onChange={(e) => changeUser(e.target.value)} value={user.id} disabled={pending} />

      <Text margin="0 0.5rem 0 0" value={newUserName} placeholder="add new user" onChange={(e) => onChangeHandler(e.target.value)} disabled={pending}/>

      <Button primary textTransform="uppercase" marRight height="40px" text="add" onClick={() => addUserFX({ name: newUserName })} disabled={pending || !newUserName}>
        Add
      </Button>

      <DangerButton textTransform="uppercase" height="40px" text="add" onClick={deleteUsersFX}>
        Reset Db
      </DangerButton>

      {!pending && <TodoList />}

    </Section>
  )
}

export default Users
