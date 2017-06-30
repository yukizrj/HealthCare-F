import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { FooterModule } from './shared/footer/footer.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {AppRoutingModule} from "./app.routes";
import {AdddoctorComponent} from "./admin/adddoctor/adddoctor.component";
import {DeletedoctorComponent} from "./admin/deletedoctor/deletedoctor.component";
import {AdminProfileComponent} from "./admin/admin-profile/admin-profile.component";
import {ScheduledoctorComponent} from "./admin/scheduledoctor/scheduledoctor.component";
import {LeaveComponent} from "./doctors/leave/leave.component";
import {DoctorViewScheduleComponent} from "./doctors/doctor-view-schedule/doctor-view-schedule.component";
import {DoctorViewAppointmentComponent} from "./doctors/doctor-view-appointment/doctor-view-appointment.component";
import {DoctorProfileComponent} from "./doctors/doctor-profile/doctor-profile.component";
import {ApproveleaveComponent} from "./admin/approveleave/approveleave.component";
import {ViewAppointmentComponent} from "./patient/view-appointment/view-appointment.component";
import {PatientProfileComponent} from "./patient/patient-profile/patient-profile.component";
import {NewAppointmentComponent} from "./patient/new-appointment/new-appointment.component";
import {PatientComponent} from "./patient/patient.component";
import {PatientLoginComponent} from "./patient-login/patient-login.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {PatientRegisterComponent} from "./patient-register/patient-register.component";
import {FormsModule} from "@angular/forms";
import {DoctorLoginComponent} from "./doctor-login/doctor-login.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {AdminComponent} from "./admin/admin.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AdminloginService} from "./admin-login/adminlogin.service";
import {AdminService} from "./admin/admin.service";
import {HomeComponent} from "./home/home.component";
import {PatientRegisterService} from "./patient-register/patient-register.service";
import {MemoryService} from "./memory.service";
import {PatientloginService} from "./patient-login/patient-login.service";
import {EditComponent} from "./admin/edit/edit.component";
import {DeletePatientComponent} from "./patient/delete-patient/delete-patient.component";
import {PatientService} from "./patient/patient.service";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        FooterModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent, HomeComponent,
        AdddoctorComponent,
        AdminProfileComponent,
        DeletedoctorComponent,
        ScheduledoctorComponent,
        LeaveComponent,
        DoctorLoginComponent,
        DoctorsComponent,
        AdminComponent,
        PageNotFoundComponent,
        DoctorViewScheduleComponent,
        DoctorViewAppointmentComponent,
        DoctorProfileComponent,
        ApproveleaveComponent,
        ViewAppointmentComponent,
        PatientProfileComponent,
        NewAppointmentComponent,
        PatientComponent,
        PatientLoginComponent,
        AdminLoginComponent,
        PatientRegisterComponent,
        EditComponent,
        DeletePatientComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        AdminloginService,
        AdminService,
        PatientRegisterService,
        MemoryService,
        PatientloginService,
        PatientService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
