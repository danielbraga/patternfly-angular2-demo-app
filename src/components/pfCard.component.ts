import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'pf-card'
})
export class PfCardComponent extends UpgradeComponent {
  @Input() headTitle: string;
  @Input() subTitle: string;
  @Input() showTopBorder: string;
  @Input() showTitlesSeparator: string;
  @Input() footer: string;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('pfCard', elementRef, injector);
  }
}
