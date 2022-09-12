(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "Mw6b":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n}\n\n.inro-screen {\n  margin: 30px 0 0 0;\n}\n\n.inro-screen .video-inro {\n  margin: 50px 0;\n}\n\n.inro-screen img.intro-logo {\n  max-width: 200px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJpbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0LWljb24tdmx1bWUge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLmlucm8tc2NyZWVuIHtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuXG4gIC52aWRlby1pbnJvIHtcbiAgICBtYXJnaW46IDUwcHggMDtcbiAgfVxuXG4gIGltZy5pbnRyby1sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDphdXRvO1xuICB9XG5cbn1cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "PQfJ":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "QfDU");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "gpBf");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "QfDU":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "gpBf");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "ce+c":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-grid>\n    <ion-row class='ion-justify-content-center'>\n      <ion-col size=\"12\" size-lg=\"6\">\n        <div class=\"inro-screen ion-text-center\">\n          <img class=\"intro-logo\" src=\"../../assets/images/logo.png\" alt=\"logo-intro\" />\n\n          <div class=\"video-inro\">\n            <video #video *ngIf=\"introVideo\" width=\"100%\" height=\"230\" preload=\"metadata\" poster=\"../../assets/images/Screenshot (54).png\" controls>\n              <source [src]='introVideo.mediaPath' type=\"video/mp4\">\n            </video>\n          </div>\n\n\n          <ion-grid>\n            <ion-row >\n                <ion-button [routerLink]=\"['/auth/sign-in']\">\n                  Sign In\n                </ion-button>\n\n                <ion-button [routerLink]=\"['/auth/sign-up']\">\n                  Sign Up\n                </ion-button>\n            </ion-row>\n          </ion-grid>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ }),

/***/ "gpBf":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intro.page.html */ "ce+c");
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.page.scss */ "Mw6b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/app.service */ "BbT4");





let IntroPage = class IntroPage {
    constructor(appService) {
        this.appService = appService;
        this.subs = [];
    }
    ngOnInit() {
        this.getLang = localStorage.getItem('languageId');
        this.subs.push(this.appService.getVidoes('Intro', this.getLang)
            .subscribe((response) => {
            this.introVideo = response['result'].genericAttributeMediaTranslations[0];
        }));
    }
    ionViewWillLeave() {
        this.videoElement.nativeElement.pause();
        this.subs.forEach(el => {
            el.unsubscribe();
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _shared_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
IntroPage.propDecorators = {
    videoElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['video',] }]
};
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module.js.map