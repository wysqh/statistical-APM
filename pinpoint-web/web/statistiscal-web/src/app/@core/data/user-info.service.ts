import {Injectable} from '@angular/core';

@Injectable()
export class UserInfoService {
  private userInfo: string;

  constructor() {}

  setUserInfo(userInfo: string) {
    this.userInfo = userInfo;
  }

  getUserInfo(): string {
    return this.userInfo;
  }
}
