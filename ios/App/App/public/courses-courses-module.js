(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-courses-module"],{

/***/ "I93C":
/*!***************************************************!*\
  !*** ./src/app/courses/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageRoutingModule", function() { return CoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.page */ "utW2");




const routes = [
    {
        path: 'tabs',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_3__["CoursesPage"],
        children: [
            {
                path: 'all-courses',
                loadChildren: () => Promise.all(/*! import() | all-courses-all-courses-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~068b0c45"), __webpack_require__.e("common"), __webpack_require__.e("all-courses-all-courses-module")]).then(__webpack_require__.bind(null, /*! ./all-courses/all-courses.module */ "u2BO")).then(m => m.AllCoursesPageModule),
                data: { title: "All courses" }
            },
            {
                path: 'my-courses',
                loadChildren: () => Promise.all(/*! import() | my-courses-my-courses-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~068b0c45"), __webpack_require__.e("default~course-details-course-details-module~my-courses-my-courses-module"), __webpack_require__.e("common"), __webpack_require__.e("my-courses-my-courses-module")]).then(__webpack_require__.bind(null, /*! ./my-courses/my-courses.module */ "ircu")).then(m => m.MyCoursesPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => __webpack_require__.e(/*! import() | setting-setting-module */ "setting-setting-module").then(__webpack_require__.bind(null, /*! ./setting/setting.module */ "oJhf")).then(m => m.SettingPageModule)
            },
            {
                path: 'top-scores',
                loadChildren: () => __webpack_require__.e(/*! import() | top-scores-top-scores-module */ "top-scores-top-scores-module").then(__webpack_require__.bind(null, /*! ./top-scores/top-scores.module */ "WnMN")).then(m => m.TopScoresPageModule)
            },
            {
                path: 'apply-course',
                loadChildren: () => Promise.all(/*! import() | apply-course-apply-course-module */[__webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module~sign-up-sign-up-module"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("default~apply-course-apply-course-module~sign-up-sign-up-module"), __webpack_require__.e("apply-course-apply-course-module")]).then(__webpack_require__.bind(null, /*! ./apply-course/apply-course.module */ "kd6V")).then(m => m.ApplyCoursePageModule)
            },
            {
                path: 'choose-course-material',
                loadChildren: () => __webpack_require__.e(/*! import() | choose-course-material-choose-course-material-module */ "choose-course-material-choose-course-material-module").then(__webpack_require__.bind(null, /*! ./choose-course-material/choose-course-material.module */ "DLKj")).then(m => m.ChooseCourseMaterialPageModule)
            },
            {
                path: ':courseId',
                loadChildren: () => Promise.all(/*! import() | course-details-course-details-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~068b0c45"), __webpack_require__.e("default~course-details-course-details-module~my-courses-my-courses-module"), __webpack_require__.e("course-details-course-details-module")]).then(__webpack_require__.bind(null, /*! ./course-details/course-details.module */ "4PMM")).then(m => m.CourseDetailsPageModule)
            },
            {
                path: 'course-by-category/:categoryId',
                loadChildren: () => __webpack_require__.e(/*! import() | course-by-category-course-by-category-module */ "course-by-category-course-by-category-module").then(__webpack_require__.bind(null, /*! ./course-by-category/course-by-category.module */ "Hi3V")).then(m => m.CourseByCategoryPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/courses/tabs/all-courses',
        pathMatch: 'full'
    },
    {
        path: 'course-material/:courseId',
        loadChildren: () => Promise.all(/*! import() | course-material-course-material-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~068b0c45"), __webpack_require__.e("course-material-course-material-module")]).then(__webpack_require__.bind(null, /*! ./course-material/course-material.module */ "kp8m")).then(m => m.CourseMaterialPageModule)
    },
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ "RMTb":
/*!********************************************!*\
  !*** ./src/app/courses/top-scores.pipe.ts ***!
  \********************************************/
/*! exports provided: TopScoresPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoresPipe", function() { return TopScoresPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let TopScoresPipe = class TopScoresPipe {
    transform(value, ...args) {
        return null;
    }
};
TopScoresPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'topScores'
    })
], TopScoresPipe);



/***/ }),

/***/ "mHEJ":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".course {\n  position: relative;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 50px;\n  margin: 5px 15px;\n  height: 50px;\n  border: 2px solid #fff;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\np {\n  font-size: 12px !important;\n  color: #fff;\n  font-weight: bold;\n  line-height: 15px;\n}\n\nion-tab-bar {\n  background-color: #062F87;\n}\n\nion-tab-button {\n  background-color: transparent;\n}\n\nion-tab-button.tab-selected {\n  /* .tab-selected:before*/\n  background-color: #041E56;\n  border: 5px solid #fff;\n  max-width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  display: block;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlBLG1CQUFBOztBQUlBO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUpGOztBQVFBO0VBQ0UseUJBQUE7QUFMRjs7QUFRQTtFQUNFLDZCQUFBO0FBTEY7O0FBUUE7RUFBOEIsd0JBQUE7RUFDNUIseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFKRiIsImZpbGUiOiJjb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWctcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogNXB4IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLyogZW5kIGhlYWRlciB0b3AgKi9cblxuXG5cbnAge1xuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG5cbmlvbi10YWItYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MkY4Nztcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XG59XG5cbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7IC8qIC50YWItc2VsZWN0ZWQ6YmVmb3JlKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MUU1NjtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "o+MO":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/courses.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-top-header></app-top-header>\n<ion-menu-button>\n    <ion-icon name=\"play\"></ion-icon>\n</ion-menu-button>\n<ion-content>\n\n<ion-tabs class=\"tabs-icons tabs-naviagte-icons\">\n\n  <ion-tab-bar style=\"border-radius: 20px 20px 0 0; padding: 10px 0;\" slot=\"bottom\">\n    <ion-tab-button tab=\"all-courses\">\n      <!-- <ion-icon name=\"grid-outline\"></ion-icon> -->\n      <img src=\"../../../assets/images/all-courses-icon.png\" alt=\"all-courses-icon\" />\n      <p>All courses</p>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"top-scores\">\n      <img class=\"img-tab\" src=\"../../../assets/images/top-score.png\" alt=\"top-score-icon\" />\n      <p>Top score</p>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"setting\">\n      <img class=\"img-tab\" src=\"../../../assets/images/settings.png\" alt=\"all-courses-icon\" />\n      <p>Settings</p>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"my-courses\">\n      <!-- <ion-icon name=\"documents-outline\"></ion-icon> -->\n      <img class=\"img-tab\" src=\"../../../assets/images/my-courses-icon.png\" alt=\"all-courses-icon\" />\n      <p>My courses</p>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "sU/i":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses-routing.module */ "I93C");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses.page */ "utW2");
/* harmony import */ var _top_scores_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-scores.pipe */ "RMTb");









let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoursesPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_7__["CoursesPage"], _top_scores_pipe__WEBPACK_IMPORTED_MODULE_8__["TopScoresPipe"]]
    })
], CoursesPageModule);



/***/ }),

/***/ "utW2":
/*!*****************************************!*\
  !*** ./src/app/courses/courses.page.ts ***!
  \*****************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./courses.page.html */ "o+MO");
/* harmony import */ var _courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.page.scss */ "mHEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/storage.service */ "fbMX");






let CoursesPage = class CoursesPage {
    constructor(storageService, authService) {
        this.storageService = storageService;
        this.authService = authService;
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
    }
};
CoursesPage.ctorParameters = () => [
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
CoursesPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['myTabs',] }]
};
CoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-courses',
        template: _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CoursesPage);



/***/ })

}]);
//# sourceMappingURL=courses-courses-module.js.map