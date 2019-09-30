import { Component, OnInit } from '@angular/core';
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  all ; any;
  constructor(private srv: SubmissionService) { }

  ngOnInit() {
    this.srv.getallquestion().subscribe((data: any) => {
         console.log(data);
         this.all  =  data;
    });
}

}
