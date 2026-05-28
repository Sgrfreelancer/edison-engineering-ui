import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  Blog
} from '../../../../models/blog.model';

@Component({
  selector: 'app-blog-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './blog-form.html',
  styleUrl: './blog-form.scss'
})
export class BlogForm
implements OnChanges {

  private fb =
    inject(FormBuilder);

  @Input()
  blog: Blog | null = null;

  @Input()
  loading = false;

  @Output()
  formSubmit =
    new EventEmitter<any>();

  form = this.fb.group({

    title: [
      '',
      Validators.required
    ],

    slug: [
      '',
      Validators.required
    ],

    content: [
      '',
      Validators.required
    ],

    metaTitle: [''],

    metaDescription: [''],

    imageUrl: ['']
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['blog']
      && this.blog
    ) {

      this.form.patchValue({

        title: this.blog.title,

        slug: this.blog.slug,

        content: this.blog.content,

        metaTitle:
          this.blog.metaTitle,

        metaDescription:
          this.blog.metaDescription,

        imageUrl:
          this.blog.imageUrl
      });
    }
  }

  submit() {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;
    }

    this.formSubmit.emit(
      this.form.value
    );
  }
}