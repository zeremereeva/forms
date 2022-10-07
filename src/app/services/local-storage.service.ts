import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Record<string, unknown>) {}

  setItem(key: string, params: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, params);
    }
  }

  getItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
     return localStorage.getItem(key);
    }
    return '';
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.removeItem(key);
    }
  }

  clear() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.clear();
    }
  }
}
