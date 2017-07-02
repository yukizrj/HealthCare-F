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
var patient_service_1 = require("../patient.service");
var memory_service_1 = require("../../memory.service");
var NewAppointmentComponent = (function () {
    function NewAppointmentComponent(patientservice, memory) {
        this.patientservice = patientservice;
        this.memory = memory;
    }
    NewAppointmentComponent.prototype.ngOnInit = function () {
    };
    NewAppointmentComponent.prototype.searchDoctor = function (dt, spec) {
        var _this = this;
        this.id = this.memory.current_patient;
        console.log("id is" + this.id);
        this.patientservice.searchDoctor(dt, spec, this.id).subscribe(function (data) {
            _this.result = data;
        });
    };
    NewAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-new-appointment',
            templateUrl: './new-appointment.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService, memory_service_1.MemoryService])
    ], NewAppointmentComponent);
    return NewAppointmentComponent;
}());
exports.NewAppointmentComponent = NewAppointmentComponent;
//# sourceMappingURL=new-appointment.component.js.map