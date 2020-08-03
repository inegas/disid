import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidDepartamentViewComponent } from './disid-departament-view.component';

describe('DisidDepartamentViewComponent', () => {
  let component: DisidDepartamentViewComponent;
  let fixture: ComponentFixture<DisidDepartamentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidDepartamentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidDepartamentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
