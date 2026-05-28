import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  isAuthenticated = signal(false);

  user = signal<any>(null);

}