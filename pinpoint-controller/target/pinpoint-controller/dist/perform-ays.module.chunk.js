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
        return this.http.get('/rest/effectives') // "/rest/effectives"
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (effectives) { return _this.log("fetches effectives"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getEffecives", [])));
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
    }
    /*
       测试获取mockUrl数据: Max Response Time
     */
    LastPerformanceService.prototype.getMockMaxRsp = function () {
        return this.http.get(this.mockMaxUrl);
    };
    /*
       测试获取mockUrl数据: Average Response Time
     */
    LastPerformanceService.prototype.getMockAvgRsp = function () {
        return this.http.get(this.mockAvgUrl);
    };
    /*
       测试获取mockUrl数据: Max Request Time
     */
    LastPerformanceService.prototype.getMockMaxReq = function () {
        return this.http.get(this.mockMaxReqUrl);
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

/***/ "../../../../../src/app/@core/data/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
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
    }
    /*
        获取当日性能数据
     */
    UriCheckService.prototype.getTodayUriPerformance = function (appName, uri, date) {
        return this.http.get(this.mockUrl);
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
        this.effectiveService.getEffectives()
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

module.exports = "<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>模块名称</th>\n    <th>接口</th>\n    <th>均响(ms)</th>\n    <th>详情传送门</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let element of baseResult.data\">\n    <td> {{ element.appName }} </td>\n    <td> {{ element.uri }} </td>\n    <td> {{ element.avgRsp }} </td>\n    <td> {{ element.linkage }} </td>\n  </tr>\n  </tbody>\n</table>\n"

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
        // 测试mock json
        this.getMockAvgRspData();
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

module.exports = "<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>模块名称</th>\n    <th>接口</th>\n    <th>请求数</th>\n    <th>详情传送门</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let element of baseResult.data\">\n    <td> {{ element.appName }} </td>\n    <td> {{ element.uri }} </td>\n    <td> {{ element.requests }} </td>\n    <td> {{ element.linkage }} </td>\n  </tr>\n  </tbody>\n</table>\n"

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
        // 测试mock json
        this.getMockMaxReqData();
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

module.exports = "<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>模块名称</th>\n    <th>接口</th>\n    <th>最大响应时间(ms)</th>\n    <th>详情传送门</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let element of baseResult.data\">\n    <td> {{ element.appName }} </td>\n    <td> {{ element.uri }} </td>\n    <td> {{ element.maxRsp }} </td>\n    <td> {{ element.linkage }} </td>\n  </tr>\n  </tbody>\n</table>\n"

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
        // 测试mock json
        this.getMockMaxRspData();
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
    function SerivAysQueryComponent(_localService, datePipe, uriCheckService) {
        this._localService = _localService;
        this.datePipe = datePipe;
        this.uriCheckService = uriCheckService;
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
    };
    /*
        监听查询事件
     */
    SerivAysQueryComponent.prototype.queryUriByConditions = function () {
        var _this = this;
        // 调试信息
        console.log(this.searchForm.value.appName, this.searchForm.value.appUri, this.searchForm.value.date);
        this.uriCheckService.getTodayUriPerformance(this.searchForm.value.appName, this.searchForm.value.appUri, this.searchForm.value.date)
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
            __WEBPACK_IMPORTED_MODULE_5__core_data_uri_check_service__["a" /* UriCheckService */]])
    ], SerivAysQueryComponent);
    return SerivAysQueryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/perform-ays/seriv-ays/seriv-ays.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-seriv-ays-query (uriPerformanceLists)=\"revDataFromChild($event)\"></ngx-seriv-ays-query>\n<div class=\"row\">\n  <h1>模块： {{uriPerformanceLists.appName}}</h1>\n  <h1>&nbsp;&nbsp;&nbsp;</h1>\n  <h1>接口： {{uriPerformanceLists.uri}}</h1>\n</div>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead>\n  <tr>\n    <th>小时</th>\n    <th>机器id</th>\n    <th>请求数</th>\n    <th>平均响应时间</th>\n    <th>最大响应时间</th>\n    <th>最小响应时间</th>\n    <th>3s以上请求数</th>\n    <th>异常Top10请求</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let basis of uriPerformanceLists.lists\">\n    <td> {{ basis.hour }}</td>\n    <td> {{ basis.id }}</td>\n    <td> {{ basis.amount }}</td>\n    <td> {{ basis.avgRsp }}</td>\n    <td> {{ basis.maxRsp }}</td>\n    <td> {{ basis.minRsp }}</td>\n    <td> {{ basis.slow }}</td>\n    <td> {{ basis.exception }}</td>\n  </tr>\n  </tbody>\n</table>\n"

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



/***/ }),

/***/ "../../../../ngx-bootstrap/accordion/accordion-group.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.component.js");



/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        /** Emits when the opened state changes */
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed. This property supports two-way binding */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "<div class=\"panel card\" [ngClass]=\"panelClass\"> <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\"> <div class=\"panel-title\"> <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\"> <div *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\"> {{ heading }} </div> <ng-content select=\"[accordion-heading]\"></ng-content> </div> </div> </div> <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\"> <div class=\"panel-body card-block card-body\"> <ng-content></ng-content> </div> </div> </div> ",
                    host: {
                        class: 'panel',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */],] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'panelClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.panel-open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionPanelComponent;
}());

//# sourceMappingURL=accordion-group.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/accordion/accordion.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.config.js");


/** Displays collapsible content panels for presenting information in a limited amount of space. */
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__accordion_config__["a" /* AccordionConfig */], },
    ]; };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/accordion/accordion.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
    return AccordionConfig;
}());

//# sourceMappingURL=accordion.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/accordion/accordion.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccordionModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__("../../../../ngx-bootstrap/collapse/collapse.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion-group.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.config.js");






var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.forRoot = function () {
        return { ngModule: AccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_5__accordion_config__["a" /* AccordionConfig */]] };
    };
    AccordionModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__["a" /* CollapseModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = function () { return []; };
    return AccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/accordion/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion-group.component.js");
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.component.js");
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.module.js");
/* unused harmony reexport AccordionModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__("../../../../ngx-bootstrap/accordion/accordion.config.js");
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/alert/alert.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__("../../../../ngx-bootstrap/alert/alert.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_decorators__ = __webpack_require__("../../../../ngx-bootstrap/utils/decorators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\"> <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\"> <ng-template [ngIf]=\"dismissible\"> <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\"> <span aria-hidden=\"true\">&times;</span> <span class=\"sr-only\">Close</span> </button> </ng-template> <ng-content></ng-content> </div> </ng-template> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* AlertConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    AlertComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dismissOnTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_decorators__["a" /* OnChange */])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/alert/alert.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
    return AlertConfig;
}());

//# sourceMappingURL=alert.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/alert/alert.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AlertModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__("../../../../ngx-bootstrap/alert/alert.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__("../../../../ngx-bootstrap/alert/alert.config.js");




var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* AlertConfig */]] };
    };
    AlertModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]]
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = function () { return []; };
    return AlertModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/alert/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../ngx-bootstrap/alert/alert.component.js");
/* unused harmony reexport AlertComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_module__ = __webpack_require__("../../../../ngx-bootstrap/alert/alert.module.js");
/* unused harmony reexport AlertModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_config__ = __webpack_require__("../../../../ngx-bootstrap/alert/alert.config.js");
/* unused harmony reexport AlertConfig */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/buttons/button-checkbox.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
// tslint:disable:no-use-before-declare


// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = function () { return []; };
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'btnCheckboxFalse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());

//# sourceMappingURL=button-checkbox.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/buttons/button-radio-group.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioGroupDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
// tslint:disable:no-use-before-declare


var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = (function () {
    function ButtonRadioGroupDirective(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioGroupDirective.prototype.writeValue = function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioGroupDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioGroupDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioGroupDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return ButtonRadioGroupDirective;
}());

//# sourceMappingURL=button-radio-group.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/buttons/button-radio.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_group_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-radio-group.directive.js");
// tslint:disable:no-use-before-declare



var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: function () {
            return this.group ? this.group.value : this._value;
        },
        set: function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    ButtonRadioDirective.prototype._onChange = function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.prototype.setDisabledState = function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    ButtonRadioDirective.propDecorators = {
        'btnRadio': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'uncheckable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());

//# sourceMappingURL=button-radio.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/buttons/buttons.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ButtonsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-checkbox.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-radio.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-radio-group.directive.js");




var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */], __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */], __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */]]
                },] },
    ];
    /** @nocollapse */
    ButtonsModule.ctorParameters = function () { return []; };
    return ButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/buttons/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_checkbox_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-checkbox.directive.js");
/* unused harmony reexport ButtonCheckboxDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_radio_group_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-radio-group.directive.js");
/* unused harmony reexport ButtonRadioGroupDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__("../../../../ngx-bootstrap/buttons/button-radio.directive.js");
/* unused harmony reexport ButtonRadioDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_module__ = __webpack_require__("../../../../ngx-bootstrap/buttons/buttons.module.js");
/* unused harmony reexport ButtonsModule */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/carousel.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.config.js");
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this._slides = new __WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* LinkedList */]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\"> <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__carousel_config__["a" /* CarouselConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'noPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showIndicators': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeSlideChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeSlide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/carousel.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /** Show carousel-indicators */
        this.showIndicators = true;
    }
    CarouselConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());

//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/carousel.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/slide.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.config.js");





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.component.js");
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.module.js");
/* unused harmony reexport CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/slide.component.js");
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.config.js");
/* unused harmony reexport CarouselConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/carousel/slide.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__("../../../../ngx-bootstrap/carousel/carousel.component.js");


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.item',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());

//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/check-overflow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkOverflow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__units_constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_month__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/month.js");



function checkOverflow(config) {
    var overflow;
    var a = config._a;
    if (a && Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config).overflow === -2) {
        // todo: fix this sh*t
        overflow =
            a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["e" /* MONTH */]] < 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["e" /* MONTH */]] > 11 ? __WEBPACK_IMPORTED_MODULE_1__units_constants__["e" /* MONTH */] :
                a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["a" /* DATE */]] < 1 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["a" /* DATE */]] > Object(__WEBPACK_IMPORTED_MODULE_2__units_month__["a" /* daysInMonth */])(a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["i" /* YEAR */]], a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["e" /* MONTH */]]) ? __WEBPACK_IMPORTED_MODULE_1__units_constants__["a" /* DATE */] :
                    a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["b" /* HOUR */]] < 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["b" /* HOUR */]] > 24 || (a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["b" /* HOUR */]] === 24 && (a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["d" /* MINUTE */]] !== 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["f" /* SECOND */]] !== 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["c" /* MILLISECOND */]] !== 0)) ? __WEBPACK_IMPORTED_MODULE_1__units_constants__["b" /* HOUR */] :
                        a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["d" /* MINUTE */]] < 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["d" /* MINUTE */]] > 59 ? __WEBPACK_IMPORTED_MODULE_1__units_constants__["d" /* MINUTE */] :
                            a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["f" /* SECOND */]] < 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["f" /* SECOND */]] > 59 ? __WEBPACK_IMPORTED_MODULE_1__units_constants__["f" /* SECOND */] :
                                a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["c" /* MILLISECOND */]] < 0 || a[__WEBPACK_IMPORTED_MODULE_1__units_constants__["c" /* MILLISECOND */]] > 999 ? __WEBPACK_IMPORTED_MODULE_1__units_constants__["c" /* MILLISECOND */] :
                                    -1;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config)._overflowDayOfYear && (overflow < __WEBPACK_IMPORTED_MODULE_1__units_constants__["i" /* YEAR */] || overflow > __WEBPACK_IMPORTED_MODULE_1__units_constants__["a" /* DATE */])) {
            overflow = __WEBPACK_IMPORTED_MODULE_1__units_constants__["a" /* DATE */];
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config)._overflowWeeks && overflow === -1) {
            overflow = __WEBPACK_IMPORTED_MODULE_1__units_constants__["g" /* WEEK */];
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config)._overflowWeekday && overflow === -1) {
            overflow = __WEBPACK_IMPORTED_MODULE_1__units_constants__["h" /* WEEKDAY */];
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config).overflow = overflow;
    }
    return config;
}
//# sourceMappingURL=check-overflow.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/clone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneDate;
// fastest way to clone date
// https://jsperf.com/clone-date-object2
function cloneDate(date) {
    return new Date(date.getTime());
}
//# sourceMappingURL=clone.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/date-from-array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createUTCDate;
/* harmony export (immutable) */ __webpack_exports__["a"] = createDate;
function createUTCDate(y, m, d) {
    var date = new Date(Date.UTC.apply(null, arguments));
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}
function createDate(y, m, d, h, M, s, ms) {
    if (m === void 0) { m = 0; }
    if (d === void 0) { d = 1; }
    if (h === void 0) { h = 0; }
    if (M === void 0) { M = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    var date = new Date(y, m, d, h, M, s, ms);
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}
//# sourceMappingURL=date-from-array.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/from-anything.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prepareConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = createLocalOrUTC;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valid__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/valid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_isDate__ = __webpack_require__("../../../../rxjs/_esm5/util/isDate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__from_string_and_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-string-and-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__from_string_and_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-string-and-format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clone__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__from_string__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__from_object__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__check_overflow__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/check-overflow.js");
// tslint:disable:max-line-length











function createFromConfig(config) {
    var res = Object(__WEBPACK_IMPORTED_MODULE_10__check_overflow__["a" /* checkOverflow */])(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__valid__["b" /* isValid */])(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
      // Adding is smart enough around DST
      res._d = add(res._d, 1, 'day');
      res._nextDay = undefined;
    }*/
    return res;
}
function prepareConfig(config) {
    var input = config._i;
    var format = config._f;
    config._locale = config._locale || Object(__WEBPACK_IMPORTED_MODULE_1__locale_locales__["a" /* getLocale */])(config._l);
    if (input === null || (format === undefined && input === '')) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__valid__["a" /* createInvalid */])(config, { nullInput: true });
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["i" /* isString */])(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_util_isDate__["a" /* isDate */])(input)) {
        config._d = Object(__WEBPACK_IMPORTED_MODULE_6__clone__["a" /* cloneDate */])(input);
        return config;
    }
    // todo: add check for recursion
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["b" /* isArray */])(format)) {
        Object(__WEBPACK_IMPORTED_MODULE_4__from_string_and_array__["a" /* configFromStringAndArray */])(config);
    }
    else if (format) {
        Object(__WEBPACK_IMPORTED_MODULE_5__from_string_and_format__["a" /* configFromStringAndFormat */])(config);
    }
    else {
        configFromInput(config);
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__valid__["b" /* isValid */])(config)) {
        config._d = null;
    }
    return config;
}
function configFromInput(config) {
    var input = config._i;
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["j" /* isUndefined */])(input)) {
        config._d = new Date();
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_util_isDate__["a" /* isDate */])(input)) {
        config._d = Object(__WEBPACK_IMPORTED_MODULE_6__clone__["a" /* cloneDate */])(input);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["i" /* isString */])(input)) {
        Object(__WEBPACK_IMPORTED_MODULE_7__from_string__["c" /* configFromString */])(config);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["b" /* isArray */])(input) && input.length) {
        var _arr = input.slice(0);
        config._a = _arr.map(function (obj) { return Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["i" /* isString */])(obj) ? parseInt(obj, 10) : obj; });
        Object(__WEBPACK_IMPORTED_MODULE_8__from_array__["a" /* configFromArray */])(config);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["g" /* isObject */])(input)) {
        Object(__WEBPACK_IMPORTED_MODULE_9__from_object__["a" /* configFromObject */])(config);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["f" /* isNumber */])(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return Object(__WEBPACK_IMPORTED_MODULE_2__valid__["a" /* createInvalid */])(config);
    }
    return config;
}
function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    var config = {};
    var _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["g" /* isObject */])(_input) && Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["h" /* isObjectEmpty */])(_input)) || (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["b" /* isArray */])(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}
//# sourceMappingURL=from-anything.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/from-array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configFromArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__units_year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__units_week_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_defaults__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/defaults.js");







function currentDateArray(config) {
    var nowValue = new Date();
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var input = [];
    var i;
    var date;
    var currentDate;
    var expectedWeekday;
    var yearToUse;
    if (config._d) {
        return config;
    }
    currentDate = currentDateArray(config);
    // compute day of the year from weeks and weekdays
    if (config._w && config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["a" /* DATE */]] == null && config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["e" /* MONTH */]] == null) {
        dayOfYearFromWeekInfo(config);
    }
    // if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = Object(__WEBPACK_IMPORTED_MODULE_5__utils_defaults__["a" /* defaults */])(config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["i" /* YEAR */]], currentDate[__WEBPACK_IMPORTED_MODULE_0__units_constants__["i" /* YEAR */]]);
        if (config._dayOfYear > Object(__WEBPACK_IMPORTED_MODULE_1__units_year__["a" /* daysInYear */])(yearToUse) || config._dayOfYear === 0) {
            Object(__WEBPACK_IMPORTED_MODULE_2__parsing_flags__["a" /* getParsingFlags */])(config)._overflowDayOfYear = true;
        }
        date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["e" /* MONTH */]] = date.getUTCMonth();
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["a" /* DATE */]] = date.getUTCDate();
    }
    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }
    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    // Check for 24:00:00.000
    if (config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["b" /* HOUR */]] === 24 &&
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["d" /* MINUTE */]] === 0 &&
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["f" /* SECOND */]] === 0 &&
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["c" /* MILLISECOND */]] === 0) {
        config._nextDay = true;
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["b" /* HOUR */]] = 0;
    }
    config._d = (config._useUTC ? __WEBPACK_IMPORTED_MODULE_3__date_from_array__["b" /* createUTCDate */] : __WEBPACK_IMPORTED_MODULE_3__date_from_array__["a" /* createDate */]).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["b" /* HOUR */]] = 24;
    }
    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        Object(__WEBPACK_IMPORTED_MODULE_2__parsing_flags__["a" /* getParsingFlags */])(config).weekdayMismatch = true;
    }
    return config;
}
function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = Object(__WEBPACK_IMPORTED_MODULE_5__utils_defaults__["a" /* defaults */])(w.GG, config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["i" /* YEAR */]], Object(__WEBPACK_IMPORTED_MODULE_4__units_week_calendar_utils__["b" /* weekOfYear */])(new Date(), 1, 4).year);
        week = Object(__WEBPACK_IMPORTED_MODULE_5__utils_defaults__["a" /* defaults */])(w.W, 1);
        weekday = Object(__WEBPACK_IMPORTED_MODULE_5__utils_defaults__["a" /* defaults */])(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    }
    else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        var curWeek = Object(__WEBPACK_IMPORTED_MODULE_4__units_week_calendar_utils__["b" /* weekOfYear */])(new Date(), dow, doy);
        weekYear = Object(__WEBPACK_IMPORTED_MODULE_5__utils_defaults__["a" /* defaults */])(w.gg, config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["i" /* YEAR */]], curWeek.year);
        // Default to current week.
        week = Object(__WEBPACK_IMPORTED_MODULE_5__utils_defaults__["a" /* defaults */])(w.w, curWeek.week);
        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        }
        else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        }
        else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > Object(__WEBPACK_IMPORTED_MODULE_4__units_week_calendar_utils__["c" /* weeksInYear */])(weekYear, dow, doy)) {
        Object(__WEBPACK_IMPORTED_MODULE_2__parsing_flags__["a" /* getParsingFlags */])(config)._overflowWeeks = true;
    }
    else if (weekdayOverflow != null) {
        Object(__WEBPACK_IMPORTED_MODULE_2__parsing_flags__["a" /* getParsingFlags */])(config)._overflowWeekday = true;
    }
    else {
        temp = Object(__WEBPACK_IMPORTED_MODULE_4__units_week_calendar_utils__["a" /* dayOfYearFromWeeks */])(weekYear, week, weekday, dow, doy);
        config._a[__WEBPACK_IMPORTED_MODULE_0__units_constants__["i" /* YEAR */]] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
    return config;
}
//# sourceMappingURL=from-array.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/from-object.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configFromObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");



function configFromObject(config) {
    if (config._d) {
        return config;
    }
    var input = config._i;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["g" /* isObject */])(input)) {
        var i = Object(__WEBPACK_IMPORTED_MODULE_0__units_aliases__["b" /* normalizeObjectUnits */])(input);
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            .map(function (obj) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["i" /* isString */])(obj) ? parseInt(obj, 10) : obj; });
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__from_array__["a" /* configFromArray */])(config);
}
//# sourceMappingURL=from-object.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/from-string-and-array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configFromStringAndArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__valid__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/valid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__from_string_and_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-string-and-format.js");



// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig;
    var bestMoment;
    var scoreToBeat;
    var currentScore;
    if (!config._f || config._f.length === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_1__parsing_flags__["a" /* getParsingFlags */])(config).invalidFormat = true;
        return Object(__WEBPACK_IMPORTED_MODULE_0__valid__["a" /* createInvalid */])(config);
    }
    var i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        Object(__WEBPACK_IMPORTED_MODULE_2__from_string_and_format__["a" /* configFromStringAndFormat */])(tempConfig);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__valid__["b" /* isValid */])(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += Object(__WEBPACK_IMPORTED_MODULE_1__parsing_flags__["a" /* getParsingFlags */])(tempConfig).charsLeftOver;
        // or tokens
        currentScore += Object(__WEBPACK_IMPORTED_MODULE_1__parsing_flags__["a" /* getParsingFlags */])(tempConfig).unusedTokens.length * 10;
        Object(__WEBPACK_IMPORTED_MODULE_1__parsing_flags__["a" /* getParsingFlags */])(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}
//# sourceMappingURL=from-string-and-array.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/from-string-and-format.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ISO_8601 */
/* unused harmony export RFC_2822 */
/* harmony export (immutable) */ __webpack_exports__["a"] = configFromStringAndFormat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__from_string__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__units_constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__check_overflow__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/check-overflow.js");










// constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
var ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
var RFC_2822 = 'RFC_2822';
// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === ISO_8601) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__from_string__["a" /* configFromISO */])(config);
    }
    if (config._f === RFC_2822) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__from_string__["b" /* configFromRFC2822 */])(config);
    }
    config._a = [];
    Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).empty = true;
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_type_checks__["b" /* isArray */])(config._f) || (!config._i && config._i !== 0)) {
        return config;
    }
    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var input = config._i.toString();
    var totalParsedInputLength = 0;
    var inputLength = input.length;
    var tokens = Object(__WEBPACK_IMPORTED_MODULE_1__format__["a" /* expandFormat */])(config._f, config._locale).match(__WEBPACK_IMPORTED_MODULE_2__format_format__["d" /* formattingTokens */]) || [];
    var i;
    var token;
    var parsedInput;
    var skipped;
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(Object(__WEBPACK_IMPORTED_MODULE_4__parse_regex__["b" /* getParseRegexForToken */])(token, config._locale)) || [])[0];
        if (parsedInput) {
            skipped = input.substr(0, input.indexOf(parsedInput));
            if (skipped.length > 0) {
                Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).unusedInput.push(skipped);
            }
            input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (__WEBPACK_IMPORTED_MODULE_2__format_format__["c" /* formatTokenFunctions */][token]) {
            if (parsedInput) {
                Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).empty = false;
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).unusedTokens.push(token);
            }
            Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["b" /* addTimeToArrayFromToken */])(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).unusedTokens.push(token);
        }
    }
    // add remaining unparsed input length to the string
    Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).charsLeftOver = inputLength - totalParsedInputLength;
    if (input.length > 0) {
        Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).unusedInput.push(input);
    }
    // clear _12h flag if hour is <= 12
    if (config._a[__WEBPACK_IMPORTED_MODULE_6__units_constants__["b" /* HOUR */]] <= 12 &&
        Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).bigHour === true &&
        config._a[__WEBPACK_IMPORTED_MODULE_6__units_constants__["b" /* HOUR */]] > 0) {
        Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).bigHour = void 0;
    }
    Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).parsedDateParts = config._a.slice(0);
    Object(__WEBPACK_IMPORTED_MODULE_8__parsing_flags__["a" /* getParsingFlags */])(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[__WEBPACK_IMPORTED_MODULE_6__units_constants__["b" /* HOUR */]] = meridiemFixWrap(config._locale, config._a[__WEBPACK_IMPORTED_MODULE_6__units_constants__["b" /* HOUR */]], config._meridiem);
    Object(__WEBPACK_IMPORTED_MODULE_7__from_array__["a" /* configFromArray */])(config);
    return Object(__WEBPACK_IMPORTED_MODULE_9__check_overflow__["a" /* checkOverflow */])(config);
}
function meridiemFixWrap(locale, _hour, meridiem) {
    var hour = _hour;
    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    }
    if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
    }
    // Fallback
    var isPm = locale.isPM(meridiem);
    if (isPm && hour < 12) {
        hour += 12;
    }
    if (!isPm && hour === 12) {
        hour = 0;
    }
    return hour;
}
//# sourceMappingURL=from-string-and-format.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/from-string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configFromISO;
/* harmony export (immutable) */ __webpack_exports__["b"] = configFromRFC2822;
/* harmony export (immutable) */ __webpack_exports__["c"] = configFromString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_locale_class__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locale.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__from_string_and_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-string-and-format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__valid__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/valid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
// tslint:disable-next-line






// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
// tslint:disable-next-line
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
// tslint:disable-next-line
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/, true],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/, true],
    ['YYYYMMDD', /\d{8}/, true],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/, true]
];
// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
// tslint:disable-next-line
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
// date from iso format
function configFromISO(config) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["i" /* isString */])(config._i)) {
        return config;
    }
    var input = config._i;
    var match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
    var allowTime;
    var dateFormat;
    var timeFormat;
    var tzFormat;
    if (!match) {
        config._isValid = false;
        return config;
    }
    // getParsingFlags(config).iso = true;
    var i;
    var l;
    for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
        }
    }
    if (dateFormat == null) {
        config._isValid = false;
        return config;
    }
    if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
            }
        }
        if (timeFormat == null) {
            config._isValid = false;
            return config;
        }
    }
    if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return config;
    }
    if (match[4]) {
        if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
        }
        else {
            config._isValid = false;
            return config;
        }
    }
    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    return Object(__WEBPACK_IMPORTED_MODULE_2__from_string_and_format__["a" /* configFromStringAndFormat */])(config);
}
// tslint:disable-next-line
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        __WEBPACK_IMPORTED_MODULE_0__locale_locale_class__["d" /* defaultLocaleMonthsShort */].indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];
    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }
    return result;
}
function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    return year <= 49 ? year + 2000 : year;
}
function preprocessRFC2822(str) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return str
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ').trim();
}
function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = __WEBPACK_IMPORTED_MODULE_0__locale_locale_class__["g" /* defaultLocaleWeekdaysShort */].indexOf(weekdayStr);
        var weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            Object(__WEBPACK_IMPORTED_MODULE_5__parsing_flags__["a" /* getParsingFlags */])(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    }
    else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    }
    else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100;
        var h = (hm - m) / 100;
        return h * 60 + m;
    }
}
// date and time from ref 2822 format
function configFromRFC2822(config) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["i" /* isString */])(config._i)) {
        return config;
    }
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (!match) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__valid__["c" /* markInvalid */])(config);
    }
    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
        return config;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = __WEBPACK_IMPORTED_MODULE_3__date_from_array__["b" /* createUTCDate */].apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    Object(__WEBPACK_IMPORTED_MODULE_5__parsing_flags__["a" /* getParsingFlags */])(config).rfc2822 = true;
    return config;
}
// date from iso format or fallback
function configFromString(config) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["i" /* isString */])(config._i)) {
        return config;
    }
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return config;
    }
    // todo: update logic processing
    // isISO -> configFromISO
    // isRFC -> configFromRFC
    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    // Final attempt, use Input Fallback
    // hooks.createFromInputFallback(config);
    return Object(__WEBPACK_IMPORTED_MODULE_4__valid__["a" /* createInvalid */])(config);
}
// hooks.createFromInputFallback = deprecate(
//     'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
//     'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
//     'discouraged and will be removed in an upcoming major release. Please refer to ' +
//     'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
//     function (config) {
//         config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
//     }
// );
//# sourceMappingURL=from-string.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/local.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__from_anything__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/from-anything.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");


function parseDate(input, format, localeKey, strict, isUTC) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["c" /* isDate */])(input)) {
        return input;
    }
    var config = Object(__WEBPACK_IMPORTED_MODULE_0__from_anything__["a" /* createLocalOrUTC */])(input, format, localeKey, strict, isUTC);
    return config._d;
}
//# sourceMappingURL=local.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/parsing-flags.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getParsingFlags;
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}
//# sourceMappingURL=parsing-flags.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/create/valid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isValid;
/* harmony export (immutable) */ __webpack_exports__["a"] = createInvalid;
/* harmony export (immutable) */ __webpack_exports__["c"] = markInvalid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");

function isValid(config) {
    if (config._isValid == null) {
        var flags = Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config);
        var parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(Object(__WEBPACK_IMPORTED_MODULE_0__parsing_flags__["a" /* getParsingFlags */])(config), flags || { userInvalidated: true });
    return config;
}
function markInvalid(config) {
    config._isValid = false;
    return config;
}
//# sourceMappingURL=valid.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/duration/bubble.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bubble;
/* harmony export (immutable) */ __webpack_exports__["b"] = daysToMonths;
/* harmony export (immutable) */ __webpack_exports__["c"] = monthsToDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_abs_ceil__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/abs-ceil.js");


function bubble(dur) {
    var milliseconds = dur._milliseconds;
    var days = dur._days;
    var months = dur._months;
    var data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += Object(__WEBPACK_IMPORTED_MODULE_1__utils_abs_ceil__["a" /* absCeil */])(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    var seconds = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(milliseconds / 1000);
    data.seconds = seconds % 60;
    var minutes = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(seconds / 60);
    data.minutes = minutes % 60;
    var hours = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(minutes / 60);
    data.hours = hours % 24;
    days += Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(hours / 24);
    // convert days to months
    var monthsFromDays = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(daysToMonths(days));
    months += monthsFromDays;
    days -= Object(__WEBPACK_IMPORTED_MODULE_1__utils_abs_ceil__["a" /* absCeil */])(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    var years = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}
//# sourceMappingURL=bubble.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/duration/constructor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Duration; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isDuration;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__valid__ = __webpack_require__("../../../../ngx-bootstrap/chronos/duration/valid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bubble__ = __webpack_require__("../../../../ngx-bootstrap/chronos/duration/bubble.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__humanize__ = __webpack_require__("../../../../ngx-bootstrap/chronos/duration/humanize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");






var Duration = (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
        this._data = {};
        this._locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale_locales__["a" /* getLocale */])();
        this._locale = config && config._locale || Object(__WEBPACK_IMPORTED_MODULE_0__locale_locales__["a" /* getLocale */])();
        // const normalizedInput = normalizeObjectUnits(duration);
        var normalizedInput = duration;
        var years = normalizedInput.year || 0;
        var quarters = normalizedInput.quarter || 0;
        var months = normalizedInput.month || 0;
        var weeks = normalizedInput.week || 0;
        var days = normalizedInput.day || 0;
        var hours = normalizedInput.hours || 0;
        var minutes = normalizedInput.minutes || 0;
        var seconds = normalizedInput.seconds || 0;
        var milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = Object(__WEBPACK_IMPORTED_MODULE_1__valid__["a" /* isDurationValid */])(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1000 +
            minutes * 60 * 1000 +
            hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        // this._data = {};
        // this._locale = getLocale();
        // this._bubble();
        return Object(__WEBPACK_IMPORTED_MODULE_2__bubble__["a" /* bubble */])(this);
    }
    Duration.prototype.isValid = function () {
        return this._isValid;
    };
    Duration.prototype.humanize = function (withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        var locale = this.localeData();
        var output = Object(__WEBPACK_IMPORTED_MODULE_4__humanize__["a" /* relativeTime */])(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    };
    Duration.prototype.localeData = function () {
        return this._locale;
    };
    Duration.prototype.locale = function (localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale_locales__["a" /* getLocale */])(localeKey) || this._locale;
        return this;
    };
    Duration.prototype.abs = function () {
        var mathAbs = Math.abs;
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.month = mathAbs(data.month);
        data.year = mathAbs(data.year);
        return this;
    };
    Duration.prototype.as = function (_units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;
        var units = Object(__WEBPACK_IMPORTED_MODULE_3__units_aliases__["c" /* normalizeUnits */])(_units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + Object(__WEBPACK_IMPORTED_MODULE_2__bubble__["b" /* daysToMonths */])(days);
            return units === 'month' ? months : months / 12;
        }
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(Object(__WEBPACK_IMPORTED_MODULE_2__bubble__["c" /* monthsToDays */])(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hours':
                return days * 24 + milliseconds / 36e5;
            case 'minutes':
                return days * 1440 + milliseconds / 6e4;
            case 'seconds':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'milliseconds':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error("Unknown unit " + units);
        }
    };
    Duration.prototype.valueOf = function () {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_type_checks__["k" /* toInt */])(this._months / 12) * 31536e6);
    };
    return Duration;
}());

function isDuration(obj) {
    return obj instanceof Duration;
}
//# sourceMappingURL=constructor.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/duration/create.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDuration;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constructor__ = __webpack_require__("../../../../ngx-bootstrap/chronos/duration/constructor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_local__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/local.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_abs_round__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/abs-round.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__units_offset__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_date_compare__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_clone__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/clone.js");
// ASP.NET json date format regex










var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
    var duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new __WEBPACK_IMPORTED_MODULE_0__constructor__["a" /* Duration */](duration, config);
}
function convertDuration(input, key) {
    // checks for null or undefined
    if (input == null) {
        return {};
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__constructor__["b" /* isDuration */])(input)) {
        return {
            milliseconds: input._milliseconds,
            day: input._days,
            month: input._months
        };
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["f" /* isNumber */])(input)) {
        // duration = {};
        return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["i" /* isString */])(input)) {
        var match = aspNetRegex.exec(input);
        if (match) {
            var sign = (match[1] === '-') ? -1 : 1;
            return {
                year: 0,
                day: Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["k" /* toInt */])(match[__WEBPACK_IMPORTED_MODULE_2__units_constants__["a" /* DATE */]]) * sign,
                hours: Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["k" /* toInt */])(match[__WEBPACK_IMPORTED_MODULE_2__units_constants__["b" /* HOUR */]]) * sign,
                minutes: Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["k" /* toInt */])(match[__WEBPACK_IMPORTED_MODULE_2__units_constants__["d" /* MINUTE */]]) * sign,
                seconds: Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["k" /* toInt */])(match[__WEBPACK_IMPORTED_MODULE_2__units_constants__["f" /* SECOND */]]) * sign,
                // the millisecond decimal point is included in the match
                milliseconds: Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["k" /* toInt */])(Object(__WEBPACK_IMPORTED_MODULE_4__utils_abs_round__["a" /* absRound */])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["k" /* toInt */])(match[__WEBPACK_IMPORTED_MODULE_2__units_constants__["c" /* MILLISECOND */]]) * 1000)) * sign
            };
        }
        match = isoRegex.exec(input);
        if (match) {
            var sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            return {
                year: parseIso(match[2], sign),
                month: parseIso(match[3], sign),
                week: parseIso(match[4], sign),
                day: parseIso(match[5], sign),
                hours: parseIso(match[6], sign),
                minutes: parseIso(match[7], sign),
                seconds: parseIso(match[8], sign)
            };
        }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["g" /* isObject */])(input) && ('from' in input || 'to' in input)) {
        var diffRes = momentsDifference(Object(__WEBPACK_IMPORTED_MODULE_3__create_local__["a" /* parseDate */])(input.from), Object(__WEBPACK_IMPORTED_MODULE_3__create_local__["a" /* parseDate */])(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
    var _a;
}
// createDuration.fn = Duration.prototype;
// createDuration.invalid = invalid;
function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
function positiveMomentsDifference(base, other) {
    var res = { milliseconds: 0, months: 0 };
    res.months = Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["h" /* getMonth */])(other) - Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["h" /* getMonth */])(base) +
        (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["d" /* getFullYear */])(other) - Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["d" /* getFullYear */])(base)) * 12;
    var _basePlus = Object(__WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__["a" /* add */])(Object(__WEBPACK_IMPORTED_MODULE_9__create_clone__["a" /* cloneDate */])(base), res.months, 'month');
    if (Object(__WEBPACK_IMPORTED_MODULE_6__utils_date_compare__["a" /* isAfter */])(_basePlus, other)) {
        --res.months;
    }
    res.milliseconds = +other - +(Object(__WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__["a" /* add */])(Object(__WEBPACK_IMPORTED_MODULE_9__create_clone__["a" /* cloneDate */])(base), res.months, 'month'));
    return res;
}
function momentsDifference(base, other) {
    if (!(Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["d" /* isDateValid */])(base) && Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["d" /* isDateValid */])(other))) {
        return { milliseconds: 0, months: 0 };
    }
    var res;
    var _other = Object(__WEBPACK_IMPORTED_MODULE_5__units_offset__["a" /* cloneWithOffset */])(other, base, { _offset: base.getTimezoneOffset() });
    if (Object(__WEBPACK_IMPORTED_MODULE_6__utils_date_compare__["b" /* isBefore */])(base, _other)) {
        res = positiveMomentsDifference(base, _other);
    }
    else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }
    return res;
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/duration/humanize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = relativeTime;
/* unused harmony export getSetRelativeTimeRounding */
/* unused harmony export getSetRelativeTimeThreshold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create__ = __webpack_require__("../../../../ngx-bootstrap/chronos/duration/create.js");
// tslint:disable:cyclomatic-complexity

var round = Math.round;
var thresholds = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11 // months to year
};
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
function relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = Object(__WEBPACK_IMPORTED_MODULE_0__create__["a" /* createDuration */])(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds <= thresholds.ss && ['s', seconds] ||
        seconds < thresholds.s && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds.m && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds.h && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds.d && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds.M && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    var b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}
// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof (roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}
// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}
// export function humanize(withSuffix) {
//   if (!this.isValid()) {
//     return this.localeData().invalidDate();
//   }
//
//   const locale = this.localeData();
//   let output = relativeTime(this, !withSuffix, locale);
//
//   if (withSuffix) {
//     output = locale.pastFuture(+this, output);
//   }
//
//   return locale.postformat(output);
// }
//# sourceMappingURL=humanize.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/duration/valid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDurationValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var orderingHash = ordering.reduce(function (mem, order) {
    mem[order] = true;
    return mem;
}, {});
function isDurationValid(duration) {
    var durationKeys = Object.keys(duration);
    if (durationKeys
        .some(function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["k" /* toInt */])(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
// export function isValid() {
//   return this._isValid;
// }
//
// export function createInvalid(): Duration {
//   return createDuration(NaN);
// }
//# sourceMappingURL=valid.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/format.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDate;
/* unused harmony export formatMoment */
/* harmony export (immutable) */ __webpack_exports__["a"] = expandFormat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_index__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com




function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    var _locale = Object(__WEBPACK_IMPORTED_MODULE_2__locale_locales__["a" /* getLocale */])(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    var output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!Object(__WEBPACK_IMPORTED_MODULE_3__utils_type_checks__["d" /* isDateValid */])(date)) {
        return locale.invalidDate;
    }
    var format = expandFormat(_format, locale);
    __WEBPACK_IMPORTED_MODULE_1__format_format__["b" /* formatFunctions */][format] = __WEBPACK_IMPORTED_MODULE_1__format_format__["b" /* formatFunctions */][format] || Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["e" /* makeFormatFunction */])(format);
    return __WEBPACK_IMPORTED_MODULE_1__format_format__["b" /* formatFunctions */][format](date, locale, isUTC, offset);
}
function expandFormat(_format, locale) {
    var format = _format;
    var i = 5;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/format/format.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatTokenFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formattingTokens; });
/* harmony export (immutable) */ __webpack_exports__["a"] = addFormatToken;
/* harmony export (immutable) */ __webpack_exports__["e"] = makeFormatFunction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_zero_fill__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/zero-fill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");


var formatFunctions = {};
var formatTokenFunctions = {};
// tslint:disable-next-line
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0__utils_zero_fill__["a" /* zeroFill */])(callback.apply(null, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        };
    }
}
function makeFormatFunction(format) {
    var array = format.match(formattingTokens);
    var length = array.length;
    var formatArr = new Array(length);
    for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset) {
        if (offset === void 0) { offset = 0; }
        var output = '';
        for (var j = 0; j < length; j++) {
            output += Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["e" /* isFunction */])(formatArr[j])
                ? formatArr[j].call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                : formatArr[j];
        }
        return output;
    };
}
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/ar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
var symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
var pluralForm = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
var plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var pluralize = function (u) {
    return function (num, withoutSuffix) {
        var f = pluralForm(num);
        var str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, num.toString());
    };
};
var months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
var arLocale = {
    abbr: 'ar',
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function (input) {
        return 'م' === input;
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    preparse: function (str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=ar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/cs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export csLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
function translate(num, withoutSuffix, key, isFuture) {
    var result = num + ' ';
    switch (key) {
        case 's':// a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss':// 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm':// a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm':// 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h':// an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh':// 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd':// a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd':// 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M':// a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM':// 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y':// a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy':// 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
    }
}
var csLocale = {
    abbr: 'cs',
    months: months,
    monthsShort: monthsShort,
    monthsParse: (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    shortMonthsParse: (function (monthsShort) {
        var i, _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse: (function (months) {
        var i, _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function (dayOfWeek) {
            switch (dayOfWeek) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: function (dayOfWeek) {
            switch (dayOfWeek) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=cs.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/da.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export daLocale */
// tslint:disable:comment-format
//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
var daLocale = {
    abbr: 'da',
    months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
    weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
    weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'på dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[i] dddd[s kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=da.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/de.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
var deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=de.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/en-gb.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export enGbLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
var enGbLocale = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (_num) {
        var num = Number(_num);
        var b = num % 10, output = (~~(num % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=en-gb.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/es-do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export esDoLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esDoLocale = {
    abbr: 'es-do',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        else {
            return monthsShortDot[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: function (date) {
            return '[hoy a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: function (date) {
            return '[mañana a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: function (date) {
            return 'dddd [a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: function (date) {
            return '[ayer a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: function (date) {
            return '[el] dddd [pasado a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=es-do.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/es-us.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export esUsLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var esUsLocale = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        else {
            return monthsShortDot[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
    },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY h:mm A',
        LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: function (date) {
            return '[hoy a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: function (date) {
            return '[mañana a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: function (date) {
            return 'dddd [a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: function (date) {
            return '[ayer a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: function (date) {
            return '[el] dddd [pasado a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 0,
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=es-us.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export esLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        return monthsShortDot[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: function (date) {
            return '[hoy a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: function (date) {
            return '[mañana a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: function (date) {
            return 'dddd [a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: function (date) {
            return '[ayer a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: function (date) {
            return '[el] dddd [pasado a la' + ((Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=es.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/fr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export frLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
var frLocale = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function (_num, period) {
        var num = Number(_num);
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return num + (num === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return num + (num === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return num + (num === 1 ? 're' : 'e');
        }
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=fr.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/he.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export heLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
var heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: function (num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        dd: function (num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        MM: function (num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        yy: function (num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};
//# sourceMappingURL=he.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/hi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hiLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
var symbolMap = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
}, numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
var hiLocale = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    preparse: function (str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=hi.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/hu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export huLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
function translate(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[Object(__WEBPACK_IMPORTED_MODULE_0__units_day_of_week__["a" /* getDayOfWeek */])(date)] + '] LT[-kor]';
}
var huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=hu.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/it.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export itLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
var itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: function (date) {
            switch (Object(__WEBPACK_IMPORTED_MODULE_0__units_day_of_week__["a" /* getDayOfWeek */])(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: function (num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=it.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/ja.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jaLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
var jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: function (input) {
        return input === '午後';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};
//# sourceMappingURL=ja.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/ko.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export koLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
var koLocale = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '일';
            case 'M':
                return num + '월';
            case 'w':
            case 'W':
                return num + '주';
            default:
                return num.toString(10);
        }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
        return token === '오후';
    },
    meridiem: function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
};
//# sourceMappingURL=ko.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/nl-be.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nlBeLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlBeLocale = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        else {
            return monthsShortWithDots[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (_num) {
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=nl-be.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/nl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nlLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        else {
            return monthsShortWithDots[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (_num) {
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=nl.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/pl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export plLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return


//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
function plural(num) {
    return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
}
function translate(num, withoutSuffix, key) {
    var result = num + ' ';
    switch (key) {
        case 'ss':
            return result + (plural(num) ? 'sekundy' : 'sekund');
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural(num) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
            return result + (plural(num) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural(num) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural(num) ? 'lata' : 'lat');
    }
}
var plLocale = {
    abbr: 'pl',
    months: function (date, format, isUTC) {
        if (!date) {
            return monthsNominative;
        }
        else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)] + '|' + monthsNominative[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)] + ')';
        }
        else if (/D MMMM/.test(format)) {
            return monthsSubjective[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        else {
            return monthsNominative[Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: function (date) {
            switch (Object(__WEBPACK_IMPORTED_MODULE_1__units_day_of_week__["a" /* getDayOfWeek */])(date)) {
                case 0:
                    return '[W niedzielę o] LT';
                case 2:
                    return '[We wtorek o] LT';
                case 3:
                    return '[W środę o] LT';
                case 6:
                    return '[W sobotę o] LT';
                default:
                    return '[W] dddd [o] LT';
            }
        },
        lastDay: '[Wczoraj o] LT',
        lastWeek: function (date) {
            switch (Object(__WEBPACK_IMPORTED_MODULE_1__units_day_of_week__["a" /* getDayOfWeek */])(date)) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate,
        y: 'rok',
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=pl.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/pt-br.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ptBrLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
var ptBrLocale = {
    abbr: 'pt-br',
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function (date) {
            return (Object(__WEBPACK_IMPORTED_MODULE_0__units_day_of_week__["a" /* getDayOfWeek */])(date) === 0 || Object(__WEBPACK_IMPORTED_MODULE_0__units_day_of_week__["a" /* getDayOfWeek */])(date) === 6) ?
                '[Último] dddd [às] LT' :
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº'
};
//# sourceMappingURL=pt-br.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/ru.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ruLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return


//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(num, withoutSuffix, key) {
    var format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural(format[key], +num);
}
var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
var ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: function (date, now) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__units_week__["b" /* getWeek */])(now) !== Object(__WEBPACK_IMPORTED_MODULE_0__units_week__["b" /* getWeek */])(date)) {
                switch (Object(__WEBPACK_IMPORTED_MODULE_1__units_day_of_week__["a" /* getDayOfWeek */])(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (Object(__WEBPACK_IMPORTED_MODULE_1__units_day_of_week__["a" /* getDayOfWeek */])(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: function (date, now) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__units_week__["b" /* getWeek */])(now) !== Object(__WEBPACK_IMPORTED_MODULE_0__units_week__["b" /* getWeek */])(date)) {
                switch (Object(__WEBPACK_IMPORTED_MODULE_1__units_day_of_week__["a" /* getDayOfWeek */])(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (Object(__WEBPACK_IMPORTED_MODULE_1__units_day_of_week__["a" /* getDayOfWeek */])(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function (_num, period) {
        var num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=ru.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/sv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export svLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
var svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function (_num) {
        var num = Number(_num);
        var b = num % 10, output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=sv.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/th.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export thLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
var thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};
//# sourceMappingURL=th.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/tr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export trLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
var trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: function (_num) {
        var num = Number(_num);
        if (num === 0) {
            return num + '\'ıncı';
        }
        var a = num % 10, b = num % 100 - a, c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=tr.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/i18n/zh-cn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zhCnLocale */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
var zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (_num, period) {
        var num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=zh-cn.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_index__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");
/* unused harmony reexport add */
/* unused harmony reexport subtract */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* unused harmony reexport getMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_local__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/local.js");
/* unused harmony reexport parseDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* unused harmony reexport formatDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* unused harmony reexport defineLocale */
/* unused harmony reexport getSetGlobalLocale */
/* unused harmony reexport listLocales */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/locale/calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultCalendar; });
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
};
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/locale/locale.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultLocaleMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultLocaleMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultLocaleWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return defaultLocaleWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defaultLocaleWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return defaultLongDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return defaultOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultDayOfMonthOrdinalParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Locale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_week_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
// tslint:disable:max-file-line-count max-line-length cyclomatic-complexity





var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
var defaultMonthsShortRegex = __WEBPACK_IMPORTED_MODULE_3__parse_regex__["s" /* matchWord */];
var defaultMonthsRegex = __WEBPACK_IMPORTED_MODULE_3__parse_regex__["s" /* matchWord */];
var Locale = (function () {
    function Locale(config) {
        if (!!config) {
            this.set(config);
        }
    }
    Locale.prototype.set = function (config) {
        var confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            var prop = config[confKey];
            var key = (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["e" /* isFunction */])(prop) ? confKey : "_" + confKey);
            this[key] = prop;
        }
        this._config = config;
    };
    Locale.prototype.calendar = function (key, date, now) {
        var output = this._calendar[key] || this._calendar.sameElse;
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["e" /* isFunction */])(output) ? output.call(null, date, now) : output;
    };
    Locale.prototype.longDateFormat = function (key) {
        var format = this._longDateFormat[key];
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    Object.defineProperty(Locale.prototype, "invalidDate", {
        get: function () {
            return this._invalidDate;
        },
        set: function (val) {
            this._invalidDate = val;
        },
        enumerable: true,
        configurable: true
    });
    Locale.prototype.ordinal = function (num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    };
    Locale.prototype.preparse = function (str) {
        return str;
    };
    Locale.prototype.postformat = function (str) {
        return str;
    };
    Locale.prototype.relativeTime = function (num, withoutSuffix, str, isFuture) {
        var output = this._relativeTime[str];
        return (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["e" /* isFunction */])(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    };
    Locale.prototype.pastFuture = function (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["e" /* isFunction */])(format) ? format(output) : format.replace(/%s/i, output);
    };
    Locale.prototype.months = function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._months)) {
            return this._months[Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        var key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
    };
    Locale.prototype.monthsShort = function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._monthsShort)) {
            return this._monthsShort[Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
        }
        var key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["h" /* getMonth */])(date, isUTC)];
    };
    Locale.prototype.monthsParse = function (monthName, format, strict) {
        var date;
        var regex;
        if (this._monthsParseExact) {
            return this.handleMonthStrictParse(monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                var _months = this.months(date, '').replace('.', '');
                var _shortMonths = this.monthsShort(date, '').replace('.', '');
                this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(date, '') + "|^" + this.monthsShort(date, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            }
            if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            }
            if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    };
    Locale.prototype.monthsRegex = function (isStrict) {
        if (this._monthsParseExact) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            }
            return this._monthsRegex;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    };
    Locale.prototype.monthsShortRegex = function (isStrict) {
        if (this._monthsParseExact) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            }
            return this._monthsShortRegex;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    };
    /** Week */
    Locale.prototype.week = function (date) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__units_week_calendar_utils__["b" /* weekOfYear */])(date, this._week.dow, this._week.doy).week;
    };
    Locale.prototype.firstDayOfWeek = function () {
        return this._week.dow;
    };
    Locale.prototype.firstDayOfYear = function () {
        return this._week.doy;
    };
    Locale.prototype.weekdays = function (date, format, isUTC) {
        if (!date) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._weekdays)) {
            return this._weekdays[Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["b" /* getDay */])(date, isUTC)];
        }
        var _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["b" /* getDay */])(date, isUTC)];
    };
    Locale.prototype.weekdaysMin = function (date, format, isUTC) {
        return date ? this._weekdaysMin[Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["b" /* getDay */])(date, isUTC)] : this._weekdaysMin;
    };
    Locale.prototype.weekdaysShort = function (date, format, isUTC) {
        return date ? this._weekdaysShort[Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["b" /* getDay */])(date, isUTC)] : this._weekdaysShort;
    };
    // proto.weekdaysParse  =        localeWeekdaysParse;
    Locale.prototype.weekdaysParse = function (weekdayName, format, strict) {
        var i;
        var regex;
        if (this._weekdaysParseExact) {
            return this.handleWeekStrictParse(weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // fix: here is the issue
            var date = Object(__WEBPACK_IMPORTED_MODULE_4__units_day_of_week__["d" /* setDayOfWeek */])(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '').replace('.', '\.?') + "$", 'i');
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date).replace('.', '\.?') + "$", 'i');
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date).replace('.', '\.?') + "$", 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(date, '') + "|^" + this.weekdaysShort(date) + "|^" + this.weekdaysMin(date);
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._fullWeekdaysParse)
                || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._shortWeekdaysParse)
                || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._minWeekdaysParse)
                || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._weekdaysParse)) {
                return;
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    };
    // proto.weekdaysRegex       =        weekdaysRegex;
    Locale.prototype.weekdaysRegex = function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            }
            else {
                return this._weekdaysRegex;
            }
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_weekdaysRegex')) {
                this._weekdaysRegex = __WEBPACK_IMPORTED_MODULE_3__parse_regex__["s" /* matchWord */];
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    };
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    Locale.prototype.weekdaysShortRegex = function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            }
            else {
                return this._weekdaysShortRegex;
            }
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = __WEBPACK_IMPORTED_MODULE_3__parse_regex__["s" /* matchWord */];
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    };
    Locale.prototype.weekdaysMinRegex = function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            }
            else {
                return this._weekdaysMinRegex;
            }
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["a" /* hasOwnProp */])(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = __WEBPACK_IMPORTED_MODULE_3__parse_regex__["s" /* matchWord */];
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    };
    Locale.prototype.isPM = function (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    };
    Locale.prototype.meridiem = function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    };
    Locale.prototype.formatLongDate = function (key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        var format = this._longDateFormat[key];
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    Locale.prototype.handleMonthStrictParse = function (monthName, format, strict) {
        var llc = monthName.toLocaleLowerCase();
        var i;
        var ii;
        var mom;
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = new Date(2000, i);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = this._shortMonthsParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            ii = this._longMonthsParse.indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        if (format === 'MMM') {
            ii = this._shortMonthsParse.indexOf(llc);
            if (ii !== -1) {
                return ii;
            }
            ii = this._longMonthsParse.indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        ii = this._longMonthsParse.indexOf(llc);
        if (ii !== -1) {
            return ii;
        }
        ii = this._shortMonthsParse.indexOf(llc);
        return ii !== -1 ? ii : null;
    };
    Locale.prototype.handleWeekStrictParse = function (weekdayName, format, strict) {
        var ii;
        var llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            var i = void 0;
            for (i = 0; i < 7; ++i) {
                var date = Object(__WEBPACK_IMPORTED_MODULE_4__units_day_of_week__["d" /* setDayOfWeek */])(new Date(Date.UTC(2000, 1)), i, null, true);
                this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
            }
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._weekdaysParse)
            || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._shortWeekdaysParse)
            || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_type_checks__["b" /* isArray */])(this._minWeekdaysParse)) {
            return;
        }
        if (strict) {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
    };
    Locale.prototype.computeMonthsParse = function () {
        var shortPieces = [];
        var longPieces = [];
        var mixedPieces = [];
        var date;
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(2000, i);
            shortPieces.push(this.monthsShort(date, ''));
            longPieces.push(this.months(date, ''));
            mixedPieces.push(this.months(date, ''));
            mixedPieces.push(this.monthsShort(date, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["t" /* regexEscape */])(shortPieces[i]);
            longPieces[i] = Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["t" /* regexEscape */])(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["t" /* regexEscape */])(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
    };
    Locale.prototype.computeWeekdaysParse = function () {
        var minPieces = [];
        var shortPieces = [];
        var longPieces = [];
        var mixedPieces = [];
        var i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            var date = Object(__WEBPACK_IMPORTED_MODULE_4__units_day_of_week__["d" /* setDayOfWeek */])(new Date(Date.UTC(2000, 1)), i, null, true);
            var minp = this.weekdaysMin(date);
            var shortp = this.weekdaysShort(date);
            var longp = this.weekdays(date);
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["t" /* regexEscape */])(shortPieces[i]);
            longPieces[i] = Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["t" /* regexEscape */])(longPieces[i]);
            mixedPieces[i] = Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["t" /* regexEscape */])(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
    };
    return Locale;
}());

function cmpLenRev(a, b) {
    return b.length - a.length;
}
//# sourceMappingURL=locale.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/locale/locale.defaults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultInvalidDate */
/* unused harmony export defaultLocaleWeek */
/* unused harmony export defaultLocaleMeridiemParse */
/* unused harmony export defaultRelativeTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_class__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locale.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/calendar.js");


var defaultInvalidDate = 'Invalid date';
var defaultLocaleWeek = {
    dow: 0,
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
var baseConfig = {
    calendar: __WEBPACK_IMPORTED_MODULE_1__calendar__["a" /* defaultCalendar */],
    longDateFormat: __WEBPACK_IMPORTED_MODULE_0__locale_class__["h" /* defaultLongDateFormat */],
    invalidDate: defaultInvalidDate,
    ordinal: __WEBPACK_IMPORTED_MODULE_0__locale_class__["i" /* defaultOrdinal */],
    dayOfMonthOrdinalParse: __WEBPACK_IMPORTED_MODULE_0__locale_class__["b" /* defaultDayOfMonthOrdinalParse */],
    relativeTime: defaultRelativeTime,
    months: __WEBPACK_IMPORTED_MODULE_0__locale_class__["c" /* defaultLocaleMonths */],
    monthsShort: __WEBPACK_IMPORTED_MODULE_0__locale_class__["d" /* defaultLocaleMonthsShort */],
    week: defaultLocaleWeek,
    weekdays: __WEBPACK_IMPORTED_MODULE_0__locale_class__["e" /* defaultLocaleWeekdays */],
    weekdaysMin: __WEBPACK_IMPORTED_MODULE_0__locale_class__["f" /* defaultLocaleWeekdaysMin */],
    weekdaysShort: __WEBPACK_IMPORTED_MODULE_0__locale_class__["g" /* defaultLocaleWeekdaysShort */],
    meridiemParse: defaultLocaleMeridiemParse
};
//# sourceMappingURL=locale.defaults.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/locale/locales.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeConfigs */
/* unused harmony export getSetGlobalLocale */
/* unused harmony export defineLocale */
/* unused harmony export updateLocale */
/* harmony export (immutable) */ __webpack_exports__["a"] = getLocale;
/* unused harmony export listLocales */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_class__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locale.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_defaults__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locale.defaults.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_compare_arrays__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/compare-arrays.js");
// internal storage for locale config files




var locales = {};
var localeFamilies = {};
var globalLocale;
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least,
// but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var next;
    var locale;
    var i = 0;
    while (i < names.length) {
        var split = normalizeLocale(names[i]).split('-');
        var j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && Object(__WEBPACK_IMPORTED_MODULE_3__utils_compare_arrays__["a" /* compareArrays */])(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
function mergeConfigs(parentConfig, childConfig) {
    var res = Object.assign({}, parentConfig);
    for (var childProp in childConfig) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["a" /* hasOwnProp */])(childConfig, childProp)) {
            continue;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["g" /* isObject */])(parentConfig[childProp]) && Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["g" /* isObject */])(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    var parentProp;
    for (parentProp in parentConfig) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["a" /* hasOwnProp */])(parentConfig, parentProp) &&
            !Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["a" /* hasOwnProp */])(childConfig, parentProp) &&
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["g" /* isObject */])(parentConfig[parentProp])) {
            // make sure changes to properties don't modify parent config
            res[parentProp] = Object.assign({}, res[parentProp]);
        }
    }
    return res;
}
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
     // TODO: Find a better way to register and load all the locales in Node
     if (!locales[name] && (typeof module !== 'undefined') &&
       module && module.exports) {
       try {
         oldLocale = globalLocale._abbr;
         var aliasedRequire = require;
         aliasedRequire('./locale/' + name);
         getSetGlobalLocale(oldLocale);
       } catch (e) {}
     }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["j" /* isUndefined */])(values)) {
            data = getLocale(key);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["i" /* isString */])(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    var parentConfig = __WEBPACK_IMPORTED_MODULE_1__locale_defaults__["a" /* baseConfig */];
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
            return null;
        }
    }
    locales[name] = new __WEBPACK_IMPORTED_MODULE_0__locale_class__["a" /* Locale */](mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
function updateLocale(name, config) {
    var _config = config;
    if (_config != null) {
        var parentConfig = __WEBPACK_IMPORTED_MODULE_1__locale_defaults__["a" /* baseConfig */];
        // MERGE
        var tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        var locale = new __WEBPACK_IMPORTED_MODULE_0__locale_class__["a" /* Locale */](_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
// returns locale data
function getLocale(key) {
    if (!key) {
        return globalLocale;
    }
    // let locale;
    var _key = Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["b" /* isArray */])(key) ? key : [key];
    return chooseLocale(_key);
}
function listLocales() {
    return Object.keys(locales);
}
// define default locale
getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (num) {
        var b = num % 10;
        var output = Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["k" /* toInt */])((num % 100) / 10) === 1
            ? 'th'
            : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return num + output;
    }
});
//# sourceMappingURL=locales.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/moment/add-subtract.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* harmony export (immutable) */ __webpack_exports__["b"] = subtract;
/* unused harmony export addSubtract */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__duration_create__ = __webpack_require__("../../../../ngx-bootstrap/chronos/duration/create.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_abs_round__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/abs-round.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_clone__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/clone.js");





function add(date, val, period, isUTC) {
    var dur = Object(__WEBPACK_IMPORTED_MODULE_0__duration_create__["a" /* createDuration */])(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
function subtract(date, val, period, isUTC) {
    var dur = Object(__WEBPACK_IMPORTED_MODULE_0__duration_create__["a" /* createDuration */])(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
function addSubtract(date, duration, isAdding, isUTC) {
    var milliseconds = duration._milliseconds;
    var days = Object(__WEBPACK_IMPORTED_MODULE_1__utils_abs_round__["a" /* absRound */])(duration._days);
    var months = Object(__WEBPACK_IMPORTED_MODULE_1__utils_abs_round__["a" /* absRound */])(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_setters__["g" /* setMonth */])(date, Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["h" /* getMonth */])(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_setters__["a" /* setDate */])(date, Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["a" /* getDate */])(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_setters__["i" /* setTime */])(date, Object(__WEBPACK_IMPORTED_MODULE_2__utils_date_getters__["j" /* getTime */])(date) + milliseconds * isAdding);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_4__create_clone__["a" /* cloneDate */])(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}
//# sourceMappingURL=add-subtract.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/parse/regex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return match1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return match2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return match3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return match4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return match6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return match1to2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return match3to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return match5to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return match1to3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return match1to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return match1to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return matchUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return matchSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return matchOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return matchShortOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return matchTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return matchWord; });
/* harmony export (immutable) */ __webpack_exports__["a"] = addRegexToken;
/* harmony export (immutable) */ __webpack_exports__["b"] = getParseRegexForToken;
/* harmony export (immutable) */ __webpack_exports__["t"] = regexEscape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");

var match1 = /\d/; //       0 - 9
var match2 = /\d\d/; //      00 - 99
var match3 = /\d{3}/; //     000 - 999
var match4 = /\d{4}/; //    0000 - 9999
var match6 = /[+-]?\d{6}/; // -999999 - 999999
var match1to2 = /\d\d?/; //       0 - 99
var match3to4 = /\d\d\d\d?/; //     999 - 9999
var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3 = /\d{1,3}/; //       0 - 999
var match1to4 = /\d{1,4}/; //       0 - 9999
var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
var matchUnsigned = /\d+/; //       0 - inf
var matchSigned = /[+-]?\d+/; //    -inf - inf
var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var regexes = {};
function addRegexToken(token, regex, strictRegex) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["e" /* isFunction */])(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}
function getParseRegexForToken(token, locale) {
    var _strict = false;
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["a" /* hasOwnProp */])(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
}
function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
//# sourceMappingURL=regex.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/parse/token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addParseToken;
/* harmony export (immutable) */ __webpack_exports__["c"] = addWeekParseToken;
/* harmony export (immutable) */ __webpack_exports__["b"] = addTimeToArrayFromToken;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
// tslint:disable:max-line-length

var tokens = {};
function addParseToken(token, callback) {
    var _token = Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["i" /* isString */])(token) ? [token] : token;
    var func = callback;
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["f" /* isNumber */])(callback)) {
        func = function (input, array, config) {
            array[callback] = Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["k" /* toInt */])(input);
            return config;
        };
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["b" /* isArray */])(_token) && Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["e" /* isFunction */])(func)) {
        var i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    });
}
function addTimeToArrayFromToken(token, input, config) {
    if (input != null && Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["a" /* hasOwnProp */])(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}
//# sourceMappingURL=token.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/aliases.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addUnitAlias;
/* harmony export (immutable) */ __webpack_exports__["c"] = normalizeUnits;
/* harmony export (immutable) */ __webpack_exports__["b"] = normalizeObjectUnits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");

var aliases = {};
var _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    var _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
}
function normalizeUnits(units) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["i" /* isString */])(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
function normalizeObjectUnits(inputObject) {
    var normalizedInput = {};
    var normalizedProp;
    var prop;
    for (prop in inputObject) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_type_checks__["a" /* hasOwnProp */])(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return normalizedInput;
}
//# sourceMappingURL=aliases.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MILLISECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WEEKDAY; });
// place in new Date([array])
var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/day-of-month.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");








// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('D', ['DD', 2, false], 'Do', function (date, opts) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["a" /* getDate */])(date, opts.isUTC).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_6__aliases__["a" /* addUnitAlias */])('date', 'D');
// PRIOROITY
Object(__WEBPACK_IMPORTED_MODULE_7__priorities__["a" /* addUnitPriority */])('date', 9);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('D', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('DD', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('Do', function (isStrict, locale) {
    return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
});
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])(['D', 'DD'], __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* DATE */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])('Do', function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* DATE */]] = Object(__WEBPACK_IMPORTED_MODULE_5__utils_type_checks__["k" /* toInt */])(input.match(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */])[0]);
    return config;
});
//# sourceMappingURL=day-of-month.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/day-of-week.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseWeekday */
/* unused harmony export parseIsoWeekday */
/* unused harmony export getSetDayOfWeek */
/* harmony export (immutable) */ __webpack_exports__["d"] = setDayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["c"] = getLocaleDayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["f"] = setLocaleDayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["b"] = getISODayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["e"] = setISODayOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");










// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('d', null, 'do', function (date, opts) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["b" /* getDay */])(date, opts.isUTC).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('dd', null, null, function (date, opts) {
    return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('ddd', null, null, function (date, opts) {
    return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('dddd', null, null, function (date, opts) {
    return opts.locale.weekdays(date, opts.format, opts.isUTC);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('e', null, null, function (date, opts) {
    return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10);
    // return getDay(date, opts.isUTC).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('E', null, null, function (date, opts) {
    return getISODayOfWeek(date, opts.isUTC).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_3__aliases__["a" /* addUnitAlias */])('day', 'd');
Object(__WEBPACK_IMPORTED_MODULE_3__aliases__["a" /* addUnitAlias */])('weekday', 'e');
Object(__WEBPACK_IMPORTED_MODULE_3__aliases__["a" /* addUnitAlias */])('isoWeekday', 'E');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_4__priorities__["a" /* addUnitPriority */])('day', 11);
Object(__WEBPACK_IMPORTED_MODULE_4__priorities__["a" /* addUnitPriority */])('weekday', 11);
Object(__WEBPACK_IMPORTED_MODULE_4__priorities__["a" /* addUnitPriority */])('isoWeekday', 11);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('d', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('e', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('E', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});
Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["c" /* addWeekParseToken */])(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_6__create_parsing_flags__["a" /* getParsingFlags */])(config).invalidWeekday = !!input;
    }
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["c" /* addWeekParseToken */])(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = Object(__WEBPACK_IMPORTED_MODULE_7__utils_type_checks__["k" /* toInt */])(input);
    return config;
});
// HELPERS
function parseWeekday(input, locale) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_7__utils_type_checks__["i" /* isString */])(input)) {
        return input;
    }
    var _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    var _weekDay = locale.weekdaysParse(input);
    if (Object(__WEBPACK_IMPORTED_MODULE_7__utils_type_checks__["f" /* isNumber */])(_weekDay)) {
        return _weekDay;
    }
    return null;
}
function parseIsoWeekday(input, locale) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_9__locale_locales__["a" /* getLocale */])(); }
    if (Object(__WEBPACK_IMPORTED_MODULE_7__utils_type_checks__["i" /* isString */])(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_7__utils_type_checks__["f" /* isNumber */])(input) && isNaN(input) ? null : input;
}
// MOMENTS
function getSetDayOfWeek(date, input, opts) {
    if (!input) {
        return getDayOfWeek(date, opts.isUTC);
    }
    return setDayOfWeek(date, input, opts.locale, opts.isUTC);
}
function setDayOfWeek(date, input, locale, isUTC) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_9__locale_locales__["a" /* getLocale */])(); }
    var day = Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["b" /* getDay */])(date, isUTC);
    var _input = parseWeekday(input, locale);
    return Object(__WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__["a" /* add */])(date, _input - day, 'day');
}
function getDayOfWeek(date, isUTC) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["b" /* getDay */])(date, isUTC);
}
/********************************************/
// todo: utc
// getSetLocaleDayOfWeek
function getLocaleDayOfWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_9__locale_locales__["a" /* getLocale */])(); }
    return (Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["b" /* getDay */])(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
function setLocaleDayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    var weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return Object(__WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__["a" /* add */])(date, input - weekday, 'day');
}
// getSetISODayOfWeek
function getISODayOfWeek(date, isUTC) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["b" /* getDay */])(date, isUTC) || 7;
}
function setISODayOfWeek(date, input, opts) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    if (opts === void 0) { opts = {}; }
    var weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}
//# sourceMappingURL=day-of-week.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/day-of-year.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDayOfYear;
/* unused harmony export setDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_start_end_of__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");








// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
    return getDayOfYear(date).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_5__aliases__["a" /* addUnitAlias */])('dayOfYear', 'DDD');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_4__priorities__["a" /* addUnitPriority */])('dayOfYear', 4);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('DDD', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["e" /* match1to3 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('DDDD', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["i" /* match3 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input);
    return config;
});
function getDayOfYear(date) {
    var date1 = +Object(__WEBPACK_IMPORTED_MODULE_1__utils_start_end_of__["b" /* startOf */])(date, 'day');
    var date2 = +Object(__WEBPACK_IMPORTED_MODULE_1__utils_start_end_of__["b" /* startOf */])(date, 'year');
    var someDate = date1 - date2;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}
function setDayOfYear(date, input) {
    var dayOfYear = getDayOfYear(date);
    return Object(__WEBPACK_IMPORTED_MODULE_7__moment_add_subtract__["a" /* add */])(date, (input - dayOfYear), 'day');
}
//# sourceMappingURL=day-of-year.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/hour.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/zero-fill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");










// FORMATTING
function hFormat(date, isUTC) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date, isUTC) % 12 || 12;
}
function kFormat(date, isUTC) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date, isUTC) || 24;
}
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('H', ['HH', 2, false], null, function (date, opts) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date, opts.isUTC).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('h', ['hh', 2, false], null, function (date, opts) {
    return hFormat(date, opts.isUTC).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('k', ['kk', 2, false], null, function (date, opts) {
    return kFormat(date, opts.isUTC).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('hmm', null, null, function (date, opts) {
    var _h = hFormat(date, opts.isUTC);
    var _mm = Object(__WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__["a" /* zeroFill */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["g" /* getMinutes */])(date, opts.isUTC), 2);
    return "" + _h + _mm;
});
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('hmmss', null, null, function (date, opts) {
    var _h = hFormat(date, opts.isUTC);
    var _mm = Object(__WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__["a" /* zeroFill */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["g" /* getMinutes */])(date, opts.isUTC), 2);
    var _ss = Object(__WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__["a" /* zeroFill */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["i" /* getSeconds */])(date, opts.isUTC), 2);
    return "" + _h + _mm + _ss;
});
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('Hmm', null, null, function (date, opts) {
    var _H = Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date, opts.isUTC);
    var _mm = Object(__WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__["a" /* zeroFill */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["g" /* getMinutes */])(date, opts.isUTC), 2);
    return "" + _H + _mm;
});
Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])('Hmmss', null, null, function (date, opts) {
    var _H = Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date, opts.isUTC);
    var _mm = Object(__WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__["a" /* zeroFill */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["g" /* getMinutes */])(date, opts.isUTC), 2);
    var _ss = Object(__WEBPACK_IMPORTED_MODULE_2__utils_zero_fill__["a" /* zeroFill */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["i" /* getSeconds */])(date, opts.isUTC), 2);
    return "" + _H + _mm + _ss;
});
function meridiem(token, lowercase) {
    Object(__WEBPACK_IMPORTED_MODULE_1__format_format__["a" /* addFormatToken */])(token, null, null, function (date, opts) {
        return opts.locale.meridiem(Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["e" /* getHours */])(date, opts.isUTC), Object(__WEBPACK_IMPORTED_MODULE_0__utils_date_getters__["g" /* getMinutes */])(date, opts.isUTC), lowercase);
    });
}
meridiem('a', true);
meridiem('A', false);
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_9__aliases__["a" /* addUnitAlias */])('hour', 'h');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_8__priorities__["a" /* addUnitPriority */])('hour', 13);
// PARSING
function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('a', matchMeridiem);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('A', matchMeridiem);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('H', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('h', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('k', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('HH', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('hh', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('kk', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('hmm', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["j" /* match3to4 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('hmmss', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["l" /* match5to6 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('Hmm', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["j" /* match3to4 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('Hmmss', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["l" /* match5to6 */]);
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])(['H', 'HH'], __WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]);
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])(['k', 'kk'], function (input, array, config) {
    var kInput = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input);
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]] = kInput === 24 ? 0 : kInput;
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])(['h', 'hh'], function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input);
    Object(__WEBPACK_IMPORTED_MODULE_7__create_parsing_flags__["a" /* getParsingFlags */])(config).bigHour = true;
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(0, pos));
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["d" /* MINUTE */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(pos));
    Object(__WEBPACK_IMPORTED_MODULE_7__create_parsing_flags__["a" /* getParsingFlags */])(config).bigHour = true;
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(0, pos1));
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["d" /* MINUTE */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(pos1, 2));
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["f" /* SECOND */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(pos2));
    Object(__WEBPACK_IMPORTED_MODULE_7__create_parsing_flags__["a" /* getParsingFlags */])(config).bigHour = true;
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(0, pos));
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["d" /* MINUTE */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(pos));
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* HOUR */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(0, pos1));
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["d" /* MINUTE */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(pos1, 2));
    array[__WEBPACK_IMPORTED_MODULE_5__constants__["f" /* SECOND */]] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input.substr(pos2));
    return config;
});
//# sourceMappingURL=hour.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_of_month__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-month.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_of_year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hour__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/hour.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__millisecond__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/millisecond.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__minute__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/minute.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__month__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/month.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__offset__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quarter__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/quarter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__second__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/second.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__timestamp__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/timestamp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__week_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__week_year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week-year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/year.js");


















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/millisecond.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
// tslint:disable:no-bitwise
// FORMATTING








Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('S', null, null, function (date, opts) {
    return (~~(Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) / 100)).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SS', 2, false], null, function (date, opts) {
    return (~~(Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) / 10)).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSS', 3, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC)).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSSS', 4, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) * 10).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSSSS', 5, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) * 100).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSSSSS', 6, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) * 1000).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSSSSSS', 7, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) * 10000).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) * 100000).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_getters__["f" /* getMilliseconds */])(date, opts.isUTC) * 1000000).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_5__aliases__["a" /* addUnitAlias */])('millisecond', 'ms');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_6__priorities__["a" /* addUnitPriority */])('millisecond', 16);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_1__parse_regex__["a" /* addRegexToken */])('S', __WEBPACK_IMPORTED_MODULE_1__parse_regex__["e" /* match1to3 */], __WEBPACK_IMPORTED_MODULE_1__parse_regex__["c" /* match1 */]);
Object(__WEBPACK_IMPORTED_MODULE_1__parse_regex__["a" /* addRegexToken */])('SS', __WEBPACK_IMPORTED_MODULE_1__parse_regex__["e" /* match1to3 */], __WEBPACK_IMPORTED_MODULE_1__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_1__parse_regex__["a" /* addRegexToken */])('SSS', __WEBPACK_IMPORTED_MODULE_1__parse_regex__["e" /* match1to3 */], __WEBPACK_IMPORTED_MODULE_1__parse_regex__["i" /* match3 */]);
var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    Object(__WEBPACK_IMPORTED_MODULE_1__parse_regex__["a" /* addRegexToken */])(token, __WEBPACK_IMPORTED_MODULE_1__parse_regex__["r" /* matchUnsigned */]);
}
function parseMs(input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_2__constants__["c" /* MILLISECOND */]] = Object(__WEBPACK_IMPORTED_MODULE_3__utils_type_checks__["k" /* toInt */])(parseFloat("0." + input) * 1000);
    return config;
}
for (token = 'S'; token.length <= 9; token += 'S') {
    Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["a" /* addParseToken */])(token, parseMs);
}
// MOMENTS
//# sourceMappingURL=millisecond.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/minute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");







// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('m', ['mm', 2, false], null, function (date, opts) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["g" /* getMinutes */])(date, opts.isUTC).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_6__aliases__["a" /* addUnitAlias */])('minute', 'm');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_5__priorities__["a" /* addUnitPriority */])('minute', 14);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('m', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('mm', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])(['m', 'mm'], __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* MINUTE */]);
//# sourceMappingURL=minute.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/month.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = daysInMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_parsing_flags__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/parsing-flags.js");











// todo: this is duplicate, source in date-getters.ts
function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* mod */])(month, 12);
    var _year = year + (month - modMonth) / 12;
    return modMonth === 1
        ? Object(__WEBPACK_IMPORTED_MODULE_1__year__["b" /* isLeapYear */])(_year) ? 29 : 28
        : (31 - modMonth % 7 % 2);
}
// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('M', ['MM', 2, false], 'Mo', function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["h" /* getMonth */])(date, opts.isUTC) + 1).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('MMM', null, null, function (date, opts) {
    return opts.locale.monthsShort(date, opts.format, opts.isUTC);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('MMMM', null, null, function (date, opts) {
    return opts.locale.months(date, opts.format, opts.isUTC);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_9__aliases__["a" /* addUnitAlias */])('month', 'M');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_8__priorities__["a" /* addUnitPriority */])('month', 8);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_4__parse_regex__["a" /* addRegexToken */])('M', __WEBPACK_IMPORTED_MODULE_4__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_4__parse_regex__["a" /* addRegexToken */])('MM', __WEBPACK_IMPORTED_MODULE_4__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_4__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_4__parse_regex__["a" /* addRegexToken */])('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_regex__["a" /* addRegexToken */])('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});
Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["a" /* addParseToken */])(['M', 'MM'], function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_6__constants__["e" /* MONTH */]] = Object(__WEBPACK_IMPORTED_MODULE_7__utils_type_checks__["k" /* toInt */])(input) - 1;
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["a" /* addParseToken */])(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[__WEBPACK_IMPORTED_MODULE_6__constants__["e" /* MONTH */]] = month;
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_10__create_parsing_flags__["a" /* getParsingFlags */])(config).invalidMonth = !!input;
    }
    return config;
});
//# sourceMappingURL=month.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/offset.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneWithOffset;
/* unused harmony export getDateOffset */
/* unused harmony export getUTCOffset */
/* unused harmony export setUTCOffset */
/* unused harmony export setOffsetToUTC */
/* unused harmony export isDaylightSavingTime */
/* unused harmony export setOffsetToParsedOffset */
/* unused harmony export hasAlignedHourOffset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_zero_fill__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/zero-fill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_clone__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
// tslint:disable:no-bitwise max-line-length
// FORMATTING








function addOffsetFormatToken(token, separator) {
    Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(token, null, null, function (date, config) {
        var offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + Object(__WEBPACK_IMPORTED_MODULE_1__utils_zero_fill__["a" /* zeroFill */])(~~(offset / 60), 2) + separator + Object(__WEBPACK_IMPORTED_MODULE_1__utils_zero_fill__["a" /* zeroFill */])(~~(offset) % 60, 2);
    });
}
addOffsetFormatToken('Z', ':');
addOffsetFormatToken('ZZ', '');
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('Z', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["o" /* matchShortOffset */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('ZZ', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["o" /* matchShortOffset */]);
Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["a" /* addParseToken */])(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["o" /* matchShortOffset */], input);
    return config;
});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, str) {
    var matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    var chunk = matches[matches.length - 1];
    var parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    var minutes = parseInt(parts[1], 10) * 60 + Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["k" /* toInt */])(parts[2]);
    var _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, date, config) {
    if (config === void 0) { config = {}; }
    if (!config._isUTC) {
        return input;
    }
    var res = Object(__WEBPACK_IMPORTED_MODULE_6__create_clone__["a" /* cloneDate */])(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    var offsetDiff = (config._offset || 0) * 60000;
    var diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
// todo: it's from moment timezones
// hooks.updateOffset = function () {
// };
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getUTCOffset(date, config) {
    if (config === void 0) { config = {}; }
    var _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}
function setUTCOffset(date, input, keepLocalTime, keepMinutes, config) {
    if (config === void 0) { config = {}; }
    var offset = config._offset || 0;
    var localAdjust;
    var _input = input;
    var _date = date;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["i" /* isString */])(_input)) {
        _input = offsetFromString(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["o" /* matchShortOffset */], _input);
        if (_input === null) {
            return _date;
        }
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["f" /* isNumber */])(_input) && Math.abs(_input) < 16 && !keepMinutes) {
        _input = _input * 60;
    }
    if (!config._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(_date);
    }
    config._offset = _input;
    config._isUTC = true;
    if (localAdjust != null) {
        _date = Object(__WEBPACK_IMPORTED_MODULE_4__moment_add_subtract__["a" /* add */])(_date, localAdjust, 'minutes');
    }
    if (offset !== _input) {
        if (!keepLocalTime || config._changeInProgress) {
            _date = Object(__WEBPACK_IMPORTED_MODULE_4__moment_add_subtract__["a" /* add */])(_date, _input - offset, 'minutes', config._isUTC);
            // addSubtract(this, createDuration(_input - offset, 'm'), 1, false);
        }
        else if (!config._changeInProgress) {
            config._changeInProgress = true;
            // todo: add timezone handling
            // hooks.updateOffset(this, true);
            config._changeInProgress = null;
        }
    }
    return _date;
}
/*
export function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== 'string') {
      input = -input;
    }

    this.utcOffset(input, keepLocalTime);

    return this;
  } else {
    return -this.utcOffset();
  }
}
*/
function setOffsetToUTC(date, keepLocalTime) {
    return setUTCOffset(date, 0, keepLocalTime);
}
function isDaylightSavingTime(date) {
    return (getUTCOffset(date) > getUTCOffset(Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_setters__["g" /* setMonth */])(Object(__WEBPACK_IMPORTED_MODULE_6__create_clone__["a" /* cloneDate */])(date), 0))
        || getUTCOffset(date) > getUTCOffset(Object(__WEBPACK_IMPORTED_MODULE_7__utils_date_setters__["g" /* setMonth */])(Object(__WEBPACK_IMPORTED_MODULE_6__create_clone__["a" /* cloneDate */])(date), 5)));
}
/*export function setOffsetToLocal(date: Date, isUTC?: boolean, keepLocalTime?: boolean) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;

    if (keepLocalTime) {
      this.subtract(getDateOffset(this), 'm');
    }
  }
  return this;
}*/
function setOffsetToParsedOffset(date, input, config) {
    if (config === void 0) { config = {}; }
    if (config._tzm != null) {
        return setUTCOffset(date, config._tzm, false, true, config);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_type_checks__["i" /* isString */])(input)) {
        var tZone = offsetFromString(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["n" /* matchOffset */], input);
        if (tZone != null) {
            return setUTCOffset(date, tZone, false, false, config);
        }
        return setUTCOffset(date, 0, true, false, config);
    }
    return date;
}
function hasAlignedHourOffset(date, input) {
    var _input = input ? getUTCOffset(input, { _isUTC: false }) : 0;
    return (getUTCOffset(date) - _input) % 60 === 0;
}
// DEPRECATED
/*export function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }

  const c = {};

  copyConfig(c, this);
  c = prepareConfig(c);

  if (c._a) {
    const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() &&
      compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}*/
// in Khronos
/*export function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}

export function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}

export function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}*/
//# sourceMappingURL=offset.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/priorities.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addUnitPriority;
var priorities = {};
function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}
/*
export function getPrioritizedUnits(unitsObj) {
  const units = [];
  let unit;
  for (unit in unitsObj) {
    if (unitsObj.hasOwnProperty(unit)) {
      units.push({ unit, priority: priorities[unit] });
    }
  }
  units.sort(function (a, b) {
    return a.priority - b.priority;
  });

  return units;
}
*/
//# sourceMappingURL=priorities.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/quarter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getQuarter */
/* unused harmony export setQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");









// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('Q', null, 'Qo', function (date, opts) {
    return getQuarter(date, opts.isUTC).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_7__aliases__["a" /* addUnitAlias */])('quarter', 'Q');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_6__priorities__["a" /* addUnitPriority */])('quarter', 7);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_1__parse_regex__["a" /* addRegexToken */])('Q', __WEBPACK_IMPORTED_MODULE_1__parse_regex__["c" /* match1 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_token__["a" /* addParseToken */])('Q', function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* MONTH */]] = (Object(__WEBPACK_IMPORTED_MODULE_4__utils_type_checks__["k" /* toInt */])(input) - 1) * 3;
    return config;
});
// MOMENTS
function getQuarter(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return Math.ceil((Object(__WEBPACK_IMPORTED_MODULE_5__utils_date_getters__["h" /* getMonth */])(date, isUTC) + 1) / 3);
}
function setQuarter(date, quarter, isUTC) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__utils_date_setters__["g" /* setMonth */])(date, (quarter - 1) * 3 + Object(__WEBPACK_IMPORTED_MODULE_5__utils_date_getters__["h" /* getMonth */])(date, isUTC) % 3, isUTC);
}
// export function getSetQuarter(input) {
//   return input == null
//     ? Math.ceil((this.month() + 1) / 3)
//     : this.month((input - 1) * 3 + this.month() % 3);
// }
//# sourceMappingURL=quarter.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/second.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");







// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('s', ['ss', 2, false], null, function (date, opts) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["i" /* getSeconds */])(date, opts.isUTC).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_5__aliases__["a" /* addUnitAlias */])('second', 's');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_6__priorities__["a" /* addUnitPriority */])('second', 15);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('s', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('ss', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])(['s', 'ss'], __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* SECOND */]);
//# sourceMappingURL=second.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");





// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('X', null, null, function (date) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["o" /* unix */])(date).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('x', null, null, function (date) {
    return date.valueOf().toString(10);
});
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('x', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["p" /* matchSigned */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('X', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["q" /* matchTimestamp */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])('x', function (input, array, config) {
    config._d = new Date(Object(__WEBPACK_IMPORTED_MODULE_4__utils_type_checks__["k" /* toInt */])(input));
    return config;
});
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/week-calendar-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dayOfYearFromWeeks;
/* harmony export (immutable) */ __webpack_exports__["b"] = weekOfYear;
/* harmony export (immutable) */ __webpack_exports__["c"] = weeksInYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_date_from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_of_year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/**
 *
 * @param {number} year
 * @param {number} dow - start-of-first-week
 * @param {number} doy - start-of-year
 * @returns {number}
 */




function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (Object(__WEBPACK_IMPORTED_MODULE_0__create_date_from_array__["b" /* createUTCDate */])(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7;
    var weekOffset = firstWeekOffset(year, dow, doy);
    var dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    var resYear;
    var resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = Object(__WEBPACK_IMPORTED_MODULE_1__year__["a" /* daysInYear */])(resYear) + dayOfYear;
    }
    else if (dayOfYear > Object(__WEBPACK_IMPORTED_MODULE_1__year__["a" /* daysInYear */])(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - Object(__WEBPACK_IMPORTED_MODULE_1__year__["a" /* daysInYear */])(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
function weekOfYear(date, dow, doy) {
    var weekOffset = firstWeekOffset(Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["d" /* getFullYear */])(date), dow, doy);
    var week = Math.floor((Object(__WEBPACK_IMPORTED_MODULE_2__day_of_year__["a" /* getDayOfYear */])(date) - weekOffset - 1) / 7) + 1;
    var resWeek;
    var resYear;
    if (week < 1) {
        resYear = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["d" /* getFullYear */])(date) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["d" /* getFullYear */])(date), dow, doy)) {
        resWeek = week - weeksInYear(Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["d" /* getFullYear */])(date), dow, doy);
        resYear = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["d" /* getFullYear */])(date) + 1;
    }
    else {
        resYear = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_getters__["d" /* getFullYear */])(date);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy);
    var weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (Object(__WEBPACK_IMPORTED_MODULE_1__year__["a" /* daysInYear */])(year) - weekOffset + weekOffsetNext) / 7;
}
//# sourceMappingURL=week-calendar-utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/week-year.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSetWeekYear */
/* unused harmony export getWeekYear */
/* unused harmony export getSetISOWeekYear */
/* unused harmony export getISOWeekYear */
/* unused harmony export getISOWeeksInYear */
/* unused harmony export getWeeksInYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_date_from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/date-from-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");














// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['gg', 2, false], null, function (date, opts) {
    // return this.weekYear() % 100;
    return (getWeekYear(date, opts.locale) % 100).toString();
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['GG', 2, false], null, function (date) {
    // return this.isoWeekYear() % 100;
    return (getISOWeekYear(date) % 100).toString();
});
function addWeekYearFormatToken(token, getter) {
    Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, [token, token.length, false], null, getter);
}
function _getWeekYearFormatCb(date, opts) {
    return getWeekYear(date, opts.locale).toString();
}
function _getISOWeekYearFormatCb(date) {
    return getISOWeekYear(date).toString();
}
addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_1__aliases__["a" /* addUnitAlias */])('weekYear', 'gg');
Object(__WEBPACK_IMPORTED_MODULE_1__aliases__["a" /* addUnitAlias */])('isoWeekYear', 'GG');
// PRIORITY
Object(__WEBPACK_IMPORTED_MODULE_2__priorities__["a" /* addUnitPriority */])('weekYear', 1);
Object(__WEBPACK_IMPORTED_MODULE_2__priorities__["a" /* addUnitPriority */])('isoWeekYear', 1);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('G', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["p" /* matchSigned */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('g', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["p" /* matchSigned */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('GG', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('gg', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('GGGG', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["f" /* match1to4 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["k" /* match4 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('gggg', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["f" /* match1to4 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["k" /* match4 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('GGGGG', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["g" /* match1to6 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["m" /* match6 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_regex__["a" /* addRegexToken */])('ggggg', __WEBPACK_IMPORTED_MODULE_3__parse_regex__["g" /* match1to6 */], __WEBPACK_IMPORTED_MODULE_3__parse_regex__["m" /* match6 */]);
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["c" /* addWeekParseToken */])(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = Object(__WEBPACK_IMPORTED_MODULE_5__utils_type_checks__["k" /* toInt */])(input);
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_4__parse_token__["c" /* addWeekParseToken */])(['gg', 'GG'], function (input, week, config, token) {
    week[token] = Object(__WEBPACK_IMPORTED_MODULE_6__year__["c" /* parseTwoDigitYear */])(input);
    return config;
});
// MOMENTS
function getSetWeekYear(date, input, locale) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_11__locale_locales__["a" /* getLocale */])(); }
    return getSetWeekYearHelper(date, input, 
    // this.week(),
    Object(__WEBPACK_IMPORTED_MODULE_9__week__["b" /* getWeek */])(date, locale), 
    // this.weekday(),
    Object(__WEBPACK_IMPORTED_MODULE_10__day_of_week__["c" /* getLocaleDayOfWeek */])(date, locale), locale.firstDayOfWeek(), locale.firstDayOfYear());
}
function getWeekYear(date, locale) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_11__locale_locales__["a" /* getLocale */])(); }
    return Object(__WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__["b" /* weekOfYear */])(date, locale.firstDayOfWeek(), locale.firstDayOfYear()).year;
}
function getSetISOWeekYear(date, input) {
    return getSetWeekYearHelper(date, input, Object(__WEBPACK_IMPORTED_MODULE_9__week__["a" /* getISOWeek */])(date), Object(__WEBPACK_IMPORTED_MODULE_10__day_of_week__["b" /* getISODayOfWeek */])(date), 1, 4);
}
function getISOWeekYear(date) {
    return Object(__WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__["b" /* weekOfYear */])(date, 1, 4).year;
}
function getISOWeeksInYear(date, isUTC) {
    return Object(__WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__["c" /* weeksInYear */])(Object(__WEBPACK_IMPORTED_MODULE_13__utils_date_getters__["d" /* getFullYear */])(date, isUTC), 1, 4);
}
function getWeeksInYear(date, isUTC, locale) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_11__locale_locales__["a" /* getLocale */])(); }
    return Object(__WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__["c" /* weeksInYear */])(Object(__WEBPACK_IMPORTED_MODULE_13__utils_date_getters__["d" /* getFullYear */])(date, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear());
}
function getSetWeekYearHelper(date, input, week, weekday, dow, doy) {
    if (!input) {
        return getWeekYear(date);
    }
    var weeksTarget = Object(__WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__["c" /* weeksInYear */])(input, dow, doy);
    var _week = week > weeksTarget ? weeksTarget : week;
    return setWeekAll(date, input, _week, weekday, dow, doy);
}
function setWeekAll(date, weekYear, week, weekday, dow, doy) {
    var dayOfYearData = Object(__WEBPACK_IMPORTED_MODULE_7__week_calendar_utils__["a" /* dayOfYearFromWeeks */])(weekYear, week, weekday, dow, doy);
    var _date = Object(__WEBPACK_IMPORTED_MODULE_8__create_date_from_array__["b" /* createUTCDate */])(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    Object(__WEBPACK_IMPORTED_MODULE_12__utils_date_setters__["c" /* setFullYear */])(_date, Object(__WEBPACK_IMPORTED_MODULE_13__utils_date_getters__["d" /* getFullYear */])(_date, true));
    Object(__WEBPACK_IMPORTED_MODULE_12__utils_date_setters__["g" /* setMonth */])(_date, Object(__WEBPACK_IMPORTED_MODULE_13__utils_date_getters__["h" /* getMonth */])(_date, true));
    Object(__WEBPACK_IMPORTED_MODULE_12__utils_date_setters__["a" /* setDate */])(_date, Object(__WEBPACK_IMPORTED_MODULE_13__utils_date_getters__["a" /* getDate */])(_date, true));
    return _date;
}
//# sourceMappingURL=week-year.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/week.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setWeek */
/* harmony export (immutable) */ __webpack_exports__["b"] = getWeek;
/* unused harmony export setISOWeek */
/* harmony export (immutable) */ __webpack_exports__["a"] = getISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__week_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/week-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");









// FORMATTING
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('w', ['ww', 2, false], 'wo', function (date, opts) {
    return getWeek(date, opts.locale).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('W', ['WW', 2, false], 'Wo', function (date) {
    return getISOWeek(date).toString(10);
});
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_3__aliases__["a" /* addUnitAlias */])('week', 'w');
Object(__WEBPACK_IMPORTED_MODULE_3__aliases__["a" /* addUnitAlias */])('isoWeek', 'W');
// PRIORITIES
Object(__WEBPACK_IMPORTED_MODULE_4__priorities__["a" /* addUnitPriority */])('week', 5);
Object(__WEBPACK_IMPORTED_MODULE_4__priorities__["a" /* addUnitPriority */])('isoWeek', 5);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('w', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('ww', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('W', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('WW', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_5__parse_token__["c" /* addWeekParseToken */])(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = Object(__WEBPACK_IMPORTED_MODULE_6__utils_type_checks__["k" /* toInt */])(input);
    return config;
});
// export function getSetWeek (input) {
//   var week = this.localeData().week(this);
//   return input == null ? week : this.add((input - week) * 7, 'd');
// }
function setWeek(date, input, locale) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_7__locale_locales__["a" /* getLocale */])(); }
    var week = getWeek(date, locale);
    return Object(__WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__["a" /* add */])(date, (input - week) * 7, 'day');
}
function getWeek(date, locale) {
    if (locale === void 0) { locale = Object(__WEBPACK_IMPORTED_MODULE_7__locale_locales__["a" /* getLocale */])(); }
    return locale.week(date);
}
// export function getSetISOWeek (input) {
//   var week = weekOfYear(this, 1, 4).week;
//   return input == null ? week : this.add((input - week) * 7, 'd');
// }
function setISOWeek(date, input) {
    var week = getISOWeek(date);
    return Object(__WEBPACK_IMPORTED_MODULE_8__moment_add_subtract__["a" /* add */])(date, (input - week) * 7, 'day');
}
function getISOWeek(date) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__week_calendar_utils__["b" /* weekOfYear */])(date, 1, 4).week;
}
//# sourceMappingURL=week.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/units/year.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parseTwoDigitYear;
/* harmony export (immutable) */ __webpack_exports__["a"] = daysInYear;
/* harmony export (immutable) */ __webpack_exports__["b"] = isLeapYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_regex__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_token__ = __webpack_require__("../../../../ngx-bootstrap/chronos/parse/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__priorities__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/priorities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aliases__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/aliases.js");








// FORMATTING
function getYear(date, opts) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["d" /* getFullYear */])(date, opts.isUTC).toString();
}
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])('Y', null, null, function (date, opts) {
    var y = Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["d" /* getFullYear */])(date, opts.isUTC);
    return y <= 9999 ? y.toString(10) : "+" + y;
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['YY', 2, false], null, function (date, opts) {
    return (Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_getters__["d" /* getFullYear */])(date, opts.isUTC) % 100).toString(10);
});
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['YYYY', 4, false], null, getYear);
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['YYYYY', 5, false], null, getYear);
Object(__WEBPACK_IMPORTED_MODULE_0__format_format__["a" /* addFormatToken */])(null, ['YYYYYY', 6, true], null, getYear);
// ALIASES
Object(__WEBPACK_IMPORTED_MODULE_7__aliases__["a" /* addUnitAlias */])('year', 'y');
// PRIORITIES
Object(__WEBPACK_IMPORTED_MODULE_6__priorities__["a" /* addUnitPriority */])('year', 1);
// PARSING
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('Y', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["p" /* matchSigned */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('YY', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["d" /* match1to2 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["h" /* match2 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('YYYY', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["f" /* match1to4 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["k" /* match4 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('YYYYY', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["g" /* match1to6 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["m" /* match6 */]);
Object(__WEBPACK_IMPORTED_MODULE_2__parse_regex__["a" /* addRegexToken */])('YYYYYY', __WEBPACK_IMPORTED_MODULE_2__parse_regex__["g" /* match1to6 */], __WEBPACK_IMPORTED_MODULE_2__parse_regex__["m" /* match6 */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])(['YYYYY', 'YYYYYY'], __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* YEAR */]);
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])('YYYY', function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* YEAR */]] = input.length === 2 ? parseTwoDigitYear(input) : Object(__WEBPACK_IMPORTED_MODULE_5__utils_type_checks__["k" /* toInt */])(input);
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])('YY', function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* YEAR */]] = parseTwoDigitYear(input);
    return config;
});
Object(__WEBPACK_IMPORTED_MODULE_3__parse_token__["a" /* addParseToken */])('Y', function (input, array, config) {
    array[__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* YEAR */]] = parseInt(input, 10);
    return config;
});
function parseTwoDigitYear(input) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__utils_type_checks__["k" /* toInt */])(input) + (Object(__WEBPACK_IMPORTED_MODULE_5__utils_type_checks__["k" /* toInt */])(input) > 68 ? 1900 : 2000);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//# sourceMappingURL=year.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mod;
/* harmony export (immutable) */ __webpack_exports__["a"] = absFloor;
function mod(n, x) {
    return (n % x + x) % x;
}
function absFloor(num) {
    return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/abs-ceil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = absCeil;
function absCeil(number) {
    return number < 0 ? Math.floor(number) : Math.ceil(number);
}
//# sourceMappingURL=abs-ceil.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/abs-round.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = absRound;
function absRound(num) {
    return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}
//# sourceMappingURL=abs-round.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/compare-arrays.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compareArrays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
// compare two arrays, return the number of differences

function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length);
    var lengthDiff = Math.abs(array1.length - array2.length);
    var diffs = 0;
    var i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && Object(__WEBPACK_IMPORTED_MODULE_0__type_checks__["k" /* toInt */])(array1[i]) !== Object(__WEBPACK_IMPORTED_MODULE_0__type_checks__["k" /* toInt */])(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}
//# sourceMappingURL=compare-arrays.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/date-compare.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAfter;
/* harmony export (immutable) */ __webpack_exports__["b"] = isBefore;
/* unused harmony export isBetween */
/* unused harmony export isSame */
/* unused harmony export isSameOrAfter */
/* unused harmony export isSameOrBefore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__start_end_of__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/start-end-of.js");

function isAfter(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < Object(__WEBPACK_IMPORTED_MODULE_0__start_end_of__["b" /* startOf */])(date1, units).valueOf();
}
function isBefore(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__start_end_of__["a" /* endOf */])(date1, units).valueOf() < date2.valueOf();
}
function isBetween(date, from, to, units, inclusivity) {
    if (inclusivity === void 0) { inclusivity = '()'; }
    var leftBound = inclusivity[0] === '('
        ? isAfter(date, from, units)
        : !isBefore(date, from, units);
    var rightBound = inclusivity[1] === ')'
        ? isBefore(date, to, units)
        : !isAfter(date, to, units);
    return leftBound && rightBound;
}
function isSame(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    var inputMs = date2.valueOf();
    return (Object(__WEBPACK_IMPORTED_MODULE_0__start_end_of__["b" /* startOf */])(date1, units).valueOf() <= inputMs &&
        inputMs <= Object(__WEBPACK_IMPORTED_MODULE_0__start_end_of__["a" /* endOf */])(date1, units).valueOf());
}
function isSameOrAfter(date1, date2, units) {
    return isSame(date1, date2, units) || isAfter(date1, date2, units);
}
function isSameOrBefore(date1, date2, units) {
    return isSame(date1, date2, units) || isBefore(date1, date2, units);
}
//# sourceMappingURL=date-compare.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/date-getters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getHours;
/* harmony export (immutable) */ __webpack_exports__["g"] = getMinutes;
/* harmony export (immutable) */ __webpack_exports__["i"] = getSeconds;
/* harmony export (immutable) */ __webpack_exports__["f"] = getMilliseconds;
/* harmony export (immutable) */ __webpack_exports__["j"] = getTime;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDay;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDate;
/* harmony export (immutable) */ __webpack_exports__["h"] = getMonth;
/* harmony export (immutable) */ __webpack_exports__["d"] = getFullYear;
/* unused harmony export getUnixTime */
/* harmony export (immutable) */ __webpack_exports__["o"] = unix;
/* harmony export (immutable) */ __webpack_exports__["c"] = getFirstDayOfMonth;
/* unused harmony export daysInMonth */
/* unused harmony export _daysInMonth */
/* harmony export (immutable) */ __webpack_exports__["k"] = isFirstDayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["m"] = isSameMonth;
/* harmony export (immutable) */ __webpack_exports__["n"] = isSameYear;
/* harmony export (immutable) */ __webpack_exports__["l"] = isSameDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_date_from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/date-from-array.js");

function getHours(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCHours() : date.getHours();
}
function getMinutes(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
function getSeconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
function getMilliseconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
function getTime(date) {
    return date.getTime();
}
function getDay(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDay() : date.getDay();
}
function getDate(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDate() : date.getDate();
}
function getMonth(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
function getFullYear(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
function getUnixTime(date) {
    return Math.floor(date.valueOf() / 1000);
}
function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
function getFirstDayOfMonth(date) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__create_date_from_array__["a" /* createDate */])(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
function daysInMonth(date) {
    return _daysInMonth(date.getFullYear(), date.getMonth());
}
function _daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}
//# sourceMappingURL=date-getters.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/date-setters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["j"] = shiftDate;
/* harmony export (immutable) */ __webpack_exports__["b"] = setFullDate;
/* harmony export (immutable) */ __webpack_exports__["c"] = setFullYear;
/* harmony export (immutable) */ __webpack_exports__["g"] = setMonth;
/* unused harmony export setDay */
/* harmony export (immutable) */ __webpack_exports__["d"] = setHours;
/* harmony export (immutable) */ __webpack_exports__["f"] = setMinutes;
/* harmony export (immutable) */ __webpack_exports__["h"] = setSeconds;
/* harmony export (immutable) */ __webpack_exports__["e"] = setMilliseconds;
/* harmony export (immutable) */ __webpack_exports__["a"] = setDate;
/* harmony export (immutable) */ __webpack_exports__["i"] = setTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_month__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/month.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_year__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_date_from_array__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/date-from-array.js");





var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
function shiftDate(date, unit) {
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    var year = date.getFullYear() + (_unit.year || 0);
    var month = date.getMonth() + (_unit.month || 0);
    var day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, Object(__WEBPACK_IMPORTED_MODULE_0__units_month__["a" /* daysInMonth */])(year, month));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_4__create_date_from_array__["a" /* createDate */])(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
function setFullDate(date, unit) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__create_date_from_array__["a" /* createDate */])(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
function getNum(def, num) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__type_checks__["f" /* isNumber */])(num) ? num : def;
}
function setFullYear(date, value, isUTC) {
    var _month = Object(__WEBPACK_IMPORTED_MODULE_2__date_getters__["h" /* getMonth */])(date, isUTC);
    var _date = Object(__WEBPACK_IMPORTED_MODULE_2__date_getters__["a" /* getDate */])(date, isUTC);
    var _year = Object(__WEBPACK_IMPORTED_MODULE_2__date_getters__["d" /* getFullYear */])(date, isUTC);
    if (Object(__WEBPACK_IMPORTED_MODULE_3__units_year__["b" /* isLeapYear */])(_year) && _month === 1 && _date === 29) {
        var _daysInMonth = Object(__WEBPACK_IMPORTED_MODULE_0__units_month__["a" /* daysInMonth */])(value, _month);
        isUTC ? date.setUTCFullYear(value, _month, _daysInMonth) : date.setFullYear(value, _month, _daysInMonth);
    }
    isUTC ? date.setUTCFullYear(value) : date.setFullYear(value);
    return date;
}
function setMonth(date, value, isUTC) {
    var dayOfMonth = Math.min(Object(__WEBPACK_IMPORTED_MODULE_2__date_getters__["a" /* getDate */])(date), Object(__WEBPACK_IMPORTED_MODULE_0__units_month__["a" /* daysInMonth */])(Object(__WEBPACK_IMPORTED_MODULE_2__date_getters__["d" /* getFullYear */])(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
function setDay(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
function setTime(date, value) {
    date.setTime(value);
    return date;
}
//# sourceMappingURL=date-setters.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/defaults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaults;
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}
//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/start-end-of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = startOf;
/* harmony export (immutable) */ __webpack_exports__["a"] = endOf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_clone__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_day_of_week__ = __webpack_require__("../../../../ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moment_add_subtract__ = __webpack_require__("../../../../ngx-bootstrap/chronos/moment/add-subtract.js");





function startOf(date, unit, isUTC) {
    var _date = Object(__WEBPACK_IMPORTED_MODULE_1__create_clone__["a" /* cloneDate */])(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["g" /* setMonth */])(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["a" /* setDate */])(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["d" /* setHours */])(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["f" /* setMinutes */])(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["h" /* setSeconds */])(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["e" /* setMilliseconds */])(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        Object(__WEBPACK_IMPORTED_MODULE_2__units_day_of_week__["f" /* setLocaleDayOfWeek */])(_date, 0, { isUTC: isUTC });
    }
    if (unit === 'isoWeek') {
        Object(__WEBPACK_IMPORTED_MODULE_2__units_day_of_week__["e" /* setISODayOfWeek */])(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        Object(__WEBPACK_IMPORTED_MODULE_0__date_setters__["g" /* setMonth */])(_date, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_3__date_getters__["h" /* getMonth */])(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
function endOf(date, unit, isUTC) {
    var _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    var start = startOf(date, _unit, isUTC);
    var _step = Object(__WEBPACK_IMPORTED_MODULE_4__moment_add_subtract__["a" /* add */])(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    var res = Object(__WEBPACK_IMPORTED_MODULE_4__moment_add_subtract__["b" /* subtract */])(_step, 1, 'milliseconds', isUTC);
    return res;
}
//# sourceMappingURL=start-end-of.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/type-checks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["i"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isDate;
/* unused harmony export isBoolean */
/* harmony export (immutable) */ __webpack_exports__["d"] = isDateValid;
/* harmony export (immutable) */ __webpack_exports__["e"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = hasOwnProp;
/* harmony export (immutable) */ __webpack_exports__["g"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["h"] = isObjectEmpty;
/* harmony export (immutable) */ __webpack_exports__["j"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["k"] = toInt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils.js");

function isString(str) {
    return typeof str === 'string';
}
function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
function isBoolean(value) {
    return value === true || value === false;
}
function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    var k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
function isUndefined(input) {
    return input === void 0;
}
function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion;
    var value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* absFloor */])(coercedNumber);
    }
    return value;
}
//# sourceMappingURL=type-checks.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/chronos/utils/zero-fill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zeroFill;
function zeroFill(num, targetLength, forceSign) {
    var absNumber = "" + Math.abs(num);
    var zerosToFill = targetLength - absNumber.length;
    var sign = num >= 0;
    var _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    var _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}
//# sourceMappingURL=zero-fill.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/collapse/collapse.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// todo: add animations when https://github.com/angular/angular/issues/9947 solved

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'expanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.display',] },],
        'isExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.in',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.show',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapse',] },],
        'isCollapsing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapsing',] },],
        'collapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CollapseDirective;
}());

//# sourceMappingURL=collapse.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/collapse/collapse.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__("../../../../ngx-bootstrap/collapse/collapse.directive.js");


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
    return CollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/collapse/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_directive__ = __webpack_require__("../../../../ngx-bootstrap/collapse/collapse.directive.js");
/* unused harmony reexport CollapseDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_module__ = __webpack_require__("../../../../ngx-bootstrap/collapse/collapse.module.js");
/* unused harmony reexport CollapseModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/component-loader.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_triggers__ = __webpack_require__("../../../../ngx-bootstrap/utils/triggers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/content-ref.class.js");
// tslint:disable:max-file-line-count
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        var hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        var show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        var toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = Object(__WEBPACK_IMPORTED_MODULE_1__utils_triggers__["a" /* listenToTriggersV2 */])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    ComponentLoader.prototype._removeGlobalListener = function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    ComponentLoader.prototype.attachInline = function (vRef, template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    ComponentLoader.prototype._registerOutsideClick = function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = Object(__WEBPACK_IMPORTED_MODULE_1__utils_triggers__["c" /* registerOutsideClick */])(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content, context, initialState) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([_viewRef.rootNodes], _viewRef);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers.slice(), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

//# sourceMappingURL=component-loader.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/component-loader.factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoaderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__positioning_index__["a" /* PositioningService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    ]; };
    return ComponentLoaderFactory;
}());

//# sourceMappingURL=component-loader.factory.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/content-ref.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

//# sourceMappingURL=content-ref.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.class.js");
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/content-ref.class.js");
/* unused harmony reexport ContentRef */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/base/bs-datepicker-container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerAbstractComponent; });
var BsDatepickerAbstractComponent = (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerAbstractComponent.prototype.setViewMode = function (event) { };
    BsDatepickerAbstractComponent.prototype.navigateTo = function (event) { };
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.daySelectHandler = function (day) { };
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype._stopPropagation = function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());

//# sourceMappingURL=bs-datepicker-container.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-datepicker-input.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chronos_create_local__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/local.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronos_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chronos_locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_compare__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_datepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_locale_service__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-locale.service.js");









var BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BS_DATEPICKER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BsDatepickerInputDirective = (function () {
    function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    BsDatepickerInputDirective.prototype._setInputValue = function (value) {
        var initialDate = !value ? ''
            : Object(__WEBPACK_IMPORTED_MODULE_3__chronos_format__["b" /* formatDate */])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    };
    BsDatepickerInputDirective.prototype.onChange = function (event) {
        this.writeValue(event.target.value);
        this._onChange(this._value);
        this._onTouched();
    };
    BsDatepickerInputDirective.prototype.validate = function (c) {
        var _value = c.value;
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__["c" /* isDate */])(_value)) {
            var _isDateValid = Object(__WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__["d" /* isDateValid */])(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_compare__["b" /* isBefore */])(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_compare__["a" /* isAfter */])(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    };
    BsDatepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
        this._validatorChange = fn;
    };
    BsDatepickerInputDirective.prototype.writeValue = function (value) {
        if (!value) {
            this._value = null;
        }
        else {
            var _localeKey = this._localeService.currentLocale;
            var _locale = Object(__WEBPACK_IMPORTED_MODULE_4__chronos_locale_locales__["a" /* getLocale */])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            this._value = Object(__WEBPACK_IMPORTED_MODULE_2__chronos_create_local__["a" /* parseDate */])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        }
        this._picker.bsValue = this._value;
    };
    BsDatepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    BsDatepickerInputDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    BsDatepickerInputDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    BsDatepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    BsDatepickerInputDirective.prototype.hide = function () {
        this._picker.hide();
    };
    BsDatepickerInputDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "input[bsDatepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    BsDatepickerInputDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_7__bs_datepicker_component__["a" /* BsDatepickerDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_8__bs_locale_service__["a" /* BsLocaleService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return BsDatepickerInputDirective;
}());

//# sourceMappingURL=bs-datepicker-input.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-datepicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes_bs_bs_datepicker_container_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");





var BsDatepickerDirective = (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the datepicker is currently being shown
         */
        get: function () {
            return this._datepicker.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    BsDatepickerDirective.prototype.ngOnChanges = function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDatepickerDirective.prototype.show = function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_config__["a" /* BsDatepickerConfig */], useValue: this._config })
            .attach(__WEBPACK_IMPORTED_MODULE_2__themes_bs_bs_datepicker_container_component__["a" /* BsDatepickerContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDatepickerDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    BsDatepickerDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    BsDatepickerDirective.prototype.setConfig = function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
        });
    };
    BsDatepickerDirective.prototype.ngOnDestroy = function () {
        this._datepicker.dispose();
    };
    BsDatepickerDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] },
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_config__["a" /* BsDatepickerConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    BsDatepickerDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'bsValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'bsConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'bsValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDatepickerDirective;
}());

//# sourceMappingURL=bs-datepicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = (function () {
    function BsDatepickerConfig() {
        /** CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDatepickerConfig.ctorParameters = function () { return []; };
    return BsDatepickerConfig;
}());

//# sourceMappingURL=bs-datepicker.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-datepicker.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_positioning_service__ = __webpack_require__("../../../../ngx-bootstrap/positioning/positioning.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_warn_once__ = __webpack_require__("../../../../ngx-bootstrap/utils/warn-once.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_datepicker_input_directive__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker-input.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_datepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_daterangepicker_input_directive__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker-input.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_daterangepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_daterangepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_locale_service__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-locale.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducer_bs_datepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducer_bs_datepicker_effects__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducer_bs_datepicker_store__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__themes_bs_bs_calendar_layout_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-calendar-layout.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__themes_bs_bs_current_date_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-current-date-view.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__themes_bs_bs_custom_dates_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-custom-dates-view.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__themes_bs_bs_datepicker_container_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__themes_bs_bs_datepicker_day_decorator_directive__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-day-decorator.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__themes_bs_bs_datepicker_navigation_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__themes_bs_bs_daterangepicker_container_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__themes_bs_bs_days_calendar_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-days-calendar-view.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__themes_bs_bs_months_calendar_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-months-calendar-view.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__themes_bs_bs_timepicker_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-timepicker-view.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__themes_bs_bs_years_calendar_view_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-years-calendar-view.component.js");


























var _exports = [
    __WEBPACK_IMPORTED_MODULE_18__themes_bs_bs_datepicker_container_component__["a" /* BsDatepickerContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_21__themes_bs_bs_daterangepicker_container_component__["a" /* BsDaterangepickerContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_6__bs_datepicker_component__["a" /* BsDatepickerDirective */],
    __WEBPACK_IMPORTED_MODULE_5__bs_datepicker_input_directive__["a" /* BsDatepickerInputDirective */],
    __WEBPACK_IMPORTED_MODULE_8__bs_daterangepicker_input_directive__["a" /* BsDaterangepickerInputDirective */],
    __WEBPACK_IMPORTED_MODULE_9__bs_daterangepicker_component__["a" /* BsDaterangepickerDirective */]
];
var BsDatepickerModule = (function () {
    function BsDatepickerModule() {
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_warn_once__["a" /* warnOnce */])("BsDatepickerModule is under development,\n      BREAKING CHANGES are possible,\n      PLEASE, read changelog");
    }
    BsDatepickerModule.forRoot = function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_3__positioning_positioning_service__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_14__reducer_bs_datepicker_store__["a" /* BsDatepickerStore */],
                __WEBPACK_IMPORTED_MODULE_12__reducer_bs_datepicker_actions__["a" /* BsDatepickerActions */],
                __WEBPACK_IMPORTED_MODULE_7__bs_datepicker_config__["a" /* BsDatepickerConfig */],
                __WEBPACK_IMPORTED_MODULE_10__bs_daterangepicker_config__["a" /* BsDaterangepickerConfig */],
                __WEBPACK_IMPORTED_MODULE_13__reducer_bs_datepicker_effects__["a" /* BsDatepickerEffects */],
                __WEBPACK_IMPORTED_MODULE_11__bs_locale_service__["a" /* BsLocaleService */]
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_19__themes_bs_bs_datepicker_day_decorator_directive__["a" /* BsDatepickerDayDecoratorComponent */],
                        __WEBPACK_IMPORTED_MODULE_16__themes_bs_bs_current_date_view_component__["a" /* BsCurrentDateViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_20__themes_bs_bs_datepicker_navigation_view_component__["a" /* BsDatepickerNavigationViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_24__themes_bs_bs_timepicker_view_component__["a" /* BsTimepickerViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_15__themes_bs_bs_calendar_layout_component__["a" /* BsCalendarLayoutComponent */],
                        __WEBPACK_IMPORTED_MODULE_22__themes_bs_bs_days_calendar_view_component__["a" /* BsDaysCalendarViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_23__themes_bs_bs_months_calendar_view_component__["a" /* BsMonthCalendarViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_25__themes_bs_bs_years_calendar_view_component__["a" /* BsYearsCalendarViewComponent */],
                        __WEBPACK_IMPORTED_MODULE_17__themes_bs_bs_custom_dates_view_component__["a" /* BsCustomDatesViewComponent */]
                    ].concat(_exports),
                    entryComponents: [
                        __WEBPACK_IMPORTED_MODULE_18__themes_bs_bs_datepicker_container_component__["a" /* BsDatepickerContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_21__themes_bs_bs_daterangepicker_container_component__["a" /* BsDaterangepickerContainerComponent */]
                    ],
                    exports: _exports
                },] },
    ];
    /** @nocollapse */
    BsDatepickerModule.ctorParameters = function () { return []; };
    return BsDatepickerModule;
}());

//# sourceMappingURL=bs-datepicker.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-daterangepicker-input.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDaterangepickerInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chronos_create_local__ = __webpack_require__("../../../../ngx-bootstrap/chronos/create/local.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronos_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chronos_locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_compare__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_daterangepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_locale_service__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-locale.service.js");









var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BS_DATERANGEPICKER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BsDaterangepickerInputDirective = (function () {
    function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    BsDaterangepickerInputDirective.prototype._setInputValue = function (date) {
        var range = '';
        if (date) {
            var start = !date[0] ? ''
                : Object(__WEBPACK_IMPORTED_MODULE_3__chronos_format__["b" /* formatDate */])(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            var end = !date[1] ? ''
                : Object(__WEBPACK_IMPORTED_MODULE_3__chronos_format__["b" /* formatDate */])(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    };
    BsDaterangepickerInputDirective.prototype.onChange = function (event) {
        this.writeValue(event.target.value);
        this._onChange(this._value);
        this._onTouched();
    };
    BsDaterangepickerInputDirective.prototype.validate = function (c) {
        var _value = c.value;
        if (_value === null || _value === undefined || !Object(__WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__["b" /* isArray */])(_value)) {
            return null;
        }
        var _isDateValid = Object(__WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__["d" /* isDateValid */])(_value[0]) && Object(__WEBPACK_IMPORTED_MODULE_6__chronos_utils_type_checks__["d" /* isDateValid */])(_value[0]);
        if (!_isDateValid) {
            return { bsDate: { invalid: _value } };
        }
        if (this._picker && this._picker.minDate && Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_compare__["b" /* isBefore */])(_value[0], this._picker.minDate, 'date')) {
            return { bsDate: { minDate: this._picker.minDate } };
        }
        if (this._picker && this._picker.maxDate && Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_compare__["a" /* isAfter */])(_value[1], this._picker.maxDate, 'date')) {
            return { bsDate: { maxDate: this._picker.maxDate } };
        }
    };
    BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
        this._validatorChange = fn;
    };
    BsDaterangepickerInputDirective.prototype.writeValue = function (value) {
        var _this = this;
        if (!value) {
            this._value = null;
        }
        else {
            var _localeKey = this._localeService.currentLocale;
            var _locale = Object(__WEBPACK_IMPORTED_MODULE_4__chronos_locale_locales__["a" /* getLocale */])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            var _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = _input
                .map(function (_val) {
                return Object(__WEBPACK_IMPORTED_MODULE_2__chronos_create_local__["a" /* parseDate */])(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
            })
                .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
        }
        this._picker.bsValue = this._value;
    };
    BsDaterangepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    BsDaterangepickerInputDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    BsDaterangepickerInputDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    BsDaterangepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    BsDaterangepickerInputDirective.prototype.hide = function () {
        this._picker.hide();
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_7__bs_daterangepicker_component__["a" /* BsDaterangepickerDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_8__bs_locale_service__["a" /* BsLocaleService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return BsDaterangepickerInputDirective;
}());

//# sourceMappingURL=bs-daterangepicker-input.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-daterangepicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDaterangepickerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_daterangepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes_bs_bs_daterangepicker_container_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");





var BsDaterangepickerDirective = (function () {
    function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended
         * to. Currently only supports "body".
         */
        this.container = 'body';
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the daterangepicker is currently being shown
         */
        get: function () {
            return this._datepicker.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of daterangepicker
         */
        set: function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDaterangepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    BsDaterangepickerDirective.prototype.ngOnChanges = function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDaterangepickerDirective.prototype.show = function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_config__["a" /* BsDatepickerConfig */], useValue: this._config })
            .attach(__WEBPACK_IMPORTED_MODULE_2__themes_bs_bs_daterangepicker_container_component__["a" /* BsDaterangepickerContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .filter(function (range) { return range && range[0] && !!range[1]; })
            .subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Set config for daterangepicker
     */
    BsDaterangepickerDirective.prototype.setConfig = function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
        });
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDaterangepickerDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    BsDaterangepickerDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    BsDaterangepickerDirective.prototype.ngOnDestroy = function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_daterangepicker_config__["a" /* BsDaterangepickerConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    BsDaterangepickerDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'bsValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'bsConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'bsValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDaterangepickerDirective;
}());

//# sourceMappingURL=bs-daterangepicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-daterangepicker.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDaterangepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");
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


var BsDaterangepickerConfig = (function (_super) {
    __extends(BsDaterangepickerConfig, _super);
    function BsDaterangepickerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // DatepickerRenderOptions
        _this.displayMonths = 2;
        return _this;
    }
    BsDaterangepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDaterangepickerConfig.ctorParameters = function () { return []; };
    return BsDaterangepickerConfig;
}(__WEBPACK_IMPORTED_MODULE_1__bs_datepicker_config__["a" /* BsDatepickerConfig */]));

//# sourceMappingURL=bs-daterangepicker.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/bs-locale.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsLocaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");


var BsLocaleService = (function () {
    function BsLocaleService() {
        this._defaultLocale = 'en';
        this._locale = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    Object.defineProperty(BsLocaleService.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "localeChange", {
        get: function () {
            return this._localeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
        get: function () {
            return this._locale.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BsLocaleService.prototype.use = function (locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    };
    BsLocaleService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsLocaleService.ctorParameters = function () { return []; };
    return BsLocaleService;
}());

//# sourceMappingURL=bs-locale.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/date-formatter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");

var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format, locale) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__chronos_format__["b" /* formatDate */])(date, format, locale);
    };
    return DateFormatter;
}());

//# sourceMappingURL=date-formatter.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/datepicker-inner.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerInnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_formatter__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/date-formatter.js");
/* tslint:disable:max-file-line-count */


// const MIN_DATE:Date = void 0;
// const MAX_DATE:Date = void 0;
// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*
 const KEYS = {
 13: 'enter',
 32: 'space',
 33: 'pageup',
 34: 'pagedown',
 35: 'end',
 36: 'home',
 37: 'left',
 38: 'up',
 39: 'right',
 40: 'down'
 };
 */
var DatePickerInnerComponent = (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](undefined);
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this.activeDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](undefined);
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new __WEBPACK_IMPORTED_MODULE_1__date_formatter__["a" /* DateFormatter */]();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    DatePickerInnerComponent.prototype.ngOnInit = function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    DatePickerInnerComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            var previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.compare = function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.refreshView = function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    DatePickerInnerComponent.prototype.isActive = function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    DatePickerInnerComponent.prototype.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    DatePickerInnerComponent.prototype.select = function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.move = function (direction) {
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    DatePickerInnerComponent.prototype.toggleMode = function (_direction) {
        var direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        var customClassObject = this.customClass.find(function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    DatePickerInnerComponent.prototype.compareDateDisabled = function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    DatePickerInnerComponent.prototype.isDisabled = function (date) {
        var _this = this;
        var isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach(function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    DatePickerInnerComponent.ctorParameters = function () { return []; };
    DatePickerInnerComponent.propDecorators = {
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'datepickerMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'startingDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showWeeks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatYear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onlyCurrentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'shortcutPropagation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'monthColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dateDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'initDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selectionDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return DatePickerInnerComponent;
}());

//# sourceMappingURL=datepicker-inner.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/datepicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATEPICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker-inner.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker.config.js");




var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DatePickerComponent; }),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
/* tslint:enable:component-selector-name component-selector-type */
var DatePickerComponent = (function () {
    function DatePickerComponent(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        this.selectionDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    DatePickerComponent.prototype.onActiveDateChange = function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__datepicker_config__["a" /* DatepickerConfig */], },
    ]; };
    DatePickerComponent.propDecorators = {
        'datepickerMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'initDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showWeeks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatYear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'startingDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onlyCurrentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'shortcutPropagation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'monthColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dateDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dayDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selectionDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        '_datePicker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: [__WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */],] },],
    };
    return DatePickerComponent;
}());

//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/datepicker.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var DatepickerConfig = (function () {
    function DatepickerConfig() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DatepickerConfig.ctorParameters = function () { return []; };
    return DatepickerConfig;
}());

//# sourceMappingURL=datepicker.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/datepicker.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_inner_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker-inner.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__daypicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/daypicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__monthpicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/monthpicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__yearpicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/yearpicker.component.js");









var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    DatepickerModule.forRoot = function () {
        return { ngModule: DatepickerModule, providers: [__WEBPACK_IMPORTED_MODULE_5__datepicker_config__["a" /* DatepickerConfig */]] };
    };
    DatepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a" /* DatePickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__datepicker_inner_component__["a" /* DatePickerInnerComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__daypicker_component__["a" /* DayPickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__monthpicker_component__["a" /* MonthPickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__yearpicker_component__["a" /* YearPickerComponent */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a" /* DatePickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__datepicker_inner_component__["a" /* DatePickerInnerComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__daypicker_component__["a" /* DayPickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__monthpicker_component__["a" /* MonthPickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_8__yearpicker_component__["a" /* YearPickerComponent */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a" /* DatePickerComponent */]]
                },] },
    ];
    /** @nocollapse */
    DatepickerModule.ctorParameters = function () { return []; };
    return DatepickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/daypicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker-inner.component.js");
// @deprecated
// tslint:disable



var DayPickerComponent = (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    DayPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var year = this.activeDate.getFullYear();
            var month = this.activeDate.getMonth();
            var firstDayOfMonth = new Date(year, month, 1);
            var difference = this.startingDay - firstDayOfMonth.getDay();
            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            var _days = self.getDates(firstDate, 42);
            var days = [];
            for (var i = 0; i < 42; i++) {
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    DayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    };
    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    // todo: key events implementation
    DayPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */], },
    ]; };
    return DayPickerComponent;
}());

//# sourceMappingURL=daypicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/calc-days-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcDaysCalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_matrix_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/matrix-utils.js");



function calcDaysCalendar(startingDate, options) {
    var firstDay = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["c" /* getFirstDayOfMonth */])(startingDate);
    var initialDate = Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["a" /* getStartingDayOfCalendar */])(firstDay, options);
    var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    var daysMatrix = Object(__WEBPACK_IMPORTED_MODULE_2__utils_matrix_utils__["a" /* createMatrix */])(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}
//# sourceMappingURL=calc-days-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/flag-days-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flagDaysCalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chronos_utils_date_compare__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_bs_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");




function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach(function (week, weekIndex) {
        week.days.forEach(function (day, dayIndex) {
            // datepicker
            var isOtherMonth = !Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["m" /* isSameMonth */])(day.date, formattedMonth.month);
            var isHovered = !isOtherMonth && Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["l" /* isSameDay */])(day.date, options.hoveredDate);
            // date range picker
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["l" /* isSameDay */])(day.date, options.selectedRange[0]);
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["l" /* isSameDay */])(day.date, options.selectedRange[1]);
            var isSelected = (!isOtherMonth && Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["l" /* isSameDay */])(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            var isDisabled = options.isDisabled ||
                Object(__WEBPACK_IMPORTED_MODULE_1__chronos_utils_date_compare__["b" /* isBefore */])(day.date, options.minDate, 'day') ||
                Object(__WEBPACK_IMPORTED_MODULE_1__chronos_utils_date_compare__["a" /* isAfter */])(day.date, options.maxDate, 'day');
            // decide update or not
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = Object(__WEBPACK_IMPORTED_MODULE_2__utils_bs_calendar_utils__["b" /* isMonthDisabled */])(Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_date_setters__["j" /* shiftDate */])(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = Object(__WEBPACK_IMPORTED_MODULE_2__utils_bs_calendar_utils__["b" /* isMonthDisabled */])(Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_date_setters__["j" /* shiftDate */])(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}
//# sourceMappingURL=flag-days-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/flag-months-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flagMonthsCalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");



function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach(function (months, rowIndex) {
        months.forEach(function (month, monthIndex) {
            var isHovered = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["m" /* isSameMonth */])(month.date, options.hoveredMonth);
            var isDisabled = options.isDisabled ||
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["b" /* isMonthDisabled */])(month.date, options.minDate, options.maxDate);
            var newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["c" /* isYearDisabled */])(Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_setters__["j" /* shiftDate */])(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["c" /* isYearDisabled */])(Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_setters__["j" /* shiftDate */])(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}
//# sourceMappingURL=flag-months-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/flag-years-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flagYearsCalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/bs-calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");



function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach(function (years, rowIndex) {
        years.forEach(function (year, yearIndex) {
            var isHovered = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["n" /* isSameYear */])(year.date, options.hoveredYear);
            var isDisabled = options.isDisabled ||
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["c" /* isYearDisabled */])(year.date, options.minDate, options.maxDate);
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["c" /* isYearDisabled */])(Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_setters__["j" /* shiftDate */])(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    var i = yearsCalendar.years.length - 1;
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_bs_calendar_utils__["c" /* isYearDisabled */])(Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_setters__["j" /* shiftDate */])(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}
//# sourceMappingURL=flag-years-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/format-days-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDaysCalendar;
/* unused harmony export getWeekNumbers */
/* unused harmony export getShiftedWeekdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chronos_locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");


function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: Object(__WEBPACK_IMPORTED_MODULE_0__chronos_format__["b" /* formatDate */])(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: Object(__WEBPACK_IMPORTED_MODULE_0__chronos_format__["b" /* formatDate */])(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) { return ({
            days: week.map(function (date, dayIndex) { return ({
                date: date,
                label: Object(__WEBPACK_IMPORTED_MODULE_0__chronos_format__["b" /* formatDate */])(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex: monthIndex,
                weekIndex: weekIndex,
                dayIndex: dayIndex
            }); })
        }); })
    };
}
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? Object(__WEBPACK_IMPORTED_MODULE_0__chronos_format__["b" /* formatDate */])(days[0], format, locale) : ''); });
}
function getShiftedWeekdays(locale) {
    var _locale = Object(__WEBPACK_IMPORTED_MODULE_1__chronos_locale_locales__["a" /* getLocale */])(locale);
    var weekdays = _locale.weekdaysShort();
    var firstDayOfWeek = _locale.firstDayOfWeek();
    return weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
}
//# sourceMappingURL=format-days-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/format-months-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatMonthsCalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_start_end_of__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chronos_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_matrix_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/matrix-utils.js");



var height = 4;
var width = 3;
var shift = { month: 1 };
function formatMonthsCalendar(viewDate, formatOptions) {
    var initialDate = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_start_end_of__["b" /* startOf */])(viewDate, 'year');
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var monthMatrix = Object(__WEBPACK_IMPORTED_MODULE_2__utils_matrix_utils__["a" /* createMatrix */])(matrixOptions, function (date) { return ({
        date: date,
        label: Object(__WEBPACK_IMPORTED_MODULE_1__chronos_format__["b" /* formatDate */])(date, formatOptions.monthLabel, formatOptions.locale)
    }); });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: Object(__WEBPACK_IMPORTED_MODULE_1__chronos_format__["b" /* formatDate */])(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}
//# sourceMappingURL=format-months-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/format-years-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return yearsPerCalendar; });
/* harmony export (immutable) */ __webpack_exports__["a"] = formatYearsCalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chronos_format__ = __webpack_require__("../../../../ngx-bootstrap/chronos/format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_matrix_utils__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/utils/matrix-utils.js");



var height = 4;
var width = 4;
var yearsPerCalendar = height * width;
var initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var shift = { year: 1 };
function formatYearsCalendar(viewDate, formatOptions) {
    var initialDate = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_setters__["j" /* shiftDate */])(viewDate, { year: initialShift });
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var yearsMatrix = Object(__WEBPACK_IMPORTED_MODULE_2__utils_matrix_utils__["a" /* createMatrix */])(matrixOptions, function (date) { return ({
        date: date,
        label: Object(__WEBPACK_IMPORTED_MODULE_1__chronos_format__["b" /* formatDate */])(date, formatOptions.yearLabel, formatOptions.locale)
    }); });
    var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    var from = Object(__WEBPACK_IMPORTED_MODULE_1__chronos_format__["b" /* formatDate */])(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    var to = Object(__WEBPACK_IMPORTED_MODULE_1__chronos_format__["b" /* formatDate */])(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}
//# sourceMappingURL=format-years-calendar.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/engine/view-mode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canSwitchMode;
function canSwitchMode(mode) {
    return true;
}
//# sourceMappingURL=view-mode.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker.component.js");
/* unused harmony reexport DatePickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_module__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker.module.js");
/* unused harmony reexport DatepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daypicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/daypicker.component.js");
/* unused harmony reexport DayPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monthpicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/monthpicker.component.js");
/* unused harmony reexport MonthPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yearpicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/yearpicker.component.js");
/* unused harmony reexport YearPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_formatter__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/date-formatter.js");
/* unused harmony reexport DateFormatter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker.config.js");
/* unused harmony reexport DatepickerConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_datepicker_module__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__bs_datepicker_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_datepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.component.js");
/* unused harmony reexport BsDatepickerDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_daterangepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker.component.js");
/* unused harmony reexport BsDaterangepickerDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* unused harmony reexport BsDatepickerConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_daterangepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-daterangepicker.config.js");
/* unused harmony reexport BsDaterangepickerConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bs_locale_service__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-locale.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_12__bs_locale_service__["a"]; });













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/models/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavigationDirection; });
/** *************** */
// events
/** *************** */
var BsNavigationDirection;
(function (BsNavigationDirection) {
    BsNavigationDirection[BsNavigationDirection["UP"] = 0] = "UP";
    BsNavigationDirection[BsNavigationDirection["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/monthpicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker-inner.component.js");
// @deprecated
// tslint:disable



var MonthPickerComponent = (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var months = new Array(12);
            var year = this.activeDate.getFullYear();
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    };
    // todo: key events implementation
    MonthPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" id=\"{{dtz.uid}}\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */], },
    ]; };
    return MonthPickerComponent;
}());

//# sourceMappingURL=monthpicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/reducer/_defaults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultMonthOptions; });
var defaultMonthOptions = {
    width: 7,
    height: 6
};
//# sourceMappingURL=_defaults.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsDatepickerActions = (function () {
    function BsDatepickerActions() {
    }
    BsDatepickerActions.prototype.calculate = function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    BsDatepickerActions.prototype.format = function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    BsDatepickerActions.prototype.flag = function () {
        return { type: BsDatepickerActions.FLAG };
    };
    BsDatepickerActions.prototype.select = function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    BsDatepickerActions.prototype.changeViewMode = function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    BsDatepickerActions.prototype.navigateTo = function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    BsDatepickerActions.prototype.navigateStep = function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    BsDatepickerActions.prototype.setOptions = function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    BsDatepickerActions.prototype.selectRange = function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    BsDatepickerActions.prototype.hoverDay = function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    BsDatepickerActions.prototype.minDate = function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    BsDatepickerActions.prototype.maxDate = function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    BsDatepickerActions.prototype.isDisabled = function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    BsDatepickerActions.prototype.setLocale = function (locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDatepickerActions.ctorParameters = function () { return []; };
    return BsDatepickerActions;
}());

//# sourceMappingURL=bs-datepicker.actions.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronos_utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_locale_service__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-locale.service.js");






var BsDatepickerEffects = (function () {
    function BsDatepickerEffects(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    BsDatepickerEffects.prototype.init = function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    BsDatepickerEffects.prototype.setValue = function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    BsDatepickerEffects.prototype.setRangeValue = function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    BsDatepickerEffects.prototype.setMinDate = function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    BsDatepickerEffects.prototype.setMaxDate = function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    BsDatepickerEffects.prototype.setDisabled = function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /* Set rendering options */
    BsDatepickerEffects.prototype.setOptions = function (_config) {
        var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    };
    /** view to mode bindings */
    BsDatepickerEffects.prototype.setBindings = function (container) {
        container.daysCalendar = this._store
            .select(function (state) { return state.flaggedMonths; })
            .filter(function (months) { return !!months; });
        // month calendar
        container.monthsCalendar = this._store
            .select(function (state) { return state.flaggedMonthsCalendar; })
            .filter(function (months) { return !!months; });
        // year calendar
        container.yearsCalendar = this._store
            .select(function (state) { return state.yearsCalendarFlagged; })
            .filter(function (years) { return !!years; });
        container.viewMode = this._store.select(function (state) { return state.view.mode; });
        container.options = this._store
            .select(function (state) { return state.showWeekNumbers; })
            .map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); });
        return this;
    };
    /** event handlers */
    BsDatepickerEffects.prototype.setEventHandlers = function (container) {
        var _this = this;
        container.setViewMode = function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        };
        container.navigateTo = function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = function (event) {
            var _cell = event.cell;
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        /** select handlers */
        // container.daySelectHandler = (day: DayViewModel): void => {
        //   if (day.isOtherMonth || day.isDisabled) {
        //     return;
        //   }
        //   this._store.dispatch(this._actions.select(day.date));
        // };
        container.monthSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { month: Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_date_getters__["h" /* getMonth */])(event.date) },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { year: Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_date_getters__["d" /* getFullYear */])(event.date) },
                viewMode: 'month'
            }));
        };
        return this;
    };
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = function () {
        var _this = this;
        this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
            _this._store.dispatch(_this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(function (state) { return state.monthsModel; })
            .filter(function (monthModel) { return !!monthModel; })
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.formattedMonths; })
            .filter(function (month) { return !!month; })
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .filter(function (selectedDate) { return !!selectedDate; })
            .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag for date range picker
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .filter(function (selectedRange) { return !!selectedRange; })
            .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
        // monthsCalendar
        this._subs.push(this._store
            .select(function (state) { return state.monthsCalendar; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // years calendar
        this._subs.push(this._store
            .select(function (state) { return state.yearsCalendarModel; })
            .filter(function (state) { return !!state; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // on hover
        this._subs.push(this._store
            .select(function (state) { return state.hoveredDate; })
            .filter(function (hoveredDate) { return !!hoveredDate; })
            .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); }));
        return this;
    };
    BsDatepickerEffects.prototype.destroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDatepickerEffects.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__bs_datepicker_actions__["a" /* BsDatepickerActions */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__bs_locale_service__["a" /* BsLocaleService */], },
    ]; };
    return BsDatepickerEffects;
}());

//# sourceMappingURL=bs-datepicker.effects.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bsDatepickerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_datepicker_state__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_calc_days_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/calc-days-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__engine_format_days_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/format-days-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__engine_flag_days_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/flag-days-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__engine_view_mode__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/view-mode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__engine_format_months_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/format-months-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__engine_flag_months_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/flag-months-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__engine_format_years_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/format-years-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__engine_flag_years_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/flag-years-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chronos_utils_type_checks__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chronos_utils_start_end_of__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chronos_locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chronos_utils_date_compare__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-compare.js");
// tslint:disable:max-file-line-count















function bsDatepickerReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__bs_datepicker_state__["a" /* initialDatepickerState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].CALCULATE: {
            return calculateReducer(state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].FORMAT: {
            return formatReducer(state, action);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].FLAG: {
            return flagReducer(state, action);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].NAVIGATE_OFFSET: {
            var date = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["j" /* shiftDate */])(Object(__WEBPACK_IMPORTED_MODULE_12__chronos_utils_start_end_of__["b" /* startOf */])(state.view.date, 'month'), action.payload);
            var newState = {
                view: {
                    mode: state.view.mode,
                    date: date
                }
            };
            return Object.assign({}, state, newState);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].NAVIGATE_TO: {
            var payload = action.payload;
            var date = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["b" /* setFullDate */])(state.view.date, payload.unit);
            var mode = payload.viewMode;
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].CHANGE_VIEWMODE: {
            if (!Object(__WEBPACK_IMPORTED_MODULE_6__engine_view_mode__["a" /* canSwitchMode */])(action.payload)) {
                return state;
            }
            var date = state.view.date;
            var mode = action.payload;
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].SELECT: {
            var newState = {
                selectedDate: action.payload,
                view: state.view
            };
            var mode = state.view.mode;
            var _date = action.payload || state.view.date;
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].SET_OPTIONS: {
            var newState = action.payload;
            // preserve view mode
            var mode = state.view.mode;
            var _viewDate = Object(__WEBPACK_IMPORTED_MODULE_11__chronos_utils_type_checks__["d" /* isDateValid */])(newState.value) && newState.value
                || Object(__WEBPACK_IMPORTED_MODULE_11__chronos_utils_type_checks__["b" /* isArray */])(newState.value) && Object(__WEBPACK_IMPORTED_MODULE_11__chronos_utils_type_checks__["d" /* isDateValid */])(newState.value[0]) && newState.value[0]
                || state.view.date;
            var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode: mode, date: date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (Object(__WEBPACK_IMPORTED_MODULE_11__chronos_utils_type_checks__["b" /* isArray */])(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].SELECT_RANGE: {
            var newState = {
                selectedRange: action.payload,
                view: state.view
            };
            var mode = state.view.mode;
            var _date = action.payload && action.payload[0] || state.view.date;
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_actions__["a" /* BsDatepickerActions */].SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        default:
            return state;
    }
}
function calculateReducer(state) {
    // how many calendars
    var displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    var viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = Object(__WEBPACK_IMPORTED_MODULE_13__chronos_locale_locales__["a" /* getLocale */])(state.locale).firstDayOfWeek();
        var monthsModel = new Array(displayMonths);
        for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = Object(__WEBPACK_IMPORTED_MODULE_2__engine_calc_days_calendar__["a" /* calcDaysCalendar */])(viewDate, state.monthViewOptions);
            viewDate = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["j" /* shiftDate */])(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = Object(__WEBPACK_IMPORTED_MODULE_7__engine_format_months_calendar__["a" /* formatMonthsCalendar */])(viewDate, getFormatOptions(state));
            viewDate = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["j" /* shiftDate */])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = Object(__WEBPACK_IMPORTED_MODULE_9__engine_format_years_calendar__["a" /* formatYearsCalendar */])(viewDate, getFormatOptions(state));
            viewDate = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["j" /* shiftDate */])(viewDate, { year: __WEBPACK_IMPORTED_MODULE_9__engine_format_years_calendar__["b" /* yearsPerCalendar */] });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        var formattedMonths = state.monthsModel.map(function (month, monthIndex) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__engine_format_days_calendar__["a" /* formatDaysCalendar */])(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    var displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    var viewDate = state.view.date;
    if (state.view.mode === 'month') {
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = Object(__WEBPACK_IMPORTED_MODULE_7__engine_format_months_calendar__["a" /* formatMonthsCalendar */])(viewDate, getFormatOptions(state));
            viewDate = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["j" /* shiftDate */])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = Object(__WEBPACK_IMPORTED_MODULE_9__engine_format_years_calendar__["a" /* formatYearsCalendar */])(viewDate, getFormatOptions(state));
            viewDate = Object(__WEBPACK_IMPORTED_MODULE_5__chronos_utils_date_setters__["j" /* shiftDate */])(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        var flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__engine_flag_days_calendar__["a" /* flagDaysCalendar */])(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        var flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
            return Object(__WEBPACK_IMPORTED_MODULE_8__engine_flag_months_calendar__["a" /* flagMonthsCalendar */])(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
            return Object(__WEBPACK_IMPORTED_MODULE_10__engine_flag_years_calendar__["a" /* flagYearsCalendar */])(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        });
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 */
function getViewDate(viewDate, minDate, maxDate) {
    var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && Object(__WEBPACK_IMPORTED_MODULE_14__chronos_utils_date_compare__["a" /* isAfter */])(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && Object(__WEBPACK_IMPORTED_MODULE_14__chronos_utils_date_compare__["b" /* isBefore */])(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}
//# sourceMappingURL=bs-datepicker.reducer.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BsDatepickerState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialDatepickerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/_defaults.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");


var BsDatepickerState = (function () {
    function BsDatepickerState() {
    }
    return BsDatepickerState;
}());

var _initialView = { date: new Date(), mode: 'day' };
var initialDatepickerState = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__bs_datepicker_config__["a" /* BsDatepickerConfig */](), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* defaultMonthOptions */]
});
//# sourceMappingURL=bs-datepicker.state.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini_ngrx_store_class__ = __webpack_require__("../../../../ngx-bootstrap/mini-ngrx/store.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_datepicker_state__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mini_ngrx_state_class__ = __webpack_require__("../../../../ngx-bootstrap/mini-ngrx/state.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_datepicker_reducer__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer.js");
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






var BsDatepickerStore = (function (_super) {
    __extends(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        var _dispatcher = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            type: '[datepicker] dispatcher init'
        });
        var state = new __WEBPACK_IMPORTED_MODULE_4__mini_ngrx_state_class__["a" /* MiniState */](__WEBPACK_IMPORTED_MODULE_2__bs_datepicker_state__["a" /* initialDatepickerState */], _dispatcher, __WEBPACK_IMPORTED_MODULE_5__bs_datepicker_reducer__["a" /* bsDatepickerReducer */]);
        _this = _super.call(this, _dispatcher, __WEBPACK_IMPORTED_MODULE_5__bs_datepicker_reducer__["a" /* bsDatepickerReducer */], state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(__WEBPACK_IMPORTED_MODULE_1__mini_ngrx_store_class__["a" /* MiniStore */]));

//# sourceMappingURL=bs-datepicker.store.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-calendar-layout.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsCalendarLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsCalendarLayoutComponent = (function () {
    function BsCalendarLayoutComponent() {
    }
    BsCalendarLayoutComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                },] },
    ];
    /** @nocollapse */
    BsCalendarLayoutComponent.ctorParameters = function () { return []; };
    return BsCalendarLayoutComponent;
}());

//# sourceMappingURL=bs-calendar-layout.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-current-date-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsCurrentDateViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsCurrentDateViewComponent = (function () {
    function BsCurrentDateViewComponent() {
    }
    BsCurrentDateViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                },] },
    ];
    /** @nocollapse */
    BsCurrentDateViewComponent.ctorParameters = function () { return []; };
    BsCurrentDateViewComponent.propDecorators = {
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return BsCurrentDateViewComponent;
}());

//# sourceMappingURL=bs-current-date-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-custom-dates-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsCustomDatesViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsCustomDatesViewComponent = (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    BsCustomDatesViewComponent.ctorParameters = function () { return []; };
    BsCustomDatesViewComponent.propDecorators = {
        'isCustomRangeShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ranges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return BsCustomDatesViewComponent;
}());

//# sourceMappingURL=bs-custom-dates-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_bs_datepicker_container__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/base/bs-datepicker-container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_bs_datepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer_bs_datepicker_effects__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer_bs_datepicker_store__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js");
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






var BsDatepickerContainerComponent = (function (_super) {
    __extends(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    BsDatepickerContainerComponent.prototype.daySelectHandler = function (day) {
        if (day.isOtherMonth || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    BsDatepickerContainerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._effects.destroy();
    };
    BsDatepickerContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-datepicker-container',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__reducer_bs_datepicker_store__["a" /* BsDatepickerStore */], __WEBPACK_IMPORTED_MODULE_4__reducer_bs_datepicker_effects__["a" /* BsDatepickerEffects */]],
                    template: "<!-- days calendar view mode --> <div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\"> <div class=\"bs-datepicker-container\"> <!--calendars--> <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\"> <!--days calendar--> <div *ngSwitchCase=\"'day'\"> <bs-days-calendar-view *ngFor=\"let calendar of (daysCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" [options]=\"options | async\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"dayHoverHandler($event)\" (onSelect)=\"daySelectHandler($event)\" ></bs-days-calendar-view> </div> <!--months calendar--> <div *ngSwitchCase=\"'month'\"> <bs-month-calendar-view *ngFor=\"let calendar of (monthsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"monthHoverHandler($event)\" (onSelect)=\"monthSelectHandler($event)\" ></bs-month-calendar-view> </div> <!--years calendar--> <div *ngSwitchCase=\"'year'\"> <bs-years-calendar-view *ngFor=\"let calendar of (yearsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"yearHoverHandler($event)\" (onSelect)=\"yearSelectHandler($event)\" ></bs-years-calendar-view> </div> </div> <!--applycancel buttons--> <div class=\"bs-datepicker-buttons\" *ngIf=\"false\"> <button class=\"btn btn-success\">Apply</button> <button class=\"btn btn-default\">Cancel</button> </div> </div> <!--custom dates or date ranges picker--> <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\"> <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view> </div> </div> ",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__bs_datepicker_config__["a" /* BsDatepickerConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__reducer_bs_datepicker_store__["a" /* BsDatepickerStore */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__reducer_bs_datepicker_actions__["a" /* BsDatepickerActions */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__reducer_bs_datepicker_effects__["a" /* BsDatepickerEffects */], },
    ]; };
    return BsDatepickerContainerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_bs_datepicker_container__["a" /* BsDatepickerAbstractComponent */]));

//# sourceMappingURL=bs-datepicker-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-day-decorator.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerDayDecoratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsDatepickerDayDecoratorComponent = (function () {
    function BsDatepickerDayDecoratorComponent() {
    }
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day.label }}"
                },] },
    ];
    /** @nocollapse */
    BsDatepickerDayDecoratorComponent.ctorParameters = function () { return []; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        'day': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return BsDatepickerDayDecoratorComponent;
}());

//# sourceMappingURL=bs-datepicker-day-decorator.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDatepickerNavigationViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/models/index.js");


var BsDatepickerNavigationViewComponent = (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BsDatepickerNavigationViewComponent.prototype.navTo = function (down) {
        this.onNavigate.emit(down ? __WEBPACK_IMPORTED_MODULE_1__models_index__["a" /* BsNavigationDirection */].DOWN : __WEBPACK_IMPORTED_MODULE_1__models_index__["a" /* BsNavigationDirection */].UP);
    };
    BsDatepickerNavigationViewComponent.prototype.view = function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDatepickerNavigationViewComponent.ctorParameters = function () { return []; };
    BsDatepickerNavigationViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDatepickerNavigationViewComponent;
}());

//# sourceMappingURL=bs-datepicker-navigation-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-daterangepicker-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDaterangepickerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_bs_datepicker_container__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/base/bs-datepicker-container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_datepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/bs-datepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_bs_datepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer_bs_datepicker_effects__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer_bs_datepicker_store__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/reducer/bs-datepicker.store.js");
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






var BsDaterangepickerContainerComponent = (function (_super) {
    __extends(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: function (value) {
            this._effects.setRangeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDaterangepickerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    BsDaterangepickerContainerComponent.prototype.daySelectHandler = function (day) {
        if (day.isOtherMonth || day.isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    };
    BsDaterangepickerContainerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._effects.destroy();
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__reducer_bs_datepicker_store__["a" /* BsDatepickerStore */], __WEBPACK_IMPORTED_MODULE_4__reducer_bs_datepicker_effects__["a" /* BsDatepickerEffects */]],
                    template: "<!-- days calendar view mode --> <div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\"> <div class=\"bs-datepicker-container\"> <!--calendars--> <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\"> <!--days calendar--> <div *ngSwitchCase=\"'day'\"> <bs-days-calendar-view *ngFor=\"let calendar of (daysCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" [options]=\"options | async\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"dayHoverHandler($event)\" (onSelect)=\"daySelectHandler($event)\" ></bs-days-calendar-view> </div> <!--months calendar--> <div *ngSwitchCase=\"'month'\"> <bs-month-calendar-view *ngFor=\"let calendar of (monthsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"monthHoverHandler($event)\" (onSelect)=\"monthSelectHandler($event)\" ></bs-month-calendar-view> </div> <!--years calendar--> <div *ngSwitchCase=\"'year'\"> <bs-years-calendar-view *ngFor=\"let calendar of (yearsCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"yearHoverHandler($event)\" (onSelect)=\"yearSelectHandler($event)\" ></bs-years-calendar-view> </div> </div> <!--applycancel buttons--> <div class=\"bs-datepicker-buttons\" *ngIf=\"false\"> <button class=\"btn btn-success\">Apply</button> <button class=\"btn btn-default\">Cancel</button> </div> </div> <!--custom dates or date ranges picker--> <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\"> <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view> </div> </div> ",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__bs_datepicker_config__["a" /* BsDatepickerConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__reducer_bs_datepicker_store__["a" /* BsDatepickerStore */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__reducer_bs_datepicker_actions__["a" /* BsDatepickerActions */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__reducer_bs_datepicker_effects__["a" /* BsDatepickerEffects */], },
    ]; };
    return BsDaterangepickerContainerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_bs_datepicker_container__["a" /* BsDatepickerAbstractComponent */]));

//# sourceMappingURL=bs-daterangepicker-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-days-calendar-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDaysCalendarViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/models/index.js");


var BsDaysCalendarViewComponent = (function () {
    function BsDaysCalendarViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BsDaysCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = __WEBPACK_IMPORTED_MODULE_1__models_index__["a" /* BsNavigationDirection */].DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    BsDaysCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.selectDay = function (event) {
        this.onSelect.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.hoverDay = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" *ngIf=\"options.showWeekNumbers\">\n            <span>{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return []; };
    BsDaysCalendarViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDaysCalendarViewComponent;
}());

//# sourceMappingURL=bs-days-calendar-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-months-calendar-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsMonthCalendarViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/models/index.js");


var BsMonthCalendarViewComponent = (function () {
    function BsMonthCalendarViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BsMonthCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = __WEBPACK_IMPORTED_MODULE_1__models_index__["a" /* BsNavigationDirection */].DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    };
    BsMonthCalendarViewComponent.prototype.viewMonth = function (month) {
        this.onSelect.emit(month);
    };
    BsMonthCalendarViewComponent.prototype.hoverMonth = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsMonthCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsMonthCalendarViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsMonthCalendarViewComponent.ctorParameters = function () { return []; };
    BsMonthCalendarViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsMonthCalendarViewComponent;
}());

//# sourceMappingURL=bs-months-calendar-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-timepicker-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsTimepickerViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// tslint:disable:max-line-length

var BsTimepickerViewComponent = (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsTimepickerViewComponent.ctorParameters = function () { return []; };
    return BsTimepickerViewComponent;
}());

//# sourceMappingURL=bs-timepicker-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/themes/bs/bs-years-calendar-view.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsYearsCalendarViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_format_years_calendar__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/engine/format-years-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/models/index.js");



var BsYearsCalendarViewComponent = (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BsYearsCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* BsNavigationDirection */].DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * __WEBPACK_IMPORTED_MODULE_1__engine_format_years_calendar__["b" /* yearsPerCalendar */] } });
    };
    BsYearsCalendarViewComponent.prototype.viewYear = function (year) {
        this.onSelect.emit(year);
    };
    BsYearsCalendarViewComponent.prototype.hoverYear = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsYearsCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsYearsCalendarViewComponent.ctorParameters = function () { return []; };
    BsYearsCalendarViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsYearsCalendarViewComponent;
}());

//# sourceMappingURL=bs-years-calendar-view.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/utils/bs-calendar-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getStartingDayOfCalendar;
/* unused harmony export calculateDateOffset */
/* harmony export (immutable) */ __webpack_exports__["b"] = isMonthDisabled;
/* harmony export (immutable) */ __webpack_exports__["c"] = isYearDisabled;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_compare__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronos_utils_start_end_of__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/start-end-of.js");




function getStartingDayOfCalendar(date, options) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["k" /* isFirstDayOfWeek */])(date, options.firstDayOfWeek)) {
        return date;
    }
    var weekDay = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_getters__["b" /* getDay */])(date);
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return Object(__WEBPACK_IMPORTED_MODULE_1__chronos_utils_date_setters__["j" /* shiftDate */])(date, { day: -offset });
}
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
    var minBound = min && Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_compare__["b" /* isBefore */])(Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_start_end_of__["a" /* endOf */])(date, 'month'), min, 'day');
    var maxBound = max && Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_compare__["a" /* isAfter */])(Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_start_end_of__["b" /* startOf */])(date, 'month'), max, 'day');
    return minBound || maxBound;
}
function isYearDisabled(date, min, max) {
    var minBound = min && Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_compare__["b" /* isBefore */])(Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_start_end_of__["a" /* endOf */])(date, 'year'), min, 'day');
    var maxBound = max && Object(__WEBPACK_IMPORTED_MODULE_2__chronos_utils_date_compare__["a" /* isAfter */])(Object(__WEBPACK_IMPORTED_MODULE_3__chronos_utils_start_end_of__["b" /* startOf */])(date, 'year'), max, 'day');
    return minBound || maxBound;
}
//# sourceMappingURL=bs-calendar-utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/utils/matrix-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createMatrix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_setters__ = __webpack_require__("../../../../ngx-bootstrap/chronos/utils/date-setters.js");

function createMatrix(options, fn) {
    var prevValue = options.initialDate;
    var matrix = new Array(options.height);
    for (var i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = Object(__WEBPACK_IMPORTED_MODULE_0__chronos_utils_date_setters__["j" /* shiftDate */])(prevValue, options.shift);
        }
    }
    return matrix;
}
//# sourceMappingURL=matrix-utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/datepicker/yearpicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/datepicker-inner.component.js");
// @deprecated
// tslint:disable



var YearPickerComponent = (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    YearPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            var years = new Array(this.yearRange);
            var date;
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    };
    YearPickerComponent.prototype.getStartingYear = function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    };
    YearPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */], },
    ]; };
    return YearPickerComponent;
}());

//# sourceMappingURL=yearpicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var dropdown = _element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());

//# sourceMappingURL=bs-dropdown-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());

//# sourceMappingURL=bs-dropdown-menu.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.disabled',] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', [],] },],
        'onDocumentClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

//# sourceMappingURL=bs-dropdown-toggle.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownConfig.ctorParameters = function () { return []; };
    return BsDropdownConfig;
}());

//# sourceMappingURL=bs-dropdown.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
// tslint:disable:max-file-line-count







var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .filter(function (value) { return value; })
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.prototype.addBs4Polyfills = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__utils_theme_provider__["a" /* isBs3 */])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.checkDropup();
        }
    };
    BsDropdownDirective.prototype.addShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.removeShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.checkRightAlignment = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    BsDropdownDirective.prototype.checkDropup = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    BsDropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */]],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__["a" /* BsDropdownConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], },
    ]; };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDropdownDirective;
}());

//# sourceMappingURL=bs-dropdown.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BsDropdownModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");









var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__component_loader_index__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__positioning_index__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__["a" /* BsDropdownState */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__["a" /* BsDropdownConfig */],
                    useValue: config ? config : { autoClose: true }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
    return BsDropdownModule;
}());

//# sourceMappingURL=bs-dropdown.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

//# sourceMappingURL=bs-dropdown.state.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_menu_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_dropdown_toggle_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* unused harmony reexport BsDropdownModule */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_locale_locales__ = __webpack_require__("../../../../ngx-bootstrap/chronos/locale/locales.js");
/* unused harmony reexport listLocales */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* unused harmony reexport setTheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_index__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* unused harmony reexport AccordionComponent */
/* unused harmony reexport AccordionConfig */
/* unused harmony reexport AccordionModule */
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_index__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* unused harmony reexport AlertComponent */
/* unused harmony reexport AlertConfig */
/* unused harmony reexport AlertModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buttons_index__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* unused harmony reexport ButtonCheckboxDirective */
/* unused harmony reexport ButtonRadioDirective */
/* unused harmony reexport ButtonsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_index__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* unused harmony reexport CarouselComponent */
/* unused harmony reexport CarouselConfig */
/* unused harmony reexport CarouselModule */
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collapse_index__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* unused harmony reexport CollapseDirective */
/* unused harmony reexport CollapseModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_index__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* unused harmony reexport DateFormatter */
/* unused harmony reexport DatePickerComponent */
/* unused harmony reexport DatepickerConfig */
/* unused harmony reexport DatepickerModule */
/* unused harmony reexport DayPickerComponent */
/* unused harmony reexport MonthPickerComponent */
/* unused harmony reexport YearPickerComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__datepicker_index__["a"]; });
/* unused harmony reexport BsDatepickerConfig */
/* unused harmony reexport BsDaterangepickerConfig */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__datepicker_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_index__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* unused harmony reexport ModalDirective */
/* unused harmony reexport ModalOptions */
/* unused harmony reexport ModalBackdropOptions */
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalModule */
/* unused harmony reexport BsModalRef */
/* unused harmony reexport BsModalService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dropdown_index__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* unused harmony reexport BsDropdownModule */
/* unused harmony reexport BsDropdownConfig */
/* unused harmony reexport BsDropdownState */
/* unused harmony reexport BsDropdownContainerComponent */
/* unused harmony reexport BsDropdownDirective */
/* unused harmony reexport BsDropdownMenuDirective */
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pagination_index__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* unused harmony reexport PagerComponent */
/* unused harmony reexport PaginationComponent */
/* unused harmony reexport PaginationConfig */
/* unused harmony reexport PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressbar_index__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/index.js");
/* unused harmony reexport BarComponent */
/* unused harmony reexport ProgressbarComponent */
/* unused harmony reexport ProgressbarConfig */
/* unused harmony reexport ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_index__ = __webpack_require__("../../../../ngx-bootstrap/rating/index.js");
/* unused harmony reexport RatingComponent */
/* unused harmony reexport RatingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sortable_index__ = __webpack_require__("../../../../ngx-bootstrap/sortable/index.js");
/* unused harmony reexport DraggableItemService */
/* unused harmony reexport SortableComponent */
/* unused harmony reexport SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_index__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* unused harmony reexport NgTranscludeDirective */
/* unused harmony reexport TabDirective */
/* unused harmony reexport TabHeadingDirective */
/* unused harmony reexport TabsetComponent */
/* unused harmony reexport TabsetConfig */
/* unused harmony reexport TabsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__timepicker_index__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* unused harmony reexport TimepickerComponent */
/* unused harmony reexport TimepickerConfig */
/* unused harmony reexport TimepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tooltip_index__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* unused harmony reexport TooltipConfig */
/* unused harmony reexport TooltipContainerComponent */
/* unused harmony reexport TooltipDirective */
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__typeahead_index__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* unused harmony reexport TypeaheadOptions */
/* unused harmony reexport TypeaheadContainerComponent */
/* unused harmony reexport TypeaheadDirective */
/* unused harmony reexport TypeaheadMatch */
/* unused harmony reexport TypeaheadModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popover_index__ = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
/* unused harmony reexport PopoverConfig */
/* unused harmony reexport PopoverContainerComponent */
/* unused harmony reexport PopoverDirective */
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_index__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* unused harmony reexport OnChange */
/* unused harmony reexport LinkedList */
/* unused harmony reexport isBs3 */
/* unused harmony reexport Trigger */
/* unused harmony reexport Utils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* unused harmony reexport ComponentLoader */
/* unused harmony reexport ComponentLoaderFactory */
/* unused harmony reexport ContentRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* unused harmony reexport Positioning */
/* unused harmony reexport PositioningService */
/* unused harmony reexport positionElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__chronos_index__ = __webpack_require__("../../../../ngx-bootstrap/chronos/index.js");
/* unused harmony reexport defineLocale */
/* unused harmony reexport getSetGlobalLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* unused harmony namespace reexport */
























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/locale.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chronos_i18n_ar__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/ar.js");
/* unused harmony reexport arLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chronos_i18n_cs__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/cs.js");
/* unused harmony reexport csLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chronos_i18n_da__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/da.js");
/* unused harmony reexport daLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronos_i18n_de__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/de.js");
/* unused harmony reexport deLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chronos_i18n_en_gb__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/en-gb.js");
/* unused harmony reexport enGbLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chronos_i18n_es__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/es.js");
/* unused harmony reexport esLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chronos_i18n_es_do__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/es-do.js");
/* unused harmony reexport esDoLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chronos_i18n_es_us__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/es-us.js");
/* unused harmony reexport esUsLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chronos_i18n_fr__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/fr.js");
/* unused harmony reexport frLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chronos_i18n_hi__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/hi.js");
/* unused harmony reexport hiLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chronos_i18n_hu__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/hu.js");
/* unused harmony reexport huLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chronos_i18n_it__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/it.js");
/* unused harmony reexport itLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chronos_i18n_ja__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/ja.js");
/* unused harmony reexport jaLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chronos_i18n_ko__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/ko.js");
/* unused harmony reexport koLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chronos_i18n_nl__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/nl.js");
/* unused harmony reexport nlLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__chronos_i18n_nl_be__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/nl-be.js");
/* unused harmony reexport nlBeLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chronos_i18n_pl__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/pl.js");
/* unused harmony reexport plLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chronos_i18n_pt_br__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/pt-br.js");
/* unused harmony reexport ptBrLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chronos_i18n_sv__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/sv.js");
/* unused harmony reexport svLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chronos_i18n_ru__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/ru.js");
/* unused harmony reexport ruLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__chronos_i18n_zh_cn__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/zh-cn.js");
/* unused harmony reexport zhCnLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chronos_i18n_tr__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/tr.js");
/* unused harmony reexport trLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__chronos_i18n_he__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/he.js");
/* unused harmony reexport heLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__chronos_i18n_th__ = __webpack_require__("../../../../ngx-bootstrap/chronos/i18n/th.js");
/* unused harmony reexport thLocale */
























//# sourceMappingURL=locale.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/mini-ngrx/state.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_scheduler_queue__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/operator/scan.js");
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
/**
 * @copyright ngrx
 */




var MiniState = (function (_super) {
    __extends(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        var actionInQueue$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_observeOn__["a" /* observeOn */].call(actionsDispatcher$, __WEBPACK_IMPORTED_MODULE_2_rxjs_scheduler_queue__["a" /* queue */]);
        var state$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_scan__["a" /* scan */].call(actionInQueue$, function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return MiniState;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));

//# sourceMappingURL=state.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/mini-ngrx/store.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
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
/**
 * @copyright ngrx
 */



var MiniStore = (function (_super) {
    __extends(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        _this.source = state$;
        return _this;
    }
    MiniStore.prototype.select = function (pathOrMapFn) {
        var mapped$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__["a" /* map */].call(this, pathOrMapFn);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_distinctUntilChanged__["a" /* distinctUntilChanged */].call(mapped$);
    };
    MiniStore.prototype.lift = function (operator) {
        var store = new MiniStore(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    MiniStore.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    MiniStore.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    MiniStore.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    MiniStore.prototype.complete = function () {
        /*noop*/
    };
    return MiniStore;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]));

//# sourceMappingURL=store.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/bs-modal-ref.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsModalRef = (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
    }
    BsModalRef.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalRef.ctorParameters = function () { return []; };
    return BsModalRef;
}());

//# sourceMappingURL=bs-modal-ref.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/bs-modal.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");






var BsModalService = (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* modalConfigDefaults */];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    BsModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* modalConfigDefaults */], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["a" /* BsModalRef */]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["c" /* ModalOptions */], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["a" /* BsModalRef */], useValue: bsModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modal_container_component__["a" /* ModalContainerComponent */])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["a" /* CLASS_NAME */].SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    return BsModalService;
}());

//# sourceMappingURL=bs-modal.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* unused harmony reexport BsModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_options__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.options.js");
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* unused harmony reexport ModalContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* unused harmony reexport ModalBackdropComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* unused harmony reexport ModalOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* unused harmony reexport ModalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_module__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.module.js");
/* unused harmony reexport ModalModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* unused harmony reexport BsModalService */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-backdrop.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");




/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN);
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].FADE);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    return ModalBackdropComponent;
}());

//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-backdrop.options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

//# sourceMappingURL=modal-backdrop.options.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



var ModalContainerComponent = (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* DISMISS_REASONS */].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* DISMISS_REASONS */].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* TRANSITION_DURATIONS */].MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1'
                    }
                },] },
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["c" /* ModalOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.esc',] },],
    };
    return ModalContainerComponent;
}());

//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-options.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLASS_NAME; });
/* unused harmony export SELECTOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRANSITION_DURATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var ModalOptions = (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ModalOptions.ctorParameters = function () { return []; };
    return ModalOptions;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events







var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* DISMISS_REASONS */].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* DISMISS_REASONS */].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
            this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["e" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                    _this._renderer.removeClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */]
            .getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SCROLLBAR_MEASURER);
        this._renderer.appendChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());

//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");







var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__bs_modal_service__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["a" /* PositioningService */]]
        };
    };
    ModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */],
                        __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]
                    ],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/pagination/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pager_component__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pager.component.js");
/* unused harmony reexport PagerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_component__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.component.js");
/* unused harmony reexport PaginationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_module__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.module.js");
/* unused harmony reexport PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.config.js");
/* unused harmony reexport PaginationConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/pagination/pager.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.config.js");



var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = (function () {
    function PagerComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\"> <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a> </li> <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a> </li> </ul> ",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PagerComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PagerComponent;
}());

//# sourceMappingURL=pager.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/pagination/pagination.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGINATION_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.config.js");



var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\"> <li class=\"pagination-first page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a> </li> <li class=\"pagination-prev page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a> </li> <li *ngFor=\"let pg of pages\" [class.active]=\"pg.active\" [class.disabled]=\"disabled&&!pg.active\" class=\"pagination-page page-item\"> <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a> </li> <li class=\"pagination-next page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li> <li class=\"pagination-last page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li> </ul> ",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/pagination/pagination.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// todo: split

/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
    return PaginationConfig;
}());

//# sourceMappingURL=pagination.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/pagination/pagination.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pager_component__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pager.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_component__ = __webpack_require__("../../../../ngx-bootstrap/pagination/pagination.component.js");





var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */]] };
    };
    PaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]]
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = function () { return []; };
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_directive__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.directive.js");
/* unused harmony reexport PopoverDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_module__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.module.js");
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* unused harmony reexport PopoverConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover-container.component.js");
/* unused harmony reexport PopoverContainerComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    styles: [
                        "\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n    }\n  "
                    ],
                    template: "<div class=\"popover-arrow arrow\"></div> <h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3> <div class=\"popover-content popover-body\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PopoverContainerComponent;
}());

//# sourceMappingURL=popover-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
    return PopoverConfig;
}());

//# sourceMappingURL=popover.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover-container.component.js");




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            return this._popover.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(__WEBPACK_IMPORTED_MODULE_3__popover_container_component__["a" /* PopoverContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], },
    ]; };
    PopoverDirective.propDecorators = {
        'popover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_directive__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_container_component__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover-container.component.js");







var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* PopoverConfig */], __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["a" /* PositioningService */]]
        };
    };
    PopoverModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */], __WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/positioning/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/ng-positioning.js");
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__("../../../../ngx-bootstrap/positioning/positioning.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/positioning/ng-positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody
            ? this.offset(hostElement, false)
            : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left +
                hostElPosition.width / 2 -
                targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top +
                hostElPosition.height / 2 -
                targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        if (placementPrimary === 'auto') {
            var newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
            if (!newPlacementPrimary)
                newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
            if (newPlacementPrimary)
                placementPrimary = newPlacementPrimary;
            targetElement.classList.add(placementPrimary);
        }
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top -
                        (targetElement.offsetHeight +
                            parseFloat(targetElStyles.marginBottom));
                targetElPosition.bottom +=
                    hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left =
                    hostElPosition.left -
                        (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                targetElPosition.right +=
                    hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.autoPosition = function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
        if ((!preferredPosition || preferredPosition === 'right') &&
            targetElPosition.left + hostElPosition.left - targetElement.offsetWidth <
                0) {
            return 'right';
        }
        else if ((!preferredPosition || preferredPosition === 'top') &&
            targetElPosition.bottom +
                hostElPosition.bottom +
                targetElement.offsetHeight >
                window.innerHeight) {
            return 'top';
        }
        else if ((!preferredPosition || preferredPosition === 'bottom') &&
            targetElPosition.top + hostElPosition.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        else if ((!preferredPosition || preferredPosition === 'left') &&
            targetElPosition.right +
                hostElPosition.right +
                targetElement.offsetWidth >
                window.innerWidth) {
            return 'left';
        }
        return null;
    };
    Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
    };
    Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
    };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/positioning/positioning.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositioningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/ng-positioning.js");


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        Object(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());

function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=positioning.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/bar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content> ",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_component__["a" /* ProgressbarComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'setBarWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/bar.component.js");
/* unused harmony reexport BarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.component.js");
/* unused harmony reexport ProgressbarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_module__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.module.js");
/* unused harmony reexport ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_config__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.config.js");
/* unused harmony reexport ProgressbarConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/progressbar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_config__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");



var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.prototype.addBar = function (bar) {
        bar.animate = this.animate;
        bar.striped = this.striped;
        this.bars.push(bar);
    };
    ProgressbarComponent.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar> </ng-template> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n      display: block;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_config__["a" /* ProgressbarConfig */], },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.max',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/progressbar.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/progressbar/progressbar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/bar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_component__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_config__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/progressbar.config.js");





var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_4__progressbar_config__["a" /* ProgressbarConfig */]] };
    };
    ProgressbarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a" /* ProgressbarComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_3__progressbar_component__["a" /* ProgressbarComponent */]]
                },] },
    ];
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/rating/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating_component__ = __webpack_require__("../../../../ngx-bootstrap/rating/rating.component.js");
/* unused harmony reexport RatingComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating_module__ = __webpack_require__("../../../../ngx-bootstrap/rating/rating.module.js");
/* unused harmony reexport RatingModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/rating/rating.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");


var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /** number of icons */
        this.max = 5;
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    RatingComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : ['one', 'two', 'three', 'four', 'five'];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    RatingComponent.prototype.writeValue = function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    RatingComponent.prototype.enter = function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    RatingComponent.prototype.reset = function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.prototype.rate = function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    RatingComponent.prototype.buildTemplateObjects = function (max) {
        var result = [];
        for (var i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\"> <ng-template #star let-value=\"value\" let-index=\"index\">{{index < value ? '&#9733;' : '&#9734;'}}</ng-template> <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\"> <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span> <span class=\"bs-rating-star\" (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" [title]=\"r.title\" [style.cursor]=\"readonly ? 'default' : 'pointer'\" [class.active]=\"index < value\"> <ng-template [ngTemplateOutlet]=\"customTemplate || star\" [ngTemplateOutletContext]=\"{index: index, value: value}\"> </ng-template> </span> </ng-template> </span> ",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    RatingComponent.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'titles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return RatingComponent;
}());

//# sourceMappingURL=rating.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/rating/rating.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RatingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_component__ = __webpack_require__("../../../../ngx-bootstrap/rating/rating.component.js");



var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule.forRoot = function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]]
                },] },
    ];
    /** @nocollapse */
    RatingModule.ctorParameters = function () { return []; };
    return RatingModule;
}());

//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/sortable/draggable-item.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");


var DraggableItemService = (function () {
    function DraggableItemService() {
        this.onCapture = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DraggableItemService.prototype.dragStart = function (item) {
        this.draggableItem = item;
    };
    DraggableItemService.prototype.getItem = function () {
        return this.draggableItem;
    };
    DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    DraggableItemService.prototype.onCaptureItem = function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DraggableItemService.ctorParameters = function () { return []; };
    return DraggableItemService;
}());

//# sourceMappingURL=draggable-item.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/sortable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sortable_module__ = __webpack_require__("../../../../ngx-bootstrap/sortable/sortable.module.js");
/* unused harmony reexport SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortable_component__ = __webpack_require__("../../../../ngx-bootstrap/sortable/sortable.component.js");
/* unused harmony reexport SortableComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__ = __webpack_require__("../../../../ngx-bootstrap/sortable/draggable-item.service.js");
/* unused harmony reexport DraggableItemService */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/sortable/sortable.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__ = __webpack_require__("../../../../ngx-bootstrap/sortable/draggable-item.service.js");



/* tslint:disable */
/* tslint:enable */
var SortableComponent = (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        this.onTouched = Function.prototype;
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            var out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype.onItemDragstart = function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    SortableComponent.prototype.onItemDragover = function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = this.items.slice(0, i).concat([
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = this.items.slice(0, dragItem.i).concat(this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.cancelEvent = function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    SortableComponent.prototype.onDrop = function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    SortableComponent.prototype.resetActiveItem = function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    SortableComponent.prototype.registerOnChange = function (callback) {
        this.onChanged = callback;
    };
    SortableComponent.prototype.registerOnTouched = function (callback) {
        this.onTouched = callback;
    };
    SortableComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value) {
            this.items = value.map(function (x, i) { return ({
                id: i,
                initData: x,
                value: _this.fieldName ? x[_this.fieldName] : x
            }); });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.updatePlaceholderState = function () {
        this.showPlaceholder = !this._items.length;
    };
    SortableComponent.prototype.getItemStyle = function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    // tslint:disable-next-line
    SortableComponent.prototype.initDragstartEvent = function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__["a" /* DraggableItemService */], },
    ]; };
    SortableComponent.propDecorators = {
        'fieldName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'wrapperClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'wrapperStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemActiveClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemActiveStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return SortableComponent;
}());

//# sourceMappingURL=sortable.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/sortable/sortable.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sortable_component__ = __webpack_require__("../../../../ngx-bootstrap/sortable/sortable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_item_service__ = __webpack_require__("../../../../ngx-bootstrap/sortable/draggable-item.service.js");




var SortableModule = (function () {
    function SortableModule() {
    }
    SortableModule.forRoot = function () {
        return { ngModule: SortableModule, providers: [__WEBPACK_IMPORTED_MODULE_3__draggable_item_service__["a" /* DraggableItemService */]] };
    };
    SortableModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__sortable_component__["a" /* SortableComponent */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__sortable_component__["a" /* SortableComponent */]]
                },] },
    ];
    /** @nocollapse */
    SortableModule.ctorParameters = function () { return []; };
    return SortableModule;
}());

//# sourceMappingURL=sortable.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_transclude_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/ng-transclude.directive.js");
/* unused harmony reexport NgTranscludeDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tab.directive.js");
/* unused harmony reexport TabDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_heading_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tab-heading.directive.js");
/* unused harmony reexport TabHeadingDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_component__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.component.js");
/* unused harmony reexport TabsetComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabset_config__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.config.js");
/* unused harmony reexport TabsetConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_module__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabs.module.js");
/* unused harmony reexport TabsModule */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/ng-transclude.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTranscludeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[ngTransclude]'
                },] },
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    NgTranscludeDirective.propDecorators = {
        'ngTransclude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgTranscludeDirective;
}());

//# sourceMappingURL=ng-transclude.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/tab-heading.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHeadingDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tab.directive.js");


/** Should be used to mark <ng-template> element as a template for tab heading */
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[tabHeading]' },] },
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* TabDirective */], },
    ]; };
    return TabHeadingDirective;
}());

//# sourceMappingURL=tab-heading.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/tab.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_component__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.component.js");


var TabDirective = (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: function () {
            return this._customClass;
        },
        set: function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* TabsetComponent */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    TabDirective.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.id',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'deselect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'removed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());

//# sourceMappingURL=tab.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/tabs.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TabsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/ng-transclude.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tab-heading.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_directive__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tab.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabset_component__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabset_config__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.config.js");







var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__tabset_config__["a" /* TabsetConfig */]]
        };
    };
    TabsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */],
                        __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */],
                        __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */]
                    ]
                },] },
    ];
    /** @nocollapse */
    TabsModule.ctorParameters = function () { return []; };
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/tabset.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__("../../../../ngx-bootstrap/tabs/tabset.config.js");


// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    TabsetComponent.prototype.removeTab = function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\"> <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"> <a href=\"javascript:void(0);\" class=\"nav-link\" [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"tabz.active = true\"> <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span> <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span> </a> </li> </ul> <div class=\"tab-content\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* TabsetConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    TabsetComponent.propDecorators = {
        'vertical': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'justified': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clazz': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());

//# sourceMappingURL=tabset.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tabs/tabset.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsetConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var TabsetConfig = (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TabsetConfig.ctorParameters = function () { return []; };
    return TabsetConfig;
}());

//# sourceMappingURL=tabset.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.component.js");
/* unused harmony reexport TimepickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer_timepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.actions.js");
/* unused harmony reexport TimepickerActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer_timepicker_store__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.store.js");
/* unused harmony reexport TimepickerStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.config.js");
/* unused harmony reexport TimepickerConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_module__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.module.js");
/* unused harmony reexport TimepickerModule */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/reducer/timepicker.actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var TimepickerActions = (function () {
    function TimepickerActions() {
    }
    TimepickerActions.prototype.writeValue = function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    TimepickerActions.prototype.changeHours = function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    TimepickerActions.prototype.changeMinutes = function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    TimepickerActions.prototype.changeSeconds = function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    TimepickerActions.prototype.setTime = function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    TimepickerActions.prototype.updateControls = function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TimepickerActions.ctorParameters = function () { return []; };
    return TimepickerActions;
}());

//# sourceMappingURL=timepicker.actions.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/reducer/timepicker.reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TimepickerState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = timepickerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker-controls.util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker_utils__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.actions.js");




var TimepickerState = (function () {
    function TimepickerState() {
    }
    return TimepickerState;
}());

var initialState = {
    value: null,
    config: new __WEBPACK_IMPORTED_MODULE_1__timepicker_config__["a" /* TimepickerConfig */](),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true
    }
};
function timepickerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__["a" /* TimepickerActions */].WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__["a" /* TimepickerActions */].CHANGE_HOURS: {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["d" /* canChangeValue */])(state.config, action.payload) ||
                !Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["a" /* canChangeHours */])(action.payload, state.controls)) {
                return state;
            }
            var _newTime = Object(__WEBPACK_IMPORTED_MODULE_2__timepicker_utils__["a" /* changeTime */])(state.value, { hour: action.payload.step });
            return Object.assign({}, state, { value: _newTime });
        }
        case __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__["a" /* TimepickerActions */].CHANGE_MINUTES: {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["d" /* canChangeValue */])(state.config, action.payload) ||
                !Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["b" /* canChangeMinutes */])(action.payload, state.controls)) {
                return state;
            }
            var _newTime = Object(__WEBPACK_IMPORTED_MODULE_2__timepicker_utils__["a" /* changeTime */])(state.value, { minute: action.payload.step });
            return Object.assign({}, state, { value: _newTime });
        }
        case __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__["a" /* TimepickerActions */].CHANGE_SECONDS: {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["d" /* canChangeValue */])(state.config, action.payload) ||
                !Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["c" /* canChangeSeconds */])(action.payload, state.controls)) {
                return state;
            }
            var _newTime = Object(__WEBPACK_IMPORTED_MODULE_2__timepicker_utils__["a" /* changeTime */])(state.value, {
                seconds: action.payload.step
            });
            return Object.assign({}, state, { value: _newTime });
        }
        case __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__["a" /* TimepickerActions */].SET_TIME_UNIT: {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["d" /* canChangeValue */])(state.config)) {
                return state;
            }
            var _newTime = Object(__WEBPACK_IMPORTED_MODULE_2__timepicker_utils__["f" /* setTime */])(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case __WEBPACK_IMPORTED_MODULE_3__timepicker_actions__["a" /* TimepickerActions */].UPDATE_CONTROLS: {
            var _newControlsState = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_controls_util__["f" /* timepickerControls */])(state.value, action.payload);
            var _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}
//# sourceMappingURL=timepicker.reducer.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/reducer/timepicker.store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_reducer__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mini_ngrx_store_class__ = __webpack_require__("../../../../ngx-bootstrap/mini-ngrx/store.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mini_ngrx_state_class__ = __webpack_require__("../../../../ngx-bootstrap/mini-ngrx/state.class.js");
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





var TimepickerStore = (function (_super) {
    __extends(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        var _dispatcher = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            type: '[mini-ngrx] dispatcher init'
        });
        var state = new __WEBPACK_IMPORTED_MODULE_4__mini_ngrx_state_class__["a" /* MiniState */](__WEBPACK_IMPORTED_MODULE_1__timepicker_reducer__["a" /* initialState */], _dispatcher, __WEBPACK_IMPORTED_MODULE_1__timepicker_reducer__["b" /* timepickerReducer */]);
        _this = _super.call(this, _dispatcher, __WEBPACK_IMPORTED_MODULE_1__timepicker_reducer__["b" /* timepickerReducer */], state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(__WEBPACK_IMPORTED_MODULE_3__mini_ngrx_store_class__["a" /* MiniStore */]));

//# sourceMappingURL=timepicker.store.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/timepicker-controls.util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = canChangeValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = canChangeHours;
/* harmony export (immutable) */ __webpack_exports__["b"] = canChangeMinutes;
/* harmony export (immutable) */ __webpack_exports__["c"] = canChangeSeconds;
/* harmony export (immutable) */ __webpack_exports__["e"] = getControlsValue;
/* harmony export (immutable) */ __webpack_exports__["f"] = timepickerControls;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_utils__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.utils.js");

function canChangeValue(state, event) {
    if (state.readonlyInput) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
function timepickerControls(value, state) {
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    var res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        var _newHour = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_utils__["a" /* changeTime */])(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            var _newMinutes = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_utils__["a" /* changeTime */])(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            var _newSeconds = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_utils__["a" /* changeTime */])(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
    }
    if (min) {
        var _newHour = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_utils__["a" /* changeTime */])(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            var _newMinutes = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_utils__["a" /* changeTime */])(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            var _newSeconds = Object(__WEBPACK_IMPORTED_MODULE_0__timepicker_utils__["a" /* changeTime */])(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
    }
    return res;
}
//# sourceMappingURL=timepicker-controls.util.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/timepicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TIMEPICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer_timepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_timepicker_store__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_controls_util__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker-controls.util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timepicker_utils__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.utils.js");
/* tslint:disable:no-forward-ref max-file-line-count */







var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TimepickerComponent; }),
    multi: true
};
var TimepickerComponent = (function () {
    function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
        var _this = this;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /** emits true if value is a valid date */
        this.isValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        // todo: add unsubscribe
        _store.select(function (state) { return state.value; }).subscribe(function (value) {
            // update UI values if date changed
            _this._renderTime(value);
            _this.onChange(value);
            _this._store.dispatch(_this._timepickerActions.updateControls(Object(__WEBPACK_IMPORTED_MODULE_4__timepicker_controls_util__["e" /* getControlsValue */])(_this)));
        });
        _store.select(function (state) { return state.controls; }).subscribe(function (controlsState) {
            _this.isValid.emit(Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["b" /* isInputValid */])(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
            Object.assign(_this, controlsState);
            _cd.markForCheck();
        });
    }
    Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
        get: function () {
            return this.showSpinners && !this.readonlyInput;
        },
        enumerable: true,
        configurable: true
    });
    TimepickerComponent.prototype.isPM = function () {
        return this.showMeridian && this.meridian === this.meridians[1];
    };
    TimepickerComponent.prototype.prevDef = function ($event) {
        $event.preventDefault();
    };
    TimepickerComponent.prototype.wheelSign = function ($event) {
        return Math.sign($event.deltaY) * -1;
    };
    TimepickerComponent.prototype.ngOnChanges = function (changes) {
        this._store.dispatch(this._timepickerActions.updateControls(Object(__WEBPACK_IMPORTED_MODULE_4__timepicker_controls_util__["e" /* getControlsValue */])(this)));
    };
    TimepickerComponent.prototype.changeHours = function (step, source) {
        if (source === void 0) { source = ''; }
        this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
    };
    TimepickerComponent.prototype.changeMinutes = function (step, source) {
        if (source === void 0) { source = ''; }
        this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
    };
    TimepickerComponent.prototype.changeSeconds = function (step, source) {
        if (source === void 0) { source = ''; }
        this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
    };
    TimepickerComponent.prototype.updateHours = function (hours) {
        this.hours = hours;
        this._updateTime();
    };
    TimepickerComponent.prototype.updateMinutes = function (minutes) {
        this.minutes = minutes;
        this._updateTime();
    };
    TimepickerComponent.prototype.updateSeconds = function (seconds) {
        this.seconds = seconds;
        this._updateTime();
    };
    TimepickerComponent.prototype._updateTime = function () {
        var _seconds = this.showSeconds ? this.seconds : void 0;
        var _minutes = this.showMinutes ? this.minutes : void 0;
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["b" /* isInputValid */])(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        if (!this.showMeridian || this.readonlyInput) {
            return;
        }
        var _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    };
    /**
     * Write a new value to the element.
     */
    TimepickerComponent.prototype.writeValue = function (obj) {
        if (Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["c" /* isValidDate */])(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["e" /* parseTime */])(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    };
    /**
     * Set the function to be called when the control receives a change event.
     */
    TimepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    TimepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    TimepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonlyInput = isDisabled;
    };
    TimepickerComponent.prototype._renderTime = function (value) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["c" /* isValidDate */])(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        var _value = Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["e" /* parseTime */])(value);
        var _hoursPerDayHalf = 12;
        var _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["d" /* padNumber */])(_hours);
        this.minutes = Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["d" /* padNumber */])(_value.getMinutes());
        this.seconds = Object(__WEBPACK_IMPORTED_MODULE_6__timepicker_utils__["d" /* padNumber */])(_value.getUTCSeconds());
    };
    TimepickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'timepicker',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_3__reducer_timepicker_store__["a" /* TimepickerStore */]],
                    template: "<table> <tbody> <tr class=\"text-center\" [class.hidden]=\"!isSpinnersVisible\"> <!-- increment hours button--> <td> <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours\" (click)=\"changeHours(hourStep)\" ><span class=\"bs-chevron bs-chevron-up\"></span></a> </td> <!-- divider --> <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td> <!-- increment minutes button --> <td *ngIf=\"showMinutes\"> <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes\" (click)=\"changeMinutes(minuteStep)\" ><span class=\"bs-chevron bs-chevron-up\"></span></a> </td> <!-- divider --> <td *ngIf=\"showSeconds\">&nbsp;</td> <!-- increment seconds button --> <td *ngIf=\"showSeconds\"> <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds\" (click)=\"changeSeconds(secondsStep)\"> <span class=\"bs-chevron bs-chevron-up\"></span> </a> </td> <!-- space between --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- meridian placeholder--> <td *ngIf=\"showMeridian\"></td> </tr> <tr> <!-- hours --> <td class=\"form-group\" [class.has-error]=\"invalidHours\"> <input type=\"text\" class=\"form-control text-center bs-timepicker-field\" placeholder=\"HH\" maxlength=\"2\" [readonly]=\"readonlyInput\" [value]=\"hours\" (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\" (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\" (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\" (change)=\"updateHours($event.target.value)\"></td> <!-- divider --> <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td> <!-- minutes --> <td class=\"form-group\" *ngIf=\"showMinutes\"[class.has-error]=\"invalidMinutes\"> <input type=\"text\" class=\"form-control text-center bs-timepicker-field\" placeholder=\"MM\" maxlength=\"2\" [readonly]=\"readonlyInput\" [value]=\"minutes\" (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\" (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\" (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\" (change)=\"updateMinutes($event.target.value)\"> </td> <!-- divider --> <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td> <!-- seconds --> <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\"> <input type=\"text\" class=\"form-control text-center bs-timepicker-field\" placeholder=\"SS\" maxlength=\"2\" [readonly]=\"readonlyInput\" [value]=\"seconds\" (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\" (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\" (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\" (change)=\"updateSeconds($event.target.value)\"> </td> <!-- space between --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- meridian --> <td *ngIf=\"showMeridian\"> <button type=\"button\" class=\"btn btn-default text-center\" [disabled]=\"readonlyInput\" [class.disabled]=\"readonlyInput\" (click)=\"toggleMeridian()\" >{{ meridian }} </button> </td> </tr> <tr class=\"text-center\" [class.hidden]=\"!isSpinnersVisible\"> <!-- decrement hours button--> <td> <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours\" (click)=\"changeHours(-hourStep)\"> <span class=\"bs-chevron bs-chevron-down\"></span> </a> </td> <!-- divider --> <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td> <!-- decrement minutes button--> <td *ngIf=\"showMinutes\"> <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes\" (click)=\"changeMinutes(-minuteStep)\"> <span class=\"bs-chevron bs-chevron-down\"></span> </a> </td> <!-- divider --> <td *ngIf=\"showSeconds\">&nbsp;</td> <!-- decrement seconds button--> <td *ngIf=\"showSeconds\"> <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds\" (click)=\"changeSeconds(-secondsStep)\"> <span class=\"bs-chevron bs-chevron-down\"></span> </a> </td> <!-- space between --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- meridian placeholder--> <td *ngIf=\"showMeridian\"></td> </tr> </tbody> </table> ",
                    styles: ["\n    .bs-chevron{\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n    .bs-chevron-up{\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n    .bs-chevron-down{\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n    .bs-timepicker-field{\n      width: 50px;\n    }\n  "],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_5__timepicker_config__["a" /* TimepickerConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__reducer_timepicker_store__["a" /* TimepickerStore */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__reducer_timepicker_actions__["a" /* TimepickerActions */], },
    ]; };
    TimepickerComponent.propDecorators = {
        'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'secondsStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readonlyInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'mousewheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'arrowkeys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showSpinners': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showMeridian': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showMinutes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showSeconds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'meridians': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isValid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return TimepickerComponent;
}());

//# sourceMappingURL=timepicker.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/timepicker.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/** Provides default configuration values for timepicker */
var TimepickerConfig = (function () {
    function TimepickerConfig() {
        /** hours change step */
        this.hourStep = 1;
        /** hours change step */
        this.minuteStep = 5;
        /** seconds changes step */
        this.secondsStep = 10;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true up/down arrowkeys inside hours and minutes inputs will change time */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
        /** show minutes in timepicker */
        this.showMinutes = true;
    }
    TimepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TimepickerConfig.ctorParameters = function () { return []; };
    return TimepickerConfig;
}());

//# sourceMappingURL=timepicker.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/timepicker.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TimepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker_component__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_timepicker_actions__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_config__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/timepicker.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer_timepicker_store__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/reducer/timepicker.store.js");






var TimepickerModule = (function () {
    function TimepickerModule() {
    }
    TimepickerModule.forRoot = function () {
        return {
            ngModule: TimepickerModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__timepicker_config__["a" /* TimepickerConfig */], __WEBPACK_IMPORTED_MODULE_3__reducer_timepicker_actions__["a" /* TimepickerActions */], __WEBPACK_IMPORTED_MODULE_5__reducer_timepicker_store__["a" /* TimepickerStore */]]
        };
    };
    TimepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__timepicker_component__["a" /* TimepickerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__timepicker_component__["a" /* TimepickerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TimepickerModule.ctorParameters = function () { return []; };
    return TimepickerModule;
}());

//# sourceMappingURL=timepicker.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/timepicker/timepicker.utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isValidDate;
/* unused harmony export toNumber */
/* unused harmony export isNumber */
/* unused harmony export parseHours */
/* unused harmony export parseMinutes */
/* unused harmony export parseSeconds */
/* harmony export (immutable) */ __webpack_exports__["e"] = parseTime;
/* harmony export (immutable) */ __webpack_exports__["a"] = changeTime;
/* harmony export (immutable) */ __webpack_exports__["f"] = setTime;
/* unused harmony export createDate */
/* harmony export (immutable) */ __webpack_exports__["d"] = padNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = isInputValid;
var dex = 10;
var hoursPerDay = 24;
var hoursPerDayHalf = 12;
var minutesPerHour = 60;
var secondsPerMinute = 60;
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
function isNumber(value) {
    return !isNaN(toNumber(value));
}
function parseHours(value, isPM) {
    if (isPM === void 0) { isPM = false; }
    var hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
function parseMinutes(value) {
    var minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
function parseSeconds(value) {
    var seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    var hour = value.getHours();
    var minutes = value.getMinutes();
    var seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
function setTime(value, opts) {
    var hour = parseHours(opts.hour);
    var minute = parseMinutes(opts.minute);
    var seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM) {
        hour += hoursPerDayHalf;
    }
    // fixme: unreachable code, value is mandatory
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
function createDate(value, hours, minutes, seconds) {
    // fixme: unreachable code, value is mandatory
    var _value = value || new Date();
    return new Date(_value.getFullYear(), _value.getMonth(), _value.getDate(), hours, minutes, seconds, _value.getMilliseconds());
}
function padNumber(value) {
    var _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
}
function isInputValid(hours, minutes, seconds, isPM) {
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
    return !(isNaN(parseHours(hours, isPM))
        || isNaN(parseMinutes(minutes))
        || isNaN(parseSeconds(seconds)));
}
//# sourceMappingURL=timepicker.utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tooltip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_container_component__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip-container.component.js");
/* unused harmony reexport TooltipContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.directive.js");
/* unused harmony reexport TooltipDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_module__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.module.js");
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_config__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.config.js");
/* unused harmony reexport TooltipConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tooltip/tooltip-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_config__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    styles: [
                        "\n    :host.tooltip {\n      display: block;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n    }\n  "
                    ],
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    return TooltipContainerComponent;
}());

//# sourceMappingURL=tooltip-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tooltip/tooltip.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
    return TooltipConfig;
}());

//# sourceMappingURL=tooltip.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tooltip/tooltip.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_decorators__ = __webpack_require__("../../../../ngx-bootstrap/utils/decorators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warn_once__ = __webpack_require__("../../../../ngx-bootstrap/utils/warn-once.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_triggers__ = __webpack_require__("../../../../ngx-bootstrap/utils/triggers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:deprecation









var TooltipDirective = (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () {
            return this._tooltip.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        /** @deprecated */
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn_once__["a" /* warnOnce */])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(__WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__["a" /* TooltipContainerComponent */])
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass
            });
        };
        var cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var timer_1 = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var triggers = Object(__WEBPACK_IMPORTED_MODULE_6__utils_triggers__["b" /* parseTriggers */])(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__component_loader_index__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    TooltipDirective.propDecorators = {
        'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'htmlContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipHtml',] },],
        '_placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
        '_isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipIsOpen',] },],
        '_enable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEnable',] },],
        '_appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
        '_animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAnimation',] },],
        '_popupClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipClass',] },],
        '_tooltipContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipContext',] },],
        '_tooltipPopupDelay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPopupDelay',] },],
        '_fadeDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipFadeDuration',] },],
        '_tooltipTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTrigger',] },],
        'tooltipStateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_decorators__["a" /* OnChange */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/tooltip/tooltip.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");







var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* TooltipConfig */], __WEBPACK_IMPORTED_MODULE_5__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_6__positioning_index__["a" /* PositioningService */]]
        };
    };
    TooltipModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */], __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TooltipModule.ctorParameters = function () { return []; };
    return TooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/latin-map.js");
/* unused harmony reexport latinMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_options_class__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-options.class.js");
/* unused harmony reexport TypeaheadOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_match_class__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-match.class.js");
/* unused harmony reexport TypeaheadMatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-utils.js");
/* unused harmony reexport escapeRegexp */
/* unused harmony reexport getValueFromObject */
/* unused harmony reexport tokenize */
/* unused harmony reexport latinize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead_container_component__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-container.component.js");
/* unused harmony reexport TypeaheadContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_directive__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead.directive.js");
/* unused harmony reexport TypeaheadDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_module__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead.module.js");
/* unused harmony reexport TypeaheadModule */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/latin-map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return latinMap; });
/* tslint:disable */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};
//# sourceMappingURL=latin-map.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");




var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            var containerViewTop = this.ulElement.nativeElement.scrollTop;
            var containerViewBottom = containerViewTop + this.ulElement.nativeElement.offsetHeight;
            var elemTop = elem.offsetTop;
            var elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            var _this = this;
            this._matches = value;
            this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
            if (this.typeaheadScrollable) {
                setTimeout(function () {
                    _this.setScrollableMode();
                });
            }
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
        get: function () {
            return this.parent ? this.parent.typeaheadScrollable : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
        get: function () {
            return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? Object(__WEBPACK_IMPORTED_MODULE_2__typeahead_utils__["b" /* latinize */])(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                    itemStrHelper =
                        itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                            ("" + itemStrHelper.substring(startIdx + tokenLen));
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                        ("" + itemStr.substring(startIdx + tokenLen));
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
        return false;
    };
    TypeaheadContainerComponent.prototype.setScrollableMode = function () {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            var ulStyles = __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].getStyles(this.ulElement.nativeElement);
            var liStyles = __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].getStyles(this.liElements.first.nativeElement);
            var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '').replace('px', ''));
            var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0').replace('px', ''));
            var optionHeight = parseFloat((liStyles['height'] ? liStyles['height'] : '0').replace('px', ''));
            var height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = (height + ulPaddingTop + ulPaddingBottom) + 'px';
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    };
    TypeaheadContainerComponent.prototype.scrollPrevious = function (index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            var liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    };
    TypeaheadContainerComponent.prototype.scrollNext = function (index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            var liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        this.ulElement.nativeElement.offsetHeight +
                        liElement.nativeElement.offsetHeight;
            }
        }
    };
    TypeaheadContainerComponent.prototype.scrollToBottom = function () {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    };
    TypeaheadContainerComponent.prototype.scrollToTop = function () {
        this.ulElement.nativeElement.scrollTop = 0;
    };
    TypeaheadContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "<!-- inject options list template --> <ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\" [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template> <!-- default options item template --> <ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span> </ng-template> <!-- Bootstrap 3 options list template --> <ng-template #bs3Template> <ul class=\"dropdown-menu\" #ulElement [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\" [style.height]=\"needScrollbar ? guiHeight: 'auto'\"> <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\"> <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li> <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\"> <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\"> <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template> </a> </li> </ng-template> </ul> </ng-template> <!-- Bootstrap 4 options list template --> <ng-template #bs4Template> <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\"> <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6> <ng-template [ngIf]=\"!match.isHeader()\"> <button #liElements class=\"dropdown-item\" (click)=\"selectMatch(match, $event)\" (mouseenter)=\"selectActive(match)\" [class.active]=\"isActive(match)\"> <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template> </button> </ng-template> </ng-template> </ng-template> ",
                    host: {
                        class: 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'ulElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['ulElement',] },],
        'liElements': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"], args: ['liElements',] },],
        'focusLost': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());

//# sourceMappingURL=typeahead-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-match.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadMatch; });
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());

//# sourceMappingURL=typeahead-match.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-options.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TypeaheadOptions */
var TypeaheadOptions = (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());

//# sourceMappingURL=typeahead-options.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = latinize;
/* unused harmony export escapeRegexp */
/* harmony export (immutable) */ __webpack_exports__["c"] = tokenize;
/* harmony export (immutable) */ __webpack_exports__["a"] = getValueFromObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/latin-map.js");

function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return __WEBPACK_IMPORTED_MODULE_0__latin_map__["a" /* latinMap */][a] || a;
    });
}
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    var result = [];
    var preTokenizedLength = preTokenized.length;
    var token;
    var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var propertiesArray = properties.split('.');
    for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
        var property = propertiesArray_1[_i];
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}
//# sourceMappingURL=typeahead-utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__typeahead_container_component__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-match.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typeahead_utils__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-utils.js");
/* tslint:disable:max-file-line-count */













var TypeaheadDirective = (function () {
    function TypeaheadDirective(ngControl, element, viewContainerRef, renderer, cis, changeDetection) {
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.changeDetection = changeDetection;
        /** minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /** match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /** break words with spaces. If true the text "exact phrase"
         * here match would match with match exact phrase here
         * but not with phrase here exact match (kind of "google style").
         */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /** specifies if typeahead is scrollable  */
        this.typeaheadScrollable = false;
        /** specifies number of options to show in scroll view  */
        this.typeaheadOptionsInScrollableView = 5;
        /** fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when blur event occurres. returns the active item */
        this.typeaheadOnBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This attribute indicates that the dropdown should be opened upwards */
        this.dropup = false;
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.onInput = function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter, tab
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if an item is visible - prevent form submission
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        // if an item is visible - don't change focus
        if (e.keyCode === 9) {
            e.preventDefault();
            this._container.selectActiveMatch();
            return;
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        var _this = this;
        this._typeahead
            .attach(__WEBPACK_IMPORTED_MODULE_10__typeahead_container_component__["a" /* TypeaheadContainerComponent */])
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', function (e) {
            if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                return;
            }
            _this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["b" /* latinize */])(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["c" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.onOutsideClick = function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function () { return _this.typeahead; })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].from(_this.typeahead)
                .filter(function (option) {
                return (option &&
                    _this.testMatch(_this.normalizeOption(option), normalizedQuery));
            })
                .toArray();
        })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["a" /* getValueFromObject */])(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["b" /* latinize */])(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize
            ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["b" /* latinize */])(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["c" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["b" /* latinize */])(this.ngControl.control.value)
                : this.ngControl.control.value)
                .toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["c" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map(function (option) {
                return Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["a" /* getValueFromObject */])(option, _this.typeaheadGroupField);
            })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                matches_1.push(new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(function (option) {
                    return Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["a" /* getValueFromObject */])(option, _this.typeaheadGroupField) === group;
                })
                    .map(function (option) {
                    return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["a" /* getValueFromObject */])(option, _this.typeaheadOptionField));
                }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(function (option) {
                return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, Object(__WEBPACK_IMPORTED_MODULE_12__typeahead_utils__["a" /* getValueFromObject */])(option, _this.typeaheadOptionField));
            });
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_9__component_loader_index__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadMinLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWaitMs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionsLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadGroupField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadAsync': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLatinize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadSingleWords': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWordDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadPhraseDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadItemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'optionsListTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadScrollable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionsInScrollableView': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['input', ['$event'],] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['focus',] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());

//# sourceMappingURL=typeahead.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TypeaheadModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");






var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_5__positioning_index__["a" /* PositioningService */]]
        };
    };
    TypeaheadModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
    return TypeaheadModule;
}());

//# sourceMappingURL=typeahead.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/decorators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OnChange;
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/facade/browser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return document; });
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = (typeof window !== 'undefined' && window) || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__("../../../../ngx-bootstrap/utils/decorators.js");
/* unused harmony reexport OnChange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linked_list_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/linked-list.class.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__linked_list_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__theme_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trigger_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/trigger.class.js");
/* unused harmony reexport Trigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");
/* unused harmony reexport Utils */
/* unused harmony reexport setTheme */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/linked-list.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedList; });
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

//# sourceMappingURL=linked-list.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/theme-provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTheme */
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");

var guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3() {
    if (typeof __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */] === 'undefined') {
        return true;
    }
    if (typeof __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */].__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=theme-provider.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/trigger.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());

//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/triggers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = parseTriggers;
/* unused harmony export listenToTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggersV2;
/* harmony export (immutable) */ __webpack_exports__["c"] = registerOutsideClick;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/trigger.class.js");

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function listenToTriggersV2(renderer, options) {
    var parsedTriggers = parseTriggers(options.triggers);
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    var listeners = [];
    // lazy listeners registration
    var _registerHide = [];
    var registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var useToggle = trigger.open === trigger.close;
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return;
        }
        options.hide();
    });
}
//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/utils.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/warn-once.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warnOnce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var _messagesHash = {};
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=warn-once.js.map

/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].from = __WEBPACK_IMPORTED_MODULE_1__observable_from__["a" /* from */];
//# sourceMappingURL=from.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/mergeMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.mergeMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
//# sourceMappingURL=mergeMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/operator/toArray.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_toArray PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.toArray = __WEBPACK_IMPORTED_MODULE_1__operator_toArray__["a" /* toArray */];
//# sourceMappingURL=toArray.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operators/observeOn.js");
/** PURE_IMPORTS_START .._operators_observeOn PURE_IMPORTS_END */

/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_observeOn__["b" /* observeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=observeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_scan__ = __webpack_require__("../../../../rxjs/_esm5/operators/scan.js");
/** PURE_IMPORTS_START .._operators_scan PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator, seed)(this);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator)(this);
}
//# sourceMappingURL=scan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_toArray__ = __webpack_require__("../../../../rxjs/_esm5/operators/toArray.js");
/** PURE_IMPORTS_START .._operators_toArray PURE_IMPORTS_END */

/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_toArray__["a" /* toArray */])()(this);
}
//# sourceMappingURL=toArray.js.map 


/***/ })

});
//# sourceMappingURL=perform-ays.module.chunk.js.map