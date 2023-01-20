import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoledetailsComponent } from './poledetails.component';

describe('PoledetailsComponent', () => {
  let component: PoledetailsComponent;
  let fixture: ComponentFixture<PoledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoledetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
