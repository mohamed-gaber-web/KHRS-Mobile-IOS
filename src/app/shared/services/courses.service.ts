import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllCoursesAPI, getUsersCoursesAPI } from 'src/app/api.constants';
import { Course } from '../models/course';
import { MyCourse } from '../models/myCourse';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  limit: number = 6;
  offset: number = 0;

  queryParams = `?Offset=${this.offset}&Limit=${this.limit}`;

  constructor(private http: HttpClient) {}

  //get all courses in the system
  getAllCourses(courseQuery: string, offset?: number) {
    if (offset != null) {
      this.queryParams = `?Offset=${offset}&Limit=${this.limit}`;
    }
    return this.http.get<Course>(
      `${getAllCoursesAPI}/${courseQuery}` + this.queryParams
    );
  }

  //get the subscribed courses of the user
  getUserCourses(courseQuery: string, offset?: number) {
    if (offset != null) {
      this.queryParams = `?Offset=${offset}&Limit=${this.limit}`;
    }
    return this.http.get<MyCourse>(
      `${getUsersCoursesAPI}/${courseQuery}` + this.queryParams
    );
  }
}
