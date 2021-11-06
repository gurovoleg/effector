import { createStore, createEvent, createEffect, forward } from "effector"

export const $todos = createStore([]);
export const fetchTodosFX = createEffect();
