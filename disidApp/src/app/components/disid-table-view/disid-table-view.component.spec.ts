import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidTableViewComponent } from './disid-table-view.component';

describe('DisidTableViewComponent', () => {
  let component: DisidTableViewComponent;
  let fixture: ComponentFixture<DisidTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
