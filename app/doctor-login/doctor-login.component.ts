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
      console.log("Result"+this.result);
      if(this.result!=="0"){
        this.memory.current_doctor=this.result;
        this.memory.current_doctor2=this.result;
        console.log("doctor in memory1"+this.memory.current_doctor);
        console.log("doctor in memory2"+this.memory.current_doctor2);
        this.route.navigate(["/doctors"])
      }else{

      }
    });
  }

}
