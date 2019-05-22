import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgDebugDirective, debugDirectiveConfig } from './directives/ng-debug.directive';
import { NgDebugIconComponent } from './components/ng-debug-icon/ng-debug-icon.component';
import { NgDebugMenuComponent, DEBUG_CONFIG } from './components/ng-debug-menu/ng-debug-menu.component';
import { NgDebugService } from './services/ng-debug.service';
import { NgDebugMenuService } from './services/ng-debug-menu.service';
import { DebugConfig } from './models/debug-config';
import { CommonModule } from '@angular/common';

const debugConfig: DebugConfig = {
  name: 'Default',
  items: [
    debugDirectiveConfig,
  ]
};

@NgModule({
  declarations: [
    NgDebugDirective,
    NgDebugIconComponent,
    NgDebugMenuComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgDebugDirective,
  ],
  entryComponents: [
    NgDebugIconComponent,
    NgDebugMenuComponent,
  ],
})
export class NgDebugModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgDebugModule,
      providers: [
        NgDebugService,
        NgDebugMenuService,
        {
          provide: DEBUG_CONFIG,
          useValue: debugConfig,
          multi: true,
        }
      ]
    };
  }

  constructor(
    menuService: NgDebugMenuService
  ) { }
}
