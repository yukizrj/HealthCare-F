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
var router_1 = require("@angular/router");
var NewAppointmentComponent = (function () {
    function NewAppointmentComponent(patientservice, memory, route) {
        this.patientservice = patientservice;
        this.memory = memory;
        this.route = route;
    }
    NewAppointmentComponent.prototype.ngOnInit = function () {
    };
    NewAppointmentComponent.prototype.searchDoctor = function (dt, spec) {
        var _this = this;
        this.patientservice.book_pat_id = this.memory.current_patient;
        this.patientservice.searchDoctor(dt, spec, this.patientservice.book_pat_id).subscribe(function (data) {
            _this.result = data;
            _this.patientservice.book_dt = dt;
            _this.patientservice.book_spec = spec;
            if (_this.result == null) {
                _this.exist = "1";
            }
            else {
                _this.exist = "0";
            }
            console.log("result" + _this.result);
        });
    };
    NewAppointmentComponent.prototype.bookselect = function (doc_id, day_id, doc_name, begin, end) {
        this.patientservice.book_doc_id = doc_id;
        this.patientservice.book_day_id = day_id;
        this.patientservice.book_doc_name = doc_name;
        this.patientservice.book_begin = begin;
        this.patientservice.book_end = end;
        this.route.navigate(['./patient/book-appointment']);
    };
    NewAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-new-appointment',
            templateUrl: './new-appointment.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService, memory_service_1.MemoryService, router_1.Router])
    ], NewAppointmentComponent);
    return NewAppointmentComponent;
}());
exports.NewAppointmentComponent = NewAppointmentComponent;
//# sourceMappingURL=new-appointment.component.js.map