import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent} from '@angular/upgrade/static';
import {PfVerticalNavigation} from '../components/pfVerticalNavigation.component';
import {DashboardStatusComponent} from '../dashboard/dashboardStatus.component';
import {DashboardModule} from '../dashboard/index';

export const MenuModule = angular.module('MenuModule', ['ui.router', 'patternfly.navigation', DashboardModule.name]);

MenuModule.config(($stateProvider, $urlRouterProvider) => {
  //$routeProvider.when('/', {template : '<pfdemo-menu></pfdemo-menu>'});
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider.state('menu', {
    url: '/dashboard',
    template: '<pfdemo-menu></pfdemo-menu>',
  })
  .state('dashboardstatus', {
    url: '/status',
    template: '<dashboard-status></dashboard-status>'
  })
  .state('dashboarddetail', {
    url: '/detail',
    template: '<dashboard-detail></dashboard-detail>'
  })
});
//
// MenuModule.config(($routeProvider) => {
//   $routeProvider.when('/', {template : '<pfdemo-menu></pfdemo-menu>'});
// });

@NgModule({
  imports: [BrowserModule],
  declarations: [MenuComponent, PfVerticalNavigation],
  entryComponents: [MenuComponent],
})
export class MenuNgModule {
}

// components migrated to angular 2 should be downgraded here
MenuModule.directive('pfdemoMenu', <any>downgradeComponent({
  component: MenuComponent
}));
