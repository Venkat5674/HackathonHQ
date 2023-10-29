import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { MentorData } from './mentor-data';
@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mentorFunction(mentorModel: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }
  _url='http://127.0.0.1:2000/mentor';

  MentorFunction(reg:MentorData) {
    const params=new HttpParams()
    .set('mentorname',reg.mentorname)
    .set('email',reg.email)
    .set('password',reg.password)
    return this._http.get(this._url,{params});
  }
}
