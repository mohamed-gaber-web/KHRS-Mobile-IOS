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
import { ToastController } from '@ionic/angular';
import { HelpersService } from 'src/app/shared/services/helpers.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm: FormGroup;
  isLoading = false;
  allRecommended: any;
  gender = [
    {name: 'male', value: 0},
    {name: 'female', value: 1}
  ]

  registerFormErrors = {
    FirstName: '',
    LastName: '',
    email: '',
    PhoneNumber: '',
    Birthdate: '',
    Gender: '',
    password: '',
    confirmPassword: '',
    recommendedbyId: '',
    acceptTerms: ''
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
      minlength: 'Phone Number is not long enough, minimum of 11 characters',
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
    acceptTerms: {
      required: this.translate.instant('acceptTermsReq'),
    }
  };


  constructor(
    private auth: AuthService,
    private translate:TranslateService,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public router: Router,
    private helpers: HelpersService
    ) {}

    async uploadImg(event) {
      const imgString: any = await this.helpers.toBase64(event.target.files[0]);
      (this.registerForm.get('imageFile') as FormGroup).patchValue({
        fieldName: 'userRegisterImage',
        filename: event.target.files[0].name,
        fileExtension: this.helpers.getExtension(event.target.files[0].name),
        fileData: this.helpers.validBase64(imgString),
      });
    }

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
      'acceptTerms': [null, Validators.required],
      'languageId': [JSON.parse(localStorage.getItem('languageId'))],
      imageFile : this.formBuilder.group({
        fieldName: ['', !Validators.required],
        filename: ['', !Validators.required],
        fileExtension: ['', !Validators.required],
        fileData: ['', !Validators.required],
      }),
    },{validator: matchingPasswords('password', 'confirmPassword')});

    this.registerForm.valueChanges.subscribe((data) => this.validateRegisterForm());

  }


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

    this.validateRegisterForm(true);

     if (this.registerForm.valid) {
       this.auth.registerCustomer(values).subscribe(async(response) => {
         if(response['success']) {
          var toast = await this.toastController.create({
            message: 'You signed up successfully!',
            duration: 2000,
            color: 'success',
          });
          toast.present();

          this.router.navigate(['/auth/sign-in'])

         } else {
           response['arrayMessage'].forEach( async(element) => {
            var toast = await this.toastController.create({
              message: 'You signed up error!',
              duration: 2000,
              color: 'danger',
            });
            toast.present();
          });
        }

      });
     }
 }

 // ! get recomended by list
 getRecommendeBy() {
   this.auth.recommendedBy().subscribe(data => {
    this.allRecommended = data['result'];
   })
 }

}
