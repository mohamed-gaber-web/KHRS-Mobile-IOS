(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-language-choose-language-module"],{

/***/ "06s9":
/*!*******************************************************************!*\
  !*** ./src/app/choose-language/choose-language-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseLanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguagePageRoutingModule", function() { return ChooseLanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _choose_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-language.page */ "Waqm");




const routes = [
    {
        path: '',
        component: _choose_language_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLanguagePage"]
    }
];
let ChooseLanguagePageRoutingModule = class ChooseLanguagePageRoutingModule {
};
ChooseLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseLanguagePageRoutingModule);



/***/ }),

/***/ "Ivhk":
/*!***********************************************************!*\
  !*** ./src/app/choose-language/choose-language.module.ts ***!
  \***********************************************************/
/*! exports provided: ChooseLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguagePageModule", function() { return ChooseLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _choose_language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-language-routing.module */ "06s9");
/* harmony import */ var _choose_language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-language.page */ "Waqm");







let ChooseLanguagePageModule = class ChooseLanguagePageModule {
};
ChooseLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguagePageRoutingModule"]
        ],
        declarations: [_choose_language_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLanguagePage"]]
    })
], ChooseLanguagePageModule);



/***/ }),

/***/ "Waqm":
/*!*********************************************************!*\
  !*** ./src/app/choose-language/choose-language.page.ts ***!
  \*********************************************************/
/*! exports provided: ChooseLanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguagePage", function() { return ChooseLanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-language.page.html */ "eLml");
/* harmony import */ var _choose_language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-language.page.scss */ "rqvV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/app.service */ "BbT4");






let ChooseLanguagePage = class ChooseLanguagePage {
    constructor(router, appSerrvice) {
        this.router = router;
        this.appSerrvice = appSerrvice;
        this.isLoading = false;
        this.subs = [];
        this.isSelected = false;
        this.itemClass = '';
    }
    ngOnInit() {
        this.isLoading = true;
        this.subs.push(this.appSerrvice.getLanguage()
            .subscribe(response => {
            // console.log(response);
            this.isLoading = false;
            this.langItems = response['result'].result;
        }));
    }
    chooseLanguage() {
        this.router.navigate(['/auth/sign-in']);
    }
    getLanguageId(item) {
        localStorage.setItem('languageId', JSON.stringify(item.id));
        // this.isSelected = !this.isSelected;
        // console.log('selected elements');
        this.selected = item;
    }
    isActive(item) {
        return this.selected === item;
    }
    ;
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
ChooseLanguagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
ChooseLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-language',
        template: _raw_loader_choose_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseLanguagePage);



/***/ }),

/***/ "eLml":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-language/choose-language.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-image\" no-scroll>\n  <div class=\"choose-language\">\n    <h1 class=\"title\"> Choose Language </h1>\n  </div>\n  <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n  <ion-grid class=\"lang-bg\">\n\n    <ion-row>\n      <ion-col *ngFor=\"let item of langItems\"  size-xs=\"4\" size-md=\"3\">\n        <ion-img\n          [ngClass]=\"{'active': isActive(item)}\"\n          (click)=\"getLanguageId(item)\"\n          [src]=\"item.icon\" class=\"lang-img\"></ion-img>\n        <h3> <ion-text color=\"primary\"> {{ item.name }} </ion-text> </h3>\n      </ion-col>\n      <!-- [ngClass]=\"isSelected ? 'flag-border' : 'flag-unborder'\" -->\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class='ion-justify-content-center'>\n      <ion-col size=\"12\" size-lg=\"6\" >\n        <div class=\"button-start\">\n          <ion-button [disabled]='!selected' (click)=\"chooseLanguage()\">\n            <ion-img src=\"../../assets/images/logo-hand-2.png\"></ion-img>\n            START\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "rqvV":
/*!***********************************************************!*\
  !*** ./src/app/choose-language/choose-language.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: url('login.png') center top no-repeat;\n  background-size: cover;\n  max-width: 100%;\n}\n\n.choose-language h1.title {\n  text-align: center;\n  color: var(--ion-color-second-app);\n  font-weight: 600 !important;\n  font-size: 22px;\n  margin: 40px 0 15px 0;\n}\n\n.choose-language .icon-down {\n  width: 30px;\n  height: auto;\n  margin: auto;\n}\n\n.lang-bg {\n  margin: 25px 0;\n}\n\n.lang-bg .lang-img {\n  width: 62px;\n  height: 62px;\n  margin: auto;\n  cursor: pointer;\n}\n\n.lang-bg h3 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n  text-transform: none;\n}\n\n.button-start {\n  margin: 0 auto;\n  text-align: center;\n}\n\nion-button {\n  --background: var(--ion-color-second-app)!important;\n  --border-radius: 50px!important;\n  font-size: 22px !important;\n  font-weight: 500;\n  width: 90%;\n  height: 55px;\n  --box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.16);\n}\n\nion-button ion-img {\n  max-width: 45px;\n  height: auto;\n}\n\n.button-start ion-img {\n  padding-right: 10px;\n}\n\nion-spinner {\n  text-align: center !important;\n  margin: auto;\n}\n\n.active {\n  transform: scale(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nob29zZS1sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBQTtFQUlBLHNCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUVFLGNBQUE7QUFIRjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBSko7O0FBYUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFWRjs7QUFhQTtFQUNFLG1EQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQVZGOztBQVlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFWSjs7QUFjQTtFQUNFLG1CQUFBO0FBWEY7O0FBY0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFlQTtFQUtFLHFCQUFBO0FBWkYiLCJmaWxlIjoiY2hvb3NlLWxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltYWdle1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvL2ltYWdlcy9sb2dpbi5wbmcpIGNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2hvb3NlLWxhbmd1YWdle1xuXG5oMS50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDQwcHggMCAxNXB4IDA7XG4gIH1cbiAgLmljb24tZG93biB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ubGFuZy1iZyB7XG5cbiAgbWFyZ2luOiAyNXB4IDA7XG5cbiAgLmxhbmctaW1nIHtcbiAgICB3aWR0aDogNjJweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLy8gLmxhbmctYmcgaW9uLWltZyB7XG4vLyAgIHdpZHRoOiA5MHB4IWltcG9ydGFudDtcbi8vICAgbWFyZ2luOiAxNXB4IGF1dG87XG4vLyB9XG5cbi5idXR0b24tc3RhcnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTVweDtcbiAgLS1ib3gtc2hhZG93OiAycHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuXG4gIGlvbi1pbWcge1xuICAgIG1heC13aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLmJ1dHRvbi1zdGFydCBpb24taW1nIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLXNwaW5uZXIgIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5hY3RpdmV7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cblxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=choose-language-choose-language-module.js.map