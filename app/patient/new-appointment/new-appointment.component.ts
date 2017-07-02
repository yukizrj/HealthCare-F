import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";
import {MemoryService} from "../../memory.service";

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  moduleId: module.id,
})
export class NewAppointmentComponent implements OnInit {

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
          console.log("result"+this.result);

    })
  }


}
