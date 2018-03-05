import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {
  currentUser = '-me-';
  url = 'https://api-explorer.alfresco.com/alfresco/api/-default-/public/alfresco/versions/1/people/' + this.currentUser + '/favorites';

  constructor(private http: HttpClient) {}

  getFavoriteItems(): Observable<any> {
    // token generated 5th March, 1AM Romanian Time
    const token = 'YWRtaW46YWRtaW4=';

    return this.http.get(this.url, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + token)
    })
    .map(response => console.log('JSON ' + response));
  }

  getJSON(): Observable<any> {
    return this.http.get('assets/mocked-data.json');
  }
}
