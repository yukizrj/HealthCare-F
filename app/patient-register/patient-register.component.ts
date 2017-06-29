import { Component, OnInit } from '@angular/core';
import {PatientRegisterService} from "./patient-register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  moduleId: module.id,
})
export class PatientRegisterComponent implements OnInit {
 result:string;
  constructor(private patientregister: PatientRegisterService, private route:Router) { }

  ngOnInit() {
  }

  registerSubmit(dob:string,email:string,gender:string,name:string,pwd:string){
    console.log("component.ts get"+dob);
    this.patientregister.register(dob,email,gender,name,pwd).subscribe((data)=>{
      this.result=data;

    });
    /*let user_detail=JSON.stringify(this.result);
     console.log(user_detail);*/



  }

}
