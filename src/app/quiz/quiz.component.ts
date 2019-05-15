import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { QuizresultService } from '../quizresult.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [
    {
    'number': 1, 
    'question': "What is my name", 
    'choices': ["Chris", "Daniel", "Artie", "Zack"], 
    'answer': "Chris"
    },
    {
    'number': 2, 
    'question': "What is Daniels name", 
    'choices': ["Chris", "Daniel", "Artie", "Zack"], 
    'answer': "Daniel"
    },
    {
      'number': 3, 
      'question': "What is Artie's name", 
      'choices': ["Chris", "Daniel", "Artie", "Zack"], 
      'answer': "Artie"
    }];

  constructor(public quizresultService: QuizresultService) { }

  ngOnInit() {
    this.quizresultService.setQuestionsTotal(this.questions.length)
  }

  quizComplete(){
    return this.quizresultService.questionsAnswered == this.quizresultService.questionsTotal;
  }
  getScore(){
    let score = this.quizresultService.questionsCorrect/this.quizresultService.questionsTotal * 100
    return score.toFixed(2);
  }
}
