import { IRouter } from "../interfaces/router.type";

export type Routers = typeof routers;

const routers = {
  home: {
    router: '/',
    pattern: '/',
    private: true,
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
  goodsReceipt: {
    router: '/goods-receipt',
    pattern: '/goods-receipt',
    private: true,
    role: undefined,
  },
  goodsShipping: {
    router: '/goods-shipping',
    pattern: '/goods-shipping',
    private: true,
    role: undefined,
  },
  revenueExpense: {
    router: '/revenue-expense',
    pattern: '/revenue-expense',
    private: true,
    role: undefined,
  },
  report: {
    router: '/report',
    pattern: '/report',
    private: true,
    role: undefined,
  },


} satisfies Record<string, IRouter>;

export default routers;
