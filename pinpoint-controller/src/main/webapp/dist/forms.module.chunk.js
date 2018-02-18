webpackJsonp(["forms.module"],{

/***/ "../../../../../src/app/pages/forms/form-inputs/form-inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Default Inputs</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"row full-name-inputs\">\r\n          <div class=\"col-sm-6 input-group\">\r\n            <input type=\"text\" placeholder=\"Nick\" class=\"form-control\"/>\r\n          </div>\r\n          <div class=\"col-sm-6 input-group\">\r\n            <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"input-group has-person-icon\">\r\n          <input type=\"text\" placeholder=\"With Icon\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"input-group input-group-rounded\">\r\n          <input type=\"text\" placeholder=\"Rounded border\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\r\n          <small class=\"form-text\">A block of help text that breaks into a new line and may extend beyond one line.\r\n          </small>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Disabled input\" class=\"form-control\" disabled/>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <textarea rows=\"5\" placeholder=\"Text Area\" class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"input-group input-group-sm\">\r\n          <input type=\"text\" placeholder=\"Small Input\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"input-group input-group-lg\">\r\n          <input type=\"text\" placeholder=\"Large Input\" class=\"form-control\"/>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Input Groups</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon success\">@</span>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\"/>\r\n        </div>\r\n        <div class=\"input-group mail-btn-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary btn-icon\">\r\n              <i class=\"ion-ios-email-outline\"></i>\r\n            </button>\r\n          </span>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\">\r\n              @example.com\r\n            </button>\r\n          </span>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-danger\">\r\n              Search\r\n            </button>\r\n          </span>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <div class=\"dropdown input-group-btn\" ngbDropdown>\r\n            <button type=\"button\" class=\"btn btn-success dropdown-toggle\" ngbDropdownToggle>\r\n              Action\r\n            </button>\r\n            <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n              <li class=\"dropdown-item\">Action</li>\r\n              <li class=\"dropdown-item\">Another action</li>\r\n              <li class=\"dropdown-item\">Something else here</li>\r\n              <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n              <li class=\"dropdown-item\">Separated link</li>\r\n            </ul>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\">\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Selects</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"form-group\">\r\n          <label>Simple Select</label>\r\n          <select class=\"form-control\">\r\n            <option>Minsk</option>\r\n            <option>Gomel</option>\r\n            <option>Brest</option>\r\n            <option>Grodno</option>\r\n            <option>Mogilev</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Multiple Select</label>\r\n          <select multiple class=\"form-control\">\r\n            <option>Item 1</option>\r\n            <option>Item 2</option>\r\n            <option>Item 3</option>\r\n            <option>Item 4</option>\r\n            <option>Item 5</option>\r\n          </select>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Input Styles</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"input-group input-group-border-only\">\r\n          <input type=\"text\" placeholder=\"Border Only\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Default Input\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group input-group-fill-only\">\r\n          <input type=\"text\" placeholder=\"Fill Only\" class=\"form-control\">\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Validation States</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Input with Success\" class=\"form-control form-control-success\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Input with Warning\" class=\"form-control form-control-warning\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Input with Danger\" class=\"form-control form-control-danger\">\r\n        </div>\r\n        <div class=\"form-group validation-checkboxes row\">\r\n          <nb-checkbox status=\"success\" class=\"col-sm-4\">Checkbox with Success</nb-checkbox>\r\n          <nb-checkbox status=\"warning\" class=\"col-sm-4\">Checkbox with Warning</nb-checkbox>\r\n          <nb-checkbox status=\"danger\" class=\"col-sm-4\">Checkbox with Danger</nb-checkbox>\r\n        </div>\r\n        <div class=\"form-group has-success\">\r\n          <input type=\"text\" placeholder=\"Input with Success Icon\" class=\"form-control form-control-success\">\r\n        </div>\r\n        <div class=\"form-group has-warning\">\r\n          <input type=\"text\" placeholder=\"Input with Warning Icon\" class=\"form-control form-control-warning\">\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <input type=\"text\" placeholder=\"Input with Danger Icon\" class=\"form-control form-control-danger\">\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Checkboxes & Radios</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"row demo-checkboxes-radio\">\r\n          <div class=\"demo-checkboxes col-sm-4\">\r\n            <nb-checkbox>Checkbox 1</nb-checkbox>\r\n            <nb-checkbox [value]=\"true\">Checkbox 2</nb-checkbox>\r\n            <label class=\"custom-control custom-checkbox\">\r\n              <input type=\"checkbox\" class=\"custom-control-input\">\r\n              <span class=\"custom-control-indicator\"></span>\r\n              <span class=\"custom-control-description\">Bootstrap Checkbox</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"demo-radio col-sm-4\">\r\n            <label class=\"custom-control custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\">\r\n              <span class=\"custom-control-indicator\"></span>\r\n              <span class=\"custom-control-description\">Radio 1</span>\r\n            </label>\r\n            <label class=\"custom-control custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" checked>\r\n              <span class=\"custom-control-indicator\"></span>\r\n              <span class=\"custom-control-description\">Radio 2</span>\r\n            </label>\r\n            <label class=\"custom-control custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\">\r\n              <span class=\"custom-control-indicator\"></span>\r\n              <span class=\"custom-control-description\">Radio 3</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"demo-disabled-checkbox-radio col-sm-4\">\r\n            <nb-checkbox disabled>Disabled Checkbox</nb-checkbox>\r\n            <label class=\"custom-control custom-radio\">\r\n              <input type=\"radio\" class=\"custom-control-input\" disabled>\r\n              <span class=\"custom-control-indicator\"></span>\r\n              <span class=\"custom-control-description\">Disabled Radio</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-body class=\"demo-rating\">\r\n        <span class=\"rating-header\">Rating</span>\r\n        <div>\r\n          <ngb-rating [(rate)]=\"starRate\" max=5>\r\n            <ng-template let-fill=\"fill\">\r\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\r\n                <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\r\n              </span>\r\n            </ng-template>\r\n          </ngb-rating>\r\n          <span class=\"current-rate\">{{ starRate }}</span>\r\n        </div>\r\n        <div>\r\n          <ngb-rating [(rate)]=\"heartRate\" max=5>\r\n            <ng-template let-fill=\"fill\">\r\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                <i class=\"ion-ios-heart\" *ngIf=\"fill === 100\"></i>\r\n                <i class=\"ion-ios-heart-outline\" *ngIf=\"fill !== 100\"></i>\r\n              </span>\r\n            </ng-template>\r\n          </ngb-rating>\r\n          <span class=\"current-rate\">{{ heartRate }}</span>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-inputs/form-inputs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-inputs/form-inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent() {
        this.starRate = 2;
        this.heartRate = 4;
    }
    FormInputsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-inputs',
            styles: [__webpack_require__("../../../../../src/app/pages/forms/form-inputs/form-inputs.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/forms/form-inputs/form-inputs.component.html"),
        })
    ], FormInputsComponent);
    return FormInputsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layouts/form-layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card class=\"inline-form-card\">\r\n      <nb-card-header>Inline form</nb-card-header>\r\n      <nb-card-body>\r\n        <form class=\"form-inline\">\r\n          <input type=\"text\" class=\"form-control full-width\" placeholder=\"Jane Doe\">\r\n          <div class=\"input-group full-width\">\r\n            <div class=\"input-group-addon\">@</div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n          </div>\r\n          <nb-checkbox>Remember me</nb-checkbox>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Using the Grid</nb-card-header>\r\n      <nb-card-body>\r\n        <form>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputEmail1\" class=\"col-sm-3 col-form-label\">Email</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail1\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword2\" class=\"col-sm-3 col-form-label\">Password</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3\">Radios</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" checked>\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">Option one is this and that&mdash;be sure to include why it's great</span>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">Option two can be something else and selecting it will deselect option one</span>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check disabled\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" disabled>\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">Option three is disabled</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-3 col-sm-9\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Form without labels</nb-card-header>\r\n      <nb-card-body>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Basic form</nb-card-header>\r\n      <nb-card-body>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email address</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <nb-checkbox>Check me out</nb-checkbox>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Block form</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputFirstName\">First Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputLastName\">Last Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputEmail\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputWebsite\">Website</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Horizontal form</nb-card-header>\r\n      <nb-card-body>\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-3 form-control-label\">Email</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-3 form-control-label\">Password</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-3 col-sm-9\">\r\n              <div class=\"checkbox\">\r\n                <nb-checkbox>Remember me</nb-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-3 col-sm-9\">\r\n              <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layouts/form-layouts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layouts/form-layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-layouts',
            styles: [__webpack_require__("../../../../../src/app/pages/forms/form-layouts/form-layouts.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/forms/form-layouts/form-layouts.component.html"),
        })
    ], FormLayoutsComponent);
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forms/forms-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_component__ = __webpack_require__("../../../../../src/app/pages/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-inputs/form-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-layouts/form-layouts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
        children: [{
                path: 'inputs',
                component: __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
            }, {
                path: 'layouts',
                component: __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
            }],
    }];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__ = __webpack_require__("../../../../../src/app/pages/forms/forms-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__["a" /* FormsRoutingModule */],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__["b" /* routedComponents */].slice(),
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

});
//# sourceMappingURL=forms.module.chunk.js.map