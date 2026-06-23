import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListpage } from './blog-listpage';

describe('BlogListpage', () => {
  let component: BlogListpage;
  let fixture: ComponentFixture<BlogListpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogListpage],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogListpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
