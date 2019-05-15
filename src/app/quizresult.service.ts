import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizresultService {

  questionsTotal: number;
  questionsCorrect = 0;
  questionsAnswered = 0;

  constructor() { }

  setQuestionsTotal(total: number){
    this.questionsTotal = total;
  }
  gotQuestionCorrect(){
    this.questionsCorrect++;
    this.questionsAnswered++;
  }
  gotQuestionIncorrect(){
    this.questionsAnswered++;  }
}
