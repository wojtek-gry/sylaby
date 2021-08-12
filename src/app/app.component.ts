import {Component} from '@angular/core';
import {QuestionGenerator} from "./QuestionGenerator";
import {Answer} from "./mai/mai.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  points = 0;
  incorrect = 0;
  question = this.losuj2();


  losuj2() {
    let questionGenerator = new QuestionGenerator();
    return  questionGenerator.nextQuestion();
  }

  nextQuestion() {
    this.question = this.losuj2();
  }


  choice(option: Answer) {
    if(option.isCorrect) {
      this.points++;
    } else {
      this.incorrect++;
    }

    this.nextQuestion();
  }

}
