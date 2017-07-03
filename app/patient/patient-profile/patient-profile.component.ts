import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  moduleId: module.id,
})
export class PatientProfileComponent implements OnInit {
  result:string;
  constructor(private patientservice:PatientService) { }

  ngOnInit() {
  }

  profileChange(pwd:string){
    this.patientservice.profileChange(pwd).subscribe((data)=>
        {
          this.result=data;

        }
    );
  }
}
