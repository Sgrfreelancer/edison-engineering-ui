import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { AuthService }
  from '../../../core/services/auth.service';

import { StorageService }
  from '../../../core/services/storage.service';

import {
  STORAGE_KEYS
} from '../../../constants/storage.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private fb = inject(FormBuilder);

  private authService =
    inject(AuthService);

  private storageService =
    inject(StorageService);

  private router =
    inject(Router);

  loading = false;

  errorMessage = '';

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',
      [
        Validators.required
      ]
    ]
  });

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.login(
      this.loginForm.value as any
    )
    .subscribe({
      next: (response) => {

        const data = response.data;

        this.storageService.set(
          STORAGE_KEYS.TOKEN,
          data.token
        );

        this.storageService.set(
          STORAGE_KEYS.REFRESH_TOKEN,
          data.refreshToken
        );

        this.storageService.set(
          STORAGE_KEYS.USER,
          data
        );

        this.router.navigateByUrl('/admin/dashboard');
      },

      error: (error) => {

        this.errorMessage =
          error?.error?.message
          || 'Login failed';

        this.loading = false;
      },

      complete: () => {
        this.loading = false;
      }
    });
  }
}