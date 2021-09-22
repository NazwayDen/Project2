import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-private-room',
  styles: [require('./private-room.component.css').toString()],
  template: require('./private-room.component.html'),
  providers:[UserService]
})
export class PrivateRoomComponent implements OnInit {

  users:User[];

  constructor(
    @Inject(UserService) private userService:UserService
  ) { }

  ngOnInit() {
  }
  
  public loadUsers():void{
    this.userService.getUsers().subscribe((getUsers:User[])=>{
      this.users=getUsers;
    });
  }

}
