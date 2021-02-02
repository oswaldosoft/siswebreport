(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["valvula-presion-vacio-muelle-valvula-presion-vacio-muelle-module"],{

/***/ "NEkB":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/valvula-presion-vacio-muelle/valvula-presion-vacio-muelle.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ValvulaPresionVacioMuelleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValvulaPresionVacioMuelleComponent", function() { return ValvulaPresionVacioMuelleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");







function ValvulaPresionVacioMuelleComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Items. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ValvulaPresionVacioMuelleComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.position, " ");
} }
function ValvulaPresionVacioMuelleComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ValvulaPresionVacioMuelleComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r7.descripcion, " ");
} }
function ValvulaPresionVacioMuelleComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
function ValvulaPresionVacioMuelleComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
const ELEMENT_DATA = [
    { position: 1, descripcion: 'Cuerpo' },
    { position: 2, descripcion: 'Asiento' },
    { position: 3, descripcion: 'Caperuza protección' },
    { position: 4, descripcion: 'Bonete' },
    { position: 5, descripcion: 'Caperuza de bonete' },
    { position: 6, descripcion: 'Tornillo de ajuste' },
    { position: 7, descripcion: 'Tuerca de bloqueo' },
    { position: 8, descripcion: 'Arandelas de muelle' },
    { position: 9, descripcion: 'Muelle' },
    { position: 10, descripcion: 'Tornillos de caperuza' },
    { position: 11, descripcion: 'Tapa de lado vacío' },
    { position: 12, descripcion: 'Tornillos de la tapa' },
    { position: 13, descripcion: 'Arandela del sellado' },
    { position: 14, descripcion: 'Junta' },
    { position: 15.1, descripcion: 'Paleta vacio' },
    { position: 15, descripcion: 'Paleta presión' },
    { position: 16, descripcion: 'Vástago de la paleta' },
    { position: 17, descripcion: 'Postes de guía de paleta' },
    { position: 18, descripcion: 'Disco espaciador presión' },
    { position: 18.1, descripcion: 'Disco espaciador vacio' },
    { position: 19, descripcion: 'Disco respaldo diafragma presión' },
    { position: 19.1, descripcion: 'Disco respaldo diafragma vacío' },
    { position: 20, descripcion: 'Diafragma presión' },
    { position: 20.1, descripcion: 'Diafragma vacio' },
    { position: 21, descripcion: 'Disco soporte diafragma presión' },
    { position: 21.1, descripcion: 'Disco soporte diafragma vacio' },
    { position: 22, descripcion: 'Pesas paleta presión' },
    { position: 23, descripcion: 'Presas paleta vacío' },
];
class ValvulaPresionVacioMuelleComponent {
    constructor() {
        this.displayedColumns = ['position', 'descripcion'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
ValvulaPresionVacioMuelleComponent.ɵfac = function ValvulaPresionVacioMuelleComponent_Factory(t) { return new (t || ValvulaPresionVacioMuelleComponent)(); };
ValvulaPresionVacioMuelleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValvulaPresionVacioMuelleComponent, selectors: [["app-valvula-presion-vacio-muelle"]], viewQuery: function ValvulaPresionVacioMuelleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "secciones"], [1, "valvulas-container"], [1, "seg-conv-container-img"], [1, "mat-elevation-z8"], ["src", "https://raw.githubusercontent.com/oswaldosoft/siswebreport/main/src/assets/img/presion-muelle-vacio.png"], [1, "seg-conv-container-tablero"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "tde", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "tde"], ["mat-header-row", ""], ["mat-row", ""]], template: function ValvulaPresionVacioMuelleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "V\u00E1lvulas Alivio Presi\u00F3n (con muelle) vac\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "imagen de referencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ValvulaPresionVacioMuelleComponent_th_13_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ValvulaPresionVacioMuelleComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ValvulaPresionVacioMuelleComponent_th_16_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ValvulaPresionVacioMuelleComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ValvulaPresionVacioMuelleComponent_tr_18_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ValvulaPresionVacioMuelleComponent_tr_19_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhbHZ1bGEtcHJlc2lvbi12YWNpby1tdWVsbGUvdmFsdnVsYS1wcmVzaW9uLXZhY2lvLW11ZWxsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValvulaPresionVacioMuelleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-valvula-presion-vacio-muelle',
                templateUrl: './valvula-presion-vacio-muelle.component.html',
                styleUrls: ['./valvula-presion-vacio-muelle.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "QQAH":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/valvula-presion-vacio-muelle/valvula-presion-vacio-muelle-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ValvulaPresionVacioMuelleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValvulaPresionVacioMuelleRoutingModule", function() { return ValvulaPresionVacioMuelleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _valvula_presion_vacio_muelle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valvula-presion-vacio-muelle.component */ "NEkB");





const routes = [{ path: '', component: _valvula_presion_vacio_muelle_component__WEBPACK_IMPORTED_MODULE_2__["ValvulaPresionVacioMuelleComponent"], data: { title: 'Válvula presión vacío (con muelle)' } }];
class ValvulaPresionVacioMuelleRoutingModule {
}
ValvulaPresionVacioMuelleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValvulaPresionVacioMuelleRoutingModule });
ValvulaPresionVacioMuelleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValvulaPresionVacioMuelleRoutingModule_Factory(t) { return new (t || ValvulaPresionVacioMuelleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValvulaPresionVacioMuelleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValvulaPresionVacioMuelleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ThK0":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/valvula-presion-vacio-muelle/valvula-presion-vacio-muelle.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ValvulaPresionVacioMuelleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValvulaPresionVacioMuelleModule", function() { return ValvulaPresionVacioMuelleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _valvula_presion_vacio_muelle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valvula-presion-vacio-muelle-routing.module */ "QQAH");
/* harmony import */ var _valvula_presion_vacio_muelle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valvula-presion-vacio-muelle.component */ "NEkB");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material/material.module */ "hctd");






class ValvulaPresionVacioMuelleModule {
}
ValvulaPresionVacioMuelleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValvulaPresionVacioMuelleModule });
ValvulaPresionVacioMuelleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValvulaPresionVacioMuelleModule_Factory(t) { return new (t || ValvulaPresionVacioMuelleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _valvula_presion_vacio_muelle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ValvulaPresionVacioMuelleRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValvulaPresionVacioMuelleModule, { declarations: [_valvula_presion_vacio_muelle_component__WEBPACK_IMPORTED_MODULE_3__["ValvulaPresionVacioMuelleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _valvula_presion_vacio_muelle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ValvulaPresionVacioMuelleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValvulaPresionVacioMuelleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_valvula_presion_vacio_muelle_component__WEBPACK_IMPORTED_MODULE_3__["ValvulaPresionVacioMuelleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _valvula_presion_vacio_muelle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ValvulaPresionVacioMuelleRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=valvula-presion-vacio-muelle-valvula-presion-vacio-muelle-module.js.map