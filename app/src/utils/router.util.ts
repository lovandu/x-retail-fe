import routers from "../constants/router.constant";
import { AnyFunction } from "../interfaces/global.interface";
import { ArgsRouterFunction, IRouter, RouterNames } from "../interfaces/router.type";

export const getRouter = <N extends RouterNames>(name?: N, ...args: ArgsRouterFunction<N>) => {
  if (!name) return '';
  const router = ((routers[name] as unknown as IRouter)?.router as IRouter['router']) ?? '';
  return typeof router === 'function' ? (router as AnyFunction<string>)(...args) : router;
};

export const getRouterPattern = (pattern: string) =>
  new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$');
