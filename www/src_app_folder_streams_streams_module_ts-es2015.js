(self["webpackChunkRocaWeb"] = self["webpackChunkRocaWeb"] || []).push([["src_app_folder_streams_streams_module_ts"],{

/***/ 98106:
/*!**********************************************************!*\
  !*** ./src/app/folder/streams/streams-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamsPageRoutingModule": function() { return /* binding */ StreamsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _streams_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streams.page */ 99512);




const routes = [
    {
        path: '',
        component: _streams_page__WEBPACK_IMPORTED_MODULE_0__.StreamsPage
    }
];
let StreamsPageRoutingModule = class StreamsPageRoutingModule {
};
StreamsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StreamsPageRoutingModule);



/***/ }),

/***/ 16638:
/*!**************************************************!*\
  !*** ./src/app/folder/streams/streams.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamsPageModule": function() { return /* binding */ StreamsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _streams_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streams-routing.module */ 98106);
/* harmony import */ var _streams_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streams.page */ 99512);







let StreamsPageModule = class StreamsPageModule {
};
StreamsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _streams_routing_module__WEBPACK_IMPORTED_MODULE_0__.StreamsPageRoutingModule
        ],
        declarations: [_streams_page__WEBPACK_IMPORTED_MODULE_1__.StreamsPage]
    })
], StreamsPageModule);



/***/ }),

/***/ 99512:
/*!************************************************!*\
  !*** ./src/app/folder/streams/streams.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamsPage": function() { return /* binding */ StreamsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_streams_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./streams.page.html */ 38529);
/* harmony import */ var _streams_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streams.page.scss */ 44418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let StreamsPage = class StreamsPage {
    constructor() { }
    ngOnInit() {
    }
};
StreamsPage.ctorParameters = () => [];
StreamsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-streams',
        template: _raw_loader_streams_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_streams_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StreamsPage);



/***/ }),

/***/ 44418:
/*!**************************************************!*\
  !*** ./src/app/folder/streams/streams.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJlYW1zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 38529:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/streams/streams.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>streams</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div >\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_streams_streams_module_ts-es2015.js.map