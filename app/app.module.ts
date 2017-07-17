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
import {DoctorViewProfileComponent} from "./doctors/doctor-view-profile/doctor-view-profile.component";
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
import {BookAppointmentComponent} from "./patient/book-appointment/book-appointment.component";
import {DoctorloginService} from "./doctor-login/doctor-login.service";
import {DoctorService} from "./doctors/doctor.service";
import {EqualValidator} from "./equal-validator.directice";
import {WeekdayPipe} from "./weekday.pipe";
import {ViewScheduleComponent} from "./doctors/view-schedule/view-schedule.component";
import {CanDeactivateService} from "./admin/edit/can-deactivate-guard.service";
import {PatientModule} from "./patient/patient.module";


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        FooterModule,
        AppRoutingModule,
        PatientModule

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
        DoctorViewProfileComponent,
        DoctorViewAppointmentComponent,
        DoctorProfileComponent,
        ApproveleaveComponent,
      /* ViewAppointmentComponent,
        PatientProfileComponent,
        NewAppointmentComponent,
        PatientComponent,*/
        PatientLoginComponent,
        AdminLoginComponent,
        PatientRegisterComponent,
        EditComponent,
      /* DeletePatientComponent,
        BookAppointmentComponent,*/
        ViewScheduleComponent,
        EqualValidator,
        WeekdayPipe
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        AdminloginService,
        AdminService,
        PatientRegisterService,
        MemoryService,
        PatientloginService,
        PatientService,
        DoctorloginService,
        DoctorService,
        CanDeactivateService,


    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
