import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  touch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  password:string;
  formSubmit() {
    if (this.password == "admin") {
      this.touch.emit();
    }
    
  }

}