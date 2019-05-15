import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { LearnComponent } from './learn/learn.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
 {path: 'learn', component: LearnComponent},
 {path: '', component: QuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent,
    LearnComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
