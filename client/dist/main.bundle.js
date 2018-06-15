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
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var editprofile_component_1 = __webpack_require__("./src/app/editprofile/editprofile.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'editprofile/:id', component: editprofile_component_1.EditprofileComponent },
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

module.exports = "#content {\n    margin-top: 75px;\n}\n\nbutton {\n    display: inline-block;\n    margin: 5px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<nav class=\"navbar navbar-expand navbar-light fixed-top bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Job Tracker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample\" aria-controls=\"navbarsExample\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExample\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/new']\">Add Job</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"container\">\n    <div id=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var editprofile_component_1 = __webpack_require__("./src/app/editprofile/editprofile.component.ts");
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
                details_component_1.DetailsComponent,
                profile_component_1.ProfileComponent,
                editprofile_component_1.EditprofileComponent
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

module.exports = "<h4>Details about the {{ job.title }} position at {{ job.company }}</h4>\n\n<table class=\"table\">\n    <tr>\n        <td scope=\"col\">Category</td>\n        <td> {{ job.category }} </td>\n    </tr>\n    <tr>\n        <td scope=\"col\">Job Posting</td>\n        <td>\n            <a href=\"https://www.{{ job.linktopost }}\" target=\"_blank\">{{ job.linktopost }}</a>\n        </td>\n    </tr>\n    <tr>\n        <td scope=\"col\">Status</td>\n        <td> {{ job.status }} </td>\n    </tr>\n    <tr>\n        <td scope=\"col\">Notes</td>\n        <td> {{ job.notes }} </td>\n    </tr>\n    <tr>\n        <td scope=\"col\">Rank</td>\n        <td> {{ job.rating }} </td>\n    </tr>\n</table>\n\n<button class=\"btn btn-success\" id=\"like\" (click)=\"like(job)\"> Rank up this position </button>\n<button class=\"btn btn-danger\" id=\"unlike\" (click)=\"unlike(job)\"> Rank down this position </button>\n<button class=\"btn btn-dark\" (click)=\"delete(job)\"> Delete this job </button>"

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

module.exports = "<h4> Edit a position you have just applied to: </h4>\n<div *ngIf=\"job\">\n  <form (submit)=\"submitButton()\">\n    <div class=\"form-group\">\n      <label>Company name</label>\n      <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"job.company\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Job title</label>\n      <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"job.title\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Company Category</label>\n      <input type=\"text\" class=\"form-control\" name=\"category\" [(ngModel)]=\"job.category\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Link to job posting</label>\n      <input type=\"text\" class=\"form-control\" name=\"linktopost\" [(ngModel)]=\"job.linktopost\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Status</label>\n          <select type=\"text\" class=\"form-control\" name=\"status\" [(ngModel)]=\"job.status\">\n            <option>Pending</option>\n            <option>Phone Interview</option>\n            <option>On-Site Interview</option>\n            <option>Webcam Interview</option>\n            <option>Technical Assessment</option>\n          </select>\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Notes</label>\n      <input type=\"text\" class=\"form-control\" name=\"notes\" [(ngModel)]=\"job.notes\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <button class=\"btn btn-light\" type=\"submit\">Update Job</button>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/home']\">Cancel</button>\n  </form>\n</div>\n<br> {{error}}"

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

/***/ "./src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<h4> Edit a profile: </h4>\n<button class=\"btn btn-dark\" (click)=\"delete(profile)\"> Delete this Profile </button>\n<div *ngIf=\"profile\">\n  <form (submit)=\"submitButton()\">\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"profile.firstname\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n    <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"profile.lastname\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Resume</label>\n      <input type=\"text\" class=\"form-control\" name=\"resume\" [(ngModel)]=\"profile.resume\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>LinkedIn</label>\n      <input type=\"text\" class=\"form-control\" name=\"linkedin\" [(ngModel)]=\"profile.linkedin\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Github</label>\n      <input type=\"text\" class=\"form-control\" name=\"github\" [(ngModel)]=\"profile.github\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label>Personal</label>\n      <input type=\"text\" class=\"form-control\" name=\"personal\" [(ngModel)]=\"profile.personal\">\n      <small class=\"form-text text-muted\"></small>\n    </div>\n    <button class=\"btn btn-light\" type=\"submit\">Update Profile</button>\n    <button class=\"btn btn-dark\" [routerLink]=\"['/home']\">Cancel</button>\n  </form>\n</div>\n<br> {{error}}"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
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
var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        this.profile = this._httpService.selected;
    };
    EditprofileComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.editProfile(this.profile);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                console.log(data);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(data);
                if (data.err.errors.firstname !== undefined) {
                    _this.error = 'First Name must be at least 3 characters';
                }
                if (data.err.errors.lastname !== undefined) {
                    _this.error = 'Last Name must be at least 3 characters';
                }
                else if (data.err.errors.resume !== undefined) {
                    _this.error = 'Resume must be submitted';
                }
            }
        });
        console.log(this.resume);
    };
    EditprofileComponent.prototype.delete = function (profile) {
        var _this = this;
        var observable = this._httpService.deleteProfile(profile);
        observable.subscribe(function (data) {
            _this._router.navigate(['/home']);
        });
    };
    EditprofileComponent = __decorate([
        core_1.Component({
            selector: 'app-editprofile',
            template: __webpack_require__("./src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__("./src/app/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditprofileComponent);
    return EditprofileComponent;
}());
exports.EditprofileComponent = EditprofileComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Contact Information</h4>\n<table class=\"table\">\n  <tr>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Resume</th>\n    <th scope=\"col\">LinkedIn</th>\n    <th scope=\"col\">GitHub</th>\n    <th scope=\"col\">Personal</th>\n    <th scope=\"col\"></th>\n  </tr>\n  <tr *ngFor=\"let profile of profiles\">\n    <td> {{ profile.firstname }} {{ profile.lastname }}</td>\n    <td> {{ profile.resume }} </td>\n    <td> <a href=\"https://www.{{ profile.linkedin }}\" target=\"_blank\">{{ profile.linkedin }}</a> </td>\n    <td> <a href=\"https://www.{{ profile.github }}\" target=\"_blank\">{{ profile.github }}</a> </td>\n    <td><a href=\"https://www.{{ profile.personal }}\" target=\"_blank\">{{ profile.personal }}</a></td>\n    <td>\n      <button class=\"btn btn-link\" (click)=\"editProfile(profile)\"> Edit </button>\n    </td>\n  </tr>\n</table>\n\n<h4>You have applied to the following positions!</h4>\n\n<table class=\"table\">\n  <tr>\n    <th scope=\"col\">Rank</th>\n    <th scope=\"col\">Company</th>\n    <th scope=\"col\">Title</th>\n    <th scope=\"col\">Category</th>\n    <th scope=\"col\">Job Posting</th>\n    <th scope=\"col\">Status</th>\n    <th scope=\"col\"></th>\n  </tr>\n  <tr *ngFor=\"let job of jobs\">\n    <td> {{ job.rating }} </td>\n    <td> {{ job.company }} </td>\n    <td> {{ job.title }} </td>\n    <td> {{ job.category }} </td>\n    <td> <a href=\"https://www.{{ job.linktopost }}\" target=\"_blank\">{{ job.linktopost }}</a></td>\n    <td> {{ job.status }} </td>\n    <td>\n      <button class=\"btn btn-link\" (click)=\"viewJob(job)\"> Details </button>\n      <button class=\"btn btn-link\" (click)=\"editJob(job)\"> Edit </button>\n    </td>\n  </tr>\n</table>"

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
        this.profiles = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProfiles();
        this.getJobs();
    };
    HomeComponent.prototype.getProfiles = function () {
        var _this = this;
        var observable = this._httpService.getProfiles();
        observable.subscribe(function (data) {
            console.log(data);
            _this.profiles = data.data;
        });
    };
    HomeComponent.prototype.editProfile = function (profile) {
        console.log(profile);
        this._httpService.selected = profile;
        this._router.navigate(['/editprofile/' + profile._id]);
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
    HttpService.prototype.getProfiles = function () {
        return this._http.get('/profile');
    };
    HttpService.prototype.findProfile = function (id) {
        return this._http.get('/findprofile/' + id);
    };
    HttpService.prototype.newProfile = function (firstname, lastname, resume, linkedin, github, personal) {
        return this._http.post('/newprofile', {
            firstname: firstname,
            lastname: lastname,
            resume: resume,
            linkedin: linkedin,
            github: github,
            personal: personal
        });
    };
    HttpService.prototype.editProfile = function (profile) {
        return this._http.put('/editprofile/' + profile._id, {
            id: profile._id,
            firstname: profile.firstname,
            lastname: profile.lastname,
            resume: profile.resume,
            linkedin: profile.linkedin,
            github: profile.github,
            personal: profile.personal
        });
    };
    HttpService.prototype.deleteProfile = function (profile) {
        console.log('deleting ', profile);
        return this._http.delete('/deleteprofile/' + profile._id);
    };
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

module.exports = "<h4> Add a position you have just applied to: </h4>\n\n<form (submit)=\"submitButton()\">\n  <div class=\"form-group\">\n    <label>Company name</label>\n    <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"company\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Job title</label>\n    <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Company Category</label>\n    <input type=\"text\" class=\"form-control\" name=\"category\" [(ngModel)]=\"category\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Link to Job Posting</label>\n    <input type=\"text\" class=\"form-control\" name=\"linktopost\" [(ngModel)]=\"linktopost\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Status</label>\n    <select type=\"text\" class=\"form-control\" name=\"status\" [(ngModel)]=\"status\">\n      <option>Pending</option>\n      <option>Phone Interview</option>\n      <option>On-Site Interview</option>\n      <option>Webcam Interview</option>\n      <option>Technical Assessment</option>\n    </select>\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Notes</label>\n    <input type=\"text\" class=\"form-control\" name=\"notes\" [(ngModel)]=\"notes\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <button class=\"btn btn-light\" type=\"submit\">Add Job</button>\n  <button class=\"btn btn-dark\" [routerLink]=\"['/home']\">Cancel</button>\n</form>\n\n<br> {{error}}"

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

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h4> Add a Profile: </h4>\n\n<form (submit)=\"submitButton()\">\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"firstname\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Last Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"lastname\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Resume</label>\n    <input type=\"text\" class=\"form-control\" name=\"resume\" [(ngModel)]=\"resume\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>LinkedIn</label>\n    <input type=\"text\" class=\"form-control\" name=\"linkedin\" [(ngModel)]=\"linkedin\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Github</label>\n    <input type=\"text\" class=\"form-control\" name=\"github\" [(ngModel)]=\"github\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <div class=\"form-group\">\n    <label>Personal</label>\n    <input type=\"text\" class=\"form-control\" name=\"personal\" [(ngModel)]=\"personal\">\n    <small class=\"form-text text-muted\"></small>\n  </div>\n  <button class=\"btn btn-light\" type=\"submit\">Add Profile</button>\n  <button class=\"btn btn-dark\" [routerLink]=\"['/home']\">Cancel</button>\n</form>\n\n<br> {{error}}"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
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
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.newProfile(this.firstname, this.lastname, this.resume, this.linkedin, this.github, this.personal);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                console.log(data);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(data);
                if (data.err.errors.firstname !== undefined) {
                    _this.error = 'First Name must be at least 3 characters';
                }
                if (data.err.errors.lastname !== undefined) {
                    _this.error = 'Last Name must be at least 3 characters';
                }
                else if (data.err.errors.resume !== undefined) {
                    _this.error = 'Resume must be submitted';
                }
            }
        });
        console.log(this.resume);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


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