(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-edit-user-module"],{

/***/ "2ZZm":
/*!***************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user.page.ts ***!
  \***************************************************************/
/*! exports provided: EditUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPage", function() { return EditUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-user.page.html */ "pnH3");
/* harmony import */ var _edit_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user.page.scss */ "90DZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../auth.service */ "qXBG");











let EditUserPage = class EditUserPage {
    constructor(authService, formBuilder, toastController, storageService, router, translate) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.storageService = storageService;
        this.router = router;
        this.translate = translate;
        this.subs = [];
        this.gender = [
            { name: 'male', value: 0 },
            { name: 'female', value: 1 }
        ];
        this.userInfoFormErrors = {
            FirstName: '',
            LastName: '',
            email: '',
            PhoneNumber: '',
            Birthdate: '',
            Gender: '',
        };
        this.userInfodValidationMessages = {
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
            Birthdate: {
                required: this.translate.instant('birthdateReq'),
            },
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.buldingForm();
    }
    buldingForm() {
        this.userInfoForm = this.formBuilder.group({
            'FirstName': [this.userInfo.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'LastName': [this.userInfo.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'email': [this.userInfo.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__["emailValidator"]])],
            'PhoneNumber': [this.userInfo.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'Gender': [this.userInfo.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'birthdate': [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'file': null
        });
        // this.userInfoForm.valueChanges.subscribe((data) => this.validateChangeInfoForm());
    }
    // validateChangeInfoForm(isSubmitting = false) {
    //   for (const field of Object.keys(this.userInfoFormErrors)) {
    //     this.userInfoFormErrors[field] = '';
    //     const input = this.userInfoForm.get(field) as FormControl;
    //     if (input.invalid && (input.dirty || isSubmitting)) {
    //       for (const error of Object.keys(input.errors)) {
    //         this.userInfoFormErrors[field] = this.userInfodValidationMessages[field][
    //           error
    //         ];
    //       }
    //     }
    //   }
    // }
    updatedUserInfo() {
        // if (this.userInfoForm.invalid) {
        //   return;
        // }
        this.subs.push(this.authService.updatedUserProfile(this.userInfoForm.value).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            if (response['success'] === true) {
                // ** set localstorage [ token ]
                this.storageService.setAccessToken(response['result']);
                this.buldingForm();
                var toast = yield this.toastController.create({
                    message: 'User profile updated successfully',
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
                this.router.navigate(['/auth/user-profile']);
            }
            else {
                var toast = yield this.toastController.create({
                    message: response['arrayMessage'][0],
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
                this.router.navigate(['/auth/user-profile/edit-user']);
            }
        })));
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
EditUserPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
EditUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-user',
        template: _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditUserPage);



/***/ }),

/***/ "90DZ":
/*!*****************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  font-size: 35px;\n}\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\n.edit-user-form {\n  margin-top: 15px;\n}\n\n.edit-user-form .form-group {\n  position: relative;\n}\n\n.edit-user-form .form-group label {\n  display: block;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.edit-user-form .form-group input, .edit-user-form .form-group select {\n  width: 100%;\n  height: 50px;\n  border-radius: 30px;\n  border: 1px solid #C4C4C4;\n  padding: 0 10px;\n  color: #000 !important;\n  position: relative;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.edit-user-form .form-group input[type=file] {\n  border: none !important;\n  background-color: #fff;\n  padding-top: 13px;\n}\n\n.edit-user-form .form-group ion-icon.icon-eye {\n  color: #000;\n  font-size: 25px !important;\n  position: absolute;\n  right: 20px;\n  top: 43px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBR0U7RUFFRSxrQkFBQTtBQUZKOztBQUlJO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRk47O0FBS0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhOOztBQU1JO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSk47O0FBT0k7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUxOIiwiZmlsZSI6ImVkaXQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5pb24taGVhZGVyIGlvbi1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbi5pbWctcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi5lZGl0LXVzZXItZm9ybSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC5mb3JtLWdyb3VwIHtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0M0QzRDNDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJde1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZy10b3A6IDEzcHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24uaWNvbi1leWUge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXNpemU6IDI1cHghaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IDQzcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "N7Jb":
/*!*************************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageRoutingModule", function() { return EditUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user.page */ "2ZZm");




const routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_3__["EditUserPage"]
    }
];
let EditUserPageRoutingModule = class EditUserPageRoutingModule {
};
EditUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditUserPageRoutingModule);



/***/ }),

/***/ "b+lr":
/*!*****************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user-routing.module */ "N7Jb");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-user.page */ "2ZZm");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");









let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["EditUserPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_7__["EditUserPage"]]
    })
], EditUserPageModule);



/***/ }),

/***/ "pnH3":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/edit-user/edit-user.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n  <div class=\"top-title\">\n    <h3> Update Profile</h3>\n  </div>\n\n<ion-content>\n\n  <form class=\"edit-user-form\" [formGroup]=\"userInfoForm\" (ngSubmit)=\"updatedUserInfo()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label>{{ 'firstname' | translate}}</label>\n            <input type=\"text\" formControlName=\"FirstName\" required />\n            <ion-text color=\"danger\" class=\"error ion-padding\" *ngIf=\"userInfoFormErrors.FirstName\">\n              {{userInfoFormErrors.FirstName }}\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label>{{ 'lastname' | translate}}</label>\n            <input type=\"text\" formControlName=\"LastName\" required />\n            <ion-text color=\"danger\" class=\"error ion-padding\" *ngIf=\"userInfoFormErrors.LastName\">\n              {{ userInfoFormErrors.LastName }}\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n          <label> {{ 'phoneNumber' | translate}} </label>\n          <input  type=\"text\" formControlName=\"PhoneNumber\" minlength=\"11\" required />\n          <ion-text color=\"danger\" *ngIf=\"userInfoFormErrors.PhoneNumber\">{{ userInfoFormErrors.PhoneNumber }}\n         </ion-text>\n         <ion-text color=\"danger\" *ngIf=\"userInfoFormErrors.PhoneNumber\">{{ userInfoFormErrors.PhoneNumber }}</ion-text>\n         </div>\n         </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n          <label position=\"floating\">{{ 'Email' | translate }}</label>\n          <input type=\"email\" formControlName=\"email\" required />\n          <ion-text color=\"danger\" *ngIf=\"userInfoFormErrors.email\"> {{ userInfoFormErrors.email }}</ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label> Birthdate </label>\n            <input value=\"{{ userInfo.birthdate  }}\" type=\"date\" formControllName=\"birthdate\" required />\n            <ion-text  *ngIf=\"userInfoFormErrors.Birthdate\"> {{ userInfoFormErrors.Birthdate }}</ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-list>\n            <ion-radio-group  formControlName=\"Gender\">\n              <ion-list-header>\n                <ion-label>{{ 'gender' | translate}}</ion-label>\n              </ion-list-header>\n\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let genderItem of gender\">\n                    <ion-item >\n                      <ion-label>{{ genderItem.name }}</ion-label>\n                      <ion-radio slot=\"start\" [value]=\"genderItem.value\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                </ion-row>\n\n            </ion-radio-group>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid>\n      <ion-row ion-align-items-center>\n        <ion-col size=\"12\">\n          <ion-button [disabled]=\"!userInfoForm.valid\" (click)=\"updatedUserInfo()\">\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\n            Update\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=edit-user-edit-user-module.js.map