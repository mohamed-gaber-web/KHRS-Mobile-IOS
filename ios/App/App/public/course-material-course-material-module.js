(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-material-course-material-module"],{

/***/ "1Lfd":
/*!*****************************************************************!*\
  !*** ./src/app/courses/course-material/course-material.page.ts ***!
  \*****************************************************************/
/*! exports provided: CourseMaterialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialPage", function() { return CourseMaterialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_material_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-material.page.html */ "rKNE");
/* harmony import */ var _course_material_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-material.page.scss */ "ou0u");
/* harmony import */ var _shared_services_tracking_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/tracking-user.service */ "8qw9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_11__);












let CourseMaterialPage = class CourseMaterialPage {
    constructor(activatedRoute, router, courseService, route, storageService, authService, trackingService, toastController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.courseService = courseService;
        this.route = route;
        this.storageService = storageService;
        this.authService = authService;
        this.trackingService = trackingService;
        this.toastController = toastController;
        this.player = null;
        this.progress = 0;
        this.isPlaying = false;
        this.subs = [];
        this.isLoading = false;
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
        this.offset = 0;
        this.limit = 1;
        this.materialCourseLength = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
    }
    ngOnInit() {
        // ** user info
        this.userInfo = this.authService.getUser();
        this.getMaterialCourse();
        // * get query params [ offset ]
        this.activatedRoute.queryParams
            .subscribe(params => {
            this.offset = +params['offset'] | 0;
        });
    }
    // ** Get material courses
    getMaterialCourse() {
        this.isLoading = true;
        this.subs.push(this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => this.courseService.getCourseMaterial(+params.get('courseId'), this.offset, this.limit)))
            .subscribe((response) => {
            this.isLoading = false;
            this.materialCourseLength = response['length'];
            this.limit = response['limit'];
            this.courseMaterial = response['result'];
        }, (error) => {
            // console.log('exist error');
        }, () => {
            this.isLoading = false;
        }));
    }
    // ** Move to Next slide
    slideNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.player) {
                this.activeTrack = null;
                this.player.unload();
                this.player = null;
            }
            this.offset += 1;
            this.getMaterialCourse();
            this.slides.slideNext();
            if (this.offset === (this.materialCourseLength - 1)) {
                console.log(this.offset);
                var toast = yield this.toastController.create({
                    message: 'Material pages is finished !',
                    duration: 5000,
                    color: 'success',
                });
                toast.present();
                // this.router.navigate(['/courses/tabs/my-courses']);
            }
        });
    }
    // ** Move to previous slide
    slidePrev() {
        if (this.player) {
            this.activeTrack = null;
            this.player.unload();
            this.player = null;
        }
        this.offset -= 1;
        this.getMaterialCourse();
        this.slides.slidePrev();
    }
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_11__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
                this.updateProgress();
            },
            onend: () => { },
        });
        this.player.play();
    }
    toogleAudio(pause) {
        this.isPlaying = !pause;
        if (pause) {
            this.player.pause();
        }
        else {
            this.player.play();
        }
    }
    seek() {
        if (this.player) {
            let newValue = +this.range.value;
            let duration = this.player.duration();
            this.player.seek(duration * (newValue / 100));
        }
    }
    updateProgress() {
        if (this.player) {
            let seek = this.player.seek();
            this.progress = (seek / this.player.duration()) * 100 || 0;
            setTimeout(() => {
                this.updateProgress();
            }, 1000);
        }
    }
    // *** Am done today
    amDoneToday() {
        if (this.offset === 0) {
            return;
        }
        const endDate = new Date();
        this.subs.push(this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => this.trackingService.endTracking({
            courseId: +params.get('courseId'),
            limit: 1,
            offset: this.offset,
            type: 0,
            endDate
        }))).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('am done today', response);
            if (response['success'] === true) {
                // localStorage.setItem('courseMaterialOffset', JSON.stringify(this.offset))
                const toast = yield this.toastController.create({
                    message: `Your stoped in page ${this.offset}`,
                    duration: 4000,
                    position: 'top',
                    color: 'success'
                });
                toast.present();
            }
        })));
    }
    startFromZero() {
        // this.offset = 0;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { offset: 0 },
            queryParamsHandling: 'merge'
        });
        this.slides.slideTo(0);
    }
    ngOnDestroy() {
        this.subs.forEach((element) => {
            element.unsubscribe();
        });
    }
    doCheck() {
        let prom1 = this.slides.isBeginning();
        let prom2 = this.slides.isEnd();
        Promise.all([prom1, prom2]).then((data) => {
            data[0] ? (this.disablePrevBtn = true) : (this.disablePrevBtn = false);
            data[1] ? (this.disableNextBtn = true) : (this.disableNextBtn = false);
        });
    }
};
CourseMaterialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _shared_services_tracking_user_service__WEBPACK_IMPORTED_MODULE_3__["TrackingUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] }
];
CourseMaterialPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides',] }],
    range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['range', { static: false },] }]
};
CourseMaterialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-course-material',
        template: _raw_loader_course_material_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_material_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseMaterialPage);



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

/***/ "kp8m":
/*!*******************************************************************!*\
  !*** ./src/app/courses/course-material/course-material.module.ts ***!
  \*******************************************************************/
/*! exports provided: CourseMaterialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialPageModule", function() { return CourseMaterialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _course_material_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-material-routing.module */ "vt6l");
/* harmony import */ var _course_material_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-material.page */ "1Lfd");








let CourseMaterialPageModule = class CourseMaterialPageModule {
};
CourseMaterialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _course_material_routing_module__WEBPACK_IMPORTED_MODULE_6__["CourseMaterialPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_course_material_page__WEBPACK_IMPORTED_MODULE_7__["CourseMaterialPage"]]
    })
], CourseMaterialPageModule);



/***/ }),

/***/ "ou0u":
/*!*******************************************************************!*\
  !*** ./src/app/courses/course-material/course-material.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap\");\n/**\n * Swiper 6.8.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: August 23, 2021\n */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-container-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-container-rtl .swiper-button-next:after {\n  content: \"prev\";\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-container-rtl .swiper-button-prev:after {\n  content: \"next\";\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-button-next.swiper-button-white {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-button-next.swiper-button-black {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n:root {\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-container-cube .swiper-cube-shadow:before {\n  content: \"\";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/* header Top */\nion-icon {\n  font-size: 35px;\n}\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n.img-course-intro {\n  margin-bottom: 15px;\n}\n.img-course-intro .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 12px;\n}\n.icon-sound {\n  background-color: #A7F781;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  line-height: 53px;\n  margin: 0 auto;\n}\n.icon-sound ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-second-app);\n}\n.course__material .course__material-block {\n  height: 450px !important;\n  overflow-y: scroll;\n  margin-top: 20px;\n}\n.course__material .course__material-block ion-img.material-image {\n  border: 2px solid #e8e8e8;\n  width: 50%;\n  padding: 0;\n  margin: 0 auto 20px auto;\n}\n.slide-button ion-icon {\n  font-size: 22px;\n}\n.course-material-count {\n  text-align: center;\n  margin-top: 20px;\n}\n.course-material-count h4 {\n  color: #003182;\n  font-size: 14px;\n  font-weight: 400;\n}\n.course-material-count h4 b {\n  background-color: #A7F781;\n  padding: 8px 10px;\n  color: #003182;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZS1tYXRlcmlhbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVHQUFBO0FDQVI7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQ0UsMkJBQUE7RUFDQSw0c0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNDQTtFQUNFLDZCQUFBO0FEQ0Y7QUNDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FERUY7QUNBQTtFQUNFLHNCQUFBO0FER0Y7QUNEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QURJRjtBQ0ZBOztFQUVFLGlDQUFBO0FES0Y7QUNIQTtFQUNFLGVBQUE7QURNRjtBQ0pBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FET0Y7QUNMQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBRFFGO0FDTkE7RUFDRSxtQkFBQTtBRFNGO0FDUEE7RUFDRSxtQkFBQTtBRFVGO0FDUkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FEV0Y7QUNUQTtFQUNFLGtCQUFBO0FEWUY7QUNWQSxnQkFBQTtBQUNBOztFQUVFLFlBQUE7QURhRjtBQ1hBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBRGNGO0FDWkEsZUFBQTtBQUNBO0VBQ0UsbUJBQUE7QURlRjtBQ2JBOzs7Ozs7O0VBT0UsNEJBQUE7QURnQkY7QUNkQTs7OztFQUlFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBRGlCRjtBQ2ZBO0VBQ0UsZ0ZBQUE7QURrQkY7QUNoQkE7RUFDRSxpRkFBQTtBRG1CRjtBQ2pCQTtFQUNFLCtFQUFBO0FEb0JGO0FDbEJBO0VBQ0Usa0ZBQUE7QURxQkY7QUNuQkEsYUFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0FEc0JGO0FDcEJBO0VBQ0UsYUFBQTtBRHVCRjtBQ3JCQTtFQUNFLDhCQUFBO0FEd0JGO0FDdEJBO0VBQ0UsNkJBQUE7QUR5QkY7QUN2QkE7RUFDRSw2QkFBQTtBRDBCRjtBQ3hCQTtFQUNFLDhCQUFBO0VBQ0E7O0dBQUE7QUQ2QkY7QUN6QkE7O0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0RBQUE7RUFDQSxxQ0FBQTtFQUNBLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdFQUFBO0FENEJGO0FDMUJBOztFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUQ2QkY7QUMzQkE7O0VBRUUseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRDhCRjtBQzVCQTs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtBRCtCRjtBQzdCQTs7RUFFRSxlQUFBO0FEZ0NGO0FDOUJBOztFQUVFLFdBQUE7RUFDQSxVQUFBO0FEaUNGO0FDL0JBOztFQUVFLGVBQUE7QURrQ0Y7QUNoQ0E7O0VBRUUsa0NBQUE7QURtQ0Y7QUNqQ0E7O0VBRUUsa0NBQUE7QURvQ0Y7QUNsQ0E7RUFDRSxhQUFBO0FEcUNGO0FDbkNBO0VBQ0U7O0dBQUE7QUR3Q0Y7QUNwQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUR1Q0Y7QUNyQ0E7RUFDRSxVQUFBO0FEd0NGO0FDdENBLGtCQUFBO0FBQ0E7OztFQUdFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBRHlDRjtBQ3ZDQSxZQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUQwQ0Y7QUN4Q0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FEMkNGO0FDekNBO0VBQ0UsbUJBQUE7QUQ0Q0Y7QUMxQ0E7RUFDRSxtQkFBQTtBRDZDRjtBQzNDQTtFQUNFLHNCQUFBO0FEOENGO0FDNUNBO0VBQ0Usc0JBQUE7QUQrQ0Y7QUM3Q0E7RUFDRSxzQkFBQTtBRGdERjtBQzlDQTtFQUNFLHNCQUFBO0FEaURGO0FDL0NBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEa0RGO0FDaERBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNRLHFCQUFBO09BQUEsZ0JBQUE7QURtRFY7QUNqREE7RUFDRSxlQUFBO0FEb0RGO0FDbERBO0VBQ0Usd0JBQUE7QURxREY7QUNuREE7RUFDRSxVQUFBO0VBQ0EscUVBQUE7QURzREY7QUNwREE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FEdURGO0FDckRBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUR3REY7QUN0REE7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FEeURGO0FDdkRBO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtBRDBERjtBQ3hEQTtFQUNFLGFBQUE7QUQyREY7QUN6REE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBRDRERjtBQzFEQTtFQUNFLHVDQUFBO0FENkRGO0FDM0RBO0VBQ0Usd0NBQUE7QUQ4REY7QUM1REEsYUFBQTtBQUNBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBRCtERjtBQzdEQTtFQUNFLHFFQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBRGdFRjtBQzlEQTtFQUNFLDJCQUFBO0FEaUVGO0FDL0RBOztFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QURrRUY7QUNoRUE7O0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBRG1FRjtBQ2pFQTtFQUNFLGtDQUFBO0FEb0VGO0FDbEVBO0VBQ0Usa0NBQUE7QURxRUY7QUNuRUE7RUFDRSxhQUFBO0FEc0VGO0FDcEVBLGNBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FEdUVGO0FDckVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRHdFRjtBQ3RFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUR5RUY7QUN2RUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FEMEVGO0FDeEVBO0VBQ0UsWUFBQTtBRDJFRjtBQ3pFQTtFQUNFLGFBQUE7QUQ0RUY7QUMxRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQ2RUY7QUMzRUE7OztFQUdFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEOEVGO0FDNUVBO0VBQ0UsWUFBQTtBRCtFRjtBQzdFQSxjQUFBO0FBQ0E7RUFDRTs7R0FBQTtBRGtGRjtBQzlFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsMEVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FEaUZGO0FDL0VBO0VBQ0UsOEJBQUE7QURrRkY7QUNoRkE7RUFDRSw4QkFBQTtBRG1GRjtBQ2pGQTtFQUNFO0lBQ0UseUJBQUE7RURvRkY7QUFDRjtBQ2xGQSxTQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBRG9GRjtBQ2xGQTtFQUNFLG9DQUFBO0FEcUZGO0FDbkZBO0VBQ0Usb0JBQUE7RUFDQSw0QkFBQTtBRHNGRjtBQ3BGQTtFQUNFLG9CQUFBO0FEdUZGO0FDckZBOztFQUVFLG9CQUFBO0FEd0ZGO0FDdEZBO0VBQ0UsaUJBQUE7QUR5RkY7QUN2RkE7RUFDRSxvQkFBQTtFQUNBLG1DQUFBO0VBQ1EsMkJBQUE7RUFDUixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEMEZGO0FDeEZBO0VBQ0Usb0JBQUE7QUQyRkY7QUN6RkE7RUFDRSx3QkFBQTtBRDRGRjtBQzFGQTs7RUFFRSxvQkFBQTtBRDZGRjtBQzNGQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUQ4RkY7QUM1RkE7Ozs7RUFJRSxVQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtBRCtGVjtBQzdGQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEZ0dGO0FDOUZBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QURpR0Y7QUMvRkE7RUFDRSxpQkFBQTtBRGtHRjtBQ2hHQTtFQUNFLG9CQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtFQUNSLFVBQUE7QURtR0Y7QUNqR0E7RUFDRSxvQkFBQTtBRG9HRjtBQ2xHQTs7RUFFRSxvQkFBQTtBRHFHRjtBQ25HQTs7OztFQUlFLFVBQUE7RUFDQSxtQ0FBQTtFQUNRLDJCQUFBO0FEc0dWO0FBbm9CQSxlQUFBO0FBQ0E7RUFBVSxlQUFBO0FBdW9CVjtBQXJvQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBd29CRjtBQXBvQkE7RUFDRSxtQkFBQTtBQXVvQkY7QUFyb0JFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUF1b0JKO0FBbm9CQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXNvQkY7QUFwb0JFO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FBc29CSjtBQS9uQkU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrb0JKO0FBeG5CSTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQTBuQk47QUFsbkJFO0VBQ0UsZUFBQTtBQXFuQko7QUFobkJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQW1uQko7QUFqbkJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1uQk47QUFqbkJNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQW1uQlIiLCJmaWxlIjoiY291cnNlLW1hdGVyaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICd+c3dpcGVyL3N3aXBlci1idW5kbGUnO1xuXG5cbi8qIGhlYWRlciBUb3AgKi9cbmlvbi1pY29uIHtmb250LXNpemU6IDM1cHg7fVxuXG5pb24taGVhZGVyIGlvbi1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbi5pbWctY291cnNlLWludHJvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAuaW1nLXZvbHVtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTJweDtcbiAgfVxufVxuXG4uaWNvbi1zb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0Y3ODE7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgfVxuXG59XG5cbi5jb3Vyc2VfX21hdGVyaWFsIHtcblxuICAuY291cnNlX19tYXRlcmlhbC1ibG9jayB7XG4gICAgaGVpZ2h0OiA0NTBweCFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICBpb24tdGV4dCB7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyBmb250LXNpemU6IDE1cHg7XG4gICAgICAvLyBmb250LXdlaWdodDogNTAwO1xuICAgICAgLy8gbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIH1cblxuICAgIGlvbi1pbWcubWF0ZXJpYWwtaW1hZ2Uge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xuICAgIH1cblxuICB9XG5cbn1cblxuLnNsaWRlLWJ1dHRvbiB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxufVxuXG4uY291cnNlLW1hdGVyaWFsLWNvdW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIGg0IHtcbiAgICAgIGNvbG9yOiByZ2IoMCA0OSAxMzApO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBN0Y3ODE7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBjb2xvcjogcmdiKDAgNDkgMTMwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIH1cbiAgfVxufVxuXG4iLCIvKipcbiAqIFN3aXBlciA2LjguNFxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBBdWd1c3QgMjMsIDIwMjFcbiAqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdzd2lwZXItaWNvbnMnO1xuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuOnJvb3Qge1xuICAtLXN3aXBlci10aGVtZS1jb2xvcjogIzAwN2FmZjtcbn1cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cbiAgei1pbmRleDogMTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93ID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3ctY29sdW1uID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci1jb250YWluZXItdmVydGljYWwge1xuICB0b3VjaC1hY3Rpb246IHBhbi14O1xufVxuLnN3aXBlci1zbGlkZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cbi5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLyogQXV0byBIZWlnaHQgKi9cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcbn1cbi8qIDNEIEVmZmVjdHMgKi9cbi5zd2lwZXItY29udGFpbmVyLTNkIHtcbiAgcGVyc3BlY3RpdmU6IDEyMDBweDtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItd3JhcHBlcixcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLyogQ1NTIE1vZGUgKi9cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRm9yIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cbn1cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQgc3RhcnQ7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cbjpyb290IHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplOiA0NHB4O1xuICAvKlxuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogY2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDQ0ICogMjcpO1xuICBoZWlnaHQ6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDBweCAtICh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDIpKTtcbiAgei1pbmRleDogMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM1O1xuICBjdXJzb3I6IGF1dG87XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN3aXBlci1idXR0b24tcHJldjphZnRlcixcbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIge1xuICBmb250LWZhbWlseTogc3dpcGVyLWljb25zO1xuICBmb250LXNpemU6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtdmFyaWFudDogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogYXV0bztcbn1cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGNvbnRlbnQ6ICdwcmV2Jztcbn1cbi5zd2lwZXItYnV0dG9uLW5leHQsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcbiAgY29udGVudDogJ25leHQnO1xufVxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlIHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogI2ZmZmZmZjtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjayxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6ICMwMDAwMDA7XG59XG4uc3dpcGVyLWJ1dHRvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpyb290IHtcbiAgLypcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB6LWluZGV4OiAxMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuLyogQ29tbW9uIFN0eWxlcyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiBCdWxsZXRzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQtbmV4dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAwLjI7XG59XG5idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldDpvbmx5LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTUwJSwgMCk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDZweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDhweDtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgdG9wO1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDAgNHB4O1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyBsZWZ0O1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLXJ0bCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgcmlnaHQ7XG59XG4vKiBQcm9ncmVzcyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcixcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcixcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNmZmZmZmY7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sge1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiAjMDAwMDAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuLyogU2Nyb2xsYmFyICovXG4uc3dpcGVyLXNjcm9sbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxJTtcbiAgYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDUwO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDk4JTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1zY3JvbGxiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDogMSU7XG4gIHotaW5kZXg6IDUwO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDk4JTtcbn1cbi5zd2lwZXItc2Nyb2xsYmFyLWRyYWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWcge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uc3dpcGVyLXNjcm9sbGJhci1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zd2lwZXItem9vbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IGltZyxcbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBzdmcsXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gY2FudmFzIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnN3aXBlci1zbGlkZS16b29tZWQge1xuICBjdXJzb3I6IG1vdmU7XG59XG4vKiBQcmVsb2FkZXIgKi9cbjpyb290IHtcbiAgLypcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuLnN3aXBlci1sYXp5LXByZWxvYWRlciB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICBtYXJnaW4tdG9wOiAtMjFweDtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcbiAgYW5pbWF0aW9uOiBzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGUge1xuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLWxhenktcHJlbG9hZGVyLWJsYWNrIHtcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiAjMDAwO1xufVxuQGtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4vKiBhMTF5ICovXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLW5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTEwMDA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1wcmV2LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQgKyAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgei1pbmRleDogMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvdzpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZpbHRlcjogYmx1cig1MHB4KTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */");

/***/ }),

/***/ "rKNE":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/course-material/course-material.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <app-top-header></app-top-header>\n\n  \n  <div class=\"course-material-count\">\n    <h4> <b>  {{ offset }} - {{ materialCourseLength }} Pages </b>   </h4>\n  </div>\n  \n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n  \n  <ion-slides (ionSlideWillChange)=\"doCheck()\" #slides pager=\"false\" [options]=\"slideOpts\">\n    \n    <ion-slide *ngFor=\"let course of courseMaterial\" class=\"course__material\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"course__sound\" size-sm=\"12\" size-lg=\"6\" *ngIf=\"course.materialTranslations[0].voicePath\">\n            <div class=\"icon-sound\">\n              <div class=\"img-volume\">\n                <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"'play'\" (click)=\"startAudio(course.materialTranslations[0].voicePath)\">\n                </ion-icon>\n              </div>\n             </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\n            <div class=\"course__material-block\">\n              <ion-text class=\"material-text\" [innerHTML]=\"course.materialTranslations[0].description\" class=\"material-p\"> </ion-text>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\" size-lg=\"6\">\n                    <div class=\"video-inro\">\n                      <video *ngIf=\"course.materialTranslations[0].videoPath\" width=\"100%\" height=\"230\" controls>\n                        <source [src]='course.materialTranslations[0].videoPath' type=\"video/mp4\">\n                      </video>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"12\" size-lg=\"6\">\n                      <ion-img *ngIf=\"course.imagePath\" loading=\"lazy\" class=\"ion-padding-bottom material-image\" [src]=\"course.imagePath\"></ion-img>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center slide-button\">\n\n      <ion-col>\n        <ion-button *ngIf=\"offset > 0\" (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button [disabled]=\"offset === (materialCourseLength - 1)\" *ngIf=\"!disableNextBtn\" (click)=\"slideNext()\">  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"offset > 0\" (click)=\"amDoneToday()\"> Pause </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button *ngIf=\"offset !== 0\" (click)=\"startFromZero()\"> Start over </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-toolbar *ngIf=\"activeTrack\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-range #range [(ngModel)]=\"progress\" max=\"100\" color=\"success\" (touhend)=\"seek()\" (mouseup)=\"seek()\"></ion-range>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button fill=\"clear\" (click)=\"toogleAudio(false)\" *ngIf=\"!isPlaying\">\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"play\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" (click)=\"toogleAudio(true)\" *ngIf=\"isPlaying\" >\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"pause\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "vt6l":
/*!***************************************************************************!*\
  !*** ./src/app/courses/course-material/course-material-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CourseMaterialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialPageRoutingModule", function() { return CourseMaterialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _course_material_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-material.page */ "1Lfd");




const routes = [
    {
        path: '',
        component: _course_material_page__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialPage"]
    }
];
let CourseMaterialPageRoutingModule = class CourseMaterialPageRoutingModule {
};
CourseMaterialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseMaterialPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=course-material-course-material-module.js.map