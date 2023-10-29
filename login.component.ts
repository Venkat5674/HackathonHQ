import { Component } from '@angular/core';
import { LoginData } from './login-data';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel=new LoginData("","");
  res:any;
  constructor(private _loginService:LoginService,
              private router: Router) { }

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }


  onLogin(){
    console.log(this.loginModel);
    this._loginService.loginFunction(this.loginModel).subscribe(
      (data)=>{
        this.res=data;
        if(this.res.message==='Log in successfully'){
          this.router.navigate(['/home']);
        }
      },
      error=>console.error(error)
    );

  }

}
