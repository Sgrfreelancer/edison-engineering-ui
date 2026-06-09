import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCalculator } from './solar-calculator';

describe('SolarCalculator', () => {
  let component: SolarCalculator;
  let fixture: ComponentFixture<SolarCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(SolarCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
