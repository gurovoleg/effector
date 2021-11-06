import {forward, sample, guard} from 'effector';
import { $users, fetchUsersFX, UsersGate, $selectedUser, changeUser } from './index';
import * as settings from "../../settings";
import {fetchTodosFX} from '../todos/index';

fetchUsersFX.use(async () => {
  const res = await fetch(settings.ApiRoutes.Users);
  if (!res.ok) {
    throw new Error('Fetching error!');
  }
  return await res.json();
})

$users.on(fetchUsersFX.doneData, (state, users) => [...state, ...users]);

forward({
  from: UsersGate.open,
  to: fetchUsersFX
});

// при смене пользователя обновляем хранилище с пользователем
sample({
  clock: changeUser,
  source: $users,
  fn: (users, id) => users.find(user => Number(user.id) === Number(id)),
  target: $selectedUser,
});

$selectedUser.on(fetchUsersFX.doneData, (state, users) => users[0])

// guard({
//   clock: $selectedUser,
//   filter: (user) => user.id !== undefined,
//   target: fetchTodosFX
// });

// при смене пользователя вызываем эффект с запросом за туду для пользователя
sample({
  clock: $selectedUser,
  fn: (user) => user.id,
  target: fetchTodosFX
});
