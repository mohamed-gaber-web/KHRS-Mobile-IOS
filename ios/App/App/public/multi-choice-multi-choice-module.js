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
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "A9xy");












let MultiChoicePage = class MultiChoicePage {
    constructor(toastController, storageService, exerciseService, route, fb, navController, router, modalController, utilityService) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.exerciseService = exerciseService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.utilityService = utilityService;
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
                this.utilityService.successText("There are no available questions in this exercise");
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
                this.utilityService.successMessage("<img src='../../../assets/images/22.gif' />");
                this.stopAllAudios();
                setTimeout(() => {
                    this.isLoading = true;
                    this.multiForm.reset();
                    this.currentIndex += 1;
                    this.getQuestionAndAnswerMultiChoice();
                    this.slides.slideNext();
                }, 4000);
                if (this.currentIndex === this.lengthQuestion) {
                    this.utilityService.successText('Thanks for resolving questions');
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
                this.utilityService.errorMessage("<img src='../../../assets/images/wr.gif' />");
            }
        })));
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .sound-question .img-volume, .multi-choice .sound .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 28px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.multi-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  margin: 20px 0 50px 0;\n}\n\n.multi-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 10px 0;\n  max-width: 60%;\n}\n\n.multi-choice ion-radio {\n  --color: var(--ion-color-second-app);\n  margin: 20px 0;\n}\n\n.multi-choice .sound {\n  border: 2px dotted var(--ion-color-second-app);\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  min-width: 27%;\n  max-width: 80%;\n  padding: 7px 0;\n  margin: 0px 0 0 60px;\n}\n\n.multi-choice .sound img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.sound-question {\n  border: 2px solid var(--ion-color-second-app);\n  border-radius: 50px;\n  display: flex;\n  justify-content: space-around;\n  padding: 7px 0;\n  margin-left: 10px;\n  margin-top: 30px;\n}\n\n.sound-question img.danish-flag {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.sound-question img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\nion-radio-group {\n  position: relative;\n}\n\n.select-dots {\n  background-color: #062F87;\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n  position: absolute;\n  bottom: 26px;\n  right: 95%;\n  z-index: 2000000000;\n}\n\n.select-animate {\n  position: absolute;\n  z-index: 20000000000000000;\n  bottom: 60px;\n  right: 35%;\n  transform: rotate(45deg);\n  animation: selectAnimate 2s ease-in 4 forwards;\n}\n\n.select-animate img {\n  width: 150px;\n  height: 150px;\n}\n\n@keyframes selectAnimate {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211bHRpLWNob2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRSxlQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFLG1CQUFBOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZOOztBQVFJO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFMTjs7QUFRSTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFOTjs7QUFTSTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQVBOOztBQVlFO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBVko7O0FBWUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFWTjs7QUFxQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuQko7O0FBc0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFuQko7O0FBc0JFO0VBQ0UsYUFBQTtBQW5CSjs7QUFzQkU7RUFDRSxjQUFBO0FBbkJKOztBQXNCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQW5CSjs7QUF3QkU7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBSUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF4Qko7O0FBMEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBeEJOOztBQTJCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXpCTjs7QUFrQ0U7RUFDRSxrQkFBQTtBQWhDSjs7QUFzQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFuQ0Y7O0FBMENBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBSUEsd0JBQUE7RUFJQSw4Q0FBQTtBQXZDRjs7QUF5Q0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQXZDSjs7QUEyQ0E7RUFDQTtJQUNFLFVBQUE7RUF4Q0E7RUEwQ0Y7SUFDRSxVQUFBO0VBeENBO0VBMENGO0lBQ0UsVUFBQTtFQXhDQTtFQTBDRjtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQXhDQTtBQUNGIiwiZmlsZSI6Im11bHRpLWNob2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmV4dC1pY29uLXZsdW1lIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC8qIGhlYWRlciBUb3AgKi9cbiAgaW9uLWhlYWRlciBpb24taW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC8qIGVuZCBoZWFkZXIgdG9wICovXG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tdWx0aS1jaG9pY2Uge1xuXG4gICAgaW9uLXRleHR7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgbWFyZ2luOiAyMHB4IDAgNTBweCAwO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICB9XG5cbiAgICBpb24tcmFkaW8ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG5cblxuICAuc291bmQge1xuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1pbi13aWR0aDogMjclO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDdweCAwO1xuICAgIG1hcmdpbjogMHB4IDAgMCA2MHB4O1xuXG4gICAgaW1nLmxhbmdhdWdlLWltZ3tcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgfVxuXG5cbiAgICAuaW1nLXZvbHVtZSB7XG4gICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZTtcbiAgICB9XG4gIH1cblxuICB9XG5cbiAgLnRvdGFsLXJlc3VsdCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cblxuICAuaW1nLWxhbmdhdWdlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxM3B4O1xuICAgIHRvcDogMTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG5cbiAgLmhpZGVCdXR0b25OZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNob3dCdXR0b25OZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50b3RhbC1yZXN1bHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG5cblxuXG4gIC5zb3VuZC1xdWVzdGlvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAvLyB3aWR0aDogMjAlO1xuICAgIC8vIG1pbi13aWR0aDogMjclO1xuICAgIC8vIG1heC13aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDdweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBpbWcuZGFuaXNoLWZsYWcge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICB9XG5cbiAgICBpbWcubGFuZ2F1Z2UtaW1ne1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICB9XG5cblxuICAgIC5pbWctdm9sdW1lIHtcbiAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuXG4gIC8vIEFuaW1hdGlvbiBFbGVtZW50XG5cbi5zZWxlY3QtZG90cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjJGODc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNnB4O1xuICByaWdodDogOTUlO1xuICB6LWluZGV4OiAyMDAwMDAwMDAwO1xuICAvLyAtd2Via2l0LWFuaW1hdGlvbjogc2VsZWN0QW5pbWF0ZSAzcyBlYXNlLWluIDMgZm9yd2FyZHM7XG4gIC8vIC1vLWFuaW1hdGlvbjogc2VsZWN0QW5pbWF0ZSAzcyBlYXNlLWluIDMgZm9yd2FyZHM7XG4gIC8vIC1tb3otYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDNzIGVhc2UtaW4gMyBmb3J3YXJkcztcbiAgLy8gYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDNzIGVhc2UtaW4gMyBmb3J3YXJkcztcbn1cblxuLnNlbGVjdC1hbmltYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyMDAwMDAwMDAwMDAwMDAwMDtcbiAgYm90dG9tOiA2MHB4O1xuICByaWdodDogMzUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2VsZWN0QW5pbWF0ZSAycyBlYXNlLWluIDQgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogc2VsZWN0QW5pbWF0ZSAycyBlYXNlLWluIDQgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDJzIGVhc2UtaW4gNCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBzZWxlY3RBbmltYXRlIDJzIGVhc2UtaW4gNCBmb3J3YXJkcztcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2VsZWN0QW5pbWF0ZSB7XG4wJSB7XG4gIG9wYWNpdHk6IDA7XG59XG4yNSUge1xuICBvcGFjaXR5OiAxO1xufVxuNTAlIHtcbiAgb3BhY2l0eTogMDtcbn1cbjEwMCUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG59XG5cbi8vIEFuaW1hdGlvbiBFbGVtZW50XG5cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n\n<div class=\"ios-toolbar\">\n  <ion-title>\n    Multi choice\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\n  </ion-title>\n</div>\n<ion-icon class=\"help-icon\" (click)=\"presentModal()\" name=\"help-circle-outline\"></ion-icon>\n\n<ion-content>\n\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n<form *ngIf=\"exerciseItems\" [formGroup]=\"multiForm\">\n  <!-- Animation Element -->\n  <div class=\"select-animate\">\n    <img src=\"../../../assets/images/select.png\" />\n    </div>\n    <!-- Animation Element -->\n    \n  <ion-slides [pager]=\"false\" #slides [options]=\"slideOpts\">\n  <ion-slide >\n\n  <ion-grid>\n    <ion-list class=\"multi-choice\">\n      <ion-grid class=\"sound-group\">\n        <ion-row>\n         <ion-col size=\"4\">\n            <div *ngIf=\"exerciseItems[0].voiceDanishPath\">\n              <div class=\"sound-question\">\n                  <div class=\"img-volume\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElementDanish,1)\">\n                    </ion-icon>\n                  </div>\n                <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\n              </div>\n            </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div *ngIf=\"exerciseItems[0].multiChoiceTranslations[0]?.voicePath\">\n          <div class=\"sound-question\">\n              <div class=\"img-volume\">\n                <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElement.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElement,1,'native')\">\n                </ion-icon>\n              </div>\n            <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n          </div>\n        </div>\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <ion-list-header>\n\n        <ion-text>\n          {{ exerciseItems[0].question }}\n        </ion-text>\n\n      </ion-list-header>\n\n      <ion-radio-group formControlName=\"answer\">\n        <div class=\"answer\" *ngFor=\"let item of resultAnswerItems\">\n        <ion-item (click)=\"playAudio(item,2)\">\n          <ion-label>{{ item.answer }}</ion-label>\n          <ion-radio [value]=\"item.id\"></ion-radio>\n          <div class=\"sound\" *ngIf=\"item.audioElement.audio\">\n            <div class=\"sound-bg\">\n                  <div class=\"img-volume\">\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!item.audioElement.status? 'play' : 'stop'\" >\n                    </ion-icon>\n                  </div>\n              </div>\n              <img class=\"langauge-img\" [src]=\"userInfo.languageIcon\" alt=\"\" />\n            </div>\n      </ion-item>\n\n    </div>\n  </ion-radio-group>\n\n      <ion-grid>\n        <ion-row class=\"ion-padding ion-justify-content-center\">\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-button\n              [ngClass]=\"{'hideButtonNext': multiForm.invalid}\"\n              (click)=\"slidePrev()\">\n                Prev\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"6\">\n            <ion-button\n            [ngClass]=\"{'hideButtonNext': multiForm.invalid }\"\n            (click)=\"slideNext(exerciseItems[0].id, multiForm.value.answer)\">\n              Next\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n  </ion-grid>\n</ion-slide>\n</ion-slides>\n</form>\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=multi-choice-multi-choice-module.js.map