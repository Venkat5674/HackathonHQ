import { Component } from '@angular/core';
import { RegisterData } from './register-data';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel=new RegisterData("","","");

  constructor(private _registerService:RegisterService) {}
  res:any;


  passwordVisible = false;

  Visibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }


  onRegister(){
    console.log(this.registerModel);
    this._registerService.registerFunction(this.registerModel).subscribe(
      (data)=>{
        this.res=data;
      },
      error=>console.error(error)
    )

  }

}
