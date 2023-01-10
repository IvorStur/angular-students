import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  name: string;
  lastName: string;
  class_name: string;
  age: number;
  birthDate: string;
  department: string;
  gender: string;
  gradeAverage: number;
  disabled: boolean;
  awards: string[];
  lastEdit: Date;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
// export class StudentsComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

// }
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  students: Student[] = [
    {
      id: 1,
      name: 'Bob',
      lastName: 'Smith',
      class_name: 'A',
      age: 20,
      birthDate: '01-01-2001',
      department: 'Physics',
      gender: 'Male',
      gradeAverage: 8.5,
      disabled: false,
      awards: ['Scholarship'],
      lastEdit: new Date(),
    },
    {
      id: 2,
      name: 'Alice',
      lastName: 'Johnson',
      class_name: 'B',
      age: 22,
      birthDate: '01-02-1999',
      department: 'Biology',
      gender: 'Female',
      gradeAverage: 9.2,
      disabled: false,
      awards: ['Certificate'],
      lastEdit: new Date(),
    },
    {
      id: 3,
      name: 'Charlie',
      lastName: 'Williams',
      class_name: 'C',
      age: 24,
      birthDate: '01-03-1997',
      department: 'Mathematics',
      gender: 'Male',
      gradeAverage: 8.7,
      disabled: true,
      awards: ['Award'],
      lastEdit: new Date(),
    },
  ];

  classes = ['A', 'B', 'C'];
  departments = ['Physics', 'Biology', 'Mathematics'];
  genders = ['Male', 'Female'];

  addStudent(
    name: string,
    lastName: string,
    class_name: string,
    age: number,
    birthDate: string,
    department: string,
    gender: string,
    gradeAverage: number,
    disabled: boolean,
    awards: string[]
  ) {
    const newId = this.students.length + 1;
    this.students.push({
      id: newId,
      name,
      lastName,
      class_name,
      age,
      birthDate,
      department,
      gender,
      gradeAverage,
      disabled,
      awards,
      lastEdit: new Date(),
    });
  }

  updateStudent(
    id: number,
    name: string,
    lastName: string,
    class_name: string,
    age: number,
    birthDate: string,
    department: string,
    gender: string,
    gradeAverage: number,
    disabled: boolean,
    awards: string[]
  ) {
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = {
      id,
      name,
      lastName,
      class_name,
      age,
      birthDate,
      department,
      gender,
      gradeAverage,
      disabled,
      awards,
      lastEdit: new Date(),
    };
  }

  deleteStudent(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
