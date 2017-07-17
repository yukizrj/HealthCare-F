import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {NewAppointmentComponent} from "./new-appointment/new-appointment.component";
import {ViewAppointmentComponent} from "./view-appointment/view-appointment.component";
import {DeletePatientComponent} from "./delete-patient/delete-patient.component";
import {BookAppointmentComponent} from "./book-appointment/book-appointment.component";

const Patientroutes: Routes = [
  {path:'patient',component:PatientComponent,
    children:[

      {path:'patient-profile',component:PatientProfileComponent},
      {path:'new-appointment',component:NewAppointmentComponent},
      {path:'view-appointment',component:ViewAppointmentComponent},
      {path:'delete-patient',component:DeletePatientComponent},
      {path:'book-appointment',component:BookAppointmentComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(Patientroutes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
