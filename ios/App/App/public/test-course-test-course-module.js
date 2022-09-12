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

/***/ "83Ks":
/*!************************************************************************!*\
  !*** ./src/app/training/test-course/single-test/single-test.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/****************** EXERCICE COURSES *********************/\n/****************** SINGLE COURSES *********************/\n.ext-icon-vlume {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  position: relative;\n  top: 3px;\n}\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n.single-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px 0 50px 0;\n}\n.single-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 20px auto;\n}\n.single-choice ion-radio {\n  --color: var(--ion-color-second-app);\n}\n.hideButtonNext {\n  display: none;\n}\n.showButtonNext {\n  display: block;\n}\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n/****************** EXERCICE COURSES *********************/\n/****************** SINGLE COURSES *********************/\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpbmdsZS10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBQTtBQUVBLHdEQUFBO0FBR0E7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFGRjtBQU9FO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpKO0FBU0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTko7QUFTRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVVFO0VBQ0Usb0NBQUE7QUFSSjtBQWNBO0VBQ0UsYUFBQTtBQVhGO0FBY0E7RUFDRSxjQUFBO0FBWEY7QUFjQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVhGO0FBZ0JBLDBEQUFBO0FBRUEsd0RBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBZkYiLCJmaWxlIjoic2luZ2xlLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKiBFWEVSQ0lDRSBDT1VSU0VTICoqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKiBTSU5HTEUgQ09VUlNFUyAqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLmV4dC1pY29uLXZsdW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG59XG5cbi5zaW5nbGUtY2hvaWNlIHtcbiAgaW9uLXRleHR7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDIwcHggMCA1MHB4IDA7XG4gIH1cblxuICBpb24tbGFiZWx7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuXG4gIGlvbi1yYWRpbyB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB9XG59XG5cblxuXG4uaGlkZUJ1dHRvbk5leHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvd0J1dHRvbk5leHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRvdGFsLXJlc3VsdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKiogRVhFUkNJQ0UgQ09VUlNFUyAqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKiogU0lOR0xFIENPVVJTRVMgKioqKioqKioqKioqKioqKioqKioqL1xuXG4uaW1nLWxhbmdhdWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuIl19 */");

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









let TestCoursePage = class TestCoursePage {
    constructor(storageService, route, router, toastController, navController, testService) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.testService = testService;
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
    getTestType() {
        if (this.activeCourse == true) {
            console.log('redirect in this ');
            this.testService.getTestType(this.courseId, this.redOffset)
                .subscribe(response => {
                this.questionType = response['questionType'];
                this.allTestData = response;
            });
        }
        else {
            this.testService.getTestType(this.courseId, this.pageNumber)
                .subscribe(response => {
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
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-slides *ngIf=\"lengthItems != pageNumber\" class=\"swiper-no-swiping\" [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n\n    <div cdkDropListGroup class=\"drag-group\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col size=\"12\"\n                  class=\"example-box\"\n                  cdkDropList\n                  *ngFor=\"let item of questionsArray\"\n                  [cdkDropListData]=\"item\"\n                  cdkDropListSortingDisabled\n                  cdkDropListOrientation=\"horizontal\"\n                  (cdkDropListDropped)=\"drop($event)\"\n                >\n                <div *ngFor=\"let item2 of item\">\n\n                  <ion-img\n                    class=\"image-question\"\n                    loading=\"lazy\" *ngIf=\"item2.type === 'question' \"\n                    (click)=\"presentPopover($event, item2)\"\n                    [src]=\"item2.imagePath\" cdkDrag [cdkDragDisabled]=\"true\">\n                  </ion-img>\n\n\n                  <div class=\"drag-answer\" *ngIf=\"item2.type === 'answer' \">\n                    <ion-grid class=\"puzzle-answer\">\n                      <ion-row>\n\n                        <ion-col\n                          size=\"12\"\n                          >\n                          <div class=\"puzzle-fix\" cdkDrag [cdkDragDisabled]=\"false\">\n                            <div class=\"title\"> {{ item2.keyword }}</div>\n                          </div>\n                        </ion-col>\n\n                      </ion-row>\n                    </ion-grid>\n\n                  </div>\n                </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-grid class=\"puzzle-answer\">\n              <ion-row>\n                <ion-col\n                  size=\"12\"\n                  cdkDropList\n                  [cdkDropListData]=\"answersArray\"\n                  (cdkDropListDropped)=\"drop($event)\"\n                  >\n                  <div class=\"puzzle-fix\"*ngFor=\"let item of answersArray\" cdkDrag>\n\n                  <div class=\"title\"> {{ item.keyword }}</div>\n\n                  </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n\n    </div>\n  </ion-slide>\n</ion-slides>\n<app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished>\n\n\n  <ion-grid *ngIf=\"lengthItems !== pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"4\">\n        <ion-button\n        *ngIf=\"nextButton\"\n        (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-button\n          (click)=\"ScapeSlidePrev()\"\n          >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-button\n        *ngIf=\"nextButton\"\n          (click)=\"slideNext()\"\n          >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style=\"position: relative; top: -150px;\" *ngIf=\"lengthItems === pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"6\">\n        <ion-button\n        *ngIf=\"nextButton\"\n        (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button\n        *ngIf=\"nextButton\"\n          (click)=\"finishedTest()\"\n          >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n");

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var angular_cd_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-cd-timer */ "Gj54");
















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
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            angular_cd_timer__WEBPACK_IMPORTED_MODULE_15__["CdTimerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        entryComponents: [_test_finished_test_finished_page__WEBPACK_IMPORTED_MODULE_13__["TestFinishedPage"]],
        declarations: [
            _test_course_page__WEBPACK_IMPORTED_MODULE_7__["TestCoursePage"],
            _single_test_single_test_page__WEBPACK_IMPORTED_MODULE_8__["SingleTestPage"],
            _multi_test_multi_test_page__WEBPACK_IMPORTED_MODULE_9__["MultiTestPage"],
            _puzzle_text_test_puzzle_text_test_page__WEBPACK_IMPORTED_MODULE_10__["PuzzleTextTestPage"],
            _puzzle_image_test_puzzle_image_test_page__WEBPACK_IMPORTED_MODULE_11__["PuzzleImageTestPage"],
            _puzzle_image_test_puzzle_image_zoom_puzzle_image_zoom_component__WEBPACK_IMPORTED_MODULE_12__["PuzzleImageZoomComponent"],
            _test_finished_test_finished_page__WEBPACK_IMPORTED_MODULE_13__["TestFinishedPage"]
        ],
    })
], TestCoursePageModule);



/***/ }),

/***/ "Sg2/":
/*!**********************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-text-test/puzzle-text-test.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume {\n  color: var(--ion-color-second-app);\n  font-size: 34px;\n  position: relative;\n  top: 4px;\n}\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n.puzzle-text .block {\n  margin-bottom: 11px;\n  padding: 0 9px;\n  border: dotted 2px #3f51b5;\n  color: #000000de;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: #fff;\n  font-size: 14px;\n  border-radius: 10px;\n  height: 40px;\n}\n\n.puzzle-text ion-text {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  margin: auto;\n}\n\n@media (min-width: 768px) {\n  .puzzle-text ion-img {\n    width: 70%;\n    height: auto;\n    margin: auto;\n  }\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 15px;\n  border-radius: 10px;\n  border: 2px dotted #3f51b5;\n  height: 40px;\n  margin: 10px 0;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-second-app);\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n/************* DRAG AND DROP *****************/\n\n.cdk-drag-preview {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1enpsZS10ZXh0LXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBS0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBUUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUEo7O0FBV0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQVRKO0FBQ0Y7O0FBYUE7RUFFRSxnQkFBQTtBQVhGOztBQWFFO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFaSjs7QUFjSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBWk47O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFoQkY7O0FBb0JBLDhDQUFBOztBQUdBO0VBSUUsa0JBQUE7RUFDQSxxSEFBQTtFQUdBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBeEJGOztBQThCQTtFQUNFLDBDQUFBO0VBQ0Esa0NBQUE7QUEzQkY7O0FBK0JBO0VBQ0UsVUFBQTtBQTVCRjs7QUErQkE7RUFDRSxzREFBQTtBQTVCRjs7QUErQkE7RUFDRSxZQUFBO0FBNUJGOztBQStCQTtFQUNFLHNEQUFBO0FBNUJGOztBQWdDQSw4Q0FBQTs7QUFFQTtFQUNFLGFBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsY0FBQTtBQTlCRjs7QUFpQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5QkYiLCJmaWxlIjoicHV6emxlLXRleHQtdGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0LWljb24tdmx1bWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICBmb250LXNpemU6IDM0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG59XG5cblxuaW9uLXRvb2xiYXIge1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxufVxuXG4uZHJhZy1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHV6emxlLXRleHR7XG5cbiAgLmJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIHBhZGRpbmc6IDAgOXB4O1xuICAgIGJvcmRlcjogZG90dGVkIDJweCAjM2Y1MWI1O1xuICAgIGNvbG9yOiAjMDAwMDAwZGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cblxuICBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcblxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWltZyB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luOiBhdXRvXG4gICAgfVxuICB9XG59XG5cbi5wdXp6bGUtYW5zd2VyIHtcblxuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5wdXp6bGUtZml4IHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggZG90dGVkICMzZjUxYjU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIH1cblxuXG4gIH1cbn1cblxuLmltZy1sYW5nYXVnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuXG4vKioqKioqKioqKioqKiBEUkFHIEFORCBEUk9QICoqKioqKioqKioqKioqKioqL1xuXG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcblxuXG4gIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcblxufVxuXG5cblxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmd7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xufVxuXG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cbi8qKioqKioqKioqKioqIERSQUcgQU5EIERST1AgKioqKioqKioqKioqKioqKiovXG5cbi5oaWRlQnV0dG9uTmV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93QnV0dG9uTmV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udG90YWwtcmVzdWx0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume {\n  color: var(--ion-color-second-app);\n  font-size: 28px;\n}\n\n.multi-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: capitalize;\n  margin: 20px 0 50px 0;\n}\n\n.multi-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 10px 0;\n}\n\n.multi-choice ion-radio {\n  --color: var(--ion-color-second-app);\n  margin: 20px 0;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL211bHRpLXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FBQUo7O0FBTUU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSko7O0FBT0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFMSjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVJGIiwiZmlsZSI6Im11bHRpLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5leHQtaWNvbi12bHVtZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuXG5cbi5tdWx0aS1jaG9pY2Uge1xuICBpb24tdGV4dHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW46IDIwcHggMCA1MHB4IDA7XG4gIH1cblxuICBpb24tbGFiZWx7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuXG4gIGlvbi1yYWRpbyB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5cblxufVxuXG4udG90YWwtcmVzdWx0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaW1nLWxhbmdhdWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uaGlkZUJ1dHRvbk5leHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvd0J1dHRvbk5leHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRvdGFsLXJlc3VsdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuIl19 */");

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
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");








let SingleTestPage = class SingleTestPage {
    constructor(toastController, testService, route, fb, navController, router) {
        this.toastController = toastController;
        this.testService = testService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
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
            console.log(response);
            this.isLoading = false;
            this.questionType = response['questionType'];
            this.testId = response['testId'];
            this.lengthItems = response['length'];
            if (this.questionType !== 1) {
                // parent
                const obj = {
                    pageNumber: this.pageNumber,
                    questionType: this.questionType
                };
                this.questionData.emit(obj);
            }
            this.allTestData = response;
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
    ngOnDestroy() {
        this.subs.forEach(e => {
            e.unsubscribe();
        });
    }
};
SingleTestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
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
/* harmony import */ var src_app_shared_models_puzzleTextTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/puzzleTextTranslations */ "HprL");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");








let PuzzleTextTestPage = class PuzzleTextTestPage {
    constructor(testService, route, router) {
        this.testService = testService;
        this.route = route;
        this.router = router;
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
                let qpz = new src_app_shared_models_puzzleTextTranslations__WEBPACK_IMPORTED_MODULE_6__["PuzzleTextTranslations"]();
                qpz.id = this.questionAndAnswerItems.puzzleText[index].id;
                qpz.text = this.questionAndAnswerItems.puzzleText[index].text;
                qpz.type = "question";
                qpz.disabled = true;
                arr.push(qpz);
                this.questionsArray.push(arr);
            }
            //Answers
            for (let index = 0; index < this.questionAndAnswerItems.puzzleTextTranslations.length; index++) {
                let arr = [];
                let apz = new src_app_shared_models_puzzleTextTranslations__WEBPACK_IMPORTED_MODULE_6__["PuzzleTextTranslations"]();
                apz.id = this.questionAndAnswerItems.puzzleTextTranslations[index].id;
                apz.text = this.questionAndAnswerItems.puzzleTextTranslations[index].text;
                apz.type = "answer";
                apz.disabled = false;
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
    ngOnDestroy() {
        this.subs.forEach(e => {
            e.unsubscribe();
        });
    }
};
PuzzleTextTestPage.ctorParameters = () => [
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n  <!-- Single final Test -->\n  <form [formGroup]=\"singleForm\" >\n  <ion-slides *ngIf=\"lengthItems != pageNumber\" [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n\n\n    <ion-grid>\n\n      <ion-list class=\"single-choice\">\n        <ion-radio-group   formControlName=\"answer\">\n\n          <ion-list-header>\n            <ion-text *ngIf=\"allTestData\"> {{ allTestData['singleChoice'].question }} </ion-text>\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>JA</ion-label>\n            <ion-radio [value]=\"true\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>NEJ</ion-label>\n            <ion-radio [value]=\"false\"></ion-radio>\n          </ion-item>\n\n          <ion-text color=\"danger\" *ngIf=\"singleFormErrors.answer\">{{singleFormErrors.answer}}</ion-text>\n        </ion-radio-group>\n\n      </ion-list>\n    </ion-grid>\n\n\n  </ion-slide>\n</ion-slides>\n</form>\n\n<!-- <ion-grid>\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"6\">\n      <ion-button\n      [disabled]=\"singleForm.invalid\"\n      (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button\n        [disabled]=\"singleForm.invalid\"\n        (click)=\"slideNext(allTestData['singleChoice']['singleChoiceTranslations'][0].singleChoiceId)\"\n        >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n\n<app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished>\n\n\n<ion-grid *ngIf=\"lengthItems !== pageNumber\">\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"4\">\n      <ion-button\n      (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-button\n        (click)=\"ScapeSlidePrev()\"\n        >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-button\n        [disabled]=\"singleForm.invalid\"\n        (click)=\"slideNext(allTestData['singleChoice']['singleChoiceTranslations'][0].singleChoiceId)\"\n        >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n\n\n  </ion-row>\n</ion-grid>\n\n<ion-grid style=\"position: relative; top: -150px;\" *ngIf=\"lengthItems === pageNumber\">\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"6\">\n      <ion-button\n      (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button\n        (click)=\"finishedTest()\"\n        >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n\n<!-- Single inal test -->\n\n</ion-content>\n");

/***/ }),

/***/ "ooHR":
/*!************************************************************************************!*\
  !*** ./src/app/training/test-course/puzzle-image-test/puzzle-image-test.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 14 px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\nion-img.image-question {\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n}\n\n@media (min-width: 768px) {\n  ion-img {\n    width: 70%;\n    height: auto;\n    margin: auto;\n  }\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 5px 10px;\n  margin: 10px 0;\n  border-radius: 10px;\n  border: 1px dotted #003182a6;\n  height: 50px;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-second-app);\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.drag-answer .puzzle-img ion-img {\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.drag-answer .puzzle-answer {\n  margin-top: 0;\n  padding: 5px 0 !important;\n}\n\n.drag-answer .title {\n  margin-top: 0 !important;\n}\n\n/************* DRAG AND DROP *****************/\n\n.example-box {\n  border: 2px dotted #003182a6 !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 16px;\n  border-radius: 0;\n  margin: 5px 0;\n  height: auto;\n  padding: 0;\n}\n\n.example-box .sound {\n  padding: 0 5px 0 10px;\n}\n\n.example-box .title {\n  margin-right: 5px;\n}\n\n.example-box img.danish-flag {\n  width: 24px;\n  height: auto;\n}\n\n.example-box .drag-answer ion-img {\n  width: 20px;\n  height: auto;\n  position: relative;\n  top: -2px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-preview .puzzle-fix .title {\n  font-weight: 600 !important;\n  padding: 0 5px !important;\n}\n\n.cdk-drag-preview .puzzle-fix img.danish-flag {\n  width: 24px;\n  height: auto;\n  max-width: 70%;\n}\n\n.cdk-drop-list-receiving {\n  background-color: rgba(167, 247, 129, 0.6);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 120ms cubic-bezier(0, 0, 0.2, 3);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n@media (min-width: 767px) {\n  .cdk-drag-preview {\n    width: 30% !important;\n  }\n}\n\n@media (max-width: 370px) {\n  ion-img.image-question {\n    width: 70px;\n    height: auto;\n  }\n\n  .title {\n    font-size: 16px !important;\n  }\n\n  .ion-text-center {\n    font-size: 14px;\n  }\n\n  .cdk-drag-preview {\n    box-sizing: border-box;\n    width: 80% !important;\n  }\n  .cdk-drag-preview .sound-bg {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n  }\n  .cdk-drag-preview .img-volume {\n    width: 20px;\n    height: 20px;\n    padding: 10px 0;\n  }\n  .cdk-drag-preview .puzzle-fix .title {\n    font-weight: 600 !important;\n    padding: 0 5px !important;\n    width: 30% !important;\n    font-size: 16px;\n  }\n  .cdk-drag-preview .puzzle-fix img.danish-flag {\n    width: 24px;\n    height: 24px;\n    max-width: 50%;\n  }\n\n  .example-box {\n    margin: 10px 0;\n  }\n  .example-box .puzzle-answer .puzzle-fix {\n    padding: 5px 0px !important;\n  }\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    display: flex;\n    border: 2px dotted var(--ion-color-second-app);\n    border-radius: 10px;\n    padding: 5px 0px;\n    margin: 0;\n  }\n  .example-box .title {\n    width: 35% !important;\n  }\n\n  .cdk-drop-list-receiving {\n    height: auto;\n    color: var(--ion-color-second-app);\n  }\n\n  .cdk-drop-list-dragging {\n    background-color: rgba(167, 247, 129, 0.6);\n    height: 150px;\n    width: 100%;\n    border: 3px dotted var(--ion-color-second-app);\n    color: var(--ion-color-second-app);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 2000px) {\n  .example-box {\n    height: 90px;\n  }\n}\n\n@media (max-width: 500px) {\n  .scrollable {\n    height: 230px;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 449px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 280px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 16px !important;\n  }\n\n  .title {\n    font-size: 16px !important;\n  }\n}\n\n@media (min-width: 420px) and (max-width: 450px) {\n  .example-box .puzzle-fix {\n    width: 300px;\n  }\n}\n\n@media (min-width: 450px) and (max-width: 600px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 400px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 12px !important;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n  .example-box .puzzle-fix {\n    width: 600px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 18%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .puzzle-answer .puzzle-fix .title {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1enpsZS1pbWFnZS10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQSxlQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU1BLG1CQUFBOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBKOztBQVVFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFQSjtBQUNGOztBQVdBO0VBRUUsZ0JBQUE7QUFWRjs7QUFZRTtFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFYTjs7QUFzQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQW5CRjs7QUEwQkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBdkJKOztBQTBCRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQXhCSjs7QUEyQkU7RUFDRSx3QkFBQTtBQXpCSjs7QUFnQ0EsOENBQUE7O0FBR0E7RUFDRSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBL0JGOztBQWlDRTtFQUNFLHFCQUFBO0FBL0JKOztBQWtDRTtFQUFRLGlCQUFBO0FBL0JWOztBQWlDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBL0JKOztBQWtDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBaENGOztBQW9DQTtFQUdFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBckNGOztBQTBDSTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUF4Q047O0FBMkNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBekNOOztBQWdEQTtFQUNFLDBDQUFBO0VBQ0Esa0NBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsMENBQUE7RUFDQSxrQ0FBQTtBQTdDRjs7QUFpREE7RUFDRSxVQUFBO0FBOUNGOztBQWlEQTtFQUNFLHNEQUFBO0FBOUNGOztBQWlEQTtFQUNFLFlBQUE7QUE5Q0Y7O0FBaURBO0VBQ0Usc0RBQUE7QUE5Q0Y7O0FBb0RBLDhDQUFBOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbERGOztBQXFEQTtFQUNFLDJCQUFBO0FBbERGOztBQXFERTtFQUNFLFdBQUE7QUFsREo7O0FBc0RFO0VBQ0U7SUFDRSxxQkFBQTtFQW5ESjtBQUNGOztBQXlERTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUF2REo7O0VBMERFO0lBQ0UsMEJBQUE7RUF2REo7O0VBMkRBO0lBQ0UsZUFBQTtFQXhERjs7RUE0REU7SUFFRSxzQkFBQTtJQUNBLHFCQUFBO0VBMURKO0VBNERJO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUExRE47RUE2REk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUEzRE47RUFpRU07SUFDRSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VBL0RSO0VBa0VNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBaEVSOztFQXVFRTtJQUNFLGNBQUE7RUFwRUo7RUFzRUk7SUFDRSwyQkFBQTtFQXBFTjtFQXVFSTtJQUNFLGFBQUE7SUFDQSw4Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VBckVOO0VBd0VJO0lBRUUscUJBQUE7RUF2RU47O0VBMkVFO0lBRUUsWUFBQTtJQUNBLGtDQUFBO0VBekVKOztFQTRFRTtJQUNFLDBDQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSw4Q0FBQTtJQUNBLGtDQUFBO0VBekVKO0FBQ0Y7O0FBZ0ZFO0VBQ0U7SUFDRSxZQUFBO0VBOUVKO0FBQ0Y7O0FBaUZFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQS9FSjtBQUNGOztBQW1GRTtFQUNFO0lBQ0UsdUJBQUE7RUFqRko7O0VBb0ZFO0lBQ0Usc0JBQUE7RUFqRko7O0VBb0ZBO0lBQTBCLFlBQUE7RUFoRjFCOztFQWlGQTtJQUFnRCxVQUFBO0lBQVksVUFBQTtJQUFZLFNBQUE7RUEzRXhFOztFQTRFQTtJQUFnRCwwQkFBQTtFQXhFaEQ7O0VBeUVBO0lBQ0UsMEJBQUE7RUF0RUY7QUFDRjs7QUEwRUU7RUFFQTtJQUEwQixZQUFBO0VBeEUxQjtBQUNGOztBQTRFRTtFQUNFO0lBQ0UsdUJBQUE7RUExRUo7O0VBNkVFO0lBQ0Usc0JBQUE7RUExRUo7O0VBNkVBO0lBQTBCLFlBQUE7RUF6RTFCOztFQTBFQTtJQUFnRCxVQUFBO0lBQVksVUFBQTtJQUFZLFNBQUE7RUFwRXhFOztFQXFFQTtJQUFnRCwwQkFBQTtFQWpFaEQ7O0VBa0VBO0lBQ0UsMEJBQUE7RUEvREY7QUFDRjs7QUFtRUU7RUFFRTtJQUEwQixZQUFBO0VBakU1Qjs7RUFrRUU7SUFBZ0QsVUFBQTtFQTlEbEQ7QUFDRjs7QUFnRUU7RUFDRTtJQUFtQyxlQUFBO0VBN0RyQztBQUNGIiwiZmlsZSI6InB1enpsZS1pbWFnZS10ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4dC1pY29uLXZsdW1lIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbi8qIGhlYWRlciBUb3AgKi9cbmlvbi1oZWFkZXIgaW9uLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kcmFnLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmltZy1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTQgcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi8qIGVuZCBoZWFkZXIgdG9wICovXG5cbmlvbi10b29sYmFyIHtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gIH1cbn1cblxuICBpb24taW1nLmltYWdlLXF1ZXN0aW9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBpb24taW1nIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cblxuLnB1enpsZS1hbnN3ZXIge1xuXG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgLnB1enpsZS1maXgge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkICMwMDMxODJhNjtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG5cbiAgICAgIC8vIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgfVxuXG5cbiAgfVxuXG59XG5cblxuLmltZy1sYW5nYXVnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuXG4uZHJhZy1hbnN3ZXIge1xuXG5cbiAgLnB1enpsZS1pbWcgaW9uLWltZ3tcbiAgICB3aWR0aDogMjBweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMHB4IWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdXp6bGUtYW5zd2Vye1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cblxufVxuXG5cbi8qKioqKioqKioqKioqIERSQUcgQU5EIERST1AgKioqKioqKioqKioqKioqKiovXG5cblxuLmV4YW1wbGUtYm94IHtcbiAgYm9yZGVyOiAycHggZG90dGVkICMwMDMxODJhNiFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuXG4gIC5zb3VuZCB7XG4gICAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xuICB9XG5cbiAgLnRpdGxlIHttYXJnaW4tcmlnaHQ6IDVweDt9XG5cbiAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5kcmFnLWFuc3dlciBpb24taW1ne1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuXG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDgwJSFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuXG5cblxuICAucHV6emxlLWZpeCB7XG4gICAgLnRpdGxle1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwIDVweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbiAgfVxuXG59XG5cbi5jZGstZHJvcC1saXN0LXJlY2VpdmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xufVxuXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG59XG5cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAzKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cblxuXG5cbi8qKioqKioqKioqKioqIERSQUcgQU5EIERST1AgKioqKioqKioqKioqKioqKiovXG5cbi50b3RhbC1yZXN1bHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQge1xuICBwb3NpdGlvbjogc3RhdGljIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kcmFnLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgLmNkay1kcmFnLXByZXZpZXcge1xuICAgICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgfVxuXG5cblxuICBAbWVkaWEobWF4LXdpZHRoOiAzNzBweCkge1xuICAgIGlvbi1pbWcuaW1hZ2UtcXVlc3Rpb257XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcbiAgICB9XG5cblxuICAuaW9uLXRleHQtY2VudGVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuXG4gICAgLmNkay1kcmFnLXByZXZpZXcge1xuXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd2lkdGg6IDgwJSFpbXBvcnRhbnQ7XG5cbiAgICAgIC5zb3VuZC1iZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW1nLXZvbHVtZSB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIH1cblxuICAgICAgLnB1enpsZS1maXgge1xuXG5cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMzAlIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcuZGFuaXNoLWZsYWcge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuZXhhbXBsZS1ib3gge1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgICAgIC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDM1JSFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nIHtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICB9XG5cbiAgICAuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZ3tcbiAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyOiAzcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgfVxuXG5cblxuXG4gIH1cblxuICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xuICAgIC5leGFtcGxlLWJveCB7XG4gICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnNjcm9sbGFibGUge1xuICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgfVxuXG5cbiAgQG1lZGlhKG1heC13aWR0aDogNDQ5cHgpIHtcbiAgICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcbiAgICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IC50aXRsZSB7XG4gICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXgge3dpZHRoOiAyODBweDt9XG4gIC5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAuc291bmQge3dpZHRoOiA0NSU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDt9XG4gIC5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAudGl0bGUge2ZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O31cbiAgLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIH1cblxuXG4gIEBtZWRpYShtaW4td2lkdGg6IDQyMHB4KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXgge3dpZHRoOiAzMDBweDt9XG4gIH1cblxuXG5cbiAgQG1lZGlhKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAuc291bmQge1xuICAgICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXggLnRpdGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgfVxuXG4gIC5leGFtcGxlLWJveCAucHV6emxlLWZpeCB7d2lkdGg6IDQwMHB4O31cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7d2lkdGg6IDQ1JTsgcGFkZGluZzogMDsgbWFyZ2luOiAwO31cbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC50aXRsZSB7Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7fVxuICAudGl0bGV7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgfVxuXG5cbiAgQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gICAgLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogNjAwcHg7fVxuICAgIC5leGFtcGxlLWJveCAucHV6emxlLWFuc3dlciAucHV6emxlLWZpeCAuc291bmQge3dpZHRoOiAxOCU7fVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC50aXRsZSB7Zm9udC1zaXplOiAyMHB4O31cbiAgfVxuIl19 */");

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








let MultiTestPage = class MultiTestPage {
    constructor(testService, toastController, route, fb, navController, router, navCtrl) {
        this.testService = testService;
        this.toastController = toastController;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
        this.navCtrl = navCtrl;
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
        this.buildMultiForm();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.getTestType();
    }
    // ** get test type
    getTestType() {
        this.isLoading = true;
        this.multiForm.reset();
        this.testService.getTestType(this.courseId, this.pageNumber)
            .subscribe(response => {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Final Test With Puzzle With Text</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-slides  [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n\n      <div cdkDropListGroup class=\"drag-group\">\n        <ion-grid class=\"puzzle-text\">\n\n          <ion-row>\n\n            <ion-col size=\"12\"\n              class=\"block\"\n              cdkDropList\n              *ngFor=\"let item of questionsArray\"\n              [cdkDropListData]=\"item\"\n              cdkDropListSortingDisabled\n              cdkDropListOrientation=\"horizontal\"\n              (cdkDropListDropped)=\"drop($event)\">\n\n              <div *ngFor=\"let item2 of item\" [cdkDragDisabled]=\"item2.disabled\" cdkDrag>\n                <ion-text color=\"primary\"> {{ item2.text }} </ion-text>\n              </div>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n      <ion-grid class=\"puzzle-answer\">\n        <ion-row>\n            <ion-col color=\"primary\"\n            size=\"12\"\n            cdkDropList\n            [cdkDropListData]=\"answersArray\"\n            (cdkDropListDropped)=\"drop($event)\">\n\n            <div class=\"puzzle-fix\" *ngFor=\"let item of answersArray\" cdkDrag>\n\n              <div class=\"title\"> {{ item.text }} </div>\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n      <!-- Button next and prev -->\n\n      </div>\n\n    </ion-slide>\n    </ion-slides>\n    <app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished>\n\n\n    <ion-grid *ngIf=\"lengthItems !== pageNumber\">\n      <ion-row class=\"ion-align-items-center slide-button\">\n\n        <ion-col size=\"4\">\n          <ion-button\n          *ngIf=\"nextButton\"\n          (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n        </ion-col>\n\n        <ion-col size=\"4\">\n          <ion-button\n            (click)=\"ScapeSlidePrev()\"\n            >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n        </ion-col>\n\n        <ion-col size=\"4\">\n          <ion-button\n          *ngIf=\"nextButton\"\n            (click)=\"slideNext()\"\n            >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"position: relative; top: -150px;\" *ngIf=\"lengthItems === pageNumber\">\n      <ion-row class=\"ion-align-items-center slide-button\">\n\n        <ion-col size=\"6\">\n          <ion-button\n          *ngIf=\"nextButton\"\n          (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button\n          *ngIf=\"nextButton\"\n            (click)=\"finishedTest()\"\n            >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n");

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
/* harmony import */ var _puzzle_image_zoom_puzzle_image_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./puzzle-image-zoom/puzzle-image-zoom.component */ "3niU");











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
            // console.log('puzzle image response', response)
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
                component: _puzzle_image_zoom_puzzle_image_zoom_component__WEBPACK_IMPORTED_MODULE_10__["PuzzleImageZoomComponent"],
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
    ngOnDestroy() {
        this.subs.forEach(e => {
            e.unsubscribe();
        });
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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Final Test Multi Choice</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n<form [formGroup]=\"multiForm\">\n\n  <ion-slides *ngIf=\"lengthItems != pageNumber\"  [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide>\n    <ion-grid *ngIf=\"allTestData\">\n      <ion-list class=\"multi-choice\">\n        <ion-list-header>\n\n          <ion-text>\n            {{ allTestData['multiChoice'].question }}\n          </ion-text>\n\n        </ion-list-header>\n\n        <ion-radio-group formControlName=\"answer\">\n          <div class=\"answer\" *ngFor=\"let item of allTestData['multiChoice']['multiChoiceAnswers']\">\n            <ion-item >\n              <ion-label>{{ item.answer }}</ion-label>\n              <ion-radio [value]=\"item.id\"></ion-radio>\n            </ion-item>\n        </div>\n      </ion-radio-group>\n\n\n      </ion-list>\n    </ion-grid>\n  </ion-slide>\n  </ion-slides>\n\n\n<!-- <ion-grid>\n  <ion-row class=\"ion-align-items-center slide-button\">\n\n    <ion-col size=\"6\">\n      <ion-button\n      [disabled]=\"multiForm.invalid\"\n      (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-button\n      [disabled]=\"multiForm.invalid\"\n        (click)=\"slideNext(allTestData['multiChoice'].id)\"\n        >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n\n\n</form>\n<app-test-finished *ngIf=\"lengthItems === pageNumber\"></app-test-finished>\n\n  <ion-grid *ngIf=\"lengthItems !== pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"4\">\n        <ion-button\n        (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-button\n          (click)=\"ScapeSlidePrev()\"\n          >  Escape <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-button\n        [disabled]=\"multiForm.invalid\"\n          (click)=\"slideNext(allTestData['multiChoice'].id)\"\n          >  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style=\"position: relative; top: -150px;\" *ngIf=\"lengthItems === pageNumber\">\n    <ion-row class=\"ion-align-items-center slide-button\">\n\n      <ion-col size=\"6\">\n        <ion-button\n        (click)=\"finishSlidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button\n          (click)=\"finishedTest()\"\n          >  Submit <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=test-course-test-course-module.js.map