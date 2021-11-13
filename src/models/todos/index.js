import { createStore, createEvent, createEffect, restore } from "effector"

export const $todos = createStore([]);
export const $todo = createStore('');

export const fetchTodosFX = createEffect();
export const addTodoFX = createEffect();
export const setCompletedFX = createEffect();
export const deleteTodoFX = createEffect();

export const setCompleted = createEvent();
export const inputTodoName = createEvent();
export const addTodo = createEvent();
