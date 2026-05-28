import {
  Component,
  inject
} from '@angular/core';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import {
  MENU_ITEMS
} from '../../constants/menu.constants';

import {
  UserService
} from '../../core/services/user.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  private userService =
    inject(UserService);

  private router =
    inject(Router);

  get menuItems() {

    return MENU_ITEMS.filter(
      x =>
        x.roles.includes(
          this.userService.getRole()
        )
    );
  }

  navigate(route: string) {

    this.router.navigateByUrl(route);
  }

}