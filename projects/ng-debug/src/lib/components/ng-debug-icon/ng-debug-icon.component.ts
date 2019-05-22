import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-debug',
  templateUrl: './ng-debug-icon.component.html',
  styleUrls: ['./ng-debug-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgDebugIconComponent implements OnInit {

  debugInput: { debugObject: any };

  constructor() { }

  ngOnInit() {
  }

}
