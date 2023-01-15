import { Component, OnInit } from '@angular/core';
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
  date: Date = new Date();

  constructor(private studentService: StudentService) {}

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
    // console.log(this.date.getFullYear())
    // const ageInMilliseconds = this.date.getTime() - this.student.birthDate.getTime();
    // this.student.age = ageInMilliseconds / 31536000000;
    let now = new Date().getTime();
    let bd = this.student.birthDate.getTime();
    this.student.age = now - bd;
    this.studentService.addStudent(this.student);
  }
}
