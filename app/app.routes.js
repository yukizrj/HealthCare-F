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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var admin_component_1 = require("./admin/admin.component");
var doctors_component_1 = require("./doctors/doctors.component");
var adddoctor_component_1 = require("./admin/adddoctor/adddoctor.component");
var deletedoctor_component_1 = require("./admin/deletedoctor/deletedoctor.component");
var admin_profile_component_1 = require("./admin/admin-profile/admin-profile.component");
var scheduledoctor_component_1 = require("./admin/scheduledoctor/scheduledoctor.component");
var leave_component_1 = require("./doctors/leave/leave.component");
var doctor_view_profile_component_1 = require("./doctors/doctor-view-profile/doctor-view-profile.component");
var doctor_view_appointment_component_1 = require("./doctors/doctor-view-appointment/doctor-view-appointment.component");
var doctor_profile_component_1 = require("./doctors/doctor-profile/doctor-profile.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var approveleave_component_1 = require("./admin/approveleave/approveleave.component");
var view_appointment_component_1 = require("./patient/view-appointment/view-appointment.component");
var patient_profile_component_1 = require("./patient/patient-profile/patient-profile.component");
var new_appointment_component_1 = require("./patient/new-appointment/new-appointment.component");
var patient_component_1 = require("./patient/patient.component");
var doctor_login_component_1 = require("./doctor-login/doctor-login.component");
var patient_login_component_1 = require("./patient-login/patient-login.component");
var admin_login_component_1 = require("./admin-login/admin-login.component");
var patient_register_component_1 = require("./patient-register/patient-register.component");
var home_component_1 = require("./home/home.component");
var edit_component_1 = require("./admin/edit/edit.component");
var delete_patient_component_1 = require("./patient/delete-patient/delete-patient.component");
var book_appointment_component_1 = require("./patient/book-appointment/book-appointment.component");
var view_schedule_component_1 = require("./doctors/view-schedule/view-schedule.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'doctor-login', component: doctor_login_component_1.DoctorLoginComponent },
    { path: 'patient-login', component: patient_login_component_1.PatientLoginComponent },
    { path: 'patient-register', component: patient_register_component_1.PatientRegisterComponent },
    { path: 'admin-login', component: admin_login_component_1.AdminLoginComponent },
    { path: 'patient', component: patient_component_1.PatientComponent,
        children: [
            { path: 'patient-profile', component: patient_profile_component_1.PatientProfileComponent },
            { path: 'new-appointment', component: new_appointment_component_1.NewAppointmentComponent },
            { path: 'view-appointment', component: view_appointment_component_1.ViewAppointmentComponent },
            { path: 'delete-patient', component: delete_patient_component_1.DeletePatientComponent },
            { path: 'book-appointment', component: book_appointment_component_1.BookAppointmentComponent },
        ]
    },
    { path: 'doctors', component: doctors_component_1.DoctorsComponent,
        children: [
            { path: 'doctor-profile', component: doctor_profile_component_1.DoctorProfileComponent },
            { path: 'doctor-view-appointment', component: doctor_view_appointment_component_1.DoctorViewAppointmentComponent },
            { path: 'doctor-view-profile', component: doctor_view_profile_component_1.DoctorViewProfileComponent },
            { path: 'leave', component: leave_component_1.LeaveComponent },
            { path: 'view-schedule', component: view_schedule_component_1.ViewScheduleComponent },
        ]
    },
    { path: 'admin', component: admin_component_1.AdminComponent,
        children: [
            { path: 'admin-profile', component: admin_profile_component_1.AdminProfileComponent },
            { path: 'adddoctor', component: adddoctor_component_1.AdddoctorComponent },
            { path: 'deletedoctor', component: deletedoctor_component_1.DeletedoctorComponent },
            { path: 'scheduledoctor', component: scheduledoctor_component_1.ScheduledoctorComponent },
            { path: 'approveleave', component: approveleave_component_1.ApproveleaveComponent },
            { path: 'edit', component: edit_component_1.EditComponent },
        ]
    },
    { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map