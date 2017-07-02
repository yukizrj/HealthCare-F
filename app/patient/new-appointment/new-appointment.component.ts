import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";
import {MemoryService} from "../../memory.service";

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  moduleId: module.id,
})
export class NewAppointmentComponent implements OnInit {
 /* result:{
    "count": number,
    "map": {
      string: [
          {
            "id": number,
            "day": number,
            "begin_time": string,
            "end_time": string
          }
          ]
    },
    "o": {
      "id": null,
      "doctor": null,
      "patient": {
        "id": number,
        "name": string,
        "dob": string,
        "gender": string,
        "email": string,
        "password": string
      },
      "dt": number,
      "day": number
    }
  }*/
 result:Array<any>;
  id:string;
  constructor(private patientservice:PatientService, private memory:MemoryService) { }

  ngOnInit() {
  }

  searchDoctor(dt,spec){
    this.id=this.memory.current_patient;
    console.log("id is"+this.id);
    this.patientservice.searchDoctor(dt,spec,this.id).subscribe((data)=>{
          this.result=data;
          
    })
  }


}
