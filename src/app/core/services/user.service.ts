import {
  Injectable,
  inject
} from '@angular/core';

import {
  StorageService
} from './storage.service';

import {
  STORAGE_KEYS
} from '../../constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private storageService =
    inject(StorageService);

  getUser() {

    return this.storageService.get<any>(
      STORAGE_KEYS.USER
    );
  }

  getRole(): string {

    return this.getUser()?.role
      || '';
  }

  isAdmin(): boolean {

    return this.getRole()
      === 'Admin';
  }
}