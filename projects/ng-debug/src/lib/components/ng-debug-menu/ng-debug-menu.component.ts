import { Component, ViewEncapsulation, InjectionToken, Inject, OnInit } from '@angular/core';
import { NgDebugService } from '../../services/ng-debug.service';
import { NgDebugConfigItem, NgDebugConfig } from '../../models/debug-config';
import { Subscription } from 'rxjs';

export const DEBUG_CONFIG = new InjectionToken('DEBUG_CONFIG');

@Component({
  selector: 'ng-debug-menu',
  templateUrl: './ng-debug-menu.component.html',
  styleUrls: ['./ng-debug-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgDebugMenuComponent implements OnInit {

  values: { [key: string]: any };


  constructor(
    @Inject(DEBUG_CONFIG) public config: NgDebugConfig[],
    private debugService: NgDebugService,
  ) {
  }

  ngOnInit(): void {
    this.values = {};
    this.config.forEach(config => {
      config.items.forEach(item => {
        this.values[item.id] = this.debugService.getItemState(item.id);
        if (this.values[item.id] == null) {
          this.values[item.id] = '';
        }
      });
    });
  }


  updateItem(item: NgDebugConfigItem, e: any) {
    switch (item.type) {
      case 'checkbox':
        this.debugService.setItemState(item.id, e.target.checked);
        break;
      default: this.debugService.setItemState(item.id, e.target.value);
    }
  }

  close() {
    this.debugService.setItemState('enabled', undefined);
  }

  clear() {
    this.debugService.clear();
  }


}
