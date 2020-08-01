import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidNavViewComponent } from './disid-nav-view.component';

describe('DisidNavViewComponent', () => {
  let component: DisidNavViewComponent;
  let fixture: ComponentFixture<DisidNavViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidNavViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidNavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
