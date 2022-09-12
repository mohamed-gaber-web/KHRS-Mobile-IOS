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
/* harmony default export */ __webpack_exports__["default"] = (".img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n/* end header top */\n.privacy-policy {\n  width: 100%;\n  margin: 20px auto;\n  padding: 20px;\n}\n.privacy-policy ion-text {\n  font-size: 14px;\n  color: #000;\n  text-transform: none;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREo7QUFLQSxtQkFBQTtBQUVBO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0VBS0EsYUFBQTtBQVJGO0FBVUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFSSiIsImZpbGUiOiJwb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1nLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxufVxuXG4vKiBlbmQgaGVhZGVyIHRvcCAqL1xuXG4ucHJpdmFjeS1wb2xpY3kge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIC8vIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyA4JSksIDAgNHB4IDEycHggcmdiKDAgMCAwIC8gOCUpO1xuICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyA4JSksIDAgNHB4IDEycHggcmdiKDAgMCAwIC8gOCUpO1xuICAvLyAtbW9vei1ib3gtc2hhZG93OjAgMnB4IDRweCByZ2IoMCAwIDAgLyA4JSksIDAgNHB4IDEycHggcmdiKDAgMCAwIC8gOCUpO1xuICAvLyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgaW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-top-header></app-top-header> -->\n\n\n<div class=\"top-title\">\n  <ion-buttons slot=\"start\">\n  <ion-back-button defaultHref=\"/\"> </ion-back-button>\n</ion-buttons>\n    <h3> Privacy policy</h3>\n  </div>\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\" size-lg=\"10\">\n        <div class=\"privacy-policy\" *ngFor=\"let policy of policyData\">\n          <ion-text [innerHTML]=\"policy.content\"></ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

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