(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "9s11":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-password/change-password.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/courses/tabs/all-courses\"> </ion-back-button>\n    </ion-buttons>\n\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n\n    <div class=\"img-profile\" slot=\"end\" routerLink=\"user-profile\">\n      <ion-avatar slot=\"end\">\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\n        <img loading=\"lazy\" *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\n        src=\"../../../assets/images/image profille (1).png\">\n      </ion-avatar>\n    </div>\n  </ion-toolbar>\n\n<ion-content>\n  <div class=\"top-title\">\n    <h3> Change Password</h3>\n  </div>\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatedPassword()\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\" color=\"primary\">Current Password</ion-label>\n            <ion-input formControlName='currentPassword' type=\"password\" minlength=\"6\" required></ion-input>\n          </ion-item>\n\n          <ion-text color=\"danger\" *ngIf=\"passwordFormErrors.currentPassword\">\n            {{ passwordFormErrors.currentPassword }}\n          </ion-text>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"floating\" color=\"primary\">New Password</ion-label>\n            <ion-input formControlName='newPassword' type=\"password\" required></ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"passwordFormErrors.newPassword\">\n            {{ passwordFormErrors.newPassword }}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\n            <ion-input formControlName='confirmPassword' type=\"password\" required></ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"passwordFormErrors.confirmPassword\">\n            {{ passwordFormErrors.confirmPassword }}\n          </ion-text>\n          <ion-text color=\"danger\" *ngIf=\"passwordForm.controls.confirmPassword.hasError('mismatchedPasswords')\">{{ 'notMatch' | translate }}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\n          <ion-button (click)=\"updatedPassword()\">\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\n            Save\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "EMGc":
/*!************************************************************************!*\
  !*** ./src/app/auth/change-password/change-password-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "PicD");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "PicD":
/*!**************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.page.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.page.html */ "9s11");
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.page.scss */ "clJ5");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "qXBG");










let ChangePasswordPage = class ChangePasswordPage {
    constructor(authService, formBuilder, toastController, storageService, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.storageService = storageService;
        this.router = router;
        this.subs = [];
        this.passwordFormErrors = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        };
        this.passwordValidationMessages = {
            currentPassword: {
                required: 'Current password required',
            },
            newPassword: {
                required: 'New password required',
            },
            confirmPassword: {
                required: 'Confirm password',
            },
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.passwordForm = this.formBuilder.group({
            'currentPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, { validator: Object(src_theme_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('newPassword', 'confirmPassword') });
        this.passwordForm.valueChanges.subscribe((data) => this.validateChangePasswordForm());
    }
    validateChangePasswordForm(isSubmitting = false) {
        for (const field of Object.keys(this.passwordFormErrors)) {
            this.passwordFormErrors[field] = '';
            const input = this.passwordForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.passwordFormErrors[field] = this.passwordValidationMessages[field][error];
                }
            }
        }
    }
    updatedPassword() {
        if (this.passwordForm.invalid) {
            return;
        }
        this.subs.push(this.authService.updatedPassword(this.passwordForm.value).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response['success'] === true) {
                var toast = yield this.toastController.create({
                    message: 'Password updated',
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
                this.storageService.clearStorage();
                this.router.navigate(['/auth/sign-in']);
            }
            else {
                var toast = yield this.toastController.create({
                    message: response['arrayMessage'][0],
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
                this.router.navigate(['/auth/user-profile']);
            }
        })));
    }
    goToEditUser() {
        this.router.navigate(['/auth/user-profile/edit-user']);
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangePasswordPage);



/***/ }),

/***/ "clJ5":
/*!****************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-profile ion-avatar {\n  width: 50px;\n  margin: 5px 15px;\n  height: 50px;\n  border: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiA1cHggMTVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "wndL":
/*!****************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.module.ts ***!
  \****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "EMGc");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "PicD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map