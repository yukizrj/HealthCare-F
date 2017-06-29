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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require('rxjs/add/operator/catch');
var memory_service_1 = require("../memory.service");
var AdminService = (function () {
    function AdminService(http, memory) {
        this.http = http;
        this.memory = memory;
    }
    AdminService.prototype.addDoctor = function (email, license, name, pwd, spe_id) {
        var params = new http_1.URLSearchParams();
        params.set('email', email);
        params.set('license', license);
        params.set('name', name);
        params.set('pwd', pwd);
        params.set('spe_id', spe_id);
        console.log(spe_id);
        var body = params;
        return this.http.post('http://localhost:9090/doctor-save', body)
            .map(function (res) {
            console.log("response " + res);
            return res.json();
        });
    };
    AdminService.prototype.searchDoctor = function (name) {
        var params = new http_1.URLSearchParams();
        params.set("name", name);
        var body = params;
        return this.http.post('http://localhost:9090/doctor-search-name', body)
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.profileChange = function (pwd) {
        var params = new http_1.URLSearchParams();
        params.set("username", this.memory.current_admin);
        params.set("pwd", pwd);
        var body = params;
        return this.http.post('http://localhost:9090/admin-update', body)
            .map(function (res) {
            return res.text();
        });
    };
    AdminService.prototype.geteditDoctor = function (slicense) {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.set("license", slicense);
        console.log(slicense);
        /*  let body=params;*/
        return this.http.get('http://localhost:9090/doctor-search-license', { search: params })
            .map(function (res) {
            _this.doctor_detail = res.json();
            console.log(_this.doctor_detail);
            return _this.doctor_detail;
        });
    };
    AdminService.prototype.editDoctor = function (elicense, eemail, ename, espe_id, eid, epwd) {
        var params = new http_1.URLSearchParams();
        params.set("license", elicense);
        params.set("email", eemail);
        params.set("name", ename);
        params.set("spe_id", espe_id);
        params.set("id", eid);
        params.set("pwd", epwd);
        console.log("spe is" + espe_id);
        var body = params;
        return this.http.post('http://localhost:9090/doctor-edit', body)
            .map(function (res) {
            console.log("ser run" + res);
            return res.json();
        });
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, memory_service_1.MemoryService])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map