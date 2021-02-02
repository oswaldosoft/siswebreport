(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["piloto-operada-piloto-operada-module"],{

/***/ "AvTA":
/*!***********************************************************************!*\
  !*** ./src/app/pages/piloto-operada/piloto-operada-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PilotoOperadaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotoOperadaRoutingModule", function() { return PilotoOperadaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _piloto_operada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piloto-operada.component */ "YIk1");





const routes = [{ path: '', component: _piloto_operada_component__WEBPACK_IMPORTED_MODULE_2__["PilotoOperadaComponent"], data: { title: 'Piloto Operada' } }];
class PilotoOperadaRoutingModule {
}
PilotoOperadaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PilotoOperadaRoutingModule });
PilotoOperadaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PilotoOperadaRoutingModule_Factory(t) { return new (t || PilotoOperadaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PilotoOperadaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PilotoOperadaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IHtV":
/*!***************************************************************!*\
  !*** ./src/app/pages/piloto-operada/piloto-operada.module.ts ***!
  \***************************************************************/
/*! exports provided: PilotoOperadaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotoOperadaModule", function() { return PilotoOperadaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _piloto_operada_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piloto-operada-routing.module */ "AvTA");
/* harmony import */ var _piloto_operada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piloto-operada.component */ "YIk1");





class PilotoOperadaModule {
}
PilotoOperadaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PilotoOperadaModule });
PilotoOperadaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PilotoOperadaModule_Factory(t) { return new (t || PilotoOperadaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _piloto_operada_routing_module__WEBPACK_IMPORTED_MODULE_2__["PilotoOperadaRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PilotoOperadaModule, { declarations: [_piloto_operada_component__WEBPACK_IMPORTED_MODULE_3__["PilotoOperadaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _piloto_operada_routing_module__WEBPACK_IMPORTED_MODULE_2__["PilotoOperadaRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PilotoOperadaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_piloto_operada_component__WEBPACK_IMPORTED_MODULE_3__["PilotoOperadaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _piloto_operada_routing_module__WEBPACK_IMPORTED_MODULE_2__["PilotoOperadaRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YIk1":
/*!******************************************************************!*\
  !*** ./src/app/pages/piloto-operada/piloto-operada.component.ts ***!
  \******************************************************************/
/*! exports provided: PilotoOperadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotoOperadaComponent", function() { return PilotoOperadaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PilotoOperadaComponent {
    constructor() { }
    ngOnInit() {
    }
}
PilotoOperadaComponent.ɵfac = function PilotoOperadaComponent_Factory(t) { return new (t || PilotoOperadaComponent)(); };
PilotoOperadaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PilotoOperadaComponent, selectors: [["app-piloto-operada"]], decls: 2, vars: 0, template: function PilotoOperadaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "piloto-operada works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpbG90by1vcGVyYWRhL3BpbG90by1vcGVyYWRhLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PilotoOperadaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-piloto-operada',
                templateUrl: './piloto-operada.component.html',
                styleUrls: ['./piloto-operada.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=piloto-operada-piloto-operada-module.js.map