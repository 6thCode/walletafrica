import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
})
export class ListComp {
  @Input() cardType: string;
  @Input() priceTag: string;
  @Input() timeLine: string;

    constructor() {}
}