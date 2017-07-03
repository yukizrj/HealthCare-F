import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../../memory.service";
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  moduleId: module.id,
})
export class ViewAppointmentComponent implements OnInit {
  pat_id:string;
  result:Array<any>;
  constructor(private memory:MemoryService, private patientservice:PatientService) { }

  ngOnInit() {
    this.pat_id=this.memory.current_patient;
    console.log("pat_id "+this.pat_id);
  }

  view(pat_id){
    this.patientservice.view(this.pat_id).subscribe((data)=>{
      this.result=data;
    })
  }



}
