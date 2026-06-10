import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDetails } from './contact-us-details';

describe('ContactUsDetails', () => {
  let component: ContactUsDetails;
  let fixture: ComponentFixture<ContactUsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
