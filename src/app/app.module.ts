import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDebugModule } from '@sebgroup/ng-debug';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDebugModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
