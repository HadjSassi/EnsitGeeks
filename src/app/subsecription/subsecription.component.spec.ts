import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsecriptionComponent } from './subsecription.component';

describe('SubsecriptionComponent', () => {
  let component: SubsecriptionComponent;
  let fixture: ComponentFixture<SubsecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsecriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
