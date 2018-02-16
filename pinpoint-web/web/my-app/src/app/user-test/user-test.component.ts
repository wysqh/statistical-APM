/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { NbBadgeComponent } from '../../framework/theme/components/badge/badge.component';

@Component({
  selector: 'nb-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: [
    './user-test.component.css'
  ]
})
export class NbUserTestComponent {

  badge = NbBadgeComponent;

  contextMenu = [
    { title: 'Profile', link: 'some/link', icon: 'nb-person' },
    { title: 'Billing', target: '_blank', url: 'http://akveo.com' },
    { title: 'Exit', key: 'exit' },
  ];

  onMenuItemClick(event) {
    console.info(event);
  }
}
