import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thestreatery } from './thestreatery';

describe('Thestreatery', () => {
  let component: Thestreatery;
  let fixture: ComponentFixture<Thestreatery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thestreatery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thestreatery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
