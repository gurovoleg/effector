import {createStore, createEffect, createEvent} from "effector";
import {createGate} from 'effector-react';

// stores
export const $users = createStore([]);
export const $selectedUser = createStore({});
export const UsersGate = createGate();

// events
export const changeUser = createEvent();

// effects
export const fetchUsersFX = createEffect();

