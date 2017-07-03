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
var memory_service_1 = require("../../memory.service");
var doctor_service_1 = require("../doctor.service");
var DoctorViewAppointmentComponent = (function () {
    function DoctorViewAppointmentComponent(memory, doctorservice) {
        this.memory = memory;
        this.doctorservice = doctorservice;
    }
    DoctorViewAppointmentComponent.prototype.ngOnInit = function () {
        this.doc_id = this.memory.current_doctor;
        console.log("doc_id " + this.doc_id);
    };
    DoctorViewAppointmentComponent.prototype.view = function (doc_id) {
        var _this = this;
        this.doctorservice.view(this.doc_id).subscribe(function (data) {
            _this.result = data;
        });
    };
    DoctorViewAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-doctor-view-appointment',
            templateUrl: './doctor-view-appointment.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [memory_service_1.MemoryService, doctor_service_1.DoctorService])
    ], DoctorViewAppointmentComponent);
    return DoctorViewAppointmentComponent;
}());
exports.DoctorViewAppointmentComponent = DoctorViewAppointmentComponent;
//# sourceMappingURL=doctor-view-appointment.component.js.map