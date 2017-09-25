webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #fafafa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_todos_todos_service__ = __webpack_require__("../../../../../src/app/components/todos/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_src_toast_manager__ = __webpack_require__("../../../../ng2-toastr/src/toast-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_src_toast_manager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_src_toast_manager__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(toastr, vcr) {
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__components_todos_todos_service__["a" /* ToDoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_src_toast_manager__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_src_toast_manager__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_todos_todos_component__ = __webpack_require__("../../../../../src/app/components/todos/todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_projectConfigDef__ = __webpack_require__("../../../../../src/app/shared/projectConfigDef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_authentication_module__ = __webpack_require__("../../../../../src/app/components/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_todos_todos_module__ = __webpack_require__("../../../../../src/app/components/todos/todos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_validators_equalsValidator__ = __webpack_require__("../../../../../src/app/shared/validators/equalsValidator.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_todos_todos_component__["a" /* TodosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_18__shared_validators_equalsValidator__["a" /* EqualsValidator */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16__components_authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_15__components_navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], { useHash: false, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_14__shared__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__components_todos_todos_module__["a" /* TodoModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_13__shared_projectConfigDef__["a" /* AppConfig */],
                useValue: __WEBPACK_IMPORTED_MODULE_13__shared_projectConfigDef__["b" /* PROJECT_CONFIG */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home__ = __webpack_require__("../../../../../src/app/components/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main__ = __webpack_require__("../../../../../src/app/components/main/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_todos__ = __webpack_require__("../../../../../src/app/components/todos/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_authentication__ = __webpack_require__("../../../../../src/app/components/authentication/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });




var ROUTES = [
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_1__components_main__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__components_authentication__["a" /* AuthenticationService */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__components_todos__["b" /* TodosComponent */],
                data: { days: 1, title: 'Today' }
            },
            {
                path: 'all',
                component: __WEBPACK_IMPORTED_MODULE_2__components_todos__["b" /* TodosComponent */],
                data: { days: 0, title: 'All' }
            },
            {
                path: 'today',
                component: __WEBPACK_IMPORTED_MODULE_2__components_todos__["b" /* TodosComponent */],
                data: { days: 1, title: 'Today' }
            },
            {
                path: 'timeList',
                component: __WEBPACK_IMPORTED_MODULE_2__components_todos__["b" /* TodosComponent */],
                data: { days: 7, title: 'Next 7 Days' }
            }
        ]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home__["a" /* HomeComponent */]
    },
    {
        path: '**',
        redirectTo: 'app',
        pathMatch: 'full'
    },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/components/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/components/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/components/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_projectConfig__ = __webpack_require__("../../../../../src/app/shared/projectConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_projectConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__shared_projectConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_projectConfigDef__ = __webpack_require__("../../../../../src/app/shared/projectConfigDef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AuthenticationService = (function () {
    function AuthenticationService(_http, config, router, storage) {
        this._http = _http;
        this.router = router;
        this.storage = storage;
        this.url = "" + config.rootUrl + config.authenticateUrl;
        this.logoutUrl = config.logoutUrl;
    }
    AuthenticationService.prototype.isAuthorized = function () {
        return true;
    };
    AuthenticationService.prototype.authenticate = function (userName, password) {
        var _this = this;
        return this._http.get(this.url, {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["e" /* HttpHeaders */]().set('Authorization', 'Basic ' + btoa(userName + ":" + password))
        })
            .map(function (user) {
            console.log('authenticate: ' + _this.user);
            if (user.authenticated) {
                _this.router.navigate(['app']);
            }
            _this.user = user;
            _this.storage.setItem('user', JSON.stringify(_this.user));
            console.log('stored user: ' + _this.storage.getItem('user'));
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.register = function (userName, firstName, lastName, password, repeatPassword) {
        var _this = this;
        var body = {
            email: userName,
            firstName: firstName,
            lastName: lastName,
            password: password,
            repeatPassword: repeatPassword,
        };
        return this._http.post(this.url, body)
            .map(function (user) {
            console.log('authenticate: ' + _this.user);
            if (user.authenticated) {
                _this.router.navigate(['app']);
            }
            _this.user = user;
            _this.storage.setItem('user', JSON.stringify(_this.user));
            console.log('stored user: ' + _this.storage.getItem('user'));
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        console.log('logout: ' + this.logoutUrl);
        this._http.post(this.logoutUrl, {})
            .subscribe(function (data) {
            console.log('logout: ' + data);
            _this.storage.clear();
            _this.router.navigate(['./home']);
        }, function (error) { return _this.handleError; });
    };
    AuthenticationService.prototype.handleError = function (error) {
        // I'm sure I had this here for a reason
        // if (error.status == 401) {
        //   this.user = new User();
        //   return Observable.of(this.user);
        // }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error');
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        this.user = JSON.parse(this.storage.getItem('user'));
        return this.user && this.user.authenticated;
    };
    AuthenticationService.prototype.canActivate = function (route, state) {
        var canActivate = this.isAuthenticated() && this.isAuthorized();
        this.onCanActivate(canActivate);
        return canActivate;
    };
    AuthenticationService.prototype.onCanActivate = function (canActivate) {
        if (!canActivate) {
            this.router.navigate(['home']);
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__shared_projectConfigDef__["a" /* AppConfig */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_projectConfig__["ProjectConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_projectConfig__["ProjectConfig"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* LocalStorageService */]) === "function" && _d || Object])
], AuthenticationService);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/authentication/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/components/authentication/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/components/authentication/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/components/authentication/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <div rskHighlight=\"Blue\">Hello</div> -->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Login</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form #loginForm=\"ngForm\" novalidate>\n    <div class=\"modal-body\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': emailv.invalid \n      && (emailv.dirty || emailv.touched) \n      && (emailv.errors.required || emailv.errors.email)}\">\n        <input class=\"input form-control form-control-danger\" type=\"text\" name=\"email\" [(ngModel)]=\"email\" email required placeholder=\"Email\"\n          #emailv=\"ngModel\">\n        <span *ngIf=\"(emailv.dirty || emailv.touched) && emailv.invalid\">\n            <span class=\"form-text form-control-feedback\" *ngIf=\"emailv.errors.required\">Email is reqired</span>\n            <span class=\"form-text form-control-feedback\" *ngIf=\"emailv.errors.email && !emailv.errors.required\">This does not look an email</span>\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': passwordv.invalid && (passwordv.dirty || passwordv.touched)}\">\n        <input class=\"input form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" required placeholder=\"Password\"\n          #passwordv=\"ngModel\">\n          <span *ngIf=\"(passwordv.dirty || passwordv.touched) && passwordv.invalid\">\n              <span class=\"form-text form-control-feedback\" *ngIf=\"passwordv.errors.required\">Password is reqired</span>\n          </span>\n        </div>\n    </div>\n  </form>\n  <div class=\"modal-footer\">\n    <!-- passing loginForm to the login method purely for demo purposes -->\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login(loginForm)\" (keyup.enter)=\"login(loginForm)\" [disabled]=\"isWaiting || !loginForm.valid\">Login</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close({'Save': false})\" [disabled]=\"isWaiting\">Cancel</button>                                                             \n  </div>\n  <div [hidden]=\"!isError\" class=\"alert alert-danger\">\n    {{message}}\n  </div>\n</div>\n<!-- Debugging purposes only -->\n<!-- <br>Dirty: {{ loginForm.dirty }}\n<br>Touched: {{ loginForm.touched }}\n<br>Valid: {{ loginForm.valid }}\n<br>Value: {{ loginForm.value | json }} -->\n"

/***/ }),

/***/ "../../../../../src/app/components/authentication/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("../../../../../src/app/components/authentication/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(activeModal, authenticationService, toastr) {
        this.activeModal = activeModal;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isError = false;
        this.isWaiting = false;
        this.message = 'Unable to log in';
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        this.isWaiting = true;
        this.authenticationService
            .authenticate(this.email, this.password)
            .subscribe(function (result) {
            _this.activeModal.close({ 'Save': true });
            _this.isWaiting = false;
            _this.toastr.success('Login Sucessful!', 'Success');
        }, function (error) {
            _this.message = 'Unable to login';
            _this.isError = true;
            _this.isWaiting = false;
            _this.toastr.error('Login Failed!', 'Error');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        template: __webpack_require__("../../../../../src/app/components/authentication/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authentication/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2____["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2____["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Register</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form [formGroup]=\"registrationForm\" novalidate>\n    <div class=\"modal-body\">\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': emailIsInvalid()}\">\n        <input class=\"form-control\" type=\"text\" [formControl]=\"email\" placeholder=\"Email\" formControlName='email'>\n        <span *ngIf=\"emailIsInvalid()\">\n            <span class=\"form-text form-control-feedback\" *ngIf=\"email.errors.required\">Email is required</span>\n        <span class=\"form-text form-control-feedback\" *ngIf=\"email.errors.email && !email.errors.required\">This does not look an email</span>\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': firstName.invalid && (firstName.dirty || firstName.touched)}\">\n        <input class=\"form-control\" type=\"text\" [formControl]=\"firstName\" placeholder=\"First Name\" formControlName='firstName'>\n        <span *ngIf=\"(firstName.dirty || firstName.touched) && firstName.invalid\">\n            <span class=\"form-text form-control-feedback\" *ngIf=\"firstName.errors.required\">First name is required</span>\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': lastName.invalid && (lastName.dirty || lastName.touched)}\">\n        <input class=\"form-control\" type=\"text\" [formControl]=\"lastName\" placeholder=\"Last Name\" formControlName='lastName'>\n        <span *ngIf=\"(lastName.dirty || lastName.touched) && lastName.invalid\">\n              <span class=\"form-text form-control-feedback\" *ngIf=\"lastName.errors.required\">Last name is required</span>\n        </span>\n      </div>\n      <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-danger': passwordGroup.errors}\">\n        <div class=\"form-group\" [ngClass]=\"{'has-danger': password.invalid && (password.dirty || password.touched)}\">\n          <input class=\"form-control\" type=\"password\" [formControl]=\"password\" placeholder=\"Password\" formControlName='password'>\n          <span *ngIf=\"(password.dirty || password.touched) && password.invalid\">\n              <span class=\"form-text form-control-feedback\" *ngIf=\"password.errors?.required\">Password is required</span>\n          </span>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-danger': repeatPassword.invalid && (repeatPassword.dirty || repeatPassword.touched)}\">\n          <input class=\"form-control\" type=\"password\" [formControl]=\"repeatPassword\" placeholder=\"Confirm Password\" formControlName='repeatPassword'>\n          <span *ngIf=\"((repeatPassword.dirty || repeatPassword.touched) && repeatPassword.invalid)\n          || (passwordGroup.errors?.comparison)\">\n            <span class=\"form-text form-control-feedback\" *ngIf=\"repeatPassword.errors?.required\">Repeat password is required</span>\n            <span class=\"form-text form-control-feedback\" *ngIf=\"passwordGroup.errors?.comparison && !(repeatPassword.errors?.required)\">Passwords must match</span>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"register()\" (keyup.enter)=\"register()\" [disabled]=\"isInvalidOrWaiting()\">Register</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close({'Save': false})\" [disabled]=\"isWaiting\">Cancel</button>\n    </div>\n  </form>\n</div>\n<div [hidden]=\"!isError\" class=\"alert alert-danger\">\n  {{message}}\n</div>\n<!-- Debugging purposes only -->\n<!-- <br>Dirty: {{ registrationForm.dirty }}\n<br>Touched: {{ registrationForm.touched }}\n<br>Valid: {{ registrationForm.valid }}\n<br>Value: {{ registrationForm.value | json }}\n<br>Value {{passwordGroup.errors && passwordGroup.errors.comparison }} -->\n"

/***/ }),

/***/ "../../../../../src/app/components/authentication/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("../../../../../src/app/components/authentication/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function groupComparisonValidator(control) {
    var password = control.get('password');
    var repeat = control.get('repeatPassword');
    if (password.pristine || repeat.pristine) {
        return null;
    }
    if (password.value != repeat.value) {
        return { 'comparison': true };
    }
    return null;
}
// Comparison validator without using groups
// pass a reference to the control to validate against
function comparisonValidator(other) {
    return function (control) {
        if (other.value != control.value) {
            return { 'comparison': true };
        }
        return null;
    };
}
var RegisterComponent = (function () {
    function RegisterComponent(activeModal, authenticationService, formBuilder) {
        this.activeModal = activeModal;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.validationMessages = {
            required: 'Email is required',
            email: 'This does not look an email'
        };
        this.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms___["e" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms___["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms___["f" /* Validators */].email]);
        this.firstName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms___["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms___["f" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms___["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms___["f" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_3__angular_forms___["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms___["f" /* Validators */].required);
        // example using the custom validator without groups
        //  repeatPassword = new FormControl('', [Validators.required, comparisonValidator(this.password)]);
        this.repeatPassword = new __WEBPACK_IMPORTED_MODULE_3__angular_forms___["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms___["f" /* Validators */].required);
        console.log('Register component');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.passwordGroup = this.formBuilder.group({
            password: this.password,
            repeatPassword: this.repeatPassword
        }, { validator: groupComparisonValidator });
        this.registrationForm = this.formBuilder.group({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            passwordGroup: this.passwordGroup
        });
        // this.registrationForm = new FormGroup({
        //   email: this.email,
        //   firstName: this.firstName,
        //   lastName: this.lastName,
        //   password: this.password,
        //   repeatPassword: this.repeatPassword
        // });
        this.isError = false;
        this.isWaiting = false;
        this.message = "Unable to register";
        this.emailMessage = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.isWaiting = true;
        this.authenticationService
            .register(this.email.value, this.firstName.value, this.lastName.value, this.password.value, this.repeatPassword.value)
            .subscribe(function (result) {
            _this.activeModal.close({ 'Save': true });
            _this.isWaiting = false;
        }, function (error) {
            _this.message = "Unable to register";
            _this.isError = true;
            _this.isWaiting = false;
        });
    };
    RegisterComponent.prototype.emailIsInvalid = function () {
        return this.email.invalid
            && (this.email.dirty || this.email.touched)
            && (this.email.errors.required || this.email.errors.email);
        //return (this.email.dirty || this.email.touched) && this.email.invalid;
    };
    RegisterComponent.prototype.isInvalidOrWaiting = function () {
        return this.isWaiting || !this.registrationForm.valid;
    };
    RegisterComponent.prototype.setMessage = function (control) {
        var _this = this;
        this.emailMessage = '';
        if ((control.touched || control.dirty) && control.errors) {
            this.emailMessage = Object.keys(control.errors).map(function (k) {
                return _this.validationMessages[k];
            }).join(' ');
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        template: __webpack_require__("../../../../../src/app/components/authentication/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authentication/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2____["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2____["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms___["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms___["g" /* FormBuilder */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            &nbsp;\n        </div>\n        <div class=\"col-md-8\">\n            <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n                <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n                        data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n                        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">Action It</a>\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item active\">\n                             <a class=\"nav-link link\" (click)=\"showLoginDialog()\">Login <span class=\"sr-only\">(current)</span></a> \n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link link\" (click)=\"showRegisterDialog()\">Sign Up</a>\n                        </li>\n                        <!-- <li class=\"nav-item\">\n                            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                        </li> -->\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </div>\n    <!-- not sure that this is needed any more for the ngBootstrap modals -->\n    <!-- <ng-template ngbModalContainer></ng-template> -->\n\n</div>\n\n "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication__ = __webpack_require__("../../../../../src/app/components/authentication/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_modalService) {
        this._modalService = _modalService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showLoginDialog = function () {
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_2__authentication__["b" /* LoginComponent */], { 'windowClass': 'login-modal' });
        modalRef.result.then(function (res) {
            console.log(res);
        }, function () { }); // empty 'reject' function - workaround for https://github.com/shlomiassaf/angular2-modal/issues/188
    };
    HomeComponent.prototype.showRegisterDialog = function () {
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_2__authentication__["c" /* RegisterComponent */], { 'windowClass': 'login-modal' });
        modalRef.result.then(function (res) {
            console.log(res);
        }, function () { }); // empty 'reject' function - workaround for https://github.com/shlomiassaf/angular2-modal/issues/188
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            &nbsp;\n        </div>\n        <div class=\"col-md-8\">\n            <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n                <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n                        data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n                        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">Action It</a>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link link\" (click)=\"logout()\">Logout</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-1\" id=\"col1\">\n            &nbsp;\n        </div>\n        <div class=\"col-md-2\" id=\"col2\">\n            <aiNavigation></aiNavigation>\n        </div>\n        <div class=\"col-md-6 todos-container\" id=\"col3\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n    <!-- <ng-template ngbModalContainer></ng-template> -->\n\n\n</div>\n\n\n\n\n<div (click)=\"showAddToDoDialog()\" class=\"addTodo\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Task</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addTodo {\n  cursor: pointer;\n  color: #535a5b; }\n  .addTodo:hover {\n    text-decoration: underline; }\n  .addTodo .fa.fa-plus {\n    margin-right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos_newtodo_newtodo_component__ = __webpack_require__("../../../../../src/app/components/todos/newtodo/newtodo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication__ = __webpack_require__("../../../../../src/app/components/authentication/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(_modalService, _messageService, _authenticationService) {
        var _this = this;
        this._modalService = _modalService;
        this._messageService = _messageService;
        this._authenticationService = _authenticationService;
        this.subscription = this._messageService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    }
    MainComponent.prototype.showAddToDoDialog = function () {
        var modalRef = this._modalService.open(__WEBPACK_IMPORTED_MODULE_2__todos_newtodo_newtodo_component__["a" /* NewtodoComponent */]);
        modalRef.result.then(function (res) {
            console.log(res);
        }, function () { }); // empty 'reject' function - workaround for https://github.com/shlomiassaf/angular2-modal/issues/188
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MainComponent.prototype.logout = function () {
        this._authenticationService.logout();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_message_service__["a" /* SimpleMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_message_service__["a" /* SimpleMessageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authentication__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication__["a" /* AuthenticationService */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation-project-item/navigation-project-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div  (click)=\"onSelectProject()\">\n    <div class=\"project-circle\" [style.background-color]=\"project.color\"></div>\n    <span class=\"padding\"></span>\n    <span>{{ project.title }}</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation-project-item/navigation-project-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-circle {\n  display: inline-block;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px; }\n\n.padding {\n  padding-left: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation-project-item/navigation-project-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationProjectItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationProjectItemComponent = (function () {
    function NavigationProjectItemComponent(_messageService) {
        this._messageService = _messageService;
        this.project = {
            id: 0,
            title: '',
            color: ''
        };
    }
    NavigationProjectItemComponent.prototype.onSelectProject = function () {
        console.log('send message: ' + this.project.id);
        // send message to subscribers via observable subject
        this._messageService.sendMessage({ projectId: this.project.id });
    };
    NavigationProjectItemComponent.prototype.clearMessage = function () {
        // clear message
        this._messageService.clearMessage();
    };
    return NavigationProjectItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavigationProjectItemComponent.prototype, "project", void 0);
NavigationProjectItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aiProjectNavItem',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation-project-item/navigation-project-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation-project-item/navigation-project-item.component.scss"), __webpack_require__("../../../../../src/app/components/navigation/navigation.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_message_service__["a" /* SimpleMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_message_service__["a" /* SimpleMessageService */]) === "function" && _a || Object])
], NavigationProjectItemComponent);

var _a;
//# sourceMappingURL=navigation-project-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project_service__ = __webpack_require__("../../../../../src/app/shared/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_project_item_navigation_project_item_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation-project-item/navigation-project-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_item_time_item_component__ = __webpack_require__("../../../../../src/app/components/navigation/time-item/time-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_3__navigation_project_item_navigation_project_item_component__["a" /* NavigationProjectItemComponent */], __WEBPACK_IMPORTED_MODULE_4__time_item_time_item_component__["a" /* TimeItemComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_project_service__["a" /* ProjectService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__["a" /* NavigationComponent */]]
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navTop\">\n    <ul class=\"navList\">\n        <li class=\"timeListItems\">\n            <a routerLink=\"/all\"><aiTimeItem [timeItem]=\"{title: 'All', limit: 0}\"></aiTimeItem></a>\n        </li>\n        <li class=\"timeListItems\">\n          <a routerLink=\"/today\"><aiTimeItem [timeItem]=\"{title: 'Today', limit: 1}\"></aiTimeItem></a>\n        </li>\n        <li class=\"timeListItems\">\n          <a routerLink=\"/timeList\"><aiTimeItem [timeItem]=\"{title: 'Next 7 Days', limit: 7}\"></aiTimeItem></a>\n        </li>\n    </ul>\n</div>\n<div id=\"navMenu\">\n    tabs for projects, labels, filters\n</div>\n<div id=\"navProjectList\">\n    <ul class=\"projectList\">\n        <li class=\"clickable projectListItems\" *ngFor=\"let project of projects\" >\n            <aiProjectNavItem [project]=\"project\">\n            </aiProjectNavItem>\n        </li>\n        <li class=\"clickable projectListItems\">+ Add</li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navList {\n  list-style-type: none;\n  padding: 10px 0 4px; }\n  .navList .timeListItems {\n    padding: 10px 0 4px; }\n    .navList .timeListItems a {\n      cursor: pointer;\n      text-decoration: none; }\n\n.projectList {\n  list-style-type: none;\n  margin: 0;\n  padding: 10px 0 4px; }\n  .projectList .projectListItems {\n    padding: 10px 0 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project_service__ = __webpack_require__("../../../../../src/app/shared/project.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(projectService) {
        this.projectService = projectService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (projects) { return _this.projects = projects; }, function (error) { return console.error(error); });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aiNavigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/time-item/time-item.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-inbox\" aria-hidden=\"true\"></i>\n<span class=\"padding\"></span>\n<span>{{ timeItem.title }} <span class=\"counter\" [class.isOverDue]=\"areAnyOverDue\"\n                [class.isCurrent]=\"isCurrent\">2</span></span>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/time-item/time-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".counter {\n  font-size: x-small; }\n\n.isOverDue {\n  color: red; }\n\n.current {\n  font-weight: bold; }\n\n.timeListItems {\n  padding: 10px 0 4px; }\n  .timeListItems a {\n    cursor: pointer;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/time-item/time-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeItemComponent = (function () {
    function TimeItemComponent() {
        this.timeItem = { title: '', limit: 0 };
    }
    // todo: get this information from shared storage?
    TimeItemComponent.prototype.areAnyOverDue = function () {
        return true;
    };
    TimeItemComponent.prototype.isCurrent = function () {
        return true;
    };
    return TimeItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TimeItemComponent.prototype, "timeItem", void 0);
TimeItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aiTimeItem',
        template: __webpack_require__("../../../../../src/app/components/navigation/time-item/time-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/time-item/time-item.component.scss")]
    })
], TimeItemComponent);

//# sourceMappingURL=time-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todos_component__ = __webpack_require__("../../../../../src/app/components/todos/todos.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__todos_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_service__ = __webpack_require__("../../../../../src/app/components/todos/todos.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__todos_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_todo__ = __webpack_require__("../../../../../src/app/components/todos/todo/todo.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todos/todo/todo.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newtodo_newtodo_component__ = __webpack_require__("../../../../../src/app/components/todos/newtodo/newtodo.component.ts");
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/newtodo/newtodo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add ToDo</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" required placeholder=\"Title\">\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addTodo()\">Add</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close({'Save': false})\">Cancel</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/todos/newtodo/newtodo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todos/newtodo/newtodo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/components/todos/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewtodoComponent = (function () {
    function NewtodoComponent(activeModal, todoService) {
        this.activeModal = activeModal;
        this.todoService = todoService;
        console.log('Newtodo component');
    }
    NewtodoComponent.prototype.addTodo = function () {
        if (this.title && this.title !== '') {
            this.todoService.addTodo(this.title);
            this.activeModal.close({ Save: true, Title: this.title });
        }
    };
    return NewtodoComponent;
}());
NewtodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        template: __webpack_require__("../../../../../src/app/components/todos/newtodo/newtodo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todos/newtodo/newtodo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__index__["a" /* ToDoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__index__["a" /* ToDoService */]) === "function" && _b || Object])
], NewtodoComponent);

var _a, _b;
//# sourceMappingURL=newtodo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div (mouseleave)=\"toggleEditable()\"\n     (mouseenter)=\"toggleEditable()\"\n    class=\"task_content_item_container\">\n    <div class=\"todo-circle-container\"><div class=\"todo-circle\" [style.border-color]=\"borderColor\" [style.background-color]=\"backgroundColor\"></div></div> <span class=\"task_content_item\">{{title}}</span><div class=\"dueDate date\">{{dueDate}}</div><div [hidden]=\"!editable\" class=\"editIcons\"><span class=\"editIcon\">(e)</span><span class=\"editIcon\">(d)</span></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/todos/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.task_content_item {\n  font-size: 14px; }\n\n.editIcons {\n  color: lightgray;\n  float: right; }\n\n.editIcon:hover {\n  color: black;\n  cursor: pointer; }\n\n.task_content_item_container {\n  border-bottom: 1px solid #f0f0f0;\n  padding-bottom: 12px;\n  margin-bottom: 12px; }\n\n.todo-circle-container {\n  display: inline-block;\n  position: relative;\n  top: 6px; }\n  .todo-circle-container .todo-circle {\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin-right: 5px;\n    border: 2px #c0c0c0 solid; }\n\n.dueDate {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todos/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/components/todos/todo/todo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent() {
        this.editable = false;
    }
    TodoComponent.prototype.toggleEditable = function () {
        this.editable = !this.editable;
    };
    Object.defineProperty(TodoComponent.prototype, "title", {
        get: function () {
            return this.todo.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoComponent.prototype, "dueDate", {
        get: function () {
            return this.todo.displayDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoComponent.prototype, "borderColor", {
        get: function () {
            if (this.todo.priority === __WEBPACK_IMPORTED_MODULE_1__todo__["b" /* Priority */].High) {
                return '#ac0000';
            }
            if (this.todo.priority === __WEBPACK_IMPORTED_MODULE_1__todo__["b" /* Priority */].Medium) {
                return '#f8801c';
            }
            if (this.todo.priority === __WEBPACK_IMPORTED_MODULE_1__todo__["b" /* Priority */].Low) {
                return '#fcc12b';
            }
            return '#c0c0c0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoComponent.prototype, "backgroundColor", {
        get: function () {
            if (this.todo.priority === __WEBPACK_IMPORTED_MODULE_1__todo__["b" /* Priority */].High) {
                return '#f5e5e5';
            }
            if (this.todo.priority === __WEBPACK_IMPORTED_MODULE_1__todo__["b" /* Priority */].Medium) {
                return '#fef2e8';
            }
            if (this.todo.priority === __WEBPACK_IMPORTED_MODULE_1__todo__["b" /* Priority */].Low) {
                return '#fff6e1';
            }
            return 'white';
        },
        enumerable: true,
        configurable: true
    });
    return TodoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* ToDo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* ToDo */]) === "function" && _a || Object)
], TodoComponent.prototype, "todo", void 0);
TodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aiTodo',
        template: __webpack_require__("../../../../../src/app/components/todos/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todos/todo/todo.component.scss")]
    })
], TodoComponent);

var _a;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/todo/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Priority; });

var ToDo = (function () {
    function ToDo(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ToDo.prototype, "dueDate", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_moment__(this.dueDateUtc);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToDo.prototype, "displayDate", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_moment__(this.dueDateUtc).format('MMM DD');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToDo.prototype, "isOverDue", {
        get: function () {
            return this.dueDate.isBefore(__WEBPACK_IMPORTED_MODULE_0_moment__(), 'day');
        },
        enumerable: true,
        configurable: true
    });
    return ToDo;
}());

var Priority;
(function (Priority) {
    Priority[Priority["None"] = 0] = "None";
    Priority[Priority["High"] = 1] = "High";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["Low"] = 3] = "Low";
})(Priority || (Priority = {}));
//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{ routeData.title }}</h3>\n\n<div>\n\n    <div class=\"lined\" class=\"overdue\">\n        Overdue\n    </div>\n    <ul class=\"todolist\">\n        <li class=\"task_item\">\n            <aiTodo *ngFor=\"let todo of overdue()\"\n                  [todo]=\"todo\">\n            </aiTodo>\n        </li>\n    </ul>\n</div>\n\n<div>\n    <div class=\"lined\">Today</div>\n    <ul class=\"todolist\">\n        <li class=\"task_item\"  *ngFor=\"let todo of today()\" >\n            <aiTodo [todo]=\"todo\">\n            </aiTodo>\n        </li>\n    </ul>\n</div>\n\n<div *ngIf=\"routeData.days != 1\">\n    <div class=\"lined\">{{ routeData.title }}</div>\n    <ul class=\"todolist\">\n        <li class=\"task_item\"  *ngFor=\"let todo of inDateRange()\" >\n            <aiTodo [todo]=\"todo\">\n            </aiTodo>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/todos/todos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lined {\n  border-bottom: 1px solid lightgray; }\n\nli.task_item {\n  padding-top: 15px; }\n\n.todolist {\n  list-style-type: none; }\n\n.overdue {\n  color: firebrick; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_service__ = __webpack_require__("../../../../../src/app/components/todos/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;




var TodosComponent = (function () {
    function TodosComponent(_todoService, _route) {
        this._todoService = _todoService;
        this._route = _route;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.subscribe(function (data) {
            _this.routeData = data;
        });
        this._todoService.getCurrentToDos().subscribe(function (todos) { return _this.todos = todos; }, function (error) { return console.error(error); });
    };
    TodosComponent.prototype.overdue = function () {
        var _this = this;
        var filtered = __WEBPACK_IMPORTED_MODULE_3_underscore__["chain"](this.todos)
            .filter(function (todo) {
            return todo.dueDate.isBefore(__WEBPACK_IMPORTED_MODULE_2_moment__().add(_this.routeData.days), 'day');
        })
            .sortBy(function (todo) { return todo.dueDate; });
        return filtered.value();
    };
    TodosComponent.prototype.today = function () {
        var filtered = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](this.todos, function (todo) {
            return todo.dueDate.isSame(__WEBPACK_IMPORTED_MODULE_2_moment__(), 'day');
        });
        return filtered;
    };
    TodosComponent.prototype.inDateRange = function () {
        var _this = this;
        var filtered = __WEBPACK_IMPORTED_MODULE_3_underscore__["chain"](this.todos).filter(function (todo) {
            if (_this.routeData.days === 0) {
                return todo.dueDate.isAfter(__WEBPACK_IMPORTED_MODULE_2_moment__(), 'day');
            }
            return todo.dueDate.isSameOrBefore(__WEBPACK_IMPORTED_MODULE_2_moment__().add(_this.routeData.days, 'day'), 'day')
                && todo.dueDate.isAfter(__WEBPACK_IMPORTED_MODULE_2_moment__(), 'day');
        }).sortBy(function (todo) { return todo.dueDate; });
        return filtered.value();
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/todos/todos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todos/todos.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* ToDoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* ToDoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], TodosComponent);

var _a, _b;
//# sourceMappingURL=todos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/todos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todos/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newtodo_newtodo_component__ = __webpack_require__("../../../../../src/app/components/todos/newtodo/newtodo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodoModule = (function () {
    function TodoModule() {
    }
    return TodoModule;
}());
TodoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__todo_todo_component__["a" /* TodoComponent */], __WEBPACK_IMPORTED_MODULE_3__newtodo_newtodo_component__["a" /* NewtodoComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__newtodo_newtodo_component__["a" /* NewtodoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__todo_todo_component__["a" /* TodoComponent */], __WEBPACK_IMPORTED_MODULE_3__newtodo_newtodo_component__["a" /* NewtodoComponent */]]
    })
], TodoModule);

//# sourceMappingURL=todos.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/todos/todos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_todo__ = __webpack_require__("../../../../../src/app/components/todos/todo/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_projectConfigDef__ = __webpack_require__("../../../../../src/app/shared/projectConfigDef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_projectConfig__ = __webpack_require__("../../../../../src/app/shared/projectConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_projectConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__shared_projectConfig__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ToDoService = (function () {
    function ToDoService(_http, config) {
        this._http = _http;
        this.url = "" + config.rootResourceUrl + config.todosUrl;
    }
    ToDoService.prototype.getCurrentToDos = function () {
        return this._http.get(this.url, { withCredentials: true })
            .map(function (resp) { return __WEBPACK_IMPORTED_MODULE_6_underscore__["map"](resp, function (item) { return new __WEBPACK_IMPORTED_MODULE_7__todo_todo__["a" /* ToDo */](item); }); })
            .do(function (data) { return console.log('ALL: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ToDoService.prototype.addTodo = function (title) {
        return this._http.post(this.url, {
            'title': title
        });
    };
    ToDoService.prototype.handleError = function (error) {
        // console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error || 'Server error');
    };
    return ToDoService;
}());
ToDoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__shared_projectConfigDef__["a" /* AppConfig */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__shared_projectConfig__["ProjectConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_projectConfig__["ProjectConfig"]) === "function" && _b || Object])
], ToDoService);

var _a, _b;
//# sourceMappingURL=todos.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project(init) {
        Object.assign(this, init);
    }
    return Project;
}());

//# sourceMappingURL=Project.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Project__ = __webpack_require__("../../../../../src/app/shared/Project.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_auth_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptors/auth-interceptor.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptors_xrequested_with_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptors/xrequested-with-interceptor.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_service__ = __webpack_require__("../../../../../src/app/shared/storage.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__storage_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/interceptors/auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_service__ = __webpack_require__("../../../../../src/app/shared/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthInterceptor = (function () {
    function AuthInterceptor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next
            .handle(req)
            .catch(function (response) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                if (response.status === 401) {
                    _this.router.navigate(['home']);
                    _this.storage.removeItem('user');
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(response);
        });
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
], AuthInterceptor);

var _a, _b;
//# sourceMappingURL=auth-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/interceptors/xrequested-with-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XRequestedWithInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var XRequestedWithInterceptor = (function () {
    function XRequestedWithInterceptor() {
    }
    XRequestedWithInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({ headers: req.headers.set('X-Requested-With', "XMLHttpRequest") });
        return next.handle(authReq);
    };
    return XRequestedWithInterceptor;
}());
XRequestedWithInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], XRequestedWithInterceptor);

//# sourceMappingURL=xrequested-with-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SimpleMessageService = (function () {
    function SimpleMessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SimpleMessageService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    SimpleMessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    SimpleMessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return SimpleMessageService;
}());
SimpleMessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SimpleMessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projectConfig__ = __webpack_require__("../../../../../src/app/shared/projectConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projectConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__projectConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projectConfigDef__ = __webpack_require__("../../../../../src/app/shared/projectConfigDef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Project__ = __webpack_require__("../../../../../src/app/shared/Project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ProjectService = (function () {
    function ProjectService(_http, config) {
        this._http = _http;
        this.url = "" + config.rootResourceUrl + config.projectsUrl;
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get(this.url, { withCredentials: true })
            .map(function (resp) { return __WEBPACK_IMPORTED_MODULE_6_underscore__["map"](resp, function (item) { return new __WEBPACK_IMPORTED_MODULE_9__Project__["a" /* Project */](item); }); })
            .do(function (data) { return console.log('ALL: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error || 'Server error');
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__projectConfigDef__["a" /* AppConfig */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__projectConfig__["ProjectConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__projectConfig__["ProjectConfig"]) === "function" && _b || Object])
], ProjectService);

var _a, _b;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/projectConfig.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=projectConfig.js.map

/***/ }),

/***/ "../../../../../src/app/shared/projectConfigDef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROJECT_CONFIG; });


var AppConfig = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('app.config');
var PROJECT_CONFIG = {
    projectsUrl: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].projectsUrl,
    todosUrl: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].todosUrl,
    authenticateUrl: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].authenticateUrl,
    logoutUrl: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].logoutUrl,
    rootResourceUrl: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].rootResourceUrl,
    rootUrl: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].rootUrl
};
//# sourceMappingURL=projectConfigDef.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/shared/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_color_component__ = __webpack_require__("../../../../../src/app/shared/validators/color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interceptors_xrequested_with_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptors/xrequested-with-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_service__ = __webpack_require__("../../../../../src/app/shared/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interceptors_auth_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptors/auth-interceptor.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* SimpleMessageService */], __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* LocalStorageService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_8__interceptors_auth_interceptor__["a" /* AuthInterceptor */],
                multi: true,
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_6__interceptors_xrequested_with_interceptor__["a" /* XRequestedWithInterceptor */],
                multi: true,
            }
        ],
        imports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__validators_color_component__["a" /* ColorDirective */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__validators_color_component__["a" /* ColorDirective */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.clear = function () {
        window.localStorage.clear();
    };
    LocalStorageService.prototype.getItem = function (key) {
        return window.localStorage.getItem(key);
    };
    LocalStorageService.prototype.setItem = function (key, data) {
        window.localStorage.setItem(key, data);
    };
    LocalStorageService.prototype.removeItem = function (key) {
        window.localStorage.removeItem(key);
    };
    LocalStorageService.prototype.key = function (index) {
        return window.localStorage.key(index);
    };
    Object.defineProperty(LocalStorageService.prototype, "length", {
        get: function () {
            return window.localStorage.length;
        },
        enumerable: true,
        configurable: true
    });
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LocalStorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validators/color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorDirective = (function () {
    function ColorDirective(el) {
        this.el = el;
    }
    ColorDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.backgroundColor = this.highlightColor || this.defaultColor || "yellow";
    };
    ColorDirective.prototype.onmouseenter = function () {
        console.log("Mouse enter");
    };
    return ColorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('rskHighlight'),
    __metadata("design:type", String)
], ColorDirective.prototype, "highlightColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ColorDirective.prototype, "defaultColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorDirective.prototype, "onmouseenter", null);
ColorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[rskHighlight]"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ColorDirective);

var _a;
//# sourceMappingURL=color.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validators/equalsValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualsValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualsValidator = EqualsValidator_1 = (function () {
    function EqualsValidator(validateEqual) {
        this.validateEqual = validateEqual;
        console.log("construct validator");
    }
    EqualsValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    return EqualsValidator;
}());
EqualsValidator = EqualsValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualsValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __metadata("design:paramtypes", [String])
], EqualsValidator);

var EqualsValidator_1;
//# sourceMappingURL=equalsValidator.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    projectsUrl: 'api/projects',
    todosUrl: 'api/todos',
    authenticateUrl: 'user',
    logoutUrl: 'logout',
    rootResourceUrl: 'http://localhost:8081/',
    rootUrl: 'http://localhost:8080/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map