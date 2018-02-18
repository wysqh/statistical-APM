import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthJWTToken, NbAuthService } from '../../../../framework/auth';
import {equal} from 'assert';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  // template: `
  //   <nb-layout-header fixed>
  //     <nb-user [name]="user?.name" [picture]="user?.picture"></nb-user>
  //   </nb-layout-header>
  // `,
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user = { };

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService) {
  }

  ngOnInit() {
    // 测试mock 数据
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        // 测试返回数据
        console.log(token);
        if (token.getValue()) {
          console.log(token.getPayload()) // 测试数据
          this.user = token.getPayload();
        }
      })
  }

  menuClick(event): void {
    const name = event['title'];
    if (name === this.userMenu[0]['title']) {
      console.log('UnImplemented Method');
    } else {
      this.logout()
    }
  }

  /*
      用户从站点注销
   */
  logout(): void {
    console.log('log out executed');
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
