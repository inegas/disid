import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidModalDeleteEmployedViewComponent } from './disid-modal-delete-employed-view.component';

describe('DisidModalDeleteEmployedViewComponent', () => {
  let component: DisidModalDeleteEmployedViewComponent;
  let fixture: ComponentFixture<DisidModalDeleteEmployedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidModalDeleteEmployedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidModalDeleteEmployedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
