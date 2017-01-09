import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'pf-vertical-navigation'
})
export class PfVerticalNavigation extends UpgradeComponent {
  @Input() brandSrc: string;
  @Input() brandAlt: string;
  @Input() showBadges: string;
  @Input() persistentSecondary: string;
  @Input() pinnableMenus: string;
  @Input() hiddenIcons: string;
  @Input() items: any;
  @Input() navigateCallback: string;
  @Input() itemClickCallback: string;
  @Input() updateActiveItemsOnClick: string;
  @Input() ignoreMobile: string;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('pfVerticalNavigation', elementRef, injector);
  }
}
