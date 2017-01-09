import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'pf-aggregate-status-card'
})
export class PfAggregateStatusCard extends UpgradeComponent {
  @Input() status: string;
  @Input() showTopBorder: string;
  @Input() altLayout: string;
  @Input() layout: string;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('pfAggregateStatusCard', elementRef, injector);
  }
}
