import { Component, OnInit } from '@angular/core';
import { User } from '../module/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userv:UserService) { }

  uname!:string;
  pwd!:string;
  ngOnInit(): void {
  }

  validUser(){
    let user1={uname:this.uname,pwd:this.pwd};
    this.userv.getValidate(user1);
  }
}
