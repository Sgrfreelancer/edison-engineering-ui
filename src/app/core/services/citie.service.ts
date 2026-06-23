import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  private http = inject(HttpClient);
 private citieurl = `${environment.apiUrl}/cities`;
  getCities(): Observable<any> {
    return this.http.get(this.citieurl);
  }
}