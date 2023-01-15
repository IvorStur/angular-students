import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  lastName: string;
  class: string;
  age: number;
  birthDate: Date;
  department: string;
  gender: string;
  gradeAverage: number;
  disable: string;
  awards: string[];
  lastEdit: Date;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  student: Student;

  constructor() {}

  ngOnInit() {
    this.student = {
      name: '',
      lastName: '',
      class: '',
      age: 0,
      birthDate: new Date(),
      department: '',
      gender: '',
      gradeAverage: 0,
      disable: '',
      awards: [],
      lastEdit: new Date()
   }
   
  }

  onSubmit() {
    
  }
}
