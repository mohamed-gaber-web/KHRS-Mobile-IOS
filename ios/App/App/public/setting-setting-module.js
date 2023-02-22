(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "N/PQ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/setting/setting.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"setting\">\n  <div class=\"top-title\">\n    <h3> Settings</h3>\n  </div>\n\n  <div *ngIf=\"userInfo\">\n    <div routerLink=\"/auth/user-profile\" class=\"user-profile-item\">\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\n        src=\"../../../assets//images/img-profile.png\" />\n    </div>\n  </div>\n  <button routerLink=\"/auth/user-profile/edit-user\"> Edit Profile </button>\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" routerLink=\"/policy\">Privacy Policy</li>\n      <li class=\"list-group-item\" routerLink=\"/faq\">FAQ</li>\n      <li class=\"list-group-item\" routerLink=\"/contact-us\">Contact us</li>\n      <li class=\"list-group-item\" routerLink=\"/auth/user-profile/user-courses-status\">My courses status</li>\n      <li class=\"list-group-item\" routerLink=\"/auth/forget-password\">Change Password</li>\n      <li class=\"list-group-item\" *ngIf=\"authService.IsLoggedIn\" (click)=\"logout()\">LOG OUT</li>\n    </ul>\n</ion-content>\n");

/***/ }),

/***/ "W4ng":
/*!***************************************************!*\
  !*** ./src/app/courses/setting/setting.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setting {\n  text-align: center;\n}\n.setting .user-profile-item {\n  margin: 10px auto;\n  display: flex;\n  justify-content: center;\n}\n.setting .user-profile-item img {\n  width: 22%;\n  height: auto;\n}\n.setting button {\n  background-color: #062F87;\n  font-size: 18px;\n  color: #fff;\n  border-radius: 20px;\n  font-weight: 500;\n  padding: 18px 40px;\n}\n.setting .list-group {\n  padding: 25px 50px 30px 50px;\n  border-radius: 20px;\n  list-style-type: none;\n}\n.setting .list-group .list-group-item {\n  padding: 18px;\n  color: #000;\n  text-decoration: none;\n  background-color: #fff;\n  border: 2px solid #8AFA6F;\n  font-weight: 500;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsa0JBQUE7QUFGRjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUtFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFISjtBQU1FO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0U7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTE4iLCJmaWxlIjoic2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnNldHRpbmcge1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAudXNlci1wcm9maWxlLWl0ZW0ge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudXNlci1wcm9maWxlLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogMjIlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MkY4NztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDE4cHggNDBweDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwIHtcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHggMzBweCA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzhBRkE2RjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "ZooU":
/*!*************************************************!*\
  !*** ./src/app/courses/setting/setting.page.ts ***!
  \*************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting.page.html */ "N/PQ");
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.page.scss */ "W4ng");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");








let SettingPage = class SettingPage {
    constructor(authService, storageService, router, toastController) {
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        // console.log(this.authService.getUser());
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storageService.clearStorage();
            var toast = yield this.toastController.create({
                message: 'Signed out',
                duration: 2000,
                color: 'success',
            });
            toast.present();
            this.router.navigateByUrl('/auth/sign-in');
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingPage);



/***/ }),

/***/ "oJhf":
/*!***************************************************!*\
  !*** ./src/app/courses/setting/setting.module.ts ***!
  \***************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "vZUT");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "ZooU");







let SettingPageModule = class SettingPageModule {
};
SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"],
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "vZUT":
/*!***********************************************************!*\
  !*** ./src/app/courses/setting/setting-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "ZooU");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map