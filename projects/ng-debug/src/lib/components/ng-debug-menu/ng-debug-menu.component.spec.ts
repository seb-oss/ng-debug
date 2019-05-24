import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgDebugMenuComponent, DEBUG_CONFIG } from './ng-debug-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgDebugConfig } from '@sebgroup/ng-debug';

describe('NgDebugMenuComponent', () => {
  let component: NgDebugMenuComponent;
  let fixture: ComponentFixture<NgDebugMenuComponent>;
  const appDebugConfig: NgDebugConfig = {
    name: 'test',
    items: [
      {
        id: 'yodaMode',
        name: 'Yoda Mode',
        type: 'checkbox',
      }
    ]
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [NgDebugMenuComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: DEBUG_CONFIG, useValue: [appDebugConfig] }
      ]
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDebugMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
