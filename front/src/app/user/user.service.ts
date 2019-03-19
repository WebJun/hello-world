import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from '../apiBaseUrl';

@Injectable()
export class UserService {
  private url = apiBaseUrl + '/user';
  data;

  constructor(private http:HttpClient) { }

    add(data) {
      return this.http.post(this.url, data);
    }

    list() {
      return this.http.get(this.url);
    }

}
