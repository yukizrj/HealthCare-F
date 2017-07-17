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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var footer_module_1 = require('./shared/footer/footer.module');
var common_1 = require('@angular/common');
var app_routes_1 = require("./app.routes");
var adddoctor_component_1 = require("./admin/adddoctor/adddoctor.component");
var deletedoctor_component_1 = require("./admin/deletedoctor/deletedoctor.component");
var admin_profile_component_1 = require("./admin/admin-profile/admin-profile.component");
var scheduledoctor_component_1 = require("./admin/scheduledoctor/scheduledoctor.component");
var leave_component_1 = require("./doctors/leave/leave.component");
var doctor_view_profile_component_1 = require("./doctors/doctor-view-profile/doctor-view-profile.component");
var doctor_view_appointment_component_1 = require("./doctors/doctor-view-appointment/doctor-view-appointment.component");
var doctor_profile_component_1 = require("./doctors/doctor-profile/doctor-profile.component");
var approveleave_component_1 = require("./admin/approveleave/approveleave.component");
var patient_login_component_1 = require("./patient-login/patient-login.component");
var admin_login_component_1 = require("./admin-login/admin-login.component");
var patient_register_component_1 = require("./patient-register/patient-register.component");
var forms_1 = require("@angular/forms");
var doctor_login_component_1 = require("./doctor-login/doctor-login.component");
var doctors_component_1 = require("./doctors/doctors.component");
var admin_component_1 = require("./admin/admin.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var adminlogin_service_1 = require("./admin-login/adminlogin.service");
var admin_service_1 = require("./admin/admin.service");
var home_component_1 = require("./home/home.component");
var patient_register_service_1 = require("./patient-register/patient-register.service");
var memory_service_1 = require("./memory.service");
var patient_login_service_1 = require("./patient-login/patient-login.service");
var edit_component_1 = require("./admin/edit/edit.component");
var patient_service_1 = require("./patient/patient.service");
var doctor_login_service_1 = require("./doctor-login/doctor-login.service");
var doctor_service_1 = require("./doctors/doctor.service");
var equal_validator_directice_1 = require("./equal-validator.directice");
var weekday_pipe_1 = require("./weekday.pipe");
var view_schedule_component_1 = require("./doctors/view-schedule/view-schedule.component");
var can_deactivate_guard_service_1 = require("./admin/edit/can-deactivate-guard.service");
var patient_module_1 = require("./patient/patient.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                footer_module_1.FooterModule,
                app_routes_1.AppRoutingModule,
                patient_module_1.PatientModule
            ],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent,
                adddoctor_component_1.AdddoctorComponent,
                admin_profile_component_1.AdminProfileComponent,
                deletedoctor_component_1.DeletedoctorComponent,
                scheduledoctor_component_1.ScheduledoctorComponent,
                leave_component_1.LeaveComponent,
                doctor_login_component_1.DoctorLoginComponent,
                doctors_component_1.DoctorsComponent,
                admin_component_1.AdminComponent,
                page_not_found_component_1.PageNotFoundComponent,
                doctor_view_profile_component_1.DoctorViewProfileComponent,
                doctor_view_appointment_component_1.DoctorViewAppointmentComponent,
                doctor_profile_component_1.DoctorProfileComponent,
                approveleave_component_1.ApproveleaveComponent,
                /* ViewAppointmentComponent,
                  PatientProfileComponent,
                  NewAppointmentComponent,
                  PatientComponent,*/
                patient_login_component_1.PatientLoginComponent,
                admin_login_component_1.AdminLoginComponent,
                patient_register_component_1.PatientRegisterComponent,
                edit_component_1.EditComponent,
                /* DeletePatientComponent,
                  BookAppointmentComponent,*/
                view_schedule_component_1.ViewScheduleComponent,
                equal_validator_directice_1.EqualValidator,
                weekday_pipe_1.WeekdayPipe
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                adminlogin_service_1.AdminloginService,
                admin_service_1.AdminService,
                patient_register_service_1.PatientRegisterService,
                memory_service_1.MemoryService,
                patient_login_service_1.PatientloginService,
                patient_service_1.PatientService,
                doctor_login_service_1.DoctorloginService,
                doctor_service_1.DoctorService,
                can_deactivate_guard_service_1.CanDeactivateService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map