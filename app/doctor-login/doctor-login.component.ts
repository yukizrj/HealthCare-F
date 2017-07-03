import { Component, OnInit } from '@angular/core';
import {DoctorloginService} from "./doctor-login.service";
import {MemoryService} from "../memory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  moduleId: module.id,
})
export class DoctorLoginComponent implements OnInit {
  result:string;
  constructor(private doctorlogin:DoctorloginService, private memory:MemoryService, private route:Router) { }

  ngOnInit() {
  }

  loginSubmit(license:string,pwd:string){
    this.doctorlogin.login(license, pwd).subscribe((data)=>{
      this.result=data;
      if(this.result!=="0"){
        this.memory.current_doctor=this.result;
        console.log("patient in memory"+this.memory.current_doctor);
        this.route.navigate(["/doctor"])
      }else{

      }
    });
  }

}
