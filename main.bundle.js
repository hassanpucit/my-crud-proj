webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-employees></app-employees>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__ = __webpack_require__("../../../../../src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employee_employee_component__ = __webpack_require__("../../../../../src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_employee_list_employee_list_component__ = __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// export const firebaseConfig = {
//   apiKey: "AIzaSyCc9xjO5twfQ8jHmcfQcs1JtZgkgn7j1lw",
//   authDomain: "employeeregister-b9e6b.firebaseapp.com",
//   databaseURL: "https://employeeregister-b9e6b.firebaseio.com",
//   projectId: "employeeregister-b9e6b",
//   storageBucket: "employeeregister-b9e6b.appspot.com",
//   messagingSenderId: "157212734392"
// };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__["a" /* EmployeesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__employees_employee_employee_component__["a" /* EmployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group hover\">\n  <li class=\"list-group-item\" *ngFor=\"let employee of employeeList\" (click)=\"onItemClick(employee)\">\n        {{employee.name}} - {{employee.position}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.employeeList.push(y);
            });
        });
    };
    EmployeeListComponent.prototype.onItemClick = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp);
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-employee-list',
        template: __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]) === "function" && _a || Object])
], EmployeeListComponent);

var _a;
//# sourceMappingURL=employee-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\">\n  <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.$key\">\n  <div class=\"form-group\">\n      <label>Name:</label>\n     <input class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.name\" placeholder=\"Full Name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Position:</label>\n    <input class=\"form-control\" name=\"position\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.position\" placeholder=\"Position\">\n  </div>\n  <div class=\"form-group\">\n    <label>Office:</label>\n    <input class=\"form-control\" name=\"office\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.office\" placeholder=\"Office\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Salary:</label>\n    <div class=\"input-group\">\n        <div class=\"input-group-addon\">\n          <i class=\"fa fa-dollar\"></i>\n        </div>\n          <input class=\"form-control\" name=\"salary\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.salary\" placeholder=\"Salary\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!employeeForm.valid\">\n      <i class=\"fa fa-floppy-o\"></i> Submit</button>\n    <button type=\"button\" class=\"btn btn-default\" *ngIf=\"employeeService.selectedEmployee.$key != null\" (click)=\"onDelete(employeeForm)\">\n      <i class=\"fa fa-trash\"></i> Delete</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"resetForm()\">\n      <i class=\"fa fa-repeat\"></i> Reset</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null)
            this.employeeService.insertEmployee(form.value);
        else
            this.employeeService.updateEmployee(form.value);
        this.resetForm(form);
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.employeeService.selectedEmployee = {
            $key: null,
            name: '',
            position: '',
            office: '',
            salary: 0,
        };
    };
    EmployeeComponent.prototype.onDelete = function (form) {
        if (confirm("Are you sure to delete this record ?") == true) {
            this.employeeService.deleteEmployee(form.value.$key);
            this.resetForm(form);
        }
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-employee',
        template: __webpack_require__("../../../../../src/app/employees/employee/employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employees/employee/employee.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]) === "function" && _a || Object])
], EmployeeComponent);

var _a;
//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h2 class=\"jumbotron\">Employee Register</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-employee></app-employee>\n  </div>\n  <div class=\"col-md-5\">\n    <app-employee-list></app-employee-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-employees',
        template: __webpack_require__("../../../../../src/app/employees/employees.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employees/employees.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]) === "function" && _a || Object])
], EmployeesComponent);

var _a;
//# sourceMappingURL=employees.component.js.map

/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());

//# sourceMappingURL=employee.model.js.map

/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_model__ = __webpack_require__("../../../../../src/app/employees/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = (function () {
    function EmployeeService(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]();
    }
    EmployeeService.prototype.getData = function () {
        this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    };
    EmployeeService.prototype.insertEmployee = function (empoloyee) {
        this.employeeList.push({
            name: empoloyee.name,
            position: empoloyee.position,
            office: empoloyee.office,
            salary: empoloyee.salary
        });
    };
    EmployeeService.prototype.updateEmployee = function (emp) {
        this.employeeList.update(emp.$key, {
            name: emp.name,
            position: emp.position,
            office: emp.office,
            salary: emp.salary,
        });
    };
    EmployeeService.prototype.deleteEmployee = function (key) {
        this.employeeList.remove(key);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], EmployeeService);

var _a;
//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCc9xjO5twfQ8jHmcfQcs1JtZgkgn7j1lw",
        authDomain: "employeeregister-b9e6b.firebaseapp.com",
        databaseURL: "https://employeeregister-b9e6b.firebaseio.com",
        projectId: "employeeregister-b9e6b",
        storageBucket: "employeeregister-b9e6b.appspot.com",
        messagingSenderId: "157212734392"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map