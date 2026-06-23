import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../../blogs/services/blog.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss'
})
export class BlogDetails {

  blog: any = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      console.log(slug, 'SSSSSSSSSSSSSSSSS');

      if (slug) {
        this.getBlogBySlugId(slug);
      }
    });
  }

  getBlogBySlugId(slug: string): void {
    this.blogService.getBlogBySlug(slug).subscribe({
      next: (response: any) => {
        console.log(response.data);

        this.blog = response.data;
        this.cdr.detectChanges();
        console.log(this.blog);
      },
      error: console.error
    });
  }
}