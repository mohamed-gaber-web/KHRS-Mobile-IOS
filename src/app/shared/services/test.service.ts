import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {
  getTextType,
  finishedTest,
  getUserActiveTest,
  sendAnswerTest}
from './../../api.constants';

import { AnswerTestModel } from '../models/answerTestModel';



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

    /**
   * Get check user test
   * return isActive [ boolean ]
   * return testApi [  ]
   *
   */
  checkUserTest() {
      return this.http.get(`${getUserActiveTest}`);
  }


    /**
   * send answer question
   *
   */
  sendAnswerTesting(answerObj: AnswerTestModel) {
    return this.http.post(`${sendAnswerTest}` , answerObj);
  }

    /**
   * send answer question
   *
   */
    finishedTest(userTestId: number) {
      const params = `?userTestId=${userTestId}`;
      return this.http.post(`${finishedTest}` + params, {});
    }



}
