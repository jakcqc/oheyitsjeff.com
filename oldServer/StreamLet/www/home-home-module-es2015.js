(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <div id=\"titleBackground\">\r\n            <ion-item>\r\n            <img id = \"logo\" src = \"assets/nameLogoV2.png\">\r\n            </ion-item>\r\n\r\n\r\n            \r\n        </div>\r\n        <span id=\"endToolbar\" slot=\"end\">\r\n        \r\n    <ion-item>\r\n            <ion-searchbar (mouseenter) = \"hoverChange(0)\" (mouseleave) = \"hoverChange(1)\" (click) = \"format()\" (search)=\"search($event.target.value)\"></ion-searchbar>\r\n        </ion-item>\r\n        <ion-item>\r\n            <span id = \"genreToggle\"   (click)= \"showGenre()\"><ion-icon name=\"settings-outline\"></ion-icon></span>\r\n            \r\n      </ion-item>\r\n        <ion-item>\r\n            <span id = \"accounter\" class = \"buttons\"  (click)= \"routePage('login')\">Account</span>\r\n        </ion-item>\r\n        </span>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Rendering buttons -->\r\n        <ion-list id = \"buttonHolder\" (click) = \"setGenreColor()\">\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnAction?'solid':'outline'\" (click)= \"setGenreClient('Action')\" >Action</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnAdventure?'solid':'outline'\" (click)= \"setGenreClient('Adventure')\">Adventure</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnAnimation?'solid':'outline'\" (click)= \"setGenreClient('Animation')\">Animation</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnBiography?'solid':'outline'\" (click)= \"setGenreClient('Biography')\">Biography</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnComedy?'solid':'outline'\" (click)= \"setGenreClient('Comedy')\">Comedy</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnCrime?'solid':'outline'\" (click)= \"setGenreClient('Crime')\">Crime</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnDocumentary?'solid':'outline'\" (click)= \"setGenreClient('Documentary')\">Documentary</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnDrama?'solid':'outline'\" (click)= \"setGenreClient('Drama')\">Drama</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnFamily?'solid':'outline'\" (click)= \"setGenreClient('Family')\">Family</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnFantasy?'solid':'outline'\" (click)= \"setGenreClient('Fantasy')\">Fantasy</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnFilmNoir?'solid':'outline'\" (click)= \"setGenreClient('FilmNoir')\">Film Noir</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnGameShow?'solid':'outline'\" (click)= \"setGenreClient('GameShow')\">Game Show</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnHistory?'solid':'outline'\" (click)= \"setGenreClient('History')\">History</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnHorror?'solid':'outline'\" (click)= \"setGenreClient('Horror')\">Horror</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnMusic?'solid':'outline'\" (click)= \"setGenreClient('Music')\">Music</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnMusical?'solid':'outline'\" (click)= \"setGenreClient('Musical')\">Musical</ion-button>\r\n            <ion-button color=\"warning\"size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnMystery?'solid':'outline'\" (click)= \"setGenreClient('Mystery')\">Mystery</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnNews?'solid':'outline'\" (click)= \"setGenreClient('News')\">News</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnReality?'solid':'outline'\" (click)= \"setGenreClient('Reality')\">Reality</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnRomance?'solid':'outline'\" (click)= \"setGenreClient('Romance')\">Romance</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnScienceFiction?'solid':'outline'\" (click)= \"setGenreClient('ScienceFiction')\">Science Fiction</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnShort?'solid':'outline'\" (click)= \"setGenreClient('Short')\">Short</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnSport?'solid':'outline'\" (click)= \"setGenreClient('Sport')\">Sport</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnTalkShow?'solid':'outline'\" (click)= \"setGenreClient('TalkShow')\">Talk Show</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnThriller?'solid':'outline'\" (click)= \"setGenreClient('Thriller')\">Thriller</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnWar?'solid':'outline'\" (click)= \"setGenreClient('War')\">War</ion-button>\r\n            <ion-button color=\"warning\" size = \"small\" shape=\"round\" [fill]=\"genreContainer.isOnWestern?'solid':'outline'\" (click)= \"setGenreClient('Western')\">Western</ion-button>\r\n            <div id = \"breaker\"></div>\r\n            <ion-button color=\"danger\" size = \"small\" shape=\"round\" [fill]=\"streamTog['netflix']?'solid':'outline'\" (click)=\"setStreamers('netflix')\">Netflix</ion-button>\r\n            <ion-button color=\"danger\" size = \"small\" shape=\"round\" [fill]=\"streamTog['hulu']?'solid':'outline'\" (click)=\"setStreamers('hulu')\">Hulu</ion-button>\r\n            <ion-button color=\"danger\" size = \"small\" shape=\"round\" [fill]=\"streamTog['prime']?'solid':'outline'\" (click)=\"setStreamers('prime')\">Prime</ion-button>\r\n        </ion-list>\r\n<ion-content [fullscreen]=\"true\" id=\"bodyMain\">\r\n    <div id=\"scrollMain\">\r\n        <div id=\"contentMain\">\r\n            <div id=\"cardMain\">\r\n\r\n                <div id=\"movieImageCard\">\r\n                    <div id=\"stickyDiv\">\r\n                        <span class=\"buttons\" (click)=\"resetNorm()\">X</span>\r\n                        <!-- <div id = \"watchBarBorder\">The Shining</div> -->\r\n\r\n                    </div>\r\n                    <img id=\"imageOnCard\" src=\"\">\r\n                </div>\r\n\r\n\r\n                <div id=\"iconHolder\">\r\n                    <a href=\"\" (click) = 'history()' id=\"netflixLink\" target=\"_blank\"> <img id=\"netflix\" src=\"assets/icon/netflixIcon.jpeg\" > </a>\r\n                    <a href=\"\" (click) = 'history()' id=\"huluLink\" target=\"_blank\"><img id=\"hulu\" src=\"assets/icon/huluIcon.png\" > </a>\r\n                    <a href=\"\" (click) = 'history()' id=\"primeLink\" target=\"_blank\"><img id=\"primeVideo\" src=\"assets/icon/primeVideoIcon.png\"> </a>\r\n                </div>\r\n                <div id=\"watchBar\">\r\n                    <h2 id=\"cardTitle\"></h2>\r\n                    <p id=\"cardDescription\"></p>\r\n                    <h3><span>Director(s): </span> <span class=\"writerStarDirector\" id=\"cardDir\">Stanley Kubrick</span></h3>\r\n                    <h3><span>Stars: </span> <span class=\"writerStarDirector\" id=\"cardCast\">Jack Nicholson, Shelley Duvall, Danny Lloyd</span></h3>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        \r\n\r\n        <div id=\"contentWrapper\" (click)=\"resetNorm()\"></div>\r\n        <ion-grid>\r\n\r\n          <ion-row *ngIf=\"genreContainer.isOnUserHistory\">\r\n            <div class=\"container\">\r\n              <span class=\"genreTitle\">Watch History</span>\r\n              <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" >\r\n              <ion-slide id=\"Action\" *ngFor=\"let card of genreContainer.cardsUserHistory\" (click)=\"movieInfo(card)\" #slides67 (ionSlideReachEnd)=\"genreContainer.getUserHistory()\">\r\n              <ion-col>\r\n                <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n              </ion-col>\r\n              </ion-slide>\r\n              </ion-slides>\r\n            </div>\r\n            <div class=\"bHolder\">\r\n              <div class=\"buttons\" (click)=\"slides67.slidePrev()\">\r\n                < \r\n              </div>\r\n              <div class=\"buttons\" (click)=\"slides67.slideNext()\"> > </div>\r\n            </div>\r\n          </ion-row>\r\n\r\n\r\n              <ion-row *ngIf=\"genreContainer.isOnAction\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Action</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides0 (ionSlideReachEnd)=\"genreContainer.getAction()\">\r\n                  <ion-slide id=\"Action\" *ngFor=\"let card of genreContainer.cardsAction\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides0.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides0.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnAdventure\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Adventure</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides1 (ionSlideReachEnd)=\"genreContainer.getAdventure()\">\r\n                  <ion-slide id=\"Adventure\" *ngFor=\"let card of genreContainer.cardsAdventure\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides1.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides1.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnAnimation\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Animation</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides2 (ionSlideReachEnd)=\"genreContainer.getAnimation()\">\r\n                  <ion-slide id=\"Animation\" *ngFor=\"let card of genreContainer.cardsAnimation\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides2.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides2.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnBiography\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Biography</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides3 (ionSlideReachEnd)=\"genreContainer.getBiography()\">\r\n                  <ion-slide id=\"Biography\" *ngFor=\"let card of genreContainer.cardsBiography\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides3.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides3.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnComedy\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Comedy</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides4 (ionSlideReachEnd)=\"genreContainer.getComedy()\">\r\n                  <ion-slide id=\"Comedy\" *ngFor=\"let card of genreContainer.cardsComedy\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides4.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides4.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnCrime\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Crime</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides5 (ionSlideReachEnd)=\"genreContainer.getCrime()\">\r\n                  <ion-slide id=\"Crime\" *ngFor=\"let card of genreContainer.cardsCrime\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides5.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides5.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnDocumentary\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Documentary</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides6 (ionSlideReachEnd)=\"genreContainer.getDocumentary()\">\r\n                  <ion-slide id=\"Documentary\" *ngFor=\"let card of genreContainer.cardsDocumentary\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides6.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides6.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnDrama\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Drama</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides7 (ionSlideReachEnd)=\"genreContainer.getDrama()\">\r\n                  <ion-slide id=\"Drama\" *ngFor=\"let card of genreContainer.cardsDrama\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides7.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides7.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnFamily\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Family</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides8 (ionSlideReachEnd)=\"genreContainer.getFamily()\">\r\n                  <ion-slide id=\"Family\" *ngFor=\"let card of genreContainer.cardsFamily\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides8.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides8.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnFantasy\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Fantasy</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides9 (ionSlideReachEnd)=\"genreContainer.getFantasy()\">\r\n                  <ion-slide id=\"Fantasy\" *ngFor=\"let card of genreContainer.cardsFantasy\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides9.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides9.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnFilmNoir\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">FilmNoir</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides10 (ionSlideReachEnd)=\"genreContainer.getFilmNoir()\">\r\n                  <ion-slide id=\"FilmNoir\" *ngFor=\"let card of genreContainer.cardsFilmNoir\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides10.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides10.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnGameShow\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">GameShow</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides11 (ionSlideReachEnd)=\"genreContainer.getGameShow()\">\r\n                  <ion-slide id=\"GameShow\" *ngFor=\"let card of genreContainer.cardsGameShow\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides11.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides11.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnHistory\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">History</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides12 (ionSlideReachEnd)=\"genreContainer.getHistory()\">\r\n                  <ion-slide id=\"History\" *ngFor=\"let card of genreContainer.cardsHistory\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides12.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides12.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnHorror\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Horror</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides13 (ionSlideReachEnd)=\"genreContainer.getHorror()\">\r\n                  <ion-slide id=\"Horror\" *ngFor=\"let card of genreContainer.cardsHorror\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides13.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides13.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnMusic\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Music</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides14 (ionSlideReachEnd)=\"genreContainer.getMusic()\">\r\n                  <ion-slide id=\"Music\" *ngFor=\"let card of genreContainer.cardsMusic\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides14.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides14.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnMusical\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Musical</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides15 (ionSlideReachEnd)=\"genreContainer.getMusical()\">\r\n                  <ion-slide id=\"Musical\" *ngFor=\"let card of genreContainer.cardsMusical\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides15.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides15.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnMystery\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Mystery</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides16 (ionSlideReachEnd)=\"genreContainer.getMystery()\">\r\n                  <ion-slide id=\"Mystery\" *ngFor=\"let card of genreContainer.cardsMystery\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides16.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides16.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnNews\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">News</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides17 (ionSlideReachEnd)=\"genreContainer.getNews()\">\r\n                  <ion-slide id=\"News\" *ngFor=\"let card of genreContainer.cardsNews\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides17.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides17.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnReality\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Reality</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides18 (ionSlideReachEnd)=\"genreContainer.getReality()\">\r\n                  <ion-slide id=\"Reality\" *ngFor=\"let card of genreContainer.cardsReality\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides18.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides18.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnRomance\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Romance</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides19 (ionSlideReachEnd)=\"genreContainer.getRomance()\">\r\n                  <ion-slide id=\"Romance\" *ngFor=\"let card of genreContainer.cardsRomance\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides19.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides19.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnScienceFiction\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">ScienceFiction</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides20 (ionSlideReachEnd)=\"genreContainer.getScienceFiction()\">\r\n                  <ion-slide id=\"ScienceFiction\" *ngFor=\"let card of genreContainer.cardsScienceFiction\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides20.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides20.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnShort\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Short</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides21 (ionSlideReachEnd)=\"genreContainer.getShort()\">\r\n                  <ion-slide id=\"Short\" *ngFor=\"let card of genreContainer.cardsShort\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides21.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides21.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnSport\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Sport</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides22 (ionSlideReachEnd)=\"genreContainer.getSport()\">\r\n                  <ion-slide id=\"Sport\" *ngFor=\"let card of genreContainer.cardsSport\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides22.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides22.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnTalkShow\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">TalkShow</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides23 (ionSlideReachEnd)=\"genreContainer.getTalkShow()\">\r\n                  <ion-slide id=\"TalkShow\" *ngFor=\"let card of genreContainer.cardsTalkShow\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides23.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides23.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnThriller\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Thriller</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides24 (ionSlideReachEnd)=\"genreContainer.getThriller()\">\r\n                  <ion-slide id=\"Thriller\" *ngFor=\"let card of genreContainer.cardsThriller\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides24.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides24.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnWar\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">War</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides25 (ionSlideReachEnd)=\"genreContainer.getWar()\">\r\n                  <ion-slide id=\"War\" *ngFor=\"let card of genreContainer.cardsWar\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides25.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides25.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"genreContainer.isOnWestern\">\r\n                <div class=\"container\">\r\n                  <span class=\"genreTitle\">Western</span>\r\n                  <ion-slides scrollbar=\"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides26 (ionSlideReachEnd)=\"genreContainer.getWestern()\">\r\n                  <ion-slide id=\"Western\" *ngFor=\"let card of genreContainer.cardsWestern\" (click)=\"movieInfo(card)\">\r\n                  <ion-col>\r\n                    <ion-img class=\"movieImage\" [src]=\"card.getPoster()\"></ion-img>\r\n                    <ion-label> {{ card.getImdbRating() }}/100</ion-label>\r\n                  </ion-col>\r\n                  </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <div class=\"bHolder\">\r\n                  <div class=\"buttons\" (click)=\"slides26.slidePrev()\">\r\n                    < \r\n                  </div>\r\n                  <div class=\"buttons\" (click)=\"slides26.slideNext()\"> > </div>\r\n                </div>\r\n              </ion-row>\r\n\r\n\r\n\r\n              <!-- HERE -->\r\n            <ion-row>\r\n                <ion-col size=\"6\">\r\n                    StreamLet 2021\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  text-align: left;\n}\n\nion-grid {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\nion-row {\n  margin-bottom: 30px;\n}\n\n#genreToggle:hover {\n  border-radius: 0px;\n  box-shadow: 0px 5px aqua;\n  color: #bafabd;\n}\n\n#contentWrapper {\n  position: fixed;\n  display: none;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: #0f0f0f;\n  opacity: 0.65;\n  z-index: 5;\n}\n\n#contentMain {\n  display: block;\n  position: fixed;\n  top: 10%;\n  height: 0%;\n  width: auto;\n  background-color: black;\n  opacity: 1;\n  z-index: 10;\n  border-radius: 10px;\n  transition: 0.4s;\n  overflow: scroll;\n}\n\n#cardMain {\n  display: none;\n  border: 3px solid black;\n  border-radius: 4px;\n}\n\n.movieImage {\n  border: 1px solid black;\n  transition: 0.2s;\n}\n\n.movieImage:hover {\n  border-color: white;\n}\n\n#movieImageCard {\n  position: relative;\n  width: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#movieImageCard .buttons {\n  position: absolute;\n  top: 8px;\n  left: 5px;\n  background-color: black;\n  opacity: 0.6;\n  z-index: 4;\n  padding: 5px;\n}\n\n#movieImageCard img {\n  display: block;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n#iconHolder {\n  width: 100%;\n  padding-top: 5px;\n  background-color: #0e0e0e;\n}\n\n#iconHolder img {\n  display: inline-block;\n  height: 80px;\n  width: 33.33%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s;\n  border: 3px solid #111111;\n}\n\n#iconHolder img:hover {\n  border-color: #ececec;\n}\n\nion-slide {\n  height: auto;\n  width: auto;\n  max-width: 160px;\n  max-width: 150px;\n  transition: height 0.5s;\n  text-align: center;\n  margin-top: 10px;\n  padding: 1px;\n}\n\nion-label {\n  display: inline-block;\n  width: 100px;\n}\n\n.container span {\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 5px;\n  line-height: 26pt;\n}\n\n#logo {\n  height: 60px;\n}\n\n#titleBackground {\n  display: inline-block;\n}\n\n#watchBar {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  padding: 8px;\n  background-color: #0a0a0a;\n  border-top: 5px solid #f7e547;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n#watchBar h2 {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  background-color: black;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 700;\n  text-shadow: 1px 1px 1px #f3f3f3;\n  border-top: 5px solid black;\n  font-family: \"Open Sans\";\n}\n\n#watchBar p {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n}\n\n#watchBar h3 {\n  font-family: \"Open Sans\";\n  font-weight: 800;\n}\n\n.writerStarDirector {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n#stickyDiv {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\nion-slides {\n  margin-bottom: 10px;\n  --bullet-background: red\t;\n  --bullet-background-active: green;\n  --progress-bar-background: yellow;\n  --progress-bar-background-active: blue;\n  --scroll-bar-background: rgb(53, 53, 53);\n  --scroll-bar-background-active: rgb(238, 238, 238);\n}\n\nion-searchbar {\n  border-left: 3px solid #d6c913;\n  width: 60px;\n  transition: width 0.2s;\n}\n\nion-item {\n  display: inline-block;\n}\n\n.genreTitle {\n  margin-right: 20px;\n}\n\n.bHolder {\n  display: inline-block;\n  margin: auto auto;\n}\n\n#buttonHolder {\n  display: block;\n  padding: 10px;\n  height: 0;\n  transition: height 0.2s;\n}\n\n#breaker {\n  height: 2px;\n  background-color: #eeeeee;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#genreToggle {\n  border-color: aqua;\n  width: auto;\n  border-bottom: 1px solid none;\n  transition: 0.2s;\n}\n\n#genreToggle ion-icon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUdBLHdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBTEY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFTQTtFQUNFLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBU0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQU9BO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBV0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFSRjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBVEY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFURjs7QUFXQTtFQUtFLHFCQUFBO0FBWkY7O0FBZUE7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBYkY7O0FBZUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFaRjs7QUFvQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNDLDhCQUFBO0VBRUQsaUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsWUFBQTtBQWxCRjs7QUFvQkE7RUFDRSxxQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLDZCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBbEJGOztBQW9CQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBakJGOztBQW1CQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUFoQkY7O0FBa0JBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQWZGOztBQWlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWdCQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQWJGOztBQWdCQTtFQUVFLG1CQUFBO0VBQ0YseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGtEQUFBO0FBZEE7O0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLGtCQUFBO0FBYkY7O0FBZUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBWkY7O0FBY0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQVhGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlvbi1ncmlke1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5pb24tcm93e1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNnZW5yZVRvZ2dsZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgXHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAgYXF1YTtcclxuICBjb2xvcjogcmdiKDE4NiwgMjUwLCAxODkpO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gIFxyXG59XHJcbiNnZW5yZVRvZ2dsZSBpb24taWNvbjpob3ZlcntcclxuICBcclxuICBcclxuICBcclxufVxyXG4jY29udGVudFdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuI2NvbnRlbnRNYWlue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDogMTAlO1xyXG4gIC8vbGVmdDogMzAlO1xyXG4gIGhlaWdodDogMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC40cztcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIFxyXG59XHJcblxyXG4jY2FyZE1haW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBcclxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLm1vdmllSW1hZ2V7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuLm1vdmllSW1hZ2U6aG92ZXJ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4jbW92aWVJbWFnZUNhcmR7XHJcbiAgLy9ib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAvL3BhZGRpbmc6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIFxyXG4gIC8vYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbiNtb3ZpZUltYWdlQ2FyZCAuYnV0dG9uc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IC42O1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxuXHJcbn1cclxuI21vdmllSW1hZ2VDYXJkIGltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIFxyXG59XHJcblxyXG4jaWNvbkhvbGRlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTQsIDE0KTtcclxuICBcclxufVxyXG4jaWNvbkhvbGRlciBpbWd7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMzMuMzMlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTcsIDE3LCAxNyk7XHJcbn1cclxuI2ljb25Ib2xkZXIgaW1nOmhvdmVye1xyXG4gIC8vbWFyZ2luLWxlZnQ6IDVweDtcclxuICAvL21hcmdpbi1yaWdodDogNXB4O1xyXG4gIC8vb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAvL3dpZHRoOiAzMyU7XHJcbiAgYm9yZGVyLWNvbG9yOiAgcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG59XHJcblxyXG5pb24tc2xpZGV7XHJcbiAgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTYwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjVzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLy8gI2NvbWVkaWVze1xyXG4vLyAgIGhlaWdodDogNTUwcHg7XHJcbi8vICAgd2lkdGg6IDMyMHB4O1xyXG4vLyB9XHJcblxyXG4uY29udGFpbmVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNXB4O1xyXG4gIFxyXG4gIGxpbmUtaGVpZ2h0OiAyNnB0O1xyXG4gIC8vbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuI2xvZ297XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbiN0aXRsZUJhY2tncm91bmR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQzLCAyNTMpO1xyXG59XHJcbiN3YXRjaEJhcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gIC8vb3BhY2l0eTogLjc7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigyNDcsIDIyOSwgNzEpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiN3YXRjaEJhciBoMntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbn1cclxuI3dhdGNoQmFyIHB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4jd2F0Y2hCYXIgaDN7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4ud3JpdGVyU3RhckRpcmVjdG9ye1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiNzdGlja3lEaXZ7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICBcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4tLWJ1bGxldC1iYWNrZ3JvdW5kOiByZWRcdDtcclxuLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGdyZWVuO1x0XHJcbi0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHllbGxvdztcclxuLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmU6IGJsdWU7XHJcbi0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiByZ2IoNTMsIDUzLCA1Myk7XHJcbi0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoMjE0LCAyMDEsIDE5KTtcclxuICB3aWR0aDogNjBweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmdlbnJlVGl0bGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5iSG9sZGVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxufVxyXG4jYnV0dG9uSG9sZGVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OjA7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4ycztcclxufVxyXG4jYnJlYWtlcntcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiNnZW5yZVRvZ2dsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBub25lO1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxuICBcclxufVxyXG4jZ2VucmVUb2dnbGUgaW9uLWljb257XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gXHJcbiAgXHJcblxyXG4gIFxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_movie_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movie-service.service */ "./src/app/services/movie-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_genre_container_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/genre-container.model */ "./src/app/models/genre-container.model.ts");
/* harmony import */ var _services_user_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user-login.service */ "./src/app/services/user-login.service.ts");










let HomePage = class HomePage {
    constructor(navCtrl, router, platform, movies, http, user) {
        this.router = router;
        this.movies = movies;
        this.http = http;
        this.user = user;
        this.cards = [
            "Example", "After", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        ];
        this.cardsNew = [];
        this.genreContainer = new _models_genre_container_model__WEBPACK_IMPORTED_MODULE_6__["GenreContainer"](this.http);
        this.cardsAction = [];
        this.cardsBiography = [];
        this.cardsComedy = [];
        this.intComedy = 1;
        this.intAction = 1;
        this.intBiography = 1;
        this.isOnComedy = false;
        this.isOnBiography = false;
        //total movie types to presented on the main page
        //first load fills these with the movie images
        //this does not include the search function movies 
        this.totalMovieGenres = {
            reccomended: [],
            watching: [],
            releases: [],
            comedies: [],
            horror: [],
            drama: [],
            animated: [],
            thriller: []
        };
        this.movieUpdater = 5;
        //color array for underline categories 
        this.colors = [
            "darkred",
            "green",
            "lightblue",
            "mediumslateblue",
            "darkyellow",
            "purple",
            "red",
            "mediumblue",
            "white",
            "yellow",
            "red",
            "blue",
            "darkgreen",
            "cyan",
            "darkcyan"
        ];
        this.movieData = "Jack Nicholson, Shelley Duvall, Danny Lloyd";
        this.streamTog = { netflix: false, hulu: false, prime: false };
        this.tog = 0;
        this.user.setJson();
        this.initializeGenres();
        this.intializeStreamers();
        platform.ready().then(() => {
            this.width = platform.width();
            this.height = platform.height();
            const slides = document.querySelectorAll('.movieImage');
            const logo = document.querySelector('#logo');
            const account = document.querySelector('#accounter');
            if (this.width < 800) {
                this.smallSearch = 1;
                const buttonHolder = document.querySelectorAll('.bHolder');
                logo.src = "assets/icon/sIconV3.png";
                buttonHolder.forEach(element => {
                    element.style.display = "none";
                });
                slides.forEach(element => {
                    element.style.width = "100px";
                    element.style.height = "auto";
                });
            }
            else {
                logo.src = "assets/nameLogoV2.png";
                this.smallSearch = 0;
                slides.forEach(element => {
                    element.style.width = "160px";
                    element.style.height = "auto";
                });
            }
            if (this.width < 500) {
                account.innerHTML = "| | |";
            }
        });
        platform.resize.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.width = platform.width();
            this.height = platform.height();
            const slides = document.querySelectorAll('.movieImage');
            const logo = document.querySelector('#logo');
            const account = document.querySelector('#accounter');
            if (this.width < 800) {
                this.smallSearch = 1;
                const buttonHolder = document.querySelectorAll('.bHolder');
                logo.src = "assets/icon/sIconV3.png";
                buttonHolder.forEach(element => {
                    element.style.display = "none";
                });
                slides.forEach(element => {
                    element.style.width = "100px";
                    element.style.height = "auto";
                });
            }
            if (this.width < 500) {
                account.innerHTML = "| | |";
            }
            if (this.width > 800) {
                logo.src = "assets/nameLogoV2.png";
                this.smallSearch = 0;
                slides.forEach(element => {
                    element.style.width = "160px";
                    element.style.height = "auto";
                    account.innerHTML = "Account";
                });
            }
        }));
    }
    // loadFuzzy(){
    //   var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     console.log(this.responseText);
    //   }
    // };
    // xhttp.open("GET", "assets/tester.txt", true);
    // xhttp.send();
    // }
    initializeGenres() {
        this.genreContainer = this.user.getGenres(this.genreContainer);
    }
    intializeStreamers() {
        this.streamTog = this.user.getStreamer(this.streamTog);
        this.genreContainer.intializeStreamers(this.streamTog);
        this.genreContainer.getUserHistory(this.user.getHistory());
    }
    setGenreClient(genreName) {
        this.genreContainer['isOn' + genreName] = !this.genreContainer['isOn' + genreName];
        this.user.setGenres(genreName);
    }
    setStreamers(stream) {
        this.streamTog = this.user.getStreamer(this.streamTog);
        this.streamTog[stream] = !this.streamTog[stream];
        this.user.setStreamers(stream, this.streamTog[stream]);
        this.genreContainer.changeStreamers(this.streamTog);
    }
    showGenre() {
        const genres = document.querySelector("#buttonHolder");
        const bToggle = document.querySelector('#genreToggle');
        if (this.tog == 0) {
            if (this.smallSearch == 1) {
                genres.style.height = "700px";
            }
            else {
                genres.style.height = "300px";
            }
            this.tog = 1;
        }
        else {
            genres.style.height = "0";
            this.tog = 0;
        }
    }
    hoverChange(type) {
        if (this.smallSearch == 0) {
            const searcher = document.querySelector("ion-searchbar");
            if (type == 0) {
                searcher.style.width = "300px";
            }
            if (type == 1) {
                searcher.style.width = "60px";
            }
        }
    }
    format() {
        if (this.smallSearch == 1) {
            this.router.navigate(['find', " "]);
        }
    }
    historyStore(id) {
        this.user.setHistory(id);
        this.genreContainer.getUserHistory(this.user.getHistory());
    }
    ngAfterViewInit() {
        let posters = document.getElementsByClassName("movieImage");
        let x = 0;
        let totalCards = document.querySelectorAll("ion-slide");
        this.setGenreColor();
        this.totalMovieGenres = this.movies.getMovieImage(this.totalMovieGenres);
    }
    routePage(name) {
        this.router.navigate([name]);
    }
    search(input) {
        this.router.navigate(['find', input]);
    }
    history(movieInfo) {
        this.historyStore(this.currentID);
    }
    movieInfo(movieInfo) {
        document.getElementById("contentWrapper").style.display = "block";
        const movieImage = document.getElementById("movieImageCard");
        let cMain = document.getElementById("contentMain");
        let currentWidth;
        if (this.width < 800) {
            cMain.style.width = "100%";
            currentWidth = 1;
            cMain.style.left = "0%";
            movieImage.style.backgroundPosition = "none";
        }
        else {
            cMain.style.width = "40%";
            currentWidth = .40;
            cMain.style.left = "30%";
            movieImage.style.backgroundPosition = "center";
        }
        cMain.style.right = "none";
        const tempHeight = this.height / 1.1;
        cMain.style.height = tempHeight.toString() + "px";
        console.log(movieInfo);
        this.populateCard(movieImage, currentWidth, movieInfo);
    }
    populateCard(movieImage, currentWidth, movieInfo) {
        const displayer = document.getElementById("cardMain");
        displayer.style.display = "block";
        console.log(displayer);
        let realImage = document.querySelector("#imageOnCard");
        realImage.setAttribute('src', movieInfo.getPoster());
        document.getElementById("cardTitle").innerHTML = movieInfo.getTitle();
        document.getElementById("cardDescription").innerHTML = movieInfo.getDescript();
        document.getElementById("cardDir").innerHTML = movieInfo.getDirectors();
        document.getElementById("cardCast").innerHTML = movieInfo.getCast();
        const netflixE = document.querySelector('#netflixLink');
        const huluE = document.querySelector('#huluLink');
        const PrimeE = document.querySelector('#primeLink');
        //also will add in database check for whether or not user has the slected services. 
        const netflixL = movieInfo.getNetflix();
        const huluL = movieInfo.getHulu();
        const primeL = movieInfo.getPrime();
        const netHis = document.getElementById("netflix");
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
        this.currentID = movieInfo.getImdbID();
        const widther = this.height * .85;
        movieImage.style.height = widther.toString() + "px";
        const backR = document.getElementById("cardMain");
        backR.style.backgroundColor = "black";
    }
    resetNorm() {
        let animation = Math.floor(Math.random() * Math.floor(3));
        if (animation == 0) {
            document.getElementById("contentMain").style.left = "-60%";
        }
        if (animation == 1) {
            document.getElementById("contentMain").style.height = "0%";
        }
        if (animation == 2) {
            document.getElementById("contentMain").style.width = "0%";
        }
        else {
            document.getElementById("contentMain").style.right = "100%";
        }
        document.getElementById("contentWrapper").style.display = "none";
        document.getElementById("contentMain").style.width = "0%";
        const displayer = document.getElementById("cardMain");
        displayer.style.display = "none";
    }
    getMovieTitles() {
    }
    getMovieGenre() {
    }
    setGenreColor() {
        const test = document.querySelectorAll('.genreTitle');
        let i = 0;
        let curColor;
        test.forEach(element => {
            element.style.textDecorationColor = this.colors[i];
            i++;
            if (i > this.colors.length) {
                i = 0;
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_movie_service_service__WEBPACK_IMPORTED_MODULE_4__["MovieServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_user_login_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginService"] }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"],] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides1',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/models/genre-container.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/genre-container.model.ts ***!
  \*************************************************/
/*! exports provided: GenreContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreContainer", function() { return GenreContainer; });
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.model */ "./src/app/models/card.model.ts");

class GenreContainer {
    constructor(http) {
        this.http = http;
        this.streamTog = { netflix: false, hulu: false, prime: false };
        this.cardsAction = [];
        this.intAction = 1;
        this.isOnAction = false;
        this.cardsAdventure = [];
        this.intAdventure = 1;
        this.isOnAdventure = false;
        this.cardsAnimation = [];
        this.intAnimation = 1;
        this.isOnAnimation = false;
        this.cardsBiography = [];
        this.intBiography = 1;
        this.isOnBiography = false;
        this.cardsComedy = [];
        this.intComedy = 1;
        this.isOnComedy = false;
        this.cardsCrime = [];
        this.intCrime = 1;
        this.isOnCrime = false;
        this.cardsDocumentary = [];
        this.intDocumentary = 1;
        this.isOnDocumentary = false;
        this.cardsDrama = [];
        this.intDrama = 1;
        this.isOnDrama = false;
        this.cardsFamily = [];
        this.intFamily = 1;
        this.isOnFamily = false;
        this.cardsFantasy = [];
        this.intFantasy = 1;
        this.isOnFantasy = false;
        this.cardsFilmNoir = [];
        this.intFilmNoir = 1;
        this.isOnFilmNoir = false;
        this.cardsGameShow = [];
        this.intGameShow = 1;
        this.isOnGameShow = false;
        this.cardsHistory = [];
        this.intHistory = 1;
        this.isOnHistory = false;
        this.cardsHorror = [];
        this.intHorror = 1;
        this.isOnHorror = false;
        this.cardsMusic = [];
        this.intMusic = 1;
        this.isOnMusic = false;
        this.cardsMusical = [];
        this.intMusical = 1;
        this.isOnMusical = false;
        this.cardsMystery = [];
        this.intMystery = 1;
        this.isOnMystery = false;
        this.cardsNews = [];
        this.intNews = 1;
        this.isOnNews = false;
        this.cardsReality = [];
        this.intReality = 1;
        this.isOnReality = false;
        this.cardsRomance = [];
        this.intRomance = 1;
        this.isOnRomance = false;
        this.cardsScienceFiction = [];
        this.intScienceFiction = 1;
        this.isOnScienceFiction = false;
        this.cardsShort = [];
        this.intShort = 1;
        this.isOnShort = false;
        this.cardsSport = [];
        this.intSport = 1;
        this.isOnSport = false;
        this.cardsTalkShow = [];
        this.intTalkShow = 1;
        this.isOnTalkShow = false;
        this.cardsThriller = [];
        this.intThriller = 1;
        this.isOnThriller = false;
        this.cardsWar = [];
        this.intWar = 1;
        this.isOnWar = false;
        this.cardsWestern = [];
        this.intWestern = 1;
        this.isOnWestern = false;
        this.cardsUserHistory = [];
        this.isOnUserHistory = true;
    }
    intializeStreamers(tog) {
        this.streamTog = tog;
    }
    changeStreamers(tog) {
        this.streamTog = tog;
        this.cardsAction = [];
        this.intAction = 1;
        this.cardsAdventure = [];
        this.intAdventure = 1;
        this.cardsAnimation = [];
        this.intAnimation = 1;
        this.cardsBiography = [];
        this.intBiography = 1;
        this.cardsComedy = [];
        this.intComedy = 1;
        this.cardsCrime = [];
        this.intCrime = 1;
        this.cardsDocumentary = [];
        this.intDocumentary = 1;
        this.cardsDrama = [];
        this.intDrama = 1;
        this.cardsFamily = [];
        this.intFamily = 1;
        this.cardsFantasy = [];
        this.intFantasy = 1;
        this.cardsFilmNoir = [];
        this.intFilmNoir = 1;
        this.cardsGameShow = [];
        this.intGameShow = 1;
        this.cardsHistory = [];
        this.intHistory = 1;
        this.cardsHorror = [];
        this.intHorror = 1;
        this.cardsMusic = [];
        this.intMusic = 1;
        this.cardsMusical = [];
        this.intMusical = 1;
        this.cardsMystery = [];
        this.intMystery = 1;
        this.cardsNews = [];
        this.intNews = 1;
        this.cardsReality = [];
        this.intReality = 1;
        this.cardsRomance = [];
        this.intRomance = 1;
        this.cardsScienceFiction = [];
        this.intScienceFiction = 1;
        this.cardsShort = [];
        this.intShort = 1;
        this.cardsSport = [];
        this.intSport = 1;
        this.cardsTalkShow = [];
        this.intTalkShow = 1;
        this.cardsThriller = [];
        this.intThriller = 1;
        this.cardsWar = [];
        this.intWar = 1;
        this.cardsWestern = [];
        this.intWestern = 1;
    }
    //   getRecommended(userHistory){
    //       userHistory.array.forEach(element => {
    //         this.http.get('http://18.188.243.225:9091/imdbSearch?id='+element).toPromise().then(
    //             data => {
    //             let parsedData = JSON.parse(JSON.stringify(data));
    //             for(let i = 0; i < parsedData.length; i++){
    //             let obj = parsedData[i];
    //             let card = new Card(obj);
    //             if(card.getPoster() != null)
    //             this.cardsUserHistory.push(card);
    //       });
    //   }
    //   }
    //   }
    getUserHistory(userHistory) {
        this.cardsUserHistory = [];
        userHistory.forEach(element => {
            this.http.get('http://18.188.243.225:9091/imdbSearch?id=' + element).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                console.log(parsedData);
                let obj = parsedData;
                let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                console.log('here');
                console.log(card);
                if (card.getPoster() != null)
                    this.cardsUserHistory.push(card);
            });
        });
    }
    getAction() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=28&page=' + this.intAction).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAction.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=28&page=' + this.intAction + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAction.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=28&page=' + this.intAction + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAction.push(card);
                }
            });
        }
        this.intAction++;
        if (this.intAction == 2)
            this.getAction();
    }
    getAdventure() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=12&page=' + this.intAdventure).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAdventure.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=12&page=' + this.intAdventure + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAdventure.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=12&page=' + this.intAdventure + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAdventure.push(card);
                }
            });
        }
        this.intAdventure++;
        if (this.intAdventure == 2)
            this.getAdventure();
    }
    getAnimation() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=16&page=' + this.intAnimation).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAnimation.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=16&page=' + this.intAnimation + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAnimation.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=16&page=' + this.intAnimation + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsAnimation.push(card);
                }
            });
        }
        this.intAnimation++;
        if (this.intAnimation == 2)
            this.getAnimation();
    }
    getBiography() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=1&page=' + this.intBiography).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsBiography.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=1&page=' + this.intBiography + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsBiography.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=1&page=' + this.intBiography + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsBiography.push(card);
                }
            });
        }
        this.intBiography++;
        if (this.intBiography == 2)
            this.getBiography();
    }
    getComedy() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=35&page=' + this.intComedy).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsComedy.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=35&page=' + this.intComedy + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsComedy.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=35&page=' + this.intComedy + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsComedy.push(card);
                }
            });
        }
        this.intComedy++;
        if (this.intComedy == 2)
            this.getComedy();
    }
    getCrime() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=80&page=' + this.intCrime).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsCrime.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=80&page=' + this.intCrime + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsCrime.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=80&page=' + this.intCrime + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsCrime.push(card);
                }
            });
        }
        this.intCrime++;
        if (this.intCrime == 2)
            this.getCrime();
    }
    getDocumentary() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=99&page=' + this.intDocumentary).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsDocumentary.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=99&page=' + this.intDocumentary + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsDocumentary.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=99&page=' + this.intDocumentary + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsDocumentary.push(card);
                }
            });
        }
        this.intDocumentary++;
        if (this.intDocumentary == 2)
            this.getDocumentary();
    }
    getDrama() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=18&page=' + this.intDrama).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsDrama.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=18&page=' + this.intDrama + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsDrama.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=18&page=' + this.intDrama + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsDrama.push(card);
                }
            });
        }
        this.intDrama++;
        if (this.intDrama == 2)
            this.getDrama();
    }
    getFamily() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10751&page=' + this.intFamily).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFamily.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10751&page=' + this.intFamily + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFamily.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10751&page=' + this.intFamily + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFamily.push(card);
                }
            });
        }
        this.intFamily++;
        if (this.intFamily == 2)
            this.getFamily();
    }
    getFantasy() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=14&page=' + this.intFantasy).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFantasy.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=14&page=' + this.intFantasy + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFantasy.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=14&page=' + this.intFantasy + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFantasy.push(card);
                }
            });
        }
        this.intFantasy++;
        if (this.intFantasy == 2)
            this.getFantasy();
    }
    getFilmNoir() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=2&page=' + this.intFilmNoir).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFilmNoir.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=2&page=' + this.intFilmNoir + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFilmNoir.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=2&page=' + this.intFilmNoir + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsFilmNoir.push(card);
                }
            });
        }
        this.intFilmNoir++;
        if (this.intFilmNoir == 2)
            this.getFilmNoir();
    }
    getGameShow() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=3&page=' + this.intGameShow).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsGameShow.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=3&page=' + this.intGameShow + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsGameShow.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=3&page=' + this.intGameShow + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsGameShow.push(card);
                }
            });
        }
        this.intGameShow++;
        if (this.intGameShow == 2)
            this.getGameShow();
    }
    getHistory() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=36&page=' + this.intHistory).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsHistory.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=36&page=' + this.intHistory + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsHistory.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=36&page=' + this.intHistory + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsHistory.push(card);
                }
            });
        }
        this.intHistory++;
        if (this.intHistory == 2)
            this.getHistory();
    }
    getHorror() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=27&page=' + this.intHorror).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsHorror.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=27&page=' + this.intHorror + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsHorror.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=27&page=' + this.intHorror + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsHorror.push(card);
                }
            });
        }
        this.intHorror++;
        if (this.intHorror == 2)
            this.getHorror();
    }
    getMusic() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10402&page=' + this.intMusic).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMusic.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10402&page=' + this.intMusic + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMusic.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10402&page=' + this.intMusic + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMusic.push(card);
                }
            });
        }
        this.intMusic++;
        if (this.intMusic == 2)
            this.getMusic();
    }
    getMusical() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=4&page=' + this.intMusical).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMusical.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=4&page=' + this.intMusical + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMusical.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=4&page=' + this.intMusical + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMusical.push(card);
                }
            });
        }
        this.intMusical++;
        if (this.intMusical == 2)
            this.getMusical();
    }
    getMystery() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=9648&page=' + this.intMystery).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMystery.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=9648&page=' + this.intMystery + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMystery.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=9648&page=' + this.intMystery + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsMystery.push(card);
                }
            });
        }
        this.intMystery++;
        if (this.intMystery == 2)
            this.getMystery();
    }
    getNews() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10763&page=' + this.intNews).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsNews.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10763&page=' + this.intNews + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsNews.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10763&page=' + this.intNews + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsNews.push(card);
                }
            });
        }
        this.intNews++;
        if (this.intNews == 2)
            this.getNews();
    }
    getReality() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10764&page=' + this.intReality).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsReality.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10764&page=' + this.intReality + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsReality.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10764&page=' + this.intReality + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsReality.push(card);
                }
            });
        }
        this.intReality++;
        if (this.intReality == 2)
            this.getReality();
    }
    getRomance() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10749&page=' + this.intRomance).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsRomance.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10749&page=' + this.intRomance + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsRomance.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10749&page=' + this.intRomance + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsRomance.push(card);
                }
            });
        }
        this.intRomance++;
        if (this.intRomance == 2)
            this.getRomance();
    }
    getScienceFiction() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=878&page=' + this.intScienceFiction).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsScienceFiction.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=878&page=' + this.intScienceFiction + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsScienceFiction.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=878&page=' + this.intScienceFiction + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsScienceFiction.push(card);
                }
            });
        }
        this.intScienceFiction++;
        if (this.intScienceFiction == 2)
            this.getScienceFiction();
    }
    getShort() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=6&page=' + this.intShort).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsShort.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=6&page=' + this.intShort + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsShort.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=6&page=' + this.intShort + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsShort.push(card);
                }
            });
        }
        this.intShort++;
        if (this.intShort == 2)
            this.getShort();
    }
    getSport() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=5&page=' + this.intSport).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsSport.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=5&page=' + this.intSport + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsSport.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=5&page=' + this.intSport + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsSport.push(card);
                }
            });
        }
        this.intSport++;
        if (this.intSport == 2)
            this.getSport();
    }
    getTalkShow() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10767&page=' + this.intTalkShow).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsTalkShow.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10767&page=' + this.intTalkShow + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsTalkShow.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10767&page=' + this.intTalkShow + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsTalkShow.push(card);
                }
            });
        }
        this.intTalkShow++;
        if (this.intTalkShow == 2)
            this.getTalkShow();
    }
    getThriller() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=53&page=' + this.intThriller).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsThriller.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=53&page=' + this.intThriller + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsThriller.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=53&page=' + this.intThriller + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsThriller.push(card);
                }
            });
        }
        this.intThriller++;
        if (this.intThriller == 2)
            this.getThriller();
    }
    getWar() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10752&page=' + this.intWar).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsWar.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10752&page=' + this.intWar + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsWar.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=10752&page=' + this.intWar + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsWar.push(card);
                }
            });
        }
        this.intWar++;
        if (this.intWar == 2)
            this.getWar();
    }
    getWestern() {
        if (this.streamTog.netflix) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=37&page=' + this.intWestern).toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsWestern.push(card);
                }
            });
        }
        if (this.streamTog.hulu) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=37&page=' + this.intWestern + '&service=hulu&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsWestern.push(card);
                }
            });
        }
        if (this.streamTog.prime) {
            this.http.get('http://18.188.243.225:9091/broadQuery?genre=37&page=' + this.intWestern + '&service=prime&order_by=year').toPromise().then(data => {
                let parsedData = JSON.parse(JSON.stringify(data));
                for (let i = 0; i < parsedData.length; i++) {
                    let obj = parsedData[i];
                    let card = new _card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](obj);
                    if (card.getPoster() != null)
                        this.cardsWestern.push(card);
                }
            });
        }
        this.intWestern++;
        if (this.intWestern == 2)
            this.getWestern();
    }
}


/***/ }),

/***/ "./src/app/models/userData.json":
/*!**************************************!*\
  !*** ./src/app/models/userData.json ***!
  \**************************************/
/*! exports provided: userData, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"userData\":{\"netflix\":true,\"hulu\":true,\"prime\":true,\"genre\":[\"Action\",\"Adventure\",\"Comedy\",\"Family\",\"ScienceFiction\",\"Drama\",\"Horror\"],\"history\":[]}}");

/***/ }),

/***/ "./src/app/services/movie-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/movie-service.service.ts ***!
  \***************************************************/
/*! exports provided: MovieServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServiceService", function() { return MovieServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MovieServiceService = class MovieServiceService {
    constructor() {
        this.cardImage = [];
        this.streamer = [
            "netflix",
            "hulu",
            "amazon"
        ];
    }
    getMovieImage(totalMovies) {
        //this is where api backend call happens to get movie images when first populating the page
        //right now using psuedo data for testing 
        this.cardImage = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wT5ayfO9mk-9pghpeBf3_PevRid76Nk-Cg&usqp=CAU",
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
            "https://i.pinimg.com/736x/6d/a3/07/6da307ddd2d2f5c2aaf1f09b112b3257.jpg",
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/black_widow_ver9_xlg_240x360_crop_center.progressive.jpg?v=1598017338",
            "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg",
            "https://i.redd.it/mkt3rwpuisz21.jpg",
            "https://maxcdn.icons8.com/app/uploads/2019/05/film-poster-graphic-design.jpg",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "https://www.godisinthetvzine.co.uk/wp-content/uploads/2020/06/IMG_20200602_120716_501.jpg",
        ];
        //psuedo data is set in the movie object
        totalMovies.reccomended = this.cardImage;
        //returns total movie object 
        return totalMovies;
    }
    getMovieroute(route) {
        //get the route url to reoute to the right movie
        //should call api to get url then return something like https://www.netflix.com/search?q=... for something like netflix etc.
        return this.streamer[route];
    }
};
MovieServiceService.ctorParameters = () => [];
MovieServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieServiceService);



/***/ }),

/***/ "./src/app/services/user-login.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/user-login.service.ts ***!
  \************************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/userData.json */ "./src/app/models/userData.json");
var src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/models/userData.json */ "./src/app/models/userData.json", 1);



let UserLoginService = class UserLoginService {
    constructor() {
    }
    setJson() {
        if (JSON.parse(localStorage.getItem('userData')) == null) {
            this.addUserData();
        }
        else {
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData = JSON.parse(localStorage.getItem('userData'));
        }
    }
    addUserData() {
        localStorage.setItem('userData', JSON.stringify(src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData));
    }
    setHistory(id) {
        console.log(id);
        src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.history.push(id);
        this.addUserData();
    }
    setStreamers(stream, value) {
        if (stream == "netflix") {
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.netflix = value;
        }
        if (stream == "hulu") {
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.hulu = value;
        }
        if (stream == "prime") {
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.prime = value;
        }
        this.addUserData();
    }
    getHistory() {
        return src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.history;
    }
    setGenres(gName) {
        const currentIndex = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre.indexOf(gName);
        if (src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre[currentIndex] == null) {
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre.push(gName);
        }
        else {
            const tempArr = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre.splice(0, currentIndex);
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre.shift();
            src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre.concat(tempArr);
        }
        this.addUserData();
    }
    getStreamer(streamers) {
        streamers['netflix'] = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.netflix;
        streamers['hulu'] = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.hulu;
        streamers['prime'] = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.prime;
        return streamers;
    }
    checkIfLogged() {
    }
    getGenres(genres) {
        let totalG = src_app_models_userData_json__WEBPACK_IMPORTED_MODULE_2__.userData.genre;
        for (let i = 0; i < totalG.length; i++) {
            genres['isOn' + totalG[i]] = true;
        }
        return genres;
    }
};
UserLoginService.ctorParameters = () => [];
UserLoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserLoginService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map