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
var core_1 = require('@angular/core');
var adminlogin_service_1 = require("./adminlogin.service");
var router_1 = require("@angular/router");
var memory_service_1 = require("../memory.service");
var AdminLoginComponent = (function () {
    function AdminLoginComponent(adminloginservice, memory, route) {
        this.adminloginservice = adminloginservice;
        this.memory = memory;
        this.route = route;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.loginSubmit = function (username, pwd) {
        var _this = this;
        this.adminloginservice.login(username, pwd).subscribe(function (data) {
            _this.result = data;
            if (_this.result !== "0") {
                _this.memory.current_admin = _this.result;
                console.log("admin in memory" + _this.memory.current_admin);
                _this.route.navigate(["/admin"]);
            }
            else {
            }
        });
    };
    AdminLoginComponent.prototype.methodInsideYourComponent = function (value) {
        alert('Submitted value: ' + value);
    };
    AdminLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-login',
            templateUrl: './admin-login.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [adminlogin_service_1.AdminloginService, memory_service_1.MemoryService, router_1.Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
exports.AdminLoginComponent = AdminLoginComponent;
//# sourceMappingURL=admin-login.component.js.map