(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispositivos-alivios-dispositivos-alivios-module"],{

/***/ "Q5nV":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dispositivos-alivios/dispositivos-alivios-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DispositivosAliviosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispositivosAliviosRoutingModule", function() { return DispositivosAliviosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dispositivos_alivios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispositivos-alivios.component */ "U+Wb");





const routes = [{ path: '', component: _dispositivos_alivios_component__WEBPACK_IMPORTED_MODULE_2__["DispositivosAliviosComponent"], data: { title: 'Datos técnicos' } }];
class DispositivosAliviosRoutingModule {
}
DispositivosAliviosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DispositivosAliviosRoutingModule });
DispositivosAliviosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DispositivosAliviosRoutingModule_Factory(t) { return new (t || DispositivosAliviosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DispositivosAliviosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DispositivosAliviosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TjM2":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dispositivos-alivios/dispositivos-alivios.module.ts ***!
  \***************************************************************************/
/*! exports provided: DispositivosAliviosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispositivosAliviosModule", function() { return DispositivosAliviosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dispositivos_alivios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispositivos-alivios-routing.module */ "Q5nV");
/* harmony import */ var _dispositivos_alivios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispositivos-alivios.component */ "U+Wb");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material/material.module */ "hctd");






class DispositivosAliviosModule {
}
DispositivosAliviosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DispositivosAliviosModule });
DispositivosAliviosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DispositivosAliviosModule_Factory(t) { return new (t || DispositivosAliviosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _dispositivos_alivios_routing_module__WEBPACK_IMPORTED_MODULE_2__["DispositivosAliviosRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DispositivosAliviosModule, { declarations: [_dispositivos_alivios_component__WEBPACK_IMPORTED_MODULE_3__["DispositivosAliviosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _dispositivos_alivios_routing_module__WEBPACK_IMPORTED_MODULE_2__["DispositivosAliviosRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DispositivosAliviosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dispositivos_alivios_component__WEBPACK_IMPORTED_MODULE_3__["DispositivosAliviosComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _dispositivos_alivios_routing_module__WEBPACK_IMPORTED_MODULE_2__["DispositivosAliviosRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "U+Wb":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dispositivos-alivios/dispositivos-alivios.component.ts ***!
  \******************************************************************************/
/*! exports provided: DispositivosAliviosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispositivosAliviosComponent", function() { return DispositivosAliviosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class DispositivosAliviosComponent {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    ngOnInit() {
    }
}
DispositivosAliviosComponent.ɵfac = function DispositivosAliviosComponent_Factory(t) { return new (t || DispositivosAliviosComponent)(); };
DispositivosAliviosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DispositivosAliviosComponent, selectors: [["app-dispositivos-alivios"]], decls: 107, vars: 0, consts: [[1, "datos-tenicos-container"], ["label", "I. INFORMACI\u00D3N GENERAL"], ["autocomplete", "off", 1, "create-account-form"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "tag_seguridad", "autocomplete", "off"], ["aria-hidden", "true", 1, "fa", "fa-search", "busqueda-icon"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "servicio_fluido", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "critic_operativa", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "tipo_seguridad", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "proteje_a", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "pos_retimbrado", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "fabricante", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "modelo", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "serial", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "presion_timbre", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "contrapresion", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "temp_operacion", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "presion_prueba_banco", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "capacidad_alivio", "autocomplete", "off"], [1, "section-1"], [1, "example-margin"], [1, "mat-form-field-1"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "conexion_entrada", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "bloqueo_entrada", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "conexion_salida", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "bloqueo_salida", "autocomplete", "off"], [1, "mat-form-field-3"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "descarga", "autocomplete", "off"], [1, "mat-form-field-2"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "fuelle", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "orificio", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "disco_ruptura", "autocomplete", "off"], [1, "botones"], ["mat-raised-button", "", "type", "submit", "color", "warn"], ["mat-stroked-button", "", "type", "reset"]], template: function DispositivosAliviosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TAG Seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Servicio (Fluido)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Criticidad operativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tipo seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Proteje a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pos. retimbrado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fabricante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Modelo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Serial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Presi\u00F3n de timbre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contrapresi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Temp. operaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Presi\u00F3n prueba banco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Capacidad aliv\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "S\u00EDmbolo ASME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "UV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Conexi\u00F3n entrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00BFBloqueo entrada?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Conexi\u00F3n salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00BFBloqueo salida?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Descarga a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u00BFFuelle?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Orificio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00BFSisco ruptura?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: row nowrap;\n  justify-content: center;\n  width: 95%;\n  border: 1px solid #aeaeae;\n  align-items: center;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  padding: 1rem 0.3rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  width: 10rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   .mat-tab-label-content[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 2.5rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #aeaeae;\n  \n  \n  \n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 2rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 2rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 500px;\n  max-width: 500px;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  width: 500px !important;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 50%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background: #eee;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  font-weight: 400;\n  width: 10rem;\n  text-transform: uppercase;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%], .datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:hover {\n  background-color: none !important;\n  color: #fff;\n  opacity: 0 !important;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  display: block;\n  color: #aeaeae;\n  height: 2rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 2rem;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  width: 95%;\n  \n}\n\nmat-tab-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 31%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .busqueda-icon[_ngcontent-%COMP%] {\n  float: right;\n  position: fixed;\n  margin-left: -20px;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .busqueda-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-1[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 23%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-2[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 14%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-3[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 50%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-4[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 47%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-5[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 35%;\n}\n\n.insp-val-convencional-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: row nowrap;\n  justify-content: space-around;\n  align-items: flex-start;\n  margin-bottom: 5rem;\n  border: 1px solid red;\n}\n\n.insp-val-convencional-container-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  border: 3px solid red;\n}\n\n.insp-val-convencional-container-tablero[_ngcontent-%COMP%] {\n  display: flex;\n  border: 3px solid blue;\n  width: 80%;\n  font-size: 6rem;\n}\n\n.insp-val-convencional-container-tablero[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  width: auto;\n  padding-left: 3rem;\n}\n\n  .create-account-form .mat-focused .mat-form-field-ripple {\n  \n  background-color: #e43a15 !important;\n}\n\n  .create-account-form .mat-focused .mat-form-field-label {\n  \n  color: #e43a15 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlzcG9zaXRpdm9zLWFsaXZpb3MvZGlzcG9zaXRpdm9zLWFsaXZpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFITjs7QUFNSTtFQUNFLHFCQUFBO0FBSk47O0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBc0JILHNCQUFBO0VBT0MsbUJBQUE7RUF5QkYsMEJBQUE7QUExREE7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBSFI7O0FBT0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBTE47O0FBU0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVBOOztBQVFNO0VBQ0UsdUJBQUE7QUFOUjs7QUFZRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBVko7O0FBYUU7RUFDRSxnQkFBQTtBQVhKOztBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFYSjs7QUFjRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBZUU7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQWJKOztBQXFCRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFuQko7O0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWxCUjs7QUEyQkE7RUFDSSxVQUFBO0VBRUE7OztPQUFBO0FBdEJKOztBQTJCSTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtBQXpCUjs7QUEwQlE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBeEJWOztBQXlCVTtFQUNFLGVBQUE7QUF2Qlo7O0FBNkJJO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0FBM0JSOztBQThCSTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtBQTVCUjs7QUErQkk7RUFDSSxvQkFBQTtFQUNBLFVBQUE7QUE3QlI7O0FBZ0NJO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0FBOUJOOztBQWlDSTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtBQS9CTjs7QUFxQ0U7RUE3SkEsYUFBQTtFQStKRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBaENKOztBQWtDSTtFQXJLRixhQUFBO0VBMktFLHFCQUFBO0FBbENKOztBQXNDSTtFQS9LRixhQUFBO0VBb0xHLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFyQ0w7O0FBdUNLO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0FBckNSOztBQStDSTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUE1Q047O0FBOENJO0VBQ0UscUNBQUE7RUFDQSx5QkFBQTtBQTVDTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3Bvc2l0aXZvcy1hbGl2aW9zL2Rpc3Bvc2l0aXZvcy1hbGl2aW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleGJveCB7XHJcbiAgZGlzcGxheTotd2Via2l0LWZsZXg7IFxyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyBcclxuICBkaXNwbGF5OmZsZXg7IFxyXG59XHJcbi5kYXRvcy10ZW5pY29zLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogcm93IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2FlYWVhZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5ib3RvbmVze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gLjNyZW07XHJcbiAgICBcclxuICAgIGJ1dHRvbntcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICB3aWR0aDogMTByZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10YWItbGFiZWwtY29udGVudHtcclxuICAgICAgY29sb3I6cmVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi0xIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6I2FlYWVhZTtcclxuICAgIC5tYXQtY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG1hdC1yYWRpby1idXR0b257XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAvKiB2YWx2dWxhcyBjb250YWluZXIqL1xyXG5cclxuICAudGFibGUgeyBcclxuICAgIHdpZHRoOiA1MCU7IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gIH1cclxuICAvKiBaZWJyYSBzdHJpcGluZyAqL1xyXG4gIC50cjpudGgtb2YtdHlwZShvZGQpIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICB9XHJcbiAgLnRoIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDEwcmVtOyBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICB9XHJcbiAgLnRkLCAudGggeyBcclxuICAgIHBhZGRpbmc6IDZweDsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gIH1cclxuXHJcbiAgLnRyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuLyogZmluIHZhbHZ1bGFyIGNvbnRhaW5lciovXHJcblxyXG59XHJcblxyXG4gIC5zZWN0aW9uLTIge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGNvbG9yOiNhZWFlYWU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICAubWF0LWNoZWNrYm94IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1hdC10YWItZ3JvdXB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIFxyXG4gICAgLyogLm1hdC10YWItbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgIGNvbG9yOnJlZCAhaW1wb3J0YW50O1xyXG4gICAgfSAgICovXHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcclxuICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgICAgIC5idXNxdWVkYS1pY29ue1xyXG4gICAgICAgICAgZmxvYXQ6cmlnaHQ7IFxyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0yMHB4O1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtZm9ybS1maWVsZC0xe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XHJcbiAgICAgICAgd2lkdGg6IDIzJTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWZvcm0tZmllbGQtMntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLTN7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZm9ybS1maWVsZC00e1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZm9ybS1maWVsZC01e1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcblxyXG4gIC5pbnNwLXZhbC1jb252ZW5jaW9uYWwtY29udGFpbmVye1xyXG4gICAgQGluY2x1ZGUgZmxleGJveDtcclxuICAgIGZsZXgtd3JhcDogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcblxyXG4gICAgJi1pbWFnZW57XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleGJveDtcclxuICAgIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAgICB3aWR0aDogNjAlO1xyXG4gICAgLy8gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIGJvcmRlcjozcHggc29saWQgcmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLXRhYmxlcm97XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleGJveDtcclxuICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgLy8gICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgLy8gICBmbG9hdDogbGVmdDtcclxuICAgICBib3JkZXI6M3B4IHNvbGlkIGJsdWU7XHJcbiAgICAgd2lkdGg6IDgwJTtcclxuICAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICAgXHJcbiAgICAgLnRke1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9IFxyXG5cclxuXHJcbiAgXHJcbjo6bmctZGVlcCAuY3JlYXRlLWFjY291bnQtZm9ybSB7XHJcbiAgICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzYTE1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cclxuICAgICAgY29sb3I6ICNlNDNhMTUgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DispositivosAliviosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dispositivos-alivios',
                templateUrl: './dispositivos-alivios.component.html',
                styleUrls: ['./dispositivos-alivios.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dispositivos-alivios-dispositivos-alivios-module.js.map