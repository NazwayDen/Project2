import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/app/models/user';
import { Mathtask } from 'src/app/models';

@Component({
  selector: 'app-private-room',
  templateUrl: './private-room.component.html',
  styleUrls: ['./private-room.component.css'],
  providers:[UserService]
})
export class PrivateRoomComponent implements OnInit {

  users:User[];

  allTask: number;
  completeTask: number;
  myTask: number;
  str: string[] = ["sldsld","sdsldlsdlsld","aaaaa"];

  constructor(
    @Inject(UserService) private userService:UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
    this.allTask=10;
    this.completeTask=10;
    this.myTask=5;

  }
  
  public loadUsers():void{
    this.userService.getUsers().subscribe((getUsers:User[])=>{
      this.users=getUsers;
    });
  }

}
