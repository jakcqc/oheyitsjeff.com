(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" >\r\n<div id = \"background\">\r\n<div class=\"lamp\">\r\n    <div class=\"lava\">\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob top\"></div>\r\n      <div class=\"blob bottom\"></div>\r\n      \r\n    </div>\r\n</div>\r\n<svg id = \"back\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n  <defs>\r\n    <filter id=\"goo\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"2\" result=\"blur\" />\r\n      \r\n    </filter>\r\n  </defs>\r\n</svg>\r\n<img id = \"logo\" (click) = \"routePage('home')\" src = \"assets/nameLogoV2.png\">\r\n<div id=\"loginCard\">\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm.value)\">\r\n    <div id = \"createAccount\">Create your account and start getting reccomended</div>\r\n    \r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"username\" placeholder = \"Username\" required></ion-input></ion-item>\r\n    \r\n    \r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"pass1\" placeholder = \"Password\" type=\"password\" required></ion-input></ion-item>\r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"pass2\" placeholder = \"Confirm Password\" type=\"password\" required></ion-input></ion-item>\r\n\r\n         <div id = \"buttonSub\" class = \"formInfo\"><button id = \"submitButton\" type=\"submit\" >Create Account</button></div>  \r\n         <div id = \"accountAlready\" (click) = \"routePage('login')\"><span>Already signed up?</span></div>\r\n    </form>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/views/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/views/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/views/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/views/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/views/signup/signup.page.ts");








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/views/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/views/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loginCard {\n  height: 580px;\n  width: 300px;\n  margin: 0% auto 10px auto;\n  border-radius: 5px;\n  border-bottom: 5px solid white;\n  border-top: 5px solid white;\n  padding: 20px;\n  background-color: rgba(2, 2, 2, 0.75);\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 400;\n}\n\n#accountAlready {\n  display: block;\n  padding-top: 10px;\n  text-align: center;\n}\n\n#accountAlready span {\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n#accountAlready span:hover {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #179cbd;\n          text-decoration-color: #179cbd;\n  text-decoration-thickness: 2px;\n}\n\n.formInfo {\n  margin-top: 30px;\n  font-size: 25px;\n  font-style: italic;\n}\n\n.textStuf {\n  font-size: 25px;\n  font-style: italic;\n}\n\nion-item {\n  --highlight-color-focused: rgb(27, 192, 233);\n  --background:none;\n  margin-top: 10px;\n  font-size: 20px;\n  font-style: italic;\n  --border-color: rgb(27, 192, 233);\n}\n\n#submitButton {\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  background-color: rgba(2, 2, 2, 0.2);\n  height: 50px;\n  padding: 10px;\n  border: 2px solid #1bc0e9;\n  border-bottom: 4px solid #1bc0e9;\n  transition: 0.8s;\n}\n\n#buttonSub {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#submitButton:hover {\n  background-color: rgba(2, 2, 2, 0.75);\n  border-color: #d3d6e0;\n}\n\n#createAccount {\n  font-size: 35px;\n  font-weight: 600;\n  margin-bottom: 70px;\n  font-family: \"Raleway\", sans-serif;\n}\n\n#logo {\n  position: absolute;\n  top: 1%;\n  left: 1%;\n  z-index: 15;\n  cursor: pointer;\n  height: auto;\n  width: 200px;\n}\n\n#background {\n  position: inherit;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(42, 42, 43, 0.9));\n  z-index: 3;\n}\n\n.lamp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  height: 100vh;\n  width: 100vw;\n  min-width: 100vw;\n  z-index: -2;\n  overflow: hidden;\n}\n\n.lava {\n  filter: url(\"#goo\");\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.blob {\n  border-radius: 50%;\n  background: #d3d6e0;\n  /* Other sample colors:\n  Orange: #e8630a\n  Pink: #EA3281\n  Fuscia: #E71669\n  Purple: #661BAC\n  Yellow: #FDC600\n  Kermit green: #75AC25\n  Light blue: #3283B5\n  Dark blue: #0A5D9A\n  Gunmetal: #232F37\n  BGLight: #1B2735\n  BGDark: #090a0f\n  Want more colors? check out https://coolors.co/ for inspiration.\n  */\n  position: absolute;\n}\n\n.blob.top {\n  width: 100%;\n  top: -3%;\n  left: 0;\n}\n\n.blob.bottom {\n  width: 100%;\n  bottom: -3%;\n  left: 0;\n}\n\n.blob:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 15%;\n  top: 50%;\n  -webkit-animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n          animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n}\n\n.blob:nth-child(2) {\n  width: 25px;\n  height: 25px;\n  right: 15%;\n  top: 25%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n}\n\n.blob:nth-child(3) {\n  width: 50px;\n  height: 45px;\n  top: 50%;\n  left: 34%;\n  -webkit-animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n          animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n}\n\n.blob:nth-child(4) {\n  width: 31px;\n  height: 30px;\n  top: 50%;\n  left: 30%;\n  -webkit-animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n\n.blob:nth-child(4) {\n  width: 34px;\n  height: 36px;\n  top: 50%;\n  left: 30%;\n  -webkit-animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n\n.blob:nth-child(5) {\n  width: 55px;\n  height: 55px;\n  top: 0%;\n  left: 34%;\n  -webkit-animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n          animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n}\n\n.blob:nth-child(6) {\n  width: 35px;\n  height: 35px;\n  top: 80%;\n  right: 34%;\n  -webkit-animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n          animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n}\n\n.blob:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  top: 10%;\n  right: 35%;\n  -webkit-animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n          animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n}\n\n.blob:nth-child(8) {\n  width: 25px;\n  height: 25px;\n  top: 0%;\n  right: 5%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n}\n\n.blob:nth-child(9) {\n  width: 40px;\n  height: 37px;\n  top: 20%;\n  right: 82%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n}\n\n@-webkit-keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(420%);\n  }\n}\n\n@keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(420%);\n  }\n}\n\n@-webkit-keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(305%);\n  }\n}\n\n@keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(305%);\n  }\n}\n\n@-webkit-keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(605%);\n  }\n}\n\n@keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(605%);\n  }\n}\n\n@-webkit-keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(300%);\n  }\n}\n\n@keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(300%);\n  }\n}\n\n@-webkit-keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(820%);\n  }\n}\n\n@keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(820%);\n  }\n}\n\n@-webkit-keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(620%);\n  }\n}\n\n@keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(620%);\n  }\n}\n\n@-webkit-keyframes wobble {\n  50% {\n    background: #b8b8b8;\n  }\n  100% {\n    background: white;\n  }\n}\n\n@keyframes wobble {\n  50% {\n    background: #b8b8b8;\n  }\n  100% {\n    background: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUVBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1BO0VBQ0ksMEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsOEJBQUE7QUFISjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGlDQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLHFDQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFPQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFMSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTEo7O0FBU0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUdBLDRFQUFBO0VBQ0EsVUFBQTtBQVJKOztBQWFBO0VBQ0ks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RywyQkFBQTtFQXZCTDtBQUNGOztBQWlCRTtFQUNFO0lBQ0Usd0JBQUE7RUF2Qko7RUF5QkU7SUFDRywyQkFBQTtFQXZCTDtBQUNGOztBQXlCRTtFQUNFO0lBQ0Usd0JBQUE7RUF2Qko7RUF5QkU7SUFDRywyQkFBQTtFQXZCTDtBQUNGOztBQWlCRTtFQUNFO0lBQ0Usd0JBQUE7RUF2Qko7RUF5QkU7SUFDRywyQkFBQTtFQXZCTDtBQUNGOztBQXlCRTtFQUNFO0lBQ0Usd0JBQUE7RUF2Qko7RUF5QkU7SUFDRywyQkFBQTtFQXZCTDtBQUNGOztBQWlCRTtFQUNFO0lBQ0Usd0JBQUE7RUF2Qko7RUF5QkU7SUFDRywyQkFBQTtFQXZCTDtBQUNGOztBQTBCRTtFQUNFO0lBQ0EsbUJBQUE7RUF4QkY7RUEyQkU7SUFDSSxpQkFBQTtFQXpCTjtBQUNGOztBQWtCRTtFQUNFO0lBQ0EsbUJBQUE7RUF4QkY7RUEyQkU7SUFDSSxpQkFBQTtFQXpCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2xvZ2luQ2FyZHtcclxuICAgIGhlaWdodDogNTgwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDAlIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy9ib3JkZXI6IDRweCBzb2xpZCByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMiwgMiwgMC43NSk7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuI2FjY291bnRBbHJlYWR5e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI2FjY291bnRBbHJlYWR5IHNwYW57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuI2FjY291bnRBbHJlYWR5IHNwYW46aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjpyZ2IoMjMsIDE1NiwgMTg5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcclxufVxyXG4uZm9ybUluZm97XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgXHJcbn1cclxuLnRleHRTdHVme1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiByZ2IoMjcsIDE5MiwgMjMzKTtcclxuICAgIC0tYmFja2dyb3VuZDpub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIFxyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigyNywgMTkyLCAyMzMpO1xyXG4gIH1cclxuIFxyXG4jc3VibWl0QnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDIsIDIsIDAuMik7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI3LCAxOTIsIDIzMyk7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDI3LCAxOTIsIDIzMyk7XHJcbiAgICB0cmFuc2l0aW9uOiAuOHM7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbiNidXR0b25TdWJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3VibWl0QnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMiwgMiwgMC43NSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNkM2Q2ZTA7XHJcbn1cclxuI2NyZWF0ZUFjY291bnR7XHJcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjcwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNsb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxJTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgXHJcbiAgICB6LWluZGV4OiAxNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuXHJcbiNiYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246aW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNzYsIDIwNykgIWltcG9ydGFudDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLHJnYmEoNDIsIDQyLCA0MywgMC45KSk7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4ubGFtcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIHotaW5kZXg6LTI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubGF2YXtcclxuICAgIGZpbHRlcjogdXJsKFwiI2dvb1wiKTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibG9ie1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2Q2ZTA7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2IoMTY2LCAxNjksIDE4MCkscmdiKDUyLCA4MSwgMTU4KSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDE2NiwgMTY5LCAxODApLHJnYig0MywgNjcsIDEzNCkpO1xyXG5cclxuICAgIC8qIE90aGVyIHNhbXBsZSBjb2xvcnM6XHJcbiAgICBPcmFuZ2U6ICNlODYzMGFcclxuICAgIFBpbms6ICNFQTMyODFcclxuICAgIEZ1c2NpYTogI0U3MTY2OVxyXG4gICAgUHVycGxlOiAjNjYxQkFDXHJcbiAgICBZZWxsb3c6ICNGREM2MDBcclxuICAgIEtlcm1pdCBncmVlbjogIzc1QUMyNVxyXG4gICAgTGlnaHQgYmx1ZTogIzMyODNCNVxyXG4gICAgRGFyayBibHVlOiAjMEE1RDlBXHJcbiAgICBHdW5tZXRhbDogIzIzMkYzN1xyXG4gICAgQkdMaWdodDogIzFCMjczNVxyXG4gICAgQkdEYXJrOiAjMDkwYTBmXHJcbiAgICBXYW50IG1vcmUgY29sb3JzPyBjaGVjayBvdXQgaHR0cHM6Ly9jb29sb3JzLmNvLyBmb3IgaW5zcGlyYXRpb24uXHJcbiAgICAqL1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5ibG9iLnRvcHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDQlO1xyXG4gICAgdG9wOiAtMyU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBcclxuICB9XHJcbiAgLmJsb2IuYm90dG9te1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vaGVpZ2h0OjQlO1xyXG4gICAgYm90dG9tOiAtMyU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCgxKXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA0cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2Itb25lIGVhc2UtaW4tb3V0IDEzcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJsb2I6bnRoLWNoaWxkKDIpe1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICByaWdodDogMTUlO1xyXG4gICAgdG9wOjI1JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLXR3byBlYXNlLWluLW91dCAyMnMgaW5maW5pdGU7XHJcbiAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCgzKXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6IDM0JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNnMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLXRocmVlIGVhc2UtaW4tb3V0IDE2cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJsb2I6bnRoLWNoaWxkKDQpe1xyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA3cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZm91ciBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg0KXtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDhzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi1mb3VyIGVhc2UtaW4tb3V0IDEycyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJsb2I6bnRoLWNoaWxkKDUpe1xyXG4gICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgdG9wOjAlO1xyXG4gICAgbGVmdDogMzQlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA5cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZml2ZSBlYXNlLWluLW91dCAzMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg2KXtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdG9wOjgwJTtcclxuICAgIHJpZ2h0OiAzNCU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjp3b2JibGUgMTBzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgIGJsb2Itc2l4IGVhc2UtaW4tb3V0IDEycyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJsb2I6bnRoLWNoaWxkKDcpe1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0b3A6MTAlO1xyXG4gICAgcmlnaHQ6IDM1JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgMTFzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi1zZXZlbiBlYXNlLWluLW91dCAzMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg4KXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOjAlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA1cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZWlnaHQgZWFzZS1pbi1vdXQgMzBzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoOSl7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHRvcDoyMCU7XHJcbiAgICByaWdodDogODIlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA1cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItbmluZSBlYXNlLWluLW91dCAxNXMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1vbmV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNzAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxvYi10d297XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNDIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxvYi10aHJlZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgzMDUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBibG9iLWZvdXJ7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNjA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1maXZle1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSg3MDAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBibG9iLXNpeHtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNzAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1zZXZlbntcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMzAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1laWdodHtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoODIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1uaW5le1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSg2MjAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB3b2JibGUge1xyXG4gICAgNTAlIHtcclxuICAgIGJhY2tncm91bmQ6cmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgIC8vYm9yZGVyLXJhZGl1czogNDIlIDU4JSA3MCUgMzAlIC8gNDUlIDQ1JSA1NSUgNTUlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAvL2JvcmRlci1yYWRpdXM6IDM4JSA1MiUgNzUlIDM2JSAvIDUwJSA0MCUgNTAlIDYwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/views/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let SignupPage = class SignupPage {
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
            'pass2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    routePage(name) {
        this.router.navigate([name]);
    }
    onSubmit(comment) {
        let passmatch = true;
        let fail = false;
        if (comment.username == null || comment.pass1 == null || comment.pass2 == null) {
            console.log("fail");
            this.router.navigate(['signup']);
            fail = true;
        }
        if (comment.pass1 != comment.pass2) {
            console.log("passwords do not match");
            passmatch = false;
            this.router.navigate(['signup']);
        }
        //username taken
        //check current usernames if username is taken
        //return true or false 
        const userTaken = false;
        if (userTaken) {
            console.log("username taken");
            this.router.navigate(['signup']);
        }
        if (!userTaken && passmatch && !fail) {
            console.log("logged in");
            this.router.navigate(['/home']);
        }
        this.commentForm.reset();
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/views/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=views-signup-signup-module-es2015.js.map