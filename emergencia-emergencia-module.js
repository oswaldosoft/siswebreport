(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-emergencia-module"],{

/***/ "CJU9":
/*!*******************************************************!*\
  !*** ./src/app/pages/emergencia/emergencia.module.ts ***!
  \*******************************************************/
/*! exports provided: EmergenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaModule", function() { return EmergenciaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _emergencia_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergencia-routing.module */ "ZoIO");
/* harmony import */ var _emergencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia.component */ "kzKN");





class EmergenciaModule {
}
EmergenciaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmergenciaModule });
EmergenciaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmergenciaModule_Factory(t) { return new (t || EmergenciaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _emergencia_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmergenciaRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmergenciaModule, { declarations: [_emergencia_component__WEBPACK_IMPORTED_MODULE_3__["EmergenciaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _emergencia_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmergenciaRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmergenciaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_emergencia_component__WEBPACK_IMPORTED_MODULE_3__["EmergenciaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _emergencia_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmergenciaRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZoIO":
/*!***************************************************************!*\
  !*** ./src/app/pages/emergencia/emergencia-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EmergenciaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaRoutingModule", function() { return EmergenciaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _emergencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergencia.component */ "kzKN");





const routes = [{ path: '', component: _emergencia_component__WEBPACK_IMPORTED_MODULE_2__["EmergenciaComponent"], data: { title: 'Emergencia' } }];
class EmergenciaRoutingModule {
}
EmergenciaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmergenciaRoutingModule });
EmergenciaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmergenciaRoutingModule_Factory(t) { return new (t || EmergenciaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmergenciaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmergenciaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kzKN":
/*!**********************************************************!*\
  !*** ./src/app/pages/emergencia/emergencia.component.ts ***!
  \**********************************************************/
/*! exports provided: EmergenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaComponent", function() { return EmergenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EmergenciaComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmergenciaComponent.ɵfac = function EmergenciaComponent_Factory(t) { return new (t || EmergenciaComponent)(); };
EmergenciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmergenciaComponent, selectors: [["app-emergencia"]], decls: 2, vars: 0, template: function EmergenciaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "emergencia works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEvZW1lcmdlbmNpYS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmergenciaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emergencia',
                templateUrl: './emergencia.component.html',
                styleUrls: ['./emergencia.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=emergencia-emergencia-module.js.map