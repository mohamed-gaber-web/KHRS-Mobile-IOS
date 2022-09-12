(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-course-material-choose-course-material-module"],{

/***/ "9vDE":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/choose-course-material/course-rating/course-rating/course-rating.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rating\">\n  <h3> Rate </h3>\n  <p> {{ courseName }} </p>\n  <div class=\"add-rate\">\n    <div><ngb-rating style=\"color: #FFCC26; font-size: 50px;\" [(rate)]=\"rateObject.rate\" [max]=\"5\"></ngb-rating></div>\n    <textarea class=\"form-control\" type=\"text\" name=\"comment\" [(ngModel)]=\"rateObject.comment\" placeholder=\"add feedback\"></textarea>\n\n    <!-- {{ rateObject.rate }} -->\n    <button class=\"btn btn-primary\" (click)=\"addUserCourserate()\"> Submit </button>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "DLKj":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ChooseCourseMaterialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCourseMaterialPageModule", function() { return ChooseCourseMaterialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _choose_course_material_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-course-material-routing.module */ "jVIS");
/* harmony import */ var _choose_course_material_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-course-material.page */ "TUjO");
/* harmony import */ var _course_rating_course_rating_course_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-rating/course-rating/course-rating.component */ "T7Yc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





let ChooseCourseMaterialPageModule = class ChooseCourseMaterialPageModule {
};
ChooseCourseMaterialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_course_material_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseCourseMaterialPageRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ],
        entryComponents: [_course_rating_course_rating_course_rating_component__WEBPACK_IMPORTED_MODULE_7__["CourseRatingComponent"]],
        declarations: [_choose_course_material_page__WEBPACK_IMPORTED_MODULE_6__["ChooseCourseMaterialPage"], _course_rating_course_rating_course_rating_component__WEBPACK_IMPORTED_MODULE_7__["CourseRatingComponent"]]
    })
], ChooseCourseMaterialPageModule);



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

/***/ "T7Yc":
/*!*******************************************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/course-rating/course-rating/course-rating.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CourseRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRatingComponent", function() { return CourseRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_rating_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-rating.component.html */ "9vDE");
/* harmony import */ var _course_rating_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-rating.component.scss */ "zhTf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






let CourseRatingComponent = class CourseRatingComponent {
    constructor(courseService, router) {
        this.courseService = courseService;
        this.router = router;
        this.subs = [];
    }
    ngOnInit() {
        // console.log(this.courseIdRate)
        this.rateObject = {
            courseId: this.courseIdRate,
            rate: 0,
            comment: ''
        };
    }
    addUserCourserate() {
        this.subs.push(this.courseService.createRatingService(this.rateObject)
            .subscribe(response => {
            console.log(this.rateObject);
            console.log(response);
            this.resultRating = response['success'];
            if (this.resultRating === true) {
                this.router.navigateByUrl('/thanks-rating');
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
};
CourseRatingComponent.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CourseRatingComponent.propDecorators = {
    courseIdRate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    courseName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['courseName',] }]
};
CourseRatingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-course-rating',
        template: _raw_loader_course_rating_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_rating_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseRatingComponent);



/***/ }),

/***/ "TUjO":
/*!*******************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ChooseCourseMaterialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCourseMaterialPage", function() { return ChooseCourseMaterialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_course_material_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-course-material.page.html */ "w9uU");
/* harmony import */ var _choose_course_material_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-course-material.page.scss */ "dikw");
/* harmony import */ var _shared_services_tracking_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/tracking-user.service */ "8qw9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");









let ChooseCourseMaterialPage = class ChooseCourseMaterialPage {
    constructor(courseService, route, router, alertController, trackingService, modalCtrl) {
        this.courseService = courseService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.trackingService = trackingService;
        this.modalCtrl = modalCtrl;
        this.subs = [];
        this.isLoading = false;
        this.offset = 0;
        this.isOpen = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.courseId = JSON.parse(this.route.snapshot.paramMap.get('courseId'));
        this.redOffset = this.route.snapshot.paramMap.get('testOffset');
        this.offset = JSON.parse(localStorage.getItem('courseMaterialOffset'));
        this.subs.push(this.courseService.getUserCoursesDetails(this.courseId)
            .subscribe(response => {
            if (response['success'] === false) {
                this.checkCourseData = false;
                this.isLoading = false;
                return;
            }
            this.isLoading = false;
            this.userCourseDetails = response['result'].userCourse;
            let startDate = new Date(this.userCourseDetails['startDate']);
            let endDate = new Date(this.userCourseDetails['endDate']);
            let date = endDate.getTime() - startDate.getTime();
            this.validCourse = date / (1000 * 3600 * 24);
        }), this.courseService.getCoursesDetails(this.courseId)
            .subscribe(response => {
            if (response['success'] === false) {
                this.checkCourseData = false;
                return;
            }
            this.isLoading = false;
            this.CourseDetails = response['result'];
            // console.log(this.CourseDetails.status);
        }));
        this.getUserOffset(this.courseId);
    }
    // ** Send course id to exercise page
    sendIdToExercisePage() {
        this.router.navigate(['/exercise', { courseId: this.courseId }]);
    }
    // ** Send course id to final test page_event
    sendIdToFinalTestPage() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'sure you want start the test?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'start',
                        handler: () => {
                            this.router.navigate(['/exercise/test-course', { courseId: this.courseId }]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getUserOffset(course_ID) {
        this.trackingService.getAllUser(0, 10)
            .subscribe(r => {
            // console.log("resssss",r['result']);
            r['result'].forEach(element => {
                if (element.courseId === course_ID) {
                    this.offset = element.offset;
                    // console.log('yes',this.offset)
                }
                else if (element.courseId !== course_ID) {
                    // console.log("no",this.offset)
                }
            });
        });
    }
    openCourseDetails(ofst) {
        this.router.navigate([`courses/course-material/${this.courseId}`, { ofst }]);
    }
    // ** open course rating component
    toggleModal() {
        this.isOpen = true;
    }
    closeModal() {
        this.isOpen = false;
    }
    ngOnDestroy() {
        this.subs.forEach(element => element.unsubscribe());
    }
    startAudio(x) { }
};
ChooseCourseMaterialPage.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _shared_services_tracking_user_service__WEBPACK_IMPORTED_MODULE_3__["TrackingUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
ChooseCourseMaterialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-choose-course-material',
        template: _raw_loader_choose_course_material_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_course_material_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseCourseMaterialPage);



/***/ }),

/***/ "dikw":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2#title {\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: none;\n  text-align: center;\n  margin: 15px auto;\n  color: var(--ion-color-second-app);\n}\n\n.course-date ion-item {\n  margin: 0 !important;\n}\n\nion-item {\n  margin: 10px 0 !important;\n  padding: 0 !important;\n}\n\n.icon-valid {\n  width: 30px;\n  height: 30px;\n  line-height: 39px;\n  background-color: var(--ion-color-second-app);\n  text-align: center;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.icon-valid ion-icon {\n  color: #fff;\n  font-size: 21px;\n}\n\nion-label {\n  font-size: 16px;\n  font-weight: 500;\n  --color: var(--ion-color-second-app);\n}\n\n.btn {\n  margin: 20px 0;\n}\n\n.btn ion-button {\n  margin: 10px 0;\n}\n\nion-spinner {\n  margin: auto;\n  text-align: center;\n  width: 50%;\n  height: 100%;\n  display: flex;\n}\n\nvideo {\n  padding: 0 !important;\n  margin-top: 10px;\n}\n\nion-img.course-details_img {\n  border: 2px solid var(--ion-color-second-app);\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.desc {\n  text-align: center;\n  font-size: 14px;\n  padding: 0 10px;\n  font-weight: 500;\n  line-height: 25px;\n}\n\n.sound-inro {\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.sound-inro .img-person img {\n  width: 80%;\n  height: auto;\n}\n\n.sound-inro .img-volume ion-img {\n  max-width: 45px;\n  width: 45px;\n}\n\n.sound-inro img {\n  max-width: 80px;\n  height: auto;\n}\n\n.valid {\n  border: 2px solid #8AFA6F;\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  width: 70%;\n}\n\nimg.img-icon {\n  width: 33px;\n  margin: 0;\n  padding: 0 5px 0 0;\n  height: auto;\n}\n\n.overlay {\n  width: 80%;\n  height: 500px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #EBFFE6;\n  border: 6px solid #8AFA6F;\n  border-radius: 15px;\n}\n\n.close {\n  position: absolute;\n  right: 0;\n  float: right;\n}\n\n.close ion-icon {\n  font-size: 40px;\n}\n\n.show {\n  margin-top: 0;\n  transition: all 0.4s ease-in-out;\n}\n\n.hide {\n  margin-top: 700px;\n  transition: all 0.4s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nob29zZS1jb3Vyc2UtbWF0ZXJpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ047O0FBSUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQURKOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUdFO0VBQ0UsY0FBQTtBQURKOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBTE47O0FBVUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVJOOztBQVlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFWSjs7QUFnQkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFiSjs7QUFnQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQWJGOztBQWVFO0VBQ0UsZUFBQTtBQWJKOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQWRGOztBQWlCQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUFkRiIsImZpbGUiOiJjaG9vc2UtY291cnNlLW1hdGVyaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyI3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbn1cblxuLmNvdXJzZS1kYXRlIGlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDEwcHggMCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmljb24tdmFsaWQge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB9XG5cbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB9XG5cblxuLmJ0biB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxufVxuXG5pb24tc3Bpbm5lcntcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxudmlkZW8ge1xuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWltZy5jb3Vyc2UtZGV0YWlsc19pbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuXG4uZGVzYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uc291bmQtaW5ybyB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuaW1nLXBlcnNvbiB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmltZy12b2x1bWUge1xuICAgIGlvbi1pbWcge1xuICAgICAgbWF4LXdpZHRoOiA0NXB4O1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6ODBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxufVxuXG5cbi52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4QUZBNkY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuaW1nLmltZy1pY29uIHtcbiAgICB3aWR0aDogMzNweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCA1cHggMCAwO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLm92ZXJsYXkge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGRkU2O1xuICBib3JkZXI6IDZweCBzb2xpZCAjOEFGQTZGO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4uc2hvdyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uaGlkZSB7XG4gIG1hcmdpbi10b3A6IDcwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "jVIS":
/*!*****************************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChooseCourseMaterialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCourseMaterialPageRoutingModule", function() { return ChooseCourseMaterialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _choose_course_material_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-course-material.page */ "TUjO");




const routes = [
    {
        path: '',
        component: _choose_course_material_page__WEBPACK_IMPORTED_MODULE_3__["ChooseCourseMaterialPage"]
    }
];
let ChooseCourseMaterialPageRoutingModule = class ChooseCourseMaterialPageRoutingModule {
};
ChooseCourseMaterialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseCourseMaterialPageRoutingModule);



/***/ }),

/***/ "w9uU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/choose-course-material/choose-course-material.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n  <div>\n    <ion-grid *ngIf=\"CourseDetails\">\n      <ion-row>\n        <h2 id=\"title\" class=\"font-title-desktop ion-text-center\"> {{ CourseDetails.courseTranslations[0].title }} </h2>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"CourseDetails\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"3\">\n          <div *ngIf=\"CourseDetails.courseTranslations[0]?.introVoicePath\" class=\"sound-inro\">\n            <div class=\"img-person\">\n              <img class=\"intro-logo\" src=\"../../assets/images/char-person.png\" />\n            </div>\n          <div class=\"icon-sound\">\n            <div class=\"img-volume\">\n              <ion-img\n              class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\"\n              (click)=\"startAudio(CourseDetails.courseTranslations[0]?.introVoicePath)\" src=\"../../../assets/icon/Vector.png\">\n            </ion-img>\n            </div>\n          </div>\n        </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid *ngIf=\"CourseDetails\">\n      <ion-row class=\"ion-justify-content-center ion-padding-top\">\n        <ion-col size-sm=\"8\" size-xs=\"8\">\n          <ion-img class=\"course-details_img\" loading=\"lazy\" [src]=\"CourseDetails.imagePath\"></ion-img>\n        </ion-col>\n\n          <ion-grid>\n            <ion-row class=\"valid\">\n              <ion-col>\n                <ion-list class=\"course-date\">\n                  <ion-item class=\"time-valid\" lines=\"none\">\n                    <div class=\"icon-valid\">\n                      <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\n                    </div>\n                    <ion-label *ngIf=\"userCourseDetails\" color=\"primary\"> <strong> From: </strong>\n                      {{ userCourseDetails['startDate'] | date }}\n                    </ion-label>\n                  </ion-item>\n\n                  <ion-item class=\"time-valid\" lines=\"none\">\n                    <div class=\"icon-valid\">\n                      <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\n                    </div>\n                    <ion-label *ngIf=\"userCourseDetails\" color=\"primary\"> <strong> To: </strong>\n                      {{ userCourseDetails['endDate'] | date }}\n                    </ion-label>\n                  </ion-item>\n\n                  <ion-item class=\"time-valid\" lines=\"none\">\n                    <div class=\"icon-valid\">\n                      <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\n                    </div>\n                    <ion-label color=\"primary\"> <strong> Valid For: </strong>\n                      {{ validCourse }} Day\n                    </ion-label>\n                  </ion-item>\n                </ion-list>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        <ion-col\n          *ngIf=\"CourseDetails.courseTranslations[0].description !== null \"\n          class=\"ion-margin-top\" size=\"12\" size-md=\"8\" size-lg=\"7\">\n          <div class=\"desc\">\n            <ion-text>\n              {{ CourseDetails.courseTranslations[0].description }}\n            </ion-text>\n          </div>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"video-inro\" *ngIf=\"CourseDetails\">\n            <video *ngIf=\"CourseDetails?.courseTranslations[0]?.introVideoPath\" width=\"100%\" height=\"230\" controls>\n              <source [src]=\"CourseDetails.courseTranslations[0].introVideoPath\" type=\"video/mp4\">\n            </video>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"8\">\n          <div *ngIf=\"CourseDetails\">\n            <ion-button\n              [routerLink]=\"['/courses/course-material',\n              CourseDetails.courseTranslations[0].courseId]\" [queryParams]=\"{offset: offset}\" routerDirection=\"root\">\n                <img class=\"img-icon\" src=\"../../../assets/images/material.png\" alt=\"material\" />\n                Material\n            </ion-button>\n            <ion-button (click)=\"sendIdToExercisePage()\">\n              <img class=\"img-icon\" src=\"../../../assets/images/exercise-icon.png\" alt=\"exercise\" /> Exercise </ion-button>\n            <ion-button *ngIf=\"CourseDetails.status !== 1\" (click)=\"sendIdToFinalTestPage()\">\n                <img class=\"img-icon\" src=\"../../../assets/images/final-test.png\" alt=\"final test\" />\n                Final Test\n            </ion-button>\n\n            <!-- *ngIf=\"CourseDetails.status === 1\" -->\n\n            <ion-button *ngIf=\"CourseDetails.status === 1\" (click)=\"toggleModal()\">\n                <img class=\"img-icon\" src=\"../../../assets/images/rating.png\" alt=\"rating\" />\n                Rating\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"no-result\" *ngIf=\"checkCourseData === false\">\n    <img src=\"../../../../assets/images/sorry.png\" alt=\"\" loading=\"lazy\" />\n    <p> There is no data  </p>\n  </div>\n\n<ion-grid *ngIf=\"CourseDetails\">\n    <div [ngClass]=\"!isOpen ? 'overlay hide' : 'overlay show' \">\n      <div class=\"close\" (click)=\"closeModal()\"> <ion-icon name=\"close-circle\"></ion-icon> </div>\n      <app-course-rating [courseName]=\"CourseDetails.courseTranslations[0].title\" [courseIdRate]=\"courseId\"></app-course-rating>\n    </div>\n</ion-grid>\n\n</ion-content>\n\n");

/***/ }),

/***/ "zhTf":
/*!*********************************************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/course-rating/course-rating/course-rating.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rating {\n  text-align: center;\n  padding-top: 40px;\n}\n.rating h3 {\n  font-weight: 900;\n  font-size: 26px;\n}\n.rating p {\n  font-size: 16px;\n  width: 60%;\n  line-height: 30px;\n  margin: 0 auto;\n  font-weight: 500;\n  padding-top: 10px;\n}\n.rating .add-rate {\n  margin: 40px 0;\n}\n.rating .add-rate button {\n  background-color: #062F87;\n  font-size: 18px;\n  font-weight: 700;\n  border-radius: 15px;\n  margin-top: 30px;\n  padding: 10px 20px;\n}\nspan {\n  font-size: 60px !important;\n  color: #ffcc26 !important;\n}\ntextarea.form-control {\n  width: 90%;\n  margin: 20px auto;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBR0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUROO0FBTUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBSEo7QUFPQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFKRiIsImZpbGUiOiJjb3Vyc2UtcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cbiAgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC5hZGQtcmF0ZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MkY4NztcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG4gIH1cbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmNjMjYgIWltcG9ydGFudDtcbn1cblxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=choose-course-material-choose-course-material-module.js.map