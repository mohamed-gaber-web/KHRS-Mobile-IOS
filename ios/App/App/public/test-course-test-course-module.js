(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-course-test-course-module"],{

/***/ "/G48":
/*!************************************************************!*\
  !*** ./src/app/training/test-course/test-course.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* header Top */\nion-icon {\n  font-size: 35px;\n}\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-profile ion-avatar {\n  width: 60px !important;\n  margin: 5px 0;\n  height: 60px !important;\n}\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n/* end header top */\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\ncd-timer {\n  text-align: center;\n  margin: auto;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.timer-finished {\n  text-align: center;\n  margin: auto;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlc3QtY291cnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBQ0E7RUFBVSxlQUFBO0FBRVY7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFHQSxtQkFBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERiIsImZpbGUiOiJ0ZXN0LWNvdXJzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgVG9wICovXG5pb24taWNvbiB7Zm9udC1zaXplOiAzNXB4O31cblxuaW9uLWhlYWRlciBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4uaW1nLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNjBweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBoZWlnaHQ6IDYwcHghaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi8qIGVuZCBoZWFkZXIgdG9wICovXG5cbi5pbWctbGFuZ2F1Z2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxM3B4O1xuICB0b3A6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbmNkLXRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGltZXItZmluaXNoZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "2ud6":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/test-course.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n\n<ion-content>\n\n  <cd-timer\n  *ngIf='allTestData'\n  #basicTimer\n    [startTime]=\"allTestData['duration'] * 60\"\n    [countdown]=\"true\"\n    (onComplete)=\"finishedTimer()\"\n    format=\"hms\"></cd-timer>\n    <h1> {{ durationTest }} </h1>\n    <h1 class=\"timer-finished\" *ngIf=\"finishedTimer\"> {{ message }} </h1>\n\n      <app-single-test\n      (questionData)=\"getQuestionData($event)\"\n      *ngIf=\"questionType === 1 && activeCourse\"\n      [pageNumber]='redOffset'\n      ></app-single-test>\n    <app-multi-test (questionData)=\"getQuestionData($event)\" *ngIf=\"questionType === 2 && activeCourse\" [pageNumber]='redOffset'></app-multi-test>\n    <app-puzzle-text-test (questionData)=\"getQuestionData($event)\" *ngIf=\"questionType === 3 && activeCourse\" [pageNumber]='redOffset'></app-puzzle-text-test>\n    <app-puzzle-image-test (questionData)=\"getQuestionData($event)\" *ngIf=\"questionType === 4 && activeCourse\" [pageNumber]='redOffset'></app-puzzle-image-test>\n\n\n    <app-single-test\n      (questionData)=\"getQuestionData($event)\"\n      *ngIf=\"questionType === 1\"\n      [pageNumber]='pageNumber'\n      ></app-single-test>\n    <app-multi-test (questionData)=\"getQuestionData($event)\" *ngIf=\"questionType === 2\" [pageNumber]='pageNumber'></app-multi-test>\n    <app-puzzle-text-test (questionData)=\"getQuestionData($event)\" *ngIf=\"questionType === 3\" [pageNumber]='pageNumber'></app-puzzle-text-test>\n    <app-puzzle-image-test (questionData)=\"getQuestionData($event)\" *ngIf=\"questionType === 4\" [pageNumber]='pageNumber'></app-puzzle-image-test>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "3niU":
/*!*********************************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-image-zoom/puzzle-image-zoom.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PuzzleImageZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImageZoomComponent", function() { return PuzzleImageZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_image_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-image-zoom.component.html */ "X4r6");
/* harmony import */ var _puzzle_image_zoom_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-image-zoom.component.scss */ "k+R1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");





let PuzzleImageZoomComponent = class PuzzleImageZoomComponent {
    constructor(navParams) {
        this.navParams = navParams;
    }
    ngOnInit() {
        this.imagePath = this.navParams.data.imagePath;
    }
};
PuzzleImageZoomComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
PuzzleImageZoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-puzzle-image-zoom',
        template: _raw_loader_puzzle_image_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_image_zoom_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleImageZoomComponent);



/***/ }),

/***/ "4ypJ":
/*!******************************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-sound-test/puzzle-sound-test.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PuzzleSoundTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSoundTestModule", function() { return PuzzleSoundTestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _puzzle_sound_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./puzzle-sound-test.component */ "vqQO");





let PuzzleSoundTestModule = class PuzzleSoundTestModule {
};
PuzzleSoundTestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        declarations: [_puzzle_sound_test_component__WEBPACK_IMPORTED_MODULE_4__["PuzzleSoundTestComponent"]]
    })
], PuzzleSoundTestModule);



/***/ }),

/***/ "83Ks":
/*!************************************************************************!*\
  !*** ./src/app/training/test-course/single-test/single-test.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/****************** EXERCICE COURSES *********************/\n/****************** SINGLE COURSES *********************/\n.ext-icon-vlume {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  position: relative;\n  top: 3px;\n}\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n.single-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px 0 50px 0;\n}\n.single-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 20px auto;\n}\n.single-choice ion-radio {\n  --color: var(--ion-color-second-app);\n}\n.hideButtonNext {\n  display: none;\n}\n.showButtonNext {\n  display: block;\n}\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n/****************** EXERCICE COURSES *********************/\n/****************** SINGLE COURSES *********************/\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpbmdsZS10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBQTtBQUVBLHdEQUFBO0FBR0E7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFGRjtBQU9FO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpKO0FBU0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTko7QUFTRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVVFO0VBQ0Usb0NBQUE7QUFSSjtBQWNBO0VBQ0UsYUFBQTtBQVhGO0FBY0E7RUFDRSxjQUFBO0FBWEY7QUFjQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVhGO0FBZ0JBLDBEQUFBO0FBRUEsd0RBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBZkYiLCJmaWxlIjoic2luZ2xlLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKiBFWEVSQ0lDRSBDT1VSU0VTICoqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKiBTSU5HTEUgQ09VUlNFUyAqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLmV4dC1pY29uLXZsdW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG59XG5cbi5zaW5nbGUtY2hvaWNlIHtcbiAgaW9uLXRleHR7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDIwcHggMCA1MHB4IDA7XG4gIH1cblxuICBpb24tbGFiZWx7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuXG4gIGlvbi1yYWRpbyB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB9XG59XG5cblxuXG4uaGlkZUJ1dHRvbk5leHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvd0J1dHRvbk5leHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRvdGFsLXJlc3VsdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKiogRVhFUkNJQ0UgQ09VUlNFUyAqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKiogU0lOR0xFIENPVVJTRVMgKioqKioqKioqKioqKioqKioqKioqL1xuXG4uaW1nLWxhbmdhdWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufSJdfQ== */");

/***/ }),

/***/ "BhgR":
/*!********************************************************************!*\
  !*** ./src/app/training/test-course/test-course-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TestCoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCoursePageRoutingModule", function() { return TestCoursePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _test_course_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-course.page */ "EKlr");




const routes = [
    {
        path: '',
        component: _test_course_page__WEBPACK_IMPORTED_MODULE_3__["TestCoursePage"],
        children: [
            {
                path: 'single-test',
                loadChildren: () => __webpack_require__.e(/*! import() | single-test-single-test-module */ "single-test-single-test-module").then(__webpack_require__.bind(null, /*! ./single-test/single-test.module */ "r1++")).then(m => m.SingleTestPageModule)
            },
            {
                path: 'multi-test',
                loadChildren: () => __webpack_require__.e(/*! import() | multi-test-multi-test-module */ "multi-test-multi-test-module").then(__webpack_require__.bind(null, /*! ./multi-test/multi-test.module */ "USv7")).then(m => m.MultiTestPageModule)
            },
            {
                path: 'puzzle-text-test',
                loadChildren: () => __webpack_require__.e(/*! import() | puzzle-text-test-puzzle-text-test-module */ "puzzle-text-test-puzzle-text-test-module").then(__webpack_require__.bind(null, /*! ./puzzle-text-test/puzzle-text-test.module */ "skpO")).then(m => m.PuzzleTextTestPageModule)
            },
            {
                path: 'puzzle-image-test',
                loadChildren: () => __webpack_require__.e(/*! import() | puzzle-image-test-puzzle-image-test-module */ "puzzle-image-test-puzzle-image-test-module").then(__webpack_require__.bind(null, /*! ./puzzle-image-test/puzzle-image-test.module */ "ocVh")).then(m => m.PuzzleImageTestPageModule)
            },
        ]
    },
];
let TestCoursePageRoutingModule = class TestCoursePageRoutingModule {
};
TestCoursePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestCoursePageRoutingModule);



/***/ }),

/***/ "EKlr":
/*!**********************************************************!*\
  !*** ./src/app/training/test-course/test-course.page.ts ***!
  \**********************************************************/
/*! exports provided: TestCoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCoursePage", function() { return TestCoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_course_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test-course.page.html */ "2ud6");
/* harmony import */ var _test_course_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-course.page.scss */ "/G48");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "A9xy");










let TestCoursePage = class TestCoursePage {
    constructor(storageService, route, router, toastController, navController, testService, utilityService) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.testService = testService;
        this.utilityService = utilityService;
        this.pageNumber = 0;
        this.counterStart = 0;
        this.finishedTime = false;
        this.message = '';
        this.slideData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.redOffset = +JSON.parse(this.route.snapshot.paramMap.get('testOffset'));
        this.activeCourse = JSON.parse(this.route.snapshot.paramMap.get('activeCourse'));
        this.getTestType();
        // this.updateQuestionType = +JSON.parse(localStorage.getItem('testQuestionType'));
        // this.activeTest = JSON.parse(localStorage.getItem('activeTest'));
    }
    // ** get test type
    // getTestType() {
    //   if(this.activeCourse == true) {
    //     console.log('redirect in this ')
    //     this.testService.getTestType(this.courseId, this.redOffset)
    //     .subscribe(response => {
    //       this.questionType = response['questionType'];
    //       this.allTestData = response;
    //     })
    //   } else {
    //     this.testService.getTestType(this.courseId, this.pageNumber)
    //     .subscribe(response => {
    //       if (response['questionType'] == 0) {
    //         this.router.navigate(['courses/tabs/my-courses']);
    //       }
    //       this.questionType = response['questionType'];
    //       this.allTestData = response;
    //       // debugger;
    //     })
    //   }
    // }
    getTestType() {
        if (this.activeCourse == true) {
            this.testService.getTestType(this.courseId, this.redOffset)
                .subscribe(response => {
                this.questionType = response['questionType'];
                this.allTestData = response;
            });
        }
        else {
            this.testService.getTestType(this.courseId, this.pageNumber)
                .subscribe(response => {
                if (response['success'] === false) {
                    this.utilityService.errorText(response['arrayMessage'][0]);
                    this.router.navigate(['courses/tabs/choose-course-material', { courseId: this.courseId }]);
                }
                if (response['questionType'] == 0) {
                    this.router.navigate(['courses/tabs/my-courses']);
                }
                this.questionType = response['questionType'];
                this.allTestData = response;
                // debugger;
            });
        }
    }
    getQuestionData(event) {
        this.questionType = event.questionType;
        this.pageNumber = event.pageNumber;
    }
    finishedTimer() {
        this.message = 'timer is finished';
        setTimeout(() => {
            this.router.navigate(['/courses/tabs/my-courses']);
        }, 4000);
    }
};
TestCoursePage.ctorParameters = () => [
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] }
];
TestCoursePage.propDecorators = {
    slideData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    cdTimer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['basicTimer', { static: false },] }]
};
TestCoursePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test-course',
        template: _raw_loader_test_course_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_course_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestCoursePage);



/***/ }),

/***/ "EPzg":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/puzzle-image-test/puzzle-image-test.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-slides *ngIf=\"lengthItems != pageNumber\" class=\"swiper-no-swiping\" [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n\n    <div cdkDropListGroup class=\"drag-group\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col size=\"12\"\n                  class=\"example-box\"\n                  cdkDropList\n                  *ngFor=\"let item of questionsArray\"\n                  [cdkDropListData]=\"item\"\n                  cdkDropListSortingDisabled\n                  cdkDropListOrientation=\"horizontal\"\n                  (cdkDropListDropped)=\"drop($event)\"\n                >\n                <div *ngFor=\"let item2 of item\" cdkDrag [cdkDragDisabled]=\"true\">\n\n                  <ion-img\n                    class=\"image-question\"\n                    loading=\"lazy\" *ngIf=\"item2.type === 'question' \"\n                    (click)=\"presentPopover($event, item2)\"\n                    [src]=\"item2.imagePath\">\n                  </ion-img>\n\n\n                  <div class=\"drag-answer\" *ngIf=\"item2.type === 'answer' \">\n                    <ion-grid class=\"puzzle-answer\">\n                      <ion-row>\n\n                        <ion-col\n                          size=\"12\"\n                          >\n                          <div class=\"puzzle-fix\" cdkDrag [cdkDragDisabled]=\"false\">\n                            <div class=\"title\"> {{ item2.keyword }}</div>\n                            <!-- Start Sound -->\n\n                            <div class=\"sound\" *ngIf=\"item2.voicePath\">\n                              <div class=\"sound-bg\">\n                                <div class=\"img-volume\">\n                                  <ion-img\n                                  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePath)\">\n                                </ion-img>\n                                </div>\n                              </div>\n                              <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                            </div>\n                            <div class=\"sound\" *ngIf=\"item2.voicePathDanish\">\n                              <div class=\"sound-bg\">\n                                <div class=\"img-volume\">\n                                  <ion-img\n                                  loading=\"lazy\"\n                                  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePathDanish)\">\n                                </ion-img>\n                                </div>\n                              </div>\n                              <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                            </div>\n\n                            <!-- Start Sound  -->\n                          </div>\n                        </ion-col>\n\n                      </ion-row>\n                    </ion-grid>\n\n                  </div>\n                </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-grid class=\"puzzle-answer\">\n              <ion-row>\n                <ion-col\n                  size=\"12\"\n                  cdkDropList\n                  [cdkDropListData]=\"answersArray\"\n                  (cdkDropListDropped)=\"drop($event)\"\n                  >\n                  <div class=\"puzzle-fix\"*ngFor=\"let item of answersArray\" cdkDrag>\n\n                  <div class=\"title\"> {{ item.keyword }}</div>\n\n                  <!-- Start Sound -->\n                  <div class=\"sound\" *ngIf=\"item.voicePath\">\n                    <div class=\"sound-bg\">\n                      <div class=\"img-volume\">\n                        <ion-img\n                        class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePath)\">\n                      </ion-img>\n                      </div>\n                    </div>\n                    <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                  </div>\n                  <div class=\"sound\" *ngIf=\"item.voicePathDanish\">\n                    <div class=\"sound-bg\">\n                      <div class=\"img-volume\">\n                        <ion-img\n                        loading=\"lazy\"\n                        class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePathDanish)\">\n                      </ion-img>\n                      </div>\n                    </div>\n                    <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                  </div>\n                  <!-- End Sound -->\n\n                  </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n  </ion-slide>\n</ion-slides>\n\n\n<!-- Single inal test -->\n\n<!-- <app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished> -->\n\n\n  <ion-grid *ngIf=\"lengthItems !== pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"4\">\n        <ion-button\n        *ngIf=\"nextButton\"\n        (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <!-- <ion-col size=\"4\">\n        <ion-button\n          (click)=\"ScapeSlidePrev()\"\n          >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col> -->\n\n      <ion-col size=\"4\">\n        <ion-button\n        *ngIf=\"nextButton\"\n          (click)=\"slideNext()\"\n          >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"lengthItems === pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"6\">\n        <ion-button\n        *ngIf=\"nextButton\"\n        (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button\n        *ngIf=\"nextButton\"\n          (click)=\"finishedTest()\"\n          >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "Gj54":
/*!********************************************************************!*\
  !*** ./node_modules/angular-cd-timer/fesm2015/angular-cd-timer.js ***!
  \********************************************************************/
/*! exports provided: CdTimerComponent, CdTimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdTimerComponent", function() { return CdTimerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdTimerModule", function() { return CdTimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-cd-timer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdTimerComponent {
    /**
     * @param {?} elt
     * @param {?} renderer
     */
    constructor(elt, renderer) {
        this.elt = elt;
        this.renderer = renderer;
        this.onStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Initialization
        this.autoStart = true;
        this.startTime = 0;
        this.endTime = 0;
        this.timeoutId = null;
        this.countdown = false;
        this.format = 'default';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const ngContentNode = this.elt.nativeElement.lastChild;
        this.ngContentSchema = ngContentNode ? ngContentNode.nodeValue : '';
        if (this.autoStart === undefined || this.autoStart === true) {
            this.start();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.resetTimeout();
    }
    /**
     * Start the timer
     * @return {?}
     */
    start() {
        this.initVar();
        this.resetTimeout();
        this.computeTimeUnits();
        this.startTickCount();
        this.onStart.emit(this);
    }
    /**
     * Resume the timer
     * @return {?}
     */
    resume() {
        this.resetTimeout();
        this.startTickCount();
    }
    /**
     * Stop the timer
     * @return {?}
     */
    stop() {
        this.clear();
        this.onStop.emit(this);
    }
    /**
     * Reset the timer
     * @return {?}
     */
    reset() {
        this.initVar();
        this.resetTimeout();
        this.clear();
        this.computeTimeUnits();
        this.renderText();
    }
    /**
     * Get the time information
     * @return {?} TimeInterface
     */
    get() {
        return {
            seconds: this.seconds,
            minutes: this.minutes,
            hours: this.hours,
            days: this.days,
            timer: this.timeoutId,
            tick_count: this.tickCounter
        };
    }
    /**
     * Initialize variable before start
     * @private
     * @return {?}
     */
    initVar() {
        this.startTime = this.startTime || 0;
        this.endTime = this.endTime || 0;
        this.countdown = this.countdown || false;
        this.tickCounter = this.startTime;
        // Disable countdown if start time not defined
        if (this.countdown && this.startTime === 0) {
            this.countdown = false;
        }
        // Determine auto format
        if (!this.format) {
            this.format = (this.ngContentSchema.length > 5) ? 'user' : 'default';
        }
    }
    /**
     * Reset timeout
     * @private
     * @return {?}
     */
    resetTimeout() {
        if (this.timeoutId) {
            clearInterval(this.timeoutId);
        }
    }
    /**
     * Render the time to DOM
     * @private
     * @return {?}
     */
    renderText() {
        /** @type {?} */
        let outputText;
        if (this.format === 'user') {
            // User presentation
            /** @type {?} */
            const items = {
                'seconds': this.seconds,
                'minutes': this.minutes,
                'hours': this.hours,
                'days': this.days
            };
            outputText = this.ngContentSchema;
            for (const key of Object.keys(items)) {
                outputText = outputText.replace('[' + key + ']', ((/** @type {?} */ (items)))[key].toString());
            }
        }
        else if (this.format === 'intelli') {
            // Intelli presentation
            outputText = '';
            if (this.days > 0) {
                outputText += this.days.toString() + 'day' + ((this.days > 1) ? 's' : '') + ' ';
            }
            if ((this.hours > 0) || (this.days > 0)) {
                outputText += this.hours.toString() + 'h ';
            }
            if (((this.minutes > 0) || (this.hours > 0)) && (this.days === 0)) {
                outputText += this.minutes.toString().padStart(2, '0') + 'min ';
            }
            if ((this.hours === 0) && (this.days === 0)) {
                outputText += this.seconds.toString().padStart(2, '0') + 's';
            }
        }
        else if (this.format === 'hms') {
            // Hms presentation
            outputText = this.hours.toString().padStart(2, '0') + ':';
            outputText += this.minutes.toString().padStart(2, '0') + ':';
            outputText += this.seconds.toString().padStart(2, '0');
        }
        else {
            // Default presentation
            outputText = this.days.toString() + 'd ';
            outputText += this.hours.toString() + 'h ';
            outputText += this.minutes.toString() + 'm ';
            outputText += this.seconds.toString() + 's';
        }
        this.renderer.setProperty(this.elt.nativeElement, 'innerHTML', outputText);
    }
    /**
     * @private
     * @return {?}
     */
    clear() {
        this.resetTimeout();
        this.timeoutId = null;
    }
    /**
     * Compute each unit (seconds, minutes, hours, days) for further manipulation
     * @protected
     * @return {?}
     */
    computeTimeUnits() {
        if (!this.maxTimeUnit || this.maxTimeUnit === 'day') {
            this.seconds = Math.floor(this.tickCounter % 60);
            this.minutes = Math.floor((this.tickCounter / 60) % 60);
            this.hours = Math.floor((this.tickCounter / 3600) % 24);
            this.days = Math.floor((this.tickCounter / 3600) / 24);
        }
        else if (this.maxTimeUnit === 'second') {
            this.seconds = this.tickCounter;
            this.minutes = 0;
            this.hours = 0;
            this.days = 0;
        }
        else if (this.maxTimeUnit === 'minute') {
            this.seconds = Math.floor(this.tickCounter % 60);
            this.minutes = Math.floor(this.tickCounter / 60);
            this.hours = 0;
            this.days = 0;
        }
        else if (this.maxTimeUnit === 'hour') {
            this.seconds = Math.floor(this.tickCounter % 60);
            this.minutes = Math.floor((this.tickCounter / 60) % 60);
            this.hours = Math.floor(this.tickCounter / 3600);
            this.days = 0;
        }
        this.renderText();
    }
    /**
     * Start tick count, base of this component
     * @protected
     * @return {?}
     */
    startTickCount() {
        /** @type {?} */
        const that = this;
        that.timeoutId = setInterval((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            let counter;
            if (that.countdown) {
                // Compute finish counter for countdown
                counter = that.tickCounter;
                if (that.startTime > that.endTime) {
                    counter = that.tickCounter - that.endTime - 1;
                }
            }
            else {
                // Compute finish counter for timer
                counter = that.tickCounter - that.startTime;
                if (that.endTime > that.startTime) {
                    counter = that.endTime - that.tickCounter - 1;
                }
            }
            that.computeTimeUnits();
            /** @type {?} */
            const timer = {
                seconds: that.seconds,
                minutes: that.minutes,
                hours: that.hours,
                days: that.days,
                timer: that.timeoutId,
                tick_count: that.tickCounter
            };
            that.onTick.emit(timer);
            if (counter < 0) {
                that.stop();
                that.onComplete.emit(that);
                return;
            }
            if (that.countdown) {
                that.tickCounter--;
            }
            else {
                that.tickCounter++;
            }
        }), 1000); // Each seconds
    }
}
CdTimerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'cd-timer',
                template: ' <ng-content></ng-content>'
            }] }
];
/** @nocollapse */
CdTimerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
CdTimerComponent.propDecorators = {
    startTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    endTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    countdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxTimeUnit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onTick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-cd-timer.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TimeInterface() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-cd-timer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdTimerModule {
}
CdTimerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [CdTimerComponent],
                imports: [],
                exports: [CdTimerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-cd-timer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-cd-timer.js.map


/***/ }),

/***/ "K2rq":
/*!***********************************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-sound-test/puzzle-sound-test.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3B1enpsZS1zb3VuZC10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQTtFQUNFLDJCQUFBO0FBdkNGIiwiZmlsZSI6InB1enpsZS1zb3VuZC10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmV4dC1pY29uLXZsdW1lIHtcbi8vICAgd2lkdGg6IDI0cHg7XG4vLyAgIGhlaWdodDogMjRweDtcbi8vIH1cblxuXG5cblxuLy8gLnNvdW5kLXBvcHVwIHtcblxuXG5cbi8vICAgcGFkZGluZzogMjBweDtcblxuLy8gICAuc291bmQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbi8vICAgICBwYWRkaW5nOiA1cHggNHB4O1xuLy8gICAgIG1hcmdpbjogMTBweDtcblxuLy8gICAgIC5zb3VuZC1iZyB7XG4vLyAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgIGhlaWdodDogMjBweDtcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbi8vICAgICAgIC5pbWctdm9sdW1lIHtcbi8vICAgICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5kYW5pc2gtZmxhZyB7XG4vLyAgIHdpZHRoOiAzMHB4O1xuLy8gICBoZWlnaHQ6IGF1dG87XG4vLyB9XG5cbi5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQge1xuICBwb3NpdGlvbjogc3RhdGljIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "MrdW":
/*!************************************************************!*\
  !*** ./src/app/training/test-course/test-course.module.ts ***!
  \************************************************************/
/*! exports provided: TestCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCoursePageModule", function() { return TestCoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _test_course_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-course-routing.module */ "BhgR");
/* harmony import */ var _test_course_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-course.page */ "EKlr");
/* harmony import */ var _single_test_single_test_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-test/single-test.page */ "YqGo");
/* harmony import */ var _multi_test_multi_test_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multi-test/multi-test.page */ "vyh8");
/* harmony import */ var _puzzle_text_test_puzzle_text_test_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./puzzle-text-test/puzzle-text-test.page */ "gGow");
/* harmony import */ var _puzzle_image_test_puzzle_image_test_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./puzzle-image-test/puzzle-image-test.page */ "xRh5");
/* harmony import */ var _puzzle_image_test_puzzle_image_zoom_puzzle_image_zoom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./puzzle-image-test/puzzle-image-zoom/puzzle-image-zoom.component */ "3niU");
/* harmony import */ var _test_finished_test_finished_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test-finished/test-finished.page */ "5s1J");
/* harmony import */ var _puzzle_image_test_puzzle_sound_test_puzzle_sound_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./puzzle-image-test/puzzle-sound-test/puzzle-sound-test.component */ "vqQO");
/* harmony import */ var _puzzle_image_test_puzzle_sound_test_puzzle_sound_test_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./puzzle-image-test/puzzle-sound-test/puzzle-sound-test.module */ "4ypJ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var angular_cd_timer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-cd-timer */ "Gj54");


















let TestCoursePageModule = class TestCoursePageModule {
};
TestCoursePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _test_course_routing_module__WEBPACK_IMPORTED_MODULE_6__["TestCoursePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
            angular_cd_timer__WEBPACK_IMPORTED_MODULE_17__["CdTimerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _puzzle_image_test_puzzle_sound_test_puzzle_sound_test_module__WEBPACK_IMPORTED_MODULE_15__["PuzzleSoundTestModule"]
        ],
        entryComponents: [_test_finished_test_finished_page__WEBPACK_IMPORTED_MODULE_13__["TestFinishedPage"], _puzzle_image_test_puzzle_sound_test_puzzle_sound_test_component__WEBPACK_IMPORTED_MODULE_14__["PuzzleSoundTestComponent"]],
        declarations: [
            _test_course_page__WEBPACK_IMPORTED_MODULE_7__["TestCoursePage"],
            _single_test_single_test_page__WEBPACK_IMPORTED_MODULE_8__["SingleTestPage"],
            _multi_test_multi_test_page__WEBPACK_IMPORTED_MODULE_9__["MultiTestPage"],
            _puzzle_text_test_puzzle_text_test_page__WEBPACK_IMPORTED_MODULE_10__["PuzzleTextTestPage"],
            _puzzle_image_test_puzzle_image_test_page__WEBPACK_IMPORTED_MODULE_11__["PuzzleImageTestPage"],
            _puzzle_image_test_puzzle_image_zoom_puzzle_image_zoom_component__WEBPACK_IMPORTED_MODULE_12__["PuzzleImageZoomComponent"],
            _test_finished_test_finished_page__WEBPACK_IMPORTED_MODULE_13__["TestFinishedPage"],
        ],
    })
], TestCoursePageModule);



/***/ }),

/***/ "OtTT":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/puzzle-image-test/puzzle-sound-test/puzzle-sound-test.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div  class=\"sound-popup\">\n<div class=\"sound\" *ngIf=\"voicePath\">\n  <div class=\"sound-bg\">\n    <div class=\"img-volume\">\n      <ion-img\n      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\"\n      (click)=\"startAudio(voicePath)\" src=\"../../../assets/icon/Vector.png\">\n    </ion-img>\n    </div>\n  </div>\n  <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n</div>\n<div class=\"sound\" *ngIf=\"voicePathDanish\">\n  <div class=\"sound-bg\">\n    <div class=\"img-volume\">\n      <ion-img\n      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\"\n      (click)=\"startAudio(voicePathDanish)\" src=\"../../../assets/icon/Vector.png\">\n    </ion-img>\n    </div>\n  </div>\n  <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n</div>\n</div> -->\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-img class=\"image-question\" loading=\"lazy\" [src]=\"imagePath\"></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "Sg2/":
/*!**********************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-text-test/puzzle-text-test.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .puzzle-answer .puzzle-fix .sound .sound-bg .img-volume, .puzzle-text .sound .sound-bg .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 35px;\n  position: relative;\n  top: 13px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 14 px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n.puzzle-text .block {\n  margin-bottom: 11px;\n  border: solid 2px #8AFA6F;\n  color: #000;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: #fff;\n  font-size: 14px;\n  height: 80px;\n  border-radius: 20px;\n  text-align: left;\n  width: 100%;\n}\n\n.puzzle-text .sound {\n  position: relative;\n  top: -10px;\n}\n\n.puzzle-text .sound .sound-bg {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  border-radius: 50px;\n  margin-right: 5px;\n}\n\n.puzzle-text ion-text {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  margin: auto;\n}\n\n@media (min-width: 768px) {\n  .puzzle-text ion-img {\n    width: 70%;\n    height: auto;\n    margin: auto;\n  }\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 15px;\n  border: 2px solid #3f51b5;\n  height: 50px;\n  margin: 10px 0;\n  border-radius: 20px;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-second-app);\n}\n\n.puzzle-answer .puzzle-fix .sound {\n  margin-bottom: 12px;\n  text-align: center;\n  padding: 0 15px;\n  max-width: 100%;\n}\n\n.puzzle-answer .puzzle-fix .sound img {\n  width: 30px;\n  height: auto;\n}\n\n.puzzle-answer .puzzle-fix .sound .sound-bg {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  border-radius: 50px;\n  margin-right: 10px;\n  text-align: center;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n/************* DRAG AND DROP *****************/\n\n.cdk-drag-preview {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-preview .sound {\n  max-width: 100%;\n  text-align: right;\n  margin-top: -20px;\n}\n\n.cdk-drag-preview .sound-bg {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\n\n.cdk-drag-preview .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 18px;\n  height: 18px;\n  position: relative;\n  top: 9px;\n}\n\n.cdk-drag-preview img {\n  width: 30px;\n  height: auto;\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n@media (min-width: 1200px) {\n  .cdk-drag-preview {\n    width: 30% !important;\n  }\n}\n\n.ion-text-center {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1enpsZS10ZXh0LXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUEsZUFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQSxtQkFBQTs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFTQTtFQUNFLFdBQUE7QUFORjs7QUFXRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVdFO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0FBVko7O0FBWUk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVk47O0FBa0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaEJKOztBQW9CRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBbEJKO0FBQ0Y7O0FBc0JBO0VBRUUsZ0JBQUE7QUFwQkY7O0FBc0JFO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFyQko7O0FBdUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFyQk47O0FBd0JJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBdEJOOztBQXdCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBdEJSOztBQXlCTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF2QlI7O0FBa0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFoQ0Y7O0FBb0NBLDhDQUFBOztBQWtDQTtFQUlFLGtCQUFBO0VBQ0EscUhBQUE7RUFHQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQXZFRjs7QUEwRUU7RUFJRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQTNFSjs7QUE4RUk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7QUE5RU47O0FBaUZNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUEvRVI7O0FBa0ZNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFoRlI7O0FBMkZBO0VBQ0UsMENBQUE7RUFDQSxrQ0FBQTtBQXhGRjs7QUE0RkE7RUFDRSxVQUFBO0FBekZGOztBQTRGQTtFQUNFLHNEQUFBO0FBekZGOztBQTRGQTtFQUNFLFlBQUE7QUF6RkY7O0FBNEZBO0VBQ0Usc0RBQUE7QUF6RkY7O0FBeUdBLDhDQUFBOztBQUVBO0VBQ0UsYUFBQTtBQXZHRjs7QUEwR0E7RUFDRSxjQUFBO0FBdkdGOztBQTJHQTtFQUNFO0lBQ0UscUJBQUE7RUF4R0Y7QUFDRjs7QUE2R0E7RUFDRSxlQUFBO0FBM0dGIiwiZmlsZSI6InB1enpsZS10ZXh0LXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZsdW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTNweDtcbn1cblxuLyogaGVhZGVyIFRvcCAqL1xuaW9uLWhlYWRlciBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4uaW1nLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNCBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLyogZW5kIGhlYWRlciB0b3AgKi9cblxuaW9uLXRvb2xiYXIge1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxufVxuXG4uZHJhZy1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHV6emxlLXRleHR7XG5cbiAgLmJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICM4QUZBNkY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc291bmQge1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwcHg7XG5cbiAgICAuc291bmQtYmcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbiAgICAgIC5pbWctdm9sdW1lIHtcbiAgICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1pbWcge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbiAgfVxufVxuXG4ucHV6emxlLWFuc3dlciB7XG5cbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAucHV6emxlLWZpeCB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIH1cblxuICAgIC5zb3VuZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgIH1cblxuICAgICAgLnNvdW5kLWJnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW1nLXZvbHVtZSB7XG4gICAgICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG4uaW1nLWxhbmdhdWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5cbi8qKioqKioqKioqKioqIERSQUcgQU5EIERST1AgKioqKioqKioqKioqKioqKiovXG5cbi8vIC5leGFtcGxlLWNvbnRhaW5lciB7XG4vLyAgIHdpZHRoOiA0MDBweDtcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgdmVydGljYWwtYWxpZ246IHRvcDtcbi8vIH1cblxuLy8gLmV4YW1wbGUtbGlzdCB7XG4vLyAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4vLyAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyAuZXhhbXBsZS1ib3gge1xuLy8gICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4vLyAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjY2NjO1xuLy8gICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBjdXJzb3I6IG1vdmU7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyB9XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcblxuXG4gIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcblxuXG4gIC5zb3VuZCB7XG5cbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgLy8gYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuXG4gICAgLnNvdW5kLWJnIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAgIC5pbWctdm9sdW1lIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgfVxuXG5cbn1cblxuLy8gLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4vLyB9XG5cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5ne1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY3LCAyNDcsIDEyOSwgMC42KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbn1cblxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuXG4vLyAuZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjY2NjO1xuLy8gICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbi8vICAgbWluLWhlaWdodDogNjBweDtcbi8vICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuLy8gfVxuXG4vLyAuY2RrLWRyYWcgIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0E3Rjc4MTtcbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbi8vIH1cblxuLyoqKioqKioqKioqKiogRFJBRyBBTkQgRFJPUCAqKioqKioqKioqKioqKioqKi9cblxuLmhpZGVCdXR0b25OZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3dCdXR0b25OZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY2RrLWRyYWctcHJldmlldyB7XG4gICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "V1Po":
/*!*************************************************!*\
  !*** ./src/app/shared/services/test.service.ts ***!
  \*************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api.constants */ "1Lwo");




let TestService = class TestService {
    constructor(http) {
        this.http = http;
        this.offset = 1;
    }
    /**
     * Get Test
     * courseId [ number ]
     * offset [ number ]
     *
     */
    getTestType(courseId, offset) {
        const params = `?courseId=${courseId}&offset=${offset}`;
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["getTextType"]}` + params);
    }
    /**
   * Get check user test
   * return isActive [ boolean ]
   * return testApi [  ]
   *
   */
    checkUserTest() {
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["getUserActiveTest"]}`);
    }
    /**
   * send answer question
   *
   */
    sendAnswerTesting(answerObj) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["sendAnswerTest"]}`, answerObj);
    }
    /**
   * send answer question
   *
   */
    finishedTest(userTestId) {
        const params = `?userTestId=${userTestId}`;
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["finishedTest"]}` + params, {});
    }
    /**
   * send answer question
   *
   */
    startTest(courseId) {
        const params = `?courseId=${courseId}`;
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["startTest"]}` + params, {});
    }
    /**
     * Get Certificate
     * courseId [ number ]
     *
   */
    getCertificate(courseId) {
        this.authKey = localStorage.getItem('access_token');
        const httpOptions = {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.authKey,
            })
        };
        const params = `?courseId=${courseId}`;
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["getCertificate"]}` + params, httpOptions);
    }
};
TestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], TestService);



/***/ }),

/***/ "X4r6":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/puzzle-image-test/puzzle-image-zoom/puzzle-image-zoom.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-img class=\"image-question\" loading=\"lazy\" [src]=\"imagePath\"></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "XFOQ":
/*!**********************************************************************!*\
  !*** ./src/app/training/test-course/multi-test/multi-test.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .sound-question .img-volume, .multi-choice .sound .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 28px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.multi-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  margin: 20px 0 50px 0;\n}\n\n.multi-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 10px 0;\n  max-width: 60%;\n}\n\n.multi-choice ion-radio {\n  --color: var(--ion-color-second-app);\n  margin: 20px 0;\n}\n\n.multi-choice .sound {\n  border: 2px dotted var(--ion-color-second-app);\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  min-width: 27%;\n  max-width: 80%;\n  padding: 7px 0;\n  margin: 0px 0 0 60px;\n}\n\n.multi-choice .sound img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.sound-question {\n  border: 2px solid var(--ion-color-second-app);\n  border-radius: 50px;\n  display: flex;\n  justify-content: space-around;\n  padding: 7px 0;\n  margin-left: 10px;\n  margin-top: 30px;\n}\n\n.sound-question img.danish-flag {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.sound-question img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\nion-radio-group {\n  position: relative;\n}\n\n.select-dots {\n  background-color: #062F87;\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n  position: absolute;\n  bottom: 26px;\n  right: 95%;\n  z-index: 2000000000;\n}\n\n.select-animate {\n  position: absolute;\n  z-index: 20000000000000000;\n  bottom: 60px;\n  right: 35%;\n  transform: rotate(45deg);\n  animation: selectAnimate 2s ease-in 4 forwards;\n}\n\n.select-animate img {\n  width: 150px;\n  height: 150px;\n}\n\n@keyframes selectAnimate {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL211bHRpLXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0UsZUFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRSxtQkFBQTs7QUFHRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFRSTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBTE47O0FBUUk7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTk47O0FBU0k7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFQTjs7QUFZRTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVZKOztBQVlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBVk47O0FBcUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbkJKOztBQXNCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBbkJKOztBQXNCRTtFQUNFLGFBQUE7QUFuQko7O0FBc0JFO0VBQ0UsY0FBQTtBQW5CSjs7QUFzQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuQko7O0FBd0JFO0VBQ0UsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUlBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBeEJKOztBQTBCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXhCTjs7QUEyQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF6Qk47O0FBa0NFO0VBQ0Usa0JBQUE7QUFoQ0o7O0FBc0NBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBbkNGOztBQTBDQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUlBLHdCQUFBO0VBSUEsOENBQUE7QUF2Q0Y7O0FBeUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUF2Q0o7O0FBMkNBO0VBQ0E7SUFDRSxVQUFBO0VBeENBO0VBMENGO0lBQ0UsVUFBQTtFQXhDQTtFQTBDRjtJQUNFLFVBQUE7RUF4Q0E7RUEwQ0Y7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUF4Q0E7QUFDRiIsImZpbGUiOiJtdWx0aS10ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuZXh0LWljb24tdmx1bWUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgLyogaGVhZGVyIFRvcCAqL1xuICBpb24taGVhZGVyIGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLyogZW5kIGhlYWRlciB0b3AgKi9cblxuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLm11bHRpLWNob2ljZSB7XG5cbiAgICBpb24tdGV4dHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBtYXJnaW46IDIwcHggMCA1MHB4IDA7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVse1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIG1heC13aWR0aDogNjAlO1xuICAgIH1cblxuICAgIGlvbi1yYWRpbyB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG5cblxuXG4gIC5zb3VuZCB7XG4gICAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWluLXdpZHRoOiAyNyU7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gICAgbWFyZ2luOiAwcHggMCAwIDYwcHg7XG5cbiAgICBpbWcubGFuZ2F1Z2UtaW1ne1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICB9XG5cblxuICAgIC5pbWctdm9sdW1lIHtcbiAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xuICAgIH1cbiAgfVxuXG4gIH1cblxuICAudG90YWwtcmVzdWx0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuXG4gIC5pbWctbGFuZ2F1Z2Uge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEzcHg7XG4gICAgdG9wOiAxNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICAuaGlkZUJ1dHRvbk5leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2hvd0J1dHRvbk5leHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnRvdGFsLXJlc3VsdCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cblxuXG5cbiAgLnNvdW5kLXF1ZXN0aW9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC8vIHdpZHRoOiAyMCU7XG4gICAgLy8gbWluLXdpZHRoOiAyNyU7XG4gICAgLy8gbWF4LXdpZHRoOiA4MCU7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIGltZy5kYW5pc2gtZmxhZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC13aWR0aDogNzAlO1xuICAgIH1cblxuICAgIGltZy5sYW5nYXVnZS1pbWd7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC13aWR0aDogNzAlO1xuICAgIH1cblxuXG4gICAgLmltZy12b2x1bWUge1xuICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgfVxuICB9XG5cbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG5cbiAgLy8gQW5pbWF0aW9uIEVsZW1lbnRcblxuLnNlbGVjdC1kb3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MkY4NztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI2cHg7XG4gIHJpZ2h0OiA5NSU7XG4gIHotaW5kZXg6IDIwMDAwMDAwMDA7XG4gIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDNzIGVhc2UtaW4gMyBmb3J3YXJkcztcbiAgLy8gLW8tYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDNzIGVhc2UtaW4gMyBmb3J3YXJkcztcbiAgLy8gLW1vei1hbmltYXRpb246IHNlbGVjdEFuaW1hdGUgM3MgZWFzZS1pbiAzIGZvcndhcmRzO1xuICAvLyBhbmltYXRpb246IHNlbGVjdEFuaW1hdGUgM3MgZWFzZS1pbiAzIGZvcndhcmRzO1xufVxuXG4uc2VsZWN0LWFuaW1hdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwMDAwMDAwMDAwMDAwMDAwO1xuICBib3R0b206IDYwcHg7XG4gIHJpZ2h0OiAzNSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDJzIGVhc2UtaW4gNCBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDJzIGVhc2UtaW4gNCBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IHNlbGVjdEFuaW1hdGUgMnMgZWFzZS1pbiA0IGZvcndhcmRzO1xuICBhbmltYXRpb246IHNlbGVjdEFuaW1hdGUgMnMgZWFzZS1pbiA0IGZvcndhcmRzO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzZWxlY3RBbmltYXRlIHtcbjAlIHtcbiAgb3BhY2l0eTogMDtcbn1cbjI1JSB7XG4gIG9wYWNpdHk6IDE7XG59XG41MCUge1xuICBvcGFjaXR5OiAwO1xufVxuMTAwJSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbn1cblxuLy8gQW5pbWF0aW9uIEVsZW1lbnRcblxuIl19 */");

/***/ }),

/***/ "YqGo":
/*!**********************************************************************!*\
  !*** ./src/app/training/test-course/single-test/single-test.page.ts ***!
  \**********************************************************************/
/*! exports provided: SingleTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestPage", function() { return SingleTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_single_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./single-test.page.html */ "mPc4");
/* harmony import */ var _single_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-test.page.scss */ "83Ks");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");










let SingleTestPage = class SingleTestPage {
    constructor(toastController, testService, route, fb, navController, router, storageService) {
        this.toastController = toastController;
        this.testService = testService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
        this.storageService = storageService;
        this.isLoading = false;
        this.subs = [];
        this.questionData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
        this.singleFormErrors = { answer: '' };
        this.singleValidationMessages = {
            answer: {
                required: 'Please check answer',
            },
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        this.buildSingleForm();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.getTestType();
    }
    // ** get test type
    getTestType() {
        this.isLoading = true;
        this.singleForm.reset();
        this.testService.getTestType(this.courseId, this.pageNumber)
            .subscribe(response => {
            this.isLoading = false;
            this.questionType = response['questionType'];
            this.testId = response['testId'];
            this.lengthItems = response['length'];
            this.exerciseItems = [response['singleChoice']];
            if (this.questionType !== 1) {
                // parent
                const obj = {
                    pageNumber: this.pageNumber,
                    questionType: this.questionType
                };
                this.questionData.emit(obj);
            }
            this.allTestData = response;
            // Sound
            if (this.exerciseItems[0].singleChoiceTranslations[0].voicePath != null && this.exerciseItems[0].singleChoiceTranslations[0].voicePath != "") {
                this.exerciseItems[0].audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                this.exerciseItems[0].audioElement.status = false;
                var audio = new Audio(`${this.exerciseItems[0].singleChoiceTranslations[0].voicePath}`);
                this.exerciseItems[0].audioElement.audio = audio;
                this.exerciseItems[0].audioElement.audio.load();
            }
            if (this.exerciseItems[0].voiceDanishPath != null && this.exerciseItems[0].voiceDanishPath != "") {
                this.exerciseItems[0].audioElementDanish = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                this.exerciseItems[0].audioElementDanish.status = false;
                var audio = new Audio(`${this.exerciseItems[0].voiceDanishPath}`);
                this.exerciseItems[0].audioElementDanish.audio = audio;
                this.exerciseItems[0].audioElementDanish.audio.load();
            }
            // Sound
        });
    }
    // ** Validate Form Input
    validateSingleForm(isSubmitting = false) {
        for (const field of Object.keys(this.singleFormErrors)) {
            this.singleFormErrors[field] = '';
            const input = this.singleForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.singleFormErrors[field] = this.singleValidationMessages[field][error];
                }
            }
        }
    }
    // ** Build Single Choice Form
    buildSingleForm() {
        this.singleForm = this.fb.group({
            answer: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
        this.singleForm.valueChanges.subscribe((data) => this.validateSingleForm());
    }
    // ** Move to Next slide
    slideNext(answerId) {
        const singleChoiceData = {
            singleChoiceAnswerId: answerId,
            answer: this.singleForm.value.answer
        };
        if (this.questionType === 1) {
            this.testService.sendAnswerTesting({
                testId: this.testId,
                questionType: this.questionType,
                singleChoiceAnswer: singleChoiceData,
                multiChoiceAnswer: null,
                puzzleWithTextAnswers: null, puzzleWithImageAnswers: null
            })
                .subscribe(response => {
                console.log(response);
                this.userTestId = response['result'].userTestId;
                this.pageNumber += 1;
                // Stop Sound When next
                if (this.exerciseItems[0].audioElement) {
                    this.exerciseItems[0].audioElement.audio.pause();
                    this.exerciseItems[0].audioElement.audio = null;
                }
                if (this.exerciseItems[0].audioElementDanish) {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.audio = null;
                }
                // ** check last question
                if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
                    console.log('this is last number');
                    localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
                    localStorage.setItem('courseId', JSON.stringify(this.courseId));
                    localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
                    return;
                    // this.router.navigate(['/exercise/finished-test', {userTestId: this.userTestId}]);
                }
                this.getTestType();
                this.slides.slideNext();
            });
        }
    }
    slidePrev() {
        this.pageNumber -= 1;
        this.getTestType();
        this.slides.slidePrev();
    }
    finishSlidePrev() {
        this.pageNumber -= 1;
    }
    ScapeSlidePrev() {
        this.pageNumber += 1;
        if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
            console.log('this is last number');
            localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
            localStorage.setItem('courseId', JSON.stringify(this.courseId));
            localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
            return;
        }
        this.getTestType();
        this.slides.slideNext();
    }
    finishedTest() {
        this.testService.finishedTest(this.userTestId)
            .subscribe(response => {
            localStorage.removeItem('courseId');
            localStorage.removeItem('pageNumber');
            this.router.navigate(['/courses/tabs/my-courses']);
        });
    }
    // Play Sound
    playAudio(type, item) {
        var _a, _b;
        if (type == "native") {
            if (((_a = item.audioElementDanish) === null || _a === void 0 ? void 0 : _a.status) == true) {
                item.audioElementDanish.audio.pause();
                item.audioElementDanish.status = false;
            }
            if (item.audioElement.status == false) {
                item.audioElement.audio.play();
                item.audioElement.status = true;
            }
            else {
                item.audioElement.audio.pause();
                item.audioElement.status = false;
            }
        }
        else {
            if (item.audioElementDanish.status == false) {
                if (((_b = item.audioElement) === null || _b === void 0 ? void 0 : _b.status) == true) {
                    item.audioElement.audio.pause();
                    item.audioElement.status = false;
                }
                item.audioElementDanish.audio.play();
                item.audioElementDanish.status = true;
            }
            else {
                item.audioElementDanish.audio.pause();
                item.audioElementDanish.status = false;
            }
        }
    }
    ngOnDestroy() {
        this.subs.forEach(e => {
            e.unsubscribe();
        });
    }
};
SingleTestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] }
];
SingleTestPage.propDecorators = {
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['pageNumber',] }],
    questionData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }]
};
SingleTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-test',
        template: _raw_loader_single_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleTestPage);



/***/ }),

/***/ "gGow":
/*!********************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-text-test/puzzle-text-test.page.ts ***!
  \********************************************************************************/
/*! exports provided: PuzzleTextTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleTextTestPage", function() { return PuzzleTextTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_text_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-text-test.page.html */ "x7Rl");
/* harmony import */ var _puzzle_text_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-text-test.page.scss */ "Sg2/");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_models_puzzleTextTranslations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/puzzleTextTranslations */ "HprL");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");










let PuzzleTextTestPage = class PuzzleTextTestPage {
    constructor(testService, route, router, storageService) {
        this.testService = testService;
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.questionsArray = [];
        this.answersArray = [];
        this.nextButton = false;
        this.lengthQuestion = 0;
        this.isLoading = false;
        this.questionData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
        this.subs = [];
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.getQuestionAndAnswer();
    }
    // ** get question and answer puzzle text
    getQuestionAndAnswer() {
        this.isLoading = true;
        this.questionsArray = [];
        this.answersArray = [];
        this.subs.push(this.testService
            .getTestType(this.courseId, this.pageNumber)
            .subscribe(response => {
            this.isLoading = false;
            console.log('puzzle with text', response);
            this.questionType = response['questionType'];
            this.testId = response['testId'];
            this.lengthItems = response['length'];
            if (this.questionType !== 3) {
                // parent
                const obj = {
                    pageNumber: this.pageNumber,
                    questionType: this.questionType
                };
                this.questionData.emit(obj);
            }
            this.questionAndAnswerItems = response['puzzleText'];
            //Questions
            for (let index = 0; index < this.questionAndAnswerItems.puzzleText.length; index++) {
                let arr = [];
                let qpz = new src_app_shared_models_puzzleTextTranslations__WEBPACK_IMPORTED_MODULE_7__["PuzzleTextTranslations"]();
                qpz.id = this.questionAndAnswerItems.puzzleText[index].id;
                qpz.text = this.questionAndAnswerItems.puzzleText[index].text;
                qpz.type = "question";
                qpz.flag = "../../../assets/icon/da.png";
                qpz.disabled = true;
                // Sound
                qpz.voicePath = this.questionAndAnswerItems.puzzleText[index].voicePath;
                if (this.questionAndAnswerItems.puzzleText[index].voicePath != null && this.questionAndAnswerItems.puzzleText[index].voicePath != "") {
                    qpz.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_6__["AudioElement"]();
                    qpz.audioElement.status = false;
                    var audio = new Audio(`${qpz.voicePath}`);
                    qpz.audioElement.audio = audio;
                    qpz.audioElement.audio.load();
                }
                arr.push(qpz);
                this.questionsArray.push(arr);
            }
            //Answers
            for (let index = 0; index < this.questionAndAnswerItems.puzzleTextTranslations.length; index++) {
                let arr = [];
                let apz = new src_app_shared_models_puzzleTextTranslations__WEBPACK_IMPORTED_MODULE_7__["PuzzleTextTranslations"]();
                apz.id = this.questionAndAnswerItems.puzzleTextTranslations[index].id;
                apz.text = this.questionAndAnswerItems.puzzleTextTranslations[index].text;
                apz.type = "answer";
                apz.flag = this.userInfo.languageIcon;
                apz.disabled = false;
                // Sound
                apz.voicePath = this.questionAndAnswerItems.puzzleTextTranslations[index].voicePath;
                if (this.questionAndAnswerItems.puzzleTextTranslations[index].voicePath != null && this.questionAndAnswerItems.puzzleTextTranslations[index].voicePath != "") {
                    apz.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_6__["AudioElement"]();
                    apz.audioElement.status = false;
                    var audio = new Audio(`${apz.voicePath}`);
                    apz.audioElement.audio = audio;
                    apz.audioElement.audio.load();
                }
                this.answersArray.push(apz);
            }
        }));
    }
    // ** Drop Function
    drop(event) {
        if (event.previousContainer === event.container) { }
        else {
            var prevData = event.previousContainer.data;
            var data = event.container.data;
            var prevIndex = event.previousIndex;
            var currIndex = event.currentIndex;
            if (event.container.data.length == 1) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(prevData, data, prevIndex, 1);
            }
            else {
                if (data[0].type == "question" && prevData[0].type == "question") {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(prevData, data, 1, 2);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(data, prevData, 1, 1);
                }
            }
            if (this.answersArray.length === 0) {
                this.nextButton = true;
            }
            else {
                this.nextButton = false;
            }
        }
    }
    // ** Move to Next slide
    slideNext() {
        // ** get check
        let arrayPuzzle = [];
        this.questionsArray.forEach(values => {
            arrayPuzzle.push({
                puzzleWithTextId: values[0].id,
                keyword: values[0].text,
                translationKeyword: values[1].text
            });
        });
        this.testService.sendAnswerTesting({
            testId: this.testId,
            questionType: this.questionType,
            singleChoiceAnswer: null,
            multiChoiceAnswer: null,
            puzzleWithTextAnswers: arrayPuzzle,
            puzzleWithImageAnswers: null
        })
            .subscribe(response => {
            this.userTestId = response['result'].userTestId;
            this.pageNumber += 1;
            // Stop sound
            this.stopAllAudios();
            // ** check last question
            if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
                console.log('this is last number');
                localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
                localStorage.setItem('courseId', JSON.stringify(this.courseId));
                localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
                // this.navController.navigateForward('test-course/finished-test');
                // this.router.navigate(['/exercise/finished-test',
                // {userTestId: this.userTestId, courseId: this.courseId, offset: this.pageNumber}]);
                return;
            }
            this.getQuestionAndAnswer();
            this.slides.slideNext();
        });
    }
    slidePrev() {
        this.pageNumber -= 1;
        this.getQuestionAndAnswer();
        this.slides.slidePrev();
    }
    finishSlidePrev() {
        this.pageNumber -= 1;
        // this.getQuestionAndAnswer();
        // this.slides.slidePrev();
    }
    ScapeSlidePrev() {
        this.pageNumber += 1;
        if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
            console.log('this is last number');
            localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
            localStorage.setItem('courseId', JSON.stringify(this.courseId));
            localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
            return;
        }
        this.getQuestionAndAnswer();
        this.slides.slideNext();
    }
    finishedTest() {
        this.testService.finishedTest(this.userTestId)
            .subscribe(response => {
            localStorage.removeItem('courseId');
            localStorage.removeItem('pageNumber');
            this.router.navigate(['/courses/tabs/my-courses']);
            console.log(response);
        });
    }
    // Sound 
    playAudio(item) {
        this.stopAllAudios(item);
        if (item.audioElement.status == false) {
            item.audioElement.audio.play();
            item.audioElement.status = true;
        }
        else {
            item.audioElement.audio.pause();
            item.audioElement.status = false;
        }
    }
    stopAllAudios(item) {
        this.questionsArray.forEach(element => {
            element.forEach(element2 => {
                if (element2.audioElement && element2.audioElement.status == true && element2 != item) {
                    element2.audioElement.audio.pause();
                    element2.audioElement.status = false;
                }
            });
        });
        this.answersArray.forEach(element => {
            if (element.audioElement && element.audioElement.status == true && element != item) {
                element.audioElement.audio.pause();
                element.audioElement.status = false;
            }
        });
    }
    ngOnDestroy() {
        this.subs.forEach(e => {
            e.unsubscribe();
        });
    }
};
PuzzleTextTestPage.ctorParameters = () => [
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] }
];
PuzzleTextTestPage.propDecorators = {
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['pageNumber',] }],
    questionData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides',] }]
};
PuzzleTextTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-puzzle-text-test',
        template: _raw_loader_puzzle_text_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_text_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleTextTestPage);



/***/ }),

/***/ "k+R1":
/*!***********************************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-image-zoom/puzzle-image-zoom.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXp6bGUtaW1hZ2Utem9vbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "mPc4":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/single-test/single-test.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n  <!-- Single final Test -->\n  <form [formGroup]=\"singleForm\" >\n  <ion-slides *ngIf=\"lengthItems != pageNumber\" [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let singleItem of exerciseItems\">\n\n\n    <ion-grid>\n\n      <ion-list class=\"single-choice\">\n        <!-- Sound  -->\n        <ion-grid class=\"sound-group\">\n          <ion-row>\n          <ion-col size=\"4\">\n              <div *ngIf=\"singleItem.voiceDanishPath\">\n                <div class=\"sound-question\">\n                    <div class=\"img-volume\">\n                      <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!singleItem.audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio('',singleItem)\">\n                      </ion-icon>\n                    </div>\n                  <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                </div>\n              </div>\n          </ion-col>\n        <ion-col size=\"4\" >\n          <div *ngIf=\"singleItem.singleChoiceTranslations[0]?.voicePath\">\n            <div class=\"sound-question\">\n                <div class=\"img-volume\">\n                  <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!singleItem.audioElement.status? 'play' : 'stop'\" (click)=\"playAudio('native',singleItem)\">\n                  </ion-icon>\n                </div>\n              <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n            </div>\n          </div>\n        </ion-col>\n        </ion-row>\n        </ion-grid>\n        <!-- Sound  -->\n        <ion-radio-group formControlName=\"answer\">\n\n          <ion-list-header>\n            <ion-text *ngIf=\"allTestData\"> {{ allTestData['singleChoice'].question }} </ion-text>\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>JA</ion-label>\n            <ion-radio [value]=\"true\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>NEJ</ion-label>\n            <ion-radio [value]=\"false\"></ion-radio>\n          </ion-item>\n\n          <ion-text color=\"danger\" *ngIf=\"singleFormErrors.answer\">{{singleFormErrors.answer}}</ion-text>\n        </ion-radio-group>\n\n      </ion-list>\n    </ion-grid>\n\n\n  </ion-slide>\n</ion-slides>\n</form>\n\n<!-- <ion-grid>\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"6\">\n      <ion-button\n      [disabled]=\"singleForm.invalid\"\n      (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button\n        [disabled]=\"singleForm.invalid\"\n        (click)=\"slideNext(allTestData['singleChoice']['singleChoiceTranslations'][0].singleChoiceId)\"\n        >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n\n<!-- <app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished> -->\n\n\n<ion-grid *ngIf=\"lengthItems !== pageNumber\">\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"4\">\n      <ion-button\n      (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <!-- <ion-col size=\"4\">\n      <ion-button\n        (click)=\"ScapeSlidePrev()\"\n        >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col> -->\n\n    <ion-col size=\"4\">\n      <ion-button\n        [disabled]=\"singleForm.invalid\"\n        (click)=\"slideNext(allTestData['singleChoice']['singleChoiceTranslations'][0].singleChoiceId)\"\n        >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n\n\n  </ion-row>\n</ion-grid>\n\n<ion-grid *ngIf=\"lengthItems === pageNumber\">\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"6\">\n      <ion-button\n      (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button\n        (click)=\"finishedTest()\"\n        >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n<!-- Single inal test -->\n\n</ion-content>");

/***/ }),

/***/ "ooHR":
/*!************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-image-test.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .puzzle-answer .puzzle-fix .sound .sound-bg .img-volume {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n}\n\nion-grid {\n  padding: 0;\n}\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\nion-img.image-question {\n  width: 60px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 5px 10px;\n  margin: 10px 0;\n  border: 2px solid #003182a6;\n  height: 50px;\n  border-radius: 10px;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  color: var(--ion-color-second-app);\n}\n\n.puzzle-answer .puzzle-fix .sound {\n  display: flex;\n}\n\n.puzzle-answer .puzzle-fix .sound .sound-bg {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.drag-answer .puzzle-img ion-img {\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.drag-answer .puzzle-answer {\n  margin-top: 0;\n  padding: 5px 0 !important;\n}\n\n.drag-answer .title {\n  margin-top: 0 !important;\n}\n\n.drag-answer .sound {\n  display: flex;\n}\n\n.drag-answer .sound .sound-bg img {\n  width: 50px !important;\n  height: auto;\n}\n\n.drag-answer .sound .img-volume ion-img {\n  width: 20px;\n  height: auto;\n}\n\n/************* DRAG AND DROP *****************/\n\n.example-box {\n  border: 2px solid #8afa6f !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: move;\n  background: white;\n  font-size: 16px;\n  border-radius: 0;\n  margin: 5px 0;\n  height: 70px;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.example-box .sound {\n  padding: 0 5px 0 10px;\n}\n\n.example-box .title {\n  margin-right: 5px;\n}\n\n.example-box img.danish-flag {\n  width: 24px;\n  height: auto;\n}\n\n.example-box .drag-answer ion-img {\n  width: 50px;\n  height: auto;\n  position: relative;\n  top: -2px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-preview .sound-bg {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n\n.cdk-drag-preview .img-volume {\n  width: 28px;\n  height: 28px;\n  position: relative;\n  top: 15px;\n}\n\n.cdk-drag-preview .puzzle-fix .title {\n  font-weight: 600 !important;\n  padding: 0 5px !important;\n  width: 30% !important;\n}\n\n.cdk-drag-preview .puzzle-fix img.danish-flag {\n  width: 24px;\n  height: 24px;\n  max-width: 50%;\n}\n\n.cdk-drop-list-receiving {\n  height: auto;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  height: 150px;\n  width: 100%;\n  border: 3px dotted var(--ion-color-second-app);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 120ms cubic-bezier(0, 0, 0.2, 3);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n@media (min-width: 767px) {\n  .cdk-drag-preview {\n    width: 30% !important;\n  }\n}\n\n@media (max-width: 370px) {\n  ion-img.image-question {\n    width: 70px;\n    height: auto;\n  }\n\n  .title {\n    font-size: 16px !important;\n  }\n\n  .ion-text-center {\n    font-size: 14px;\n  }\n\n  .cdk-drag-preview {\n    box-sizing: border-box;\n    width: 80% !important;\n  }\n  .cdk-drag-preview .sound-bg {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n  }\n  .cdk-drag-preview .img-volume {\n    width: 20px;\n    height: 20px;\n    padding: 10px 0;\n  }\n  .cdk-drag-preview .puzzle-fix .title {\n    font-weight: 600 !important;\n    padding: 0 5px !important;\n    width: 30% !important;\n    font-size: 16px;\n  }\n  .cdk-drag-preview .puzzle-fix img.danish-flag {\n    width: 24px;\n    height: 24px;\n    max-width: 50%;\n  }\n\n  .example-box {\n    margin: 10px 0;\n  }\n  .example-box .puzzle-answer .puzzle-fix {\n    padding: 5px 0px !important;\n  }\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    display: flex;\n    border: 2px dotted var(--ion-color-second-app);\n    border-radius: 10px;\n    padding: 5px 0px;\n    margin: 0;\n  }\n  .example-box .title {\n    width: 35% !important;\n  }\n\n  .cdk-drop-list-receiving {\n    height: auto;\n    color: var(--ion-color-second-app);\n  }\n\n  .cdk-drop-list-dragging {\n    background-color: rgba(167, 247, 129, 0.6);\n    height: 150px;\n    width: 100%;\n    border: 3px dotted var(--ion-color-second-app);\n    color: var(--ion-color-second-app);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 2000px) {\n  .example-box {\n    height: 90px;\n  }\n}\n\n@media (max-width: 449px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 225px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 66%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 11px !important;\n  }\n}\n\n@media (min-width: 420px) and (max-width: 450px) {\n  .example-box .puzzle-fix {\n    width: 330px;\n  }\n}\n\n@media (min-width: 450px) and (max-width: 600px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 400px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 12px !important;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n  .example-box .puzzle-fix {\n    width: 260px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1enpsZS1pbWFnZS10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFGSjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUU7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFITjs7QUFRSTtFQUNFLGFBQUE7QUFOTjs7QUFRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFqQkY7O0FBd0JFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUF0Qko7O0FBeUJFO0VBQ0Usd0JBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsYUFBQTtBQXhCSjs7QUE0Qk07RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUExQlI7O0FBOEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE1Qk47O0FBb0NBLDhDQUFBOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFsQ0Y7O0FBb0NFO0VBQ0UscUJBQUE7QUFsQ0o7O0FBcUNFO0VBQVEsaUJBQUE7QUFsQ1Y7O0FBb0NFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFsQ0o7O0FBcUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFuQ0Y7O0FBdUNBO0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0VBR0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUF2Q0Y7O0FBMkNFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXpDSjs7QUE2Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQTNDSjs7QUErQ0k7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUE3Q047O0FBZ0RJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBOUNOOztBQXFEQTtFQUVFLFlBQUE7RUFDQSxrQ0FBQTtBQW5ERjs7QUFzREE7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtBQW5ERjs7QUF1REE7RUFDRSxVQUFBO0FBcERGOztBQXVEQTtFQUNFLHNEQUFBO0FBcERGOztBQXVEQTtFQUNFLFlBQUE7QUFwREY7O0FBdURBO0VBQ0Usc0RBQUE7QUFwREY7O0FBeURBLDhDQUFBOztBQUdBO0VBQ0EsMkJBQUE7QUF4REE7O0FBMkRBO0VBQ0UsV0FBQTtBQXhERjs7QUE0REE7RUFDRTtJQUNFLHFCQUFBO0VBekRGO0FBQ0Y7O0FBK0RBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTdERjs7RUFnRUE7SUFDRSwwQkFBQTtFQTdERjs7RUFpRUY7SUFDRSxlQUFBO0VBOURBOztFQWtFQTtJQUVFLHNCQUFBO0lBQ0EscUJBQUE7RUFoRUY7RUFrRUU7SUFDRSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQWhFSjtFQW1FRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQWpFSjtFQXVFSTtJQUNFLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7RUFyRU47RUF3RUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUF0RU47O0VBNkVBO0lBQ0UsY0FBQTtFQTFFRjtFQTRFRTtJQUNFLDJCQUFBO0VBMUVKO0VBNkVFO0lBQ0UsYUFBQTtJQUNBLDhDQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUEzRUo7RUE4RUU7SUFFRSxxQkFBQTtFQTdFSjs7RUFpRkE7SUFFRSxZQUFBO0lBQ0Esa0NBQUE7RUEvRUY7O0VBa0ZBO0lBQ0UsMENBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLDhDQUFBO0lBQ0Esa0NBQUE7RUEvRUY7QUFDRjs7QUFzRkE7RUFDRTtJQUNFLFlBQUE7RUFwRkY7QUFDRjs7QUErRkE7RUFDRTtJQUNFLHVCQUFBO0VBN0ZGOztFQWdHQTtJQUNFLHNCQUFBO0VBN0ZGOztFQWdHRjtJQUEwQixZQUFBO0VBNUZ4Qjs7RUE2RkY7SUFBZ0QsVUFBQTtJQUFZLFVBQUE7SUFBWSxTQUFBO0VBdkZ0RTs7RUF3RkY7SUFBZ0QsMEJBQUE7RUFwRjlDOztFQXFGRjtJQUNFLDBCQUFBO0VBbEZBO0FBQ0Y7O0FBc0ZBO0VBRUE7SUFBMEIsWUFBQTtFQXBGeEI7QUFDRjs7QUF3RkE7RUFDRTtJQUNFLHVCQUFBO0VBdEZGOztFQXlGQTtJQUNFLHNCQUFBO0VBdEZGOztFQXlGRjtJQUEwQixZQUFBO0VBckZ4Qjs7RUFzRkY7SUFBZ0QsVUFBQTtJQUFZLFVBQUE7SUFBWSxTQUFBO0VBaEZ0RTs7RUFpRkY7SUFBZ0QsMEJBQUE7RUE3RTlDOztFQThFRjtJQUNFLDBCQUFBO0VBM0VBO0FBQ0Y7O0FBK0VBO0VBRUU7SUFBMEIsWUFBQTtFQTdFMUI7O0VBOEVBO0lBQWdELFVBQUE7RUExRWhEO0FBQ0YiLCJmaWxlIjoicHV6emxlLWltYWdlLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZsdW1lIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLXRvb2xiYXIge1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxufVxuXG4gIGlvbi1pbWcuaW1hZ2UtcXVlc3Rpb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4ucHV6emxlLWFuc3dlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgLnB1enpsZS1maXgge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDMxODJhNjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG5cbiAgICAgIC8vIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgfVxuXG4gICAgLnNvdW5kIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5zb3VuZC1iZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIC5pbWctdm9sdW1lIHtcbiAgICAgICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxuXG4uaW1nLWxhbmdhdWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5cbi5kcmFnLWFuc3dlciB7XG5cblxuICAucHV6emxlLWltZyBpb24taW1ne1xuICAgIHdpZHRoOiAyMHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwcHghaW1wb3J0YW50O1xuICB9XG5cbiAgLnB1enpsZS1hbnN3ZXJ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc291bmR7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5zb3VuZC1iZyB7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbWctdm9sdW1lIGlvbi1pbWcge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgfVxuXG5cbn1cblxuXG4vKioqKioqKioqKioqKiBEUkFHIEFORCBEUk9QICoqKioqKioqKioqKioqKioqL1xuXG4uZXhhbXBsZS1ib3gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOGFmYTZmIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDVweCAwO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5zb3VuZCB7XG4gICAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xuICB9XG5cbiAgLnRpdGxlIHttYXJnaW4tcmlnaHQ6IDVweDt9XG5cbiAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5kcmFnLWFuc3dlciBpb24taW1ne1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcblxuXG5cbiAgLnNvdW5kLWJnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vIG1hcmdpbjogMTBweCAyMHB4O1xuICB9XG5cbiAgLmltZy12b2x1bWUge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNXB4O1xuICB9XG5cbiAgLnB1enpsZS1maXgge1xuICAgIC50aXRsZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMCA1cHghaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgfVxuXG4gIH1cblxufVxuXG4uY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmcge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY3LCAyNDcsIDEyOSwgMC42KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xufVxuXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xufVxuXG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMyk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cblxuLyoqKioqKioqKioqKiogRFJBRyBBTkQgRFJPUCAqKioqKioqKioqKioqKioqKi9cblxuXG4ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1kIHtcbnBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xufVxuXG4uZHJhZy1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAuY2RrLWRyYWctcHJldmlldyB7XG4gICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgfVxuXG59XG5cblxuXG5AbWVkaWEobWF4LXdpZHRoOiAzNzBweCkge1xuICBpb24taW1nLmltYWdlLXF1ZXN0aW9ue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcbiAgfVxuXG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuICAuY2RrLWRyYWctcHJldmlldyB7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuXG4gICAgLnNvdW5kLWJnIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5pbWctdm9sdW1lIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cblxuICAgIC5wdXp6bGUtZml4IHtcblxuXG4gICAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwIDVweCFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAzMCUhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIGltZy5kYW5pc2gtZmxhZyB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICAuZXhhbXBsZS1ib3gge1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXgge1xuICAgICAgcGFkZGluZzogNXB4IDBweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICBtYXJnaW46IDA7XG59XG5cbiAgICAudGl0bGUge1xuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMzUlIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmcge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB9XG5cbiAgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIH1cblxuXG5cblxufVxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xuICAuZXhhbXBsZS1ib3gge1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxufVxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbi8vICAgLnNjcm9sbGFibGUge1xuLy8gICAgIGhlaWdodDogMjMwcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIH1cbi8vIH1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA0NDlweCkge1xuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICB9XG5cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IC50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1maXgge3dpZHRoOiAyMjVweDt9XG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHt3aWR0aDogNjYlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7fVxuLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC50aXRsZSB7Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7fVxuLnRpdGxle1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA0MjBweCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbi5leGFtcGxlLWJveCAucHV6emxlLWZpeCB7d2lkdGg6IDMzMHB4O31cbn1cblxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7XG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgfVxuXG4gIC5leGFtcGxlLWJveCAucHV6emxlLWZpeCAudGl0bGUge1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogNDAwcHg7fVxuLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7d2lkdGg6IDQ1JTsgcGFkZGluZzogMDsgbWFyZ2luOiAwO31cbi5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAudGl0bGUge2ZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O31cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gIC5leGFtcGxlLWJveCAucHV6emxlLWZpeCB7d2lkdGg6IDI2MHB4O31cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7d2lkdGg6IDIwJTt9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "vqQO":
/*!*********************************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-sound-test/puzzle-sound-test.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PuzzleSoundTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSoundTestComponent", function() { return PuzzleSoundTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_sound_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-sound-test.component.html */ "OtTT");
/* harmony import */ var _puzzle_sound_test_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-sound-test.component.scss */ "K2rq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");







let PuzzleSoundTestComponent = class PuzzleSoundTestComponent {
    constructor(modalController, navParams, authService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        //howler
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.voicePath = this.navParams.data.voicePath;
        this.voicePathDanish = this.navParams.data.voicePathDanish;
        this.imagePath = this.navParams.data.imagePath;
    }
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_5__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
            },
            onend: () => { },
        });
        this.player.play();
    }
    ngOnDestroy() {
        if (this.player) {
            this.player.stop();
        }
    }
};
PuzzleSoundTestComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
PuzzleSoundTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-puzzle-sound',
        template: _raw_loader_puzzle_sound_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_sound_test_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleSoundTestComponent);



/***/ }),

/***/ "vyh8":
/*!********************************************************************!*\
  !*** ./src/app/training/test-course/multi-test/multi-test.page.ts ***!
  \********************************************************************/
/*! exports provided: MultiTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiTestPage", function() { return MultiTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_multi_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./multi-test.page.html */ "yjRV");
/* harmony import */ var _multi_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-test.page.scss */ "XFOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");










let MultiTestPage = class MultiTestPage {
    constructor(testService, toastController, route, fb, navController, router, navCtrl, storageService) {
        this.testService = testService;
        this.toastController = toastController;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.isLoading = false;
        this.sub = [];
        this.questionData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        this.buildMultiForm();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.courseName = localStorage.getItem('courseName');
        this.getTestType();
    }
    // ** get test type
    getTestType() {
        this.isLoading = true;
        this.multiForm.reset();
        this.testService.getTestType(this.courseId, this.pageNumber)
            .subscribe(response => {
            console.log(response);
            this.isLoading = false;
            this.questionType = response['questionType'];
            this.testId = response['testId'];
            this.lengthItems = response['length'];
            if (this.questionType !== 2) {
                // parent
                const obj = {
                    pageNumber: this.pageNumber,
                    questionType: this.questionType
                };
                this.questionData.emit(obj);
            }
            this.allTestData = response;
            // ** Sound
            this.exerciseItems = [response['multiChoice']];
            this.exerciseItems.map((answerItems) => {
                this.resultAnswerItems = answerItems['multiChoiceAnswers'];
            });
            if (this.exerciseItems[0].multiChoiceTranslations[0].voicePath !=
                null &&
                this.exerciseItems[0].multiChoiceTranslations[0].voicePath != '') {
                this.exerciseItems[0].audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                this.exerciseItems[0].audioElement.status = false;
                var audio = new Audio(`${this.exerciseItems[0].multiChoiceTranslations[0].voicePath}`);
                this.exerciseItems[0].audioElement.audio = audio;
                this.exerciseItems[0].audioElement.audio.load();
            }
            this.resultAnswerItems.forEach((element) => {
                element.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                element.audioElement.status = false;
                if (element.multiChoiceAnswerTranslations[0].voicePath != null &&
                    element.multiChoiceAnswerTranslations[0].voicePath != '') {
                    element.audioElement.id = element.id;
                    element.audioElement.audio = new Audio(`${element.multiChoiceAnswerTranslations[0].voicePath}`);
                    element.audioElement.audio.load();
                }
                else {
                    element.audioElement.audio = null;
                }
                if (this.exerciseItems[0].voiceDanishPath != null && this.exerciseItems[0].voiceDanishPath != "") {
                    this.exerciseItems[0].audioElementDanish = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                    this.exerciseItems[0].audioElementDanish.status = false;
                    var audio = new Audio(`${this.exerciseItems[0].voiceDanishPath}`);
                    this.exerciseItems[0].audioElementDanish.audio = audio;
                    this.exerciseItems[0].audioElementDanish.audio.load();
                }
            });
        });
    }
    // ** Build Single Choice Form
    buildMultiForm() {
        this.multiForm = this.fb.group({
            answer: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
    }
    // ** Move to Next slide
    slideNext(quetionId) {
        const multiChoiceData = {
            multiChoiceQuestionId: quetionId,
            multiChoiceAnswerId: this.multiForm.value.answer
        };
        this.testService.sendAnswerTesting({
            testId: this.testId,
            questionType: 2,
            singleChoiceAnswer: null,
            multiChoiceAnswer: multiChoiceData,
            puzzleWithTextAnswers: null,
            puzzleWithImageAnswers: null
        })
            .subscribe(response => {
            console.log(response);
            this.userTestId = response['result'].userTestId;
            this.pageNumber += 1;
            // ** Stop sound when next slide
            this.stopAllAudios();
            // ** check last question
            if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
                localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
                localStorage.setItem('courseId', JSON.stringify(this.courseId));
                localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
                return;
            }
            this.getTestType();
            this.slides.slideNext();
        });
    }
    slidePrev() {
        this.pageNumber -= 1;
        this.getTestType();
        this.slides.slidePrev();
    }
    ScapeSlidePrev() {
        this.pageNumber += 1;
        if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
            console.log('this is last number');
            localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
            localStorage.setItem('courseId', JSON.stringify(this.courseId));
            localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
            return;
        }
        this.getTestType();
        this.slides.slideNext();
    }
    finishSlidePrev() {
        this.pageNumber -= 1;
        // this.getTestType();
        // this.slides.slidePrev();
    }
    finishedTest() {
        this.testService.finishedTest(this.userTestId)
            .subscribe(response => {
            localStorage.removeItem('courseId');
            localStorage.removeItem('pageNumber');
            // this.router.navigate(['/courses/tabs/my-courses']);
            this.navCtrl.navigateForward('/courses/tabs/my-courses');
        });
    }
    // ** Sound
    playAudio(answer, type, langType) {
        var _a, _b;
        // playing question sound
        if (type == 1) {
            //stoping answer voices
            this.stopAnswerVoices();
            if (langType == "native") {
                if (((_a = this.exerciseItems[0].audioElementDanish) === null || _a === void 0 ? void 0 : _a.status) == true) {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.status = false;
                }
                if (this.exerciseItems[0].audioElement.status == false) {
                    this.exerciseItems[0].audioElement.audio.play();
                    this.exerciseItems[0].audioElement.status = true;
                }
                else {
                    this.exerciseItems[0].audioElement.audio.pause();
                    this.exerciseItems[0].audioElement.status = false;
                }
            }
            else {
                if (this.exerciseItems[0].audioElementDanish.status == false) {
                    if (((_b = this.exerciseItems[0].audioElement) === null || _b === void 0 ? void 0 : _b.status) == true) {
                        this.exerciseItems[0].audioElement.audio.pause();
                        this.exerciseItems[0].audioElement.status = false;
                    }
                    this.exerciseItems[0].audioElementDanish.audio.play();
                    this.exerciseItems[0].audioElementDanish.status = true;
                }
                else {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.status = false;
                }
            }
        }
        else {
            this.stopQuestionVoice();
            this.stopAnswerVoices(answer);
            var audioElement = answer.audioElement;
            if (audioElement) {
                if (audioElement.status == false) {
                    audioElement.audio.play();
                    answer.audioElement.status = true;
                }
                else {
                    audioElement.audio.pause();
                    answer.audioElement.status = false;
                }
            }
        }
    }
    stopAllAudios() {
        this.stopQuestionVoice();
        this.stopAnswerVoices();
    }
    stopAnswerVoices(answer) {
        if (answer) {
            this.resultAnswerItems
                .filter((c) => c.id != answer.id)
                .forEach((element) => {
                if (element.audioElement) {
                    if (element.audioElement.status == true) {
                        element.audioElement.audio.pause();
                        element.audioElement.status = false;
                    }
                }
            });
        }
        else {
            this.resultAnswerItems.forEach((element) => {
                if (element.audioElement) {
                    if (element.audioElement.status == true) {
                        element.audioElement.audio.pause();
                        element.audioElement.status = false;
                    }
                }
            });
        }
    }
    stopQuestionVoice() {
        //Stoping Voice of question
        if (this.exerciseItems[0].audioElement) {
            this.exerciseItems[0].audioElement.audio.pause();
            this.exerciseItems[0].audioElement.status = false;
        }
    }
    ngOnDestroy() {
        this.sub.forEach(e => {
            e.unsubscribe();
        });
    }
};
MultiTestPage.ctorParameters = () => [
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] }
];
MultiTestPage.propDecorators = {
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['pageNumber',] }],
    questionData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }]
};
MultiTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-multi-test',
        template: _raw_loader_multi_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multi_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MultiTestPage);



/***/ }),

/***/ "x7Rl":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/puzzle-text-test/puzzle-text-test.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Final Test With Puzzle With Text</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-slides  [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n\n      <div cdkDropListGroup class=\"drag-group\">\n        <ion-grid class=\"puzzle-text\">\n\n          <ion-row>\n\n            <ion-col size=\"12\"\n              class=\"block\"\n              cdkDropList\n              *ngFor=\"let item of questionsArray\"\n              [cdkDropListData]=\"item\"\n              cdkDropListSortingDisabled\n              cdkDropListOrientation=\"horizontal\"\n              (cdkDropListDropped)=\"drop($event)\">\n\n              <div *ngFor=\"let item2 of item\" [cdkDragDisabled]=\"item2.disabled\" cdkDrag>\n                <div class=\"sound\" *ngIf=\"item2.voicePath\">\n                  <div class=\"sound-bg\">\n                    <div class=\"img-volume\">\n                      <ion-icon\n                        class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!item2.audioElement.status? 'play' : 'stop'\" (click)=\"playAudio(item2)\" >\n                      </ion-icon>\n                    </div>\n                  </div>\n                  <img class=\"danish-flag\" [src]=\"item2.flag\" alt=\"\" />\n                </div>\n                <ion-text color=\"primary\"> {{ item2.text }} </ion-text>\n              </div>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n      <ion-grid class=\"puzzle-answer\">\n        <ion-row>\n            <ion-col color=\"primary\"\n            size=\"12\"\n            cdkDropList\n            [cdkDropListData]=\"answersArray\"\n            (cdkDropListDropped)=\"drop($event)\">\n\n            <div class=\"puzzle-fix\" *ngFor=\"let item of answersArray\" cdkDrag>\n              <div class=\"title\"> {{ item.text }} </div>\n              <div class=\"sound\" *ngIf=\"item.voicePath\">\n                <div class=\"sound-bg\">\n                    <div class=\"img-volume\">\n                      <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!item.audioElement.status? 'play' : 'stop'\" (click)=\"playAudio(item)\" >\n                      </ion-icon>\n                    </div>\n                  </div>\n                  <img [src]=\"item.flag\" alt=\"\" />\n                </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n      <!-- Button next and prev -->\n\n      </div>\n\n    </ion-slide>\n    </ion-slides>\n\n\n    <!-- <app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished> -->\n\n\n    <ion-grid *ngIf=\"lengthItems !== pageNumber\">\n      <ion-row class=\"ion-align-items-center slide-button\">\n\n        <ion-col size=\"4\">\n          <ion-button\n          *ngIf=\"nextButton\"\n          (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n        </ion-col>\n\n        <!-- <ion-col size=\"4\">\n          <ion-button\n            (click)=\"ScapeSlidePrev()\"\n            >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n        </ion-col> -->\n\n        <ion-col size=\"4\">\n          <ion-button\n          *ngIf=\"nextButton\"\n            (click)=\"slideNext()\"\n            >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"lengthItems === pageNumber\">\n      <ion-row class=\"ion-align-items-center slide-button\">\n\n        <ion-col size=\"6\">\n          <ion-button\n          *ngIf=\"nextButton\"\n          (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button\n          *ngIf=\"nextButton\"\n            (click)=\"finishedTest()\"\n            >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "xRh5":
/*!**********************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-image-test.page.ts ***!
  \**********************************************************************************/
/*! exports provided: PuzzleImageTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImageTestPage", function() { return PuzzleImageTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_image_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-image-test.page.html */ "EPzg");
/* harmony import */ var _puzzle_image_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-image-test.page.scss */ "ooHR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var src_app_shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/puzzleImageTranslation */ "yFRR");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _puzzle_sound_test_puzzle_sound_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./puzzle-sound-test/puzzle-sound-test.component */ "vqQO");












let PuzzleImageTestPage = class PuzzleImageTestPage {
    constructor(storageService, route, router, toastController, navController, testService, popoverController, navCtrl) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.testService = testService;
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.questionsArray = [];
        this.answersArray = [];
        this.nextButton = false;
        this.lengthItems = 0;
        //howler
        this.player = null;
        this.isPlaying = false;
        this.questionData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.subs = [];
        this.isLoading = false;
        this.limit = 1;
        this.currentIndex = 0;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
            loop: false,
            noSwipingClass: 'swiper-no-swiping',
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.getQuestionAndAnswer();
    }
    // ** get question and answer puzzle image
    getQuestionAndAnswer() {
        this.isLoading = true;
        this.questionsArray = [];
        this.answersArray = [];
        this.subs.push(this.testService
            .getTestType(this.courseId, this.pageNumber)
            .subscribe((response) => {
            this.isLoading = false;
            console.log('puzzle image response', response);
            this.questionType = response['questionType'];
            this.testId = response['testId'];
            this.lengthItems = response['length'];
            if (this.questionType !== 4) {
                // parent
                const obj = {
                    pageNumber: this.pageNumber,
                    questionType: this.questionType
                };
                this.questionData.emit(obj);
            }
            this.questionAndAnswerItems = response['puzzleImages'];
            //Questions
            for (let index = 0; index < this.questionAndAnswerItems.puzzleImages.length; index++) {
                let arr = [];
                let qpz = new src_app_shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_9__["PuzzleImageTranslations"]();
                qpz.id = this.questionAndAnswerItems.puzzleImages[index].id;
                qpz.imagePath =
                    this.questionAndAnswerItems.puzzleImages[index].imagePath;
                qpz.guidId =
                    this.questionAndAnswerItems.puzzleImages[index].imageGuidId;
                qpz.type = 'question';
                qpz.keyword = null;
                qpz.disabled = true;
                arr.push(qpz);
                this.questionsArray.push(arr);
            }
            //Answers
            for (let index = 0; index < this.questionAndAnswerItems.puzzleImagesTranslation.length; index++) {
                let arr = [];
                let apz = new src_app_shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_9__["PuzzleImageTranslations"]();
                apz.id =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].id;
                apz.keywordId =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].keywordId;
                apz.keyword =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].keyword;
                apz.guidId =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].imageGuidId;
                apz.type = 'answer';
                apz.disabled = false;
                // Sound
                apz.voicePath =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePath;
                apz.voicePathDanish =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePathDanish;
                // Sound
                this.answersArray.push(apz);
            }
        }));
    }
    // ** Drop Function
    drop(event) {
        var prevData = event.previousContainer.data;
        var data = event.container.data;
        var prevIndex = event.previousIndex;
        var currIndex = event.currentIndex;
        if (event.previousContainer === event.container) {
            console.log("same");
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(data, prevIndex, this.currentIndex);
        }
        else {
            if (event.container.data.length == 1) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(prevData, data, prevIndex, 1);
            }
            else {
                if (data[0].type == "question" && prevData[0].type == "question") {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(prevData, data, 1, 2);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(data, prevData, 1, 1);
                }
            }
        }
        if (this.answersArray.length === 0) {
            this.nextButton = true;
        }
        else {
            this.nextButton = false;
        }
    }
    // ** Move to Next slide
    slideNext() {
        // ** get check
        let arrayPuzzle = [];
        this.questionsArray.forEach((values) => {
            arrayPuzzle.push({
                puzzleWithImageQuestionId: values[0].id,
                imageGuid: values[0].guidId,
                wordId: values[1].keywordId,
            });
        });
        this.testService.sendAnswerTesting({
            testId: this.testId,
            questionType: this.questionType,
            singleChoiceAnswer: null,
            multiChoiceAnswer: null,
            puzzleWithTextAnswers: null,
            puzzleWithImageAnswers: arrayPuzzle
        })
            .subscribe((response) => {
            console.log(response);
            this.userTestId = response['result'].userTestId;
            this.pageNumber += 1;
            // Stop sound when next questin
            if (this.player) {
                this.player.stop();
            }
            // ** check last question
            if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
                console.log('this is last number');
                localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
                localStorage.setItem('courseId', JSON.stringify(this.courseId));
                localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
                // this.navController.navigateForward('test-course/finished-test');
                // this.router.navigate(['/exercise/finished-test',
                // {userTestId: this.userTestId, courseId: this.courseId, offset: this.pageNumber}]);
                return;
            }
            this.getQuestionAndAnswer();
            this.slides.slideNext();
        });
    }
    slidePrev() {
        this.pageNumber -= 1;
        this.getQuestionAndAnswer();
        this.slides.slidePrev();
    }
    ScapeSlidePrev() {
        this.pageNumber += 1;
        if (this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
            console.log('this is last number');
            localStorage.setItem('userTestId', JSON.stringify(this.userTestId));
            localStorage.setItem('courseId', JSON.stringify(this.courseId));
            localStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
            return;
        }
        this.getQuestionAndAnswer();
        this.slides.slideNext();
    }
    finishSlidePrev() {
        this.pageNumber -= 1;
    }
    // ** when to zoom image
    presentPopover(ev, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _puzzle_sound_test_puzzle_sound_test_component__WEBPACK_IMPORTED_MODULE_11__["PuzzleSoundTestComponent"],
                componentProps: {
                    imagePath: item.imagePath,
                },
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
            });
            yield popover.present();
        });
    }
    finishedTest() {
        this.testService.finishedTest(this.userTestId)
            .subscribe(response => {
            console.log(response);
            localStorage.removeItem('courseId');
            localStorage.removeItem('pageNumber');
            // this.router.navigate(['/courses/tabs/my-courses']).then(() => {
            //   window.location.reload();
            // });
            // this.navCtrl.navigateRoot('/courses/tabs/my-courses').then(() => {
            //   window.location.reload();
            //    });
            // this.router.navigateByUrl('/courses/tabs/my-courses', { skipLocationChange: true });
            // this.navCtrl.navigateRoot('/courses/tabs/my-courses')
            this.router.navigate(['/courses/tabs/my-courses']);
        });
    }
    // Start Audio 
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_10__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
            },
            onend: () => { },
        });
        this.player.play();
    }
    ngOnDestroy() {
        this.subs.forEach(e => {
            e.unsubscribe();
        });
        if (this.player) {
            this.player.stop();
        }
    }
};
PuzzleImageTestPage.ctorParameters = () => [
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_8__["TestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
PuzzleImageTestPage.propDecorators = {
    pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['pageNumber',] }],
    questionData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['image',] }]
};
PuzzleImageTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-puzzle-image-test',
        template: _raw_loader_puzzle_image_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_image_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleImageTestPage);



/***/ }),

/***/ "yjRV":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/test-course/multi-test/multi-test.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Final Test Multi Choice</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n<form [formGroup]=\"multiForm\">\n\n  <ion-slides *ngIf=\"lengthItems != pageNumber\"  [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n    <ion-grid *ngIf=\"allTestData\">\n      <ion-list class=\"multi-choice\">\n\n          <!-- Start Sound -->\n          <ion-grid class=\"sound-group\">\n            <ion-row>\n            <ion-col size=\"4\">\n                <div *ngIf=\"exerciseItems[0].voiceDanishPath\">\n                  <div class=\"sound-question\">\n                      <div class=\"img-volume\">\n                        <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElementDanish,1)\">\n                        </ion-icon>\n                      </div>\n                    <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                  </div>\n                </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div *ngIf=\"exerciseItems[0].multiChoiceTranslations[0]?.voicePath\">\n              <div class=\"sound-question\">\n                  <div class=\"img-volume\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElement.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElement,1,'native')\">\n                    </ion-icon>\n                  </div>\n                <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n              </div>\n            </div>\n          </ion-col>\n          </ion-row>\n          </ion-grid>\n          <!-- End Sound -->\n\n        <ion-list-header>\n          <ion-text>\n            {{ allTestData['multiChoice'].question }}\n          </ion-text>\n\n        </ion-list-header>\n\n        <ion-radio-group formControlName=\"answer\">\n          <div class=\"answer\" *ngFor=\"let item of allTestData['multiChoice']['multiChoiceAnswers']\">\n            <ion-item (click)=\"playAudio(item,2)\"> \n              <ion-label>{{ item.answer }}</ion-label>\n              <ion-radio [value]=\"item.id\"></ion-radio>\n              <!-- Sound  -->\n              <div  class=\"sound\" *ngIf=\"item.audioElement.audio\">\n                <div class=\"sound-bg\">\n                      <div class=\"img-volume\">\n                        <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!item.audioElement.status? 'play' : 'stop'\" >\n                        </ion-icon>\n                      </div>\n                  </div>\n                  <img class=\"langauge-img\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n                </div>\n              <!-- Sound -->\n            </ion-item>\n        </div>\n      </ion-radio-group>\n\n\n      </ion-list>\n    </ion-grid>\n  </ion-slide>\n  </ion-slides>\n\n\n<!-- <ion-grid>\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"6\">\n      <ion-button\n      [disabled]=\"multiForm.invalid\"\n      (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button\n      [disabled]=\"multiForm.invalid\"\n        (click)=\"slideNext(allTestData['multiChoice'].id)\"\n        >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n\n\n</form>\n<!-- <app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished> -->\n\n  <ion-grid *ngIf=\"lengthItems !== pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"4\">\n        <ion-button\n        (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n<!-- \n      <ion-col size=\"4\">\n        <ion-button\n          (click)=\"ScapeSlidePrev()\"\n          >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col> -->\n\n      <ion-col size=\"4\">\n        <ion-button\n        [disabled]=\"multiForm.invalid\"\n          (click)=\"slideNext(allTestData['multiChoice'].id)\"\n          >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"lengthItems === pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"6\">\n        <ion-button\n        (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button\n          (click)=\"finishedTest()\"\n          >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=test-course-test-course-module.js.map