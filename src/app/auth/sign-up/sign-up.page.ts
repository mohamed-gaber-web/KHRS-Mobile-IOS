import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
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
import { AppService } from 'src/app/shared/services/app.service';
import { recommendedBy } from 'src/app/api.constants';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  isLoading = false;
  allRecommended: any;
  flagsToggle;
  termsAndConditionsText: any;
  closeResult = '';
  itemClass: string = '';
  toggleInputs: any;
  selected: any;
  languageTitle: string = '';
  languageIcon: string = '';
  langItems: any;
  subs: Subscription[] = []
  gender = [
    {name: 'male', value: 0},
    {name: 'female', value: 1}
  ]

  constructor(
    private auth: AuthService,
    private translate:TranslateService,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public router: Router,
    private helpers: HelpersService,
    private appService: AppService,
    private modalService: NgbModal

    ) {}

  // ** upload image file
  async uploadImg(event) {
    const imgString: any = await this.helpers.toBase64(event.target.files[0]);
    (this.registerForm.get('file') as FormGroup).patchValue({
      fieldName: 'image',
      filename: event.target.files[0].name,
      fileExtension: this.helpers.getExtension(event.target.files[0].name),
      fileData: this.helpers.validBase64(imgString),
    });
  }

  ngOnInit() {
    // this.getRecommendeBy();
    this.getFlagsInputs();
    // ** invoke function getTermsAndConditionText()
    this.getTermsAndConditionText();
    // ** Invoke function getLanguage()
    this.getLanguage();

    this.createRegisterForm();
    // console.log(this.registerForm.status);

  }

  // ** create register form 
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      'FirstName': ['', Validators.compose([Validators.required])],
      'LastName': ['', Validators.compose([Validators.required])],
      'Nickname': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'PhoneNumber': [null, Validators.compose([Validators.minLength(11)])],
      'Birthdate': [null],
      'Gender': [0],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      // 'recommendedbyId': [3, Validators.required],
      'acceptTerms': [null],
      'languageId': [JSON.parse(localStorage.getItem('languageId'))],
      file : this.formBuilder.group({
        fieldName: ["", !Validators.required],
        filename: ["", !Validators.required],
        fileExtension: ["", !Validators.required],
        fileData: ["", !Validators.required],
      }),
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }

  // ** create form validation
  get inputControl(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }


  // ** When resister form valid
  onRegisterFormSubmit(values):void {    
    this.getLanguageAPi(); // ** fix phone and gender in ios app
    
    // ** check if lang is not exist in localstorage add lang
    if(!localStorage.getItem('languageId')) {
      localStorage.setItem('languageId', this.registerForm.value.languageId);  
    }
    
    this.auth.registerCustomer(values).subscribe(async (response) => {
      if(response['success']) {
        var toast = await this.toastController.create({
          message: 'Sign up successful',
          duration: 2000,
          color: 'success',
        });
        toast.present();
        this.router.navigate(['/auth/sign-in'])
      }else {
        response['arrayMessage'].forEach( async(element) => {
        var toast = await this.toastController.create({
          message: element,
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      });
      }
      
    })
  
  }

 // ** get recomended by list
//  getRecommendeBy() {
//    this.subs.push(
//      this.auth.recommendedBy()
//        .subscribe(data => { this.allRecommended = data['result']; })
//    );
//  }
  
  // ** make flags inputs
  getFlagsInputs() {
    this.subs.push(
      this.appService.getLanguage()
      .subscribe(response => {this.flagsToggle = response['flagSetting'];})
    );
  }

  // ** get terms and conditions text
  getTermsAndConditionText() {
    this.subs.push(
      this.auth.getTermsAndCondition()
      .subscribe(response => this.termsAndConditionsText = response['result'])
    );
  }

  // ** Get language icons
  getLanguageId(item: any) {
    this.registerForm.patchValue({
      languageId: item.id
    })
    localStorage.setItem('languageId', item.id);
    this.selected = item;
    this.languageTitle = item.name;
    this.languageIcon = item.icon;
  }

    // ** Get All Language
    getLanguage() {
      this.subs.push(
        this.appService.getLanguage()
        .subscribe(response => {
          this.langItems = response['result'].result;
        })
      );
    }
    // ** fix phone and gender in ios app
    getLanguageAPi() {
      this.appService.getLanguage().subscribe(response => this.toggleInputs = response['flagSetting'])
    }

  isActive(item) {return this.selected === item;};

  // modal bootstrap
  openChooseLanguage(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy(): void { this.subs.forEach(el => el.unsubscribe())}
  
}
