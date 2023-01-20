import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleDevisionComponent } from './pole-devision.component';

describe('PoleDevisionComponent', () => {
  let component: PoleDevisionComponent;
  let fixture: ComponentFixture<PoleDevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoleDevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleDevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
