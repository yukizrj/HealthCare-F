import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {MemoryService} from "../../memory.service";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  moduleId: module.id,
})
export class AdminProfileComponent implements OnInit {
  result:string;
  constructor(private adminservice:AdminService, memory:MemoryService) {
  }

  ngOnInit() {
  }
  profileChange(pwd:string){
    this.adminservice.profileChange(pwd).subscribe((data)=>
        {
          this.result=data;

        }
    );
  }


}
