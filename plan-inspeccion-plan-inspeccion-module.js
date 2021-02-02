(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-inspeccion-plan-inspeccion-module"],{

/***/ "0HrR":
/*!*************************************************************************!*\
  !*** ./src/app/pages/plan-inspeccion/plan-inspeccion-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PlanInspeccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanInspeccionRoutingModule", function() { return PlanInspeccionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plan_inspeccion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-inspeccion.component */ "5FGG");





const routes = [{ path: '', component: _plan_inspeccion_component__WEBPACK_IMPORTED_MODULE_2__["PlanInspeccionComponent"], data: { title: 'Plan de inspección' } }];
class PlanInspeccionRoutingModule {
}
PlanInspeccionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlanInspeccionRoutingModule });
PlanInspeccionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlanInspeccionRoutingModule_Factory(t) { return new (t || PlanInspeccionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlanInspeccionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanInspeccionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "3enu":
/*!*****************************************************************!*\
  !*** ./src/app/pages/plan-inspeccion/plan-inspeccion.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlanInspeccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanInspeccionModule", function() { return PlanInspeccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _plan_inspeccion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-inspeccion-routing.module */ "0HrR");
/* harmony import */ var _plan_inspeccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-inspeccion.component */ "5FGG");





class PlanInspeccionModule {
}
PlanInspeccionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlanInspeccionModule });
PlanInspeccionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlanInspeccionModule_Factory(t) { return new (t || PlanInspeccionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _plan_inspeccion_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanInspeccionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlanInspeccionModule, { declarations: [_plan_inspeccion_component__WEBPACK_IMPORTED_MODULE_3__["PlanInspeccionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _plan_inspeccion_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanInspeccionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanInspeccionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_plan_inspeccion_component__WEBPACK_IMPORTED_MODULE_3__["PlanInspeccionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _plan_inspeccion_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanInspeccionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5FGG":
/*!********************************************************************!*\
  !*** ./src/app/pages/plan-inspeccion/plan-inspeccion.component.ts ***!
  \********************************************************************/
/*! exports provided: PlanInspeccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanInspeccionComponent", function() { return PlanInspeccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlanInspeccionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlanInspeccionComponent.ɵfac = function PlanInspeccionComponent_Factory(t) { return new (t || PlanInspeccionComponent)(); };
PlanInspeccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanInspeccionComponent, selectors: [["app-plan-inspeccion"]], decls: 2, vars: 0, template: function PlanInspeccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "plan-inspeccion works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW4taW5zcGVjY2lvbi9wbGFuLWluc3BlY2Npb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanInspeccionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plan-inspeccion',
                templateUrl: './plan-inspeccion.component.html',
                styleUrls: ['./plan-inspeccion.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=plan-inspeccion-plan-inspeccion-module.js.map