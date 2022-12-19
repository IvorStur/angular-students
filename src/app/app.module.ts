import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
