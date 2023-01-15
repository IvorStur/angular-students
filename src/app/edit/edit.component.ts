import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.student = JSON.parse(params.get('student'));
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.student.lastEdit = new Date();
    this.studentService.addStudent(this.student);
    this.router.navigate(['two', 365]);
  }
}
