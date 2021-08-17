import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { getLanguage } from "src/app/api.constants";

import { faqPage, getGeneratedVidoes } from './../../api.constants';



@Injectable({
    providedIn: 'root',
  })

  export class AppService {

  constructor(private http: HttpClient) {}

  getLanguage() {
    const params = `?offset=0&limit=10`
    return this.http.get(`${getLanguage}` + params);
  }

  getFaqPage (offset, limit) {
    const params = `?Offset=${offset}&Limit=${limit}`
    return this.http.get(`${faqPage}` + params );
  }

  getVidoes (title) {
    const params = `?title=${title}`
    return this.http.get(`${getGeneratedVidoes}` + params );
  }

}
