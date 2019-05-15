import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Question } from '../Question';
import { QuizresultService } from '../quizresult.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  selection: string;

  constructor(public quizresultService: QuizresultService) { }

  ngOnInit() {
  }

  selectAnswer(choice: string){
    if(!this.selection){
      if(choice === this.question.answer){
        this.quizresultService.gotQuestionCorrect();
      }
      else{
        this.quizresultService.gotQuestionIncorrect();
      }
      this.selection = choice;
    }
  }

}
