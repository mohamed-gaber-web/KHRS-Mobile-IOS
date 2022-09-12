(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-courses-my-courses-module"],{

/***/ "5Gtn":
/*!*******************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses.page.ts ***!
  \*******************************************************/
/*! exports provided: MyCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesPage", function() { return MyCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-courses.page.html */ "Im0f");
/* harmony import */ var _my_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-courses.page.scss */ "Ts68");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file */ "hMac");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "wMzM");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");















let MyCoursesPage = class MyCoursesPage {
    constructor(route, courseService, testService, fileOpener, platform, loadingController, appService) {
        this.route = route;
        this.courseService = courseService;
        this.testService = testService;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.loadingController = loadingController;
        this.appService = appService;
        this.offset = 0;
        this.sub = [];
        this.myCourses = [];
        this.isLoading = false;
        this.player = null;
        this.isPlaying = false;
        this.getLang = localStorage.getItem('languageId');
    }
    ngOnInit() {
        this.appService.getVidoes('Courses', this.getLang).subscribe((response) => {
            var _a, _b;
            this.courseAudio = (_b = (_a = response['result']) === null || _a === void 0 ? void 0 : _a.genericAttributeMediaTranslations[0]) === null || _b === void 0 ? void 0 : _b.mediaPath;
        });
        this.getUserCourses();
    }
    getUserCourses() {
        this.isLoading = true;
        this.sub.push(this.courseService
            .getUserCourses('', this.offset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => {
            Object.entries(response);
            this.isLoading = false;
            this.totalLength = response['length'];
            return response['result'];
        }))
            .subscribe((res) => {
            if (this.myCourses.length == 0) {
                res.forEach((element) => {
                    var _a;
                    if (element.course.imagePath) {
                        element.course.imagePath = `${element.course.imagePath}`;
                    }
                    if ((_a = element.course.courseTranslations[0]) === null || _a === void 0 ? void 0 : _a.introVoicePath) {
                        element.course.courseTranslations[0].introVoicePath = `${element.course.courseTranslations[0].introVoicePath}`;
                    }
                    element.course.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                    element.course.audioElement.status = false;
                });
                this.myCourses = res;
            }
            else {
                res.forEach((element) => {
                    var _a;
                    if (element.course.imagePath) {
                        element.course.imagePath = `${element.course.imagePath}`;
                    }
                    if ((_a = element.course.courseTranslations[0]) === null || _a === void 0 ? void 0 : _a.introVoicePath) {
                        element.course.courseTranslations[0].introVoicePath = `${element.course.courseTranslations[0].introVoicePath}`;
                    }
                    element.course.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                    element.course.audioElement.status = false;
                    this.myCourses.push(element);
                });
            }
            this.offset++;
        }));
    }
    loadData(event) {
        if (this.myCourses.length < this.totalLength) {
            setTimeout(() => {
                this.getUserCourses();
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if (this.myCourses.length == 1000) {
                    event.target.disabled = true;
                }
            }, 500);
        }
        else {
            event.target.disabled = true;
        }
    }
    playIntroHTML(course) {
        // this.nativeAudio.preloadSimple(`intro${course.id}`, `${course.courseTranslations[0].introVoicePath}`).then(onSuccess, onError);
        // this.nativeAudio.play(`intro${course.id}`).then(onSuccess, onError);
        if (course.audioElement.status == false) {
            //stop all
            this.myCourses.forEach((element, index) => {
                if (element.course.audioElement.audio != null) {
                    element.course.audioElement.audio.pause();
                    element.course.audioElement.status = false;
                    //TODO destroy
                }
                else {
                    //TODO destroy
                }
            });
            if (course.audioElement.audio && course.audioElement.audio.paused) {
                course.audioElement.audio.play();
            }
            else {
                var audio = new Audio(`${course.courseTranslations[0].introVoicePath}`);
                course.audioElement.audio = audio;
                course.audioElement.audio.load();
                course.audioElement.audio.play();
            }
            course.audioElement.status = true;
        }
        else {
            //stop the the live one
            if (course.audioElement.audio != null) {
                course.audioElement.audio.pause();
                course.audioElement.status = false;
                //TODO destroy
            }
            else {
                //TODO destroy
            }
        }
    }
    // ** go to choose course material
    goToChooseCourseMaterial(courseId, userId) {
        this.route.navigate(['courses/tabs/choose-course-material', { courseId, userId }]);
    }
    downloadCertificate(courseId) {
        this.isLoading = true;
        this.testService.getCertificate(courseId)
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
                _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].writeFile(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download", courseId + "Certificate.pdf", new Blob([response]), {
                    replace: true,
                });
                this.fileOpener.open(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download/" + courseId + "Certificate.pdf", 'application/pdf')
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
    // ** Create Refresh whrn scroll down
    doRefresh(event) {
        this.offset = 0;
        this.myCourses = [];
        console.log('Begin async operation');
        this.getUserCourses();
        event.target.complete();
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        //   event.target.complete();
        // }, 2000);
    }
    startAudio(voicePath) {
        if (this.player && this.isPlaying == true) {
            this.player.stop();
            this.isPlaying = false;
        }
        else {
            this.player = new howler__WEBPACK_IMPORTED_MODULE_12__["Howl"]({
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
    ngOnDestroy() {
        this.sub.forEach(e => {
            e.unsubscribe();
        });
    }
    ionViewDidLeave() {
        if (this.player) {
            this.player.stop();
        }
        this.myCourses.forEach((element) => {
            if (element.course.audioElement) {
                if (element.course.audioElement.status == true) {
                    element.course.audioElement.audio.pause();
                    element.course.audioElement.status = false;
                }
            }
        });
    }
};
MyCoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_8__["CourseService"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"] }
];
MyCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-courses',
        template: _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyCoursesPage);



/***/ }),

/***/ "Im0f":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/my-courses/my-courses.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-grid class=\"img-course-intro\">\n    <ion-row>\n      <ion-col>\n        <div class=\"img-intro\">\n         <ion-img loading=\"lazy\" src=\"../../../assets/images/intro-screen-course.png\" alt=\"image-intro-course\"></ion-img>\n        </div>\n        <div class=\"icon-sound\" (click)=\"startAudio(courseAudio)\">\n          <div class=\"img-volume\">\n            <ion-img\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\">\n          </ion-img>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <!-- IOn Ref -->\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"chevron-down-circle-outline\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher>\n      <!-- Ion Ref -->\n\n        <ion-col *ngFor=\"let course of myCourses\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\">\n\n          <div class=\"my-course\">\n              <ion-img class=\"img-all-course\" loading=\"lazy\"  src=\"{{course.course.imagePath}}\"></ion-img>\n              <h3 class=\"ion-padding-top\"  color=\"primary\">\n                {{course.course.courseTranslations[0]?.title}}\n                <div *ngIf=\"course.userCourse.status == 4\" class=\"status\"> <b> Pending </b> </div>\n                <div *ngIf=\"course.userCourse.status == 2\" class=\"status\"> <b> Expired </b> </div>\n                <div *ngIf=\"course.userCourse.status == 3\" class=\"status\"> <b> Failed </b> </div>\n                <div *ngIf=\"course.userCourse.status == 5\">\n                  <ion-button\n                  (click)=\"goToChooseCourseMaterial(course.course.id, course.userCourse.courseId)\">\n                    View\n                  </ion-button>\n                </div>\n              </h3>\n            <div>\n\n              <div slot=\"end\" *ngIf=\"course.course.courseTranslations[0]?.introVoicePath\">\n                <div class=\"icon-sound-course\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\" [name]=\"!course.course.audioElement.status? 'play' : 'stop'\" (click)=\"playIntroHTML(course.course)\">\n                    </ion-icon>\n                  </div>\n              </div>\n\n              <div *ngIf=\"course.userCourse.status == 1\">\n                  <ion-text>Passed</ion-text>\n              </div>\n\n              <div class=\"certi\" *ngIf=\"course.userCourse.status == 1\">\n                <ion-button (click)=\"downloadCertificate(course.course.id)\"> Certificate\n                  <ion-icon name=\"download-outline\"></ion-icon>\n                  <ion-spinner *ngIf='isLoading' name=\"circles\"></ion-spinner> </ion-button>\n              </div>\n            </div>\n          </div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n");

/***/ }),

/***/ "Ts68":
/*!*********************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .icon-sound .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 30px;\n  height: 30px;\n}\n\n.my-course {\n  position: relative;\n  margin: 30px 0;\n  z-index: 0;\n}\n\n.my-course ion-img {\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 20px;\n  max-width: 90%;\n  height: 170px;\n  padding: 0;\n  margin: 0 auto;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n.my-course ion-button {\n  --background: var(--ion-color-second-app)!important;\n  --border-radius: 50px!important;\n  font-size: 13px !important;\n  font-weight: 500;\n  width: 60%;\n  height: 30px;\n  text-transform: none;\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  margin: auto;\n}\n\n.my-course h3 {\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: none;\n  background-color: #fff;\n  padding: 5px 0 0 0;\n  border-radius: 20px;\n  color: #000;\n  border: 2px solid #8AFA6F;\n  position: absolute;\n  bottom: -20px;\n  width: 85%;\n  margin: auto;\n  height: 60px;\n  left: 0;\n  right: 0;\n  line-height: 18px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.my-course .icon-sound-course {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  z-index: 20000000;\n  font-size: 25px;\n}\n\n.img-course-intro {\n  margin-bottom: 30px;\n}\n\n.img-course-intro ion-row {\n  justify-content: center;\n}\n\n.icon-sound {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin: auto;\n  inset: 0;\n}\n\nion-text {\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LWNvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDRTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUVFO0VBQ0UsbURBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBTUU7RUFDRSx1QkFBQTtBQUpKOztBQVFBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFMRjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBVkYiLCJmaWxlIjoibXktY291cnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0LWljb24tdmx1bWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm15LWNvdXJzZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIHotaW5kZXg6IDA7XG5cbiAgaW9uLWltZyB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCkhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4IDAgMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhBRkE2RjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjBweDtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmljb24tc291bmQtY291cnNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdGNzgxO1xuICAgIGJvcmRlcjogM3B4IGRvdHRlZCAjZmZmO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgei1pbmRleDogMjAwMDAwMDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxufVxuXG5cbi5pbWctY291cnNlLWludHJvIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBpb24tcm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uaWNvbi1zb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0Y3ODE7XG4gIGJvcmRlcjogM3B4IGRvdHRlZCAjZmZmO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgaW5zZXQ6IDA7XG5cbiAgLmltZy12b2x1bWUge1xuICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lXG4gIH1cbn1cblxuaW9uLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "dKzU":
/*!*****************************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyCoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesPageRoutingModule", function() { return MyCoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _my_courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-courses.page */ "5Gtn");




const routes = [
    {
        path: '',
        component: _my_courses_page__WEBPACK_IMPORTED_MODULE_3__["MyCoursesPage"]
    }
];
let MyCoursesPageRoutingModule = class MyCoursesPageRoutingModule {
};
MyCoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyCoursesPageRoutingModule);



/***/ }),

/***/ "ircu":
/*!*********************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses.module.ts ***!
  \*********************************************************/
/*! exports provided: MyCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesPageModule", function() { return MyCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _my_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-courses-routing.module */ "dKzU");
/* harmony import */ var _my_courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-courses.page */ "5Gtn");







let MyCoursesPageModule = class MyCoursesPageModule {
};
MyCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCoursesPageRoutingModule"]
        ],
        declarations: [_my_courses_page__WEBPACK_IMPORTED_MODULE_6__["MyCoursesPage"]]
    })
], MyCoursesPageModule);



/***/ })

}]);
//# sourceMappingURL=my-courses-my-courses-module.js.map