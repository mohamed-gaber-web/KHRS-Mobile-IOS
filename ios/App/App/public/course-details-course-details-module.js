(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-details-course-details-module"],{

/***/ "4PMM":
/*!*****************************************************************!*\
  !*** ./src/app/courses/course-details/course-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: CourseDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsPageModule", function() { return CourseDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _course_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-details-routing.module */ "9ybX");
/* harmony import */ var _course_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-details.page */ "JeYX");







let CourseDetailsPageModule = class CourseDetailsPageModule {
};
CourseDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseDetailsPageRoutingModule"]
        ],
        declarations: [_course_details_page__WEBPACK_IMPORTED_MODULE_6__["CourseDetailsPage"]]
    })
], CourseDetailsPageModule);



/***/ }),

/***/ "4r9s":
/*!*****************************************************************!*\
  !*** ./src/app/courses/course-details/course-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2#title {\n  font-weight: 600;\n  font-size: 18px;\n  text-align: center;\n  margin: 15px auto;\n  color: var(--ion-color-second-title);\n}\n\n.course-details_img ion-img {\n  border: 2px solid var(--ion-color-second-title);\n  border-radius: 20px;\n  overflow: hidden;\n}\n\nion-item {\n  margin: 5px 0;\n  background-color: #fff !important;\n}\n\n.icon-valid {\n  width: 30px;\n  height: 30px;\n  line-height: 39px;\n  background-color: var(--ion-color-second-title);\n  text-align: center;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.icon-valid ion-icon {\n  font-size: 21px;\n  color: var(--ion-color-second-title-icon);\n}\n\nion-label {\n  font-size: 16px;\n  font-weight: 500;\n  --color: var(--ion-color-second-title);\n}\n\nion-spinner {\n  margin: auto;\n  text-align: center;\n  width: 50%;\n  height: 100%;\n  display: flex;\n}\n\n.statusMsg {\n  background-color: #003182;\n  padding: 10px 0 13px 0;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 300;\n  display: block;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.sound-inro {\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.sound-inro .img-person img {\n  width: 80%;\n  height: auto;\n}\n\n.sound-inro .img-volume ion-img {\n  max-width: 45px;\n  width: 45px;\n}\n\n.sound-inro img {\n  max-width: 80px;\n  height: auto;\n}\n\nion-text {\n  cursor: pointer;\n}\n\nion-text ion-icon {\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n}\n\n.passed {\n  font-size: 20px;\n  color: #003182;\n  font-weight: 600;\n  position: relative;\n  top: 14px;\n}\n\n.valid {\n  border: 2px solid #8AFA6F;\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  width: 70%;\n}\n\nvideo {\n  padding: 10px 0 0 0;\n}\n\n.course-details-descr {\n  text-align: center;\n}\n\n.course-details-descr ion-text {\n  text-align: center !important;\n  font-size: 14px;\n  color: var(--ion-color-second-title);\n  line-height: 26px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUdJO0VBQ0UsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQU47O0FBS0U7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJO0VBQ0UsZUFBQTtFQUNBLHlDQUFBO0FBRk47O0FBT0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQUpKOztBQU9FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSko7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBTE47O0FBVUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVJOOztBQVlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFWSjs7QUFlQTtFQUNFLGVBQUE7QUFaRjs7QUFjRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFaSjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBZEY7O0FBaUJBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWRGOztBQWlCQTtFQUNFLG1CQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7QUFkRjs7QUFlQztFQUNDLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJGIiwiZmlsZSI6ImNvdXJzZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyI3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC10aXRsZSk7XG59XG5cbiAgLmNvdXJzZS1kZXRhaWxzX2ltZyB7XG4gICAgaW9uLWltZyB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLXRpdGxlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgfVxuXG5cbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaWNvbi12YWxpZCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtdGl0bGUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtdGl0bGUtaWNvbik7XG4gICAgfVxuXG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtdGl0bGUpO1xuICB9XG5cbiAgaW9uLXNwaW5uZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhdHVzTXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzE4MjtcbiAgcGFkZGluZzogMTBweCAwIDEzcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNvdW5kLWlucm8ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmltZy1wZXJzb24ge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5pbWctdm9sdW1lIHtcbiAgICBpb24taW1nIHtcbiAgICAgIG1heC13aWR0aDogNDVweDtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOjgwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbn1cblxuaW9uLXRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1cHg7XG4gIH1cbn1cblxuXG4ucGFzc2VkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMzE4MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE0cHg7XG59XG5cbi52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4QUZBNkY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDcwJTtcbn1cblxudmlkZW8ge1xuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xufVxuXG4uY291cnNlLWRldGFpbHMtZGVzY3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gaW9uLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC10aXRsZSk7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cblxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "9ybX":
/*!*************************************************************************!*\
  !*** ./src/app/courses/course-details/course-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CourseDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsPageRoutingModule", function() { return CourseDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _course_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-details.page */ "JeYX");




const routes = [
    {
        path: '',
        component: _course_details_page__WEBPACK_IMPORTED_MODULE_3__["CourseDetailsPage"]
    }
];
let CourseDetailsPageRoutingModule = class CourseDetailsPageRoutingModule {
};
CourseDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseDetailsPageRoutingModule);



/***/ }),

/***/ "CnCp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/course-details/course-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"ion-margin-bottom\">\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <h2 id=\"title\" *ngIf=\"courseDetails\" class=\"font-title-desktop\">\n    {{ courseDetails.courseTranslations[0]?.title }}\n  </h2>\n\n  <ion-grid *ngIf=\"courseDetails\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-md=\"3\">\n        <div *ngIf=\"courseDetails.courseTranslations[0]?.introVoicePath\" class=\"sound-inro\">\n          <div class=\"img-person\">\n            <img loading=\"lazy\" src=\"../../assets/images/char-person.png\" alt=\"intro-person\" />\n          </div>\n        <div class=\"icon-sound\">\n          <div class=\"img-volume\">\n            <ion-img\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\" (click)=\"startAudio(courseDetails.courseTranslations[0]?.introVoicePath)\" src=\"../../../assets/icon/Vector.png\">\n          </ion-img>\n          </div>\n        </div>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"courseDetails\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" size-xs=\"8\" class=\"course-details_img\">\n        <ion-img loading=\"lazy\" [src]=\"courseDetails?.imagePath\"></ion-img>\n      </ion-col>\n\n      <ion-col size-md=\"7\" size=\"12\" class=\"ion-margin-top\" >\n\n        <p class=\"course-details-descr\">\n          <ion-text *ngIf=\"courseDetails.courseTranslations[0]?.description !== null\" class=\"font-description-desktop\">\n            {{courseDetails.courseTranslations[0]?.description}}\n          </ion-text>\n        </p>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"courseDetails\">\n    <ion-row class=\"valid\">\n        <ion-item class=\"time-valid\" lines=\"none\">\n          <div class=\"icon-valid\">\n            <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\n          </div>\n          <ion-label> <strong> Valid For: </strong> {{ courseDetails.duration }} Day </ion-label>\n        </ion-item>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"courseDetails\" class=\"video-inro\">\n      <video *ngIf=\"courseDetails.courseTranslations[0]?.introVideoPath\" width=\"100%\" height=\"200\" controls>\n        <source [src]=\"courseDetails.courseTranslations[0]?.introVideoPath\" type=\"video/mp4\">\n      </video>\n  </div>\n\n  <ion-grid *ngIf=\"courseDetails\" class=\"ion-margin-top ion-margin-bottom\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col>\n        <ion-button (click)=\"sendData($event, courseDetails.id)\" *ngIf=\"courseDetails.statusName === null\"> Apply </ion-button>\n        <ion-button *ngIf=\"courseDetails.status == 2\"> Expired Without Taking The Exam   </ion-button>\n        <ion-button *ngIf=\"courseDetails.status == 3\"> Failed  </ion-button>\n        <ion-button *ngIf=\"courseDetails.status == 4\"> Applied And Waiting For Approval </ion-button>\n        <ion-button *ngIf=\"courseDetails.status == 5\"> In Progress </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-margin-top ion-margin-bottom\" *ngIf=\"courseDetails\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"3\" size-lg=\"3\">\n        <ion-text class=\"passed\" *ngIf=\"courseDetails.status == 1\">\n          Passed\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"9\" size-lg=\"3\">\n        <ion-text  (click)=\"downloadCertificate()\" class=\"statusMsg\" *ngIf=\"courseDetails.status == 1\">\n          Certificate\n          <ion-icon name=\"download-outline\"></ion-icon>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "JeYX":
/*!***************************************************************!*\
  !*** ./src/app/courses/course-details/course-details.page.ts ***!
  \***************************************************************/
/*! exports provided: CourseDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsPage", function() { return CourseDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-details.page.html */ "CnCp");
/* harmony import */ var _course_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-details.page.scss */ "4r9s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file */ "hMac");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "wMzM");












let CourseDetailsPage = class CourseDetailsPage {
    constructor(router, courseService, route, testService, fileOpener, platform) {
        this.router = router;
        this.courseService = courseService;
        this.route = route;
        this.testService = testService;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.subs = [];
        this.isLoading = false;
        this.userTestId = JSON.parse(localStorage.getItem('userTestId'));
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.subs.push(this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => this.courseService.getCoursesDetails(+params.get('courseId')))).subscribe(response => {
            // console.log('course details' , response['result'])
            this.isLoading = false;
            this.courseDetails = response['result'];
        }));
    }
    // ** send id to apply course page
    sendData(event, id) {
        this.router.navigate(['courses/tabs/apply-course', { id }]);
    }
    downloadCertificate() {
        this.testService.getCertificate(this.courseDetails.id)
            .subscribe((response) => {
            this.isLoading = false;
            if (this.platform.is('mobileweb')) {
                this.pdfFile = new Blob([response], { type: 'application/pdf' });
                var downloadURL = window.URL.createObjectURL(response);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = "Certificate.pdf";
                link.click();
            }
            else if (this.platform.is('android')) {
                _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].writeFile(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download", this.courseDetails.id + "Certificate.pdf", new Blob([response]), {
                    replace: true,
                });
                this.fileOpener.open(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download/" + this.courseDetails.id + "Certificate.pdf", 'application/pdf')
                    .then(() => console.log('File is opened'))
                    .catch(e => console.log('Error opening file', e));
            }
            else {
                this.pdfFile = new Blob([response], { type: 'application/pdf' });
                var downloadURL = window.URL.createObjectURL(response);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = "Certificate.pdf";
                link.click();
            }
            // this.pdfFile = new Blob([response], {type: 'application/pdf'});
            // var downloadURL = window.URL.createObjectURL(response);
            // var link = document.createElement('a');
            // link.href = downloadURL;
            // link.download = "Certificate.pdf";
            // link.click();
        });
    }
    startAudio(voicePath) {
        if (this.player && this.isPlaying == true) {
            this.player.stop();
            this.isPlaying = false;
        }
        else {
            this.player = new howler__WEBPACK_IMPORTED_MODULE_9__["Howl"]({
                html5: true,
                src: voicePath,
                onplay: () => {
                    this.isPlaying = true;
                },
                onend: () => {
                    this.isPlaying = false;
                },
            });
            this.player.play();
        }
    }
    ionViewDidLeave() {
        if (this.player) {
            this.player.stop();
        }
    }
    ngOnDestroy() {
        if (this.isPlaying) {
            this.player.stop();
        }
        this.subs.forEach((element) => {
            element.unsubscribe();
        });
    }
};
CourseDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_8__["TestService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
CourseDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course-details',
        template: _raw_loader_course_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseDetailsPage);



/***/ })

}]);
//# sourceMappingURL=course-details-course-details-module.js.map