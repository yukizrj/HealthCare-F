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
var router_1 = require("@angular/router");
var DeletedoctorComponent = (function () {
    function DeletedoctorComponent(adminservice, route) {
        this.adminservice = adminservice;
        this.route = route;
    }
    DeletedoctorComponent.prototype.ngOnInit = function () {
    };
    DeletedoctorComponent.prototype.searchDoctor = function (name) {
        var _this = this;
        this.adminservice.searchDoctor(name).subscribe(function (data) {
            _this.result = data;
        });
    };
    DeletedoctorComponent.prototype.geteditDoctor = function (slicense) {
        var _this = this;
        this.adminservice.geteditDoctor(slicense).subscribe(function (data) {
            console.log('Doctor details ' + data);
            /*this.adminservice.editdata=data;
            this.adminservice.li=this.editdata.charAt(0);
            this.adminservice.liname=this.editdata.charAt(2);
            this.adminservice.liemail=this.editdata.charAt(1);
            this.route.navigate(["/admin./edit"]);*/
            _this.route.navigate(["./admin/edit"]);
        });
    };
    DeletedoctorComponent = __decorate([
        core_1.Component({
            selector: 'app-deletedoctor',
            templateUrl: './deletedoctor.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, router_1.Router])
    ], DeletedoctorComponent);
    return DeletedoctorComponent;
}());
exports.DeletedoctorComponent = DeletedoctorComponent;
//# sourceMappingURL=deletedoctor.component.js.map