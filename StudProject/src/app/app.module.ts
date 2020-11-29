import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Student/mainstudent/stud.component';
import { SlistComponent } from './Student/showStudent/slist.component';
import { StudentService } from './service/student.service';
import { FormsModule } from '@angular/forms';
import { StudAddComponent } from './Student/addStudent/sadd.component';
import { StdPipe } from './custompipe/stdpipe';
import { MarksPipe } from './custompipe/percentpipe';
import { StudentDetails } from './Student/detailsStudent/detstud.component';
import { HomeComponent } from './home/home.component';
import { PagenfoundComponent } from './pagenfound/pagenfound.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,StudentComponent,SlistComponent,StudAddComponent,StdPipe,MarksPipe,StudentDetails, HomeComponent, PagenfoundComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
