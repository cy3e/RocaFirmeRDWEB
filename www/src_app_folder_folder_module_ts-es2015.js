(self["webpackChunkRocaWeb"] = self["webpackChunkRocaWeb"] || []).push([["src_app_folder_folder_module_ts"],{

/***/ 12189:
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageRoutingModule": function() { return /* binding */ FolderPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.page */ 49886);




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_0__.FolderPage
    },
    {
        path: 'streams',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_streams_streams_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./streams/streams.module */ 16638)).then(m => m.StreamsPageModule)
    },
    {
        path: 'contacts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_contacts_contacts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 54893)).then(m => m.ContactsPageModule)
    },
    {
        path: 'abbout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_abbout_abbout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./abbout/abbout.module */ 11008)).then(m => m.AbboutPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 16477)).then(m => m.HomePageModule)
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ 35098:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageModule": function() { return /* binding */ FolderPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder-routing.module */ 12189);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page */ 49886);







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__.FolderPageRoutingModule
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_1__.FolderPage]
    })
], FolderPageModule);



/***/ }),

/***/ 49886:
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPage": function() { return /* binding */ FolderPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./folder.page.html */ 7154);
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page.scss */ 77065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);





let FolderPage = class FolderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
FolderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FolderPage);



/***/ }),

/***/ 77065:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  background-color: #181717;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: oblique, italic;\n  color: black;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#presentatio {\n  background-image: url(\"https://scontent.fhex4-2.fna.fbcdn.net/v/t1.6435-9/61539381_803001863417277_2820942461407330304_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=fVHctvniMd0AX9Cn9Sx&_nc_ht=scontent.fhex4-2.fna&oh=c50d4bea918f50b00a3e110216b8f0bd&oe=614A51DB\");\n  image-resolution: 200dpi;\n  background-color: #cccccc;\n  height: 350px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n#logo {\n  background-image: url(\"https://scontent.fhex4-2.fna.fbcdn.net/v/t1.6435-9/136749764_1255320631518729_481819701702031702_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DcSnkUTQ494AX8F2hEY&tn=UXepwBeC366aM1e-&_nc_ht=scontent.fhex4-2.fna&oh=750d5d00f8a6232afa51fe32105edddf&oe=614934EF\");\n  border-radius: 150px;\n}\n\n#title {\n  font-size: 45px;\n  line-height: 26px;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: oblique, italic;\n  color: black;\n}\n\n#subti {\n  font-size: 15px;\n  line-height: 26px;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: oblique, italic;\n  color: black;\n}\n\n#ubicacion {\n  align-self: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUVFLHlRQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsOFJBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWUsaXRhbGljO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI3ByZXNlbnRhdGlve1xyXG4gIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc2NvbnRlbnQuZmhleDQtMi5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzYxNTM5MzgxXzgwMzAwMTg2MzQxNzI3N18yODIwOTQyNDYxNDA3MzMwMzA0X24uanBnP19uY19jYXQ9MTEwJmNjYj0xLTUmX25jX3NpZD1lM2Y4NjQmX25jX29oYz1mVkhjdHZuaU1kMEFYOUNuOVN4Jl9uY19odD1zY29udGVudC5maGV4NC0yLmZuYSZvaD1jNTBkNGJlYTkxOGY1MGIwMGEzZTExMDIxNmI4ZjBiZCZvZT02MTRBNTFEQlwiKTtcclxuICBpbWFnZS1yZXNvbHV0aW9uOiAyMDBkcGk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG59ICBcclxuI2xvZ28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc2NvbnRlbnQuZmhleDQtMi5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzEzNjc0OTc2NF8xMjU1MzIwNjMxNTE4NzI5XzQ4MTgxOTcwMTcwMjAzMTcwMl9uLmpwZz9fbmNfY2F0PTExMSZjY2I9MS01Jl9uY19zaWQ9MDljYmZlJl9uY19vaGM9RGNTbmtVVFE0OTRBWDhGMmhFWSZ0bj1VWGVwd0JlQzM2NmFNMWUtJl9uY19odD1zY29udGVudC5maGV4NC0yLmZuYSZvaD03NTBkNWQwMGY4YTYyMzJhZmE1MWZlMzIxMDVlZGRkZiZvZT02MTQ5MzRFRlwiKTtcclxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlLGl0YWxpYztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuI3N1YnRpIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZSxpdGFsaWM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jdWJpY2FjaW9ue1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG59Il19 */");

/***/ }),

/***/ 7154:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">{{ folder }}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_folder_module_ts-es2015.js.map