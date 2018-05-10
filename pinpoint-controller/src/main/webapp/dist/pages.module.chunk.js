webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card [size]=\"breakpoint.width >= breakpoints.xxxl || breakpoint.width < breakpoints.md ? 'large' : 'xlarge'\">\r\n  <nb-tabset fullWidth>\r\n    <nb-tab tabTitle=\"Contacts\">\r\n      <div class=\"contact\" *ngFor=\"let c of contacts\">\r\n        <nb-user [picture]=\"c.user.picture\" [name]=\"c.user.name\" [title]=\"c.type\" size=\"large\"></nb-user>\r\n        <i class=\"i-contact nb-phone\"></i>\r\n      </div>\r\n    </nb-tab>\r\n    <nb-tab tabTitle=\"Recent\">\r\n      <div class=\"contact\" *ngFor=\"let c of recent\">\r\n        <nb-user [picture]=\"c.user.picture\" [name]=\"c.user.name\" [title]=\"c.type\" size=\"large\"></nb-user>\r\n        <span class=\"time\">{{ c.time }}</span>\r\n      </div>\r\n    </nb-tab>\r\n  </nb-tabset>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a4abb3;\n  padding: 1rem; }\n  :host-context(.nb-theme-default) .contact:not(:last-child) {\n    border-bottom: 1px solid #ebeef2; }\n\n:host-context(.nb-theme-default) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-name {\n  font-family: Exo;\n  font-weight: 600;\n  color: #2a2a2a;\n  font-size: 1.25rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a1a1e5;\n  padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .contact:not(:last-child) {\n    border-bottom: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n  font-family: Exo;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 1.25rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(userService, themeService, breakpointService) {
        var _this = this;
        this.userService = userService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.contacts = [
                { user: users.nick, type: 'mobile' },
                { user: users.eva, type: 'home' },
                { user: users.jack, type: 'mobile' },
                { user: users.lee, type: 'mobile' },
                { user: users.alan, type: 'home' },
                { user: users.kate, type: 'work' },
            ];
            _this.recent = [
                { user: users.alan, type: 'home', time: '9:12 pm' },
                { user: users.eva, type: 'home', time: '7:45 pm' },
                { user: users.nick, type: 'mobile', time: '5:29 pm' },
                { user: users.lee, type: 'mobile', time: '11:24 am' },
                { user: users.jack, type: 'mobile', time: '10:45 am' },
                { user: users.kate, type: 'work', time: '9:42 am' },
                { user: users.kate, type: 'work', time: '9:31 am' },
                { user: users.jack, type: 'mobile', time: '8:01 am' },
            ];
        });
    };
    ContactsComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-contacts',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xxxl-3 col-md-6\">\r\n    <ngx-status-card title=\"Light\" type=\"primary\">\r\n      <i class=\"nb-lightbulb\"></i>\r\n    </ngx-status-card>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-3 col-md-6\">\r\n    <ngx-status-card title=\"Roller Shades\" type=\"success\">\r\n      <i class=\"nb-roller-shades\"></i>\r\n    </ngx-status-card>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-3 col-md-6\">\r\n    <ngx-status-card title=\"Wireless Audio\" type=\"info\">\r\n      <i class=\"nb-audio\"></i>\r\n    </ngx-status-card>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-3 col-md-6\">\r\n    <ngx-status-card title=\"Coffee Maker\" type=\"warning\">\r\n      <i class=\"nb-coffee-maker\"></i>\r\n    </ngx-status-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\r\n    <ngx-temperature></ngx-temperature>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-9 col-xxl-8 col-lg-7 col-md-6\">\r\n    <ngx-electricity></ngx-electricity>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xxxl-9 col-xl-12\">\r\n    <ngx-rooms></ngx-rooms>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-7 col-md-6\">\r\n    <ngx-contacts></ngx-contacts>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\r\n    <ngx-solar [chartValue]=\"72\"></ngx-solar>\r\n\r\n    <ngx-kitten></ngx-kitten>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-3 col-xxl-4 col-md-5\">\r\n    <ngx-traffic></ngx-traffic>\r\n    <ngx-weather></ngx-weather>\r\n  </div>\r\n\r\n  <div class=\"col-xxxl-6 col-xxl-12 col-md-7\">\r\n    <ngx-security-cameras></ngx-security-cameras>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n    height: 456px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-dashboard',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rooms_room_selector_room_selector_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__temperature_temperature_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__temperature_temperature_dragger_temperature_dragger_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_team_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kitten_kitten_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_cameras_security_cameras_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__electricity_electricity_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__electricity_electricity_chart_electricity_chart_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__solar_solar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rooms_player_player_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__traffic_traffic_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__traffic_traffic_chart_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* NgxEchartsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__["a" /* StatusCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__temperature_temperature_dragger_temperature_dragger_component__["a" /* TemperatureDraggerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rooms_room_selector_room_selector_component__["a" /* RoomSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__temperature_temperature_component__["a" /* TemperatureComponent */],
                __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_11__kitten_kitten_component__["a" /* KittenComponent */],
                __WEBPACK_IMPORTED_MODULE_12__security_cameras_security_cameras_component__["a" /* SecurityCamerasComponent */],
                __WEBPACK_IMPORTED_MODULE_13__electricity_electricity_component__["a" /* ElectricityComponent */],
                __WEBPACK_IMPORTED_MODULE_14__electricity_electricity_chart_electricity_chart_component__["a" /* ElectricityChartComponent */],
                __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_17__rooms_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__solar_solar_component__["a" /* SolarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__traffic_traffic_component__["a" /* TrafficComponent */],
                __WEBPACK_IMPORTED_MODULE_19__traffic_traffic_chart_component__["a" /* TrafficChartComponent */],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-default) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectricityChartComponent = /** @class */ (function () {
    function ElectricityChartComponent(theme) {
        this.theme = theme;
        var points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
            720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
            145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
            340, 340, 340, 340, 340, 340, 340, 340];
        // const points = [];
        // let pointsCount = 100;
        // let min = -3;
        // let max = 3;
        // let xStep = (max - min) / pointsCount;
        //
        // for(let x = -3; x <= 3; x += xStep) {
        //   let res = x**3 - 5*x + 17;
        //   points.push(Math.round(res * 25));
        // }
        this.data = points.map(function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); });
    }
    ElectricityChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} kWh',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: eTheme.xAxisTextColor,
                            fontSize: 18,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    ElectricityChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ElectricityChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-electricity-chart',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss")],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], ElectricityChartComponent);
    return ElectricityChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\r\n  <div class=\"consumption-table\">\r\n    <div class=\"table-header\">\r\n      <div>Electricity</div>\r\n      <div class=\"subtitle\">Consumption</div>\r\n    </div>\r\n\r\n    <nb-tabset fullWidth>\r\n      <nb-tab *ngFor=\"let year of data\" [tabTitle]=\"year.title\" [active]=\"year.active\">\r\n        <div class=\"stats-month\" *ngFor=\"let month of year.months\">\r\n          <div>\r\n            <span class=\"month\">{{ month.month }}</span>\r\n            <span class=\"delta\" [ngClass]=\"{ 'down': month.down }\">{{ month.delta }}</span>\r\n          </div>\r\n          <div class=\"results\">\r\n            <b>{{ month.kWatts }}</b> kWh / <b>{{ month.cost }}</b> USD\r\n          </div>\r\n        </div>\r\n      </nb-tab>\r\n    </nb-tabset>\r\n  </div>\r\n\r\n  <div class=\"chart-container\">\r\n    <div class=\"chart-header\">\r\n      <div class=\"header-stats\">\r\n        <div class=\"stats-block\">\r\n          <div class=\"subtitle\">Consumed</div>\r\n          <div>\r\n            <span class=\"value\">816</span>\r\n            <span class=\"unit\">kWh</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"stats-block\">\r\n          <div class=\"subtitle\">Spent</div>\r\n          <div>\r\n            <span class=\"value\">291</span>\r\n            <span class=\"unit\">USD</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"dropdown\" ngbDropdown>\r\n        <button type=\"button\" ngbDropdownToggle class=\"btn\"\r\n                [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\r\n          {{ type }}\r\n        </button>\r\n        <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n          <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n    <ngx-electricity-chart></ngx-electricity-chart>\r\n  </div>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 2px 12px 0 #dfe3eb; }\n\n:host-context(.nb-theme-default) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-default) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header .subtitle {\n    color: #a4abb3;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #ebeff5;\n    border-radius: 0.375rem 0.375rem 0 0; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #40dc7e; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-default) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .stats-month:not(:first-child) {\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff6780; }\n    :host-context(.nb-theme-default) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff6780; }\n    :host-context(.nb-theme-default) .stats-month .delta.down {\n      color: #5de191; }\n      :host-context(.nb-theme-default) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #5de191;\n        border-bottom: none; }\n  :host-context(.nb-theme-default) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-default) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-default) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a4abb3;\n  padding: 0 1.5rem;\n  border-right: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 130px; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-default) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-default) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-default) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-default) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-default) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) .stats-block .unit {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6); }\n\n:host-context(.nb-theme-cosmic) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header .subtitle {\n    color: #a1a1e5;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #2f296b;\n    border-radius: 0.5rem 0.5rem 0 0; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #00d977; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-cosmic) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .stats-month:not(:first-child) {\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta.down {\n      color: #26df8b; }\n      :host-context(.nb-theme-cosmic) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #26df8b;\n        border-bottom: none; }\n  :host-context(.nb-theme-cosmic) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-cosmic) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-cosmic) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a1a1e5;\n  padding: 0 1.5rem;\n  border-right: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 130px; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n  background-color: #7659ff;\n  border-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .stats-block .value {\n  font-weight: 500; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-cosmic) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .unit {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__ = __webpack_require__("../../../../../src/app/@core/data/electricity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectricityComponent = /** @class */ (function () {
    function ElectricityComponent(eService, themeService) {
        var _this = this;
        this.eService = eService;
        this.themeService = themeService;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.data = this.eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    ElectricityComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ElectricityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-electricity',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__["a" /* ElectricityService */], __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], ElectricityComponent);
    return ElectricityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\r\n  <nb-card-body>\r\n    <div class=\"picture\" style.background-image=\"url('assets/images/kitten-{{currentTheme}}.png')\"></div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"title\">\r\n        React Native UI Kitten\r\n      </div>\r\n      <div class=\"description\">\r\n        React Native UI Kitten is a framework that contains a set of commonly used UI components styled in a similar way. The most awesome thing: you can change themes on the fly by just passing a different set of variables. 100% native. Give our kitten a try!\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n\r\n\r\n  <nb-card-footer>\r\n    <a href=\"https://akveo.github.io/react-native-ui-kitten\" target=\"_blank\">\r\n      <i class=\"ion-ios-world\"></i>\r\n    </a>\r\n    <a href=\"https://itunes.apple.com/us/app/kitten-tricks/id1246143230\" target=\"_blank\">\r\n      <i class=\"ion-social-apple\"></i>\r\n    </a>\r\n    <a href=\"https://play.google.com/store/apps/details?id=com.akveo.kittenTricks\" target=\"_blank\">\r\n      <i class=\"ion-social-android\"></i>\r\n    </a>\r\n    <a href=\"https://github.com/akveo/react-native-ui-kitten\" target=\"_blank\">\r\n      <i class=\"ion-social-github\"></i>\r\n    </a>\r\n  </nb-card-footer>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .picture {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host-context(.nb-theme-default) .details {\n  padding: 1.25rem 1.25rem 0; }\n  :host-context(.nb-theme-default) .details .title {\n    font-family: Exo;\n    font-weight: 600;\n    color: #2a2a2a;\n    font-size: 1.5rem;\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) .details .description {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: calc(1rem * 8 * 1.25); }\n\n:host-context(.nb-theme-default) nb-card-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0.75rem 0;\n  border: none; }\n  :host-context(.nb-theme-default) nb-card-footer a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card-footer a:hover {\n      color: #2a2a2a; }\n    :host-context(.nb-theme-default) nb-card-footer a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .picture {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host-context(.nb-theme-cosmic) .details {\n  padding: 1.25rem 1.25rem 0; }\n  :host-context(.nb-theme-cosmic) .details .title {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .details .description {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: calc(1rem * 8 * 1.25); }\n\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0.75rem 0;\n  border: none; }\n  :host-context(.nb-theme-cosmic) nb-card-footer a {\n    text-decoration: none;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) nb-card-footer a:hover {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card-footer a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KittenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KittenComponent = /** @class */ (function () {
    function KittenComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    KittenComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    KittenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-kitten',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], KittenComponent);
    return KittenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">My Playlist</div>\r\n\r\n<div class=\"body\">\r\n\r\n  <div class=\"track-info\">\r\n    <div class=\"cover\" style.background-image=\"url('{{track.cover}}')\"></div>\r\n    <div class=\"details\">\r\n      <h4>{{ track.name }}</h4>\r\n      <span>{{ track.artist }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"progress-wrap\">\r\n    <input type=\"range\" class=\"progress\" [value]=\"getProgress()\" min=\"0\" max=\"100\" step=\"0.01\"\r\n           (input)=\"setProgress(duration.value)\" #duration>\r\n    <div class=\"progress-foreground\" [style.width.%]=\"getProgress()\"></div>\r\n  </div>\r\n\r\n  <div class=\"timing\">\r\n    <small class=\"current\">{{ player.currentTime | timing }}</small>\r\n    <small class=\"remaining\">- {{ player.duration - player.currentTime | timing }}</small>\r\n  </div>\r\n\r\n  <div class=\"controls\">\r\n    <i class=\"nb-shuffle shuffle\" [class.active]=\"shuffle\" (click)=\"toggleShuffle()\"></i>\r\n    <i class=\"nb-skip-backward prev\" (click)=\"prev()\"></i>\r\n    <i class=\"play\" [class.nb-play]=\"player.paused\" [class.nb-pause]=\"!player.paused\" (click)=\"playPause()\"></i>\r\n    <i class=\"nb-skip-forward next\" (click)=\"next()\"></i>\r\n    <i class=\"nb-loop loop\" [class.active]=\"player.loop\" (click)=\"toggleLoop()\"></i>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"footer\">\r\n\r\n  <div class=\"volume\">\r\n    <i class=\"nb-volume-mute\"></i>\r\n    <div class=\"progress-wrap\">\r\n      <input type=\"range\" class=\"progress\" [value]=\"getVolume()\" max=\"100\"\r\n             (input)=\"setVolume(volume.value)\" #volume>\r\n      <div class=\"progress-foreground\" [style.width.%]=\"getVolume()\"></div>\r\n    </div>\r\n    <i class=\"nb-volume-high\"></i>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-default) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #ebeef2;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 600; }\n    :host-context(.nb-theme-default) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-default) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .track-info .cover {\n      border-radius: 0.1875rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-default) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-default) .track-info .details span {\n        color: #a4abb3; }\n  :host-context(.nb-theme-default) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-default) .progress-wrap .progress-foreground {\n      background-color: #40dc7e;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px; }\n    :host-context(.nb-theme-default) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n  :host-context(.nb-theme-default) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-default) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-default) .controls .shuffle, :host-context(.nb-theme-default) .controls .loop {\n      font-size: 1.5rem;\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) .controls .shuffle.active, :host-context(.nb-theme-default) .controls .loop.active {\n        color: #40dc7e; }\n    :host-context(.nb-theme-default) .controls .prev, :host-context(.nb-theme-default) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #ebeef2;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-default) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-default) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-default) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #a4abb3; }\n    :host-context(.nb-theme-default) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-default).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-default).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-default).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.375rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-default).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-default).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-default).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-default).collapsed .controls .prev, :host-context(.nb-theme-default).collapsed .controls .shuffle, :host-context(.nb-theme-default).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-default).collapsed .controls .play, :host-context(.nb-theme-default).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-default).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #342e73;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-cosmic) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .track-info .cover {\n      border-radius: 0.25rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-cosmic) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-cosmic) .track-info .details span {\n        color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress-foreground {\n      background-color: #00d977;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px;\n      background-color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-cosmic) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .controls .shuffle, :host-context(.nb-theme-cosmic) .controls .loop {\n      font-size: 1.5rem;\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) .controls .shuffle.active, :host-context(.nb-theme-cosmic) .controls .loop.active {\n        color: #00d977;\n        color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .controls .prev, :host-context(.nb-theme-cosmic) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #342e73;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-cosmic) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-cosmic) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-cosmic) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(161, 161, 229, 0.4);\n          border: solid 1px rgba(161, 161, 229, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(161, 161, 229, 0.4);\n          border: solid 1px rgba(161, 161, 229, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(161, 161, 229, 0.4);\n          border: solid 1px rgba(161, 161, 229, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-cosmic).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-cosmic).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-cosmic).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.5rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-cosmic).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-cosmic).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-cosmic).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .prev, :host-context(.nb-theme-cosmic).collapsed .controls .shuffle, :host-context(.nb-theme-cosmic).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .play, :host-context(.nb-theme-cosmic).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-cosmic).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__ = __webpack_require__("../../../../../src/app/@core/data/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
        this.track = this.playerService.random();
        this.createPlayer();
    }
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.player.pause();
        this.player.src = '';
        this.player.load();
    };
    PlayerComponent.prototype.prev = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.prev();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.next = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.next();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.playPause = function () {
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    PlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
    };
    PlayerComponent.prototype.toggleLoop = function () {
        this.player.loop = !this.player.loop;
    };
    PlayerComponent.prototype.setVolume = function (volume) {
        this.player.volume = volume / 100;
    };
    PlayerComponent.prototype.getVolume = function () {
        return this.player.volume * 100;
    };
    PlayerComponent.prototype.setProgress = function (duration) {
        this.player.currentTime = this.player.duration * duration / 100;
    };
    PlayerComponent.prototype.getProgress = function () {
        return this.player.currentTime / this.player.duration * 100 || 0;
    };
    PlayerComponent.prototype.createPlayer = function () {
        var _this = this;
        this.player = new Audio();
        this.player.onended = function () { return _this.next(); };
        this.setTrack();
    };
    PlayerComponent.prototype.reload = function () {
        this.setTrack();
        this.player.play();
    };
    PlayerComponent.prototype.setTrack = function () {
        this.player.src = this.track.url;
        this.player.load();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsed'),
        __metadata("design:type", Boolean)
    ], PlayerComponent.prototype, "collapsed", void 0);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-player',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_player_service__["a" /* PlayerService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Room Management</div>\r\n<div class=\"room-selector\">\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n       [attr.viewBox]=\"viewBox\" preserveAspectRatio=\"xMidYMid\">\r\n    <defs>\r\n\r\n      <filter id=\"f2\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\">\r\n        <feGaussianBlur result=\"blurOut\" in=\"StrokePaint\" stdDeviation=\"3\"/>\r\n      </filter>\r\n\r\n      <pattern id=\"New_Pattern_Swatch_1\" data-name=\"New Pattern Swatch 1\" width=\"60\" height=\"60\"\r\n               patternUnits=\"userSpaceOnUse\" viewBox=\"0 0 60 60\">\r\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"123.26\" x2=\"3.26\" y2=\"6.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"133.26\" x2=\"13.26\" y2=\"16.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"143.26\" x2=\"23.26\" y2=\"26.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"153.26\" x2=\"33.26\" y2=\"36.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"163.26\" x2=\"43.26\" y2=\"46.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"173.26\" x2=\"53.26\" y2=\"56.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"123.26\" x2=\"63.26\" y2=\"6.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"133.26\" x2=\"73.26\" y2=\"16.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"143.26\" x2=\"83.26\" y2=\"26.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"153.26\" x2=\"93.26\" y2=\"36.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"163.26\" x2=\"103.26\" y2=\"46.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"173.26\" x2=\"113.26\" y2=\"56.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"123.26\" x2=\"123.26\" y2=\"6.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"133.26\" x2=\"133.26\" y2=\"16.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"143.26\" x2=\"143.26\" y2=\"26.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"153.26\" x2=\"153.26\" y2=\"36.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"163.26\" x2=\"163.26\" y2=\"46.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"173.26\" x2=\"173.26\" y2=\"56.74\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"63.26\" x2=\"3.26\" y2=\"-53.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"73.26\" x2=\"13.26\" y2=\"-43.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"83.26\" x2=\"23.26\" y2=\"-33.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"93.26\" x2=\"33.26\" y2=\"-23.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"103.26\" x2=\"43.26\" y2=\"-13.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"113.26\" x2=\"53.26\" y2=\"-3.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"63.26\" x2=\"63.26\" y2=\"-53.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"73.26\" x2=\"73.26\" y2=\"-43.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"83.26\" x2=\"83.26\" y2=\"-33.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"93.26\" x2=\"93.26\" y2=\"-23.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"103.26\" x2=\"103.26\" y2=\"-13.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"113.26\" x2=\"113.26\" y2=\"-3.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"63.26\" x2=\"123.26\" y2=\"-53.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"73.26\" x2=\"133.26\" y2=\"-43.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"83.26\" x2=\"143.26\" y2=\"-33.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"93.26\" x2=\"153.26\" y2=\"-23.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"103.26\" x2=\"163.26\" y2=\"-13.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"113.26\" x2=\"173.26\" y2=\"-3.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"3.26\" x2=\"3.26\" y2=\"-113.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"13.26\" x2=\"13.26\" y2=\"-103.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"23.26\" x2=\"23.26\" y2=\"-93.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"33.26\" x2=\"33.26\" y2=\"-83.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"43.26\" x2=\"43.26\" y2=\"-73.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"53.26\" x2=\"53.26\" y2=\"-63.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"3.26\" x2=\"63.26\" y2=\"-113.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"13.26\" x2=\"73.26\" y2=\"-103.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"23.26\" x2=\"83.26\" y2=\"-93.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"33.26\" x2=\"93.26\" y2=\"-83.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"43.26\" x2=\"103.26\" y2=\"-73.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"53.26\" x2=\"113.26\" y2=\"-63.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"3.26\" x2=\"123.26\" y2=\"-113.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"13.26\" x2=\"133.26\" y2=\"-103.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"23.26\" x2=\"143.26\" y2=\"-93.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"33.26\" x2=\"153.26\" y2=\"-83.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"43.26\" x2=\"163.26\" y2=\"-73.26\"/>\r\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"53.26\" x2=\"173.26\" y2=\"-63.26\"/>\r\n      </pattern>\r\n    </defs>\r\n\r\n    <g>\r\n      <path class=\"room-border\" [attr.d]=\"border.d\" *ngFor=\"let border of roomSvg.borders\" />\r\n    </g>\r\n\r\n    <g>\r\n      <path class=\"stroked-element\" [attr.d]=\"strokedArea.d\" *ngFor=\"let strokedArea of roomSvg.stokedAreas\"/>\r\n    </g>\r\n\r\n    <g [attr.id]=\"room.id\" [class.selected-room]=\"selectedRoom == room.id\" *ngFor=\"let room of sortedRooms\">\r\n      <path class=\"room-bg\" (click)=\"selectRoom(room.id)\" [attr.d]=\"room.area.d\" [style.filter]=\"isIE || isFirefox ? 'inherit': ''\" />\r\n      <path class=\"room-border\" [attr.d]=\"room.border.d\" />\r\n      <path class=\"room-border room-border-glow\" [attr.d]=\"room.border.d\" [style.filter]=\"isIE || isFirefox ? 'inherit': ''\" />\r\n      <text class=\"room-text\" (click)=\"selectRoom(room.id)\" text-anchor=\"middle\"\r\n            [attr.x]=\"room.name.x\" [attr.y]=\"room.name.y\">{{room.name.text}}</text>\r\n    </g>\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) svg {\n  width: 100%; }\n\n:host-context(.nb-theme-default) .stroke-pattern {\n  fill: none;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  opacity: 0.1;\n  stroke-width: 1px; }\n\n:host-context(.nb-theme-default) .stroked-element {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: url(\"#New_Pattern_Swatch_1\"); }\n\n:host-context(.nb-theme-default) .room-border {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: none; }\n\n:host-context(.nb-theme-default) .room-bg {\n  fill: #ffffff;\n  stroke: transparent;\n  cursor: pointer;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-default) .room-bg-border-grad {\n  fill: none;\n  stroke: none;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-default) .room-text {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  fill: #a4abb3; }\n\n:host-context(.nb-theme-default) .selected-room {\n  z-index: 40; }\n  :host-context(.nb-theme-default) .selected-room .room-text {\n    fill: #2a2a2a;\n    font-weight: 500; }\n  :host-context(.nb-theme-default) .selected-room .room-border {\n    stroke: #40dc7e; }\n\n:host-context(.nb-theme-default) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border-bottom: none;\n  padding-bottom: 0; }\n  :host-context(.nb-theme-default) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) svg {\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .stroke-pattern {\n  fill: none;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  opacity: 0.1;\n  stroke-width: 1px; }\n\n:host-context(.nb-theme-cosmic) .stroked-element {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: url(\"#New_Pattern_Swatch_1\"); }\n\n:host-context(.nb-theme-cosmic) .room-border {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: none; }\n\n:host-context(.nb-theme-cosmic) .room-bg {\n  fill: #3d3780;\n  stroke: transparent;\n  cursor: pointer;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-cosmic) .room-bg-border-grad {\n  fill: none;\n  stroke: none;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-cosmic) .room-text {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  fill: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .selected-room {\n  z-index: 40; }\n  :host-context(.nb-theme-cosmic) .selected-room .room-text {\n    fill: #ffffff;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .selected-room .room-border {\n    stroke: #00d977; }\n\n:host-context(.nb-theme-cosmic) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  border-bottom: none;\n  padding-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) .stroke-pattern, :host-context(.nb-theme-cosmic) .stroked-element, :host-context(.nb-theme-cosmic) .room-border {\n  stroke: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .room-text {\n  fill: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-text {\n  font-weight: 400; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-bg {\n  fill: rgba(0, 255, 170, 0.2);\n  -webkit-filter: url(\"#f2\");\n          filter: url(\"#f2\"); }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-border {\n  stroke: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-border-glow {\n  -webkit-filter: url(\"#f2\");\n          filter: url(\"#f2\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomSelectorComponent = /** @class */ (function () {
    function RoomSelectorComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortedRooms = [];
        this.viewBox = '-20 -20 618.88 407.99';
        this.isIE = !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/MSIE/)
            || navigator.userAgent.match(/Edge/));
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
        this.roomSvg = {
            borders: [{
                    d: 'M186.21,130.05H216.37V160H186.21Z',
                }],
            stokedAreas: [
                { d: 'M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z' },
                { d: 'M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z' },
                { d: 'M216.37,49.82H358.8V92.5H216.37Z' },
            ],
            rooms: [
                {
                    id: '0',
                    name: { text: 'Kitchen', x: 142, y: 240.8 },
                    area: { d: 'M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z' },
                    border: { d: 'M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,' +
                            '130H186.21V160H218.5' },
                },
                {
                    id: '1',
                    name: { text: 'Bedroom', x: 109, y: 66 },
                    area: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,' +
                            '6.09,0,0,0,8.09,130H96Z' },
                    border: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09' +
                            ',6.09,0,0,0,8.09,130H96' },
                },
                {
                    id: '2',
                    name: { text: 'Living Room', x: 468, y: 134 },
                    area: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212Z' },
                    border: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212' },
                },
                {
                    id: '3',
                    name: { text: 'Hallway', x: 320, y: 273 },
                    area: { d: 'M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z' },
                    border: { d: 'M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,' +
                            '6.09,0,0,1,-6.09,6.09H272.71V356' },
                },
            ],
        };
        this.selectRoom('2');
    }
    RoomSelectorComponent.prototype.sortRooms = function () {
        var _this = this;
        this.sortedRooms = this.roomSvg.rooms.slice(0).sort(function (a, b) {
            if (a.id === _this.selectedRoom) {
                return 1;
            }
            if (b.id === _this.selectedRoom) {
                return -1;
            }
            return 0;
        });
    };
    RoomSelectorComponent.prototype.selectRoom = function (roomNumber) {
        this.select.emit(roomNumber);
        this.selectedRoom = roomNumber;
        this.sortRooms();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], RoomSelectorComponent.prototype, "select", void 0);
    RoomSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-room-selector',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RoomSelectorComponent);
    return RoomSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/rooms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) ngx-room-selector {\n  width: 70%;\n  border-right: 2px solid #ebeef2;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 150 150%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23ebeef2%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 2_svg%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cline class%3D%22cls-1%22 x1%3D%2275%22 x2%3D%2275%22 y2%3D%22150%22%2F%3E%3Cline class%3D%22cls-1%22 x1%3D%22150%22 y1%3D%2275%22 y2%3D%2275%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") repeat;\n  background-size: 75px; }\n\n:host-context(.nb-theme-default) ngx-player {\n  width: 30%; }\n\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) ngx-room-selector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host-context(.nb-theme-default) ngx-room-selector /deep/ .room-selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-grid-column-align: center;\n        justify-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 auto;\n    width: 90%;\n    max-width: 650px;\n    padding-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default).expanded ngx-room-selector {\n    display: none; }\n  :host-context(.nb-theme-default) ngx-room-selector, :host-context(.nb-theme-default) ngx-player {\n    width: 100%;\n    border: none; }\n  :host-context(.nb-theme-default) nb-card {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    :host-context(.nb-theme-default) nb-card .collapse {\n      display: inline-block;\n      position: absolute;\n      top: 0.5rem;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3rem;\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card .collapse:focus {\n        outline: none; } }\n\n:host-context(.nb-theme-cosmic) ngx-room-selector {\n  width: 70%;\n  border-right: 2px solid #342e73;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 150 150%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23ebeef2%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 2_svg%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cline class%3D%22cls-1%22 x1%3D%2275%22 x2%3D%2275%22 y2%3D%22150%22%2F%3E%3Cline class%3D%22cls-1%22 x1%3D%22150%22 y1%3D%2275%22 y2%3D%2275%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") repeat;\n  background-size: 75px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 150 150%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23342e73%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 2_svg%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cline class%3D%22cls-1%22 x1%3D%2275%22 x2%3D%2275%22 y2%3D%22150%22%2F%3E%3Cline class%3D%22cls-1%22 x1%3D%22150%22 y1%3D%2275%22 y2%3D%2275%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E%0D\"); }\n\n:host-context(.nb-theme-cosmic) ngx-player {\n  width: 30%; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) ngx-room-selector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host-context(.nb-theme-cosmic) ngx-room-selector /deep/ .room-selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-grid-column-align: center;\n        justify-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 auto;\n    width: 90%;\n    max-width: 650px;\n    padding-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic).expanded ngx-room-selector {\n    display: none; }\n  :host-context(.nb-theme-cosmic) ngx-room-selector, :host-context(.nb-theme-cosmic) ngx-player {\n    width: 100%;\n    border: none; }\n  :host-context(.nb-theme-cosmic) nb-card {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    :host-context(.nb-theme-cosmic) nb-card .collapse {\n      display: inline-block;\n      position: absolute;\n      top: 0.5rem;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3rem;\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) nb-card .collapse:focus {\n        outline: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    RoomsComponent.prototype.select = function (roomNumber) {
        if (this.isSelected(roomNumber)) {
            this.expand();
        }
        else {
            this.collapse();
        }
        this.selected = roomNumber;
    };
    RoomsComponent.prototype.expand = function () {
        this.expanded = true;
    };
    RoomsComponent.prototype.collapse = function () {
        this.expanded = false;
    };
    RoomsComponent.prototype.isCollapsed = function () {
        return !this.expanded;
    };
    RoomsComponent.prototype.isSelected = function (roomNumber) {
        return this.selected === roomNumber;
    };
    RoomsComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.expanded'),
        __metadata("design:type", Boolean)
    ], RoomsComponent.prototype, "expanded", void 0);
    RoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-rooms',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/rooms.component.scss")],
            template: "\n    <nb-card [size]=\"breakpoint.width >= breakpoints.sm ? 'large' : 'medium'\">\n      <i (click)=\"collapse()\" class=\"nb-arrow-down collapse\" [hidden]=\"isCollapsed()\"></i>\n      <ngx-room-selector (select)=\"select($event)\"></ngx-room-selector>\n      <ngx-player [collapsed]=\"isCollapsed() && breakpoint.width <= breakpoints.md\"></ngx-player>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"xlarge\">\r\n  <nb-card-header>\r\n    <div class=\"cameras-card-header\">\r\n      <span class=\"cameras-card-title\">Security Cameras</span>\r\n      <span class=\"cameras-filter\">\r\n        <a [class.active]=\"isSingleView\" (click)=\"isSingleView = true\">\r\n          <i class=\"nb-square\"></i>\r\n        </a>\r\n        <a [class.active]=\"!isSingleView\" (click)=\"isSingleView = false\">\r\n          <i class=\"nb-grid-a\"></i>\r\n        </a>\r\n      </span>\r\n    </div>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"cameras single-view\" *ngIf=\"isSingleView\">\r\n      <div class=\"camera\" [style.background-image]=\"'url(' + selectedCamera.source + ')'\">\r\n        <span>{{ selectedCamera.title }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cameras\" *ngIf=\"!isSingleView\">\r\n      <div class=\"camera col-sm-6\" *ngFor=\"let camera of cameras\" [style.background-image]=\"'url(' + camera.source + ')'\"\r\n           (click)=\"selectCamera(camera)\">\r\n        <span>{{ camera.title }}</span>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <nb-actions size=\"medium\" fullWidth>\r\n      <nb-action>\r\n        <i class=\"nb-pause-outline\"></i><span>Pause</span>\r\n      </nb-action>\r\n      <nb-action>\r\n        <i class=\"nb-list\"></i><span>Logs</span>\r\n      </nb-action>\r\n      <nb-action>\r\n        <i class=\"nb-search\"></i><span>Search</span>\r\n      </nb-action>\r\n      <nb-action>\r\n        <i class=\"nb-gear\"></i><span>Setup</span>\r\n      </nb-action>\r\n    </nb-actions>\r\n  </nb-card-footer>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  padding: 0;\n  border: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0;\n  position: relative; }\n\n:host-context(.nb-theme-default) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n\n:host-context(.nb-theme-default) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n\n:host-context(.nb-theme-default) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) .cameras-filter a:first-child {\n    border-left: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .cameras-filter a:last-child {\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) .cameras-filter a.active {\n    background-color: #e9edf2;\n    color: #2a2a2a;\n    border: none; }\n\n:host-context(.nb-theme-default) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n  :host-context(.nb-theme-default) .cameras.single-view .camera::before {\n    height: 100%; }\n\n:host-context(.nb-theme-default) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n  :host-context(.nb-theme-default) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Exo;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n  :host-context(.nb-theme-default) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  :host-context(.nb-theme-default) .camera:hover::before {\n    opacity: 0; }\n\n:host-context(.nb-theme-default) nb-action {\n  padding: 0 0.5rem 0 0; }\n  :host-context(.nb-theme-default) nb-action i {\n    color: #a4abb3;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n  :host-context(.nb-theme-default) nb-action span {\n    font-family: Exo;\n    font-weight: 600;\n    color: #2a2a2a;\n    text-transform: uppercase; }\n\n@media (max-width: 1199px) {\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-default) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-default) nb-action span {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  padding: 0;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a:first-child {\n    border-left: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a:last-child {\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a.active {\n    background-color: #494299;\n    color: #ffffff;\n    border: none; }\n\n:host-context(.nb-theme-cosmic) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .cameras.single-view .camera::before {\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n  :host-context(.nb-theme-cosmic) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Exo;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n  :host-context(.nb-theme-cosmic) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  :host-context(.nb-theme-cosmic) .camera:hover::before {\n    opacity: 0; }\n\n:host-context(.nb-theme-cosmic) nb-action {\n  padding: 0 0.5rem 0 0; }\n  :host-context(.nb-theme-cosmic) nb-action i {\n    color: #a1a1e5;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-action span {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) .cameras-filter a.active {\n  color: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .camera span {\n  background: rgba(88, 73, 184, 0.5); }\n\n:host-context(.nb-theme-cosmic) .camera::before {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n:host-context(.nb-theme-cosmic) nb-action span {\n  font-weight: 500; }\n\n@media (max-width: 1199px) {\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) nb-action span {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityCamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecurityCamerasComponent = /** @class */ (function () {
    function SecurityCamerasComponent() {
        this.cameras = [{
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            }, {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            }, {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            }, {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            }];
        this.selectedCamera = this.cameras[0];
        this.userMenu = [{
                title: 'Profile',
            }, {
                title: 'Log out',
            }];
        this.isSingleView = false;
    }
    SecurityCamerasComponent.prototype.selectCamera = function (camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    };
    SecurityCamerasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-security-cameras',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.html"),
        })
    ], SecurityCamerasComponent);
    return SecurityCamerasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolarComponent = /** @class */ (function () {
    function SolarComponent(theme) {
        this.theme = theme;
        this.value = 0;
        this.option = {};
    }
    Object.defineProperty(SolarComponent.prototype, "chartValue", {
        set: function (value) {
            this.value = value;
            if (this.option.series) {
                this.option.series[0].data[0].value = value;
                this.option.series[0].data[1].value = 100 - value;
                this.option.series[1].data[0].value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    SolarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var solarTheme = config.variables.solar;
            _this.option = Object.assign({}, {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'center',
                                        formatter: '{d}%',
                                        textStyle: {
                                            fontSize: '22',
                                            fontFamily: config.variables.fontSecondary,
                                            fontWeight: '600',
                                            color: config.variables.fgHeading,
                                        },
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 0,
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 3,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 100 - _this.value,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: config.variables.layoutBg,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'inner',
                                        show: false,
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 7,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 28,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'none',
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    };
    SolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartValue'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SolarComponent.prototype, "chartValue", null);
    SolarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-solar',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.scss")],
            template: "\n    <nb-card size=\"xsmall\" class=\"solar-card\">\n      <nb-card-header>Solar Energy Consumption</nb-card-header>\n      <nb-card-body>\n        <div echarts [options]=\"option\" class=\"echart\">\n        </div>\n        <div class=\"info\">\n          <div class=\"value\">6. 421 kWh</div>\n          <div class=\"details\"><span>out of</span> 8.421 kWh</div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], SolarComponent);
    return SolarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.375rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-default) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #b57fff, #8a7fff);\n      box-shadow: 0 0 0 0 #896ddb, 0 0 0 0 #9f7fff; }\n    :host-context(.nb-theme-default) nb-card .icon.success {\n      background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n      box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98; }\n    :host-context(.nb-theme-default) nb-card .icon.info {\n      background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n      box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n    :host-context(.nb-theme-default) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 0 0 0 #db9d00, 0 0 0 0 #ffb600; }\n  :host-context(.nb-theme-default) nb-card:hover {\n    background: white; }\n    :host-context(.nb-theme-default) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #bf91ff, #9a91ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #5be1bd, #5be190); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #65ccff, #65b2ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-default) nb-card.off {\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card.off .icon {\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card.off .icon.primary, :host-context(.nb-theme-default) nb-card.off .icon.success, :host-context(.nb-theme-default) nb-card.off .icon.info, :host-context(.nb-theme-default) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-default) nb-card.off .title {\n      color: #a4abb3; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.5rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #ad59ff, #7659ff);\n      box-shadow: 0 3px 0 0 #7e4ddb, 0 2px 8px 0 #9259ff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.success {\n      background-image: linear-gradient(to right, #00d9bf, #00d977);\n      box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.info {\n      background-image: linear-gradient(to right, #00b3ff, #0088ff);\n      box-shadow: 0 3px 0 0 #0087db, 0 2px 8px 0 #009dff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    background: #463f92; }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #b970ff, #8970ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #24dec8, #24de8a); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #24bdff, #2499ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-cosmic) nb-card.off {\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) nb-card.off .icon {\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) nb-card.off .icon.primary, :host-context(.nb-theme-cosmic) nb-card.off .icon.success, :host-context(.nb-theme-cosmic) nb-card.off .icon.info, :host-context(.nb-theme-cosmic) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-cosmic) nb-card.off .title {\n      color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) nb-card.off .icon-container {\n  border-right: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusCardComponent = /** @class */ (function () {
    function StatusCardComponent() {
        this.on = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatusCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatusCardComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StatusCardComponent.prototype, "on", void 0);
    StatusCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-status-card',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.scss")],
            template: "\n    <nb-card (click)=\"on = !on\" [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ on ? 'ON' : 'OFF' }}</div>\n      </div>\n    </nb-card>\n  ",
        })
    ], StatusCardComponent);
    return StatusCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\r\n  <div class=\"team-photo\">\r\n    <a href=\"mailto:contact@akveo.com\">\r\n      <button type=\"button\" class=\"btn btn-success btn-icon team-link\">\r\n        <i class=\"ion-paper-airplane\"></i>\r\n      </button>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"team-info\">\r\n    <div class=\"team-title\">\r\n      <h2>Akveo Team</h2>\r\n    </div>\r\n    <div class=\"team-subtitle\">Design & Development</div>\r\n    <div class=\"team-bio\">\r\n      We're small team of fullstack software experts. We're crazy about creation of modern and secure software. We help to make\r\n      your product amazing.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"links\">\r\n    <a href=\"https://www.akveo.com\" target=\"_blank\">\r\n      <i class=\"ion-ios-world-outline\"></i>\r\n    </a>\r\n    <a href=\"https://www.facebook.com/akveo\" target=\"_blank\">\r\n      <i class=\"ion-social-facebook\"></i>\r\n    </a>\r\n    <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\">\r\n      <i class=\"ion-social-twitter\"></i>\r\n    </a>\r\n    <a href=\"https://github.com/akveo\" target=\"_blank\">\r\n      <i class=\"ion-social-github\"></i>\r\n    </a>\r\n  </div>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-default) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(235, 239, 245, 0.4), 0 0 12px 0 rgba(64, 220, 126, 0.2); }\n\n:host-context(.nb-theme-default) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-default) .team-info .team-title {\n    color: #2a2a2a;\n    font-family: Exo; }\n    :host-context(.nb-theme-default) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .team-info .team-bio {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-default) .links a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) .links a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-cosmic) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(47, 41, 107, 0.4), 0 0 12px 0 rgba(0, 249, 166, 0.2); }\n\n:host-context(.nb-theme-cosmic) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-title {\n    color: #ffffff;\n    font-family: Exo; }\n    :host-context(.nb-theme-cosmic) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a1a1e5;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .team-info .team-bio {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-cosmic) .links a {\n    text-decoration: none;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .links a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-team',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.html"),
        })
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAGQOLbQAAU3zwM4AAAAASUVORK5CYII=\">\r\n\r\n<div class=\"svg-container\">\r\n  <svg #svgRoot xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n       [attr.viewBox]=\"styles.viewBox\" preserveAspectRatio=\"xMinYMin meet\" (mousedown)=\"mouseDown($event)\">\r\n    <defs>\r\n\r\n      <filter [attr.id]=\"'blurFilter' + svgControlId\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\r\n        <feGaussianBlur in=\"SourceGraphic\" [attr.stdDeviation]=\"styles.blurRadius\" />\r\n        <feComponentTransfer>\r\n          <feFuncA type=\"discrete\" tableValues=\"1 1\"/>\r\n        </feComponentTransfer>\r\n      </filter>\r\n\r\n      <clipPath [attr.id]=\"'sliderClip' + svgControlId\">\r\n        <path [attr.d]=\"styles.clipPathStr\" stroke=\"black\"></path>\r\n      </clipPath>\r\n\r\n    </defs>\r\n    <g [attr.transform]=\"styles.arcTranslateStr\">\r\n\r\n      <g class=\"toClip\" [attr.clip-path]=\"'url(#sliderClip' + svgControlId +')'\">\r\n        <g class=\"toFilter\" [attr.filter]=\"'url(#blurFilter' + svgControlId +')'\">\r\n          <path [attr.d]=\"arc.d\" [attr.fill]=\"arc.color\" *ngFor=\"let arc of styles.gradArcs\"></path>\r\n        </g>\r\n        <!-- ngFor is a quirk fix for webkit rendering issues -->\r\n        <path [attr.d]=\"styles.nonSelectedArc.d\" [attr.fill]=\"styles.nonSelectedArc.color\" *ngFor=\"let number of [0,1,2,3,4,5]\"></path>\r\n      </g>\r\n\r\n      <circle [attr.cx]=\"styles.thumbPosition.x\" [attr.cy]=\"styles.thumbPosition.y\" [attr.r]=\"pinRadius\"\r\n              [attr.stroke-width]=\"thumbBorder / scaleFactor\" class=\"circle\"></circle>\r\n    </g>\r\n  </svg>\r\n</div>\r\n\r\n<div class=\"temperature-bg\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"power-bg\" [ngClass]=\"{'off': off}\" (click)=\"switchPower()\">\r\n  <i class=\"nb-power-circled\"></i>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  position: relative; }\n  :host-context(.nb-theme-default) img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n  :host-context(.nb-theme-default) .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  :host-context(.nb-theme-default) .circle {\n    fill: #ffffff;\n    stroke: #40dc7e; }\n  :host-context(.nb-theme-default) .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 2px solid #ebeef2; }\n  :host-context(.nb-theme-default) .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #ffffff;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #2a2a2a;\n    border: 2px solid #ebeef2; }\n    :host-context(.nb-theme-default) .power-bg:hover {\n      background-color: white; }\n    :host-context(.nb-theme-default) .power-bg:active {\n      background-color: #f2f2f2;\n      box-shadow: none; }\n    :host-context(.nb-theme-default) .power-bg.off {\n      color: #a4abb3;\n      text-shadow: none; }\n\n:host-context(.nb-theme-cosmic) {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n  :host-context(.nb-theme-cosmic) .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  :host-context(.nb-theme-cosmic) .circle {\n    fill: #3d3780;\n    stroke: #00d977; }\n  :host-context(.nb-theme-cosmic) .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 2px solid #342e73;\n    background-color: #322c72;\n    border: none; }\n  :host-context(.nb-theme-cosmic) .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #3d3780;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #ffffff;\n    border: 2px solid #342e73; }\n    :host-context(.nb-theme-cosmic) .power-bg:hover {\n      background-color: #463f92; }\n    :host-context(.nb-theme-cosmic) .power-bg:active {\n      background-color: #352f6e;\n      box-shadow: none; }\n    :host-context(.nb-theme-cosmic) .power-bg.off {\n      color: #a1a1e5;\n      text-shadow: none; }\n  :host-context(.nb-theme-cosmic) .circle {\n    fill: #ffffff;\n    stroke: #ffffff; }\n  :host-context(.nb-theme-cosmic) .power-bg {\n    border: none;\n    box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n    text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureDraggerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VIEW_BOX_SIZE = 300;
var TemperatureDraggerComponent = /** @class */ (function () {
    function TemperatureDraggerComponent() {
        this.fillColors = '#2ec6ff';
        this.disableArcColor = '#999999';
        this.bottomAngle = 90;
        this.arcThickness = 18; // CSS pixels
        this.thumbRadius = 16; // CSS pixels
        this.thumbBorder = 3;
        this.maxLeap = 0.4;
        this.value = 50;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.min = 0; // min output value
        this.max = 100; // max output value
        this.step = 0.1;
        this.power = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.off = false;
        this.svgControlId = new Date().getTime();
        this.scaleFactor = 1;
        this.bottomAngleRad = 0;
        this.radius = 100;
        this.translateXValue = 0;
        this.translateYValue = 0;
        this.thickness = 6;
        this.pinRadius = 10;
        this.colors = [];
        this.styles = {
            viewBox: '0 0 300 300',
            arcTranslateStr: 'translate(0, 0)',
            clipPathStr: '',
            gradArcs: [],
            nonSelectedArc: {},
            thumbPosition: { x: 0, y: 0 },
            blurRadius: 15,
        };
        this.isMouseDown = false;
        this.init = false;
        this.oldValue = this.value;
    }
    TemperatureDraggerComponent_1 = TemperatureDraggerComponent;
    Object.defineProperty(TemperatureDraggerComponent.prototype, "setValue", {
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    TemperatureDraggerComponent.prototype.onMouseUp = function (event) {
        this.recalculateValue(event);
        this.isMouseDown = false;
    };
    TemperatureDraggerComponent.prototype.onMouseMove = function (event) {
        this.recalculateValue(event);
    };
    TemperatureDraggerComponent.prototype.onResize = function (event) {
        this.invalidate();
    };
    TemperatureDraggerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // IE fix
        setTimeout(function () {
            _this.invalidate();
            _this.init = true;
        });
    };
    TemperatureDraggerComponent.prototype.ngOnChanges = function () {
        if (this.init) {
            this.invalidate();
        }
    };
    TemperatureDraggerComponent.prototype.mouseDown = function (event) {
        this.isMouseDown = true;
        if (!this.off) {
            this.recalculateValue(event, true);
        }
    };
    TemperatureDraggerComponent.prototype.switchPower = function () {
        this.off = !this.off;
        this.power.emit(!this.off);
        if (this.off) {
            this.oldValue = this.value;
            this.value = this.min;
        }
        else {
            this.value = this.oldValue;
        }
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.invalidate = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.calculateVars();
        this.invalidateClipPathStr();
        this.invalidateGradientArcs();
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.calculateVars = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.colors = (typeof this.fillColors === 'string') ? [this.fillColors] : this.fillColors;
        var halfAngle = this.bottomAngleRad / 2;
        var svgBoundingRect = this.svgRoot.nativeElement.getBoundingClientRect();
        var svgAreaFactor = svgBoundingRect.height && svgBoundingRect.width / svgBoundingRect.height || 1;
        var svgHeight = VIEW_BOX_SIZE / svgAreaFactor;
        var thumbMaxRadius = this.thumbRadius + this.thumbBorder;
        var thumbMargin = 2 * thumbMaxRadius > this.arcThickness
            ? (thumbMaxRadius - this.arcThickness / 2) / this.scaleFactor
            : 0;
        this.scaleFactor = svgBoundingRect.width / VIEW_BOX_SIZE || 1;
        this.styles.viewBox = "0 0 " + VIEW_BOX_SIZE + " " + svgHeight;
        var circleFactor = this.bottomAngleRad <= Math.PI
            ? (2 / (1 + Math.cos(halfAngle)))
            : (2 * Math.sin(halfAngle) / (1 + Math.cos(halfAngle)));
        if (circleFactor > svgAreaFactor) {
            if (this.bottomAngleRad > Math.PI) {
                this.radius = (VIEW_BOX_SIZE - 2 * thumbMargin) / (2 * Math.sin(halfAngle));
            }
            else {
                this.radius = VIEW_BOX_SIZE / 2 - thumbMargin;
            }
        }
        else {
            this.radius = (svgHeight - 2 * thumbMargin) / (1 + Math.cos(halfAngle));
        }
        this.translateXValue = VIEW_BOX_SIZE / 2 - this.radius;
        this.translateYValue = (svgHeight) / 2 - this.radius * (1 + Math.cos(halfAngle)) / 2;
        this.styles.arcTranslateStr = "translate(" + this.translateXValue + ", " + this.translateYValue + ")";
        this.thickness = this.arcThickness / this.scaleFactor;
        this.pinRadius = this.thumbRadius / this.scaleFactor;
    };
    TemperatureDraggerComponent.prototype.calculateClipPathSettings = function () {
        var halfAngle = this.bottomAngleRad / 2;
        var innerRadius = this.radius - this.thickness;
        var xStartMultiplier = 1 - Math.sin(halfAngle);
        var yMultiplier = 1 + Math.cos(halfAngle);
        var xEndMultiplier = 1 + Math.sin(halfAngle);
        return {
            outer: {
                start: {
                    x: xStartMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                end: {
                    x: xEndMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                radius: this.radius,
            },
            inner: {
                start: {
                    x: xStartMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                end: {
                    x: xEndMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                radius: innerRadius,
            },
            thickness: this.thickness,
            big: this.bottomAngleRad < Math.PI ? '1' : '0',
        };
    };
    TemperatureDraggerComponent.prototype.invalidateClipPathStr = function () {
        var s = this.calculateClipPathSettings();
        var path = "M " + s.outer.start.x + "," + s.outer.start.y; // Start at startangle top
        // Outer arc
        // Draw an arc of radius 'radius'
        // Arc details...
        path += " A " + s.outer.radius + "," + s.outer.radius + "\n       0 " + s.big + " 1\n       " + s.outer.end.x + "," + s.outer.end.y; // Arc goes to top end angle coordinate
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.inner.end.x + "," + s.inner.end.y;
        // Inner arc
        path += " A " + s.inner.radius + "," + s.inner.radius + "\n       1 " + s.big + " 0\n       " + s.inner.start.x + "," + s.inner.start.y;
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.outer.start.x + "," + s.outer.start.y;
        // Close path
        path += ' Z';
        this.styles.clipPathStr = path;
    };
    TemperatureDraggerComponent.prototype.calculateGradientConePaths = function (angleStep) {
        var radius = this.radius;
        function calcX(angle) {
            return radius * (1 - 2 * Math.sin(angle));
        }
        function calcY(angle) {
            return radius * (1 + 2 * Math.cos(angle));
        }
        var gradArray = [];
        for (var i = 0, currentAngle = this.bottomAngleRad / 2; i < this.colors.length; i++, currentAngle += angleStep) {
            gradArray.push({
                start: { x: calcX(currentAngle), y: calcY(currentAngle) },
                end: { x: calcX(currentAngle + angleStep), y: calcY(currentAngle + angleStep) },
                big: Math.PI <= angleStep ? 1 : 0,
            });
        }
        return gradArray;
    };
    TemperatureDraggerComponent.prototype.invalidateGradientArcs = function () {
        var radius = this.radius;
        function getArc(des) {
            return "M " + radius + "," + radius + "\n         L " + des.start.x + "," + des.start.y + "\n         A " + 2 * radius + "," + 2 * radius + "\n         0 " + des.big + " 1\n         " + des.end.x + "," + des.end.y + "\n         Z";
        }
        var angleStep = (2 * Math.PI - this.bottomAngleRad) / this.colors.length;
        var s = this.calculateGradientConePaths(angleStep);
        this.styles.gradArcs = [];
        for (var i = 0; i < s.length; i++) {
            var si = s[i];
            var arcValue = getArc(si);
            this.styles.gradArcs.push({
                color: this.colors[i],
                d: arcValue,
            });
        }
        this.styles.blurRadius = 2 * radius * Math.sin(angleStep / 6);
    };
    TemperatureDraggerComponent.prototype.invalidateNonSelectedArc = function () {
        var angle = this.bottomAngleRad / 2 + (1 - this.getValuePercentage()) * (2 * Math.PI - this.bottomAngleRad);
        this.styles.nonSelectedArc = {
            color: this.disableArcColor,
            d: "M " + this.radius + "," + this.radius + "\n       L " + this.radius + "," + 3 * this.radius + "\n       A " + 2 * this.radius + "," + 2 * this.radius + "\n       1 " + (angle > Math.PI ? '1' : '0') + " 0\n       " + (this.radius + this.radius * 2 * Math.sin(angle)) + "," + (this.radius + this.radius * 2 * Math.cos(angle)) + "\n       Z",
        };
    };
    TemperatureDraggerComponent.prototype.invalidatePinPosition = function () {
        var radiusOffset = this.thickness / 2;
        var curveRadius = this.radius - radiusOffset;
        var actualAngle = (2 * Math.PI - this.bottomAngleRad) * this.getValuePercentage() + this.bottomAngleRad / 2;
        this.styles.thumbPosition = {
            x: curveRadius * (1 - Math.sin(actualAngle)) + radiusOffset,
            y: curveRadius * (1 + Math.cos(actualAngle)) + radiusOffset,
        };
        this.invalidateNonSelectedArc();
    };
    TemperatureDraggerComponent.prototype.recalculateValue = function (event, allowJumping) {
        if (allowJumping === void 0) { allowJumping = false; }
        if (this.isMouseDown && !this.off) {
            var rect = this.svgRoot.nativeElement.getBoundingClientRect();
            var center = {
                x: rect.left + VIEW_BOX_SIZE * this.scaleFactor / 2,
                y: rect.top + (this.translateYValue + this.radius) * this.scaleFactor,
            };
            var actualAngle = Math.atan2(center.x - event.clientX, event.clientY - center.y);
            if (actualAngle < 0) {
                actualAngle = actualAngle + 2 * Math.PI;
            }
            var previousRelativeValue = this.getValuePercentage();
            var relativeValue = 0;
            if (actualAngle < this.bottomAngleRad / 2) {
                relativeValue = 0;
            }
            else if (actualAngle > 2 * Math.PI - this.bottomAngleRad / 2) {
                relativeValue = 1;
            }
            else {
                relativeValue = (actualAngle - this.bottomAngleRad / 2) / (2 * Math.PI - this.bottomAngleRad);
            }
            var value = this.toValueNumber(relativeValue);
            if (this.value !== value && (allowJumping || Math.abs(relativeValue - previousRelativeValue) < this.maxLeap)) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.invalidatePinPosition();
            }
        }
    };
    TemperatureDraggerComponent.prototype.getValuePercentage = function () {
        return (this.value - this.min) / (this.max - this.min);
    };
    TemperatureDraggerComponent.prototype.toValueNumber = function (factor) {
        return Math.round(factor * (this.max - this.min) / this.step) * this.step + this.min;
    };
    TemperatureDraggerComponent.toRad = function (angle) {
        return Math.PI * angle / 180;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('svgRoot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TemperatureDraggerComponent.prototype, "svgRoot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "fillColors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "disableArcColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "bottomAngle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "arcThickness", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "thumbRadius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "thumbBorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "maxLeap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('valueChange'),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TemperatureDraggerComponent.prototype, "setValue", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "power", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onResize", null);
    TemperatureDraggerComponent = TemperatureDraggerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-temperature-dragger',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TemperatureDraggerComponent);
    return TemperatureDraggerComponent;
    var TemperatureDraggerComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\r\n  <nb-tabset fullWidth>\r\n\r\n    <nb-tab tabTitle=\"Temperature\">\r\n\r\n      <div class=\"slider-container\">\r\n        <ngx-temperature-dragger [(value)]=\"temperature\" (power)=\"temperatureOff = !$event\"\r\n                                 [min]=\"12\" [max]=\"30\" [disableArcColor]=\"colors.layoutBg\"\r\n                                 [fillColors]=\"colors.temperature\">\r\n\r\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': temperatureOff }\">\r\n            <div class=\"value temperature\">\r\n              {{ temperatureOff ? '--' : (temperature | ngxRound) }}\r\n            </div>\r\n            <div class=\"desc\">\r\n              Celsius\r\n            </div>\r\n          </div>\r\n        </ngx-temperature-dragger>\r\n      </div>\r\n\r\n      <div [(ngModel)]=\"temperatureMode\" ngbRadioGroup data-toggle=\"buttons\"\r\n           class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width\">\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\r\n        </label>\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\r\n        </label>\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\r\n        </label>\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\r\n        </label>\r\n      </div>\r\n    </nb-tab>\r\n\r\n    <nb-tab tabTitle=\"Humidity\">\r\n\r\n      <div class=\"slider-container\">\r\n        <ngx-temperature-dragger [(value)]=\"humidity\" (power)=\"humidityOff = !$event\"\r\n                                 [min]=\"0\" [max]=\"100\" [disableArcColor]=\"colors.layoutBg\"\r\n                                 [fillColors]=\"colors.temperature\">\r\n\r\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': humidityOff }\">\r\n            <div class=\"value humidity\">\r\n              {{ humidityOff ? '--' : (humidity | ngxRound) }}\r\n            </div>\r\n          </div>\r\n        </ngx-temperature-dragger>\r\n      </div>\r\n\r\n      <div [(ngModel)]=\"humidityMode\" ngbRadioGroup data-toggle=\"buttons\"\r\n           class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width\">\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\r\n        </label>\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\r\n        </label>\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\r\n        </label>\r\n        <label class=\"btn btn-icon\">\r\n          <input type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\r\n        </label>\r\n      </div>\r\n    </nb-tab>\r\n  </nb-tabset>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-default) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-default) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    position: relative;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-default) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a4abb3;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container .desc {\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container.off .value {\n    color: #a4abb3;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-default) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-default) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-default) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .btn-icon.active {\n    border-color: #40dc7e;\n    color: #40dc7e; }\n  :host-context(.nb-theme-default) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-default) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-default) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-cosmic) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-cosmic) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    position: relative;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a1a1e5;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .desc {\n    color: #a1a1e5;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .value {\n    color: #a1a1e5;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .btn-icon.active {\n    border-color: #00f9a6;\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n:host-context(.nb-theme-cosmic) .btn-icon.active {\n  color: #ffffff;\n  border-color: #00f9a6;\n  box-shadow: 0 2px 12px 0 rgba(0, 249, 166, 0.25);\n  background-color: rgba(0, 249, 166, 0.25); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-cosmic) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-cosmic) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.temperature = 24;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidity = 87;
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            _this.colors = config.variables;
        });
    }
    TemperatureComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TemperatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-temperature',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], TemperatureComponent);
    return TemperatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var points = [300, 520, 435, 530, 730, 620, 660, 860];
var TrafficChartComponent = /** @class */ (function () {
    function TrafficChartComponent(theme) {
        this.theme = theme;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.option = {};
    }
    TrafficChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var trafficTheme = config.variables.traffic;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: points,
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: trafficTheme.colorBlack,
                            opacity: 0.06,
                            width: '1',
                        },
                    },
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} MB',
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 8,
                        sampling: 'average',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: trafficTheme.shadowLineDarkBg,
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.shadowLineDarkBg,
                            },
                        },
                        data: points.map(function (p) { return p - 15; }),
                    },
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: trafficTheme.itemColor,
                                borderColor: trafficTheme.itemBorderColor,
                                borderWidth: 2,
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: trafficTheme.itemEmphasisBorderColor,
                                borderWidth: 2,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.lineBg,
                                shadowColor: trafficTheme.lineBg,
                                shadowBlur: trafficTheme.lineShadowBlur,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradTo,
                                    }]),
                                opacity: 1,
                            },
                        },
                        data: points,
                    },
                ],
            });
        });
    };
    TrafficChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-traffic-chart',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.scss")],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], TrafficChartComponent);
    return TrafficChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) /deep/ canvas {\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 120px; }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) /deep/ canvas {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficComponent = /** @class */ (function () {
    function TrafficComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-traffic',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.scss")],
            template: "\n    <nb-card size=\"xsmall\">\n      <nb-card-header>\n        <span>Traffic Consumption</span>\n        <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n          <button type=\"button\" class=\"btn btn-sm\" ngbDropdownToggle\n                  [ngClass]=\"{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n            {{ type }}\n          </button>\n          <ul ngbDropdownMenu class=\"dropdown-menu\">\n            <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n          </ul>\n        </div>\n      </nb-card-header>\n      <nb-card-body class=\"p-0\">\n        <ngx-traffic-chart></ngx-traffic-chart>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], TrafficComponent);
    return TrafficComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\r\n  <nb-card-body>\r\n    <div class=\"location\">\r\n      <span>New York</span>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span>Mon 29 May</span>\r\n    </div>\r\n    <div class=\"daily-forecast\">\r\n      <div class=\"info\">\r\n        <div class=\"temperature\">\r\n          <span>20&deg;</span>\r\n        </div>\r\n        <div class=\"icon\">\r\n          <i class=\"ion-ios-sunny-outline\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"details\">\r\n        <div class=\"parameter\">\r\n          <span class=\"parameter-name\">max</span>\r\n          <span class=\"parameter-value\">23&deg;</span>\r\n        </div>\r\n        <div class=\"parameter\">\r\n          <span class=\"parameter-name\">min</span>\r\n          <span class=\"parameter-value\">19&deg;</span>\r\n        </div>\r\n        <div class=\"parameter\">\r\n          <span class=\"parameter-name\">wind</span>\r\n          <span class=\"parameter-value\">4 km/h</span>\r\n        </div>\r\n        <div class=\"parameter\">\r\n          <span class=\"parameter-name\">hum</span>\r\n          <span class=\"parameter-value\">87%</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"weekly-forecast\">\r\n      <div class=\"day\">\r\n        <span class=\"caption\">Sun</span>\r\n        <i class=\"ion-ios-cloudy-outline\"></i>\r\n        <span class=\"temperature\">17&deg;</span>\r\n      </div>\r\n      <div class=\"day\">\r\n        <span class=\"caption\">Mon</span>\r\n        <i class=\"ion-ios-sunny-outline\"></i>\r\n        <span class=\"temperature\">19&deg;</span>\r\n      </div>\r\n      <div class=\"day\">\r\n        <span class=\"caption\">Tue</span>\r\n        <i class=\"ion-ios-rainy-outline\"></i>\r\n        <span class=\"temperature\">22&deg;</span>\r\n      </div>\r\n      <div class=\"day\">\r\n        <span class=\"caption\">Wed</span>\r\n        <i class=\"ion-ios-partlysunny-outline\"></i>\r\n        <span class=\"temperature\">21&deg;</span>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  background-image: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .location {\n  font-family: Exo;\n  font-size: 2.5rem;\n  font-weight: 400;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .date {\n  font-family: Roboto;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  font-weight: 300; }\n\n:host-context(.nb-theme-default) .daily-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -1.5rem; }\n  :host-context(.nb-theme-default) .daily-forecast .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-default) .daily-forecast .info .temperature {\n      font-size: 5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #2a2a2a;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 2rem; }\n    :host-context(.nb-theme-default) .daily-forecast .info .icon {\n      font-size: 10rem;\n      line-height: 10rem;\n      color: #40dc7e; }\n  :host-context(.nb-theme-default) .daily-forecast .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-default) .daily-forecast .details .parameter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n      :host-context(.nb-theme-default) .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1.25rem;\n        font-weight: 300;\n        line-height: 2rem; }\n      :host-context(.nb-theme-default) .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #2a2a2a;\n        font-weight: 500; }\n\n:host-context(.nb-theme-default) .weekly-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 2rem; }\n  :host-context(.nb-theme-default) .weekly-forecast .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center; }\n    :host-context(.nb-theme-default) .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #2a2a2a;\n      font-weight: 600;\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .weekly-forecast .day i {\n      font-size: 2.5rem;\n      line-height: 2.5rem; }\n    :host-context(.nb-theme-default) .weekly-forecast .day .temperature {\n      color: #2a2a2a;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e); }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .location {\n  font-family: Exo;\n  font-size: 2.5rem;\n  font-weight: 400;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .date {\n  font-family: Roboto;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .daily-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -1.5rem; }\n  :host-context(.nb-theme-cosmic) .daily-forecast .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .info .temperature {\n      font-size: 5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 2rem; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .info .icon {\n      font-size: 10rem;\n      line-height: 10rem;\n      color: #00d977;\n      color: #a1a1e5;\n      text-shadow: 0 3px 0 #665ebd, 0 4px 10px rgba(33, 7, 77, 0.5), 0 2px 10px #928dff; }\n  :host-context(.nb-theme-cosmic) .daily-forecast .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n      :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1.25rem;\n        font-weight: 300;\n        line-height: 2rem; }\n      :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #ffffff;\n        font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) .weekly-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 2rem; }\n  :host-context(.nb-theme-cosmic) .weekly-forecast .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day i {\n      font-size: 2.5rem;\n      line-height: 2.5rem; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day .temperature {\n      color: #ffffff;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-weather',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.html"),
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Kong Ming Data Analysis Platform',
        group: true,
    },
    {
        title: 'UI Features',
        icon: 'nb-keypad',
        link: '/pages/ui-features',
        children: [
            {
                title: 'Buttons',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                link: '/pages/ui-features/tabs',
            },
        ],
    },
    {
        title: 'Performance Analysis',
        icon: 'nb-paper-plane',
        children: [
            {
                title: 'Application Analysis (Min)',
                link: '/pages/perform-ays/appays',
            },
            {
                title: 'Application Statistics',
                link: '/pages/perform-ays/appserv',
            },
            {
                title: 'Interface Analysis',
                link: '/pages/perform-ays/seriays',
            },
        ],
    },
    {
        title: 'Nutch Extension Service',
        icon: 'nb-lightbulb',
        children: [
            {
                title: 'Name Entity Recognition(NER)',
                link: '/pages/nutch-extension/ner',
            },
            {
                title: 'Face Recognition',
                link: '/pages/nutch-extension/face-rec',
            }
        ]
    },
    {
        title: 'Forms',
        icon: 'nb-compose',
        children: [
            {
                title: 'Form Inputs',
                link: '/pages/forms/inputs',
            },
            {
                title: 'Form Layouts',
                link: '/pages/forms/layouts',
            },
        ],
    },
    {
        title: 'Components',
        icon: 'nb-gear',
        children: [
            {
                title: 'Tree',
                link: '/pages/components/tree',
            }, {
                title: 'Notifications',
                link: '/pages/components/notifications',
            },
        ],
    },
    {
        title: 'Maps',
        icon: 'nb-location',
        children: [
            {
                title: 'Google Maps',
                link: '/pages/maps/gmaps',
            },
            {
                title: 'Leaflet Maps',
                link: '/pages/maps/leaflet',
            },
            {
                title: 'Bubble Maps',
                link: '/pages/maps/bubble',
            },
        ],
    },
    {
        title: 'Charts',
        icon: 'nb-bar-chart',
        children: [
            {
                title: 'Echarts',
                link: '/pages/charts/echarts',
            },
            {
                title: 'Charts.js',
                link: '/pages/charts/chartjs',
            },
            {
                title: 'D3',
                link: '/pages/charts/d3',
            },
        ],
    },
    {
        title: 'Editors',
        icon: 'nb-title',
        children: [
            {
                title: 'TinyMCE',
                link: '/pages/editors/tinymce',
            },
        ],
    },
    {
        title: 'Tables',
        icon: 'nb-tables',
        children: [
            {
                title: 'Smart Table',
                link: '/pages/tables/smart-table',
            },
        ],
    },
    {
        title: 'Auth',
        icon: 'nb-locked',
        children: [
            {
                title: 'Login',
                link: '/auth/login',
            },
            {
                title: 'Register',
                link: '/auth/register',
            },
            {
                title: 'Request Password',
                link: '/auth/request-password',
            },
            {
                title: 'Reset Password',
                link: '/auth/reset-password',
            },
        ],
    },
];


/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: 'ui-features',
                loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
            }, {
                path: 'perform-ays',
                loadChildren: './perform-ays/perform-ays.module#PerformAysModule',
            }, {
                path: 'nutch-extension',
                loadChildren: './nutch-extension/nutch-extension.module#NutchExtensionModule',
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule',
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule',
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule',
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-pages',
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map