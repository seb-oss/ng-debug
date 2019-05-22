import { Injectable, ComponentRef, ApplicationRef, ComponentFactoryResolver, Injector, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { NgDebugService } from './ng-debug.service';
import { Subscription } from 'rxjs';
import { NgDebugMenuComponent } from '../components/ng-debug-menu/ng-debug-menu.component';

@Injectable({
  providedIn: 'root'
})
export class NgDebugMenuService implements OnDestroy {

  private menuRef: ComponentRef<NgDebugMenuComponent>;
  private debugenabledSubscription: Subscription;

  constructor(
    debugService: NgDebugService,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) {

    this.debugenabledSubscription = debugService
      .getFilteredObservable('enabled')
      .subscribe(this.toggleMenu.bind(this));
  }

  ngOnDestroy(): void {
    this.debugenabledSubscription.unsubscribe();
    if (this.menuRef) {
      this.menuRef.destroy();
      this.menuRef = undefined;
    }
  }

  private toggleMenu(enabled: boolean) {
    if (enabled && !this.menuRef) {
      const menuRef = this.componentFactoryResolver
        .resolveComponentFactory(NgDebugMenuComponent)
        .create(this.injector);
      this.appRef.attachView(menuRef.hostView);
      const domElem = (menuRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      menuRef.onDestroy(() => {
        this.appRef.detachView(menuRef.hostView);
      });
      this.menuRef = menuRef;

    } else if (!enabled && this.menuRef) {
      this.menuRef.destroy();
      this.menuRef = undefined;
    }

  }
}
