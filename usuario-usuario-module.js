(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-usuario-module"],{

/***/ "gB6g":
/*!****************************************************!*\
  !*** ./src/app/pages/usuario/usuario.component.ts ***!
  \****************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class UsuarioComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsuarioComponent.ɵfac = function UsuarioComponent_Factory(t) { return new (t || UsuarioComponent)(); };
UsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuarioComponent, selectors: [["app-usuario"]], decls: 35, vars: 0, consts: [[1, "datos-tenicos-container"], ["label", "I. INFORMACI\u00D3N USUARIO"], ["autocomplete", "off", 1, "create-account-form"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "nombre_usuario", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "apellido_usuario", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "estatus", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "rol_usuario", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "fech_reg_usuario", "autocomplete", "off"], ["matInput", "", "type", "text", "placeholder", "Indique informaci\u00F3n", "id", "fech_ult_acceso", "autocomplete", "off"], [1, "botones"], ["mat-raised-button", "", "type", "submit", "color", "warn"], ["mat-stroked-button", "", "type", "reset"]], template: function UsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombres usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Apellidos usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Estatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rol usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Fecha registro usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fecha \u00FAltimo acceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: row nowrap;\n  justify-content: center;\n  width: 95%;\n  border: 1px solid #aeaeae;\n  align-items: center;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  padding: 1rem 0.3rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  width: 10rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   .mat-tab-label-content[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 2.5rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #aeaeae;\n  \n  \n  \n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 2rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 2rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 500px;\n  max-width: 500px;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  width: 500px !important;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 50%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background: #eee;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  font-weight: 400;\n  width: 10rem;\n  text-transform: uppercase;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%], .datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:hover {\n  background-color: none !important;\n  color: #fff;\n  opacity: 0 !important;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  display: block;\n  color: #aeaeae;\n  height: 2rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.datos-tenicos-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-left: 2rem;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  width: 95%;\n  \n}\n\nmat-tab-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 31%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .busqueda-icon[_ngcontent-%COMP%] {\n  float: right;\n  position: fixed;\n  margin-left: -20px;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .busqueda-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-1[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 23%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-2[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 14%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-3[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 50%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-4[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 47%;\n}\n\nmat-tab-group[_ngcontent-%COMP%]   .mat-form-field-5[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n  width: 35%;\n}\n\n.insp-val-convencional-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: row nowrap;\n  justify-content: space-around;\n  align-items: flex-start;\n  margin-bottom: 5rem;\n  border: 1px solid red;\n}\n\n.insp-val-convencional-container-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  border: 3px solid red;\n}\n\n.insp-val-convencional-container-tablero[_ngcontent-%COMP%] {\n  display: flex;\n  border: 3px solid blue;\n  width: 80%;\n  font-size: 6rem;\n}\n\n.insp-val-convencional-container-tablero[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  width: auto;\n  padding-left: 3rem;\n}\n\n  .create-account-form .mat-focused .mat-form-field-ripple {\n  \n  background-color: #e43a15 !important;\n}\n\n  .create-account-form .mat-focused .mat-form-field-label {\n  \n  color: #e43a15 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUhOOztBQUtNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBSFI7O0FBTU07RUFDRSxxQkFBQTtBQUpSOztBQVFJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFOTjs7QUFTSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQXNCSCxzQkFBQTtFQU9DLG1CQUFBO0VBeUJGLDBCQUFBO0FBMURGOztBQUtNO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUhWOztBQU9NO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUxSOztBQVNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQUjs7QUFRUTtFQUNFLHVCQUFBO0FBTlY7O0FBWUk7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVZOOztBQWFJO0VBQ0UsZ0JBQUE7QUFYTjs7QUFhSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBWE47O0FBY0k7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVpOOztBQWVJO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFiTjs7QUFxQkk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbkJOOztBQW9CTTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQlY7O0FBMkJFO0VBQ0ksVUFBQTtFQUVBOzs7T0FBQTtBQXRCTjs7QUEyQk07RUFDSSxvQkFBQTtFQUNBLFVBQUE7QUF6QlY7O0FBMEJVO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXhCWjs7QUF5Qlk7RUFDRSxlQUFBO0FBdkJkOztBQTZCTTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtBQTNCVjs7QUE4Qk07RUFDSSxvQkFBQTtFQUNBLFVBQUE7QUE1QlY7O0FBK0JNO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0FBN0JWOztBQWdDTTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtBQTlCUjs7QUFpQ007RUFDRSxvQkFBQTtFQUNBLFVBQUE7QUEvQlI7O0FBcUNJO0VBN0pBLGFBQUE7RUErSkUscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWhDTjs7QUFrQ007RUFyS0YsYUFBQTtFQTJLRSxxQkFBQTtBQWxDTjs7QUFzQ007RUEvS0YsYUFBQTtFQW9MRyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBckNQOztBQXVDTztFQUNHLFdBQUE7RUFDQSxrQkFBQTtBQXJDVjs7QUErQ007RUFDRSx5Q0FBQTtFQUNBLG9DQUFBO0FBNUNSOztBQThDTTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7QUE1Q1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBAbWl4aW4gZmxleGJveCB7XHJcbiAgICBkaXNwbGF5Oi13ZWJraXQtZmxleDsgXHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgXHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gIH1cclxuICAuZGF0b3MtdGVuaWNvcy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYWVhZWFlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5ib3RvbmVze1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gLjNyZW07XHJcbiAgICAgIFxyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubWF0LXRhYi1sYWJlbC1jb250ZW50e1xyXG4gICAgICAgIGNvbG9yOnJlZCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1hdC1jYXJke1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDoxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VjdGlvbi0xIHtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiNhZWFlYWU7XHJcbiAgICAgIC5tYXQtY2hlY2tib3gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIG1hdC1yYWRpby1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICAgICAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAvKiB2YWx2dWxhcyBjb250YWluZXIqL1xyXG4gIFxyXG4gICAgLnRhYmxlIHsgXHJcbiAgICAgIHdpZHRoOiA1MCU7IFxyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxuICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIH1cclxuICAgIC8qIFplYnJhIHN0cmlwaW5nICovXHJcbiAgICAudHI6bnRoLW9mLXR5cGUob2RkKSB7IFxyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICAgIH1cclxuICAgIC50aCB7IFxyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgd2lkdGg6IDEwcmVtOyBcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAudGQsIC50aCB7IFxyXG4gICAgICBwYWRkaW5nOiA2cHg7IFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAudHI6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gIC8qIGZpbiB2YWx2dWxhciBjb250YWluZXIqL1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAgIC5zZWN0aW9uLTIge1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICBjb2xvcjojYWVhZWFlO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6LjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgICAubWF0LWNoZWNrYm94IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBtYXQtdGFiLWdyb3Vwe1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgXHJcbiAgICAgIC8qIC5tYXQtdGFiLWxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgY29sb3I6cmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIH0gICAqL1xyXG4gIFxyXG4gICAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XHJcbiAgICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgICAgICAgLmJ1c3F1ZWRhLWljb257XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0OyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTIwcHg7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC0xe1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcclxuICAgICAgICAgIHdpZHRoOiAyMyU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLTJ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubWF0LWZvcm0tZmllbGQtM3tcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC00e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XHJcbiAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubWF0LWZvcm0tZmllbGQtNXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgLmluc3AtdmFsLWNvbnZlbmNpb25hbC1jb250YWluZXJ7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXhib3g7XHJcbiAgICAgIGZsZXgtd3JhcDogcm93IG5vd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxuICBcclxuICAgICAgJi1pbWFnZW57XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4Ym94O1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyAgICB3aWR0aDogNjAlO1xyXG4gICAgICAvLyAgICBmbG9hdDogcmlnaHQ7XHJcbiAgXHJcbiAgICAgIGJvcmRlcjozcHggc29saWQgcmVkO1xyXG4gIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtdGFibGVyb3tcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhib3g7XHJcbiAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAvLyAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgIC8vICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICBib3JkZXI6M3B4IHNvbGlkIGJsdWU7XHJcbiAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICAgXHJcbiAgICAgICAudGR7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgICAgIH1cclxuICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfSBcclxuICBcclxuICBcclxuICAgIFxyXG4gIDo6bmctZGVlcCAuY3JlYXRlLWFjY291bnQtZm9ybSB7XHJcbiAgICAgIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgICAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzYTE1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cclxuICAgICAgICBjb2xvcjogI2U0M2ExNSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuario',
                templateUrl: './usuario.component.html',
                styleUrls: ['./usuario.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQIU":
/*!*********************************************************!*\
  !*** ./src/app/pages/usuario/usuario-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRoutingModule", function() { return UsuarioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.component */ "gB6g");





const routes = [{ path: '', component: _usuario_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioComponent"], data: { title: 'Usuario' } }];
class UsuarioRoutingModule {
}
UsuarioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuarioRoutingModule });
UsuarioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuarioRoutingModule_Factory(t) { return new (t || UsuarioRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w9v7":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario-routing.module */ "jQIU");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.component */ "gB6g");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material/material.module */ "hctd");






class UsuarioModule {
}
UsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuarioModule });
UsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuarioModule_Factory(t) { return new (t || UsuarioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioModule, { declarations: [_usuario_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_usuario_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=usuario-usuario-module.js.map