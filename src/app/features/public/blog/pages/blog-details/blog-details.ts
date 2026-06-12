import { Component } from '@angular/core';
import { BLOG_DATA } from '../../data/blog.data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  blogData = BLOG_DATA;
}
