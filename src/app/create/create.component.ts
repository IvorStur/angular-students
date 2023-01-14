import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  student: any;

  constructor() {}

  ngOnInit() {}

  onSubmit(student: any) {
    console.log('e');
    console.log(student.name);
    console.log(student);
  }
}
