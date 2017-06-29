import { Component, OnInit } from '@angular/core';
import {PatientloginService} from "./patient-login.service";
import {MemoryService} from "../memory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  moduleId: module.id,
})
export class PatientLoginComponent implements OnInit {

  result:string;
  constructor(private patientlogin:PatientloginService, private memory:MemoryService, private route: Router) { }

  ngOnInit() {
  }

  loginSubmit(email:string,pwd:string){
    this.patientlogin.login(email, pwd).subscribe((data)=>{
      this.result=data;
      if(this.result!=="0"){
        this.memory.current_patient=this.result;
        console.log("patient in memory"+this.memory.current_patient);
        this.route.navigate(["/patient"])
      }else{

      }
    });
  }


}
