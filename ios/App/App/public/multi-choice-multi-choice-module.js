(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-choice-multi-choice-module"],{

/***/ "Ahbo":
/*!************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice.page.ts ***!
  \************************************************************/
/*! exports provided: MultiChoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiChoicePage", function() { return MultiChoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_multi_choice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./multi-choice.page.html */ "tDHn");
/* harmony import */ var _multi_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-choice.page.scss */ "gNL/");
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../help-modal/help-modal.component */ "kxUF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/exercise.service */ "4YRF");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");











let MultiChoicePage = class MultiChoicePage {
    constructor(toastController, storageService, exerciseService, route, fb, navController, router, modalController) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.exerciseService = exerciseService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.checkQuestion = true;
        this.isLoading = false;
        this.lengthQuestion = 0;
        this.limit = 1;
        this.limitAnswer = 4;
        this.offsetAnswer = 0;
        this.currentIndex = 0;
        this.subs = [];
        this.resultAnswer = null;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        // ** get courseId And exerciseId
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
        // ** get all items question
        this.getQuestionAndAnswerMultiChoice();
        // ** get all answers by multiChoiceId
        // this.getAnswersMultiChoice();
        this.buildMultiForm();
    }
    // ** get question from api
    getQuestionAndAnswerMultiChoice() {
        this.isLoading = true;
        this.subs.push(this.exerciseService
            .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
            .subscribe((questionAndAnswerItems) => {
            this.isLoading = false;
            this.exerciseItems = questionAndAnswerItems['result'];
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
            this.lengthQuestion = questionAndAnswerItems['length'];
            if (this.lengthQuestion == 0) {
                this.errorMessage('There are no available questions in this exercise');
                setTimeout(() => {
                    this.navController.navigateRoot([
                        '/exercise',
                        { courseId: this.courseId },
                    ]);
                }, 100);
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
        }));
    }
    // ** Build Single Choice Form
    buildMultiForm() {
        this.multiForm = this.fb.group({
            answer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
        });
    }
    // ** Get Current Index
    getCurrentIndex() {
        this.slides
            .getActiveIndex()
            .then((current) => (this.currentIndex = current));
    }
    // ** Move to Next slide
    slideNext(questionId, answerId) {
        this.subs.push(this.exerciseService
            .checkAnswerMultiChoise(questionId, answerId)
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.resultAnswer = response['success'];
            if (this.resultAnswer === true) {
                // ** message and voice success
                this.currentIndex += 1;
                this.successMessage('the answer is correct');
                this.isLoading = true;
                this.stopAllAudios();
                this.multiForm.reset();
                this.getQuestionAndAnswerMultiChoice();
                this.slides.slideNext();
                if (this.currentIndex === this.lengthQuestion) {
                    this.successMessage('Thanks for resolving questions');
                    setTimeout(() => {
                        this.navController.navigateRoot([
                            '/exercise',
                            { courseId: this.courseId },
                        ]);
                    }, 100);
                }
            }
            else if (this.resultAnswer === false) {
                // ** message and voice error
                this.errorMessage('The answer is wrong and please choose correct answer');
            }
        })));
    }
    successMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000,
                cssClass: 'ion-success',
                color: 'success',
            });
            toast.present();
        });
    }
    errorMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000,
                cssClass: 'ion-error',
                color: 'danger',
            });
            toast.present();
        });
    }
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
    slidePrev() {
        this.currentIndex -= 1;
        this.getQuestionAndAnswerMultiChoice();
        this.slides.slidePrev();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_3__["HelpModalComponent"],
                componentProps: {
                    "modalLink": "https://khrs-admin.sdex.online/assets/tutorials/single_choice_tutorial.mp4",
                    "modalTitle": "Multi Choice Tutorial"
                }
            });
            return yield modal.present();
        });
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => {
            sub.unsubscribe();
        });
    }
};
MultiChoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_9__["ExerciseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
MultiChoicePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides',] }]
};
MultiChoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-multi-choice',
        template: _raw_loader_multi_choice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multi_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MultiChoicePage);



/***/ }),

/***/ "fQ6p":
/*!**************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice.module.ts ***!
  \**************************************************************/
/*! exports provided: MultiChoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiChoicePageModule", function() { return MultiChoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "lCi7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _multi_choice_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multi-choice-routing.module */ "rZZZ");
/* harmony import */ var _multi_choice_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multi-choice.page */ "Ahbo");









let MultiChoicePageModule = class MultiChoicePageModule {
};
MultiChoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _multi_choice_routing_module__WEBPACK_IMPORTED_MODULE_7__["MultiChoicePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_5__["HelpModalModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_multi_choice_page__WEBPACK_IMPORTED_MODULE_8__["MultiChoicePage"]]
    })
], MultiChoicePageModule);



/***/ }),

/***/ "gNL/":
/*!**************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .sound-question .img-volume, .multi-choice .sound .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 28px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.multi-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  margin: 20px 0 50px 0;\n}\n\n.multi-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 10px 0;\n  max-width: 60%;\n}\n\n.multi-choice ion-radio {\n  --color: var(--ion-color-second-app);\n  margin: 20px 0;\n}\n\n.multi-choice .sound {\n  border: 2px dotted var(--ion-color-second-app);\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  min-width: 27%;\n  max-width: 80%;\n  padding: 7px 0;\n  margin: 0px 0 0 60px;\n}\n\n.multi-choice .sound img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.sound-question {\n  border: 2px solid var(--ion-color-second-app);\n  border-radius: 50px;\n  display: flex;\n  justify-content: space-around;\n  padding: 7px 0;\n  margin-left: 10px;\n  margin-top: 30px;\n}\n\n.sound-question img.danish-flag {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.sound-question img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211bHRpLWNob2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRSxlQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFLG1CQUFBOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZOOztBQVFJO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFMTjs7QUFRSTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFOTjs7QUFTSTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQVBOOztBQVlFO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBVko7O0FBWUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFWTjs7QUFxQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuQko7O0FBc0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFuQko7O0FBc0JFO0VBQ0UsYUFBQTtBQW5CSjs7QUFzQkU7RUFDRSxjQUFBO0FBbkJKOztBQXNCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQW5CSjs7QUF3QkU7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBSUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF4Qko7O0FBMEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBeEJOOztBQTJCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXpCTiIsImZpbGUiOiJtdWx0aS1jaG9pY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5leHQtaWNvbi12bHVtZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAvKiBoZWFkZXIgVG9wICovXG4gIGlvbi1oZWFkZXIgaW9uLWltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAvKiBlbmQgaGVhZGVyIHRvcCAqL1xuXG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gIH1cblxuICAubXVsdGktY2hvaWNlIHtcblxuICAgIGlvbi10ZXh0e1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIG1hcmdpbjogMjBweCAwIDUwcHggMDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWx7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgfVxuXG4gICAgaW9uLXJhZGlvIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cblxuXG5cbiAgLnNvdW5kIHtcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtaW4td2lkdGg6IDI3JTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICBtYXJnaW46IDBweCAwIDAgNjBweDtcblxuICAgIGltZy5sYW5nYXVnZS1pbWd7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC13aWR0aDogNzAlO1xuICAgIH1cblxuXG4gICAgLmltZy12b2x1bWUge1xuICAgICAgQGV4dGVuZCAuZXh0LWljb24tdmx1bWU7XG4gICAgfVxuICB9XG5cbiAgfVxuXG4gIC50b3RhbC1yZXN1bHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG5cbiAgLmltZy1sYW5nYXVnZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTNweDtcbiAgICB0b3A6IDE0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxuXG4gIC5oaWRlQnV0dG9uTmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zaG93QnV0dG9uTmV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudG90YWwtcmVzdWx0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuXG5cblxuICAuc291bmQtcXVlc3Rpb24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy8gd2lkdGg6IDIwJTtcbiAgICAvLyBtaW4td2lkdGg6IDI3JTtcbiAgICAvLyBtYXgtd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgaW1nLmRhbmlzaC1mbGFnIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgfVxuXG4gICAgaW1nLmxhbmdhdWdlLWltZ3tcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgfVxuXG5cbiAgICAuaW1nLXZvbHVtZSB7XG4gICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZTtcbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "rZZZ":
/*!**********************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MultiChoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiChoicePageRoutingModule", function() { return MultiChoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _multi_choice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-choice.page */ "Ahbo");




const routes = [
    {
        path: '',
        component: _multi_choice_page__WEBPACK_IMPORTED_MODULE_3__["MultiChoicePage"]
    }
];
let MultiChoicePageRoutingModule = class MultiChoicePageRoutingModule {
};
MultiChoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MultiChoicePageRoutingModule);



/***/ }),

/***/ "tDHn":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/multi-choice/multi-choice.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n\n<div class=\"ios-toolbar\">\n  <ion-title>\n    Multi choice\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\n  </ion-title>\n</div>\n<ion-icon class=\"help-icon\" (click)=\"presentModal()\" name=\"help-circle-outline\"></ion-icon>\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n<form *ngIf=\"exerciseItems\" [formGroup]=\"multiForm\">\n\n  <ion-slides [pager]=\"false\" #slides [options]=\"slideOpts\">\n  <ion-slide >\n\n  <ion-grid>\n    <ion-list class=\"multi-choice\">\n      <ion-grid class=\"sound-group\">\n        <ion-row>\n         <ion-col size=\"4\">\n            <div *ngIf=\"exerciseItems[0].voiceDanishPath\">\n              <div class=\"sound-question\">\n                  <div class=\"img-volume\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElementDanish,1)\">\n                    </ion-icon>\n                  </div>\n                <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n              </div>\n            </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div *ngIf=\"exerciseItems[0].multiChoiceTranslations[0]?.voicePath\">\n          <div class=\"sound-question\">\n              <div class=\"img-volume\">\n                <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElement.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElement,1,'native')\">\n                </ion-icon>\n              </div>\n            <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n          </div>\n        </div>\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <ion-list-header>\n\n        <ion-text>\n          {{ exerciseItems[0].question }}\n        </ion-text>\n\n      </ion-list-header>\n\n      <ion-radio-group formControlName=\"answer\">\n        <div class=\"answer\" *ngFor=\"let item of resultAnswerItems\">\n        <ion-item (click)=\"playAudio(item,2)\">\n          <ion-label>{{ item.answer }}</ion-label>\n          <ion-radio [value]=\"item.id\"></ion-radio>\n          <div class=\"sound\" *ngIf=\"item.audioElement.audio\">\n            <div class=\"sound-bg\">\n                  <div class=\"img-volume\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!item.audioElement.status? 'play' : 'stop'\" >\n                    </ion-icon>\n                  </div>\n              </div>\n              <img class=\"langauge-img\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n            </div>\n      </ion-item>\n\n    </div>\n  </ion-radio-group>\n\n      <ion-grid>\n        <ion-row class=\"ion-padding ion-justify-content-center\">\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-button\n              [ngClass]=\"{'hideButtonNext': multiForm.invalid}\"\n              (click)=\"slidePrev()\">\n                Prev\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-button\n            [ngClass]=\"{'hideButtonNext': multiForm.invalid }\"\n            (click)=\"slideNext(exerciseItems[0].id, multiForm.value.answer)\">\n              Next\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n  </ion-grid>\n</ion-slide>\n</ion-slides>\n</form>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=multi-choice-multi-choice-module.js.map