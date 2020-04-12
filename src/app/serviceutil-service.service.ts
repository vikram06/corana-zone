import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceutilServiceService {

  constructor(private httpclient: HttpClient) { }

  post(url: any, model: any) {
    return this.httpclient.post(url, model);
  }
  get(url) {
    return this.httpclient.get(url);
    }
}
