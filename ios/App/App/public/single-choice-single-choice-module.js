(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-choice-single-choice-module"],{

/***/ "HGvi":
/*!************************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SingleChoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoicePageRoutingModule", function() { return SingleChoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _single_choice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-choice.page */ "aQmV");




const routes = [
    {
        path: '',
        component: _single_choice_page__WEBPACK_IMPORTED_MODULE_3__["SingleChoicePage"]
    }
];
let SingleChoicePageRoutingModule = class SingleChoicePageRoutingModule {
};
SingleChoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleChoicePageRoutingModule);



/***/ }),

/***/ "XaxC":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/single-choice/single-choice.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n<div class=\"ios-toolbar\">\n  <ion-title>\n    single choice\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\n  </ion-title>\n</div>\n<ion-icon class=\"help-icon\" (click)=\"presentModal()\" name=\"help-circle-outline\"></ion-icon>\n\n<ion-content>\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <form [formGroup]=\"singleForm\">\n    <ion-slides [pager]=\"false\" #slides [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let singleItem of exerciseItems\">\n      <ion-grid>\n        <ion-list class=\"single-choice\">\n          <ion-grid class=\"sound-group\">\n            <ion-row>\n            <ion-col size=\"4\">\n                <div *ngIf=\"singleItem.voiceDanishPath\">\n                  <div class=\"sound-question\">\n                      <div class=\"img-volume\">\n                        <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!singleItem.audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio('',singleItem)\">\n                        </ion-icon>\n                      </div>\n                    <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n                  </div>\n                </div>\n            </ion-col>\n          <ion-col size=\"4\" >\n            <div *ngIf=\"singleItem.singleChoiceTranslations[0]?.voicePath\">\n              <div class=\"sound-question\">\n                  <div class=\"img-volume\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!singleItem.audioElement.status? 'play' : 'stop'\" (click)=\"playAudio('native',singleItem)\">\n                    </ion-icon>\n                  </div>\n                <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n              </div>\n            </div>\n          </ion-col>\n          </ion-row>\n          </ion-grid>\n\n          <ion-radio-group formControlName=\"answer\">\n\n            <ion-list-header>\n              <ion-text> {{ singleItem.question }} </ion-text>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-label>JA</ion-label>\n              <ion-radio [value]=\"true\"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>NEJ</ion-label>\n              <ion-radio [value]=\"false\"></ion-radio>\n            </ion-item>\n\n          </ion-radio-group>\n\n          <ion-grid>\n            <ion-row class=\"ion-padding ion-justify-content-center\">\n\n              <ion-col size=\"12\" size-lg=\"6\">\n                <ion-button\n                  [ngClass]=\"{'hideButtonNext': singleForm.invalid }\"\n                  (click)=\"slidePrev()\">\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                    Prev\n                </ion-button>\n              </ion-col>\n\n              <ion-col size=\"12\" size-lg=\"6\">\n                <ion-button\n                  [ngClass]=\"{'hideButtonNext': singleForm.invalid }\"\n                  (click)=\"slideNext(singleItem.id,singleForm.value)\">\n                    Next\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-list>\n      </ion-grid>\n\n    </ion-slide>\n  </ion-slides>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "aQmV":
/*!**************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice.page.ts ***!
  \**************************************************************/
/*! exports provided: SingleChoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoicePage", function() { return SingleChoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_single_choice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./single-choice.page.html */ "XaxC");
/* harmony import */ var _single_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-choice.page.scss */ "qIIM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/exercise.service */ "4YRF");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "A9xy");












let SingleChoicePage = class SingleChoicePage {
    constructor(toastController, storageService, exerciseService, route, fb, navController, modalController, utilityService) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.exerciseService = exerciseService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.modalController = modalController;
        this.utilityService = utilityService;
        this.subs = [];
        this.lengthQuestion = 0;
        this.offset = 0;
        this.currentIndex = 0;
        this.questionSelected = false;
        this.isLoading = false;
        this.limit = 1;
        this.resultAnswer = null;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
        this.singleFormErrors = {
            answer: '',
        };
        this.singleValidationMessages = {
            answer: {
                required: 'Password field is required',
            },
        };
    }
    ngOnInit() {
        // ** get info user from localstorage
        this.userInfo = this.storageService.getUser();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
        //**  Single Form run
        this.buildSingleForm();
        // ** Get Question Data
        this.getQuestion();
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
    }
    // ** Get Question Data
    getQuestion() {
        this.isLoading = true;
        this.subs.push(this.exerciseService
            .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
            .subscribe(response => {
            this.isLoading = false;
            this.exerciseItems = response['result'];
            this.lengthQuestion = response['length'];
            if (this.lengthQuestion == 0) {
                this.utilityService.successText("There are no available questions in this exercise");
                setTimeout(() => {
                    this.navController.navigateRoot(['/exercise', { courseId: this.courseId }]);
                }, 100);
            }
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
        }));
    }
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
            answer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
        this.singleForm.valueChanges.subscribe((data) => this.validateSingleForm());
    }
    // ** Get Current Index
    getCurrentIndex() {
        this.slides.getActiveIndex().then(current => this.currentIndex = current);
    }
    // ** Move to Next slide
    slideNext(id, ...answer) {
        this.validateSingleForm(true);
        this.subs.push(this.exerciseService.checkAnswerSingleChoise(id, this.singleForm.value.answer)
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.resultAnswer = response['success'];
            if (this.resultAnswer === true) {
                // message and voice success
                this.utilityService.successMessage("<img src='../../../assets/images/22.gif' />");
                this.currentIndex += 1;
                if (this.exerciseItems[0].audioElement) {
                    this.exerciseItems[0].audioElement.audio.pause();
                    this.exerciseItems[0].audioElement.audio = null;
                }
                if (this.exerciseItems[0].audioElementDanish) {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.audio = null;
                }
                this.isLoading = true;
                this.singleForm.reset();
                this.getQuestion();
                this.slides.slideNext();
                if (this.currentIndex === this.lengthQuestion) {
                    this.utilityService.successText('Thanks for resolving questions');
                    setTimeout(() => {
                        this.navController.navigateRoot(['/exercise', { courseId: this.courseId }]);
                    }, 100);
                }
            }
            else if (this.resultAnswer === false) {
                // message and voice error
                this.utilityService.errorMessage("<img src='../../../assets/images/wr.gif' />");
            }
        })));
    }
    successMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 500,
                cssClass: 'ion-success',
                color: 'success'
            });
            toast.present();
        });
    }
    slidePrev() {
        this.currentIndex -= 1;
        this.getQuestion();
        this.slides.slidePrev();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => {
            sub.unsubscribe();
        });
    }
};
SingleChoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_8__["ExerciseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] }
];
SingleChoicePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }]
};
SingleChoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-choice',
        template: _raw_loader_single_choice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleChoicePage);

/**
 * [*] => don't show next button before answer on first quetion
 * [*] => if is question is last question hide next button
 * [*] => if person answer not correct hide button check
 * [] => get sound
 * [*] fix rest form
 * [*] fix typo in choise to be choice
 * [*] add current and total number of questions
 * [*] remove check and replace its logic with next and the aswer must be correct to move to the next question
 */


/***/ }),

/***/ "crrd":
/*!****************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice.module.ts ***!
  \****************************************************************/
/*! exports provided: SingleChoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoicePageModule", function() { return SingleChoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _single_choice_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-choice-routing.module */ "HGvi");
/* harmony import */ var _single_choice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-choice.page */ "aQmV");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "lCi7");









let SingleChoicePageModule = class SingleChoicePageModule {
};
SingleChoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _single_choice_routing_module__WEBPACK_IMPORTED_MODULE_6__["SingleChoicePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_8__["HelpModalModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_single_choice_page__WEBPACK_IMPORTED_MODULE_7__["SingleChoicePage"]],
    })
], SingleChoicePageModule);



/***/ }),

/***/ "qIIM":
/*!****************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .sound-group .sound-question .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  position: relative;\n  top: 3px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n/* end header top */\n\n.single-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px 0 50px 0;\n}\n\n.single-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 20px auto;\n}\n\n.single-choice ion-radio {\n  --color: var(--ion-color-second-app);\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.sound-group .sound-question {\n  border: 2px solid var(--ion-color-second-app);\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n}\n\n.sound-group .sound-question img.img-lang {\n  width: 30px;\n  height: auto;\n}\n\n.sound-group .sound-question img.img-lang {\n  width: 30px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpbmdsZS1jaG9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUEsZUFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQSxtQkFBQTs7QUFLRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLG9DQUFBO0FBSko7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFORjs7QUFXSTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVJOOztBQWNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFaSiIsImZpbGUiOiJzaW5nbGUtY2hvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHQtaWNvbi12bHVtZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cblxuLyogaGVhZGVyIFRvcCAqL1xuaW9uLWhlYWRlciBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi8qIGVuZCBoZWFkZXIgdG9wICovXG5cblxuXG4uc2luZ2xlLWNob2ljZSB7XG4gIGlvbi10ZXh0e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAyMHB4IDAgNTBweCAwO1xuICB9XG5cbiAgaW9uLWxhYmVse1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cblxuICBpb24tcmFkaW8ge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgfVxufVxuXG5cbi5oaWRlQnV0dG9uTmV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93QnV0dG9uTmV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udG90YWwtcmVzdWx0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uc291bmQtZ3JvdXAge1xuXG4gICAgLnNvdW5kLXF1ZXN0aW9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBpbWcuaW1nLWxhbmcge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmltZy12b2x1bWUge1xuICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgfVxuICBpbWcuaW1nLWxhbmcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG59XG5cbn1cblxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=single-choice-single-choice-module.js.map