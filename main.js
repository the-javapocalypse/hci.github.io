(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!--<app-landing></app-landing>-->\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HCI Activity';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_landing_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/landing/attendance/attendance.component */ "./src/app/components/landing/attendance/attendance.component.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student.service */ "./src/app/student.service.ts");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/result/result.component */ "./src/app/components/result/result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'landing', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"] },
    { path: 'attendance', component: _components_landing_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_12__["AttendanceComponent"] },
    { path: 'result', component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_14__["ResultComponent"] },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
                _components_landing_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_12__["AttendanceComponent"],
                _components_result_result_component__WEBPACK_IMPORTED_MODULE_14__["ResultComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _student_service__WEBPACK_IMPORTED_MODULE_13__["StudentService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/landing/attendance/attendance.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/landing/attendance/attendance.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.phone {\r\n  background-image: url('bg1.jpg');\r\n  background-size: 100% 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/landing/attendance/attendance.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/attendance/attendance.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh; background-image: url('../../../../assets/bg1.jpg'); background-size: 100% 100%;\">\r\n\r\n\r\n  <div class=\"container\" [class.hide]=\"!startAttendace\" [class.phone]=\"phone\" style=\"position: relative; top: 15%;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-10\">\r\n        <mat-card>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h2 class=\"text-center\">Instructions</h2>\r\n              <hr>\r\n              <p class=\"text-justify\">The purpose of this activity is to evaluate the accuracy and efficiency of taking\r\n                attendance by changing\r\n                the defaults. You might want to look the image at right (or below if you are using via smartphone), so\r\n                that when conducting\r\n                attendance the interface seems familiar and eliminated the biasness caused by the first time usage.\r\n                Before\r\n                starting, you need to select the default option for attendance, i.e,\r\n                if you select 'Present', all students will be present by default and vice versa.</p>\r\n              <p><b>Note:</b> Refreshing at any point will reset your session.</p>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Default Option\" [(ngModel)]=\"defaultOption\">\r\n                  <mat-option *ngFor=\"let defualt of defualts\" [value]=\"defualt\">\r\n                    {{defualt}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <br><br>\r\n              <button mat-stroked-button color=\"primary\" (click)=\"startTimer()\" class=\"btn-block\">Start</button>\r\n              <!--<div class=\"btn btn-success\" (click)=\"startTimer()\"> start</div>-->\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <img src=\"../../../../assets/edit.png\" class=\"img-fluid\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <br><br><br><br>\r\n  </div>\r\n\r\n\r\n  <div class=\"container-fluid\" [class.hide]=\"startAttendace\"\r\n       style=\"background-image: url('../../../../assets/bg1.jpg'); background-size: 100% 100%\">\r\n    <br><br>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1\"></div>\r\n        <div class=\"col-md-10\">\r\n          <mat-card>\r\n            <h2 class=\"text-center\">Attendance Portal</h2>\r\n            <br><br>\r\n            <table class=\"table table-bordered table-responsive-sm\">\r\n              <thead>\r\n              <tr>\r\n                <th>Roll No.</th>\r\n                <th>Name</th>\r\n                <th>Attendance</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let record of numbers\">\r\n                <td>{{data[record].RollNo}}</td>\r\n                <td>{{data[record].Name}}</td>\r\n                <td>\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"studentSelected[record]\" (click)=\"noteTime()\">\r\n                      <option>Present</option>\r\n                      <option>Late</option>\r\n                      <option>Absent</option>\r\n                    </select>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <br>\r\n            <!--<div class=\"btn btn-default\" (click)=\"stopTimer()\"> Stop</div>-->\r\n            <button mat-stroked-button color=\"primary\" (click)=\"stopTimer()\" class=\"btn-block\">Finish</button>\r\n            <br><br>\r\n          </mat-card>\r\n          <br><br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/attendance/attendance.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/attendance/attendance.component.ts ***!
  \***********************************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../student.service */ "./src/app/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(_studentService, router) {
        this._studentService = _studentService;
        this.router = router;
        this.defualts = ['Present', 'Absent'];
        this.defaultOption = '';
        this.startAttendace = true;
        this.today = Date.now();
        this.data = this._studentService.getRecords();
        this.studentSelected = Array(30).fill(this.defaultOption);
        // @ts-ignore
        this.numbers = Array(30).fill().map(function (x, i) { return i; }); // [0,1,2,3,4]
        this.correct = 0;
        this.wrong = 0;
        this.timeStamps = [];
        this.previousStamp = 0;
        this.alternate = 1;
        this.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        this.phone = this.width < 450;
        // console.log('in atted=endance');
        console.log(this._studentService.data);
        if (this._studentService.data.id === 'abc') {
            this.router.navigate(['landing']);
        }
    }
    AttendanceComponent.prototype.startTimer = function () {
        if (this.defaultOption === '') {
            alert('Please choose the default option for attendance');
            return;
        }
        this.startAttendace = false;
        var srt = Date.now();
        this.today = srt;
        this.previousStamp = srt;
        this._studentService.data.startTime = srt;
        this.studentSelected.fill(this.defaultOption);
    };
    AttendanceComponent.prototype.stopTimer = function () {
        // this.startAttendace = true;
        console.log('time took');
        var stp = Date.now();
        console.log((stp - this.today) / 1000);
        this._studentService.data.endTime = stp;
        this._studentService.data.selection = this.studentSelected;
        this._studentService.data.timeStamps = this.timeStamps;
        console.log(this._studentService.data);
        this.compareResults();
        this.router.navigate(['result']);
    };
    AttendanceComponent.prototype.compareResults = function () {
        for (var i = 0; i < 30; i++) {
            if (this._studentService.data.selection[i] === this._studentService.records[i].Attendance) {
                this.correct++;
            }
            else {
                this.wrong++;
            }
        }
        console.log('correct:' + this.correct + ' wrong:' + this.wrong);
        this._studentService.data.correct = this.correct;
        this._studentService.data.wrong = this.wrong;
    };
    AttendanceComponent.prototype.noteTime = function () {
        if (this.alternate > 0) {
            this.alternate *= -1;
        }
        else {
            var t = Date.now();
            this.timeStamps.push((t - this.previousStamp) / 1000);
            this.previousStamp = t;
            this.alternate *= -1;
            console.log(this.timeStamps);
        }
    };
    AttendanceComponent.prototype.ngOnInit = function () {
    };
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/components/landing/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/components/landing/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainApp{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url('bg1.jpg');\r\n  overflow-x: hidden;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.mainAppChild{\r\n  /*height: 80vh;*/\r\n  /*background-color: rgba(255,255,255,0.5);*/\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainApp\">\r\n  <div class=\"row\" style=\"height: 10vh;\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div class=\"col-md-4 text-center mainAppChild\">\r\n      <mat-card style=\"position: relative; top: 50%;\">\r\n        <h2>HCI Activity 1</h2>\r\n        <hr>\r\n        <br>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Roll Number\" [(ngModel)]=\"rollNo\">\r\n          <mat-hint>Example: k152123</mat-hint>\r\n        </mat-form-field>\r\n        &nbsp; &nbsp;<button mat-stroked-button color=\"primary\" (click)=\"startSess()\" >Start</button>\r\n        <br><br>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingComponent = /** @class */ (function () {
    function LandingComponent(_studentService, router, httpClient, titleService) {
        // console.log('constructor');
        // // Initialize Params Object
        // let Params = new HttpParams();
        // // Begin assigning parameters
        // Params = Params.append('firstParameter', 'Ali');
        // Params = Params.append('secondParameter', 'Zia');
        // return this.httpClient.get('http://javapocalypse.tdevs.org/api.php'
        //   , {
        //     params: {params: Params}
        //   }).subscribe(data => {
        //   // show data in console
        //   console.log(data);
        // });
        this._studentService = _studentService;
        this.router = router;
        this.httpClient = httpClient;
        this.titleService = titleService;
        this.rollNo = '';
        // httpClient.post('http://javapocalypse.tdevs.org/api.php', {'email': 'aaa', 'password': 'aaa'})
        //   .subscribe(data =>  {
        //     console.log(' ------------ ' + data);
        //   });
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('HCI Activity');
        console.log('On Init');
        console.log(this._studentService.data);
        this._studentService.data.id = this.rollNo;
        console.log('On Init after');
        console.log(this._studentService.data);
    };
    LandingComponent.prototype.startSess = function () {
        if (this.rollNo === '' || this.rollNo[0].toLowerCase() !== 'k' || this.rollNo.length !== 7) {
            alert('Make sure you are entering roll number in the correct format. For example, k152123');
            return;
        }
        this._studentService.data.id = this.rollNo;
        console.log(this._studentService.data);
        this.router.navigate(['attendance']);
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/result/result.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/result/result.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/result/result.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/result/result.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-image: url('../../../assets/bg1.jpg'); background-size: 100% 100%;\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-10\">\r\n        <br><br>\r\n        <mat-card>\r\n          <h2 class=\"text-center\">Attendance Results</h2>\r\n          <hr>\r\n          <br><br>\r\n          <p>\r\n            You got {{studentData.correct}} correct and {{studentData.wrong}} wrong results, which means you were {{ studentData.correct/30 | percent }} accurate.\r\n            You took {{ (studentData.endTime - studentData.startTime)/1000  | number:'2.1-2'}} seconds to complete the attendance procedure. Average time to perform\r\n            an action, i.e to mark a student present or absent was {{avgTime | number:'2.1-2'}} seconds. Following is the real attendance\r\n            vs the attendance you took.\r\n          </p>\r\n          <button mat-stroked-button color=\"primary\" (click)=\"postResults()\" class=\"btn-block\">Submit</button>\r\n          <br><br>\r\n          <table class=\"table table-bordered table-responsive-sm\">\r\n            <thead>\r\n            <tr>\r\n              <th>Roll No.</th>\r\n              <th>Name</th>\r\n              <th>Actual Attendance</th>\r\n              <th>You Entered</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let record of numbers\">\r\n              <td>{{data[record].RollNo}}</td>\r\n              <td>{{data[record].Name}}</td>\r\n              <td>{{data[record].Attendance}}</td>\r\n              <td>{{studentData.selection[record]}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <br>\r\n          <!--<div class=\"btn btn-default\" (click)=\"stopTimer()\"> Stop</div>-->\r\n          <br><br>\r\n        </mat-card>\r\n        <br><br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/result/result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = /** @class */ (function () {
    function ResultComponent(_studentService, router, httpClient) {
        this._studentService = _studentService;
        this.router = router;
        this.httpClient = httpClient;
        // @ts-ignore
        this.numbers = Array(30).fill().map(function (x, i) { return i; }); // [0,1,2,3,4]
        this.data = this._studentService.getRecords();
        this.studentData = this._studentService.data;
        this.avgTime = 0;
        if (this._studentService.data.id === 'abc') {
            this.router.navigate(['landing']);
        }
        else {
            for (var i = 0; i < _studentService.data.timeStamps.length; i++) {
                this.avgTime += _studentService.data.timeStamps[i];
            }
            this.avgTime /= _studentService.data.timeStamps.length;
            _studentService.data.avgTime = this.avgTime;
        }
    }
    ResultComponent.prototype.postResults = function () {
        this.httpClient.post('http://javapocalypse.tdevs.org/api.php', {
            // 'id': this._studentService.data.id,
            // 'correct': this._studentService.data.correct,
            // 'wrong': this._studentService.data.wrong,
            // 'time': ((this._studentService.data.endTime - this._studentService.data.startTime) / 1000).toString(),
            // 'avgTIme': this._studentService.data.avgTime
            'email': this._studentService.data.id.toString(),
            'correct': this._studentService.data.correct.toString(),
            'wrong': this._studentService.data.wrong.toString(),
            'time': ((this._studentService.data.endTime - this._studentService.data.startTime) / 1000).toString(),
            'avg': this._studentService.data.avgTime.toString(),
        })
            .subscribe(function (data) {
            if (data === 200) {
                alert('Activity submitted');
            }
            else {
                alert('Oops! something went wrong. Unable to create record. Please inform your teacher.');
            }
        });
    };
    ResultComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/components/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/components/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentService = /** @class */ (function () {
    function StudentService() {
        this.data = {
            'id': 'abc',
            'startTime': 0,
            'endTime': 0,
            'selection': [],
            'correct': 0,
            'wrong': 0,
            'timeStamps': [],
            'avgTime': 0
        };
        this.records = [
            {
                Name: 'Bunny Rempel',
                RollNo: '1024',
                Attendance: 'Present'
            },
            {
                Name: 'Danyelle Scoles',
                RollNo: '1027',
                Attendance: 'Present'
            },
            {
                Name: 'Marylynn Huizenga',
                RollNo: '1028',
                Attendance: 'Absent'
            },
            {
                Name: 'Kiersten Mares',
                RollNo: '1120',
                Attendance: 'Present'
            },
            {
                Name: 'Katrina Done',
                RollNo: '1224',
                Attendance: 'Present'
            },
            {
                Name: 'Jamel Fern',
                RollNo: '1054',
                Attendance: 'Present'
            },
            {
                Name: 'Demetria Willmon',
                RollNo: '1030',
                Attendance: 'Absent'
            },
            {
                Name: 'Alonzo Storch',
                RollNo: '1222',
                Attendance: 'Absent'
            },
            {
                Name: 'Hillary Felice',
                RollNo: '1424',
                Attendance: 'Present'
            },
            {
                Name: 'Jama Dunkel',
                RollNo: '1037',
                Attendance: 'Present'
            },
            {
                Name: 'Shemika Shumate',
                RollNo: '1324',
                Attendance: 'Present'
            },
            {
                Name: 'China Harmer',
                RollNo: '1330',
                Attendance: 'Present'
            },
            {
                Name: 'Leana Spoto',
                RollNo: '1555',
                Attendance: 'Present'
            },
            {
                Name: 'Daniele Rosas',
                RollNo: '1388',
                Attendance: 'Absent'
            },
            {
                Name: 'Kali Fennessey',
                RollNo: '1095',
                Attendance: 'Present'
            },
            {
                Name: 'Pauline Downer',
                RollNo: '1101',
                Attendance: 'Present'
            },
            {
                Name: 'Donny Kieffer',
                RollNo: '1300',
                Attendance: 'Present'
            },
            {
                Name: 'Ardelle Halpern',
                RollNo: '1654',
                Attendance: 'Present'
            },
            {
                Name: 'Lauretta Brunetti',
                RollNo: '1484',
                Attendance: 'Absent'
            },
            {
                Name: 'Lorie Blazier',
                RollNo: '1499',
                Attendance: 'Present'
            },
            {
                Name: 'Lisabeth Glandon',
                RollNo: '2222',
                Attendance: 'Absent'
            },
            {
                Name: 'Sofia Looby',
                RollNo: '1765',
                Attendance: 'Present'
            },
            {
                Name: 'Luetta Domenick',
                RollNo: '1591',
                Attendance: 'Present'
            },
            {
                Name: 'Piedad Taylor',
                RollNo: '2048',
                Attendance: 'Present'
            },
            {
                Name: 'Shaniqua Wolanski',
                RollNo: '1987',
                Attendance: 'Present'
            },
            {
                Name: 'Dahlia Schwanke',
                RollNo: '1602',
                Attendance: 'Present'
            },
            {
                Name: 'Shanna Turk',
                RollNo: '2999',
                Attendance: 'Absent'
            },
            {
                Name: 'Cyril Randell',
                RollNo: '9024',
                Attendance: 'Present'
            },
            {
                Name: 'Terese Schmidt',
                RollNo: '8884',
                Attendance: 'Absent'
            },
            {
                Name: 'Arden Amann',
                RollNo: '9283',
                Attendance: 'Absent'
            }
        ];
    }
    StudentService.prototype.getRecords = function () {
        return this.records;
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Github\CS422-TA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map