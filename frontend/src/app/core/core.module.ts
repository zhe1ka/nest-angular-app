import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routes
import { RoutesModule } from '@routes/routes.module';
// components
import { AppComponent } from '../app.component';
import { PublicComponent } from '@routes/public/public.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    RoutesModule,
    CommonModule,
    SharedModule,
  ]
})
export class CoreModule { }
