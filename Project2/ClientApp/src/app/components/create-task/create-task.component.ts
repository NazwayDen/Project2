import { Component, Inject, OnInit } from "@angular/core";
import { UserService } from "src/app/services";
import { Answer, Mathtask, User } from "src/app/models";
import { Rate } from "src/app/enums";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.css"],
})
export class CreateTaskComponent implements OnInit {
  allTask: number;
  completeTask: number;
  myTask: number;
  tags: string[] = [];
  answer: Answer[] = [];
  constructor() {}

  ngOnInit() {
    //2

    this.allTask = 10;
    this.completeTask = 10;
    this.myTask = 5;
    let answer = new Answer();
    this.answer.push(answer);
    this.tags.push("");
  }
  createNewTag() {
    this.tags.push("");
    console.log(this.tags);
  }
  oonChangeTextTags(item: string) {
    let index = this.tags.indexOf(item);
    let textBox = document.getElementsByClassName("tagI")[
      index
    ] as HTMLInputElement;
    let value = textBox.value;
    if (!this.tags.includes(value)) {
      this.tags[index] = value;
    } else {
      textBox.value = "";
      alert("Dont repeat tag");
    }
    console.log(this.tags);
  }
  createNewAnswer() {
    let answer = new Answer();
    answer.value = "";
    this.answer.push(answer);
  }
  minusTag(item: string) {
    let index = this.tags.indexOf(item);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }
  minusVari(item: Answer) {
    let index = this.answer.indexOf(item);
    if (index > -1) {
      this.answer.splice(index, 1);
    }
  }
  
}
