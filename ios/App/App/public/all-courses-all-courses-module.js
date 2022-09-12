(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-courses-all-courses-module"],{

/***/ "3p7e":
/*!*********************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.page.ts ***!
  \*********************************************************/
/*! exports provided: AllCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesPage", function() { return AllCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-courses.page.html */ "B+qD");
/* harmony import */ var _all_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-courses.page.scss */ "vPY/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");












let AllCoursesPage = class AllCoursesPage {
    constructor(route, navCtrl, courseService, platform, testService, appService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.courseService = courseService;
        this.platform = platform;
        this.testService = testService;
        this.appService = appService;
        this.sub = [];
        this.courses = [];
        this.isLoading = false;
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.getLang = localStorage.getItem('languageId');
        this.appService.getVidoes('Courses', this.getLang).subscribe((response) => {
            var _a, _b;
            this.courseAudio = (_b = (_a = response['result']) === null || _a === void 0 ? void 0 : _a.genericAttributeMediaTranslations[0]) === null || _b === void 0 ? void 0 : _b.mediaPath;
        });
        this.offset = 0;
        this.getCourses();
        this.testService.checkUserTest()
            .subscribe(response => {
            // console.log(response);
            if (response['isActive'] === true) {
                this.route.navigate(['/exercise/test-course',
                    { courseId: response['courseId'], testOffset: response['testApi'].offset, activeCourse: response['isActive'] }]);
            }
            else {
                return;
            }
        });
    }
    getCourse(id) {
        this.navCtrl.navigateBack(`/courses/tabs/${id}`);
    }
    getCourses() {
        this.isLoading = true;
        this.sub.push(this.courseService
            .getAllCourses('', this.offset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => {
            Object.entries(response);
            this.isLoading = false;
            this.totalLength = response['length'];
            return response['result'];
        }))
            .subscribe((res) => {
            if (this.courses.length == 0) {
                res.forEach((element) => {
                    var _a;
                    if (element.imagePath) {
                        element.imagePath = `${element.imagePath}`;
                    }
                    if ((_a = element.courseTranslations[0]) === null || _a === void 0 ? void 0 : _a.introVoicePath) {
                        element.courseTranslations[0].introVoicePath = `${element.courseTranslations[0].introVoicePath}`;
                    }
                    element.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                    element.audioElement.status = false;
                });
                this.courses = res;
            }
            else {
                res.forEach((element) => {
                    if (element.imagePath) {
                        element.imagePath = `${element.imagePath}`;
                    }
                    if (element.courseTranslations[0].introVoicePath) {
                        element.courseTranslations[0].introVoicePath = `${element.courseTranslations[0].introVoicePath}`;
                    }
                    element.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                    element.audioElement.status = false;
                    this.courses.push(element);
                });
            }
            this.offset++;
        }));
    }
    loadData(event) {
        if (this.courses.length < this.totalLength) {
            setTimeout(() => {
                this.getCourses();
                console.log('Done');
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if (this.courses.length == 1000) {
                    event.target.disabled = true;
                }
            }, 500);
        }
        else {
            event.target.disabled = true;
        }
    }
    playIntroHTML(course) {
        console.log(this.courses);
        // this.nativeAudio.preloadSimple(`intro${course.id}`, `${course.courseTranslations[0].introVoicePath}`).then(onSuccess, onError);
        // this.nativeAudio.play(`intro${course.id}`).then(onSuccess, onError);
        if (course.audioElement.status == false) {
            //stop all
            this.courses.forEach((element, index) => {
                if (element.audioElement.audio != null) {
                    element.audioElement.audio.pause();
                    element.audioElement.status = false;
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
                console.log(this.courses);
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
    startAudio(voicePath) {
        if (this.player && this.isPlaying == true) {
            this.player.stop();
            this.isPlaying = false;
        }
        else {
            this.player = new howler__WEBPACK_IMPORTED_MODULE_10__["Howl"]({
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
        this.courses.forEach((element) => {
            if (element.audioElement) {
                if (element.audioElement.status == true) {
                    element.audioElement.audio.pause();
                    element.audioElement.status = false;
                }
            }
        });
    }
};
AllCoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] }
];
AllCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-courses',
        template: _raw_loader_all_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllCoursesPage);

function onSuccess() {
    throw new Error('Function not implemented.');
}
function onError() {
    alert('error');
}


/***/ }),

/***/ "B+qD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/all-courses/all-courses.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n<ion-grid class=\"img-course-intro\">\n  <ion-row>\n    <ion-col>\n      <div class=\"img-intro\">\n        <ion-img loading=\"lazy\" src=\"../../../assets/images/intro-screen-course.png\" alt=\"image-intro-course\"></ion-img>\n      </div>\n      <div class=\"icon-sound\" (click)=\"startAudio(courseAudio)\">\n        <div class=\"img-volume\">\n          <ion-img\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\"  src=\"../../../assets/icon/Vector.png\">\n        </ion-img>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<app-category></app-category>\n\n<hr />\n\n  <ion-grid>\n    <div class=\"title ios-toolbar\">\n      <h3>\n        <img class=\"title-icon\" src=\"../../../assets/images/all-course-icon.png\" alt=\"all-courses-icon\" />\n        All courses\n      </h3>\n    </div>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor=\"let course of courses\" size-xs=\"6\" size-sm=\"6\" size-md=\"6\">\n        <div class=\"course\">\n          <ion-img  (click)=\"getCourse(course.id)\" class=\"img-all-course\" loading=\"lazy\" src=\"{{course.imagePath}}\"></ion-img>\n          <h3  (click)=\"getCourse(course.id)\" class=\"padding-top\"  color=\"primary\"> {{course.courseTranslations[0]?.title}} </h3>\n            <div *ngIf=\"course.courseTranslations[0]?.introVoicePath\">\n              <div class=\"icon-sound-course\">\n                  <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!course.audioElement.status? 'play' : 'stop'\" (click)=\"playIntroHTML(course)\">\n                  </ion-icon>\n                </div>\n              </div>\n            </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "H+hZ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/all-courses/category/category.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ios-toolbar category-title\">\n  <h3>\n    <img class=\"title-icon\" src=\"../../../assets/images/category-icon.png\" alt=\"all-courses-icon\" />\n    Courses by category\n  </h3>\n</div>\n\n<ion-grid>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-lg=\"9\" size-sm=\"12\" size=\"12\">\n      <div class=\"category\" *ngIf=\"categoriesCount > 0\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let cat of categories\">\n            <div class=\"category-item\" [routerLink]=\"['/courses/course-by-category/', cat.id]\">\n              <h1>{{ cat.categoryTranslations[0].name }}</h1>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n      <div class=\"no-data\" *ngIf=\"categoriesCount <= 0\"> No category now !! </div>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "OpkC":
/*!********************************************************************!*\
  !*** ./src/app/courses/all-courses/category/category.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.component.html */ "H+hZ");
/* harmony import */ var _category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component.scss */ "tO6c");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





let CategoryComponent = class CategoryComponent {
    constructor(courseService) {
        this.courseService = courseService;
        this.sub = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 4,
            scrollbar: true,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        };
    }
    ngOnInit() {
        this.sub.push(this.courseService.getCourseCategories(0, 10)
            .subscribe(response => {
            // console.log('category', response);
            this.categories = response['result'];
            this.categoriesCount = response['length'];
        }));
    }
    ngOnDestroy() {
        this.sub.forEach(el => {
            el.unsubscribe();
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] }
];
CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryComponent);



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

/***/ "fzkE":
/*!*******************************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AllCoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesPageRoutingModule", function() { return AllCoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _all_courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-courses.page */ "3p7e");




const routes = [
    {
        path: '',
        component: _all_courses_page__WEBPACK_IMPORTED_MODULE_3__["AllCoursesPage"]
    }
];
let AllCoursesPageRoutingModule = class AllCoursesPageRoutingModule {
};
AllCoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllCoursesPageRoutingModule);



/***/ }),

/***/ "tO6c":
/*!**********************************************************************!*\
  !*** ./src/app/courses/all-courses/category/category.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category-title {\n  background-color: #062F87;\n  text-align: center;\n  padding: 5px 0;\n}\n.category-title h3 {\n  font-size: 17px;\n  font-weight: 600;\n  color: #fff;\n  margin: 0;\n}\n.category .swiper-wrapper {\n  margin: 20px 0;\n}\n.category .category-item {\n  min-height: 60px;\n  background-color: #fff !important;\n  border: 1px solid rgba(204, 204, 204, 0.75);\n  padding: 0 20px !important;\n  margin: 20px 0 !important;\n  text-align: center !important;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n}\n.category .category-item:hover {\n  border-top-color: #003182;\n  box-shadow: 0px 30px 50px 0px rgba(0, 15, 56, 0.1), inset 0px 3px 0px 0px rgba(42, 109, 245, 0);\n}\n.category .category-item h1 {\n  color: #003182;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjtBQU1JO0VBQ0ksY0FBQTtBQUhSO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0VBR0EsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFHQSw0QkFBQTtBQU5SO0FBUVE7RUFDSSx5QkFBQTtFQUNBLCtGQUFBO0FBTlo7QUFTUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBaIiwiZmlsZSI6ImNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MkY4NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMDtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG4uY2F0ZWdvcnkge1xuICAgIC5zd2lwZXItd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cblxuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYig1MSA1MSA1MSAvIDEwJSk7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYig1MSA1MSA1MSAvIDEwJSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDQgMjA0IDIwNCAvIDc1JSk7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDIwcHggMCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlIDBzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMzE4MjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzMHB4IDUwcHggMHB4IHJnYigwIDE1IDU2IC8gMTAlKSwgaW5zZXQgMHB4IDNweCAwcHggMHB4IHJnYig0MiAxMDkgMjQ1IC8gMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMwMDMxODI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "u2BO":
/*!***********************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.module.ts ***!
  \***********************************************************/
/*! exports provided: AllCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesPageModule", function() { return AllCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _all_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-courses-routing.module */ "fzkE");
/* harmony import */ var _all_courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-courses.page */ "3p7e");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "OpkC");








let AllCoursesPageModule = class AllCoursesPageModule {
};
AllCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllCoursesPageRoutingModule"]
        ],
        declarations: [_all_courses_page__WEBPACK_IMPORTED_MODULE_6__["AllCoursesPage"], _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"]],
    })
], AllCoursesPageModule);



/***/ }),

/***/ "vPY/":
/*!***********************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-volume, .icon-sound .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 20px;\n  height: 20px;\n}\n\n.img-course-intro {\n  margin-bottom: 30px;\n}\n\n.img-course-intro ion-row {\n  justify-content: center;\n}\n\n.icon-sound {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin: auto;\n  inset: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FsbC1jb3Vyc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUNFO0VBQ0UsdUJBQUE7QUFDSjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBQUYiLCJmaWxlIjoiYWxsLWNvdXJzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZvbHVtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi5pbWctY291cnNlLWludHJvIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgaW9uLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmljb24tc291bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdGNzgxO1xuICBib3JkZXI6IDNweCBkb3R0ZWQgI2ZmZjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIGluc2V0OiAwO1xuXG4gIC5pbWctdm9sdW1lIHtcbiAgICBAZXh0ZW5kIC5leHQtaWNvbi12b2x1bWU7XG4gIH1cblxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=all-courses-all-courses-module.js.map