import { recommendedBy } from 'src/app/api.constants';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { emailValidator, matchingPasswords } from 'src/theme/app-validators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm: FormGroup;
  isLoading = false;
  allRecommended: any;

  registerFormErrors = {
    FirstName: '',
    LastName: '',
    email: '',
    PhoneNumber: '',
    Birthdate: '',
    Gender: '',
    password: '',
    confirmPassword: '',
    recommendedbyId: ''
  };

  registerValidationMessages = {
    FirstName: {
      required: this.translate.instant('firstNameReq'),
    },
    LastName: {
      required: this.translate.instant('lastNameReq'),
    },
    email: {
      required: this.translate.instant('emailReq'),
      invalidEmail: this.translate.instant('invalidEmail'),
    },
    phoneNumber: {
      required: this.translate.instant('phoneReq'),
    },
    gender: {
      required: this.translate.instant('genderReq'),
    },
    password: {
      required: this.translate.instant('passwordReq'),
    },
    confirmPassword: {
      required: this.translate.instant('confirmPasswordReq'),
    },
    recommendedbyId: {
      required: this.translate.instant('firstNameReq'),
    },
    Birthdate: {
      required: this.translate.instant('birthdateReq'),
    },
  };


  constructor(
    private auth: AuthService,
    private translate:TranslateService,
    public formBuilder: FormBuilder,
    public router: Router) {}

  ngOnInit() {

    this.getRecommendeBy()

    // ! Register Fields
    this.registerForm = this.formBuilder.group({
      'FirstName': ['', Validators.compose([Validators.required])],
      'LastName': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'PhoneNumber': ['', Validators.compose([Validators.minLength(11), Validators.required])],
      'Birthdate': [new Date(), Validators.compose([Validators.required])],
      'Gender': [0 , Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'recommendedbyId': [0, Validators.required],
      'languageId': [1]
    },{validator: matchingPasswords('password', 'confirmPassword')});

    this.registerForm.valueChanges.subscribe((data) => this.validateRegisterForm());

  }

  // get errorCtr() {
  //   return this.registerForm.controls;
  // }

  // onFocusEvent(event:any){
  //   alert("Focus")
  //   this.validateRegisterForm();
  // }

  validateRegisterForm(isSubmitting = false) {
    for (const field of Object.keys(this.registerFormErrors)) {
      this.registerFormErrors[field] = '';

      const input = this.registerForm.get(field) as FormControl;
      if (input.invalid && (input.dirty || isSubmitting)) {
        for (const error of Object.keys(input.errors)) {
          this.registerFormErrors[field] = this.registerValidationMessages[field][
            error
          ];
        }
      }
    }
  }


  // ! When resister form valid
  public onRegisterFormSubmit(values):void {

    console.log(this.registerForm.value);


    this.validateRegisterForm(true);

     if (this.registerForm.valid) {
       this.auth.registerCustomer(values).subscribe((response) => {
         console.log(response);
        //  if(response['success']) {

        //  } else {
        //    response['arrayMessage'].forEach(element => {
        //   // this.snackBar.open(element, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        //   });
        // }

      });
     }
 }

 // ! get recomended by list
 getRecommendeBy() {
   this.auth.recommendedBy().subscribe(data => {
    console.log(data['result']);
    this.allRecommended = data['result'];
   })
 }

}
