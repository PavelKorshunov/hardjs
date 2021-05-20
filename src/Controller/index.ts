import { HomeController as HomeControllerImpl } from './HomeController';
import { DatabaseController as DatabaseControllerImpl } from './DatabaseController';

export const HomeController = new HomeControllerImpl();
export const DatabaseController = new DatabaseControllerImpl();
