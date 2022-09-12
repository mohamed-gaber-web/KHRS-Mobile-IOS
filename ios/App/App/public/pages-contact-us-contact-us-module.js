(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"],{

/***/ "+NA5":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function() { return ContactUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.page */ "vtAh");




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ "I+rJ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-top-header></app-top-header>\n\n  <div class=\"top-title\">\n    <h3> Contact us</h3>\n  </div>\n\n<ion-content class=\"contact-us\">\n\n  <ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <ion-icon name=\"mail-outline\"></ion-icon>\n    <a href=\"mailto:academy@khrs.dk\"> <ion-text> academy@khrs.dk </ion-text> </a>\n  </li>\n  <li class=\"list-group-item\">\n    <ion-icon name=\"phone-portrait-outline\"></ion-icon>\n    <ion-text> + 45 35 36 22 09 </ion-text>\n  </li>\n  <li class=\"list-group-item\">\n    <ion-icon name=\"map-outline\"></ion-icon>\n    <ion-text> Vibevej 20, 3tv <p> 2400 København NV </p> </ion-text>\n  </li>\n  </ul>\n\n</ion-content>\n");

/***/ }),

/***/ "Pt6G":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-us .list-group {\n  padding: 40px 50px 30px 50px;\n  border-radius: 20px;\n  list-style-type: none;\n}\n.contact-us .list-group .list-group-item {\n  padding: 25px;\n  color: #000;\n  text-decoration: none;\n  background-color: #fff;\n  border: 2px solid #8AFA6F;\n  font-weight: 500;\n  font-size: 18px;\n  cursor: pointer;\n}\n.contact-us .list-group .list-group-item p {\n  text-indent: 37px;\n  margin-top: 6px;\n}\n.contact-us .list-group ion-icon {\n  font-size: 30px;\n  position: relative;\n  top: 10px;\n  right: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFOO0FBRU07RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBVjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGTiIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXVzIHtcbiAgICAubGlzdC1ncm91cCB7XG4gICAgcGFkZGluZzogNDBweCA1MHB4IDMwcHggNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4QUZBNkY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBwICB7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgcmlnaHQ6IDlweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "QCdY":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us-routing.module */ "+NA5");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "vtAh");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "vtAh":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-us.page.html */ "I+rJ");
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.page.scss */ "Pt6G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ContactUsPage = class ContactUsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [];
ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-contact-us-module.js.map