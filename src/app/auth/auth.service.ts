import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import {loginCredentials} from "src/app/shared/models/loginCredentials";
import { StorageService } from "src/app/shared/services/storage.service";
import { baseUrl, loginAPI } from "src/app/api.constants";




@Injectable({
    providedIn: 'root',
  })

  export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService ) {}

  get IsLoggedIn() {
    return this.storageService.existsStorage('user'); 
  }

  signInUser(user: loginCredentials) {
    return this.http.post(`${loginAPI}`, user);
  }

  getUser() {
    if (this.storageService.existsStorage('user')) {
      return this.storageService.getUser();
    }
  }

//   registerCustomer(user: RegisterCustomer) {
//     return this.http.post(`${userRegister}`, user);
//   }

}