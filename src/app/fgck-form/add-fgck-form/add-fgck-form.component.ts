import { Component, OnInit } from '@angular/core';
import { FgckFormService } from '../fgck-form.service';
import { MemberFromAppService } from '../../member-from-app/member-from-app.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-fgck-form',
  templateUrl: './add-fgck-form.component.html',
  styleUrls: ['./add-fgck-form.component.scss']
})
export class AddFgckFormComponent implements OnInit {
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
    namesofGrandChildren: [],
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
    member: [],
    cellGroup: this.selectedCellGroup,
    address: '',
    memberName: ''
  };
  localMemberData: any;
  memberId;

  private memberSub: Subscription;
  private cellGroupsub: Subscription;

  constructor(private fgckFormService: FgckFormService,
    private router: Router, private activatedroute: ActivatedRoute, private memberFromAppService: MemberFromAppService ) {
  }

  onMemberSelect(item: any) {

    this.memberData.member.push(item);
    console.log(this.memberData.member);
  }

  onMemberDeSelect(deselectItem: any) {

    const index = this.memberData.member.indexOf(deselectItem.name);
    this.memberData.member.splice(index, 1);
    console.log(deselectItem.name);
  }

  onMemberAll(items: any) {
    items.forEach(element => {
      this.memberData.member.push(element);
    });
    console.log(items);
  }

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

  onCreateMember() {
    this.store.forEach(child => {
      this.memberData.namesofChildren.push(child);

    })
    this.store1.forEach(grandchild => {
      this.memberData.namesofGrandChildren.push(grandchild);
    })

    this.fgckFormService.upLoadImage(this.imageData).subscribe((imageName: any) => {
      console.log(imageName);
      this.memberData.image = imageName;

      this.fgckFormService.createMember(this.memberId,this.memberData).subscribe((data: any) => {
        this.localMemberData = data;
      })
      this.memberFromAppService.approve(this.memberId, this.memberData ).subscribe((data: any) => {
        this.router.navigate(['/fgck-form']);
      })

    });


    console.log(this.memberData);
    console.log(this.store);
    console.log(this.store1);

  }
}
