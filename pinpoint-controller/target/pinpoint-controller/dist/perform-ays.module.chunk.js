webpackJsonp(["perform-ays.module"],{

/***/ "../../../../../src/app/@core/data/applications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/@core/data/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationsService = /** @class */ (function () {
    function ApplicationsService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.mockUrl = '/mock-data/applications.json'; // 测试uri
    }
    /*
        获取所有模块名称
     */
    ApplicationsService.prototype.getApplications = function () {
        var _this = this;
        var requestUrl = '/rest/applications'; // 后端url
        return this.http.get(requestUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* tap */])(function (applications) { return _this.log("fetches applications"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("getApplications", [])));
    };
    /*
         获取相似模块名称
     */
    ApplicationsService.prototype.getApplicationsBySimilar = function (term) {
        var _this = this;
        var requestUrl = '/rest/applications/name'; // 后端url
        if (!term.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])([]);
        }
        //
        var applicationMockUrl = this.mockUrl;
        // 相似模块查询
        return this.http.get(requestUrl + '/' + term) // requestUrl + "/" + term
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("getApplicationsBySimilar"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('searchTerm', [])), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* tap */])(function (_) { return _this.messageService.clear(); }));
    };
    ApplicationsService.prototype.log = function (message) {
        this.messageService.add('ApplicationService: ' + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ApplicationsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ApplicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], ApplicationsService);
    return ApplicationsService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/base-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseResult; });
var BaseResult = /** @class */ (function () {
    function BaseResult() {
    }
    return BaseResult;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/effectives.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectivesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/@core/data/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EffectivesService = /** @class */ (function () {
    function EffectivesService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        // 测试用mock数据地址
        this.mockUrl = '/mock-data/effectives.json';
        this.mockQueryUrl = '/mock-data/effectives-query.json';
    }
    // public get(url: string, body: any, cb, options) {
    //   const ops = Object.assign({}, {params: body}, options);
    //   this.http.get(url, ops).subscribe(data => {
    //     this.format(data, cb, options.notload);
    //   });
    // }
    /*
        获取所有性能数据
     */
    EffectivesService.prototype.getEffectives = function () {
        var _this = this;
        console.log('calling overall.');
        return this.http.get('/rest/effectives') // "/rest/effectives"
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (effectives) { return _this.log("fetches effectives"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getEffecives", [])));
    };
    /*
        获取空数据
     */
    EffectivesService.prototype.getEmptyEffectives = function () {
        console.log('calling empty');
        return this.http.get('/rest/empty');
    };
    EffectivesService.prototype.getEffectivesByConditions = function (start, end, app) {
        var _this = this;
        // return this.http.get<Performance[]>('/mock-data/baseUrl.json');  // 测试mock地址
        this.baseUrl = '/rest/effectives/params?query=';
        this.queryStr = encodeURI('{') +
            this.encodeQuery('start') + ':' +
            this.encodeQuery(start) + ',' +
            this.encodeQuery('end') + ':' +
            this.encodeQuery(end) + ',' +
            this.encodeQuery('appName') + ':' +
            this.encodeQuery(app) +
            encodeURI('}');
        console.log(this.baseUrl + this.queryStr);
        return this.http.get(this.baseUrl + this.queryStr) // this.baseUrl+ this.queryStr
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (effectives) { return _this.log("fetchs effectives"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getEffecitves", [])));
    };
    EffectivesService.prototype.log = function (message) {
        this.messageService.add('Effectives Service: ' + message);
    };
    EffectivesService.prototype.handleError = function (op, result) {
        var _this = this;
        if (op === void 0) { op = 'operation'; }
        return function (error) {
            console.log(error);
            _this.log(op + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    EffectivesService.prototype.encodeQuery = function (param) {
        var slash = '\"';
        return encodeURI(slash) + encodeURI(param) + encodeURI(slash);
    };
    EffectivesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], EffectivesService);
    return EffectivesService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/last-performance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastPerformanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/@core/data/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LastPerformanceService = /** @class */ (function () {
    function LastPerformanceService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        /*
           测试用mockUrl地址集合
         */
        this.mockMaxUrl = '/mock-data/last-max-rsp.json';
        this.mockAvgUrl = '/mock-data/last-avg-rsp.json';
        this.mockMaxReqUrl = '/mock-data/last-max-req.json';
        // 后端接口基地址
        this.baseUrl = '/rest/statistics';
    }
    /*
       测试获取mockUrl数据: Max Response Time
     */
    LastPerformanceService.prototype.getMockMaxRsp = function () {
        return this.http.get(this.mockMaxUrl);
    };
    /*
       获取昨日最大响应时间耗时 Top10
     */
    LastPerformanceService.prototype.getMaxRspFromServer = function () {
        var queryTime = -1; // 当日为0，昨日为-1，明天为1，以此类推
        var uri = '/maxRsp/' + queryTime;
        console.log(this.baseUrl + uri); // 测试接口地址是否正确
        return this.http.get(this.baseUrl + uri);
    };
    /*
       测试获取mockUrl数据: Average Response Time
     */
    LastPerformanceService.prototype.getMockAvgRsp = function () {
        return this.http.get(this.mockAvgUrl);
    };
    /*
      获取昨日平均响应时间耗时Top10
     */
    LastPerformanceService.prototype.getAvgRspFromServer = function () {
        var queryTime = -1; // 当日为0，昨日为-1，明天为1，以此类推
        var uri = '/avgRsp/' + queryTime;
        console.log(this.baseUrl + uri); // 测试接口地址是否正确
        return this.http.get(this.baseUrl + uri);
    };
    /*
       测试获取mockUrl数据: Max Request Time
     */
    LastPerformanceService.prototype.getMockMaxReq = function () {
        return this.http.get(this.mockMaxReqUrl);
    };
    /*
       获取最日最大请求次数Top10
     */
    LastPerformanceService.prototype.getMaxReqFromServer = function () {
        var queryTime = -1; // 当日为0， 昨日为-1， 明天为1， 以此类推
        var uri = '/request/' + queryTime;
        console.log(this.baseUrl + uri);
        return this.http.get(this.baseUrl + uri);
    };
    LastPerformanceService.prototype.log = function (message) {
        this.messageService.add('last-performance max response:' + message);
    };
    LastPerformanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], LastPerformanceService);
    return LastPerformanceService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/uri-check.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UriCheckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UriCheckService = /** @class */ (function () {
    function UriCheckService(http) {
        this.http = http;
        this.mockUrl = '/mock-data/uri-performance-check.json'; // 测试uri
        this.baseUrl = '/rest/uri/params?query='; // 后端URL
    }
    /*
        获取当日性能数据 (mock)
     */
    UriCheckService.prototype.getTodayUriPerformance = function (appName, uri, date) {
        return this.http.get(this.mockUrl);
    };
    /*
        获取当日性能数据
     */
    UriCheckService.prototype.getTodayUriPerformanceFromServer = function (appName, uri, day) {
        var queryStr = encodeURI('{') +
            this.encodeQuery('appName') + ':' +
            (appName === null ? appName : this.encodeQuery(appName)) + ',' +
            this.encodeQuery('uri') + ':' +
            (uri === null ? uri : this.encodeQuery(uri)) + ',' +
            this.encodeQuery('day') + ':' +
            this.encodeQuery(day) +
            encodeURI('}');
        // 测试构造RESTful 接口是否正确
        console.log(this.baseUrl + queryStr);
        return this.http.get(this.baseUrl + queryStr);
    };
    UriCheckService.prototype.encodeQuery = function (param) {
        var slash = '\"';
        return encodeURI(slash) + encodeURI(param) + encodeURI(slash);
    };
    UriCheckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UriCheckService);
    return UriCheckService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/uri-performance.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UriPerformance; });
var UriPerformance = /** @class */ (function () {
    function UriPerformance() {
    }
    return UriPerformance;
}());

;


/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-ays-query/app-ays-query.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"dateForm\">\n  <div class=\"row show-grid form-group\">\n    <div class=\".col-6 .col-md-4\">\n      <label>start:\n        <input class=\"form-control\" formControlName=\"startTime\"/>\n      </label>\n    </div>\n    <div class=\".col-6 .col-md-4\">\n      <label>end:\n        <input class=\"form-control\" formControlName=\"endTime\" />\n      </label>\n    </div>\n    <div class=\".col-6 .col-md-4\">\n      <label>appName:\n        <input #searchBox class=\"form-control\"\n               (keydown)=\"activateVisibility()\"\n               (keyup)=\"search(searchBox.value)\" formControlName=\"appName\"/>\n        <ul class=\"search-result\">\n          <li *ngFor=\"let sim of similarList | async\" (click)=\"patchAppName(sim)\"\n              [hidden]=\"bVisible\">\n            {{sim}}\n          </li>\n        </ul>\n      </label>\n    </div>\n  </div>\n  <div class=\"row show-grid form-group\">\n    <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n      <button class=\"btn btn-success\" (click)=\"queryByConditions()\">性能概述</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-ays-query/app-ays-query.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroSearch private styles */\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: inherit;\n  height: inherit;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none; }\n\n.search-result li:hover {\n  background-color: #607D8B; }\n\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none; }\n\n.search-result li a:hover {\n  color: white; }\n\n.search-result li a:active {\n  color: white; }\n\n#search-box {\n  width: 200px;\n  height: 20px; }\n\nul.search-result {\n  margin-top: 0;\n  padding-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-ays-query/app-ays-query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAysQueryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_effectives_service__ = __webpack_require__("../../../../../src/app/@core/data/effectives.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_applications_service__ = __webpack_require__("../../../../../src/app/@core/data/applications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppAysQueryComponent = /** @class */ (function () {
    function AppAysQueryComponent(http, effectiveService, applicationService, datePipe) {
        this.http = http;
        this.effectiveService = effectiveService;
        this.applicationService = applicationService;
        this.datePipe = datePipe;
        this.performanceOutLists = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // 子控件发射器
        this.performances = [];
        this.appsList = []; // 模块名称集合
        this.bVisible = false; // <li></li>不可见性
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    AppAysQueryComponent.prototype.ngOnInit = function () {
        // 初始化工作
        this.init();
        // 表单预填
        this.patchValues();
        // 设置监听
        this.initKeyboardListener();
    };
    /*
        全量初始化
     */
    AppAysQueryComponent.prototype.init = function () {
        // 初始化表单组件
        this.initComponent();
        // 初始化表单填值
        this.initVariables();
    };
    /*
        初始化变量
     */
    AppAysQueryComponent.prototype.initVariables = function () {
        var _this = this;
        // 表单时间变量填值
        var src; // 未超过当前时间的第5分钟开始区间
        var dst; // 未超过当前时间的第5分钟结束区间
        var periodIn5 = 5 * 60; // 5分钟时间段的unix戳
        var secs = new Date().getTime() / 1000;
        var format = 'yyyy-MM-dd HH:mm'; // 转换格式
        src = new Date((secs - periodIn5 - secs % 300) * 1000); // 开始段时间设置
        dst = new Date((secs - secs % 300) * 1000); // 结束段时间设置
        this.src = this.datePipe.transform(src, format);
        this.dst = this.datePipe.transform(dst, format);
        console.log('src after format: ' + this.src);
        console.log('dst after format: ' + this.dst);
        // 列表名称变量填值
        this.applicationService.getApplications()
            .subscribe(function (apps) {
            _this.appsList = apps;
            // 调试输出
            console.log(apps);
        });
    };
    /*
        初始化键盘监听
     */
    AppAysQueryComponent.prototype.initKeyboardListener = function () {
        var _this = this;
        this.similarList = this.searchTerms.pipe(
        // 每次键盘落下后等待300ms
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* debounceTime */])(300), 
        // 取消检索无变化参数
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // 调用模糊匹配
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["d" /* switchMap */])(function (term) {
            return _this.applicationService.getApplicationsBySimilar(term);
        }));
    };
    /*
        初始化表单组件
     */
    AppAysQueryComponent.prototype.initComponent = function () {
        this.dateForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            startTime: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            endTime: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            appName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
        });
    };
    /*
        初始填充值规则：
     */
    AppAysQueryComponent.prototype.patchValues = function () {
        if (this.dateForm) {
            this.dateForm.patchValue({
                startTime: this.src,
                endTime: this.dst,
            });
        }
        /*
            实时监听值变动并记录
        */
        this.dateForm.valueChanges.subscribe(function (data) {
            console.log('Form Value Changed:', data);
        });
    };
    /*
        根据开始时间、结束时间以及模块名称查询性能AppUriEffective
     */
    AppAysQueryComponent.prototype.queryByConditions = function () {
        var _this = this;
        // 调试信息
        console.log(this.dateForm.value.startTime, this.dateForm.value.endTime, this.dateForm.value.appName);
        // 检查参数完整性
        if (this.dateForm.value.startTime === null ||
            this.dateForm.value.end === null ||
            this.dateForm.value.appName === null) {
            // 现阶段采用Console.log弹出提示,后续采用Modal或者Toast形式
            console.log('query param should not be null');
            return;
        }
        this.effectiveService.getEffectivesByConditions(this.dateForm.value.startTime, this.dateForm.value.endTime, this.dateForm.value.appName)
            .subscribe(function (effectives) {
            _this.performances = effectives;
            // 调试回调参数
            console.log(effectives);
            // 将子控件获取的变量发射至父控件
            _this.performanceOutLists.emit(_this.performances);
        });
    };
    /*
        将检索值推入observable流
     */
    AppAysQueryComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    /*
        触发点击事件将值回填
     */
    AppAysQueryComponent.prototype.patchAppName = function (app) {
        this.dateForm.patchValue({
            appName: app,
        });
        // 去除li的可见性
        this.bVisible = true;
        console.log(this.bVisible);
    };
    /*
        重新获取li可见性
     */
    AppAysQueryComponent.prototype.activateVisibility = function () {
        // 重新获取模块可见性
        this.bVisible = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AppAysQueryComponent.prototype, "performanceOutLists", void 0);
    AppAysQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ays-query',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/app-ays-query/app-ays-query.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/app-ays-query/app-ays-query.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_effectives_service__["a" /* EffectivesService */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_applications_service__["a" /* ApplicationsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]])
    ], AppAysQueryComponent);
    return AppAysQueryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-ays/app-ays.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-ays-query (performanceOutLists)=\"revDateFromChild($event)\"></ngx-ays-query>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>接口</th>\n    <th>区间内请求数</th>\n    <th>平均相应时间(ms)</th>\n    <th>max(ms)</th>\n    <th>min(ms)</th>\n    <th>3s以上请求数</th>\n    <th>慢请求(大于3s)</th>\n    <th>异常请求</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let performance of performances\">\n    <td> {{ performance.uri }}</td>\n    <td> {{ performance.reqInPeriod }}</td>\n    <td> {{ performance.avgRspTime }}</td>\n    <td> {{ performance.maxRspTime }}</td>\n    <td> {{ performance.minRspTime }}</td>\n    <td> {{ performance.reqOver3s }}</td>\n    <td>\n      <div *ngFor=\"let kv of performance.slowTop10\">\n        <a target=\"_blank\" href=\"{{kv.value}}\">{{kv.name}}</a>\n      </div>\n    </td>\n    <td>\n      <div *ngFor=\"let kv of performance.exceptionTop10\">\n        <a target=\"_blank\" href={{kv.value}}>{{kv.name}}</a>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-ays/app-ays.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-ays/app-ays.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_effectives_service__ = __webpack_require__("../../../../../src/app/@core/data/effectives.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppAysComponent = /** @class */ (function () {
    function AppAysComponent(http, effectiveService, domSanitizer) {
        this.http = http;
        this.effectiveService = effectiveService;
        this.domSanitizer = domSanitizer;
        this.dtOptions = {};
        this.performances = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.sanitizer = domSanitizer;
    }
    AppAysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
        };
        console.log('Entering OnInit');
        // 第一次请求获取一次空数据
        this.effectiveService.getEmptyEffectives()
            .subscribe(function (effectives) {
            _this.performances = effectives;
            _this.dtTrigger.next();
        });
        /*
            Test Mock Data
         */
        // this.http.get('mock-data/effectives.json')
        //   .map(res => res.json())
        //   .subscribe(effectives => {    //     this.performances = effectives;
        //     console.log("hello");
        //     console.log(effectives);
        //     console.log(this.performances);
        //     this.dtTrigger.next();
        //   })
    };
    // 接受子控件回传变量
    AppAysComponent.prototype.revDateFromChild = function (event) {
        this.performances = event;
        // 数据变更重新渲染
        this.rerender();
    };
    // 表格重渲染
    AppAysComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // 销毁表
            dtInstance.destroy();
            // 重新渲染
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */])
    ], AppAysComponent.prototype, "dtElement", void 0);
    AppAysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-app-ays',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/app-ays/app-ays.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/app-ays/app-ays.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_effectives_service__["a" /* EffectivesService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], AppAysComponent);
    return AppAysComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-serv/app-serv.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-max-response-control></ngx-max-response-control>\n<ngx-avg-response-control></ngx-avg-response-control>\n<ngx-max-request-control></ngx-max-request-control>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-serv/app-serv.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/app-serv/app-serv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServComponent; });
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

var AppServComponent = /** @class */ (function () {
    function AppServComponent() {
    }
    AppServComponent.prototype.ngOnInit = function () {
    };
    AppServComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-app-serv',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/app-serv/app-serv.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/app-serv/app-serv.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppServComponent);
    return AppServComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/avg-response-control/avg-response-control.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>昨日均响耗时TOP10</h1>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>模块名称</th>\n    <th>接口</th>\n    <th>均响(ms)</th>\n    <th>详情传送门</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let element of baseResult.data\">\n    <td> {{ element.appName }} </td>\n    <td> {{ element.uri }} </td>\n    <td> {{ element.avgRsp }} </td>\n    <td>\n      <a routerLink={{element.linkage}} [queryParams]=\"{'appName':element.appName,\n                                                      'uri': element.uri}\">传送门</a>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/avg-response-control/avg-response-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/avg-response-control/avg-response-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvgResponseControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_base_result__ = __webpack_require__("../../../../../src/app/@core/data/base-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_last_performance_service__ = __webpack_require__("../../../../../src/app/@core/data/last-performance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvgResponseControlComponent = /** @class */ (function () {
    function AvgResponseControlComponent(lastPerformanceService) {
        this.lastPerformanceService = lastPerformanceService;
        this.baseResult = new __WEBPACK_IMPORTED_MODULE_1__core_data_base_result__["a" /* BaseResult */](); // 后端返回的数据格式
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AvgResponseControlComponent.prototype.ngOnInit = function () {
        // 初始化dtTables
        this.dtOptions = {
            pagingType: 'simple',
            pageLength: 10,
        };
        // // 测试mock json
        // this.getMockAvgRspData();
        //
        // 后端请求
        this.getAvgRspDataFromServer();
    };
    /*
        获取mock数据
     */
    AvgResponseControlComponent.prototype.getMockAvgRspData = function () {
        var _this = this;
        this.lastPerformanceService.getMockAvgRsp()
            .subscribe(function (base) {
            _this.baseResult = base;
            // 测试回调参数
            console.log(base);
            // 设置dtTables
            _this.dtTrigger.next();
        });
    };
    /*
        获取后端返回数据
     */
    AvgResponseControlComponent.prototype.getAvgRspDataFromServer = function () {
        var _this = this;
        this.lastPerformanceService.getAvgRspFromServer()
            .subscribe(function (base) {
            _this.baseResult = base;
            // 测试回调参数
            console.log(base);
            // 设置dtTables
            _this.dtTrigger.next();
        });
    };
    AvgResponseControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-avg-response-control',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/avg-response-control/avg-response-control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/avg-response-control/avg-response-control.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_data_last_performance_service__["a" /* LastPerformanceService */]])
    ], AvgResponseControlComponent);
    return AvgResponseControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/max-request-control/max-request-control.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>昨日请求数TOP10</h1>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>模块名称</th>\n    <th>接口</th>\n    <th>请求数</th>\n    <th>详情传送门</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let element of baseResult.data\">\n    <td> {{ element.appName }} </td>\n    <td> {{ element.uri }} </td>\n    <td> {{ element.requests }} </td>\n    <td>\n      <a routerLink={{element.linkage}} [queryParams]=\"{'appName':element.appName,\n                                                      'uri': element.uri}\">传送门</a>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/max-request-control/max-request-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/max-request-control/max-request-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxRequestControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_base_result__ = __webpack_require__("../../../../../src/app/@core/data/base-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_last_performance_service__ = __webpack_require__("../../../../../src/app/@core/data/last-performance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaxRequestControlComponent = /** @class */ (function () {
    function MaxRequestControlComponent(lastPerformanceService) {
        this.lastPerformanceService = lastPerformanceService;
        this.baseResult = new __WEBPACK_IMPORTED_MODULE_1__core_data_base_result__["a" /* BaseResult */](); // 后端返回的数据格式
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    MaxRequestControlComponent.prototype.ngOnInit = function () {
        // 初始化dtTables
        this.dtOptions = {
            pagingType: 'simple',
            pageLength: 10,
        };
        // // 测试mock json
        // this.getMockMaxReqData();
        // 后端请求
        this.getMaxReqDataFromServer();
    };
    /*
        获取mock数据
     */
    MaxRequestControlComponent.prototype.getMockMaxReqData = function () {
        var _this = this;
        this.lastPerformanceService.getMockMaxReq()
            .subscribe(function (base) {
            _this.baseResult = base;
            // 测试回调参数
            console.log(base);
            // 设置dtTables
            _this.dtTrigger.next();
        });
    };
    /*
        获取后端返回数据
     */
    MaxRequestControlComponent.prototype.getMaxReqDataFromServer = function () {
        var _this = this;
        this.lastPerformanceService.getMaxReqFromServer()
            .subscribe(function (base) {
            _this.baseResult = base;
            // 测试回调参数
            console.log(base);
            // 设置dtTables
            _this.dtTrigger.next();
        });
    };
    MaxRequestControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-max-request-control',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/max-request-control/max-request-control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/max-request-control/max-request-control.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_data_last_performance_service__["a" /* LastPerformanceService */]])
    ], MaxRequestControlComponent);
    return MaxRequestControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/max-response-control/max-response-control.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>昨日最大耗时TOP10</h1>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>模块名称</th>\n    <th>接口</th>\n    <th>最大响应时间(ms)</th>\n    <th>详情传送门</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let element of baseResult.data\">\n    <td> {{ element.appName }} </td>\n    <td> {{ element.uri }} </td>\n    <td> {{ element.maxRsp }} </td>\n    <td>\n      <a routerLink={{element.linkage}} [queryParams]=\"{'appName':element.appName,\n                                                      'uri': element.uri}\">传送门</a>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/max-response-control/max-response-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/max-response-control/max-response-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxResponseControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_base_result__ = __webpack_require__("../../../../../src/app/@core/data/base-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_last_performance_service__ = __webpack_require__("../../../../../src/app/@core/data/last-performance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaxResponseControlComponent = /** @class */ (function () {
    function MaxResponseControlComponent(lastPerformanceService) {
        this.lastPerformanceService = lastPerformanceService;
        this.baseResult = new __WEBPACK_IMPORTED_MODULE_1__core_data_base_result__["a" /* BaseResult */](); // 后端返回的数据格式
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    MaxResponseControlComponent.prototype.ngOnInit = function () {
        // 初始化dtTables
        this.dtOptions = {
            pagingType: 'simple',
            pageLength: 10,
        };
        // // 测试mock json
        // this.getMockMaxRspData();
        //
        // 后端请求
        this.getMaxRspDataFromServer();
    };
    /*
       获取mock数据
     */
    MaxResponseControlComponent.prototype.getMockMaxRspData = function () {
        var _this = this;
        this.lastPerformanceService.getMockMaxRsp()
            .subscribe(function (base) {
            _this.baseResult = base;
            // 测试回调参数
            console.log(base);
            // 设置dtTables
            _this.dtTrigger.next();
        });
    };
    /*
      获取后端返回数据
     */
    MaxResponseControlComponent.prototype.getMaxRspDataFromServer = function () {
        var _this = this;
        this.lastPerformanceService.getMaxRspFromServer()
            .subscribe(function (base) {
            _this.baseResult = base;
            // 测试回调参数
            console.log(base);
            // 设置dtTables
            _this.dtTrigger.next();
        });
    };
    MaxResponseControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-max-response-control',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/max-response-control/max-response-control.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/max-response-control/max-response-control.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_data_last_performance_service__["a" /* LastPerformanceService */]])
    ], MaxResponseControlComponent);
    return MaxResponseControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/perform-ays-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformAysRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_ays_app_ays_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/app-ays/app-ays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_serv_app_serv_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/app-serv/app-serv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__seriv_ays_seriv_ays_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perform_ays_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/perform-ays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__perform_ays_component__["a" /* PerformAysComponent */],
        children: [{
                path: 'appays',
                component: __WEBPACK_IMPORTED_MODULE_1__app_ays_app_ays_component__["a" /* AppAysComponent */],
            }, {
                path: 'appserv',
                component: __WEBPACK_IMPORTED_MODULE_2__app_serv_app_serv_component__["a" /* AppServComponent */],
            }, {
                path: 'seriays',
                component: __WEBPACK_IMPORTED_MODULE_3__seriv_ays_seriv_ays_component__["a" /* SerivAysComponent */],
            }],
    }];
var PerformAysRoutingModule = /** @class */ (function () {
    function PerformAysRoutingModule() {
    }
    PerformAysRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */],
            ],
        })
    ], PerformAysRoutingModule);
    return PerformAysRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_4__perform_ays_component__["a" /* PerformAysComponent */],
    __WEBPACK_IMPORTED_MODULE_1__app_ays_app_ays_component__["a" /* AppAysComponent */],
    __WEBPACK_IMPORTED_MODULE_2__app_serv_app_serv_component__["a" /* AppServComponent */],
    __WEBPACK_IMPORTED_MODULE_3__seriv_ays_seriv_ays_component__["a" /* SerivAysComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/perform-ays.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformAysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PerformAysComponent = /** @class */ (function () {
    function PerformAysComponent() {
    }
    PerformAysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-perform-ays',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], PerformAysComponent);
    return PerformAysComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/perform-ays.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformAysModule", function() { return PerformAysModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perform_ays_routing_module__ = __webpack_require__("../../../../../src/app/pages/perform-ays/perform-ays-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ays_query_app_ays_query_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/app-ays-query/app-ays-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_data_message_service__ = __webpack_require__("../../../../../src/app/@core/data/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_data_applications_service__ = __webpack_require__("../../../../../src/app/@core/data/applications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_data_effectives_service__ = __webpack_require__("../../../../../src/app/@core/data/effectives.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_data_last_performance_service__ = __webpack_require__("../../../../../src/app/@core/data/last-performance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_data_uri_check_service__ = __webpack_require__("../../../../../src/app/@core/data/uri-check.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__max_request_control_max_request_control_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/max-request-control/max-request-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__max_response_control_max_response_control_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/max-response-control/max-response-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__avg_response_control_avg_response_control_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/avg-response-control/avg-response-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__seriv_ays_query_seriv_ays_query_component__ = __webpack_require__("../../../../../src/app/pages/perform-ays/seriv-ays-query/seriv-ays-query.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var PerformAysModule = /** @class */ (function () {
    function PerformAysModule() {
    }
    PerformAysModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__perform_ays_routing_module__["a" /* PerformAysRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__perform_ays_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_3__app_ays_query_app_ays_query_component__["a" /* AppAysQueryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__max_request_control_max_request_control_component__["a" /* MaxRequestControlComponent */],
                __WEBPACK_IMPORTED_MODULE_13__max_response_control_max_response_control_component__["a" /* MaxResponseControlComponent */],
                __WEBPACK_IMPORTED_MODULE_14__avg_response_control_avg_response_control_component__["a" /* AvgResponseControlComponent */],
                __WEBPACK_IMPORTED_MODULE_15__seriv_ays_query_seriv_ays_query_component__["a" /* SerivAysQueryComponent */],
            ]),
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__core_data_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_7__core_data_applications_service__["a" /* ApplicationsService */],
                __WEBPACK_IMPORTED_MODULE_8__core_data_effectives_service__["a" /* EffectivesService */],
                __WEBPACK_IMPORTED_MODULE_9__core_data_last_performance_service__["a" /* LastPerformanceService */],
                __WEBPACK_IMPORTED_MODULE_10__core_data_uri_check_service__["a" /* UriCheckService */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["b" /* BsLocaleService */],
            ],
        })
    ], PerformAysModule);
    return PerformAysModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays-query/seriv-ays-query.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css\">\n\n\n<form [formGroup]=\"searchForm\">\n  <div class=\"row show-grid form-group\">\n    <div class=\".col-6 .col-md-4\">\n      <label>模块名称:\n        <input class=\"form-control\" formControlName=\"appName\"/>\n      </label>\n    </div>\n    <label>&nbsp;&nbsp;&nbsp;</label>\n    <div class=\".col-6 .col-md-4\">\n      <label>接 口:\n        <input class=\"form-control\" formControlName=\"appUri\"/>\n      </label>\n    </div>\n    <label>&nbsp;&nbsp;&nbsp;</label>\n    <div class=\".col-6 .col-md-4\">\n      <label>日 期:\n        <input class=\"form-control\"\n               [minDate]=\"minDate\"\n               [maxDate]=\"maxDate\"\n               #dp=\"bsDatepicker\"\n               bsDatepicker [bsValue]=\"bsValue\"\n               formControlName=\"date\"\n               [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\"/>\n      </label>\n    </div>\n  </div>\n  <div class=\"row show-grid\">\n    <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n      <button class=\"btn btn-success\" (click)=\"queryUriByConditions()\">性能查询</button>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays-query/seriv-ays-query.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays-query/seriv-ays-query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerivAysQueryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_base_result__ = __webpack_require__("../../../../../src/app/@core/data/base-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_uri_check_service__ = __webpack_require__("../../../../../src/app/@core/data/uri-check.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SerivAysQueryComponent = /** @class */ (function () {
    function SerivAysQueryComponent(_localService, datePipe, uriCheckService, route) {
        this._localService = _localService;
        this.datePipe = datePipe;
        this.uriCheckService = uriCheckService;
        this.route = route;
        this.locale = 'en'; // 时区设置
        this.baseResult = new __WEBPACK_IMPORTED_MODULE_2__core_data_base_result__["a" /* BaseResult */](); // 后端返回的数据格式
        this.uriPerformanceLists = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // 子控件发射器
        this.minDate = new Date(2000, 1, 1); // 限制最小日期
        this.maxDate = new Date(2018, 12, 31); // 限制最大日期
        this.bsValue = new Date(); // 默认当前日期
    }
    SerivAysQueryComponent.prototype.ngOnInit = function () {
        // this.applyLocale();
        // 初始化工作
        this.initComponent();
        // 表单预填
        this.patchValues();
    };
    /*
         初始化表单组件
     */
    SerivAysQueryComponent.prototype.initComponent = function () {
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            appName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            appUri: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
        });
        console.log(this.bsValue);
    };
    /*
        初始填充值规则：
     */
    SerivAysQueryComponent.prototype.patchValues = function () {
        var format = 'yyyy-MM-dd';
        if (this, this.searchForm) {
            this.searchForm.patchValue({
                date: this.datePipe.transform(this.bsValue, format),
            });
        }
        // 检测是否有其他页面通过快照传值
        if (this.route.snapshot.queryParamMap.keys.length !== 0) {
            console.log('Value Passes From Other Pages.');
            var _appName = this.route.snapshot.queryParamMap.get('appName');
            var _uri = this.route.snapshot.queryParamMap.get('uri');
            // 值填充
            this.searchForm.patchValue({
                appName: _appName,
                appUri: _uri,
                date: this.datePipe.transform(new Date(this.bsValue.getTime() - 24 * 60 * 60 * 1000), format),
            });
            // 调用查询访问接口
            this.queryUriByConditions();
        }
    };
    /*
        监听查询事件
     */
    SerivAysQueryComponent.prototype.queryUriByConditions = function () {
        var _this = this;
        // 后续日期格式转换以适应后端接口要求
        var format = 'yyyyMMdd';
        // 调试信息
        console.log(this.searchForm.value.appName, this.searchForm.value.appUri, this.searchForm.value.date);
        // 测试用Mock地址
        // this.uriCheckService.getTodayUriPerformance(this.searchForm.value.appName,
        //   this.searchForm.value.appUri, this.searchForm.value.date)
        console.log(this.datePipe.transform(this.searchForm.value.date, format)); // 测试格式转换是否正确
        // 后端接口地址
        this.uriCheckService.getTodayUriPerformanceFromServer(this.searchForm.value.appName, this.searchForm.value.appUri, this.datePipe.transform(this.searchForm.value.date, format))
            .subscribe(function (data) {
            _this.baseResult = data;
            // 测试回调参数
            console.log(data);
            // 将参数发射至父控件
            if (_this.baseResult.status) {
                _this.uriPerformanceLists.emit(_this.baseResult.data);
            }
            else {
                console.log(_this.baseResult.message);
            }
        });
    };
    /*
        区域设置
     */
    SerivAysQueryComponent.prototype.applyLocale = function () {
        this._localService.use(this.locale);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SerivAysQueryComponent.prototype, "uriPerformanceLists", void 0);
    SerivAysQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-seriv-ays-query',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/seriv-ays-query/seriv-ays-query.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/seriv-ays-query/seriv-ays-query.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_5__core_data_uri_check_service__["a" /* UriCheckService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], SerivAysQueryComponent);
    return SerivAysQueryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-seriv-ays-query (uriPerformanceLists)=\"revDataFromChild($event)\"></ngx-seriv-ays-query>\n<div class=\"row\">\n  <h1>模块： {{uriPerformanceLists.appName}}</h1>\n  <h1>&nbsp;&nbsp;&nbsp;</h1>\n  <h1>接口： {{uriPerformanceLists.uri}}</h1>\n</div>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>小时</th>\n    <th>机器id</th>\n    <th>请求数</th>\n    <th>平均响应时间</th>\n    <th>最大响应时间</th>\n    <th>最小响应时间</th>\n    <th>3s以上请求数</th>\n    <th>慢响应TOP10请求</th>\n    <th>异常Top10请求</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let basis of uriPerformanceLists.lists\">\n    <td> {{ basis.hour }}</td>\n    <td> {{ basis.agent }}</td>\n    <td> {{ basis.request }}</td>\n    <td> {{ basis.avgRsp }}</td>\n    <td> {{ basis.maxRsp }}</td>\n    <td> {{ basis.minRsp }}</td>\n    <td> {{ basis.slowCount}}</td>\n    <td>\n      <div *ngFor=\"let hyper of basis.slowTop10\">\n        <a target=\"_blank\" href=\"{{hyper.value}}\">{{hyper.name}}</a>\n      </div>\n    </td>\n    <td>\n      <div *ngFor=\"let hyper of basis.exceptionTop10\">\n        <a target=\"_blank\" href=\"{{hyper.value}}\">{{hyper.name}}</a>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerivAysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_uri_performance__ = __webpack_require__("../../../../../src/app/@core/data/uri-performance.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SerivAysComponent = /** @class */ (function () {
    function SerivAysComponent() {
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.uriPerformanceLists = new __WEBPACK_IMPORTED_MODULE_3__core_data_uri_performance__["a" /* UriPerformance */]();
    }
    SerivAysComponent.prototype.ngOnInit = function () {
        // 初始化变量
        this.initVariables();
        // 初始化dtTables
        this.dtOptions = {
            pagingType: 'simple',
            pageLength: 30,
        };
    };
    SerivAysComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    SerivAysComponent.prototype.initVariables = function () {
        this.uriPerformanceLists.appName = '';
        this.uriPerformanceLists.uri = '';
        this.uriPerformanceLists.lists = [];
    };
    // 接受子控件回传变量
    SerivAysComponent.prototype.revDataFromChild = function (event) {
        this.uriPerformanceLists = event;
        // 数据变更重新渲染
        this.rerender();
    };
    // 表格重渲染
    SerivAysComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // 销毁表
            dtInstance.destroy();
            // 重新渲染
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */])
    ], SerivAysComponent.prototype, "dtElement", void 0);
    SerivAysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-seriv-ays',
            template: __webpack_require__("../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SerivAysComponent);
    return SerivAysComponent;
}());



/***/ })

});
//# sourceMappingURL=perform-ays.module.chunk.js.map