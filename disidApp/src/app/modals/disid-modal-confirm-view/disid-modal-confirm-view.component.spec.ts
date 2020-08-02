import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidModalConfirmViewComponent } from './disid-modal-confirm-view.component';

describe('DisidModalConfirmViewComponent', () => {
  let component: DisidModalConfirmViewComponent;
  let fixture: ComponentFixture<DisidModalConfirmViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidModalConfirmViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidModalConfirmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
