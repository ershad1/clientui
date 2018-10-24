import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './container/user/user.component';
import { UserListComponent } from './container/user-list/user-list.component';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule
  ],
  declarations: [UserComponent, UserListComponent]
})
export class UserModule { }
