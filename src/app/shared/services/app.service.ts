import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { getLanguage } from "src/app/api.constants";




@Injectable({
    providedIn: 'root',
  })

  export class AppService {

  constructor(private http: HttpClient) {}

  getLanguage() {
    const params = `?offset=0&limit=10`
    return this.http.get(`${getLanguage}` + params);
  }

}
