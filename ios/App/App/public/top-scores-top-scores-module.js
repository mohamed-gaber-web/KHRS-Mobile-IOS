(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-scores-top-scores-module"],{

/***/ "+0po":
/*!***********************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-exams/top-score-exams.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top_score_block {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.top_score_block .top_score_block__image img {\n  width: 60px;\n  height: 60px;\n  margin-top: 0;\n  border-radius: 50px;\n  border: 3px solid #062f87;\n}\n.top_score_block .top_score_block__image span {\n  margin-left: 10px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #062F87;\n}\n.top_score_block .top_score_block__text {\n  display: flex;\n  align-items: center;\n}\n.top_score_block .top_score_block__text h5 {\n  font-weight: 900;\n  font-size: 13px;\n  color: #062F87;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RvcC1zY29yZS1leGFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNSO0FBRU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBUjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRk47QUFHTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRFIiLCJmaWxlIjoidG9wLXNjb3JlLWV4YW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9zY29yZV9ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAudG9wX3Njb3JlX2Jsb2NrX19pbWFnZSB7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNjJmODc7XG4gICAgICB9XG4gIFxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMDYyRjg3O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnRvcF9zY29yZV9ibG9ja19fdGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzA2MkY4NztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "2Dmr":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/top-scores/top-score-exams/top-score-exams.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top_score_block\" *ngFor=\"let item of examsData\">\n    <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n    <div class=\"top_score_block__image\" >\n      <img [src]=\"item.imagePath\" loading=\"lazy\" alt=\"\"  />\n      <span> {{ item.courseName }} </span>\n    </div>\n    <div class=\"top_score_block__text\">\n        <h5>  {{ item.count }}  points </h5>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "2OJa":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/top-scores/top-score-item/top-score-item.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top_score_block\">\n  <div class=\"top_score_block__image\">\n    <img src=\"../../../../assets/images/top-score-img.png\" alt=\"\"  />\n    <span> username </span>\n  </div>\n  <div class=\"top_score_block__text\">\n      <h5> 966 points </h5>\n  </div>\n</div>\n\n<div class=\"top_score_block\">\n  <div class=\"top_score_block__image\">\n    <img src=\"../../../../assets/images/top-score-img.png\" alt=\"\"  />\n    <span> username </span>\n  </div>\n  <div class=\"top_score_block__text\">\n      <h5> 966 points </h5>\n  </div>\n</div>\n\n<div class=\"top_score_block\">\n  <div class=\"top_score_block__image\">\n    <img src=\"../../../../assets/images/top-score-img.png\" alt=\"\"  />\n    <span> username </span>\n  </div>\n  <div class=\"top_score_block__text\">\n      <h5> 966 points </h5>\n  </div>\n</div>\n\n<div class=\"top_score_block\">\n  <div class=\"top_score_block__image\">\n    <img src=\"../../../../assets/images/top-score-img.png\" alt=\"\"  />\n    <span> username </span>\n  </div>\n  <div class=\"top_score_block__text\">\n      <h5> 966 points </h5>\n  </div>\n</div>\n");

/***/ }),

/***/ "2i0u":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/top-scores/top-scores.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-top-user-score></app-top-user-score>\n  <mat-tab-group>\n    <mat-tab label=\"Students\">\n      <app-top-score-students [topStudentData]=\"allTopStudents\" [loading]=\"isLoading\"></app-top-score-students>\n    </mat-tab>\n    <mat-tab label=\"Courses\">\n      <app-top-score-courses [topCoursesData]=\"allTopCourses\" [loading]=\"isLoading\"></app-top-score-courses>\n    </mat-tab>\n    <mat-tab label=\"Exams\">\n      <app-top-score-exams [topExamsData]=\"allTopExams\" [loading]=\"isLoading\"></app-top-score-exams>\n    </mat-tab>\n  </mat-tab-group>\n\n</ion-content>\n\n");

/***/ }),

/***/ "4hZR":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/top-scores/top-score-students/top-score-students.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top_score_block\" *ngFor=\"let item of studentsData\">\n    <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n    <div class=\"top_score_block__image\" >\n      <img *ngIf=\"item.imagePath !== null \" [src]=\"item.imagePath\" loading=\"lazy\" alt=\"\"  />\n      <img *ngIf=\"item.imagePath == null \" src=\"../../../../assets/images/img-profile.png\" loading=\"lazy\" alt=\"\"  />\n      <span> {{ item.nickname }} </span>\n    </div>\n    <div class=\"top_score_block__text\">\n        <h5> <b style=\"font-size: 18px;\">  {{ item.finalResult }}</b> points </h5>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "F3pK":
/*!*************************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-courses/top-score-courses.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TopScoreCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoreCoursesComponent", function() { return TopScoreCoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_score_courses_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-score-courses.component.html */ "M/rj");
/* harmony import */ var _top_score_courses_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-score-courses.component.scss */ "Pmgx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TopScoreCoursesComponent = class TopScoreCoursesComponent {
    constructor() { }
    ngOnInit() { }
};
TopScoreCoursesComponent.ctorParameters = () => [];
TopScoreCoursesComponent.propDecorators = {
    courseData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['topCoursesData',] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['loading',] }]
};
TopScoreCoursesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-score-courses',
        template: _raw_loader_top_score_courses_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_score_courses_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopScoreCoursesComponent);



/***/ }),

/***/ "JbON":
/*!*****************************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-students/top-score-students.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top_score_block {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n}\n.top_score_block .top_score_block__image img {\n  width: 60px;\n  height: 60px;\n  margin-top: 0;\n  border-radius: 50px;\n  border: 3px solid #062f87;\n}\n.top_score_block .top_score_block__image span {\n  margin-left: 15px;\n  font-weight: 600;\n  font-size: 15px;\n  color: #062F87;\n}\n.top_score_block .top_score_block__text {\n  display: flex;\n  align-items: center;\n}\n.top_score_block .top_score_block__text h5 {\n  font-weight: 600;\n  font-size: 18px;\n  color: #062F87;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RvcC1zY29yZS1zdHVkZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQVI7QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZOO0FBR007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQURSIiwiZmlsZSI6InRvcC1zY29yZS1zdHVkZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bfc2NvcmVfYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAudG9wX3Njb3JlX2Jsb2NrX19pbWFnZSB7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNjJmODc7XG4gICAgICB9XG4gIFxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjMDYyRjg3O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnRvcF9zY29yZV9ibG9ja19fdGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzA2MkY4NztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "M/rj":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/top-scores/top-score-courses/top-score-courses.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top_score_block\" *ngFor=\"let item of courseData\">\n    <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n    <div class=\"top_score_block__image\" >\n      <img [src]=\"item.imagePath\" loading=\"lazy\" alt=\"\"  />\n      <span> {{ item.courseName }} </span>\n    </div>\n    <!-- <div class=\"top_score_block__text\">\n        <h5> {{ item.finalResult }} points </h5>\n    </div> -->\n  </div>\n  ");

/***/ }),

/***/ "MQ4T":
/*!*****************************************************************!*\
  !*** ./src/app/courses/top-scores/top-scores-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TopScoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoresPageRoutingModule", function() { return TopScoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _top_scores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-scores.page */ "iBYr");




const routes = [
    {
        path: '',
        component: _top_scores_page__WEBPACK_IMPORTED_MODULE_3__["TopScoresPage"]
    }
];
let TopScoresPageRoutingModule = class TopScoresPageRoutingModule {
};
TopScoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopScoresPageRoutingModule);



/***/ }),

/***/ "NNgW":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/top-scores/top-user-score/top-user-score.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top_score_user\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" *ngIf=\"obj\">\n      <ion-col  size-lg=\"1\" size-md=\"4\" size-sm=\"3\" size-xs=\"3\"  class=\"top_score_user__second\">\n        <img  *ngIf=\"obj[1].imagePath !== null\" [src]=\"obj[1].imagePath\" />\n        <img *ngIf=\"obj[1].imagePath === null\" src=\"../../../../assets/images/img-profile.png\" />\n        <h3> 2 </h3>\n        <h4> {{ obj[1].nickname }} </h4>\n        <p> {{ obj[1].finalResult  }} </p>\n      </ion-col>\n      <ion-col size-lg=\"1\" size-md=\"4\" size-sm=\"3\" size-xs=\"3\" class=\"top_score_user__first\">\n        <img  *ngIf=\"obj[0].imagePath !== null\" [src]=\"obj[0].imagePath\" />\n        <img *ngIf=\"obj[0].imagePath === null\" src=\"../../../../assets/images/img-profile.png\" />\n        <h3> 1 </h3>\n        <h4> {{ obj[0].nickname }}  </h4>\n        <p> {{ obj[0].finalResult }} </p>\n      </ion-col>\n      <ion-col size-lg=\"1\" size-md=\"4\" size-sm=\"3\" size-xs=\"3\" class=\"top_score_user__third\">\n        <img  *ngIf=\"obj[2].imagePath !== null\" [src]=\"obj[2].imagePath\" />\n        <img *ngIf=\"obj[2].imagePath === null\" src=\"../../../../assets/images/img-profile.png\" />\n        <h3> 3 </h3>\n        <h4> {{ obj[2].nickname }} </h4>\n        <p> {{ obj[2].finalResult  }} </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n");

/***/ }),

/***/ "Pm2c":
/*!***************************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-students/top-score-students.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TopScoreStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoreStudentsComponent", function() { return TopScoreStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_score_students_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-score-students.component.html */ "4hZR");
/* harmony import */ var _top_score_students_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-score-students.component.scss */ "JbON");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TopScoreStudentsComponent = class TopScoreStudentsComponent {
    constructor() { }
    ngOnInit() { }
};
TopScoreStudentsComponent.ctorParameters = () => [];
TopScoreStudentsComponent.propDecorators = {
    studentsData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['topStudentData',] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['loading',] }]
};
TopScoreStudentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-score-students',
        template: _raw_loader_top_score_students_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_score_students_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopScoreStudentsComponent);



/***/ }),

/***/ "Pmgx":
/*!***************************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-courses/top-score-courses.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top_score_block {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n}\n.top_score_block .top_score_block__image img {\n  width: 60px;\n  height: 60px;\n  margin-top: 0;\n  border-radius: 50px;\n  border: 3px solid #062f87;\n}\n.top_score_block .top_score_block__image span {\n  margin-left: 15px;\n  font-weight: 800;\n  font-size: 12px;\n  color: #062F87;\n}\n.top_score_block .top_score_block__text {\n  display: flex;\n  align-items: center;\n}\n.top_score_block .top_score_block__text h5 {\n  font-weight: 600;\n  font-size: 18px;\n  color: #062F87;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RvcC1zY29yZS1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNSO0FBRU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBUjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRk47QUFHTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRFIiLCJmaWxlIjoidG9wLXNjb3JlLWNvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wX3Njb3JlX2Jsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgLnRvcF9zY29yZV9ibG9ja19faW1hZ2Uge1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDYyZjg3O1xuICAgICAgfVxuICBcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzA2MkY4NztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC50b3Bfc2NvcmVfYmxvY2tfX3RleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMwNjJGODc7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "QOFr":
/*!****************************************************!*\
  !*** ./src/app/shared/services/courses.service.ts ***!
  \****************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.constants */ "1Lwo");




let CourseService = class CourseService {
    constructor(http) {
        this.http = http;
        this.limit = 6;
        this.offset = 0;
        this.queryParams = `?Offset=${this.offset}&Limit=${this.limit}`;
    }
    // ** get all courses in the system
    getAllCourses(courseQuery, offset) {
        if (offset != null) {
            this.queryParams = `?Offset=${offset}&Limit=${this.limit}`;
        }
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getAllCoursesAPI"]}/${courseQuery}` + this.queryParams);
    }
    // ** get the subscribed courses of the user
    getUserCourses(courseQuery, offset) {
        if (offset != null) {
            this.queryParams = `?Offset=${offset}&Limit=${this.limit}`;
        }
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getUsersCoursesAPI"]}/${courseQuery}` + this.queryParams);
    }
    // ** get the course details
    getCoursesDetails(id) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getCourseDetails"]}?id=${id}`);
    }
    // ** get user course details
    getUserCoursesDetails(courseId) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getUserCourseDetails"]}?courseId=${courseId}`);
    }
    // ** create course apply
    createCourseApply(from) {
        return this.http.post(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["createApplyCourse"]}`, from);
    }
    // ** get course material
    getCourseMaterial(courseId, offset, limit) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["courseMaterials"]}?Offset=${offset}&Limit=${limit}&courseId=${courseId}`);
    }
    // ** get all categories
    getCourseCategories(offset, limit) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('Offset', `${offset}`)
            .set('Limit', `${limit}`);
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getCourseCategories"]}`, { params });
    }
    // ** rating service
    createRatingService(rating) {
        return this.http.post(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["createUserCourseRate"]}`, rating);
    }
    // ** get top scores
    getTopScores() {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["topScores"]}`);
    }
    // ** get courses by category
    getCoursesByCategories(offset, limit, catId) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getCoursesByCategory"]}?Offset=${offset}&Limit=${limit}&categoryId=${catId}`);
    }
};
CourseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CourseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], CourseService);



/***/ }),

/***/ "TUib":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-exams/top-score-exams.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TopScoreExamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoreExamsComponent", function() { return TopScoreExamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_score_exams_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-score-exams.component.html */ "2Dmr");
/* harmony import */ var _top_score_exams_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-score-exams.component.scss */ "+0po");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TopScoreExamsComponent = class TopScoreExamsComponent {
    constructor() { }
    ngOnInit() { }
};
TopScoreExamsComponent.ctorParameters = () => [];
TopScoreExamsComponent.propDecorators = {
    examsData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['topExamsData',] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['loading',] }]
};
TopScoreExamsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-score-exams',
        template: _raw_loader_top_score_exams_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_score_exams_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopScoreExamsComponent);



/***/ }),

/***/ "WnMN":
/*!*********************************************************!*\
  !*** ./src/app/courses/top-scores/top-scores.module.ts ***!
  \*********************************************************/
/*! exports provided: TopScoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoresPageModule", function() { return TopScoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _top_scores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-scores-routing.module */ "MQ4T");
/* harmony import */ var _top_scores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-scores.page */ "iBYr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _top_score_item_top_score_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-score-item/top-score-item.component */ "h+4+");
/* harmony import */ var _top_score_courses_top_score_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-score-courses/top-score-courses.component */ "F3pK");
/* harmony import */ var _top_score_exams_top_score_exams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-score-exams/top-score-exams.component */ "TUib");
/* harmony import */ var _top_score_students_top_score_students_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./top-score-students/top-score-students.component */ "Pm2c");
/* harmony import */ var _top_user_score_top_user_score_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./top-user-score/top-user-score.component */ "wdxf");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");














let TopScoresPageModule = class TopScoresPageModule {
};
TopScoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _top_scores_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopScoresPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
        ],
        declarations: [_top_scores_page__WEBPACK_IMPORTED_MODULE_6__["TopScoresPage"], _top_score_students_top_score_students_component__WEBPACK_IMPORTED_MODULE_11__["TopScoreStudentsComponent"], _top_score_exams_top_score_exams_component__WEBPACK_IMPORTED_MODULE_10__["TopScoreExamsComponent"], _top_score_courses_top_score_courses_component__WEBPACK_IMPORTED_MODULE_9__["TopScoreCoursesComponent"], _top_score_item_top_score_item_component__WEBPACK_IMPORTED_MODULE_8__["TopScoreItemComponent"], _top_user_score_top_user_score_component__WEBPACK_IMPORTED_MODULE_12__["TopUserScoreComponent"]]
    })
], TopScoresPageModule);



/***/ }),

/***/ "YAj0":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-user-score/top-user-score.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".number_score, .top_score_user .top_score_user__third h3, .top_score_user .top_score_user__first h3, .top_score_user .top_score_user__second h3 {\n  background-color: #fff;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  font-size: 16px;\n  border-radius: 50px;\n  margin: 10px auto;\n  font-weight: 700;\n}\n\n.score, .top_score_user .top_score_user__third p, .top_score_user .top_score_user__first p, .top_score_user .top_score_user__second p {\n  padding: 0;\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n}\n\n.user, .top_score_user .top_score_user__third h4, .top_score_user .top_score_user__first h4, .top_score_user .top_score_user__second h4 {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 16px;\n  margin-bottom: 15px;\n}\n\n.image, .top_score_user .top_score_user__third img, .top_score_user .top_score_user__first img, .top_score_user .top_score_user__second img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  border: 3px solid #062F87;\n  position: absolute;\n  top: -65px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.top_score_user {\n  background-color: #EBFFE6;\n  padding-top: 80px;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: center;\n  padding-bottom: 0;\n}\n\n.top_score_user .top_score_user__second {\n  background-color: #C0FEB1;\n  border-radius: 30px 30px 0 0;\n  height: 200px;\n  position: relative;\n  top: 52px;\n  margin-right: 5px;\n}\n\n.top_score_user .top_score_user__first {\n  background-color: #8AFA6F;\n  border-radius: 30px 30px 0 0;\n  height: 250px;\n  margin-right: 5px;\n}\n\n.top_score_user .top_score_user__third {\n  background-color: #C0FEB1;\n  border-radius: 30px 30px 0 0;\n  height: 151px;\n  position: relative;\n  top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RvcC11c2VyLXNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsNEJBcERXO0VBcURYLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQW9CRTtFQUNFLHlCQUFBO0VBQ0EsNEJBNUVXO0VBNkVYLGFBQUE7RUFDQSxpQkFBQTtBQWxCSjs7QUFzQ0k7RUFDRSx5QkFBQTtFQUNBLDRCQXBHUztFQXFHVCxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBcENOIiwiZmlsZSI6InRvcC11c2VyLXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlclJhZGl1czogMzBweCAzMHB4IDAgMDtcblxuLm51bWJlcl9zY29yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNjb3JlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcblxufVxuXG4udXNlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmltYWdlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDYyRjg3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC02NXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4udG9wX3Njb3JlX3VzZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGRkU2O1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gIC50b3Bfc2NvcmVfdXNlcl9fc2Vjb25kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBGRUIxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXG4gICAgaW1nIHtcbiAgICAgIEBleHRlbmQgLmltYWdlO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBAZXh0ZW5kIC5udW1iZXJfc2NvcmU7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgQGV4dGVuZCAudXNlcjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIEBleHRlbmQgLnNjb3JlO1xuICAgIH1cbiAgfVxuXG4gIC50b3Bfc2NvcmVfdXNlcl9fZmlyc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QUZBNkY7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXG4gIGltZyB7XG4gICAgICBAZXh0ZW5kIC5pbWFnZTtcbiAgICB9XG5cbiAgaDMge1xuICAgICAgQGV4dGVuZCAubnVtYmVyX3Njb3JlO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICBAZXh0ZW5kIC51c2VyXG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBAZXh0ZW5kIC5zY29yZTtcbiAgICB9XG5cbiAgfVxuXG4gICAgLnRvcF9zY29yZV91c2VyX190aGlyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBGRUIxO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICAgIGhlaWdodDogMTUxcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDEwMHB4O1xuXG4gIGltZyB7XG4gICAgQGV4dGVuZCAuaW1hZ2U7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBAZXh0ZW5kIC5udW1iZXJfc2NvcmU7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgQGV4dGVuZCAudXNlclxuICAgIH1cblxuICAgIHAge1xuICAgICAgQGV4dGVuZCAuc2NvcmU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "gWoZ":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-item/top-score-item.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top_score_block {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n}\n.top_score_block .top_score_block__image img {\n  width: 60px;\n  height: 60px;\n  margin-top: 0;\n  border-radius: 50px;\n  border: 3px solid #062f87;\n}\n.top_score_block .top_score_block__image span {\n  margin-left: 15px;\n  font-weight: 600;\n  font-size: 15px;\n  color: #062F87;\n}\n.top_score_block .top_score_block__text {\n  display: flex;\n  align-items: center;\n}\n.top_score_block .top_score_block__text h5 {\n  font-weight: 600;\n  font-size: 15px;\n  color: #062F87;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RvcC1zY29yZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRE4iLCJmaWxlIjoidG9wLXNjb3JlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wX3Njb3JlX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIC50b3Bfc2NvcmVfYmxvY2tfX2ltYWdlIHtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA2MmY4NztcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjMDYyRjg3O1xuICAgIH1cbiAgfVxuXG4gIC50b3Bfc2NvcmVfYmxvY2tfX3RleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoNSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICMwNjJGODc7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "h+4+":
/*!*******************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-score-item/top-score-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TopScoreItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoreItemComponent", function() { return TopScoreItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_score_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-score-item.component.html */ "2OJa");
/* harmony import */ var _top_score_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-score-item.component.scss */ "gWoZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TopScoreItemComponent = class TopScoreItemComponent {
    constructor() { }
    ngOnInit() { }
};
TopScoreItemComponent.ctorParameters = () => [];
TopScoreItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-score-item',
        template: _raw_loader_top_score_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_score_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopScoreItemComponent);



/***/ }),

/***/ "iBYr":
/*!*******************************************************!*\
  !*** ./src/app/courses/top-scores/top-scores.page.ts ***!
  \*******************************************************/
/*! exports provided: TopScoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScoresPage", function() { return TopScoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_scores_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-scores.page.html */ "2i0u");
/* harmony import */ var _top_scores_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-scores.page.scss */ "v2A7");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





let TopScoresPage = class TopScoresPage {
    constructor(courseService) {
        this.courseService = courseService;
        this.sub = [];
        this.isLoading = false;
    }
    ngOnInit() {
        // ** get top scores data
        this.isLoading = true;
        this.courseService.getTopScores()
            .subscribe(response => {
            this.isLoading = false;
            // console.log('top scores', response);
            this.allTopStudents = response['result']['topStudents'];
            this.allTopCourses = response['result']['topCourses'];
            this.allTopExams = response['result']['topTests'];
        });
    }
    ngOnDestroy() {
        this.sub.forEach(e => e.unsubscribe());
    }
};
TopScoresPage.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] }
];
TopScoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-top-scores',
        template: _raw_loader_top_scores_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_scores_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopScoresPage);



/***/ }),

/***/ "v2A7":
/*!*********************************************************!*\
  !*** ./src/app/courses/top-scores/top-scores.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 22px;\n  margin: 50px 0;\n  text-align: center;\n  font-weight: 500;\n  color: var(--ion-color-second-app);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvcC1zY29yZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRiIsImZpbGUiOiJ0b3Atc2NvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG59XG4iXX0= */");

/***/ }),

/***/ "wdxf":
/*!*******************************************************************************!*\
  !*** ./src/app/courses/top-scores/top-user-score/top-user-score.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TopUserScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUserScoreComponent", function() { return TopUserScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_user_score_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-user-score.component.html */ "NNgW");
/* harmony import */ var _top_user_score_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-user-score.component.scss */ "YAj0");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





let TopUserScoreComponent = class TopUserScoreComponent {
    constructor(courseService) {
        this.courseService = courseService;
    }
    ngOnInit() {
        this.courseService.getTopScores()
            .subscribe((response) => {
            this.topStudents = response['result']['topStudents'];
            this.topStudent = this.topStudents.slice(0, 3);
            this.obj = Object.assign({}, this.topStudent); // {0:"a", 1:"b", 2:"c"}
        });
    }
};
TopUserScoreComponent.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] }
];
TopUserScoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-top-user-score',
        template: _raw_loader_top_user_score_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_user_score_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopUserScoreComponent);



/***/ })

}]);
//# sourceMappingURL=top-scores-top-scores-module.js.map