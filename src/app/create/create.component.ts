import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

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
  // date: Date = new Date();

  constructor(private studentService: StudentService, private router: Router) {}

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
      lastEdit: new Date(),
    };
  }

  onSubmit() {
    // console.log(this.date.getFullYear())
    // const ageInMilliseconds = this.date.getTime() - this.student.birthDate.getTime();
    // this.student.age = ageInMilliseconds / 31536000000;

    // let now = new Date().getTime();
    // let bd = this.student.birthDate.getTime();
    // this.student.age = new Date(now - bd).getFullYear();
    // console.log(this.student.age)
    this.student.lastEdit = new Date();
    this.studentService.addStudent(this.student);
    this.router.navigate(['two', 365]);
  }
}
