import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../doctor.service";
import {User} from "../../user.interface";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  moduleId: module.id,
})
export class DoctorProfileComponent implements OnInit {
  public user: User;
  result:string;
  constructor(private doctorservice:DoctorService) { }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  profileChange(pwd:string){
    this.doctorservice.profileChange(pwd).subscribe((data)=>
        {
          this.result=data;

        }
    );
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
