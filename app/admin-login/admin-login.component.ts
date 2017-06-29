import { Component, OnInit } from '@angular/core';
import {AdminloginService} from "./adminlogin.service";
import {Router} from "@angular/router";
import {MemoryService} from "../memory.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  moduleId: module.id,
})
export class AdminLoginComponent implements OnInit {

  result:string;
  constructor(private adminloginservice: AdminloginService, private memory:MemoryService, private route: Router) { }

  ngOnInit() {
  }

  loginSubmit(username:string,pwd:string){
    this.adminloginservice.login(username, pwd).subscribe((data)=>{
      this.result=data;
      if(this.result!=="0"){
        this.memory.current_admin=this.result;
        console.log("admin in memory"+this.memory.current_admin);
        this.route.navigate(["/admin"])
      }else{

      }
    });
  }


  methodInsideYourComponent(value:string):void
  {
    alert('Submitted value: ' + value);
  }

}
