import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit() {
    this.students = [
      {
        name: 'John',
        lastName: 'Doe',
        class: '1.B',
        age: 9,
        birthDate: new Date('2019-08-13'),
        department: 'Science',
        gender: 'Male',
        gradeAverage: 2.3,
        disable: 'No',
        awards: ['Even firster than the first prize in science fair'],
        lastEdit: new Date(),
      },
      {
        name: 'Jozef',
        lastName: 'Kral',
        class: '1.A',
        age: 9,
        birthDate: new Date('2019-02-11'),
        department: 'Science',
        gender: 'Female',
        gradeAverage: 3.2,
        disable: 'No',
        awards: ['First prize in science fair'],
        lastEdit: new Date(),
      },
    ];
    console.log(this.students);
  }

  students: Student[];
  // details() {
  //   this.router.navigate(['details']);
  // };
  details(student: any) {
    this.router.navigate(['details', { student: JSON.stringify(student) }]);
  }
  
}
