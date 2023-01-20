import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndInscriptionComponent } from './end-inscription.component';

describe('EndInscriptionComponent', () => {
  let component: EndInscriptionComponent;
  let fixture: ComponentFixture<EndInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
