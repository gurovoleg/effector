import {forward} from 'effector';
import {toast} from 'react-toastify';
import {showErrorFX, createError } from './index';

const DEFAULT_MESSAGE = 'Произошла ошибка!';

createError.watch((error) => {
  const message = error ? error.message ? error.message : error : DEFAULT_MESSAGE;
  toast.error(message);
})

// showErrorFX.use((error) => {
//   const message = error ? error.message ? error.message : error : DEFAULT_MESSAGE;
//   console.log('FX', message);
//   toast.error(message);
// });

// forward({
//   from: createError,
//   to: showErrorFX
// });