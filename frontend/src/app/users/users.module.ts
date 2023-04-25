import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { SharedModule } from '@shared/shared.module';
// components
import { NewUserComponent } from './components/new-user/new-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CardUserComponent } from '@users/components/card-user/card-user.component';
import { RandomUsersComponent } from '@users/components/random-users/random-users.component';

@NgModule({
  declarations: [
    NewUserComponent,
    ListUsersComponent,
    CardUserComponent,
    RandomUsersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class UsersModule { }
