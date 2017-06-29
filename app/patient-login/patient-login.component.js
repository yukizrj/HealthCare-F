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
var patient_login_service_1 = require("./patient-login.service");
var memory_service_1 = require("../memory.service");
var router_1 = require("@angular/router");
var PatientLoginComponent = (function () {
    function PatientLoginComponent(patientlogin, memory, route) {
        this.patientlogin = patientlogin;
        this.memory = memory;
        this.route = route;
    }
    PatientLoginComponent.prototype.ngOnInit = function () {
    };
    PatientLoginComponent.prototype.loginSubmit = function (email, pwd) {
        var _this = this;
        this.patientlogin.login(email, pwd).subscribe(function (data) {
            _this.result = data;
            if (_this.result !== "0") {
                _this.memory.current_patient = _this.result;
                console.log("patient in memory" + _this.memory.current_patient);
                _this.route.navigate(["/patient"]);
            }
            else {
            }
        });
    };
    PatientLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-patient-login',
            templateUrl: './patient-login.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [patient_login_service_1.PatientloginService, memory_service_1.MemoryService, router_1.Router])
    ], PatientLoginComponent);
    return PatientLoginComponent;
}());
exports.PatientLoginComponent = PatientLoginComponent;
//# sourceMappingURL=patient-login.component.js.map