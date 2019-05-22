import {
  Directive, ComponentRef,
  TemplateRef, ViewContainerRef, ComponentFactoryResolver, ElementRef, Injector, ApplicationRef, Input, EmbeddedViewRef, OnDestroy, OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgDebugConfigItem } from '../models/debug-config';
import { NgDebugIconComponent } from '../components/ng-debug-icon/ng-debug-icon.component';
import { NgDebugService } from '../services/ng-debug.service';

export const debugDirectiveConfig: NgDebugConfigItem = {
  id: 'debug_info',
  name: 'Debug info',
  type: 'checkbox',
};

@Directive({
  selector: '[ngDebug]'
})
export class NgDebugDirective implements OnDestroy, OnInit {

  private infoIconRef: ComponentRef<NgDebugIconComponent>;
  private debugInput = { debugObject: undefined };
  private debugInfosubscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private element: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef,
    private debugService: NgDebugService,
  ) { }

  @Input() set ngDebug(debugObject: any) {
    this.debugInput.debugObject = debugObject;
  }

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.debugInfosubscription = this.debugService
      .getFilteredObservable(debugDirectiveConfig.id)
      .subscribe(status => {
        if (status && !this.infoIconRef) {
          this.infoIconRef = this.componentFactoryResolver
            .resolveComponentFactory(NgDebugIconComponent).create(this.injector);
          // this.viewContainer.clear();
          this.infoIconRef.instance.debugInput = this.debugInput;
          const domElem = (this.infoIconRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
          if (this.element.nativeElement.nextElementSibling === this.element.nativeElement.nextSibling) {

            this.element.nativeElement.nextElementSibling.appendChild(domElem);
          } else {
            this.element.nativeElement.parentNode.insertBefore(domElem, this.element.nativeElement.nextSibling);
          }
          this.appRef.attachView(this.infoIconRef.hostView);
          this.infoIconRef.changeDetectorRef.detectChanges();
        } else if (this.infoIconRef) {
          this.infoIconRef.destroy();
          this.infoIconRef = undefined;
        }
      });
  }

  ngOnDestroy(): void {
    this.debugInfosubscription.unsubscribe();
    if (this.infoIconRef) {
      this.infoIconRef.destroy();
      this.infoIconRef = undefined;
    }
  }

}
