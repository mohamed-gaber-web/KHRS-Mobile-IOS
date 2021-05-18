import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getAllCoursesAPI } from "src/app/api.constants";
import { Course } from "../models/course";



@Injectable({
    providedIn: 'root'
})
export class CourseService {

    limit: number = 6;
    offset: number = 0;

    queryParams = `?Offset=${this.offset}&Limit=${this.limit}`

    constructor(private http: HttpClient) {}

    getAllCourses(courseQuery: string,offset?:number) {
        if(offset != null){
            this.queryParams = `?Offset=${offset}&Limit=${this.limit}`

        }
        return this.http.get<Course>(`${getAllCoursesAPI}/${courseQuery}` + this.queryParams);
    }

}