import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import {BookAppointmentComponent} from "./book-appointment/book-appointment.component";
import {DeletePatientComponent} from "./delete-patient/delete-patient.component";
import {NewAppointmentComponent} from "./new-appointment/new-appointment.component";
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {ViewAppointmentComponent} from "./view-appointment/view-appointment.component";
import {PatientComponent} from "./patient.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FooterModule} from "../shared/footer/footer.module";
import {MemoryService} from "../memory.service";
import {PatientService} from "./patient.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FooterModule,
    PatientRoutingModule
  ],
  declarations: [
      BookAppointmentComponent,
      DeletePatientComponent,
      NewAppointmentComponent,
      PatientProfileComponent,
      ViewAppointmentComponent,
      PatientComponent,
  ],
  exports: [
    BookAppointmentComponent,
    DeletePatientComponent,
    NewAppointmentComponent,
    PatientProfileComponent,
    ViewAppointmentComponent,
    PatientComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    MemoryService,
    PatientService,


  ],

})
export class PatientModule { }
