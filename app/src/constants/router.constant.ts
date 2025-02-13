import { IRouter } from "../interfaces/router.type";

export type Routers = typeof routers;

const routers = {
  home: {
    router: '/home',
    pattern: '/home',
    private: false,
    role: undefined,
  },
} satisfies Record<string, IRouter>;

export default routers;
