import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import {Fgck} from './fgck.model';

@Injectable({
  providedIn: 'root'
})
export class FgckFormService {

  public url = environment.baseUrl;
  private memberUpdated = new Subject<any>();
  private memberApprovedUpdated = new Subject<any>();
  private selectedMemberUpdated = new Subject<any>();
  private cellGroupUpdated = new Subject<any>();
  private selectedCellGroupUpdated = new Subject<any>();
  private member: any[] = [];
  private memberApproved: any[];
  private cellGroup: any[] = [];
  formData: Fgck;

  constructor(private http: HttpClient) { }

  upLoadImage(data) {
    const fd = new FormData;
    fd.append('image', data);
    return this.http.post(this.url + '/image/saveimage', fd);
  }

  createMember(id,memberdata) {
    return this.http.post(this.url + '/member/create/'+id,memberdata);
  }


  updateMember(id, memberdata) {
    console.log(memberdata);
    return this.http.post(this.url + '/member/update/' +id , memberdata);
  }

  getall() {
    return this.http.get(this.url + '/member/getall');
  }

  getAllMember() {
    return this.http.get(this.url + '/member_from_app/getall').subscribe((memberData: any) => {
      this.member = memberData;
      this.memberUpdated.next(memberData);
    });
  }

  getAllApprovedMember() {
    return this.http.get(this.url + '/member_from_app/getallapproved').subscribe((memberApprovedData: any) => {
      this.memberApproved = memberApprovedData;
      this.memberApprovedUpdated.next(memberApprovedData);
    });
  }

  getAllUpdatedMember() {
    return this.memberUpdated.asObservable();
  }

  getAllApprovedUpdatedMember() {
    return this.memberApprovedUpdated.asObservable();
  }

  getAllCellGroup() {
    return this.http.get(this.url + '/cell_group/getall').subscribe((celGroupData: any) => {
      this.cellGroup = celGroupData;
      this.cellGroupUpdated.next(celGroupData);
    });
  }

  getAllUpdatedCellGroup() {
    return this.cellGroupUpdated.asObservable();
  }

  approve(id, data) {
    return this.http.post(this.url + '/member/block/' + id, data );
  }
  approvef(id, data) {
    return this.http.post(this.url + '/member/blockf/' + id, data );
  }
  onBlock(id, data ) {
    return this.http.post(this.url + '/member/unBlock/' + id, data);
  }
  onBlockf(id, data ) {
    return this.http.post(this.url + '/member/unBlockf/' + id, data);
  }

  homesrvphotoanddescription( data ) {
    return this.http.post(this.url + '/member/inchargecreate/' , data);
  }

  homephoto( data ) {
    return this.http.post(this.url + '/member/homephoto/' , data);
  }

  getincharge() {
    return this.http.get(this.url + '/member/getallincharge/');
  }

  gethomephoto() {
    return this.http.get(this.url + '/member/getallimgphoto/');
  }

  delimg(id) {
    return this.http.delete(this.url + '/member/photodel/' + id);
  }

  delncharge(id) {
    return this.http.delete(this.url + '/member/delincharge/' + id);
  }


}
