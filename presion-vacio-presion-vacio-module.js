(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presion-vacio-presion-vacio-module"],{

/***/ "I5Zu":
/*!****************************************************************!*\
  !*** ./src/app/pages/presion-vacio/presion-vacio.component.ts ***!
  \****************************************************************/
/*! exports provided: PresionVacioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresionVacioComponent", function() { return PresionVacioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PresionVacioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PresionVacioComponent.ɵfac = function PresionVacioComponent_Factory(t) { return new (t || PresionVacioComponent)(); };
PresionVacioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresionVacioComponent, selectors: [["app-presion-vacio"]], decls: 2, vars: 0, template: function PresionVacioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "presion-vacio works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNpb24tdmFjaW8vcHJlc2lvbi12YWNpby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresionVacioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presion-vacio',
                templateUrl: './presion-vacio.component.html',
                styleUrls: ['./presion-vacio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Pm6E":
/*!*********************************************************************!*\
  !*** ./src/app/pages/presion-vacio/presion-vacio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PresionVacioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresionVacioRoutingModule", function() { return PresionVacioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presion_vacio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presion-vacio.component */ "I5Zu");





const routes = [{ path: '', component: _presion_vacio_component__WEBPACK_IMPORTED_MODULE_2__["PresionVacioComponent"], data: { title: 'Presión vacío' } }];
class PresionVacioRoutingModule {
}
PresionVacioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PresionVacioRoutingModule });
PresionVacioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PresionVacioRoutingModule_Factory(t) { return new (t || PresionVacioRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PresionVacioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresionVacioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "X79J":
/*!*************************************************************!*\
  !*** ./src/app/pages/presion-vacio/presion-vacio.module.ts ***!
  \*************************************************************/
/*! exports provided: PresionVacioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresionVacioModule", function() { return PresionVacioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _presion_vacio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presion-vacio-routing.module */ "Pm6E");
/* harmony import */ var _presion_vacio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presion-vacio.component */ "I5Zu");





class PresionVacioModule {
}
PresionVacioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PresionVacioModule });
PresionVacioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PresionVacioModule_Factory(t) { return new (t || PresionVacioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _presion_vacio_routing_module__WEBPACK_IMPORTED_MODULE_2__["PresionVacioRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PresionVacioModule, { declarations: [_presion_vacio_component__WEBPACK_IMPORTED_MODULE_3__["PresionVacioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _presion_vacio_routing_module__WEBPACK_IMPORTED_MODULE_2__["PresionVacioRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresionVacioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_presion_vacio_component__WEBPACK_IMPORTED_MODULE_3__["PresionVacioComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _presion_vacio_routing_module__WEBPACK_IMPORTED_MODULE_2__["PresionVacioRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=presion-vacio-presion-vacio-module.js.map