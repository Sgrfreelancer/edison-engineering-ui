import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';

import {
  inject
} from '@angular/core';

import {
  catchError,
  switchMap,
  throwError
} from 'rxjs';

import {
  Router
} from '@angular/router';

import {
  StorageService
} from '../core/services/storage.service';

import {
  STORAGE_KEYS
} from '../constants/storage.constants';

import {
  AuthService
} from '../core/services/auth.service';

export const authInterceptor:
HttpInterceptorFn =
(req, next) => {

  const storageService =
    inject(StorageService);

  const router =
    inject(Router);

  const authService =
    inject(AuthService);

  const token =
    storageService.get<string>(
      STORAGE_KEYS.TOKEN
    );

  let clonedRequest = req;

  if (token) {

    clonedRequest =
      req.clone({
        setHeaders: {
          Authorization:
            `Bearer ${token}`
        }
      });
  }

  return next(clonedRequest)
    .pipe(

      catchError(
        (
          error:
          HttpErrorResponse
        ) => {

          if (
            error.status !== 401
          ) {

            return throwError(
              () => error
            );
          }

          const refreshToken =
            storageService.get<string>(
              STORAGE_KEYS.REFRESH_TOKEN
            );

          if (!refreshToken) {

            storageService.clear();

            router.navigateByUrl(
              '/login'
            );

            return throwError(
              () => error
            );
          }

          return authService
            .refreshToken(
              refreshToken
            )
            .pipe(

              switchMap(
                (response) => {

                  const data =
                    response.data;

                  storageService.set(
                    STORAGE_KEYS.TOKEN,
                    data.token
                  );

                  storageService.set(
                    STORAGE_KEYS.REFRESH_TOKEN,
                    data.refreshToken
                  );

                  const retryRequest =
                    req.clone({
                      setHeaders: {
                        Authorization:
                          `Bearer ${data.token}`
                      }
                    });

                  return next(
                    retryRequest
                  );
                }
              ),

              catchError(
                refreshError => {

                  storageService.clear();

                  router.navigateByUrl(
                    '/login'
                  );

                  return throwError(
                    () => refreshError
                  );
                }
              )
            );
        }
      )
    );
};