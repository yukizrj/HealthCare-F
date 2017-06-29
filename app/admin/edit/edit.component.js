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
var EditComponent = (function () {
    function EditComponent(adminservice) {
        this.adminservice = adminservice;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.doc_id = this.adminservice.doctor_detail.doc_id;
        this.doc_name = this.adminservice.doctor_detail.doc_name;
        this.doc_email = this.adminservice.doctor_detail.doc_email;
        this.doc_license = this.adminservice.doctor_detail.doc_license;
        this.doc_pwd = this.adminservice.doctor_detail.doc_pwd;
    };
    EditComponent.prototype.editDoctor = function (elicense, eemail, ename, espe_id, eid, epwd) {
        var _this = this;
        this.adminservice.editDoctor(elicense, eemail, ename, espe_id, eid, epwd).subscribe(function (data) {
            _this.editresult = data;
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map