import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-private-room',
  templateUrl: './private-room.component.html',
  styleUrls: ['./private-room.component.css'],
  providers:[UserService]
})
export class PrivateRoomComponent implements OnInit {

  users:User[];

  constructor(
    @Inject(UserService) private userService:UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }
  
  public loadUsers():void{
    this.userService.getUsers().subscribe((getUsers:User[])=>{
      this.users=getUsers;
    });
  }

}
