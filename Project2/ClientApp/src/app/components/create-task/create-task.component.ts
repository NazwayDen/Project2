import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/app/models/user';
import { Mathtask } from 'src/app/models';
import { Rate } from 'src/app/enums';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  allTask: number;
  completeTask: number;
  myTask: number;
  constructor() { }

  ngOnInit() {
    //2
    
    this.allTask=10;
    this.completeTask=10;
    this.myTask=5;

  }

}
