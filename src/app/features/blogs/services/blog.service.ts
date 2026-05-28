import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  environment
} from '../../../../environments/environment';

import {
  Blog
} from '../../../models/blog.model';

import {
  ApiResponse
} from '../../../models/api-response.model';

import {
  PagedResponse
} from '../../../models/paged-response.model';

import {
  BlogRequest
} from '../../../models/blog-request.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private http =
    inject(HttpClient);

  private apiUrl =
    `${environment.apiUrl}/blogs`;

  getBlogs(
    pageNumber = 1,
    pageSize = 10
  ): Observable<
    ApiResponse<
      PagedResponse<Blog>
    >
  > {

    return this.http.get<
      ApiResponse<
        PagedResponse<Blog>
      >
    >(
      `${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  createBlog(request: BlogRequest) {

    return this.http.post<
        ApiResponse<Blog>
    >(
        this.apiUrl,
        request
    );
    }

    getBlogBySlug(
    slug: string
    ) {

    return this.http.get<
        ApiResponse<Blog>
    >(
        `${this.apiUrl}/${slug}`
    );
    }

    updateBlog(
    id: number,
    request: BlogRequest
    ) {

    return this.http.put<
        ApiResponse<Blog>
    >(
        `${this.apiUrl}/${id}`,
        request
    );
    }

    deleteBlog(
    id: number
    ) {

    return this.http.delete(
        `${this.apiUrl}/${id}`
    );
    }
}