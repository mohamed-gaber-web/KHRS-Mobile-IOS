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
        if (this.player) {
            this.activeTrack = null;
            this.player.unload();
            this.player = null;
        }
        this.offset += 1;
        this.getMaterialCourse();
        this.slides.slideNext();
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap\");\n/**\n * Swiper 6.8.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: August 23, 2021\n */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-container-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-container-rtl .swiper-button-next:after {\n  content: \"prev\";\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-container-rtl .swiper-button-prev:after {\n  content: \"next\";\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-button-next.swiper-button-white {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-button-next.swiper-button-black {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n:root {\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-container-cube .swiper-cube-shadow:before {\n  content: \"\";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/* header Top */\nion-icon {\n  font-size: 35px;\n}\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n.img-course-intro {\n  margin-bottom: 15px;\n}\n.img-course-intro .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 12px;\n}\n.icon-sound {\n  background-color: #A7F781;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  line-height: 53px;\n  margin: 0 auto;\n}\n.icon-sound ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-second-app);\n}\n.course__material .course__material-block {\n  height: 450px !important;\n  overflow-y: scroll;\n  margin-top: 20px;\n}\n.course__material .course__material-block ion-img.material-image {\n  border: 2px solid #e8e8e8;\n  width: 50%;\n  padding: 0;\n  margin: 0 auto 20px auto;\n}\n.slide-button ion-icon {\n  font-size: 22px;\n}\n.course-material-count {\n  text-align: center;\n  margin-top: 20px;\n}\n.course-material-count h4 {\n  color: #003182;\n  font-size: 14px;\n  font-weight: 400;\n}\n.course-material-count h4 b {\n  background-color: #21b944;\n  padding: 8px 10px;\n  color: white;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZS1tYXRlcmlhbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVHQUFBO0FDQVI7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQ0UsMkJBQUE7RUFDQSw0c0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNDQTtFQUNFLDZCQUFBO0FEQ0Y7QUNDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FERUY7QUNBQTtFQUNFLHNCQUFBO0FER0Y7QUNEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QURJRjtBQ0ZBOztFQUVFLGlDQUFBO0FES0Y7QUNIQTtFQUNFLGVBQUE7QURNRjtBQ0pBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FET0Y7QUNMQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBRFFGO0FDTkE7RUFDRSxtQkFBQTtBRFNGO0FDUEE7RUFDRSxtQkFBQTtBRFVGO0FDUkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FEV0Y7QUNUQTtFQUNFLGtCQUFBO0FEWUY7QUNWQSxnQkFBQTtBQUNBOztFQUVFLFlBQUE7QURhRjtBQ1hBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBRGNGO0FDWkEsZUFBQTtBQUNBO0VBQ0UsbUJBQUE7QURlRjtBQ2JBOzs7Ozs7O0VBT0UsNEJBQUE7QURnQkY7QUNkQTs7OztFQUlFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBRGlCRjtBQ2ZB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RjtBQXBvQkE7RUFDRSxtQkFBQTtBQXVvQkY7QUFyb0JFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUF1b0JKO0FBbm9CQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXNvQkY7QUFwb0JFO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FBc29CSjtBQS9uQkU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrb0JKO0FBeG5CSTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQTBuQk47QUFsbkJFO0VBQ0UsZUFBQTtBQXFuQko7QUFobkJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQW1uQko7QUFqbkJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1uQk47QUFqbkJNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQW1uQlIiLCJmaWxlIjoiY291cnNlLW1hdGVyaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICd+c3dpcGVyL3N3aXBlci1idW5kbGUnO1xuXG5cbi8qIGhlYWRlciBUb3AgKi9cbmlvbi1pY29uIHtmb250LXNpemU6IDM1cHg7fVxuXG5pb24taGVhZGVyIGlvbi1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbi5pbWctY291cnNlLWludHJvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAuaW1nLXZvbHVtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTJweDtcbiAgfVxufVxuXG4uaWNvbi1zb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0Y3ODE7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgfVxuXG59XG5cbi5jb3Vyc2VfX21hdGVyaWFsIHtcblxuICAuY291cnNlX19tYXRlcmlhbC1ibG9jayB7XG4gICAgaGVpZ2h0OiA0NTBweCFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICBpb24tdGV4dCB7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyBmb250LXNpemU6IDE1cHg7XG4gICAgICAvLyBmb250LXdlaWdodDogNTAwO1xuICAgICAgLy8gbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIH1cblxuICAgIGlvbi1pbWcubWF0ZXJpYWwtaW1hZ2Uge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xuICAgIH1cblxuICB9XG5cbn1cblxuLnNsaWRlLWJ1dHRvbiB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxufVxuXG4uY291cnNlLW1hdGVyaWFsLWNvdW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIGg0IHtcbiAgICAgIGNvbG9yOiByZ2IoMCA0OSAxMzApO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMyAxODUgNjgpO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICB9XG4gIH1cbn1cblxuIiwiLyoqXG4gKiBTd2lwZXIgNi44LjRcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjEgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogQXVndXN0IDIzLCAyMDIxXG4gKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnc3dpcGVyLWljb25zJztcbiAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbjpyb290IHtcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICMwMDdhZmY7XG59XG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93LWNvbHVtbiA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cy5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbn1cbi5zd2lwZXItc2xpZGUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi8qIEF1dG8gSGVpZ2h0ICovXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0LFxuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBoZWlnaHQ7XG59XG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXdyYXBwZXIsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZvciBGaXJlZm94ICovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXG59XG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG59XG46cm9vdCB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTogNDRweDtcbiAgLypcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkgLyA0NCAqIDI3KTtcbiAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgbWFyZ2luLXRvcDogY2FsYygwcHggLSAodmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkgLyAyKSk7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zNTtcbiAgY3Vyc29yOiBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IHN3aXBlci1pY29ucztcbiAgZm9udC1zaXplOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXZhcmlhbnQ6IGluaXRpYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IGF1dG87XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyLFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIge1xuICBjb250ZW50OiAncHJldic7XG59XG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICByaWdodDogMTBweDtcbiAgbGVmdDogYXV0bztcbn1cbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gIGNvbnRlbnQ6ICduZXh0Jztcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi13aGl0ZSB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6ICNmZmZmZmY7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tYmxhY2sge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjMDAwMDAwO1xufVxuLnN3aXBlci1idXR0b24tbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgei1pbmRleDogMTA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cbi8qIENvbW1vbiBTdHlsZXMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogQnVsbGV0cyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4yO1xufVxuYnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQ6b25seS1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiA2cHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA4cHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHRvcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAwIDRweDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgbGVmdDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHJpZ2h0O1xufVxuLyogUHJvZ3Jlc3MgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xufVxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIHtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogIzAwMDAwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qIFNjcm9sbGJhciAqL1xuLnN3aXBlci1zY3JvbGxiYXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMSU7XG4gIGJvdHRvbTogM3B4O1xuICB6LWluZGV4OiA1MDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA5OCU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xuICB0b3A6IDElO1xuICB6LWluZGV4OiA1MDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5OCU7XG59XG4uc3dpcGVyLXNjcm9sbGJhci1kcmFnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFnIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLnN3aXBlci1zY3JvbGxiYXItbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3dpcGVyLXpvb20tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBpbWcsXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gc3ZnLFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IGNhbnZhcyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5zd2lwZXItc2xpZGUtem9vbWVkIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLyogUHJlbG9hZGVyICovXG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXIge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTIxcHg7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gIGFuaW1hdGlvbjogc3dpcGVyLXByZWxvYWRlci1zcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc3dpcGVyLXByZWxvYWRlci1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRlIHtcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1sYXp5LXByZWxvYWRlci1ibGFjayB7XG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogIzAwMDtcbn1cbkBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyogYTExeSAqL1xuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xMDAwO1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldixcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0ICsgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjY7XG4gIHotaW5kZXg6IDA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3c6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmaWx0ZXI6IGJsdXIoNTBweCk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "rKNE":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/course-material/course-material.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <div class=\"course-material-count\">\n    <h4> <b>  {{ offset }} - {{ materialCourseLength }} Pages </b>   </h4>\n  </div>\n\n  <ion-slides (ionSlideWillChange)=\"doCheck()\" #slides pager=\"false\" [options]=\"slideOpts\">\n\n    <ion-slide *ngFor=\"let course of courseMaterial\" class=\"course__material\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"course__sound\" size-sm=\"12\" size-lg=\"6\" *ngIf=\"course.materialTranslations[0].voicePath\">\n            <div class=\"icon-sound\">\n              <div class=\"img-volume\">\n                <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"'play'\" (click)=\"startAudio(course.materialTranslations[0].voicePath)\">\n                </ion-icon>\n              </div>\n             </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\n            <div class=\"course__material-block\">\n              <ion-text class=\"material-text\" [innerHTML]=\"course.materialTranslations[0].description\" class=\"material-p\"> </ion-text>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\" size-lg=\"6\">\n                    <div class=\"video-inro\">\n                      <video *ngIf=\"course.materialTranslations[0].videoPath\" width=\"100%\" height=\"230\" controls>\n                        <source [src]='course.materialTranslations[0].videoPath' type=\"video/mp4\">\n                      </video>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"12\" size-lg=\"6\">\n                      <ion-img *ngIf=\"course.imagePath\" loading=\"lazy\" class=\"ion-padding-bottom material-image\" [src]=\"course.imagePath\"></ion-img>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center slide-button\">\n\n      <ion-col>\n        <ion-button *ngIf=\"offset > 0\" (click)=\"slidePrev()\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> prev </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button *ngIf=\"!disableNextBtn\" (click)=\"slideNext()\">  next <ion-icon name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"offset > 0\" (click)=\"amDoneToday()\"> Pause </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button *ngIf=\"offset !== 0\" (click)=\"startFromZero()\"> Start over </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-toolbar *ngIf=\"activeTrack\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-range #range [(ngModel)]=\"progress\" max=\"100\" color=\"success\" (touhend)=\"seek()\" (mouseup)=\"seek()\"></ion-range>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button fill=\"clear\" (click)=\"toogleAudio(false)\" *ngIf=\"!isPlaying\">\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"play\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" (click)=\"toogleAudio(true)\" *ngIf=\"isPlaying\" >\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"pause\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

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