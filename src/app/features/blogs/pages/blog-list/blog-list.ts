import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  BlogService
} from '../../services/blog.service';

import {
  Blog
} from '../../../../models/blog.model';

@Component({
  selector: 'app-blog-list',
  imports: [
    RouterLink
  ],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss'
})
export class BlogList
implements OnInit {

  private blogService =
    inject(BlogService);

  blogs: Blog[] = [];

  loading = false;

  pageNumber = 1;

  pageSize = 10;

  totalCount = 0;

  ngOnInit(): void {

    this.loadBlogs();
  }

  loadBlogs() {

    this.loading = true;

    this.blogService
      .getBlogs(
        this.pageNumber,
        this.pageSize
      )
      .subscribe({

        next: response => {

          this.blogs =
            response.data.items || [];

          this.totalCount =
            response.data.totalCount || 0;

          this.loading = false;
        },

        error: () => {

          this.loading = false;
        }
      });
  }
}