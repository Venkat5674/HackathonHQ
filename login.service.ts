import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { LoginData } from './login-data';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }
  _url='http://127.0.0.1:2000/login';

  loginFunction(reg:LoginData) {
    const params=new HttpParams()

    .set('email',reg.email)
    .set('password',reg.password)

    return this._http.get(this._url,{params});
  }
}
