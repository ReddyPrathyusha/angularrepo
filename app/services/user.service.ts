import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  get() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,nat&results=10')
    .map(res => res.json());
  }
}
