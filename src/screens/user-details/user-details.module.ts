import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import { UserInfo } from '../../component/userInfo/userInfo.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailsPageRoutingModule
  ],
  entryComponents: [UserInfo],
  declarations: [UserDetailsPage, UserInfo]
})
export class UserDetailsPageModule {}
