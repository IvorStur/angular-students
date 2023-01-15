import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe((params) => {
      this.student = JSON.parse(params.get('student'));
    });
  }

  ngOnInit() {}

  edit(student: any) {
    this.router.navigate(['edit', { student: JSON.stringify(student) }]);
  }
}
