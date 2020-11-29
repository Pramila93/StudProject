import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenfoundComponent } from './pagenfound/pagenfound.component';
import { StudentComponent } from './Student/mainstudent/stud.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:"user",component:UserComponent},
  {path:"home/#contactus",component:HomeComponent},
  {path:"home/#aboutus",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:PagenfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
