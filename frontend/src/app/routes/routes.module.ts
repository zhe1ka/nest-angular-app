import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { PublicComponent } from './public/public.component';
import { NewUserComponent } from '@users/components/new-user/new-user.component';
import { ListUsersComponent } from '@users/components/list-users/list-users.component';
import { RandomUsersComponent } from '@users/components/random-users/random-users.component';

const publicRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/new-user',
  },
  {
    path: 'new-user',
    component: NewUserComponent,
  },
  {
    path: 'random-users',
    component: RandomUsersComponent,
  },
  {
    path: 'users',
    component: ListUsersComponent,
  },
];

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: publicRoutes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class RoutesModule { }
