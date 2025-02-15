import { IRouter } from "../interfaces/router.type";

export type Routers = typeof routers;

const routers = {
  home: {
    router: '/home',
    pattern: '/home',
    private: false,
    role: undefined,
  },
  login: {
    router: '/login',
    pattern: '/login',
    private: false,
    role: undefined,
  },
  register: {
    router: '/register',
    pattern: '/register',
    private: false,
    role: undefined,
  },
  forgotPassword: {
    router: '/forgot-password',
    pattern: '/forgot-password',
    private: false,
    role: undefined,
  },
} satisfies Record<string, IRouter>;

export default routers;
