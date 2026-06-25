import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
 private http = inject(HttpClient);
 private getblogurl = `${environment.apiUrl}/Blogs`;


  getBlogs(): Observable<any> {
    return this.http.get<any>(this.getblogurl);
  }
  getBlogsBySlug(slugId: string): Observable<any> {
    return this.http.get<any>( `${this.getblogurl}/${slugId}`);
  
  }
}