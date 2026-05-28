import {
  Component,
  inject
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  BlogForm
} from '../../components/blog-form/blog-form';

import {
  BlogService
} from '../../services/blog.service';

@Component({
  selector: 'app-create-blog',
  imports: [
    BlogForm
  ],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.scss'
})
export class CreateBlog {

  private blogService =
    inject(BlogService);

  private router =
    inject(Router);

  loading = false;

  save(
    request: any
  ) {

    this.loading = true;

    this.blogService
      .createBlog(request)
      .subscribe({

        next: () => {
          this.router.navigate(
            ['/admin/blogs'],
            {
              replaceUrl: true
            }
          );
        },

        complete: () => {

          this.loading = false;
        }
      });
  }
}