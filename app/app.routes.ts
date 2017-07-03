import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin/admin.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {AdddoctorComponent} from "./admin/adddoctor/adddoctor.component";
import {DeletedoctorComponent} from "./admin/deletedoctor/deletedoctor.component";
import {AdminProfileComponent} from "./admin/admin-profile/admin-profile.component";
import {ScheduledoctorComponent} from "./admin/scheduledoctor/scheduledoctor.component";
import {LeaveComponent} from "./doctors/leave/leave.component";
import {DoctorViewScheduleComponent} from "./doctors/doctor-view-schedule/doctor-view-schedule.component";
import {DoctorViewAppointmentComponent} from "./doctors/doctor-view-appointment/doctor-view-appointment.component";
import {DoctorProfileComponent} from "./doctors/doctor-profile/doctor-profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ApproveleaveComponent} from "./admin/approveleave/approveleave.component";
import {ViewAppointmentComponent} from "./patient/view-appointment/view-appointment.component";
import {PatientProfileComponent} from "./patient/patient-profile/patient-profile.component";
import {NewAppointmentComponent} from "./patient/new-appointment/new-appointment.component";
import {PatientComponent} from "./patient/patient.component";
import {DoctorLoginComponent} from "./doctor-login/doctor-login.component";
import {AppComponent} from "./app.component";
import {PatientLoginComponent} from "./patient-login/patient-login.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {PatientRegisterComponent} from "./patient-register/patient-register.component";
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./admin/edit/edit.component";
import {DeletePatientComponent} from "./patient/delete-patient/delete-patient.component";
import {BookAppointmentComponent} from "./patient/book-appointment/book-appointment.component";
const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'doctor-login',component:DoctorLoginComponent},
    {path:'patient-login',component:PatientLoginComponent},
    {path:'patient-register',component:PatientRegisterComponent},
    {path:'admin-login',component:AdminLoginComponent},
    {path:'patient',component:PatientComponent,
        children:[

            {path:'patient-profile',component:PatientProfileComponent},
            {path:'new-appointment',component:NewAppointmentComponent},
            {path:'view-appointment',component:ViewAppointmentComponent},
            {path:'delete-patient',component:DeletePatientComponent},
            {path:'book-appointment',component:BookAppointmentComponent},
        ]
    },
    {path:'doctors',component:DoctorsComponent,
        children:[

            { path: 'doctor-profile',component:DoctorProfileComponent},
            { path: 'doctor-view-appointment', component:DoctorViewAppointmentComponent},
            { path: 'doctor-view-schedule', component:DoctorViewScheduleComponent },
            { path: 'leave',component:LeaveComponent }
        ]
    },
    {path:'admin',component:AdminComponent,

        children:[

            {path:'admin-profile',component:AdminProfileComponent},
            {path:'adddoctor',component:AdddoctorComponent},
            {path:'deletedoctor',component:DeletedoctorComponent},
            {path:'scheduledoctor',component:ScheduledoctorComponent},
            {path:'approveleave', component:ApproveleaveComponent},
            {path:'edit', component:EditComponent},

    ]
        },
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'not-found'}
];


@NgModule({

    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule
{

}
