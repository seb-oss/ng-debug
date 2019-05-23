import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, appDebugConfig } from './app.component';
import { NgDebugModule, DEBUG_CONFIG } from '@sebgroup/ng-debug';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDebugModule.forRoot(),
  ],
  providers: [
    {
      provide: DEBUG_CONFIG,
      multi: true,
      useValue: appDebugConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
