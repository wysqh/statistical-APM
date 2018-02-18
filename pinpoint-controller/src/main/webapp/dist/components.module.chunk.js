webpackJsonp(["components.module"],{

/***/ "../../../../../src/app/pages/components/components-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component__ = __webpack_require__("../../../../../src/app/pages/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__ = __webpack_require__("../../../../../src/app/pages/components/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/pages/components/notifications/notifications.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_component__["a" /* ComponentsComponent */],
        children: [
            {
                path: 'tree',
                component: __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__["a" /* TreeComponent */],
            }, {
                path: 'notifications',
                component: __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */],
            },
        ],
    }];
var ComponentsRoutingModule = /** @class */ (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__components_component__["a" /* ComponentsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__["a" /* TreeComponent */],
    __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-components',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_routing_module__ = __webpack_require__("../../../../../src/app/pages/components/components-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_routing_module__["a" /* ComponentsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["c" /* ToasterModule */],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_4__components_routing_module__["b" /* routedComponents */].slice(),
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Toaster configuration\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\">Place to show toast:</label>\r\n          <div class=\"dropdown\" ngbDropdown>\r\n            <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\r\n              {{ position }}\r\n            </button>\r\n            <ul ngbDropdownMenu class=\"dropdown-menu\">\r\n              <li class=\"dropdown-item\" *ngFor=\"let p of positions\" (click)=\"position = p\">\r\n                {{ p }}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\">Animation type:</label>\r\n          <div class=\"dropdown\" ngbDropdown>\r\n            <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\r\n              {{ animationType }}\r\n            </button>\r\n            <ul ngbDropdownMenu class=\"dropdown-menu\">\r\n              <li class=\"dropdown-item\" *ngFor=\"let at of animations\" (click)=\"animationType = at\">\r\n                {{ at }}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\">Title:</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"title\" name=\"title\">\r\n        </div>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Content:</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"content\" name=\"content\">\r\n          </div>\r\n        </form>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\">Time to hide toast, ms. 0 to persistent toast:</label>\r\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"timeout\"name=\"timeout\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\">Limit number of toasts:</label>\r\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"toastsLimit\" name=\"limit\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\">Toast type:</label>\r\n          <div class=\"dropdown\" ngbDropdown>\r\n            <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\r\n              {{ type }}\r\n            </button>\r\n            <ul ngbDropdownMenu class=\"dropdown-menu\">\r\n              <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div><nb-checkbox [(ngModel)]=\"isNewestOnTop\">Newest on top</nb-checkbox></div>\r\n        <div><nb-checkbox [(ngModel)]=\"isHideOnClick\">Hide on click</nb-checkbox></div>\r\n        <div><nb-checkbox [(ngModel)]=\"isDuplicatesPrevented\">Prevent arising of duplicate toast</nb-checkbox></div>\r\n        <div><nb-checkbox [(ngModel)]=\"isCloseButton\">Close button</nb-checkbox></div>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n\r\n  <nb-card-footer>\r\n    <button class=\"btn btn-primary\" (click)=\"makeToast()\">Show toast</button>\r\n    <button class=\"btn btn-success\" (click)=\"openRandomToast()\">Random toast</button>\r\n    <button class=\"btn btn-danger\" (click)=\"clearToasts()\">Clear all toasts</button>\r\n  </nb-card-footer>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/components/notifications/notifications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  :host-context(.nb-theme-default) nb-card-footer {\n    padding-bottom: 0.25rem; }\n    :host-context(.nb-theme-default) nb-card-footer button {\n      margin: 0 1rem 1rem 0; }\n  :host-context(.nb-theme-default) toaster-container /deep/ #toast-container .toast-close-button {\n    right: 0; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .dropdown-toggle {\n      font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  :host-context(.nb-theme-cosmic) nb-card-footer {\n    padding-bottom: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-card-footer button {\n      margin: 0 1rem 1rem 0; }\n  :host-context(.nb-theme-cosmic) toaster-container /deep/ #toast-container .toast-close-button {\n    right: 0; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .dropdown-toggle {\n      font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_style_loader_angular2_toaster_toaster_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(toasterService) {
        this.toasterService = toasterService;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default';
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.types = ['default', 'info', 'success', 'warning', 'error'];
        this.animations = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
        this.positions = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
            'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];
        this.quotes = [
            { title: null, body: 'We rock at <i>Angular</i>' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
            { title: 'What about nice html?', body: '<b>Sure you <em>can!</em></b>' },
        ];
    }
    NotificationsComponent.prototype.makeToast = function () {
        this.showToast(this.type, this.title, this.content);
    };
    NotificationsComponent.prototype.openRandomToast = function () {
        var typeIndex = Math.floor(Math.random() * this.types.length);
        var quoteIndex = Math.floor(Math.random() * this.quotes.length);
        var type = this.types[typeIndex];
        var quote = this.quotes[quoteIndex];
        this.showToast(type, quote.title, quote.body);
    };
    NotificationsComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    NotificationsComponent.prototype.clearToasts = function () {
        this.toasterService.clear();
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-notifications',
            styles: [__webpack_require__("../../../../../src/app/pages/components/notifications/notifications.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/components/notifications/notifications.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["d" /* ToasterService */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/components/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Tree</nb-card-header>\r\n      <nb-card-body>\r\n        <tree [tree]=\"tree\"></tree>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/components/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.tree = {
            value: 'Programming languages by programming paradigm',
            children: [{
                    value: 'Object-oriented programming',
                    children: [{
                            value: 'Java',
                        }, {
                            value: 'C++',
                        }, {
                            value: 'C#',
                        }],
                }, {
                    value: 'Prototype-based programming',
                    children: [{
                            value: 'JavaScript',
                        }, {
                            value: 'CoffeeScript',
                        }, {
                            value: 'Lua',
                        }],
                }],
        };
    }
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tree',
            template: __webpack_require__("../../../../../src/app/pages/components/tree/tree.component.html"),
        })
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../angular2-toaster/angular2-toaster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* unused harmony reexport ToastComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* unused harmony reexport ToasterContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__ = __webpack_require__("../../../../angular2-toaster/src/toaster.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__["a"]; });






//# sourceMappingURL=angular2-toaster.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/bodyOutputType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toast.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");



var ToastComponent = (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__["a" /* BodyOutputType */];
        this.clickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    return ToastComponent;
}());

ToastComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[toastComp]',
                template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"toast.toasterConfig?.titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"toast.toasterConfig?.messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"toast.body\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>"
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToastComponent.propDecorators = {
    'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'componentBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['componentBody', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    'clickEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");

var ToasterConfig = (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__["a" /* BodyOutputType */].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());

//# sourceMappingURL=toaster-config.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");




var ToasterContainerComponent = (function () {
    function ToasterContainerComponent(toasterService, ref, ngZone) {
        this.ref = ref;
        this.ngZone = ngZone;
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.toasterconfig === null || typeof this.toasterconfig === 'undefined') {
            this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_2__toaster_config__["a" /* ToasterConfig */]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === 'function') {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log('The toast click handler is not a callable function.');
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (toast.timeoutId) {
                window.clearTimeout(toast.timeoutId);
                toast.timeoutId = null;
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!toast.timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeoutId === null) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        toast.toasterConfig = this.toasterconfig;
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId) {
            return;
        }
        ;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (toast.showCloseButton === null || typeof toast.showCloseButton === 'undefined') {
            if (typeof this.toasterconfig.showCloseButton === 'object') {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === 'boolean') {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === 'number')
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === 'object') {
            timeout = timeout[toast.type];
        }
        ;
        if (timeout > 0) {
            this.ngZone.runOutsideAngular(function () {
                toast.timeoutId = window.setTimeout(function () {
                    _this.ngZone.run(function () {
                        _this.ref.markForCheck();
                        _this.removeToast(toast);
                    });
                }, timeout);
            });
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0) {
            return;
        }
        ;
        this.toasts.splice(index, 1);
        if (toast.timeoutId) {
            window.clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        if (toast.onHideCallback) {
            toast.onHideCallback(toast);
        }
        this.toasterService._removeToastSubject.next({ toastId: toast.toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (toastContainerId === null || typeof toastContainerId === 'undefined') {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    return ToasterContainerComponent;
}());

ToasterContainerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'toaster-container',
                template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass]\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [@toastState]=\"toasterconfig.animation\"\n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\"\n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\"\n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        ",
                // TODO: use styleUrls once Angular 2 supports the use of relative paths
                // https://github.com/angular/angular/issues/2383
                // styleUrls: ['./toaster.css']
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('toastState', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('flyRight, flyLeft, slideDown, slideUp, fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translate(0,0)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => flyRight', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('flyRight => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => flyLeft', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('flyLeft => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => slideDown', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('slideDown => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => slideUp', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('slideUp => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('fade => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0,
                            }))
                        ])
                    ]),
                ]
            },] },
];
/** @nocollapse */
ToasterContainerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__toaster_service__["a" /* ToasterService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
ToasterContainerComponent.propDecorators = {
    'toasterconfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=toaster-container.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");





var ToasterModule = (function () {
    function ToasterModule() {
    }
    return ToasterModule;
}());

ToasterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */],
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]
                ]
            },] },
];
/** @nocollapse */
ToasterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toaster.module.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");




var ToasterService = (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._addToast = observer; }).share();
        this.clearToasts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._clearToasts = observer; }).share();
        this._removeToastSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.removeToast = this._removeToastSubject.share();
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        toast.toastId = Guid.newGuid();
        if (!this._addToast) {
            throw new Error('No Toaster Containers have been initialized to receive toasts.');
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    return ToasterService;
}());

ToasterService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToasterService.ctorParameters = function () { return []; };
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "../../../../exports-loader/index.js?module.exports.toString()!../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../angular2-toaster/toaster.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Toastr\r\n * Version 2.0.1\r\n * Copyright 2012 John Papa and Hans Fjallemark.  \r\n * All Rights Reserved.  \r\n * Use, reproduction, distribution, and modification of this code is subject to the terms and \r\n * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php\r\n *\r\n * Author: John Papa and Hans Fjallemark\r\n * Project: https://github.com/CodeSeven/toastr\r\n */\r\n .toaster-icon {\r\n    position: absolute;\r\n    left: 0.0em;\r\n    top: 0.0em;\r\n    font-weight: normal;\r\n    color: #ffffff;\r\n}\r\n.toast-title {\r\n  font-weight: bold;\r\n}\r\n.toast-message {\r\n  -ms-word-wrap: break-word;\r\n  word-wrap: break-word;\r\n}\r\n.toast-message a,\r\n.toast-message label {\r\n  color: #ffffff;\r\n}\r\n.toast-message a:hover {\r\n  color: #cccccc;\r\n  text-decoration: none;\r\n}\r\n.toast-close-button {\r\n  position: relative;\r\n  right: -0.3em;\r\n  top: -0.3em;\r\n  float: right;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  -webkit-text-shadow: 0 1px 0 #ffffff;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.8;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\r\n  filter: alpha(opacity=80);\r\n  z-index: 999;\r\n}\r\n.toast-close-button:hover,\r\n.toast-close-button:focus {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  opacity: 0.4;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\r\n  filter: alpha(opacity=40);\r\n}\r\n\r\n/*Additional properties for button version\r\n iOS requires the button element instead of an anchor tag.\r\n If you want the anchor version, it requires `href=\"#\"`.*/\r\nbutton.toast-close-button {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n.toast-content {\r\n  display: inline-block;\r\n  width: 95%;\r\n}\r\n.toast-top-full-width {\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n.toast-bottom-full-width {\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n.toast-top-left {\r\n  top: 12px;\r\n  left: 12px;\r\n}\r\n.toast-top-center {\r\n  top: 12px;\r\n}\r\n.toast-top-right {\r\n  top: 12px;\r\n  right: 12px;\r\n}\r\n.toast-bottom-right {\r\n  right: 12px;\r\n  bottom: 12px;\r\n}\r\n.toast-bottom-center {\r\n  bottom: 12px;\r\n}\r\n.toast-bottom-left {\r\n  bottom: 12px;\r\n  left: 12px;\r\n}\r\n.toast-center {\r\n  top: 45%;\r\n}\r\n#toast-container {\r\n  position: fixed;\r\n  z-index: 999999;\r\n  /*overrides*/\r\n  pointer-events: auto;\r\n}\r\n#toast-container.toast-center,\r\n#toast-container.toast-top-center,\r\n#toast-container.toast-bottom-center{\r\n  width: 100%;\r\n  pointer-events: none;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n#toast-container.toast-center > div,\r\n#toast-container.toast-top-center > div,\r\n#toast-container.toast-bottom-center > div{\r\n  margin: 6px auto;\r\n  pointer-events: auto;\r\n}\r\n#toast-container.toast-center > button,\r\n#toast-container.toast-top-center > button,\r\n#toast-container.toast-bottom-center > button{\r\n  pointer-events: auto;\r\n}\r\n#toast-container * {\r\n  box-sizing: border-box;\r\n}\r\n#toast-container > div {\r\n  margin: 0 0 6px;\r\n  padding: 15px 15px 15px 50px;\r\n  width: 300px;\r\n  border-radius: 3px 3px 3px 3px;\r\n  background-position: 15px center;\r\n  background-repeat: no-repeat;\r\n  box-shadow: 0 0 12px #999999;\r\n  color: #ffffff;\r\n  opacity: 0.8;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\r\n  filter: alpha(opacity=80);\r\n}\r\n#toast-container > :hover {\r\n  box-shadow: 0 0 12px #000000;\r\n  opacity: 1;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\r\n  filter: alpha(opacity=100);\r\n  cursor: pointer;\r\n}\r\n.icon-info {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important;\r\n}\r\n.icon-wait {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/gif;base64,R0lGODlhIAAgAIQAAAQCBISGhMzKzERCROTm5CQiJKyurHx+fPz+/ExOTOzu7Dw+PIyOjCwqLFRWVAwKDIyKjMzOzOzq7CQmJLy6vFRSVPTy9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAXACwAAAAAIAAgAAAF3eAljmRpnmh6VRSVqLDpIDTixOdUlFSNUDhSQUAT7ES9GnD0SFQAKWItMqr4bqKHVPDI+WiTkaOFFVlrFe83rDrT0qeIjwrT0iLdU0GOiBxhAA4VeSk6QYeIOAsQEAuJKgw+EI8nA18IA48JBAQvFxCXDI8SNAQikV+iiaQIpheWX5mJmxKeF6g0qpQmA4yOu8C7EwYWCgZswRcTFj4KyMAGlwYxDwcHhCXMXxYxBzQHKNo+3DDeCOAn0V/TddbYJA0K48gAEAFQicMWFsfwNA3JSgAIAAFfwIMIL4QAACH5BAkJABoALAAAAAAgACAAhAQCBIyKjERCRMzOzCQiJPTy9DQyNGRmZMTCxOTm5CwqLHx+fBQWFJyenNTW1Pz6/Dw6PGxubAwKDIyOjNTS1CQmJCwuLPz+/Dw+PHRydAAAAAAAAAAAAAAAAAAAAAAAAAXboCaOZGmeaKoxWcSosMkk15W8cZ7VdZaXkcEgQtrxfD9RhHchima1GwlCGUBSFCaFxMrgRtnLFhWujWHhs2nJc8KoVlWGQnEn7/i8XgOwWAB7JwoONQ4KgSQAZRcOgHgSCwsSIhZMNRZ5CzULIgaWF5h4mhecfIQ8jXmQkiODhYeIiRYGjrG2PxgBARi3IhNMAbcCnwI5BAQpAZ8TIwK6vCQVDwUVKL+WzAANTA210g/VJ8OWxQefByQE4dZMzBoInwh4zrtgn2p725YNthUFTNRuGYB3AYGBHCEAACH5BAkJAB0ALAAAAAAgACAAhAQCBISChFRWVMzKzCQiJOTm5GxqbCwuLJSWlPz6/NTW1AwODJSSlGRmZCwqLOzu7HR2dDQ2NAQGBISGhFxaXNTS1CQmJOzq7GxubDQyNKSmpPz+/Nza3AAAAAAAAAAAAAXfYCeOZGmeaKqurHBdAiuP17Zdc0lMAVHWt9yI8LA9fCPB4xEjARoNSWpis01kBpshFahurqzsZosiGpErScMAUO0maKF8Tq/bTQCIQgFp30cQXhB1BHEcXhx0FgkJFiOHVYlzi42AgoRxeRx8fn+en3UABwedKgsBAwMBCygOCjYKDisLFV4VrCUAtVUKpSZdXl8mB8EbByQWcQPFAyYZxccdB7sV0cvBzbmvvG0LBV4FrFTBYCWuNhyyHRTFFB20trh4BxmdYl4YIqepq0IRxRE+IfDCAFQHARo0NGERAgAh+QQJCQAgACwAAAAAIAAgAIUEAgSEgoRMTkzMyswcHhzk5uR0cnQUFhRcXlwsKiz09vQMCgyMiozU1tQkJiR8fnxkZmT8/vwEBgSEhoRcWlzU0tQkIiT08vR0dnQcGhxkYmQ0MjT8+vwMDgyMjozc2twAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG+UCQcEgsGo/IpHLJXDweC6Z0+IhEHlOjRGIMWLHZoUZx0RQlAajxkFFKFFYFl5m5KNpIySU+X2bIBEoQZBBZGQdMElFhjI2Oj5AgHQEDAw8dQxYeDBaNHRVWVhWYCXsRFwmMXqFWEyAerB6MA6xWA6+xs7URt6VWqIwTu64gDh4eDp6goaORQ5OVAZjO1EgEGhB4RwAYDQ0YAEwIcBEKFEgYrBhLBORxgUYfrB9LELuF8fNDAAaVBuEg7NXCVyRdqHVCGLBiIIQAB1Yc4BXh9uEbwAXuyi2iQI7DuSwHdiFqCEGDtizLRFUDsaGAlQIbVoJYIEDAIiZBAAAh+QQJCQAbACwAAAAAIAAgAIQEAgSMioxcWlz08vQcHhysqqwMDgx8enwsKiykoqRkZmT8+vzEwsQMCgyUlpQkJiS0srQEBgSMjoxcXlz09vQkIiSsrqwUEhQ0MjRsamz8/vwAAAAAAAAAAAAAAAAAAAAF7+AmjmRpnmiqruz2PG0sIssCj4CQJAIgj4/abRNJaI6agu9kCAQaphdJgEQKUIFjgGWsahJYLdf7RTWfLKr3+jsBClVlG5Xb9eb4fImgUBBKDVB4ExRHFGwbGRQLGXMEhUgUfw2QC4IyCmSNDQtHlm2ZXgoiGQsUjW0EnUgLfyKBeYSeiHojfH61uS0GBisVEgEVLRcWRxAXKAgDRwMILMVIECgSVRIrBmS9JtRI1iMVBweuGxerSNolyszOIhjLGs0jEFXSKA8SEkMbcEgWIxfzNBxrw6AKgxIGkM05UOWALhERHJhysOThBgAVWYQAACH5BAkJABkALAAAAAAgACAAhAQGBIyKjERCRMzOzCwuLGRiZPz6/OTm5AwODLSytFRSVNTW1Dw6PHx6fAwKDJSSlERGRNTS1DQyNGxqbPz+/BQSFLy6vFRWVNza3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAXqYCaO5FgFwxBUZeu61ULNFMa+eBvQdJD/owFvFhkBBAwHsBQZUooZyWF2YOQkBNJu6ANMaQeli0AxSEwymi0DcUJeEgPlbEJFAghRe/h+Eeg/Dl9UYks5DF9VhksOAgKFi5GSSwh5kzgVCXIJNxknD5aSCTwJIw8zD5MITpanFKmSCHI8NxUPoJejNKWXLZkznL0vCJ3CxsckDpA/ChYJFzkTBgYTSxc80C4OswbLLhY8Fi/bMwYAJVgl4DTiL9LUJADrFuci1zTZLwD1IwU8BSQuWLCQb1EDHg2QiSDALYvCDAISJLDy8FIIACH5BAkJAB4ALAAAAAAgACAAhAQGBISGhFRSVNTW1CQiJKyqrGRmZOzu7CwuLIyOjGxubPz6/BQSFGRiZOTi5CwqLLy6vDQ2NIyKjFRWVCQmJKyurGxqbPT29DQyNJSSlHRydPz+/BQWFOzq7AAAAAAAAAXhoCeOJElYClGubOs117YtjWuvxCLLi3qbhc6h4FPsdorfiNI5dige43GT9AAkHUcCwCpMNxVP7tgTJY4J1uF7EBl0M8Ooueuo2SOCIkVa11kVX2E2EmgsFH4yBz4uAAkdHVstBAUHQ4xKmZqbnJ2bAhAQAiURGJ4eE0cTIxgzpp0QRxCsrp6xO7MjpaepO6unKxOhv8DFxsfIJBwaChw2DAkZDEocDjIOzi0ZMhlKUjIaLtsb3T8aR+EtDBkJ0yQUBQVQI9XX2ZsDMgMlyxr3mzE2XEgmotCGAARFIHiQ0FMIACH5BAkJABgALAAAAAAgACAAhAQCBISGhDw+POTi5CwuLLS2tPTy9BQSFJyenGRiZDQ2NIyOjLy+vPz6/BweHIyKjFRSVOzq7DQyNLy6vBQWFHRydDw6PPz+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXXICaOZHkcZaquIjVd10SxtFrAcFGrVhBYIwoON9uNAsOA6DCEFTEKBEKxEjQvAtELNxkpGrAGNfW4Plpb2QgxRKjKzfPoVGLj3CnLNUv7hscpSDhKOxJSgDwPP0ZGAACMjAQFDQYFBJA0BAZDBpeYGBQVFUU3TV2YFAMwAzNgTQ2PkBVDFRiuQ7CYszi1pUOnkKmrM5qcnqiiTwQTDQ2Wn9DR0tPUfRKQEBEREDQSFw3XRhEwEd3f4TvjF+XWKgJ8JNnb0QkwCdUlCzAL+CQODAwc9BtIMAQAOw==\") !important;\r\n}\r\n.icon-error {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important;\r\n}\r\n.icon-success {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important;\r\n}\r\n.icon-warning {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important;\r\n}\r\n#toast-container.toast-top-full-width > div,\r\n#toast-container.toast-bottom-full-width > div {\r\n  width: 96%;\r\n  margin: auto;\r\n}\r\n.toast {\r\n  position:relative;\r\n  background-color: #030303;\r\n}\r\n.toast-success {\r\n  background-color: #51a351;\r\n}\r\n.toast-error {\r\n  background-color: #bd362f;\r\n}\r\n.toast-info {\r\n  background-color: #2f96b4;\r\n}\r\n.toast-wait {\r\n  background-color: #2f96b4;\r\n}\r\n.toast-warning {\r\n  background-color: #f89406;\r\n}\r\n/*Responsive Design*/\r\n@media all and (max-width: 240px) {\r\n  #toast-container > div {\r\n    padding: 8px 8px 8px 50px;\r\n    width: 11em;\r\n  }\r\n  #toast-container .toast-close-button {\r\n    right: -0.2em;\r\n    top: -0.2em;\r\n}\r\n  }\r\n@media all and (min-width: 241px) and (max-width: 480px) {\r\n  #toast-container  > div {\r\n    padding: 8px 8px 8px 50px;\r\n    width: 18em;\r\n  }\r\n  #toast-container .toast-close-button {\r\n    right: -0.2em;\r\n    top: -0.2em;\r\n}\r\n}\r\n@media all and (min-width: 481px) and (max-width: 768px) {\r\n  #toast-container > div {\r\n    padding: 15px 15px 15px 50px;\r\n    width: 25em;\r\n  }\r\n}\r\n\r\n /*\r\n  * AngularJS-Toaster\r\n  * Version 0.3\r\n */\r\n:not(.no-enter)#toast-container > div.ng-enter,\r\n:not(.no-leave)#toast-container > div.ng-leave\r\n{\r\n    transition: 1000ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\r\n} \r\n\r\n:not(.no-enter)#toast-container > div.ng-enter.ng-enter-active, \r\n:not(.no-leave)#toast-container > div.ng-leave {\r\n    opacity: 0.8;\r\n}\r\n\r\n:not(.no-leave)#toast-container > div.ng-leave.ng-leave-active,\r\n:not(.no-enter)#toast-container > div.ng-enter {\r\n    opacity: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../ng2-tree/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tree_types_1 = __webpack_require__("../../../../ng2-tree/src/tree.types.js");
exports.TreeModelSettings = tree_types_1.TreeModelSettings;
exports.FoldingType = tree_types_1.FoldingType;
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
exports.Tree = tree_1.Tree;
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
exports.NodeMenuItemAction = menu_events_1.NodeMenuItemAction;
var tree_events_1 = __webpack_require__("../../../../ng2-tree/src/tree.events.js");
exports.NodeEvent = tree_events_1.NodeEvent;
exports.NodeCreatedEvent = tree_events_1.NodeCreatedEvent;
exports.NodeRemovedEvent = tree_events_1.NodeRemovedEvent;
exports.NodeRenamedEvent = tree_events_1.NodeRenamedEvent;
exports.NodeMovedEvent = tree_events_1.NodeMovedEvent;
exports.NodeSelectedEvent = tree_events_1.NodeSelectedEvent;
exports.NodeExpandedEvent = tree_events_1.NodeExpandedEvent;
exports.NodeCollapsedEvent = tree_events_1.NodeCollapsedEvent;
exports.MenuItemSelectedEvent = tree_events_1.MenuItemSelectedEvent;
exports.NodeDestructiveEvent = tree_events_1.NodeDestructiveEvent;
var tree_component_1 = __webpack_require__("../../../../ng2-tree/src/tree.component.js");
exports.TreeComponent = tree_component_1.TreeComponent;
var tree_module_1 = __webpack_require__("../../../../ng2-tree/src/tree.module.js");
exports.TreeModule = tree_module_1.TreeModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/captured-node.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CapturedNode = (function () {
    function CapturedNode(anElement, aTree) {
        this.anElement = anElement;
        this.aTree = aTree;
    }
    CapturedNode.prototype.canBeDroppedAt = function (element) {
        return !this.sameAs(element) && !this.contains(element);
    };
    CapturedNode.prototype.contains = function (other) {
        return this.element.nativeElement.contains(other.nativeElement);
    };
    CapturedNode.prototype.sameAs = function (other) {
        return this.element === other;
    };
    Object.defineProperty(CapturedNode.prototype, "element", {
        get: function () {
            return this.anElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CapturedNode.prototype, "tree", {
        get: function () {
            return this.aTree;
        },
        enumerable: true,
        configurable: true
    });
    return CapturedNode;
}());
exports.CapturedNode = CapturedNode;
//# sourceMappingURL=captured-node.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/draggable.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeDraggableEvent = (function () {
    function NodeDraggableEvent(captured, target) {
        this.captured = captured;
        this.target = target;
    }
    return NodeDraggableEvent;
}());
exports.NodeDraggableEvent = NodeDraggableEvent;
//# sourceMappingURL=draggable.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/node-draggable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var node_draggable_service_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.service.js");
var captured_node_1 = __webpack_require__("../../../../ng2-tree/src/draggable/captured-node.js");
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
var NodeDraggableDirective = (function () {
    function NodeDraggableDirective(element, nodeDraggableService, renderer) {
        this.element = element;
        this.nodeDraggableService = nodeDraggableService;
        this.renderer = renderer;
        this.disposersForDragListeners = [];
        this.nodeNativeElement = element.nativeElement;
    }
    NodeDraggableDirective.prototype.ngOnInit = function () {
        if (!this.tree.isStatic()) {
            this.renderer.setAttribute(this.nodeNativeElement, 'draggable', 'true');
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragenter', this.handleDragEnter.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragover', this.handleDragOver.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragstart', this.handleDragStart.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragleave', this.handleDragLeave.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'drop', this.handleDrop.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragend', this.handleDragEnd.bind(this)));
        }
    };
    NodeDraggableDirective.prototype.ngOnDestroy = function () {
        /* tslint:disable:typedef */
        this.disposersForDragListeners.forEach(function (dispose) { return dispose(); });
        /* tslint:enable:typedef */
    };
    NodeDraggableDirective.prototype.handleDragStart = function (e) {
        e.stopPropagation();
        this.nodeDraggableService.captureNode(new captured_node_1.CapturedNode(this.nodeDraggable, this.tree));
        e.dataTransfer.setData('text', NodeDraggableDirective.DATA_TRANSFER_STUB_DATA);
        e.dataTransfer.effectAllowed = 'move';
    };
    NodeDraggableDirective.prototype.handleDragOver = function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    NodeDraggableDirective.prototype.handleDragEnter = function (e) {
        e.preventDefault();
        if (this.containsElementAt(e)) {
            this.addClass('over-drop-target');
        }
    };
    NodeDraggableDirective.prototype.handleDragLeave = function (e) {
        if (!this.containsElementAt(e)) {
            this.removeClass('over-drop-target');
        }
    };
    NodeDraggableDirective.prototype.handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.removeClass('over-drop-target');
        if (!this.isDropPossible(e)) {
            return false;
        }
        if (this.nodeDraggableService.getCapturedNode()) {
            return this.notifyThatNodeWasDropped();
        }
    };
    NodeDraggableDirective.prototype.isDropPossible = function (e) {
        var capturedNode = this.nodeDraggableService.getCapturedNode();
        return capturedNode
            && capturedNode.canBeDroppedAt(this.nodeDraggable)
            && this.containsElementAt(e);
    };
    NodeDraggableDirective.prototype.handleDragEnd = function (e) {
        this.removeClass('over-drop-target');
        this.nodeDraggableService.releaseCapturedNode();
    };
    NodeDraggableDirective.prototype.containsElementAt = function (e) {
        var _a = e.x, x = _a === void 0 ? e.clientX : _a, _b = e.y, y = _b === void 0 ? e.clientY : _b;
        return this.nodeNativeElement.contains(document.elementFromPoint(x, y));
    };
    NodeDraggableDirective.prototype.addClass = function (className) {
        var classList = this.nodeNativeElement.classList;
        classList.add(className);
    };
    NodeDraggableDirective.prototype.removeClass = function (className) {
        var classList = this.nodeNativeElement.classList;
        classList.remove(className);
    };
    NodeDraggableDirective.prototype.notifyThatNodeWasDropped = function () {
        this.nodeDraggableService.fireNodeDragged(this.nodeDraggableService.getCapturedNode(), this.nodeDraggable);
    };
    NodeDraggableDirective.DATA_TRANSFER_STUB_DATA = 'some browsers enable drag-n-drop only when dataTransfer has data';
    NodeDraggableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[nodeDraggable]'
                },] },
    ];
    /** @nocollapse */
    NodeDraggableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
        { type: node_draggable_service_1.NodeDraggableService, decorators: [{ type: core_1.Inject, args: [node_draggable_service_1.NodeDraggableService,] },] },
        { type: core_1.Renderer2, decorators: [{ type: core_1.Inject, args: [core_1.Renderer2,] },] },
    ]; };
    NodeDraggableDirective.propDecorators = {
        "nodeDraggable": [{ type: core_1.Input },],
        "tree": [{ type: core_1.Input },],
    };
    return NodeDraggableDirective;
}());
exports.NodeDraggableDirective = NodeDraggableDirective;
//# sourceMappingURL=node-draggable.directive.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/node-draggable.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var draggable_events_1 = __webpack_require__("../../../../ng2-tree/src/draggable/draggable.events.js");
var NodeDraggableService = (function () {
    function NodeDraggableService() {
        this.draggableNodeEvents$ = new Subject_1.Subject();
    }
    NodeDraggableService.prototype.fireNodeDragged = function (captured, target) {
        if (!captured.tree || captured.tree.isStatic()) {
            return;
        }
        this.draggableNodeEvents$.next(new draggable_events_1.NodeDraggableEvent(captured, target));
    };
    NodeDraggableService.prototype.captureNode = function (node) {
        this.capturedNode = node;
    };
    NodeDraggableService.prototype.getCapturedNode = function () {
        return this.capturedNode;
    };
    NodeDraggableService.prototype.releaseCapturedNode = function () {
        this.capturedNode = null;
    };
    NodeDraggableService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NodeDraggableService.ctorParameters = function () { return []; };
    return NodeDraggableService;
}());
exports.NodeDraggableService = NodeDraggableService;
//# sourceMappingURL=node-draggable.service.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/editable/editable.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeEditableEventAction;
(function (NodeEditableEventAction) {
    NodeEditableEventAction[NodeEditableEventAction["Cancel"] = 0] = "Cancel";
})(NodeEditableEventAction = exports.NodeEditableEventAction || (exports.NodeEditableEventAction = {}));
//# sourceMappingURL=editable.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/editable/node-editable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var editable_events_1 = __webpack_require__("../../../../ng2-tree/src/editable/editable.events.js");
var NodeEditableDirective = (function () {
    function NodeEditableDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        /* tslint:enable:no-input-rename */
        this.valueChanged = new core_1.EventEmitter(false);
    }
    NodeEditableDirective.prototype.ngOnInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        if (nativeElement) {
            nativeElement.focus();
        }
        this.renderer.setProperty(nativeElement, 'value', this.nodeValue);
    };
    NodeEditableDirective.prototype.applyNewValue = function (newNodeValue) {
        this.valueChanged.emit({ type: 'keyup', value: newNodeValue });
    };
    NodeEditableDirective.prototype.applyNewValueByLoosingFocus = function (newNodeValue) {
        this.valueChanged.emit({ type: 'blur', value: newNodeValue });
    };
    NodeEditableDirective.prototype.cancelEditing = function () {
        this.valueChanged.emit({
            type: 'keyup',
            value: this.nodeValue,
            action: editable_events_1.NodeEditableEventAction.Cancel
        });
    };
    NodeEditableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[nodeEditable]'
                },] },
    ];
    /** @nocollapse */
    NodeEditableDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, decorators: [{ type: core_1.Inject, args: [core_1.Renderer2,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    NodeEditableDirective.propDecorators = {
        "nodeValue": [{ type: core_1.Input, args: ['nodeEditable',] },],
        "valueChanged": [{ type: core_1.Output },],
        "applyNewValue": [{ type: core_1.HostListener, args: ['keyup.enter', ['$event.target.value'],] },],
        "applyNewValueByLoosingFocus": [{ type: core_1.HostListener, args: ['blur', ['$event.target.value'],] },],
        "cancelEditing": [{ type: core_1.HostListener, args: ['keyup.esc',] },],
    };
    return NodeEditableDirective;
}());
exports.NodeEditableDirective = NodeEditableDirective;
//# sourceMappingURL=node-editable.directive.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/menu/menu.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeMenuItemAction;
(function (NodeMenuItemAction) {
    NodeMenuItemAction[NodeMenuItemAction["NewFolder"] = 0] = "NewFolder";
    NodeMenuItemAction[NodeMenuItemAction["NewTag"] = 1] = "NewTag";
    NodeMenuItemAction[NodeMenuItemAction["Rename"] = 2] = "Rename";
    NodeMenuItemAction[NodeMenuItemAction["Remove"] = 3] = "Remove";
    NodeMenuItemAction[NodeMenuItemAction["Custom"] = 4] = "Custom";
})(NodeMenuItemAction = exports.NodeMenuItemAction || (exports.NodeMenuItemAction = {}));
var NodeMenuAction;
(function (NodeMenuAction) {
    NodeMenuAction[NodeMenuAction["Close"] = 0] = "Close";
})(NodeMenuAction = exports.NodeMenuAction || (exports.NodeMenuAction = {}));
//# sourceMappingURL=menu.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/menu/node-menu.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var node_menu_service_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.service.js");
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var event_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/event.utils.js");
var NodeMenuComponent = (function () {
    function NodeMenuComponent(renderer, nodeMenuService) {
        this.renderer = renderer;
        this.nodeMenuService = nodeMenuService;
        this.menuItemSelected = new core_1.EventEmitter();
        this.availableMenuItems = [
            {
                name: 'New tag',
                action: menu_events_1.NodeMenuItemAction.NewTag,
                cssClass: 'new-tag'
            },
            {
                name: 'New folder',
                action: menu_events_1.NodeMenuItemAction.NewFolder,
                cssClass: 'new-folder'
            },
            {
                name: 'Rename',
                action: menu_events_1.NodeMenuItemAction.Rename,
                cssClass: 'rename'
            },
            {
                name: 'Remove',
                action: menu_events_1.NodeMenuItemAction.Remove,
                cssClass: 'remove'
            }
        ];
        this.disposersForGlobalListeners = [];
    }
    NodeMenuComponent.prototype.ngOnInit = function () {
        this.availableMenuItems = this.menuItems || this.availableMenuItems;
        this.disposersForGlobalListeners.push(this.renderer.listen('document', 'keyup', this.closeMenu.bind(this)));
        this.disposersForGlobalListeners.push(this.renderer.listen('document', 'mousedown', this.closeMenu.bind(this)));
    };
    NodeMenuComponent.prototype.ngOnDestroy = function () {
        this.disposersForGlobalListeners.forEach(function (dispose) { return dispose(); });
    };
    NodeMenuComponent.prototype.onMenuItemSelected = function (e, selectedMenuItem) {
        if (event_utils_1.isLeftButtonClicked(e)) {
            this.menuItemSelected.emit({
                nodeMenuItemAction: selectedMenuItem.action,
                nodeMenuItemSelected: selectedMenuItem.name
            });
            this.nodeMenuService.fireMenuEvent(e.target, menu_events_1.NodeMenuAction.Close);
        }
    };
    NodeMenuComponent.prototype.closeMenu = function (e) {
        var mouseClicked = e instanceof MouseEvent;
        // Check if the click is fired on an element inside a menu
        var containingTarget = (this.menuContainer.nativeElement !== e.target && this.menuContainer.nativeElement.contains(e.target));
        if (mouseClicked && !containingTarget || event_utils_1.isEscapePressed(e)) {
            this.nodeMenuService.fireMenuEvent(e.target, menu_events_1.NodeMenuAction.Close);
        }
    };
    NodeMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'node-menu',
                    template: "\n    <div class=\"node-menu\">\n      <ul class=\"node-menu-content\" #menuContainer>\n        <li class=\"node-menu-item\" *ngFor=\"let menuItem of availableMenuItems\"\n          (click)=\"onMenuItemSelected($event, menuItem)\">\n          <div class=\"node-menu-item-icon {{menuItem.cssClass}}\"></div>\n          <span class=\"node-menu-item-value\">{{menuItem.name}}</span>\n        </li>\n      </ul>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NodeMenuComponent.ctorParameters = function () { return [
        { type: core_1.Renderer2, decorators: [{ type: core_1.Inject, args: [core_1.Renderer2,] },] },
        { type: node_menu_service_1.NodeMenuService, decorators: [{ type: core_1.Inject, args: [node_menu_service_1.NodeMenuService,] },] },
    ]; };
    NodeMenuComponent.propDecorators = {
        "menuItemSelected": [{ type: core_1.Output },],
        "menuItems": [{ type: core_1.Input },],
        "menuContainer": [{ type: core_1.ViewChild, args: ['menuContainer',] },],
    };
    return NodeMenuComponent;
}());
exports.NodeMenuComponent = NodeMenuComponent;
//# sourceMappingURL=node-menu.component.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/menu/node-menu.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var NodeMenuService = (function () {
    function NodeMenuService() {
        this.nodeMenuEvents$ = new Subject_1.Subject();
    }
    NodeMenuService.prototype.fireMenuEvent = function (sender, action) {
        var nodeMenuEvent = { sender: sender, action: action };
        this.nodeMenuEvents$.next(nodeMenuEvent);
    };
    NodeMenuService.prototype.hideMenuStream = function (treeElementRef) {
        return this.nodeMenuEvents$
            .filter(function (e) { return treeElementRef.nativeElement !== e.sender; })
            .filter(function (e) { return e.action === menu_events_1.NodeMenuAction.Close; });
    };
    NodeMenuService.prototype.hideMenuForAllNodesExcept = function (treeElementRef) {
        this.nodeMenuEvents$.next({
            sender: treeElementRef.nativeElement,
            action: menu_events_1.NodeMenuAction.Close
        });
    };
    NodeMenuService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NodeMenuService.ctorParameters = function () { return []; };
    return NodeMenuService;
}());
exports.NodeMenuService = NodeMenuService;
//# sourceMappingURL=node-menu.service.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/rxjs-imports.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
// This forces angular compiler to generate a "rxjs-imports.metadata.json"
// with a valid metadata instead of "[null]"
exports.noop = function () { };
//# sourceMappingURL=rxjs-imports.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree-controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var event_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/event.utils.js");
var TreeController = (function () {
    function TreeController(component) {
        this.component = component;
        this.tree = this.component.tree;
        this.treeService = this.component.treeService;
    }
    TreeController.prototype.select = function () {
        if (!this.isSelected()) {
            this.component.onNodeSelected({ button: event_utils_1.MouseButtons.Left });
        }
    };
    TreeController.prototype.isSelected = function () {
        return this.component.isSelected;
    };
    TreeController.prototype.expand = function () {
        if (this.isCollapsed()) {
            this.component.onSwitchFoldingType();
        }
    };
    TreeController.prototype.isExpanded = function () {
        return this.tree.isNodeExpanded();
    };
    TreeController.prototype.collapse = function () {
        if (this.isExpanded()) {
            this.component.onSwitchFoldingType();
        }
    };
    TreeController.prototype.isCollapsed = function () {
        return this.tree.isNodeCollapsed();
    };
    TreeController.prototype.toTreeModel = function () {
        return this.tree.toTreeModel();
    };
    TreeController.prototype.rename = function (newValue) {
        this.tree.markAsBeingRenamed();
        this.component.applyNewValue({ type: 'keyup', value: newValue });
    };
    TreeController.prototype.remove = function () {
        this.component.onMenuItemSelected({ nodeMenuItemAction: menu_events_1.NodeMenuItemAction.Remove });
    };
    TreeController.prototype.addChild = function (newNode) {
        if (this.tree.hasDeferredChildren() && !this.tree.childrenWereLoaded()) {
            return;
        }
        var newTree = this.tree.createNode(Array.isArray(newNode.children), newNode);
        this.treeService.fireNodeCreated(newTree);
    };
    TreeController.prototype.changeNodeId = function (id) {
        if (!id) {
            throw Error('You should supply an id!');
        }
        if (this.treeService.hasController(id)) {
            throw Error("Controller already exists for the given id: " + id);
        }
        this.treeService.deleteController(this.tree.id);
        this.tree.id = id;
        this.treeService.setController(this.tree.id, this);
    };
    TreeController.prototype.reloadChildren = function () {
        this.tree.reloadChildren();
    };
    TreeController.prototype.setChildren = function (children) {
        if (!this.tree.isLeaf()) {
            this.tree.setChildren(children);
        }
    };
    TreeController.prototype.startRenaming = function () {
        this.tree.markAsBeingRenamed();
    };
    return TreeController;
}());
exports.TreeController = TreeController;
//# sourceMappingURL=tree-controller.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree-internal.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TreeTypes = __webpack_require__("../../../../ng2-tree/src/tree.types.js");
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
var tree_controller_1 = __webpack_require__("../../../../ng2-tree/src/tree-controller.js");
var node_menu_service_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.service.js");
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var editable_events_1 = __webpack_require__("../../../../ng2-tree/src/editable/editable.events.js");
var tree_service_1 = __webpack_require__("../../../../ng2-tree/src/tree.service.js");
var EventUtils = __webpack_require__("../../../../ng2-tree/src/utils/event.utils.js");
var fn_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/fn.utils.js");
var TreeInternalComponent = (function () {
    function TreeInternalComponent(nodeMenuService, treeService, element) {
        this.nodeMenuService = nodeMenuService;
        this.treeService = treeService;
        this.element = element;
        this.isSelected = false;
        this.isRightMenuVisible = false;
        this.isLeftMenuVisible = false;
        this.subscriptions = [];
    }
    TreeInternalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controller = new tree_controller_1.TreeController(this);
        if (fn_utils_1.get(this.tree, 'node.id', '')) {
            this.treeService.setController(this.tree.node.id, this.controller);
        }
        this.settings = this.settings || { rootIsVisible: true };
        this.subscriptions.push(this.nodeMenuService.hideMenuStream(this.element)
            .subscribe(function () {
            _this.isRightMenuVisible = false;
            _this.isLeftMenuVisible = false;
        }));
        this.subscriptions.push(this.treeService.unselectStream(this.tree)
            .subscribe(function () { return _this.isSelected = false; }));
        this.subscriptions.push(this.treeService.draggedStream(this.tree, this.element)
            .subscribe(function (e) {
            if (_this.tree.hasSibling(e.captured.tree)) {
                _this.swapWithSibling(e.captured.tree, _this.tree);
            }
            else if (_this.tree.isBranch()) {
                _this.moveNodeToThisTreeAndRemoveFromPreviousOne(e, _this.tree);
            }
            else {
                _this.moveNodeToParentTreeAndRemoveFromPreviousOne(e, _this.tree);
            }
        }));
    };
    TreeInternalComponent.prototype.ngOnChanges = function (changes) {
        this.controller = new tree_controller_1.TreeController(this);
    };
    TreeInternalComponent.prototype.ngOnDestroy = function () {
        if (fn_utils_1.get(this.tree, 'node.id', '')) {
            this.treeService.deleteController(this.tree.node.id);
        }
        this.subscriptions.forEach(function (sub) { return sub && sub.unsubscribe(); });
    };
    TreeInternalComponent.prototype.swapWithSibling = function (sibling, tree) {
        tree.swapWithSibling(sibling);
        this.treeService.fireNodeMoved(sibling, sibling.parent);
    };
    TreeInternalComponent.prototype.moveNodeToThisTreeAndRemoveFromPreviousOne = function (e, tree) {
        this.treeService.fireNodeRemoved(e.captured.tree);
        var addedChild = tree.addChild(e.captured.tree);
        this.treeService.fireNodeMoved(addedChild, e.captured.tree.parent);
    };
    TreeInternalComponent.prototype.moveNodeToParentTreeAndRemoveFromPreviousOne = function (e, tree) {
        this.treeService.fireNodeRemoved(e.captured.tree);
        var addedSibling = tree.addSibling(e.captured.tree, tree.positionInParent);
        this.treeService.fireNodeMoved(addedSibling, e.captured.tree.parent);
    };
    TreeInternalComponent.prototype.onNodeSelected = function (e) {
        if (EventUtils.isLeftButtonClicked(e)) {
            this.isSelected = true;
            this.treeService.fireNodeSelected(this.tree);
        }
    };
    TreeInternalComponent.prototype.showRightMenu = function (e) {
        if (!this.tree.hasRightMenu()) {
            return;
        }
        if (EventUtils.isRightButtonClicked(e)) {
            this.isRightMenuVisible = !this.isRightMenuVisible;
            this.nodeMenuService.hideMenuForAllNodesExcept(this.element);
        }
        e.preventDefault();
    };
    TreeInternalComponent.prototype.showLeftMenu = function (e) {
        if (!this.tree.hasLeftMenu()) {
            return;
        }
        if (EventUtils.isLeftButtonClicked(e)) {
            this.isLeftMenuVisible = !this.isLeftMenuVisible;
            this.nodeMenuService.hideMenuForAllNodesExcept(this.element);
            if (this.isLeftMenuVisible) {
                e.preventDefault();
            }
        }
    };
    TreeInternalComponent.prototype.onMenuItemSelected = function (e) {
        switch (e.nodeMenuItemAction) {
            case menu_events_1.NodeMenuItemAction.NewTag:
                this.onNewSelected(e);
                break;
            case menu_events_1.NodeMenuItemAction.NewFolder:
                this.onNewSelected(e);
                break;
            case menu_events_1.NodeMenuItemAction.Rename:
                this.onRenameSelected();
                break;
            case menu_events_1.NodeMenuItemAction.Remove:
                this.onRemoveSelected();
                break;
            case menu_events_1.NodeMenuItemAction.Custom:
                this.treeService.fireMenuItemSelected(this.tree, e.nodeMenuItemSelected);
                break;
            default:
                throw new Error("Chosen menu item doesn't exist");
        }
    };
    TreeInternalComponent.prototype.onNewSelected = function (e) {
        this.tree.createNode(e.nodeMenuItemAction === menu_events_1.NodeMenuItemAction.NewFolder);
        this.isRightMenuVisible = false;
        this.isLeftMenuVisible = false;
    };
    TreeInternalComponent.prototype.onRenameSelected = function () {
        this.tree.markAsBeingRenamed();
        this.isRightMenuVisible = false;
        this.isLeftMenuVisible = false;
    };
    TreeInternalComponent.prototype.onRemoveSelected = function () {
        this.treeService.deleteController(fn_utils_1.get(this.tree, 'node.id', ''));
        this.treeService.fireNodeRemoved(this.tree);
    };
    TreeInternalComponent.prototype.onSwitchFoldingType = function () {
        this.tree.switchFoldingType();
        this.treeService.fireNodeSwitchFoldingType(this.tree);
    };
    TreeInternalComponent.prototype.applyNewValue = function (e) {
        if ((e.action === editable_events_1.NodeEditableEventAction.Cancel || this.tree.isNew()) && tree_1.Tree.isValueEmpty(e.value)) {
            return this.treeService.fireNodeRemoved(this.tree);
        }
        if (this.tree.isNew()) {
            this.tree.value = e.value;
            this.treeService.fireNodeCreated(this.tree);
        }
        if (this.tree.isBeingRenamed()) {
            var oldValue = this.tree.value;
            this.tree.value = e.value;
            this.treeService.fireNodeRenamed(oldValue, this.tree);
        }
        this.tree.markAsModified();
    };
    TreeInternalComponent.prototype.shouldShowInputForTreeValue = function () {
        return this.tree.isNew() || this.tree.isBeingRenamed();
    };
    TreeInternalComponent.prototype.isRootHidden = function () {
        return this.tree.isRoot() && !this.settings.rootIsVisible;
    };
    TreeInternalComponent.prototype.hasCustomMenu = function () {
        return this.tree.hasCustomMenu();
    };
    TreeInternalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tree-internal',
                    template: "\n  <ul class=\"tree\" *ngIf=\"tree\" [ngClass]=\"{rootless: isRootHidden()}\">\n    <li>\n      <div class=\"value-container\"\n        [ngClass]=\"{rootless: isRootHidden()}\"\n        [class.selected]=\"isSelected\"\n        (contextmenu)=\"showRightMenu($event)\"\n        [nodeDraggable]=\"element\"\n        [tree]=\"tree\">\n\n        <div class=\"folding\" (click)=\"onSwitchFoldingType()\" [ngClass]=\"tree.foldingCssClass\"></div>\n        <div class=\"node-value\"\n          *ngIf=\"!shouldShowInputForTreeValue()\"\n          [class.node-selected]=\"isSelected\"\n          (click)=\"onNodeSelected($event)\">\n            <div *ngIf=\"tree.nodeTemplate\" class=\"node-template\" [innerHTML]=\"tree.nodeTemplate | safeHtml\"></div>\n            <span *ngIf=\"!template\" class=\"node-name\" [innerHTML]=\"tree.value | safeHtml\"></span>\n            <span class=\"loading-children\" *ngIf=\"tree.childrenAreBeingLoaded()\"></span>\n            <ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ $implicit: tree.node }\"></ng-template>\n        </div>\n\n        <input type=\"text\" class=\"node-value\"\n           *ngIf=\"shouldShowInputForTreeValue()\"\n           [nodeEditable]=\"tree.value\"\n           (valueChanged)=\"applyNewValue($event)\"/>\n\n        <div class=\"node-left-menu\" *ngIf=\"tree.hasLeftMenu()\" (click)=\"showLeftMenu($event)\" [innerHTML]=\"tree.leftMenuTemplate\">\n        </div>\n        <node-menu *ngIf=\"tree.hasLeftMenu() && isLeftMenuVisible && !hasCustomMenu()\"\n          (menuItemSelected)=\"onMenuItemSelected($event)\">\n        </node-menu>\n      </div>\n\n      <node-menu *ngIf=\"isRightMenuVisible && !hasCustomMenu()\"\n           (menuItemSelected)=\"onMenuItemSelected($event)\">\n      </node-menu>\n\n      <node-menu *ngIf=\"hasCustomMenu() && (isRightMenuVisible || isLeftMenuVisible)\"\n           [menuItems]=\"tree.menuItems\"\n           (menuItemSelected)=\"onMenuItemSelected($event)\">\n      </node-menu>\n      <ng-template [ngIf]=\"tree.isNodeExpanded()\">\n        <tree-internal *ngFor=\"let child of tree.childrenAsync | async\" [tree]=\"child\" [template]=\"template\"></tree-internal>\n      </ng-template>\n    </li>\n  </ul>\n  "
                },] },
    ];
    /** @nocollapse */
    TreeInternalComponent.ctorParameters = function () { return [
        { type: node_menu_service_1.NodeMenuService, },
        { type: tree_service_1.TreeService, },
        { type: core_1.ElementRef, },
    ]; };
    TreeInternalComponent.propDecorators = {
        "tree": [{ type: core_1.Input },],
        "settings": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
    };
    return TreeInternalComponent;
}());
exports.TreeInternalComponent = TreeInternalComponent;
//# sourceMappingURL=tree-internal.component.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var tree_service_1 = __webpack_require__("../../../../ng2-tree/src/tree.service.js");
var TreeTypes = __webpack_require__("../../../../ng2-tree/src/tree.types.js");
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
var TreeComponent = (function () {
    function TreeComponent(treeService) {
        this.treeService = treeService;
        this.nodeCreated = new core_1.EventEmitter();
        this.nodeRemoved = new core_1.EventEmitter();
        this.nodeRenamed = new core_1.EventEmitter();
        this.nodeSelected = new core_1.EventEmitter();
        this.nodeMoved = new core_1.EventEmitter();
        this.nodeExpanded = new core_1.EventEmitter();
        this.nodeCollapsed = new core_1.EventEmitter();
        this.menuItemSelected = new core_1.EventEmitter();
        this.loadNextLevel = new core_1.EventEmitter();
        this.subscriptions = [];
    }
    TreeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.treeModel) {
            this.tree = TreeComponent.EMPTY_TREE;
        }
        else {
            this.tree = new tree_1.Tree(this.treeModel);
        }
    };
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.treeService.nodeRemoved$.subscribe(function (e) {
            _this.nodeRemoved.emit(e);
        }));
        this.subscriptions.push(this.treeService.nodeRenamed$.subscribe(function (e) {
            _this.nodeRenamed.emit(e);
        }));
        this.subscriptions.push(this.treeService.nodeCreated$.subscribe(function (e) {
            _this.nodeCreated.emit(e);
        }));
        this.subscriptions.push(this.treeService.nodeSelected$.subscribe(function (e) {
            _this.nodeSelected.emit(e);
        }));
        this.subscriptions.push(this.treeService.nodeMoved$.subscribe(function (e) {
            _this.nodeMoved.emit(e);
        }));
        this.subscriptions.push(this.treeService.nodeExpanded$.subscribe(function (e) {
            _this.nodeExpanded.emit(e);
        }));
        this.subscriptions.push(this.treeService.nodeCollapsed$.subscribe(function (e) {
            _this.nodeCollapsed.emit(e);
        }));
        this.subscriptions.push(this.treeService.menuItemSelected$.subscribe(function (e) {
            _this.menuItemSelected.emit(e);
        }));
        this.subscriptions.push(this.treeService.loadNextLevel$.subscribe(function (e) {
            _this.loadNextLevel.emit(e);
        }));
    };
    TreeComponent.prototype.getController = function () {
        return this.rootComponent.controller;
    };
    TreeComponent.prototype.getControllerByNodeId = function (id) {
        return this.treeService.getController(id);
    };
    TreeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub && sub.unsubscribe(); });
    };
    TreeComponent.EMPTY_TREE = new tree_1.Tree({ value: '' });
    TreeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tree',
                    template: "<tree-internal #rootComponent [tree]=\"tree\" [settings]=\"settings\" [template]=\"template\"></tree-internal>",
                    providers: [tree_service_1.TreeService]
                },] },
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: tree_service_1.TreeService, decorators: [{ type: core_1.Inject, args: [tree_service_1.TreeService,] },] },
    ]; };
    TreeComponent.propDecorators = {
        "treeModel": [{ type: core_1.Input, args: ['tree',] },],
        "settings": [{ type: core_1.Input },],
        "nodeCreated": [{ type: core_1.Output },],
        "nodeRemoved": [{ type: core_1.Output },],
        "nodeRenamed": [{ type: core_1.Output },],
        "nodeSelected": [{ type: core_1.Output },],
        "nodeMoved": [{ type: core_1.Output },],
        "nodeExpanded": [{ type: core_1.Output },],
        "nodeCollapsed": [{ type: core_1.Output },],
        "menuItemSelected": [{ type: core_1.Output },],
        "loadNextLevel": [{ type: core_1.Output },],
        "rootComponent": [{ type: core_1.ViewChild, args: ['rootComponent',] },],
        "template": [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] },],
    };
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NodeEvent = (function () {
    function NodeEvent(node) {
        this.node = node;
    }
    return NodeEvent;
}());
exports.NodeEvent = NodeEvent;
var NodeSelectedEvent = (function (_super) {
    __extends(NodeSelectedEvent, _super);
    function NodeSelectedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeSelectedEvent;
}(NodeEvent));
exports.NodeSelectedEvent = NodeSelectedEvent;
var NodeDestructiveEvent = (function (_super) {
    __extends(NodeDestructiveEvent, _super);
    function NodeDestructiveEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeDestructiveEvent;
}(NodeEvent));
exports.NodeDestructiveEvent = NodeDestructiveEvent;
var NodeMovedEvent = (function (_super) {
    __extends(NodeMovedEvent, _super);
    function NodeMovedEvent(node, previousParent) {
        var _this = _super.call(this, node) || this;
        _this.previousParent = previousParent;
        return _this;
    }
    return NodeMovedEvent;
}(NodeDestructiveEvent));
exports.NodeMovedEvent = NodeMovedEvent;
var NodeRemovedEvent = (function (_super) {
    __extends(NodeRemovedEvent, _super);
    function NodeRemovedEvent(node, lastIndex) {
        var _this = _super.call(this, node) || this;
        _this.lastIndex = lastIndex;
        return _this;
    }
    return NodeRemovedEvent;
}(NodeDestructiveEvent));
exports.NodeRemovedEvent = NodeRemovedEvent;
var NodeCreatedEvent = (function (_super) {
    __extends(NodeCreatedEvent, _super);
    function NodeCreatedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeCreatedEvent;
}(NodeDestructiveEvent));
exports.NodeCreatedEvent = NodeCreatedEvent;
var NodeRenamedEvent = (function (_super) {
    __extends(NodeRenamedEvent, _super);
    function NodeRenamedEvent(node, oldValue, newValue) {
        var _this = _super.call(this, node) || this;
        _this.oldValue = oldValue;
        _this.newValue = newValue;
        return _this;
    }
    return NodeRenamedEvent;
}(NodeDestructiveEvent));
exports.NodeRenamedEvent = NodeRenamedEvent;
var NodeExpandedEvent = (function (_super) {
    __extends(NodeExpandedEvent, _super);
    function NodeExpandedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeExpandedEvent;
}(NodeEvent));
exports.NodeExpandedEvent = NodeExpandedEvent;
var NodeCollapsedEvent = (function (_super) {
    __extends(NodeCollapsedEvent, _super);
    function NodeCollapsedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeCollapsedEvent;
}(NodeEvent));
exports.NodeCollapsedEvent = NodeCollapsedEvent;
var MenuItemSelectedEvent = (function (_super) {
    __extends(MenuItemSelectedEvent, _super);
    function MenuItemSelectedEvent(node, selectedItem) {
        var _this = _super.call(this, node) || this;
        _this.selectedItem = selectedItem;
        return _this;
    }
    return MenuItemSelectedEvent;
}(NodeEvent));
exports.MenuItemSelectedEvent = MenuItemSelectedEvent;
var LoadNextLevelEvent = (function (_super) {
    __extends(LoadNextLevelEvent, _super);
    function LoadNextLevelEvent(node) {
        return _super.call(this, node) || this;
    }
    return LoadNextLevelEvent;
}(NodeEvent));
exports.LoadNextLevelEvent = LoadNextLevelEvent;
//# sourceMappingURL=tree.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fn_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/fn.utils.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var tree_types_1 = __webpack_require__("../../../../ng2-tree/src/tree.types.js");
var uuidv4 = __webpack_require__("../../../../uuid/v4.js");
var ChildrenLoadingState;
(function (ChildrenLoadingState) {
    ChildrenLoadingState[ChildrenLoadingState["NotStarted"] = 0] = "NotStarted";
    ChildrenLoadingState[ChildrenLoadingState["Loading"] = 1] = "Loading";
    ChildrenLoadingState[ChildrenLoadingState["Completed"] = 2] = "Completed";
})(ChildrenLoadingState || (ChildrenLoadingState = {}));
var Tree = (function () {
    /**
     * Build an instance of Tree from an object implementing TreeModel interface.
     * @param {TreeModel} model - A model that is used to build a tree.
     * @param {Tree} [parent] - An optional parent if you want to build a tree from the model that should be a child of an existing Tree instance.
     * @param {boolean} [isBranch] - An option that makes a branch from created tree. Branch can have children.
     */
    function Tree(node, parent, isBranch) {
        if (parent === void 0) { parent = null; }
        if (isBranch === void 0) { isBranch = false; }
        var _this = this;
        this._childrenLoadingState = ChildrenLoadingState.NotStarted;
        this._childrenAsyncOnce = fn_utils_1.once(function () {
            return new Observable_1.Observable(function (observer) {
                setTimeout(function () {
                    _this._childrenLoadingState = ChildrenLoadingState.Loading;
                    _this._loadChildren(function (children) {
                        _this._children = (children || []).map(function (child) { return new Tree(child, _this); });
                        _this._childrenLoadingState = ChildrenLoadingState.Completed;
                        observer.next(_this.children);
                        observer.complete();
                    });
                });
            });
        });
        this.buildTreeFromModel(node, parent, isBranch || Array.isArray(node.children));
    }
    // STATIC METHODS ----------------------------------------------------------------------------------------------------
    /**
     * Check that value passed is not empty (it doesn't consist of only whitespace symbols).
     * @param {string} value - A value that should be checked.
     * @returns {boolean} - A flag indicating that value is empty or not.
     * @static
     */
    // STATIC METHODS ----------------------------------------------------------------------------------------------------
    /**
       * Check that value passed is not empty (it doesn't consist of only whitespace symbols).
       * @param {string} value - A value that should be checked.
       * @returns {boolean} - A flag indicating that value is empty or not.
       * @static
       */
    Tree.isValueEmpty = 
    // STATIC METHODS ----------------------------------------------------------------------------------------------------
    /**
       * Check that value passed is not empty (it doesn't consist of only whitespace symbols).
       * @param {string} value - A value that should be checked.
       * @returns {boolean} - A flag indicating that value is empty or not.
       * @static
       */
    function (value) {
        return fn_utils_1.isEmpty(fn_utils_1.trim(value));
    };
    /**
     * Check whether a given value can be considered RenamableNode.
     * @param {any} value - A value to check.
     * @returns {boolean} - A flag indicating whether given value is Renamable node or not.
     * @static
     */
    /**
       * Check whether a given value can be considered RenamableNode.
       * @param {any} value - A value to check.
       * @returns {boolean} - A flag indicating whether given value is Renamable node or not.
       * @static
       */
    Tree.isRenamable = /**
       * Check whether a given value can be considered RenamableNode.
       * @param {any} value - A value to check.
       * @returns {boolean} - A flag indicating whether given value is Renamable node or not.
       * @static
       */
    function (value) {
        return (fn_utils_1.has(value, 'setName') && fn_utils_1.isFunction(value.setName))
            && (fn_utils_1.has(value, 'toString') && fn_utils_1.isFunction(value.toString) && value.toString !== Object.toString);
    };
    Tree.cloneTreeShallow = function (origin) {
        var tree = new Tree(Object.assign({}, origin.node));
        tree._children = origin._children;
        return tree;
    };
    Tree.applyNewValueToRenamable = function (value, newValue) {
        var renamableValue = Object.assign({}, value);
        renamableValue.setName(newValue);
        return renamableValue;
    };
    Tree.prototype.buildTreeFromModel = function (model, parent, isBranch) {
        var _this = this;
        this.parent = parent;
        this.node = Object.assign(fn_utils_1.omit(model, 'children'), {
            settings: tree_types_1.TreeModelSettings.merge(model, fn_utils_1.get(parent, 'node'))
        }, { emitLoadNextLevel: model.emitLoadNextLevel === true });
        if (fn_utils_1.isFunction(this.node.loadChildren)) {
            this._loadChildren = this.node.loadChildren;
        }
        else {
            fn_utils_1.get(model, 'children', []).forEach(function (child, index) {
                _this._addChild(new Tree(child, _this), index);
            });
        }
        if (!Array.isArray(this._children)) {
            this._children = this.node.loadChildren || isBranch ? [] : null;
        }
    };
    Tree.prototype.hasDeferredChildren = function () {
        return typeof this._loadChildren === 'function';
    };
    /* Setting the children loading state to Loading since a request was dispatched to the client */
    /* Setting the children loading state to Loading since a request was dispatched to the client */
    Tree.prototype.loadingChildrenRequested = /* Setting the children loading state to Loading since a request was dispatched to the client */
    function () {
        this._childrenLoadingState = ChildrenLoadingState.Loading;
    };
    /**
     * Check whether children of the node are being loaded.
     * Makes sense only for nodes that define `loadChildren` function.
     * @returns {boolean} A flag indicating that children are being loaded.
     */
    /**
       * Check whether children of the node are being loaded.
       * Makes sense only for nodes that define `loadChildren` function.
       * @returns {boolean} A flag indicating that children are being loaded.
       */
    Tree.prototype.childrenAreBeingLoaded = /**
       * Check whether children of the node are being loaded.
       * Makes sense only for nodes that define `loadChildren` function.
       * @returns {boolean} A flag indicating that children are being loaded.
       */
    function () {
        return (this._childrenLoadingState === ChildrenLoadingState.Loading);
    };
    /**
     * Check whether children of the node were loaded.
     * Makes sense only for nodes that define `loadChildren` function.
     * @returns {boolean} A flag indicating that children were loaded.
     */
    /**
       * Check whether children of the node were loaded.
       * Makes sense only for nodes that define `loadChildren` function.
       * @returns {boolean} A flag indicating that children were loaded.
       */
    Tree.prototype.childrenWereLoaded = /**
       * Check whether children of the node were loaded.
       * Makes sense only for nodes that define `loadChildren` function.
       * @returns {boolean} A flag indicating that children were loaded.
       */
    function () {
        return (this._childrenLoadingState === ChildrenLoadingState.Completed);
    };
    Tree.prototype.canLoadChildren = function () {
        return (this._childrenLoadingState === ChildrenLoadingState.NotStarted)
            && (this.foldingType === tree_types_1.FoldingType.Expanded)
            && (!!this._loadChildren);
    };
    /**
     * Check whether children of the node should be loaded and not loaded yet.
     * Makes sense only for nodes that define `loadChildren` function.
     * @returns {boolean} A flag indicating that children should be loaded for the current node.
     */
    /**
       * Check whether children of the node should be loaded and not loaded yet.
       * Makes sense only for nodes that define `loadChildren` function.
       * @returns {boolean} A flag indicating that children should be loaded for the current node.
       */
    Tree.prototype.childrenShouldBeLoaded = /**
       * Check whether children of the node should be loaded and not loaded yet.
       * Makes sense only for nodes that define `loadChildren` function.
       * @returns {boolean} A flag indicating that children should be loaded for the current node.
       */
    function () {
        return !this.childrenWereLoaded() && (!!this._loadChildren || this.node.emitLoadNextLevel === true);
    };
    Object.defineProperty(Tree.prototype, "children", {
        /**
         * Get children of the current tree.
         * @returns {Tree[]} The children of the current tree.
         */
        get: /**
           * Get children of the current tree.
           * @returns {Tree[]} The children of the current tree.
           */
        function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "childrenAsync", {
        /**
         * By getting value from this property you start process of loading node's children using `loadChildren` function.
         * Once children are loaded `loadChildren` function won't be called anymore and loaded for the first time children are emitted in case of subsequent calls.
         * @returns {Observable<Tree[]>} An observable which emits children once they are loaded.
         */
        get: /**
           * By getting value from this property you start process of loading node's children using `loadChildren` function.
           * Once children are loaded `loadChildren` function won't be called anymore and loaded for the first time children are emitted in case of subsequent calls.
           * @returns {Observable<Tree[]>} An observable which emits children once they are loaded.
           */
        function () {
            if (this.canLoadChildren()) {
                return this._childrenAsyncOnce();
            }
            return Observable_1.Observable.of(this.children);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * By calling this method you start process of loading node's children using `loadChildren` function.
     */
    /**
       * By calling this method you start process of loading node's children using `loadChildren` function.
       */
    Tree.prototype.reloadChildren = /**
       * By calling this method you start process of loading node's children using `loadChildren` function.
       */
    function () {
        var _this = this;
        if (this.childrenShouldBeLoaded()) {
            this._childrenLoadingState = ChildrenLoadingState.Loading;
            this._loadChildren(function (children) {
                _this._children = children && children.map(function (child) { return new Tree(child, _this); });
                _this._childrenLoadingState = ChildrenLoadingState.Completed;
            });
        }
    };
    /**
     * By calling this method you will remove all current children of a treee and create new.
     */
    /**
       * By calling this method you will remove all current children of a treee and create new.
       */
    Tree.prototype.setChildren = /**
       * By calling this method you will remove all current children of a treee and create new.
       */
    function (children) {
        var _this = this;
        this._children = children && children.map(function (child) { return new Tree(child, _this); });
        if (this.childrenShouldBeLoaded()) {
            this._childrenLoadingState = ChildrenLoadingState.Completed;
        }
    };
    /**
     * Create a new node in the current tree.
     * @param {boolean} isBranch - A flag that indicates whether a new node should be a "Branch". "Leaf" node will be created by default
     * @param {TreeModel} model - Tree model of the new node which will be inserted. Empty node will be created by default and it will fire edit mode of this node
     * @returns {Tree} A newly created child node.
     */
    /**
       * Create a new node in the current tree.
       * @param {boolean} isBranch - A flag that indicates whether a new node should be a "Branch". "Leaf" node will be created by default
       * @param {TreeModel} model - Tree model of the new node which will be inserted. Empty node will be created by default and it will fire edit mode of this node
       * @returns {Tree} A newly created child node.
       */
    Tree.prototype.createNode = /**
       * Create a new node in the current tree.
       * @param {boolean} isBranch - A flag that indicates whether a new node should be a "Branch". "Leaf" node will be created by default
       * @param {TreeModel} model - Tree model of the new node which will be inserted. Empty node will be created by default and it will fire edit mode of this node
       * @returns {Tree} A newly created child node.
       */
    function (isBranch, model) {
        if (model === void 0) { model = { value: '' }; }
        var tree = new Tree(model, this, isBranch);
        if (!model.id) {
            tree.markAsNew();
        }
        tree.id = tree.id || uuidv4();
        if (this.childrenShouldBeLoaded() && !(this.childrenAreBeingLoaded() || this.childrenWereLoaded())) {
            return null;
        }
        if (this.isLeaf()) {
            return this.addSibling(tree);
        }
        else {
            return this.addChild(tree);
        }
    };
    Object.defineProperty(Tree.prototype, "value", {
        /**
         * Get the value of the current node
         * @returns {(string|RenamableNode)} The value of the node.
         */
        get: /**
           * Get the value of the current node
           * @returns {(string|RenamableNode)} The value of the node.
           */
        function () {
            return this.node.value;
        },
        /**
         * Set the value of the current node
         * @param {(string|RenamableNode)} value - The new value of the node.
         */
        set: /**
           * Set the value of the current node
           * @param {(string|RenamableNode)} value - The new value of the node.
           */
        function (value) {
            if (typeof value !== 'string' && !Tree.isRenamable(value)) {
                return;
            }
            var stringifiedValue = '' + value;
            if (Tree.isRenamable(this.value)) {
                this.node.value = Tree.applyNewValueToRenamable(this.value, stringifiedValue);
            }
            else {
                this.node.value = Tree.isValueEmpty(stringifiedValue) ? this.node.value : stringifiedValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a sibling node for the current node. This won't work if the current node is a root.
     * @param {Tree} sibling - A node that should become a sibling.
     * @param [number] position - Position in which sibling will be inserted. By default it will be inserted at the last position in a parent.
     * @returns {Tree} A newly inserted sibling, or null if you are trying to make a sibling for the root.
     */
    /**
       * Add a sibling node for the current node. This won't work if the current node is a root.
       * @param {Tree} sibling - A node that should become a sibling.
       * @param [number] position - Position in which sibling will be inserted. By default it will be inserted at the last position in a parent.
       * @returns {Tree} A newly inserted sibling, or null if you are trying to make a sibling for the root.
       */
    Tree.prototype.addSibling = /**
       * Add a sibling node for the current node. This won't work if the current node is a root.
       * @param {Tree} sibling - A node that should become a sibling.
       * @param [number] position - Position in which sibling will be inserted. By default it will be inserted at the last position in a parent.
       * @returns {Tree} A newly inserted sibling, or null if you are trying to make a sibling for the root.
       */
    function (sibling, position) {
        if (Array.isArray(fn_utils_1.get(this.parent, 'children'))) {
            return this.parent.addChild(sibling, position);
        }
        return null;
    };
    /**
     * Add a child node for the current node.
     * @param {Tree} child - A node that should become a child.
     * @param [number] position - Position in which child will be inserted. By default it will be inserted at the last position in a parent.
     * @returns {Tree} A newly inserted child.
     */
    /**
       * Add a child node for the current node.
       * @param {Tree} child - A node that should become a child.
       * @param [number] position - Position in which child will be inserted. By default it will be inserted at the last position in a parent.
       * @returns {Tree} A newly inserted child.
       */
    Tree.prototype.addChild = /**
       * Add a child node for the current node.
       * @param {Tree} child - A node that should become a child.
       * @param [number] position - Position in which child will be inserted. By default it will be inserted at the last position in a parent.
       * @returns {Tree} A newly inserted child.
       */
    function (child, position) {
        var newborn = this._addChild(Tree.cloneTreeShallow(child), position);
        this._setFoldingType();
        if (this.isNodeCollapsed()) {
            this.switchFoldingType();
        }
        return newborn;
    };
    Tree.prototype._addChild = function (child, position) {
        if (position === void 0) { position = fn_utils_1.size(this._children) || 0; }
        child.parent = this;
        if (Array.isArray(this._children)) {
            this._children.splice(position, 0, child);
        }
        else {
            this._children = [child];
        }
        return child;
    };
    /**
     * Swap position of the current node with the given sibling. If node passed as a parameter is not a sibling - nothing happens.
     * @param {Tree} sibling - A sibling with which current node shold be swapped.
     */
    /**
       * Swap position of the current node with the given sibling. If node passed as a parameter is not a sibling - nothing happens.
       * @param {Tree} sibling - A sibling with which current node shold be swapped.
       */
    Tree.prototype.swapWithSibling = /**
       * Swap position of the current node with the given sibling. If node passed as a parameter is not a sibling - nothing happens.
       * @param {Tree} sibling - A sibling with which current node shold be swapped.
       */
    function (sibling) {
        if (!this.hasSibling(sibling)) {
            return;
        }
        var siblingIndex = sibling.positionInParent;
        var thisTreeIndex = this.positionInParent;
        this.parent._children[siblingIndex] = this;
        this.parent._children[thisTreeIndex] = sibling;
    };
    Object.defineProperty(Tree.prototype, "positionInParent", {
        /**
         * Get a node's position in its parent.
         * @returns {number} The position inside a parent.
         */
        get: /**
           * Get a node's position in its parent.
           * @returns {number} The position inside a parent.
           */
        function () {
            if (this.isRoot()) {
                return -1;
            }
            return this.parent.children ? this.parent.children.indexOf(this) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check whether or not this tree is static.
     * @returns {boolean} A flag indicating whether or not this tree is static.
     */
    /**
       * Check whether or not this tree is static.
       * @returns {boolean} A flag indicating whether or not this tree is static.
       */
    Tree.prototype.isStatic = /**
       * Check whether or not this tree is static.
       * @returns {boolean} A flag indicating whether or not this tree is static.
       */
    function () {
        return fn_utils_1.get(this.node.settings, 'static', false);
    };
    /**
     * Check whether or not this tree has a left menu.
     * @returns {boolean} A flag indicating whether or not this tree has a left menu.
     */
    /**
       * Check whether or not this tree has a left menu.
       * @returns {boolean} A flag indicating whether or not this tree has a left menu.
       */
    Tree.prototype.hasLeftMenu = /**
       * Check whether or not this tree has a left menu.
       * @returns {boolean} A flag indicating whether or not this tree has a left menu.
       */
    function () {
        return !fn_utils_1.get(this.node.settings, 'static', false) && fn_utils_1.get(this.node.settings, 'leftMenu', false);
    };
    /**
     * Check whether or not this tree has a right menu.
     * @returns {boolean} A flag indicating whether or not this tree has a right menu.
     */
    /**
       * Check whether or not this tree has a right menu.
       * @returns {boolean} A flag indicating whether or not this tree has a right menu.
       */
    Tree.prototype.hasRightMenu = /**
       * Check whether or not this tree has a right menu.
       * @returns {boolean} A flag indicating whether or not this tree has a right menu.
       */
    function () {
        return !fn_utils_1.get(this.node.settings, 'static', false) && fn_utils_1.get(this.node.settings, 'rightMenu', false);
    };
    /**
     * Check whether this tree is "Leaf" or not.
     * @returns {boolean} A flag indicating whether or not this tree is a "Leaf".
     */
    /**
       * Check whether this tree is "Leaf" or not.
       * @returns {boolean} A flag indicating whether or not this tree is a "Leaf".
       */
    Tree.prototype.isLeaf = /**
       * Check whether this tree is "Leaf" or not.
       * @returns {boolean} A flag indicating whether or not this tree is a "Leaf".
       */
    function () {
        return !this.isBranch();
    };
    Object.defineProperty(Tree.prototype, "menuItems", {
        /**
         * Get menu items of the current tree.
         * @returns {NodeMenuItem[]} The menu items of the current tree.
         */
        get: /**
           * Get menu items of the current tree.
           * @returns {NodeMenuItem[]} The menu items of the current tree.
           */
        function () {
            return fn_utils_1.get(this.node.settings, 'menuItems');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check whether or not this tree has a custom menu.
     * @returns {boolean} A flag indicating whether or not this tree has a custom menu.
     */
    /**
       * Check whether or not this tree has a custom menu.
       * @returns {boolean} A flag indicating whether or not this tree has a custom menu.
       */
    Tree.prototype.hasCustomMenu = /**
       * Check whether or not this tree has a custom menu.
       * @returns {boolean} A flag indicating whether or not this tree has a custom menu.
       */
    function () {
        return !this.isStatic() && !!fn_utils_1.get(this.node.settings, 'menuItems', false);
    };
    /**
     * Check whether this tree is "Branch" or not. "Branch" is a node that has children.
     * @returns {boolean} A flag indicating whether or not this tree is a "Branch".
     */
    /**
       * Check whether this tree is "Branch" or not. "Branch" is a node that has children.
       * @returns {boolean} A flag indicating whether or not this tree is a "Branch".
       */
    Tree.prototype.isBranch = /**
       * Check whether this tree is "Branch" or not. "Branch" is a node that has children.
       * @returns {boolean} A flag indicating whether or not this tree is a "Branch".
       */
    function () {
        return this.node.emitLoadNextLevel === true || Array.isArray(this._children);
    };
    /**
     * Check whether this tree has children.
     * @returns {boolean} A flag indicating whether or not this tree has children.
     */
    /**
       * Check whether this tree has children.
       * @returns {boolean} A flag indicating whether or not this tree has children.
       */
    Tree.prototype.hasChildren = /**
       * Check whether this tree has children.
       * @returns {boolean} A flag indicating whether or not this tree has children.
       */
    function () {
        return !fn_utils_1.isEmpty(this._children) || this.childrenShouldBeLoaded();
    };
    /**
     * Check whether this tree is a root or not. The root is the tree (node) that doesn't have parent (or technically its parent is null).
     * @returns {boolean} A flag indicating whether or not this tree is the root.
     */
    /**
       * Check whether this tree is a root or not. The root is the tree (node) that doesn't have parent (or technically its parent is null).
       * @returns {boolean} A flag indicating whether or not this tree is the root.
       */
    Tree.prototype.isRoot = /**
       * Check whether this tree is a root or not. The root is the tree (node) that doesn't have parent (or technically its parent is null).
       * @returns {boolean} A flag indicating whether or not this tree is the root.
       */
    function () {
        return fn_utils_1.isNil(this.parent);
    };
    /**
     * Check whether provided tree is a sibling of the current tree. Sibling trees (nodes) are the trees that have the same parent.
     * @param {Tree} tree - A tree that should be tested on a siblingness.
     * @returns {boolean} A flag indicating whether or not provided tree is the sibling of the current one.
     */
    /**
       * Check whether provided tree is a sibling of the current tree. Sibling trees (nodes) are the trees that have the same parent.
       * @param {Tree} tree - A tree that should be tested on a siblingness.
       * @returns {boolean} A flag indicating whether or not provided tree is the sibling of the current one.
       */
    Tree.prototype.hasSibling = /**
       * Check whether provided tree is a sibling of the current tree. Sibling trees (nodes) are the trees that have the same parent.
       * @param {Tree} tree - A tree that should be tested on a siblingness.
       * @returns {boolean} A flag indicating whether or not provided tree is the sibling of the current one.
       */
    function (tree) {
        return !this.isRoot() && fn_utils_1.includes(this.parent.children, tree);
    };
    /**
     * Check whether provided tree is a child of the current tree.
     * This method tests that provided tree is a <strong>direct</strong> child of the current tree.
     * @param {Tree} tree - A tree that should be tested (child candidate).
     * @returns {boolean} A flag indicating whether provided tree is a child or not.
     */
    /**
       * Check whether provided tree is a child of the current tree.
       * This method tests that provided tree is a <strong>direct</strong> child of the current tree.
       * @param {Tree} tree - A tree that should be tested (child candidate).
       * @returns {boolean} A flag indicating whether provided tree is a child or not.
       */
    Tree.prototype.hasChild = /**
       * Check whether provided tree is a child of the current tree.
       * This method tests that provided tree is a <strong>direct</strong> child of the current tree.
       * @param {Tree} tree - A tree that should be tested (child candidate).
       * @returns {boolean} A flag indicating whether provided tree is a child or not.
       */
    function (tree) {
        return fn_utils_1.includes(this._children, tree);
    };
    /**
     * Remove given tree from the current tree.
     * The given tree will be removed only in case it is a direct child of the current tree (@see {@link hasChild}).
     * @param {Tree} tree - A tree that should be removed.
     */
    /**
       * Remove given tree from the current tree.
       * The given tree will be removed only in case it is a direct child of the current tree (@see {@link hasChild}).
       * @param {Tree} tree - A tree that should be removed.
       */
    Tree.prototype.removeChild = /**
       * Remove given tree from the current tree.
       * The given tree will be removed only in case it is a direct child of the current tree (@see {@link hasChild}).
       * @param {Tree} tree - A tree that should be removed.
       */
    function (tree) {
        if (!this.hasChildren()) {
            return;
        }
        var childIndex = this._children.findIndex(function (child) { return child === tree; });
        if (childIndex >= 0) {
            this._children.splice(childIndex, 1);
        }
        this._setFoldingType();
    };
    /**
     * Remove current tree from its parent.
     */
    /**
       * Remove current tree from its parent.
       */
    Tree.prototype.removeItselfFromParent = /**
       * Remove current tree from its parent.
       */
    function () {
        if (!this.parent) {
            return;
        }
        this.parent.removeChild(this);
    };
    /**
     * Switch folding type of the current tree. "Leaf" node cannot switch its folding type cause it doesn't have children, hence nothing to fold.
     * If node is a "Branch" and it is expanded, then by invoking current method state of the tree should be switched to "collapsed" and vice versa.
     */
    /**
       * Switch folding type of the current tree. "Leaf" node cannot switch its folding type cause it doesn't have children, hence nothing to fold.
       * If node is a "Branch" and it is expanded, then by invoking current method state of the tree should be switched to "collapsed" and vice versa.
       */
    Tree.prototype.switchFoldingType = /**
       * Switch folding type of the current tree. "Leaf" node cannot switch its folding type cause it doesn't have children, hence nothing to fold.
       * If node is a "Branch" and it is expanded, then by invoking current method state of the tree should be switched to "collapsed" and vice versa.
       */
    function () {
        if (this.isLeaf() || !this.hasChildren()) {
            return;
        }
        this.disableCollapseOnInit();
        this.node._foldingType = this.isNodeExpanded() ? tree_types_1.FoldingType.Collapsed : tree_types_1.FoldingType.Expanded;
    };
    /**
     * Check that tree is expanded.
     * @returns {boolean} A flag indicating whether current tree is expanded. Always returns false for the "Leaf" tree and for an empty tree.
     */
    /**
       * Check that tree is expanded.
       * @returns {boolean} A flag indicating whether current tree is expanded. Always returns false for the "Leaf" tree and for an empty tree.
       */
    Tree.prototype.isNodeExpanded = /**
       * Check that tree is expanded.
       * @returns {boolean} A flag indicating whether current tree is expanded. Always returns false for the "Leaf" tree and for an empty tree.
       */
    function () {
        return this.foldingType === tree_types_1.FoldingType.Expanded;
    };
    /**
     * Check that tree is collapsed.
     * @returns {boolean} A flag indicating whether current tree is collapsed. Always returns false for the "Leaf" tree and for an empty tree.
     */
    /**
       * Check that tree is collapsed.
       * @returns {boolean} A flag indicating whether current tree is collapsed. Always returns false for the "Leaf" tree and for an empty tree.
       */
    Tree.prototype.isNodeCollapsed = /**
       * Check that tree is collapsed.
       * @returns {boolean} A flag indicating whether current tree is collapsed. Always returns false for the "Leaf" tree and for an empty tree.
       */
    function () {
        return this.foldingType === tree_types_1.FoldingType.Collapsed;
    };
    /**
     * Set a current folding type: expanded, collapsed or leaf.
     */
    /**
       * Set a current folding type: expanded, collapsed or leaf.
       */
    Tree.prototype._setFoldingType = /**
       * Set a current folding type: expanded, collapsed or leaf.
       */
    function () {
        if (this.childrenShouldBeLoaded()) {
            this.node._foldingType = tree_types_1.FoldingType.Collapsed;
        }
        else if (this._children && !fn_utils_1.isEmpty(this._children)) {
            this.node._foldingType = this.isCollapsedOnInit() ? tree_types_1.FoldingType.Collapsed : tree_types_1.FoldingType.Expanded;
        }
        else if (Array.isArray(this._children)) {
            this.node._foldingType = tree_types_1.FoldingType.Empty;
        }
        else {
            this.node._foldingType = tree_types_1.FoldingType.Leaf;
        }
    };
    Object.defineProperty(Tree.prototype, "foldingType", {
        /**
         * Get a current folding type: expanded, collapsed or leaf.
         * @returns {FoldingType} A folding type of the current tree.
         */
        get: /**
           * Get a current folding type: expanded, collapsed or leaf.
           * @returns {FoldingType} A folding type of the current tree.
           */
        function () {
            if (!this.node._foldingType) {
                this._setFoldingType();
            }
            return this.node._foldingType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "foldingCssClass", {
        /**
         * Get a css class for element which displayes folding state - expanded, collapsed or leaf
         * @returns {string} A string icontaining css class (classes)
         */
        get: /**
           * Get a css class for element which displayes folding state - expanded, collapsed or leaf
           * @returns {string} A string icontaining css class (classes)
           */
        function () {
            return this.getCssClassesFromSettings() || this.foldingType.cssClass;
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.getCssClassesFromSettings = function () {
        if (!this.node._foldingType) {
            this._setFoldingType();
        }
        if (this.node._foldingType === tree_types_1.FoldingType.Collapsed) {
            return fn_utils_1.get(this.node.settings, 'cssClasses.collapsed', null);
        }
        else if (this.node._foldingType === tree_types_1.FoldingType.Expanded) {
            return fn_utils_1.get(this.node.settings, 'cssClasses.expanded', null);
        }
        else if (this.node._foldingType === tree_types_1.FoldingType.Empty) {
            return fn_utils_1.get(this.node.settings, 'cssClasses.empty', null);
        }
        return fn_utils_1.get(this.node.settings, 'cssClasses.leaf', null);
    };
    Object.defineProperty(Tree.prototype, "nodeTemplate", {
        /**
         * Get a html template to render before every node's name.
         * @returns {string} A string representing a html template.
         */
        get: /**
           * Get a html template to render before every node's name.
           * @returns {string} A string representing a html template.
           */
        function () {
            return this.getTemplateFromSettings();
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.getTemplateFromSettings = function () {
        if (this.isLeaf()) {
            return fn_utils_1.get(this.node.settings, 'templates.leaf', '');
        }
        else {
            return fn_utils_1.get(this.node.settings, 'templates.node', '');
        }
    };
    Object.defineProperty(Tree.prototype, "leftMenuTemplate", {
        /**
         * Get a html template to render for an element activatin left menu of a node.
         * @returns {string} A string representing a html template.
         */
        get: /**
           * Get a html template to render for an element activatin left menu of a node.
           * @returns {string} A string representing a html template.
           */
        function () {
            if (this.hasLeftMenu()) {
                return fn_utils_1.get(this.node.settings, 'templates.leftMenu', '<span></span>');
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.disableCollapseOnInit = function () {
        if (this.node.settings) {
            this.node.settings.isCollapsedOnInit = false;
        }
    };
    Tree.prototype.isCollapsedOnInit = function () {
        return !!fn_utils_1.get(this.node.settings, 'isCollapsedOnInit');
    };
    /**
     * Check that current tree is newly created (added by user via menu for example). Tree that was built from the TreeModel is not marked as new.
     * @returns {boolean} A flag whether the tree is new.
     */
    /**
       * Check that current tree is newly created (added by user via menu for example). Tree that was built from the TreeModel is not marked as new.
       * @returns {boolean} A flag whether the tree is new.
       */
    Tree.prototype.isNew = /**
       * Check that current tree is newly created (added by user via menu for example). Tree that was built from the TreeModel is not marked as new.
       * @returns {boolean} A flag whether the tree is new.
       */
    function () {
        return this.node._status === tree_types_1.TreeStatus.New;
    };
    Object.defineProperty(Tree.prototype, "id", {
        get: function () {
            return fn_utils_1.get(this.node, 'id');
        },
        set: function (id) {
            this.node.id = id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark current tree as new (@see {@link isNew}).
     */
    /**
       * Mark current tree as new (@see {@link isNew}).
       */
    Tree.prototype.markAsNew = /**
       * Mark current tree as new (@see {@link isNew}).
       */
    function () {
        this.node._status = tree_types_1.TreeStatus.New;
    };
    /**
     * Check that current tree is being renamed (it is in the process of its value renaming initiated by a user).
     * @returns {boolean} A flag whether the tree is being renamed.
     */
    /**
       * Check that current tree is being renamed (it is in the process of its value renaming initiated by a user).
       * @returns {boolean} A flag whether the tree is being renamed.
       */
    Tree.prototype.isBeingRenamed = /**
       * Check that current tree is being renamed (it is in the process of its value renaming initiated by a user).
       * @returns {boolean} A flag whether the tree is being renamed.
       */
    function () {
        return this.node._status === tree_types_1.TreeStatus.IsBeingRenamed;
    };
    /**
     * Mark current tree as being renamed (@see {@link isBeingRenamed}).
     */
    /**
       * Mark current tree as being renamed (@see {@link isBeingRenamed}).
       */
    Tree.prototype.markAsBeingRenamed = /**
       * Mark current tree as being renamed (@see {@link isBeingRenamed}).
       */
    function () {
        this.node._status = tree_types_1.TreeStatus.IsBeingRenamed;
    };
    /**
     * Check that current tree is modified (for example it was renamed).
     * @returns {boolean} A flag whether the tree is modified.
     */
    /**
       * Check that current tree is modified (for example it was renamed).
       * @returns {boolean} A flag whether the tree is modified.
       */
    Tree.prototype.isModified = /**
       * Check that current tree is modified (for example it was renamed).
       * @returns {boolean} A flag whether the tree is modified.
       */
    function () {
        return this.node._status === tree_types_1.TreeStatus.Modified;
    };
    /**
     * Mark current tree as modified (@see {@link isModified}).
     */
    /**
       * Mark current tree as modified (@see {@link isModified}).
       */
    Tree.prototype.markAsModified = /**
       * Mark current tree as modified (@see {@link isModified}).
       */
    function () {
        this.node._status = tree_types_1.TreeStatus.Modified;
    };
    /**
     * Makes a clone of an underlying TreeModel instance
     * @returns {TreeModel} a clone of an underlying TreeModel instance
     */
    /**
       * Makes a clone of an underlying TreeModel instance
       * @returns {TreeModel} a clone of an underlying TreeModel instance
       */
    Tree.prototype.toTreeModel = /**
       * Makes a clone of an underlying TreeModel instance
       * @returns {TreeModel} a clone of an underlying TreeModel instance
       */
    function () {
        var model = fn_utils_1.defaultsDeep(this.isLeaf() ? {} : { children: [] }, this.node);
        if (this.children) {
            this.children.forEach(function (child) {
                model.children.push(child.toTreeModel());
            });
        }
        return model;
    };
    return Tree;
}());
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../ng2-tree/src/rxjs-imports.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var tree_component_1 = __webpack_require__("../../../../ng2-tree/src/tree.component.js");
var tree_internal_component_1 = __webpack_require__("../../../../ng2-tree/src/tree-internal.component.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var node_draggable_directive_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.directive.js");
var node_draggable_service_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.service.js");
var node_editable_directive_1 = __webpack_require__("../../../../ng2-tree/src/editable/node-editable.directive.js");
var node_menu_component_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.component.js");
var node_menu_service_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.service.js");
var tree_service_1 = __webpack_require__("../../../../ng2-tree/src/tree.service.js");
var safe_html_pipe_1 = __webpack_require__("../../../../ng2-tree/src/utils/safe-html.pipe.js");
var TreeModule = (function () {
    function TreeModule() {
    }
    TreeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        node_draggable_directive_1.NodeDraggableDirective,
                        tree_component_1.TreeComponent,
                        node_editable_directive_1.NodeEditableDirective,
                        node_menu_component_1.NodeMenuComponent,
                        tree_internal_component_1.TreeInternalComponent,
                        safe_html_pipe_1.SafeHtmlPipe
                    ],
                    exports: [tree_component_1.TreeComponent],
                    providers: [node_draggable_service_1.NodeDraggableService, node_menu_service_1.NodeMenuService, tree_service_1.TreeService]
                },] },
    ];
    /** @nocollapse */
    TreeModule.ctorParameters = function () { return []; };
    return TreeModule;
}());
exports.TreeModule = TreeModule;
//# sourceMappingURL=tree.module.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tree_events_1 = __webpack_require__("../../../../ng2-tree/src/tree.events.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var node_draggable_service_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.service.js");
var fn_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/fn.utils.js");
var TreeService = (function () {
    function TreeService(nodeDraggableService) {
        this.nodeDraggableService = nodeDraggableService;
        this.nodeMoved$ = new Subject_1.Subject();
        this.nodeRemoved$ = new Subject_1.Subject();
        this.nodeRenamed$ = new Subject_1.Subject();
        this.nodeCreated$ = new Subject_1.Subject();
        this.nodeSelected$ = new Subject_1.Subject();
        this.nodeExpanded$ = new Subject_1.Subject();
        this.nodeCollapsed$ = new Subject_1.Subject();
        this.menuItemSelected$ = new Subject_1.Subject();
        this.loadNextLevel$ = new Subject_1.Subject();
        this.controllers = new Map();
        this.nodeRemoved$.subscribe(function (e) { return e.node.removeItselfFromParent(); });
    }
    TreeService.prototype.unselectStream = function (tree) {
        return this.nodeSelected$.filter(function (e) { return tree !== e.node; });
    };
    TreeService.prototype.fireNodeRemoved = function (tree) {
        this.nodeRemoved$.next(new tree_events_1.NodeRemovedEvent(tree, tree.positionInParent));
    };
    TreeService.prototype.fireNodeCreated = function (tree) {
        this.nodeCreated$.next(new tree_events_1.NodeCreatedEvent(tree));
    };
    TreeService.prototype.fireNodeSelected = function (tree) {
        this.nodeSelected$.next(new tree_events_1.NodeSelectedEvent(tree));
    };
    TreeService.prototype.fireNodeRenamed = function (oldValue, tree) {
        this.nodeRenamed$.next(new tree_events_1.NodeRenamedEvent(tree, oldValue, tree.value));
    };
    TreeService.prototype.fireNodeMoved = function (tree, parent) {
        this.nodeMoved$.next(new tree_events_1.NodeMovedEvent(tree, parent));
    };
    TreeService.prototype.fireMenuItemSelected = function (tree, selectedItem) {
        this.menuItemSelected$.next(new tree_events_1.MenuItemSelectedEvent(tree, selectedItem));
    };
    TreeService.prototype.fireNodeSwitchFoldingType = function (tree) {
        if (tree.isNodeExpanded()) {
            this.fireNodeExpanded(tree);
            if (this.shouldFireLoadNextLevel(tree)) {
                this.fireLoadNextLevel(tree);
            }
        }
        else if (tree.isNodeCollapsed()) {
            this.fireNodeCollapsed(tree);
        }
    };
    TreeService.prototype.fireNodeExpanded = function (tree) {
        this.nodeExpanded$.next(new tree_events_1.NodeExpandedEvent(tree));
    };
    TreeService.prototype.fireNodeCollapsed = function (tree) {
        this.nodeCollapsed$.next(new tree_events_1.NodeCollapsedEvent(tree));
    };
    TreeService.prototype.fireLoadNextLevel = function (tree) {
        this.loadNextLevel$.next(new tree_events_1.LoadNextLevelEvent(tree));
    };
    TreeService.prototype.draggedStream = function (tree, element) {
        return this.nodeDraggableService.draggableNodeEvents$
            .filter(function (e) { return e.target === element; })
            .filter(function (e) { return !e.captured.tree.hasChild(tree); });
    };
    TreeService.prototype.setController = function (id, controller) {
        this.controllers.set(id, controller);
    };
    TreeService.prototype.deleteController = function (id) {
        if (this.controllers.has(id)) {
            this.controllers.delete(id);
        }
    };
    TreeService.prototype.getController = function (id) {
        if (this.controllers.has(id)) {
            return this.controllers.get(id);
        }
        return null;
    };
    TreeService.prototype.hasController = function (id) {
        return this.controllers.has(id);
    };
    TreeService.prototype.shouldFireLoadNextLevel = function (tree) {
        var shouldLoadNextLevel = tree.node.emitLoadNextLevel &&
            !tree.node.loadChildren &&
            !tree.childrenAreBeingLoaded() &&
            (!tree.children || fn_utils_1.isEmpty(tree.children));
        if (shouldLoadNextLevel) {
            tree.loadingChildrenRequested();
        }
        return shouldLoadNextLevel;
    };
    TreeService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    TreeService.ctorParameters = function () { return [
        { type: node_draggable_service_1.NodeDraggableService, decorators: [{ type: core_1.Inject, args: [node_draggable_service_1.NodeDraggableService,] },] },
    ]; };
    return TreeService;
}());
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.types.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fn_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/fn.utils.js");
var FoldingType = (function () {
    function FoldingType(_cssClass) {
        this._cssClass = _cssClass;
    }
    Object.defineProperty(FoldingType.prototype, "cssClass", {
        get: function () {
            return this._cssClass;
        },
        enumerable: true,
        configurable: true
    });
    FoldingType.Expanded = new FoldingType('node-expanded');
    FoldingType.Collapsed = new FoldingType('node-collapsed');
    FoldingType.Empty = new FoldingType('node-empty');
    FoldingType.Leaf = new FoldingType('node-leaf');
    return FoldingType;
}());
exports.FoldingType = FoldingType;
var TreeModelSettings = (function () {
    function TreeModelSettings() {
    }
    TreeModelSettings.merge = function (sourceA, sourceB) {
        return fn_utils_1.defaultsDeep({}, fn_utils_1.get(sourceA, 'settings'), fn_utils_1.get(sourceB, 'settings'), { static: false, leftMenu: false, rightMenu: true, isCollapsedOnInit: false });
    };
    return TreeModelSettings;
}());
exports.TreeModelSettings = TreeModelSettings;
var TreeStatus;
(function (TreeStatus) {
    TreeStatus[TreeStatus["New"] = 0] = "New";
    TreeStatus[TreeStatus["Modified"] = 1] = "Modified";
    TreeStatus[TreeStatus["IsBeingRenamed"] = 2] = "IsBeingRenamed";
})(TreeStatus = exports.TreeStatus || (exports.TreeStatus = {}));
//# sourceMappingURL=tree.types.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/utils/event.utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Keys;
(function (Keys) {
    Keys[Keys["Escape"] = 27] = "Escape";
})(Keys = exports.Keys || (exports.Keys = {}));
var MouseButtons;
(function (MouseButtons) {
    MouseButtons[MouseButtons["Left"] = 0] = "Left";
    MouseButtons[MouseButtons["Right"] = 2] = "Right";
})(MouseButtons = exports.MouseButtons || (exports.MouseButtons = {}));
function isLeftButtonClicked(e) {
    return e.button === MouseButtons.Left;
}
exports.isLeftButtonClicked = isLeftButtonClicked;
function isRightButtonClicked(e) {
    return e.button === MouseButtons.Right;
}
exports.isRightButtonClicked = isRightButtonClicked;
function isEscapePressed(e) {
    return e.keyCode === Keys.Escape;
}
exports.isEscapePressed = isEscapePressed;
//# sourceMappingURL=event.utils.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/utils/fn.utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(value) {
    if (typeof value === 'string') {
        return !/\S/.test(value);
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isNil(value);
}
exports.isEmpty = isEmpty;
function trim(value) {
    return isNil(value) ? '' : value.trim();
}
exports.trim = trim;
function has(value, prop) {
    return value && typeof value === 'object' && value.hasOwnProperty(prop);
}
exports.has = has;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function get(value, path, defaultValue) {
    var result = value;
    for (var _i = 0, _a = path.split('.'); _i < _a.length; _i++) {
        var prop = _a[_i];
        if (!result || !Reflect.has(result, prop)) {
            return defaultValue;
        }
        result = result[prop];
    }
    return isNil(result) || result === value ? defaultValue : result;
}
exports.get = get;
function omit(value, propToSkip) {
    return Object
        .keys(value)
        .reduce(function (result, prop) {
        if (prop === propToSkip) {
            return result;
        }
        return Object.assign(result, (_a = {}, _a[prop] = value[prop], _a));
        var _a;
    }, {});
}
exports.omit = omit;
function size(value) {
    return isEmpty(value) ? 0 : value.length;
}
exports.size = size;
function once(fn) {
    var result;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fn) {
            result = fn.apply(null, args);
            fn = null;
        }
        return result;
    };
}
exports.once = once;
function defaultsDeep(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return [target].concat(sources).reduce(function (result, source) {
        if (!source) {
            return result;
        }
        Object.keys(source).forEach(function (prop) {
            if (isNil(result[prop])) {
                result[prop] = source[prop];
                return;
            }
            if (typeof result[prop] === 'object' && !Array.isArray(result[prop])) {
                result[prop] = defaultsDeep(result[prop], source[prop]);
                return;
            }
        });
        return result;
    }, {});
}
exports.defaultsDeep = defaultsDeep;
function includes(target, value) {
    if (isNil(target)) {
        return false;
    }
    var index = typeof target === 'string' ? target.indexOf(value) : target.indexOf(value);
    return index > -1;
}
exports.includes = includes;
function isNil(value) {
    return value === undefined || value === null;
}
exports.isNil = isNil;
//# sourceMappingURL=fn.utils.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/utils/safe-html.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        // return value;
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeHtml' },] },
    ];
    /** @nocollapse */
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return SafeHtmlPipe;
}());
exports.SafeHtmlPipe = SafeHtmlPipe;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/operator/filter.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_filter PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.filter = __WEBPACK_IMPORTED_MODULE_1__operator_filter__["a" /* filter */];
//# sourceMappingURL=filter.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/share.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_share__ = __webpack_require__("../../../../rxjs/_esm5/operator/share.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_share PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.share = __WEBPACK_IMPORTED_MODULE_1__operator_share__["a" /* share */];
//# sourceMappingURL=share.js.map 


/***/ }),

/***/ "../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../exports-loader/index.js?module.exports.toString()!../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null,null],\"sourceMap\":false}!../../../../angular2-toaster/toaster.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../exports-loader/index.js?module.exports.toString()!../css-loader/index.js??ref--3-1!../postcss-loader/lib/index.js??postcss!./toaster.css", function() {
			var newContent = require("!!../exports-loader/index.js?module.exports.toString()!../css-loader/index.js??ref--3-1!../postcss-loader/lib/index.js??postcss!./toaster.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../uuid/lib/bytesToUuid.js":
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../../../uuid/lib/rng-browser.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../uuid/v4.js":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("../../../../uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__("../../../../uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map