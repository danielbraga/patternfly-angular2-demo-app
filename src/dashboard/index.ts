// this module is in the midst of transitioning from Angular 1 to Angular 2.
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent} from '@angular/upgrade/static';
import {DashboardStatusComponent} from './dashboardStatus.component';
import {DashboardDetailComponent} from './dashboardDetail.component';

export const DashboardModule = angular.module('DashboardModule', ['ui.bootstrap']);

// DashboardModule.config(($routeProvider) => {
//   $routeProvider
//     .when('/dashboard/status', {template : '<dashboard-status></dashboard-status>'})
//     .when('/dashboard/detail', {template : '<dashboard-detail></dashboard-detail>'});
// });

@NgModule({
  imports: [BrowserModule],
  // components migrated to Angular 2 should be registered here
  declarations: [ DashboardStatusComponent, DashboardDetailComponent],
  entryComponents: [DashboardStatusComponent, DashboardDetailComponent],

})
export class DashboardNgModule {}

DashboardModule.directive('dashboardDetail', <any>downgradeComponent({
  component: DashboardDetailComponent
}));

DashboardModule.directive('dashboardStatus', <any>downgradeComponent({
  component: DashboardStatusComponent
}));
