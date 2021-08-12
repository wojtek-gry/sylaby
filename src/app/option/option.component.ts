import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../mai/mai.component";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input()
  option!: Answer;

  @Input()
  main!: AppComponent;


  constructor() { }

  ngOnInit(): void {
  }

}
