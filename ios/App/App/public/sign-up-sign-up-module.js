(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "6y8N":
/*!**********************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.page.ts ***!
  \**********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.page.html */ "hpKe");
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.page.scss */ "Iqdo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_helpers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/helpers.service */ "TaCb");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");













let SignUpPage = class SignUpPage {
    constructor(auth, translate, formBuilder, toastController, router, helpers, appService, modalService) {
        this.auth = auth;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.router = router;
        this.helpers = helpers;
        this.appService = appService;
        this.modalService = modalService;
        this.submitted = false;
        this.isLoading = false;
        this.closeResult = '';
        this.itemClass = '';
        this.languageTitle = '';
        this.subs = [];
        this.gender = [
            { name: 'male', value: 0 },
            { name: 'female', value: 1 }
        ];
    }
    // ** upload image file
    uploadImg(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const imgString = yield this.helpers.toBase64(event.target.files[0]);
            this.registerForm.get('file').patchValue({
                fieldName: 'image',
                filename: event.target.files[0].name,
                fileExtension: this.helpers.getExtension(event.target.files[0].name),
                fileData: this.helpers.validBase64(imgString),
            });
        });
    }
    ngOnInit() {
        this.getRecommendeBy();
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
            'FirstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'LastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'Nickname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_theme_app_validators__WEBPACK_IMPORTED_MODULE_5__["emailValidator"]])],
            'PhoneNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11)])],
            'Birthdate': [null],
            'Gender': [0],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'recommendedbyId': [3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'acceptTerms': [null],
            'languageId': [JSON.parse(localStorage.getItem('languageId'))],
            file: this.formBuilder.group({
                fieldName: ["", !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                filename: ["", !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                fileExtension: ["", !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                fileData: ["", !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
        }, { validator: Object(src_theme_app_validators__WEBPACK_IMPORTED_MODULE_5__["matchingPasswords"])('password', 'confirmPassword') });
    }
    // ** create form validation
    get inputControl() {
        return this.registerForm.controls;
    }
    // ** When resister form valid
    onRegisterFormSubmit(values) {
        this.getLanguageAPi(); // ** fix phone and gender in ios app
        // ** check if lang is not exist in localstorage add lang
        if (!localStorage.getItem('languageId')) {
            localStorage.setItem('languageId', this.registerForm.value.languageId);
        }
        this.auth.registerCustomer(values).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response['success']) {
                var toast = yield this.toastController.create({
                    message: 'Sign up successful',
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
                this.router.navigate(['/auth/sign-in']);
            }
            else {
                response['arrayMessage'].forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var toast = yield this.toastController.create({
                        message: element,
                        duration: 2000,
                        color: 'danger',
                    });
                    toast.present();
                }));
            }
        }));
    }
    // ** get recomended by list
    getRecommendeBy() {
        this.subs.push(this.auth.recommendedBy()
            .subscribe(data => { this.allRecommended = data['result']; }));
    }
    // ** make flags inputs
    getFlagsInputs() {
        this.subs.push(this.appService.getLanguage()
            .subscribe(response => { this.flagsToggle = response['flagSetting']; }));
    }
    // ** get terms and conditions text
    getTermsAndConditionText() {
        this.subs.push(this.auth.getTermsAndCondition()
            .subscribe(response => this.termsAndConditionsText = response['result']));
    }
    // ** Get language icons
    getLanguageId(item) {
        this.registerForm.patchValue({
            languageId: item.id
        });
        localStorage.setItem('languageId', item.id);
        this.selected = item;
        this.languageTitle = item.name;
    }
    // ** Get All Language
    getLanguage() {
        this.subs.push(this.appService.getLanguage()
            .subscribe(response => {
            this.langItems = response['result'].result;
        }));
    }
    // ** fix phone and gender in ios app
    getLanguageAPi() {
        this.appService.getLanguage().subscribe(response => this.toggleInputs = response['flagSetting']);
    }
    isActive(item) { return this.selected === item; }
    ;
    // modal bootstrap
    openChooseLanguage(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
        });
    }
    getDismissReason2(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnDestroy() { this.subs.forEach(el => el.unsubscribe()); }
};
SignUpPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_helpers_service__WEBPACK_IMPORTED_MODULE_10__["HelpersService"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignUpPage);



/***/ }),

/***/ "Iqdo":
/*!************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: url('login.png') center top no-repeat;\n  background-size: cover;\n  max-width: 100%;\n}\n\n.sign-up {\n  margin: 20px 0;\n}\n\n.sign-up h3 {\n  text-align: left !important;\n  font-size: 22px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  padding-left: 10px;\n}\n\n.sign-up .form-group {\n  position: relative;\n}\n\n.sign-up .form-group label {\n  display: block;\n  padding-bottom: 5px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n\n.sign-up .form-group input, .sign-up .form-group select {\n  width: 100%;\n  height: 50px;\n  border-radius: 30px;\n  border: 1px solid #C4C4C4;\n  padding: 0 10px;\n  color: #fff !important;\n  position: relative;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sign-up .form-group input[type=file] {\n  border: none !important;\n  background-color: #fff;\n  padding-top: 13px;\n}\n\n.sign-up .form-group ion-icon.icon-eye {\n  color: #000;\n  font-size: 25px !important;\n  position: absolute;\n  right: 20px;\n  top: 43px;\n  cursor: pointer;\n}\n\n.sign-up ion-button {\n  --background: var(--ion-color-second-app)!important;\n  --border-radius: 50px!important;\n  font-size: 18px !important;\n  font-weight: 400;\n  width: 100%;\n  height: 50px;\n  --box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.16);\n}\n\n.sign-up p.no-account {\n  color: var(--ion-color-second-app) !important;\n  font-size: 16px;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.sign-up p.no-account span {\n  color: #8AFA6F;\n}\n\n.sign-up p.no-account span a {\n  color: #8AFA6F !important;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.ios .form ion-item ion-label {\n  margin: 0;\n  font-size: 12px;\n}\n\n.ios input.native-input.sc-ion-input-ios {\n  font-size: 12px !important;\n  padding: 0;\n}\n\n.ios ion-text.error {\n  font-size: 11px !important;\n}\n\n.form-group {\n  margin-bottom: 0 !important;\n}\n\n.lang-bg {\n  margin: 30px 0;\n}\n\n.lang-bg .lang-img {\n  width: 40px;\n  height: 40px;\n  margin: auto;\n  cursor: pointer;\n  border-radius: 40px;\n  -web-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.lang-bg h3 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 10px 0;\n  text-transform: capitalize;\n}\n\n.active {\n  transform: scale(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7RUFJQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUdFLGtCQUFBO0FBSEo7O0FBT0k7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTE47O0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5OOztBQVNJO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBUE47O0FBVUk7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVJOOztBQVlFO0VBQ0UsbURBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBVko7O0FBYUU7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBWEo7O0FBYUk7RUFDRSxjQUFBO0FBWE47O0FBWU07RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFWUjs7QUFrQkE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQWZGOztBQWtCQTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtBQWZGOztBQWtCQTtFQUNFLDBCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsMkJBQUE7QUFmRjs7QUFrQkE7RUFFRSxjQUFBO0FBaEJGOztBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBR0EsZ0NBQUE7QUFoQko7O0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFqQko7O0FBcUJBO0VBS0UscUJBQUE7QUFsQkYiLCJmaWxlIjoic2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWFnZXtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi5wbmcpIGNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2lnbi11cCB7XG5cbiAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgaDMge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWdyb3VwIHtcblxuICAgIC8vIG1hcmdpbjogMzBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzRDNEM0O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl17XG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICB9XG5cbiAgICBpb24taWNvbi5pY29uLWV5ZSB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweCFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHRvcDogNDNweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCkhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiAycHggNHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIH1cblxuICBwLm5vLWFjY291bnQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCkhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjOEFGQTZGO1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjOEFGQTZGICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi5pb3MgLmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVse1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlvcyBpbnB1dC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pb3MgaW9uLXRleHQuZXJyb3Ige1xuICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmxhbmctYmcge1xuXG4gIG1hcmdpbjogMzBweCAwO1xuXG4gIC5sYW5nLWltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAtd2ViLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG59XG5cbi5hY3RpdmV7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59Il19 */");

/***/ }),

/***/ "NYG7":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@angular-material-components/file-input/fesm2015/angular-material-components-file-input.js ***!
  \*****************************************************************************************************************/
/*! exports provided: AcceptValidator, MaxSizeValidator, NgxMatFileInputComponent, NgxMatFileInputIcon, NgxMatFileInputModule, calculFileSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptValidator", function() { return AcceptValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxSizeValidator", function() { return MaxSizeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatFileInputComponent", function() { return NgxMatFileInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatFileInputIcon", function() { return NgxMatFileInputIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatFileInputModule", function() { return NgxMatFileInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculFileSize", function() { return calculFileSize; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");












/**
 * @fileoverview added by tsickle
 * Generated from: lib/file-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let nextUniqueId = 0;
class NgxMatInputBase {
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
if (false) {}
/** @type {?} */
const _NgxMatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(NgxMatInputBase);
class NgxMatFileInputIcon {
}
NgxMatFileInputIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                selector: '[ngxMatFileInputIcon]'
            },] }
];
class NgxMatFileInputComponent extends _NgxMatInputMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _platform
     * @param {?} _cd
     * @param {?} ngControl
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} _defaultErrorStateMatcher
     */
    constructor(_elementRef, _platform, _cd, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._cd = _cd;
        this.ngControl = ngControl;
        this.color = 'primary';
        this.fileNames = null;
        this._uid = `ngx-mat-fileinput-${nextUniqueId++}`;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.focused = false;
        this.controlType = 'ngx-mat-file-input';
        this.autofilled = false;
        /**
         * Function when touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * Function when changed
         */
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._disabled = false;
        this._multiple = false;
        this.placeholder = 'Choose a file';
        this.separator = ',';
        this._required = false;
        this._readonly = true;
        this.id = this.id;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    get id() { return this._id; }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) { this._id = value || this._uid; }
    /**
     * @return {?}
     */
    get multiple() { return this._multiple; }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    get readonly() { return this._readonly; }
    /**
     * @param {?} value
     * @return {?}
     */
    set readonly(value) { this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * Limiting accepted file types
     * Example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" — Accept PNG or JPEG files.
     * @return {?}
     */
    get accept() { return this._accept; }
    /**
     * @param {?} value
     * @return {?}
     */
    set accept(value) {
        this._accept = value;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._updateInputValue(value);
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._inputValueRef.nativeElement.focus(options);
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    _focusChanged(isFocused) {
        if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    }
    /**
     * Mark the field as touched
     * @return {?}
     */
    _markAsTouched() {
        this._onTouched();
        this._cd.markForCheck();
        this.stateChanges.next();
    }
    /**
     * @protected
     * @return {?}
     */
    _isBadInput() {
        /** @type {?} */
        let validity = ((/** @type {?} */ (this._inputValueRef.nativeElement))).validity;
        return validity && validity.badInput;
    }
    /**
     * @return {?}
     */
    get empty() {
        return !this._inputValueRef.nativeElement.value && !this._isBadInput() &&
            !this.autofilled;
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    openFilePicker(event) {
        this._inputFileRef.nativeElement.click();
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this._markAsTouched();
    }
    /**
     * @param {?} filelist
     * @return {?}
     */
    handleFiles(filelist) {
        if (filelist.length > 0) {
            /** @type {?} */
            const files = new Array();
            for (let i = 0; i < filelist.length; i++) {
                files.push(filelist.item(i));
            }
            this._updateInputValue(files);
            this._resetInputFile();
            this._onChange(this.multiple ? files : files[0]);
        }
    }
    /**
     * Handles a click on the control's container.
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) { }
    ;
    /**
     * @private
     * @return {?}
     */
    _resetInputFile() {
        this._inputFileRef.nativeElement.value = "";
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    _updateInputValue(files) {
        /** @type {?} */
        let text = null;
        if (files) {
            if (Array.isArray(files)) {
                text = this._multiple
                    ? files.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.name)).join(this.separator)
                    : files[0].name;
            }
            else {
                text = files.name != null ? files.name : null;
            }
        }
        this._inputValueRef.nativeElement.value = text;
    }
}
NgxMatFileInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'ngx-mat-file-input',
                template: "<input #inputValue autocomplete=\"off\" class=\"mat-input-element mat-form-field-autofill-control\" [attr.id]='id'\r\n  [attr.placeholder]='placeholder' [disabled]='disabled' [required]='required' [attr.readonly]='readonly || null'\r\n  [attr.aria-describedby]='_ariaDescribedby || null' [attr.aria-invalid]='errorState'\r\n  [attr.aria-required]='required.toString()'>\r\n<div class=\"mat-form-field-suffix\">\r\n  <button matSuffix mat-icon-button [color]=\"color\" class=\"button-browse\"  (click)=\"openFilePicker($event)\" type=\"button\"\r\n   [disabled]=\"disabled\">\r\n    <mat-icon *ngIf=\"!_customIcon\" class=\"ngx-mat-file-input--default-icon\">attach_file</mat-icon>\r\n    <ng-content select=\"[ngxMatFileInputIcon]\"></ng-content>\r\n  </button>\r\n</div>\r\n<input type=\"file\" #inputFile (change)=\"handleFiles($event.target.files)\" class=\"input-file\"\r\n  [multiple]=\"multiple\" [accept]=\"accept\">",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                host: {
                    'class': 'ngx-mat-file-input'
                },
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => NgxMatFileInputComponent)) }
                ],
                exportAs: 'ngx-mat-file-input',
                styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{align-items:center;display:flex;height:18px;line-height:18px}.ngx-mat-file-input .input-file{display:block;height:0;visibility:hidden;width:0}"]
            }] }
];
/** @nocollapse */
NgxMatFileInputComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"] }
];
NgxMatFileInputComponent.propDecorators = {
    _inputFileRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }],
    _inputValueRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputValue', { static: true },] }],
    _customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NgxMatFileInputIcon,] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    separator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/file-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatFileInputModule {
}
NgxMatFileInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                declarations: [
                    NgxMatFileInputComponent,
                    NgxMatFileInputIcon
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]
                ],
                exports: [
                    NgxMatFileInputComponent,
                    NgxMatFileInputIcon
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/file-input-type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/file-input-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} number
 * @return {?}
 */
function calculFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    }
    else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    }
    else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/max-size.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Validator for size of file
 * @param {?} max Max of size of file (in bytes)
 * @return {?}
 */
function MaxSizeValidator(max) {
    return (/**
     * @param {?} ctrl
     * @return {?}
     */
    (ctrl) => {
        max = Number(max);
        if (isNaN(max)) {
            throw 'MaxSizeValidator: max of size of file is invalid';
        }
        if (!ctrl.value)
            return null;
        /** @type {?} */
        let files = ctrl.value;
        if (!Array.isArray(ctrl.value)) {
            files = [ctrl.value];
        }
        if (!files.length)
            return null;
        /** @type {?} */
        const add = (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a + b);
        /** @type {?} */
        const sumSize = files.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.size)).reduce(add);
        if (sumSize > max) {
            return {
                maxSize: true
            };
        }
        return null;
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/accept.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * @param {?} accept Allowable type of file
 * @return {?}
 */
function AcceptValidator(accept) {
    return (/**
     * @param {?} ctrl
     * @return {?}
     */
    (ctrl) => {
        if (!accept) {
            throw ('AcceptValidator: allowable type of file can not be empty');
        }
        if (ctrl.value == null)
            return null;
        if (!accept.includes(ctrl.value.type)) {
            return {
                accept: true
            };
        }
        return null;
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-material-components-file-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-material-components-file-input.js.map


/***/ }),

/***/ "OUEP":
/*!********************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "6y8N");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "TaCb":
/*!****************************************************!*\
  !*** ./src/app/shared/services/helpers.service.ts ***!
  \****************************************************/
/*! exports provided: HelpersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpersService", function() { return HelpersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.constants */ "1Lwo");




let HelpersService = class HelpersService {
    constructor(translate) {
        this.translate = translate;
        this.baseUrl = src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
    }
    toBase64(file) {
        console.log(file);
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    correctImageUrl(...args) {
        if (typeof args[0] === 'string') {
            const url = args[0].replace(/\\/g, '/');
            const newUrl = `${this.baseUrl}/${url}`;
            return newUrl;
        }
        else if (args[0] instanceof Array) {
            const images = [];
            args[0].forEach((img) => images.push(this.correctImageUrl(img)));
            return images;
        }
    }
    getExtension(fileName) {
        return fileName.split('.').pop();
    }
    validBase64(value) {
        return value.substr(value.indexOf(',') + 1);
    }
    getIndexById(id, array) {
        const index = array.map((x) => x.id).indexOf(id);
        return index;
    }
    getTranslation(word) {
        let translation = '';
        this.translate.get(word).subscribe(res => translation = res);
        return translation;
    }
};
HelpersService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
HelpersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HelpersService);



/***/ }),

/***/ "Tj54":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/icon.js ***!
  \*********************************************************/
/*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */
function getMatIconNameNotFoundError(iconName) {
    return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` +
        `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` +
        `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
class SvgIconConfig {
    constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
    }
}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
class MatIconRegistry {
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /** Cache for icons loaded by direct URLs. */
        this._cachedIconsByUrl = new Map();
        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
        this._inProgressUrlFetches = new Map();
        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
        this._fontCssClassesByAlias = new Map();
        /** Registered icon resolver functions. */
        this._resolvers = [];
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon resolver function with the registry. The function will be invoked with the
     * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
     * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
     * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
     * will be invoked in the order in which they have been registered.
     * @param resolver Resolver function to be registered.
     */
    addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);
        // TODO: add an ngDevMode check
        if (!cleanLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);
        if (!cleanLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    registerFontClassAlias(alias, className = alias) {
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    setDefaultFontSetClass(className) {
        this._defaultFontSetClass = className;
        return this;
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    getDefaultFontSetClass() {
        return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(svg => this._cachedIconsByUrl.set(url, svg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(svg => cloneSvg(svg)));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name, namespace = '') {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        // Return (copy of) cached icon if possible.
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // Otherwise try to resolve the config from one of the resolver functions.
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
            this._svgIconConfigs.set(key, config);
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
    }
    ngOnDestroy() {
        this._resolvers = [];
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    _getSvgFromConfig(config) {
        if (config.svgText) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(this._svgElementFromConfig(config)));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(svg => cloneSvg(svg)));
        }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        const iconSetFetchRequests = iconSetConfigs
            .filter(iconSetConfig => !iconSetConfig.svgText)
            .map(iconSetConfig => {
            return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
                const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            // TODO: add an ngDevMode check
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        }));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
            const config = iconSetConfigs[i];
            // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
            // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
            // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
            // some of the parsing.
            if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                const svg = this._svgElementFromConfig(config);
                const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(svgText => config.svgText = svgText), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => this._svgElementFromConfig(config)));
    }
    /**
     * Loads the content of the icon set URL specified in the
     * SvgIconConfig and attaches it to the config.
     */
    _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }
        return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(svgText => config.svgText = svgText));
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractSvgIconFromSet(iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        const iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(iconElement, options);
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        const svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */
    _svgElementFromString(str) {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        // TODO: add an ngDevMode check
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    _toSvgElement(element) {
        const svg = this._svgElementFromString('<svg></svg>');
        const attributes = element.attributes;
        // Copy over all the attributes from the `symbol` to the new SVG, except the id.
        for (let i = 0; i < attributes.length; i++) {
            const { name, value } = attributes[i];
            if (name !== 'id') {
                svg.setAttribute(name, value);
            }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    _fetchIcon(iconConfig) {
        var _a;
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        // TODO: add an ngDevMode check
        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);
        // TODO: add an ngDevMode check
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: 'text', withCredentials }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this._inProgressUrlFetches.delete(url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    _addSvgIconSetConfig(namespace, config) {
        const configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    }
    /** Parses a config's text into an SVG element. */
    _svgElementFromConfig(config) {
        if (!config.svgElement) {
            const svg = this._svgElementFromString(config.svgText);
            this._setSvgAttributes(svg, config.options);
            config.svgElement = svg;
        }
        return config.svgElement;
    }
    /** Tries to create an icon config through the registered resolver functions. */
    _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
            const result = this._resolvers[i](name, namespace);
            if (result) {
                return isSafeUrlWithOptions(result) ?
                    new SvgIconConfig(result.url, null, result.options) :
                    new SvgIconConfig(result, null);
            }
        }
        return undefined;
    }
}
MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"])); }, token: MatIconRegistry, providedIn: "root" });
MatIconRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
];
MatIconRegistry.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] }
];
/** @docs-private */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */
const ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}
function isSafeUrlWithOptions(value) {
    return !!(value.url && value.options);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.
/** @docs-private */
class MatIconBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */
function MAT_ICON_LOCATION_FACTORY() {
    const _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => _location ? (_location.pathname + _location.search) : ''
    };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
const ɵ0 = attr => `[${attr}]`;
/** Selector that can be used to find all elements that are using a `FuncIRI`. */
const funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
class MatIcon extends _MatIconMixinBase {
    constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        super(elementRef);
        this._iconRegistry = _iconRegistry;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._inline = false;
        /** Subscription to the current in-progress SVG icon request. */
        this._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     */
    get inline() {
        return this._inline;
    }
    set inline(inline) {
        this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
    }
    /** Name of the icon in the SVG icon set. */
    get svgIcon() { return this._svgIcon; }
    set svgIcon(value) {
        if (value !== this._svgIcon) {
            if (value) {
                this._updateSvgIcon(value);
            }
            else if (this._svgIcon) {
                this._clearSvgElement();
            }
            this._svgIcon = value;
        }
    }
    /** Font set that the icon is a part of. */
    get fontSet() { return this._fontSet; }
    set fontSet(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontSet) {
            this._fontSet = newValue;
            this._updateFontIconClasses();
        }
    }
    /** Name of an icon within a font set. */
    get fontIcon() { return this._fontIcon; }
    set fontIcon(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontIcon) {
            this._fontIcon = newValue;
            this._updateFontIconClasses();
        }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return parts;
            default: throw Error(`Invalid icon name: "${iconName}"`); // TODO: add an ngDevMode check
        }
    }
    ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        this._updateFontIconClasses();
    }
    ngAfterViewChecked() {
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && cachedElements.size) {
            const newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    }
    ngOnDestroy() {
        this._currentIconFetch.unsubscribe();
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    }
    _usingFontIcon() {
        return !this.svgIcon;
    }
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        const styleTags = svg.querySelectorAll('style');
        for (let i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    }
    _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
            return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */
    _cleanupFontValue(value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((attrs, element) => {
                attrs.forEach(attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                });
            });
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach(attr => {
                const elementWithReference = elementsWithFuncIri[i];
                const value = elementWithReference.getAttribute(attr);
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    attributes.push({ name: attr, value: match[1] });
                }
            });
        }
    }
    /** Sets a new SVG icon with a particular name. */
    _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
            const [namespace, iconName] = this._splitIconName(rawName);
            if (namespace) {
                this._svgNamespace = namespace;
            }
            if (iconName) {
                this._svgName = iconName;
            }
            this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(svg => this._setSvgElement(svg), (err) => {
                const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
            });
        }
    }
}
MatIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: '<ng-content></ng-content>',
                selector: 'mat-icon',
                exportAs: 'matIcon',
                inputs: ['color'],
                host: {
                    'role': 'img',
                    'class': 'mat-icon notranslate',
                    '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
                    '[attr.data-mat-icon-name]': '_svgName || fontIcon',
                    '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
                    '[class.mat-icon-inline]': 'inline',
                    '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
            },] }
];
MatIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: MatIconRegistry },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['aria-hidden',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_ICON_LOCATION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] }
];
MatIcon.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatIconModule {
}
MatIconModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                declarations: [MatIcon],
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=icon.js.map


/***/ }),

/***/ "dCP2":
/*!************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.module.ts ***!
  \************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up-routing.module */ "OUEP");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up.page */ "6y8N");
/* harmony import */ var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-material-components/file-input */ "NYG7");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");












let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignUpPageRoutingModule"],
            _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_8__["NgxMatFileInputModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "hpKe":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-image\">\n\n  <div class=\"sign-up\">\n\n    <h3> Signup </h3>\n\n    <form  [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\">\n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"6\" *ngIf=\"flagsToggle['firstnameFlag']\">\n          <div class=\"form-group\">\n            <label >Firstname</label>\n            <input type=\"text\" formControlName=\"FirstName\" required />\n            <div *ngIf=\"inputControl['FirstName'].touched && inputControl['FirstName'].invalid\">\n              <ion-text *ngIf=\"inputControl['FirstName'].errors['required']\" color=\"danger\" class=\"error\">\n                Firstname is required\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"6\" *ngIf=\"flagsToggle['lastnameFlag']\">\n          <div class=\"form-group\">\n            <label>Lastname</label>\n            <input type=\"text\" formControlName=\"LastName\" required />\n            <div *ngIf=\"inputControl['LastName'].touched && inputControl['LastName'].invalid\">\n              <ion-text *ngIf=\"inputControl['LastName'].errors['required']\" color=\"danger\" class=\"error\">\n                Lastname is required\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"12\" *ngIf=\"flagsToggle['phonNumberFlag']\">\n          <div class=\"form-group\">\n            <label> Phone Number </label>\n            <input type=\"text\" formControlName=\"PhoneNumber\" minlength=\"11\" />\n            <!-- <ion-text color=\"danger\" *ngIf=\"registerForm.controls.PhoneNumber.hasError('minlength')\">\n              The phone number must be 12 numbers\n            </ion-text> -->\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"12\" *ngIf=\"flagsToggle['emailFlag']\">\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" formControlName=\"email\" required />\n            <div *ngIf=\"inputControl['email'].touched && inputControl['email'].invalid\">\n              <ion-text *ngIf=\"inputControl['email'].errors['required']\" color=\"danger\" class=\"error\">\n                Email is required\n              </ion-text>\n              <ion-text *ngIf=\"inputControl['email'].errors && inputControl['email'].errors['invalidEmail']\" color=\"danger\" class=\"error\">\n                Please add valid email\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n\n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"12\" *ngIf=\"flagsToggle['dateOfBirthFlag']\">\n          <div class=\"form-group\">\n            <label> Birthday </label>\n            <input type=\"date\" formControllName=\"Birthdate\" required />\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label> Password </label>\n            <input type=\"password\" formControlName=\"password\" required />\n            <div *ngIf=\"inputControl['password'].touched && inputControl['password'].invalid\">\n              <ion-text *ngIf=\"inputControl['password'].errors['required']\" color=\"danger\" class=\"error\">\n                Passowrod is required\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label>Confirm password</label>\n            <input formControlName=\"confirmPassword\" type=\"password\" required />\n            <div *ngIf=\"inputControl['confirmPassword'].touched && inputControl['confirmPassword'].invalid\">\n              <ion-text *ngIf=\"inputControl['confirmPassword'].errors['required']\" color=\"danger\" class=\"error\">\n                Confirm Password is required\n              </ion-text>\n              <ion-text *ngIf=\"inputControl['confirmPassword'].errors && inputControl['confirmPassword'].errors['mismatchedPasswords']\" color=\"danger\" class=\"error\">\n                Password no match\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    \n    <ion-grid >\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label> Nickname </label>\n            <input type=\"text\" formControlName=\"Nickname\" required />\n            <div *ngIf=\"inputControl['Nickname'].touched && inputControl['Nickname'].invalid\">\n              <ion-text *ngIf=\"inputControl['Nickname'].errors['required']\" color=\"danger\" class=\"error\">\n                Nickname is required\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"12\" *ngIf=\"flagsToggle['genderFlag']\">\n          <div>\n            <ion-radio-group formControlName=\"Gender\" value=\"gender\">\n              <ion-list-header>\n                <ion-label> Gender </ion-label>\n              </ion-list-header>\n\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let genderItem of gender\">\n                    <ion-item>\n                      <ion-label>{{ genderItem.name }}</ion-label>\n                      <ion-radio slot=\"start\" [value]=\"genderItem.value\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                </ion-row>\n\n            </ion-radio-group>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"12\" *ngIf=\"flagsToggle['recommendedByFlag']\">\n          <div class=\"form-group\">\n              <label>{{ 'Recommended' | translate}}</label>\n              <select formControlName=\"recommendedbyId\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                <option *ngFor=\"let item of allRecommended\" [ngValue]=\"item.id\">\n                  {{ item.recommendedByTranslations[0].description }}\n                </option>\n              </select>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"flagsToggle\">\n      <ion-row>\n        <ion-col size=\"12\" *ngIf=\"flagsToggle['uploadImageFlag']\">\n          <div class=\"form-group\">\n            <label>Upload image</label>\n            <input\n              type=\"file\"\n              class=\"custom-file-input\"\n              multiple=\"false\"\n              accept=\"image/*\"\n              (change)=\"uploadImg($event)\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-list>\n            <ion-item>\n            <ion-label style=\"cursor: pointer;\" (click)=\"openChooseLanguage(content)\">Choose Language: <b> {{ languageTitle }} </b></ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n              <ion-label>I agree to</ion-label>\n              <ion-checkbox formControlName=\"acceptTerms\" slot=\"start\"></ion-checkbox>\n              <ion-text\n              style=\"cursor: pointer; \n              z-index: 20000000000;\" (click)=\"open(contentTerms)\"> Terms & Conditions \n              </ion-text>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row ion-align-items-center>\n        <ion-col size=\"12\">\n          <ion-button\n          [disabled]=\"registerForm.invalid\"\n          (click)=\"onRegisterFormSubmit(registerForm.value)\"\n          >\n            Signup\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row ion-align-items-center>\n        <ion-col size=\"12\">\n          <p class=\"no-account\">\n            Do you have an account? <span>\n              <a [routerLink]=\"['/auth/sign-in']\"> Sign in </a>\n            </span>\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n\n  </div>\n\n</ion-content>\n\n <!-- Terms And Condition -->\n <ng-template #contentTerms let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Terms & Conditions</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\"></button>\n  </div>\n  <div class=\"modal-body\">\n    <ion-text \n    [innerHTML]=\"termsAndConditionsText['termsAndConditionsTranslation'][0].content | sanitizeHtml\" >\n    </ion-text>\n  </div>\n  <!-- <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Agr</button>\n  </div> -->\n</ng-template>\n<!-- Terms And Condition -->\n\n  <!-- Choose language -->\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Choose Language </h4>\n      <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\"></button>\n    </div>\n    <div class=\"modal-body\">\n      <ion-grid class=\"lang-bg\">\n        <ion-row>\n          <ion-col style=\"text-align: center;\" *ngFor=\"let item of langItems; let i = index\"  size-xs=\"4\" size-md=\"3\">\n            <ion-img\n              [ngClass]=\"{'active': isActive(item)}\"\n              (click)=\"getLanguageId(item)\"\n              [src]=\"item.icon\" class=\"lang-img\"></ion-img>\n            <h3> <ion-text color=\"primary\"> {{ item.name }} </ion-text> </h3>\n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n    </div>\n  </ng-template>\n  <!-- Choose language -->");

/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module.js.map