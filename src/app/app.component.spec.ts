import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgDebugModule } from '@sebgroup/ng-debug';

describe('AppComponent', () => {
  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        NgDebugModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(done);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
