import { $todos, fetchTodosFX } from './index.js';
import { createGate } from "effector-react"
import { forward } from "effector"
import * as settings from '../../settings';

fetchTodosFX.use(async (userId) => {
  console.log('fetchTodosFX', userId);
  const url = userId >= 0 ? `${settings.ApiRoutes.Todos}?userId=${userId}` : settings.ApiRoutes.Todos;
  // const url = user && user.id ? `${settings.ApiRoutes.Todos}?userId=${user.id}` : settings.ApiRoutes.Todos;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Fetching error!');
  }
  return await res.json();
});

$todos.on(fetchTodosFX.doneData, (state, todos) => {
  return [...todos]
});

export const TodosGate = createGate();

forward({
  from: TodosGate.open,
  to: fetchTodosFX
})
