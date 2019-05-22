import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDebugIconComponent } from './ng-debug-icon.component';

describe('NgDebugIconComponent', () => {
  let component: NgDebugIconComponent;
  let fixture: ComponentFixture<NgDebugIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDebugIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDebugIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
