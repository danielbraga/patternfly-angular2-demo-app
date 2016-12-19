/**
 * this file defines the root module of the Angular 2 of the application.
 */

// import angular2
import {NgModule, Component} from '@angular/core';
import {RouterModule, UrlHandlingStrategy } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

// import app modules
import {MenuNgModule} from './menu';
import {DashboardNgModule} from './dashboard/index';

// this URL handling strategy is custom and application-specific.
// using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: any) { return url.toString().startsWith('/settings'); }
  extract(url: any) { return url; }
  merge(url: any, whole: any) { return url; }
}

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div ui-view></div>
  `,
})
export class RootComponent {}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,

    // import all modules
    MenuNgModule,
    DashboardNgModule,

    // we don't need to provide any routes.
    // the router will collect all routes from all the registerd modules.
    RouterModule.forRoot([], {
      useHash: true,
      initialNavigation: false // we went to trigger navigation outselves after ng1 is done bootstrapping
    }),
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],

  bootstrap: [RootComponent],
  declarations: [RootComponent]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule) {}
}
