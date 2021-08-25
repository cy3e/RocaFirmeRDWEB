(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkRocaWeb"] = self["webpackChunkRocaWeb"] || []).push([["src_app_folder_contacts_contacts_module_ts"], {
    /***/
    14691: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsPageRoutingModule": function ContactsPageRoutingModule() {
          return (
            /* binding */
            _ContactsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts.page */
      51271);

      var routes = [{
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
      }];

      var _ContactsPageRoutingModule = function ContactsPageRoutingModule() {
        _classCallCheck(this, ContactsPageRoutingModule);
      };

      _ContactsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ContactsPageRoutingModule);
      /***/
    },

    /***/
    54893: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsPageModule": function ContactsPageModule() {
          return (
            /* binding */
            _ContactsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts-routing.module */
      14691);
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.page */
      51271);

      var _ContactsPageModule = function ContactsPageModule() {
        _classCallCheck(this, ContactsPageModule);
      };

      _ContactsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_1__.ContactsPage]
      })], _ContactsPageModule);
      /***/
    },

    /***/
    51271: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsPage": function ContactsPage() {
          return (
            /* binding */
            _ContactsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contacts.page.html */
      7477);
      /* harmony import */


      var _contacts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.page.scss */
      27418);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _ContactsPage = /*#__PURE__*/function () {
        function ContactsPage() {
          _classCallCheck(this, ContactsPage);
        }

        _createClass(ContactsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactsPage;
      }();

      _ContactsPage.ctorParameters = function () {
        return [];
      };

      _ContactsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contacts',
        template: _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contacts_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactsPage);
      /***/
    },

    /***/
    27418: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    7477: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>  \n  <ion-buttons slot=\"start\">\n    <ion-menu-button autoHide=\"false\"></ion-menu-button>\n  </ion-buttons>\n    <ion-title>contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_folder_contacts_contacts_module_ts-es5.js.map