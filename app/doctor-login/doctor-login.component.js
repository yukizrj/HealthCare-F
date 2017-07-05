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
var doctor_login_service_1 = require("./doctor-login.service");
var memory_service_1 = require("../memory.service");
var router_1 = require("@angular/router");
var DoctorLoginComponent = (function () {
    function DoctorLoginComponent(doctorlogin, memory, route) {
        this.doctorlogin = doctorlogin;
        this.memory = memory;
        this.route = route;
    }
    DoctorLoginComponent.prototype.ngOnInit = function () {
    };
    DoctorLoginComponent.prototype.loginSubmit = function (license, pwd) {
        var _this = this;
        this.doctorlogin.login(license, pwd).subscribe(function (data) {
            _this.result = data;
            console.log("Result" + _this.result);
            if (_this.result !== "0") {
                _this.memory.current_doctor = _this.result;
                _this.memory.current_doctor2 = _this.result;
                console.log("doctor in memory1" + _this.memory.current_doctor);
                console.log("doctor in memory2" + _this.memory.current_doctor2);
                _this.route.navigate(["/doctors"]);
            }
            else {
            }
        });
    };
    DoctorLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-doctor-login',
            templateUrl: './doctor-login.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [doctor_login_service_1.DoctorloginService, memory_service_1.MemoryService, router_1.Router])
    ], DoctorLoginComponent);
    return DoctorLoginComponent;
}());
exports.DoctorLoginComponent = DoctorLoginComponent;
//# sourceMappingURL=doctor-login.component.js.map