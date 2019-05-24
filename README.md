# @sebgroup/ng-debug

This is a thin debug menu library for Angular applications and libraries.
It provides simple way to add various hidden debug/developer options and a menu to enable them.

## How to install

```bash
npm i --save @sebgroup/ng-debug
```

## How to use

To enable debug menu in your application, simply import module in AppModule:

```ts
@NgModule({
  //...
  imports: [
    BrowserModule,
    NgDebugModule.forRoot(),
  ],
  //...
})
```

Then, by default it can be opened in 3 ways:

* press keys `dbg` simultaniously (*`keyword` can be changed*)
* in developer tools console, type `ngdbg()` (*'ng' + `keyword`*)
* opening page with url parameter ending with `keyword`: `http://localhost:4200/#dbg`

### Built-in `*ngDebug` directive

Library includes `*ngDebug` directive, 
which can be toggled with `Debug Info` menu item.
It alows displaying info icons with tooltips containing any kind of object.

```html
<div *ngDebug="user" >
  {{user.firstName}} {{user.lastName}}
</div>
```

### Add your own debug functionality

To add debug functionality to menu, you need to provide `NgDebugConfig` object in your app or library:

```ts
import { NgDebugConfig, DEBUG_CONFIG } from '@sebgroup/ng-debug';

const appDebugConfig: NgDebugConfig = {
  name: 'ng-debug demo app',
  items: [
    { id: 'yodaMode', name: 'Yoda Mode', type: 'checkbox' },
    { id: 'color', name: 'Color', type: 'text' },
  ]
};

@NgModule({
  providers: [{ provide: DEBUG_CONFIG, multi: true, useValue: appDebugConfig }],
  //...
})
```

Then, to receive value changes of debug item, subscribe to them:

```ts
this.debugService.getFilteredObservable('color')
  .subscribe((v) => this.color = v );
```

## Authors

SEB, ISD Channels, Branch Channels team.
 