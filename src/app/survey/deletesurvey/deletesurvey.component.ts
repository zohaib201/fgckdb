import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../notification/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-deletesurvey',
  templateUrl: './deletesurvey.component.html',
  styleUrls: ['./deletesurvey.component.scss']
})
export class DeletesurveyComponent implements OnInit {

    id = this.router.snapshot.params['did'];
    constructor(private  router: ActivatedRoute, private  route: Router, private srv: SurveyService) { }

    ngOnInit() {
        this.srv.delsrv(this.id).subscribe((delevent: any) => {
            console.log(delevent);
            this.route.navigate(['/survey']);

        });
    }

}
