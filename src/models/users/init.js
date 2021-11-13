import {forward, sample, guard} from 'effector';
import { $users, fetchUsersFX, UsersGate, deleteUsersFX, $currentUser, changeUser, addUserFX, inputUserName, $newUserName } from './index';
import * as settings from '../../settings';
import {fetchTodosFX} from '../todos/index';
import {createError} from '../error';

import {db} from '../../indexedDb/db';

// обновление хранилища при вводе имени нового пользователя
$newUserName.on(inputUserName, (state, name) => name);
$newUserName.reset(addUserFX.done);

const setDelay = (data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 0)
  })
}

// получение списка пользователей с сервера
// fetchUsersFX.use(async () => {
//   try {
//     const res = await fetch(settings.ApiRoutes.Users);
//     if (!res.ok) {
//       throw new Error('Fetching error! ' + 'Error status: ' + res.status);
//     }
//     const data = await res.json();
//     return setDelay(data);
//   } catch (error) {
//     createError(error);
//     throw new Error('Fetching error! Recheck your connection.');
//   }
// })

// отправка нового пользователя на сервер
// addUserFX.use(async (user) => {
//   const res = await fetch(settings.ApiRoutes.Users, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: { 'Content-type': 'application/json; charset=UTF-8' }
//   });
//   if (!res.ok) {
//     throw new Error('Fetching error!');
//   }
//   return await res.json();
// })

// get users from DB
fetchUsersFX.use(async () => {
  try {
    return db.users.toArray();
  } catch (error) {
    createError(error);
    throw new Error('Fetching error! Recheck your connection.');
  }
});

// add user to DB
addUserFX.use(async (user) => db.users.add(user));
// clear all tables
deleteUsersFX.use(async () => db.reset());
// обновление хранилища с пользователями при получение данных от сервера
$users.on(fetchUsersFX.doneData, (state, users) => [...users]);
// задать пользователя по умолчанию для селекта после получения данных
$currentUser.on(fetchUsersFX.doneData, (state, users) => users[0])

forward({
  from: [UsersGate.open, addUserFX.doneData],
  to: fetchUsersFX
});

forward({
  from: deleteUsersFX.doneData,
  to: [fetchUsersFX, fetchTodosFX]
});

// при смене пользователя обновляем хранилище с пользователем
sample({
  clock: changeUser,
  source: $users,
  fn: (users, id) => users.find(user => Number(user.id) === Number(id)),
  target: $currentUser,
});

// при смене пользователя вызываем эффект с запросом за туду для пользователя
forward({
  from: $currentUser,
  to: fetchTodosFX
});
