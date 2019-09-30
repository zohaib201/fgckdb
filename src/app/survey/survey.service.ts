import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SurveyService {

    url = environment.baseUrl;
    constructor(private http: HttpClient) { }
    getall() {
        return this.http.get(this.url + '/question/getall');
    }



    create(data) {
         return this.http.post(this.url + '/question/create', data);
    }

    delsrv(id) {
        return this.http.delete(this.url + '/question/delete/' + id);
    }

}
