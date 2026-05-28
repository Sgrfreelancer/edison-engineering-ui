import {
  CanActivateFn
} from '@angular/router';

import {
  inject
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  StorageService
} from '../core/services/storage.service';

import {
  STORAGE_KEYS
} from '../constants/storage.constants';

export const authGuard:
CanActivateFn =
() => {

  const storageService =
    inject(StorageService);

  const router =
    inject(Router);

  const token =
    storageService.get<string>(
      STORAGE_KEYS.TOKEN
    );

  if (!token) {

    router.navigateByUrl(
      '/login'
    );

    return false;
  }

  return true;
};