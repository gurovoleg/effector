import { $todos, fetchTodosFX, setCompleted, inputTodoName, addTodo, $todo, addTodoFX, setCompletedFX, deleteTodoFX } from './index.js';
import { createGate } from "effector-react"
import { forward, sample, restore } from "effector"
import * as settings from '../../settings';
import {$currentUser} from '../users/index'
import {db} from '../../indexedDb/db';

// fetchTodosFX.use(async (userId) => {
//   if (userId >= 0) {
//     const url = userId >= 0 ? `${settings.ApiRoutes.Todos}?userId=${userId}` : settings.ApiRoutes.Todos;
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error('Fetching error!');
//     }
//     return await res.json();
//   } else {
//     return [];
//   }
// });

fetchTodosFX.use(async (user) => db.todos.where({ userId: user.id }).toArray());
addTodoFX.use(async (todo) => db.todos.add(todo));
deleteTodoFX.use(async (id) => db.todos.delete(id));
setCompletedFX.use(async (todo) => db.todos.put({ ...todo, isCompleted: !todo.isCompleted }));

$todos.on(fetchTodosFX.doneData, (state, todos) => [...todos]);
$todo.on(inputTodoName, (state, value) => value);
$todo.on(addTodoFX.done, (state, value) => '');

export const TodosGate = createGate();

forward({
  from: TodosGate.open,
  to: fetchTodosFX
});

sample({
  clock: addTodo,
  source: $currentUser,
  fn: (source, clock) => ({ title: clock, isCompleted: false, userId: source.id }),
  target: addTodoFX
});

sample({
  clock: [addTodoFX.done, setCompletedFX.done, deleteTodoFX.done],
  source: $currentUser,
  fn: (source, clock) => source,
  target: fetchTodosFX
});
