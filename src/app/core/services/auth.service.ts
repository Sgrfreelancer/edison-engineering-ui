import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {LoginRequest, LoginResponse} from '../../models/auth.model';
import { ApiResponse } from '../../models/api-response.model';
import {RefreshTokenRequest} from '../../models/refresh-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl =
    `${environment.apiUrl}/auth`;

  login(
    request: LoginRequest
  ): Observable<ApiResponse<LoginResponse>> {

    return this.http.post<
      ApiResponse<LoginResponse>
    >(
      `${this.apiUrl}/login`,
      request
    );
  }
  refreshToken(refreshToken: string) {
    const request:
      RefreshTokenRequest = {refreshToken};

    return this.http.post<ApiResponse<LoginResponse>>(
      `${this.apiUrl}/refresh-token`,
      request
    );
  }
}