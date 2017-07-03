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
var admin_service_1 = require("../admin.service");
var memory_service_1 = require("../../memory.service");
var router_1 = require("@angular/router");
var AdminProfileComponent = (function () {
    function AdminProfileComponent(adminservice, memory, route) {
        this.adminservice = adminservice;
        this.route = route;
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
    };
    AdminProfileComponent.prototype.profileChange = function (pwd) {
        var _this = this;
        this.adminservice.profileChange(pwd).subscribe(function (data) {
            _this.result = data;
        });
    };
    AdminProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-profile',
            templateUrl: './admin-profile.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, memory_service_1.MemoryService, router_1.Router])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());
exports.AdminProfileComponent = AdminProfileComponent;
//# sourceMappingURL=admin-profile.component.js.map