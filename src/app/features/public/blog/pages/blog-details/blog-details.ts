import { Component, OnInit } from '@angular/core';
import { BLOG_DATA } from '../../data/blog.data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../../../blogs/services/blog.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-blog-details',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss',
})
export class BlogDetails {
  constructor(
    private blogService: BlogService,
    private cdr: ChangeDetectorRef
  ) { }
  blogData = BLOG_DATA;

  blogs: any[] = [];

  ngOnInit(): void {

    this.loadBlogs();

  }

  loadBlogs(): void {

    this.blogService.getBlogs().subscribe({

      next: (response: any) => {

        console.log('Response', response);

        const array =
          response?.data?.items ??
          response?.data?.blogs ??
          response?.data ??
          response;

        console.log('Array?', Array.isArray(array), array);

        this.blogs = Array.isArray(array) ? array : [];
this.cdr.detectChanges();
      },

      error: console.error

    });

  }


}
