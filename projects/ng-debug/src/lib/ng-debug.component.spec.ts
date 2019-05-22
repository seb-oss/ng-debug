import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDebugComponent } from './ng-debug.component';

describe('NgDebugComponent', () => {
  let component: NgDebugComponent;
  let fixture: ComponentFixture<NgDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
