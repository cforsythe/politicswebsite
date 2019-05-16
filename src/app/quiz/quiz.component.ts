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
    'question': "WHAT WAS THE UNITED STATES FIRST CONSTITUTION CALLED?", 
    'choices': ["The Articles of Confederation", "The Declaration of Independence", "The \"Federalist Paper\"", "The Emancipation Proclamation"], 
    'answer': "The Articles of Confederation"
    },
    {
    'number': 2, 
    'question': "LAWS FOR THE UNITED STATES ARE MADE BY: ", 
    'choices': ["The President", "The Senate", "Congress", "The Supreme Court"], 
    'answer': "Congress"
    },
    {
      'number': 3, 
      'question': "THE BILL OF RIGHTS IS: ", 
      'choices': ["The First Ten Amendments", "The Fifteenth Amendment", "The Entire Constitution", "All of The Amendments"], 
      'answer': "The First Ten Amendments"
    },
    {
      'number': 4,
      'question': "THE PRESIDENT IS ELECTED IF HE:",
      'choices': ["Wins A Majority Of The Electoral Votes", "Wins Most of The Country's Votes", "Wins All The States' Votes", "Wins Most of The State' Votes"],
      'answer': "Wins A Majority Of The Electoral Votes"
    },
    {
      'number': 5,
      'question': "HOW MANY CONSTITUTION HAS THE UNITED STATES HAD?",
      'choices': ["One", "Two", "Three", "Four"],
      'answer': "Two"
    },
    {
      'number': 6,
      'question': "THE ROLE OF CONGRESS IS TO:",
      'choices': ["Make Laws", "Enforce Laws", "Interpret Laws", "All of The Above"],
      'answer': "Make Laws"
    }, {
      'number': 7,
      'question': "THERE ARE HOW MANY BRANCHES OF GOVERNMENT?",
      'choices': ["One", "Two", "Three", "Four"],
      'answer': "Three"
    },
    {
      'number': 8,
      'question': "WHAT IS THE ONLY MINORITY GROUP SPECIFICALLY ADDRESSED IN THE U.S CONSTITUTION?",
      'choices': ["Asian", "Native American", "Latino", "African American"],
      'answer': "Native American"
    },
    {
      'number': 9,
      'question': "WHAT IS THE MAIN PURPOSE OF THE UNITED STATES CONSTITUTION?",
      'choices': ["To Declate Independence From Great Britain", "To Establish A New Government For The United States and Designate its Power and Limits", "To Lay The Groundwork for Ending Slavery in the United States", "To Provide Citizens With a Written Record of The Constitutional Convention"],
      'answer': "To Establish A New Government For The United States and Designate its Power and Limits"
    },
    {
      'number': 10,
      'question': "WHAT DO THE FIRST THREE ARTICLES OF THE CONSTITUTION ACCOMPLISH?",
      'choices': ["Outline the responsibilities and powers of the executive, legislative, and judicial branches", "Clearly define the fundamental rights of all American citizens", "List the main reasons for separation from Great Britain", "Provide a vague outline of the American government"],
      'answer': "Outline the responsibilities and powers of the executive, legislative, and judicial branches"
    }
  ];

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
