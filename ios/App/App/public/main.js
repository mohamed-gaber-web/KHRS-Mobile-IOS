(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macmini/Desktop/SDEX WORK/KHRS-IOS/mobile-ionic/src/main.ts */"zUnb");


/***/ }),

/***/ "1Lwo":
/*!**********************************!*\
  !*** ./src/app/api.constants.ts ***!
  \**********************************/
/*! exports provided: baseUrl, imagesBaseUrl, loginAPI, registerAPI, recommendedBy, userChangePassword, updatedUserInfo, resetPassword, getProfileData, getLanguage, getAllCoursesAPI, getUsersCoursesAPI, getCourseDetails, createApplyCourse, getUserCourseDetails, courseMaterials, getCourseCategories, getExercise, checkAnswerSingleChoise, getMultiChoiceAnswer, checkAnswerMultipleChoice, checkAnswerPuzzleText, checkAnswerPuzzleImage, getTextType, getUserActiveTest, sendAnswerTest, finishedTest, getCertificate, faqPage, policyPage, getGeneratedVidoes, start, end, getAllByUser, createUserCourseRate, successBoard, topScores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagesBaseUrl", function() { return imagesBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAPI", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAPI", function() { return registerAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recommendedBy", function() { return recommendedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userChangePassword", function() { return userChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedUserInfo", function() { return updatedUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileData", function() { return getProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCoursesAPI", function() { return getAllCoursesAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersCoursesAPI", function() { return getUsersCoursesAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseDetails", function() { return getCourseDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApplyCourse", function() { return createApplyCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCourseDetails", function() { return getUserCourseDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseMaterials", function() { return courseMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseCategories", function() { return getCourseCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercise", function() { return getExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerSingleChoise", function() { return checkAnswerSingleChoise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiChoiceAnswer", function() { return getMultiChoiceAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerMultipleChoice", function() { return checkAnswerMultipleChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerPuzzleText", function() { return checkAnswerPuzzleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerPuzzleImage", function() { return checkAnswerPuzzleImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextType", function() { return getTextType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserActiveTest", function() { return getUserActiveTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnswerTest", function() { return sendAnswerTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishedTest", function() { return finishedTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCertificate", function() { return getCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqPage", function() { return faqPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "policyPage", function() { return policyPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeneratedVidoes", function() { return getGeneratedVidoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllByUser", function() { return getAllByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserCourseRate", function() { return createUserCourseRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoard", function() { return successBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topScores", function() { return topScores; });
// const CORS = 'https://cors-anywhere.herokuapp.com/';
// export const baseUrl = `https://dev-khrs-api.sdex.online`;
const baseUrl = `https://api.e-asylearn.dk`;
// export const baseUrl = `https://khrs-api-test.sdex.online/`; // test url
const imagesBaseUrl = 'https://khrs-admin.sdex.online';
//Account
const loginAPI = `${baseUrl}/api/Account/Login`;
const registerAPI = `${baseUrl}/api/Account/Register`;
const recommendedBy = `${baseUrl}/api/RecommendedBy/GetRecommendedBy`;
const userChangePassword = `${baseUrl}/api/Account/changePasswod`;
const updatedUserInfo = `${baseUrl}/api/Account/UpdateUser`;
const resetPassword = `${baseUrl}/api/Account/requestResetPassword`;
const getProfileData = `${baseUrl}/api/Account/GetProfileData`;
// get language
const getLanguage = `${baseUrl}/api/Language/GetLanguage`;
//Courses
const getAllCoursesAPI = `${baseUrl}/api/Course/GetCourses`;
const getUsersCoursesAPI = `${baseUrl}/api/UserCourse/GetAll`;
const getCourseDetails = `${baseUrl}/api/Course/Details`;
const createApplyCourse = `${baseUrl}/api/UserCourse/Create`;
const getUserCourseDetails = `${baseUrl}/api/UserCourse/Details`;
const courseMaterials = `${baseUrl}/api/Course/CourseMaterial`;
const getCourseCategories = `${baseUrl}/api/Category/GetCategories`;
// exercise
const getExercise = `${baseUrl}/api/Exercise/Get`;
const checkAnswerSingleChoise = `${baseUrl}/api/Exercise/SingleChoice/Answer`;
const getMultiChoiceAnswer = `${baseUrl}/api/MultiChoiceAnswer/GetAll`;
const checkAnswerMultipleChoice = `${baseUrl}/api/Exercise/MultiChoice/Answer`;
const checkAnswerPuzzleText = `${baseUrl}/api/Exercise/PuzzleWithText/Answer`;
const checkAnswerPuzzleImage = `${baseUrl}/api/Exercise/PuzzleWithImage/Answer`;
// test
const getTextType = `${baseUrl}/api/Test/Get`;
const getUserActiveTest = `${baseUrl}/api/Test/GetUserActiveTest`;
const sendAnswerTest = `${baseUrl}/api/Test/Answer`;
const finishedTest = `${baseUrl}/api/Test/Finished`;
const getCertificate = `${baseUrl}/api/UserTest/GetCertificate`;
// pages
const faqPage = `${baseUrl}/api/Faq/GetFaq`;
const policyPage = `${baseUrl}/api/Policy/GetPolicy`;
const getGeneratedVidoes = `${baseUrl}/api/GenericAttributeMedia/GetByGenericAttributeTitle`;
// traking page material
const start = `${baseUrl}/api/AmDoneToday/Start`;
const end = `${baseUrl}/api/AmDoneToday/End`;
const getAllByUser = `${baseUrl}/api/AmDoneToday/GetAllByUser`;
// rating
const createUserCourseRate = `${baseUrl}/api/Rate/Create`;
// suuccess board
const successBoard = `${baseUrl}/api/SuccessBoard/GetSuccessBoard`;
// top scores
const topScores = `${baseUrl}/api/UserCourse/GetTopScores`;


/***/ }),

/***/ "8qw9":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/tracking-user.service.ts ***!
  \**********************************************************/
/*! exports provided: TrackingUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingUserService", function() { return TrackingUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api.constants */ "1Lwo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");





let TrackingUserService = class TrackingUserService {
    constructor(http) {
        this.http = http;
    }
    // ** start tracking when user click in material button
    startTracking(startParams) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["start"]}`, startParams);
    }
    // ** end tracking when user click in amDoneToday button
    endTracking(endParams) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["end"]}`, endParams);
    }
    getAllUser(offset, limit) {
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["getAllByUser"]}?offset=${offset}&&limit=${limit}`);
    }
};
TrackingUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TrackingUserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], TrackingUserService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ba7+":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/success-reviews/success-reviews.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"success-reviews\" *ngFor=\"let reviewItem of allSuccessRating\">\n    <div class=\"user-course-status__left\">\n      <img [src]=\"reviewItem.userImage\" loading=\"lazy\" [alt]=\"reviewItem.courseName\" loading=\"lazy\" />\n    </div>\n\n    <div class=\"user-course-status__center\">\n      <h4> {{ reviewItem.username }} </h4>\n      <h3> {{ reviewItem.courseName }} </h3>\n      <p *ngIf=\"reviewItem.comment !== null\">  {{ reviewItem.comment }} </p>\n    </div>\n\n    <div class=\"user-course-status__right\">\n      <div>\n        <ngb-rating style=\"color: #FFCC26; font-size: 15px;\" [(rate)]=\"reviewItem.rate\" [max]=\"5\" [readonly]=\"true\" ></ngb-rating>\n      </div>\n    </div>\n  </div>\n\n\n");

/***/ }),

/***/ "FnC7":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/success-board.service.ts ***!
  \**********************************************************/
/*! exports provided: SuccessBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessBoardService", function() { return SuccessBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api.constants */ "1Lwo");




let SuccessBoardService = class SuccessBoardService {
    constructor(http) {
        this.http = http;
    }
    successBoardFn(offset, limit) {
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["successBoard"]}?Offset=${offset}&Limit=${limit}`);
    }
};
SuccessBoardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SuccessBoardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SuccessBoardService);



/***/ }),

/***/ "G/Ar":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/success-photos/success-photos.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".images-block {\n  text-align: center;\n}\n.images-block .success-photos {\n  margin: 8px auto;\n}\n.images-block .success-photos img {\n  max-width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N1Y2Nlc3MtcGhvdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUFBRjtBQUNFO0VBQ0ksZ0JBQUE7QUFDTjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6InN1Y2Nlc3MtcGhvdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1hZ2VzLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAuc3VjY2Vzcy1waG90b3Mge1xuICAgICAgbWFyZ2luOiA4cHggYXV0bztcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "I3vM":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/success-reviews/success-reviews.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success-reviews {\n  width: 95%;\n  margin: 20px auto;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n.success-reviews .user-course-status__left {\n  width: 15%;\n  margin-top: 0px;\n}\n.success-reviews .user-course-status__left img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n}\n.success-reviews .user-course-status__center {\n  width: 70%;\n  margin-top: 5px;\n  position: relative;\n  left: 15px;\n}\n.success-reviews .user-course-status__center h3 {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 700;\n  color: #062F87;\n}\n.success-reviews .user-course-status__center h4 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #062F87;\n}\n.success-reviews .user-course-status__center p {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 400;\n  color: #D1D1D1;\n  line-height: 22px;\n}\n.success-reviews .user-course-status__right {\n  width: 15%;\n  margin-top: 10px;\n  position: relative;\n  right: 10px;\n}\n@media (min-width: 480px) and (max-width: 1024px) {\n  .user-course-status__left {\n    width: 40%;\n  }\n  .user-course-status__left img {\n    width: 100%;\n    height: 119px;\n  }\n\n  .user-course-status__center h3 {\n    font-size: 18px;\n  }\n  .user-course-status__center h4, .user-course-status__center p {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N1Y2Nlc3MtcmV2aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFFRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGSjtBQUlJO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtJO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFISjtBQU1JO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpOO0FBU0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFQSjtBQWFBO0VBRUk7SUFDRSxVQUFBO0VBWEo7RUFZSTtJQUFLLFdBQUE7SUFBYSxhQUFBO0VBUnRCOztFQVlJO0lBQUksZUFBQTtFQVJSO0VBU0k7SUFBTyxlQUFBO0VBTlg7QUFDRiIsImZpbGUiOiJzdWNjZXNzLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2Vzcy1yZXZpZXdzIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcblxuXG4gIC51c2VyLWNvdXJzZS1zdGF0dXNfX2xlZnQgIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItY291cnNlLXN0YXR1c19fY2VudGVyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTVweDtcblxuICAgIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwNjJGODc7XG4gICAgfVxuXG4gICAgaDQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzA2MkY4NztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBjb2xvcjogI0QxRDFEMTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gICAgfVxuICB9XG5cbiAgLnVzZXItY291cnNlLXN0YXR1c19fcmlnaHQge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAudXNlci1jb3Vyc2Utc3RhdHVzX19sZWZ0ICB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgaW1nIHt3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMTlweDt9XG4gICAgfVxuXG4gICAgLnVzZXItY291cnNlLXN0YXR1c19fY2VudGVyIHtcbiAgICAgIGgzIHtmb250LXNpemU6IDE4cHg7fVxuICAgICAgaDQsIHAge2ZvbnQtc2l6ZTogMTZweDt9XG4gICAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "NlNA":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _pipes_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/pipe-safe-url.pipe */ "kaio");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _components_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/top-header/top-header.component */ "TTsE");
/* harmony import */ var _components_success_reviews_success_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/success-reviews/success-reviews.component */ "leYu");
/* harmony import */ var _components_success_videos_success_videos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/success-videos/success-videos.component */ "WKgd");
/* harmony import */ var _components_success_photos_success_photos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/success-photos/success-photos.component */ "n6N9");












let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
        declarations: [_components_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_8__["TopHeaderComponent"], _components_success_photos_success_photos_component__WEBPACK_IMPORTED_MODULE_11__["SuccessPhotosComponent"], _components_success_videos_success_videos_component__WEBPACK_IMPORTED_MODULE_10__["SuccessVideosComponent"], _components_success_reviews_success_reviews_component__WEBPACK_IMPORTED_MODULE_9__["SuccessReviewsComponent"], _pipes_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__["PipeSafeUrlPipe"]],
        exports: [_components_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_8__["TopHeaderComponent"], _components_success_photos_success_photos_component__WEBPACK_IMPORTED_MODULE_11__["SuccessPhotosComponent"], _components_success_videos_success_videos_component__WEBPACK_IMPORTED_MODULE_10__["SuccessVideosComponent"], _components_success_reviews_success_reviews_component__WEBPACK_IMPORTED_MODULE_9__["SuccessReviewsComponent"]],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/storage.service */ "fbMX");
/* harmony import */ var _shared_services_success_board_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/success-board.service */ "FnC7");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./translate-config.service */ "ZjVV");










let AppComponent = class AppComponent {
    constructor(translateConfigService, storageService, toastController, authService, router, successService) {
        this.translateConfigService = translateConfigService;
        this.storageService = storageService;
        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.successService = successService;
        this.sub = [];
        this.isLoading = false;
        this.updateAppLanguage();
    }
    ngOnInit() {
        this.isLoading = true;
        this.sub.push(this.successService.successBoardFn(0, 20)
            .subscribe(response => {
            this.isLoading = false;
            this.allDataSuccess = response['successBoards']['result'];
            this.allDataRatng = response['ratings'];
            // console.log(this.allData);
        }));
    }
    updateAppLanguage() {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', "en");
            this.systemLanguage = "en";
        }
        else {
            this.systemLanguage = localStorage.getItem('lang');
        }
        this.translateConfigService.setLanguage(this.systemLanguage);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storageService.clearStorage();
            var toast = yield this.toastController.create({
                message: 'Signed out',
                duration: 2000,
                color: 'success',
            });
            toast.present();
            this.router.navigateByUrl('/auth/sign-in');
        });
    }
    ngOnDestroy() {
        this.sub.forEach(e => e.unsubscribe());
    }
};
AppComponent.ctorParameters = () => [
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_success_board_service__WEBPACK_IMPORTED_MODULE_8__["SuccessBoardService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TTsE":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/top-header/top-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderComponent", function() { return TopHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-header.component.html */ "X9/N");
/* harmony import */ var _top_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-header.component.scss */ "j+cn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "fbMX");
/* harmony import */ var _services_tracking_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/tracking-user.service */ "8qw9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");







let TopHeaderComponent = class TopHeaderComponent {
    constructor(storageService, trackingService, renderer, navCtrl) {
        this.storageService = storageService;
        this.trackingService = trackingService;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.toggle = false;
        this.notifiCount = 0;
        this.sub = [];
        this.darkValue = 'dark';
        this.currentRoute = '';
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        this.getUserAmDoneToday();
    }
    // * getUserAmDoneToday
    getUserAmDoneToday() {
        this.sub.push(this.trackingService.getAllUser(0, 20)
            .subscribe(response => {
            // console.log('getAllUerToday', response);
            this.listNotifi = response['result'];
            this.notifiCount = response['length'];
        }));
    }
    // * open and hide modal notification
    toggleModal() {
        this.toggle = !this.toggle;
    }
    ngOnDestroy() {
        this.sub.forEach(el => {
            el.unsubscribe();
        });
    }
    onToggleColorTheme(event) {
        if (event.detail.checked) {
            // document.body.setAttribute('color-theme', 'dark');
            this.renderer.setAttribute(document.body, 'color-theme', 'dark');
        }
        else {
            // document.body.setAttribute('color-theme', 'light');
            this.renderer.setAttribute(document.body, 'color-theme', 'light');
        }
    }
    back() {
        if (this.currentRoute === '/courses/tabs/all-courses') {
            return;
        }
        this.navCtrl.back();
    }
};
TopHeaderComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_tracking_user_service__WEBPACK_IMPORTED_MODULE_5__["TrackingUserService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
TopHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-header',
        template: _raw_loader_top_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopHeaderComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!-- <ion-menu-button>\n      <ion-icon name=\"play\"></ion-icon>\n  </ion-menu-button> -->\n\n  <ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n    <ion-toolbar color=\"primary\">\n      <ion-title style=\"text-align:center!important;\">Success Board</ion-title>\n    </ion-toolbar>\n  <ion-content>\n\n    <h1 class=\"ion-text-center\" style=\"margin-top: 20px; font-weight: 700;\"> Success Board </h1>\n    <div class=\"social\">\n      <ul>\n        <li> <a href=\"https://www.facebook.com/KHRS-Academy-105538624980761/\" target=\"_blank\"> <img src=\"../assets/images/fb.png\" alt=\"\" /> </a> </li>\n        <li> <a href=\"https://www.instagram.com/khrsacademy/\" target=\"_blank\"> <img src=\"../assets/images/insta.png\" alt=\"\" /> </a> </li>\n        <li> <a href=\"https://www.youtube.com/channel/UC6-wBAZmymU8F3zivjC9VVQ\" target=\"_blank\"> <img src=\"../assets/images/yt.png\" alt=\"\" /> </a> </li>\n      </ul>\n    </div>\n    <mat-tab-group>\n      <mat-tab label=\"Videos\">\n        <app-success-videos  [successData]=\"allDataSuccess\" [isLoadingData]=\"isLoading\"></app-success-videos>\n      </mat-tab>\n      <mat-tab label=\"Reviews\">\n        <app-success-reviews [successRating]=\"allDataRatng\" [isLoadingData]=\"isLoading\"></app-success-reviews>\n      </mat-tab>\n      <mat-tab label=\"Photos\">\n        <app-success-photos [successData]=\"allDataSuccess\" [isLoadingData]=\"isLoading\"></app-success-photos>\n      </mat-tab>\n    </mat-tab-group>\n    <!-- <ion-list class=\"ion-margin-top\">\n      <ion-menu-toggle>\n      </ion-menu-toggle>\n\n    </ion-list> -->\n  </ion-content>\n</ion-menu>\n\n<ion-app>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WKgd":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/success-videos/success-videos.component.ts ***!
  \******************************************************************************/
/*! exports provided: SuccessVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessVideosComponent", function() { return SuccessVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_videos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-videos.component.html */ "dBKX");
/* harmony import */ var _success_videos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-videos.component.scss */ "rVmM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let SuccessVideosComponent = class SuccessVideosComponent {
    constructor() { }
    ngOnInit() { }
};
SuccessVideosComponent.ctorParameters = () => [];
SuccessVideosComponent.propDecorators = {
    allSuccessData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['successData',] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['isLoadingData',] }]
};
SuccessVideosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-videos',
        template: _raw_loader_success_videos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_videos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessVideosComponent);



/***/ }),

/***/ "X9/N":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-header/top-header.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/courses/tabs/all-courses\" (click)=\"back()\"> </ion-back-button>\n  </ion-buttons>\n\n  <ion-toggle (ionChange)=\"onToggleColorTheme($event)\" color=\"primary\"></ion-toggle>\n\n</ion-toolbar>\n  <div class=\"user-notification\">\n    <ion-icon (click)=\"toggleModal()\" name=\"notifications\"> </ion-icon>\n    <span> {{notifiCount}} </span>\n    <div *ngIf=\"toggle\" class=\"user-noti-card\">\n      <div *ngFor=\"let itemNotifi of listNotifi\">\n      <p *ngIf=\"itemNotifi.type === 0\" [routerLink]=\"['/courses/course-material', itemNotifi.courseId]\" [queryParams]=\"{offset: itemNotifi.offset}\"> {{ itemNotifi.courseName }} | You reached page {{ itemNotifi.offset }} </p>\n      </div>\n    </div>\n  </div>\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: LanguageLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-interceptor */ "yN/h");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "wMzM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");









// import { SwiperModule } from 'swiper/angular';







function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            // SwiperModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: (LanguageLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ],
        // schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_10__["AppInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZjVV":
/*!*********************************************!*\
  !*** ./src/app/translate-config.service.ts ***!
  \*********************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
    }
    getDefaultLanguage() {
        let language = this.translate.getBrowserLang();
        if (language === 'ar') {
            document.documentElement.dir = "rtl";
            this.translate.setDefaultLang(language);
            return language;
        }
        if (language === 'ur') {
            document.documentElement.dir = "rtl";
            this.translate.setDefaultLang(language);
            return language;
        }
        this.translate.setDefaultLang(language);
        return language;
    }
    setLanguage(setLang) {
        if (setLang === 'ar') {
            document.documentElement.dir = "rtl";
            this.translate.use(setLang);
        }
        else if (setLang === 'ur') {
            document.documentElement.dir = "rtl";
            this.translate.use(setLang);
        }
        else {
            document.documentElement.dir = "ltr";
            this.translate.use(setLang);
        }
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslateConfigService);



/***/ }),

/***/ "dBKX":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/success-videos/success-videos.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"success-block\">\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" class=\"success-photos\" *ngFor=\"let item of allSuccessData\">\n          <div class=\"success-button-play\" >\n            <iframe width=\"100%\" height=\"auto\" [src]=\"item.youTubeVideoLink | safe\" allowfullscreen></iframe>\n          </div>\n      </ion-col>\n    </ion-row>\n    <!-- <p *ngIf=\"!allSuccessData || allSuccessData.length <= 0\">  No available images!  </p> -->\n  </ion-grid>\n\n\n\n</div>\n");

/***/ }),

/***/ "eRTK":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/storage.service */ "fbMX");




let AuthGuard = class AuthGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate(route, state) {
        const tokenExists = this.storageService.existsStorage('access_token');
        const isExpired = this.isExpired(this.storageService.getExpiresIn());
        if (!tokenExists || isExpired) {
            this.router.navigate(['/auth/sign-in'], {
                queryParams: { returnUrl: state.url },
            });
            return false;
        }
        return true;
    }
    isExpired(expireIn) {
        return expireIn < Date.now() / 1000;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "fbMX":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.constants */ "1Lwo");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "NlNA");





// import User from '../models/User';
let StorageService = class StorageService {
    constructor() {
        this.baseUrl = src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
        this.arabicFlag = {
            code: 'ar-EG',
            image: 'assets/images/flags/ar.svg',
            name: 'العربية',
        };
        this.englishFlag = {
            code: 'en-US',
            image: 'assets/images/flags/gb.svg',
            name: 'English',
        };
        this.danishFlag = {
            code: 'da-DA',
            image: 'assets/images/flags/da.svg',
            name: 'Danish',
        };
    }
    // Lang Direction rtl and ltr
    getLangDirection() {
        if (this.existsStorage('lang')) {
            if (JSON.parse(this.getStorage('lang')).name == 'العربية')
                return true;
        }
        // this.setLang({
        //   name: 'English',
        //   image: 'assets/images/flags/gb.svg',
        //   code: 'en-US',
        // });
        return false;
    }
    // create lang in local
    setLang(value) {
        return this.setStorage('lang', JSON.stringify(value)); // value // {name: 'العربية', image: flag}
    }
    // get lang
    getLang() {
        const langFound = this.existsStorage('lang');
        if (langFound) {
            return JSON.parse(this.getStorage('lang'));
        }
        else {
            this.setLang({
                name: 'English',
                image: 'assets/images/flags/gb.svg',
                code: 'en-US',
            });
            return JSON.parse(this.getStorage('lang'));
        }
    }
    getStorage(key) {
        return localStorage.getItem(key);
    }
    setStorage(key, value) {
        return localStorage.setItem(key, value);
    }
    removeStorage(key) {
        return localStorage.removeItem(key);
    }
    removeKeysStorage(keys) {
        keys.forEach((key) => this.removeStorage(key));
    }
    existsStorage(key) {
        return !!localStorage.getItem(key); // return true or false
    }
    clearStorage() {
        return localStorage.clear();
    }
    setAccessToken(value) {
        var tokenInfo = this.getDecodedAccessToken(value); // decode token
        this.setUser(tokenInfo);
        return this.setStorage('access_token', value);
    }
    setUser(value) {
        return this.setStorage('user', JSON.stringify(value));
    }
    setLanguage(value) {
        return this.setStorage('language', JSON.stringify(value));
    }
    setExpiresIn(value) {
        return this.setStorage('expires_in', value);
    }
    getAccessToken() {
        return this.getStorage('access_token');
    }
    getExpiresIn() {
        return this.getStorage('expires_in');
    }
    getDecodedAccessToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
    getUser() {
        let value = JSON.parse(this.getStorage('user')); // Json.parse convert text or string to javascript object '{}' >> {}
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.firstname = value.firstname;
        this.user.lastname = value.lastname;
        this.user.phoneNumber = value.phoneNumber;
        this.user.gender = value.gender;
        this.user.birthdate = value.birthdate;
        this.user.imagePath = value.imagePath;
        this.user.languageIcon = value.languageIcon;
        // this.user.Role = value.role;
        this.user.email = value.email;
        // this.user.permissions = value.permissions;
        return this.user;
    }
    getFlag(langName) {
        if (langName === 'ar-EG') {
            return this.arabicFlag;
        }
        else if (langName === 'en-US') {
            return this.englishFlag;
        }
        else if (langName === 'da-DA') {
            return this.danishFlag;
        }
    }
    validBase64(value) {
        return value.substr(value.indexOf(',') + 1);
    }
    // handle image base64
    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    correctImageUrl(...args) {
        if (typeof args[0] === 'string') {
            const url = args[0].replace(/\\/g, '/');
            const newUrl = `${this.baseUrl}/${url}`;
            return newUrl;
        }
        else if (args[0] instanceof Array) {
            const images = [];
            args[0].forEach((img) => images.push(this.correctImageUrl(img)));
            return images;
        }
    }
};
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], StorageService);



/***/ }),

/***/ "j+cn":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/top-header/top-header.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  position: relative;\n}\n\n.user-notification {\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  top: 18px;\n  right: 90px;\n  z-index: 2000000000000000;\n}\n\n.user-notification span {\n  width: 25px;\n  height: 26px;\n  background-color: red;\n  color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 15px;\n  right: -9px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-notification ion-icon {\n  font-size: 35px;\n  cursor: pointer;\n  color: #fff;\n}\n\n.user-notification .user-noti-card {\n  background-color: #fff;\n  border: 1px solid #8AFA6F;\n  width: 90%;\n  min-height: 150px;\n  height: auto;\n  border-radius: 10px;\n  position: fixed;\n  top: 75px;\n  right: 0;\n  z-index: 20000;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);\n  padding: 10px 0;\n  overflow-y: scroll;\n}\n\n.user-notification .user-noti-card p {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 5px 15px;\n  margin: 10px 0;\n  width: 100%;\n  cursor: pointer;\n}\n\n.user-notification .user-noti-card p:hover {\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVFO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBRUEseUVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQU47O0FBQ007RUFDRSx5QkFBQTtBQUNSIiwiZmlsZSI6InRvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuICAudXNlci1ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHRvcDogMThweDtcbiAgcmlnaHQ6IDkwcHg7XG4gIHotaW5kZXg6IDIwMDAwMDAwMDAwMDAwMDA7XG5cbiAgc3BhbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogLTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLy8gYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmltYXRlIDAuNHMgNXMgMTA7XG4gIH1cbiAgLnVzZXItbm90aS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QUZBNkY7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3NXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDIwMDAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IHJnYigwIDAgMCAvIDglKSwgMCA0cHggMTJweCByZ2IoMCAwIDAgLyA4JSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYigwIDAgMCAvIDglKSwgMCA0cHggMTJweCByZ2IoMCAwIDAgLyA4JSk7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kaio":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/pipe-safe-url.pipe.ts ***!
  \****************************************************/
/*! exports provided: PipeSafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeSafeUrlPipe", function() { return PipeSafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



let PipeSafeUrlPipe = class PipeSafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
PipeSafeUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
PipeSafeUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], PipeSafeUrlPipe);



/***/ }),

/***/ "leYu":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/success-reviews/success-reviews.component.ts ***!
  \********************************************************************************/
/*! exports provided: SuccessReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessReviewsComponent", function() { return SuccessReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_reviews_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-reviews.component.html */ "Ba7+");
/* harmony import */ var _success_reviews_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-reviews.component.scss */ "I3vM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let SuccessReviewsComponent = class SuccessReviewsComponent {
    constructor() {
        this.rate = 3;
    }
    ngOnInit() { }
};
SuccessReviewsComponent.ctorParameters = () => [];
SuccessReviewsComponent.propDecorators = {
    allSuccessRating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['successRating',] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['isLoadingData',] }]
};
SuccessReviewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-reviews',
        template: _raw_loader_success_reviews_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_reviews_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessReviewsComponent);



/***/ }),

/***/ "mtt8":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/success-photos/success-photos.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <ion-grid class=\"images-block\">\n    <ion-row>\n        <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"6\" class=\"success-photos\" *ngFor=\"let item of allSuccessData\">\n            <img [src]=\"item.imagePath\" alt=\"\" loading=\"lazy\" />\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n");

/***/ }),

/***/ "n6N9":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/success-photos/success-photos.component.ts ***!
  \******************************************************************************/
/*! exports provided: SuccessPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPhotosComponent", function() { return SuccessPhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_photos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-photos.component.html */ "mtt8");
/* harmony import */ var _success_photos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-photos.component.scss */ "G/Ar");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let SuccessPhotosComponent = class SuccessPhotosComponent {
    constructor() { }
    ngOnInit() { }
};
SuccessPhotosComponent.ctorParameters = () => [];
SuccessPhotosComponent.propDecorators = {
    allSuccessData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['successData',] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['isLoadingData',] }]
};
SuccessPhotosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-photos',
        template: _raw_loader_success_photos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_photos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessPhotosComponent);



/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api.constants */ "1Lwo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");






let AuthService = class AuthService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    get IsLoggedIn() {
        return this.storageService.existsStorage('user');
    }
    signInUser(user) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["loginAPI"]}`, user);
    }
    getUser() {
        if (this.storageService.existsStorage('user')) {
            return this.storageService.getUser();
        }
    }
    registerCustomer(user) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["registerAPI"]}`, user);
    }
    recommendedBy() {
        const params = `?offset=0&limit=10`;
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["recommendedBy"]}` + params);
    }
    updatedPassword(userPassword) {
        return this.http.put(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["userChangePassword"]}`, userPassword);
    }
    updatedUserProfile(userInfo) {
        return this.http.put(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["updatedUserInfo"]}`, userInfo);
    }
    resetPassword(email, url) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["resetPassword"]}`, { email, url });
    }
    getProfileDataList() {
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_1__["getProfileData"]}`);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "rVmM":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/success-videos/success-videos.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLXZpZGVvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "eRTK");




const routes = [
    {
        path: '',
        redirectTo: localStorage.getItem('access_token') ? '/courses/tabs/all-courses' : '/choose-language',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthPageModule)
    },
    {
        path: 'choose-language',
        loadChildren: () => Promise.all(/*! import() | choose-language-choose-language-module */[__webpack_require__.e("common"), __webpack_require__.e("choose-language-choose-language-module")]).then(__webpack_require__.bind(null, /*! ./choose-language/choose-language.module */ "Ivhk")).then(m => m.ChooseLanguagePageModule)
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() | intro-intro-module */[__webpack_require__.e("common"), __webpack_require__.e("intro-intro-module")]).then(__webpack_require__.bind(null, /*! ./intro/intro.module */ "PQfJ")).then(m => m.IntroPageModule)
    },
    {
        path: 'courses',
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | courses-courses-module */ "courses-courses-module").then(__webpack_require__.bind(null, /*! ./courses/courses.module */ "sU/i")).then(m => m.CoursesPageModule)
    },
    {
        path: 'exercise',
        loadChildren: () => __webpack_require__.e(/*! import() | training-training-module */ "training-training-module").then(__webpack_require__.bind(null, /*! ./training/training.module */ "CKRj")).then(m => m.TrainingPageModule)
    },
    {
        path: 'test-finished',
        loadChildren: () => Promise.all(/*! import() | training-test-course-test-finished-test-finished-module */[__webpack_require__.e("common"), __webpack_require__.e("training-test-course-test-finished-test-finished-module")]).then(__webpack_require__.bind(null, /*! ./training/test-course/test-finished/test-finished.module */ "MD7V")).then(m => m.TestFinishedPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => Promise.all(/*! import() | pages-faq-faq-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-faq-faq-module")]).then(__webpack_require__.bind(null, /*! ./pages/faq/faq.module */ "BhQr")).then(m => m.FaqPageModule)
    },
    {
        path: 'policy',
        loadChildren: () => Promise.all(/*! import() | pages-policy-policy-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-policy-policy-module")]).then(__webpack_require__.bind(null, /*! ./pages/policy/policy.module */ "nGq5")).then(m => m.PolicyPageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-contact-us-contact-us-module */ "pages-contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ./pages/contact-us/contact-us.module */ "QCdY")).then(m => m.ContactUsPageModule)
    },
    {
        path: 'thanks-rating',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-thanks-rating-thanks-rating-module */ "pages-thanks-rating-thanks-rating-module").then(__webpack_require__.bind(null, /*! ./pages/thanks-rating/thanks-rating.module */ "a3IP")).then(m => m.ThanksRatingPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yN/h":
/*!************************************!*\
  !*** ./src/app/app-interceptor.ts ***!
  \************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");









src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
let AppInterceptor = class AppInterceptor {
    // BASE_URL = environment.api_base_url;
    constructor(router, navCtrl, storageService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
    }
    intercept(req, next) {
        state: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterStateSnapshot"];
        // this.spinner.show();
        // Handling Authorization And Lang
        // console.log(`men d ${this.BASE_URL}/${this.storageService.getLang().code}/${req.url}`);
        // if (!this.validUrl(req.url)) {
        req = req.clone({
            url: `${req.url}`,
            headers: req.headers.set("Authorization", `Bearer ${this.storageService.getAccessToken()}`),
        });
        // }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // this.spinner.hide();
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            if (error.status === 401) {
                this.storageService.removeStorage("access_token");
                this.storageService.removeStorage("user");
                this.navCtrl.navigateRoot(["/auth/sign-in"], {
                    queryParams: {
                        returnUrl: this.router.routerState.snapshot.url,
                    },
                });
            }
            else if (error.status === 500) {
                console.log("something went wrong");
            }
            else if (error.status === 403) {
                this.storageService.removeStorage("access_token");
                this.storageService.removeStorage("user");
                this.navCtrl.navigateRoot(["/auth/sign-in"], {
                    queryParams: {
                        returnUrl: this.router.routerState.snapshot.url,
                    },
                });
            }
            const started = Date.now();
            const elapsed = Date.now() - started;
            // console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            // debugger;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    /**
     * Check if the url is valid and has http or https.
     */
    validUrl(url) {
        return url.includes("http://") || url.includes("https://");
    }
};
AppInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
AppInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppInterceptor);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  color: #fff;\n  font-weight: 600;\n  margin: 0;\n}\n\nion-item {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.info ion-item {\n  margin: 6px 0;\n}\n\n.info ion-text {\n  font-size: 14px;\n  font-weight: 500;\n  padding-left: 10px;\n  text-transform: lowercase;\n}\n\n.info ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 25px;\n}\n\n.social-media {\n  text-align: center;\n}\n\n.social-media ul {\n  list-style: none;\n  padding: 0;\n  margin: 20px 0;\n  cursor: pointer;\n}\n\n.social-media ul li {\n  display: inline-block;\n  margin: 0 10px;\n}\n\n.social-media ion-img {\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n}\n\n.social ul {\n  list-style: none;\n  padding: 0;\n  margin: 10px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.social ul li {\n  display: inline-block;\n  width: 15%;\n  padding: 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FBRko7O0FBT0E7RUFFRSxrQkFBQTtBQUxGOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFPSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUxOOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBUEo7O0FBWUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBVEo7O0FBV0k7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBVE4iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmluZm8ge1xuICBpb24taXRlbSB7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgfVxuXG4gIGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG59XG5cbi5zb2NpYWwtbWVkaWEge1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4uc29jaWFsIHtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDE1JTtcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map