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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.students = [
      {
        name: 'John',
        lastName: 'Doe',
        class: '12th',
        age: Math.floor(Math.random() * 100),
        birthDate: new Date('2019-08-13'),
        department: 'Science',
        gender: 'Male',
        gradeAverage: Math.random() * 100,
        disable: 'No',
        awards: ['First prize in science fair'],
        lastEdit: new Date(),
      },
    ];
    console.log(this.students);
  }

  students: Student[];
}
