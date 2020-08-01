import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisidCreateEmployedViewComponent } from './disid-employed-view.component';

describe('DisidCreateEmployedViewComponent', () => {
  let component: DisidCreateEmployedViewComponent;
  let fixture: ComponentFixture<DisidCreateEmployedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisidCreateEmployedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisidCreateEmployedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
