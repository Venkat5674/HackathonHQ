import { Component } from '@angular/core';
import { TeamData } from './team-data';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'] // Make sure the file name and path are correct.
})

export class TeamComponent {
  registerModel=new TeamData("","","");
  teamModel: any;

  constructor(private _TeamService:TeamService) {}
  res:any;


  passwordVisible = false;

  Visibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }


  onTeam(){
    console.log(this.teamModel);
    this._TeamService.teamFunction(this.teamModel).subscribe(
      (data: any)=>{
        this.res=data;
      },
      (error: any)=>console.error(error)
    )

  }


}
