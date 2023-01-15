import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    MainComponent,
    DetailsComponent,
    CreateComponent
  ],
  bootstrap: [AppComponent],
  providers: [GuardGuard],
})
export class AppModule {}
