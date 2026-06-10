import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCluture } from './explore-cluture';

describe('ExploreCluture', () => {
  let component: ExploreCluture;
  let fixture: ComponentFixture<ExploreCluture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCluture],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreCluture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
