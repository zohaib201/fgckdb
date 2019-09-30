import { Component, OnInit } from '@angular/core';
import { FgckFormService } from '../fgck-form.service';
import { MemberFromAppService } from '../../member-from-app/member-from-app.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-fgck-form',
  templateUrl: './update-fgck-form.component.html',
  styleUrls: ['./update-fgck-form.component.scss']
})
export class UpdateFgckFormComponent implements OnInit {
  i = 1;
  store = [];
  j = 1;
  store1 = [];
  imageData;

  // multiselectformember
  dropdownListForMember = [];
  selectedMembers = [];
  dropdownSettingsFormMember = {};

  // multiselectformember
  dropdownListForCellGroup = [];
  selectedCellGroup = [];
  dropdownSettingsForCellGroup = {};

  // member form data
  memberData = {
    nameofSpouse: '',
    namesofChildren: [],
    namesofGrandChildren:[],
    landlineKuwait: '',
    primaryWhatsappContact: '',
    mobile1Kuwait: '',
    mobile2Kuwait: '',
    landlineInternational: '',
    mobile1International: '',
    mobile2International: '',
    emailID1: '',
    emailID2: '',
    image: '',
    cellGroup: this.selectedCellGroup,
    address: '',
    memberName: ''
  };
  localMemberData: any;
  memberId;

  private memberSub: Subscription;
  private cellGroupsub: Subscription;
  id: number;

  constructor(public fgckFormService: FgckFormService,
              private router: Router, private activatedroute: ActivatedRoute, private memberFromAppService: MemberFromAppService ) {
  }

  // onMemberSelect(item: any) {

  //   this.memberData.member.push(item);
  //   console.log(this.memberData.member);
  // }

  // onMemberDeSelect(deselectItem: any) {

  //   const index = this.memberData.member.indexOf(deselectItem.name);
  //   this.memberData.member.splice(index, 1);
  //   console.log(deselectItem.name);
  // }

  // onMemberAll(items: any) {
  //   items.forEach(element => {
  //     this.memberData.member.push(element);
  //   });
  //   console.log(items);
  // }

  onCellGroupSelect(item: any) {

    this.memberData.cellGroup.push(item);
    console.log(this.memberData.cellGroup);
  }

  onCellGroupDeSelect(deselectItem: any) {

    const index = this.memberData.cellGroup.indexOf(deselectItem.name);
    this.memberData.cellGroup.splice(index, 1);
    console.log(deselectItem.name);
  }

  onCellGroupAll(items: any) {
    items.forEach(element => {
      this.memberData.cellGroup.push(element);
    });
    console.log(items);
  }

  ngOnInit() {

    this.memberId = this.activatedroute.snapshot.params.mfap_id;
    this.fgckFormService.getAllApprovedMember();
    this.memberSub = this.fgckFormService.getAllApprovedUpdatedMember().subscribe((member: any) => {
      this.dropdownListForMember = member;
    })

    this.fgckFormService.getAllCellGroup();
    this.cellGroupsub = this.fgckFormService.getAllUpdatedCellGroup().subscribe((cellGroup: any) => {
      this.dropdownListForCellGroup = cellGroup;
    })

    this.dropdownSettingsFormMember = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      maxHeight: 300
    };

    this.dropdownSettingsForCellGroup = {
      singleSelection: true,
      idField: 'id',
      textField: 'cellGroupDetail',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      maxHeight: 300
    };
  }

  add() {
    let add: any;
    add = this.i++;
    this.store.push({ id: add, value: '' });
    console.log(this.store);
  }


  save() {
    this.store.forEach((item) => {
      console.log(item)
    });
    console.log();
  }

  dismiss(i) {
    this.store.splice(i, 1);
    console.log(i);
  }


  add1() {
    let add: any;
    add = this.j++;
    this.store1.push({ id: add, value: '' });
    console.log(this.store1);
  }


  save1() {
    this.store1.forEach((item) => {
      console.log(item)
    });
    console.log();
  }

  dismiss1(j) {
    this.store1.splice(j, 1);
    console.log(j);
  }

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }


  updateField(form: NgForm) {
    this.memberData.address = form.value.address;
    this.memberData.cellGroup = form.value.muliselect;
    this.memberData.emailID1 = form.value.emailID1;
    this.memberData.emailID2 = form.value.emailID2;
    this.memberData.landlineInternational = form.value.landlineInternational;
    this.memberData.landlineKuwait = form.value.landlineKuwait;
    this.memberData.primaryWhatsappContact = form.value.primaryWhatsappContact;
    this.memberData.memberName = form.value.memberName;
    this.memberData.mobile1International = form.value.mobile1International;
    this.memberData.mobile1Kuwait = form.value.mobile1Kuwait;
    this.memberData.mobile2Kuwait = form.value.mobile2Kuwait;
    this.memberData.mobile2International = form.value.mobile2International;
    this.memberData.nameofSpouse = form.value.nameofSpouse;
  }
  onUpdateMember(form: NgForm) {
    this.updateField(form);
    if (this.imageData == null) {
      console.log('null');
      this.fgckFormService.updateMember(form.value.recId, this.memberData).subscribe(res => {
        this.router.navigate(['/fgck-form']);
      });
    } else {
      console.log('data');
      this.fgckFormService.upLoadImage(this.imageData).subscribe((imageName: any) => {
        console.log(imageName);
        this.memberData.image = imageName;

        this.fgckFormService.updateMember(form.value.recId, this.memberData).subscribe(res => {
          this.router.navigate(['/fgck-form']);
        });
      }); }
  }
}
