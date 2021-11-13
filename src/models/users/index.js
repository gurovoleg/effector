import {createStore, createEffect, createEvent} from "effector";
import {createGate} from 'effector-react';

// stores
export const $users = createStore([]);
export const $currentUser = createStore({});
export const $newUserName = createStore('');
export const UsersGate = createGate();

// events
export const changeUser = createEvent();
export const inputUserName = createEvent();

// effects
export const fetchUsersFX = createEffect();
export const addUserFX = createEffect();
export const deleteUsersFX = createEffect();

