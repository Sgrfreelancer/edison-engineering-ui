import {
  Injectable,
  inject,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private platformId =
    inject(PLATFORM_ID);

  private get isBrowser(): boolean {

    return isPlatformBrowser(
      this.platformId
    );
  }

  set(
    key: string,
    value: any
  ) {

    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }


  get<T>(
  key: string
): T | null {

  if (!this.isBrowser) {
    return null;
  }

  const data =
    localStorage.getItem(key);

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch {
    return data as T;
  }
}

  remove(key: string) {

    if (!this.isBrowser) {
      return;
    }

    localStorage.removeItem(key);
  }

  clear() {

    if (!this.isBrowser) {
      return;
    }

    localStorage.clear();
  }
}