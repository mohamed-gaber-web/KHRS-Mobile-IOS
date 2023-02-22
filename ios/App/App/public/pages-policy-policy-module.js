(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-policy-policy-module"],{

/***/ "QkKV":
/*!*******************************************************!*\
  !*** ./src/app/pages/policy/policy-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageRoutingModule", function() { return PolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy.page */ "liCJ");




const routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_3__["PolicyPage"]
    }
];
let PolicyPageRoutingModule = class PolicyPageRoutingModule {
};
PolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicyPageRoutingModule);



/***/ }),

/***/ "Yh1n":
/*!***********************************************!*\
  !*** ./src/app/pages/policy/policy.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dir {\n  display: flex;\n  justify-content: flex-start;\n  text-align: left;\n  padding: 40px 10px 15px 10px;\n  background-color: #062f78;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\n.privacy-policy {\n  width: 100%;\n  margin: 20px auto;\n  padding: 20px;\n}\n\n.privacy-policy ion-text {\n  font-size: 14px;\n  color: #000;\n  text-transform: none;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUtBLG1CQUFBOztBQUVBO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0VBS0EsYUFBQTtBQVJGOztBQVVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBUkoiLCJmaWxlIjoicG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRpciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNDBweCAxMHB4IDE1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MmY3ODtcbn1cblxuLmltZy1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLyogZW5kIGhlYWRlciB0b3AgKi9cblxuLnByaXZhY3ktcG9saWN5IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICAvLyBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiKDAgMCAwIC8gOCUpLCAwIDRweCAxMnB4IHJnYigwIDAgMCAvIDglKTtcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiKDAgMCAwIC8gOCUpLCAwIDRweCAxMnB4IHJnYigwIDAgMCAvIDglKTtcbiAgLy8gLW1vb3otYm94LXNoYWRvdzowIDJweCA0cHggcmdiKDAgMCAwIC8gOCUpLCAwIDRweCAxMnB4IHJnYigwIDAgMCAvIDglKTtcbiAgLy8gYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "liCJ":
/*!*********************************************!*\
  !*** ./src/app/pages/policy/policy.page.ts ***!
  \*********************************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./policy.page.html */ "mj/9");
/* harmony import */ var _policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy.page.scss */ "Yh1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");







let PolicyPage = class PolicyPage {
    constructor(authService, storageService, appServ) {
        this.authService = authService;
        this.storageService = storageService;
        this.appServ = appServ;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.userInfo = this.authService.getUser();
        this.appServ.getPolicyPage().subscribe(response => {
            this.isLoading = false;
            this.policyData = response['result']['policyTranslations'];
            console.log(response['result']['policyTranslations']);
        });
    }
};
PolicyPage.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
PolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-policy',
        template: _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PolicyPage);



/***/ }),

/***/ "mj/9":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/policy/policy.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-top-header></app-top-header> -->\n\n<div class=\"dir\">\n  <ion-back-button  defaultHref=\"/auth/sign-in\" style=\"color: #fff;\"> </ion-back-button>\n</div>\n\n<div class=\"top-title\">\n    <h3> Privacy policy</h3>\n  </div>\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\" size-lg=\"10\">\n        <div class=\"privacy-policy\" *ngFor=\"let policy of policyData\">\n          <ion-text [innerHTML]=\"policy.content\"></ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "nGq5":
/*!***********************************************!*\
  !*** ./src/app/pages/policy/policy.module.ts ***!
  \***********************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy-routing.module */ "QkKV");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy.page */ "liCJ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








let PolicyPageModule = class PolicyPageModule {
};
PolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
    })
], PolicyPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-policy-policy-module.js.map