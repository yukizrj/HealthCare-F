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
var patient_register_service_1 = require("./patient-register.service");
var router_1 = require("@angular/router");
var PatientRegisterComponent = (function () {
    function PatientRegisterComponent(patientregister, route) {
        this.patientregister = patientregister;
        this.route = route;
    }
    PatientRegisterComponent.prototype.ngOnInit = function () {
    };
    PatientRegisterComponent.prototype.registerSubmit = function (dob, email, gender, name, pwd) {
        var _this = this;
        console.log("component.ts get" + dob);
        this.patientregister.register(dob, email, gender, name, pwd).subscribe(function (data) {
            _this.result = data;
        });
        /*let user_detail=JSON.stringify(this.result);
         console.log(user_detail);*/
    };
    PatientRegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-patient-register',
            templateUrl: './patient-register.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [patient_register_service_1.PatientRegisterService, router_1.Router])
    ], PatientRegisterComponent);
    return PatientRegisterComponent;
}());
exports.PatientRegisterComponent = PatientRegisterComponent;
//# sourceMappingURL=patient-register.component.js.map