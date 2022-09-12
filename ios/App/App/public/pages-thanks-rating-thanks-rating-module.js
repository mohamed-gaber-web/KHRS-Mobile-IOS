(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thanks-rating-thanks-rating-module"],{

/***/ "1wYe":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thanks-rating/thanks-rating.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n<ion-content>\n  <div class=\"thanks-rate-bg\">\n    <div class=\"thanks\">\n      <p> We received your feedback </p>\n      <h3> Thank you! </h3>\n      <button routerLink=\"/\"> Done </button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "76UF":
/*!***********************************************************!*\
  !*** ./src/app/pages/thanks-rating/thanks-rating.page.ts ***!
  \***********************************************************/
/*! exports provided: ThanksRatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksRatingPage", function() { return ThanksRatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thanks_rating_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thanks-rating.page.html */ "1wYe");
/* harmony import */ var _thanks_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thanks-rating.page.scss */ "UzX5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ThanksRatingPage = class ThanksRatingPage {
    constructor() { }
    ngOnInit() {
    }
};
ThanksRatingPage.ctorParameters = () => [];
ThanksRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-thanks-rating',
        template: _raw_loader_thanks_rating_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thanks_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ThanksRatingPage);



/***/ }),

/***/ "UzX5":
/*!*************************************************************!*\
  !*** ./src/app/pages/thanks-rating/thanks-rating.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thanks-rate-bg {\n  background: url('thanks.png') bottom right;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 370px;\n  background-size: contain;\n  position: absolute;\n  bottom: -24px;\n  right: -114px;\n}\n\n.thanks {\n  width: 80%;\n  height: 350px;\n  position: fixed;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #EBFFE6;\n  border: 6px solid #8AFA6F;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.thanks h3 {\n  font-weight: 700;\n  font-size: 30px;\n  margin: 40px 0;\n}\n\n.thanks p {\n  font-size: 20px;\n  width: 50%;\n  line-height: 28px;\n  margin: 30px auto;\n  font-weight: 600;\n}\n\n.thanks button {\n  background-color: #062F87;\n  font-size: 18px;\n  font-weight: 700;\n  border-radius: 15px;\n  margin-top: 30px;\n  padding: 18px 50px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoYW5rcy1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFSTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRE47O0FBSU07RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGTiIsImZpbGUiOiJ0aGFua3MtcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFua3MtcmF0ZS1iZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGhhbmtzLnBuZykgYm90dG9tIHJpZ2h0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTI0cHg7XG4gICAgcmlnaHQ6IC0xMTRweDtcbn1cblxuLnRoYW5rcyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMzUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkZGRTY7XG4gIGJvcmRlcjogNnB4IHNvbGlkICM4QUZBNkY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG4gICAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG5cbiAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjJGODc7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAxOHB4IDUwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "a3IP":
/*!*************************************************************!*\
  !*** ./src/app/pages/thanks-rating/thanks-rating.module.ts ***!
  \*************************************************************/
/*! exports provided: ThanksRatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksRatingPageModule", function() { return ThanksRatingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _thanks_rating_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thanks-rating-routing.module */ "qBmy");
/* harmony import */ var _thanks_rating_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thanks-rating.page */ "76UF");








let ThanksRatingPageModule = class ThanksRatingPageModule {
};
ThanksRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _thanks_rating_routing_module__WEBPACK_IMPORTED_MODULE_6__["ThanksRatingPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_thanks_rating_page__WEBPACK_IMPORTED_MODULE_7__["ThanksRatingPage"]]
    })
], ThanksRatingPageModule);



/***/ }),

/***/ "qBmy":
/*!*********************************************************************!*\
  !*** ./src/app/pages/thanks-rating/thanks-rating-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ThanksRatingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksRatingPageRoutingModule", function() { return ThanksRatingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _thanks_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks-rating.page */ "76UF");




const routes = [
    {
        path: '',
        component: _thanks_rating_page__WEBPACK_IMPORTED_MODULE_3__["ThanksRatingPage"]
    }
];
let ThanksRatingPageRoutingModule = class ThanksRatingPageRoutingModule {
};
ThanksRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThanksRatingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-thanks-rating-thanks-rating-module.js.map