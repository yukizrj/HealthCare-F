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
var ScheduledoctorComponent = (function () {
    function ScheduledoctorComponent(adminservice) {
        this.adminservice = adminservice;
        this.totalstring = [];
    }
    ScheduledoctorComponent.prototype.ngOnInit = function () {
    };
    ScheduledoctorComponent.prototype.scheduledata = function (license, mday, mbegin, mend, tuday, tubegin, tuend, wday, wbegin, wend, tday, tbegin, tend, fday, fbegin, fend, sday, sbegin, send, suday, subegin, suend) {
        if (mday == true) {
            this.mstring = "1-" + mbegin + "-" + mend;
            this.totalstring.push(this.mstring);
        }
        if (tuday == true) {
            this.tustring = "2-" + tubegin + "-" + tuend;
            this.totalstring.push(this.tustring);
        }
        if (wday == true) {
            this.wstring = "3-" + wbegin + "-" + wend;
            this.totalstring.push(this.wstring);
        }
        if (tday == true) {
            this.tstring = "4-" + tbegin + "-" + tend;
            this.totalstring.push(this.tstring);
        }
        if (fday == true) {
            this.fstring = "5-" + fbegin + "-" + fend;
            this.totalstring.push(this.fstring);
        }
        if (sday == true) {
            this.sstring = "6-" + sbegin + "-" + send;
            this.totalstring.push(this.sstring);
        }
        if (suday == true) {
            this.sustring = "7-" + subegin + "-" + suend;
            this.totalstring.push(this.sustring);
        }
        console.log("total" + this.totalstring);
        this.schedule(license, this.totalstring);
        this.totalstring = [];
    };
    ScheduledoctorComponent.prototype.schedule = function (license, totalstring) {
        var _this = this;
        this.adminservice.schedule(license, totalstring).subscribe(function (data) {
            _this.result = data;
            console.log(_this.result);
        });
    };
    ScheduledoctorComponent = __decorate([
        core_1.Component({
            selector: 'app-scheduledoctor',
            templateUrl: './scheduledoctor.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], ScheduledoctorComponent);
    return ScheduledoctorComponent;
}());
exports.ScheduledoctorComponent = ScheduledoctorComponent;
//# sourceMappingURL=scheduledoctor.component.js.map