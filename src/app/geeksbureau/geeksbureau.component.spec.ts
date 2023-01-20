import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeeksbureauComponent } from './geeksbureau.component';

describe('GeeksbureauComponent', () => {
  let component: GeeksbureauComponent;
  let fixture: ComponentFixture<GeeksbureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeeksbureauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeeksbureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
