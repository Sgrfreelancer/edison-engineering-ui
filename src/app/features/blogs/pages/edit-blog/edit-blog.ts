import {
  Component,
  inject,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  BlogService
} from '../../services/blog.service';

import {
  Blog
} from '../../../../models/blog.model';

import {
  BlogForm
} from '../../components/blog-form/blog-form';

@Component({
  selector: 'app-edit-blog',
  imports: [
    BlogForm
  ],
  templateUrl: './edit-blog.html',
  styleUrl: './edit-blog.scss'
})
export class EditBlog
implements OnInit {

  private route =
    inject(ActivatedRoute);

  private router =
    inject(Router);

  private blogService =
    inject(BlogService);
  
  private cdr =
  inject(ChangeDetectorRef);

  blog: Blog | null = null;

  loading = false;

  slug = '';

  blogId = 0;

  ngOnInit(): void {

    this.slug =
      this.route.snapshot.paramMap.get('slug')
      || '';

    this.loadBlog();
  }

  loadBlog() {

  this.loading = true;

    this.blogService
      .getBlogBySlug(this.slug)
      .subscribe({

        next: response => {

          this.blog =
            response.data;

          this.blogId =
            response.data.id;

          this.loading = false;

          this.cdr.detectChanges();
        },

        error: error => {

          console.error(error);

          this.loading = false;

          this.cdr.detectChanges();
        }
      });
  }

  update(
    request: any
  ) {

    this.loading = true;

    this.blogService
      .updateBlog(
        this.blogId,
        request
      )
      .subscribe({

        next: () => {

          this.router.navigate(
            ['/admin/blogs']
          );
        },

        error: () => {

          this.loading = false;
        }
      });
  }
}