import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [{'number': 1, 'question': "What is my name", choices: ["Chris", "Daniel", "Artie", "Zack"], answer: "Chris"}];

  constructor() { }

  ngOnInit() {
  }

}
