import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// modules
import { CoreModule } from '@core/core.module';
import { UsersModule } from '@users/users.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [],
})
export class AppModule { }
