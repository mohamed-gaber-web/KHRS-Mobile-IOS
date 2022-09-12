(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-courses-status-user-courses-status-module"],{

/***/ "D8sZ":
/*!*************************************************************************************!*\
  !*** ./src/app/auth/user-profile/user-courses-status/user-courses-status.module.ts ***!
  \*************************************************************************************/
/*! exports provided: UserCoursesStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoursesStatusPageModule", function() { return UserCoursesStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _user_courses_status_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-courses-status-routing.module */ "HUwt");
/* harmony import */ var _user_courses_status_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-courses-status.page */ "hZkv");








let UserCoursesStatusPageModule = class UserCoursesStatusPageModule {
};
UserCoursesStatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _user_courses_status_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserCoursesStatusPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [_user_courses_status_page__WEBPACK_IMPORTED_MODULE_7__["UserCoursesStatusPage"]]
    })
], UserCoursesStatusPageModule);



/***/ }),

/***/ "HUwt":
/*!*********************************************************************************************!*\
  !*** ./src/app/auth/user-profile/user-courses-status/user-courses-status-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: UserCoursesStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoursesStatusPageRoutingModule", function() { return UserCoursesStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_courses_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-courses-status.page */ "hZkv");




const routes = [
    {
        path: '',
        component: _user_courses_status_page__WEBPACK_IMPORTED_MODULE_3__["UserCoursesStatusPage"]
    }
];
let UserCoursesStatusPageRoutingModule = class UserCoursesStatusPageRoutingModule {
};
UserCoursesStatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserCoursesStatusPageRoutingModule);



/***/ }),

/***/ "QodW":
/*!*************************************************************************************!*\
  !*** ./src/app/auth/user-profile/user-courses-status/user-courses-status.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-course-status {\n  width: 95%;\n  margin: 20px auto;\n  box-shadow: -2px 6px 10px 0px rgba(0, 0, 0, 0.31);\n  border-radius: 15px;\n  border: 2px solid #8AFA6F;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.user-course-status .user-course-status__left {\n  width: 28%;\n}\n.user-course-status .user-course-status__left img {\n  width: 85%;\n  height: 119px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 2px solid #062F87;\n}\n.user-course-status .user-course-status__center {\n  margin-top: 5px;\n  position: relative;\n  left: -10px;\n}\n.user-course-status .user-course-status__center h3 {\n  margin: 0 0 3px 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #000000;\n  line-height: 19px;\n}\n.user-course-status .user-course-status__center h4, .user-course-status .user-course-status__center p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #A7A6A6;\n}\n.user-course-status .user-course-status__right {\n  margin-top: 25px;\n  text-align: center;\n}\n.user-course-status .user-course-status__right img {\n  max-width: 35%;\n  height: auto;\n}\n.user-course-status .user-course-status__right ion-icon {\n  font-size: 35px;\n  cursor: pointer;\n}\n.user-course-status .user-status {\n  font-size: 13px;\n  font-weight: 600;\n}\n.user-course-status .user-course-success {\n  color: #219A04;\n}\n.user-course-status .user-course-error {\n  color: #FF0000;\n}\n@media (min-width: 480px) and (max-width: 1024px) {\n  .user-course-status__left {\n    width: 40%;\n  }\n  .user-course-status__left img {\n    width: 100%;\n    height: 119px;\n  }\n\n  .user-course-status__center h3 {\n    font-size: 18px;\n  }\n  .user-course-status__center h4, .user-course-status__center p {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VzZXItY291cnNlcy1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ047QUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFETjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUhOO0FBTUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUpOO0FBUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNFO0VBQ0UsY0FBQTtBQVBKO0FBVUU7RUFDRSxjQUFBO0FBUko7QUFhQTtFQUVJO0lBQ0UsVUFBQTtFQVhKO0VBWUk7SUFBSyxXQUFBO0lBQWEsYUFBQTtFQVJ0Qjs7RUFZSTtJQUFJLGVBQUE7RUFSUjtFQVNJO0lBQU8sZUFBQTtFQU5YO0FBQ0YiLCJmaWxlIjoidXNlci1jb3Vyc2VzLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb3Vyc2Utc3RhdHVzIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IC0ycHggNnB4IDEwcHggMHB4IHJnYigwIDAgMCAvIDMxJSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4QUZBNkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcblxuICAudXNlci1jb3Vyc2Utc3RhdHVzX19sZWZ0ICB7XG4gICAgd2lkdGg6IDI4JTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgaGVpZ2h0OiAxMTlweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNjJGODc7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItY291cnNlLXN0YXR1c19fY2VudGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGgzIHtcbiAgICBtYXJnaW46IDAgMCAzcHggMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB9XG5cbiAgICBoNCwgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICNBN0E2QTY7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItY291cnNlLXN0YXR1c19fcmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMzUlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAudXNlci1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnVzZXItY291cnNlLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjMjE5QTA0O1xuICB9XG5cbiAgLnVzZXItY291cnNlLWVycm9yIHtcbiAgICBjb2xvcjogI0ZGMDAwMDtcbiAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAudXNlci1jb3Vyc2Utc3RhdHVzX19sZWZ0ICB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgaW1nIHt3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMTlweDt9XG4gICAgfVxuXG4gICAgLnVzZXItY291cnNlLXN0YXR1c19fY2VudGVyIHtcbiAgICAgIGgzIHtmb250LXNpemU6IDE4cHg7fVxuICAgICAgaDQsIHAge2ZvbnQtc2l6ZTogMTZweDt9XG4gICAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "hZkv":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/user-profile/user-courses-status/user-courses-status.page.ts ***!
  \***********************************************************************************/
/*! exports provided: UserCoursesStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoursesStatusPage", function() { return UserCoursesStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_courses_status_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-courses-status.page.html */ "ziMZ");
/* harmony import */ var _user_courses_status_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-courses-status.page.scss */ "QodW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../auth.service */ "qXBG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






let UserCoursesStatusPage = class UserCoursesStatusPage {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.isLoading = false;
        this.sub = [];
    }
    ngOnInit() {
        this.getProfileDataList(); // *** get user course status
    }
    // *** get user course status
    getProfileDataList() {
        this.isLoading = true;
        this.sub.push(this.authService.getProfileDataList()
            .subscribe(response => {
            console.log(response);
            this.isLoading = false;
            this.userDataList = response['result'];
            this.userDataLength = response['length'];
        }));
    }
    courseDetails(courseId, userId) {
        this.route.navigate(['courses/tabs/choose-course-material', { courseId, userId }]);
    }
    ngOnDestroy() {
        this.sub.forEach(s => {
            s.unsubscribe();
        });
    }
};
UserCoursesStatusPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserCoursesStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-user-courses-status',
        template: _raw_loader_user_courses_status_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_courses_status_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserCoursesStatusPage);



/***/ }),

/***/ "ziMZ":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-courses-status/user-courses-status.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header></app-top-header>\n\n  <div class=\"top-title\">\n    <h3> My Courses Status </h3>\n  </div>\n\n<ion-content>\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\n\n  <div class=\"user-course-status\" *ngFor=\"let userList of userDataList\">\n    <div class=\"user-course-status__left\">\n      <img [src]=\"userList.imagePath\" loading=\"lazy\" alt=\"\" />\n    </div>\n\n    <div class=\"user-course-status__center\">\n      <h3> {{userList.courseName}} </h3>\n      <h4> {{userList.startDate | date}} - {{userList.endDate | date}} </h4>\n      <p *ngIf=\"userList.score || userList.score !== null\"> score: {{userList.score}} %</p>\n      <p>  </p>\n      <h5 *ngIf=\"userList.status !== 3\" class=\"user-status user-course-success\"> {{userList.statusName}} </h5>\n      <h5 *ngIf=\"userList.status === 3\" class=\"user-status user-course-error\"> {{userList.statusName}} </h5>\n    </div>\n\n    <div class=\"user-course-status__right\">\n      <div (click)=\"courseDetails(userList.courseId, userList.courseId)\"> <ion-icon name=\"play\"></ion-icon> </div>\n      <img *ngIf=\"userList.status === 5\"  src=\"../../../../assets/images/inprogress.png\" loading=\"lazy\" alt=\"\" />\n      <img *ngIf=\"userList.status === 1\" src=\"../../../../assets/images/completed.png\" loading=\"lazy\" alt=\"\" />\n      <img *ngIf=\"userList.status === 3\" src=\"../../../../assets/images/fail.png\" loading=\"lazy\" alt=\"\" />\n    </div>\n  </div>\n\n  <div class=\"no-result\" *ngIf=\"userDataLength <= 0\">\n    <img src=\"../../../../assets/images/sorry.png\" alt=\"\" loading=\"lazy\" />\n    <p> There is no data  </p>\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=user-courses-status-user-courses-status-module.js.map