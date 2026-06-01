import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDetails } from './about-us-details';

describe('AboutUsDetails', () => {
  let component: AboutUsDetails;
  let fixture: ComponentFixture<AboutUsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
