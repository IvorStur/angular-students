import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
})
export class LoginComponent implements OnInit {
  @Output()
  touch = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  password: string;
  formSubmit() {
    if (this.password == 'admin') {
      this.router.navigate(['two', 365]);
    }
  }
}
