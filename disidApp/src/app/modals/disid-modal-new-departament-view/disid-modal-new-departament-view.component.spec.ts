import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidModalNewDepartamentViewComponent } from './disid-modal-new-departament-view.component';

describe('DisidModalNewEmployedViewComponent', () => {
  let component: DisidModalNewDepartamentViewComponent;
  let fixture: ComponentFixture<DisidModalNewDepartamentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidModalNewDepartamentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidModalNewDepartamentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
