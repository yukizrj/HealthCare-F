import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {MemoryService} from "../../memory.service";
import {Router} from "@angular/router";
import {User} from "../../user.interface";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  moduleId: module.id,
})
export class AdminProfileComponent implements OnInit {
  public user:User
  result:string;
  constructor(private adminservice:AdminService, memory:MemoryService, private route: Router) {
  }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  profileChange(pwd:string){
    this.adminservice.profileChange(pwd).subscribe((data)=>
        {
          this.result=data;

        }
    );
  }


}
