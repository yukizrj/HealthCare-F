import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";
import {User} from "../../user.interface";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  moduleId: module.id,
})
export class PatientProfileComponent implements OnInit {
  public user:User
  result:string;
  constructor(private patientservice:PatientService) { }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  profileChange(pwd:string){
    this.patientservice.profileChange(pwd).subscribe((data)=>
        {
          this.result=data;

        }
    );
  }
}
