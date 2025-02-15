import { ToastOptions, toast } from 'react-toastify';

const toastHandler =
  (type: 'success' | 'error' | 'warn' | 'info') =>
  (message: string, options?: ToastOptions<unknown>) =>
    toast[type](message, options);

export const toastWarn = toastHandler('warn');
export const toastInfo = toastHandler('info');
export const toastError = toastHandler('error');
export const toastSuccess = toastHandler('success');
