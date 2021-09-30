import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let buttons =document.querySelectorAll('button');
    buttons.forEach(button =>{
      button.addEventListener('click', function(){
      buttons.forEach(btn =>btn.classList.remove('active'));
      this.classList.add('active');
      });
    });
  }

}
