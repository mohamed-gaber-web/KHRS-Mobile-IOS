import { Injectable } from '@angular/core';

import { PuzzleWithImageAnswers } from './../models/puzzleWithImageAnswers';
import { PuzzleImageTranslations } from './../models/puzzleImageTranslation';

import { HttpClient } from '@angular/common/http';

import {
  getTextType,
  checkAnswerSingleChoise,
  getExercise,
  getMultiChoiceAnswer,
  checkAnswerMultipleChoice,
  checkAnswerPuzzleText,
  checkAnswerPuzzleImage }
from './../../api.constants';
import { PuzzleWithTextAnswer } from '../models/puzzleWithTextAnswer';



@Injectable({
  providedIn: 'root',
})
export class TestService {
  offset: number = 1;

  constructor(private http: HttpClient) {}

  /**
   * Get Test
   * courseId [ number ]
   * offset [ number ]
   *
   */
  getTestType(courseId: number, offset: number) {
    const params = `?courseId=${courseId}&offset=${offset}`
    return this.http.get(`${getTextType}` + params );
  }

  checkAnswerSingleChoise(singleChoiceAnswerId: number, answer) {
    let data = {
      singleChoiceAnswerId,
      answer
    }
    return this.http.post(`${checkAnswerSingleChoise}`, data);
  }

  checkAnswerMultiChoise(multiChoiceQuestionId: number, multiChoiceAnswerId: number) {
    let data = {
      multiChoiceQuestionId,
      multiChoiceAnswerId
    }
    return this.http.post(`${checkAnswerMultipleChoice}`, data);
  }

  checkAnswerPuzzleWithText(puzzleTextAnswer: PuzzleWithTextAnswer[]) {
    return this.http.post(`${checkAnswerPuzzleText}`, puzzleTextAnswer);
  }


  checkAnswerPuzzleWithImage(data: PuzzleWithImageAnswers[]) {
    return this.http.post(`${checkAnswerPuzzleImage}`, data);
  }

}
