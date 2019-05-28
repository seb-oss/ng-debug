import { Injectable, InjectionToken, OnDestroy, NgZone, Optional, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

const storageKey = 'ng-debug-data';

export const keyWordToken = new InjectionToken('keyWord');

@Injectable({
  providedIn: 'root'
})
export class NgDebugService implements OnDestroy {

  private debugStatus: Subject<{ id: string, value: any }>;
  private debugData: { [key: string]: any };

  private keyDownHandler: any;
  private keyUpHandler: any;

  private pressedKeys: string[];

  constructor(
    private ngZone: NgZone,
    @Optional() @Inject(keyWordToken) private keyWord: string,
  ) {
    this.keyWord = keyWord || 'dbg';
    this.debugData = JSON.parse(window.sessionStorage.getItem(storageKey) || '{}');
    if (window.location.hash.slice(-this.keyWord.length) === this.keyWord) {
      this.debugData.enabled = true;
    }
    this.debugStatus = new Subject();
    this.keyDownHandler = this.onKeyDown.bind(this);
    this.keyUpHandler = this.onKeyUp.bind(this);
    this.pressedKeys = [];
    ngZone.runOutsideAngular(() => {
      document.addEventListener('keydown', this.keyDownHandler);
      document.addEventListener('keyup', this.keyUpHandler);
    });

    window['ng' + this.keyWord] = () => {
      this.ngZone.run(() => {
        this.toggleEnabled();
      });
    };
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.keyDownHandler);
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  setItemState(id: string, value: any) {
    this.debugData[id] = value;
    window.sessionStorage.setItem(storageKey, JSON.stringify(this.debugData));
    this.debugStatus.next({ id, value });
  }

  getItemState(id: string) {
    return this.debugData[id];
  }

  getFilteredObservable(id: string) {
    const observable = this.debugStatus.pipe(
      startWith({ id, value: this.debugData[id] }),
      filter(v => !!v && v.id === id),
      map(v => v.value),
    );
    return observable;
  }

  clear() {
    const debugData = this.debugData;
    this.debugData = {};
    window.sessionStorage.removeItem(storageKey);
    const value = undefined;
    Object.keys(debugData).forEach(id => this.debugStatus.next({ id, value }));
  }

  private onKeyDown(e) {
    if (this.keyWord.indexOf(e.key) > -1 && this.pressedKeys.indexOf(e.key) === -1) {
      this.pressedKeys.push(e.key);
      if (this.pressedKeys.length === this.keyWord.length) {
        this.ngZone.run(() => {
          this.toggleEnabled();
        });
      }
    }
  }

  private onKeyUp() {
    this.pressedKeys.length = 0;
  }

  private toggleEnabled() {
    this.setItemState('enabled', !this.debugData.enabled);
  }

}
