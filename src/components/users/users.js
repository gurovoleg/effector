import React from 'react'
import {$users, UsersGate, changeUser, $selectedUser} from '../../models/users/index';
import { useGate, useStore } from 'effector-react';

const Users = (props) => {
  const users = useStore($users);
  const user = useStore($selectedUser);

  useGate(UsersGate);

  const options = users.map(user => ({ id: user.id, name: user.name }))

  console.log(users, user, options);

  return (
    <div>
      <h3>{user.name}</h3>
      <select name="users" onChange={(e) => changeUser(e.target.value)} value={user.id}>
        {options.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
    </div>
  )
}

export default Users
