import { Component, OnInit, ViewEncapsulation, InjectionToken, Inject } from '@angular/core';
import { NgDebugService } from '../../services/ng-debug.service';
import { NgDebugConfigItem, NgDebugConfig } from '../../models/debug-config';

export const DEBUG_CONFIG = new InjectionToken('DEBUG_CONFIG');

@Component({
  selector: 'ng-debug-menu',
  templateUrl: './ng-debug-menu.component.html',
  styleUrls: ['./ng-debug-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgDebugMenuComponent {

  constructor(
    @Inject(DEBUG_CONFIG) public config: NgDebugConfig[],
    private debugService: NgDebugService,
  ) { }

  change(item: NgDebugConfigItem, e: any) {
    switch (item.type) {
      case 'checkbox':
        this.debugService.setItemState(item.id, e.target.checked);
        break;
      default: this.debugService.setItemState(item.id, e.target.value);
    }

  }

  clear() {
    this.debugService.clear();
  }

  get data() {
    return this.debugService.getAllItemStates();
  }
}
