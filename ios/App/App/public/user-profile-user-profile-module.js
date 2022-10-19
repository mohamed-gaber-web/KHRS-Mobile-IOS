(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "1zEL":
/*!******************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function() { return UserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "JSdm");




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    },
    {
        path: 'edit-user',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-user-edit-user-module */ "edit-user-edit-user-module").then(__webpack_require__.bind(null, /*! ./edit-user/edit-user.module */ "b+lr")).then(m => m.EditUserPageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => Promise.all(/*! import() | change-password-change-password-module */[__webpack_require__.e("common"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ../change-password/change-password.module */ "wndL")).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'user-courses-status',
        loadChildren: () => __webpack_require__.e(/*! import() | user-courses-status-user-courses-status-module */ "user-courses-status-user-courses-status-module").then(__webpack_require__.bind(null, /*! ./user-courses-status/user-courses-status.module */ "D8sZ")).then(m => m.UserCoursesStatusPageModule)
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"triangle\"></ion-icon>\n      <ion-label>Tab 1</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"ellipse\"></ion-icon>\n      <ion-label>Tab 2</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"square\"></ion-icon>\n      <ion-label>Tab 3</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "JSdm":
/*!********************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.page.ts ***!
  \********************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile.page.html */ "xayH");
/* harmony import */ var _user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.page.scss */ "QrHw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "qXBG");










let UserProfilePage = class UserProfilePage {
    constructor(authService, formBuilder, toastController, storageService, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.storageService = storageService;
        this.router = router;
        this.subs = [];
        this.isLoading = false;
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
                required: 'Confirm new password',
            },
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.getProfileDataList();
        this.passwordForm = this.formBuilder.group({
            'currentPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, { validator: Object(src_theme_app_validators__WEBPACK_IMPORTED_MODULE_8__["matchingPasswords"])('newPassword', 'confirmPassword') });
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
                    message: 'Password updated successfully',
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
    getProfileDataList() {
        this.authService.getProfileDataList()
            .subscribe(response => {
            // console.log(response);
            this.userDataList = response['result'];
        });
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
UserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserProfilePage);



/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "QrHw":
/*!**********************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  font-size: 35px;\n}\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 50px;\n  margin: 5px 15px;\n  height: 50px;\n  border: 2px solid #fff;\n}\n\nion-card, ion-item, ion-list {\n  --background: #fff!important;\n  padding: 0;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\nion-button.update-button {\n  margin: 20px 0;\n}\n\n.user-profile-item {\n  margin: 30px auto;\n  display: flex;\n  justify-content: center;\n}\n\n.user-item {\n  background-color: #fff;\n  width: 85%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 600;\n  border: 1px solid #8AFA6F;\n  margin: 15px auto;\n  border-radius: 20px;\n  color: #000000;\n}\n\n.user-data {\n  padding: 10px 0px;\n  margin: 10px 0;\n}\n\n.user-data table {\n  box-shadow: 0 0 15px rgba(51, 51, 51, 0.1);\n}\n\n.user-data table th {\n  font-size: 12px;\n  color: #062f87;\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBS0E7RUFDRSw0QkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBRUEseUVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFHRTtFQUVFLDBDQUFBO0FBREo7O0FBR0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFETiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuaW9uLWhlYWRlciBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4uaW1nLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDVweCAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB9XG59XG5cblxuaW9uLWNhcmQsIGlvbi1pdGVtLCBpb24tbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbWctbGFuZ2F1Z2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxM3B4O1xuICB0b3A6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbmlvbi1idXR0b24udXBkYXRlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4udXNlci1wcm9maWxlLWl0ZW0ge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDg1JTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyA4JSksIDAgNHB4IDEycHggcmdiKDAgMCAwIC8gOCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyA4JSksIDAgNHB4IDEycHggcmdiKDAgMCAwIC8gOCUpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEFGQTZGO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi51c2VyLWRhdGEge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRhYmxlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYig1MSA1MSA1MSAvIDEwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDUxIDUxIDUxIC8gMTAlKTtcblxuICAgIHRoIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjMDYyZjg3O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tabs/tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        exports: [],
        declarations: [src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
        // {
        //   path: 'tab1',
        //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        // },
        // {
        //   path: 'tab2',
        //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        // },
        // {
        //   path: 'auth',
        //   loadChildren: () => import('../auth/auth-routing.module').then(m => m.AuthPageRoutingModule)
        // },
        // {
        //   path: '',
        //   redirectTo: '/tabs/tab1',
        //   pathMatch: 'full'
        // }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "kYbn":
/*!**********************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.module.ts ***!
  \**********************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tabs/tabs.module */ "hO9l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile-routing.module */ "1zEL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile.page */ "JSdm");










let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserProfilePageRoutingModule"],
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_2__["TabsPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_9__["UserProfilePage"]]
    })
], UserProfilePageModule);



/***/ }),

/***/ "xayH":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n<ion-content>\n  <div *ngIf=\"userInfo\">\n\n    <div class=\"user-profile-item\">\n      <ion-avatar>\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\n        <img loading=\"lazy\" *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\n        src=\"../../../assets/images/image profille (1).png\">\n      </ion-avatar>\n    </div>\n\n\n    <div class=\"user-item\">\n      <ion-label color=\"primary\"> Firstname : {{ userInfo.firstname }} </ion-label>\n    </div>\n    <div class=\"user-item\">\n      <ion-label color=\"primary\"> Lastname : {{ userInfo.lastname }} </ion-label>\n    </div>\n    <div class=\"user-item\">\n      <ion-label color=\"primary\"> Nickname : {{ userInfo.nickname }} </ion-label>\n    </div>\n    <div class=\"user-item\">\n      <ion-label color=\"primary\"> Phone Number : {{ userInfo.phoneNumber }} </ion-label>\n    </div>\n    <div class=\"user-item\">\n      <ion-label color=\"primary\"> Email : {{ userInfo.email }} </ion-label>\n    </div>\n    <div class=\"user-item\">\n      <ion-label color=\"primary\"> Gender : {{ userInfo.gender === '0' ? 'male' : 'female' }} </ion-label>\n    </div>\n    <div class=\"user-item\" *ngIf=\"userInfo.birthdate \">\n      <ion-label color=\"primary\"> Birthday : {{ userInfo.birthdate }} </ion-label>\n    </div>\n    <div class=\"user-item ion-text-center\">\n      <ion-label color=\"primary\" routerLink=\"/auth/user-profile/user-courses-status\"> My courses status </ion-label>\n    </div>\n  </div>\n\n    <!-- <ion-grid class=\"user-data\">\n    <ion-row>\n      <ion-col>\n        <div class=\"table-responsive\">\n          <table class=\"table table-light table-bordered table-sm\">\n            <thead>\n              <th> Course  </th>\n              <th>Start </th>\n              <th>End </th>\n              <th>Status</th>\n              <th>Total Time</th>\n              <th> Certificate</th>\n\n            </thead>\n            <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n            <tbody>\n              <tr *ngFor=\"let userList of userDataList\">\n                <td> {{userList.courseName}} </td>\n                <td> {{userList.startDate | date}} </td>\n                <td> {{userList.endDate | date}} </td>\n                <td> {{userList.statusName}} </td>\n                <td> {{userList.totalTimeTaken}} </td>\n                <td *ngIf=\"userList.certificateLink !== null\"> <a [href]=\"userList.certificateLink\" target=\"_blank\"> Download </a> </td>\n                <td *ngIf=\"userList.certificateLink == null\"> No Certificate Link </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- <ion-grid class=\"ion-padding\">\n    <ion-button class=\"update-button\" (click)=\"goToEditUser()\"> <ion-icon name=\"create-outline\"></ion-icon> Edit </ion-button>\n    <ion-button class=\"\" routerLink=\"change-password\"> <ion-icon name=\"create-outline\"></ion-icon> Change password </ion-button>\n  </ion-grid> -->\n\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map