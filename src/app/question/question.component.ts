import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Question } from '../Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  selection: string;

  constructor() { }

  ngOnInit() {
  }

  selectAnswer(choice: string){
    if(!this.selection){
      console.log(choice);
      this.selection = choice;
    }
  }

}
