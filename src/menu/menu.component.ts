import {Component} from '@angular/core';

@Component({
  selector: 'pfdemo-menu',
  template: `
     <div class="layout-pf layout-pf-fixed">
      <pf-vertical-navigation [items]="navigationItems" [brandAlt]="'PATTERNFLY - ANGULAR2'" [showBadges]="'true'" [pinnableMenus]="'true'" [updateActiveItemsOnClick]="'true'" >
        <div>
          <ul class="nav navbar-nav">
            <li><a href="#" target="_blank" class="nav-item-iconic nav-item-iconic-new-window"><span title="Launch" class="fa fa-external-link"></span></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right navbar-iconic">
            <li class="dropdown">
              <a class="nav-item-iconic" id="notifications">
                <span title="Notifications" class="fa fa-bell"></span>
              </a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle nav-item-iconic" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span title="Help" class="fa pficon-help"></span>
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Help</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle nav-item-iconic" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span title="Username" class="fa pficon-user"></span>
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="#">Preferences</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="centralPanel" class="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-tertiary example-page-container">
          <div ui-view></div>
        </div>
      </pf-vertical-navigation>
    </div>
  `
})
export class MenuComponent {

  public navigationItems: any = [
    {
      title: 'Site Status',
      iconClass: 'fa fa-dashboard',
      href: '#/dashboard/status'
    },
    {
      title: 'Detail',
      iconClass : 'fa fa-shield',
      href: '#/dashboard/detail',
      badges: [
        {
          count: 1283,
          tooltip: 'Total number of items'
        }
      ]
    },
    {
      title: 'Ipsum',
      iconClass: 'fa fa-space-shuttle',
      children: [
        {
          title: 'Intellegam',
          children: [
            {
              title: 'Recteque',
              href: '#',
              badges: [
                {
                  count: 6,
                  tooltip: 'Total number of error items',
                  badgeClass: 'example-error-background'
                }
              ]
            },
            {
              title: 'Suavitate',
              href: '#',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of items'
                }
              ]
            },
            {
              title: 'Vituperatoribus',
              href: '#',
              badges: [
                {
                  count: 18,
                  tooltip: 'Total number of warning items',
                  badgeClass: 'example-warning-background'
                }
              ]
            }
          ]
        },
        {
          title: 'Copiosae',
          children: [
            {
              title: 'Exerci',
              href: '#',
              badges: [
                {
                  count: 2,
                  tooltip: 'Total number of error items',
                  iconClass: 'pficon pficon-error-circle-o'
                },
                {
                  count: 6,
                  tooltip: 'Total number warning error items',
                  iconClass: 'pficon pficon-warning-triangle-o'
                }
              ]
            },
            {
              title: 'Quaeque',
              href: '#',
              badges: [
                {
                  count: 0,
                  tooltip: 'Total number of error items',
                  iconClass: 'pficon pficon-error-circle-o'
                },
                {
                  count: 4,
                  tooltip: 'Total number warning error items',
                  iconClass: 'pficon pficon-warning-triangle-o'
                }
              ]
            },
            {
              title: 'Utroque',
              href: '#',
              badges: [
                {
                  count: 1,
                  tooltip: 'Total number of error items',
                  iconClass: 'pficon pficon-error-circle-o'
                },
                {
                  count: 2,
                  tooltip: 'Total number warning error items',
                  iconClass: 'pficon pficon-warning-triangle-o'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
