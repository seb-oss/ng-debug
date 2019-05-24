import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgDebugIconComponent } from './ng-debug-icon.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NgDebugIconComponent', () => {
  let component: NgDebugIconComponent;
  let fixture: ComponentFixture<NgDebugIconComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [NgDebugIconComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDebugIconComponent);
    component = fixture.componentInstance;
    component.debugInput = { debugObject: 'test' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
