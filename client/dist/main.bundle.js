webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\r\n    margin-top: 75px;\r\n}\r\n\r\nbutton {\r\n    display: inline-block;\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<nav class=\"navbar navbar-expand navbar-light fixed-top bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Job Tracker</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample\" aria-controls=\"navbarsExample\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExample\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/new']\">Add Job</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <div id=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_component_1.NewComponent,
                edit_component_1.EditComponent,
                details_component_1.DetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Details about the {{ job.title }} position at {{ job.company }}</h4>\r\n\r\n<table class=\"table\">\r\n    <tr>\r\n        <td scope=\"col\">Category</td>\r\n        <td> {{ job.category }} </td>\r\n    </tr>\r\n    <tr>\r\n        <td scope=\"col\">Job Posting</td>\r\n        <td>\r\n            <a href=\"https://www.{{ job.linktopost }}\" target=\"_blank\">{{ job.linktopost }}</a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td scope=\"col\">Status</td>\r\n        <td> {{ job.status }} </td>\r\n    </tr>\r\n    <tr>\r\n        <td scope=\"col\">Notes</td>\r\n        <td> {{ job.notes }} </td>\r\n    </tr>\r\n    <tr>\r\n        <td scope=\"col\">Rank</td>\r\n        <td> {{ job.rating }} </td>\r\n    </tr>\r\n</table>\r\n\r\n<button class=\"btn btn-success\" id=\"like\" (click)=\"like(job)\"> Rank up this position </button>\r\n<button class=\"btn btn-danger\" id=\"unlike\" (click)=\"unlike(job)\"> Rank down this position </button>\r\n<button class=\"btn btn-dark\" (click)=\"delete(job)\"> Delete this job </button>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var DetailsComponent = /** @class */ (function () {
    // count = false;
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.job = this._httpService.selected;
    };
    DetailsComponent.prototype.findJob = function (job) {
        var _this = this;
        console.log(job);
        var observable = this._httpService.findJob(job);
        observable.subscribe(function (data) {
            _this.job = data.data;
        });
    };
    DetailsComponent.prototype.like = function (job) {
        var _this = this;
        var observable = this._httpService.likeJob(job);
        console.log(this.job);
        observable.subscribe(function (data) {
            // this.count = true;
            // if (this.count = true) {
            //   (document.getElementById('like') as any).disabled = true;
            //   this.count = false;
            // }
            _this.findJob(_this.job._id);
        });
    };
    DetailsComponent.prototype.unlike = function (job) {
        var _this = this;
        var observable = this._httpService.unlikeJob(job);
        console.log(this.job);
        observable.subscribe(function (data) {
            // this.count = true;
            // if (this.count = true) {
            //   (document.getElementById('unlike') as any).disabled = true;
            //   this.count = false;
            // }
            _this.findJob(_this.job._id);
        });
    };
    DetailsComponent.prototype.delete = function (job) {
        var _this = this;
        var observable = this._httpService.deleteJob(job);
        observable.subscribe(function (data) {
            _this._router.navigate(['/home']);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h4> Edit a position you have just applied to: </h4>\r\n<div *ngIf=\"job\">\r\n  <form (submit)=\"submitButton()\">\r\n    <div class=\"form-group\">\r\n      <label>Company name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"job.company\">\r\n      <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Job title</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"job.title\">\r\n      <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Company Category</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"category\" [(ngModel)]=\"job.category\">\r\n      <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Link to job posting</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"linktopost\" [(ngModel)]=\"job.linktopost\">\r\n      <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Status</label>\r\n          <select type=\"text\" class=\"form-control\" name=\"status\" [(ngModel)]=\"job.status\">\r\n            <option>Pending</option>\r\n            <option>Phone Interview</option>\r\n            <option>On-Site Interview</option>\r\n            <option>Webcam Interview</option>\r\n            <option>Technical Assessment</option>\r\n          </select>\r\n      <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Notes</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"notes\" [(ngModel)]=\"job.notes\">\r\n      <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <button class=\"btn btn-light\" type=\"submit\">Update Job</button>\r\n    <button class=\"btn btn-dark\" [routerLink]=\"['/home']\">Cancel</button>\r\n  </form>\r\n</div>\r\n<br> {{error}}"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.job = this._httpService.selected;
    };
    EditComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.editJob(this.job);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                console.log(data);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(data);
                if (data.err.errors.name !== undefined) {
                    _this.error = 'Company name must be at least 3 characters';
                }
                else if (data.err.errors.type !== undefined) {
                    _this.error = 'Title must be at least 3 characters';
                }
            }
        });
        console.log(this.company);
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>You have applied to the following positions!</h4>\r\n\r\n<table class=\"table\">\r\n  <tr>\r\n    <th scope=\"col\">Rank</th>\r\n    <th scope=\"col\">Company</th>\r\n    <th scope=\"col\">Title</th>\r\n    <th scope=\"col\">Category</th>\r\n    <th scope=\"col\">Job Posting</th>\r\n    <th scope=\"col\">Status</th>\r\n    <th scope=\"col\"></th>\r\n  </tr>\r\n  <tr *ngFor=\"let job of jobs\">\r\n    <td> {{ job.rating }} </td>\r\n    <td> {{ job.company }} </td>\r\n    <td> {{ job.title }} </td>\r\n    <td> {{ job.category }} </td>\r\n    <td> <a href=\"https://www.{{ job.linktopost }}\" target=\"_blank\">{{ job.linktopost }}</a></td>\r\n    <td> {{ job.status }} </td>\r\n    <td>\r\n      <button class=\"btn btn-link\" (click)=\"viewJob(job)\"> Details </button>\r\n      <button class=\"btn btn-link\" (click)=\"editJob(job)\"> Edit </button>\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.jobs = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    HomeComponent.prototype.getJobs = function () {
        var _this = this;
        var observable = this._httpService.getJobs();
        observable.subscribe(function (data) {
            console.log(data);
            _this.jobs = data.data;
        });
    };
    HomeComponent.prototype.editJob = function (job) {
        console.log(job);
        this._httpService.selected = job;
        this._router.navigate(['/edit/' + job._id]);
    };
    HomeComponent.prototype.viewJob = function (job) {
        this._httpService.selected = job;
        this._router.navigate(['/details/' + job._id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getJobs = function () {
        return this._http.get('/jobs');
    };
    HttpService.prototype.findJob = function (id) {
        return this._http.get('/findjob/' + id);
    };
    HttpService.prototype.newJob = function (company, title, category, linktopost, status, notes) {
        return this._http.post('/new', {
            company: company,
            title: title,
            category: category,
            linktopost: linktopost,
            status: status,
            notes: notes
        });
    };
    HttpService.prototype.editJob = function (job) {
        return this._http.put('/edit/' + job._id, {
            id: job._id,
            company: job.company,
            title: job.title,
            category: job.category,
            linktopost: job.linktopost,
            status: job.status,
            notes: job.notes
        });
    };
    HttpService.prototype.deleteJob = function (job) {
        console.log('deleting ', job);
        return this._http.delete('/delete/' + job._id);
    };
    HttpService.prototype.likeJob = function (job) {
        console.log('like job service');
        return this._http.put('/likejob/' + job._id, { job: job });
    };
    HttpService.prototype.unlikeJob = function (job) {
        console.log('unlike job service');
        return this._http.put('/unlikejob/' + job._id, { job: job });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h4> Add a position you have just applied to: </h4>\r\n\r\n<form (submit)=\"submitButton()\">\r\n  <div class=\"form-group\">\r\n    <label>Company name</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"company\">\r\n    <small class=\"form-text text-muted\"></small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Job title</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\">\r\n    <small class=\"form-text text-muted\"></small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Company Category</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"category\" [(ngModel)]=\"category\">\r\n    <small class=\"form-text text-muted\"></small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Link to Job Posting</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"linktopost\" [(ngModel)]=\"linktopost\">\r\n    <small class=\"form-text text-muted\"></small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Status</label>\r\n    <select type=\"text\" class=\"form-control\" name=\"status\" [(ngModel)]=\"status\">\r\n      <option>Pending</option>\r\n      <option>Phone Interview</option>\r\n      <option>On-Site Interview</option>\r\n      <option>Webcam Interview</option>\r\n      <option>Technical Assessment</option>\r\n    </select>\r\n    <small class=\"form-text text-muted\"></small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Notes</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"notes\" [(ngModel)]=\"notes\">\r\n    <small class=\"form-text text-muted\"></small>\r\n  </div>\r\n  <button class=\"btn btn-light\" type=\"submit\">Add Job</button>\r\n  <button class=\"btn btn-dark\" [routerLink]=\"['/home']\">Cancel</button>\r\n</form>\r\n\r\n<br> {{error}}"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.newJob(this.company, this.title, this.category, this.linktopost, this.status, this.notes);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                console.log(data);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(data);
                if (data.err.errors.company !== undefined) {
                    _this.error = 'Company name must be at least 3 characters';
                }
                else if (data.err.errors.title !== undefined) {
                    _this.error = 'Title must be at least 3 characters';
                }
            }
        });
        console.log(this.company);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map