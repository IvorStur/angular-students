import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.student = JSON.parse(params.get('student'));
    });
  }

  ngOnInit() {
  }

}