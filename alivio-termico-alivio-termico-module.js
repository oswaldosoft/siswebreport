(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alivio-termico-alivio-termico-module"],{

/***/ "/V9J":
/*!***************************************************************!*\
  !*** ./src/app/pages/alivio-termico/alivio-termico.module.ts ***!
  \***************************************************************/
/*! exports provided: AlivioTermicoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlivioTermicoModule", function() { return AlivioTermicoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alivio_termico_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alivio-termico-routing.module */ "1NyY");
/* harmony import */ var _alivio_termico_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alivio-termico.component */ "tQ9Y");





class AlivioTermicoModule {
}
AlivioTermicoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlivioTermicoModule });
AlivioTermicoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlivioTermicoModule_Factory(t) { return new (t || AlivioTermicoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _alivio_termico_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlivioTermicoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlivioTermicoModule, { declarations: [_alivio_termico_component__WEBPACK_IMPORTED_MODULE_3__["AlivioTermicoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _alivio_termico_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlivioTermicoRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlivioTermicoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_alivio_termico_component__WEBPACK_IMPORTED_MODULE_3__["AlivioTermicoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _alivio_termico_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlivioTermicoRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "1NyY":
/*!***********************************************************************!*\
  !*** ./src/app/pages/alivio-termico/alivio-termico-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AlivioTermicoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlivioTermicoRoutingModule", function() { return AlivioTermicoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alivio_termico_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alivio-termico.component */ "tQ9Y");





const routes = [{ path: '', component: _alivio_termico_component__WEBPACK_IMPORTED_MODULE_2__["AlivioTermicoComponent"] }];
class AlivioTermicoRoutingModule {
}
AlivioTermicoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlivioTermicoRoutingModule });
AlivioTermicoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlivioTermicoRoutingModule_Factory(t) { return new (t || AlivioTermicoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlivioTermicoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlivioTermicoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "tQ9Y":
/*!******************************************************************!*\
  !*** ./src/app/pages/alivio-termico/alivio-termico.component.ts ***!
  \******************************************************************/
/*! exports provided: AlivioTermicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlivioTermicoComponent", function() { return AlivioTermicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AlivioTermicoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlivioTermicoComponent.ɵfac = function AlivioTermicoComponent_Factory(t) { return new (t || AlivioTermicoComponent)(); };
AlivioTermicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlivioTermicoComponent, selectors: [["app-alivio-termico"]], decls: 2, vars: 0, template: function AlivioTermicoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alivio-termico works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsaXZpby10ZXJtaWNvL2FsaXZpby10ZXJtaWNvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlivioTermicoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alivio-termico',
                templateUrl: './alivio-termico.component.html',
                styleUrls: ['./alivio-termico.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=alivio-termico-alivio-termico-module.js.map