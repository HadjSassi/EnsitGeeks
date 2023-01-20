import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersInEventComponent } from './members-in-event.component';

describe('MembersInEventComponent', () => {
  let component: MembersInEventComponent;
  let fixture: ComponentFixture<MembersInEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersInEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersInEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
