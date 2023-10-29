import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MentorComponent } from './mentor/mentor.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},//for html pages
  {path:'login',component:LoginComponent},//for html pages
  {path:'home',component:HomeComponent},
  {path:'team',component:TeamComponent},
  {path:'mentor',component:MentorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
