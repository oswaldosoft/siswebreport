(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-clave-usuario-clave-module"],{

/***/ "8q/n":
/*!*********************************************************************!*\
  !*** ./src/app/pages/usuario-clave/usuario-clave-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UsuarioClaveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioClaveRoutingModule", function() { return UsuarioClaveRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuario_clave_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario-clave.component */ "LFCO");





const routes = [{ path: '', component: _usuario_clave_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioClaveComponent"], data: { title: 'Actualización de contraseña' } }];
class UsuarioClaveRoutingModule {
}
UsuarioClaveRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuarioClaveRoutingModule });
UsuarioClaveRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuarioClaveRoutingModule_Factory(t) { return new (t || UsuarioClaveRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioClaveRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioClaveRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LFCO":
/*!****************************************************************!*\
  !*** ./src/app/pages/usuario-clave/usuario-clave.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioClaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioClaveComponent", function() { return UsuarioClaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UsuarioClaveComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsuarioClaveComponent.ɵfac = function UsuarioClaveComponent_Factory(t) { return new (t || UsuarioClaveComponent)(); };
UsuarioClaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuarioClaveComponent, selectors: [["app-usuario-clave"]], decls: 2, vars: 0, template: function UsuarioClaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usuario-clave works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8tY2xhdmUvdXN1YXJpby1jbGF2ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioClaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuario-clave',
                templateUrl: './usuario-clave.component.html',
                styleUrls: ['./usuario-clave.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jEZM":
/*!*************************************************************!*\
  !*** ./src/app/pages/usuario-clave/usuario-clave.module.ts ***!
  \*************************************************************/
/*! exports provided: UsuarioClaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioClaveModule", function() { return UsuarioClaveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _usuario_clave_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario-clave-routing.module */ "8q/n");
/* harmony import */ var _usuario_clave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-clave.component */ "LFCO");





class UsuarioClaveModule {
}
UsuarioClaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuarioClaveModule });
UsuarioClaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuarioClaveModule_Factory(t) { return new (t || UsuarioClaveModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _usuario_clave_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioClaveRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioClaveModule, { declarations: [_usuario_clave_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioClaveComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _usuario_clave_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioClaveRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioClaveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_usuario_clave_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioClaveComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _usuario_clave_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioClaveRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=usuario-clave-usuario-clave-module.js.map