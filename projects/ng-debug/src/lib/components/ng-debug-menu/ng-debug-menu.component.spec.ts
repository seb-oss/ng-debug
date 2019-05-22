import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDebugMenuComponent } from './ng-debug-menu.component';

describe('NgDebugMenuComponent', () => {
  let component: NgDebugMenuComponent;
  let fixture: ComponentFixture<NgDebugMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDebugMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDebugMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
