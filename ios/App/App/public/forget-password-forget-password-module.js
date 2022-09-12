(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"],{

/***/ "AEY0":
/*!****************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.module.ts ***!
  \****************************************************************/
/*! exports provided: ForgetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password-routing.module */ "jCxa");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password.page */ "ID2u");







let ForgetPasswordPageModule = class ForgetPasswordPageModule {
};
ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"],
        ],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
    })
], ForgetPasswordPageModule);



/***/ }),

/***/ "HsM3":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forget-password/forget-password.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-back-button  defaultHref=\"/auth/sign-in\" color=\"primary\"> </ion-back-button>\n\n  <div class=\"top-title\">\n    <h3> Forgot Password</h3>\n  </div>\n\n<ion-content>\n\n<ion-grid>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\" size-lg=\"6\">\n      <form [formGroup]=\"forgetPasswordForm\" *ngIf=\"forgetPasswordForm\"\n      (ngSubmit)=\"onResetPassword()\">\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"Email\" required></ion-input>\n        </ion-item>\n        <ion-text color=\"danger\" class=\"error ion-padding\" *ngIf=\"forgetPasswordFormErrors.Email\">\n          {{forgetPasswordFormErrors.Email }}\n        </ion-text>\n\n        <ion-button type=\"button\" [disabled]=\"forgetPasswordForm.invalid\" (click)=\"onResetPassword()\" color=\"primary\"> Reset </ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "ID2u":
/*!**************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.page.ts ***!
  \**************************************************************/
/*! exports provided: ForgetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function() { return ForgetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forget_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forget-password.page.html */ "HsM3");
/* harmony import */ var _forget_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-password.page.scss */ "VUPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "qXBG");







let ForgetPasswordPage = class ForgetPasswordPage {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.forgetPasswordFormErrors = {
            Email: '',
        };
        this.forgetPasswordValidationMessages = {
            Email: {
                required: 'Email required',
                invalidEmail: 'Email must be valid',
            },
        };
    }
    ngOnInit() {
        this.buildForgetPasswordForm();
    }
    buildForgetPasswordForm() {
        this.forgetPasswordForm = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_theme_app_validators__WEBPACK_IMPORTED_MODULE_5__["emailValidator"]])],
        });
        this.forgetPasswordForm.valueChanges.subscribe((data) => this.validateForgetPasswordForm());
    }
    validateForgetPasswordForm(isSubmitting = false) {
        for (const field of Object.keys(this.forgetPasswordFormErrors)) {
            this.forgetPasswordFormErrors[field] = '';
            const input = this.forgetPasswordForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.forgetPasswordFormErrors[field] = this.forgetPasswordValidationMessages[field][error];
                }
            }
        }
    }
    onResetPassword() {
        console.log(this.forgetPasswordForm.value.Email);
        this.authService.resetPassword(this.forgetPasswordForm.value.Email, 'http://localhost:8100/auth/forget-password')
            .subscribe(res => {
            console.log(res);
        });
    }
};
ForgetPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forget_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgetPasswordPage);



/***/ }),

/***/ "VUPA":
/*!****************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  margin: 30px 0;\n  padding: 0 20px;\n}\n\nform {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCAwO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "jCxa":
/*!************************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ForgetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function() { return ForgetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password.page */ "ID2u");




const routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }
];
let ForgetPasswordPageRoutingModule = class ForgetPasswordPageRoutingModule {
};
ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetPasswordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=forget-password-forget-password-module.js.map