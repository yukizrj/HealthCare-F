import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../doctor.service";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  moduleId: module.id,
})
export class DoctorProfileComponent implements OnInit {

  result:string;
  constructor(private doctorservice:DoctorService) { }

  ngOnInit() {
  }

  profileChange(pwd:string){
    this.doctorservice.profileChange(pwd).subscribe((data)=>
        {
          this.result=data;

        }
    );
  }

}
