import { TestBed } from '@angular/core/testing';

import { QuizresultService } from './quizresult.service';

describe('QuizresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizresultService = TestBed.get(QuizresultService);
    expect(service).toBeTruthy();
  });
});
