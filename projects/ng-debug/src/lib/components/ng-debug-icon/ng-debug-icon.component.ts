import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'ng-debug',
  templateUrl: './ng-debug-icon.component.html',
  styleUrls: ['./ng-debug-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgDebugIconComponent {

  debugInput: { debugObject: any };

  constructor() { }

  print() {
    console.log('ng-debug:', this.debugInput);
  }
}
