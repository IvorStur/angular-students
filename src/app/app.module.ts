import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
// import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { StudentsComponent } from './students/students.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, HelloComponent, LoginComponent, StudentsComponent],
  bootstrap: [AppComponent],
  providers: [GuardGuard],
})
export class AppModule {}
