import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/app/models/user';
import { Mathtask } from 'src/app/models';
import { Rate } from 'src/app/enums';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  users:User[];
  taskarray: Mathtask[];
  constructor() { 
    let u=new User();
  u.nickname="prince";
    let t0=new Mathtask();
    t0.id=1;
    t0.name="task1";
    t0.shortDescription="Web calc";
    t0.status=true;
    t0.creatorUser=u;
    t0.rating=Rate.Five;
    let t1=new Mathtask();
    t1.id=1;
    t1.name="task1";
    t1.shortDescription="Web calc";
    t1.status=true;
    t1.creatorUser=u;
    t1.rating=Rate.Five;
    let t2=new Mathtask();
    t2.id=1;
    t2.name="task1";
    t2.shortDescription="Web calc";
    t2.status=true;
    t2.creatorUser=u;
    t2.rating=Rate.Five;
    let t3=new Mathtask();
    t3.id=1;
    t3.name="task1";
    t3.shortDescription="Web calc";
    t3.status=true;
    t3.creatorUser=u;
    t3.rating=Rate.Five;
    let t4=new Mathtask();
    t4.id=1;
    t4.name="task1";
    t4.shortDescription="Web calc";
    t4.status=true;
    t4.creatorUser=u;
    t4.rating=Rate.Five;
    this.taskarray=[t0,t1,t2,t3,t4];

  }

  ngOnInit() {
    
  }
  
  

}
