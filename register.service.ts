import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { RegisterData } from './register-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }
  _url='http://127.0.0.1:2000/register';

  registerFunction(reg:RegisterData) {
    const params=new HttpParams()
    .set('username',reg.username)
    .set('email',reg.email)
    .set('password',reg.password)
    return this._http.get(this._url,{params});
  }
}
