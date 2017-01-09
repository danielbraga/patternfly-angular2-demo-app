/**
 * This file defines the root module of the Angular 1 of the application.
 */

// import angular1
// import * as angular from 'angular'
//import 'angular-route';
//import 'ui-router';

// import app modules
import {MenuModule} from './menu';
import {DashboardModule} from './dashboard/index';

export const Ng1AppModule = angular.module('Ng1AppModule', ['ui.router', 'ui.bootstrap', MenuModule.name, DashboardModule.name]);
//export const Ng1AppModule = angular.module('Ng1AppModule', ['ngRoute', 'ui.bootstrap', MenuModule.name, DashboardModule.name]);
