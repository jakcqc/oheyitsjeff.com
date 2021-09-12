(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" >\r\n<div id = \"background\">\r\n<div class=\"lamp\">\r\n    <div class=\"lava\">\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob top\"></div>\r\n      <div class=\"blob bottom\"></div>\r\n      \r\n    </div>\r\n</div>\r\n<svg id = \"back\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n  <defs>\r\n    <filter id=\"goo\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"2\" result=\"blur\" />\r\n      \r\n    </filter>\r\n  </defs>\r\n</svg>\r\n<img id = \"logo\" (click) = \"routePage('home')\" src = \"assets/nameLogoV2.png\">\r\n<div id=\"loginCard\">\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm.value)\">\r\n    <div id = \"createAccount\">Login and explore your reccomended</div>\r\n    \r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"username\" placeholder = \"Username\" required></ion-input></ion-item>\r\n    \r\n    \r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"pass1\" placeholder = \"Password\" type=\"password\" required></ion-input></ion-item>\r\n\r\n         <div id = \"buttonSub\" class = \"formInfo\"><button id = \"submitButton\" type=\"submit\" >Login</button></div> \r\n                  <div id = \"accountAlready\" (click) = \"routePage('signup')\"><span>Don't have an acount?</span></div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/views/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/views/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/views/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/views/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/views/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  width: 20%;\n  margin: 10px;\n}\n\n#loginCard {\n  height: 500px;\n  width: 300px;\n  margin: 2.5% auto 10px auto;\n  border-radius: 5px;\n  border-bottom: 5px solid white;\n  border-top: 5px solid white;\n  padding: 20px;\n  background-color: rgba(2, 2, 2, 0.75);\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 400;\n}\n\n#accountAlready {\n  display: block;\n  padding-top: 10px;\n  text-align: center;\n}\n\n#accountAlready span {\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n#accountAlready span:hover {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #179cbd;\n          text-decoration-color: #179cbd;\n  text-decoration-thickness: 2px;\n}\n\n.formInfo {\n  margin-top: 30px;\n  font-size: 25px;\n  font-style: italic;\n}\n\n.textStuf {\n  font-size: 25px;\n  font-style: italic;\n}\n\nion-item {\n  --highlight-color-focused: rgb(27, 192, 233);\n  --background:none;\n  margin-top: 10px;\n  font-size: 20px;\n  font-style: italic;\n  --border-color: rgb(27, 192, 233);\n}\n\n#submitButton {\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  background-color: rgba(2, 2, 2, 0.2);\n  height: 50px;\n  padding: 10px;\n  border: 2px solid #1bc0e9;\n  border-bottom: 4px solid #1bc0e9;\n  transition: 1s;\n}\n\n#buttonSub {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#submitButton:hover {\n  background-color: rgba(2, 2, 2, 0.75);\n  border-color: #d3d6e0;\n}\n\n#createAccount {\n  font-size: 35px;\n  font-weight: 600;\n  margin-bottom: 70px;\n  font-family: \"Raleway\", sans-serif;\n}\n\n#logo {\n  position: absolute;\n  top: 1%;\n  left: 1%;\n  z-index: 15;\n  cursor: pointer;\n  height: auto;\n  width: 200px;\n}\n\n#background {\n  position: inherit;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(36, 36, 36, 0.9));\n  z-index: 3;\n}\n\n.lamp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  height: 100vh;\n  width: 100vw;\n  min-width: 100vw;\n  z-index: -2;\n  overflow: hidden;\n}\n\n.lava {\n  filter: url(\"#goo\");\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.blob {\n  border-radius: 50%;\n  background: #d3d6e0;\n  /* Other sample colors:\n  Orange: #e8630a\n  Pink: #EA3281\n  Fuscia: #E71669\n  Purple: #661BAC\n  Yellow: #FDC600\n  Kermit green: #75AC25\n  Light blue: #3283B5\n  Dark blue: #0A5D9A\n  Gunmetal: #232F37\n  BGLight: #1B2735\n  BGDark: #090a0f\n  Want more colors? check out https://coolors.co/ for inspiration.\n  */\n  position: absolute;\n}\n\n.blob.top {\n  width: 100%;\n  top: -3%;\n  left: 0;\n}\n\n.blob.bottom {\n  width: 100%;\n  bottom: -3%;\n  left: 0;\n}\n\n.blob:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 15%;\n  top: 50%;\n  -webkit-animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n          animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n}\n\n.blob:nth-child(2) {\n  width: 25px;\n  height: 25px;\n  right: 15%;\n  top: 25%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n}\n\n.blob:nth-child(3) {\n  width: 50px;\n  height: 45px;\n  top: 50%;\n  left: 34%;\n  -webkit-animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n          animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n}\n\n.blob:nth-child(4) {\n  width: 31px;\n  height: 30px;\n  top: 50%;\n  left: 30%;\n  -webkit-animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n\n.blob:nth-child(4) {\n  width: 34px;\n  height: 36px;\n  top: 50%;\n  left: 30%;\n  -webkit-animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n\n.blob:nth-child(5) {\n  width: 55px;\n  height: 55px;\n  top: 0%;\n  left: 34%;\n  -webkit-animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n          animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n}\n\n.blob:nth-child(6) {\n  width: 35px;\n  height: 35px;\n  top: 80%;\n  right: 34%;\n  -webkit-animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n          animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n}\n\n.blob:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  top: 10%;\n  right: 35%;\n  -webkit-animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n          animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n}\n\n.blob:nth-child(8) {\n  width: 25px;\n  height: 25px;\n  top: 0%;\n  right: 5%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n}\n\n.blob:nth-child(9) {\n  width: 40px;\n  height: 37px;\n  top: 20%;\n  right: 82%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n}\n\n@-webkit-keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(420%);\n  }\n}\n\n@keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(420%);\n  }\n}\n\n@-webkit-keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(305%);\n  }\n}\n\n@keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(305%);\n  }\n}\n\n@-webkit-keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(605%);\n  }\n}\n\n@keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(605%);\n  }\n}\n\n@-webkit-keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(300%);\n  }\n}\n\n@keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(300%);\n  }\n}\n\n@-webkit-keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(820%);\n  }\n}\n\n@keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(820%);\n  }\n}\n\n@-webkit-keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(620%);\n  }\n}\n\n@keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(620%);\n  }\n}\n\n@-webkit-keyframes wobble {\n  50% {\n    background: #b8b8b8;\n  }\n  100% {\n    background: white;\n  }\n}\n\n@keyframes wobble {\n  50% {\n    background: #b8b8b8;\n  }\n  100% {\n    background: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBRUEscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBSUE7RUFDSSwwQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksNENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUNBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBRko7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0FBSEo7O0FBS0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBSEo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFHQSw0RUFB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RSx3QkFBQTtFQXJCSjtFQXVCRTtJQUNHLDJCQUFBO0VBckJMO0FBQ0Y7O0FBZUU7RUFDRTtJQUNFLHdCQUFBO0VBckJKO0VBdUJFO0lBQ0csMkJBQUE7RUFyQkw7QUFDRjs7QUF1QkU7RUFDRTtJQUNFLHdCQUFBO0VBckJKO0VBdUJFO0lBQ0csMkJBQUE7RUFyQkw7QUFDRjs7QUFlRTtFQUNFO0lBQ0Usd0JBQUE7RUFyQko7RUF1QkU7SUFDRywyQkFBQTtFQXJCTDtBQUNGOztBQXVCRTtFQUNFO0lBQ0Usd0JBQUE7RUFyQko7RUF1QkU7SUFDRywyQkFBQTtFQXJCTDtBQUNGOztBQWVFO0VBQ0U7SUFDRSx3QkFBQTtFQXJCSjtFQXVCRTtJQUNHLDJCQUFBO0VBckJMO0FBQ0Y7O0FBd0JFO0VBQ0U7SUFDQSxtQkFBQTtFQXRCRjtFQXlCRTtJQUNJLGlCQUFBO0VBdkJOO0FBQ0Y7O0FBZ0JFO0VBQ0U7SUFDQSxtQkFBQTtFQXRCRjtFQXlCRTtJQUNJLGlCQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2xvZ2luQ2FyZHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDIuNSUgYXV0byAxMHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvL2JvcmRlcjogNHB4IHNvbGlkIHJnYig3NSwgNzUsIDc1KTtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyLCAyLCAwLjc1KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4jYWNjb3VudEFscmVhZHl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4jYWNjb3VudEFscmVhZHkgc3BhbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG4jYWNjb3VudEFscmVhZHkgc3Bhbjpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYigyMywgMTU2LCAxODkpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xyXG59XHJcbi5mb3JtSW5mb3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBcclxufVxyXG4udGV4dFN0dWZ7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIFxyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJnYigyNywgMTkyLCAyMzMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgXHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDI3LCAxOTIsIDIzMyk7XHJcbiAgfVxyXG4gXHJcbiNzdWJtaXRCdXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMiwgMiwgMC4yKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjcsIDE5MiwgMjMzKTtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoMjcsIDE5MiwgMjMzKTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4jYnV0dG9uU3Vie1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3N1Ym1pdEJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDIsIDIsIDAuNzUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDNkNmUwO1xyXG59XHJcbiNjcmVhdGVBY2NvdW50e1xyXG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo3MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG4jbG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMSU7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIFxyXG4gICAgei1pbmRleDogMTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG4jYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOmluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDc2LCAyMDcpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSxyZ2JhKDM2LCAzNiwgMzYsIDAuOSkpO1xyXG4gICAgei1pbmRleDogMztcclxuICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmxhbXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4Oi0yO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmxhdmF7XHJcbiAgICBmaWx0ZXI6IHVybChcIiNnb29cIik7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gIH1cclxuICBcclxuICAuYmxvYntcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkNmUwO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE2NiwgMTY5LCAxODApLHJnYig1MiwgODEsIDE1OCkpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxNjYsIDE2OSwgMTgwKSxyZ2IoNDMsIDY3LCAxMzQpKTtcclxuXHJcbiAgICAvKiBPdGhlciBzYW1wbGUgY29sb3JzOlxyXG4gICAgT3JhbmdlOiAjZTg2MzBhXHJcbiAgICBQaW5rOiAjRUEzMjgxXHJcbiAgICBGdXNjaWE6ICNFNzE2NjlcclxuICAgIFB1cnBsZTogIzY2MUJBQ1xyXG4gICAgWWVsbG93OiAjRkRDNjAwXHJcbiAgICBLZXJtaXQgZ3JlZW46ICM3NUFDMjVcclxuICAgIExpZ2h0IGJsdWU6ICMzMjgzQjVcclxuICAgIERhcmsgYmx1ZTogIzBBNUQ5QVxyXG4gICAgR3VubWV0YWw6ICMyMzJGMzdcclxuICAgIEJHTGlnaHQ6ICMxQjI3MzVcclxuICAgIEJHRGFyazogIzA5MGEwZlxyXG4gICAgV2FudCBtb3JlIGNvbG9ycz8gY2hlY2sgb3V0IGh0dHBzOi8vY29vbG9ycy5jby8gZm9yIGluc3BpcmF0aW9uLlxyXG4gICAgKi9cclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuYmxvYi50b3B7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiA0JTtcclxuICAgIHRvcDogLTMlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5ibG9iLmJvdHRvbXtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2hlaWdodDo0JTtcclxuICAgIGJvdHRvbTogLTMlO1xyXG4gICAgbGVmdDowO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoMSl7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHRvcDo1MCU7XHJcbiAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNHMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLW9uZSBlYXNlLWluLW91dCAxM3MgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCgyKXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIHRvcDoyNSU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDVzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi10d28gZWFzZS1pbi1vdXQgMjJzIGluZmluaXRlO1xyXG4gICBcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoMyl7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OiAzNCU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDZzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi10aHJlZSBlYXNlLWluLW91dCAxNnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg0KXtcclxuICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgN3MgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWZvdXIgZWFzZS1pbi1vdXQgMTJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoNCl7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA4cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZm91ciBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg1KXtcclxuICAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6IDM0JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgOXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWZpdmUgZWFzZS1pbi1vdXQgMzJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoNil7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRvcDo4MCU7XHJcbiAgICByaWdodDogMzQlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246d29iYmxlIDEwcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsICBibG9iLXNpeCBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg3KXtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdG9wOjEwJTtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDExcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2Itc2V2ZW4gZWFzZS1pbi1vdXQgMzJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoOCl7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRvcDowJTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWVpZ2h0IGVhc2UtaW4tb3V0IDMwcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJsb2I6bnRoLWNoaWxkKDkpe1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB0b3A6MjAlO1xyXG4gICAgcmlnaHQ6IDgyJTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLW5pbmUgZWFzZS1pbi1vdXQgMTVzIGluZmluaXRlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2Itb25le1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDcwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsb2ItdHdve1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDQyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsb2ItdGhyZWV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMzA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1mb3Vye1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDYwNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItZml2ZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNzAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1zaXh7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDcwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2Itc2V2ZW57XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDMwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItZWlnaHR7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDgyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItbmluZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNjIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgd29iYmxlIHtcclxuICAgIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgICAvL2JvcmRlci1yYWRpdXM6IDQyJSA1OCUgNzAlIDMwJSAvIDQ1JSA0NSUgNTUlIDU1JTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgLy9ib3JkZXItcmFkaXVzOiAzOCUgNTIlIDc1JSAzNiUgLyA1MCUgNDAlIDUwJSA2MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/views/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let LoginPage = class LoginPage {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.commentForm = this.formBuilder.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'pass1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    }
    routePage(name) {
        this.router.navigate([name]);
    }
    onSubmit(comment) {
        let success;
        if (comment.username == null || comment.pass1 == null) {
            success = 0;
        }
        else {
            success = 1;
        }
        //comment.username
        //comment.pass1 
        //you need to link up database and store this information and check it with the database
        //if good success == 1, else == 0 
        if (success == 1) {
            this.commentForm.reset();
            this.router.navigate(['/home']);
            //after pass we need to set const that user is logged in and store their info in an object that we can call to get their userID, etc
        }
        else {
            console.log("fail");
            this.commentForm.reset();
            this.router.navigate(['/login']);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/views/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=views-login-login-module-es2015.js.map