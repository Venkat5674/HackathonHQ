import { Component } from '@angular/core';
import { MentorData } from './mentor-data';
import { MentorService } from './mentor.service';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})


export class MentorComponent {
  registerModel=new MentorData("","","");
mentorModel: any;
onRegister: any;

  constructor(private _MentorService:MentorService) {}
  res:any;


  passwordVisible = false;

  Visibility(): any {
    this.passwordVisible = !this.passwordVisible;
  }

}
