import {
  Component,
  inject
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  UserService
} from '../../core/services/user.service';

import {
  StorageService
} from '../../core/services/storage.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  private userService =
    inject(UserService);

  private storageService =
    inject(StorageService);

  private router =
    inject(Router);

  user =
    this.userService.getUser();

  logout() {

    this.storageService.clear();

    this.router.navigateByUrl(
      '/login'
    );
  }
}