import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}
