(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "D0FZ":
/*!************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.module.ts ***!
  \************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "XAwb");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "rYTE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "XAwb":
/*!********************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "rYTE");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "aENZ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-image\" no-scroll>\n\n  <div class=\"login-logo\">\n    <ion-img src=\"../../../assets/images/logo.png\" loading=\"lazy\" alt=\"login-img\"></ion-img>\n  </div>\n\n  <div class=\"sign-in-form\">\n    <div class=\"sign-in-title\">\n      <h3> LOG IN</h3>\n    </div>\n    <ion-grid [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginFormSubmit(loginForm.value)\" class=\"padding\">\n      <ion-row class=\"ion-justify-content-center\">\n\n        <ion-col size=\"12\" size-lg=\"6\" >\n          <div class=\"form-group\" #theItem>\n            <label>\n              Email\n              <!-- <ion-icon name=\"person\"></ion-icon> {{ 'Email' | translate }} -->\n            </label>\n            <input type=\"text\" formControlName=\"Email\" required  />\n            <ion-text color=\"danger\" *ngIf=\"loginFormErrors.Email\">{{loginFormErrors.Email}}</ion-text>\n\n          </div>\n\n          <div class=\"form-group\" #theItem>\n            <label>\n              <!-- <ion-icon name=\"lock-closed-sharp\"></ion-icon> {{ 'Password' | translate }} -->\n              Password\n            </label>\n            <input [type]=\"showPasswordItem ? 'text' : 'password'\" formControlName=\"Password\" required />\n            <ion-icon (click)=\"showPassword()\" class=\"icon-eye\" name=\"eye-outline\"></ion-icon>\n            <ion-text color=\"danger\" *ngIf=\"loginFormErrors.Password\">{{loginFormErrors.Password}}</ion-text>\n\n          </div>\n\n          <p style=\"text-align: center; font-size: 16px; font-weight: 600;\">\n              <a style=\"color: #fff;text-decoration: none\" routerLink=\"/auth/forget-password\"> Forgotten password? </a> </p>\n\n          <ion-button (click)=\"onLoginFormSubmit(loginForm.value)\" [disabled]=\"isLoading || !loginForm.valid\">\n            LOG IN\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <p class=\"no-account\">\n  By continuing, you agree to accept our\n  <a routerLink=\"/policy\" style=\"color: #8AFA6F;\"> Privacy Policy & Terms of Service. </a><br /><br />\n  Don't have an account?<br />\n\n  <span> <a [routerLink]=\"['/auth/sign-up']\">{{ 'Signup' | translate }} </a> </span> </p>\n\n</ion-content>\n");

/***/ }),

/***/ "gEkU":
/*!************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: url('login.png') center top no-repeat;\n  background-size: cover;\n  max-width: 100%;\n}\n\n.login-logo ion-img {\n  max-width: 45%;\n  width: 300px;\n  height: auto;\n  margin: 40px auto;\n}\n\n.sign-in-title h3 {\n  text-align: left !important;\n  font-size: 22px;\n  font-weight: 500;\n  color: #000;\n  padding: 0 0 0 10px;\n  margin: 0;\n}\n\n.sign-in-form {\n  padding: 30px 20px 0 20px;\n}\n\n.sign-in-form .form-group {\n  margin: 30px 0;\n  position: relative;\n}\n\n.sign-in-form .form-group label {\n  display: block;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n}\n\n.sign-in-form .form-group input {\n  width: 100%;\n  height: 50px;\n  border-radius: 30px;\n  border: 1px solid #C4C4C4;\n  padding: 0 10px;\n  color: #000 !important;\n  position: relative;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: var(--ion-background-color);\n}\n\n.sign-in-form .form-group ion-icon.icon-eye {\n  color: #000;\n  font-size: 25px !important;\n  position: absolute;\n  right: 20px;\n  top: 50px;\n  cursor: pointer;\n}\n\n.sign-in-form ion-button {\n  --background: var(--ion-color-second-app)!important;\n  --border-radius: 50px!important;\n  font-size: 18px !important;\n  font-weight: 400;\n  width: 100%;\n  height: 50px;\n  --box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.16);\n  margin: 20px 0;\n}\n\np.no-account {\n  color: #000;\n  font-size: 14px;\n  text-align: center;\n  width: 80%;\n  margin: auto;\n  line-height: 26px;\n  font-weight: 500;\n}\n\np.no-account span {\n  color: #A7F781;\n  font-weight: 600;\n}\n\np.no-account span a {\n  color: #A7F781;\n  text-decoration: none;\n}\n\n.ios .sign-in-form {\n  padding: 80px 0 0 0;\n}\n\n.ios .sign-in-form p {\n  padding-left: 21px;\n}\n\n.intro-video {\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7RUFJQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUVFLHlCQUFBO0FBRkY7O0FBSUU7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFLSTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFITjs7QUFNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUFKTjs7QUFPSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBTE47O0FBU0U7RUFDRSxtREFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxjQUFBO0FBUEo7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBV0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFVSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQVJOOztBQWNBO0VBQ0csbUJBQUE7QUFYSDs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0FBWEYiLCJmaWxlIjoic2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWFnZXtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi5wbmcpIGNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIGlvbi1pbWcge1xuICAgIG1heC13aWR0aDogNDUlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIH1cbn1cblxuLnNpZ24taW4tdGl0bGUgaDMge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNpZ24taW4tZm9ybSB7XG5cbiAgcGFkZGluZzogMzBweCAyMHB4IDAgMjBweDtcblxuICAuZm9ybS1ncm91cCB7XG5cbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNEM0QzQ7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICBpb24taWNvbi5pY29uLWV5ZSB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweCFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHRvcDogNTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCkhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiAycHggNHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cblxufVxuXG5wLm5vLWFjY291bnQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICNBN0Y3ODE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjQTdGNzgxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cbi5pb3MgLnNpZ24taW4tZm9ybSB7XG4gICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xufVxuXG4uaW9zIC5zaWduLWluLWZvcm0gcCB7XG4gIHBhZGRpbmctbGVmdDogMjFweDtcbn1cblxuLmludHJvLXZpZGVvIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "rUfF":
/*!***************************************************!*\
  !*** ./src/app/shared/models/loginCredentials.ts ***!
  \***************************************************/
/*! exports provided: loginCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCredentials", function() { return loginCredentials; });
class loginCredentials {
}


/***/ }),

/***/ "rYTE":
/*!**********************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.page.ts ***!
  \**********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-in.page.html */ "aENZ");
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.page.scss */ "gEkU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_loginCredentials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/loginCredentials */ "rUfF");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "qXBG");











let SignInPage = class SignInPage {
    constructor(formBuilder, router, toastController, route, storageService, 
    // public translate: TranslateService,
    auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.storageService = storageService;
        this.auth = auth;
        this.isLoading = false;
        this.showPasswordItem = false;
        this.subs = [];
        this.loginFormErrors = {
            Email: '',
            Password: '',
        };
        this.loginValidationMessages = {
            Email: {
                required: 'Email required',
                invalidEmail: 'Email must be valid',
            },
            Password: {
                required: 'Password required',
            },
        };
    }
    ngOnInit() {
        this.returnUrl =
            this.route.snapshot.queryParams.returnUrl || '/courses/tabs/all-courses';
        this.loginCredentials = new src_app_shared_models_loginCredentials__WEBPACK_IMPORTED_MODULE_7__["loginCredentials"]();
        this.buildLoginForm();
    }
    goToUpdatedUser() {
        this.router.navigateByUrl('/courses/tabs/all-courses');
    }
    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__["emailValidator"]])],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.loginForm.valueChanges.subscribe((data) => this.validateLoginForm());
    }
    validateLoginForm(isSubmitting = false) {
        for (const field of Object.keys(this.loginFormErrors)) {
            this.loginFormErrors[field] = '';
            const input = this.loginForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.loginFormErrors[field] = this.loginValidationMessages[field][error];
                }
            }
        }
    }
    onLoginFormSubmit(values) {
        this.validateLoginForm(true);
        if (this.loginForm.valid) {
            this.isLoading = true;
            Object.assign(this.loginCredentials, this.loginForm.value);
            this.auth.signInUser(this.loginCredentials).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (response['success'] === true) {
                    this.storageService.setAccessToken(response['result']);
                    this.storageService.setExpiresIn(new Date(response['.expires']).getTime() / 1000 // .expires
                    );
                    // this.signInService.IsLoggedIn();
                    var toast = yield this.toastController.create({
                        message: 'You signed in successfully!',
                        duration: 2000,
                        color: 'success',
                    });
                    toast.present();
                    this.router.navigateByUrl(this.returnUrl);
                }
                else {
                    var toast = yield this.toastController.create({
                        message: 'Username or password incorrect',
                        duration: 2000,
                        color: 'danger',
                    });
                    toast.present();
                }
            }), (error) => {
                Object.keys(error).forEach((key) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var toast = yield this.toastController.create({
                        message: error[key][0],
                        duration: 2000,
                        color: 'danger',
                    });
                    toast.present();
                }));
                this.loginForm.reset();
                this.isLoading = false;
            }, () => (this.isLoading = false));
        }
    }
    // * show and hide password
    showPassword() {
        this.showPasswordItem = !this.showPasswordItem;
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map