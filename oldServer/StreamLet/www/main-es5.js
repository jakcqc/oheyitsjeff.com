(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/search/search.component.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/search/search.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <div id=\"titleBackground\">\r\n            <ion-title slot=\"start\">\r\n                <img id=\"logo\" src=\"assets/nameV3.png\">\r\n            </ion-title>\r\n        </div>\r\n        <span id=\"endToolbar\" slot=\"end\">\r\n            <span class = \"buttons\" (click)= \"routePage('user-login')\">Account</span>\r\n        <ion-item>\r\n            <ion-searchbar (keyup.enter)=\"routePage('user-login')\"></ion-searchbar>\r\n        </ion-item>\r\n        </span>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" id=\"bodyMain\">\r\n    <div id=\"scrollMain\">\r\n        <div id=\"contentMain\">\r\n            <div id=\"cardMain\">\r\n                <div id=\"movieImageCard\">\r\n                    <div id=\"stickyDiv\">\r\n                        <span class=\"buttons\" (click)=\"resetNorm()\">X</span>\r\n                        <!-- <div id=\"watchBarBorder\">The Shining</div> -->\r\n                    </div>\r\n                    <img id=\"imageOnCard\" src=\"\">\r\n                </div>\r\n\r\n\r\n                <div id=\"iconHolder\">\r\n                    <img id=\"netflix\" src=\"assets/icon/netflixIcon.jpeg\" (click)=\"streamingServiceRoute(0)\">\r\n                    <img id=\"hulu\" src=\"assets/icon/huluIcon.png\" (click)=\"streamingServiceRoute(1)\">\r\n                    <img id=\"primeVideo\" src=\"assets/icon/primeVideoIcon.png\" (click)=\"streamingServiceRoute(2)\">\r\n                </div>\r\n                <div id=\"watchBar\">\r\n                    <h2 id=\"cardTitle\"></h2>\r\n                    <p id=\"cardDescription\"></p>\r\n                    <h3><span>Director(s): </span> <span class=\"writerStarDirector\" id=\"cardDir\">Stanley Kubrick</span></h3>\r\n                    <h3><span>Stars: </span> <span class=\"writerStarDirector\" id=\"cardCast\">Jack Nicholson, Shelley Duvall, Danny Lloyd</span></h3>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"contentWrapper\" (click)=\"resetNorm()\"></div>\r\n        <ion-grid>\r\n\r\n            <ion-row>\r\n                <div class=\"container\">\r\n                    <span class=\"genreTitle\">Comedies</span>\r\n                    <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides1>\r\n                        <ion-slide id=\"comedies\" *ngFor=\"let card of cardsSearch\" (click)=\"movieInfo(card)\">\r\n                            <ion-col>\r\n\r\n                                <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                                <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                            </ion-col>\r\n                        </ion-slide>\r\n                    </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                    <div class=\"buttons\" (click)=\"slides3.slidePrev()\">\r\n                    </div>\r\n                    <div class=\"buttons\" (click)=\"slides3.slideNext()\"> > </div>\r\n                </div>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n                <div class=\"container\">\r\n                    <span class=\"genreTitle\">Continue Watching</span>\r\n                    <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides1>\r\n                        <ion-slide *ngFor=\"let card of cards\" (click)=\"movieInfo(card)\">\r\n                            <ion-col>\r\n\r\n                                <ion-img class=\"movieImage\" src=\"https://i.pinimg.com/564x/fc/95/ca/fc95ca81ca34fba083e38fa6406c87be.jpg\"></ion-img>\r\n                                <ion-label> {{ card }}</ion-label>\r\n                            </ion-col>\r\n\r\n                        </ion-slide>\r\n                    </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                    <div class=\"buttons\" (click)=\"slides1.slidePrev()\">\r\n                    </div>\r\n                    <div class=\"buttons\" (click)=\"slides1.slideNext()\"> > </div>\r\n                </div>\r\n            </ion-row> -->\r\n            <!-- <ion-row>\r\n                <div class=\"container\">\r\n              <span class = \"genreTitle\" >Action</span>\r\n              <ion-slides  scrollbar = \"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides4 (ionSlideReachEnd)=\"getAction()\">\r\n                <ion-slide id = \"actions\" *ngFor=\"let card of cardsAction\" (click)=\"movieInfo(card)\" >\r\n                  <ion-col>\r\n                    \r\n                    <ion-img class=\"movieImage\" [src] = \"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                </ion-slide>\r\n               </ion-slides>\r\n          </div> \r\n                <div class=\"bHolder\">\r\n                    <div class=\"buttons\" (click)=\"slides4.slidePrev()\">\r\n                        < </div>\r\n                            <div class=\"buttons\" (click)=\"slides4.slideNext()\"> > </div>\r\n                    </div>\r\n            </ion-row> -->\r\n            <ion-row>\r\n                <ion-col size=\"6\">\r\n                    StreamLet 2021\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-login/user-login.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-login/user-login.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsUserLoginUserLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" >\r\n<div id = \"background\">\r\n<div class=\"lamp\">\r\n    <div class=\"lava\">\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob top\"></div>\r\n      <div class=\"blob bottom\"></div>\r\n      \r\n    </div>\r\n</div>\r\n<svg id = \"back\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n  <defs>\r\n    <filter id=\"goo\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"2\" result=\"blur\" />\r\n      \r\n    </filter>\r\n  </defs>\r\n</svg>\r\n<img id = \"logo\" (click) = \"routePage('home')\" src = \"assets/nameLogoV2.png\">\r\n<div id=\"loginCard\">\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div id = \"createAccount\">Create your account and start getting reccomended</div>\r\n    \r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"username\" placeholder = \"Username\" required></ion-input></ion-item>\r\n    \r\n    \r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"pass1\" placeholder = \"Password\" type=\"password\" required></ion-input></ion-item>\r\n        <ion-item><ion-input class = \"textStuff\" formControlName=\"pass2\" placeholder = \"Confirm Password\" type=\"password\" required></ion-input></ion-item>\r\n\r\n         <div id = \"buttonSub\" class = \"formInfo\"><button id = \"submitButton\" type=\"submit\" block>Create Account</button></div>  \r\n    </form>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/welcome/welcome.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/welcome/welcome.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" >\r\n<div id = \"background\">\r\n<div class=\"lamp\">\r\n    <div class=\"lava\">\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob top\"></div>\r\n      <div class=\"blob bottom\"></div>\r\n      \r\n    </div>\r\n</div>\r\n<svg id = \"back\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n  <defs>\r\n    <filter id=\"goo\">\r\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\" />\r\n      <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" />\r\n      <feBlend in=\"SourceGraphic\" in2=\"goo\" />\r\n    </filter>\r\n  </defs>\r\n</svg>\r\n<img id = \"logo\" src = \"assets/nameLogoV2.png\">\r\n<div id = \"welcomeMessage\">\r\n\r\n\r\n  <div id = \"movies\"> Dive into your entertainment <div class = \"explorer\" id = \"colorMotion\" (click)=\"route('home')\">Explore Now</div></div>\r\n  \r\n</div>\r\n</div>\r\n<div id = \"aboutUs\">\r\n  <div class = \"bContainer\">\r\n     <div> Find all your movies and shows in one place</div>\r\n      <div class = \"button\">Netflix</div>\r\n      <div class = \"button\">hulu</div>\r\n      <div class = \"button\">Prime</div>\r\n  </div>\r\n  <div class = \"bContainer\">\r\n  StreamLet allows for easy navigation between each of your streaming services.\r\n      <div id = \"front\">While giving ratings and information on each movie and show.</div>\r\n      <div id = \"backAbout\"></div>\r\n  </div>\r\n  <div class = \"bContainer\">\r\n     <div> Create an account to have reccomended movies based off of all your watch history.</div>\r\n     <div class = \"explorer\" id = \"createAccount\" (click)=\"route('user-login')\">Create Account</div>\r\n      \r\n  </div>\r\n  <div class = \"bContainer\">\r\n    <div id = \"save\">Less time searching, more time watching.  </div>\r\n    <img id = \"logo2\" src = \"assets/nameLogoV2.png\">\r\n    </div>\r\n</div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _views_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/user-login/user-login.component */
      "./src/app/views/user-login/user-login.component.ts");
      /* harmony import */


      var _views_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/welcome/welcome.component */
      "./src/app/views/welcome/welcome.component.ts");
      /* harmony import */


      var _views_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/search/search.component */
      "./src/app/views/search/search.component.ts");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: 'user-login',
        component: _views_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"]
      }, {
        path: 'welcome',
        component: _views_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
      }, {
        path: 'search/:search',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]
      }, {
        path: 'search',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]
      }, {
        path: 'find/:search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-find-find-module */
          "views-find-find-module").then(__webpack_require__.bind(null,
          /*! ./views/find/find.module */
          "./src/app/views/find/find.module.ts")).then(function (m) {
            return m.FindPageModule;
          });
        }
      }, {
        path: 'find',
        redirectTo: 'find',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-login-login-module */
          "views-login-login-module").then(__webpack_require__.bind(null,
          /*! ./views/login/login.module */
          "./src/app/views/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-signup-signup-module */
          "views-signup-signup-module").then(__webpack_require__.bind(null,
          /*! ./views/signup/signup.module */
          "./src/app/views/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/models/card.model.ts":
    /*!**************************************!*\
      !*** ./src/app/models/card.model.ts ***!
      \**************************************/

    /*! exports provided: Card */

    /***/
    function srcAppModelsCardModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Card", function () {
        return Card;
      });

      var Card = /*#__PURE__*/function () {
        function Card(userResponse) {
          _classCallCheck(this, Card);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j;

          this.title = userResponse.title;
          this.genres = userResponse.genres;
          this.year = userResponse.year;
          this.runtime = userResponse.runtime;
          this.cast = userResponse.cast;
          this.directors = userResponse.significants;
          this.overview = userResponse.overview;
          this.posterURL = userResponse.posterURLs;
          this.imdbRating = userResponse.imdbRating;
          this.netflixLink = (_c = (_b = (_a = userResponse.streamingInfo) === null || _a === void 0 ? void 0 : _a.netflix) === null || _b === void 0 ? void 0 : _b.us) === null || _c === void 0 ? void 0 : _c.link;
          this.huluLink = (_f = (_e = (_d = userResponse.streamingInfo) === null || _d === void 0 ? void 0 : _d.hulu) === null || _e === void 0 ? void 0 : _e.us) === null || _f === void 0 ? void 0 : _f.link;
          this.primeLink = (_j = (_h = (_g = userResponse.streamingInfo) === null || _g === void 0 ? void 0 : _g.prime) === null || _h === void 0 ? void 0 : _h.us) === null || _j === void 0 ? void 0 : _j.link;
          this.imdbID = userResponse.imdbID;
        }

        _createClass(Card, [{
          key: "getImdbID",
          value: function getImdbID() {
            return this.imdbID;
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            return this.title;
          }
        }, {
          key: "getDescript",
          value: function getDescript() {
            return this.overview;
          }
        }, {
          key: "getRuntime",
          value: function getRuntime() {
            return this.runtime;
          }
        }, {
          key: "getYear",
          value: function getYear() {
            return this.year;
          }
        }, {
          key: "getGenres",
          value: function getGenres() {
            var parsedGenres = [];

            for (var x in Object.keys(this.genres)) {
              if (this.genres[x] == "1") {
                parsedGenres.push("Biography");
              }

              if (this.genres[x] == "2") {
                parsedGenres.push("Film Noir");
              }

              if (this.genres[x] == "3") {
                parsedGenres.push("Game Show");
              }

              if (this.genres[x] == "4") {
                parsedGenres.push("Musical");
              }

              if (this.genres[x] == "5") {
                parsedGenres.push("Sport");
              }

              if (this.genres[x] == "6") {
                parsedGenres.push("Short");
              }

              if (this.genres[x] == "7") {
                parsedGenres.push("Adult");
              }

              if (this.genres[x] == "12") {
                parsedGenres.push("Adventure");
              }

              if (this.genres[x] == "14") {
                parsedGenres.push("Fantasy");
              }

              if (this.genres[x] == "16") {
                parsedGenres.push("Animation");
              }

              if (this.genres[x] == "18") {
                parsedGenres.push("Drama");
              }

              if (this.genres[x] == "27") {
                parsedGenres.push("Horror");
              }

              if (this.genres[x] == "28") {
                parsedGenres.push("Action");
              }

              if (this.genres[x] == "35") {
                parsedGenres.push("Comedy");
              }

              if (this.genres[x] == "36") {
                parsedGenres.push("History");
              }

              if (this.genres[x] == "37") {
                parsedGenres.push("Western");
              }

              if (this.genres[x] == "53") {
                parsedGenres.push("Thriller");
              }

              if (this.genres[x] == "80") {
                parsedGenres.push("Crime");
              }

              if (this.genres[x] == "99") {
                parsedGenres.push("Documentary");
              }

              if (this.genres[x] == "878") {
                parsedGenres.push("Science Fiction");
              }

              if (this.genres[x] == "9648") {
                parsedGenres.push("Mystery");
              }

              if (this.genres[x] == "10402") {
                parsedGenres.push("Music");
              }

              if (this.genres[x] == "10749") {
                parsedGenres.push("Romance");
              }

              if (this.genres[x] == "10751") {
                parsedGenres.push("Family");
              }

              if (this.genres[x] == "10752") {
                parsedGenres.push("War");
              }

              if (this.genres[x] == "10763") {
                parsedGenres.push("News");
              }

              if (this.genres[x] == "10764") {
                parsedGenres.push("Reality");
              }

              if (this.genres[x] == "10767") {
                parsedGenres.push("Talk Show");
              }
            }

            return parsedGenres;
          }
        }, {
          key: "getCast",
          value: function getCast() {
            return this.cast[0] + ", " + this.cast[1] + ", " + this.cast[2];
          }
        }, {
          key: "getDirectors",
          value: function getDirectors() {
            return this.directors;
          }
        }, {
          key: "getPoster",
          value: function getPoster() {
            return this.posterURL["original"];
          }
        }, {
          key: "getImdbRating",
          value: function getImdbRating() {
            return this.imdbRating;
          }
        }, {
          key: "getNetflix",
          value: function getNetflix() {
            return this.netflixLink;
          }
        }, {
          key: "getHulu",
          value: function getHulu() {
            return this.huluLink;
          }
        }, {
          key: "getPrime",
          value: function getPrime() {
            return this.primeLink;
          }
        }]);

        return Card;
      }();
      /***/

    },

    /***/
    "./src/app/views/search/search.component.scss":
    /*!****************************************************!*\
      !*** ./src/app/views/search/search.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  width: 100%;\n  text-align: left;\n}\n\nion-grid {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\nion-row {\n  margin-bottom: 30px;\n}\n\n.buttons {\n  display: inline-block;\n  border-radius: 1px;\n  height: auto;\n  width: auto;\n  margin-right: 20px;\n  background-color: none;\n  color: #eeeeee;\n  transition: 0.2s;\n  padding: 10px;\n  box-shadow: 1px 1px 2px black;\n  border: 2px solid #f3f3f3;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\ndiv.buttons {\n  border-radius: 6px;\n  font-size: x-large;\n  transition: 0.4s;\n  box-shadow: 3px 3px #f7f7f7;\n}\n\ndiv.buttons:hover {\n  border-radius: 6px;\n  box-shadow: 2px 1px;\n}\n\n.buttons:hover {\n  border-radius: 0px;\n  box-shadow: 3px 3px #f7f7f7;\n  color: white;\n}\n\n#contentWrapper {\n  position: fixed;\n  display: none;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: #0f0f0f;\n  opacity: 0.65;\n  z-index: 5;\n}\n\n#contentMain {\n  display: block;\n  position: fixed;\n  top: 10%;\n  height: 0%;\n  width: auto;\n  background-color: black;\n  opacity: 1;\n  z-index: 10;\n  border-radius: 10px;\n  transition: 0.4s;\n  overflow: scroll;\n}\n\n#cardMain {\n  display: none;\n  border: 3px solid black;\n  border-radius: 4px;\n}\n\n.movieImage {\n  border: 1px solid black;\n  transition: 0.2s;\n}\n\n.movieImage:hover {\n  border-color: white;\n}\n\n#movieImageCard {\n  position: relative;\n  width: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#movieImageCard .buttons {\n  position: absolute;\n  top: 8px;\n  left: 5px;\n  background-color: black;\n  opacity: 0.6;\n  z-index: 4;\n  padding: 5px;\n}\n\n#movieImageCard img {\n  display: block;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n#iconHolder {\n  width: 100%;\n  padding-top: 5px;\n  background-color: #0e0e0e;\n}\n\n#iconHolder img {\n  display: inline-block;\n  height: 80px;\n  width: 33.33%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s;\n  border: 3px solid #111111;\n}\n\n#iconHolder img:hover {\n  border-color: #ececec;\n}\n\nion-slide {\n  height: auto;\n  width: auto;\n  max-width: 150px;\n  transition: height 0.5s;\n  text-align: center;\n  margin-top: 10px;\n  padding: 1px;\n}\n\nion-label {\n  display: inline-block;\n  width: 100px;\n}\n\n.container span {\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 5px;\n  line-height: 26pt;\n}\n\n#logo {\n  height: 60px;\n}\n\n#titleBackground {\n  display: inline-block;\n}\n\n#watchBar {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  padding: 8px;\n  background-color: #0a0a0a;\n  border-top: 5px solid #f7e547;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n#watchBar h2 {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  background-color: black;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 700;\n  text-shadow: 1px 1px 1px #f3f3f3;\n  border-top: 5px solid black;\n  font-family: \"Open Sans\";\n}\n\n#watchBar p {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n}\n\n#watchBar h3 {\n  font-family: \"Open Sans\";\n  font-weight: 800;\n}\n\n.writerStarDirector {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n#stickyDiv {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\nion-slides {\n  margin-bottom: 10px;\n  --bullet-background: red;\n  --bullet-background-active: green;\n  --progress-bar-background: yellow;\n  --progress-bar-background-active: blue;\n  --scroll-bar-background: rgb(53, 53, 53);\n  --scroll-bar-background-active: rgb(238, 238, 238);\n}\n\n.genreTitle {\n  margin-right: 20px;\n}\n\n.bHolder {\n  display: inline-block;\n  margin: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBR0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFPQTtFQUtJLHFCQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBUko7O0FBZUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFaSjs7QUFnQkE7RUFDSSxZQUFBO0FBYko7O0FBZ0JBO0VBQ0kscUJBQUE7QUFiSjs7QUFpQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLDZCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBZko7O0FBa0JBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUFmSjs7QUFrQkE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBa0JBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQWZKOztBQWtCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQWZKOztBQWtCQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQWZKOztBQWtCQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGtEQUFBO0FBZko7O0FBa0JBO0VBQ0ksa0JBQUE7QUFmSjs7QUFrQkE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBZkoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuZGl2LmJ1dHRvbnMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbn1cclxuXHJcbmRpdi5idXR0b25zOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAxcHg7XHJcbn1cclxuXHJcbi5idXR0b25zOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggcmdiKDI0NywgMjQ3LCAyNDcpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbn1cclxuXHJcbiNjb250ZW50V3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XHJcbiAgICBvcGFjaXR5OiAuNjU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4jY29udGVudE1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIC8vbGVmdDogMzAlO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuI2NhcmRNYWluIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLm1vdmllSW1hZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5tb3ZpZUltYWdlOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtb3ZpZUltYWdlQ2FyZCB7XHJcbiAgICAvL2JvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy9wYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbiNtb3ZpZUltYWdlQ2FyZCAuYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4jbW92aWVJbWFnZUNhcmQgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuI2ljb25Ib2xkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxNCwgMTQpO1xyXG59XHJcblxyXG4jaWNvbkhvbGRlciBpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE3LCAxNywgMTcpO1xyXG59XHJcblxyXG4jaWNvbkhvbGRlciBpbWc6aG92ZXIge1xyXG4gICAgLy9tYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIC8vb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIC8vd2lkdGg6IDMzJTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IC41cztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi8vICNjb21lZGllc3tcclxuLy8gICBoZWlnaHQ6IDU1MHB4O1xyXG4vLyAgIHdpZHRoOiAzMjBweDtcclxuLy8gfVxyXG4uY29udGFpbmVyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB0O1xyXG4gICAgLy9saW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4jdGl0bGVCYWNrZ3JvdW5kIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQzLCAyNTMpO1xyXG59XHJcblxyXG4jd2F0Y2hCYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgLy9vcGFjaXR5OiAuNztcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2IoMjQ3LCAyMjksIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jd2F0Y2hCYXIgaDIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG59XHJcblxyXG4jd2F0Y2hCYXIgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiN3YXRjaEJhciBoMyB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi53cml0ZXJTdGFyRGlyZWN0b3Ige1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI3N0aWNreURpdiB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogcmVkO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGdyZWVuO1xyXG4gICAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDogeWVsbG93O1xyXG4gICAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmU6IGJsdWU7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZDogcmdiKDUzLCA1MywgNTMpO1xyXG4gICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQtYWN0aXZlOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbn1cclxuXHJcbi5nZW5yZVRpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmJIb2xkZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/views/search/search.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/views/search/search.component.ts ***!
      \**************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function srcAppViewsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _models_card_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../models/card.model */
      "./src/app/models/card.model.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(platform, activatedRoute, http) {
          var _this2 = this;

          _classCallCheck(this, SearchComponent);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.smallWidth = "auto";
          this.smallFontSize = "10vw";
          this.bigWidth = "760px";
          this.bigFontSize = "120px";
          this.smallHeight = .50;
          this.inputData = "";
          this.isDataAvailable = false;
          this.intSearch = 0;
          this.cardsSearch = [];
          this.activatedRoute.params.subscribe(function (data) {
            _this2.inputData = data.search;
          });
          platform.ready().then(function () {
            _this2.width = platform.width();
            _this2.height = platform.height();
            var speal = document.querySelector('#movies'); // if(this.width < 900){
            //     speal.style.width = this.smallWidth;
            //     speal.style.height = this.height*this.smallHeight + "px";
            //     speal.style.fontSize = this.smallFontSize;
            //     console.log(speal.style.height);
            // }else{
            //     speal.style.fontSize = this.bigFontSize;
            //     speal.style.width = this.bigWidth;
            // }
          });
          platform.resize.subscribe(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var speal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.width = platform.width();
                      this.height = platform.height();
                      speal = document.querySelector('#movies'); // if(this.width < 900){   
                      //     speal.style.fontSize = this.smallFontSize;
                      //     speal.style.width = this.smallWidth;
                      //     speal.style.height = this.height*this.smallHeight + "px";
                      // }else{
                      //     speal.style.fontSize = this.bigFontSize;
                      //     speal.style.width = this.bigWidth;
                      // }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSearch(this.inputData);
          } // getSearch(input){
          //     this.http.get('http://localhost:9091/searchQuery?title='+input).toPromise().then(
          //         data => {
          //             console.log(data);
          //             let parsedData = JSON.parse(JSON.stringify(data));
          //             console.log(parsedData.length);
          //         for(let i = 0; i < parsedData.length; i++){
          //             let obj = parsedData[i];
          //             let card = new Card(obj);
          //             console.log(card);
          //             this.cardsSearch.push(card);
          //         }
          //         console.log(this.cardsSearch);
          //     }
          //     );
          //     console.log("here");
          //     console.log(this.cardsSearch);
          //     this.intSearch++;
          // }

        }, {
          key: "getSearch",
          value: function getSearch(input) {
            var _this3 = this;

            this.http.get('http://18.18.243.225:9091/broadQuery?genre=35&page=1').toPromise().then(function (data) {
              var parsedData = JSON.parse(JSON.stringify(data));

              for (var i = 0; i < parsedData.length; i++) {
                var obj = parsedData[i];
                var card = new _models_card_model__WEBPACK_IMPORTED_MODULE_4__["Card"](obj);

                _this3.cardsSearch.push(card);
              }

              _this3.isDataAvailable = true;
            });
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/search/search.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.component.scss */
        "./src/app/views/search/search.component.scss"))["default"]]
      })], SearchComponent);
      /***/
    },

    /***/
    "./src/app/views/user-login/user-login.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/views/user-login/user-login.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsUserLoginUserLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#logo {\n  width: 20%;\n  margin: 10px;\n}\n\n#loginCard {\n  height: 60%;\n  width: 300px;\n  margin: 5% auto 10px auto;\n  border-radius: 5px;\n  border-bottom: 5px solid white;\n  border-top: 5px solid white;\n  padding: 20px;\n  background-color: rgba(2, 2, 2, 0.75);\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 400;\n}\n\n.formInfo {\n  margin-top: 30px;\n  font-size: 25px;\n  font-style: italic;\n}\n\n.textStuf {\n  font-size: 25px;\n  font-style: italic;\n}\n\nion-item {\n  --highlight-color-focused: rgb(27, 192, 233);\n  --background:none;\n  margin-top: 10px;\n  font-size: 20px;\n  font-style: italic;\n}\n\n#submitButton {\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  background-color: rgba(2, 2, 2, 0.2);\n  height: 50px;\n  padding: 10px;\n  border: 2px solid #1bc0e9;\n  border-bottom: 4px solid #1bc0e9;\n  transition: 1s;\n}\n\n#buttonSub {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#submitButton:hover {\n  background-color: rgba(2, 2, 2, 0.75);\n  border-color: #d3d6e0;\n}\n\n#createAccount {\n  font-size: 35px;\n  font-weight: 600;\n  margin-bottom: 70px;\n  font-family: \"Raleway\", sans-serif;\n}\n\n#logo {\n  position: absolute;\n  top: 1%;\n  left: 1%;\n  z-index: 15;\n  cursor: pointer;\n  height: auto;\n  width: 200px;\n}\n\n#background {\n  position: inherit;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(65, 104, 155, 0.9));\n  z-index: 3;\n}\n\n.lamp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  height: 100vh;\n  width: 100vw;\n  min-width: 100vw;\n  z-index: -2;\n  overflow: hidden;\n}\n\n.lava {\n  filter: url(\"#goo\");\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.blob {\n  border-radius: 50%;\n  background: #d3d6e0;\n  /* Other sample colors:\n  Orange: #e8630a\n  Pink: #EA3281\n  Fuscia: #E71669\n  Purple: #661BAC\n  Yellow: #FDC600\n  Kermit green: #75AC25\n  Light blue: #3283B5\n  Dark blue: #0A5D9A\n  Gunmetal: #232F37\n  BGLight: #1B2735\n  BGDark: #090a0f\n  Want more colors? check out https://coolors.co/ for inspiration.\n  */\n  position: absolute;\n}\n\n.blob.top {\n  width: 100%;\n  top: -3%;\n  left: 0;\n}\n\n.blob.bottom {\n  width: 100%;\n  bottom: -3%;\n  left: 0;\n}\n\n.blob:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 15%;\n  top: 50%;\n  -webkit-animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n          animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n}\n\n.blob:nth-child(2) {\n  width: 25px;\n  height: 25px;\n  right: 15%;\n  top: 25%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n}\n\n.blob:nth-child(3) {\n  width: 50px;\n  height: 45px;\n  top: 50%;\n  left: 34%;\n  -webkit-animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n          animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n}\n\n.blob:nth-child(4) {\n  width: 31px;\n  height: 30px;\n  top: 50%;\n  left: 30%;\n  -webkit-animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n\n.blob:nth-child(4) {\n  width: 34px;\n  height: 36px;\n  top: 50%;\n  left: 30%;\n  -webkit-animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n\n.blob:nth-child(5) {\n  width: 55px;\n  height: 55px;\n  top: 0%;\n  left: 34%;\n  -webkit-animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n          animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n}\n\n.blob:nth-child(6) {\n  width: 35px;\n  height: 35px;\n  top: 80%;\n  right: 34%;\n  -webkit-animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n          animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n}\n\n.blob:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  top: 10%;\n  right: 35%;\n  -webkit-animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n          animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n}\n\n.blob:nth-child(8) {\n  width: 25px;\n  height: 25px;\n  top: 0%;\n  right: 5%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n}\n\n.blob:nth-child(9) {\n  width: 40px;\n  height: 37px;\n  top: 20%;\n  right: 82%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n}\n\n@-webkit-keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(420%);\n  }\n}\n\n@keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(420%);\n  }\n}\n\n@-webkit-keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(305%);\n  }\n}\n\n@keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(305%);\n  }\n}\n\n@-webkit-keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(605%);\n  }\n}\n\n@keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(605%);\n  }\n}\n\n@-webkit-keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(700%);\n  }\n}\n\n@-webkit-keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(300%);\n  }\n}\n\n@keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(300%);\n  }\n}\n\n@-webkit-keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(820%);\n  }\n}\n\n@keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(820%);\n  }\n}\n\n@-webkit-keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(620%);\n  }\n}\n\n@keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(620%);\n  }\n}\n\n@-webkit-keyframes wobble {\n  50% {\n    background: #b8b8b8;\n  }\n  100% {\n    background: white;\n  }\n}\n\n@keyframes wobble {\n  50% {\n    background: #b8b8b8;\n  }\n  100% {\n    background: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBRUEscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBRko7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0FBSEo7O0FBS0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBSEo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFHQSw4RUFBQTtFQUNBLFVBQUE7QUFOSjs7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFB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O0VBdUJFO0lBQ0csMkJBQUE7RUFyQkw7QUFDRjs7QUFlRTtFQUNFO0lBQ0Usd0JBQUE7RUFyQko7RUF1QkU7SUFDRywyQkFBQTtFQXJCTDtBQUNGOztBQXVCRTtFQUNFO0lBQ0Usd0JBQUE7RUFyQko7RUF1QkU7SUFDRywyQkFBQTtFQXJCTDtBQUNGOztBQWVFO0VBQ0U7SUFDRSx3QkFBQTtFQXJCSjtFQXVCRTtJQUNHLDJCQUFBO0VBckJMO0FBQ0Y7O0FBd0JFO0VBQ0U7SUFDQSxtQkFBQTtFQXRCRjtFQXlCRTtJQUNJLGlCQUFBO0VBdkJOO0FBQ0Y7O0FBZ0JFO0VBQ0U7SUFDQSxtQkFBQTtFQXRCRjtFQXlCRTtJQUNJLGlCQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2xvZ2luQ2FyZHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDEwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vYm9yZGVyOiA0cHggc29saWQgcmdiKDc1LCA3NSwgNzUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDIsIDIsIDAuNzUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5mb3JtSW5mb3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBcclxufVxyXG4udGV4dFN0dWZ7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIFxyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJnYigyNywgMTkyLCAyMzMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuIFxyXG4jc3VibWl0QnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDIsIDIsIDAuMik7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI3LCAxOTIsIDIzMyk7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDI3LCAxOTIsIDIzMyk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI2J1dHRvblN1YntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdWJtaXRCdXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyLCAyLCAwLjc1KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2QzZDZlMDtcclxufVxyXG4jY3JlYXRlQWNjb3VudHtcclxuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206NzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2xvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDElO1xyXG4gICAgbGVmdDogMSU7XHJcbiAgICBcclxuICAgIHotaW5kZXg6IDE1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuI2JhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjppbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA3NiwgMjA3KSAhaW1wb3J0YW50O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSkscmdiYSg2NSwgMTA0LCAxNTUsIDAuOSkpO1xyXG4gICAgei1pbmRleDogMztcclxuICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmxhbXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4Oi0yO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmxhdmF7XHJcbiAgICBmaWx0ZXI6IHVybChcIiNnb29cIik7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gIH1cclxuICBcclxuICAuYmxvYntcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkNmUwO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE2NiwgMTY5LCAxODApLHJnYig1MiwgODEsIDE1OCkpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxNjYsIDE2OSwgMTgwKSxyZ2IoNDMsIDY3LCAxMzQpKTtcclxuXHJcbiAgICAvKiBPdGhlciBzYW1wbGUgY29sb3JzOlxyXG4gICAgT3JhbmdlOiAjZTg2MzBhXHJcbiAgICBQaW5rOiAjRUEzMjgxXHJcbiAgICBGdXNjaWE6ICNFNzE2NjlcclxuICAgIFB1cnBsZTogIzY2MUJBQ1xyXG4gICAgWWVsbG93OiAjRkRDNjAwXHJcbiAgICBLZXJtaXQgZ3JlZW46ICM3NUFDMjVcclxuICAgIExpZ2h0IGJsdWU6ICMzMjgzQjVcclxuICAgIERhcmsgYmx1ZTogIzBBNUQ5QVxyXG4gICAgR3VubWV0YWw6ICMyMzJGMzdcclxuICAgIEJHTGlnaHQ6ICMxQjI3MzVcclxuICAgIEJHRGFyazogIzA5MGEwZlxyXG4gICAgV2FudCBtb3JlIGNvbG9ycz8gY2hlY2sgb3V0IGh0dHBzOi8vY29vbG9ycy5jby8gZm9yIGluc3BpcmF0aW9uLlxyXG4gICAgKi9cclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuYmxvYi50b3B7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiA0JTtcclxuICAgIHRvcDogLTMlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5ibG9iLmJvdHRvbXtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2hlaWdodDo0JTtcclxuICAgIGJvdHRvbTogLTMlO1xyXG4gICAgbGVmdDowO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoMSl7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHRvcDo1MCU7XHJcbiAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNHMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLW9uZSBlYXNlLWluLW91dCAxM3MgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCgyKXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIHRvcDoyNSU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDVzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi10d28gZWFzZS1pbi1vdXQgMjJzIGluZmluaXRlO1xyXG4gICBcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoMyl7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OiAzNCU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDZzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi10aHJlZSBlYXNlLWluLW91dCAxNnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg0KXtcclxuICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgN3MgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWZvdXIgZWFzZS1pbi1vdXQgMTJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoNCl7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA4cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZm91ciBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg1KXtcclxuICAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHRvcDowJTtcclxuICAgIGxlZnQ6IDM0JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgOXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWZpdmUgZWFzZS1pbi1vdXQgMzJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoNil7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRvcDo4MCU7XHJcbiAgICByaWdodDogMzQlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246d29iYmxlIDEwcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsICBibG9iLXNpeCBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg3KXtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdG9wOjEwJTtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDExcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2Itc2V2ZW4gZWFzZS1pbi1vdXQgMzJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoOCl7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRvcDowJTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWVpZ2h0IGVhc2UtaW4tb3V0IDMwcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJsb2I6bnRoLWNoaWxkKDkpe1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB0b3A6MjAlO1xyXG4gICAgcmlnaHQ6IDgyJTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLW5pbmUgZWFzZS1pbi1vdXQgMTVzIGluZmluaXRlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2Itb25le1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDcwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsb2ItdHdve1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDQyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsb2ItdGhyZWV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMzA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1mb3Vye1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDYwNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItZml2ZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNzAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1zaXh7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDcwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2Itc2V2ZW57XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDMwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItZWlnaHR7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDgyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItbmluZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoNjIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgd29iYmxlIHtcclxuICAgIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgICAvL2JvcmRlci1yYWRpdXM6IDQyJSA1OCUgNzAlIDMwJSAvIDQ1JSA0NSUgNTUlIDU1JTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgLy9ib3JkZXItcmFkaXVzOiAzOCUgNTIlIDc1JSAzNiUgLyA1MCUgNDAlIDUwJSA2MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/views/user-login/user-login.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/views/user-login/user-login.component.ts ***!
      \**********************************************************/

    /*! exports provided: UserLoginComponent */

    /***/
    function srcAppViewsUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
        return UserLoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var UserLoginComponent = /*#__PURE__*/function () {
        function UserLoginComponent(router, formBuilder) {
          _classCallCheck(this, UserLoginComponent);

          this.router = router;
          this.formBuilder = formBuilder;
        }

        _createClass(UserLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routePage",
          value: function routePage(name) {
            this.router.navigate([name]);
          }
        }, {
          key: "onsubmit",
          value: function onsubmit() {
            console.log("hello");
          }
        }]);

        return UserLoginComponent;
      }();

      UserLoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      };

      UserLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-login.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-login/user-login.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-login.component.scss */
        "./src/app/views/user-login/user-login.component.scss"))["default"]]
      })], UserLoginComponent);
      /***/
    },

    /***/
    "./src/app/views/welcome/welcome.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/views/welcome/welcome.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsWelcomeWelcomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@-webkit-keyframes glow {\n  0% {\n    text-shadow: 0px 0px 10px #2a578a;\n    stroke: black;\n    stroke-width: 10px;\n  }\n  100% {\n    text-shadow: 0px 0px 1px #fff6f6;\n  }\n}\n@keyframes glow {\n  0% {\n    text-shadow: 0px 0px 10px #2a578a;\n    stroke: black;\n    stroke-width: 10px;\n  }\n  100% {\n    text-shadow: 0px 0px 1px #fff6f6;\n  }\n}\n#welcomeMessage {\n  position: relative;\n  display: block;\n  height: 100%;\n  z-index: 10;\n}\n#logo {\n  position: absolute;\n  top: 1%;\n  left: 1%;\n  width: 15%;\n  z-index: 15;\n}\n#movies {\n  display: block;\n  height: auto;\n  font-size: 120px;\n  font-weight: bold;\n  font-family: \"Courgette\", cursive;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  margin-left: auto;\n  margin-right: auto;\n  width: 760px;\n  z-index: 2;\n  text-align: center;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-iteration-count: 5;\n          animation-iteration-count: 5;\n  animation-direction: alternate-reverse;\n  text-shadow: 0px 0px 4.5px #eeeeee;\n}\n#movies div {\n  font-family: \"Raleway\", sans-serif;\n}\n.explorer {\n  font-family: \"Courgette\", cursive;\n  display: inline-block;\n  text-shadow: 0px 0px 3px #eeeeee;\n  border: 2px solid white;\n  box-shadow: 0px 2px 0.5px white;\n  border-radius: 10px;\n  padding: 5px;\n  opacity: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: rgba(123, 152, 216, 0.5);\n  transition: background-color 0.5s;\n}\n#createAccount {\n  margin-top: 3%;\n  width: 150px;\n  font-size: 28px;\n  margin-left: 1%;\n  margin-right: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n#createAccount:hover {\n  font-size: 29px;\n  background-color: black;\n}\n#colorMotion {\n  margin-top: 5%;\n  display: inline-block;\n  width: auto;\n  font-size: 40px;\n}\n#colorMotion:hover {\n  font-size: 41px;\n  background-color: #597dcc;\n}\n#background {\n  position: inherit;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(#34519e, #0b356d);\n  z-index: -10;\n}\n#aboutUs div {\n  font-family: \"Raleway\", sans-serif;\n}\n#aboutUs span {\n  font-family: \"Raleway\", sans-serif;\n}\n#aboutUs {\n  position: relative;\n  height: 100%;\n  z-index: 10;\n  background-image: linear-gradient(rgba(254, 254, 255, 0), rgba(16, 206, 149, 0.5));\n}\n#aboutUs .bContainer {\n  padding: 20px;\n  font-size: 32px;\n  font-weight: 800;\n  padding-left: 5%;\n  padding-top: 3%;\n}\n#aboutUs .bContainer:nth-child(1) {\n  text-shadow: 0 0 2px white;\n  height: 40%;\n  background-color: #000000;\n}\n#aboutUs .bContainer:nth-child(2) {\n  color: black;\n  text-shadow: 0 0 1px black;\n  height: 35%;\n  background-color: #f0f0f0;\n}\n#aboutUs .bContainer:nth-child(3) {\n  text-shadow: 0 0 1px black;\n  height: 45%;\n  background-color: #036cc2;\n}\n.button {\n  padding: 5px;\n  font-size: 40px;\n  font-weight: 200;\n  margin-top: 5%;\n  display: inline-block;\n  border: 2px solid white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.bContainer div:nth-child(3) {\n  text-shadow: 0 0 1px black;\n  background-color: #f0f0f0;\n  color: black;\n}\n.bContainer div:nth-child(4) {\n  background-color: #036cc2;\n}\n#aboutUs .bContainer:nth-child(4) {\n  height: 25%;\n  background-color: #000000;\n}\n#front {\n  font-size: 26px;\n  font-weight: 600 !important;\n  font-style: italic;\n}\n#save {\n  margin-left: 10px;\n  padding-bottom: 20px;\n}\n#container {\n  height: auto;\n}\n#logo2 {\n  width: 200px;\n}\n.lamp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  height: 100vh;\n  width: 100vw;\n  min-width: 100vw;\n  z-index: 1;\n}\n.lava {\n  filter: url(\"#goo\");\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.blob {\n  border-radius: 50%;\n  background: #738bdb;\n  /* Other sample colors:\n  Orange: #e8630a\n  Pink: #EA3281\n  Fuscia: #E71669\n  Purple: #661BAC\n  Yellow: #FDC600\n  Kermit green: #75AC25\n  Light blue: #3283B5\n  Dark blue: #0A5D9A\n  Gunmetal: #232F37\n  BGLight: #1B2735\n  BGDark: #090a0f\n  Want more colors? check out https://coolors.co/ for inspiration.\n  */\n  position: absolute;\n}\n.blob.top {\n  border-radius: 50%;\n  width: 100%;\n  top: -3%;\n  left: 0;\n}\n.blob.bottom {\n  border-radius: 50%;\n  width: 100%;\n  bottom: -3%;\n  left: 0;\n}\n.blob:nth-child(1) {\n  width: 150px;\n  height: 150px;\n  left: 15%;\n  bottom: -15%;\n  -webkit-animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n          animation: wobble 4s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;\n}\n.blob:nth-child(2) {\n  width: 250px;\n  height: 250px;\n  right: 15%;\n  bottom: -65%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;\n}\n.blob:nth-child(3) {\n  width: 150px;\n  height: 150px;\n  bottom: -15%;\n  left: 34%;\n  -webkit-animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n          animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;\n}\n.blob:nth-child(4) {\n  width: 235px;\n  height: 235px;\n  bottom: -19%;\n  left: 30%;\n  -webkit-animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n.blob:nth-child(4) {\n  width: 235px;\n  height: 235px;\n  bottom: -19%;\n  left: 30%;\n  -webkit-animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n          animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;\n}\n.blob:nth-child(5) {\n  width: 55px;\n  height: 55px;\n  bottom: -25%;\n  left: 34%;\n  -webkit-animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n          animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;\n}\n.blob:nth-child(6) {\n  width: 35px;\n  height: 35px;\n  bottom: -25%;\n  right: 34%;\n  -webkit-animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n          animation: wobble 10s ease-in-out alternate infinite, blob-six ease-in-out 12s infinite;\n}\n.blob:nth-child(7) {\n  width: 350px;\n  height: 350px;\n  bottom: -85%;\n  right: 35%;\n  -webkit-animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n          animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;\n}\n.blob:nth-child(8) {\n  width: 90px;\n  height: 90px;\n  bottom: -15%;\n  right: 5%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-eight ease-in-out 30s infinite;\n}\n.blob:nth-child(9) {\n  width: 195px;\n  height: 200px;\n  bottom: -70%;\n  right: 82%;\n  -webkit-animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n          animation: wobble 5s ease-in-out alternate infinite, blob-nine ease-in-out 15s infinite;\n}\n@-webkit-keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-700%);\n  }\n}\n@keyframes blob-one {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-700%);\n  }\n}\n@-webkit-keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-420%);\n  }\n}\n@keyframes blob-two {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-420%);\n  }\n}\n@-webkit-keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-305%);\n  }\n}\n@keyframes blob-three {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-305%);\n  }\n}\n@-webkit-keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-605%);\n  }\n}\n@keyframes blob-four {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-605%);\n  }\n}\n@-webkit-keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-700%);\n  }\n}\n@keyframes blob-five {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-700%);\n  }\n}\n@-webkit-keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-700%);\n  }\n}\n@keyframes blob-six {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-700%);\n  }\n}\n@-webkit-keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-300%);\n  }\n}\n@keyframes blob-seven {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-300%);\n  }\n}\n@-webkit-keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-820%);\n  }\n}\n@keyframes blob-eight {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-820%);\n  }\n}\n@-webkit-keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-620%);\n  }\n}\n@keyframes blob-nine {\n  0%, 100% {\n    transform: translatey(0);\n  }\n  50% {\n    transform: translatey(-620%);\n  }\n}\n@-webkit-keyframes wobble {\n  50% {\n    border-radius: 42% 58% 70% 30%/45% 45% 55% 55%;\n  }\n  100% {\n    border-radius: 38% 52% 75% 36%/50% 40% 50% 60%;\n  }\n}\n@keyframes wobble {\n  50% {\n    border-radius: 42% 58% 70% 30%/45% 45% 55% 55%;\n  }\n  100% {\n    border-radius: 38% 52% 75% 36%/50% 40% 50% 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFBRyxpQ0FBQTtJQUEyQyxhQUFBO0lBQWMsa0JBQUE7RUFHOUQ7RUFGRTtJQUFLLGdDQUFBO0VBS1A7QUFDRjtBQVJBO0VBQ0k7SUFBRyxpQ0FBQTtJQUEyQyxhQUFBO0lBQWMsa0JBQUE7RUFHOUQ7RUFGRTtJQUFLLGdDQUFBO0VBS1A7QUFDRjtBQUpBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFNSjtBQUpBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBT0o7QUFMQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBR0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7QUFHSjtBQURBO0VBQ0Usa0NBQUE7QUFJRjtBQUZBO0VBQ0UsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0FBS0Y7QUFIQTtFQUNDLGNBQUE7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBTUY7QUFKQTtFQUVFLGVBQUE7RUFDQSx1QkFBQTtBQU1GO0FBSkE7RUFFRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBR0EsZUFBQTtBQUlGO0FB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QUFDRjtBQWdCRTtFQUNFO0lBQ0MsOENBQUE7RUFkSDtFQWdCRTtJQUNDLDhDQUFBO0VBZEg7QUFDRjtBQVFFO0VBQ0U7SUFDQyw4Q0FBQTtFQWRIO0VBZ0JFO0lBQ0MsOENBQUE7RUFkSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBrZXlmcmFtZXMgZ2xvdyB7XHJcbiAgICAwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYig0MiwgODcsIDEzOCk7c3Ryb2tlOiBibGFjaztzdHJva2Utd2lkdGg6IDEwcHg7fVxyXG4gICAgMTAwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiKDI1NSwgMjQ2LCAyNDYpO31cclxufVxyXG4jd2VsY29tZU1lc3NhZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbiNsb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxJTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHotaW5kZXg6IDE1O1xyXG59XHJcbiNtb3ZpZXN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcclxuXHJcbiAgICBcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLy9tYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAvL3BhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3NjBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL2FuaW1hdGlvbi1uYW1lOiBnbG93O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDQuNXB4IHJnYigyMzgsIDIzOCwgMjM4KTtcclxufVxyXG4jbW92aWVzIGRpdntcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5leHBsb3JlcntcclxuICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAuNXB4IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjMsIDE1MiwgMjE2LCAwLjUpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzO1xyXG59XHJcbiNjcmVhdGVBY2NvdW50e1xyXG4gbWFyZ2luLXRvcDogMyU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG4jY3JlYXRlQWNjb3VudDpob3ZlcntcclxuICBcclxuICBmb250LXNpemU6MjlweCA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcbiNjb2xvck1vdGlvbntcclxuICBcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgLy93aWR0aDogMjk0cHg7XHJcbiAgXHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIFxyXG59XHJcbiNjb2xvck1vdGlvbjpob3ZlcntcclxuICBmb250LXNpemU6NDFweCA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgMTI1LCAyMDQsIDEpO1xyXG59XHJcbiNiYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246aW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNzYsIDIwNykgIWltcG9ydGFudDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDUyLCA4MSwgMTU4KSxyZ2IoMTEsIDUzLCAxMDkpKTtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI2Fib3V0VXMgZGl2e1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2Fib3V0VXMgc3BhbntcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNhYm91dFVze1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIFxyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiYSgyNTQsIDI1NCwgMjU1LDApLCByZ2JhKDE2LCAyMDYsIDE0OSwgMC41KSk7XHJcbiAgICBcclxufVxyXG4jYWJvdXRVcyAuYkNvbnRhaW5lcntcclxuICBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBcclxufVxyXG4jYWJvdXRVcyAuYkNvbnRhaW5lcjpudGgtY2hpbGQoMSl7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggd2hpdGU7XHJcblxyXG4gIGhlaWdodDogNDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuI2Fib3V0VXMgLmJDb250YWluZXI6bnRoLWNoaWxkKDIpe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDFweCByZ2IoMCwgMCwgMCk7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHJcbn1cclxuI2Fib3V0VXMgLmJDb250YWluZXI6bnRoLWNoaWxkKDMpe1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMXB4IGJsYWNrO1xyXG4gIGhlaWdodDogNDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzZjYzI7XHJcblxyXG59XHJcbi5idXR0b257XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJDb250YWluZXIgZGl2Om50aC1jaGlsZCgzKXtcclxuICBcclxuICB0ZXh0LXNoYWRvdzogMCAwIDFweCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGYwZjA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5iQ29udGFpbmVyIGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDM2Y2MyO1xyXG59XHJcbiNhYm91dFVzIC5iQ29udGFpbmVyOm50aC1jaGlsZCg0KXtcclxuICBcclxuICBoZWlnaHQ6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cclxufVxyXG4jZnJvbnR7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuI3NhdmV7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuI2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuI2xvZ28ye1xyXG4gIFxyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4ubGFtcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIHotaW5kZXg6MTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubGF2YXtcclxuICAgIGZpbHRlcjogdXJsKFwiI2dvb1wiKTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibG9ie1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzczOGJkYjtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYigxNjYsIDE2OSwgMTgwKSxyZ2IoNTIsIDgxLCAxNTgpKTtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMTY2LCAxNjksIDE4MCkscmdiKDQzLCA2NywgMTM0KSk7XHJcblxyXG4gICAgLyogT3RoZXIgc2FtcGxlIGNvbG9yczpcclxuICAgIE9yYW5nZTogI2U4NjMwYVxyXG4gICAgUGluazogI0VBMzI4MVxyXG4gICAgRnVzY2lhOiAjRTcxNjY5XHJcbiAgICBQdXJwbGU6ICM2NjFCQUNcclxuICAgIFllbGxvdzogI0ZEQzYwMFxyXG4gICAgS2VybWl0IGdyZWVuOiAjNzVBQzI1XHJcbiAgICBMaWdodCBibHVlOiAjMzI4M0I1XHJcbiAgICBEYXJrIGJsdWU6ICMwQTVEOUFcclxuICAgIEd1bm1ldGFsOiAjMjMyRjM3XHJcbiAgICBCR0xpZ2h0OiAjMUIyNzM1XHJcbiAgICBCR0Rhcms6ICMwOTBhMGZcclxuICAgIFdhbnQgbW9yZSBjb2xvcnM/IGNoZWNrIG91dCBodHRwczovL2Nvb2xvcnMuY28vIGZvciBpbnNwaXJhdGlvbi5cclxuICAgICovXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmJsb2IudG9we1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDQlO1xyXG4gICAgdG9wOiAtMyU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBcclxuICB9XHJcbiAgLmJsb2IuYm90dG9te1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2hlaWdodDo0JTtcclxuICAgIGJvdHRvbTogLTMlO1xyXG4gICAgbGVmdDowO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoMSl7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgYm90dG9tOi0xNSU7XHJcbiAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgNHMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLW9uZSBlYXNlLWluLW91dCAxM3MgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCgyKXtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICByaWdodDogMTUlO1xyXG4gICAgYm90dG9tOi02NSU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDVzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi10d28gZWFzZS1pbi1vdXQgMjJzIGluZmluaXRlO1xyXG4gICBcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoMyl7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm90dG9tOi0xNSU7XHJcbiAgICBsZWZ0OiAzNCU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDZzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZSwgYmxvYi10aHJlZSBlYXNlLWluLW91dCAxNnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg0KXtcclxuICAgIHdpZHRoOiAyMzVweDtcclxuICAgIGhlaWdodDogMjM1cHg7XHJcbiAgICBib3R0b206LTE5JTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgN3MgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlLCBibG9iLWZvdXIgZWFzZS1pbi1vdXQgMTJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoNCl7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbiAgICBoZWlnaHQ6IDIzNXB4O1xyXG4gICAgYm90dG9tOi0xOSU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA4cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZm91ciBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg1KXtcclxuICAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJvdHRvbTotMjUlO1xyXG4gICAgbGVmdDogMzQlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA5cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZml2ZSBlYXNlLWluLW91dCAzMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg2KXtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm90dG9tOi0yNSU7XHJcbiAgICByaWdodDogMzQlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246d29iYmxlIDEwcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsICBibG9iLXNpeCBlYXNlLWluLW91dCAxMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ibG9iOm50aC1jaGlsZCg3KXtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBib3R0b206LTg1JTtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogd29iYmxlIDExcyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2Itc2V2ZW4gZWFzZS1pbi1vdXQgMzJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoOCl7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvdHRvbTotMTUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA1cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItZWlnaHQgZWFzZS1pbi1vdXQgMzBzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYmxvYjpudGgtY2hpbGQoOSl7XHJcbiAgICB3aWR0aDogMTk1cHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm90dG9tOi03MCU7XHJcbiAgICByaWdodDogODIlO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHdvYmJsZSA1cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGUsIGJsb2ItbmluZSBlYXNlLWluLW91dCAxNXMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1vbmV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTcwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsb2ItdHdve1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC00MjAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBibG9iLXRocmVle1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0zMDUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBibG9iLWZvdXJ7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTYwNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItZml2ZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTcwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2Itc2l4e1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNzAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxvYi1zZXZlbntcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTMwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsb2ItZWlnaHR7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC04MjAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBibG9iLW5pbmV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC02MjAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB3b2JibGUge1xyXG4gICAgNTAlIHtcclxuICAgICBib3JkZXItcmFkaXVzOiA0MiUgNTglIDcwJSAzMCUgLyA0NSUgNDUlIDU1JSA1NSU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICBib3JkZXItcmFkaXVzOiAzOCUgNTIlIDc1JSAzNiUgLyA1MCUgNDAlIDUwJSA2MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/views/welcome/welcome.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/views/welcome/welcome.component.ts ***!
      \****************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function srcAppViewsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent(platform, router) {
          var _this4 = this;

          _classCallCheck(this, WelcomeComponent);

          this.router = router;
          this.smallWidth = "auto";
          this.smallFontSize = "10vw";
          this.bigWidth = "760px";
          this.bigFontSize = "120px";
          this.smallHeight = .50;
          platform.ready().then(function () {
            var speal = document.querySelector('#movies');
            var logo = document.querySelector('#logo');
            var info = document.querySelectorAll('.bContainer');
            _this4.width = platform.width();
            _this4.height = platform.height();

            if (_this4.width < 700) {
              info.forEach(function (element) {
                element.style.height = "auto";
              });
            }

            if (_this4.width < 900) {
              logo.style.width = "150px";
              speal.style.width = _this4.smallWidth;
              speal.style.height = _this4.height * _this4.smallHeight + "px";
              speal.style.fontSize = _this4.smallFontSize;
              console.log(speal.style.height);
            } else {
              speal.style.fontSize = _this4.bigFontSize;
              speal.style.width = _this4.bigWidth;
            }
          });
          platform.resize.subscribe(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var speal, logo, info;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      speal = document.querySelector('#movies');
                      logo = document.querySelector('#logo');
                      info = document.querySelectorAll('.bContainer');
                      this.width = platform.width();
                      this.height = platform.height();

                      if (this.width < 700) {
                        info.forEach(function (element) {
                          element.style.height = "auto";
                        });
                      }

                      if (this.width < 900) {
                        logo.style.width = "150px";
                        speal.style.fontSize = this.smallFontSize;
                        speal.style.width = this.smallWidth;
                        speal.style.height = this.height * this.smallHeight + "px";
                      } else {
                        logo.style.width = "15%";
                        speal.style.fontSize = this.bigFontSize;
                        speal.style.width = this.bigWidth;
                      }

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }

        _createClass(WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "route",
          value: function route(name) {
            this.router.navigate([name]);
          }
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/welcome/welcome.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome.component.scss */
        "./src/app/views/welcome/welcome.component.scss"))["default"]]
      })], WelcomeComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Jeffrey\StreamLetFrontEnd\App\StreamLet\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map