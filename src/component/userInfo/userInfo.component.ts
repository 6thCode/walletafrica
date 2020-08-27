import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-userInfo',
    templateUrl: 'userInfo.component.html',
    styleUrls: ['userInfo.component.scss'],
})
export class UserInfo {
  @Input() cardName: string;
  @Input() cardTitle: string;
  @Input() copy: string;

    constructor() {}
}