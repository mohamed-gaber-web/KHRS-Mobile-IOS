(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "CKRj":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: TrainingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageModule", function() { return TrainingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-routing.module */ "zrNd");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training.page */ "ZD9I");







let TrainingPageModule = class TrainingPageModule {
};
TrainingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _training_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainingPageRoutingModule"],
        ],
        declarations: [_training_page__WEBPACK_IMPORTED_MODULE_6__["TrainingPage"]]
    })
], TrainingPageModule);



/***/ }),

/***/ "ZD9I":
/*!*******************************************!*\
  !*** ./src/app/training/training.page.ts ***!
  \*******************************************/
/*! exports provided: TrainingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPage", function() { return TrainingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_training_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./training.page.html */ "sPYe");
/* harmony import */ var _training_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training.page.scss */ "kzDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/storage.service */ "fbMX");








let TrainingPage = class TrainingPage {
    constructor(storageService, route, router, toastController, navController) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.chooseTraining = [
            {
                img: '../../assets/icon/puzzle.png',
                name: 'Puzzle Image',
                url: '/exercise/puzzle-image',
                exerciseId: 4,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            },
            {
                img: '../../assets/icon/abc-block.png',
                name: 'Puzzle Text',
                url: '/exercise/puzzle-text',
                exerciseId: 3,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            },
            {
                img: '../../assets/icon/notepad.png',
                name: 'Single Choice',
                url: '/exercise/single-choice',
                exerciseId: 1,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            },
            {
                img: '../../assets/icon/checklist.png',
                name: 'Multi Choice',
                url: '/exercise/multi-choice',
                exerciseId: 2,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            }
        ];
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        if (!this.route.snapshot.paramMap.get('courseId')) {
            this.router.navigate(["courses/tabs/my-courses"]);
        }
    }
    goToCatExercise(url, exerciseId, courseId) {
        this.router.navigate([url, { exerciseId, courseId }]);
        // this.navController.navigateRoot(url + ';' + exerciseId + ';' + exerciseId );
        // if(courseId === null || courseId === undefined || courseId === '') {
        //   this.errorMessage('please choose course ');
        //   this.router.navigate(['/courses/tabs/my-courses']);
        // }
    }
    errorMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                cssClass: 'ion-error',
                color: 'danger',
            });
            toast.present();
        });
    }
};
TrainingPage.ctorParameters = () => [
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
TrainingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-training',
        template: _raw_loader_training_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_training_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TrainingPage);



/***/ }),

/***/ "kzDT":
/*!*********************************************!*\
  !*** ./src/app/training/training.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .icon-sound .img-volume {\n  width: 24px;\n  height: 24px;\n}\n\n.img-course-intro {\n  margin-bottom: 30px;\n}\n\n.img-course-intro ion-row {\n  justify-content: center;\n}\n\n.icon-sound {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin: auto;\n  inset: 0;\n}\n\n/* header Top */\n\nion-icon {\n  font-size: 35px;\n}\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n/* end header top */\n\nion-tabs ion-icon {\n  color: #fff;\n  font-size: 22px;\n}\n\nion-tabs ion-label {\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding-top: 0;\n}\n\nion-button {\n  width: 53px;\n  height: 53px;\n  --background: #A7F781;\n  border: 1px solid #fff;\n}\n\nion-icon {\n  --color: var(--ion-color-second-app);\n  font-size: 20px;\n}\n\nion-tab-button.tab-selected ion-label {\n  color: #A7F781 !important;\n  font-weight: bold;\n}\n\nion-tab-button.tab-selected ion-icon {\n  color: #A7F781 !important;\n}\n\nh3.training-title {\n  font-size: 18px;\n  color: var(--ion-color-second-app);\n  font-weight: 600;\n  margin: 0 0 30px 0;\n  text-align: center;\n  text-transform: none;\n  background-color: #062F87;\n  color: #fff;\n  padding: 10px 0 16px 0;\n}\n\nh4 {\n  font-size: 20px;\n  color: var(--ion-color-second-app);\n  font-weight: 500;\n  text-align: center;\n  text-transform: none;\n  color: #062F87;\n}\n\n.col-block {\n  background-color: #fff;\n  -o-box-shadow: 2px 3px 5px 0px #0000001A;\n  box-shadow: 2px 3px 5px 0px #0000001A;\n  text-align: center;\n  margin: 10px auto;\n  max-width: 80%;\n  padding: 30px 0;\n  border-radius: 10px;\n  cursor: pointer;\n  border: 1px solid #8AFA6F;\n}\n\n.col-block ion-img {\n  width: 30px;\n  height: auto;\n  margin: 10px auto;\n}\n\n.col-block ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\nimg.exercise-title-icon {\n  width: 6%;\n  height: auto;\n  overflow: auto !important;\n}\n\nion-img.img-intro {\n  border: 2px solid #8AFA6F;\n  border-radius: 20px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RyYWluaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsdUJBQUE7QUFBSjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBREo7O0FBVUEsZUFBQTs7QUFDQTtFQUFVLGVBQUE7QUFQVjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFVQSxtQkFBQTs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVRGOztBQWFBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0FBVkY7O0FBZUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBWkY7O0FBZUE7RUFDRSx5QkFBQTtBQVpGOztBQWVBO0VBQ0ksZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVpKOztBQWVBO0VBQ0ksZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWVBO0VBQ0Usc0JBQUE7RUFHQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFaRjs7QUFjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFaSjs7QUFlRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYko7O0FBaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFkRjs7QUFpQkE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBZEo7O0FBaUJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZEoiLCJmaWxlIjoidHJhaW5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZsdW1lIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuXG4uaW1nLWNvdXJzZS1pbnRybyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgaW9uLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuICAuaWNvbi1zb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E3Rjc4MTtcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgI2ZmZjtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGluc2V0OiAwO1xuXG4gICAgLmltZy12b2x1bWUge1xuICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgfVxuXG4gIH1cblxuXG4vKiBoZWFkZXIgVG9wICovXG5pb24taWNvbiB7Zm9udC1zaXplOiAzNXB4O31cblxuaW9uLWhlYWRlciBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4vKiBlbmQgaGVhZGVyIHRvcCAqL1xuXG5pb24tdGFicyBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmlvbi10YWJzIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDBcbn1cblxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUzcHg7XG4gIGhlaWdodDogNTNweDtcbiAgLS1iYWNrZ3JvdW5kOiAjQTdGNzgxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuXG59XG5cbmlvbi1pY29uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNBN0Y3ODEhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6ICNBN0Y3ODEhaW1wb3J0YW50O1xufVxuXG5oMy50cmFpbmluZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjJGODc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAwIDE2cHggMDtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGNvbG9yOiAjMDYyRjg3O1xufVxuXG4uY29sLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggM3B4IDVweCAwcHggIzAwMDAwMDFBO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAzcHggNXB4IDBweCAjMDAwMDAwMUE7XG4gIC1vLWJveC1zaGFkb3c6IDJweCAzcHggNXB4IDBweCAjMDAwMDAwMUE7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IDBweCAjMDAwMDAwMUE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogODAlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhBRkE2RjtcblxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICBpb24tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uaW1nLWxhbmdhdWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5pbWcuZXhlcmNpc2UtdGl0bGUtaWNvbiB7XG4gICAgd2lkdGg6IDYlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24taW1nLmltZy1pbnRybyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhBRkE2RjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */");

/***/ }),

/***/ "sPYe":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/courses/tabs/all-courses\"> </ion-back-button>\n    </ion-buttons>\n\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n\n    <div class=\"img-profile\" slot=\"end\" routerLink=\"user-profile\">\n      <ion-avatar slot=\"end\">\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\n        <img loading=\"lazy\" *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\n        src=\"../../../assets/images/image profille (1).png\">\n      </ion-avatar>\n    </div>\n  </ion-toolbar>\n\n\n<!-- <ion-toolbar>\n  <ion-title>\n    start training\n  </ion-title>\n</ion-toolbar> -->\n\n<ion-content>\n\n  <ion-grid class=\"img-course-intro\">\n    <ion-row>\n      <ion-col size=\"10\" size-lg=\"4\">\n        <ion-img class=\"img-intro\" src=\"../../../assets/images/img-intro.png\"></ion-img>\n        <div class=\"icon-sound\">\n          <div class=\"img-volume\">\n            <ion-img\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\" src=\"../../../assets/icon/Vector.png\">\n          </ion-img>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <h3 class=\"training-title ion-text-center\">\n      <img class=\"exercise-title-icon\" src=\"../../../assets/images/exercise.png\" alt=\"exercise-icon\" />\n        Exercise\n    </h3>\n    <h4> Please choose exercise </h4>\n    <ion-row\n\n     class=\"ion-align-self-center\">\n      <ion-col\n        *ngFor=\"let item of chooseTraining\" size=\"6\"\n        (click)=\"goToCatExercise(item.url, item.exerciseId, item.courseId)\">\n\n        <div class=\"col-block\">\n          <ion-img [src]=\"item.img\"></ion-img>\n          <ion-text><a> {{item.name}} </a></ion-text>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "zrNd":
/*!*****************************************************!*\
  !*** ./src/app/training/training-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrainingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageRoutingModule", function() { return TrainingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training.page */ "ZD9I");




const routes = [
    {
        path: '',
        component: _training_page__WEBPACK_IMPORTED_MODULE_3__["TrainingPage"]
    },
    {
        path: 'single-choice',
        loadChildren: () => Promise.all(/*! import() | single-choice-single-choice-module */[__webpack_require__.e("common"), __webpack_require__.e("single-choice-single-choice-module")]).then(__webpack_require__.bind(null, /*! ./single-choice/single-choice.module */ "crrd")).then(m => m.SingleChoicePageModule)
    },
    {
        path: 'multi-choice',
        loadChildren: () => Promise.all(/*! import() | multi-choice-multi-choice-module */[__webpack_require__.e("common"), __webpack_require__.e("multi-choice-multi-choice-module")]).then(__webpack_require__.bind(null, /*! ./multi-choice/multi-choice.module */ "fQ6p")).then(m => m.MultiChoicePageModule)
    },
    {
        path: 'puzzle-text',
        loadChildren: () => Promise.all(/*! import() | puzzle-text-puzzle-text-module */[__webpack_require__.e("default~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-module~test-course-test-course-module"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module~sign-up-sign-up-module"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("common"), __webpack_require__.e("puzzle-text-puzzle-text-module")]).then(__webpack_require__.bind(null, /*! ./puzzle-text/puzzle-text.module */ "TMC7")).then(m => m.PuzzleTextPageModule)
    },
    {
        path: 'puzzle-image',
        loadChildren: () => Promise.all(/*! import() | puzzle-image-puzzle-image-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~068b0c45"), __webpack_require__.e("default~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-module~test-course-test-course-module"), __webpack_require__.e("common"), __webpack_require__.e("puzzle-image-puzzle-image-module")]).then(__webpack_require__.bind(null, /*! ./puzzle-image/puzzle-image.module */ "PFl2")).then(m => m.PuzzleImagePageModule)
    },
    {
        path: 'test-course',
        loadChildren: () => Promise.all(/*! import() | test-course-test-course-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~068b0c45"), __webpack_require__.e("default~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-module~test-course-test-course-module"), __webpack_require__.e("common"), __webpack_require__.e("test-course-test-course-module")]).then(__webpack_require__.bind(null, /*! ./test-course/test-course.module */ "MrdW")).then(m => m.TestCoursePageModule)
    },
    {
        path: 'finished-test',
        loadChildren: () => __webpack_require__.e(/*! import() | finished-test-finished-test-module */ "finished-test-finished-test-module").then(__webpack_require__.bind(null, /*! ./finished-test/finished-test.module */ "3KrB")).then(m => m.FinishedTestPageModule)
    },
];
let TrainingPageRoutingModule = class TrainingPageRoutingModule {
};
TrainingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=training-training-module.js.map