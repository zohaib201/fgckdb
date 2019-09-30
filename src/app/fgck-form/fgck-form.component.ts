import { Component, OnInit } from '@angular/core';
import { FgckFormService } from './fgck-form.service';
import { environment } from '../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {Fgck} from './fgck.model';


@Component({
  selector: 'app-fgck-form',
  templateUrl: './fgck-form.component.html',
  styleUrls: ['./fgck-form.component.scss']
})
export class FgckFormComponent implements OnInit {


  constructor(private fgckFormService: FgckFormService , private Activatedroute: ActivatedRoute, private router: Router) { }

  localMemberData: any = '';
  url = environment.baseUrl;

  selectMember() {
  }

  updateRecord(member: Fgck) {
    // console.log(member);
    this.fgckFormService.formData = Object.assign({}, member);
    this.router.navigate(['fgck-form/update']);
  }

  ngOnInit() {

    this.fgckFormService.getall().subscribe((allMember: any) => {
      this.localMemberData = allMember;
      console.log(allMember);

    });
  }

  onBlock(id) {
    console.log(id);
    console.log(id);
    let data = null;
    this.fgckFormService.onBlock(id, data).subscribe((data: any) => {
      this.localMemberData = data;
      console.log(data);
    });
  }
}
