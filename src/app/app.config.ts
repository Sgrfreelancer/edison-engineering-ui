import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import {
  provideHttpClient,
  withFetch,
  withInterceptors
} from '@angular/common/http';

import {
  routes
} from './app.routes';

import {
  authInterceptor
} from './interceptors/auth-interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig:
ApplicationConfig = {

  providers: [
 provideAnimations(),
     provideToastr(),
    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideClientHydration(
      withEventReplay()
    ),

    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor
      ])
    )
  ]
};