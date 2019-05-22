import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  exampleObject = {
    awesome: true,
    lib: 'yes',
    debug: 'nottrue'
  };

  exampleArray = [
    this.exampleObject,
    this.exampleObject,
    this.exampleObject,
  ]

  toggleMenu() {
    // tslint:disable-next-line: no-string-literal
    window['ngdbg'].apply();
  }
}
