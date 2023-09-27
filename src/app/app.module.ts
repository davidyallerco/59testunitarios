import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
