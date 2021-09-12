(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-find-find-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/find/find.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/find/find.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsFindFindPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <div id=\"titleBackground\">\r\n            <ion-title slot=\"start\">\r\n                <img (click)= \"routePage('home')\" id = \"logo\" src = \"assets/nameLogoV2.png\">\r\n            </ion-title>\r\n        </div>\r\n        <span id=\"endToolbar\" slot=\"end\">\r\n            \r\n       \r\n        <ion-item>\r\n            <span id = \"accounter\" class = \"buttons\"  (click)= \"routePage('login')\">Account</span>\r\n        </ion-item>\r\n        \r\n        </span>\r\n        \r\n    </ion-toolbar>\r\n    \r\n</ion-header>\r\n <ion-item>\r\n            <ion-searchbar  (search)=\"updateSearch($event.target.value)\"></ion-searchbar>\r\n        </ion-item>\r\n<ion-content [fullscreen]=\"true\" id=\"bodyMain\">\r\n    <div id=\"scrollMain\">\r\n        <div id=\"contentMain\">\r\n            <div id=\"cardMain\">\r\n\r\n                <div id=\"movieImageCard\">\r\n                    <div id=\"stickyDiv\">\r\n                        <span class=\"buttons\" (click)=\"resetNorm()\">X</span>\r\n                        <!-- <div id = \"watchBarBorder\">The Shining</div> -->\r\n\r\n                    </div>\r\n                    <img id=\"imageOnCard\" src=\"\">\r\n                </div>\r\n\r\n\r\n                <div id=\"iconHolder\">\r\n                    <a href=\"\" id=\"netflixLink\" target=\"_blank\"> <img id=\"netflix\" src=\"assets/icon/netflixIcon.jpeg\" > </a>\r\n                    <a href=\"\" id=\"huluLink\" target=\"_blank\"><img id=\"hulu\" src=\"assets/icon/huluIcon.png\" > </a>\r\n                    <a href=\"\" id=\"primeLink\" target=\"_blank\"><img id=\"primeVideo\" src=\"assets/icon/primeVideoIcon.png\"> </a>\r\n                </div>\r\n                <div id=\"watchBar\">\r\n                    <h2 id=\"cardTitle\"></h2>\r\n                    <p id=\"cardDescription\"></p>\r\n                    <h3><span>Director(s): </span> <span class=\"writerStarDirector\" id=\"cardDir\">Stanley Kubrick</span></h3>\r\n                    <h3><span>Stars: </span> <span class=\"writerStarDirector\" id=\"cardCast\">Jack Nicholson, Shelley Duvall, Danny Lloyd</span></h3>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        \r\n\r\n        <div id=\"contentWrapper\" (click)=\"resetNorm()\"></div>\r\n        <ion-grid>\r\n\r\n            <ion-row>\r\n                <div class=\"container\">\r\n                    <span class=\"genreTitle\">Search Results</span>\r\n                    <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides1>\r\n                        <ion-slide id=\"comedies\" *ngFor=\"let card of cardsSearch\" (click)=\"movieInfo(card)\">\r\n                            <ion-col>\r\n\r\n                                <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                                <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                            </ion-col>\r\n                        </ion-slide>\r\n                    </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                    <div class=\"buttons\" (click)=\"slides1.slidePrev()\"> <\r\n                    </div>\r\n                    <div class=\"buttons\" (click)=\"slides1.slideNext()\"> > </div>\r\n                </div>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"6\">\r\n                    StreamLet 2021\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/find/find-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/views/find/find-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: FindPageRoutingModule */

    /***/
    function srcAppViewsFindFindRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FindPageRoutingModule", function () {
        return FindPageRoutingModule;
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


      var _find_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./find.page */
      "./src/app/views/find/find.page.ts");

      var routes = [{
        path: '',
        component: _find_page__WEBPACK_IMPORTED_MODULE_3__["FindPage"]
      }];

      var FindPageRoutingModule = function FindPageRoutingModule() {
        _classCallCheck(this, FindPageRoutingModule);
      };

      FindPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FindPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/views/find/find.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/views/find/find.module.ts ***!
      \*******************************************/

    /*! exports provided: FindPageModule */

    /***/
    function srcAppViewsFindFindModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FindPageModule", function () {
        return FindPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _find_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./find-routing.module */
      "./src/app/views/find/find-routing.module.ts");
      /* harmony import */


      var _find_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./find.page */
      "./src/app/views/find/find.page.ts");

      var FindPageModule = function FindPageModule() {
        _classCallCheck(this, FindPageModule);
      };

      FindPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _find_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindPageRoutingModule"]],
        declarations: [_find_page__WEBPACK_IMPORTED_MODULE_6__["FindPage"]]
      })], FindPageModule);
      /***/
    },

    /***/
    "./src/app/views/find/find.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/views/find/find.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsFindFindPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  width: 100%;\n  text-align: left;\n}\n\nion-grid {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\nion-row {\n  margin-bottom: 30px;\n}\n\n#genreToggle:hover {\n  border-radius: 0px;\n  box-shadow: 0px 5px aqua;\n  color: #bafabd;\n}\n\n#contentWrapper {\n  position: fixed;\n  display: none;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: #0f0f0f;\n  opacity: 0.65;\n  z-index: 5;\n}\n\n#contentMain {\n  display: block;\n  position: fixed;\n  top: 10%;\n  height: 0%;\n  width: auto;\n  background-color: black;\n  opacity: 1;\n  z-index: 10;\n  border-radius: 10px;\n  transition: 0.4s;\n  overflow: scroll;\n}\n\n#cardMain {\n  display: none;\n  border: 3px solid black;\n  border-radius: 4px;\n}\n\n.movieImage {\n  border: 1px solid black;\n  transition: 0.2s;\n}\n\n.movieImage:hover {\n  border-color: white;\n}\n\n#movieImageCard {\n  position: relative;\n  width: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#movieImageCard .buttons {\n  position: absolute;\n  top: 8px;\n  left: 5px;\n  background-color: black;\n  opacity: 0.6;\n  z-index: 4;\n  padding: 5px;\n}\n\n#movieImageCard img {\n  display: block;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n#iconHolder {\n  width: 100%;\n  padding-top: 5px;\n  background-color: #0e0e0e;\n}\n\n#iconHolder img {\n  display: inline-block;\n  height: 80px;\n  width: 33.33%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s;\n  border: 3px solid #111111;\n}\n\n#iconHolder img:hover {\n  border-color: #ececec;\n}\n\nion-slide {\n  height: auto;\n  width: auto;\n  max-width: 160px;\n  max-width: 150px;\n  transition: height 0.5s;\n  text-align: center;\n  margin-top: 10px;\n  padding: 1px;\n}\n\nion-label {\n  display: inline-block;\n  width: 100px;\n}\n\n.container span {\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #d6c913;\n          text-decoration-color: #d6c913;\n  text-decoration-thickness: 5px;\n  line-height: 26pt;\n}\n\n#logo {\n  cursor: pointer;\n  height: 60px;\n}\n\n#titleBackground {\n  display: inline-block;\n}\n\n#watchBar {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  padding: 8px;\n  background-color: #0a0a0a;\n  border-top: 5px solid #f7e547;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n#watchBar h2 {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  background-color: black;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 700;\n  text-shadow: 1px 1px 1px #f3f3f3;\n  border-top: 5px solid black;\n  font-family: \"Open Sans\";\n}\n\n#watchBar p {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n}\n\n#watchBar h3 {\n  font-family: \"Open Sans\";\n  font-weight: 800;\n}\n\n.writerStarDirector {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n#stickyDiv {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\nion-slides {\n  margin-bottom: 10px;\n  --bullet-background: red\t;\n  --bullet-background-active: green;\n  --progress-bar-background: yellow;\n  --progress-bar-background-active: blue;\n  --scroll-bar-background: rgb(53, 53, 53);\n  --scroll-bar-background-active: rgb(238, 238, 238);\n}\n\nion-searchbar {\n  border-left: 3px solid #d6c913;\n  width: 100%;\n  transition: width 0.2s;\n}\n\nion-item {\n  display: inline-block;\n}\n\n.genreTitle {\n  margin-right: 20px;\n}\n\n.bHolder {\n  display: inline-block;\n  margin: auto auto;\n}\n\n#buttonHolder {\n  display: block;\n  padding: 10px;\n  height: 0;\n  transition: height 0.2s;\n}\n\n#genreToggle {\n  border-color: aqua;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZmluZC9maW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJRTtFQUNFLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSxtQkFBQTtBQUFKOztBQUVFO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQURKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRko7O0FBTUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFISjs7QUFPRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFNRTtFQUtFLHFCQUFBO0FBUEo7O0FBVUU7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUko7O0FBVUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFQSjs7QUFlRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNDLDhCQUFBO0VBRUQsaUJBQUE7QUFiSjs7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWJKOztBQWVFO0VBQ0UscUJBQUE7QUFaSjs7QUFlRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsNkJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFiSjs7QUFlRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBWko7O0FBY0U7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBWEo7O0FBYUU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBWUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFXRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVdFO0VBRUUsbUJBQUE7RUFDRix5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0RBQUE7QUFURjs7QUFXRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBUko7O0FBV0U7RUFDRSxxQkFBQTtBQVJKOztBQWNFO0VBQ0Usa0JBQUE7QUFYSjs7QUFjRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFYSjs7QUFhRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBVko7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZpbmQvZmluZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgaW9uLWdyaWR7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbiAgaW9uLXJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gXHJcbiAgI2dlbnJlVG9nZ2xlOmhvdmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAgYXF1YTtcclxuICAgIGNvbG9yOiByZ2IoMTg2LCAyNTAsIDE4OSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICBcclxuICB9XHJcbiAgI2NvbnRlbnRXcmFwcGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xyXG4gICAgb3BhY2l0eTogLjY1O1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcbiAgI2NvbnRlbnRNYWlue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgLy9sZWZ0OiAzMCU7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gICNjYXJkTWFpbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAubW92aWVJbWFnZXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgfVxyXG4gIC5tb3ZpZUltYWdlOmhvdmVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgI21vdmllSW1hZ2VDYXJke1xyXG4gICAgLy9ib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgIC8vcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gICNtb3ZpZUltYWdlQ2FyZCAuYnV0dG9uc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gICNtb3ZpZUltYWdlQ2FyZCBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgI2ljb25Ib2xkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDE0LCAxNCk7XHJcbiAgICBcclxuICB9XHJcbiAgI2ljb25Ib2xkZXIgaW1ne1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE3LCAxNywgMTcpO1xyXG4gIH1cclxuICAjaWNvbkhvbGRlciBpbWc6aG92ZXJ7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAvL21hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgLy9vYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgLy93aWR0aDogMzMlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGV7XHJcbiAgICBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjVzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAvLyAjY29tZWRpZXN7XHJcbiAgLy8gICBoZWlnaHQ6IDU1MHB4O1xyXG4gIC8vICAgd2lkdGg6IDMyMHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAuY29udGFpbmVyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiKDIxNCwgMjAxLCAxOSk7XHJcbiAgICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNXB4O1xyXG4gICAgXHJcbiAgICBsaW5lLWhlaWdodDogMjZwdDtcclxuICAgIC8vbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gICNsb2dve1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICAjdGl0bGVCYWNrZ3JvdW5ke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNDMsIDI1Myk7XHJcbiAgfVxyXG4gICN3YXRjaEJhcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICAgIC8vb3BhY2l0eTogLjc7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDI0NywgMjI5LCA3MSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgI3dhdGNoQmFyIGgye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gIH1cclxuICAjd2F0Y2hCYXIgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgI3dhdGNoQmFyIGgze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICAud3JpdGVyU3RhckRpcmVjdG9ye1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgI3N0aWNreURpdntcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGVze1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJlZFx0O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiBncmVlbjtcdFxyXG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHllbGxvdztcclxuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogYmx1ZTtcclxuICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZDogcmdiKDUzLCA1MywgNTMpO1xyXG4gIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gIH1cclxuICBpb24tc2VhcmNoYmFye1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoMjE0LCAyMDEsIDE5KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLy8gaW9uLWJ1dHRvbntcclxuICAvLyAgIC0tY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAvLyAgIC0tYm9yZGVyLWNvbG9yOnJnYigxMDEsIDE5OCwgMjU1KTtcclxuICAvLyB9XHJcbiAgLmdlbnJlVGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLmJIb2xkZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICB9XHJcbiAgI2J1dHRvbkhvbGRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDowO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4ycztcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAjZ2VucmVUb2dnbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/views/find/find.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/views/find/find.page.ts ***!
      \*****************************************/

    /*! exports provided: FindPage */

    /***/
    function srcAppViewsFindFindPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FindPage", function () {
        return FindPage;
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

      var FindPage = /*#__PURE__*/function () {
        function FindPage(platform, activatedRoute, http, router) {
          var _this = this;

          _classCallCheck(this, FindPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.router = router;
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
            _this.inputData = data.search;
          });
          platform.ready().then(function () {
            _this.width = platform.width();
            _this.height = platform.height();
            var slides = document.querySelectorAll('.movieImage');
            var logo = document.querySelector('#logo');

            if (_this.width < 800) {
              _this.smallSearch = 1;
              var buttonHolder = document.querySelectorAll('.bHolder');
              logo.src = "assets/icon/sIconV3.png";
              buttonHolder.forEach(function (element) {
                element.style.display = "none";
              });
              slides.forEach(function (element) {
                element.style.width = "100px";
                element.style.height = "auto";
              });
            } else {
              logo.src = "assets/nameLogoV2.png";
              _this.smallSearch = 0;
              slides.forEach(function (element) {
                element.style.width = "160px";
                element.style.height = "auto";
              });
            }
          });
          platform.resize.subscribe(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var slides, logo, buttonHolder;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.width = platform.width();
                      this.height = platform.height();
                      slides = document.querySelectorAll('.movieImage');
                      logo = document.querySelector('#logo');

                      if (this.width < 800) {
                        this.smallSearch = 1;
                        buttonHolder = document.querySelectorAll('.bHolder');
                        logo.src = "assets/icon/sIconV3.png";
                        buttonHolder.forEach(function (element) {
                          element.style.display = "none";
                        });
                        slides.forEach(function (element) {
                          element.style.width = "100px";
                          element.style.height = "auto";
                        });
                      } else {
                        logo.src = "assets/nameLogoV2.png";
                        this.smallSearch = 0;
                        slides.forEach(function (element) {
                          element.style.width = "160px";
                          element.style.height = "auto";
                        });
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }

        _createClass(FindPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSearch(this.inputData);
          }
        }, {
          key: "getSearch",
          value: function getSearch(input) {
            var _this2 = this;

            this.http.get('http://18.188.243.225:9091/searchQuery?title=' + input).toPromise().then(function (data) {
              console.log(data);
              var parsedData = JSON.parse(JSON.stringify(data));
              console.log(parsedData.length);

              for (var i = 0; i < parsedData.length; i++) {
                var obj = parsedData[i];
                var card = new _models_card_model__WEBPACK_IMPORTED_MODULE_4__["Card"](obj);
                console.log(card);

                _this2.cardsSearch.push(card);
              }
            });
            this.intSearch++;
          }
        }, {
          key: "updateSearch",
          value: function updateSearch(input) {
            var _this3 = this;

            this.cardsSearch = [];
            this.http.get('http://18.188.243.225:9091/searchQuery?title=' + input).toPromise().then(function (data) {
              var parsedData = JSON.parse(JSON.stringify(data));

              for (var i = 0; i < parsedData.length; i++) {
                var obj = parsedData[i];
                var card = new _models_card_model__WEBPACK_IMPORTED_MODULE_4__["Card"](obj);

                _this3.cardsSearch.push(card);
              }
            });
            this.intSearch++;
          }
        }, {
          key: "movieInfo",
          value: function movieInfo(_movieInfo) {
            document.getElementById("contentWrapper").style.display = "block";
            var movieImage = document.getElementById("movieImageCard");
            var cMain = document.getElementById("contentMain");
            var currentWidth;

            if (this.width < 800) {
              cMain.style.width = "100%";
              currentWidth = 1;
              cMain.style.left = "0%";
              movieImage.style.backgroundPosition = "none";
            } else {
              cMain.style.width = "40%";
              currentWidth = .40;
              cMain.style.left = "30%";
              movieImage.style.backgroundPosition = "center";
            }

            cMain.style.right = "none";
            var tempHeight = this.height / 1.1;
            cMain.style.height = tempHeight.toString() + "px";
            this.populateCard(movieImage, currentWidth, _movieInfo);
          }
        }, {
          key: "routePage",
          value: function routePage(name) {
            this.router.navigate([name]);
          }
        }, {
          key: "populateCard",
          value: function populateCard(movieImage, currentWidth, movieInfo) {
            var displayer = document.getElementById("cardMain");
            displayer.style.display = "block";
            console.log(displayer);
            var realImage = document.querySelector("#imageOnCard");
            realImage.setAttribute('src', movieInfo.getPoster());
            document.getElementById("cardTitle").innerHTML = movieInfo.getTitle();
            document.getElementById("cardDescription").innerHTML = movieInfo.getDescript();
            document.getElementById("cardDir").innerHTML = movieInfo.getDirectors();
            document.getElementById("cardCast").innerHTML = movieInfo.getCast();
            var netflixE = document.querySelector('#netflixLink');
            var huluE = document.querySelector('#huluLink');
            var PrimeE = document.querySelector('#primeLink'); //also will add in database check for whether or not user has the slected services. 

            var netflixL = movieInfo.getNetflix();
            var huluL = movieInfo.getHulu();
            var primeL = movieInfo.getPrime();

            if (netflixL == null) {
              netflixE.style.opacity = '.1';
            }

            if (huluL == null) {
              huluE.style.opacity = '.1';
            }

            if (primeL == null) {
              PrimeE.style.opacity = '.1';
            }

            netflixE.href = netflixL;
            huluE.href = huluL;
            PrimeE.href = primeL;
            var widther = this.height * .85;
            movieImage.style.height = widther.toString() + "px";
            var backR = document.getElementById("cardMain");
            backR.style.backgroundColor = "black";
          }
        }, {
          key: "resetNorm",
          value: function resetNorm() {
            var animation = Math.floor(Math.random() * Math.floor(3));

            if (animation == 0) {
              document.getElementById("contentMain").style.left = "-60%";
            }

            if (animation == 1) {
              document.getElementById("contentMain").style.height = "0%";
            }

            if (animation == 2) {
              document.getElementById("contentMain").style.width = "0%";
            } else {
              document.getElementById("contentMain").style.right = "100%";
            }

            document.getElementById("contentWrapper").style.display = "none";
            document.getElementById("contentMain").style.width = "0%";
            var displayer = document.getElementById("cardMain");
            displayer.style.display = "none";
          }
        }]);

        return FindPage;
      }();

      FindPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      FindPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-find',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./find.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/find/find.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./find.page.scss */
        "./src/app/views/find/find.page.scss"))["default"]]
      })], FindPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-find-find-module-es5.js.map