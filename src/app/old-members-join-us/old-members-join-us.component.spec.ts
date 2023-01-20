import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMembersJoinUsComponent } from './old-members-join-us.component';

describe('OldMembersJoinUsComponent', () => {
  let component: OldMembersJoinUsComponent;
  let fixture: ComponentFixture<OldMembersJoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldMembersJoinUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldMembersJoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
