import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";

export interface Answer {
  id: number;
  imageName: string;
  isCorrect: boolean;
}
export interface Question {
  id: number;
  imageName: string;
  options: Answer[];
}

export class An implements Answer {
  id: number;
  imageName: string;
  isCorrect: boolean;


  constructor(id: number, imageName: string, isCorrect: boolean) {
    this.id = id;
    this.imageName = imageName;
    this.isCorrect = isCorrect;
  }
}


export class Qu implements Question {
  id: number;
  imageName: string;
  options: Answer[];


  constructor(id: number, imageName: string, options: Answer[]) {
    this.id = id;
    this.imageName = imageName;
    this.options = options;
  }
}

@Component({
  selector: 'app-mai',
  templateUrl: './mai.component.html',
  styleUrls: ['./mai.component.css']
})
export class MaiComponent implements OnInit {
  @Input()
  question!: Question;

  @Input()
  appComponent!: AppComponent;

  constructor() { }

  ngOnInit(): void {
  }


}
